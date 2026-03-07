"use client";

import { useEffect, useRef, useState } from "react";

interface AsciiImageProps {
  src: string;
  alt: string;
  cols?: number;
}

const ASCII_CHARS = " .:-=+*#%@";

export default function AsciiImage({ src, alt, cols = 120 }: AsciiImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ascii, setAscii] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const aspect = img.height / img.width;
      // Character cells are ~2x taller than wide, compensate
      const rows = Math.floor(cols * aspect * 0.45);

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
          // Luminance
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
          const charIndex = Math.floor(
            (brightness / 255) * (ASCII_CHARS.length - 1)
          );
          result += ASCII_CHARS[charIndex];
        }
        result += "\n";
      }

      setAscii(result);
      setLoading(false);
    };

    img.onerror = () => {
      setAscii("[ Failed to load image ]");
      setLoading(false);
    };

    img.src = src;
  }, [src, cols]);

  return (
    <div className="relative w-full overflow-hidden" role="img" aria-label={alt}>
      {/* Hidden canvas for pixel processing */}
      <canvas ref={canvasRef} className="hidden" />

      {loading ? (
        <div className="w-full aspect-video flex items-center justify-center border border-[var(--color-border)]">
          <span className="text-[var(--color-text-tertiary)] font-mono text-sm animate-pulse">
            Generating ASCII...
          </span>
        </div>
      ) : (
        <pre
          className="font-mono text-[var(--color-text-secondary)] leading-none overflow-x-auto whitespace-pre"
          style={{
            fontSize: "clamp(3px, 0.55vw, 7px)",
            lineHeight: "1.1",
            letterSpacing: "0.05em",
          }}
        >
          {ascii}
        </pre>
      )}
    </div>
  );
}
