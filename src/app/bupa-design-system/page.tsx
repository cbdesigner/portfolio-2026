import { Metadata } from "next";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Carlos Baeza - Bupa Design System",
};

const timeline = [
  {
    sprint: "Sprint 0",
    date: "Jul 2025",
    phase: "discovery",
    items: ["Design Foundations (Color, Typography, Spacing, Effects)"],
    status: "done",
  },
  {
    sprint: "Sprint 1",
    date: "Aug 2025",
    phase: "discovery",
    items: [
      "Pipeline Development (Figma to Code workflow)",
      "Design Base Components",
    ],
    status: "done",
  },
  {
    sprint: "Sprint 2–3",
    date: "Sep 2025",
    phase: "creation",
    items: [
      "Develop Foundations (tokens export & transformation)",
      "Design Base Components completion",
      "Begin developing Base Components",
    ],
    status: "done",
  },
  {
    sprint: "Sprint 4–5",
    date: "Oct 2025",
    phase: "creation",
    items: [
      "Design Custom Components & Pages",
      "Design & Develop Placeholder Components",
      "Training sessions for internal teams",
    ],
    status: "done",
  },
  {
    sprint: "Sprint 6–7",
    date: "Nov 2025",
    phase: "development",
    items: [
      "Develop Custom Components & Pages",
      "Validation & QA",
      "Continue Base Component development",
    ],
    status: "done",
  },
  {
    sprint: "Sprint 8–9",
    date: "Dec 2025",
    phase: "development",
    items: [
      "Complete Design Custom Components",
      "Finalize Base Component development",
    ],
    status: "done",
  },
  {
    sprint: "Sprint 10–11",
    date: "Jan 2026",
    phase: "scaling",
    items: [
      "Design System Administration setup",
      "Global Components (transversal)",
      "Agenda Components",
    ],
    status: "current",
  },
  {
    sprint: "Sprint 12–13",
    date: "Feb 2026",
    phase: "scaling",
    items: [
      "Payment Components",
      "Mi Portal Components",
      "Caja Components kickoff",
    ],
    status: "current",
  },
  {
    sprint: "Sprint 14–16",
    date: "Mar–Apr 2026",
    phase: "scaling",
    items: [
      "Caja Components completion",
      "Global Components expansion",
      "Ongoing maintenance & iteration",
    ],
    status: "upcoming",
  },
];

const phaseColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  discovery: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-400", dot: "bg-indigo-500" },
  creation: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", dot: "bg-purple-500" },
  development: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-500" },
  scaling: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-500" },
};

const foundations = [
  { name: "Color Tokens", detail: "Primitive & Semantic colors with Light and Dark mode support" },
  { name: "Typography", detail: "Type scale, font styles, and responsive text system" },
  { name: "Spacers & Layout", detail: "Spacing tokens, grid system, and responsive layout guides" },
  { name: "Effects", detail: "Shadow and blur tokens for elevation and depth" },
  { name: "Iconography", detail: "Icon library configured and integrated in Figma" },
  { name: "Logos", detail: "Brand logos organized and documented for all contexts" },
];

const baseComponents = [
  "Button", "Input", "Alert", "Toggle", "Icons",
  "Skeleton", "Accordion", "Drawer", "Notifications",
  "Search Auto Complete", "Mode Toggle", "Status Page",
  "Table", "Filters", "Card Form",
];

const products = [
  {
    name: "Bupa_Design_System_v1.0.0",
    description: "The core tokenized design system with 50+ base components, foundations, and a complete component library in Figma.",
    components: "50+ components with hundreds of variants",
    status: "Live",
  },
  {
    name: "Bupa_Agenda",
    description: "Appointment scheduling system for medical centers, with responsive flows for booking, rescheduling, and managing consultations.",
    components: "Agenda-specific components",
    status: "In development",
  },
  {
    name: "Bupa_Payment",
    description: "Payment processing flows integrated with the design system, ensuring consistent and accessible financial transactions.",
    components: "Payment-specific components",
    status: "In development",
  },
  {
    name: "Bupa_Mi_Portal",
    description: "Customer portal with personalized health management features, built entirely with design system components.",
    components: "Portal-specific components",
    status: "In development",
  },
  {
    name: "Bupa_Caja",
    description: "Cashier and billing system for medical services, extending the design system with specialized financial components.",
    components: "Caja-specific components",
    status: "In development",
  },
];

const designTools = [
  "Figma",
  "Design Tokens to Code (Figma Plugin)",
  "Figma Variables",
  "Storybook",
];

const devTools = [
  "Web Components",
  "Angular",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "SASS / SCSS",
  "NPM",
  "Workflow Figma to Code (Custom Pipeline)",
];

const managementTools = [
  "Jira (Roadmap & Sprint Tracking)",
  "Confluence",
  "Slack",
];

export default function BupaDesignSystemPage() {
  return (
    <article className="bg-black text-white">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-4 font-mono">
          Case Study &middot; 2025 – 2026
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Bupa Design System
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Building an enterprise-grade tokenized Design System from scratch for
          one of the world&apos;s leading healthcare companies
        </p>
        <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
          As Design System Architect, I led the creation of a fully tokenized
          Design System in Figma, recruiting and coordinating a specialized team
          of a Front-end Engineer and a Design System Designer. The system
          serves 5 digital products with 50+ base components, 1000+ tokens, and
          support for Light &amp; Dark themes.
        </p>
        <div className="flex justify-center gap-3 flex-wrap mt-8">
          <span className="px-3 py-1 text-xs font-medium font-mono rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Design System Architecture
          </span>
          <span className="px-3 py-1 text-xs font-medium font-mono rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            Token-based Design
          </span>
          <span className="px-3 py-1 text-xs font-medium font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Team Recruitment
          </span>
          <span className="px-3 py-1 text-xs font-medium font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Multi-product
          </span>
        </div>
      </section>

      {/* Jira Roadmap */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="rounded-xl overflow-hidden border border-gray-800">
          <img
            src="/images/bupa/roadmap-jira.png"
            alt="Bupa Design System Jira Roadmap - 16+ sprints from July 2025 to April 2026"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Role & Context */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
          My Role
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-3">
              Design System Architect
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-blue-500" />
                Defined the complete Design System architecture and token structure
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-blue-500" />
                Created all foundations from scratch in Figma (colors, typography, spacing, effects)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-blue-500" />
                Designed the Figma-to-Code pipeline using Design Tokens and Style Dictionary
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-blue-500" />
                Applied my own 5-stage methodology for Design System creation
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-3">
              Team Recruitment &amp; Leadership
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-500" />
                Recruited a specialized Front-end Engineer for component development
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-500" />
                Recruited a Design System Designer to maintain and scale the system
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-500" />
                Coordinated staggered design and development sprints
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-purple-500" />
                Managed the project roadmap across 16+ sprints in Jira
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Methodology Applied */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Methodology Applied
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          I applied my own 5-stage Design System methodology to this project,
          adapting it to Bupa&apos;s enterprise context and multi-product needs.
        </p>
        <div className="flex items-center justify-center gap-2 flex-wrap text-sm text-gray-500 font-mono mb-4">
          <span className="text-indigo-400 font-medium">Discovery</span>
          <span>&rarr;</span>
          <span className="text-purple-400 font-medium">Creation</span>
          <span>&rarr;</span>
          <span className="text-cyan-400 font-medium">Dev &amp; Docs</span>
          <span>&rarr;</span>
          <span className="text-emerald-400 font-medium">Training</span>
          <span>&rarr;</span>
          <span className="text-violet-400 font-medium">Maintenance</span>
        </div>
        <p className="text-center text-sm text-gray-500">
          <a href="/ds-methodology" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
            View full methodology &rarr;
          </a>
        </p>
      </section>

      {/* Foundations Screenshot */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="rounded-xl overflow-hidden border border-gray-800">
          <img
            src="/images/bupa/figma-foundations.png"
            alt="Bupa Design System Foundations - Color Tokens, Typography, Effects, Spacers & Layout"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Foundations */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Foundations
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          The semantic foundation layer defines all visual primitives using
          Figma Variables, supporting Light and Dark themes with 1000+ tokens.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {foundations.map((f) => (
            <div
              key={f.name}
              className="p-5 bg-gray-900/50 border border-gray-800 rounded-xl"
            >
              <h3 className="text-white font-semibold mb-1">{f.name}</h3>
              <p className="text-gray-400 text-sm">{f.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Figma Library Screenshot */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="rounded-xl overflow-hidden border border-gray-800">
          <img
            src="/images/bupa/figma-library.png"
            alt="Bupa Design System Figma Library - Alert, Toggle, Button, Foundations, Icons, and more"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Component Screenshot */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="rounded-xl overflow-hidden border border-gray-800">
          <img
            src="/images/bupa/figma-button.png"
            alt="Button component with sizes, states, icon alignment, and interactive properties"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Base Components */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Component Library
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          50+ interactive base components with full property controls, multiple
          states (Default, Hover, Focus, Active, Disabled), responsive sizes
          (xs to xl), and icon alignment options.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {baseComponents.map((c) => (
            <span
              key={c}
              className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300 font-mono"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 italic">
          Each component is fully documented with properties, variants, auto-layout, and
          responsive behavior. Version-controlled in Figma (e.g., Button_v4.0.0, Alert_v5.0.1).
        </p>
      </section>

      {/* Product Flows Screenshot */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="rounded-xl overflow-hidden border border-gray-800">
          <img
            src="/images/bupa/figma-flows.png"
            alt="Bupa Agenda - Medical appointment booking flows with responsive views"
            className="w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Products */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Digital Products
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          The Design System powers 5 interconnected digital products, each with
          custom components built on top of the shared foundation.
        </p>
        <div className="space-y-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-white font-semibold font-mono">
                    {p.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                      p.status === "Live"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Pipeline */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Development Pipeline
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          A custom Figma-to-Code workflow transforms design tokens into
          production-ready code across multiple platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: "01",
              title: "Define Tokens",
              desc: "Visual values defined in Figma using Variables (Primitive & Semantic)",
              tool: "Figma",
            },
            {
              step: "02",
              title: "Export JSON",
              desc: "Tokens extracted via Design Tokens to Code plugin as structured JSON",
              tool: "Figma Plugin",
            },
            {
              step: "03",
              title: "Transform",
              desc: "Custom pipeline parses JSON and generates CSS, SCSS, and Tailwind outputs",
              tool: "NPM + Custom",
            },
            {
              step: "04",
              title: "Build & Document",
              desc: "Web Components built with tokens, documented in Storybook for all teams",
              tool: "Storybook",
            },
          ].map((p) => (
            <div
              key={p.step}
              className="relative p-5 bg-gray-900/50 border border-gray-800 rounded-xl"
            >
              <span className="text-3xl font-bold text-blue-500/15 absolute top-3 right-4 font-mono">
                {p.step}
              </span>
              <span className="inline-block px-2 py-0.5 text-xs font-medium font-mono rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
                {p.tool}
              </span>
              <h3 className="text-white font-semibold mb-1 text-sm">
                {p.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
          <p className="text-sm text-gray-400">
            <span className="text-white font-medium">Output formats:</span>{" "}
            CSS custom properties, SCSS variables, Tailwind CSS utilities, and
            Light/Dark theme files &mdash; supporting Web Components, Angular,
            and React integrations.
          </p>
        </div>
      </section>

      {/* Timeline / Roadmap */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Project Timeline
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          16+ sprints from July 2025 to April 2026, following staggered design
          and development cycles managed in Jira.
        </p>
        <div className="space-y-4">
          {timeline.map((t) => {
            const colors = phaseColors[t.phase];
            return (
              <div
                key={t.sprint}
                className={`p-5 rounded-xl ${colors.bg} border ${colors.border}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-mono font-bold text-sm ${colors.text}`}>
                    {t.sprint}
                  </span>
                  <span className="text-gray-500 text-xs font-mono">
                    {t.date}
                  </span>
                  {t.status === "done" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                      Done
                    </span>
                  )}
                  {t.status === "current" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                      In progress
                    </span>
                  )}
                  {t.status === "upcoming" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-500/10 text-gray-400 border border-gray-500/20 font-mono">
                      Upcoming
                    </span>
                  )}
                </div>
                <ul className="space-y-1.5">
                  {t.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <span className={`mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* KPIs */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
          Key Metrics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { metric: "50+", label: "Base Components", detail: "With full variants & states" },
            { metric: "5", label: "Digital Products", detail: "Powered by the system" },
            { metric: "1000+", label: "Design Tokens", detail: "Primitive & Semantic" },
            { metric: "16+", label: "Sprints Delivered", detail: "Jul 2025 – Apr 2026" },
          ].map((k) => (
            <div
              key={k.label}
              className="text-center p-5 bg-gray-900/50 border border-gray-800 rounded-xl"
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {k.metric}
              </span>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2 font-mono">
                {k.label}
              </p>
              <p className="text-gray-500 text-xs mt-1">{k.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
          Tools &amp; Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4 font-mono">
              Design
            </h3>
            <div className="flex flex-wrap gap-2">
              {designTools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-gray-900 rounded-full text-xs text-gray-300 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 font-mono">
              Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {devTools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-gray-900 rounded-full text-xs text-gray-300 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4 font-mono">
              Management
            </h3>
            <div className="flex flex-wrap gap-2">
              {managementTools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-gray-900 rounded-full text-xs text-gray-300 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
          Team Structure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">
              Design System Architect
            </h3>
            <p className="text-gray-400 text-sm">
              Carlos Baeza (me)
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Architecture, foundations, methodology, pipeline design, team recruitment
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">
              Design System Designer
            </h3>
            <p className="text-gray-400 text-sm">
              Recruited by me
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Component design, Figma library maintenance, documentation
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-xl text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">
              Front-end Engineer
            </h3>
            <p className="text-gray-400 text-sm">
              Recruited by me
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Web Components development, Storybook, token pipeline implementation
            </p>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <RelatedProjects current="/bupa-design-system" />
      </section>
    </article>
  );
}
