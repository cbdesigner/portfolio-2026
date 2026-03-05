import { Metadata } from "next";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Carlos Baeza - UX Strategy",
};

const areas = [
  { number: 1, name: "Strategy" },
  { number: 2, name: "Enterprise" },
  { number: 3, name: "Team" },
  { number: 4, name: "Operations" },
  { number: 5, name: "Experience" },
];

export default function UXStrategyPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UX Strategy</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            As a UX Manager, I implement a UX strategy in five key areas, lead
            design teams, and build design capabilities for companies.
          </p>
        </header>

        {/* Five Key Areas */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Five Key Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div
                key={area.number}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-600 transition-colors"
              >
                <span className="text-4xl font-bold text-white mb-3">
                  {area.number}
                </span>
                <span className="text-lg text-gray-300 font-medium">
                  {area.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/ux-strategy" />
      </div>
    </div>
  );
}
