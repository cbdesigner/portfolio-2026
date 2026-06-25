"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";
import AsciiImage from "@/components/AsciiImage";

const i18n = {
  en: {
    overline: "Case Study",
    title: "Transforming the Digital Experience at Banco Ripley",
    subtitle: "From Lead UX to UX Manager",
    heroDescription:
      "Discover how effective design management and a user-centered approach drove innovation during my time at Banco Ripley.",
    heroAlt: "From Lead UX to UX Manager at Banco Ripley",
    section1Title: "Let\u2019s start from the beginning as a UX Lead...",
    section1Text:
      "In August 2019, I was hired as UX Lead by Banco Ripley for their digital wallet",
    chekName: "Chek",
    section1TextCont:
      ". Chek is a 100% digital account with the ambition to become a fully digital bank. In this role, I supported different areas: Marketing, Legal, Development, Product and Growth, and Ripley\u2019s retail branch.",
    ecosystemTitle: "Chek Ecosystem",
    chekPersonasTitle: "Chek Personas App",
    chekPersonasDesc: "Transfers, payments via QR, deposits, and bill splitting.",
    chekComerciosTitle: "Chek Comercios App",
    chekComerciosDesc:
      "100% digital, no POS needed, no commission, and business management capabilities.",
    websitesTitle: "Websites",
    websitesDesc: "Promote products and services with Help Centers.",
    devWebsiteTitle: "Developers Website",
    devWebsiteDesc: "eCommerce integrations for developers.",
    backofficeTitle: "Backoffice Platform",
    backofficeDesc:
      "Admin features for users, movements, biometric validations, and KPIs.",
    responsibilitiesTitle: "Responsibilities",
    resp1: "Design system in Figma",
    resp2: "Managing quarterly initiatives, PI Planning, roadmap in Jira",
    resp3:
      "Hiring, leading, and training UX writers, researchers, and designers in Scrum",
    resp4:
      "Design operating model with Double Diamond, Lean, and Dual Track",
    resp5: "Defining tools: Figma, Jira, Typeform, Maze, Miro",
    successNoteLabel: "A note about Chek\u2019s success:",
    successNoteText: "Chek reached 1.6 million users by the end of 2024.",
    section2Title: "Now let\u2019s move on to my new role as UX Manager...",
    section2Text: "From May 2021 to October 2023, I took on the role of UX Manager. I created a",
    uxCenter: "UX Center of Excellence",
    section2TextCont:
      "for Chile and Peru, and implemented a UX strategy across 5 key areas.",
    managerAlt: "UX Manager transition at Banco Ripley",
    area1Title: "Enterprise",
    area1Desc:
      "Aligned UX with business objectives through regular meetings with Chief Product Owners and leaders across the organization.",
    area1Alt: "Enterprise - aligning UX with business",
    area2Title: "Team",
    area2Desc:
      "Managed recruiting, onboarding, feedback, 1:1 meetings, and career paths for the design team.",
    area2Alt: "Team management and development",
    area3Title: "Strategy",
    area3Desc:
      "Defined the roadmap in Jira, set OKRs, and led PI Planning following the SAFe framework.",
    area3Alt: "UX Strategy and vision",
    area4Title: "Experience",
    area4Desc:
      "Built a multibranding design system with tokens, applied consistently across all platforms.",
    area4Alt: "Experience - human-centered innovation",
    area5Title: "Operations",
    area5Desc:
      "Established the UX workflow with Double Diamond, managed tools, ensured design coherence, maintained a documentary hub, and defined the org chart.",
    area5Alt: "Operations - UX delivery processes",
  },
  es: {
    overline: "Caso de Estudio",
    title: "Transformando la Experiencia Digital en Banco Ripley",
    subtitle: "De Lead UX a UX Manager",
    heroDescription:
      "Descubre cómo una gestión de diseño efectiva y un enfoque centrado en el usuario impulsaron la innovación durante mi tiempo en Banco Ripley.",
    heroAlt: "De Lead UX a UX Manager en Banco Ripley",
    section1Title: "Comencemos desde el principio como UX Lead...",
    section1Text:
      "En agosto de 2019, fui contratado como UX Lead por Banco Ripley para su billetera digital",
    chekName: "Chek",
    section1TextCont:
      ". Chek es una cuenta 100% digital con la ambición de convertirse en un banco completamente digital. En este rol, apoyé a diferentes áreas: Marketing, Legal, Desarrollo, Producto y Crecimiento, y la sucursal retail de Ripley.",
    ecosystemTitle: "Ecosistema Chek",
    chekPersonasTitle: "Chek Personas App",
    chekPersonasDesc:
      "Transferencias, pagos vía QR, depósitos y división de cuentas.",
    chekComerciosTitle: "Chek Comercios App",
    chekComerciosDesc:
      "100% digital, sin necesidad de POS, sin comisión y capacidades de gestión comercial.",
    websitesTitle: "Sitios Web",
    websitesDesc:
      "Promoción de productos y servicios con Centros de Ayuda.",
    devWebsiteTitle: "Sitio para Desarrolladores",
    devWebsiteDesc: "Integraciones de eCommerce para desarrolladores.",
    backofficeTitle: "Plataforma Backoffice",
    backofficeDesc:
      "Funciones de administración para usuarios, movimientos, validaciones biométricas y KPIs.",
    responsibilitiesTitle: "Responsabilidades",
    resp1: "Design system en Figma",
    resp2:
      "Gestión de iniciativas trimestrales, PI Planning, roadmap en Jira",
    resp3:
      "Contratación, liderazgo y capacitación de UX writers, investigadores y diseñadores en Scrum",
    resp4:
      "Modelo operativo de diseño con Double Diamond, Lean y Dual Track",
    resp5: "Definición de herramientas: Figma, Jira, Typeform, Maze, Miro",
    successNoteLabel: "Nota sobre el éxito de Chek:",
    successNoteText:
      "Chek alcanzó 1.6 millones de usuarios a fines de 2024.",
    section2Title: "Ahora pasemos a mi nuevo rol como UX Manager...",
    section2Text:
      "Desde mayo de 2021 hasta octubre de 2023, asumí el rol de UX Manager. Creé un",
    uxCenter: "Centro de Excelencia UX",
    section2TextCont:
      "para Chile y Perú, e implementé una estrategia UX en 5 áreas clave.",
    managerAlt: "Transición a UX Manager en Banco Ripley",
    area1Title: "Empresa",
    area1Desc:
      "Alineé la UX con los objetivos de negocio a través de reuniones periódicas con Chief Product Owners y líderes de toda la organización.",
    area1Alt: "Empresa - alineando UX con el negocio",
    area2Title: "Equipo",
    area2Desc:
      "Gestioné reclutamiento, onboarding, feedback, reuniones 1:1 y planes de carrera para el equipo de diseño.",
    area2Alt: "Gestión y desarrollo del equipo",
    area3Title: "Estrategia",
    area3Desc:
      "Definí el roadmap en Jira, establecí OKRs y lideré el PI Planning siguiendo el framework SAFe.",
    area3Alt: "Estrategia y visión UX",
    area4Title: "Experiencia",
    area4Desc:
      "Construí un design system multimarca con tokens, aplicado de manera consistente en todas las plataformas.",
    area4Alt: "Experiencia - innovación centrada en el humano",
    area5Title: "Operaciones",
    area5Desc:
      "Establecí el flujo de trabajo UX con Double Diamond, gestioné herramientas, aseguré la coherencia del diseño, mantuve un hub documental y definí el organigrama.",
    area5Alt: "Operaciones - procesos de entrega UX",
  },
} as const;

export default function BancoRipleyPage() {
  const { locale } = useLanguage();
  const t = i18n[locale];

  return (
    <article className="overflow-x-hidden">
      <>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <div className="mb-6">
            <span className="text-sm font-medium text-[var(--color-text-secondary)] tracking-wide uppercase">
              {t.overline}
            </span>
          </div>
          <h1 className="font-heading text-display-lg tracking-display mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] mb-4 max-w-3xl">
            {t.subtitle}
          </p>
          <p className="text-lg text-[var(--color-text-tertiary)] max-w-4xl">
            {t.heroDescription}
          </p>
        </section>

        {/* Hero Image */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <AsciiImage
              src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/7d478cfe-4942-4e14-b5fb-4f27db3fcadc_rw_1920.jpg?h=6fb9d00d354d1b4ef2e47ddd88ae5068"
              alt={t.heroAlt}
              colorOnHover
            />
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
                Banco Ripley
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
                Roles
              </h3>
              <p className="text-lg text-[var(--color-text-primary)]">
                UX Lead, UX Manager
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
                Timeline
              </h3>
              <p className="text-lg text-[var(--color-text-primary)]">
                4+ Years (2019-2023)
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
                Tech Stack
              </h3>
              <p className="text-lg text-[var(--color-text-primary)]">
                Figma, Jira, Design Systems
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
                Banco Ripley needed to build a digital wallet from scratch while managing design consistency across multiple products and platforms.
              </p>
              <ul className="space-y-3 text-[var(--color-text-tertiary)]">
                <li>• No established UX direction or design system</li>
                <li>• Multiple teams working in silos (Marketing, Legal, Dev, Product)</li>
                <li>• Rapid growth requiring design leadership</li>
                <li>• Need for consistency across Personas, Comercios, and admin platforms</li>
                <li>• Building organizational design infrastructure from zero</li>
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-display-sm tracking-display mb-6">
                The Opportunity
              </h2>
              <p className="text-[var(--color-text-tertiary)] mb-6">
                Create a scalable design organization and system that would enable Chek to reach 1.6M+ users while maintaining consistency and enabling team growth across Chile and Peru.
              </p>
              <ul className="space-y-3 text-[var(--color-text-tertiary)]">
                <li>• Build design system and tokens in Figma</li>
                <li>• Establish design operating model (Double Diamond + Lean)</li>
                <li>• Scale from individual contributor to manager</li>
                <li>• Create UX Center of Excellence for multiple regions</li>
                <li>• Enable rapid feature development without sacrificing quality</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Approach - Phase 1: UX Lead */}
        <section className="border-t border-[var(--color-border)]">
          <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
            <h2 className="font-heading text-display-md tracking-display mb-8">
              {t.section1Title}
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
              {t.section1Text}{" "}
              <strong className="text-[var(--color-text-primary)]">{t.chekName}</strong>
              {t.section1TextCont}
            </p>
          </section>

          {/* Chek Ecosystem */}
          <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
            <h3 className="font-heading text-display-sm tracking-display mb-6">
              {t.ecosystemTitle}
            </h3>

            <div className="space-y-8 text-[var(--color-text-tertiary)]">
              <div>
                <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">
                  {t.chekPersonasTitle}
                </h4>
                <p>{t.chekPersonasDesc}</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">
                  {t.chekComerciosTitle}
                </h4>
                <p>{t.chekComerciosDesc}</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">
                  {t.websitesTitle}
                </h4>
                <p>{t.websitesDesc}</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">
                  {t.devWebsiteTitle}
                </h4>
                <p>{t.devWebsiteDesc}</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">
                  {t.backofficeTitle}
                </h4>
                <p>{t.backofficeDesc}</p>
              </div>
            </div>
          </section>

          {/* Responsibilities Section */}
          <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
            <h3 className="font-heading text-display-sm tracking-display mb-6">
              {t.responsibilitiesTitle}
            </h3>
            <ul className="space-y-4 text-[var(--color-text-tertiary)]">
              <li>• {t.resp1}</li>
              <li>• {t.resp2}</li>
              <li>• {t.resp3}</li>
              <li>• {t.resp4}</li>
              <li>• {t.resp5}</li>
            </ul>
          </section>

          {/* Chek Success Note */}
          <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
            <p className="text-[var(--color-text-secondary)] text-lg">
              <strong className="text-[var(--color-text-primary)]">{t.successNoteLabel}</strong>{" "}
              {t.successNoteText}
            </p>
          </section>
        </section>

        {/* Phase 2: UX Manager */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h2 className="font-heading text-display-md tracking-display mb-8">
            {t.section2Title}
          </h2>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            {t.section2Text}{" "}
            <strong className="text-[var(--color-text-primary)]">{t.uxCenter}</strong>{" "}
            {t.section2TextCont}
          </p>
        </section>

        {/* Manager Phase Image */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <AsciiImage
              src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/075bd278-35f3-453d-b1b2-2a3c2e3aaeb9_rw_1920.jpg?h=3a9879a295af91f8fdb2f60338354002"
              alt={t.managerAlt}
              colorOnHover
            />
          </div>
        </section>

        {/* 5 Key Areas */}
        {/* 1. Enterprise */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            1. {t.area1Title}
          </h3>
          <p className="text-[var(--color-text-tertiary)]">
            {t.area1Desc}
          </p>
        </section>

        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <AsciiImage
              src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/224e91da-9b40-464b-bbc2-297f507f3b80_rw_1920.jpg?h=1b474610d4e7c6f5001472f88256ae84"
              alt={t.area1Alt}
              colorOnHover
            />
          </div>
        </section>

        {/* 2. Team */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            2. {t.area2Title}
          </h3>
          <p className="text-[var(--color-text-tertiary)]">
            {t.area2Desc}
          </p>
        </section>

        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <AsciiImage
              src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/2f3e18d1-1187-4b01-861c-b103ba408628_rw_1920.jpg?h=90ec9349ebe16fd89346696f4cad8007"
              alt={t.area2Alt}
              colorOnHover
            />
          </div>
        </section>

        {/* 3. Strategy */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            3. {t.area3Title}
          </h3>
          <p className="text-[var(--color-text-tertiary)]">
            {t.area3Desc}
          </p>
        </section>

        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <AsciiImage
              src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/9643c2eb-d444-4923-b913-524f5033ead0_rw_1920.jpg?h=2a38e17682495fb86a19abe1dee745a7"
              alt={t.area3Alt}
              colorOnHover
            />
          </div>
        </section>

        {/* 4. Experience */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            4. {t.area4Title}
          </h3>
          <p className="text-[var(--color-text-tertiary)]">
            {t.area4Desc}
          </p>
        </section>

        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <AsciiImage
              src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/299d5618-c739-4963-9dda-ac5d3889bfe3_rw_1920.jpg?h=147b14da61b654c5f1abe2e6b4e29c72"
              alt={t.area4Alt}
              colorOnHover
            />
          </div>
        </section>

        {/* 5. Operations */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            5. {t.area5Title}
          </h3>
          <p className="text-[var(--color-text-tertiary)]">
            {t.area5Desc}
          </p>
        </section>

        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <AsciiImage
              src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/4d535e33-186a-492a-9622-eea44e54eb8f_rw_1920.jpg?h=a9e61622f980d539dff71f92548344f3"
              alt={t.area5Alt}
              colorOnHover
            />
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
                Design System in Figma
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">
                Complete design token system with semantic naming, multibranding support, and comprehensive component library.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
                Design Operating Model
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">
                Implemented Double Diamond methodology with Lean principles and Dual Track Agile for design-engineering alignment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
                UX Center of Excellence
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">
                Established design center serving Chile and Peru with 20+ designers, researchers, and UX writers across teams.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
                Team Infrastructure
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">
                Recruitment, onboarding, career development, and 1:1 frameworks enabling team growth from 3 to 20+ designers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
                Strategic Roadmapping
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">
                OKR definition, PI Planning with SAFe framework, and quarterly initiative management across multiple products.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
                Product Ecosystem
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">
                Consistency across 5+ platforms: Personas app, Comercios app, Websites, Developer platform, and Backoffice.
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
                  <span className="text-2xl font-bold text-[var(--color-text-secondary)]">1.6M+</span>
                  <span className="text-[var(--color-text-tertiary)]">Users reached by Chek by end of 2024</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl font-bold text-[var(--color-text-secondary)]">20+</span>
                  <span className="text-[var(--color-text-tertiary)]">Design team members managed and trained</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl font-bold text-[var(--color-text-secondary)]">5x</span>
                  <span className="text-[var(--color-text-tertiary)]">Team growth from initial hire to UX Center leadership</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-6 text-[var(--color-text-primary)]">
                Qualitative Outcomes
              </h3>
              <ul className="space-y-4 text-[var(--color-text-tertiary)]">
                <li>• <strong className="text-[var(--color-text-primary)]">Design Consistency:</strong> Unified visual language across multiple products and platforms</li>
                <li>• <strong className="text-[var(--color-text-primary)]">Team Scalability:</strong> Design system enabled rapid hiring and onboarding of new team members</li>
                <li>• <strong className="text-[var(--color-text-primary)]">Process Excellence:</strong> Double Diamond + Lean methodology improved design efficiency</li>
                <li>• <strong className="text-[var(--color-text-primary)]">Regional Expansion:</strong> Successfully scaled design operations to Chile and Peru</li>
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
                <li>• <strong className="text-[var(--color-text-primary)]">Design System First:</strong> Building Figma system early enabled consistency as we scaled</li>
                <li>• <strong className="text-[var(--color-text-primary)]">Clear Operating Model:</strong> Double Diamond framework provided structure for distributed teams</li>
                <li>• <strong className="text-[var(--color-text-primary)]">Team Investment:</strong> Hiring early and investing in designer growth paid dividends</li>
                <li>• <strong className="text-[var(--color-text-primary)]">Cross-functional Alignment:</strong> Regular meetings with Product, Dev, and Legal ensured design effectiveness</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
                Areas for Improvement
              </h3>
              <ul className="space-y-3 text-[var(--color-text-tertiary)]">
                <li>• <strong className="text-[var(--color-text-primary)]">Earlier User Research:</strong> More systematic user research earlier in product development</li>
                <li>• <strong className="text-[var(--color-text-primary)]">Automation Investment:</strong> Design system automation would have reduced manual work</li>
                <li>• <strong className="text-[var(--color-text-primary)]">Accessibility Planning:</strong> WCAG compliance should have been prioritized from day one</li>
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
              My journey at Banco Ripley demonstrates the power of building design systems and organizational infrastructure from the ground up. Starting as a UX Lead supporting Chek's digital wallet, I scaled the design practice into a regional Center of Excellence serving multiple countries.
            </p>
            <p>
              The success of Chek—reaching 1.6 million users—was not just about product design. It was about creating the systems, processes, and teams that enabled consistent, scalable design across an increasingly complex ecosystem.
            </p>
            <p>
              From design systems in Figma to team management frameworks to strategic roadmapping, every element contributed to enabling rapid product development without sacrificing quality or consistency.
            </p>
          </div>
        </section>

        {/* Related Projects */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <RelatedProjects current="/banco-ripley" />
        </section>
      </>
    </article>
  );
}
