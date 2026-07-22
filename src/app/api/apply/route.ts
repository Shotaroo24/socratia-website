import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { applySchema } from "@/lib/validation/apply";
import type { ApplyData } from "@/lib/validation/apply";

// ── Rate limiting (in-memory) ─────────────────────────────────────────────────

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

type RateLimitEntry = { count: number; windowStart: number };
// NOTE: This in-memory rate limiter is best-effort only.
// On serverless (Vercel), each invocation may run in a separate instance,
// so this Map is not shared across requests and the limit is not reliably enforced.
// The primary abuse defenses are the Origin check, honeypot, and Zod validation above.
// For robust distributed rate limiting, migrate to Upstash Redis (@upstash/ratelimit).
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

// ── Helper: get client IP ─────────────────────────────────────────────────────
// x-real-ip is set by Vercel and reflects the true client IP.
// x-forwarded-for is NOT used here as it can be spoofed by the client.

function getClientIp(req: NextRequest): string {
  return req.headers.get("x-real-ip") ?? "unknown";
}

// ── Email body ────────────────────────────────────────────────────────────────

function buildEmailText(data: ApplyData): string {
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

const SEND_TIMEOUT_MS = 10_000;

export async function POST(req: NextRequest) {
  // 1. Origin check (CSRF) — fail-closed: missing or mismatched origin → 403
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  // Allow requests without an origin only from localhost (dev server)
  const isLocalhost = host?.startsWith("localhost") || host?.startsWith("127.0.0.1");
  if (!origin && !isLocalhost) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  if (origin) {
    try {
      const originHost = new URL(origin).host;
      if (!host || originHost !== host) {
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
  const fromAddress = process.env.RESEND_FROM ?? "Socratia Academy <onboarding@resend.dev>";

  let sendResult: { data: unknown; error: { message: string } | null };
  try {
    const sendPromise = resend.emails.send({
      from: fromAddress,
      to: "info@socratiaacademy.com",
      subject: `New Trial Lesson Application from ${data.firstName} ${data.lastName}`,
      text: buildEmailText(data),
    });
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Email send timed out")), SEND_TIMEOUT_MS)
    );
    sendResult = await Promise.race([sendPromise, timeoutPromise]);
  } catch (err) {
    const logId = crypto.randomUUID();
    console.error(`[apply][${logId}] Email send failed:`, err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }

  if (sendResult.error) {
    const logId = crypto.randomUUID();
    console.error(`[apply][${logId}] Resend error:`, sendResult.error.message);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }

  // 7. Success
  return NextResponse.json({ ok: true });
}
