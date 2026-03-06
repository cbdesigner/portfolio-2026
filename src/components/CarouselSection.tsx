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

      {/* Full-bleed image strip */}
      <div className="relative">

        {/* Scroll container — no side padding for edge-to-edge images */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => {
            const isSvg = item.thumbnail.endsWith(".svg");
            return (
              <div key={item.href} className="snap-start flex-none w-full">
                <Link
                  href={item.href}
                  className="group relative block aspect-[16/10] overflow-hidden bg-[var(--color-card-bg)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-editorial group-hover:scale-105 ${
                      isSvg ? "object-contain p-8" : "object-cover"
                    }`}
                  />
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Dash indicators — overlaid at bottom-left */}
        <div className="absolute bottom-5 left-8 md:left-16 flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-px overflow-hidden bg-white/30 hover:bg-white/50 transition-colors"
              style={{ width: i === currentIndex ? 32 : 16 }}
            >
              {/* Animated fill for active dash */}
              {i === currentIndex && (
                <span
                  key={currentIndex}
                  className="absolute inset-y-0 left-0 bg-white"
                  style={{
                    animation: `dash-fill ${AUTOPLAY_MS}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Prev arrow */}
        {currentIndex > 0 && (
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
            aria-label="Previous"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        {/* Next arrow */}
        {currentIndex < items.length - 1 && (
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
            aria-label="Next"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
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
