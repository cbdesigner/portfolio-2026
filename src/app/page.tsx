"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectGrid, { type ProjectItem, type FilterValue } from "@/components/ProjectGrid";
import { useLanguage } from "@/i18n/LanguageContext";

type ProjectKey =
  | "bancoRipley"
  | "chek"
  | "designSystem"
  | "autonomus"
  | "myDesignProcess"
  | "enelOneHub"
  | "uxStrategy"
  | "designSystemArchitect"
  | "dsMethodology"
  | "bupaDesignSystem"
  | "shipbobDesignSystem"
  | "dsServices"
  | "copecVoltex";

const allProjects: {
  href: string;
  key: ProjectKey;
  category: string;
  filter: FilterValue;
  description: { en: string; es: string };
}[] = [
  {
    href: "/copec-voltex",
    key: "copecVoltex",
    category: "Design Systems · eMobility",
    filter: "designSystems",
    description: {
      en: "Scalable design system and eMobility platform featuring EV catalog, educational resources, and cost calculator. 50% reduction in design-to-development time.",
      es: "Sistema de diseño escalable y plataforma de movilidad eléctrica con catálogo de vehículos, recursos educativos y calculadora de costos. 50% de reducción en tiempo de desarrollo.",
    },
  },
  {
    href: "/banco-ripley",
    key: "bancoRipley",
    category: "UX Design · Banking",
    filter: "projects",
    description: {
      en: "Full redesign of the digital banking experience, improving retention and self-service rates across mobile and web.",
      es: "Rediseño completo de la experiencia bancaria digital, mejorando retención y autoservicio en web y móvil.",
    },
  },
  {
    href: "/chek",
    key: "chek",
    category: "FinTech · Digital Wallet",
    filter: "projects",
    description: {
      en: "Digital wallet for Banco Ripley serving 800K+ users. Led UX strategy, design system, and team for Personas, Comercios, and web platforms democratizing banking.",
      es: "Billetera digital de Banco Ripley con 800K+ usuarios. Lideré estrategia UX, design system y equipo para plataformas Personas, Comercios y web democratizando banca.",
    },
  },
  {
    href: "/autonomus",
    key: "autonomus",
    category: "Design Systems · Mobility",
    filter: "designSystems",
    description: {
      en: "Multibranding design system and platform connecting seniors to transportation and companionship services, designed for simplicity and trust.",
      es: "Sistema de diseño multimarca y plataforma que conecta adultos mayores con servicios de transporte y compañía, diseñada para simplicidad y confianza.",
    },
  },
  {
    href: "/enel-one-hub",
    key: "enelOneHub",
    category: "Design Systems · Energy",
    filter: "projects",
    description: {
      en: "Unified design system enabling consistency across Enel's digital products in Latin America.",
      es: "Sistema de diseño unificado que garantiza consistencia en los productos digitales de Enel en Latinoamérica.",
    },
  },
  {
    href: "/ux-strategy",
    key: "uxStrategy",
    category: "UX Strategy",
    filter: "projects",
    description: {
      en: "Strategic UX framework applied across enterprise products to drive adoption and reduce cognitive overhead.",
      es: "Marco estratégico de UX aplicado en productos enterprise para impulsar adopción y reducir fricción cognitiva.",
    },
  },
  {
    href: "/my-design-process",
    key: "myDesignProcess",
    category: "Methodology · Process",
    filter: "methodology",
    description: {
      en: "A documented, repeatable approach to design thinking and execution in complex product environments.",
      es: "Un enfoque documentado y repetible para el design thinking y ejecución en entornos de producto complejos.",
    },
  },
  {
    href: "/ds-methodology",
    key: "dsMethodology",
    category: "Design Systems · Methodology",
    filter: "methodology",
    description: {
      en: "Scalable methodology for building and governing design systems across large organizations.",
      es: "Metodología escalable para construir y gobernar design systems en grandes organizaciones.",
    },
  },
  {
    href: "/ds-services",
    key: "dsServices",
    category: "Services · Strategy",
    filter: "methodology",
    description: {
      en: "Integrated framework—Governance, Architecture, Metrics—to transform how design systems scale and deliver business value.",
      es: "Framework integrado—Gobernanza, Arquitectura, Métricas—para transformar cómo los design systems escalan e impactan el negocio.",
    },
  },
  {
    href: "/design-system",
    key: "designSystem",
    category: "Design Systems",
    filter: "designSystems",
    description: {
      en: "End-to-end design system built to serve multiple products with a single, consistent design language.",
      es: "Design system end-to-end construido para servir múltiples productos con un lenguaje de diseño único y consistente.",
    },
  },
  {
    href: "/bupa-design-system",
    key: "bupaDesignSystem",
    category: "Design Systems · Healthcare",
    filter: "designSystems",
    description: {
      en: "Design system for healthcare digital products balancing clinical precision with human warmth.",
      es: "Sistema de diseño para productos digitales de salud, equilibrando precisión clínica con calidez humana.",
    },
  },
  {
    href: "/shipbob-design-system",
    key: "shipbobDesignSystem",
    category: "Design Systems · Logistics",
    filter: "designSystems",
    description: {
      en: "AI-ready design system infrastructure that reduced complex interface development from hours to minutes, enabling scalable fulfillment operations.",
      es: "Infraestructura de design system preparada para IA que redujo el desarrollo de interfaces complejas de horas a minutos, permitiendo operaciones de fulfillment escalables.",
    },
  },
];

export default function Home() {
  const { t, locale } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/auth/status")
      .then((r) => r.json())
      .then((data) => setIsAuthenticated(data.authenticated))
      .catch(() => setIsAuthenticated(false));
  }, []);

  const items: ProjectItem[] = allProjects.map((p) => ({
    href: p.href,
    title: t.projectTitles[p.key],
    category: p.category,
    description: p.description[locale as "en" | "es"],
    filter: p.filter,
  }));

  return (
    <>
      <HeroSection isAuthenticated={isAuthenticated} />
    </>
  );
}
