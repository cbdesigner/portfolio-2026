"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";

/* ── Area detail card data ──────────────────────────────────── */
interface AreaDetail {
  title: string;
  description: string;
  aspects: string[];
  examples: string[];
  color: string;
}

const i18n = {
  en: {
    title: "UX Strategy",
    subtitle:
      "As a UX Manager, I implement a UX strategy in five key areas, lead design teams, and build design capabilities for companies.",
    overviewTitle: "5 Areas",
    overviewSubtitle: "To lead design teams and build design capability.",
    aspectsLabel: "Aspects",
    examplesLabel: "Examples",
    areas: [
      {
        title: "Strategy",
        description:
          "Developing a design vision and strategy, implementing and managing the initiatives necessary to execute the strategy, measuring and continuously improving their results.",
        aspects: [
          "Define Vision & Goals",
          "Develop Strategy & Roadmap",
          "Manage Program Initiatives",
          "Drive Change",
          "Measure Practice & Performance",
        ],
        examples: [
          "Vision Statement",
          "Roadmap",
          "OKRs / Goals",
          "Project Portfolio",
          "Communication Plan",
          "KPIs and Metrics",
          "Dashboards",
        ],
        color: "blue",
      },
      {
        title: "Enterprise",
        description:
          "Aligning design teams with other business functions and stakeholders, establishing a design-driven culture, promoting their capabilities, supporting business challenges and representing the design team internally and externally.",
        aspects: [
          "Align with Business Strategy",
          "Build Stakeholder Alliances",
          "Develop Design Culture",
          "Promote Design Capabilities",
          "Support Enterprise Challenges",
          "Build Design Reputation",
        ],
        examples: [
          "Stakeholder Analysis",
          "Alignment Meetings",
          "Business Lunch",
          "Showcase Design Work",
          "Design Talks",
          "Internal Blog",
          "Enterprise Design",
          "Design Trainings",
        ],
        color: "purple",
      },
      {
        title: "Team",
        description:
          "Managing and building the design team so that everyone is highly motivated. Fostering an inspiring team culture and being a supportive leader a team can trust. Making smart hiring decisions and ensuring smooth onboarding and clear career paths.",
        aspects: [
          "Develop Team Culture",
          "Provide Feedback & Guidance",
          "Plan and Scale Staffing Demand",
          "Manage Recruiting & Onboarding",
          "Foster Talent Growth",
          "Reflect Leadership Skills",
          "Manage External Partners",
        ],
        examples: [
          "Meeting Culture",
          "Team Coffee",
          "Design Critique",
          "1:1 Meetings",
          "Onboarding Experience",
          "Talent Pool",
          "Skill Matrix",
          "Career Paths",
          "Yearly Meeting",
        ],
        color: "cyan",
      },
      {
        title: "Operations",
        description:
          "Defining the organizational structures, processes, tools and work environment to support and manage the delivery of day-to-day design work. Enabling creativity and ensuring the well-being and stability of the team by letting designers focus on their craft.",
        aspects: [
          "Define Organizational Structure",
          "Define Design Workflow",
          "Manage Work Streams",
          "Facilitate Collaborative Design",
          "Define Work Environment",
          "Ensure Design Coherence",
          "Enable Knowledge Exchange",
          "Assure Quality and Compliance",
        ],
        examples: [
          "Project Management",
          "Org Charts",
          "Role Descriptions",
          "Process Blueprint",
          "Design Systems",
          "Design Tools",
          "Filesharing",
          "Employee Experience",
          "Interior Design",
        ],
        color: "emerald",
      },
      {
        title: "Experience",
        description:
          "Influencing and supporting product, service and experience innovation with a human-centered angle and a design-driven approach. Envisioning and defining what great design means to the business and what it looks like. Providing creative leadership and contributing to relevant design decisions.",
        aspects: [
          "Develop Design Principles",
          "Define Design Language",
          "Advocate User Perspective",
          "Promote End-to-End Experience",
          "Drive Innovation",
          "Provide Creative Guidance",
        ],
        examples: [
          "Design Guidelines",
          "Design Values",
          "Design Patterns",
          "Journey Maps",
          "Design Thinking",
          "Strategic Design",
          "Storytelling",
          "Customer Insights",
        ],
        color: "violet",
      },
    ] as AreaDetail[],
  },
  es: {
    title: "Estrategia UX",
    subtitle:
      "Como UX Manager, implemento una estrategia UX en cinco \u00E1reas clave, lidero equipos de dise\u00F1o y construyo capacidades de dise\u00F1o para empresas.",
    overviewTitle: "5 \u00C1reas",
    overviewSubtitle: "Para liderar equipos de dise\u00F1o y construir capacidad de dise\u00F1o.",
    aspectsLabel: "Aspectos",
    examplesLabel: "Ejemplos",
    areas: [
      {
        title: "Estrategia",
        description:
          "Desarrollar una visi\u00F3n y estrategia de dise\u00F1o, implementar y gestionar las iniciativas necesarias para ejecutar la estrategia, medir y mejorar continuamente sus resultados.",
        aspects: [
          "Definir Visi\u00F3n y Objetivos",
          "Desarrollar Estrategia y Roadmap",
          "Gestionar Iniciativas del Programa",
          "Impulsar el Cambio",
          "Medir Pr\u00E1ctica y Rendimiento",
        ],
        examples: [
          "Declaraci\u00F3n de Visi\u00F3n",
          "Roadmap",
          "OKRs / Objetivos",
          "Portafolio de Proyectos",
          "Plan de Comunicaci\u00F3n",
          "KPIs y M\u00E9tricas",
          "Dashboards",
        ],
        color: "blue",
      },
      {
        title: "Empresa",
        description:
          "Alinear los equipos de dise\u00F1o con otras funciones de negocio y stakeholders, establecer una cultura impulsada por el dise\u00F1o, promover sus capacidades, apoyar los desaf\u00EDos empresariales y representar al equipo de dise\u00F1o interna y externamente.",
        aspects: [
          "Alinear con Estrategia de Negocio",
          "Construir Alianzas con Stakeholders",
          "Desarrollar Cultura de Dise\u00F1o",
          "Promover Capacidades de Dise\u00F1o",
          "Apoyar Desaf\u00EDos Empresariales",
          "Construir Reputaci\u00F3n de Dise\u00F1o",
        ],
        examples: [
          "An\u00E1lisis de Stakeholders",
          "Reuniones de Alineaci\u00F3n",
          "Almuerzo de Negocios",
          "Mostrar Trabajo de Dise\u00F1o",
          "Design Talks",
          "Blog Interno",
          "Dise\u00F1o Empresarial",
          "Capacitaciones de Dise\u00F1o",
        ],
        color: "purple",
      },
      {
        title: "Equipo",
        description:
          "Gestionar y construir el equipo de dise\u00F1o para que todos est\u00E9n altamente motivados. Fomentar una cultura de equipo inspiradora y ser un l\u00EDder de apoyo en quien el equipo pueda confiar. Tomar decisiones de contrataci\u00F3n inteligentes y asegurar un onboarding fluido y rutas de carrera claras.",
        aspects: [
          "Desarrollar Cultura de Equipo",
          "Proveer Feedback y Gu\u00EDa",
          "Planificar y Escalar Demanda",
          "Gestionar Reclutamiento y Onboarding",
          "Fomentar Crecimiento del Talento",
          "Reflexionar Habilidades de Liderazgo",
          "Gestionar Socios Externos",
        ],
        examples: [
          "Cultura de Reuniones",
          "Caf\u00E9 de Equipo",
          "Cr\u00EDtica de Dise\u00F1o",
          "Reuniones 1:1",
          "Experiencia de Onboarding",
          "Pool de Talento",
          "Matriz de Habilidades",
          "Rutas de Carrera",
          "Reuni\u00F3n Anual",
        ],
        color: "cyan",
      },
      {
        title: "Operaciones",
        description:
          "Definir las estructuras organizacionales, procesos, herramientas y entorno de trabajo para apoyar y gestionar la entrega del trabajo de dise\u00F1o diario. Habilitar la creatividad y asegurar el bienestar y estabilidad del equipo permitiendo que los dise\u00F1adores se enfoquen en su oficio.",
        aspects: [
          "Definir Estructura Organizacional",
          "Definir Flujo de Trabajo de Dise\u00F1o",
          "Gestionar Flujos de Trabajo",
          "Facilitar Dise\u00F1o Colaborativo",
          "Definir Entorno de Trabajo",
          "Asegurar Coherencia de Dise\u00F1o",
          "Habilitar Intercambio de Conocimiento",
          "Asegurar Calidad y Cumplimiento",
        ],
        examples: [
          "Gesti\u00F3n de Proyectos",
          "Organigramas",
          "Descripciones de Roles",
          "Blueprint de Procesos",
          "Design Systems",
          "Herramientas de Dise\u00F1o",
          "Compartir Archivos",
          "Experiencia del Empleado",
          "Dise\u00F1o de Interiores",
        ],
        color: "emerald",
      },
      {
        title: "Experiencia",
        description:
          "Influenciar y apoyar la innovaci\u00F3n de productos, servicios y experiencias con un enfoque centrado en el humano y un enfoque impulsado por el dise\u00F1o. Visualizar y definir lo que significa el gran dise\u00F1o para el negocio. Proveer liderazgo creativo y contribuir a decisiones de dise\u00F1o relevantes.",
        aspects: [
          "Desarrollar Principios de Dise\u00F1o",
          "Definir Lenguaje de Dise\u00F1o",
          "Abogar por la Perspectiva del Usuario",
          "Promover Experiencia End-to-End",
          "Impulsar la Innovaci\u00F3n",
          "Proveer Gu\u00EDa Creativa",
        ],
        examples: [
          "Gu\u00EDas de Dise\u00F1o",
          "Valores de Dise\u00F1o",
          "Patrones de Dise\u00F1o",
          "Journey Maps",
          "Design Thinking",
          "Dise\u00F1o Estrat\u00E9gico",
          "Storytelling",
          "Customer Insights",
        ],
        color: "violet",
      },
    ] as AreaDetail[],
  },
} as const;

/* ── Color map for area accent colors (monochrome) ─────────── */
const colorMap: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  blue: { border: "border-[var(--color-border)]", bg: "bg-white/5", text: "text-[var(--color-text-secondary)]", dot: "bg-[var(--color-text-tertiary)]" },
  purple: { border: "border-[var(--color-border)]", bg: "bg-white/5", text: "text-[var(--color-text-secondary)]", dot: "bg-[var(--color-text-tertiary)]" },
  cyan: { border: "border-[var(--color-border)]", bg: "bg-white/5", text: "text-[var(--color-text-secondary)]", dot: "bg-[var(--color-text-tertiary)]" },
  emerald: { border: "border-[var(--color-border)]", bg: "bg-white/5", text: "text-[var(--color-text-secondary)]", dot: "bg-[var(--color-text-tertiary)]" },
  violet: { border: "border-[var(--color-border)]", bg: "bg-white/5", text: "text-[var(--color-text-secondary)]", dot: "bg-[var(--color-text-tertiary)]" },
};

/* ── Diamond labels (not translated — visual only) ──────────── */
const diamondLabels = ["Enterprise", "Team", "Strategy", "Experience", "Operations"];

export default function UXStrategyPage() {
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
        </header>

        {/* Overview: 5 Areas diamond */}
        <section className="mb-22">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left text */}
            <div className="lg:w-2/5 text-center lg:text-left">
              <h2 className="font-heading text-display-lg tracking-display mb-4">
                {t.overviewTitle}
              </h2>
              <p className="text-body-lg text-[var(--color-text-secondary)]">
                {t.overviewSubtitle}
              </p>
            </div>

            {/* Diamond grid */}
            <div className="lg:w-3/5 flex justify-center">
              <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]">
                {/* Enterprise — top left */}
                <div className="absolute top-0 left-[15%] w-[35%] h-[35%] rotate-45 bg-neutral-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm -rotate-45">{diamondLabels[0]}</span>
                </div>
                {/* Team — top right */}
                <div className="absolute top-0 right-[15%] w-[35%] h-[35%] rotate-45 bg-neutral-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm -rotate-45">{diamondLabels[1]}</span>
                </div>
                {/* Strategy — center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] rotate-45 bg-neutral-700 flex items-center justify-center z-10">
                  <span className="text-white font-bold text-xs md:text-sm -rotate-45">{diamondLabels[2]}</span>
                </div>
                {/* Experience — bottom left */}
                <div className="absolute bottom-0 left-[15%] w-[35%] h-[35%] rotate-45 bg-neutral-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm -rotate-45">{diamondLabels[3]}</span>
                </div>
                {/* Operations — bottom right */}
                <div className="absolute bottom-0 right-[15%] w-[35%] h-[35%] rotate-45 bg-neutral-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm -rotate-45">{diamondLabels[4]}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Area detail cards */}
        {t.areas.map((area, idx) => {
          const colors = colorMap[area.color] || colorMap.blue;
          return (
            <section key={idx} className="mb-16">
              <div className={`p-6 md:p-10 border ${colors.border} ${colors.bg} theme-transition`}>
                {/* Area title */}
                <h2 className={`font-heading text-display-md tracking-display mb-4 ${colors.text}`}>
                  {area.title}
                </h2>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                  {area.description}
                </p>

                {/* Aspects & Examples grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Aspects */}
                  <div>
                    <h3 className="text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-4 font-mono">
                      {t.aspectsLabel}
                    </h3>
                    <div className="space-y-2">
                      {area.aspects.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 px-4 py-3 border border-[var(--color-border)] theme-transition"
                        >
                          <span className={`shrink-0 w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                          <span className="text-sm text-[var(--color-text-primary)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Examples */}
                  <div>
                    <h3 className="text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-4 font-mono">
                      {t.examplesLabel}
                    </h3>
                    <div className="space-y-2">
                      {area.examples.map((item, i) => (
                        <div
                          key={i}
                          className="px-4 py-3 border border-[var(--color-border)] theme-transition"
                        >
                          <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Related Projects */}
        <RelatedProjects current="/ux-strategy" />
      </div>
    </div>
  );
}
