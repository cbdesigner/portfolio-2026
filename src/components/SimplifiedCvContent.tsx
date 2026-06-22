"use client";

export default function SimplifiedCvContent() {
  return (
    <div
      data-simplified-cv-pdf
      className="min-h-screen bg-[var(--color-surface)] p-8 text-[var(--color-text-primary)] font-sans"
      style={{ fontSize: "11px", lineHeight: "1.4" }}
    >
      {/* Header */}
      <div className="text-center mb-4 border-b border-[var(--color-border)] pb-4">
        <h1 className="text-2xl font-bold mb-1">CARLOS BAEZA</h1>
        <p className="text-xs text-[var(--color-text-secondary)] mb-2">
          Design Systems Architect | Head of Product Design | UX Manager
        </p>
        <p className="text-xs text-[var(--color-text-tertiary)]">
          Santiago, Chile · carlos@snapflowlabs.com · carlosbaeza.design
        </p>
        <p className="text-xs text-[var(--color-text-tertiary)]">
          LinkedIn: carlos-baeza-design | GitHub: cbdesigner
        </p>
      </div>

      {/* Executive Profile */}
      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-secondary)] mb-2">
          Executive Profile
        </h2>
        <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
          Design Systems Architect with 10+ years building enterprise-scale infrastructure for fintech,
          energy, logistics, and healthcare. Specialized in AI-ready design systems, design tokens, and
          design-to-code automation. Currently CEO at Snapflow Labs, building the next generation of
          deterministic design system infrastructure.
        </p>
        <p className="text-xs leading-relaxed text-[var(--color-text-secondary)] mt-1">
          Track record: 40% reduction in design-to-implementation cycles, $2M+ in annual technical
          debt savings across organizations.
        </p>
      </div>

      {/* Core Competencies */}
      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-secondary)] mb-1">
          Core Competencies
        </h2>
        <div className="text-xs text-[var(--color-text-secondary)] grid grid-cols-2 gap-x-4 gap-y-0">
          <div>
            <p>▪ Design Systems Architecture</p>
            <p>▪ Design Tokens & Variables</p>
            <p>▪ Figma Standardization</p>
            <p>▪ Multi-brand Theming</p>
            <p>▪ Component Library Design</p>
          </div>
          <div>
            <p>▪ Design-to-Code Automation</p>
            <p>▪ Design Governance</p>
            <p>▪ Team Leadership (up to 27 people)</p>
            <p>▪ UX Strategy & Innovation</p>
            <p>▪ Product Design</p>
          </div>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-secondary)] mb-1">
          Professional Experience
        </h2>
        <div className="space-y-1.5">
          <div>
            <p className="text-xs font-bold text-[var(--color-text-primary)]">
              CEO & Design System Architect | Snapflow Labs (Oct 2023 – Present)
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Building AI-ready design system infrastructure. 40% reduction in design-to-implementation
              cycles. Deterministic design-to-code automation, enterprise governance, multi-framework support.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-[var(--color-text-primary)]">
              Design System Architect | Flylance / ShipBob (Jul 2025 – Present)
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              3-tier token architecture, PrimeVue component integration, multi-theme support for logistics platform.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-[var(--color-text-primary)]">
              Head of Product Design | Siamese Digital (Oct 2023 – Present)
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Managing 10+ cross-functional team, multi-brand design system in Figma with React, Angular, Vue JS, Web Components.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-[var(--color-text-primary)]">
              Head of Product Design | Autonomus (Oct 2023 – Jan 2024)
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Led design for senior transportation platform. Service blueprints, information architecture, design system.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-[var(--color-text-primary)]">
              UX Manager | Banco Ripley Chile (May 2021 – Sep 2023)
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Led UX strategy for Chek (100% digital account). Managed 8+ team members, design system, user research.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-[var(--color-text-primary)]">
              Senior UX Designer | Imille (Enel project) (Feb 2018 – Jan 2019)
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Led design transformation across 5 Latin American countries. Stakeholder management, metrics analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-secondary)] mb-1">
          Education & Certifications
        </h2>
        <div className="text-xs text-[var(--color-text-secondary)] space-y-0.5">
          <p>▪ Full Stack Development | Universidad del Desarrollo (2024)</p>
          <p>▪ Diseño Gráfico | Duoc UC (2002–2004)</p>
          <p>▪ SAFe 5 Product Owner | Scaled Agile, Inc.</p>
          <p>▪ Product Strategy | Product School</p>
          <p>▪ Design Sprint Innovation | Universidad del Desarrollo</p>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-secondary)] mb-1">
          Tools & Technologies
        </h2>
        <div className="text-xs text-[var(--color-text-secondary)] space-y-0.5">
          <p>
            <span className="font-bold">Design:</span> Figma · FigJam · Webflow · Maze
          </p>
          <p>
            <span className="font-bold">Development:</span> React · Vue.js · Angular · Web Components · Storybook
          </p>
          <p>
            <span className="font-bold">Collaboration:</span> Jira · Confluence · Slack · Miro
          </p>
          <p>
            <span className="font-bold">Analytics:</span> Google Analytics · Hotjar · Smartlook
          </p>
        </div>
      </div>

      {/* Languages */}
      <div className="text-xs text-[var(--color-text-secondary)] border-t border-[var(--color-border)] pt-2 mt-3">
        <p>
          <span className="font-bold">Languages:</span> Spanish (Native) · English (Fluent)
        </p>
        <p className="text-[var(--color-text-tertiary)] mt-1">
          Last updated: June 2026
        </p>
      </div>
    </div>
  );
}
