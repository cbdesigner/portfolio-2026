"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";

const i18n = {
  en: {
    title: "I was interviewed by Multiplica in 2019",
    whatIsMultiplicaTitle: "What is Multiplica?",
    whatIsMultiplicaText:
      "Multiplica is a digital-native consulting firm specializing in enhancing companies' design and creation of relevant digital experiences. With 20 years of experience, Multiplica has garnered international recognition and established a strong presence in key cities worldwide, including Barcelona, Bogot\u00E1, Buenos Aires, Mexico City, Lima, Madrid, Medell\u00EDn, Miami, New York, and Santiago de Chile.",
    badgeText: "Recognized as a reference in UX for the Southern Cone",
    interviewTitle: "Interview with Carlos Baeza, UX Lead at Banco Ripley",
    interviewSubtitle:
      "For more than 8 years, Baeza has become one of the references in user experience in the Southern Cone.",
    interviewParagraph1:
      "User experience has become one of the main competitive elements of organizations globally. Carlos has participated in high-impact global projects in different areas for Latin America, Europe and Asia, leading multidisciplinary teams remotely and on-site. He was also part of the team responsible for the digital transformation of Enel in South America.",
    interviewParagraph2:
      "Carlos arrived at Banco Ripley in Chile to be in charge of Chek, a Digital Wallet for Individuals and Retailers, and to support the Product, Customer Experience, Marketing and other teams. He works with a very talented team responsible for continuous improvement cycles with new releases of apps and landing pages that solve the main problems of users.",
    blockquote:
      "\u201CThe solution to a problem extends not only to the users who make use of the application, but to the talent that participates in the design and development process of a digital product.\u201D",
    interviewParagraph3:
      "UX directly influences business results. Carlos has integrated UX methodology in in-house and remote agile development teams across most companies where he has worked, with a strong focus on industrializing the process of creating interfaces, orchestrating talents and their tools.",
    interviewParagraph4:
      "This holistic view of the design process adds value to the UX environment. User experience directly influences business results and adds value to users, leading the business by the hand into a continuous cycle of improvements supported by qualitative and quantitative research.",
    interviewParagraph5:
      "It helps discover and validate business hypotheses early, for example new functionality that seeks to generate higher conversion efficiencies, and to develop new products and services. Parallel to his work in banking, Carlos is CEO of a UX Services company formed by remote UX Designers and Developers, where he actively participates in projects as UX Lead.",
    interviewParagraph6:
      "He is designing a product suite in partnership with a development company and legal tech firm serving Google and Amazon in Latin America in the legal area with data protection issues.",
    maturityTitle: "Maturity in the UX field",
    maturityText:
      "In 2019, digital products significantly improved people's lives. Currently, the UX field is making a significant impact not only on external products but also on the internal world of companies and industries with methodologies, tools and a new organizational culture. User experience increases the value and impact of the business, connecting organizations with users in a deep and transparent way.",
    mainGapsTitle: "Main Gaps",
    mainGapsParagraph1:
      "One of the most relevant gaps is located in the macro conceptualization of the UX field from an organizational perspective. A general vision of the company would help coordinate and commit different work teams to clear objectives that would affect products in a positive way.",
    mainGapsParagraph2:
      "The soft skills of human talent are another great challenge. The most difficult thing in a design process are the people. Everyone in the organization must have an open attitude and assertive communication that allows building the best results together.",
    whatAwaitsTitle: "What Awaits Us",
    whatAwaitsParagraph1:
      "Machine Learning is the short-term future. The speed and quality of digital products is essential. The needs of users cannot take long to be solved, and accelerating the design process is fundamental.",
    whatAwaitsParagraph2:
      "Machine Learning can enable user experience designers to deliver faster from hand-drawn wireframes to digital design files and code. Recently, Carlos used https://uizard.io/, taking pictures of wireframes made with paper and pencil, and it translated them into digital wireframes with library UI components that can be customized.",
  },
  es: {
    title: "Fui entrevistado por Multiplica en 2019",
    whatIsMultiplicaTitle: "\u00BFQu\u00E9 es Multiplica?",
    whatIsMultiplicaText:
      "Multiplica es una consultora nativa digital especializada en mejorar el dise\u00F1o y la creaci\u00F3n de experiencias digitales relevantes. Con 20 a\u00F1os de experiencia, Multiplica ha obtenido reconocimiento internacional y establecido una fuerte presencia en ciudades clave en todo el mundo, incluyendo Barcelona, Bogot\u00E1, Buenos Aires, Ciudad de M\u00E9xico, Lima, Madrid, Medell\u00EDn, Miami, Nueva York y Santiago de Chile.",
    badgeText: "Reconocido como referente en UX del Cono Sur",
    interviewTitle: "Entrevista con Carlos Baeza, UX Lead en Banco Ripley",
    interviewSubtitle:
      "Por m\u00E1s de 8 a\u00F1os, Baeza se ha convertido en uno de los referentes en experiencia de usuario en el Cono Sur.",
    interviewParagraph1:
      "La experiencia de usuario se ha convertido en uno de los principales elementos competitivos de las organizaciones a nivel mundial. Carlos ha participado en proyectos de alto impacto en diferentes \u00E1reas para Latinoam\u00E9rica, Europa y Asia, liderando equipos multidisciplinarios de forma remota y presencial. Tambi\u00E9n fue parte del equipo responsable de la transformaci\u00F3n digital de Enel en Sudam\u00E9rica.",
    interviewParagraph2:
      "Carlos lleg\u00F3 a Banco Ripley en Chile para encargarse de Chek, una billetera digital para individuos y comerciantes, y para apoyar los equipos de Producto, Experiencia del Cliente, Marketing y otros. Trabaja con un equipo muy talentoso responsable de ciclos de mejora continua con nuevos lanzamientos de apps y landing pages que resuelven los principales problemas de los usuarios.",
    blockquote:
      "\u201CLa soluci\u00F3n a un problema se extiende no solo a los usuarios que utilizan la aplicaci\u00F3n, sino al talento que participa en el proceso de dise\u00F1o y desarrollo de un producto digital.\u201D",
    interviewParagraph3:
      "La UX influye directamente en los resultados del negocio. Carlos ha integrado la metodolog\u00EDa UX en equipos de desarrollo \u00E1giles internos y remotos en la mayor\u00EDa de empresas donde ha trabajado, con un fuerte enfoque en industrializar el proceso de creaci\u00F3n de interfaces, orquestar talentos y sus herramientas.",
    interviewParagraph4:
      "Esta visi\u00F3n hol\u00EDstica del proceso de dise\u00F1o agrega valor al entorno de UX. La experiencia de usuario influye directamente en los resultados del negocio y agrega valor a los usuarios, guiando el negocio a trav\u00E9s de un ciclo continuo de mejoras respaldadas por investigaci\u00F3n cualitativa y cuantitativa.",
    interviewParagraph5:
      "Ayuda a descubrir y validar hip\u00F3tesis de negocio temprano, por ejemplo nuevas funcionalidades que buscan generar mayores eficiencias de conversi\u00F3n, y a desarrollar nuevos productos y servicios. En paralelo a su trabajo en banca, Carlos es CEO de una empresa de Servicios UX formada por dise\u00F1adores y desarrolladores UX remotos, donde participa activamente en proyectos como UX Lead.",
    interviewParagraph6:
      "Est\u00E1 dise\u00F1ando una suite de productos en asociaci\u00F3n con una empresa de desarrollo y firma de tecnolog\u00EDa legal que atiende a Google y Amazon en Latinoam\u00E9rica en el \u00E1rea legal con problemas de protecci\u00F3n de datos.",
    maturityTitle: "Madurez en el campo de la UX",
    maturityText:
      "En 2019, los productos digitales mejoraban significativamente la vida de las personas. Actualmente, el campo de la UX est\u00E1 teniendo un impacto significativo no solo en productos externos sino tambi\u00E9n en el mundo interno de las empresas e industrias con metodolog\u00EDas, herramientas y una nueva cultura organizacional. La experiencia de usuario aumenta el valor e impacto del negocio, conectando organizaciones con usuarios de forma profunda y transparente.",
    mainGapsTitle: "Principales Brechas",
    mainGapsParagraph1:
      "Una de las brechas m\u00E1s relevantes se ubica en la conceptualizaci\u00F3n macro del campo de UX desde una perspectiva organizacional. Una visi\u00F3n general de la empresa ayudar\u00EDa a coordinar y comprometer diferentes equipos de trabajo a objetivos claros que afectar\u00EDan positivamente los productos.",
    mainGapsParagraph2:
      "Las habilidades blandas del talento humano son otro gran desaf\u00EDo. Lo m\u00E1s dif\u00EDcil en un proceso de dise\u00F1o son las personas. Todos en la organizaci\u00F3n deben tener una actitud abierta y comunicaci\u00F3n asertiva que permita construir juntos los mejores resultados.",
    whatAwaitsTitle: "Lo que nos espera",
    whatAwaitsParagraph1:
      "Machine Learning es el futuro a corto plazo. La velocidad y la calidad de los productos digitales es esencial. Las necesidades de los usuarios no pueden tardar en ser resueltas, y por eso acelerar el proceso de dise\u00F1o es fundamental.",
    whatAwaitsParagraph2:
      "Machine Learning puede permitir a los dise\u00F1adores de experiencia de usuario entregar m\u00E1s r\u00E1pido desde wireframes hechos a mano hasta archivos de dise\u00F1o digital y c\u00F3digo. Recientemente, Carlos us\u00F3 https://uizard.io/, tomando fotos de wireframes hechos con papel y l\u00E1piz, y los tradujo a wireframes digitales con componentes de librer\u00EDa UI que se pueden personalizar.",
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
          <div className="mb-6">
            <span className="text-sm font-medium text-[var(--color-text-secondary)] tracking-wide uppercase">
              {t.badgeText}
            </span>
          </div>
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
        </section>

      {/* 3. Challenge & Opportunity - Interview */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h2 className="font-heading text-display-md tracking-display mb-4">
            {t.interviewTitle}
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-6 italic">
            {t.interviewSubtitle}
          </p>
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
            <p>
              {t.interviewParagraph6}
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
