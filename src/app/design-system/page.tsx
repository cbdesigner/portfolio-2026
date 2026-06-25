"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";
import AsciiImage from "@/components/AsciiImage";

const i18n = {
  en: {
    title: "Design System",
    subtitle:
      "A journey in the field of Design Systems a constant search for excellence and efficiency",
    heroDescription:
      "From my initial exploration of Atomic Design Systems with Token Studio to my advanced work with Multibranding Design Systems with Variables, I\u2019ve continually expanded my expertise in design systems.",
    heroAlt: "Design System journey",
    journeyTitle: "Journey beginning",
    journeyText1: "My journey into Design Systems started in 2016, when I began investigating personally on my own time. The book",
    journeyBookTitle: "\u201cAtomic Design\u201d",
    journeyText2:
      "by Brad Frost became a foundational reference that shaped my understanding of modular, scalable design architectures.",
    journeyAlt: "Atomic Design book by Brad Frost",
    period2018Title: "2018 - 2019",
    period2018Text1:
      "I applied my knowledge at an Italian design firm, working on the Enel Italia design system in Adobe XD. During this period I also worked with Google Material Design using Sketch and Abstract, deepening my understanding of component-based design at scale.",
    period2018Text2:
      "In 2019, I started at Banco Ripley as UX Lead at Chek, where I continued using Material Design as the foundation for building consistent and accessible user experiences across their digital products.",
    tokensTitle: "Design System with Tokens Studio",
    tokensText1:
      "A pivotal moment came when I discovered a masterclass by Marcelo Paiva on Design Systems with Tokens. This led me to build my first Multibranding Design System with Tokens and Auto Layout, bringing a new level of flexibility and consistency to my design workflows.",
    tokensText2:
      "I was promoted to Corporate UX Manager at Banco Ripley Chile and Peru, where the design system was used across various platforms: the PWA app, Public Website, Seguros Ripley, Backoffice, and Customer Service Kiosks. I coordinated around 27 specialists, evangelizing the design system capability, creating workflows, and establishing OKRs to measure adoption and impact.",
    tokensAlt: "Design System with Tokens Studio",
    variablesTitle: "Multibranding Design System with variables",
    variablesText1:
      "I then joined Autonomus, a startup focused on mobility for seniors. Here I built a Multibranding Design System with Variables, leveraging Figma\u2019s latest improvements to create a highly adaptable system.",
    variablesText2:
      "This design system was used for the backoffice platform and an Uber-like app tailored for elderly users and their caregivers, ensuring accessibility and ease of use were at the forefront of every design decision.",
    variablesAlt: "Multibranding Design System with Variables",
    summary:
      "This journey through Design Systems has been one of continuous learning and evolution, from foundational principles of Atomic Design to building scalable, multi-brand systems using tokens and variables. Each step has strengthened my ability to create efficient, consistent, and adaptable design architectures that serve both users and development teams.",
    toolsTitle: "Tools",
  },
  es: {
    title: "Design System",
    subtitle:
      "Un viaje en el campo de los Design Systems, una búsqueda constante de excelencia y eficiencia",
    heroDescription:
      "Desde mi exploración inicial de los Atomic Design Systems con Token Studio hasta mi trabajo avanzado con Design Systems Multimarca con Variables, he expandido continuamente mi experiencia en design systems.",
    heroAlt: "Trayectoria en Design System",
    journeyTitle: "El comienzo del viaje",
    journeyText1: "Mi viaje en los Design Systems comenzó en 2016, cuando empecé a investigar de forma personal en mi tiempo libre. El libro",
    journeyBookTitle: "\u201cAtomic Design\u201d",
    journeyText2:
      "de Brad Frost se convirtió en una referencia fundamental que moldeó mi comprensión de arquitecturas de diseño modulares y escalables.",
    journeyAlt: "Libro Atomic Design de Brad Frost",
    period2018Title: "2018 - 2019",
    period2018Text1:
      "Apliqué mis conocimientos en una firma de diseño italiana, trabajando en el design system de Enel Italia en Adobe XD. Durante este período también trabajé con Google Material Design usando Sketch y Abstract, profundizando mi comprensión del diseño basado en componentes a escala.",
    period2018Text2:
      "En 2019, comencé en Banco Ripley como UX Lead en Chek, donde continué usando Material Design como base para construir experiencias de usuario consistentes y accesibles en todos sus productos digitales.",
    tokensTitle: "Design System con Tokens Studio",
    tokensText1:
      "Un momento clave llegó cuando descubrí una masterclass de Marcelo Paiva sobre Design Systems con Tokens. Esto me llevó a construir mi primer Design System Multimarca con Tokens y Auto Layout, aportando un nuevo nivel de flexibilidad y consistencia a mis flujos de trabajo de diseño.",
    tokensText2:
      "Fui promovido a UX Manager Corporativo en Banco Ripley Chile y Perú, donde el design system fue utilizado en diversas plataformas: la app PWA, Sitio Web Público, Seguros Ripley, Backoffice y Kioscos de Atención al Cliente. Coordiné alrededor de 27 especialistas, evangelizando la capacidad del design system, creando flujos de trabajo y estableciendo OKRs para medir la adopción e impacto.",
    tokensAlt: "Design System con Tokens Studio",
    variablesTitle: "Design System Multimarca con variables",
    variablesText1:
      "Luego me uní a Autonomus, una startup enfocada en movilidad para adultos mayores. Aquí construí un Design System Multimarca con Variables, aprovechando las últimas mejoras de Figma para crear un sistema altamente adaptable.",
    variablesText2:
      "Este design system fue utilizado para la plataforma de backoffice y una app tipo Uber diseñada para usuarios mayores y sus cuidadores, asegurando que la accesibilidad y facilidad de uso estuvieran al frente de cada decisión de diseño.",
    variablesAlt: "Design System Multimarca con Variables",
    summary:
      "Este viaje a través de los Design Systems ha sido uno de aprendizaje continuo y evolución, desde los principios fundamentales del Atomic Design hasta la construcción de sistemas escalables y multimarca usando tokens y variables. Cada paso ha fortalecido mi capacidad para crear arquitecturas de diseño eficientes, consistentes y adaptables que sirven tanto a usuarios como a equipos de desarrollo.",
    toolsTitle: "Herramientas",
  },
} as const;

export default function DesignSystemPage() {
  const { locale } = useLanguage();
  const t = i18n[locale];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* 1. Hero / Header */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <header className="mb-16">
          <h1 className="font-heading text-display-lg tracking-display mb-4">
            {t.title}
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] mb-8">
            {t.subtitle}
          </p>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            {t.heroDescription}
          </p>
          <div className="mt-8 mb-4 lg:-mx-24 xl:-mx-40 2xl:-mx-56">
            <AsciiImage
              src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/84fea897-f6e2-4276-ba5a-80e209da103f_rw_1920.jpg?h=81ff2abc9d2e4e9c32b52857d8d54386"
              alt={t.heroAlt}
              colorOnHover
            />
          </div>
        </header>

      </section>

      {/* 2. Project Overview - Journey Beginning */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.journeyTitle}
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {t.journeyText1}{" "}
            <span className="text-[var(--color-text-primary)] font-semibold italic">
              {t.journeyBookTitle}
            </span>{" "}
            {t.journeyText2}
          </p>
          <div className="w-full md:w-4/5 mx-auto mt-6">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/25825197-c473-4a76-bb01-401ddedcd0fb_rw_1920.png?h=3dcd06bb65a20695a3cd2c17815ca682" alt={t.journeyAlt} className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
      </section>

      {/* 3. Challenge & Opportunity - 2018-2019 */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h2 className="font-heading text-display-md tracking-display mb-6">{t.period2018Title}</h2>
          <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
            <p>{t.period2018Text1}</p>
            <p>{t.period2018Text2}</p>
          </div>
        </section>

      {/* 4. Approach - Design System with Tokens Studio */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.tokensTitle}
          </h2>
          <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
            <p>{t.tokensText1}</p>
            <p>{t.tokensText2}</p>
          </div>
          <div className="w-full md:w-4/5 mx-auto mt-6">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/cb5feb94-e5be-42aa-8cb9-7acc0760afb9_rw_1920.png?h=130d7524717101f2df6a053a7f4047cf" alt={t.tokensAlt} className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
          <div className="mt-8 mx-auto">
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="100%"
              height="600"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7rLDEvWaijCmlCDsrg8FYJ%2FAtomic-Design-System-Multibranding(Agnostic)-with-Tokens%252FVariables%3Ftype%3Dwhiteboard%26node-id%3D2%253A2057%26t%3DEmCIvj7kDxq0MtW7-1"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms"
            />
          </div>
      </section>

      {/* 5. What We Delivered - Multibranding Design System with Variables */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.variablesTitle}
          </h2>
          <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
            <p>{t.variablesText1}</p>
            <p>{t.variablesText2}</p>
          </div>
          <div className="mt-6 mx-auto">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/3a7b452f-b341-4e72-b0e7-743a6456924c_rw_1920.png?h=0bd1f99d2ffb6032ab3a7022b33f50d2" alt={t.variablesAlt} className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
      </section>

      {/* 6. Gallery - Summary */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            {t.summary}
          </p>
        </section>

      {/* 7. Impact & Results - Tools section */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
          <h2 className="font-heading text-display-md tracking-display mb-4">{t.toolsTitle}</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
              Figma
            </span>
          </div>
        </section>

      {/* 8. Lessons Learned - Empty */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
      </section>

      {/* 9. Conclusion - Empty */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
      </section>

      {/* 10. Related Projects */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <RelatedProjects current="/design-system" />
      </section>
    </div>
  );
}
