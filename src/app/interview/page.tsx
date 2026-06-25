"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";

const i18n = {
  en: {
    title: "I was interviewed by Multiplica in 2019",
    whatIsMultiplicaTitle: "What is Multiplica?",
    whatIsMultiplicaText:
      "Multiplica is a digital-native consulting firm specializing in digital experiences. With over 20 years of experience and presence in cities worldwide, they help organizations transform their digital strategies and deliver exceptional user experiences.",
    interviewTitle: "Interview with Carlos Baeza, UX Lead at Banco Ripley",
    interviewParagraph1:
      "Carlos shares the story of his arrival to Banco Ripley to lead Chek, a digital product that would become a key part of the bank\u2019s digital transformation strategy.",
    interviewParagraph2:
      "He explains how UX directly influences business results, driving measurable improvements in user engagement, conversion rates, and customer satisfaction.",
    blockquote:
      "\u201CIntegrating UX methodology into agile teams allows us to move faster while keeping the user at the center of every decision.\u201D",
    interviewParagraph3:
      "For Carlos, UX adds value by helping teams discover and validate hypotheses early in the process, reducing risk and ensuring the right product is built for the right audience.",
    interviewParagraph4:
      "Beyond his role at Banco Ripley, Carlos is also the CEO of a UX Services company, where he helps organizations strengthen their design capabilities and mature their UX practices.",
    interviewParagraph5:
      "He has also been designing a product suite in partnership with a legal tech company, applying user-centered design principles to a traditionally underserved industry.",
    maturityTitle: "Maturity in UX",
    maturityText:
      "In 2019, the UX field was reaching a pivotal moment. Digital products were increasingly improving people\u2019s lives, and UX was making a significant impact not only on external products but also on companies internally, transforming workflows and organizational culture.",
    mainGapsTitle: "Main Gaps",
    mainGapsParagraph1:
      "One of the main gaps identified is the macro conceptualization from an organizational perspective. Companies often struggle to see UX as a strategic function rather than just a design activity.",
    mainGapsParagraph2:
      "Another significant challenge lies in soft skills. The ability to communicate, collaborate, and influence across teams remains a critical area for growth in the UX profession.",
    whatAwaitsTitle: "What Awaits Us",
    whatAwaitsParagraph1:
      "Carlos pointed to Machine Learning as the short-term future of design, predicting that AI-powered tools would transform how designers work and create experiences.",
    whatAwaitsParagraph2:
      "Speed and quality are essential to stay competitive. The ability to iterate rapidly while maintaining high standards of usability and aesthetics is what sets great teams apart.",
    whatAwaitsParagraph3Pre: "He also mentions his experience with",
    whatAwaitsParagraph3Tool: "uizard.io",
    whatAwaitsParagraph3Post:
      ", an AI-powered tool that was already demonstrating how machine learning could accelerate the design process by converting sketches into digital prototypes.",
  },
  es: {
    title: "Fui entrevistado por Multiplica en 2019",
    whatIsMultiplicaTitle: "\u00BFQu\u00E9 es Multiplica?",
    whatIsMultiplicaText:
      "Multiplica es una consultora nativa digital especializada en experiencias digitales. Con m\u00E1s de 20 a\u00F1os de experiencia y presencia en ciudades de todo el mundo, ayudan a las organizaciones a transformar sus estrategias digitales y entregar experiencias de usuario excepcionales.",
    interviewTitle:
      "Entrevista con Carlos Baeza, UX Lead en Banco Ripley",
    interviewParagraph1:
      "Carlos comparte la historia de su llegada a Banco Ripley para liderar Chek, un producto digital que se convertir\u00EDa en una pieza clave de la estrategia de transformaci\u00F3n digital del banco.",
    interviewParagraph2:
      "Explica c\u00F3mo la UX influye directamente en los resultados del negocio, generando mejoras medibles en el engagement de usuarios, tasas de conversi\u00F3n y satisfacci\u00F3n del cliente.",
    blockquote:
      "\u201CIntegrar la metodolog\u00EDa UX en equipos \u00E1giles nos permite avanzar m\u00E1s r\u00E1pido manteniendo al usuario en el centro de cada decisi\u00F3n.\u201D",
    interviewParagraph3:
      "Para Carlos, la UX agrega valor al ayudar a los equipos a descubrir y validar hip\u00F3tesis temprano en el proceso, reduciendo el riesgo y asegurando que se construya el producto correcto para la audiencia correcta.",
    interviewParagraph4:
      "M\u00E1s all\u00E1 de su rol en Banco Ripley, Carlos tambi\u00E9n es CEO de una empresa de Servicios UX, donde ayuda a las organizaciones a fortalecer sus capacidades de dise\u00F1o y madurar sus pr\u00E1cticas de UX.",
    interviewParagraph5:
      "Tambi\u00E9n ha estado dise\u00F1ando una suite de productos en asociaci\u00F3n con una empresa de tecnolog\u00EDa legal, aplicando principios de dise\u00F1o centrado en el usuario a una industria tradicionalmente desatendida.",
    maturityTitle: "Madurez en UX",
    maturityText:
      "En 2019, el campo de la UX estaba alcanzando un momento crucial. Los productos digitales mejoraban cada vez m\u00E1s la vida de las personas, y la UX estaba generando un impacto significativo no solo en productos externos sino tambi\u00E9n en las empresas internamente, transformando flujos de trabajo y cultura organizacional.",
    mainGapsTitle: "Principales Brechas",
    mainGapsParagraph1:
      "Una de las principales brechas identificadas es la conceptualizaci\u00F3n macro desde una perspectiva organizacional. Las empresas frecuentemente luchan por ver la UX como una funci\u00F3n estrat\u00E9gica en lugar de solo una actividad de dise\u00F1o.",
    mainGapsParagraph2:
      "Otro desaf\u00EDo significativo radica en las habilidades blandas. La capacidad de comunicar, colaborar e influir entre equipos sigue siendo un \u00E1rea cr\u00EDtica de crecimiento en la profesi\u00F3n de UX.",
    whatAwaitsTitle: "Lo que nos espera",
    whatAwaitsParagraph1:
      "Carlos se\u00F1al\u00F3 el Machine Learning como el futuro a corto plazo del dise\u00F1o, prediciendo que las herramientas impulsadas por IA transformar\u00EDan la forma en que los dise\u00F1adores trabajan y crean experiencias.",
    whatAwaitsParagraph2:
      "La velocidad y la calidad son esenciales para mantenerse competitivo. La capacidad de iterar r\u00E1pidamente mientras se mantienen altos est\u00E1ndares de usabilidad y est\u00E9tica es lo que distingue a los grandes equipos.",
    whatAwaitsParagraph3Pre: "Tambi\u00E9n menciona su experiencia con",
    whatAwaitsParagraph3Tool: "uizard.io",
    whatAwaitsParagraph3Post:
      ", una herramienta impulsada por IA que ya estaba demostrando c\u00F3mo el machine learning pod\u00EDa acelerar el proceso de dise\u00F1o convirtiendo bocetos en prototipos digitales.",
  },
} as const;

export default function InterviewPage() {
  const { locale } = useLanguage();
  const t = i18n[locale];

  return (
    <div className="min-h-screen">
      {/* 1. Hero / Header */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <header className="mb-16">
          <h1 className="font-heading text-display-lg tracking-display mb-4">
            {t.title}
          </h1>
        </header>

      </section>

      {/* 2. Project Overview - What is Multiplica */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.whatIsMultiplicaTitle}
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {t.whatIsMultiplicaText}
          </p>
          <div className="w-full md:w-4/5 mx-auto mt-6 mb-6">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/251c0be5-e5c3-4b2d-8a45-0b1d0e9a6fbf_rw_1920.png?h=a7637cd3186675478999980674275955" alt="Multiplica - digital consulting firm" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

      {/* 3. Challenge & Opportunity - Interview */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.interviewTitle}
          </h2>
          <div className="w-full md:w-4/5 mx-auto mt-6 mb-6">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/b65d50ee-e2f4-4779-a32d-ff86fd544344_rw_1920.png?h=f4d8cd4e0bd1242e15d7feb9ff8ebfe9" alt="Interview with Carlos Baeza article" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
          <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              {t.interviewParagraph1}
            </p>
            <p>
              {t.interviewParagraph2}
            </p>
            <blockquote className="border-l-4 border-[var(--color-text-tertiary)] pl-6 py-2 my-6 italic text-[var(--color-text-tertiary)]">
              {t.blockquote}
            </blockquote>
            <p>
              {t.interviewParagraph3}
            </p>
            <p>
              {t.interviewParagraph4}
            </p>
            <p>
              {t.interviewParagraph5}
            </p>
          </div>
        </section>

      {/* 4. Approach - Maturity in UX */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.maturityTitle}
          </h2>
          <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              {t.maturityText}
            </p>
          </div>
        </section>

      {/* 5. What We Delivered - Main Gaps */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h2 className="font-heading text-display-md tracking-display mb-6">{t.mainGapsTitle}</h2>
          <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              {t.mainGapsParagraph1}
            </p>
            <p>
              {t.mainGapsParagraph2}
            </p>
          </div>
        </section>

      {/* 6. Gallery - What Awaits Us */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h2 className="font-heading text-display-md tracking-display mb-6">
            {t.whatAwaitsTitle}
          </h2>
          <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              {t.whatAwaitsParagraph1}
            </p>
            <p>
              {t.whatAwaitsParagraph2}
            </p>
            <p>
              {t.whatAwaitsParagraph3Pre}{" "}
              <span className="text-[var(--color-text-primary)] font-semibold">{t.whatAwaitsParagraph3Tool}</span>
              {t.whatAwaitsParagraph3Post}
            </p>
          </div>
        </section>

      {/* 7. Impact & Results - Empty */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
      </section>

      {/* 8. Lessons Learned - Empty */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
      </section>

      {/* 9. Conclusion - Empty */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
      </section>

      {/* 10. Related Projects */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <RelatedProjects current="/interview" />
      </section>
    </div>
  );
}
