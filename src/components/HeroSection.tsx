"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import AsciiImage from "@/components/AsciiImage";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* ASCII background layer */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none select-none">
        <AsciiImage
          src="/images/hero-bg.png"
          alt=""
          colorOnHover
        />
      </div>

      {/* Gradient fade at top and bottom so ASCII blends into surface */}
      <div className="absolute inset-x-0 top-0 h-32 z-[1] bg-gradient-to-b from-[var(--color-surface)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 z-[1] bg-gradient-to-t from-[var(--color-surface)] to-transparent" />

      {/* Text content */}
      <div className="relative z-10 text-center px-8 md:px-16 mx-auto max-w-5xl">
        <h1 className="font-heading text-display-xl tracking-tightest text-balance text-[var(--color-text-primary)]">
          {t.hero.title}
        </h1>
        <p className="text-body-lg text-[var(--color-text-secondary)] mx-auto mt-8 leading-relaxed">
          {t.hero.description}
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 mt-12 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-tertiary)] transition-colors duration-300"
        >
          <span className="text-sm font-medium tracking-wide uppercase">
            {t.hero.cta ?? "View Projects"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
