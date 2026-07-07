"use client";

import Link from "next/link";
import RelatedProjects from "@/components/RelatedProjects";
import SimplifiedCvContent from "@/components/SimplifiedCvContent";
import { useLanguage } from "@/i18n/LanguageContext";
import { useProfilePdf } from "@/hooks/useProfilePdf";

/* ───── static data ───── */

// Experience data now comes from translations (i18n)

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
            {(p.experience as unknown as any[]).map((exp, i) => (
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
                      {exp.description.split("\n\n").map((para: string, j: number) => (
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
                        {exp.responsibilities.map((r: string, j: number) => (
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
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[var(--color-text-secondary)] text-sm font-medium mb-3">
                {p.aiTools}
              </h3>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] theme-transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[var(--color-text-secondary)] text-sm font-medium mb-3">
                {p.designResearch}
              </h3>
              <div className="flex flex-wrap gap-2">
                {designTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] theme-transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[var(--color-text-secondary)] text-sm font-medium mb-3">
                {p.managementCollab}
              </h3>
              <div className="flex flex-wrap gap-2">
                {managementTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] theme-transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[var(--color-text-secondary)] text-sm font-medium mb-3">
                {p.productivityDev}
              </h3>
              <div className="flex flex-wrap gap-2">
                {productivityTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] theme-transition"
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {p.industriesList.map((ind, i) => (
              <div key={i} className="border border-[var(--color-border)] p-4 theme-transition">
                <p className="text-[var(--color-text-secondary)] text-sm">{ind}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Companies */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-6 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">08</span>
            {p.sections.companies}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-sm mb-8 max-w-3xl">
            {p.companiesSubtitle}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {companies.map((company) => (
              <div
                key={company.name}
                className="border border-[var(--color-border)] p-5 text-center flex items-center justify-center min-h-24 theme-transition hover:border-[var(--color-text-secondary)] transition-colors"
              >
                <p className="font-heading text-[var(--color-text-primary)] text-sm">
                  {company.name}
                </p>
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
          <SimplifiedCvContent />
        </section>

        {/* Honors & Awards */}
        <section>
          <h2 className="font-heading text-display-md tracking-display mb-8 flex items-center gap-3">
            <span className="font-mono text-overline text-[var(--color-text-tertiary)]">10</span>
            {p.sections.awards}
          </h2>
          <div className="grid gap-4">
            {awards.map((award, i) => (
              <div
                key={i}
                className="border border-[var(--color-border)] p-5 theme-transition"
              >
                <h3 className="font-heading text-lg text-[var(--color-text-primary)]">
                  {award.title}
                </h3>
                <p className="text-[var(--color-text-tertiary)] text-sm mt-2">{award.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Projects */}
        <section className="pt-8">
          <RelatedProjects current="/profile" />
        </section>
      </div>
    </div>
  );
}
