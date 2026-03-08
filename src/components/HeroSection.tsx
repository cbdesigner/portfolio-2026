"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Sparkles } from "lucide-react";
import BlurIn from "@/components/animations/BlurIn";
import SplitText from "@/components/animations/SplitText";
import HeroVideo from "@/components/HeroVideo";

const VIDEO_SRC =
  "https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8";

interface HeroSectionProps {
  isAuthenticated?: boolean | null;
}

export default function HeroSection({ isAuthenticated }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section
      className="relative h-screen w-full overflow-hidden -mt-22"
      style={{ backgroundColor: "#070612" }}
    >
      {/* ── Background video layer ── */}
      <div className="absolute inset-0 z-0">
        <HeroVideo src={VIDEO_SRC} className="h-full w-full object-cover" />
      </div>

      {/* ── Bottom gradient fade ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-10"
        style={{
          background: "linear-gradient(to top, #070612 0%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="max-w-5xl mx-auto px-8 md:px-16 w-full text-center">
          <div className="flex flex-col gap-12 items-center">
            {/* Badge + Heading + Subtitle group */}
            <div className="flex flex-col gap-6 items-center">
              {/* Badge */}
              <BlurIn delay={0} duration={0.6}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm text-sm font-medium text-white/80">
                  <Sparkles className="w-3 h-3" />
                  {t.hero.badge}
                </span>
              </BlurIn>

              {/* Heading — word-by-word stagger */}
              <SplitText
                text={t.hero.title}
                as="h1"
                className="font-heading text-display-xl tracking-tightest text-white text-balance"
              />

              {/* Subtitle */}
              <BlurIn delay={0.6} duration={0.6}>
                <p className="text-body-lg text-white/70 leading-relaxed">
                  {t.hero.description}
                </p>
              </BlurIn>
            </div>

            {/* CTA */}
            <BlurIn delay={0.6} duration={0.6}>
              <a
                href={isAuthenticated ? "#projects" : "/login"}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide uppercase">
                  {t.hero.cta}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
            </BlurIn>
          </div>
        </div>
      </div>
    </section>
  );
}
