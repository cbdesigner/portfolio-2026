"use client";

import RelatedProjects from "@/components/RelatedProjects";
import { useLanguage } from "@/i18n/LanguageContext";

const phaseColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  discovery: { bg: "bg-white/5", border: "border-[var(--color-border)]", text: "text-[var(--color-text-secondary)]", dot: "bg-[var(--color-text-tertiary)]" },
  creation: { bg: "bg-white/5", border: "border-[var(--color-border)]", text: "text-[var(--color-text-secondary)]", dot: "bg-[var(--color-text-tertiary)]" },
  development: { bg: "bg-white/5", border: "border-[var(--color-border)]", text: "text-[var(--color-text-secondary)]", dot: "bg-[var(--color-text-tertiary)]" },
  scaling: { bg: "bg-white/5", border: "border-[var(--color-border)]", text: "text-[var(--color-text-secondary)]", dot: "bg-[var(--color-text-tertiary)]" },
};

const baseComponents = [
  "Button", "Input", "Alert", "Toggle", "Icons",
  "Skeleton", "Accordion", "Drawer", "Notifications",
  "Search Auto Complete", "Mode Toggle", "Status Page",
  "Table", "Filters", "Card Form",
];

const designTools = [
  "Figma",
  "Design Tokens to Code (Figma Plugin)",
  "Figma Variables",
  "Storybook",
];

const devTools = [
  "Web Components",
  "Angular",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "SASS / SCSS",
  "NPM",
  "Workflow Figma to Code (Custom Pipeline)",
];

const managementTools = [
  "Jira (Roadmap & Sprint Tracking)",
  "Confluence",
  "Slack",
];

const i18n = {
  en: {
    caseStudy: "Case Study \u00B7 2025 \u2013 2026",
    title: "Bupa Design System",
    subtitle: "Building an enterprise-grade tokenized Design System from scratch for one of the world\u2019s leading healthcare companies",
    description: "As Design System Architect, I led the creation of a fully tokenized Design System in Figma, recruiting and coordinating a specialized team of a Front-end Engineer and a Design System Designer. The system serves 5 digital products with 50+ base components, 1000+ tokens, and support for Light & Dark themes.",
    tags: ["Design System Architecture", "Token-based Design", "Team Recruitment", "Multi-product"],
    myRole: "My Role",
    roleArchitectTitle: "Design System Architect",
    roleArchitectBullets: [
      "Defined the complete Design System architecture and token structure",
      "Created all foundations from scratch in Figma (colors, typography, spacing, effects)",
      "Designed the Figma-to-Code pipeline using Design Tokens and Style Dictionary",
      "Applied my own 5-stage methodology for Design System creation",
    ],
    roleLeadershipTitle: "Team Recruitment & Leadership",
    roleLeadershipBullets: [
      "Recruited a specialized Front-end Engineer for component development",
      "Recruited a Design System Designer to maintain and scale the system",
      "Coordinated staggered design and development sprints",
      "Managed the project roadmap across 16+ sprints in Jira",
    ],
    methodologyTitle: "Methodology Applied",
    methodologyDesc: "I applied my own 5-stage Design System methodology to this project, adapting it to Bupa\u2019s enterprise context and multi-product needs.",
    methodologySteps: [
      { label: "Discovery", desc: "Audit existing UI, map products, identify pain points and stakeholders" },
      { label: "Creation", desc: "Define tokens, build foundations, design core components in Figma" },
      { label: "Dev & Docs", desc: "Develop components in code, create Storybook docs, set up pipelines" },
      { label: "Training", desc: "Onboard teams, run workshops, create adoption guides" },
      { label: "Maintenance", desc: "Version control, governance model, continuous iteration" },
    ],
    viewMethodology: "View full methodology \u2192",
    foundationsTitle: "Foundations",
    foundationsDesc: "The semantic foundation layer defines all visual primitives using Figma Variables, supporting Light and Dark themes with 1000+ tokens.",
    foundations: [
      { name: "Color Tokens", detail: "Primitive & Semantic colors with Light and Dark mode support" },
      { name: "Typography", detail: "Type scale, font styles, and responsive text system" },
      { name: "Spacers & Layout", detail: "Spacing tokens, grid system, and responsive layout guides" },
      { name: "Effects", detail: "Shadow and blur tokens for elevation and depth" },
      { name: "Iconography", detail: "Icon library configured and integrated in Figma" },
      { name: "Logos", detail: "Brand logos organized and documented for all contexts" },
    ],
    componentLibraryTitle: "Component Library",
    componentLibraryDesc: "50+ interactive base components with full property controls, multiple states (Default, Hover, Focus, Active, Disabled), responsive sizes (xs to xl), and icon alignment options.",
    componentLibraryNote: "Each component is fully documented with properties, variants, auto-layout, and responsive behavior. Version-controlled in Figma (e.g., Button_v4.0.0, Alert_v5.0.1).",
    digitalProductsTitle: "Digital Products",
    digitalProductsDesc: "The Design System powers 5 interconnected digital products, each with custom components built on top of the shared foundation.",
    products: [
      {
        name: "Bupa_Design_System_v1.0.0",
        description: "The core tokenized design system with 50+ base components, foundations, and a complete component library in Figma.",
        components: "50+ components with hundreds of variants",
        status: "Live",
      },
      {
        name: "Bupa_Agenda",
        description: "Appointment scheduling system for medical centers, with responsive flows for booking, rescheduling, and managing consultations.",
        components: "Agenda-specific components",
        status: "In development",
      },
      {
        name: "Bupa_Payment",
        description: "Payment processing flows integrated with the design system, ensuring consistent and accessible financial transactions.",
        components: "Payment-specific components",
        status: "In development",
      },
      {
        name: "Bupa_Mi_Portal",
        description: "Customer portal with personalized health management features, built entirely with design system components.",
        components: "Portal-specific components",
        status: "In development",
      },
      {
        name: "Bupa_Caja",
        description: "Cashier and billing system for medical services, extending the design system with specialized financial components.",
        components: "Caja-specific components",
        status: "In development",
      },
    ],
    pipelineTitle: "Development Pipeline",
    pipelineDesc: "A custom Figma-to-Code workflow transforms design tokens into production-ready code across multiple platforms.",
    pipelineSteps: [
      {
        step: "01",
        title: "Define Tokens",
        desc: "Visual values defined in Figma using Variables (Primitive & Semantic)",
        tool: "Figma",
      },
      {
        step: "02",
        title: "Export JSON",
        desc: "Tokens extracted via Design Tokens to Code plugin as structured JSON",
        tool: "Figma Plugin",
      },
      {
        step: "03",
        title: "Transform",
        desc: "Custom pipeline parses JSON and generates CSS, SCSS, and Tailwind outputs",
        tool: "NPM  Custom",
      },
      {
        step: "04",
        title: "Build & Document",
        desc: "Web Components built with tokens, documented in Storybook for all teams",
        tool: "Storybook",
      },
    ],
    outputFormats: "Output formats:",
    outputFormatsDesc: "CSS custom properties, SCSS variables, Tailwind CSS utilities, and Light/Dark theme files \u2014 supporting Web Components, Angular, and React integrations.",
    timelineTitle: "Project Timeline",
    timelineDesc: "16+ sprints from July 2025 to April 2026, following staggered design and development cycles managed in Jira.",
    timeline: [
      {
        sprint: "Sprint 0",
        date: "Jul 2025",
        phase: "discovery",
        items: ["Design Foundations (Color, Typography, Spacing, Effects)"],
        status: "done",
      },
      {
        sprint: "Sprint 1",
        date: "Aug 2025",
        phase: "discovery",
        items: [
          "Pipeline Development (Figma to Code workflow)",
          "Design Base Components",
        ],
        status: "done",
      },
      {
        sprint: "Sprint 2\u20133",
        date: "Sep 2025",
        phase: "creation",
        items: [
          "Develop Foundations (tokens export & transformation)",
          "Design Base Components completion",
          "Begin developing Base Components",
        ],
        status: "done",
      },
      {
        sprint: "Sprint 4\u20135",
        date: "Oct 2025",
        phase: "creation",
        items: [
          "Design Custom Components & Pages",
          "Design & Develop Placeholder Components",
          "Training sessions for internal teams",
        ],
        status: "done",
      },
      {
        sprint: "Sprint 6\u20137",
        date: "Nov 2025",
        phase: "development",
        items: [
          "Develop Custom Components & Pages",
          "Validation & QA",
          "Continue Base Component development",
        ],
        status: "done",
      },
      {
        sprint: "Sprint 8\u20139",
        date: "Dec 2025",
        phase: "development",
        items: [
          "Complete Design Custom Components",
          "Finalize Base Component development",
        ],
        status: "done",
      },
      {
        sprint: "Sprint 10\u201311",
        date: "Jan 2026",
        phase: "scaling",
        items: [
          "Design System Administration setup",
          "Global Components (transversal)",
          "Agenda Components",
        ],
        status: "current",
      },
      {
        sprint: "Sprint 12\u201313",
        date: "Feb 2026",
        phase: "scaling",
        items: [
          "Payment Components",
          "Mi Portal Components",
          "Caja Components kickoff",
        ],
        status: "current",
      },
      {
        sprint: "Sprint 14\u201316",
        date: "Mar\u2013Apr 2026",
        phase: "scaling",
        items: [
          "Caja Components completion",
          "Global Components expansion",
          "Ongoing maintenance & iteration",
        ],
        status: "upcoming",
      },
    ],
    statusDone: "Done",
    statusInProgress: "In progress",
    statusUpcoming: "Upcoming",
    metricsTitle: "Key Metrics",
    metrics: [
      { metric: "50+", label: "Base Components", detail: "With full variants & states" },
      { metric: "5", label: "Digital Products", detail: "Powered by the system" },
      { metric: "1000+", label: "Design Tokens", detail: "Primitive & Semantic" },
      { metric: "16+", label: "Sprints Delivered", detail: "Jul 2025 \u2013 Apr 2026" },
    ],
    toolsTitle: "Tools & Technologies",
    toolsDesign: "Design",
    toolsDevelopment: "Development",
    toolsManagement: "Management",
    teamTitle: "Team Structure",
    teamArchitectTitle: "Design System Architect",
    teamArchitectName: "Carlos Baeza (me)",
    teamArchitectDesc: "Architecture, foundations, methodology, pipeline design, team recruitment",
    teamDesignerTitle: "Design System Designer",
    teamDesignerRecruited: "Recruited by me",
    teamDesignerDesc: "Component design, Figma library maintenance, documentation",
    teamEngineerTitle: "Front-end Engineer",
    teamEngineerRecruited: "Recruited by me",
    teamEngineerDesc: "Web Components development, Storybook, token pipeline implementation",
  },
  es: {
    caseStudy: "Caso de Estudio \u00B7 2025 \u2013 2026",
    title: "Bupa Design System",
    subtitle: "Construyendo un Design System tokenizado de nivel enterprise desde cero para una de las principales empresas de salud del mundo",
    description: "Como Arquitecto de Design System, lider\u00E9 la creaci\u00F3n de un Design System completamente tokenizado en Figma, reclutando y coordinando un equipo especializado de un Ingeniero Front-end y un Dise\u00F1ador de Design System. El sistema sirve a 5 productos digitales con m\u00E1s de 50 componentes base, m\u00E1s de 1000 tokens y soporte para temas Light y Dark.",
    tags: ["Arquitectura de Design System", "Dise\u00F1o basado en Tokens", "Reclutamiento de Equipo", "Multi-producto"],
    myRole: "Mi Rol",
    roleArchitectTitle: "Arquitecto de Design System",
    roleArchitectBullets: [
      "Defin\u00ED la arquitectura completa del Design System y la estructura de tokens",
      "Cre\u00E9 todos los fundamentos desde cero en Figma (colores, tipograf\u00EDa, espaciado, efectos)",
      "Dise\u00F1\u00E9 el pipeline de Figma a C\u00F3digo usando Design Tokens y Style Dictionary",
      "Apliqu\u00E9 mi propia metodolog\u00EDa de 5 etapas para la creaci\u00F3n de Design Systems",
    ],
    roleLeadershipTitle: "Reclutamiento y Liderazgo de Equipo",
    roleLeadershipBullets: [
      "Reclut\u00E9 un Ingeniero Front-end especializado para el desarrollo de componentes",
      "Reclut\u00E9 un Dise\u00F1ador de Design System para mantener y escalar el sistema",
      "Coordin\u00E9 sprints de dise\u00F1o y desarrollo escalonados",
      "Gestion\u00E9 el roadmap del proyecto a lo largo de m\u00E1s de 16 sprints en Jira",
    ],
    methodologyTitle: "Metodolog\u00EDa Aplicada",
    methodologyDesc: "Apliqu\u00E9 mi propia metodolog\u00EDa de Design System de 5 etapas a este proyecto, adapt\u00E1ndola al contexto enterprise de Bupa y sus necesidades multi-producto.",
    methodologySteps: [
      { label: "Descubrimiento", desc: "Auditar UI existente, mapear productos, identificar pain points y stakeholders" },
      { label: "Creaci\u00F3n", desc: "Definir tokens, construir fundamentos, dise\u00F1ar componentes core en Figma" },
      { label: "Dev y Docs", desc: "Desarrollar componentes en c\u00F3digo, crear docs en Storybook, configurar pipelines" },
      { label: "Capacitaci\u00F3n", desc: "Onboarding de equipos, talleres pr\u00E1cticos, gu\u00EDas de adopci\u00F3n" },
      { label: "Mantenimiento", desc: "Versionado, modelo de gobernanza, iteraci\u00F3n continua" },
    ],
    viewMethodology: "Ver metodolog\u00EDa completa \u2192",
    foundationsTitle: "Fundamentos",
    foundationsDesc: "La capa de fundamentos sem\u00E1nticos define todas las primitivas visuales usando Figma Variables, soportando temas Light y Dark con m\u00E1s de 1000 tokens.",
    foundations: [
      { name: "Tokens de Color", detail: "Colores Primitivos y Sem\u00E1nticos con soporte para modo Light y Dark" },
      { name: "Tipograf\u00EDa", detail: "Escala tipogr\u00E1fica, estilos de fuente y sistema de texto responsivo" },
      { name: "Espaciado y Layout", detail: "Tokens de espaciado, sistema de grilla y gu\u00EDas de layout responsivo" },
      { name: "Efectos", detail: "Tokens de sombra y desenfoque para elevaci\u00F3n y profundidad" },
      { name: "Iconograf\u00EDa", detail: "Biblioteca de iconos configurada e integrada en Figma" },
      { name: "Logos", detail: "Logos de marca organizados y documentados para todos los contextos" },
    ],
    componentLibraryTitle: "Librer\u00EDa de Componentes",
    componentLibraryDesc: "M\u00E1s de 50 componentes base interactivos con controles de propiedades completos, m\u00FAltiples estados (Default, Hover, Focus, Active, Disabled), tama\u00F1os responsivos (xs a xl) y opciones de alineaci\u00F3n de iconos.",
    componentLibraryNote: "Cada componente est\u00E1 completamente documentado con propiedades, variantes, auto-layout y comportamiento responsivo. Control de versiones en Figma (ej., Button_v4.0.0, Alert_v5.0.1).",
    digitalProductsTitle: "Productos Digitales",
    digitalProductsDesc: "El Design System impulsa 5 productos digitales interconectados, cada uno con componentes personalizados construidos sobre la base compartida.",
    products: [
      {
        name: "Bupa_Design_System_v1.0.0",
        description: "El design system tokenizado central con m\u00E1s de 50 componentes base, fundamentos y una librer\u00EDa de componentes completa en Figma.",
        components: "M\u00E1s de 50 componentes con cientos de variantes",
        status: "En producci\u00F3n",
      },
      {
        name: "Bupa_Agenda",
        description: "Sistema de agendamiento de citas para centros m\u00E9dicos, con flujos responsivos para reserva, reprogramaci\u00F3n y gesti\u00F3n de consultas.",
        components: "Componentes espec\u00EDficos de Agenda",
        status: "En desarrollo",
      },
      {
        name: "Bupa_Payment",
        description: "Flujos de procesamiento de pagos integrados con el design system, asegurando transacciones financieras consistentes y accesibles.",
        components: "Componentes espec\u00EDficos de Pagos",
        status: "En desarrollo",
      },
      {
        name: "Bupa_Mi_Portal",
        description: "Portal del cliente con funcionalidades personalizadas de gesti\u00F3n de salud, construido completamente con componentes del design system.",
        components: "Componentes espec\u00EDficos del Portal",
        status: "En desarrollo",
      },
      {
        name: "Bupa_Caja",
        description: "Sistema de caja y facturaci\u00F3n para servicios m\u00E9dicos, extendiendo el design system con componentes financieros especializados.",
        components: "Componentes espec\u00EDficos de Caja",
        status: "En desarrollo",
      },
    ],
    pipelineTitle: "Pipeline de Desarrollo",
    pipelineDesc: "Un flujo de trabajo personalizado de Figma a C\u00F3digo transforma los tokens de dise\u00F1o en c\u00F3digo listo para producci\u00F3n en m\u00FAltiples plataformas.",
    pipelineSteps: [
      {
        step: "01",
        title: "Definir Tokens",
        desc: "Valores visuales definidos en Figma usando Variables (Primitivos y Sem\u00E1nticos)",
        tool: "Figma",
      },
      {
        step: "02",
        title: "Exportar JSON",
        desc: "Tokens extra\u00EDdos v\u00EDa plugin Design Tokens to Code como JSON estructurado",
        tool: "Figma Plugin",
      },
      {
        step: "03",
        title: "Transformar",
        desc: "Pipeline personalizado parsea JSON y genera salidas CSS, SCSS y Tailwind",
        tool: "NPM  Custom",
      },
      {
        step: "04",
        title: "Construir y Documentar",
        desc: "Web Components construidos con tokens, documentados en Storybook para todos los equipos",
        tool: "Storybook",
      },
    ],
    outputFormats: "Formatos de salida:",
    outputFormatsDesc: "Propiedades personalizadas CSS, variables SCSS, utilidades Tailwind CSS y archivos de temas Light/Dark \u2014 soportando integraciones con Web Components, Angular y React.",
    timelineTitle: "L\u00EDnea de Tiempo del Proyecto",
    timelineDesc: "M\u00E1s de 16 sprints desde julio 2025 hasta abril 2026, siguiendo ciclos de dise\u00F1o y desarrollo escalonados gestionados en Jira.",
    timeline: [
      {
        sprint: "Sprint 0",
        date: "Jul 2025",
        phase: "discovery",
        items: ["Fundamentos de Dise\u00F1o (Color, Tipograf\u00EDa, Espaciado, Efectos)"],
        status: "done",
      },
      {
        sprint: "Sprint 1",
        date: "Ago 2025",
        phase: "discovery",
        items: [
          "Desarrollo del Pipeline (flujo Figma a C\u00F3digo)",
          "Dise\u00F1o de Componentes Base",
        ],
        status: "done",
      },
      {
        sprint: "Sprint 2\u20133",
        date: "Sep 2025",
        phase: "creation",
        items: [
          "Desarrollar Fundamentos (exportaci\u00F3n y transformaci\u00F3n de tokens)",
          "Completar Dise\u00F1o de Componentes Base",
          "Iniciar desarrollo de Componentes Base",
        ],
        status: "done",
      },
      {
        sprint: "Sprint 4\u20135",
        date: "Oct 2025",
        phase: "creation",
        items: [
          "Dise\u00F1ar Componentes Custom y P\u00E1ginas",
          "Dise\u00F1ar y Desarrollar Componentes Placeholder",
          "Sesiones de capacitaci\u00F3n para equipos internos",
        ],
        status: "done",
      },
      {
        sprint: "Sprint 6\u20137",
        date: "Nov 2025",
        phase: "development",
        items: [
          "Desarrollar Componentes Custom y P\u00E1ginas",
          "Validaci\u00F3n y QA",
          "Continuar desarrollo de Componentes Base",
        ],
        status: "done",
      },
      {
        sprint: "Sprint 8\u20139",
        date: "Dic 2025",
        phase: "development",
        items: [
          "Completar Dise\u00F1o de Componentes Custom",
          "Finalizar desarrollo de Componentes Base",
        ],
        status: "done",
      },
      {
        sprint: "Sprint 10\u201311",
        date: "Ene 2026",
        phase: "scaling",
        items: [
          "Configuraci\u00F3n de Administraci\u00F3n del Design System",
          "Componentes Globales (transversales)",
          "Componentes de Agenda",
        ],
        status: "current",
      },
      {
        sprint: "Sprint 12\u201313",
        date: "Feb 2026",
        phase: "scaling",
        items: [
          "Componentes de Pagos",
          "Componentes de Mi Portal",
          "Inicio de Componentes de Caja",
        ],
        status: "current",
      },
      {
        sprint: "Sprint 14\u201316",
        date: "Mar\u2013Abr 2026",
        phase: "scaling",
        items: [
          "Completar Componentes de Caja",
          "Expansi\u00F3n de Componentes Globales",
          "Mantenimiento e iteraci\u00F3n continua",
        ],
        status: "upcoming",
      },
    ],
    statusDone: "Completado",
    statusInProgress: "En progreso",
    statusUpcoming: "Pr\u00F3ximo",
    metricsTitle: "M\u00E9tricas Clave",
    metrics: [
      { metric: "50+", label: "Componentes Base", detail: "Con variantes y estados completos" },
      { metric: "5", label: "Productos Digitales", detail: "Impulsados por el sistema" },
      { metric: "1000+", label: "Tokens de Dise\u00F1o", detail: "Primitivos y Sem\u00E1nticos" },
      { metric: "16+", label: "Sprints Entregados", detail: "Jul 2025 \u2013 Abr 2026" },
    ],
    toolsTitle: "Herramientas y Tecnolog\u00EDas",
    toolsDesign: "Dise\u00F1o",
    toolsDevelopment: "Desarrollo",
    toolsManagement: "Gesti\u00F3n",
    teamTitle: "Estructura del Equipo",
    teamArchitectTitle: "Arquitecto de Design System",
    teamArchitectName: "Carlos Baeza (yo)",
    teamArchitectDesc: "Arquitectura, fundamentos, metodolog\u00EDa, dise\u00F1o de pipeline, reclutamiento de equipo",
    teamDesignerTitle: "Dise\u00F1ador de Design System",
    teamDesignerRecruited: "Reclutado por m\u00ED",
    teamDesignerDesc: "Dise\u00F1o de componentes, mantenimiento de librer\u00EDa Figma, documentaci\u00F3n",
    teamEngineerTitle: "Ingeniero Front-end",
    teamEngineerRecruited: "Reclutado por m\u00ED",
    teamEngineerDesc: "Desarrollo de Web Components, Storybook, implementaci\u00F3n del pipeline de tokens",
  },
} as const;

export default function BupaDesignSystemPage() {
  const { locale } = useLanguage();
  const t = i18n[locale];

  return (
    <article>
      {/* 1. Hero / Header */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <p className="text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-4 font-mono">
          {t.caseStudy}
        </p>
        <h1 className="font-heading text-display-lg tracking-display mb-4">
          {t.title}
        </h1>
        <p className="text-body-lg text-[var(--color-text-secondary)] mb-8">
          {t.subtitle}
        </p>
        <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed  mx-auto">
          {t.description}
        </p>
        <div className="flex justify-center gap-3 flex-wrap mt-8">
          {t.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium font-mono border border-[var(--color-border)] text-[var(--color-text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* 2. Project Overview */}
      <section className="w-full px-8 md:px-0 py-8">
        <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
          <img
            src="/images/bupa/roadmap-reference.svg"
            alt="Bupa Design System Project Roadmap - 16+ sprints across Discovery, Creation, Dev & Docs, and Scaling phases"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* 3. Challenge & Opportunity (Role & Context) */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.myRole}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-[var(--color-border)] theme-transition">
            <h3 className="text-lg italic text-[var(--color-text-primary)] mb-3">
              {t.roleArchitectTitle}
            </h3>
            <ul className="space-y-2 text-[var(--color-text-tertiary)] text-sm">
              {t.roleArchitectBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 border border-[var(--color-border)] theme-transition">
            <h3 className="text-lg italic text-[var(--color-text-primary)] mb-3">
              {t.roleLeadershipTitle}
            </h3>
            <ul className="space-y-2 text-[var(--color-text-tertiary)] text-sm">
              {t.roleLeadershipBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Approach (Methodology Applied) */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-4">
          {t.methodologyTitle}
        </h2>
        <p className="text-[var(--color-text-tertiary)] text-lg mb-10">
          {t.methodologyDesc}
        </p>

        {/* Steps - Desktop: horizontal, Mobile: vertical */}
        {(() => {
          const stepColors = [
            { accent: "text-[var(--color-text-primary)]", bg: "bg-white/5", border: "border-[var(--color-border)]", line: "bg-[var(--color-border)]", dot: "bg-[var(--color-text-tertiary)]" },
            { accent: "text-[var(--color-text-primary)]", bg: "bg-white/5", border: "border-[var(--color-border)]", line: "bg-[var(--color-border)]", dot: "bg-[var(--color-text-tertiary)]" },
            { accent: "text-[var(--color-text-primary)]", bg: "bg-white/5", border: "border-[var(--color-border)]", line: "bg-[var(--color-border)]", dot: "bg-[var(--color-text-tertiary)]" },
            { accent: "text-[var(--color-text-primary)]", bg: "bg-white/5", border: "border-[var(--color-border)]", line: "bg-[var(--color-border)]", dot: "bg-[var(--color-text-tertiary)]" },
            { accent: "text-[var(--color-text-primary)]", bg: "bg-white/5", border: "border-[var(--color-border)]", line: "bg-[var(--color-border)]", dot: "bg-[var(--color-text-tertiary)]" },
          ];
          return (
            <>
              {/* Desktop horizontal stepper */}
              <div className="hidden md:block mb-8">
                {/* Connector line */}
                <div className="relative flex items-start justify-between">
                  {/* Horizontal line behind dots */}
                  <div className="absolute top-[14px] left-[28px] right-[28px] h-px bg-[var(--color-border)]" />

                  {t.methodologySteps.map((step: { label: string; desc: string }, i: number) => {
                    const c = stepColors[i];
                    return (
                      <div key={i} className="relative flex flex-col items-center text-center flex-1">
                        {/* Step number circle */}
                        <div className={`relative z-10 w-7 h-7 flex items-center justify-center text-xs font-bold ${c.bg} ${c.border} border ${c.accent} mb-3`} style={{ borderRadius: "50%" }}>
                          {i + 1}
                        </div>
                        {/* Label */}
                        <span className={`text-sm font-semibold ${c.accent} mb-1`}>
                          {step.label}
                        </span>
                        {/* Description */}
                        <span className="text-xs text-[var(--color-text-tertiary)] leading-relaxed max-w-[140px]">
                          {step.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile vertical stepper */}
              <div className="md:hidden mb-8 space-y-0">
                {t.methodologySteps.map((step: { label: string; desc: string }, i: number) => {
                  const c = stepColors[i];
                  const isLast = i === t.methodologySteps.length - 1;
                  return (
                    <div key={i} className="flex gap-4">
                      {/* Left rail: dot + connector */}
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 flex items-center justify-center text-xs font-bold ${c.bg} ${c.border} border ${c.accent} shrink-0`} style={{ borderRadius: "50%" }}>
                          {i + 1}
                        </div>
                        {!isLast && (
                          <div className="w-px flex-1 min-h-[24px] bg-[var(--color-border)]" />
                        )}
                      </div>
                      {/* Right content */}
                      <div className={`pb-6 ${isLast ? "" : ""}`}>
                        <span className={`text-sm font-semibold ${c.accent} block mb-0.5`}>
                          {step.label}
                        </span>
                        <span className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
                          {step.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })()}

        <p className="text-center text-sm text-[var(--color-text-tertiary)]">
          <a href="/ds-methodology" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] underline underline-offset-2 transition-colors">
            {t.viewMethodology}
          </a>
        </p>
      </section>

      {/* 5. What We Delivered - Gallery images */}
      <section className="w-full px-8 md:px-0 py-8">
        <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
          <img
            src="/images/bupa/agenda-board.png"
            alt="Bupa Agenda — board completo del flujo de reserva de hora médica con vistas mobile y documentación de componentes"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* 6. Gallery / Foundations - Foundations content */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-4">
          {t.foundationsTitle}
        </h2>
        <p className="text-[var(--color-text-tertiary)] text-lg mb-8">
          {t.foundationsDesc}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.foundations.map((f) => (
            <div
              key={f.name}
              className="p-5 border border-[var(--color-border)] theme-transition"
            >
              <h3 className="text-[var(--color-text-primary)] font-medium mb-1">{f.name}</h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">{f.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery - Additional Images */}
      <section className="border-t border-[var(--color-border)]">
        <div className="space-y-8 py-20">
          {[
            { src: "/images/bupa/medical-center.png", alt: "Componente AvailableMedicalCenter — centros médicos expandibles tipo acordeón y panel Resumen de tu hora" },
            { src: "/images/bupa/variables.png", alt: "Panel de Variables en Figma — colecciones de tokens (smt-tkns, layouts grid, blur, shadows, typography) con valores por breakpoint: mobile, tablet, desktop y large screen" },
            { src: "/images/bupa/booking-mobile.png", alt: "Flujo Reserva tu hora — vistas mobile del agendamiento en tema claro y oscuro" },
            { src: "/images/bupa/button.png", alt: "Componente Button del Design System — variantes Primary y Minimal con tamaños, estados (default, hover, focus, active, disabled) y alineación de iconos" },
          ].map((img, i) => (
            <div key={i} className="w-full px-8 md:px-0">
              <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Impact & Results - Base Components */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-4">
          {t.componentLibraryTitle}
        </h2>
        <p className="text-[var(--color-text-tertiary)] text-lg mb-8">
          {t.componentLibraryDesc}
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {baseComponents.map((c) => (
            <span
              key={c}
              className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="text-sm text-[var(--color-text-tertiary)] italic">
          {t.componentLibraryNote}
        </p>
      </section>

      {/* Additional Gallery Images */}
      <section className="border-t border-[var(--color-border)]">
        <div className="space-y-8 py-20">
          {[
            { src: "/images/bupa/agenda-board.png", alt: "Bupa Agenda — flujos de reserva de hora médica con vistas responsive" },
            { src: "/images/bupa/responsive.png", alt: "Bupa Agenda — comparación de diseño responsive entre vistas mobile y desktop" },
          ].map((img, i) => (
            <div key={i} className="w-full px-8 md:px-0">
              <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Lessons Learned - Products section */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-4">
          {t.digitalProductsTitle}
        </h2>
        <p className="text-[var(--color-text-tertiary)] text-lg mb-8">
          {t.digitalProductsDesc}
        </p>
        <div className="space-y-4">
          {t.products.map((p) => (
            <div
              key={p.name}
              className="p-6 border border-[var(--color-border)] theme-transition flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-[var(--color-text-primary)] font-medium font-mono">
                    {p.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 font-mono border border-[var(--color-border)] text-[var(--color-text-secondary)]`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-[var(--color-text-tertiary)] text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Conclusion - Development Pipeline section */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-4">
          {t.pipelineTitle}
        </h2>
        <p className="text-[var(--color-text-tertiary)] text-lg mb-8">
          {t.pipelineDesc}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {t.pipelineSteps.map((p) => (
            <div
              key={p.step}
              className="relative p-5 border border-[var(--color-border)] theme-transition"
            >
              <span className="text-3xl font-bold text-white/10 absolute top-3 right-4 font-mono">
                {p.step}
              </span>
              <span className="inline-block px-2 py-0.5 text-xs font-medium font-mono border border-[var(--color-border)] text-[var(--color-text-secondary)] mb-3">
                {p.tool}
              </span>
              <h3 className="text-[var(--color-text-primary)] font-medium mb-1 text-sm">
                {p.title}
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-xs leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 border border-[var(--color-border)] rounded-lg">
          <p className="text-sm text-[var(--color-text-tertiary)]">
            <span className="text-[var(--color-text-primary)] font-medium">{t.outputFormats}</span>{" "}
            {t.outputFormatsDesc}
          </p>
        </div>
      </section>

      {/* Timeline / Roadmap section continued */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-4">
          {t.timelineTitle}
        </h2>
        <p className="text-[var(--color-text-tertiary)] text-lg mb-8">
          {t.timelineDesc}
        </p>
        <div className="space-y-4">
          {t.timeline.map((tl) => {
            const colors = phaseColors[tl.phase];
            return (
              <div
                key={tl.sprint}
                className={`p-5 ${colors.bg} border ${colors.border}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-mono font-bold text-sm ${colors.text}`}>
                    {tl.sprint}
                  </span>
                  <span className="text-[var(--color-text-tertiary)] text-xs font-mono">
                    {tl.date}
                  </span>
                  {tl.status === "done" && (
                    <span className="text-xs px-2 py-0.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] font-mono">
                      {t.statusDone}
                    </span>
                  )}
                  {tl.status === "current" && (
                    <span className="text-xs px-2 py-0.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] font-mono">
                      {t.statusInProgress}
                    </span>
                  )}
                  {tl.status === "upcoming" && (
                    <span className="text-xs px-2 py-0.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] font-mono">
                      {t.statusUpcoming}
                    </span>
                  )}
                </div>
                <ul className="space-y-1.5">
                  {tl.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[var(--color-text-secondary)] text-sm"
                    >
                      <span className={`mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* KPIs section continued */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.metricsTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.metrics.map((k) => (
            <div
              key={k.label}
              className="text-center p-5 border border-[var(--color-border)] theme-transition"
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {k.metric}
              </span>
              <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mt-2 font-mono">
                {k.label}
              </p>
              <p className="text-[var(--color-text-tertiary)] text-xs mt-1">{k.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Technologies section continued */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.toolsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-4 font-mono">
              {t.toolsDesign}
            </h3>
            <div className="flex flex-wrap gap-2">
              {designTools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-4 font-mono">
              {t.toolsDevelopment}
            </h3>
            <div className="flex flex-wrap gap-2">
              {devTools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-4 font-mono">
              {t.toolsManagement}
            </h3>
            <div className="flex flex-wrap gap-2">
              {managementTools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Related Projects - Team section */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.teamTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-[var(--color-border)] text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[var(--color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <h3 className="text-[var(--color-text-primary)] font-medium mb-1">
              {t.teamArchitectTitle}
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              {t.teamArchitectName}
            </p>
            <p className="text-[var(--color-text-tertiary)] text-xs mt-2">
              {t.teamArchitectDesc}
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-[var(--color-border)] text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[var(--color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <h3 className="text-[var(--color-text-primary)] font-medium mb-1">
              {t.teamDesignerTitle}
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              {t.teamDesignerRecruited}
            </p>
            <p className="text-[var(--color-text-tertiary)] text-xs mt-2">
              {t.teamDesignerDesc}
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-[var(--color-border)] text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[var(--color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <h3 className="text-[var(--color-text-primary)] font-medium mb-1">
              {t.teamEngineerTitle}
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              {t.teamEngineerRecruited}
            </p>
            <p className="text-[var(--color-text-tertiary)] text-xs mt-2">
              {t.teamEngineerDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <RelatedProjects current="/bupa-design-system" />
      </section>
    </article>
  );
}
