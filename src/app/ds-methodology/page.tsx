"use client";

import RelatedProjects from "@/components/RelatedProjects";
import { useLanguage } from "@/i18n/LanguageContext";

const benefitIcons = [
  // Economies of Scale
  <svg key="scale" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>,
  // Network Effect
  <svg key="network" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>,
  // Counter-positioning
  <svg key="counter" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  // Switching Costs
  <svg key="switching" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>,
  // Exclusive Resource
  <svg key="exclusive" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
  </svg>,
  // Process Power
  <svg key="process" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385 3.176a.75.75 0 01-1.088-.79l1.028-5.994L.813 6.598a.75.75 0 01.416-1.28l6.025-.876L9.949.762a.75.75 0 011.35 0l2.695 5.682 6.025.876a.75.75 0 01.416 1.28l-4.362 4.262 1.028 5.994a.75.75 0 01-1.088.79L11.42 15.17z" />
  </svg>,
  // Brand
  <svg key="brand" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>,
];

const stageStyles = [
  {
    accent: "from-white/10 to-white/5",
    border: "border-[var(--color-border)]",
    dot: "bg-[var(--color-text-tertiary)]",
    number_color: "text-[var(--color-text-secondary)]",
  },
  {
    accent: "from-white/10 to-white/5",
    border: "border-[var(--color-border)]",
    dot: "bg-[var(--color-text-tertiary)]",
    number_color: "text-[var(--color-text-secondary)]",
  },
  {
    accent: "from-white/10 to-white/5",
    border: "border-[var(--color-border)]",
    dot: "bg-[var(--color-text-tertiary)]",
    number_color: "text-[var(--color-text-secondary)]",
  },
  {
    accent: "from-white/10 to-white/5",
    border: "border-[var(--color-border)]",
    dot: "bg-[var(--color-text-tertiary)]",
    number_color: "text-[var(--color-text-secondary)]",
  },
  {
    accent: "from-white/10 to-white/5",
    border: "border-[var(--color-border)]",
    dot: "bg-[var(--color-text-tertiary)]",
    number_color: "text-[var(--color-text-secondary)]",
  },
];

const stageFlowColors = [
  "text-[var(--color-text-secondary)]",
  "text-[var(--color-text-secondary)]",
  "text-[var(--color-text-secondary)]",
  "text-[var(--color-text-secondary)]",
  "text-[var(--color-text-secondary)]",
];

const i18n = {
  en: {
    heroOverline: "Methodology",
    heroTitle: "Design System Methodology",
    heroSubtitle:
      "5 clear stages to guarantee a transparent and collaborative process",
    heroDescription:
      "A proven methodology I developed for creating enterprise-grade Design Systems, from initial discovery through long-term maintenance. This framework ensures scalable, consistent, and well-documented design systems that drive measurable business results.",
    benefitsTitle: "Strategic Benefits",
    benefitsSubtitle:
      "Implementing a Design System offers key competitive advantages that drive long-term success",
    benefits: [
      {
        title: "Economies of Scale",
        description:
          "A Design System reduces duplicated efforts and accelerates digital production. More teams using it means lower costs per unit.",
      },
      {
        title: "Network Effect",
        description:
          "The more teams adopt it, the greater its value: teams collaborate, share learnings, and continuously optimize the system.",
      },
      {
        title: "Counter-positioning",
        description:
          "Companies with agile Design Systems compete against slow traditional models, gaining speed and consistency without legacy baggage.",
      },
      {
        title: "Switching Costs",
        description:
          "Integrating a Design System into workflows creates positive dependency: replacing it would be costly in time and resources.",
      },
      {
        title: "Exclusive Resource",
        description:
          "Custom components, tokens, and documentation become unique assets that others cannot easily replicate.",
      },
      {
        title: "Process Power",
        description:
          "Design Systems standardize production with quality and speed that are difficult to match without years of investment.",
      },
      {
        title: "Brand",
        description:
          "Visual and experience consistency strengthens brand value. A good Design System ensures your brand shines at every touchpoint.",
      },
    ],
    stagesTitle: "The 5 Stages",
    stagesSubtitle:
      "A structured, iterative approach that adapts to each organization\u2019s specific needs",
    stages: [
      {
        number: "01",
        title: "Discovery",
        subtitle: "Laying the foundations for success",
        description:
          "This stage is crucial to establish a solid foundation, deeply understanding the context and project needs.",
        items: [
          "Kick-off meeting with stakeholders to align expectations, understand the vision, and establish the Design System pillars",
          "Ecosystem audit: analyze existing products, identify patterns and reusable components",
          "Technical information gathering: understand the tech stack for compatibility and integration. Flow diagrams, infrastructure, and repositories",
          "Initial roadmap: define an iterative roadmap, prioritizing key components and functionalities. Sprint deliveries and ceremonies",
        ],
      },
      {
        number: "02",
        title: "Creation",
        subtitle: "Where creativity meets structure",
        description:
          "With a clear understanding, we move to the design phase where creativity meets structure.",
        items: [
          "Customize the Design System with Design Tokens",
          "Create atomic, molecular, and organism components, as well as key pages, using Figma as the primary tool",
          "Build custom components tailored to business needs",
          "Continuous review (Design System Touchpoints): periodic presentations to stakeholders for feedback, alignment, and adjustments",
        ],
      },
      {
        number: "03",
        title: "Development & Documentation",
        subtitle: "Where design comes to life",
        description:
          "This is where design comes to life, with a focus on quality, scalability, and documentation.",
        items: [
          "Define a development team to build and document the Design System",
          "Sprint deliveries following the defined roadmap: 1 or 2-week sprints for incremental and predictable deliveries",
          "Rigorous development and testing: prioritizing reusability, accessibility, and performance",
          "Storybook documentation: each component documented as a single source of truth, including properties and examples",
          "Constant validation: presentations at the end of each sprint to show and validate development with stakeholders",
        ],
      },
      {
        number: "04",
        title: "Training",
        subtitle: "Essential for successful adoption",
        description:
          "Training is essential for successful adoption and effective use of the Design System.",
        items: [
          "Hands-on sessions for designers and developers on how to consume, extend, and contribute to the Design System",
          "Best practices workshops for maintaining and growing the system at scale",
        ],
      },
      {
        number: "05",
        title: "Maintenance",
        subtitle: "A living product that evolves",
        description:
          "A Design System is a living product that requires constant attention and evolution to remain relevant and useful.",
        items: [
          "Assign a dedicated team responsible for ongoing maintenance: designers and developers",
          "Design System Touchpoints, live design sessions, and asynchronous work following the roadmap",
          "Continuous quality assurance and evolution to ensure long-term value",
        ],
      },
    ],
    stageFlowLabels: [
      "Discovery",
      "Creation",
      "Dev & Docs",
      "Training",
      "Maintenance",
    ],
    pipelineTitle: "Development Pipeline",
    pipelineSubtitle:
      "From Brandbook to Figma to Components \u2014 an optimized workflow",
    pipeline: [
      {
        step: "Token Definition",
        description:
          "The designer defines visual values (colors, typography, spacing) in Figma, using Figma Variables.",
        tool: "Figma",
      },
      {
        step: "Token Export",
        description:
          "Uses a Figma plugin or export capabilities to generate a JSON file with the token structure.",
        tool: "Figma Plugin",
      },
      {
        step: "Token Transformation",
        description:
          "The JSON file is passed to Style Dictionary, which transforms it into code for different development platforms.",
        tool: "Style Dictionary",
      },
      {
        step: "Development & Documentation",
        description:
          "Developers build components using the generated tokens and document them in Storybook.",
        tool: "Storybook",
      },
    ],
    toolsSectionTitle: "Tools for an Optimized Workflow",
    tools: [
      { name: "Figma", description: "Tokens, components, views, and library for designers" },
      { name: "Style Dictionary", description: "Sync Figma Tokens with code for CSS styles" },
      { name: "Web Components", description: "Fast, lightweight, reusable components that work in any JS framework" },
      { name: "Storybook", description: "Living documentation for developers" },
      { name: "Cursor", description: "AI-powered coding for complex software projects" },
      { name: "Jira", description: "Sprint tracking and roadmap management" },
    ],
    kpisTitle: "Design System KPIs",
    kpisSubtitle:
      "A well-implemented Design System generates measurable ROI through key metrics",
    kpis: [
      { metric: "+50", label: "Base Components", detail: "Responsive, Light & Dark mode" },
      { metric: "+100", label: "Views / Pages", detail: "Custom business components" },
      { metric: "+1000", label: "Variables / Tokens", detail: "General and component-specific tokens" },
      { metric: "+1000", label: "Properties & Auto-Layout", detail: "Component variants and configurations" },
    ],
    kpiCards: [
      {
        title: "Efficiency & Speed",
        description:
          "Accelerated development cycles and shorter time-to-market thanks to reusable components and clear guidelines.",
      },
      {
        title: "Consistency & Brand",
        description:
          "Uniform user experience across all products, reinforcing brand identity and building user trust.",
      },
      {
        title: "Cost Savings",
        description:
          "Significant reduction in design and development rework, lower maintenance costs, and efficient resource allocation.",
      },
      {
        title: "Quality & Accessibility",
        description:
          "Fewer UI errors, greater accessibility compliance, and a higher overall standard for product interfaces.",
      },
    ],
    roadmapTitle: "Sample Roadmap",
    roadmapSubtitle:
      "This methodology is flexible and adapts to each organization\u2019s specific needs",
    roadmapHeaderMonth: "Month",
    roadmapHeaderFocus: "Focus Area",
    roadmapHeaderDeliverables: "Key Deliverables",
    roadmap: [
      { month: "1", focus: "Kickoff  Foundations", deliverables: "Color, Typography, Spacing, Elevation, Corner Radius, Iconography, and Logos tokens with documentation" },
      { month: "1", focus: "Base Components", deliverables: "50+ interactive components with properties in Figma and hundreds of variants" },
      { month: "1-2+", focus: "Staggered Design & Dev Sprints", deliverables: "Custom components, screens, and flows based on roadmap. Component-Specific Tokens" },
      { month: "2+", focus: "Documentation", deliverables: "Interactive component catalog in Storybook" },
      { month: "2+", focus: "Training", deliverables: "Specialized training for designers and developers" },
      { month: "9+", focus: "Maintenance", deliverables: "Design System Touchpoints, live sessions, and async work following the roadmap" },
    ],
  },
  es: {
    heroOverline: "Metodologia",
    heroTitle: "Metodologia de Design Systems",
    heroSubtitle:
      "5 etapas claras para garantizar un proceso transparente y colaborativo",
    heroDescription:
      "Una metodologia probada que desarrolle para crear Design Systems de nivel enterprise, desde el descubrimiento inicial hasta el mantenimiento a largo plazo. Este framework asegura design systems escalables, consistentes y bien documentados que generan resultados de negocio medibles.",
    benefitsTitle: "Beneficios Estrategicos",
    benefitsSubtitle:
      "Implementar un Design System ofrece ventajas competitivas clave que impulsan el exito a largo plazo",
    benefits: [
      {
        title: "Economias de Escala",
        description:
          "Un Design System reduce esfuerzos duplicados y acelera la produccion digital. Mas equipos usandolo significa menores costos por unidad.",
      },
      {
        title: "Efecto de Red",
        description:
          "Cuantos mas equipos lo adoptan, mayor es su valor: los equipos colaboran, comparten aprendizajes y optimizan continuamente el sistema.",
      },
      {
        title: "Contraposicionamiento",
        description:
          "Las empresas con Design Systems agiles compiten contra modelos tradicionales lentos, ganando velocidad y consistencia sin carga heredada.",
      },
      {
        title: "Costos de Cambio",
        description:
          "Integrar un Design System en los flujos de trabajo crea dependencia positiva: reemplazarlo seria costoso en tiempo y recursos.",
      },
      {
        title: "Recurso Exclusivo",
        description:
          "Los componentes personalizados, tokens y documentacion se convierten en activos unicos que otros no pueden replicar facilmente.",
      },
      {
        title: "Poder de Proceso",
        description:
          "Los Design Systems estandarizan la produccion con calidad y velocidad dificiles de igualar sin anios de inversion.",
      },
      {
        title: "Marca",
        description:
          "La consistencia visual y de experiencia fortalece el valor de marca. Un buen Design System asegura que tu marca brille en cada punto de contacto.",
      },
    ],
    stagesTitle: "Las 5 Etapas",
    stagesSubtitle:
      "Un enfoque estructurado e iterativo que se adapta a las necesidades especificas de cada organizacion",
    stages: [
      {
        number: "01",
        title: "Descubrimiento",
        subtitle: "Sentando las bases del exito",
        description:
          "Esta etapa es crucial para establecer una base solida, comprendiendo profundamente el contexto y las necesidades del proyecto.",
        items: [
          "Reunion de kick-off con stakeholders para alinear expectativas, comprender la vision y establecer los pilares del Design System",
          "Auditoria del ecosistema: analizar productos existentes, identificar patrones y componentes reutilizables",
          "Recopilacion de informacion tecnica: comprender el stack tecnologico para compatibilidad e integracion. Diagramas de flujo, infraestructura y repositorios",
          "Roadmap inicial: definir un roadmap iterativo, priorizando componentes y funcionalidades clave. Entregas por sprint y ceremonias",
        ],
      },
      {
        number: "02",
        title: "Creacion",
        subtitle: "Donde la creatividad se encuentra con la estructura",
        description:
          "Con una comprension clara, pasamos a la fase de diseno donde la creatividad se encuentra con la estructura.",
        items: [
          "Personalizar el Design System con Design Tokens",
          "Crear componentes atomicos, moleculares y organismos, asi como paginas clave, usando Figma como herramienta principal",
          "Construir componentes personalizados adaptados a las necesidades del negocio",
          "Revision continua (Design System Touchpoints): presentaciones periodicas a stakeholders para feedback, alineacion y ajustes",
        ],
      },
      {
        number: "03",
        title: "Desarrollo y Documentacion",
        subtitle: "Donde el diseno cobra vida",
        description:
          "Aqui es donde el diseno cobra vida, con un enfoque en calidad, escalabilidad y documentacion.",
        items: [
          "Definir un equipo de desarrollo para construir y documentar el Design System",
          "Entregas por sprint siguiendo el roadmap definido: sprints de 1 o 2 semanas para entregas incrementales y predecibles",
          "Desarrollo y pruebas rigurosas: priorizando reusabilidad, accesibilidad y rendimiento",
          "Documentacion en Storybook: cada componente documentado como fuente unica de verdad, incluyendo propiedades y ejemplos",
          "Validacion constante: presentaciones al final de cada sprint para mostrar y validar el desarrollo con stakeholders",
        ],
      },
      {
        number: "04",
        title: "Capacitacion",
        subtitle: "Esencial para una adopcion exitosa",
        description:
          "La capacitacion es esencial para una adopcion exitosa y un uso efectivo del Design System.",
        items: [
          "Sesiones practicas para disenadores y desarrolladores sobre como consumir, extender y contribuir al Design System",
          "Talleres de mejores practicas para mantener y hacer crecer el sistema a escala",
        ],
      },
      {
        number: "05",
        title: "Mantenimiento",
        subtitle: "Un producto vivo que evoluciona",
        description:
          "Un Design System es un producto vivo que requiere atencion constante y evolucion para seguir siendo relevante y util.",
        items: [
          "Asignar un equipo dedicado responsable del mantenimiento continuo: disenadores y desarrolladores",
          "Design System Touchpoints, sesiones de diseno en vivo y trabajo asincrono siguiendo el roadmap",
          "Aseguramiento continuo de calidad y evolucion para garantizar valor a largo plazo",
        ],
      },
    ],
    stageFlowLabels: [
      "Descubrimiento",
      "Creacion",
      "Dev y Docs",
      "Capacitacion",
      "Mantenimiento",
    ],
    pipelineTitle: "Pipeline de Desarrollo",
    pipelineSubtitle:
      "Del Brandbook a Figma a Componentes \u2014 un flujo de trabajo optimizado",
    pipeline: [
      {
        step: "Definicion de Tokens",
        description:
          "El disenador define valores visuales (colores, tipografia, espaciado) en Figma, usando Figma Variables.",
        tool: "Figma",
      },
      {
        step: "Exportacion de Tokens",
        description:
          "Usa un plugin de Figma o capacidades de exportacion para generar un archivo JSON con la estructura de tokens.",
        tool: "Figma Plugin",
      },
      {
        step: "Transformacion de Tokens",
        description:
          "El archivo JSON se pasa a Style Dictionary, que lo transforma en codigo para diferentes plataformas de desarrollo.",
        tool: "Style Dictionary",
      },
      {
        step: "Desarrollo y Documentacion",
        description:
          "Los desarrolladores construyen componentes usando los tokens generados y los documentan en Storybook.",
        tool: "Storybook",
      },
    ],
    toolsSectionTitle: "Herramientas para un Flujo de Trabajo Optimizado",
    tools: [
      { name: "Figma", description: "Tokens, componentes, vistas y libreria para disenadores" },
      { name: "Style Dictionary", description: "Sincronizar Figma Tokens con codigo para estilos CSS" },
      { name: "Web Components", description: "Componentes rapidos, ligeros y reutilizables que funcionan en cualquier framework JS" },
      { name: "Storybook", description: "Documentacion viva para desarrolladores" },
      { name: "Cursor", description: "Codificacion potenciada por IA para proyectos de software complejos" },
      { name: "Jira", description: "Seguimiento de sprints y gestion de roadmap" },
    ],
    kpisTitle: "KPIs del Design System",
    kpisSubtitle:
      "Un Design System bien implementado genera ROI medible a traves de metricas clave",
    kpis: [
      { metric: "+50", label: "Componentes Base", detail: "Responsive, modo Claro y Oscuro" },
      { metric: "+100", label: "Vistas / Paginas", detail: "Componentes de negocio personalizados" },
      { metric: "+1000", label: "Variables / Tokens", detail: "Tokens generales y especificos de componentes" },
      { metric: "+1000", label: "Propiedades y Auto-Layout", detail: "Variantes y configuraciones de componentes" },
    ],
    kpiCards: [
      {
        title: "Eficiencia y Velocidad",
        description:
          "Ciclos de desarrollo acelerados y menor tiempo de lanzamiento gracias a componentes reutilizables y guias claras.",
      },
      {
        title: "Consistencia y Marca",
        description:
          "Experiencia de usuario uniforme en todos los productos, reforzando la identidad de marca y construyendo confianza del usuario.",
      },
      {
        title: "Ahorro de Costos",
        description:
          "Reduccion significativa del retrabajo de diseno y desarrollo, menores costos de mantenimiento y asignacion eficiente de recursos.",
      },
      {
        title: "Calidad y Accesibilidad",
        description:
          "Menos errores de UI, mayor cumplimiento de accesibilidad y un estandar general mas alto para las interfaces de producto.",
      },
    ],
    roadmapTitle: "Hoja de Ruta de Ejemplo",
    roadmapSubtitle:
      "Esta metodologia es flexible y se adapta a las necesidades especificas de cada organizacion",
    roadmapHeaderMonth: "Mes",
    roadmapHeaderFocus: "Area de Enfoque",
    roadmapHeaderDeliverables: "Entregables Clave",
    roadmap: [
      { month: "1", focus: "Kickoff  Fundamentos", deliverables: "Tokens de Color, Tipografia, Espaciado, Elevacion, Radio de Esquina, Iconografia y Logos con documentacion" },
      { month: "1", focus: "Componentes Base", deliverables: "50+ componentes interactivos con propiedades en Figma y cientos de variantes" },
      { month: "1-2+", focus: "Sprints Escalonados de Diseno y Dev", deliverables: "Componentes personalizados, pantallas y flujos basados en el roadmap. Tokens Especificos de Componentes" },
      { month: "2+", focus: "Documentacion", deliverables: "Catalogo interactivo de componentes en Storybook" },
      { month: "2+", focus: "Capacitacion", deliverables: "Capacitacion especializada para disenadores y desarrolladores" },
      { month: "9+", focus: "Mantenimiento", deliverables: "Design System Touchpoints, sesiones en vivo y trabajo asincrono siguiendo el roadmap" },
    ],
  },
} as const;

export default function DSMethodologyPage() {
  const { locale } = useLanguage();
  const t = i18n[locale];

  return (
    <article>
      {/* 1. Hero / Header */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 text-center">
        <p className="text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-4 font-mono">
          {t.heroOverline}
        </p>
        <h1 className="font-heading text-display-lg tracking-display mb-4">
          {t.heroTitle}
        </h1>
        <p className="text-body-lg text-[var(--color-text-secondary)] mb-8">
          {t.heroSubtitle}
        </p>
        <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed  mx-auto">
          {t.heroDescription}
        </p>
      </section>

      {/* 2. Project Overview - Strategic Benefits */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-md tracking-display mb-4">
            {t.benefitsTitle}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-lg  mx-auto">
            {t.benefitsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.benefits.map((b, i) => (
            <div
              key={b.title}
              className="group p-6 border border-[var(--color-border)] theme-transition hover:border-[var(--color-text-tertiary)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 text-[var(--color-text-secondary)] flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                {benefitIcons[i]}
              </div>
              <h3 className="text-lg italic text-[var(--color-text-primary)] mb-2">
                {b.title}
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Challenge & Opportunity - 5 Stages Overview */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-md tracking-display mb-4">
            {t.stagesTitle}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-lg  mx-auto">
            {t.stagesSubtitle}
          </p>
        </div>

        {/* Stage flow */}
        <div className="flex items-center justify-center gap-2 flex-wrap text-sm text-[var(--color-text-tertiary)] font-mono mb-16">
          {t.stageFlowLabels.map((label, i) => (
            <span key={label}>
              {i > 0 && <span className="mr-2">&rarr;</span>}
              <span className={`${stageFlowColors[i]} font-medium`}>{label}</span>
            </span>
          ))}
        </div>

        {/* Detailed stages */}
        <div className="space-y-12">
          {t.stages.map((stage, i) => (
            <div
              key={stage.number}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${stageStyles[i].accent} border ${stageStyles[i].border}`}
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className={`text-4xl font-bold font-mono ${stageStyles[i].number_color} opacity-60`}>
                  {stage.number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-tertiary)] italic">
                    {stage.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 mt-4">
                {stage.description}
              </p>
              <ul className="space-y-3">
                {stage.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                    <span className={`mt-2 shrink-0 block w-1.5 h-1.5 rounded-full ${stageStyles[i].dot}`} />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Approach - Development Pipeline */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-md tracking-display mb-4">
            {t.pipelineTitle}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-lg  mx-auto">
            {t.pipelineSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.pipeline.map((p, i) => (
            <div
              key={p.step}
              className="relative p-6 border border-[var(--color-border)] theme-transition"
            >
              <span className="text-4xl font-bold text-white/10 absolute top-4 right-5 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="inline-block px-3 py-1 text-xs font-medium font-mono border border-[var(--color-border)] text-[var(--color-text-secondary)] mb-4">
                {p.tool}
              </span>
              <h3 className="text-lg italic text-[var(--color-text-primary)] mb-2">
                {p.step}
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. What We Delivered - Tools */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-md tracking-display mb-4">
            {t.toolsSectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.tools.map((tool) => (
            <div
              key={tool.name}
              className="p-5 border border-[var(--color-border)] theme-transition hover:border-[var(--color-text-tertiary)] transition-colors"
            >
              <h3 className="text-[var(--color-text-primary)] font-medium mb-1">{tool.name}</h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Gallery - KPIs */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-md tracking-display mb-4">
            {t.kpisTitle}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-lg  mx-auto">
            {t.kpisSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {t.kpis.map((k) => (
            <div
              key={k.label}
              className="text-center p-6 border border-[var(--color-border)] theme-transition"
            >
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {k.metric}
              </span>
              <p className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mt-2 font-mono">
                {k.label}
              </p>
              <p className="text-[var(--color-text-tertiary)] text-xs mt-1">{k.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.kpiCards.map((card) => (
            <div key={card.title} className="p-6 border border-[var(--color-border)] theme-transition">
              <h3 className="text-lg italic text-[var(--color-text-primary)] mb-2">
                {card.title}
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Impact & Results - Roadmap */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-display-md tracking-display mb-4">
            {t.roadmapTitle}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-lg  mx-auto">
            {t.roadmapSubtitle}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-3 px-4 text-[var(--color-text-tertiary)] font-mono font-medium uppercase tracking-wider text-xs">
                  {t.roadmapHeaderMonth}
                </th>
                <th className="text-left py-3 px-4 text-[var(--color-text-tertiary)] font-mono font-medium uppercase tracking-wider text-xs">
                  {t.roadmapHeaderFocus}
                </th>
                <th className="text-left py-3 px-4 text-[var(--color-text-tertiary)] font-mono font-medium uppercase tracking-wider text-xs">
                  {t.roadmapHeaderDeliverables}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.roadmap.map((r, i) => (
                <tr
                  key={i}
                  className="border-b border-[var(--color-border)] hover:bg-[var(--color-card-bg)] transition-colors"
                >
                  <td className="py-4 px-4 text-[var(--color-text-secondary)] font-mono font-medium whitespace-nowrap">
                    {r.month}
                  </td>
                  <td className="py-4 px-4 text-[var(--color-text-primary)] font-medium">
                    {r.focus}
                  </td>
                  <td className="py-4 px-4 text-[var(--color-text-tertiary)]">
                    {r.deliverables}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Lessons Learned - Empty */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
      </section>

      {/* 9. Conclusion - Empty */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
      </section>

      {/* 10. Related Projects */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <RelatedProjects current="/ds-methodology" />
      </section>
    </article>
  );
}
