import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "session_token";
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

async function verifyToken(token: string, secret: string): Promise<boolean> {
  const dot = token.indexOf(".");
  if (dot === -1) return false;

  const timestamp = token.slice(0, dot);
  const hmac = token.slice(dot + 1);
  const ts = parseInt(timestamp, 10);
  if (isNaN(ts)) return false;

  if (Date.now() - ts > SESSION_MAX_AGE_MS) return false;

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

  if (hmac.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < hmac.length; i++) {
    diff |= hmac.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  const secret = process.env.AUTH_SECRET;

  if (!token || !secret) {
    return NextResponse.json({ authenticated: false });
  }

  const authenticated = await verifyToken(token, secret);
  return NextResponse.json({ authenticated });
}
