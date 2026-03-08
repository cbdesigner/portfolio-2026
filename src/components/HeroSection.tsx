"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Sparkles } from "lucide-react";
import BlurIn from "@/components/animations/BlurIn";
import SplitText from "@/components/animations/SplitText";
import HeroVideo from "@/components/HeroVideo";

const VIDEO_SRC =
  "https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8";

export default function HeroSection() {
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
      <div className="relative z-20 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="flex flex-col gap-12">
            {/* Badge + Heading + Subtitle group */}
            <div className="flex flex-col gap-6">
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
                className="font-heading text-display-xl tracking-tightest text-white"
              />

              {/* Subtitle */}
              <BlurIn delay={0.6} duration={0.6}>
                <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
                  {t.hero.description}
                </p>
              </BlurIn>
            </div>

            {/* CTA Buttons */}
            <BlurIn delay={0.6} duration={0.6}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium transition-colors duration-300 hover:bg-white/30"
                >
                  {t.hero.cta}
                </a>
              </div>
            </BlurIn>
          </div>
        </div>
      </div>
    </section>
  );
}
