"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function RevealSection({
  children,
  className = "",
  stagger = false,
}: RevealSectionProps) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`${stagger ? "reveal-stagger" : ""} ${className}`}>
      {children}
    </div>
  );
}
