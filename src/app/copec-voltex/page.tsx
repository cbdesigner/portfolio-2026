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
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22">
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
        <p className="text-lg text-[var(--color-text-tertiary)] max-w-3xl">
          Building a cohesive platform to drive sustainable transportation adoption. A modular design system powering an electric vehicle catalog, educational resources, and cost calculator—delivered in 3 months with 50% reduction in design-to-development time.
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
              Copec Voltex faced a critical gap in the market: there was no centralized, user-friendly platform educating consumers about electric vehicle ownership, comparing options, and calculating true ownership costs.
            </p>
            <p className="text-[var(--color-text-tertiary)] mb-6">
              The core problems:
            </p>
            <ul className="space-y-2 text-[var(--color-text-tertiary)]">
              <li>• No unified platform for EV education and comparison</li>
              <li>• Users lacked accessible tools to evaluate EV ownership costs</li>
              <li>• Scattered, inconsistent information about electromobility</li>
              <li>• High friction between design and development teams</li>
              <li>• Risk of missing tight 3-month project deadline</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-display-sm tracking-display mb-4">
              The Opportunity
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-4">
              Create a cohesive eMobility platform that combines design excellence with development speed, removing barriers to EV adoption through intuitive tools and transparent information.
            </p>
            <p className="text-[var(--color-text-tertiary)] mb-6">
              What was needed:
            </p>
            <ul className="space-y-2 text-[var(--color-text-tertiary)]">
              <li>• Modular design system for rapid development</li>
              <li>• Scalable component architecture (React + Storybook)</li>
              <li>• Unified visual language across three distinct features</li>
              <li>• One-week sprint delivery cadence</li>
              <li>• Foundation for future expansion and localization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22 border-t border-[var(--color-border)]">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Client
            </h3>
            <p className="text-[var(--color-text-primary)] text-lg">
              Copec Voltex
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Role
            </h3>
            <p className="text-[var(--color-text-primary)] text-lg">
              Head of Product Design / Design System Manager
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              Timeline
            </h3>
            <p className="text-[var(--color-text-primary)] text-lg">
              3 Months
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-4">
              Technology Stack
            </h3>
            <ul className="space-y-2 text-[var(--color-text-tertiary)]">
              <li><strong className="text-[var(--color-text-primary)]">Design:</strong> Figma</li>
              <li><strong className="text-[var(--color-text-primary)]">Development:</strong> React JS, Storybook</li>
              <li><strong className="text-[var(--color-text-primary)]">Process:</strong> One-week sprint delivery</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-4">
              Collaboration
            </h3>
            <ul className="space-y-2 text-[var(--color-text-tertiary)]">
              <li>• Product Owner (daily validation meetings)</li>
              <li>• Abstract (development partner)</li>
              <li>• Technical Lead & Software Engineer</li>
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
          {/* Discovery Phase */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              1. Discovery & Alignment
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-8">
              We began with deep user research and stakeholder interviews to understand Copec Voltex's goals, user needs, and the competitive landscape of eMobility platforms. This informed every design decision.
            </p>
            <ul className="space-y-3 text-[var(--color-text-tertiary)] mb-8">
              <li>• <strong className="text-[var(--color-text-primary)]">User Research:</strong> Interviews with potential EV buyers to understand decision-making processes and pain points</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Stakeholder Alignment:</strong> Daily meetings with Product Owner to validate vision and priorities</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Competitive Audit:</strong> Analyzed existing resources to ensure Copec Voltex's platform would stand out</li>
            </ul>
          </div>

          {/* Design System */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              2. Modular Design System
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-8">
              Built a scalable, reusable design system in Figma emphasizing modularity. This foundation enabled rapid iteration and consistent experience across three distinct platform features.
            </p>
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)] mb-8">
              <img
                src="/images/voltex/0fdbc23c-70f5-4b80-aeac-0a62d016169f_rw_1920.png"
                alt="Copec Voltex Design System — Components, tokens, and design patterns"
                className="w-full"
                loading="lazy"
              />
            </div>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• <strong className="text-[var(--color-text-primary)]">Design Tokens:</strong> Semantic color, spacing, and typography variables for consistency</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Component Library:</strong> 50+ reusable components with adaptive variants</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Documentation:</strong> Comprehensive guidelines for both design and development teams</li>
            </ul>
          </div>

          {/* EV Catalog */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              3. Electric Vehicle Catalog
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-8">
              Designed an intuitive EV catalog allowing users to explore and compare electric vehicles. Advanced filtering by price, range, and brand helps users find the perfect EV for their needs.
            </p>
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
              <img
                src="/images/voltex/05108844-6000-4f0e-a03e-20352d3a0e79_rw_1920.png"
                alt="EV Catalog — Electric vehicle explorer with filtering and detailed specs"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              4. Educational Resources
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-8">
              Built a dedicated education section covering key topics: choosing the right EV, sustainability benefits, regulations, and electromobility trends. This removes knowledge barriers to adoption.
            </p>
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
              <img
                src="/images/voltex/e019b36d-92df-4e20-84e9-b178884b01e7_rw_1920.png"
                alt="Education Section — Resources on EV ownership, sustainability, and regulations"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Cost Calculator */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              5. ROI Cost Calculator
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-8">
              Created an interactive tool that helps users calculate true EV ownership costs and visualize long-term savings. This turns abstract sustainability benefits into concrete financial arguments.
            </p>
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
              <img
                src="/images/voltex/2d9fc2e8-d729-4e64-97aa-61697ba2d190_rw_1920.png"
                alt="Cost Calculator — Ownership cost estimation and ROI visualization"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Development Process */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--color-text-primary)]">
              6. Agile Development & Continuous Validation
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-8">
              Followed a one-week sprint delivery model with daily validation meetings. This rapid iteration ensured alignment and enabled quick pivots based on feedback.
            </p>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• <strong className="text-[var(--color-text-primary)]">Daily Standups:</strong> Product Owner, design, and engineering stayed synchronized</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Weekly Releases:</strong> Sprint-based delivery of new features and improvements</li>
              <li>• <strong className="text-[var(--color-text-primary)]">Continuous Testing:</strong> User feedback informed each iteration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-22 border-t border-[var(--color-border)]">
        <h2 className="font-heading text-display-md tracking-display mb-12">
          Key Deliverables
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-[var(--color-border)]">
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Design System
            </h3>
            <p className="text-[var(--color-text-tertiary)]">
              Scalable, reusable design system in Figma with tokens, components, and comprehensive documentation for seamless design-to-development handoff.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-[var(--color-border)]">
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              EV Catalog
            </h3>
            <p className="text-[var(--color-text-tertiary)]">
              Interactive electric vehicle catalog with advanced filtering (price, range, brand), detailed specifications, and comparison features.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-[var(--color-border)]">
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Education Platform
            </h3>
            <p className="text-[var(--color-text-tertiary)]">
              Comprehensive resource center covering EV selection, sustainability, regulations, and electromobility trends to educate users.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-[var(--color-border)]">
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              ROI Calculator
            </h3>
            <p className="text-[var(--color-text-tertiary)]">
              Interactive cost estimation tool enabling users to calculate ownership costs and visualize long-term savings vs. traditional vehicles.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-[var(--color-border)]">
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              React Components
            </h3>
            <p className="text-[var(--color-text-tertiary)]">
              Production-ready component library in React with Storybook documentation, enabling rapid feature development and consistency.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-[var(--color-border)]">
            <h3 className="text-lg font-medium mb-3 text-[var(--color-text-primary)]">
              Documentation
            </h3>
            <p className="text-[var(--color-text-tertiary)]">
              Comprehensive design and development guidelines, ensuring seamless collaboration and consistent implementation across teams.
            </p>
          </div>
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
        <RelatedProjects />
      </section>
    </>
  );
}
