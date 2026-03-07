"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export interface CarouselItem {
  href: string;
  title: string;
  thumbnail: string;
  category: string;
  description: string;
}

interface CarouselSectionProps {
  label: string;
  items: CarouselItem[];
}

const AUTOPLAY_MS = 4500;

export default function CarouselSection({ label, items }: CarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { t } = useLanguage();

  // Low-level: scroll container + sync state + ref
  const goTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ left: index * container.offsetWidth, behavior: "smooth" });
    setCurrentIndex(index);
    currentIndexRef.current = index;
  }, []);

  // Start (or restart) the autoplay timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const next = (currentIndexRef.current + 1) % items.length;
      goTo(next);
    }, AUTOPLAY_MS);
  }, [items.length, goTo]);

  // User-initiated navigation — also resets the countdown
  const scrollTo = useCallback((index: number) => {
    goTo(index);
    startTimer();
  }, [goTo, startTimer]);

  const prev = useCallback(() => {
    if (currentIndexRef.current > 0) scrollTo(currentIndexRef.current - 1);
  }, [scrollTo]);

  const next = useCallback(() => {
    if (currentIndexRef.current < items.length - 1) scrollTo(currentIndexRef.current + 1);
  }, [items.length, scrollTo]);

  // Sync index when user swipes manually
  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const index = Math.round(container.scrollLeft / container.offsetWidth);
    if (index !== currentIndexRef.current) {
      setCurrentIndex(index);
      currentIndexRef.current = index;
      startTimer();
    }
  }, [startTimer]);

  // Boot autoplay on mount, clean up on unmount
  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const pad = (n: number) => String(n).padStart(2, "0");
  const current = items[currentIndex];

  return (
    <section className="border-t border-[var(--color-border)] theme-transition">

      {/* Category label + counter — sticky under navbar */}
      <div className="sticky top-[64px] z-30 flex items-center justify-between px-8 md:px-16 py-5 bg-[var(--color-surface)] border-b border-[var(--color-border)] theme-transition">
        <span className="text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)]">
          {label}
        </span>
        <span className="font-mono text-caption text-[var(--color-text-tertiary)]">
          {pad(currentIndex + 1)} / {pad(items.length)}
        </span>
      </div>

      {/* Hidden scroll container for autoplay index tracking */}
      <div
        ref={scrollRef}
        className="hidden"
        onScroll={handleScroll}
      >
        {items.map((item) => (
          <div key={item.href} className="flex-none w-full" />
        ))}
      </div>

      {/* Dash indicators + arrows */}
      <div className="flex items-center justify-between px-8 md:px-16 py-4">
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-[2px] overflow-hidden transition-colors"
              style={{
                width: i === currentIndex ? 32 : 16,
                backgroundColor: i === currentIndex
                  ? "var(--color-text-primary)"
                  : "var(--color-border)",
              }}
            >
              {i === currentIndex && (
                <span
                  key={currentIndex}
                  className="absolute inset-y-0 left-0 bg-[var(--color-text-primary)]"
                  style={{
                    animation: `dash-fill ${AUTOPLAY_MS}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="flex items-center justify-center w-8 h-8 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] disabled:opacity-20 transition-colors"
            aria-label="Previous"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={currentIndex === items.length - 1}
            className="flex items-center justify-center w-8 h-8 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] disabled:opacity-20 transition-colors"
            aria-label="Next"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Info row — two columns, animates on slide change */}
      <div
        key={currentIndex}
        className="slide-info-enter px-8 md:px-16 pt-7 pb-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16"
      >
        {/* Left: title + category */}
        <div>
          <h3 className="font-heading text-display-md tracking-display text-[var(--color-text-primary)] mb-2 leading-tight">
            {current.title}
          </h3>
          <p className="text-caption uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mt-3">
            {current.category}
          </p>
        </div>

        {/* Right: description + link */}
        <div className="flex flex-col justify-between gap-6">
          <p className="text-body-md text-[var(--color-text-secondary)] leading-relaxed">
            {current.description}
          </p>
          <Link
            href={current.href}
            className="inline-flex items-center gap-2 text-caption uppercase tracking-widest-caps text-[var(--color-text-primary)] link-underline self-start group"
          >
            {t.viewProject}
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

    </section>
  );
}
