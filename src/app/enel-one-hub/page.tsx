import { Metadata } from "next";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Carlos Baeza - Enel One Hub",
};

export default function EnelOneHubPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enel One Hub</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            One of the main global operators in the sector of electricity, gas
            and integrated services
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            One Hub was a global project to unify all Enel&apos;s websites,
            applying their new visual language according to the product vision,
            strategy, and user needs.
          </p>
        </header>

        {/* Methodology & Deliverables */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Methodology &amp; Deliverables
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Interviews and workshops with stakeholders and end users
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Mapping of current sitemaps by country
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Ecosystem website
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Customer Journeys
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Reports (Segmentation, functionalities, contents)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Unified sitemaps by country
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              High fidelity mockups with global guidelines
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Prototypes for smartphones, tablet and desktop
            </li>
          </ul>
        </section>

        {/* Sections */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Interviews in Chile/Peru and Argentina/Colombia
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Conducted in-depth interviews with stakeholders and end users across
            multiple Latin American markets to understand regional needs,
            cultural nuances and digital maturity levels that would inform the
            unified platform design.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Chile Sitemap
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Mapped the complete information architecture of Enel Chile&apos;s
            website, identifying content overlaps, navigation gaps and
            opportunities for streamlining the user experience across public and
            private areas.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Hotspots</h2>
          <p className="text-gray-300 leading-relaxed">
            Analyzed user interaction heatmaps and click data to identify
            critical hotspots, understanding where users focused their attention
            and which areas of the interface required optimization.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Personas Chile
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Developed detailed user personas for the Chilean market based on
            research findings, capturing key demographics, motivations, pain
            points and digital behaviors to guide design decisions.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Screens of Private/Public Area
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Designed high-fidelity screens for both the public-facing website and
            the authenticated private area, ensuring a cohesive visual language
            while addressing distinct user goals in each context.
          </p>
        </section>

        {/* My Responsibilities */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            My Responsibilities
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Senior UX/UI Designer
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Led public/private transactional area
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Defined functionalities and user flows
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Built relationships with Latin American and Italian stakeholders
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Metrics analysis, GA, Hotjar, research and prototyping
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Created design system for private area
            </li>
          </ul>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Tools</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Sketch (Craft + Runner + Anima Toolkit + Paddy)
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Abstract
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Invision
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Google Slide
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Google Docs
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Avaza
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Draw.io
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Basecamp
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Smaply
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Principle
            </span>
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/enel-one-hub" />
      </div>
    </div>
  );
}
