"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";

const i18n = {
  en: {
    title: "My Design Process",
    subtitle:
      "I follow a structured but flexible design process that centers around the UX Double Diamond framework.",
    subtitleDiamonds: "Discover, Define, Develop and Deliver.",
    discoverTitle: "Discover",
    defineTitle: "Define",
    developTitle: "Develop",
    deliverTitle: "Deliver",
    activitiesLabel: "Activities",
    deliverablesLabel: "Deliverables",
    // Discover
    discoverActivity1: "User research (interviews, surveys, observational studies)",
    discoverActivity2: "Stakeholder interviews",
    discoverActivity3: "Analyze analytics data",
    discoverActivity4: "Content audit",
    discoverDeliverable1: "Research report",
    discoverAlt: "Discover phase",
    // Define
    defineActivity1: "User personas",
    defineActivity2: "User journey maps",
    defineActivity3: "Affinity mapping",
    defineActivity4: "Problem statement",
    defineDeliverable1: "Design brief",
    defineDeliverable2: "Service blueprint",
    defineDeliverable3: "User stories",
    defineDeliverable4: "MoSCoW prioritization",
    defineAlt: "Define phase",
    // Develop
    developActivity1: "Sketches and wireframes",
    developActivity2: "Low-fidelity prototypes",
    developActivity3: "Usability testing",
    developActivity4: "Feature Prioritization Map",
    developDeliverable1: "Sitemap",
    developDeliverable2: "Iterate based on feedback",
    developAlt: "Develop phase",
    // Deliver
    deliverActivity1: "High-fidelity prototypes",
    deliverActivity2: "Final usability testing",
    deliverActivity3: "Design specifications and guidelines",
    deliverActivity4: "Implementation planning",
    deliverDeliverable1: "Post-launch monitoring",
    deliverDeliverable2: "Finalize product",
    deliverAlt: "Deliver phase",
    // Summary
    summary:
      "My design process emphasizes a user-centric approach, iterative testing, and collaboration across all stages of product development. By combining structured methodologies with adaptive thinking, I ensure that design decisions are grounded in real user needs and validated through continuous feedback loops.",
  },
  es: {
    title: "Mi Proceso de Diseño",
    subtitle:
      "Sigo un proceso de diseño estructurado pero flexible que se centra en el framework del Doble Diamante de UX.",
    subtitleDiamonds: "Descubrir, Definir, Desarrollar y Entregar.",
    discoverTitle: "Descubrir",
    defineTitle: "Definir",
    developTitle: "Desarrollar",
    deliverTitle: "Entregar",
    activitiesLabel: "Actividades",
    deliverablesLabel: "Entregables",
    // Descubrir
    discoverActivity1: "Investigación de usuarios (entrevistas, encuestas, estudios observacionales)",
    discoverActivity2: "Entrevistas con stakeholders",
    discoverActivity3: "Análisis de datos analíticos",
    discoverActivity4: "Auditoría de contenido",
    discoverDeliverable1: "Informe de investigación",
    discoverAlt: "Fase de Descubrimiento",
    // Definir
    defineActivity1: "Personas de usuario",
    defineActivity2: "Mapas de recorrido del usuario",
    defineActivity3: "Mapas de afinidad",
    defineActivity4: "Declaración del problema",
    defineDeliverable1: "Brief de diseño",
    defineDeliverable2: "Service blueprint",
    defineDeliverable3: "Historias de usuario",
    defineDeliverable4: "Priorización MoSCoW",
    defineAlt: "Fase de Definición",
    // Desarrollar
    developActivity1: "Bocetos y wireframes",
    developActivity2: "Prototipos de baja fidelidad",
    developActivity3: "Pruebas de usabilidad",
    developActivity4: "Mapa de Priorización de Funcionalidades",
    developDeliverable1: "Mapa del sitio",
    developDeliverable2: "Iterar basándose en feedback",
    developAlt: "Fase de Desarrollo",
    // Entregar
    deliverActivity1: "Prototipos de alta fidelidad",
    deliverActivity2: "Pruebas de usabilidad finales",
    deliverActivity3: "Especificaciones y guías de diseño",
    deliverActivity4: "Planificación de implementación",
    deliverDeliverable1: "Monitoreo post-lanzamiento",
    deliverDeliverable2: "Finalizar producto",
    deliverAlt: "Fase de Entrega",
    // Resumen
    summary:
      "Mi proceso de diseño enfatiza un enfoque centrado en el usuario, pruebas iterativas y colaboración en todas las etapas del desarrollo de producto. Al combinar metodologías estructuradas con pensamiento adaptativo, me aseguro de que las decisiones de diseño estén fundamentadas en necesidades reales de los usuarios y validadas a través de ciclos continuos de retroalimentación.",
  },
} as const;

export default function MyDesignProcessPage() {
  const { locale } = useLanguage();
  const t = i18n[locale];

  return (
    <div className="min-h-screen">
      <div className=" mx-auto px-8 md:px-16 py-22">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="font-heading text-display-lg tracking-display mb-4">
            {t.title}
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] mb-4">
            {t.subtitle}
          </p>
          <p className="text-body-lg text-[var(--color-text-secondary)]">
            {t.subtitleDiamonds}
          </p>
        </header>

        <section className="mb-16">
          <div className="relative w-full  mx-auto" style={{ paddingBottom: '70.83%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnUOuhUu3jSBsp4QfOTbZt7%2FDouble-Diamond-%253CR%253E%253CD%253E-for-Product-Strategy-%2526-Product-Development%3Fpage-id%3D0%253A1%26node-id%3D0-1%26viewport%3D-75%252C-1642%252C0.28%26t%3D3LqySr5TXLwABpuq-1%26scaling%3Dcontain%26starting-point-node-id%3D604%253A12035%26content-scaling%3Dfixed"
              sandbox="allow-scripts"
            />
          </div>
        </section>

        {/* Discover */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">{t.discoverTitle}</h2>

          <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">
            {t.activitiesLabel}
          </h3>
          <ul className="space-y-3 text-[var(--color-text-secondary)] leading-relaxed mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.discoverActivity1}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.discoverActivity2}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.discoverActivity3}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.discoverActivity4}
            </li>
          </ul>

          <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">
            {t.deliverablesLabel}
          </h3>
          <ul className="space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.discoverDeliverable1}
            </li>
          </ul>

          <div className="mt-8">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/45df7e50-c493-463a-835c-2ab98409ebc8_rw_1920.jpg?h=42d4ed746449db9a3dc915315b080e02" alt={t.discoverAlt} className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        {/* Define */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">{t.defineTitle}</h2>

          <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">
            {t.activitiesLabel}
          </h3>
          <ul className="space-y-3 text-[var(--color-text-secondary)] leading-relaxed mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.defineActivity1}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.defineActivity2}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.defineActivity3}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.defineActivity4}
            </li>
          </ul>

          <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">
            {t.deliverablesLabel}
          </h3>
          <ul className="space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.defineDeliverable1}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.defineDeliverable2}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.defineDeliverable3}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.defineDeliverable4}
            </li>
          </ul>

          <div className="mt-8">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/504d30e8-ae01-4b18-b77b-1e51a501c090_rw_1920.jpg?h=1a7571a686fb5d46dcaf1d8314855f88" alt={t.defineAlt} className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        {/* Develop */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">{t.developTitle}</h2>

          <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">
            {t.activitiesLabel}
          </h3>
          <ul className="space-y-3 text-[var(--color-text-secondary)] leading-relaxed mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.developActivity1}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.developActivity2}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.developActivity3}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.developActivity4}
            </li>
          </ul>

          <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">
            {t.deliverablesLabel}
          </h3>
          <ul className="space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.developDeliverable1}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.developDeliverable2}
            </li>
          </ul>

          <div className="mt-8">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/2e0b3c9f-a25e-4668-b526-65aa516b8ebd_rw_1920.jpg?h=172424bc484d9ffb6ae6eccaee7c7fe1" alt={t.developAlt} className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        {/* Deliver */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">{t.deliverTitle}</h2>

          <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">
            {t.activitiesLabel}
          </h3>
          <ul className="space-y-3 text-[var(--color-text-secondary)] leading-relaxed mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.deliverActivity1}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.deliverActivity2}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.deliverActivity3}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.deliverActivity4}
            </li>
          </ul>

          <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">
            {t.deliverablesLabel}
          </h3>
          <ul className="space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.deliverDeliverable1}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.deliverDeliverable2}
            </li>
          </ul>

          <div className="mt-8">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/da8fa13b-6a64-42bb-ada9-920d36fbce72_rw_1920.jpg?h=6cd6d79780a30201ccab450bd1eae191" alt={t.deliverAlt} className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        {/* Summary */}
        <section className="mb-16">
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            {t.summary}
          </p>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/my-design-process" />
      </div>
    </div>
  );
}
