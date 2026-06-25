"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";
import JsonLd from "@/components/JsonLd";

export default function CopecVoltexPage() {
  const { t } = useLanguage();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Copec Voltex eMobility Hub — Design System & Platform Case Study",
          url: "https://portfolio-2026-3cva.onrender.com/copec-voltex",
          description:
            "Scalable design system and eMobility platform for Copec Voltex featuring EV catalog, educational resources, and cost calculator. 50% reduction in design-to-development time.",
          image: "https://portfolio-2026-3cva.onrender.com/opengraph-image",
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
          Copec Voltex eMobility Hub
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-4 max-w-3xl">
          Scalable Design System & eMobility Platform
        </p>
        <p className="text-lg text-[var(--color-text-tertiary)] max-w-4xl">
          Building a cohesive platform to drive sustainable transportation adoption. A modular design system powering an electric vehicle catalog, educational resources, and cost calculator—delivered in 3 months with 50% reduction in design-to-development time.
        </p>
      </section>

      {/* Project Overview */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Client
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Copec Voltex
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Role
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Head of Product Design
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Timeline
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              3 Months
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Tech Stack
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Figma, React, Storybook
            </p>
          </div>
        </div>
      </section>

      {/* Challenge & Opportunity */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-display-sm tracking-display mb-6">
              The Challenge
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-6">
              Copec Voltex faced a critical gap in the market: there was no centralized, user-friendly platform educating consumers about electric vehicle ownership, comparing options, and calculating true ownership costs.
            </p>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• No unified platform for EV education and comparison</li>
              <li>• Users lacked accessible tools to evaluate EV ownership costs</li>
              <li>• Scattered, inconsistent information about electromobility</li>
              <li>• High friction between design and development teams</li>
              <li>• Risk of missing tight 3-month project deadline</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-display-sm tracking-display mb-6">
              The Opportunity
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-6">
              Create a cohesive eMobility platform combining design excellence with development speed, removing barriers to EV adoption through intuitive tools and transparent information.
            </p>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• Modular design system for rapid development</li>
              <li>• Scalable component architecture (React + Storybook)</li>
              <li>• Unified visual language across three distinct features</li>
              <li>• One-week sprint delivery cadence</li>
              <li>• Foundation for future expansion and localization</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Approach */}
      <section className="border-t border-[var(--color-border)]">
        {/* Discovery Phase */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h2 className="font-heading text-display-md tracking-display mb-8">
            Discovery & Strategy
          </h2>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            We began with deep user research and stakeholder interviews to understand Copec Voltex's goals, user needs, and the competitive landscape of eMobility platforms.
          </p>
          <ul className="space-y-3 text-[var(--color-text-tertiary)] max-w-3xl">
            <li>• <strong className="text-[var(--color-text-primary)]">User Research:</strong> Interviews with potential EV buyers to understand decision-making and pain points</li>
            <li>• <strong className="text-[var(--color-text-primary)]">Stakeholder Alignment:</strong> Daily meetings with Product Owner to validate vision and priorities</li>
            <li>• <strong className="text-[var(--color-text-primary)]">Competitive Audit:</strong> Analyzed existing resources to ensure differentiation</li>
          </ul>
        </section>

        {/* Design System Image */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/voltex/0fdbc23c-70f5-4b80-aeac-0a62d016169f_rw_1920.png"
              alt="Modular Design System — Components, tokens, and patterns"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Design System Details */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            Modular Design System
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            Built a scalable, reusable design system in Figma emphasizing modularity. This foundation enabled rapid iteration and consistent experience across three distinct platform features.
          </p>
          <ul className="space-y-3 text-[var(--color-text-tertiary)]">
            <li>• <strong className="text-[var(--color-text-primary)]">Design Tokens:</strong> Semantic color, spacing, and typography variables for consistency</li>
            <li>• <strong className="text-[var(--color-text-primary)]">Component Library:</strong> 50+ reusable components with adaptive variants</li>
            <li>• <strong className="text-[var(--color-text-primary)]">Documentation:</strong> Comprehensive guidelines for design and development teams</li>
          </ul>
        </section>

        {/* EV Catalog Image */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/voltex/05108844-6000-4f0e-a03e-20352d3a0e79_rw_1920.png"
              alt="Electric Vehicle Catalog — Intuitive explorer with filtering"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* EV Catalog Details */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            Electric Vehicle Catalog
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            Designed an intuitive EV catalog allowing users to explore and compare electric vehicles. Advanced filtering by price, range, and brand helps users find the perfect vehicle for their needs.
          </p>
          <ul className="space-y-3 text-[var(--color-text-tertiary)]">
            <li>• Advanced filtering: price, range, brand, acceleration, features</li>
            <li>• Detailed vehicle specifications and comparisons</li>
            <li>• Integration with cost calculator for informed decisions</li>
          </ul>
        </section>

        {/* Education Image */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/voltex/e019b36d-92df-4e20-84e9-b178884b01e7_rw_1920.png"
              alt="Educational Resources — Guides on EV ownership and sustainability"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Education Details */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            Educational Resources
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            Built a dedicated education section covering key topics: choosing the right EV, sustainability benefits, regulations, and electromobility trends. This removes knowledge barriers to adoption.
          </p>
          <ul className="space-y-3 text-[var(--color-text-tertiary)]">
            <li>• Comprehensive guides on EV selection and ownership</li>
            <li>• Sustainability and environmental impact resources</li>
            <li>• Regulatory information by region</li>
            <li>• Industry trends and electromobility insights</li>
          </ul>
        </section>

        {/* Cost Calculator Image */}
        <section className="w-full px-8 md:px-0 py-8">
          <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
            <img
              src="/images/voltex/2d9fc2e8-d729-4e64-97aa-61697ba2d190_rw_1920.png"
              alt="ROI Cost Calculator — Ownership cost estimation and savings visualization"
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Cost Calculator Details */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            ROI Cost Calculator
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            Created an interactive tool that helps users calculate true EV ownership costs and visualize long-term savings. This turns abstract sustainability benefits into concrete financial arguments.
          </p>
          <ul className="space-y-3 text-[var(--color-text-tertiary)]">
            <li>• Real-time cost calculation based on usage patterns</li>
            <li>• Fuel cost comparisons vs. traditional vehicles</li>
            <li>• Maintenance and operational savings visualization</li>
            <li>• ROI breakeven point estimation</li>
          </ul>
        </section>

        {/* Development Process */}
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
          <h3 className="font-heading text-display-sm tracking-display mb-6">
            Agile Development & Continuous Validation
          </h3>
          <p className="text-[var(--color-text-tertiary)] mb-6 max-w-3xl">
            Followed a one-week sprint delivery model with daily validation meetings. This rapid iteration ensured alignment and enabled quick pivots based on feedback.
          </p>
          <ul className="space-y-3 text-[var(--color-text-tertiary)]">
            <li>• Daily standups with Product Owner, design, and engineering</li>
            <li>• Weekly sprint cycles with production releases</li>
            <li>• Continuous user feedback integration</li>
            <li>• Real-time alignment across all teams</li>
          </ul>
        </section>
      </section>

      {/* What We Delivered */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          What We Delivered
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Design System
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Tokens, 50+ components, and documentation for seamless design-to-code handoff.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              EV Catalog
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Interactive vehicle explorer with advanced filtering, specs, and comparisons.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Education Platform
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Guides on selection, sustainability, regulations, and industry trends.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Cost Calculator
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Interactive tool for cost estimation and ROI visualization.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              React Components
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Production-ready library with Storybook documentation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Documentation
            </h3>
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Design and development guidelines for consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery - Project Images 1-10 */}
      <section>
        <div className="space-y-8 py-20">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="w-full px-8 md:px-0">
              <div className="w-full md:w-4/5 mx-auto rounded-lg overflow-hidden border border-[var(--color-border)]">
                <img
                  src={`/images/voltex/voltex-${num}.png`}
                  alt={`Copec Voltex Project Image ${num}`}
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact & Results */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          Impact & Results
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-medium mb-6 text-[var(--color-text-primary)]">
              Quantitative Outcomes
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-[var(--color-text-secondary)]">3 mo</span>
                <span className="text-[var(--color-text-tertiary)]">Project delivered on time despite ambitious scope and tight deadline</span>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-[var(--color-text-secondary)]">50%</span>
                <span className="text-[var(--color-text-tertiary)]">Reduction in design-to-development time through modular design system</span>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-[var(--color-text-secondary)]">50+</span>
                <span className="text-[var(--color-text-tertiary)]">Reusable components enabling rapid feature development</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6 text-[var(--color-text-primary)]">
              Qualitative Outcomes
            </h3>
            <ul className="space-y-4 text-[var(--color-text-tertiary)]">
              <li>• <strong className="text-[var(--color-text-primary)]">User Empowerment:</strong> Simplified decision-making for potential EV buyers through intuitive catalog and transparent cost analysis</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Barrier Removal:</strong> Eliminated knowledge gaps through comprehensive educational resources</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Team Alignment:</strong> Daily collaboration ensured seamless design-development partnership</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Foundation Built:</strong> Scalable design system enables future expansion and new features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          Lessons Learned
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              What Worked Well
            </h3>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• <strong className="text-[var(--color-text-primary)]">Daily Collaboration:</strong> Synchronous communication with Product Owner and development team eliminated delays and ensured rapid decision-making</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Modular Approach:</strong> Design system-first methodology accelerated development and ensured consistency</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Tool Selection:</strong> Figma + React + Storybook created a seamless design-to-code pipeline</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Sprint Cadence:</strong> One-week delivery cycles maintained momentum and enabled rapid iteration</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              Areas for Improvement
            </h3>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• <strong className="text-[var(--color-text-primary)]">User Testing:</strong> Allocate more time for comprehensive user testing of the cost calculator tool before launch</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Accessibility:</strong> Plan earlier for WCAG compliance testing and optimization</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Documentation:</strong> Create interactive tutorials for end-users to maximize adoption</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          Conclusion
        </h2>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-[var(--color-text-tertiary)] mb-6">
            The Copec Voltex eMobility Hub demonstrates how a disciplined approach to design systems enables rapid delivery without sacrificing quality or user experience. By combining a modular design system, an intuitive EV catalog, educational resources, and an interactive cost calculator, we created a cohesive platform that removes barriers to sustainable transportation adoption.
          </p>

          <p className="text-lg text-[var(--color-text-tertiary)] mb-6">
            Delivered in just 3 months with a 50% reduction in design-to-development time, the project exemplifies the power of collaboration, alignment, and iterative development. Daily validation meetings and one-week sprint cycles kept the team synchronized and ensured we shipped features that truly met user needs.
          </p>

          <p className="text-lg text-[var(--color-text-tertiary)]">
            As Head of Product Design and Design System Manager, I led the creation and implementation of the design system that powered this platform, delivering a cohesive, scalable solution aligned with Copec Voltex's mission to drive sustainable transportation forward.
          </p>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22 border-t border-[var(--color-border)]">
        <RelatedProjects current="/copec-voltex" />
      </section>
    </>
  );
}
