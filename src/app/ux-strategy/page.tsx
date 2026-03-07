"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";

const i18n = {
  en: {
    title: "UX Strategy",
    subtitle:
      "As a UX Manager, I implement a UX strategy in five key areas, lead design teams, and build design capabilities for companies.",
    strategy: "1 > Strategy",
    enterprise: "2 > Enterprise",
    team: "3 > Team",
    operations: "4 > Operations",
    experience: "5 > Experience",
  },
  es: {
    title: "Estrategia UX",
    subtitle:
      "Como UX Manager, implemento una estrategia UX en cinco \u00E1reas clave, lidero equipos de dise\u00F1o y construyo capacidades de dise\u00F1o para empresas.",
    strategy: "1 > Estrategia",
    enterprise: "2 > Empresa",
    team: "3 > Equipo",
    operations: "4 > Operaciones",
    experience: "5 > Experiencia",
  },
} as const;

export default function UXStrategyPage() {
  const { locale } = useLanguage();
  const t = i18n[locale];

  return (
    <div className="min-h-screen">
      <div className=" mx-auto px-8 md:px-16 py-22">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="font-heading text-display-lg tracking-display mb-4">{t.title}</h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] mb-8">
            {t.subtitle}
          </p>
        </header>

        {/* Overview iframe */}
        <section className="mb-16">
          <div className="relative w-full  mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A361%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              sandbox="allow-scripts"
            />
          </div>
        </section>

        {/* 1 > Strategy */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">{t.strategy}</h2>
          <div className="relative w-full  mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A395%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              sandbox="allow-scripts"
            />
          </div>
        </section>

        {/* 2 > Enterprise */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">{t.enterprise}</h2>
          <div className="relative w-full  mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A398%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              sandbox="allow-scripts"
            />
          </div>
        </section>

        {/* 3 > Team */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">{t.team}</h2>
          <div className="relative w-full  mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A399%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              sandbox="allow-scripts"
            />
          </div>
        </section>

        {/* 4 > Operations */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">{t.operations}</h2>
          <div className="relative w-full  mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A397%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              sandbox="allow-scripts"
            />
          </div>
        </section>

        {/* 5 > Experience */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">{t.experience}</h2>
          <div className="relative w-full  mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A396%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              sandbox="allow-scripts"
            />
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/ux-strategy" />
      </div>
    </div>
  );
}
