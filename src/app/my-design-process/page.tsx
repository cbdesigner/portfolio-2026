import { Metadata } from "next";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Carlos Baeza - My Design Process",
};

export default function MyDesignProcessPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My Design Process
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            I follow a structured but flexible design process that centers
            around the UX Double Diamond framework.
          </p>
          <p className="text-xl md:text-2xl text-gray-400">
            Discover, Define, Develop and Deliver.
          </p>
        </header>

        <section className="mb-16">
          <div className="relative w-full max-w-[1200px] mx-auto" style={{ paddingBottom: '70.83%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnUOuhUu3jSBsp4QfOTbZt7%2FDouble-Diamond-%253CR%253E%253CD%253E-for-Product-Strategy-%2526-Product-Development%3Fpage-id%3D0%253A1%26node-id%3D0-1%26viewport%3D-75%252C-1642%252C0.28%26t%3D3LqySr5TXLwABpuq-1%26scaling%3Dcontain%26starting-point-node-id%3D604%253A12035%26content-scaling%3Dfixed"
              allowFullScreen
            />
          </div>
        </section>

        {/* Discover */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Discover</h2>

          <h3 className="text-lg font-semibold text-gray-200 mb-3">
            Activities
          </h3>
          <ul className="space-y-3 text-gray-300 leading-relaxed mb-8">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              User research (interviews, surveys, observational studies)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Stakeholder interviews
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Analyze analytics data
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Content audit
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-200 mb-3">
            Deliverables
          </h3>
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Research report
            </li>
          </ul>

          <div className="mt-8">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/45df7e50-c493-463a-835c-2ab98409ebc8_rw_1920.jpg?h=42d4ed746449db9a3dc915315b080e02" alt="Discover phase" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        {/* Define */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Define</h2>

          <h3 className="text-lg font-semibold text-gray-200 mb-3">
            Activities
          </h3>
          <ul className="space-y-3 text-gray-300 leading-relaxed mb-8">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              User personas
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              User journey maps
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Affinity mapping
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Problem statement
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-200 mb-3">
            Deliverables
          </h3>
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Design brief
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Service blueprint
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              User stories
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              MoSCoW prioritization
            </li>
          </ul>

          <div className="mt-8">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/504d30e8-ae01-4b18-b77b-1e51a501c090_rw_1920.jpg?h=1a7571a686fb5d46dcaf1d8314855f88" alt="Define phase" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        {/* Develop */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Develop</h2>

          <h3 className="text-lg font-semibold text-gray-200 mb-3">
            Activities
          </h3>
          <ul className="space-y-3 text-gray-300 leading-relaxed mb-8">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Sketches and wireframes
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Low-fidelity prototypes
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Usability testing
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Feature Prioritization Map
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-200 mb-3">
            Deliverables
          </h3>
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Sitemap
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Iterate based on feedback
            </li>
          </ul>

          <div className="mt-8">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/2e0b3c9f-a25e-4668-b526-65aa516b8ebd_rw_1920.jpg?h=172424bc484d9ffb6ae6eccaee7c7fe1" alt="Develop phase" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        {/* Deliver */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Deliver</h2>

          <h3 className="text-lg font-semibold text-gray-200 mb-3">
            Activities
          </h3>
          <ul className="space-y-3 text-gray-300 leading-relaxed mb-8">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              High-fidelity prototypes
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Final usability testing
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Design specifications and guidelines
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Implementation planning
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-200 mb-3">
            Deliverables
          </h3>
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Post-launch monitoring
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 text-xs">&#9679;</span>
              Finalize product
            </li>
          </ul>

          <div className="mt-8">
            <img src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/da8fa13b-6a64-42bb-ada9-920d36fbce72_rw_1920.jpg?h=6cd6d79780a30201ccab450bd1eae191" alt="Deliver phase" className="w-full h-auto rounded-lg" loading="lazy" />
          </div>
        </section>

        {/* Summary */}
        <section className="mb-16">
          <p className="text-gray-300 leading-relaxed text-lg">
            My design process emphasizes a user-centric approach, iterative
            testing, and collaboration across all stages of product development.
            By combining structured methodologies with adaptive thinking, I
            ensure that design decisions are grounded in real user needs and
            validated through continuous feedback loops.
          </p>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/my-design-process" />
      </div>
    </div>
  );
}
