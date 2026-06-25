"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";

const i18n = {
  en: {
    title: "Autonomus",
    subtitle:
      "A digital platform that transport and accompany older adults in all their daily activities. From visits to the doctor, shopping, visiting friends, to family reunions.",
    description:
      "Autonomus was a project financed by Guil a Venture Studio for Mobility Startups.",
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
      "Autonomus fue un proyecto financiado por Guil, un Venture Studio para Startups de Movilidad.",
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
          Digital Mobility Platform for Senior Adults
        </p>
        <p className="text-lg text-[var(--color-text-tertiary)] max-w-4xl">
          {t.subtitle}. {t.description}
        </p>
      </section>

      {/* Hero Image */}
      <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
        <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
          <img src="/images/autonomus-services.png" alt={t.heroAlt} className="w-full" loading="lazy" />
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
              Autonomus / Guil
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Role
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Product Designer
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Timeline
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              8 Months
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Tech Stack
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Figma, Webflow
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
              Senior adults face barriers to mobility, social connection, and independence. Existing transportation solutions lack accessibility features and were not designed with their specific needs in mind.
            </p>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• Limited transportation options for seniors</li>
              <li>• Existing apps too complex for varying digital literacy levels</li>
              <li>• Lack of trust in unfamiliar digital platforms</li>
              <li>• No design specifically accommodating aging users</li>
              <li>• Complex operational requirements for service management</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-display-sm tracking-display mb-6">
              The Opportunity
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-6">
              Create an Uber-like experience purpose-built for seniors, prioritizing accessibility, simplicity, and trust at every touchpoint.
            </p>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• Large, accessible touch targets and typography</li>
              <li>• Simplified, intuitive navigation</li>
              <li>• Clear trust signals (driver info, ratings, support)</li>
              <li>• Both user and operational platform</li>
              <li>• Design system enabling rapid scaling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-[var(--color-border)]">
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h2 className="font-heading text-display-md tracking-display mb-8">
            {t.roleTitle}
          </h2>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            {t.roleText}
          </p>
        </section>

        {/* Caregiver & Senior Section */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            {t.caregiverTitle}
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            {t.caregiverDesc}
          </p>
        </section>

        {/* App Flows Image */}
        <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img src="/images/autonomus-app-flows.png" alt={t.caregiverAlt} className="w-full" loading="lazy" />
          </div>
        </section>

        {/* Mobile App Video */}
        <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
          <div className="max-w-2xl mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <video src="/videos/autonomus-app-video.mp4" controls className="w-full h-auto" />
          </div>
        </section>

        {/* Back Office Section */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            {t.backOfficeTitle}
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            {t.backOfficeDesc}
          </p>
        </section>

        {/* Back Office List Image */}
        <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img src="/images/autonomus-backoffice-list.png" alt="Back Office - Listado de servicios" className="w-full" loading="lazy" />
          </div>
        </section>

        {/* Back Office Detail Image */}
        <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img src="/images/autonomus-backoffice-detail.png" alt="Back Office - Detalle del servicio" className="w-full" loading="lazy" />
          </div>
        </section>

        {/* Back Office Video */}
        <section className="w-full px-8 md:px-0 py-8 border-t border-[var(--color-border)]">
          <div className="max-w-2xl mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <video src="/videos/autonomus-backoffice-video.mp4" controls className="w-full h-auto" />
          </div>
        </section>
      </section>

      {/* What We Delivered */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          What We Delivered
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Mobile App (User)
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Fully accessible mobile application for seniors with large touch targets, clear typography, and simplified navigation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Back Office Platform
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Internal operations platform for Sales, Operations, and Support teams to manage rides and service quality.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Design System
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Complete design system with variables in Figma, enabling rapid feature development and consistency.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              User Flows & Wireframes
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Complete user flows, sitemap, and wireframes for app, back office, and public website.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Service Blueprint
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Service blueprints and operational diagrams aligning design with business logic and user needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Prototypes & Videos
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Interactive prototypes and demo videos showcasing user flows across mobile and web platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology & Deliverables */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          Methodology & Approach
        </h2>
        <ul className="space-y-3 text-[var(--color-text-tertiary)]">
          <li>• {t.method1}</li>
          <li>• {t.method2}</li>
          <li>• {t.method3}</li>
          <li>• {t.method4}</li>
          <li>• {t.method5}</li>
          <li>• {t.method6}</li>
        </ul>
      </section>

      {/* Impact & Results */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          Impact & Results
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-medium mb-6 text-[var(--color-text-primary)]">
              Key Outcomes
            </h3>
            <ul className="space-y-4 text-[var(--color-text-tertiary)]">
              <li>• <strong className="text-[var(--color-text-primary)]">Accessibility First:</strong> Designed specifically for seniors with accessibility as core requirement</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Simplified UX:</strong> Reduced cognitive load through intuitive navigation and large touch targets</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Rapid Launch:</strong> Design system enabled fast implementation and deployment</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Trust Building:</strong> Clear safety features and familiar patterns built user confidence</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6 text-[var(--color-text-primary)]">
              Deliverables
            </h3>
            <ul className="space-y-4 text-[var(--color-text-tertiary)]">
              <li>• 50+ high-fidelity design screens</li>
              <li>• Complete design system with component library</li>
              <li>• Interactive prototypes with video demos</li>
              <li>• Service blueprints and operational documentation</li>
              <li>• User flows and journey maps</li>
              <li>• Accessibility guidelines and testing</li>
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
              <li>• <strong className="text-[var(--color-text-primary)]">User-Centered Approach:</strong> Extensive focus on seniors' needs drove better design decisions</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Simplicity by Design:</strong> Constraints created better UX than trying to please everyone</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Stakeholder Alignment:</strong> Regular workshops with sales, ops and product ensured feasibility</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Design System Foundation:</strong> Figma system enabled faster iterations and consistency</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              Areas for Growth
            </h3>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• <strong className="text-[var(--color-text-primary)]">User Testing:</strong> More extensive testing with actual seniors would have validated assumptions earlier</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Accessibility Standards:</strong> Formal WCAG compliance framework from day one</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Performance Metrics:</strong> Earlier definition of KPIs for measuring success</li>
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
            Autonomus demonstrates how thoughtful design can solve real-world problems. By focusing exclusively on the needs of senior adults, we created a mobility platform that prioritizes simplicity, accessibility, and trust.
          </p>
          <p>
            The challenge was not about building an Uber clone, but about reimagining the experience for a demographic whose needs had been overlooked. This required rethinking every design decision—from touch target sizes to trust signals—to ensure accessibility without condescension.
          </p>
          <p>
            The result is a platform that proves accessibility and design excellence are not constraints, but opportunities for innovation.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-6">
          {t.toolsTitle}
        </h2>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Figma
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            FigJam
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Miro
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
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <RelatedProjects current="/autonomus" />
      </section>
    </>
  );
}
