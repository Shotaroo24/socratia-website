// Clerk publishable keys encode the Frontend API host as base64:
// `pk_{test|live}_{base64(host + "$")}`. Decoding it lets callers target
// whichever Clerk instance is active (dev sandbox or a production custom
// domain) without hardcoding one. Falls back to the dev sandbox host used
// during development if the key is missing or unparseable.
//
// Kept in sync with the equivalent inline helper in next.config.ts (which
// can't import from src/ since it runs before the Next.js module graph
// exists).
export function getClerkFrontendApiHost(): string {
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
