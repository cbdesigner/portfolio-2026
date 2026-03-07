"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/i18n/LanguageContext";

/* ── Inner form (needs Suspense for useSearchParams) ──────────── */
function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme, toggleTheme } = useTheme();
  const { t, locale, setLocale } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const from = searchParams.get("from") || "/";
        router.push(from);
        router.refresh();
      } else {
        const data = await res.json();
        if (res.status === 429) {
          setError(t.login.rateLimited);
        } else {
          setError(data.error === "Invalid password" ? t.login.error : data.error);
        }
      }
    } catch {
      setError(t.login.connectionError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8 theme-transition">
      {/* Top-right controls */}
      <div className="fixed top-6 right-8 flex items-center gap-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <button
          onClick={() => setLocale(locale === "en" ? "es" : "en")}
          className="font-mono text-xs px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors lang-switcher"
          aria-label="Switch language"
        >
          {locale === "en" ? "ES" : "EN"}
        </button>
      </div>

      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-display-md tracking-display text-[var(--color-text-primary)]">
            CB
          </h1>
          <p className="text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mt-2 font-mono">
            {t.login.title}
          </p>
        </div>

        {/* Welcome message */}
        <p className="text-center text-body-md text-[var(--color-text-secondary)] leading-relaxed mb-10">
          {t.login.welcome}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8" autoComplete="off">
          <div>
            <label
              htmlFor="password"
              className="block text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-3 font-mono"
            >
              {t.login.password}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              disabled={loading}
              autoComplete="new-password"
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors theme-transition"
              placeholder={t.login.placeholder}
            />
          </div>

          {error && (
            <p className="text-caption text-red-500 font-mono">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-ghost py-4 text-sm font-medium tracking-editorial uppercase disabled:opacity-50"
          >
            {loading ? t.login.submitting : t.login.submit}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── Page export with Suspense boundary ───────────────────────── */
export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
