import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";
import { applySchema } from "@/lib/validation/apply";
import type { ApplyData } from "@/lib/validation/apply";

// ── Rate limiting (Upstash Redis) ─────────────────────────────────────────────
// Sliding window: 3 requests per minute per IP+endpoint.
// Requires UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN env vars.
// If not configured (e.g. local dev), rate limiting is skipped with a warning.

const ratelimit = (() => {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    console.warn("[apply] Upstash env vars not set — rate limiting is disabled.");
    return null;
  }
  return new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, "1 m"),
    analytics: false,
    prefix: "rl:apply",
  });
})();

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
  if (ratelimit) {
    const ip = getClientIp(req);
    const identifier = `${ip}:apply`;
    const { success } = await ratelimit.limit(identifier);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
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

  let sendResult: { data: unknown; error: { message: string } | null };
  try {
    const sendPromise = resend.emails.send({
      from: "Socratia Academy <onboarding@resend.dev>",
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
