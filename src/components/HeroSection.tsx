"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import ParticleCanvas from "./ParticleCanvas";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[var(--color-bg-primary)]">
      {/* 3D Particle background */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

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
