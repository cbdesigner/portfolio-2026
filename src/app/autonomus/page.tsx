import { Metadata } from "next";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Carlos Baeza - Autonomus",
};

export default function AutonomusPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Autonomus</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            A digital platform that transport and accompany older adults in all
            their daily activities. From visits to the doctor, shopping, visiting
            friends, to family reunions.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Autonomus was a project financed by G&uuml;il a Venture Studio for
            Mobility Startups.
          </p>
        </header>

        {/* Role & Responsibilities */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            My Role &amp; Responsibilities
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I was in charge of Product Design, working closely with the CEO,
              Sales, Operations, Agile and Growth Marketing teams. My goal was
              to create an Uber-like experience tailored for seniors, ensuring
              accessibility, simplicity and trust throughout the entire user
              journey.
            </p>
          </div>
        </section>

        {/* Subsections */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            App for Caregiver and Senior
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Designed the mobile application experience for both caregivers and
            seniors, focusing on ease of use, large touch targets, clear
            typography and intuitive navigation to accommodate users of all
            digital literacy levels.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Back Office for Sales, Operations and Support
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Created the internal back office platform used by Sales, Operations
            and Support teams to manage rides, monitor service quality, handle
            customer inquiries and track key performance metrics.
          </p>
        </section>

        {/* Methodology & Deliverables */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Methodology &amp; Deliverables
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Workshop with Operations and Sales Stakeholders for Service Blue
              Print and Diagram Flows
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Sitemaps of apps, Back Office, Public Website
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              App Map Screens
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Design System with variables in Figma
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Users Flows in Figma
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Daily meetings and scrum ceremonies
            </li>
          </ul>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Tools</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Figma + Figjam
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Mir&oacute;
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Relume
            </span>
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Webflow
            </span>
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/autonomus" />
      </div>
    </div>
  );
}
