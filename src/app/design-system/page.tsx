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
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
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
          <div className="mt-8 mb-4">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/84fea897-f6e2-4276-ba5a-80e209da103f_rw_1920.jpg?h=81ff2abc9d2e4e9c32b52857d8d54386" alt="Design System journey" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </header>

        {/* Journey Beginning */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
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
          <div className="mt-6 max-w-[67%] mx-auto">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/25825197-c473-4a76-bb01-401ddedcd0fb_rw_1920.png?h=3dcd06bb65a20695a3cd2c17815ca682" alt="Atomic Design book by Brad Frost" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        {/* 2018-2019 */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">2018 - 2019</h2>
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
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
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
          <div className="mt-6 max-w-[67%] mx-auto">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/cb5feb94-e5be-42aa-8cb9-7acc0760afb9_rw_1920.png?h=130d7524717101f2df6a053a7f4047cf" alt="Design System with Tokens Studio" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
          <div className="mt-8 max-w-[67%] mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '85%' }}>
              <iframe
                className="absolute inset-0 w-full h-full border-0"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7rLDEvWaijCmlCDsrg8FYJ%2FAtomic-Design-System-Multibranding(Agnostic)-with-Tokens%252FVariables%3Ftype%3Dwhiteboard%26node-id%3D2%253A2057%26t%3DEmCIvj7kDxq0MtW7-1"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Multibranding Design System with Variables */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
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
          <div className="mt-6 max-w-[67%] mx-auto">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/3a7b452f-b341-4e72-b0e7-743a6456924c_rw_1920.png?h=0bd1f99d2ffb6032ab3a7022b33f50d2" alt="Multibranding Design System with Variables" className="w-full h-auto rounded-lg" loading="lazy" />
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
          <h2 className="font-heading text-2xl font-bold mb-4">Tools</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-900 rounded-full text-sm text-gray-300 font-mono">
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
