"use client";

export default function SimplifiedCvContent() {
  return (
    <div
      data-simplified-cv-pdf
      className="bg-[var(--color-surface)] text-[var(--color-text-primary)] font-sans"
      style={{
        width: "210mm",
        height: "297mm",
        padding: "12mm",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div className="mb-4 pb-3 border-b-2 border-[var(--color-border)]">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h1 className="text-4xl font-bold text-[var(--color-text-primary)] leading-tight">
              CARLOS BAEZA
            </h1>
            <p className="text-xs font-medium text-[var(--color-text-tertiary)] mt-0.5 tracking-wide">
              Design Systems Architect | Head of Product Design | UX Manager
            </p>
          </div>
          <div className="w-16 h-16 flex-shrink-0 bg-[var(--color-text-primary)] rounded-md flex items-center justify-center">
            <span className="font-bold text-lg text-[var(--color-surface)]">CB</span>
          </div>
        </div>
        <div className="text-xs text-[var(--color-text-secondary)] space-y-0.5">
          <p>Santiago, Chile · carlos@snapflowlabs.com · carlosbaeza.design</p>
          <p>linkedin.com/in/carlos-baeza-design · github.com/cbdesigner</p>
        </div>
      </div>

      {/* Two columns layout */}
      <div className="flex gap-6 flex-1">
        {/* Left column */}
        <div className="flex-1 space-y-3">
          {/* Executive Profile */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5 border-b border-[var(--color-border)] pb-1">
              Profile
            </h2>
            <p className="text-xs leading-snug text-[var(--color-text-secondary)]">
              10+ years architecting enterprise design systems for fintech, energy, logistics &amp; healthcare.
              Specialized in AI-ready infrastructure, design tokens &amp; design-to-code automation.
            </p>
            <p className="text-xs leading-snug text-[var(--color-text-secondary)] mt-1">
              <strong>Impact:</strong> 40% reduction in design-to-implementation cycles, $2M+ in technical debt savings.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5 border-b border-[var(--color-border)] pb-1">
              Experience
            </h2>
            <div className="space-y-2 text-xs">
              <div>
                <p className="font-bold text-[var(--color-text-primary)]">CEO &amp; Design System Architect</p>
                <p className="text-[var(--color-text-secondary)]">Snapflow Labs · Oct 2023 – Present</p>
              </div>
              <div>
                <p className="font-bold text-[var(--color-text-primary)]">Design System Architect</p>
                <p className="text-[var(--color-text-secondary)]">ShipBob (via Flylance) · Jul 2025 – Present</p>
              </div>
              <div>
                <p className="font-bold text-[var(--color-text-primary)]">Head of Product Design</p>
                <p className="text-[var(--color-text-secondary)]">Siamese Digital · Oct 2023 – Present</p>
              </div>
              <div>
                <p className="font-bold text-[var(--color-text-primary)]">UX Manager</p>
                <p className="text-[var(--color-text-secondary)]">Banco Ripley Chile · May 2021 – Sep 2023</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5 border-b border-[var(--color-border)] pb-1">
              Education
            </h2>
            <div className="space-y-1 text-xs">
              <p><strong>Full Stack Development</strong> • Universidad del Desarrollo 2024</p>
              <p><strong>Diseño Gráfico</strong> • Duoc UC 2002–2004</p>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="flex-1 space-y-3">
          {/* Skills */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5 border-b border-[var(--color-border)] pb-1">
              Core Skills
            </h2>
            <div className="text-xs text-[var(--color-text-secondary)] space-y-1.5">
              <div>
                <p className="font-bold text-[var(--color-text-primary)] mb-0.5">Design Systems</p>
                <p className="leading-snug">Architecture, tokens, component libraries, multi-brand theming, design governance</p>
              </div>
              <div>
                <p className="font-bold text-[var(--color-text-primary)] mb-0.5">Product &amp; Leadership</p>
                <p className="leading-snug">UX strategy, team leadership (27+ people), design-to-code workflows, product innovation</p>
              </div>
            </div>
          </section>

          {/* Tools */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5 border-b border-[var(--color-border)] pb-1">
              Tools
            </h2>
            <div className="text-xs text-[var(--color-text-secondary)] space-y-1">
              <p><strong>Design:</strong> Figma, FigJam, Webflow, Maze</p>
              <p><strong>Dev:</strong> React, Vue.js, Angular, Storybook, Web Components</p>
              <p><strong>Collab:</strong> Jira, Confluence, Slack, Miro</p>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5 border-b border-[var(--color-border)] pb-1">
              Certifications
            </h2>
            <div className="text-xs text-[var(--color-text-secondary)] space-y-0.5">
              <p>• SAFe 5 Product Owner (Scaled Agile)</p>
              <p>• Product Strategy (Product School)</p>
              <p>• Design Sprint Innovation (UDD)</p>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-1.5 border-b border-[var(--color-border)] pb-1">
              Languages
            </h2>
            <div className="text-xs text-[var(--color-text-secondary)]">
              <p>Spanish (Native) • English (Fluent)</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-[var(--color-text-tertiary)] text-center border-t border-[var(--color-border)] pt-2 mt-auto">
        <p>carlosbaeza.design • June 2026</p>
      </div>
    </div>
  );
}
