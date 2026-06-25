"use client";

import Link from "next/link";
import RelatedProjects from "@/components/RelatedProjects";
import { useLanguage } from "@/i18n/LanguageContext";

const i18n = {
  en: {
    heroOverline: "Services",
    heroTitle: "Design Systems Strategy & Operations",
    heroSubtitle:
      "Comprehensive governance, architecture, and metrics framework for scalable design systems",
    heroDescription:
      "An integrated framework built on 3 pillars—Governance, Architecture, and Metrics—to transform how design systems evolve, scale, and drive measurable business impact.",

    pillarsTitle: "The 3 Pillars",
    pillars: [
      {
        title: "Governance",
        description: "How your system evolves, communicates, and validates changes",
      },
      {
        title: "Architecture",
        description: "The technical foundation that ensures consistency and scale",
      },
      {
        title: "Metrics",
        description: "Measuring real impact on your design system performance",
      },
    ],

    governanceTitle: "Pillar 1: Governance & Agile Operations Model",
    governanceIntro:
      "The regulatory and operational framework that dictates how the system evolves, communicates, and validates changes. Strong governance reduces coordination overhead and accelerates decision-making.",

    governanceActivities: [
      {
        title: "Federated Contribution Model",
        description:
          "Establish teams responsible for different system areas with clear ownership and escalation paths",
      },
      {
        title: "Pre-Development Remote Testing",
        description:
          "Validate design decisions before development begins, reducing rework and misalignment",
      },
      {
        title: "Strategic Change Management",
        description:
          "Structured process for introducing system changes with minimal disruption to consuming teams",
      },
      {
        title: "Design System Roadmap",
        description:
          "Continuous improvement roadmap that aligns system evolution with business objectives",
      },
      {
        title: "Role & Permission Administration",
        description: "Clear permission model ensuring proper access and contribution privileges",
      },
    ],

    governanceDeliverables: [
      "Operational Model Diagram",
      "Remote Testing Reports & Insights",
      "Strategic Roadmap (6-12 months)",
      "Communication & Escalation Protocol",
    ],

    governanceImpact: "Reduces team coordination time by up to 40%",

    architectureTitle: "Pillar 2: Architecture, Production & Operational Ramp",
    architectureIntro:
      "The technical foundation that guarantees consistency, scalability, and long-term sustainability. This pillar ensures the system can grow without losing quality or becoming unwieldy.",

    architectureActivities: [
      {
        title: "Asset Design & Development",
        description:
          "Create tokens, components, and patterns following atomic design principles",
      },
      {
        title: "Responsive Layout Architecture",
        description:
          "Token-based responsive system with breakpoint strategies and adaptive patterns",
      },
      {
        title: "Library Reorganization",
        description:
          "Restructure and optimize component libraries for better performance and maintainability",
      },
    ],

    architectureProcesses: [
      {
        title: "Standardized Hand-off Workflow",
        description:
          "Clear design-to-development specifications ensuring pixel-perfect implementation and reducing misinterpretation",
      },
      {
        title: "Cell Enablement",
        description:
          "Structure for organizing teams into functional cells with clear responsibilities and communication channels",
      },
    ],

    architectureDeliverables: [
      "Documented Component Libraries",
      "Token System with Responsive Layouts",
      "Hand-off Specifications & Standards",
      "Complete Onboarding Kit",
    ],

    metricsTitle: "Pillar 3: Metrics, Culture & System Health",
    metricsIntro:
      "Measure the real effectiveness of your design system through quantitative and qualitative data. This pillar transforms system health from intuition to data-driven insights.",

    metricsActivities: [
      {
        title: "Figma Mastery Program",
        description:
          "Specialized training to maximize team efficiency in design tool usage and collaboration",
      },
      {
        title: "Design Champions Identification",
        description:
          "Identification and empowerment of key advocates who drive adoption and cultural change",
      },
      {
        title: "System Health Monitoring",
        description:
          "Continuous tracking of adoption metrics, component consistency, and system performance",
      },
      {
        title: "Compliance Audit",
        description:
          "Regular audits to ensure teams follow system guidelines and standards",
      },
    ],

    metricsDeliverables: [
      "System Health Report (quarterly)",
      "Figma Mastery Program & Training Materials",
      "Cell-by-Cell Compliance Audit",
      "Design Champions Matrix & Strategy",
      "ROI & Efficiency Report",
    ],

    metricsResults: [
      "30-50% reduction in development time",
      "60% fewer visual inconsistencies",
    ],

    recommendationTitle: "Critical Success Factor",
    recommendationText:
      "The successful implementation of these three pillars requires organizational commitment at all levels—from executive sponsorship to hands-on team participation. Without this commitment, even the best-designed system will struggle to gain adoption and deliver value.",

    ctaText: "Let's discuss how these pillars can transform your design system",
    ctaButton: "Get in Touch",
  },

  es: {
    heroOverline: "Servicios",
    heroTitle: "Estrategia y Operación de Design Systems",
    heroSubtitle:
      "Marco integral de Gobernanza, Arquitectura y Métricas para sistemas de diseño escalables",
    heroDescription:
      "Un framework integrado basado en 3 pilares—Gobernanza, Arquitectura y Métricas—que transforma cómo los design systems evolucionan, escalan e impactan mediblemente el negocio.",

    pillarsTitle: "Los 3 Pilares",
    pillars: [
      {
        title: "Gobernanza",
        description: "Cómo tu sistema evoluciona, comunica y valida cambios",
      },
      {
        title: "Arquitectura",
        description: "La base técnica que asegura consistencia y escalabilidad",
      },
      {
        title: "Métricas",
        description: "Medición del impacto real en el rendimiento de tu sistema",
      },
    ],

    governanceTitle: "Pilar 1: Gobernanza y Modelo Operativo en Agilidad",
    governanceIntro:
      "Marco regulatorio y operativo que dicta cómo el sistema evoluciona, se comunica y se valida. Una gobernanza sólida reduce fricción coordinativa y acelera la toma de decisiones.",

    governanceActivities: [
      {
        title: "Modelo de Contribución Federada",
        description:
          "Equipos responsables de diferentes áreas del sistema con propiedad clara y rutas de escalamiento",
      },
      {
        title: "Tests Remotos Pre-Desarrollo",
        description:
          "Validación de decisiones de diseño antes del desarrollo, reduciendo rework y desalineación",
      },
      {
        title: "Change Management Estratégico",
        description:
          "Proceso estructurado para introducir cambios al sistema con mínima disrupción",
      },
      {
        title: "Roadmap de Mejoras del Design System",
        description:
          "Roadmap de mejora continua que alinea la evolución del sistema con objetivos de negocio",
      },
      {
        title: "Administración de Roles y Permisos",
        description:
          "Modelo claro de permisos asegurando acceso y privilegios de contribución apropiados",
      },
    ],

    governanceDeliverables: [
      "Diagrama del Modelo Operativo",
      "Reportes e Insights de Tests Remotos",
      "Hoja de Ruta Estratégica (6-12 meses)",
      "Protocolo de Comunicación y Escalamiento",
    ],

    governanceImpact: "Reduce hasta un 40% el tiempo de coordinación entre equipos",

    architectureTitle: "Pilar 2: Arquitectura, Producción y Rampa Operativa",
    architectureIntro:
      "Base técnica que garantiza consistencia, escalabilidad y sostenibilidad a largo plazo. Este pilar asegura que el sistema pueda crecer sin perder calidad.",

    architectureActivities: [
      {
        title: "Diseño y Desarrollo de Activos",
        description:
          "Creación de tokens, componentes y patrones siguiendo principios de diseño atómico",
      },
      {
        title: "Arquitectura de Layouts Responsive",
        description:
          "Sistema responsive basado en tokens con estrategias de breakpoints y patrones adaptativos",
      },
      {
        title: "Reorganización de Librerías",
        description:
          "Reestructuración y optimización de librerías para mejor rendimiento y mantenibilidad",
      },
    ],

    architectureProcesses: [
      {
        title: "Workflow de Hand-off Estandarizado",
        description:
          "Especificaciones claras de diseño a desarrollo asegurando implementación pixel-perfect",
      },
      {
        title: "Habilitación de Células",
        description:
          "Estructura para organizar equipos en células funcionales con responsabilidades claras",
      },
    ],

    architectureDeliverables: [
      "Librerías de Componentes Documentadas",
      "Sistema de Tokens con Layouts Responsive",
      "Especificaciones y Estándares de Hand-off",
      "Kit Completo de Onboarding",
    ],

    metricsTitle: "Pilar 3: Métricas, Cultura y Salud del Sistema",
    metricsIntro:
      "Mide la eficacia real del sistema de diseño a través de datos cuantitativos y cualitativos. Este pilar transforma la salud del sistema de intuición a insights basados en datos.",

    metricsActivities: [
      {
        title: "Programa Figma Mastery",
        description:
          "Entrenamiento especializado para maximizar eficiencia del equipo en el uso de herramientas",
      },
      {
        title: "Identificación de Design Champions",
        description:
          "Identificación y empoderamiento de defensores clave que impulsan adopción y cambio cultural",
      },
      {
        title: "Monitoreo de Salud del Sistema",
        description:
          "Seguimiento continuo de métricas de adopción, consistencia y rendimiento",
      },
      {
        title: "Auditoría de Cumplimiento",
        description:
          "Auditorías regulares asegurando que los equipos sigan estándares y guías del sistema",
      },
    ],

    metricsDeliverables: [
      "Reporte de Salud del Sistema (trimestral)",
      "Programa y Materiales Figma Mastery",
      "Auditoría de Cumplimiento por Célula",
      "Matriz y Estrategia de Design Champions",
      "Reporte de ROI y Eficiencia",
    ],

    metricsResults: [
      "Reducción de 30-50% en tiempo de desarrollo",
      "60% menos inconsistencias visuales",
    ],

    recommendationTitle: "Factor Crítico de Éxito",
    recommendationText:
      "La implementación exitosa de estos tres pilares requiere compromiso organizacional en todos los niveles—desde el patrocinio ejecutivo hasta la participación hands-on de los equipos. Sin este compromiso, incluso el mejor sistema de diseño tendrá dificultades para lograr adopción.",

    ctaText: "Hablemos de cómo estos pilares pueden transformar tu design system",
    ctaButton: "Ponte en Contacto",
  },
};

export default function DSServicesPage() {
  const { t, locale } = useLanguage();
  const content = i18n[locale as keyof typeof i18n];

  return (
    <article>
      {/* 1. Hero / Header */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-6">
          {content.heroOverline}
        </div>
        <h1 className="font-heading text-display-lg italic tracking-display text-[var(--color-text-primary)] mb-6">
          {content.heroTitle}
        </h1>
        <p className="text-body-lg text-[var(--color-text-secondary)] mb-8">
          {content.heroSubtitle}
        </p>
        <p className="text-body-md text-[var(--color-text-secondary)] leading-relaxed max-w-reading">
          {content.heroDescription}
        </p>
      </section>

      {/* 2. Project Overview - 3 Pillars Overview */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md italic tracking-display text-[var(--color-text-primary)] mb-12">
          {content.pillarsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="border border-[var(--color-border)] rounded-lg p-8 theme-transition hover:border-[var(--color-text-primary)] transition-colors"
            >
              <h3 className="font-heading text-display-md italic tracking-display text-[var(--color-text-primary)] mb-4">
                {pillar.title}
              </h3>
              <p className="text-body-md text-[var(--color-text-secondary)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Challenge & Opportunity - Pillar 1: Governance */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md italic tracking-display text-[var(--color-text-primary)] mb-6">
          {content.governanceTitle}
        </h2>
        <p className="text-body-lg text-[var(--color-text-secondary)] mb-12">
          {content.governanceIntro}
        </p>

        <div className="mb-12">
          <h3 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-widest-caps">
            Key Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.governanceActivities.map((activity, idx) => (
              <div key={idx} className="border-l-2 border-[var(--color-border)] pl-6">
                <h4 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-2">
                  {activity.title}
                </h4>
                <p className="text-body-md text-[var(--color-text-secondary)]">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-widest-caps">
            Deliverables
          </h3>
          <ol className="space-y-3">
            {content.governanceDeliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-body-md font-semibold text-[var(--color-text-tertiary)] flex-shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-body-md text-[var(--color-text-secondary)]">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-lg p-8 theme-transition">
          <p className="text-body-md text-[var(--color-text-primary)] font-semibold">
            {content.governanceImpact}
          </p>
        </div>
      </section>

      {/* 4. Approach - Pillar 2: Architecture */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md italic tracking-display text-[var(--color-text-primary)] mb-6">
          {content.architectureTitle}
        </h2>
        <p className="text-body-lg text-[var(--color-text-secondary)] mb-12">
          {content.architectureIntro}
        </p>

        <div className="mb-12">
          <h3 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-widest-caps">
            Key Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.architectureActivities.map((activity, idx) => (
              <div key={idx} className="border border-[var(--color-border)] rounded-lg p-6 theme-transition">
                <h4 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-3">
                  {activity.title}
                </h4>
                <p className="text-body-md text-[var(--color-text-secondary)]">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-widest-caps">
            Operational Processes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.architectureProcesses.map((process, idx) => (
              <div key={idx}>
                <h4 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-3">
                  {process.title}
                </h4>
                <p className="text-body-md text-[var(--color-text-secondary)]">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-widest-caps">
            Technical Deliverables
          </h3>
          <ol className="space-y-3">
            {content.architectureDeliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-body-md font-semibold text-[var(--color-text-tertiary)] flex-shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-body-md text-[var(--color-text-secondary)]">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. What We Delivered - Pillar 3: Metrics */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md italic tracking-display text-[var(--color-text-primary)] mb-6">
          {content.metricsTitle}
        </h2>
        <p className="text-body-lg text-[var(--color-text-secondary)] mb-12">
          {content.metricsIntro}
        </p>

        <div className="mb-12">
          <h3 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-widest-caps">
            Key Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.metricsActivities.map((activity, idx) => (
              <div key={idx} className="border-l-2 border-[var(--color-border)] pl-6">
                <h4 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-2">
                  {activity.title}
                </h4>
                <p className="text-body-md text-[var(--color-text-secondary)]">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-widest-caps">
            Deliverables
          </h3>
          <ol className="space-y-3">
            {content.metricsDeliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-body-md font-semibold text-[var(--color-text-tertiary)] flex-shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-body-md text-[var(--color-text-secondary)]">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-lg p-8 theme-transition mb-12">
          <h3 className="text-body-md font-semibold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest-caps">
            Expected Results
          </h3>
          <ul className="space-y-3">
            {content.metricsResults.map((result, idx) => (
              <li key={idx} className="text-body-md text-[var(--color-text-secondary)] flex items-center gap-3">
                <span className="text-[var(--color-text-primary)] font-semibold">•</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Gallery - Recommendation */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <div className="bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-lg p-12 theme-transition">
          <h2 className="font-heading text-display-md italic tracking-display text-[var(--color-text-primary)] mb-6">
            {content.recommendationTitle}
          </h2>
          <p className="text-body-lg text-[var(--color-text-secondary)]">
            {content.recommendationText}
          </p>
        </div>
      </section>

      {/* 7. Impact & Results - CTA */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)] text-center">
        <p className="text-body-lg text-[var(--color-text-secondary)] mb-8">
          {content.ctaText}
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 border border-[var(--color-border)] rounded-lg text-body-md font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-card-bg)] transition-colors theme-transition"
        >
          {content.ctaButton}
        </Link>
      </section>

      {/* 8. Lessons Learned - Empty */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
      </section>

      {/* 9. Conclusion - Empty */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
      </section>

      {/* 10. Related Projects */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <RelatedProjects current="/ds-services" />
      </section>
    </article>
  );
}
