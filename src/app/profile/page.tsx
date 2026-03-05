import Link from "next/link";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata = {
  title:
    "Carlos Baeza - Profile | Design Systems Architect | AI-Ready Agentic Design Systems Infrastructure",
  description:
    "Full professional profile of Carlos Baeza. Design Systems Architect building AI-Ready Agentic Design Systems Infrastructure at Enterprise Scale.",
};

/* ───── data ───── */

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
      "As Head of Product Design at Autonomus, I led the development of a digital platform providing comprehensive transportation and companionship services for seniors. This platform facilitated daily activities, from medical appointments to social meetings, for elderly users. Autonomus was backed by G\u00fcil, a leading Venture Studio specializing in mobility startups.",
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
    location: "Alonso de C\u00f3rdova 5320",
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
    location: "Alonso de C\u00f3rdova 5320",
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
    degree: "Dise\u00f1o gr\u00e1fico",
    period: "2002 – 2004",
  },
  {
    institution: "Escuela de Creativos Brother",
    degree: "",
    period: "2012",
  },
];

const certifications = [
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

const recommendations = [
  {
    author: "Felipe Nicol\u00e1s Reyes Escobar",
    role: "Front-end Engineer",
    text: "I worked with Carlos at Bupa Chile, where he led the creation of a tokenized design system from scratch. His ability to define and structure design tokens, build a scalable component architecture, and bridge the gap between design and development was outstanding. Carlos has deep expertise in design systems methodology \u2014 he defined the full lifecycle from discovery to documentation and training. He\u2019s the kind of architect who truly understands how design scales across products. Highly recommended for any organization looking to build or mature their design system practice.",
  },
  {
    author: "Alejandra Az\u00f3car D\u00edaz",
    role: "Design System Specialist",
    text: "Carlos is an exceptional Design System Architect. Working alongside him at Bupa, I witnessed firsthand his remarkable ability to create comprehensive, well-structured design systems from the ground up. His methodology for building tokenized design systems is both rigorous and practical, making complex component architecture accessible for the entire team. His leadership style fosters collaboration and growth \u2014 he mentored me throughout the project and helped me develop my skills as a Design System Specialist. I would absolutely recommend Carlos for any role requiring strategic design thinking and systems architecture.",
  },
];

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
      "Regional civic tech hackathon organized by Fundaci\u00f3n Ciudadano Inteligente across 8 Latin American countries. Multidisciplinary teams of developers, designers, and citizens built open-data solutions to address social challenges in 36 consecutive hours.",
  },
];

/* ───── Tools ───── */

const aiTools = [
  "Claude Code",
  "ChatGPT",
  "Gemini",
  "AI Google Studio",
  "Gamma",
  "NotebookLM",
  "Lovable",
  "Relume.ai",
  "UIzard.io",
  "UX Pilot.ai",
  "QoQo.ai",
];

const designTools = [
  "Figma",
  "FigJam",
  "Maze",
  "Zeroheight",
  "Miro",
  "Webflow",
  "Typeform",
  "Smartlook",
  "Google Analytics",
];

const managementTools = [
  "Jira (Advanced Roadmap)",
  "Confluence",
  "Slack",
  "Microsoft Teams",
];

const productivityTools = [
  "Vercel",
  "Excel",
  "Word",
  "Google Sheets",
  "Google Docs",
];

/* ───── Component ───── */

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 to-black" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-4xl font-bold font-heading">
            CB
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">
            Carlos Baeza
          </h1>
          <p className="text-lg text-gray-300 mb-1">
            Design Systems Architect | AI-Ready Agentic Design Systems
            Infrastructure at Enterprise Scale
          </p>
          <p className="text-gray-500 mb-6">
            Gran Santiago, Regi&oacute;n Metropolitana de Santiago, Chile
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/carlos-baeza-designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-gray-700 hover:border-gray-500 rounded-full text-sm font-medium transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
        {/* About */}
        <section>
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm">
              01
            </span>
            About
          </h2>
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 space-y-4 text-gray-300 leading-relaxed">
            <p>
              I work at the intersection of design, engineering, and product
              infrastructure, helping organizations scale while improving
              time-to-market and reducing hidden operational costs.
            </p>
            <p>
              Over the past 10+ years, I&apos;ve seen the same pattern repeat
              itself in growing product teams &mdash; more times than I&apos;d
              like to admit: Design systems start as a productivity enabler, but
              as organizations scale, they increasingly rely on manual
              interpretation, ad-hoc documentation, and constant coordination.
              What once helped teams move faster slowly becomes a bottleneck.
            </p>
            <p>My focus is on changing that model.</p>
            <p>
              Instead of treating design systems as documentation or static
              libraries, I work on building deterministic, AI-ready design
              infrastructure: systems with automated, parameterized
              documentation and clearly defined rules that remove ambiguity
              between design and engineering.
            </p>
            <p>
              By embedding governance, constraints, and intent directly into the
              system, teams reduce rework, avoid &ldquo;vibe-based&rdquo;
              implementation, and prevent inconsistencies caused by
              interpretation or AI hallucinations. In practice, this means fewer
              reworks, shorter delivery cycles, and systems teams can actually
              trust as they scale.
            </p>
            <p>
              I&apos;ve led and supported cross-functional teams in complex,
              regulated environments, where reliability, consistency, and speed
              directly impact business results. I&apos;ve personally run into
              these problems from multiple angles &mdash; design, engineering,
              and leadership &mdash; which is why my work today is centered on
              improving time-to-market, reducing non-productive hours, and
              helping teams spend more time building architecture instead of
              managing friction.
            </p>
            <p>I&apos;m particularly interested in conversations around:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Design systems as revenue-impacting infrastructure</li>
              <li>Deterministic, AI-assisted design-to-code workflows</li>
              <li>Governed, automated documentation</li>
              <li>
                Scaling design and engineering ecosystems in large organizations
              </li>
            </ul>
            <p>
              If your teams are growing and alignment is starting to cost more
              time than it should, we&apos;ll likely have a valuable
              conversation.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400 text-sm">
              02
            </span>
            Experience
          </h2>
          <div className="space-y-1">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="relative pl-8 pb-8 border-l border-gray-800 last:pb-0"
              >
                <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-gray-700 border-2 border-gray-900" />
                <div className="bg-gray-900/40 rounded-xl p-5 border border-gray-800/60 hover:border-gray-700 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-gray-500 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm mb-1">{exp.company}</p>
                  {exp.location && (
                    <p className="text-gray-500 text-xs mb-3">
                      {exp.location}
                    </p>
                  )}
                  {exp.description && (
                    <div className="text-gray-400 text-sm leading-relaxed space-y-3 mt-2">
                      {exp.description.split("\n\n").map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                  )}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="mt-3">
                      <p className="text-gray-400 text-sm font-medium mb-2">
                        Key Responsibilities:
                      </p>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((r, j) => (
                          <li
                            key={j}
                            className="text-gray-400 text-sm leading-relaxed flex gap-2"
                          >
                            <span className="text-gray-600 mt-1 shrink-0">
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
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 text-sm">
              03
            </span>
            Education
          </h2>
          <div className="grid gap-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-gray-900/40 rounded-xl p-5 border border-gray-800/60"
              >
                <h3 className="font-heading text-lg font-bold text-white">
                  {edu.institution}
                </h3>
                {edu.degree && (
                  <p className="text-gray-300 text-sm">{edu.degree}</p>
                )}
                <p className="font-mono text-xs text-gray-500 mt-1">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400 text-sm">
              04
            </span>
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-gray-900/40 rounded-xl p-4 border border-gray-800/60"
              >
                <h3 className="font-bold text-white text-sm">{cert.name}</h3>
                {cert.issuer && (
                  <p className="text-gray-400 text-xs mt-1">{cert.issuer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-400 text-sm">
              05
            </span>
            Top Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-900/60 border border-gray-800 rounded-full text-sm text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section>
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-rose-600/20 flex items-center justify-center text-rose-400 text-sm">
              06
            </span>
            Tools & Technologies
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* AI Tools */}
            <div className="bg-gray-900/40 rounded-xl p-5 border border-gray-800/60">
              <h3 className="font-heading text-base font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-purple-400">&#9679;</span> AI & LLM Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-3 py-1.5 bg-purple-950/40 border border-purple-800/30 rounded-lg text-purple-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            {/* Design Tools */}
            <div className="bg-gray-900/40 rounded-xl p-5 border border-gray-800/60">
              <h3 className="font-heading text-base font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-blue-400">&#9679;</span> Design & Research
              </h3>
              <div className="flex flex-wrap gap-2">
                {designTools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-3 py-1.5 bg-blue-950/40 border border-blue-800/30 rounded-lg text-blue-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            {/* Management Tools */}
            <div className="bg-gray-900/40 rounded-xl p-5 border border-gray-800/60">
              <h3 className="font-heading text-base font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-emerald-400">&#9679;</span> Management &
                Collaboration
              </h3>
              <div className="flex flex-wrap gap-2">
                {managementTools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-3 py-1.5 bg-emerald-950/40 border border-emerald-800/30 rounded-lg text-emerald-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            {/* Productivity Tools */}
            <div className="bg-gray-900/40 rounded-xl p-5 border border-gray-800/60">
              <h3 className="font-heading text-base font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-cyan-400">&#9679;</span> Productivity &
                Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {productivityTools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs px-3 py-1.5 bg-cyan-950/40 border border-cyan-800/30 rounded-lg text-cyan-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 text-sm">
              07
            </span>
            Recommendations
          </h2>
          <div className="space-y-4">
            {recommendations.map((rec, i) => (
              <div
                key={i}
                className="bg-gray-900/40 rounded-xl p-6 border border-gray-800/60"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-sm font-bold">
                    {rec.author
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">
                      {rec.author}
                    </h3>
                    <p className="text-gray-500 text-xs">{rec.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-300 text-sm leading-relaxed italic border-l-2 border-indigo-500/40 pl-4">
                  &ldquo;{rec.text}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        {/* Honors & Awards */}
        <section>
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-yellow-600/20 flex items-center justify-center text-yellow-400 text-sm">
              08
            </span>
            Honors & Awards
          </h2>
          <div className="space-y-3">
            {awards.map((award, i) => (
              <div
                key={i}
                className="bg-gray-900/40 rounded-xl p-5 border border-gray-800/60"
              >
                <h3 className="font-heading text-base font-bold text-white">
                  {award.title}
                </h3>
                {award.description && (
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {award.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/profile" />
      </div>
    </div>
  );
}
