"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";

type ActiveImage = { src: string; alt: string };
type CtaItem = { key: number; src: string; alt: string; top: number; left: number };

const HEADER_OFFSET = 96; // keep CTA below the fixed navbar

/** A content image inside <main> that is eligible for zooming. */
function isEligible(img: HTMLImageElement): boolean {
  if (!img.closest("main")) return false; // content only
  if (img.closest("a, button")) return false; // not project cards / clickable
  if (img.closest("[data-no-zoom]")) return false; // explicit opt-out
  const r = img.getBoundingClientRect();
  if (r.width < 64 || r.height < 64) return false; // skip icons / unloaded
  return true;
}

/**
 * Global image lightbox with an always-visible "Ampliar" CTA.
 *
 * Mounted once in the root layout. A small "Ampliar" button is pinned to the
 * top-right of every content image inside <main> (clamped to the viewport so
 * it stays visible on tall images and without hover, e.g. touch). Clicking the
 * button — or the image itself — opens the enlarged modal.
 */
export default function ImageLightbox() {
  const [active, setActive] = useState<ActiveImage | null>(null);
  const [items, setItems] = useState<CtaItem[]>([]);

  // ── Re-scan eligible images and keep CTA positions in sync ────────────
  useEffect(() => {
    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const recompute = () => {
      if (raf) cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
      raf = 0;
      timer = null;

      const vh = window.innerHeight;
      const next: CtaItem[] = [];
      document.querySelectorAll<HTMLImageElement>("main img").forEach((el, i) => {
        if (!isEligible(el)) return;
        const r = el.getBoundingClientRect();
        // Only while the image is within the viewport.
        if (r.bottom <= HEADER_OFFSET + 24 || r.top >= vh - 8) return;
        const top = Math.min(Math.max(r.top + 12, HEADER_OFFSET + 12), r.bottom - 44);
        const left = r.right - 12;
        next.push({ key: i, src: el.currentSrc || el.src, alt: el.alt || "", top, left });
      });
      setItems(next);
    };

    // Schedule via rAF, with a setTimeout fallback (rAF is paused in
    // background tabs, which would otherwise stall updates).
    const schedule = () => {
      if (raf || timer) return;
      raf = requestAnimationFrame(recompute);
      timer = setTimeout(recompute, 200);
    };

    recompute(); // initial, synchronous

    const main = document.querySelector("main");
    const mo = new MutationObserver(schedule);
    if (main) mo.observe(main, { childList: true, subtree: true });

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("load", schedule, true); // capture img load events

    // Catch late layout (fonts, lazy images settling in).
    const t1 = setTimeout(recompute, 400);
    const t2 = setTimeout(recompute, 1200);

    return () => {
      mo.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("load", schedule, true);
      if (raf) cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // ── Open via clicks on the image itself ───────────────────────────────
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const img = (e.target as HTMLElement | null)?.closest("img") as HTMLImageElement | null;
      if (!img || !isEligible(img)) return;
      e.preventDefault();
      setActive({ src: img.currentSrc || img.src, alt: img.alt || "" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const close = useCallback(() => setActive(null), []);

  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close]);

  return (
    <>
      {/* Always-visible "Ampliar" CTA pinned to each content image */}
      {!active &&
        items.map((it) => (
          <button
            key={it.key}
            type="button"
            onClick={() => setActive({ src: it.src, alt: it.alt })}
            aria-label="Ampliar imagen"
            className="fixed z-[60] flex -translate-x-full items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white opacity-90 backdrop-blur-sm transition-all hover:bg-black/80 hover:opacity-100"
            style={{ top: it.top, left: it.left }}
          >
            <Maximize2 className="h-3.5 w-3.5" />
            Ampliar
          </button>
        ))}

      {/* Enlarged modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            style={{ backgroundColor: "var(--color-overlay)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt || "Imagen ampliada"}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute top-4 right-4 z-[101] flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.figure
              className="relative flex max-h-full max-w-5xl flex-col items-center gap-3"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
              {active.alt && (
                <figcaption className="max-w-2xl text-center text-sm text-white/70">
                  {active.alt}
                </figcaption>
              )}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
