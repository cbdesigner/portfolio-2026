#!/usr/bin/env node
/**
 * Generate AUTH_PASSWORD_HASH and AUTH_SECRET for portfolio login.
 *
 * Usage:
 *   node scripts/generate-hash.mjs "your-password"
 *
 * Output goes to stdout — copy into .env.local and Render env vars.
 */
import { scryptSync, randomBytes } from "node:crypto";

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/generate-hash.mjs "your-password"');
  process.exit(1);
}

// 32-byte random salt + scrypt with 64-byte output
const salt = randomBytes(32).toString("hex");
const hash = scryptSync(password, salt, 64).toString("hex");

// Session signing secret
const secret = randomBytes(32).toString("hex");

console.log("\nAdd these to your .env.local (and Render env vars):\n");
console.log(`AUTH_PASSWORD_HASH=${salt}:${hash}`);
console.log(`AUTH_SECRET=${secret}`);
console.log();
