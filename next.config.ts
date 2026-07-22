import type { NextConfig } from "next";

// Clerk publishable keys encode the Frontend API host as base64:
// `pk_{test|live}_{base64(host + "$")}`. Decoding it lets the CSP track
// whichever Clerk instance is active (dev sandbox or a production custom
// domain) without hardcoding one. Falls back to the dev sandbox host used
// during development if the key is missing or unparseable.
function getClerkFrontendApiHost(): string {
  const fallback = "grown-dogfish-64.clerk.accounts.dev";
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!key) return fallback;
  const encoded = key.split("_").pop();
  if (!encoded) return fallback;
  try {
    return Buffer.from(encoded, "base64").toString("utf-8").replace(/\$$/, "") || fallback;
  } catch {
    return fallback;
  }
}

const clerkFapi = getClerkFrontendApiHost();

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://${clerkFapi} https://challenges.cloudflare.com`,
  `connect-src 'self' https://${clerkFapi} https://challenges.cloudflare.com https://clerk-telemetry.com`,
  "img-src 'self' https://img.clerk.com data:",
  "worker-src 'self' blob:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  `frame-src 'self' https://challenges.cloudflare.com https://iframe.mediadelivery.net`,
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
];

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: cspDirectives.join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
