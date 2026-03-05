import { Metadata } from "next";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Carlos Baeza - Design System",
};

export default function DesignSystemPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Design System
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            A journey in the field of Design Systems a constant search for
            excellence and efficiency
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            From my initial exploration of Atomic Design Systems with Token
            Studio to my advanced work with Multibranding Design Systems with
            Variables, I&apos;ve continually expanded my expertise in design
            systems.
          </p>
        </header>

        {/* Journey Beginning */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Journey beginning
          </h2>
          <p className="text-gray-300 leading-relaxed">
            My journey into Design Systems started in 2016, when I began
            investigating personally on my own time. The book{" "}
            <span className="text-white font-semibold italic">
              &ldquo;Atomic Design&rdquo;
            </span>{" "}
            by Brad Frost became a foundational reference that shaped my
            understanding of modular, scalable design architectures.
          </p>
        </section>

        {/* 2018-2019 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">2018 - 2019</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I applied my knowledge at an Italian design firm, working on the
              Enel Italia design system in Adobe XD. During this period I also
              worked with Google Material Design using Sketch and Abstract,
              deepening my understanding of component-based design at scale.
            </p>
            <p>
              In 2019, I started at Banco Ripley as UX Lead at Chek, where I
              continued using Material Design as the foundation for building
              consistent and accessible user experiences across their digital
              products.
            </p>
          </div>
        </section>

        {/* Design System with Tokens Studio */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Design System with Tokens Studio
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              A pivotal moment came when I discovered a masterclass by Marcelo
              Paiva on Design Systems with Tokens. This led me to build my first
              Multibranding Design System with Tokens and Auto Layout, bringing
              a new level of flexibility and consistency to my design workflows.
            </p>
            <p>
              I was promoted to Corporate UX Manager at Banco Ripley Chile and
              Peru, where the design system was used across various platforms:
              the PWA app, Public Website, Seguros Ripley, Backoffice, and
              Customer Service Kiosks. I coordinated around 27 specialists,
              evangelizing the design system capability, creating workflows, and
              establishing OKRs to measure adoption and impact.
            </p>
          </div>
        </section>

        {/* Multibranding Design System with Variables */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Multibranding Design System with variables
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I then joined Autonomus, a startup focused on mobility for
              seniors. Here I built a Multibranding Design System with Variables,
              leveraging Figma&apos;s latest improvements to create a highly
              adaptable system.
            </p>
            <p>
              This design system was used for the backoffice platform and an
              Uber-like app tailored for elderly users and their caregivers,
              ensuring accessibility and ease of use were at the forefront of
              every design decision.
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-16">
          <p className="text-gray-300 leading-relaxed text-lg">
            This journey through Design Systems has been one of continuous
            learning and evolution, from foundational principles of Atomic Design
            to building scalable, multi-brand systems using tokens and variables.
            Each step has strengthened my ability to create efficient,
            consistent, and adaptable design architectures that serve both users
            and development teams.
          </p>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Tools</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300">
              Figma
            </span>
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/design-system" />
      </div>
    </div>
  );
}
