"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function FeaturedInterviewCard() {
  const { t } = useLanguage();

  return (
    <Link href="/interview">
      <div className="group flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
        {/* Top: badge + title */}
        <div>
          <p className="text-xs font-medium text-[var(--color-text-secondary)] tracking-widest uppercase mb-3 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            {t.featuredInterview.badge}
          </p>
          <h3 className="font-heading text-body-lg text-[var(--color-text-primary)] leading-snug mb-3">
            {t.featuredInterview.title}
          </h3>
          <p className="text-body-md text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
            {t.featuredInterview.description}
          </p>
        </div>

        {/* Bottom: category + arrow */}
        <div className="mt-6">
          <span className="inline-flex items-center gap-2 text-caption uppercase tracking-widest-caps text-[var(--color-text-primary)] group-hover:gap-3 transition-all duration-300">
            {t.featuredInterview.cta}
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
