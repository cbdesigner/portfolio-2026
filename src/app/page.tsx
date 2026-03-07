"use client";

import HeroSection from "@/components/HeroSection";
import CarouselSection, { CarouselItem } from "@/components/CarouselSection";
import { useLanguage } from "@/i18n/LanguageContext";

type ProjectKey =
  | "bancoRipley"
  | "designSystem"
  | "autonomus"
  | "myDesignProcess"
  | "enelOneHub"
  | "uxStrategy"
  | "designSystemArchitect"
  | "dsMethodology"
  | "bupaDesignSystem"
  | "dsServices";

const allProjects: {
  href: string;
  key: ProjectKey;
  thumbnail: string;
  category: string;
  description: { en: string; es: string };
}[] = [
  {
    href: "/banco-ripley",
    key: "bancoRipley",
    thumbnail: "/images/banco-ripley-thumb.svg",
    category: "UX Design · Banking",
    description: {
      en: "Full redesign of the digital banking experience, improving retention and self-service rates across mobile and web.",
      es: "Rediseño completo de la experiencia bancaria digital, mejorando retención y autoservicio en web y móvil.",
    },
  },
  {
    href: "/autonomus",
    key: "autonomus",
    thumbnail: "/images/autonomus-thumb.svg",
    category: "Product Design · Mobility",
    description: {
      en: "Platform connecting seniors to transportation and companionship services, designed for simplicity and trust.",
      es: "Plataforma que conecta adultos mayores con servicios de transporte y compañía, diseñada para simplicidad y confianza.",
    },
  },
  {
    href: "/enel-one-hub",
    key: "enelOneHub",
    thumbnail: "/images/enel-thumb.svg",
    category: "Design Systems · Energy",
    description: {
      en: "Unified design system enabling consistency across Enel's digital products in Latin America.",
      es: "Sistema de diseño unificado que garantiza consistencia en los productos digitales de Enel en Latinoamérica.",
    },
  },
  {
    href: "/ux-strategy",
    key: "uxStrategy",
    thumbnail: "/images/ux-strategy-thumb.svg",
    category: "UX Strategy",
    description: {
      en: "Strategic UX framework applied across enterprise products to drive adoption and reduce cognitive overhead.",
      es: "Marco estratégico de UX aplicado en productos enterprise para impulsar adopción y reducir fricción cognitiva.",
    },
  },
  {
    href: "/my-design-process",
    key: "myDesignProcess",
    thumbnail: "/images/design-process-thumb.svg",
    category: "Methodology · Process",
    description: {
      en: "A documented, repeatable approach to design thinking and execution in complex product environments.",
      es: "Un enfoque documentado y repetible para el design thinking y ejecución en entornos de producto complejos.",
    },
  },
  {
    href: "/ds-methodology",
    key: "dsMethodology",
    thumbnail: "/images/ds-methodology-thumb.svg",
    category: "Design Systems · Methodology",
    description: {
      en: "Scalable methodology for building and governing design systems across large organizations.",
      es: "Metodología escalable para construir y gobernar design systems en grandes organizaciones.",
    },
  },
  {
    href: "/ds-services",
    key: "dsServices",
    thumbnail: "/images/ds-services-thumb.svg",
    category: "Services · Strategy",
    description: {
      en: "Integrated framework—Governance, Architecture, Metrics—to transform how design systems scale and deliver business value.",
      es: "Framework integrado—Gobernanza, Arquitectura, Métricas—para transformar cómo los design systems escalan e impactan el negocio.",
    },
  },
  {
    href: "/design-system",
    key: "designSystem",
    thumbnail: "/images/design-system-thumb.svg",
    category: "Design Systems",
    description: {
      en: "End-to-end design system built to serve multiple products with a single, consistent design language.",
      es: "Design system end-to-end construido para servir múltiples productos con un lenguaje de diseño único y consistente.",
    },
  },
  {
    href: "/design-system-architect",
    key: "designSystemArchitect",
    thumbnail: "/images/ds-architect-thumb.svg",
    category: "Design Systems · Architecture",
    description: {
      en: "AI-ready design infrastructure built for scale, governance, and deterministic design-to-code workflows.",
      es: "Infraestructura de diseño lista para IA, construida para escala, gobernanza y flujos deterministas de diseño a código.",
    },
  },
  {
    href: "/bupa-design-system",
    key: "bupaDesignSystem",
    thumbnail: "/images/bupa-thumb.svg",
    category: "Design Systems · Healthcare",
    description: {
      en: "Design system for healthcare digital products balancing clinical precision with human warmth.",
      es: "Sistema de diseño para productos digitales de salud, equilibrando precisión clínica con calidez humana.",
    },
  },
];

const projectKeys: ProjectKey[] = ["bancoRipley", "autonomus", "enelOneHub", "uxStrategy"];
const methodologyKeys: ProjectKey[] = ["myDesignProcess", "dsMethodology", "dsServices"];
const designSystemKeys: ProjectKey[] = ["designSystem", "designSystemArchitect", "bupaDesignSystem"];

export default function Home() {
  const { t, locale } = useLanguage();

  const byKey = Object.fromEntries(allProjects.map((p) => [p.key, p]));

  const toItems = (keys: ProjectKey[]): CarouselItem[] =>
    keys.map((key) => ({
      href: byKey[key].href,
      title: t.projectTitles[key],
      thumbnail: byKey[key].thumbnail,
      category: byKey[key].category,
      description: byKey[key].description[locale as "en" | "es"],
    }));

  return (
    <>
      <HeroSection />

      <div className="pt-16">
        <CarouselSection
          label={t.categories.projects}
          items={toItems(projectKeys)}
        />
        <CarouselSection
          label={t.categories.methodologies}
          items={toItems(methodologyKeys)}
        />
        <CarouselSection
          label={t.categories.designSystems}
          items={toItems(designSystemKeys)}
        />
      </div>
    </>
  );
}
