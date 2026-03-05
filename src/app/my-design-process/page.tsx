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
