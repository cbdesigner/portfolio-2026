import { Metadata } from "next";
import Image from "next/image";
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

        {/* Hero Image */}
        <div className="mt-6 mb-4">
          <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/de6dc1e6-bcbb-406f-adee-b47964a84e1a_rw_1920.jpg?h=dbbe0459472647b26d29d389d11477da" alt="Enel One Hub" width={1920} height={1080} className="w-full h-auto rounded-lg" />
        </div>

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
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/1095788a-2ad7-4262-889b-2ca483c20d9c_rw_1920.png?h=7ab54143df1a54a60ad316238727277a" alt="Interviews Chile and Peru" width={1920} height={1080} className="w-full h-auto rounded-lg" />
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/2f5c8c4f-2f84-4a17-b212-82c8e25dc90b_rw_1920.png?h=80e6c7018de1c60c3d5186894969ea3e" alt="Interviews Chile and Peru - workshops" width={1920} height={1080} className="w-full h-auto rounded-lg" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Argentina and Colombia
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/92feab37-cf17-45dd-ab67-ad7decc8b60b_rw_1920.png?h=943dc38eea792769f201d9f16b24fa6e" alt="Argentina workshops" width={1920} height={1080} className="w-full h-auto rounded-lg" />
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/80a69530-7f55-4ee3-ab5e-58fbb81a4e50_rw_1920.png?h=77067dc703df2f3e2a934e60b5bff6e1" alt="Colombia workshops" width={1920} height={1080} className="w-full h-auto rounded-lg" />
          </div>
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
          <div className="mt-6 mb-4">
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/689d0786-f321-4a4c-9114-47e5a9389f1b_rw_1920.jpg?h=0a90d0e93f3ca19c1aa02c7b0e68e46e" alt="Chile Sitemap with all sites unified" width={1920} height={1080} className="w-full h-auto rounded-lg" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Hotspots</h2>
          <p className="text-gray-300 leading-relaxed">
            Analyzed user interaction heatmaps and click data to identify
            critical hotspots, understanding where users focused their attention
            and which areas of the interface required optimization.
          </p>
          <div className="mt-6 mb-4">
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/711a3f8e-b0b0-4e62-85f5-d5dc0f6c1f45_rw_1920.png?h=3d10b17950714ca7b9ba72e71a6e8f86" alt="Hotspots of Private Area Personas Chile" width={1920} height={1080} className="w-full h-auto rounded-lg" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Some screens of Private Area for Personas
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Developed detailed user personas for the Chilean market based on
            research findings, capturing key demographics, motivations, pain
            points and digital behaviors to guide design decisions.
          </p>
          <div className="mt-6 mb-4">
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/3c01aa27-85a3-48f8-bb4c-47e693587aff_rw_1920.jpg?h=0a112cb07dcab423e5f936b89882df8d" alt="Private Area Personas screens" width={1920} height={1080} className="w-full h-auto rounded-lg" />
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/1c8f5170-7ed0-4a81-bc09-89508247421d_rw_1920.jpg?h=949c8f6461169f350248ac1ff2d95190" alt="Private Area Personas screens" width={1920} height={1080} className="w-full h-auto rounded-lg" />
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/68eaa859-0db0-4ac5-916d-8ed63f26069f_rw_1920.jpg?h=20c31c3e025ba81ae10bd9787eef795c" alt="Private Area Personas screens" width={1920} height={1080} className="w-full h-auto rounded-lg" />
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/31c5f970-38df-4715-b534-971eb2257c21_rw_1920.jpg?h=fa9eed76ba64ab796bb08eb7dfd51384" alt="Private Area Personas screens" width={1920} height={1080} className="w-full h-auto rounded-lg" />
          </div>
          <div className="mt-6 mb-4">
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/4cddf3c6-96a4-4255-8b27-12704b9eb724_rw_1920.jpg?h=700f509bda7273c6b170a49bd351fdfe" alt="Private Area screens" width={1920} height={1080} className="w-full h-auto rounded-lg" />
          </div>
          <div className="mt-6 mb-4">
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/6359bbdd-d6a3-4a42-8fc5-15cd4fd5e8e0_rw_1920.jpg?h=222cdeb245ffb409f8fb8969a3f477f0" alt="Private Area screens detail" width={1920} height={1080} className="w-full h-auto rounded-lg" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Screen of Public Area Personas
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Designed high-fidelity screens for both the public-facing website and
            the authenticated private area, ensuring a cohesive visual language
            while addressing distinct user goals in each context.
          </p>
          <div className="mt-6 mb-4">
            <Image src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/d17e4048-0bf7-4fc2-9dcb-0c14dac652f4_rw_1920.png?h=fbb981cbed23d6d213a3c0af8d79002c" alt="Public Area Personas screen" width={1920} height={1080} className="w-full h-auto rounded-lg" />
          </div>
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
