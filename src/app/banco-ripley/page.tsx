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
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 pt-22 pb-22 text-center">
        <p className="text-overline uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-4 font-mono">
          {t.overline}
        </p>
        <h1 className="font-heading text-display-lg tracking-display mb-4">
          {t.title}
        </h1>
        <p className="text-body-lg text-[var(--color-text-secondary)] mb-8">
          {t.subtitle}
        </p>
        <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed  mx-auto">
          {t.heroDescription}
        </p>
        <div className="mt-8 mb-4 lg:-mx-24 xl:-mx-40 2xl:-mx-56">
          <AsciiImage
            src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/7d478cfe-4942-4e14-b5fb-4f27db3fcadc_rw_1920.jpg?h=6fb9d00d354d1b4ef2e47ddd88ae5068"
            alt={t.heroAlt}
          />
        </div>
      </section>

      {/* Section 1 - UX Lead */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.section1Title}
        </h2>

        <div className="space-y-6 text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            {t.section1Text}{" "}
            <strong className="text-[var(--color-text-primary)]">{t.chekName}</strong>
            {t.section1TextCont}
          </p>
        </div>

        {/* Chek Ecosystem */}
        <div className="mt-12">
          <h3 className="text-xl italic mb-8">{t.ecosystemTitle}</h3>

          <div className="space-y-8">
            <div className="border-l-2 border-[var(--color-border)] pl-6">
              <h4 className="text-xl italic text-[var(--color-text-primary)] mb-2">
                {t.chekPersonasTitle}
              </h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {t.chekPersonasDesc}
              </p>
            </div>

            <div className="border-l-2 border-[var(--color-border)] pl-6">
              <h4 className="text-xl italic text-[var(--color-text-primary)] mb-2">
                {t.chekComerciosTitle}
              </h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {t.chekComerciosDesc}
              </p>
            </div>

            <div className="border-l-2 border-[var(--color-border)] pl-6">
              <h4 className="text-xl italic text-[var(--color-text-primary)] mb-2">
                {t.websitesTitle}
              </h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {t.websitesDesc}
              </p>
            </div>

            <div className="border-l-2 border-[var(--color-border)] pl-6">
              <h4 className="text-xl italic text-[var(--color-text-primary)] mb-2">
                {t.devWebsiteTitle}
              </h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {t.devWebsiteDesc}
              </p>
            </div>

            <div className="border-l-2 border-[var(--color-border)] pl-6">
              <h4 className="text-xl italic text-[var(--color-text-primary)] mb-2">
                {t.backofficeTitle}
              </h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {t.backofficeDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mt-12">
          <h3 className="text-xl italic mb-6">{t.responsibilitiesTitle}</h3>
          <ul className="space-y-4 text-[var(--color-text-secondary)] text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)]" />
              <span>{t.resp1}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)]" />
              <span>{t.resp2}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)]" />
              <span>{t.resp3}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)]" />
              <span>{t.resp4}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-text-tertiary)] mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)]" />
              <span>{t.resp5}</span>
            </li>
          </ul>
        </div>

        {/* Chek Success Note */}
        <div className="mt-12 p-6 border border-[var(--color-border)] theme-transition">
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
            <strong className="text-[var(--color-text-primary)]">{t.successNoteLabel}</strong>{" "}
            {t.successNoteText}
          </p>
        </div>
      </section>

      {/* Section 2 - UX Manager */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.section2Title}
        </h2>

        <div className="space-y-6 text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            {t.section2Text}{" "}
            <strong className="text-[var(--color-text-primary)]">{t.uxCenter}</strong>{" "}
            {t.section2TextCont}
          </p>
        </div>

        <div className="mt-8 mb-4 lg:-mx-24 xl:-mx-40 2xl:-mx-56">
          <AsciiImage
            src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/075bd278-35f3-453d-b1b2-2a3c2e3aaeb9_rw_1920.jpg?h=3a9879a295af91f8fdb2f60338354002"
            alt={t.managerAlt}
          />
        </div>

        {/* 5 Key Areas */}
        <div className="mt-12 space-y-12">
          {/* 1. Enterprise */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-[var(--color-text-tertiary)]">01</span>
              <h3 className="text-xl italic">{t.area1Title}</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed pl-14">
              {t.area1Desc}
            </p>
            <div className="mt-6 mx-auto lg:-mx-24 xl:-mx-40 2xl:-mx-56">
              <AsciiImage
                src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/224e91da-9b40-464b-bbc2-297f507f3b80_rw_1920.jpg?h=1b474610d4e7c6f5001472f88256ae84"
                alt={t.area1Alt}
              />
            </div>
          </div>

          {/* 2. Team */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-[var(--color-text-tertiary)]">02</span>
              <h3 className="text-xl italic">{t.area2Title}</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed pl-14">
              {t.area2Desc}
            </p>
            <div className="mt-6 mx-auto lg:-mx-24 xl:-mx-40 2xl:-mx-56">
              <AsciiImage
                src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/2f3e18d1-1187-4b01-861c-b103ba408628_rw_1920.jpg?h=90ec9349ebe16fd89346696f4cad8007"
                alt={t.area2Alt}
              />
            </div>
          </div>

          {/* 3. Strategy */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-[var(--color-text-tertiary)]">03</span>
              <h3 className="text-xl italic">{t.area3Title}</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed pl-14">
              {t.area3Desc}
            </p>
            <div className="mt-6 mx-auto lg:-mx-24 xl:-mx-40 2xl:-mx-56">
              <AsciiImage
                src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/9643c2eb-d444-4923-b913-524f5033ead0_rw_1920.jpg?h=2a38e17682495fb86a19abe1dee745a7"
                alt={t.area3Alt}
              />
            </div>
          </div>

          {/* 4. Experience */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-[var(--color-text-tertiary)]">04</span>
              <h3 className="text-xl italic">{t.area4Title}</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed pl-14">
              {t.area4Desc}
            </p>
            <div className="mt-6 mx-auto lg:-mx-24 xl:-mx-40 2xl:-mx-56">
              <AsciiImage
                src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/299d5618-c739-4963-9dda-ac5d3889bfe3_rw_1920.jpg?h=147b14da61b654c5f1abe2e6b4e29c72"
                alt={t.area4Alt}
              />
            </div>
          </div>

          {/* 5. Operations */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-[var(--color-text-tertiary)]">05</span>
              <h3 className="text-xl italic">{t.area5Title}</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed pl-14">
              {t.area5Desc}
            </p>
            <div className="mt-6 mx-auto lg:-mx-24 xl:-mx-40 2xl:-mx-56">
              <AsciiImage
                src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/4d535e33-186a-492a-9622-eea44e54eb8f_rw_1920.jpg?h=a9e61622f980d539dff71f92548344f3"
                alt={t.area5Alt}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 pb-22">
        <RelatedProjects current="/banco-ripley" />
      </section>
    </article>
  );
}
