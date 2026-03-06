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
    thumbnail:
      "https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/bcfa0f9e-a94f-4090-8271-6ed0b45f534c_rwc_357x0x1964x1536x1964.jpg?h=435cc0d8750dc3bc4fbe914048a3e6a6",
    category: "UX Design · Banking",
    description: {
      en: "Full redesign of the digital banking experience, improving retention and self-service rates across mobile and web.",
      es: "Rediseño completo de la experiencia bancaria digital, mejorando retención y autoservicio en web y móvil.",
    },
  },
  {
    href: "/autonomus",
    key: "autonomus",
    thumbnail:
      "https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/37683366-9afb-4a8c-8f7b-c3ec4b33368d_rwc_388x0x3055x2389x3055.png?h=52b53e689d8bc667e6c5c840394d5c1c",
    category: "Product Design · Mobility",
    description: {
      en: "Platform connecting seniors to transportation and companionship services, designed for simplicity and trust.",
      es: "Plataforma que conecta adultos mayores con servicios de transporte y compañía, diseñada para simplicidad y confianza.",
    },
  },
  {
    href: "/enel-one-hub",
    key: "enelOneHub",
    thumbnail:
      "https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/0dcdfaf8-0e56-408b-a690-5c922cbdef4b_rwc_519x558x2130x1668x2130.jpg?h=cd620d34e675c6352ec30e3d48c362b7",
    category: "Design Systems · Energy",
    description: {
      en: "Unified design system enabling consistency across Enel's digital products in Latin America.",
      es: "Sistema de diseño unificado que garantiza consistencia en los productos digitales de Enel en Latinoamérica.",
    },
  },
  {
    href: "/ux-strategy",
    key: "uxStrategy",
    thumbnail:
      "https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/ecaaac91-83da-493b-8994-e10b74c703b5_rwc_225x0x2366x1850x2366.png?h=d5ef39743bb7b1cececf633c2ea61f23",
    category: "UX Strategy",
    description: {
      en: "Strategic UX framework applied across enterprise products to drive adoption and reduce cognitive overhead.",
      es: "Marco estratégico de UX aplicado en productos enterprise para impulsar adopción y reducir fricción cognitiva.",
    },
  },
  {
    href: "/my-design-process",
    key: "myDesignProcess",
    thumbnail:
      "https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/0c7e75d4-6fb7-40f9-8ba1-828423d883b5_rwc_270x0x1381x1080x1381.jpg?h=9167763525b16a5face869c3a161e715",
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
    thumbnail:
      "https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/ed4d5e87-cda7-495d-82cb-9e53e5783bd2_rwc_0x0x2120x1658x2120.png?h=baf19eb5e21abfced136e7663f2c12ee",
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
