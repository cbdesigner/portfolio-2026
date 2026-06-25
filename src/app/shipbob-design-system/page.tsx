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
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
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

      {/* Project Overview */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Client
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              ShipBob
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Role
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Lead Design System Architect
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Timeline
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              6 Months
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Tech Stack
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Figma, Vue.js, PrimeVue
            </p>
          </div>
        </div>
      </section>

      {/* Challenge & Opportunity */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
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
      <section className="border-t border-[var(--color-border)]">
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h2 className="font-heading text-display-md tracking-display mb-8">
            Our Approach
          </h2>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            We built a system-first architecture focusing on four core pillars: semantic design tokens, reusable component library, complex data patterns, and AI-ready infrastructure.
          </p>
        </section>

        {/* Foundations Section */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            Design Foundations
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            Semantic design tokens for color, spacing, and typography. A scalable foundation that could adapt across products and themes without requiring constant redesign decisions.
          </p>
        </section>

        {/* Tokens Image */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/shipbob/tokens-variables.png"
              alt="ShipBob Design Tokens — Semantic color, spacing, and typography variables"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Base Styles Image */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/shipbob/base-styles.png"
              alt="Base Styles — Consistent typography, colors, and spacing applied across the system"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Base Styles Details */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <p className="text-[var(--color-text-tertiary)]">
            Unified base styles ensuring consistency across all interfaces without requiring design decisions for every new page. This foundation reduced interface development time from hours to minutes.
          </p>
        </section>

        {/* Component System Section */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            Component Library
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            A robust library of reusable components with adaptive variants for multiple use cases. Consistency cross-product without sacrificing flexibility.
          </p>
        </section>

        {/* Button Component */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/shipbob/button.png"
              alt="Button Component — Primary, secondary, and tertiary variants with states"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Toggle Component */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/shipbob/toggle.png"
              alt="Toggle Component — Binary controls for complex operations"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Bottom Sheet Component */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/shipbob/bottom-sheet.png"
              alt="Bottom Sheet Component — Modular content delivery for mobile and desktop"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Stepper Component */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/shipbob/stepper.png"
              alt="Stepper Component — Multi-step workflows for fulfillment operations"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Complex Data Patterns Section */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            Complex Data Patterns
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            Fulfillment platforms depend on complex data tables. We built adaptable table systems that could scale from simple lists to dashboard analytics.
          </p>
        </section>

        {/* Table Base */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/shipbob/table.png"
              alt="Table Component — Base table with sorting, filtering, and pagination"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Table Variant 1 */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/shipbob/table-1.png"
              alt="Table Variant 1 — Compact variant for dense information displays"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Table Variant 2 */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/shipbob/table-2.png"
              alt="Table Variant 2 — Expandable rows for detailed operational data"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* System Enablement & Development */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            System Enablement & Developer Integration
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-6">
            The goal wasn't to design every interface. It was to build the system that enables designers and engineers to assemble complex interfaces from proven building blocks. Interfaces assembleable instead of designed from scratch.
          </p>
          <p className="text-[var(--color-text-tertiary)] mb-6">
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
        </section>

        {/* AI-Ready Foundation */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            AI-Ready Foundation
          </h3>
          <p className="text-[var(--color-text-tertiary)]">
            Built with future scalability in mind. The infrastructure prepares ShipBob for agent-driven interface development, dynamic workflow generation, and systems that evolve with AI — where interfaces adapt instead of requiring continuous manual redesign.
          </p>
        </section>
      </section>

      {/* What We Delivered */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          What We Delivered
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Design Tokens System
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Semantic color, spacing, and typography variables enabling consistent design across all products.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Component Library
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              50+ reusable components with adaptive variants, states, and comprehensive documentation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Data Patterns
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Scalable table systems, complex data displays, and operational UI patterns for fulfillment workflows.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Vue.js Implementation
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Production-ready component library built with Vue.js and PrimeVue, integrated with ShipBob's infrastructure.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Design-Dev Alignment
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Seamless handoff framework eliminating interpretation and reducing design-engineering friction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              AI-Ready Architecture
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Scalable infrastructure prepared for agent-driven interface generation and dynamic workflow evolution.
            </p>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
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

      {/* Lessons Learned */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          Lessons Learned
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              What Worked Well
            </h3>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• <strong className="text-[var(--color-text-primary)]">System-First Approach:</strong> Starting with tokens and patterns before components accelerated downstream decisions</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Semantic Naming:</strong> Design tokens with business-meaningful names improved cross-functional understanding</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Close Design-Dev Partnership:</strong> Weekly syncs between design and engineering ensured alignment and rapid iteration</li>
              <li>• <strong className="text-[var(--color-text-primary)]">PrimeVue Foundation:</strong> Building on an established component library accelerated initial development</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              Areas for Improvement
            </h3>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• <strong className="text-[var(--color-text-primary)]">Earlier Accessibility Planning:</strong> Integrate WCAG compliance testing from the start, not as an afterthought</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Documentation Automation:</strong> Invest in tooling to keep design documentation in sync with code changes</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Adoption Metrics:</strong> Track component usage and design system adoption across teams more systematically</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          Conclusion
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

      {/* Related Projects */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <RelatedProjects current="shipbobDesignSystem" />
      </section>
    </>
  );
}
