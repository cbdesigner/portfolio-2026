"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface AsciiImageProps {
  src: string;
  alt: string;
  colorOnHover?: boolean;
}

const ASCII_CHARS = " .:-=+*#%@";
const CHAR_ASPECT = 0.6; // monospace char width/height ratio

export default function AsciiImage({ src, alt, colorOnHover = false }: AsciiImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ascii, setAscii] = useState<string>("");
  const [colorHtml, setColorHtml] = useState<string>("");
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

    const targetCols = Math.min(250, Math.max(100, Math.floor(containerWidth / 4)));
    const charWidth = containerWidth / targetCols;
    const fs = charWidth / CHAR_ASPECT;
    const cols = targetCols;

    const imgAspect = img.naturalHeight / img.naturalWidth;
    const charHeight = fs * 1.15;
    const rows = Math.floor((containerWidth * imgAspect) / charHeight);

    canvas.width = cols;
    canvas.height = rows;

    ctx.drawImage(img, 0, 0, cols, rows);
    const imageData = ctx.getImageData(0, 0, cols, rows);
    const { data } = imageData;

    let mono = "";
    // Build colored HTML only when colorOnHover is enabled
    const colorParts: string[] = colorOnHover ? [] : [];
    const buildColor = colorOnHover;

    for (let y = 0; y < rows; y++) {
      if (buildColor) colorParts.push('<span class="ascii-row">');
      for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
        const charIndex = Math.floor(
          (brightness / 255) * (ASCII_CHARS.length - 1)
        );
        const ch = ASCII_CHARS[charIndex];
        mono += ch;

        if (buildColor && ch !== " ") {
          colorParts.push(
            `<span style="color:rgb(${r},${g},${b})">${ch === "<" ? "&lt;" : ch === "&" ? "&amp;" : ch}</span>`
          );
        } else if (buildColor) {
          colorParts.push(" ");
        }
      }
      mono += "\n";
      if (buildColor) colorParts.push("</span>\n");
    }

    setAscii(mono);
    if (buildColor) setColorHtml(colorParts.join(""));
    setFontSize(fs);
    setLoading(false);
  }, [colorOnHover]);

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

  const preStyle = {
    fontSize: `${fontSize}px`,
    lineHeight: "1.15",
    letterSpacing: "0",
    overflowX: "hidden" as const,
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden${colorOnHover ? " group" : ""}`}
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
      ) : colorOnHover ? (
        <>
          {/* Monochrome layer — visible by default, fades on hover */}
          <pre
            className="font-mono text-[var(--color-text-secondary)] leading-none whitespace-pre w-full transition-opacity duration-500 group-hover:opacity-0"
            style={preStyle}
          >
            {ascii}
          </pre>
          {/* Color layer — hidden by default, appears on hover */}
          <pre
            className="font-mono leading-none whitespace-pre w-full absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={preStyle}
            dangerouslySetInnerHTML={{ __html: colorHtml }}
          />
        </>
      ) : (
        <pre
          className="font-mono text-[var(--color-text-secondary)] leading-none whitespace-pre w-full"
          style={preStyle}
        >
          {ascii}
        </pre>
      )}
    </div>
  );
}
