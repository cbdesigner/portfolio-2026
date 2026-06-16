"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";

type ActiveImage = { src: string; alt: string };
type HoverCta = { src: string; alt: string; top: number; left: number };

/** A content image inside <main> that is eligible for zooming. */
function isEligible(img: HTMLImageElement | null): img is HTMLImageElement {
  if (!img) return false;
  if (!img.closest("main")) return false; // content only
  if (img.closest("a, button")) return false; // not project cards / clickable
  if (img.closest("[data-no-zoom]")) return false; // explicit opt-out
  if (img.clientWidth < 64 || img.clientHeight < 64) return false; // skip icons
  return true;
}

/**
 * Global image lightbox + "Ampliar" CTA.
 *
 * Mounted once in the root layout. Two ways to open the enlarged modal:
 *  - Click any eligible content image inside <main>.
 *  - Click the floating "Ampliar" button that appears over the hovered image.
 *
 * Uses event delegation so all case-study images are covered with no
 * per-image changes.
 */
export default function ImageLightbox() {
  const [active, setActive] = useState<ActiveImage | null>(null);
  const [cta, setCta] = useState<HoverCta | null>(null);

  // The image the CTA currently belongs to, plus a hide timer.
  const hoveredImg = useRef<HTMLImageElement | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const positionFor = (img: HTMLImageElement): Omit<HoverCta, "src" | "alt"> => {
    const r = img.getBoundingClientRect();
    return { top: r.top + 12, left: r.right - 12 };
  };

  const showCtaFor = useCallback((img: HTMLImageElement) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hoveredImg.current = img;
    setCta({ src: img.currentSrc || img.src, alt: img.alt || "", ...positionFor(img) });
  }, []);

  const scheduleHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      hoveredImg.current = null;
      setCta(null);
    }, 140);
  }, []);

  // Open via clicks on content images.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const img = (e.target as HTMLElement | null)?.closest("img") as HTMLImageElement | null;
      if (!isEligible(img)) return;
      e.preventDefault();
      setActive({ src: img.currentSrc || img.src, alt: img.alt || "" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Show/track the floating CTA on hover.
  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // Keep the CTA alive while hovering the button itself.
      if (target.closest("[data-zoom-cta]")) {
        if (hideTimer.current) clearTimeout(hideTimer.current);
        return;
      }
      const img = target.closest("img") as HTMLImageElement | null;
      if (isEligible(img)) showCtaFor(img);
      else scheduleHide();
    };

    const reposition = () => {
      const img = hoveredImg.current;
      if (!img) return;
      const r = img.getBoundingClientRect();
      // Hide once the image leaves the viewport.
      if (r.bottom < 0 || r.top > window.innerHeight) {
        hoveredImg.current = null;
        setCta(null);
        return;
      }
      setCta((c) => (c ? { ...c, ...positionFor(img) } : c));
    };

    document.addEventListener("mouseover", onOver);
    window.addEventListener("scroll", reposition, { passive: true });
    window.addEventListener("resize", reposition);
    return () => {
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("scroll", reposition);
      window.removeEventListener("resize", reposition);
    };
  }, [showCtaFor, scheduleHide]);

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

  const openFromCta = () => {
    if (!cta) return;
    setActive({ src: cta.src, alt: cta.alt });
    setCta(null);
    hoveredImg.current = null;
  };

  return (
    <>
      {/* Floating "Ampliar" CTA over the hovered image */}
      <AnimatePresence>
        {cta && !active && (
          <motion.button
            type="button"
            data-zoom-cta
            onClick={openFromCta}
            onMouseEnter={() => hideTimer.current && clearTimeout(hideTimer.current)}
            onMouseLeave={scheduleHide}
            aria-label="Ampliar imagen"
            className="fixed z-[60] flex -translate-x-full items-center gap-1.5 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/80"
            style={{ top: cta.top, left: cta.left }}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
          >
            <Maximize2 className="h-3.5 w-3.5" />
            Ampliar
          </motion.button>
        )}
      </AnimatePresence>

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
