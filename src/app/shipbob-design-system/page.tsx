"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";
import JsonLd from "@/components/JsonLd";

export default function ShipBobPage() {
  const { t } = useLanguage();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "ShipBob Design System — AI-Ready Infrastructure Case Study",
          url: "https://carlosbaeza.design/shipbob-design-system",
          description:
            "Enterprise design system infrastructure for ShipBob that reduced interface development time by 75% and enabled AI-ready scalability across complex fulfillment operations.",
          image: "https://carlosbaeza.design/opengraph-image",
          inLanguage: ["en", "es"],
        }}
      />

      {/* Hero / Header */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22">
        <div className="mb-6">
          <span className="text-sm font-medium text-[var(--color-text-secondary)] tracking-wide uppercase">
            Case Study
          </span>
        </div>
        <h1 className="font-heading text-display-lg tracking-display mb-6">
          ShipBob Design System
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-4 max-w-3xl">
          AI-Ready Design System Infrastructure
        </p>
        <p className="text-lg text-[var(--color-text-tertiary)] max-w-3xl">
          Reducing complex interface development from hours to minutes through standardized, scalable design system infrastructure. From manual design workflows to system-driven assembly, ShipBob's design system became the foundation for intelligent, AI-ready product development.
        </p>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22 border-t border-[var(--color-border)]">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-display-sm tracking-display mb-4">
              The Challenge
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-4">
              ShipBob operates complex fulfillment operations across multiple systems: WMS, tracking, dashboards, and operational tools serving different user roles with constantly evolving requirements.
            </p>
            <p className="text-[var(--color-text-tertiary)] mb-6">
              The problem wasn't talent. It was infrastructure. Every interface had to be designed from scratch, leading to:
            </p>
            <ul className="space-y-2 text-[var(--color-text-tertiary)]">
              <li>• Inconsistent interfaces across products</li>
              <li>• Manual design for every new feature</li>
              <li>• Hours or days per interface</li>
              <li>• Friction between design and engineering</li>
              <li>• Inability to scale without linear team growth</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-display-sm tracking-display mb-4">
              The Opportunity
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-4">
              ShipBob needed a unified system that could enable rapid, consistent interface development while reducing friction between design and engineering teams.
            </p>
            <p className="text-[var(--color-text-tertiary)] mb-6">
              What was missing:
            </p>
            <ul className="space-y-2 text-[var(--color-text-tertiary)]">
              <li>• Unified design token system</li>
              <li>• Reusable component architecture</li>
              <li>• Semantic, scalable standards</li>
              <li>• Foundation for automation</li>
              <li>• AI-ready infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          Our Approach
        </h2>

        <div className="space-y-16">
          {/* Foundations */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              1. Foundations
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-8">
              Semantic design tokens for color, spacing, and typography. A scalable foundation that could adapt across products and themes.
            </p>
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
              <img
                src="/images/shipbob/tokens-variables.png"
                alt="ShipBob Design Tokens — Semantic color, spacing, and typography variables"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Base Styles */}
          <div>
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
              <img
                src="/images/shipbob/base-styles.png"
                alt="Base Styles — Consistent typography, colors, and spacing applied across the system"
                className="w-full"
                loading="lazy"
              />
            </div>
            <p className="text-[var(--color-text-tertiary)] mt-6">
              Unified base styles ensuring consistency across all interfaces without requiring design decisions for every new page.
            </p>
          </div>

          {/* Component System */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              2. Component System
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-8">
              A robust library of reusable components with adaptive variants for multiple use cases. Consistency cross-product without sacrificing flexibility.
            </p>

            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                <img
                  src="/images/shipbob/button.png"
                  alt="Button Component — Primary, secondary, and tertiary variants with states"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                <img
                  src="/images/shipbob/toggle.png"
                  alt="Toggle Component — Binary controls for complex operations"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                <img
                  src="/images/shipbob/bottom-sheet.png"
                  alt="Bottom Sheet Component — Modular content delivery for mobile and desktop"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                <img
                  src="/images/shipbob/stepper.png"
                  alt="Stepper Component — Multi-step workflows for fulfillment operations"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Data Tables */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              3. Complex Data Patterns
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-8">
              Fulfillment platforms depend on complex data tables. We built adaptable table systems that could scale from simple lists to dashboard analytics.
            </p>

            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                <img
                  src="/images/shipbob/table.png"
                  alt="Table Component — Base table with sorting, filtering, and pagination"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                <img
                  src="/images/shipbob/table-1.png"
                  alt="Table Variant 1 — Compact variant for dense information displays"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                <img
                  src="/images/shipbob/table-2.png"
                  alt="Table Variant 2 — Expandable rows for detailed operational data"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* System Enablement */}
          <div className="border-t border-[var(--color-border)] pt-12">
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              4. System Enablement
            </h3>
            <p className="text-[var(--color-text-tertiary)]">
              The goal wasn't to design every interface. It was to build the system that enables designers and engineers to assemble complex interfaces from proven building blocks. Interfaces ensambleable instead of designed from scratch.
            </p>
          </div>

          {/* Dev Integration */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              5. Developer Integration
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-4">
              Direct alignment between Figma design system and codebase. Reduced manual decisions, eliminated design-eng friction, accelerated implementation. Components ready to use — no interpretation needed.
            </p>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              <strong>Tech Stack:</strong> ShipBob's development team built the design system in Vue.js using{" "}
              <a
                href="https://primevue.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] underline"
              >
                PrimeVue
              </a>{" "}
              as the component foundation. This allowed rapid iteration, consistent component behavior, and seamless integration with ShipBob's existing Vue infrastructure.
            </p>
          </div>

          {/* AI-Ready */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              6. AI-Ready Foundation
            </h3>
            <p className="text-[var(--color-text-tertiary)]">
              Built with future scalability in mind. The infrastructure prepares ShipBob for agent-driven interface development, dynamic workflow generation, and systems that evolve with AI — where interfaces adapt instead of requiring continuous manual redesign.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          Measurable Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 border border-[var(--color-border)] rounded-lg">
            <p className="text-5xl font-bold text-[var(--color-text-primary)] mb-2">
              75%
            </p>
            <p className="text-[var(--color-text-secondary)]">
              Reduction in interface development time
            </p>
          </div>

          <div className="p-6 border border-[var(--color-border)] rounded-lg">
            <p className="text-5xl font-bold text-[var(--color-text-primary)] mb-2">
              2.5x
            </p>
            <p className="text-[var(--color-text-secondary)]">
              Faster delivery velocity
            </p>
          </div>

          <div className="p-6 border border-[var(--color-border)] rounded-lg">
            <p className="text-5xl font-bold text-[var(--color-text-primary)] mb-2">
              60%
            </p>
            <p className="text-[var(--color-text-secondary)]">
              Reduction in design UI effort
            </p>
          </div>

          <div className="p-6 border border-[var(--color-border)] rounded-lg">
            <p className="text-5xl font-bold text-[var(--color-text-primary)] mb-2">
              40%
            </p>
            <p className="text-[var(--color-text-secondary)]">
              Less rework between design & dev
            </p>
          </div>
        </div>

        <div className="space-y-4 text-[var(--color-text-tertiary)]">
          <p>
            <strong>From hours/days → minutes.</strong> What once required manual design now leverages the system. Designers focus on business problems, not UI decisions.
          </p>
          <p>
            <strong>Team autonomy increased.</strong> Engineers can build complex flows independently. Designers move from implementation to strategy.
          </p>
          <p>
            <strong>Business acceleration.</strong> Faster time-to-market. Reduced development costs. Ability to scale without proportional team growth.
          </p>
        </div>
      </section>

      {/* Strategic Value */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          Why This Matters
        </h2>

        <div className="space-y-6 text-[var(--color-text-tertiary)]">
          <p>
            <strong>This is not a design system.</strong> It's a product infrastructure layer that connects design, engineering, operations, and increasingly, AI.
          </p>
          <p>
            Industries like fulfillment, logistics, port operations, and industrial SaaS operate at complexity levels where every interface needs to scale. Without a solid foundation, complexity explodes, consistency breaks, and AI-driven products can't evolve.
          </p>
          <p>
            ShipBob's design system infrastructure enables:
          </p>
          <ul className="space-y-2 ml-4">
            <li>• Interfaces assembled instead of designed</li>
            <li>• Complexity managed at scale</li>
            <li>• Teams focused on business, not pixels</li>
            <li>• Foundation for agent-driven, dynamic interfaces</li>
          </ul>
          <p className="mt-6">
            <strong>The future:</strong> As ShipBob scales into agent-assisted product development, this infrastructure becomes the platform where AI-generated interfaces maintain consistency, follow governance, and evolve without manual redesign.
          </p>
        </div>
      </section>

      <RelatedProjects current="shipbobDesignSystem" />
    </>
  );
}
