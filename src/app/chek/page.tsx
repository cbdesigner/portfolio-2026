"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import RelatedProjects from "@/components/RelatedProjects";
import JsonLd from "@/components/JsonLd";

export default function ChekPage() {
  const { t } = useLanguage();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Chek Digital Wallet — Banco Ripley Case Study",
          url: "https://portfolio-2026-3cva.onrender.com/chek",
          description:
            "800K+ users. Digital wallet democratizing banking in Chile and Peru. Led UX strategy, design system, and team for Chek Personas, Comercios, and web platforms.",
          image: "https://portfolio-2026-3cva.onrender.com/opengraph-image",
          inLanguage: ["en", "es"],
        }}
      />

      {/* 1. Hero / Header */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="mb-6">
          <span className="text-sm font-medium text-[var(--color-text-secondary)] tracking-wide uppercase">
            {t.caseStudy}
          </span>
        </div>
        <h1 className="font-heading text-display-lg tracking-display mb-6">
          Chek Digital Wallet
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-4 max-w-3xl">
          Democratizing Banking in Chile and Peru
        </p>
        <p className="text-lg text-[var(--color-text-tertiary)] max-w-4xl">
          Led comprehensive UX strategy, design system architecture, and team leadership for Chek—a digital wallet serving 800K+ users across three mobile and web platforms. Enabled unbanked Chileans and foreigners to access banking services, sell without commission, and transact with zero maintenance fees.
        </p>
      </section>

      {/* 2. Project Overview */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              {t.projectMetadata.client}
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Banco Ripley
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              {t.projectMetadata.role}
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              UX Lead & Design Manager
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              {t.projectMetadata.timeline}
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Dec 2019 — 2020+
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
              {t.projectMetadata.techStack}
            </h3>
            <p className="text-lg text-[var(--color-text-primary)]">
              Ionic, Figma, Maze
            </p>
          </div>
        </div>
      </section>

      {/* 3. Challenge & Opportunity */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-display-sm tracking-display mb-6">
              {t.sectionHeaders.theChallenge}
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-6">
              Chile and Peru had millions of unbanked citizens and foreigners without access to digital financial services. Traditional banking had high friction, required paperwork, and charged transaction fees. SMEs and entrepreneurs lacked affordable payment solutions.
            </p>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• 40% unbanked population in target markets</li>
              <li>• SMEs paying 2-3% commissions on digital payments</li>
              <li>• Zero self-service banking options for foreigners</li>
              <li>• High barriers to digital wallet adoption</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-display-sm tracking-display mb-6">
              {t.sectionHeaders.theOpportunity}
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-6">
              Create a zero-cost digital wallet accessible to all, enabling peer-to-peer payments, QR-based transactions, and commission-free commerce. Leverage Banco Ripley's regulatory backing and brand trust to democratize banking.
            </p>
            <ul className="space-y-3 text-[var(--color-text-tertiary)]">
              <li>• Zero transaction fees and maintenance costs</li>
              <li>• Frictionless onboarding with facial recognition</li>
              <li>• Multi-platform strategy (Personas, Comercios, Web)</li>
              <li>• Regulated and backed by established bank</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Approach */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.sectionHeaders.methodologyApproach}
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="font-heading text-display-sm tracking-display mb-4">
              UX Research & Discovery
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-4 max-w-3xl">
              Conducted extensive user research across target segments: unbanked citizens, SME owners, and informal merchants. Used card sorting, UX benchmarking, and guerrilla testing to validate product direction.
            </p>
            <ul className="space-y-2 text-[var(--color-text-tertiary)] max-w-3xl">
              <li>• In-person and remote moderated testing with 50+ participants</li>
              <li>• Competitive analysis of regional payment apps</li>
              <li>• Accessibility testing for low-tech users</li>
              <li>• Smartphone and desktop prototyping</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-display-sm tracking-display mb-4">
              Design System & Scalability
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-4 max-w-3xl">
              Built a unified design system in Figma to maintain consistency across Personas (Ionic Android/iOS), Comercios (PWA), and web platforms. Enabled rapid iteration and handed off specs to development teams.
            </p>
            <ul className="space-y-2 text-[var(--color-text-tertiary)] max-w-3xl">
              <li>• Figma Auto Layout for responsive components</li>
              <li>• Design tokens for banking security patterns</li>
              <li>• Component library for Personas and Comercios</li>
              <li>• Mockups and prototypes for stakeholder alignment</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-display-sm tracking-display mb-4">
              Agile & Cross-Functional Leadership
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-4 max-w-3xl">
              Implemented UX in Scrum, coordinating with engineering, product, and growth teams across Chile and Peru. Taught collaborative design methodologies and integrated Miró with Jira for distributed PI planning.
            </p>
            <ul className="space-y-2 text-[var(--color-text-tertiary)] max-w-3xl">
              <li>• UX ceremonies in sprint cadence</li>
              <li>• Mentoring designers and frontend developers</li>
              <li>• Cross-site collaboration (Santiago, Lima)</li>
              <li>• Growth marketing alignment and A/B testing support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. What We Delivered */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.sectionHeaders.whatWeDelivered}
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="font-heading text-display-sm tracking-display mb-4">
              Chek Personas (Mobile App)
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-4">
              iOS and Android app built with Ionic. Available on App Store and Play Store with 4.5★ ratings. Core features:
            </p>
            <ul className="space-y-2 text-[var(--color-text-tertiary)]">
              <li>• Send & collect money via QR code or contact</li>
              <li>• Split bills (equal or custom amounts)</li>
              <li>• NFC contactless payments at partner stores</li>
              <li>• Facial recognition identity validation</li>
              <li>• Multi-bank card linking</li>
              <li>• Balance management and transaction history</li>
              <li>• Exclusive retailer discounts (Ripley)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-display-sm tracking-display mb-4">
              Chek Comercios (Business PWA)
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-4">
              Responsive PWA built with Ionic for SMEs and large enterprises. Core features:
            </p>
            <ul className="space-y-2 text-[var(--color-text-tertiary)]">
              <li>• Zero-commission merchant setup (no paperwork)</li>
              <li>• Real-time transaction reporting</li>
              <li>• Dynamic QR code generation</li>
              <li>• Instant fund withdrawal to bank account</li>
              <li>• Branch and collaborator management</li>
              <li>• Tip collection and day closing</li>
              <li>• Tax authority validation (SII)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-display-sm tracking-display mb-4">
              Web Platform & Developer Integration
            </h3>
            <p className="text-[var(--color-text-tertiary)] mb-4">
              Built informational website, help center, store locator, and developer portal for enterprise integration. Features:
            </p>
            <ul className="space-y-2 text-[var(--color-text-tertiary)]">
              <li>• Product benefits and app download links</li>
              <li>• Self-service help center</li>
              <li>• Map of 800K+ associated partner stores</li>
              <li>• Developer docs and API integration</li>
              <li>• Jumpseller e-commerce plugin</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Gallery / Impact */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.sectionHeaders.impactResults}
        </h2>
        <div className="space-y-6 text-[var(--color-text-tertiary)] leading-relaxed">
          <div>
            <h3 className="font-heading text-display-sm tracking-display mb-3">
              User Growth & Adoption
            </h3>
            <p>
              Launched December 2019 and grew to 800K+ users within months. 4.5★ ratings on both App Store and Play Store demonstrate strong product-market fit and user satisfaction.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-display-sm tracking-display mb-3">
              Market Impact
            </h3>
            <p>
              Enabled 40% of previously unbanked population to access digital financial services. Zero transaction fees democratized banking and removed barriers for SMEs and informal merchants.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-display-sm tracking-display mb-3">
              Team & Organizational Growth
            </h3>
            <p>
              Built and mentored design team across Chile and Peru. Established UX methodology for entire Banco Ripley organization. Defined collaborative practices (Miró, Jira integration) now adopted company-wide.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-display-sm tracking-display mb-3">
              Regulatory & Strategic Value
            </h3>
            <p>
              Positioned Banco Ripley as fintech innovator under SBIF regulation. Established enterprise integration path through developer APIs and Jumpseller partnership, enabling B2B expansion.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Lessons Learned */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.sectionHeaders.lessonsLearned}
        </h2>
        <div className="space-y-6 text-[var(--color-text-tertiary)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-text-primary)]">Design systems are prerequisite for scale:</strong> Building Chek's design system early enabled rapid iteration across three platforms and 27+ team members without quality degradation.
          </p>
          <p>
            <strong className="text-[var(--color-text-primary)]">Financial UX requires accessibility focus:</strong> Target users ranged from highly tech-savvy to low-tech seniors. Facial recognition onboarding and simple QR flows were critical for adoption.
          </p>
          <p>
            <strong className="text-[var(--color-text-primary)]">Cross-site collaboration needs intentional structure:</strong> Distributed teams across Santiago and Lima required invested ceremony (Miró whiteboarding, PI planning). Building that infrastructure paid dividends.
          </p>
          <p>
            <strong className="text-[var(--color-text-primary)]">Research with real users in context beats moderation:</strong> Guerrilla testing at partner stores revealed payment friction we would have missed in labs. In-context observation proved invaluable.
          </p>
        </div>
      </section>

      {/* 8. Conclusion */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-8">
          {t.sectionHeaders.conclusion}
        </h2>
        <p className="text-[var(--color-text-tertiary)] leading-relaxed max-w-4xl">
          Chek demonstrates the impact of thoughtful UX strategy applied to a mission-driven product. By combining rigorous research, scalable design systems, and cross-functional leadership, we built a financial service that reached 800K+ users and fundamentally changed how unbanked populations access banking in Chile and Peru. The project validated that user-centered design, when paired with regulatory credibility and zero-friction onboarding, can democratize financial access at scale.
        </p>
      </section>

      {/* 9. Tools */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <h2 className="font-heading text-display-md tracking-display mb-6">
          {t.tools}
        </h2>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Figma
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Ionic
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Maze
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Miró
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Jira
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Firebase
          </span>
          <span className="px-4 py-2 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] font-mono">
            Whimsical
          </span>
        </div>
      </section>

      {/* 10. Related Projects */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <RelatedProjects current="/chek" />
      </section>
    </>
  );
}
