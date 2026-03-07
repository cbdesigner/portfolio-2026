"use client";

import { useEffect, useRef, useCallback } from "react";

/* ── Types ───────────────────────────────────────────────────── */
type ShapeType = "rect" | "circle" | "line" | "square";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  shape: ShapeType;
  opacity: number;
  speed: number;
  angle: number;
  rotationSpeed: number;
  rotation: number;
  phaseX: number;
  phaseY: number;
  color: string;
}

/* ── Color palette (indigo / cyan / purple) ──────────────────── */
const COLORS_DARK = [
  "rgba(99, 102, 241,",   // indigo
  "rgba(139, 92, 246,",    // violet
  "rgba(168, 85, 247,",    // purple
  "rgba(6, 182, 212,",     // cyan
  "rgba(59, 130, 246,",    // blue
  "rgba(124, 58, 237,",    // violet deeper
];

const COLORS_LIGHT = [
  "rgba(79, 70, 229,",     // indigo-600
  "rgba(124, 58, 237,",    // violet-600
  "rgba(147, 51, 234,",    // purple-600
  "rgba(8, 145, 178,",     // cyan-600
  "rgba(37, 99, 235,",     // blue-600
  "rgba(109, 40, 217,",    // violet-700
];

/* ── Helpers ─────────────────────────────────────────────────── */
function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const SHAPES: ShapeType[] = ["rect", "circle", "line", "square"];

function createParticle(
  w: number,
  h: number,
  colors: string[],
): Particle {
  const x = randomBetween(0, w);
  const y = randomBetween(0, h);
  return {
    x,
    y,
    baseX: x,
    baseY: y,
    size: randomBetween(8, 40),
    shape: pickRandom(SHAPES),
    opacity: randomBetween(0.03, 0.12),
    speed: randomBetween(0.15, 0.5),
    angle: randomBetween(0, Math.PI * 2),
    rotationSpeed: randomBetween(-0.003, 0.003),
    rotation: randomBetween(0, Math.PI * 2),
    phaseX: randomBetween(0, Math.PI * 2),
    phaseY: randomBetween(0, Math.PI * 2),
    color: pickRandom(colors),
  };
}

/* ── Component ───────────────────────────────────────────────── */
export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const isDarkRef = useRef(true);

  const getParticleCount = useCallback((w: number) => {
    if (w < 640) return 20;
    if (w < 1024) return 35;
    return 55;
  }, []);

  const initParticles = useCallback(
    (w: number, h: number) => {
      const isDark = document.documentElement.classList.contains("dark");
      isDarkRef.current = isDark;
      const colors = isDark ? COLORS_DARK : COLORS_LIGHT;
      const count = getParticleCount(w);
      particlesRef.current = Array.from({ length: count }, () =>
        createParticle(w, h, colors),
      );
    },
    [getParticleCount],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    /* Resize handler */
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas!.parentElement!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(w, h);
    }

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement!);

    /* Mouse tracking */
    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function handleMouseLeave() {
      mouseRef.current = { x: -1000, y: -1000 };
    }

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    /* Theme observer */
    const themeObserver = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      if (isDark !== isDarkRef.current) {
        isDarkRef.current = isDark;
        const colors = isDark ? COLORS_DARK : COLORS_LIGHT;
        particlesRef.current.forEach((p) => {
          p.color = pickRandom(colors);
        });
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    /* Draw shapes */
    function drawParticle(p: Particle) {
      ctx!.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.rotation);

      const scaleX = 0.6 + 0.4 * Math.cos(p.rotation * 0.5);
      ctx!.scale(scaleX, 1);

      ctx!.globalAlpha = p.opacity;
      ctx!.strokeStyle = `${p.color} ${p.opacity + 0.08})`;
      ctx!.lineWidth = 1;

      switch (p.shape) {
        case "rect":
          ctx!.beginPath();
          ctx!.roundRect(-p.size * 1.2, -p.size * 0.4, p.size * 2.4, p.size * 0.8, 4);
          ctx!.stroke();
          break;
        case "circle":
          ctx!.beginPath();
          ctx!.arc(0, 0, p.size * 0.35, 0, Math.PI * 2);
          ctx!.stroke();
          break;
        case "line":
          ctx!.beginPath();
          ctx!.moveTo(-p.size, 0);
          ctx!.lineTo(p.size, 0);
          ctx!.stroke();
          break;
        case "square":
          ctx!.beginPath();
          ctx!.rect(-p.size * 0.4, -p.size * 0.4, p.size * 0.8, p.size * 0.8);
          ctx!.stroke();
          break;
      }
      ctx!.restore();
    }

    /* Draw connections */
    function drawConnections() {
      const particles = particlesRef.current;
      const maxDist = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.04;
            const isDark = isDarkRef.current;
            ctx!.strokeStyle = isDark
              ? `rgba(148, 163, 184, ${alpha})`
              : `rgba(100, 116, 139, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
    }

    /* Animation loop */
    let time = 0;
    function animate() {
      time += 0.008;
      ctx!.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const particles = particlesRef.current;

      for (const p of particles) {
        /* Organic floating movement */
        p.x = p.baseX + Math.sin(time * p.speed + p.phaseX) * 30;
        p.y = p.baseY + Math.cos(time * p.speed * 0.7 + p.phaseY) * 20;

        /* Slow drift */
        p.baseY -= 0.08;
        if (p.baseY < -p.size * 2) {
          p.baseY = h + p.size * 2;
          p.baseX = randomBetween(0, w);
        }

        /* Mouse parallax */
        if (mx > 0 && my > 0) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxInfluence = 250;
          if (dist < maxInfluence) {
            const force = (1 - dist / maxInfluence) * 15;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }

        /* Rotation */
        p.rotation += p.rotationSpeed;

        drawParticle(p);
      }

      drawConnections();

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    /* Cleanup */
    return () => {
      cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
