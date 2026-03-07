"use client";

import { useState, useCallback } from "react";

export function useProfilePdf() {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPdf = useCallback(async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    try {
      // Dynamic import — only loaded when user clicks (~200KB)
      const html2pdf = (await import("html2pdf.js")).default;

      const element = document.querySelector(
        "[data-pdf-content]"
      ) as HTMLElement | null;
      if (!element) {
        console.error("PDF content container not found");
        return;
      }

      // Read current theme background for canvas
      const bgColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-surface")
        .trim();

      // Toggle PDF mode — triggers CSS rules to hide buttons, etc.
      element.classList.add("pdf-generating");

      // Force all scroll-reveal elements to be visible
      const revealEls = element.querySelectorAll(".reveal:not(.revealed)");
      revealEls.forEach((el) => el.classList.add("revealed"));

      // Wait for fonts to be fully loaded
      await document.fonts.ready;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (html2pdf() as any)
        .set({
          margin: [10, 10, 10, 10],
          filename: "Carlos_Baeza_CV.pdf",
          image: { type: "jpeg", quality: 0.95 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: bgColor || "#0a0a0a",
            logging: false,
            windowWidth: 1280,
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },
          pagebreak: {
            mode: ["avoid-all", "css", "legacy"],
            avoid: ["section", ".pdf-no-break"],
          },
        })
        .from(element)
        .save();

      // Clean up
      element.classList.remove("pdf-generating");
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  }, [isGenerating]);

  return { downloadPdf, isGenerating };
}
