"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";

const i18n = {
  en: {
    title: "Autonomus",
    subtitle:
      "A digital platform that transport and accompany older adults in all their daily activities. From visits to the doctor, shopping, visiting friends, to family reunions.",
    description:
      "Autonomus was a project financed by G\u00fcil a Venture Studio for Mobility Startups.",
    heroAlt: "Autonomus platform overview",
    roleTitle: "My Role & Responsibilities",
    roleText:
      "I was in charge of Product Design, working closely with the CEO, Sales, Operations, Agile and Growth Marketing teams. My goal was to create an Uber-like experience tailored for seniors, ensuring accessibility, simplicity and trust throughout the entire user journey.",
    caregiverTitle: "App for Caregiver and Senior",
    caregiverDesc:
      "Designed the mobile application experience for both caregivers and seniors, focusing on ease of use, large touch targets, clear typography and intuitive navigation to accommodate users of all digital literacy levels.",
    caregiverAlt: "App for Caregiver and Senior",
    backOfficeTitle: "Back Office for Sales, Operations and Support",
    backOfficeDesc:
      "Created the internal back office platform used by Sales, Operations and Support teams to manage rides, monitor service quality, handle customer inquiries and track key performance metrics.",
    backOfficeAlt: "Back Office for Sales, Operations and Support",
    methodologyTitle: "Methodology & Deliverables",
    method1:
      "Workshop with Operations and Sales Stakeholders for Service Blue Print and Diagram Flows",
    method2: "Sitemaps of apps, Back Office, Public Website",
    method3: "App Map Screens",
    method4: "Design System with variables in Figma",
    method5: "Users Flows in Figma",
    method6: "Daily meetings and scrum ceremonies",
    toolsTitle: "Tools",
  },
  es: {
    title: "Autonomus",
    subtitle:
      "Una plataforma digital que transporta y acompaña a adultos mayores en todas sus actividades diarias. Desde visitas al médico, compras, visitar amigos, hasta reuniones familiares.",
    description:
      "Autonomus fue un proyecto financiado por G\u00fcil, un Venture Studio para Startups de Movilidad.",
    heroAlt: "Vista general de la plataforma Autonomus",
    roleTitle: "Mi Rol y Responsabilidades",
    roleText:
      "Estuve a cargo del Diseño de Producto, trabajando estrechamente con el CEO, y los equipos de Ventas, Operaciones, Agile y Growth Marketing. Mi objetivo era crear una experiencia tipo Uber adaptada para adultos mayores, asegurando accesibilidad, simplicidad y confianza a lo largo de todo el recorrido del usuario.",
    caregiverTitle: "App para Cuidador y Adulto Mayor",
    caregiverDesc:
      "Diseñé la experiencia de la aplicación móvil tanto para cuidadores como para adultos mayores, enfocándome en la facilidad de uso, áreas táctiles grandes, tipografía clara y navegación intuitiva para acomodar usuarios de todos los niveles de alfabetización digital.",
    caregiverAlt: "App para Cuidador y Adulto Mayor",
    backOfficeTitle: "Back Office para Ventas, Operaciones y Soporte",
    backOfficeDesc:
      "Creé la plataforma interna de back office utilizada por los equipos de Ventas, Operaciones y Soporte para gestionar viajes, monitorear la calidad del servicio, atender consultas de clientes y rastrear métricas clave de rendimiento.",
    backOfficeAlt: "Back Office para Ventas, Operaciones y Soporte",
    methodologyTitle: "Metodología y Entregables",
    method1:
      "Workshop con Stakeholders de Operaciones y Ventas para Service Blue Print y Diagramas de Flujo",
    method2: "Sitemaps de apps, Back Office, Sitio Web Público",
    method3: "Mapas de Pantallas de la App",
    method4: "Design System con variables en Figma",
    method5: "Flujos de Usuario en Figma",
    method6: "Reuniones diarias y ceremonias scrum",
    toolsTitle: "Herramientas",
  },
} as const;

export default function AutonomusPage() {
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
        <div className="mt-8 mb-4">
          <img src="/images/autonomus-services.png" alt={t.heroAlt} className="w-full h-auto rounded-lg" loading="lazy" />
        </div>

        {/* Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.roleTitle}
          </h2>
          <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
            <p>{t.roleText}</p>
          </div>
        </section>

        {/* Subsections */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.caregiverTitle}
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {t.caregiverDesc}
          </p>

          {/* App for Caregiver and Senior Image */}
          <div className="mt-8 mb-4">
            <img src="/images/autonomus-app-flows.png" alt={t.caregiverAlt} className="w-full h-auto rounded-lg" loading="lazy" />
          </div>

          {/* Mobile App Video */}
          <div className="mt-8 mb-4  mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '216%' }}>
              <iframe
                className="absolute inset-0 w-full h-full border-0"
                src="https://www-ccv.adobe.io/v1/player/ccv/6noqNmJ-MKs/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.backOfficeTitle}
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {t.backOfficeDesc}
          </p>

          {/* Back Office Images */}
          <div className="mt-8 mb-4">
            <img src="/images/autonomus-backoffice-list.png" alt="Back Office - Listado de servicios" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
          <div className="mt-8 mb-4">
            <img src="/images/autonomus-backoffice-detail.png" alt="Back Office - Detalle del servicio" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>

          {/* Back Office Video */}
          <div className="mt-8 mb-4">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full border-0"
                src="https://www-ccv.adobe.io/v1/player/ccv/SD6d2-ZeXmo/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Methodology & Deliverables */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.methodologyTitle}
          </h2>
          <ul className="space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.method1}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.method2}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.method3}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.method4}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.method5}
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 text-xs">&#9679;</span>
              {t.method6}
            </li>
          </ul>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <h2 className="font-heading text-display-md tracking-display mb-4">{t.toolsTitle}</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Figma  Figjam
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Mir&oacute;
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Relume
            </span>
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Webflow
            </span>
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/autonomus" />
      </div>
    </div>
  );
}
