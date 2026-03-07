import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "session_token";
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/* ── Public paths that skip auth ──────────────────────────────── */
const PUBLIC_EXACT = new Set(["/login"]);
const PUBLIC_PREFIXES = [
  "/api/auth",
  "/_next",
  "/images",
  "/opengraph-image",
  "/twitter-image",
  "/icon",
];

function isPublic(pathname: string): boolean {
  if (PUBLIC_EXACT.has(pathname)) return true;
  if (PUBLIC_PREFIXES.some((p) => pathname.startsWith(p))) return true;
  // Static file extensions
  if (/\.(svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|eot)$/.test(pathname))
    return true;
  return false;
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

  if (isPublic(pathname)) return NextResponse.next();

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
