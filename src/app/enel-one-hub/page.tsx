"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";

const i18n = {
  en: {
    title: "Enel One Hub",
    subtitle:
      "One of the main global operators in the sector of electricity, gas and integrated services",
    description:
      "One Hub was a global project to unify all Enel's websites, applying their new visual language according to the product vision, strategy, and user needs.",
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
      "Mapped the complete information architecture of Enel Chile's website, identifying content overlaps, navigation gaps and opportunities for streamlining the user experience across public and private areas.",
    hotspotsTitle: "Hotspots",
    hotspotsDescription:
      "Analyzed user interaction heatmaps and click data to identify critical hotspots, understanding where users focused their attention and which areas of the interface required optimization.",
    privateAreaTitle: "Private Area Design",
    privateAreaDescription:
      "Developed detailed user personas for the Chilean market based on research findings, capturing key demographics, motivations, pain points and digital behaviors to guide design decisions.",
    publicAreaTitle: "Public Area Design",
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
    privateAreaTitle: "Dise\u00F1o del \u00C1rea Privada",
    privateAreaDescription:
      "Se desarrollaron personas de usuario detalladas para el mercado chileno basadas en hallazgos de investigaci\u00F3n, capturando datos demogr\u00E1ficos clave, motivaciones, puntos de dolor y comportamientos digitales para guiar las decisiones de dise\u00F1o.",
    publicAreaTitle: "Dise\u00F1o del \u00C1rea P\u00FAblica",
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
    <>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="mb-6">
          <span className="text-sm font-medium text-[var(--color-text-secondary)] tracking-wide uppercase">
            Case Study
          </span>
        </div>
        <h1 className="font-heading text-display-lg tracking-display mb-6">
          {t.title}
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-4 max-w-3xl">
          {t.subtitle}
        </p>
        <p className="text-lg text-[var(--color-text-tertiary)] max-w-4xl">
          {t.description}
        </p>
      </section>

      {/* Hero Image */}
      <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
        <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
          <img src="/images/de6dc1e6-bcbb-406f-adee-b47964a84e1a_rw_1920.jpg" alt="Enel One Hub" className="w-full max-w-6xl mx-auto" loading="lazy" />
        </div>
      </section>

      {/* Project Overview */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Client
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Enel Global
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Role
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Senior UX/UI Designer
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Timeline
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              12 Months
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Scope
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              LATAM + Italy
            </p>
          </div>
        </div>
      </section>

      {/* Challenge & Opportunity */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-display-sm tracking-display mb-6">
              The Challenge
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-6">
              Enel's global presence meant fragmentary digital experiences across countries and products.
            </p>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>\u2022 Multiple websites with inconsistent visual languages</li>
              <li>\u2022 Different user journeys across regions and platforms</li>
              <li>\u2022 No unified information architecture or design system</li>
              <li>\u2022 Complex stakeholder alignment across Italy and Latin America</li>
              <li>\u2022 Need for scalable, region-specific customization</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-display-sm tracking-display mb-6">
              The Opportunity
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-6">
              Unify Enel's global presence with a cohesive visual language while respecting regional variations and user needs.
            </p>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>\u2022 Single visual language across all markets</li>
              <li>\u2022 Scalable design system for multiple countries</li>
              <li>\u2022 Improved user experience consistency</li>
              <li>\u2022 Faster feature deployment across regions</li>
              <li>\u2022 Foundation for future product expansion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-[var(--color-border)]">
        {/* Research & Discovery */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h2 className="font-heading text-display-md tracking-display mb-8">
            Research & Discovery
          </h2>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            {t.methodologyTitle}
          </p>
          <ul className="space-y-3 text-[var(--color-text-tertiary)]">
            <li>\u2022 {t.bullet1}</li>
            <li>\u2022 {t.bullet2}</li>
            <li>\u2022 {t.bullet3}</li>
            <li>\u2022 {t.bullet4}</li>
            <li>\u2022 {t.bullet5}</li>
            <li>\u2022 {t.bullet6}</li>
            <li>\u2022 {t.bullet7}</li>
            <li>\u2022 {t.bullet8}</li>
          </ul>
        </section>

        {/* Interviews Section */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            {t.interviewsTitle}
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-8 max-w-3xl">
            {t.interviewsDescription}
          </p>
        </section>

        {/* Interview Images */}
        <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
              <img src="/images/1095788a-2ad7-4262-889b-2ca483c20d9c_rw_1920.png" alt="Interviews Chile and Peru" className="w-full max-w-6xl mx-auto" loading="lazy" />
            </div>
            <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
              <img src="/images/2f5c8c4f-2f84-4a17-b212-82c8e25dc90b_rw_1920.png" alt="Interviews workshops Chile and Peru" className="w-full max-w-6xl mx-auto" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Argentina Colombia Section */}
        <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
              <img src="/images/argentina.png" alt="Argentina workshops" className="w-full max-w-6xl mx-auto" loading="lazy" />
            </div>
            <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
              <img src="/images/colombia.png" alt="Colombia workshops" className="w-full max-w-6xl mx-auto" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Chile Sitemap Section */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            {t.chileSitemapTitle}
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-8 max-w-3xl">
            {t.chileSitemapDescription}
          </p>
        </section>

        <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img src="/images/sitemap.jpg" alt="Chile Sitemap with all sites unified" className="w-full max-w-6xl mx-auto" loading="lazy" />
          </div>
        </section>

        {/* Hotspots Section */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            {t.hotspotsTitle}
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-8 max-w-3xl">
            {t.hotspotsDescription}
          </p>
        </section>

        <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img src="/images/711a3f8e-b0b0-4e62-85f5-d5dc0f6c1f45_rw_1920.png" alt="Hotspots of Private Area Personas Chile" className="w-full max-w-6xl mx-auto" loading="lazy" />
          </div>
        </section>
      </section>

      {/* Private Area Design */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.privateAreaTitle}
        </h2>
        <p className="text-[var(--color-text-tertiary)] mb-8 max-w-3xl">
          {t.privateAreaDescription}
        </p>
      </section>

      {/* Private Area Main Image */}
      <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
        <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
          <img src="/images/3c01aa27-85a3-48f8-bb4c-47e693587aff_rw_1920.jpg" alt="Private Area Personas screens" className="w-full max-w-6xl mx-auto" loading="lazy" />
        </div>
      </section>

      {/* Private Area Grid */}
      <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img src="/images/1c8f5170-7ed0-4a81-bc09-89508247421d_rw_600.jpg" alt="Private Area Personas screen 1" className="w-full max-w-6xl mx-auto" loading="lazy" />
          </div>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img src="/images/68eaa859-0db0-4ac5-916d-8ed63f26069f_rw_600.jpg" alt="Private Area Personas screen 2" className="w-full max-w-6xl mx-auto" loading="lazy" />
          </div>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img src="/images/31c5f970-38df-4715-b534-971eb2257c21_rw_600.jpg" alt="Private Area Personas screen 3" className="w-full max-w-6xl mx-auto" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Private Area Detail Images */}
      <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
        <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
          <img src="/images/4cddf3c6-96a4-4255-8b27-12704b9eb724_rw_1920.jpg" alt="Private Area screens" className="w-full max-w-6xl mx-auto" loading="lazy" />
        </div>
      </section>

      <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
        <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
          <img src="/images/6359bbdd-d6a3-4a42-8fc5-15cd4fd5e8e0_rw_1920.jpg" alt="Private Area screens detail" className="w-full max-w-6xl mx-auto" loading="lazy" />
        </div>
      </section>

      {/* Public Area Design */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.publicAreaTitle}
        </h2>
        <p className="text-[var(--color-text-tertiary)] mb-8 max-w-3xl">
          {t.publicAreaDescription}
        </p>
      </section>

      {/* Public Area Image */}
      <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
        <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
          <img src="/images/d17e4048-0bf7-4fc2-9dcb-0c14dac652f4_rw_1920.png" alt="Public Area Personas screen" className="w-full max-w-6xl mx-auto" loading="lazy" />
        </div>
      </section>

      {/* What We Delivered */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          What We Delivered
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Information Architecture
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Unified sitemaps for multiple countries, consolidating fragmented content and optimizing navigation for regional needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Design System
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Complete design system for the private transactional area, enabling rapid feature development across regions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              High-Fidelity Designs
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Complete high-fidelity mockups and prototypes for public and private areas across mobile, tablet, and desktop.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              User Research
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Comprehensive user personas, journey maps, and stakeholder interview summaries across 4 Latin American markets.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Analytics Integration
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              User behavior analysis, hotspot identification, and GA/Hotjar insights informing design decisions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Regional Customization
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Scalable system accommodating region-specific requirements while maintaining design consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          Impact & Results
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-medium mb-6 text-[var(--color-text-primary)]">
              Quantitative Outcomes
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-[var(--color-text-secondary)]">4</span>
                <span className="text-[var(--color-text-tertiary)]">Latin American countries unified with cohesive design language</span>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-[var(--color-text-secondary)]">12mo</span>
                <span className="text-[var(--color-text-tertiary)]">Project timeline from research to delivery across regions</span>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-[var(--color-text-secondary)]">80+</span>
                <span className="text-[var(--color-text-tertiary)]">High-fidelity designs across all platforms and regions</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6 text-[var(--color-text-primary)]">
              Qualitative Outcomes
            </h3>
            <ul className="space-y-4 text-[var(--color-text-tertiary)]">
              <li>\u2022 <strong className="text-[var(--color-text-primary)]">Visual Unity:</strong> Consistent brand expression across all regional websites</li>
              <li>\u2022 <strong className="text-[var(--color-text-primary)]">User Clarity:</strong> Simplified navigation and improved information discovery</li>
              <li>\u2022 <strong className="text-[var(--color-text-primary)]">Scalability:</strong> Design system enabled rapid deployment of new features</li>
              <li>\u2022 <strong className="text-[var(--color-text-primary)]">Stakeholder Alignment:</strong> Strong cross-regional collaboration foundation established</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          Lessons Learned
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              What Worked Well
            </h3>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>\u2022 <strong className="text-[var(--color-text-primary)]">Regional Research:</strong> Understanding local needs ensured designs were culturally appropriate and effective</li>
              <li>\u2022 <strong className="text-[var(--color-text-primary)]">Modular Approach:</strong> Designing for flexibility enabled regional customization without losing consistency</li>
              <li>\u2022 <strong className="text-[var(--color-text-primary)]">Stakeholder Engagement:</strong> Regular workshops with regional leaders built alignment and buy-in</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              Areas for Improvement
            </h3>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>\u2022 <strong className="text-[var(--color-text-primary)]">Earlier Internationalization:</strong> Plan for multi-language/market support from the beginning</li>
              <li>\u2022 <strong className="text-[var(--color-text-primary)]">Implementation Support:</strong> More hands-on assistance during development would have accelerated launch</li>
              <li>\u2022 <strong className="text-[var(--color-text-primary)]">Post-Launch Metrics:</strong> Establish clear KPIs and monitoring from day one</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          Conclusion
        </h2>

        <div className="space-y-6 text-[var(--color-text-tertiary)]">
          <p>
            The Enel One Hub project demonstrates the challenges and rewards of designing at scale across multiple regions and markets. By combining thorough user research, strategic stakeholder engagement, and a modular design approach, we unified Enel's global digital presence.
          </p>
          <p>
            From interviews across four Latin American countries to the delivery of a comprehensive design system, the project exemplifies how thoughtful design research informs strategic decisions and how scalable systems enable rapid product development.
          </p>
        </div>
      </section>

      {/* My Responsibilities */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          {t.responsibilitiesTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-[var(--color-text-tertiary)]">
            <li>\u2022 {t.resp1}</li>
            <li>\u2022 {t.resp2}</li>
            <li>\u2022 {t.resp3}</li>
          </ul>
          <ul className="space-y-3 text-[var(--color-text-tertiary)]">
            <li>\u2022 {t.resp4}</li>
            <li>\u2022 {t.resp5}</li>
            <li>\u2022 {t.resp6}</li>
          </ul>
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-6">
          {t.toolsTitle}
        </h2>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Sketch
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Abstract
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            InVision
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Principle
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Smaply
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Google Analytics
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Hotjar
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Draw.io
          </span>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <RelatedProjects current="/enel-one-hub" />
      </section>
    </>
  );
}
