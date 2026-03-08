"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type AsciiScene =
  | "strategy"
  | "enterprise"
  | "team"
  | "operations"
  | "experience";

interface GenerativeAsciiProps {
  scene: AsciiScene;
  alt: string;
}

const ASCII_CHARS = " .:-=+*#%@";
const CHAR_ASPECT = 0.6;

/* ── Drawing functions for each scene ───────────────────── */

function drawStrategy(ctx: CanvasRenderingContext2D, w: number, h: number) {
  // Target/bullseye with radiating lines — vision & goals
  const cx = w / 2;
  const cy = h / 2;
  const maxR = Math.min(w, h) * 0.4;

  // Radiating lines
  for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 12) {
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * maxR * 0.5, cy + Math.sin(angle) * maxR * 0.5);
    ctx.lineTo(cx + Math.cos(angle) * maxR * 1.1, cy + Math.sin(angle) * maxR * 1.1);
    ctx.strokeStyle = `rgba(255,255,255,${0.15 + Math.random() * 0.1})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Concentric rings
  for (let i = 5; i >= 1; i--) {
    const r = maxR * (i / 5);
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255,255,255,${0.1 + i * 0.08})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Center dot
  ctx.beginPath();
  ctx.arc(cx, cy, maxR * 0.06, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.fill();

  // Arrow pointing up-right (direction)
  const ax = cx + maxR * 0.6;
  const ay = cy - maxR * 0.6;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(ax, ay);
  ctx.strokeStyle = "rgba(255,255,255,0.5)";
  ctx.lineWidth = 3;
  ctx.stroke();
  // Arrowhead
  ctx.beginPath();
  ctx.moveTo(ax, ay);
  ctx.lineTo(ax - 8, ay + 2);
  ctx.lineTo(ax - 2, ay + 8);
  ctx.closePath();
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.fill();
}

function drawEnterprise(ctx: CanvasRenderingContext2D, w: number, h: number) {
  // Cityscape/skyline — business alignment
  const groundY = h * 0.85;
  const buildings = [
    { x: 0.08, bw: 0.08, bh: 0.45 },
    { x: 0.18, bw: 0.1, bh: 0.6 },
    { x: 0.3, bw: 0.12, bh: 0.7 },
    { x: 0.44, bw: 0.14, bh: 0.55 },
    { x: 0.6, bw: 0.1, bh: 0.75 },
    { x: 0.72, bw: 0.08, bh: 0.5 },
    { x: 0.82, bw: 0.12, bh: 0.65 },
  ];

  // Ground line
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(w, groundY);
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1;
  ctx.stroke();

  // Buildings
  buildings.forEach(({ x, bw, bh }) => {
    const bx = x * w;
    const by = groundY - bh * h * 0.7;
    const bWidth = bw * w;
    const bHeight = groundY - by;

    // Building body
    ctx.fillStyle = `rgba(255,255,255,${0.1 + Math.random() * 0.15})`;
    ctx.fillRect(bx, by, bWidth, bHeight);
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 1;
    ctx.strokeRect(bx, by, bWidth, bHeight);

    // Windows
    const winCols = Math.floor(bWidth / 8);
    const winRows = Math.floor(bHeight / 10);
    for (let row = 0; row < winRows; row++) {
      for (let col = 0; col < winCols; col++) {
        if (Math.random() > 0.4) {
          const wx = bx + 3 + col * (bWidth / winCols);
          const wy = by + 4 + row * (bHeight / winRows);
          ctx.fillStyle = `rgba(255,255,255,${0.2 + Math.random() * 0.4})`;
          ctx.fillRect(wx, wy, 3, 4);
        }
      }
    }
  });

  // Connection lines between buildings (network)
  ctx.setLineDash([3, 5]);
  for (let i = 0; i < buildings.length - 1; i++) {
    const a = buildings[i];
    const b = buildings[i + 1];
    ctx.beginPath();
    ctx.moveTo(a.x * w + (a.bw * w) / 2, groundY - a.bh * h * 0.7 - 5);
    ctx.lineTo(b.x * w + (b.bw * w) / 2, groundY - b.bh * h * 0.7 - 5);
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  ctx.setLineDash([]);
}

function drawTeam(ctx: CanvasRenderingContext2D, w: number, h: number) {
  // Connected nodes in a circle — team culture & collaboration
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) * 0.32;
  const nodeCount = 8;
  const nodes: { x: number; y: number }[] = [];

  // Central leader node
  ctx.beginPath();
  ctx.arc(cx, cy, 6, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.fill();

  // Outer nodes
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2 - Math.PI / 2;
    const nx = cx + Math.cos(angle) * radius;
    const ny = cy + Math.sin(angle) * radius;
    nodes.push({ x: nx, y: ny });

    // Connection to center
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(nx, ny);
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Node
    ctx.beginPath();
    ctx.arc(nx, ny, 5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${0.3 + (i % 3) * 0.15})`;
    ctx.fill();

    // Person icon (head + shoulders)
    ctx.beginPath();
    ctx.arc(nx, ny - 12, 4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${0.2 + (i % 3) * 0.1})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(nx, ny - 2, 7, Math.PI, 0);
    ctx.fillStyle = `rgba(255,255,255,${0.15 + (i % 3) * 0.08})`;
    ctx.fill();
  }

  // Connections between adjacent nodes
  for (let i = 0; i < nodeCount; i++) {
    const next = (i + 1) % nodeCount;
    ctx.beginPath();
    ctx.moveTo(nodes[i].x, nodes[i].y);
    ctx.lineTo(nodes[next].x, nodes[next].y);
    ctx.strokeStyle = "rgba(255,255,255,0.1)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Outer orbit ring
  ctx.beginPath();
  ctx.arc(cx, cy, radius + 15, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255,255,255,0.06)";
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawOperations(ctx: CanvasRenderingContext2D, w: number, h: number) {
  // Interlocking gears — workflow & processes
  const drawGear = (gx: number, gy: number, r: number, teeth: number, alpha: number) => {
    const toothH = r * 0.25;
    // Gear body
    ctx.beginPath();
    ctx.arc(gx, gy, r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
    ctx.lineWidth = 2;
    ctx.stroke();
    // Inner circle
    ctx.beginPath();
    ctx.arc(gx, gy, r * 0.35, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.7})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // Center dot
    ctx.beginPath();
    ctx.arc(gx, gy, 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fill();
    // Teeth
    for (let i = 0; i < teeth; i++) {
      const angle = (i / teeth) * Math.PI * 2;
      const x1 = gx + Math.cos(angle) * r;
      const y1 = gy + Math.sin(angle) * r;
      const x2 = gx + Math.cos(angle) * (r + toothH);
      const y2 = gy + Math.sin(angle) * (r + toothH);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.8})`;
      ctx.lineWidth = 3;
      ctx.stroke();
    }
  };

  // Three interlocking gears
  const baseR = Math.min(w, h) * 0.15;
  drawGear(w * 0.35, h * 0.4, baseR, 10, 0.35);
  drawGear(w * 0.58, h * 0.35, baseR * 0.75, 8, 0.25);
  drawGear(w * 0.48, h * 0.65, baseR * 0.6, 7, 0.2);

  // Workflow arrows
  const arrows = [
    { from: [w * 0.1, h * 0.5], to: [w * 0.25, h * 0.42] },
    { from: [w * 0.68, h * 0.35], to: [w * 0.85, h * 0.35] },
    { from: [w * 0.55, h * 0.72], to: [w * 0.75, h * 0.72] },
  ];

  arrows.forEach(({ from, to }) => {
    ctx.beginPath();
    ctx.moveTo(from[0], from[1]);
    ctx.lineTo(to[0], to[1]);
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);
  });
}

function drawExperience(ctx: CanvasRenderingContext2D, w: number, h: number) {
  // Lightbulb with radiating idea sparks — innovation & human-centered design
  const cx = w / 2;
  const bulbTop = h * 0.2;
  const bulbR = Math.min(w, h) * 0.2;

  // Radiating light rays
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    const innerR = bulbR * 1.3;
    const outerR = bulbR * (1.6 + Math.random() * 0.6);
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * innerR, (bulbTop + bulbR) + Math.sin(angle) * innerR);
    ctx.lineTo(cx + Math.cos(angle) * outerR, (bulbTop + bulbR) + Math.sin(angle) * outerR);
    ctx.strokeStyle = `rgba(255,255,255,${0.06 + Math.random() * 0.08})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Bulb glass
  ctx.beginPath();
  ctx.arc(cx, bulbTop + bulbR, bulbR, Math.PI * 1.15, Math.PI * 1.85);
  ctx.quadraticCurveTo(cx + bulbR * 0.3, bulbTop + bulbR * 2.2, cx + bulbR * 0.25, bulbTop + bulbR * 2.4);
  ctx.lineTo(cx - bulbR * 0.25, bulbTop + bulbR * 2.4);
  ctx.quadraticCurveTo(cx - bulbR * 0.3, bulbTop + bulbR * 2.2, cx - bulbR * Math.sin(Math.PI * 0.35), bulbTop + bulbR + bulbR * Math.cos(Math.PI * 0.35));
  ctx.strokeStyle = "rgba(255,255,255,0.35)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Base lines
  for (let i = 0; i < 3; i++) {
    const y = bulbTop + bulbR * 2.45 + i * 5;
    ctx.beginPath();
    ctx.moveTo(cx - bulbR * 0.2, y);
    ctx.lineTo(cx + bulbR * 0.2, y);
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Filament inside
  ctx.beginPath();
  ctx.moveTo(cx - bulbR * 0.12, bulbTop + bulbR * 1.8);
  const segments = 6;
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const fx = cx - bulbR * 0.12 + t * bulbR * 0.24;
    const fy = bulbTop + bulbR * (1.8 - 0.6 * Math.sin(t * Math.PI)) + Math.sin(t * Math.PI * 3) * bulbR * 0.08;
    ctx.lineTo(fx, fy);
  }
  ctx.strokeStyle = "rgba(255,255,255,0.4)";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Floating idea dots
  const dots = [
    { x: 0.2, y: 0.25, r: 3 }, { x: 0.78, y: 0.3, r: 2 },
    { x: 0.15, y: 0.6, r: 2 }, { x: 0.82, y: 0.55, r: 3 },
    { x: 0.25, y: 0.8, r: 2 }, { x: 0.75, y: 0.78, r: 2 },
  ];
  dots.forEach(({ x, y, r }) => {
    ctx.beginPath();
    ctx.arc(x * w, y * h, r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.fill();
  });
}

const SCENE_DRAWERS: Record<AsciiScene, (ctx: CanvasRenderingContext2D, w: number, h: number) => void> = {
  strategy: drawStrategy,
  enterprise: drawEnterprise,
  team: drawTeam,
  operations: drawOperations,
  experience: drawExperience,
};

/* ── Component ──────────────────────────────────────────── */

export default function GenerativeAscii({ scene, alt }: GenerativeAsciiProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ascii, setAscii] = useState("");
  const [fontSize, setFontSize] = useState(6);
  const [ready, setReady] = useState(false);

  const generate = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const containerWidth = container.offsetWidth;
    const targetCols = Math.min(200, Math.max(80, Math.floor(containerWidth / 5)));
    const charWidth = containerWidth / targetCols;
    const fs = charWidth / CHAR_ASPECT;
    const cols = targetCols;

    // 16:9 aspect ratio for the scene
    const charHeight = fs * 1.15;
    const rows = Math.floor((containerWidth * 0.45) / charHeight);

    // Draw the scene on the canvas at render resolution
    const renderW = cols * 4;
    const renderH = rows * 4;
    canvas.width = renderW;
    canvas.height = renderH;

    // Clear with black
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, renderW, renderH);

    // Draw the scene
    const drawFn = SCENE_DRAWERS[scene];
    if (drawFn) drawFn(ctx, renderW, renderH);

    // Downsample to ASCII grid
    const samplerCanvas = document.createElement("canvas");
    samplerCanvas.width = cols;
    samplerCanvas.height = rows;
    const sctx = samplerCanvas.getContext("2d");
    if (!sctx) return;
    sctx.drawImage(canvas, 0, 0, cols, rows);
    const imageData = sctx.getImageData(0, 0, cols, rows);
    const { data } = imageData;

    let result = "";
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
        const charIndex = Math.floor((brightness / 255) * (ASCII_CHARS.length - 1));
        result += ASCII_CHARS[charIndex];
      }
      result += "\n";
    }

    setAscii(result);
    setFontSize(fs);
    setReady(true);
  }, [scene]);

  useEffect(() => {
    generate();
  }, [generate]);

  useEffect(() => {
    const observer = new ResizeObserver(() => generate());
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

      {!ready ? (
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
