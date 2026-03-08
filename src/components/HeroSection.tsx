"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import AsciiImage from "@/components/AsciiImage";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* ASCII background layer */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none select-none">
        <AsciiImage
          src="/images/hero-bg.png"
          alt=""
        />
      </div>

      {/* Gradient fade at top and bottom so ASCII blends into surface */}
      <div className="absolute inset-x-0 top-0 h-32 z-[1] bg-gradient-to-b from-[var(--color-surface)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 z-[1] bg-gradient-to-t from-[var(--color-surface)] to-transparent" />

      {/* Text content */}
      <div className="relative z-10 text-center px-8 md:px-16 mx-auto">
        <h1 className="font-heading text-display-xl tracking-tightest text-balance text-[var(--color-text-primary)]">
          {t.hero.title}
        </h1>
        <p className="text-body-lg text-[var(--color-text-secondary)] mx-auto mt-8 leading-relaxed">
          {t.hero.description}
        </p>
        <div className="mt-12 opacity-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto text-[var(--color-text-tertiary)]"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
