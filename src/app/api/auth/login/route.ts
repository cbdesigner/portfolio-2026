import { NextRequest, NextResponse } from "next/server";
import { scryptSync, timingSafeEqual, createHmac } from "crypto";

const COOKIE_NAME = "session_token";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days

/* ── Simple in-memory rate limiter ────────────────────────────── */
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = attempts.get(ip);
  if (!rec || now > rec.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  rec.count++;
  return rec.count > MAX_ATTEMPTS;
}

/* ── POST /api/auth/login ─────────────────────────────────────── */
export async function POST(request: NextRequest) {
  // Rate limit by IP (Render uses x-forwarded-for)
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again later." },
      { status: 429 },
    );
  }

  // Parse body
  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { password } = body;
  if (!password || typeof password !== "string") {
    return NextResponse.json({ error: "Password required" }, { status: 400 });
  }

  // Verify password with scrypt + timingSafeEqual
  const storedHash = process.env.AUTH_PASSWORD_HASH;
  const secret = process.env.AUTH_SECRET;
  if (!storedHash || !secret) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  const [salt, hash] = storedHash.split(":");
  const inputHash = scryptSync(password, salt, 64);
  const storedBuffer = Buffer.from(hash, "hex");

  let valid = false;
  if (inputHash.length === storedBuffer.length) {
    valid = timingSafeEqual(inputHash, storedBuffer);
  }

  if (!valid) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  // Create session token: timestamp.hmac
  const timestamp = Date.now().toString();
  const hmac = createHmac("sha256", secret).update(timestamp).digest("hex");
  const token = `${timestamp}.${hmac}`;

  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });

  return response;
}
