import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// ── Zod schema ────────────────────────────────────────────────────────────────

const applySchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().min(1).max(30),
  age: z.coerce.number().min(13).max(100),
  occupation: z.string().min(1).max(200),
  country: z.string().min(1).max(100),
  howDidYouHear: z.enum([
    "Instagram",
    "TikTok",
    "Facebook",
    "YouTube",
    "Google Search",
    "Friend / Family",
    "Other",
  ]),
  preferredDateTime: z.string().min(1).max(500),
  website: z.string().optional(), // honeypot
});

// ── Rate limiting (in-memory) ─────────────────────────────────────────────────
// TODO: 本番環境では @upstash/ratelimit + @upstash/redis に置き換え推奨。
//       in-memoryはサーバー再起動でリセットされ、複数インスタンス環境では効かない。

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

type RateLimitEntry = { count: number; windowStart: number };
const rateLimitMap = new Map<string, RateLimitEntry>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// ── Helper: get client IP ────────────────────────────────────────────────────

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

// ── Email body ───────────────────────────────────────────────────────────────

function buildEmailText(data: z.infer<typeof applySchema>): string {
  return [
    "New Trial Lesson Application",
    "=".repeat(40),
    "",
    `Name:                ${data.firstName} ${data.lastName}`,
    `Email:               ${data.email}`,
    `Phone:               ${data.phone}`,
    `Age:                 ${data.age}`,
    `Occupation:          ${data.occupation}`,
    `Country:             ${data.country}`,
    `How they heard:      ${data.howDidYouHear}`,
    "",
    "Preferred Date & Time:",
    data.preferredDateTime,
    "",
    "=".repeat(40),
    "Socratia Academy — auto-generated email",
  ].join("\n");
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. Origin check (CSRF)
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host) {
    try {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  // 2. Rate limiting
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // 3. Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // 4. Honeypot check — silently succeed without sending email
  if (
    body &&
    typeof body === "object" &&
    "website" in body &&
    (body as Record<string, unknown>).website
  ) {
    return NextResponse.json({ ok: true });
  }

  // 5. Zod validation
  const parsed = applySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // 6. Send email via Resend
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[apply] RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Socratia Academy <onboarding@resend.dev>",
    to: "info@socratiaacademy.com",
    subject: `New Trial Lesson Application from ${data.firstName} ${data.lastName}`,
    text: buildEmailText(data),
  });

  if (error) {
    console.error("[apply] Resend error:", error.message);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }

  // 7. Success
  return NextResponse.json({ ok: true });
}
