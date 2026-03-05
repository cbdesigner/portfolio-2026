import Link from "next/link";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata = {
  title: "Carlos Baeza - Profile | UX Manager & Head of Product Design",
  description:
    "Full professional profile of Carlos Baeza. 10+ years in UX Strategy, Product Design, and Design Systems across LATAM.",
};

/* ───── data ───── */

const experience = [
  {
    role: "Design System Architect",
    company: "Flylance",
    type: "Freelance",
    period: "Aug 2024 – Present",
    location: "Santiago, Chile · Remote",
    description:
      "Designing and building scalable, tokenized design systems from scratch for enterprise clients. Defining component architecture, design tokens, and governance frameworks that bridge design and development teams.",
  },
  {
    role: "Head of Product Design",
    company: "Siamese Digital",
    type: "Full-time",
    period: "Oct 2022 – Aug 2024 · 1 yr 11 mos",
    location: "Santiago, Chile · Hybrid",
    description:
      "Product Design leadership for digital products at one of Latin America's leading digital agencies. Leading cross-functional teams, defining design strategy, and establishing design operations across multiple client engagements.",
  },
  {
    role: "Co-founder & UX Lead",
    company: "Autonomus",
    type: "",
    period: "Sep 2020 – Oct 2022 · 2 yrs 2 mos",
    location: "Santiago, Chile",
    description:
      "Co-founded a UX consultancy focused on delivering end-to-end design solutions for startups and enterprises. Led UX strategy, research, and design execution for multiple concurrent projects.",
  },
  {
    role: "UX Manager",
    company: "Banco Ripley",
    type: "Full-time",
    period: "Jul 2019 – Sep 2020 · 1 yr 3 mos",
    location: "Santiago, Chile",
    description:
      "Led the UX team for Banco Ripley's digital transformation initiative. Managed a team of designers and researchers, established design processes, and drove the redesign of core banking products.",
  },
  {
    role: "Lead UX Designer",
    company: "Banco Ripley",
    type: "Full-time",
    period: "Jan 2018 – Jul 2019 · 1 yr 7 mos",
    location: "Santiago, Chile",
    description:
      "Led design efforts for Banco Ripley's digital products including mobile banking and web platforms. Introduced user research practices and established a component-based design approach.",
  },
  {
    role: "Senior UX/UI Designer",
    company: "Imille (Enel)",
    type: "Full-time",
    period: "Mar 2017 – Jan 2018 · 11 mos",
    location: "Santiago, Chile",
    description:
      "Designed digital experiences for Enel's customer-facing platforms. Worked on the Enel One Hub project, creating unified digital touchpoints for energy customers across Latin America.",
  },
  {
    role: "UX/UI Designer",
    company: "Modyo",
    type: "Full-time",
    period: "Apr 2016 – Mar 2017 · 1 yr",
    location: "Santiago, Chile",
    description:
      "Designed user experiences for Modyo's digital experience platform. Created interfaces for content management, digital channels, and customer engagement tools.",
  },
  {
    role: "UX/UI Designer",
    company: "Falabella",
    type: "Full-time",
    period: "Jun 2015 – Apr 2016 · 11 mos",
    location: "Santiago, Chile",
    description:
      "Designed digital experiences for one of Latin America's largest retail companies. Worked on e-commerce platforms and internal tools.",
  },
  {
    role: "Co-founder & Designer",
    company: "Insaciables Labs",
    type: "",
    period: "2014 – 2015",
    location: "Santiago, Chile",
    description:
      "Co-founded a digital innovation lab focused on creating consumer-facing products and experiences.",
  },
  {
    role: "Web Designer",
    company: "Multicaja",
    type: "Full-time",
    period: "2013 – 2014",
    location: "Santiago, Chile",
    description:
      "Designed web interfaces for Multicaja's payment and financial services platforms.",
  },
  {
    role: "Designer",
    company: "People & Chess",
    type: "",
    period: "2012 – 2013",
    location: "Santiago, Chile",
    description: "Design work for branding and digital projects.",
  },
  {
    role: "Designer",
    company: "La Familia / Grupo Eva",
    type: "",
    period: "2008 – 2012",
    location: "Santiago, Chile",
    description:
      "Started professional career in graphic and web design, working on branding, print, and early digital projects.",
  },
];

const education = [
  {
    institution: "Universidad del Desarrollo (UDD)",
    degree: "Bootcamp, Full Stack Development",
    period: "2024",
  },
  {
    institution: "Duoc UC",
    degree: "Graphic Design",
    period: "2002 – 2004",
  },
  {
    institution: "Escuela de Creativos Brother",
    degree: "Creativity & Advertising",
    period: "2012",
  },
];

const certifications = [
  {
    name: "SAFe 5 Product Owner / Product Manager",
    issuer: "Scaled Agile, Inc.",
    date: "2021",
  },
  {
    name: "Product Strategy",
    issuer: "Product School",
    date: "2021",
  },
  {
    name: "AI for Everyone",
    issuer: "DeepLearning.AI (Coursera)",
    date: "2023",
  },
  {
    name: "Lean UX",
    issuer: "Interaction Design Foundation (IxDF)",
    date: "2020",
  },
  {
    name: "Google Tag Manager Fundamentals",
    issuer: "Google",
    date: "2020",
  },
  {
    name: "Design Sprint Masterclass",
    issuer: "Udemy",
    date: "2019",
  },
  {
    name: "UX Research & Strategy",
    issuer: "Designlab",
    date: "2018",
  },
  {
    name: "Gestión de Proyectos Digitales",
    issuer: "Platzi",
    date: "2017",
  },
  {
    name: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    date: "2017",
  },
  {
    name: "Mobile UX Design",
    issuer: "Interaction Design Foundation (IxDF)",
    date: "2016",
  },
];

const skills = [
  "Design Systems",
  "UX Strategy",
  "Product Design",
  "User Research",
  "Interaction Design",
  "Design Thinking",
  "Design Ops",
  "Prototyping",
  "Information Architecture",
  "Usability Testing",
  "Agile / SAFe",
  "Team Leadership",
  "Stakeholder Management",
  "Workshop Facilitation",
  "Cross-functional Collaboration",
];

const recommendations = [
  {
    author: "Felipe Nicolás Reyes Escobar",
    role: "Front-end Engineer",
    text: "I worked with Carlos at Bupa Chile, where he led the creation of a tokenized design system from scratch. His ability to define and structure design tokens, build a scalable component architecture, and bridge the gap between design and development was outstanding. Carlos has deep expertise in design systems methodology — he defined the full lifecycle from discovery to documentation and training. He's the kind of architect who truly understands how design scales across products. Highly recommended for any organization looking to build or mature their design system practice.",
  },
  {
    author: "Alejandra Azócar Díaz",
    role: "Design System Specialist",
    text: "Carlos is an exceptional Design System Architect. Working alongside him at Bupa, I witnessed firsthand his remarkable ability to create comprehensive, well-structured design systems from the ground up. His methodology for building tokenized design systems is both rigorous and practical, making complex component architecture accessible for the entire team. His leadership style fosters collaboration and growth — he mentored me throughout the project and helped me develop my skills as a Design System Specialist. I would absolutely recommend Carlos for any role requiring strategic design thinking and systems architecture.",
  },
];

const awards = [
  {
    title: "1st Place — Laboratoria Talent Fest",
    description:
      "Won first place at Laboratoria's Talent Fest hackathon, designing a digital solution for a real business challenge in a 2-day sprint.",
    year: "2019",
  },
  {
    title: "1st Place — International Young Forestry Entrepreneur (Mexico)",
    description:
      "Recognized as the top young forestry entrepreneur at an international competition in Mexico for innovative sustainable design concepts.",
    year: "2014",
  },
  {
    title: "Developing Latin America",
    description:
      "Participated in the Developing Latin America hackathon, a regional open-data initiative to create civic tech solutions for citizens across LATAM.",
    year: "2013",
  },
];

const articles = [
  {
    title: "The AI Revolution in UX Design",
    description:
      "Exploring how artificial intelligence is transforming user experience design practices and workflows.",
  },
  {
    title: "Building Design Systems at Scale",
    description:
      "Insights and methodology for creating enterprise-grade design systems that bridge design and development.",
  },
];

/* ───── Tools ───── */

const aiTools = [
  "Claude Code",
  "ChatGPT",
  "Gemini",
  "AI Google Studio",
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
          <p className="text-xl text-gray-300 mb-1">
            UX Manager · Head of Product Design · Design System Architect
          </p>
          <p className="text-gray-500 mb-6">Santiago, Chile · Remote</p>
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
              With over 10 years of experience in UX Strategy, Product Design,
              and Design Systems, I have led digital transformations at companies
              such as Banco Ripley, Enel, Falabella, Modyo, and Bupa, across
              multiple industries including banking, energy, retail, and
              healthcare.
            </p>
            <p>
              I specialize in creating scalable design systems from scratch —
              defining component architecture, design tokens, governance
              frameworks, and bridging the gap between design and development
              teams. My methodology covers the full lifecycle from discovery to
              documentation and training.
            </p>
            <p>
              As a leader, I have managed cross-functional teams of designers,
              researchers, and developers, establishing design operations and
              driving product strategy aligned with business goals. I thrive in
              fast-paced environments where collaboration, mentorship, and
              quality are essential.
            </p>
            <p>
              Currently working as a freelance Design System Architect through
              Flylance, providing enterprise-grade design system solutions for
              organizations across Latin America.
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
                  <p className="text-blue-400 text-sm mb-1">
                    {exp.company}
                    {exp.type && (
                      <span className="text-gray-500"> · {exp.type}</span>
                    )}
                  </p>
                  <p className="text-gray-500 text-xs mb-3">{exp.location}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
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
                <p className="text-gray-300 text-sm">{edu.degree}</p>
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
            Licenses & Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-gray-900/40 rounded-xl p-4 border border-gray-800/60"
              >
                <h3 className="font-bold text-white text-sm">{cert.name}</h3>
                <p className="text-gray-400 text-xs mt-1">{cert.issuer}</p>
                <p className="font-mono text-xs text-gray-500 mt-1">
                  {cert.date}
                </p>
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
            Skills
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

        {/* Articles */}
        <section>
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-orange-600/20 flex items-center justify-center text-orange-400 text-sm">
              08
            </span>
            Articles
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {articles.map((article, i) => (
              <div
                key={i}
                className="bg-gray-900/40 rounded-xl p-5 border border-gray-800/60"
              >
                <h3 className="font-heading text-base font-bold text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm">{article.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Honors & Awards */}
        <section>
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-yellow-600/20 flex items-center justify-center text-yellow-400 text-sm">
              09
            </span>
            Honors & Awards
          </h2>
          <div className="space-y-4">
            {awards.map((award, i) => (
              <div
                key={i}
                className="bg-gray-900/40 rounded-xl p-5 border border-gray-800/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-base font-bold text-white">
                      {award.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {award.description}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-gray-500 whitespace-nowrap">
                    {award.year}
                  </span>
                </div>
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
