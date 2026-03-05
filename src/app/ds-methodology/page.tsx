import { Metadata } from "next";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Carlos Baeza - Design System Methodology",
};

const benefits = [
  {
    title: "Economies of Scale",
    description:
      "A Design System reduces duplicated efforts and accelerates digital production. More teams using it means lower costs per unit.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Network Effect",
    description:
      "The more teams adopt it, the greater its value: teams collaborate, share learnings, and continuously optimize the system.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
  {
    title: "Counter-positioning",
    description:
      "Companies with agile Design Systems compete against slow traditional models, gaining speed and consistency without legacy baggage.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Switching Costs",
    description:
      "Integrating a Design System into workflows creates positive dependency: replacing it would be costly in time and resources.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Exclusive Resource",
    description:
      "Custom components, tokens, and documentation become unique assets that others cannot easily replicate.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Process Power",
    description:
      "Design Systems standardize production with quality and speed that are difficult to match without years of investment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385 3.176a.75.75 0 01-1.088-.79l1.028-5.994L.813 6.598a.75.75 0 01.416-1.28l6.025-.876L9.949.762a.75.75 0 011.35 0l2.695 5.682 6.025.876a.75.75 0 01.416 1.28l-4.362 4.262 1.028 5.994a.75.75 0 01-1.088.79L11.42 15.17z" />
      </svg>
    ),
  },
  {
    title: "Brand",
    description:
      "Visual and experience consistency strengthens brand value. A good Design System ensures your brand shines at every touchpoint.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const stages = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Laying the foundations for success",
    description:
      "This stage is crucial to establish a solid foundation, deeply understanding the context and project needs.",
    items: [
      "Kick-off meeting with stakeholders to align expectations, understand the vision, and establish the Design System pillars",
      "Ecosystem audit: analyze existing products, identify patterns and reusable components",
      "Technical information gathering: understand the tech stack for compatibility and integration. Flow diagrams, infrastructure, and repositories",
      "Initial roadmap: define an iterative roadmap, prioritizing key components and functionalities. Sprint deliveries and ceremonies",
    ],
    accent: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/30",
    dot: "bg-indigo-500",
    number_color: "text-indigo-400",
  },
  {
    number: "02",
    title: "Creation",
    subtitle: "Where creativity meets structure",
    description:
      "With a clear understanding, we move to the design phase where creativity meets structure.",
    items: [
      "Customize the Design System with Design Tokens",
      "Create atomic, molecular, and organism components, as well as key pages, using Figma as the primary tool",
      "Build custom components tailored to business needs",
      "Continuous review (Design System Touchpoints): periodic presentations to stakeholders for feedback, alignment, and adjustments",
    ],
    accent: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
    dot: "bg-purple-500",
    number_color: "text-purple-400",
  },
  {
    number: "03",
    title: "Development & Documentation",
    subtitle: "Where design comes to life",
    description:
      "This is where design comes to life, with a focus on quality, scalability, and documentation.",
    items: [
      "Define a development team to build and document the Design System",
      "Sprint deliveries following the defined roadmap: 1 or 2-week sprints for incremental and predictable deliveries",
      "Rigorous development and testing: prioritizing reusability, accessibility, and performance",
      "Storybook documentation: each component documented as a single source of truth, including properties and examples",
      "Constant validation: presentations at the end of each sprint to show and validate development with stakeholders",
    ],
    accent: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
    dot: "bg-cyan-500",
    number_color: "text-cyan-400",
  },
  {
    number: "04",
    title: "Training",
    subtitle: "Essential for successful adoption",
    description:
      "Training is essential for successful adoption and effective use of the Design System.",
    items: [
      "Hands-on sessions for designers and developers on how to consume, extend, and contribute to the Design System",
      "Best practices workshops for maintaining and growing the system at scale",
    ],
    accent: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/30",
    dot: "bg-emerald-500",
    number_color: "text-emerald-400",
  },
  {
    number: "05",
    title: "Maintenance",
    subtitle: "A living product that evolves",
    description:
      "A Design System is a living product that requires constant attention and evolution to remain relevant and useful.",
    items: [
      "Assign a dedicated team responsible for ongoing maintenance: designers and developers",
      "Design System Touchpoints, live design sessions, and asynchronous work following the roadmap",
      "Continuous quality assurance and evolution to ensure long-term value",
    ],
    accent: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/30",
    dot: "bg-violet-500",
    number_color: "text-violet-400",
  },
];

const pipeline = [
  {
    step: "Token Definition",
    description:
      "The designer defines visual values (colors, typography, spacing) in Figma, using Figma Variables.",
    tool: "Figma",
  },
  {
    step: "Token Export",
    description:
      "Uses a Figma plugin or export capabilities to generate a JSON file with the token structure.",
    tool: "Figma Plugin",
  },
  {
    step: "Token Transformation",
    description:
      "The JSON file is passed to Style Dictionary, which transforms it into code for different development platforms.",
    tool: "Style Dictionary",
  },
  {
    step: "Development & Documentation",
    description:
      "Developers build components using the generated tokens and document them in Storybook.",
    tool: "Storybook",
  },
];

const tools = [
  { name: "Figma", description: "Tokens, components, views, and library for designers" },
  { name: "Style Dictionary", description: "Sync Figma Tokens with code for CSS styles" },
  { name: "Web Components", description: "Fast, lightweight, reusable components that work in any JS framework" },
  { name: "Storybook", description: "Living documentation for developers" },
  { name: "Cursor", description: "AI-powered coding for complex software projects" },
  { name: "Jira", description: "Sprint tracking and roadmap management" },
];

const kpis = [
  { metric: "+50", label: "Base Components", detail: "Responsive, Light & Dark mode" },
  { metric: "+100", label: "Views / Pages", detail: "Custom business components" },
  { metric: "+1000", label: "Variables / Tokens", detail: "General and component-specific tokens" },
  { metric: "+1000", label: "Properties & Auto-Layout", detail: "Component variants and configurations" },
];

const roadmap = [
  { month: "1", focus: "Kickoff + Foundations", deliverables: "Color, Typography, Spacing, Elevation, Corner Radius, Iconography, and Logos tokens with documentation" },
  { month: "1", focus: "Base Components", deliverables: "50+ interactive components with properties in Figma and hundreds of variants" },
  { month: "1-2+", focus: "Staggered Design & Dev Sprints", deliverables: "Custom components, screens, and flows based on roadmap. Component-Specific Tokens" },
  { month: "2+", focus: "Documentation", deliverables: "Interactive component catalog in Storybook" },
  { month: "2+", focus: "Training", deliverables: "Specialized training for designers and developers" },
  { month: "9+", focus: "Maintenance", deliverables: "Design System Touchpoints, live sessions, and async work following the roadmap" },
];

export default function DSMethodologyPage() {
  return (
    <article className="bg-black text-white">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm uppercase tracking-widest text-emerald-400 mb-4 font-mono">
          Methodology
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Design System Methodology
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          5 clear stages to guarantee a transparent and collaborative process
        </p>
        <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
          A proven methodology I developed for creating enterprise-grade Design
          Systems, from initial discovery through long-term maintenance. This
          framework ensures scalable, consistent, and well-documented design
          systems that drive measurable business results.
        </p>
      </section>

      {/* Strategic Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Strategic Benefits
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Implementing a Design System offers key competitive advantages that
            drive long-term success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-emerald-500/30 hover:bg-gray-900 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                {b.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {b.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Stages Overview */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            The 5 Stages
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A structured, iterative approach that adapts to each
            organization&apos;s specific needs
          </p>
        </div>

        {/* Stage flow */}
        <div className="flex items-center justify-center gap-2 flex-wrap text-sm text-gray-500 font-mono mb-16">
          <span className="text-indigo-400 font-medium">Discovery</span>
          <span>&rarr;</span>
          <span className="text-purple-400 font-medium">Creation</span>
          <span>&rarr;</span>
          <span className="text-cyan-400 font-medium">Dev & Docs</span>
          <span>&rarr;</span>
          <span className="text-emerald-400 font-medium">Training</span>
          <span>&rarr;</span>
          <span className="text-violet-400 font-medium">Maintenance</span>
        </div>

        {/* Detailed stages */}
        <div className="space-y-12">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${stage.accent} border ${stage.border}`}
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className={`text-4xl font-bold font-mono ${stage.number_color} opacity-60`}>
                  {stage.number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-gray-400 italic">
                    {stage.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 mt-4">
                {stage.description}
              </p>
              <ul className="space-y-3">
                {stage.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className={`mt-2 shrink-0 block w-1.5 h-1.5 rounded-full ${stage.dot}`} />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Development Pipeline */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Development Pipeline
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From Brandbook to Figma to Components &mdash; an optimized workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pipeline.map((p, i) => (
            <div
              key={p.step}
              className="relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl"
            >
              <span className="text-4xl font-bold text-emerald-500/15 absolute top-4 right-5 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="inline-block px-3 py-1 text-xs font-medium font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                {p.tool}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                {p.step}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Tools for an Optimized Workflow
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((t) => (
            <div
              key={t.name}
              className="p-5 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors"
            >
              <h3 className="text-white font-semibold mb-1">{t.name}</h3>
              <p className="text-gray-400 text-sm">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KPIs */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Design System KPIs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A well-implemented Design System generates measurable ROI through
            key metrics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-xl"
            >
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {k.metric}
              </span>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mt-2 font-mono">
                {k.label}
              </p>
              <p className="text-gray-500 text-xs mt-1">{k.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-2">
              Efficiency & Speed
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Accelerated development cycles and shorter time-to-market thanks
              to reusable components and clear guidelines.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-2">
              Consistency & Brand
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uniform user experience across all products, reinforcing brand
              identity and building user trust.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-2">
              Cost Savings
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Significant reduction in design and development rework, lower
              maintenance costs, and efficient resource allocation.
            </p>
          </div>
          <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-2">
              Quality & Accessibility
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fewer UI errors, greater accessibility compliance, and a higher
              overall standard for product interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Sample Roadmap
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This methodology is flexible and adapts to each organization&apos;s
            specific needs
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-gray-400 font-mono font-medium uppercase tracking-wider text-xs">
                  Month
                </th>
                <th className="text-left py-3 px-4 text-gray-400 font-mono font-medium uppercase tracking-wider text-xs">
                  Focus Area
                </th>
                <th className="text-left py-3 px-4 text-gray-400 font-mono font-medium uppercase tracking-wider text-xs">
                  Key Deliverables
                </th>
              </tr>
            </thead>
            <tbody>
              {roadmap.map((r, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors"
                >
                  <td className="py-4 px-4 text-emerald-400 font-mono font-medium whitespace-nowrap">
                    {r.month}
                  </td>
                  <td className="py-4 px-4 text-white font-medium">
                    {r.focus}
                  </td>
                  <td className="py-4 px-4 text-gray-400">
                    {r.deliverables}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <RelatedProjects current="/ds-methodology" />
      </section>
    </article>
  );
}
