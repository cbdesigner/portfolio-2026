"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";

const i18n = {
  en: {
    title: "Enel One Hub",
    subtitle:
      "One of the main global operators in the sector of electricity, gas and integrated services",
    description:
      "One Hub was a global project to unify all Enel\u2019s websites, applying their new visual language according to the product vision, strategy, and user needs.",
    methodologyTitle: "Methodology & Deliverables",
    bullet1: "Interviews and workshops with stakeholders and end users",
    bullet2: "Mapping of current sitemaps by country",
    bullet3: "Ecosystem website",
    bullet4: "Customer Journeys",
    bullet5: "Reports (Segmentation, functionalities, contents)",
    bullet6: "Unified sitemaps by country",
    bullet7: "High fidelity mockups with global guidelines",
    bullet8: "Prototypes for smartphones, tablet and desktop",
    interviewsTitle: "Interviews in Chile/Peru and Argentina/Colombia",
    interviewsDescription:
      "Conducted in-depth interviews with stakeholders and end users across multiple Latin American markets to understand regional needs, cultural nuances and digital maturity levels that would inform the unified platform design.",
    argentinaColombiaTitle: "Argentina and Colombia",
    chileSitemapTitle: "Chile Sitemap",
    chileSitemapDescription:
      "Mapped the complete information architecture of Enel Chile\u2019s website, identifying content overlaps, navigation gaps and opportunities for streamlining the user experience across public and private areas.",
    hotspotsTitle: "Hotspots",
    hotspotsDescription:
      "Analyzed user interaction heatmaps and click data to identify critical hotspots, understanding where users focused their attention and which areas of the interface required optimization.",
    privateAreaTitle: "Some screens of Private Area for Personas",
    privateAreaDescription:
      "Developed detailed user personas for the Chilean market based on research findings, capturing key demographics, motivations, pain points and digital behaviors to guide design decisions.",
    publicAreaTitle: "Screen of Public Area Personas",
    publicAreaDescription:
      "Designed high-fidelity screens for both the public-facing website and the authenticated private area, ensuring a cohesive visual language while addressing distinct user goals in each context.",
    responsibilitiesTitle: "My Responsibilities",
    resp1: "Senior UX/UI Designer",
    resp2: "Led public/private transactional area",
    resp3: "Defined functionalities and user flows",
    resp4: "Built relationships with Latin American and Italian stakeholders",
    resp5: "Metrics analysis, GA, Hotjar, research and prototyping",
    resp6: "Created design system for private area",
    toolsTitle: "Tools",
  },
  es: {
    title: "Enel One Hub",
    subtitle:
      "Uno de los principales operadores globales en el sector de electricidad, gas y servicios integrados",
    description:
      "One Hub fue un proyecto global para unificar todos los sitios web de Enel, aplicando su nuevo lenguaje visual seg\u00FAn la visi\u00F3n del producto, estrategia y necesidades del usuario.",
    methodologyTitle: "Metodolog\u00EDa y Entregables",
    bullet1: "Entrevistas y talleres con stakeholders y usuarios finales",
    bullet2: "Mapeo de sitemaps actuales por pa\u00EDs",
    bullet3: "Ecosistema web",
    bullet4: "Customer Journeys",
    bullet5: "Reportes (Segmentaci\u00F3n, funcionalidades, contenidos)",
    bullet6: "Sitemaps unificados por pa\u00EDs",
    bullet7: "Mockups de alta fidelidad con lineamientos globales",
    bullet8: "Prototipos para smartphones, tablet y desktop",
    interviewsTitle: "Entrevistas en Chile/Per\u00FA y Argentina/Colombia",
    interviewsDescription:
      "Se realizaron entrevistas en profundidad con stakeholders y usuarios finales en m\u00FAltiples mercados latinoamericanos para comprender las necesidades regionales, matices culturales y niveles de madurez digital que informar\u00EDan el dise\u00F1o de la plataforma unificada.",
    argentinaColombiaTitle: "Argentina y Colombia",
    chileSitemapTitle: "Mapa del Sitio Chile",
    chileSitemapDescription:
      "Se mape\u00F3 la arquitectura de informaci\u00F3n completa del sitio web de Enel Chile, identificando superposiciones de contenido, brechas de navegaci\u00F3n y oportunidades para optimizar la experiencia de usuario en las \u00E1reas p\u00FAblica y privada.",
    hotspotsTitle: "Hotspots",
    hotspotsDescription:
      "Se analizaron mapas de calor de interacci\u00F3n de usuarios y datos de clics para identificar hotspots cr\u00EDticos, comprendiendo d\u00F3nde los usuarios enfocaban su atenci\u00F3n y qu\u00E9 \u00E1reas de la interfaz requer\u00EDan optimizaci\u00F3n.",
    privateAreaTitle: "Algunas pantallas del \u00C1rea Privada para Personas",
    privateAreaDescription:
      "Se desarrollaron personas de usuario detalladas para el mercado chileno basadas en hallazgos de investigaci\u00F3n, capturando datos demogr\u00E1ficos clave, motivaciones, puntos de dolor y comportamientos digitales para guiar las decisiones de dise\u00F1o.",
    publicAreaTitle: "Pantalla del \u00C1rea P\u00FAblica Personas",
    publicAreaDescription:
      "Se dise\u00F1aron pantallas de alta fidelidad tanto para el sitio web p\u00FAblico como para el \u00E1rea privada autenticada, asegurando un lenguaje visual cohesivo mientras se abordaban objetivos de usuario distintos en cada contexto.",
    responsibilitiesTitle: "Mis Responsabilidades",
    resp1: "Senior UX/UI Designer",
    resp2: "Lider\u00E9 el \u00E1rea transaccional p\u00FAblica/privada",
    resp3: "Defin\u00ED funcionalidades y flujos de usuario",
    resp4: "Constru\u00ED relaciones con stakeholders latinoamericanos e italianos",
    resp5: "An\u00E1lisis de m\u00E9tricas, GA, Hotjar, investigaci\u00F3n y prototipado",
    resp6: "Cre\u00E9 el sistema de dise\u00F1o para el \u00E1rea privada",
    toolsTitle: "Herramientas",
  },
} as const;

export default function EnelOneHubPage() {
  const { locale } = useLanguage();
  const t = i18n[locale];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-22">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="font-heading text-display-lg tracking-display mb-4">{t.title}</h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] mb-8">
            {t.subtitle}
          </p>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            {t.description}
          </p>
        </header>

        {/* Hero Image */}
        <div className="mt-6 mb-4">
          <img src="/images/de6dc1e6-bcbb-406f-adee-b47964a84e1a_rw_1920.jpg" alt="Enel One Hub" className="w-full h-auto rounded-lg" loading="lazy" />
        </div>

        {/* Methodology & Deliverables */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.methodologyTitle}
          </h2>
          <ul className="space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.bullet1}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.bullet2}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.bullet3}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.bullet4}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.bullet5}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.bullet6}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.bullet7}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.bullet8}
            </li>
          </ul>
        </section>

        {/* Sections */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.interviewsTitle}
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {t.interviewsDescription}
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/images/1095788a-2ad7-4262-889b-2ca483c20d9c_rw_1920.png" alt="Interviews Chile and Peru" className="w-full h-auto rounded-lg" loading="lazy" />
            <img src="/images/2f5c8c4f-2f84-4a17-b212-82c8e25dc90b_rw_1920.png" alt="Interviews Chile and Peru - workshops" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.argentinaColombiaTitle}
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/images/92feab37-cf17-45dd-ab67-ad7decc8b60b_rw_1920.png" alt="Argentina workshops" className="w-full h-auto rounded-lg" loading="lazy" />
            <img src="/images/80a69530-7f55-4ee3-ab5e-58fbb81a4e50_rw_1920.png" alt="Colombia workshops" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.chileSitemapTitle}
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {t.chileSitemapDescription}
          </p>
          <div className="mt-6 mb-4">
            <img src="/images/689d0786-f321-4a4c-9114-47e5a9389f1b_rw_1920.jpg" alt="Chile Sitemap with all sites unified" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">{t.hotspotsTitle}</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {t.hotspotsDescription}
          </p>
          <div className="mt-6 mb-4">
            <img src="/images/711a3f8e-b0b0-4e62-85f5-d5dc0f6c1f45_rw_1920.png" alt="Hotspots of Private Area Personas Chile" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.privateAreaTitle}
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {t.privateAreaDescription}
          </p>
          <div className="mt-6 mb-4">
            <img src="/images/3c01aa27-85a3-48f8-bb4c-47e693587aff_rw_1920.jpg" alt="Private Area Personas screens" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/images/1c8f5170-7ed0-4a81-bc09-89508247421d_rw_600.jpg" alt="Private Area Personas screens" className="w-full h-auto rounded-lg" loading="lazy" />
            <img src="/images/68eaa859-0db0-4ac5-916d-8ed63f26069f_rw_600.jpg" alt="Private Area Personas screens" className="w-full h-auto rounded-lg" loading="lazy" />
            <img src="/images/31c5f970-38df-4715-b534-971eb2257c21_rw_600.jpg" alt="Private Area Personas screens" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
          <div className="mt-6 mb-4">
            <img src="/images/4cddf3c6-96a4-4255-8b27-12704b9eb724_rw_1920.jpg" alt="Private Area screens" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
          <div className="mt-6 mb-4">
            <img src="/images/6359bbdd-d6a3-4a42-8fc5-15cd4fd5e8e0_rw_1920.jpg" alt="Private Area screens detail" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.publicAreaTitle}
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {t.publicAreaDescription}
          </p>
          <div className="mt-6 mb-4">
            <img src="/images/d17e4048-0bf7-4fc2-9dcb-0c14dac652f4_rw_1920.png" alt="Public Area Personas screen" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        {/* My Responsibilities */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.responsibilitiesTitle}
          </h2>
          <ul className="space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.resp1}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.resp2}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.resp3}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.resp4}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.resp5}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.resp6}
            </li>
          </ul>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-4">{t.toolsTitle}</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Sketch (Craft  Runner  Anima Toolkit  Paddy)
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Abstract
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Invision
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Google Slide
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Google Docs
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Avaza
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Draw.io
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Basecamp
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Smaply
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Principle
            </span>
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/enel-one-hub" />
      </div>
    </div>
  );
}
