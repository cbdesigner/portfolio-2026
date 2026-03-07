"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface AsciiImageProps {
  src: string;
  alt: string;
}

const ASCII_CHARS = " .:-=+*#%@";
const CHAR_ASPECT = 0.6; // monospace char width/height ratio

export default function AsciiImage({ src, alt }: AsciiImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ascii, setAscii] = useState<string>("");
  const [fontSize, setFontSize] = useState<number>(6);
  const [loading, setLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const generate = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const img = imgRef.current;
    if (!img || !img.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const containerWidth = container.offsetWidth;

    // Each char cell: width = fontSize * CHAR_ASPECT, height = fontSize * lineHeight
    // We want cols * charWidth = containerWidth
    // Try a range of font sizes and pick the one that gives best detail
    // Target: ~150-250 cols for good detail
    const targetCols = Math.min(250, Math.max(100, Math.floor(containerWidth / 4)));
    const charWidth = containerWidth / targetCols;
    const fs = charWidth / CHAR_ASPECT;
    const cols = targetCols;

    const imgAspect = img.naturalHeight / img.naturalWidth;
    // rows = cols * imgAspect * (charWidth / charHeight)
    // charHeight = fs * lineHeight(1.15), charWidth = fs * CHAR_ASPECT
    const charHeight = fs * 1.15;
    const rows = Math.floor((containerWidth * imgAspect) / charHeight);

    canvas.width = cols;
    canvas.height = rows;

    ctx.drawImage(img, 0, 0, cols, rows);
    const imageData = ctx.getImageData(0, 0, cols, rows);
    const { data } = imageData;

    let result = "";
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
        const charIndex = Math.floor(
          (brightness / 255) * (ASCII_CHARS.length - 1)
        );
        result += ASCII_CHARS[charIndex];
      }
      result += "\n";
    }

    setAscii(result);
    setFontSize(fs);
    setLoading(false);
  }, []);

  // Load image once
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      imgRef.current = img;
      generate();
    };
    img.onerror = () => {
      setAscii("[ Failed to load image ]");
      setLoading(false);
    };
    img.src = src;
  }, [src, generate]);

  // Regenerate on resize
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (imgRef.current) generate();
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [generate]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      role="img"
      aria-label={alt}
    >
      <canvas ref={canvasRef} className="hidden" />

      {loading ? (
        <div className="w-full aspect-video flex items-center justify-center border border-[var(--color-border)]">
          <span className="text-[var(--color-text-tertiary)] font-mono text-sm animate-pulse">
            Generating ASCII...
          </span>
        </div>
      ) : (
        <pre
          className="font-mono text-[var(--color-text-secondary)] leading-none whitespace-pre w-full"
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: "1.15",
            letterSpacing: "0",
            overflowX: "hidden",
          }}
        >
          {ascii}
        </pre>
      )}
    </div>
  );
}
