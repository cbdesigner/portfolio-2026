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
        "[data-simplified-cv-pdf]"
      ) as HTMLElement | null;
      if (!element) {
        console.error("PDF content container not found");
        return;
      }

      // Read current theme background for canvas
      const bgColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-surface")
        .trim();

      // Wait for fonts to be fully loaded
      await document.fonts.ready;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (html2pdf() as any)
        .set({
          margin: [5, 5, 5, 5],
          filename: "Carlos_Baeza_CV.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: bgColor || "#ffffff",
            logging: false,
            windowWidth: 800,
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },
        })
        .from(element)
        .save();
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  }, [isGenerating]);

  return { downloadPdf, isGenerating };
}
