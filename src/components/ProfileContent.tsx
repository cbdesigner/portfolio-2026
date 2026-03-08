"use client";

import Link from "next/link";
import RelatedProjects from "@/components/RelatedProjects";
import { useLanguage } from "@/i18n/LanguageContext";
import { useProfilePdf } from "@/hooks/useProfilePdf";

/* ───── static data ───── */

const experience: {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  responsibilities?: string[];
}[] = [
  {
    role: "Design System Architect",
    company: "Flylance",
    period: "Jul 2025 – Present (9 months)",
    description:
      "I led the strategic conceptualization and execution of the Design System for ShipBob, optimizing visual consistency and operational efficiency across their global logistics ecosystem.",
    responsibilities: [
      "Figma Standardization: Built a robust library of documented components, facilitating technical handoff and significantly reducing friction between design and development teams.",
      "3-Tier Token Architecture: Designed and implemented a hierarchical Design Token structure to ensure full maintainability and system scalability: Primitive Tokens (core chromatic scale and atomic base values), Semantic Tokens (logic layer based on intent and usage context / Alias), Component-Specific Tokens (high-specificity tokens for granular interface control).",
      "PrimeVue Integration: Collaborated closely with the engineering team to ensure the technical implementation within PrimeVue, translating design tokens into injectable variables that streamlined the development of custom components.",
      "Scalability & Theming: Laid the groundwork for multi-theme support (Dark Mode) and accessibility through the semantic abstraction of colors and typography.",
    ],
  },
  {
    role: "Head of Product Design & Design System Manager",
    company: "Siamese Digital",
    period: "Oct 2023 – Present (2 yrs 6 mos)",
    location: "Santiago Metropolitan Region, Chile",
    description:
      "As Head of Product Design & Design System Manager, I lead the strategy and execution of design projects, balancing user experience with business goals. I manage cross-functional teams to create scalable design systems, driving consistency and optimizing processes. I\u2019ve worked with clients across various industries, tailoring strategies to meet their unique needs.\n\nI developed and maintained a multi-branding design system in Figma with tokens, utilizing the latest features for scalability. This system is implemented in React, Angular, Vue JS, Web Components and deployed in Storybook for interactive documentation. I also defined OKRs to help internal teams improve their skills with the design systems I\u2019ve delivered.",
    responsibilities: [
      "Defining and implementing the strategic vision for design and systems",
      "Leading design teams to foster innovation and continuous improvement",
      "Overseeing the creation and maintenance of scalable, multi-branding design systems",
      "Collaborating with development teams for aligned implementation",
      "Establishing style guides and component libraries for consistency",
      "Conducting workshops to drive system adoption across teams",
      "Defining OKRs to help internal teams enhance their design system skills",
      "Acting as a liaison between stakeholders and design teams",
    ],
  },
  {
    role: "Head of Product Design",
    company: "Autonomus",
    period: "Oct 2023 – Jan 2024 (4 mos)",
    location: "Chile",
    description:
      "As Head of Product Design at Autonomus, I led the development of a digital platform providing comprehensive transportation and companionship services for seniors. This platform facilitated daily activities, from medical appointments to social meetings, for elderly users. Autonomus was backed by Güil, a leading Venture Studio specializing in mobility startups.",
    responsibilities: [
      "Organized collaborative workshops to define service blueprints and develop flowcharts, ensuring a clear understanding of the service structure",
      "Developed sitemaps for the Autonomers app, back office, and public website, creating a coherent information architecture",
      "Established a robust design system in Figma, ensuring consistency and scalability across all digital touchpoints",
      "Built User Flows in Figma to streamline navigation paths, enhancing the overall user experience",
      "Facilitated daily meetings and Agile ceremonies to ensure alignment and progress among team members",
    ],
  },
  {
    role: "UX Manager",
    company: "Banco Ripley Chile",
    period: "May 2021 – Sep 2023 (2 yrs 5 mos)",
    location: "Alonso de Córdova 5320",
    description:
      "As UX Manager at Banco Ripley Chile and Peru, I led transformative initiatives, implementing a holistic UX strategy and fostering a culture of design excellence and innovation.",
    responsibilities: [
      "Developed and executed UX strategies aligned with organizational goals, ensuring exceptional user experiences",
      "Championed innovation through a human-centered approach, driving creative design decisions",
      "Optimized organizational structures and processes, improving design workflow and team well-being",
      "Fostered strategic partnerships by aligning design teams with business functions, promoting a design-driven culture",
    ],
  },
  {
    role: "Lead UX",
    company: "Banco Ripley Chile",
    period: "Aug 2019 – May 2021 (1 yr 10 mos)",
    location: "Alonso de Córdova 5320",
    description:
      "As Lead UX for Banco Ripley\u2019s 100% digital account, Chek, I spearheaded the design process and managed a cross-functional team.",
    responsibilities: [
      "Established a robust design system in Figma, ensuring consistency and scalability across the digital platform",
      "Managed business initiatives, aligning UX goals with overall organizational objectives",
      "Led a diverse team of UX professionals, including writers, researchers, and designers",
      "Collaborated effectively with the agile team, implementing Scrum methodologies for efficient project delivery",
      "Oversaw the end-to-end design process, from conceptualization to implementation",
      "Facilitated seamless communication between design, development, and business stakeholders",
      "Conducted user research and usability testing to inform design decisions and improve user experience",
      "Implemented design thinking principles to drive innovation in digital banking solutions",
    ],
  },
  {
    role: "Senior UX Designer",
    company: "Imille",
    period: "Feb 2018 – Jan 2019 (1 yr)",
    location: "Santiago, Santiago Metropolitan Region, Chile",
    description:
      "As a Senior UX Designer at Imille, I led the design and implementation of Enel\u2019s major digital transformation project across South America, encompassing Chile, Argentina, Peru, Colombia, and Brazil. This initiative, crucial for one of the world\u2019s largest energy companies, involved remote collaboration with the Board of Directors in Rome.",
    responsibilities: [
      "Defined comprehensive functionalities and user flows, ensuring a seamless digital experience across multiple countries",
      "Cultivated and maintained strong relationships with Enel stakeholders in Latin America and Italy, as well as local development teams and technology providers",
      "Conducted in-depth analysis of metrics using Google Analytics and Hotjar, complemented by user research and prototyping to inform design decisions",
      "Developed a design system for the private area, enhancing consistency and user experience across platforms",
    ],
  },
  {
    role: "Senior UX Designer & Frontend Developer",
    company: "Modyo",
    period: "Sep 2016 – Jan 2018 (1 yr 5 mos)",
    description: "",
  },
  {
    role: "Senior UX Designer Consultant & Frontend Developer",
    company: "Falabella Financiero",
    period: "2016 – 2017 (1 yr)",
    description: "",
  },
  {
    role: "UX Designer & Frontend Developer and co-Founder",
    company: "Insaciables Labs",
    period: "2013 – 2015 (2 yrs)",
    description: "",
  },
  {
    role: "UX Designer & Frontend Developer",
    company: "Multicaja S.A.",
    period: "2012 – 2013 (1 yr)",
    description: "",
  },
  {
    role: "Lead Frontend Developer",
    company: "People&Chess",
    period: "2009 – 2012 (3 yrs)",
    description: "",
  },
  {
    role: "Web and Multimedia Chief",
    company: "La Familia",
    period: "2009 (less than 1 yr)",
    description: "",
  },
  {
    role: "Producer Graphic Designer",
    company: "Grupo Eva",
    period: "2008 (less than 1 yr)",
    description: "",
  },
];

const education = [
  {
    institution: "Universidad del Desarrollo",
    degree: "Full Stack Development",
    period: "Aug 2024 – Dec 2024",
  },
  {
    institution: "Duoc UC",
    degree: "Diseño gráfico",
    period: "2002 – 2004",
  },
  {
    institution: "Escuela de Creativos Brother",
    degree: "",
    period: "2012",
  },
];

const certifications = [
  { name: "SAFe 5 Product Owner / Product Manager", issuer: "Scaled Agile, Inc." },
  { name: "Product Strategy", issuer: "Product School" },
  { name: "Google Tag Manager Fundamentals", issuer: "Google" },
  { name: "Hotel Reservations (CRUD)", issuer: "Universidad del Desarrollo" },
  { name: "JavaScript Voting System", issuer: "Universidad del Desarrollo" },
  { name: "React Web Application Ninja", issuer: "Universidad del Desarrollo" },
  { name: "Design Sprint Innovation", issuer: "Universidad del Desarrollo" },
];

const skills = [
  "Information Architecture",
  "Wireframing & Prototyping",
  "User Research",
  "Design System Architect",
  "Product Design",
];


const linkedinUrls: Record<string, string> = {
  "Felipe Nicolás Reyes Escobar": "https://www.linkedin.com/in/felipe-nicolás-reyes-escobar-94985023/",
  "Alejandra Azócar Díaz": "https://www.linkedin.com/in/aleazocar/",
  "Matthew Trahan": "https://www.linkedin.com/in/matthew-trahan-91069b8/",
  "Iván Sepúlveda": "https://www.linkedin.com/in/ivansepulvedab/",
  "Sebastián Bravo": "https://www.linkedin.com/in/sebastián-bravo-rodríguez-57175b36/",
  "Juan Hidalgo": "https://www.linkedin.com/in/juan-h-a98348187/",
  "Carlos Araya": "https://www.linkedin.com/in/rayacarlo/",
};

const awards = [
  {
    title: "Laboratoria Talent Fest powered by Lenovo",
    description:
      "Hackathon event by Laboratoria connecting women in tech with employers. Multidisciplinary squads of developers and UX designers build digital solutions in a 36-hour sprint, presenting MVPs to industry leaders across Latin America.",
  },
  {
    title: "International Young Forestry Entrepreneur Contest Mexico",
    description:
      "International competition recognizing young entrepreneurs with innovative projects in sustainable forestry and environmental impact, held in Mexico.",
  },
  {
    title: "Developing Latin America",
    description:
      "Regional civic tech hackathon organized by Fundación Ciudadano Inteligente across 8 Latin American countries. Multidisciplinary teams of developers, designers, and citizens built open-data solutions to address social challenges in 36 consecutive hours.",
  },
];

const aiTools = [
  "Claude Code", "ChatGPT", "Gemini", "AI Google Studio",
  "Gamma", "NotebookLM", "Lovable", "Relume.ai", "UIzard.io",
  "UX Pilot.ai", "QoQo.ai",
];

const designTools = [
  "Figma", "FigJam", "Maze", "Zeroheight", "Miro",
  "Webflow", "Typeform", "Smartlook", "Google Analytics",
];

const managementTools = [
  "Jira (Advanced Roadmap)", "Confluence", "Slack", "Microsoft Teams",
];

const productivityTools = ["Vercel", "Excel", "Word", "Google Sheets", "Google Docs"];


const companies = [
  { name: "Enel" }, { name: "ENGIE" }, { name: "ShipBob" },
  { name: "ACID LABS" }, { name: "Bupa" }, { name: "Falabella Financiero" },
  { name: "COPEC VOLTEX" }, { name: "Banco Ripley" },
];

/* ───── Component ───── */

export default function ProfileContent() {
  const { t } = useLanguage();
  const p = t.profile;
  const { downloadPdf, isGenerating } = useProfilePdf();

  return (
    <div className="min-h-screen theme-transition" data-pdf-content>
      {/* Hero */}
      <section className="relative py-34 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-border)]/10 to-[var(--color-surface)]" />
        <div className="relative max-w-5xl mx-auto px-8 md:px-16 text-center">
          <div className="w-28 h-28 mx-auto mb-6 bg-[var(--color-text-primary)] flex items-center justify-center text-4xl font-heading text-[var(--color-surface)]">
            CB
          </div>
          <h1 className="font-heading text-display-lg tracking-display mb-2">
            Carlos Baeza
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] mb-1">
            Design Systems Architect | Head of Product Design | UX Manager
          </p>
          <p className="text-[var(--color-text-tertiary)] mb-8">
            Gran Santiago, Región Metropolitana de Santiago, Chile
          </p>
          <div className="flex justify-center gap-3 pdf-hide">
            <Link href="/contact" className="btn-ghost magnetic-btn">
              {p.cta.contact}
            </Link>
            <a
              href="https://www.linkedin.com/in/carlos-baeza-designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost magnetic-btn"
            >
              {p.cta.linkedin}
            </a>
            <button
              onClick={downloadPdf}
              disabled={isGenerating}
              className="btn-ghost magnetic-btn disabled:opacity-50"
            >
              {isGenerating ? p.cta.generatingPdf : p.cta.downloadCv}
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-8 md:px-16 pb-26 space-y-22">
        {/* About */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-8 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">01</span>
            {p.sections.about}
          </h2>
          <div className="border border-[var(--color-border)] p-8 space-y-4 text-[var(--color-text-secondary)] leading-relaxed theme-transition">
            {p.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p>{p.aboutBulletsIntro}</p>
            <ul className="list-disc list-inside space-y-1 text-[var(--color-text-tertiary)]">
              {p.aboutBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <p>{p.aboutOutro}</p>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-8 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">02</span>
            {p.sections.experience}
          </h2>
          <div className="space-y-1">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="relative pl-8 pb-8 border-l border-[var(--color-border)] last:pb-0"
              >
                <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-[var(--color-text-tertiary)] border-2 border-[var(--color-surface)]" />
                <div className="border border-[var(--color-border)] p-5 hover:border-[var(--color-text-tertiary)] transition-colors theme-transition">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-heading text-lg text-[var(--color-text-primary)]">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-[var(--color-text-tertiary)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-1">{exp.company}</p>
                  {exp.location && (
                    <p className="text-[var(--color-text-tertiary)] text-xs mb-3">{exp.location}</p>
                  )}
                  {exp.description && (
                    <div className="text-[var(--color-text-secondary)] text-sm leading-relaxed space-y-3 mt-2">
                      {exp.description.split("\n\n").map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                  )}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="mt-3">
                      <p className="text-[var(--color-text-secondary)] text-sm font-medium mb-2">
                        {p.responsibilities}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((r, j) => (
                          <li
                            key={j}
                            className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex gap-2"
                          >
                            <span className="text-[var(--color-text-tertiary)] mt-1 shrink-0">
                              &bull;
                            </span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-8 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">03</span>
            {p.sections.education}
          </h2>
          <div className="grid gap-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="border border-[var(--color-border)] p-5 theme-transition"
              >
                <h3 className="font-heading text-lg text-[var(--color-text-primary)]">
                  {edu.institution}
                </h3>
                {edu.degree && (
                  <p className="text-[var(--color-text-secondary)] text-sm">{edu.degree}</p>
                )}
                <p className="font-mono text-xs text-[var(--color-text-tertiary)] mt-1">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-8 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">04</span>
            {p.sections.certifications}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="border border-[var(--color-border)] p-4 theme-transition"
              >
                <h3 className="font-medium text-[var(--color-text-primary)] text-sm">{cert.name}</h3>
                {cert.issuer && (
                  <p className="text-[var(--color-text-tertiary)] text-xs mt-1">{cert.issuer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-8 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">05</span>
            {p.sections.skills}
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] theme-transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-8 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">06</span>
            {p.sections.tools}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-[var(--color-border)] p-5 theme-transition">
              <h3 className="font-heading text-base text-[var(--color-text-primary)] mb-3">
                {p.aiTools}
              </h3>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] theme-transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-[var(--color-border)] p-5 theme-transition">
              <h3 className="font-heading text-base text-[var(--color-text-primary)] mb-3">
                {p.designResearch}
              </h3>
              <div className="flex flex-wrap gap-2">
                {designTools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] theme-transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-[var(--color-border)] p-5 theme-transition">
              <h3 className="font-heading text-base text-[var(--color-text-primary)] mb-3">
                {p.managementCollab}
              </h3>
              <div className="flex flex-wrap gap-2">
                {managementTools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] theme-transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-[var(--color-border)] p-5 theme-transition">
              <h3 className="font-heading text-base text-[var(--color-text-primary)] mb-3">
                {p.productivityDev}
              </h3>
              <div className="flex flex-wrap gap-2">
                {productivityTools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-secondary)] theme-transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-8 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">07</span>
            {p.sections.industries}
          </h2>
          <div className="flex flex-wrap gap-2">
            {p.industriesList.map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] theme-transition"
              >
                {industry}
              </span>
            ))}
          </div>
        </section>

        {/* Clients & Companies */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-8 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">08</span>
            {p.sections.companies}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-sm mb-8">{p.companiesSubtitle}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {companies.map((company, i) => (
              <div
                key={i}
                className="border border-[var(--color-border)] hover:border-[var(--color-text-tertiary)] p-6 flex items-center justify-center min-h-24 transition-colors theme-transition"
              >
                <span className="font-medium text-[var(--color-text-secondary)] text-center text-sm">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-8 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">09</span>
            {p.sections.recommendations}
          </h2>
          <div className="space-y-4">
            {p.recommendationsList.map((rec, i) => (
              <div
                key={i}
                className="border border-[var(--color-border)] p-6 theme-transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[var(--color-text-primary)] flex items-center justify-center text-sm font-heading text-[var(--color-surface)]">
                    {rec.author
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[var(--color-text-primary)] text-sm">{rec.author}</h3>
                    <p className="text-[var(--color-text-tertiary)] text-xs">{rec.role}</p>
                  </div>
                  {linkedinUrls[rec.author] ? (
                    <a
                      href={linkedinUrls[rec.author]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors flex-shrink-0"
                      aria-label={`${rec.author} on LinkedIn`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-[var(--color-text-tertiary)] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </span>
                  )}
                </div>
                <blockquote className="font-heading text-[var(--color-text-secondary)] text-sm leading-relaxed border-l-2 border-[var(--color-border)] pl-4">
                  &ldquo;{rec.text}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        {/* Honors & Awards */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-8 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">10</span>
            {p.sections.awards}
          </h2>
          <div className="space-y-3">
            {awards.map((award, i) => (
              <div
                key={i}
                className="border border-[var(--color-border)] p-5 theme-transition"
              >
                <h3 className="font-heading text-base text-[var(--color-text-primary)]">
                  {award.title}
                </h3>
                {award.description && (
                  <p className="text-[var(--color-text-secondary)] text-sm mt-2 leading-relaxed">
                    {award.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="pdf-hide">
          <RelatedProjects current="/profile" />
        </div>
      </div>
    </div>
  );
}
