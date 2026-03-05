import { Metadata } from "next";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Carlos Baeza - Design System Architect",
};

const competencies = [
  {
    title: "Token Architecture",
    description:
      "Designing semantic token structures for colors, typography, spacing, and elevation that support multi-brand theming.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
  },
  {
    title: "Component Architecture",
    description:
      "Building composable, accessible components following atomic design principles with clear API boundaries.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875S10.5 3.09 10.5 4.125c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.491 48.491 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.657-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
  {
    title: "Multi-brand Systems",
    description:
      "Creating design systems that serve multiple brands through token-based theming and Figma variables.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Design-to-Code Pipeline",
    description:
      "Establishing workflows between Figma and development using variables, tokens, and auto-layout.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Governance & Documentation",
    description:
      "Setting up contribution guidelines, versioning strategies, and living documentation for sustainable systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Team Enablement",
    description:
      "Training designers and developers on design system adoption, best practices, and collaborative workflows.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const timeline = [
  {
    year: "2016",
    title: "Foundations",
    description:
      "Began studying Atomic Design by Brad Frost, building a deep understanding of modular, scalable design architectures that would shape my entire career approach.",
    accent: "bg-purple-500/20 border-purple-500/40",
    dot: "bg-purple-500",
  },
  {
    year: "2018-2019",
    title: "First Implementation",
    description:
      "Built my first design system implementation at Enel Italia using Adobe XD. Worked with Google Material Design using Sketch and Abstract, deepening component-based design expertise.",
    accent: "bg-indigo-500/20 border-indigo-500/40",
    dot: "bg-indigo-500",
  },
  {
    year: "2019",
    title: "Material Design Adaptation",
    description:
      "Joined Banco Ripley as UX Lead at Chek, adapting Material Design as the foundation for consistent, accessible user experiences across digital products.",
    accent: "bg-blue-500/20 border-blue-500/40",
    dot: "bg-blue-500",
  },
  {
    year: "2020-2021",
    title: "Multibranding with Tokens Studio",
    description:
      "Discovered the power of design tokens through Marcelo Paiva's masterclass. Built my first Multibranding Design System with Tokens Studio and Auto Layout at Banco Ripley Corporate.",
    accent: "bg-cyan-500/20 border-cyan-500/40",
    dot: "bg-cyan-500",
  },
  {
    year: "2023-2024",
    title: "Advanced Multibranding with Variables",
    description:
      "At Autonomus, built an advanced Multibranding Design System leveraging Figma Variables for a highly adaptable system serving both backoffice and consumer-facing products.",
    accent: "bg-emerald-500/20 border-emerald-500/40",
    dot: "bg-emerald-500",
  },
  {
    year: "Present",
    title: "AI-Assisted Architecture",
    description:
      "Combining AI-assisted workflows with design system architecture, exploring new frontiers in automated token generation, component scaffolding, and design-to-code pipelines.",
    accent: "bg-violet-500/20 border-violet-500/40",
    dot: "bg-violet-500",
  },
];

const achievements = [
  {
    metric: "27+",
    label: "Team Members",
    detail: "Scaled the design system across a multidisciplinary team at Banco Ripley",
  },
  {
    metric: "3+",
    label: "Brands Served",
    detail: "Multi-brand tokens serving Banco Ripley, Seguros Ripley, and multiple platforms",
  },
  {
    metric: "5",
    label: "Platforms",
    detail: "PWA, public website, insurance portal, backoffice, and service kiosks",
  },
  {
    metric: "OKRs",
    label: "Governance",
    detail: "Created governance workflows and OKRs to measure design system adoption and impact",
  },
];

const tools = [
  "Figma",
  "Figma Variables",
  "Tokens Studio",
  "Auto Layout",
  "Storybook",
  "Git",
  "Design Tokens (W3C)",
  "Figma API",
];

const methodologySteps = [
  { step: "01", title: "Audit", description: "Analyze existing patterns, inconsistencies, and opportunities across all products and platforms." },
  { step: "02", title: "Define Tokens", description: "Establish the token architecture with global, alias, and component-level tokens for multi-brand support." },
  { step: "03", title: "Build Core", description: "Create foundational components following atomic design, ensuring accessibility and composability." },
  { step: "04", title: "Document", description: "Write usage guidelines, dos and don'ts, and create living documentation to evangelize adoption." },
  { step: "05", title: "Measure", description: "Track adoption metrics, component coverage, and design-to-dev handoff efficiency through OKRs." },
  { step: "06", title: "Iterate", description: "Continuously refine based on team feedback, new platform needs, and evolving design patterns." },
];

export default function DesignSystemArchitectPage() {
  return (
    <article className="bg-black text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
          Case Study
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Design System Architect
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Building scalable, multi-brand design systems that bridge design and development
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Design Systems
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            Token Architecture
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
            Multi-brand
          </span>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Overview</h2>
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            As a Design System Architect, I create the foundational architecture
            that connects design tokens, components, and documentation to enable
            consistent, scalable digital products across multiple brands and
            platforms.
          </p>
          <p>
            My work sits at the intersection of design and engineering -- defining
            the structures, conventions, and workflows that allow teams to build
            faster while maintaining quality and coherence. From semantic token
            hierarchies to component APIs, from governance models to adoption
            strategies, I approach design systems as living products that need
            thoughtful architecture to thrive.
          </p>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core Competencies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The key disciplines I bring to every design system initiative
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp) => (
            <div
              key={comp.title}
              className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-indigo-500/30 hover:bg-gray-900 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                {comp.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {comp.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Evolution of My Approach */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Evolution of My Approach
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A decade of growth in design systems, from foundational theory to advanced multi-brand architectures
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-indigo-500/50 to-violet-500/50" />

          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div
                  className={`absolute left-3 md:left-4 top-1.5 w-3 h-3 rounded-full ${item.dot} ring-4 ring-black`}
                />

                <div
                  className={`p-5 rounded-xl border ${item.accent} backdrop-blur-sm`}
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-sm font-mono font-bold text-gray-400">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Measurable impact through design system leadership
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full" />
              <div className="relative">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {item.metric}
                </span>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mt-1 mb-3">
                  {item.label}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional achievements list */}
        <div className="mt-8 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">
            Additional Impact
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>
                Reduced design-to-development handoff time significantly by
                establishing shared token structures and component documentation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>
                Built design systems for both large enterprises (Banco Ripley,
                Enel) and agile startups (Autonomus), adapting scale and process
                to each context
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>
                Evangelized design system practices across the organization,
                driving adoption from leadership to individual contributors
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The toolkit that powers my design system work
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="group flex items-center justify-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/30 hover:bg-gray-900 transition-all duration-300 text-center"
            >
              <span className="text-sm font-medium text-gray-300 group-hover:text-purple-300 transition-colors">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Methodology</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A systematic approach to building and scaling design systems
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodologySteps.map((item) => (
            <div
              key={item.step}
              className="relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl"
            >
              <span className="text-4xl font-bold text-indigo-500/20 absolute top-4 right-5">
                {item.step}
              </span>
              <div className="relative">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary arrow flow */}
        <div className="mt-10 flex items-center justify-center gap-2 flex-wrap text-sm text-gray-500">
          <span className="text-indigo-400 font-medium">Audit</span>
          <span>&rarr;</span>
          <span className="text-indigo-400 font-medium">Define Tokens</span>
          <span>&rarr;</span>
          <span className="text-indigo-400 font-medium">Build Core</span>
          <span>&rarr;</span>
          <span className="text-indigo-400 font-medium">Document</span>
          <span>&rarr;</span>
          <span className="text-indigo-400 font-medium">Measure</span>
          <span>&rarr;</span>
          <span className="text-indigo-400 font-medium">Iterate</span>
          <span className="text-gray-600 ml-1">(repeat)</span>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <RelatedProjects current="/design-system-architect" />
      </section>
    </article>
  );
}
