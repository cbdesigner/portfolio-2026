import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "session_token";
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/* ── Known bot User-Agents (SEO + GEO crawlers) ─────────────── */
const KNOWN_BOTS = [
  "googlebot", "bingbot", "slurp", "duckduckbot", "baiduspider", "yandexbot",
  "gptbot", "chatgpt-user", "google-extended", "perplexitybot",
  "claudebot", "claude-web", "anthropic-ai", "applebot",
  "facebookexternalhit", "linkedinbot", "twitterbot",
];

function isKnownBot(ua: string | null): boolean {
  if (!ua) return false;
  const lower = ua.toLowerCase();
  return KNOWN_BOTS.some((bot) => lower.includes(bot));
}

/* ── Private paths that require auth ─────────────────────────── */
/* Projects */
const PRIVATE_PATHS = new Set([
  "/projects",
  "/autonomus",
  "/enel-one-hub",
  "/banco-ripley",
  "/bupa-design-system",
  "/shipbob-design-system",
  /* Methodologies */
  "/my-design-process",
  "/ds-services",
  "/ds-methodology",
  "/ux-strategy",
  /* Design System */
  "/design-system",
  "/design-system-architect",
]);

function isPrivate(pathname: string): boolean {
  return PRIVATE_PATHS.has(pathname);
}

/* ── HMAC-SHA256 verification (Web Crypto — Edge Runtime) ─────── */
async function verifyToken(token: string, secret: string): Promise<boolean> {
  const dot = token.indexOf(".");
  if (dot === -1) return false;

  const timestamp = token.slice(0, dot);
  const hmac = token.slice(dot + 1);
  const ts = parseInt(timestamp, 10);
  if (isNaN(ts)) return false;

  // Expired?
  if (Date.now() - ts > SESSION_MAX_AGE_MS) return false;

  // Compute expected HMAC with Web Crypto
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(timestamp));
  const expected = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Constant-time comparison (Edge lacks timingSafeEqual)
  if (hmac.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < hmac.length; i++) {
    diff |= hmac.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

/* ── Middleware ────────────────────────────────────────────────── */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only check auth on private pages
  if (!isPrivate(pathname)) return NextResponse.next();

  // Allow search engine and AI crawlers through (SEO + GEO)
  if (isKnownBot(request.headers.get("user-agent"))) return NextResponse.next();

  const token = request.cookies.get(COOKIE_NAME)?.value;
  const secret = process.env.AUTH_SECRET;

  if (!token || !secret || !(await verifyToken(token, secret))) {
    const url = new URL("/login", request.url);
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
