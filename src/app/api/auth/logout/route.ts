import { NextResponse } from "next/server";

const COOKIE_NAME = "session_token";

/* ── POST /api/auth/logout ────────────────────────────────────── */
export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0, // expire immediately
    path: "/",
  });
  return response;
}
