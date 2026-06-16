"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ActiveImage = { src: string; alt: string };

/**
 * Global image lightbox.
 *
 * Mounted once in the root layout. Uses event delegation: any content image
 * inside <main> opens an enlarged modal on click. Images inside links or
 * buttons (e.g. project cards), tiny icons, or anything marked with
 * `data-no-zoom` are ignored.
 */
export default function ImageLightbox() {
  const [active, setActive] = useState<ActiveImage | null>(null);

  // Open via delegated clicks on content images.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const img = target.closest("img") as HTMLImageElement | null;
      if (!img) return;

      // Only content images inside <main>.
      if (!img.closest("main")) return;
      // Skip clickable contexts (project cards, etc.).
      if (img.closest("a, button")) return;
      // Explicit opt-out.
      if (img.closest("[data-no-zoom]")) return;
      // Skip small images (icons, avatars).
      if (img.clientWidth < 64 || img.clientHeight < 64) return;

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
  );
}
