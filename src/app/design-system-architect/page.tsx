"use client";

import RelatedProjects from "@/components/RelatedProjects";
import { useLanguage } from "@/i18n/LanguageContext";

const competencyIcons = [
  // Token Architecture
  <svg key="token" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
  </svg>,
  // Component Architecture
  <svg key="component" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875S10.5 3.09 10.5 4.125c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.491 48.491 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.657-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
  </svg>,
  // Multi-brand Systems
  <svg key="multibrand" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>,
  // Design-to-Code Pipeline
  <svg key="pipeline" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>,
  // Governance & Documentation
  <svg key="governance" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>,
  // Team Enablement
  <svg key="team" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
];

const timelineStyles = [
  { accent: "bg-purple-500/20 border-purple-500/40", dot: "bg-purple-500" },
  { accent: "bg-indigo-500/20 border-indigo-500/40", dot: "bg-indigo-500" },
  { accent: "bg-blue-500/20 border-blue-500/40", dot: "bg-blue-500" },
  { accent: "bg-cyan-500/20 border-cyan-500/40", dot: "bg-cyan-500" },
  { accent: "bg-emerald-500/20 border-emerald-500/40", dot: "bg-emerald-500" },
  { accent: "bg-violet-500/20 border-violet-500/40", dot: "bg-violet-500" },
];

const tools = [
  "Figma",
  "Figma Variables",
  "Tokens Studio",
  "Auto Layout",
  "Storybook",
  "Git",
  "Design Tokens (W3C)",
  "Figma API",
];

const i18n = {
  en: {
    caseStudy: "Case Study",
    heroTitle: "Design System Architect",
    heroSubtitle:
      "Building scalable, multi-brand design systems that bridge design and development",
    tag1: "Design Systems",
    tag2: "Token Architecture",
    tag3: "Multi-brand",
    overviewTitle: "Overview",
    overviewP1:
      "As a Design System Architect, I create the foundational architecture that connects design tokens, components, and documentation to enable consistent, scalable digital products across multiple brands and platforms.",
    overviewP2:
      "My work sits at the intersection of design and engineering -- defining the structures, conventions, and workflows that allow teams to build faster while maintaining quality and coherence. From semantic token hierarchies to component APIs, from governance models to adoption strategies, I approach design systems as living products that need thoughtful architecture to thrive.",
    competenciesTitle: "Core Competencies",
    competenciesSubtitle:
      "The key disciplines I bring to every design system initiative",
    competencies: [
      {
        title: "Token Architecture",
        description:
          "Designing semantic token structures for colors, typography, spacing, and elevation that support multi-brand theming.",
      },
      {
        title: "Component Architecture",
        description:
          "Building composable, accessible components following atomic design principles with clear API boundaries.",
      },
      {
        title: "Multi-brand Systems",
        description:
          "Creating design systems that serve multiple brands through token-based theming and Figma variables.",
      },
      {
        title: "Design-to-Code Pipeline",
        description:
          "Establishing workflows between Figma and development using variables, tokens, and auto-layout.",
      },
      {
        title: "Governance & Documentation",
        description:
          "Setting up contribution guidelines, versioning strategies, and living documentation for sustainable systems.",
      },
      {
        title: "Team Enablement",
        description:
          "Training designers and developers on design system adoption, best practices, and collaborative workflows.",
      },
    ],
    evolutionTitle: "Evolution of My Approach",
    evolutionSubtitle:
      "A decade of growth in design systems, from foundational theory to advanced multi-brand architectures",
    timeline: [
      {
        year: "2016",
        title: "Foundations",
        description:
          "Began studying Atomic Design by Brad Frost, building a deep understanding of modular, scalable design architectures that would shape my entire career approach.",
      },
      {
        year: "2018-2019",
        title: "First Implementation",
        description:
          "Built my first design system implementation at Enel Italia using Adobe XD. Worked with Google Material Design using Sketch and Abstract, deepening component-based design expertise.",
      },
      {
        year: "2019",
        title: "Material Design Adaptation",
        description:
          "Joined Banco Ripley as UX Lead at Chek, adapting Material Design as the foundation for consistent, accessible user experiences across digital products.",
      },
      {
        year: "2020-2021",
        title: "Multibranding with Tokens Studio",
        description:
          "Discovered the power of design tokens through Marcelo Paiva's masterclass. Built my first Multibranding Design System with Tokens Studio and Auto Layout at Banco Ripley Corporate.",
      },
      {
        year: "2023-2024",
        title: "Advanced Multibranding with Variables",
        description:
          "At Autonomus, built an advanced Multibranding Design System leveraging Figma Variables for a highly adaptable system serving both backoffice and consumer-facing products.",
      },
      {
        year: "Present",
        title: "AI-Assisted Architecture",
        description:
          "Combining AI-assisted workflows with design system architecture, exploring new frontiers in automated token generation, component scaffolding, and design-to-code pipelines.",
      },
    ],
    achievementsTitle: "Key Achievements",
    achievementsSubtitle:
      "Measurable impact through design system leadership",
    achievements: [
      {
        metric: "27+",
        label: "Team Members",
        detail:
          "Scaled the design system across a multidisciplinary team at Banco Ripley",
      },
      {
        metric: "3+",
        label: "Brands Served",
        detail:
          "Multi-brand tokens serving Banco Ripley, Seguros Ripley, and multiple platforms",
      },
      {
        metric: "5",
        label: "Platforms",
        detail:
          "PWA, public website, insurance portal, backoffice, and service kiosks",
      },
      {
        metric: "OKRs",
        label: "Governance",
        detail:
          "Created governance workflows and OKRs to measure design system adoption and impact",
      },
    ],
    additionalImpactTitle: "Additional Impact",
    additionalImpactItems: [
      "Reduced design-to-development handoff time significantly by establishing shared token structures and component documentation",
      "Built design systems for both large enterprises (Banco Ripley, Enel) and agile startups (Autonomus), adapting scale and process to each context",
      "Evangelized design system practices across the organization, driving adoption from leadership to individual contributors",
    ],
    toolsTitle: "Tools & Technologies",
    toolsSubtitle: "The toolkit that powers my design system work",
    methodologyTitle: "Methodology",
    methodologySubtitle:
      "A systematic approach to building and scaling design systems",
    methodologySteps: [
      {
        step: "01",
        title: "Audit",
        description:
          "Analyze existing patterns, inconsistencies, and opportunities across all products and platforms.",
      },
      {
        step: "02",
        title: "Define Tokens",
        description:
          "Establish the token architecture with global, alias, and component-level tokens for multi-brand support.",
      },
      {
        step: "03",
        title: "Build Core",
        description:
          "Create foundational components following atomic design, ensuring accessibility and composability.",
      },
      {
        step: "04",
        title: "Document",
        description:
          "Write usage guidelines, dos and don'ts, and create living documentation to evangelize adoption.",
      },
      {
        step: "05",
        title: "Measure",
        description:
          "Track adoption metrics, component coverage, and design-to-dev handoff efficiency through OKRs.",
      },
      {
        step: "06",
        title: "Iterate",
        description:
          "Continuously refine based on team feedback, new platform needs, and evolving design patterns.",
      },
    ],
    flowRepeat: "(repeat)",
  },
  es: {
    caseStudy: "Caso de Estudio",
    heroTitle: "Arquitecto de Design Systems",
    heroSubtitle:
      "Construyendo design systems escalables y multimarca que conectan diseno y desarrollo",
    tag1: "Design Systems",
    tag2: "Arquitectura de Tokens",
    tag3: "Multimarca",
    overviewTitle: "Descripcion General",
    overviewP1:
      "Como Arquitecto de Design Systems, creo la arquitectura fundacional que conecta design tokens, componentes y documentacion para habilitar productos digitales consistentes y escalables a traves de multiples marcas y plataformas.",
    overviewP2:
      "Mi trabajo se situa en la interseccion entre diseno e ingenieria -- definiendo las estructuras, convenciones y flujos de trabajo que permiten a los equipos construir mas rapido manteniendo la calidad y la coherencia. Desde jerarquias de tokens semanticos hasta APIs de componentes, desde modelos de gobernanza hasta estrategias de adopcion, abordo los design systems como productos vivos que necesitan una arquitectura reflexiva para prosperar.",
    competenciesTitle: "Competencias Clave",
    competenciesSubtitle:
      "Las disciplinas clave que aporto a cada iniciativa de design system",
    competencies: [
      {
        title: "Arquitectura de Tokens",
        description:
          "Disenando estructuras de tokens semanticos para colores, tipografia, espaciado y elevacion que soportan tematizacion multimarca.",
      },
      {
        title: "Arquitectura de Componentes",
        description:
          "Construyendo componentes componibles y accesibles siguiendo principios de diseno atomico con limites de API claros.",
      },
      {
        title: "Sistemas Multimarca",
        description:
          "Creando design systems que sirven a multiples marcas a traves de tematizacion basada en tokens y variables de Figma.",
      },
      {
        title: "Pipeline Diseno-a-Codigo",
        description:
          "Estableciendo flujos de trabajo entre Figma y desarrollo usando variables, tokens y auto-layout.",
      },
      {
        title: "Gobernanza y Documentacion",
        description:
          "Configurando guias de contribucion, estrategias de versionado y documentacion viva para sistemas sostenibles.",
      },
      {
        title: "Habilitacion de Equipos",
        description:
          "Capacitando a disenadores y desarrolladores en la adopcion de design systems, mejores practicas y flujos de trabajo colaborativos.",
      },
    ],
    evolutionTitle: "Evolucion de mi Enfoque",
    evolutionSubtitle:
      "Una decada de crecimiento en design systems, desde la teoria fundacional hasta arquitecturas multimarca avanzadas",
    timeline: [
      {
        year: "2016",
        title: "Fundamentos",
        description:
          "Comence a estudiar Atomic Design de Brad Frost, construyendo una comprension profunda de arquitecturas de diseno modulares y escalables que darian forma a todo mi enfoque profesional.",
      },
      {
        year: "2018-2019",
        title: "Primera Implementacion",
        description:
          "Construi mi primera implementacion de design system en Enel Italia usando Adobe XD. Trabaje con Google Material Design usando Sketch y Abstract, profundizando la experiencia en diseno basado en componentes.",
      },
      {
        year: "2019",
        title: "Adaptacion de Material Design",
        description:
          "Me uni a Banco Ripley como UX Lead en Chek, adaptando Material Design como base para experiencias de usuario consistentes y accesibles en productos digitales.",
      },
      {
        year: "2020-2021",
        title: "Multibranding con Tokens Studio",
        description:
          "Descubri el poder de los design tokens a traves de la masterclass de Marcelo Paiva. Construi mi primer Design System Multimarca con Tokens Studio y Auto Layout en Banco Ripley Corporate.",
      },
      {
        year: "2023-2024",
        title: "Multibranding Avanzado con Variables",
        description:
          "En Autonomus, construi un Design System Multimarca avanzado aprovechando Figma Variables para un sistema altamente adaptable que servia tanto a productos de backoffice como orientados al consumidor.",
      },
      {
        year: "Presente",
        title: "Arquitectura Asistida por IA",
        description:
          "Combinando flujos de trabajo asistidos por IA con arquitectura de design systems, explorando nuevas fronteras en generacion automatizada de tokens, scaffolding de componentes y pipelines de diseno a codigo.",
      },
    ],
    achievementsTitle: "Logros Clave",
    achievementsSubtitle:
      "Impacto medible a traves del liderazgo de design systems",
    achievements: [
      {
        metric: "27+",
        label: "Miembros del Equipo",
        detail:
          "Escale el design system a traves de un equipo multidisciplinario en Banco Ripley",
      },
      {
        metric: "3+",
        label: "Marcas Atendidas",
        detail:
          "Tokens multimarca sirviendo a Banco Ripley, Seguros Ripley y multiples plataformas",
      },
      {
        metric: "5",
        label: "Plataformas",
        detail:
          "PWA, sitio web publico, portal de seguros, backoffice y kioscos de servicio",
      },
      {
        metric: "OKRs",
        label: "Gobernanza",
        detail:
          "Cree flujos de gobernanza y OKRs para medir la adopcion e impacto del design system",
      },
    ],
    additionalImpactTitle: "Impacto Adicional",
    additionalImpactItems: [
      "Reduci significativamente el tiempo de traspaso diseno-desarrollo al establecer estructuras de tokens compartidas y documentacion de componentes",
      "Construi design systems tanto para grandes empresas (Banco Ripley, Enel) como para startups agiles (Autonomus), adaptando la escala y el proceso a cada contexto",
      "Evangelice las practicas de design system en toda la organizacion, impulsando la adopcion desde el liderazgo hasta los contribuidores individuales",
    ],
    toolsTitle: "Herramientas y Tecnologias",
    toolsSubtitle: "El toolkit que impulsa mi trabajo en design systems",
    methodologyTitle: "Metodologia",
    methodologySubtitle:
      "Un enfoque sistematico para construir y escalar design systems",
    methodologySteps: [
      {
        step: "01",
        title: "Auditoria",
        description:
          "Analizar patrones existentes, inconsistencias y oportunidades en todos los productos y plataformas.",
      },
      {
        step: "02",
        title: "Definir Tokens",
        description:
          "Establecer la arquitectura de tokens con tokens globales, alias y a nivel de componente para soporte multimarca.",
      },
      {
        step: "03",
        title: "Construir Base",
        description:
          "Crear componentes fundacionales siguiendo diseno atomico, asegurando accesibilidad y componibilidad.",
      },
      {
        step: "04",
        title: "Documentar",
        description:
          "Escribir guias de uso, lo que se debe y no se debe hacer, y crear documentacion viva para evangelizar la adopcion.",
      },
      {
        step: "05",
        title: "Medir",
        description:
          "Rastrear metricas de adopcion, cobertura de componentes y eficiencia de traspaso diseno-desarrollo a traves de OKRs.",
      },
      {
        step: "06",
        title: "Iterar",
        description:
          "Refinar continuamente basandose en feedback del equipo, nuevas necesidades de plataforma y patrones de diseno en evolucion.",
      },
    ],
    flowRepeat: "(repetir)",
  },
} as const;

export default function DesignSystemArchitectPage() {
  const { locale } = useLanguage();
  const t = i18n[locale];

  return (
    <article>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 pt-22 pb-22 text-center">
        <p className="text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-4">
          {t.caseStudy}
        </p>
        <h1 className="font-heading text-display-lg tracking-display mb-4">
          {t.heroTitle}
        </h1>
        <p className="text-body-lg text-[var(--color-text-secondary)] mb-8">
          {t.heroSubtitle}
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <span className="px-3 py-1 text-xs font-medium font-mono border border-[var(--color-border)] text-[var(--color-text-secondary)]">
            {t.tag1}
          </span>
          <span className="px-3 py-1 text-xs font-medium font-mono border border-[var(--color-border)] text-[var(--color-text-secondary)]">
            {t.tag2}
          </span>
          <span className="px-3 py-1 text-xs font-medium font-mono border border-[var(--color-border)] text-[var(--color-text-secondary)]">
            {t.tag3}
          </span>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22">
        <h2 className="font-heading text-display-md tracking-display mb-8">{t.overviewTitle}</h2>
        <div className="space-y-6 text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
          <p>{t.overviewP1}</p>
          <p>{t.overviewP2}</p>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-md tracking-display mb-4">
            {t.competenciesTitle}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-lg  mx-auto">
            {t.competenciesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.competencies.map((comp, i) => (
            <div
              key={comp.title}
              className="group p-6 border border-[var(--color-border)] theme-transition hover:border-[var(--color-text-tertiary)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                {competencyIcons[i]}
              </div>
              <h3 className="text-lg italic text-[var(--color-text-primary)] mb-2">
                {comp.title}
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm leading-relaxed">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Evolution of My Approach */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-md tracking-display mb-4">
            {t.evolutionTitle}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-lg  mx-auto">
            {t.evolutionSubtitle}
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-indigo-500/50 to-violet-500/50" />

          <div className="space-y-8">
            {t.timeline.map((item, i) => (
              <div key={item.year} className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div
                  className={`absolute left-3 md:left-4 top-1.5 w-3 h-3 rounded-full ${timelineStyles[i].dot} ring-4 ring-black`}
                />

                <div
                  className={`p-5 border ${timelineStyles[i].accent} backdrop-blur-sm`}
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-sm font-mono font-bold text-[var(--color-text-tertiary)]">
                      {item.year}
                    </span>
                    <h3 className="text-lg italic text-[var(--color-text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-md tracking-display mb-4">
            {t.achievementsTitle}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-lg  mx-auto">
            {t.achievementsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.achievements.map((item) => (
            <div
              key={item.label}
              className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-[var(--color-border)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full" />
              <div className="relative">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {item.metric}
                </span>
                <p className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mt-1 mb-3">
                  {item.label}
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional achievements list */}
        <div className="mt-8 p-6 border border-[var(--color-border)] theme-transition">
          <h3 className="text-lg italic text-[var(--color-text-primary)] mb-4">
            {t.additionalImpactTitle}
          </h3>
          <ul className="space-y-3 text-[var(--color-text-secondary)]">
            {t.additionalImpactItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-md tracking-display mb-4">
            {t.toolsTitle}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-lg  mx-auto">
            {t.toolsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="group flex items-center justify-center p-4 border border-[var(--color-border)] theme-transition hover:border-[var(--color-text-tertiary)] transition-all duration-300 text-center"
            >
              <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-purple-300 transition-colors">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-md tracking-display mb-4">{t.methodologyTitle}</h2>
          <p className="text-[var(--color-text-tertiary)] text-lg  mx-auto">
            {t.methodologySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.methodologySteps.map((item) => (
            <div
              key={item.step}
              className="relative p-6 border border-[var(--color-border)] theme-transition"
            >
              <span className="text-4xl font-bold text-indigo-500/20 absolute top-4 right-5">
                {item.step}
              </span>
              <div className="relative">
                <h3 className="text-lg italic text-[var(--color-text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-tertiary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary arrow flow */}
        <div className="mt-10 flex items-center justify-center gap-2 flex-wrap text-sm text-[var(--color-text-tertiary)] font-mono">
          <span className="text-indigo-400 font-medium">{t.methodologySteps[0].title}</span>
          <span>&rarr;</span>
          <span className="text-indigo-400 font-medium">{t.methodologySteps[1].title}</span>
          <span>&rarr;</span>
          <span className="text-indigo-400 font-medium">{t.methodologySteps[2].title}</span>
          <span>&rarr;</span>
          <span className="text-indigo-400 font-medium">{t.methodologySteps[3].title}</span>
          <span>&rarr;</span>
          <span className="text-indigo-400 font-medium">{t.methodologySteps[4].title}</span>
          <span>&rarr;</span>
          <span className="text-indigo-400 font-medium">{t.methodologySteps[5].title}</span>
          <span className="text-gray-600 ml-1">{t.flowRepeat}</span>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 pb-22">
        <RelatedProjects current="/design-system-architect" />
      </section>
    </article>
  );
}
