import { Metadata } from "next";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Carlos Baeza - Transforming the Digital Experience at Banco Ripley",
};

export default function BancoRipleyPage() {
  return (
    <article className="bg-black text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-mono">
          Case Study
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Transforming the Digital Experience at Banco Ripley
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          From Lead UX to UX Manager
        </p>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Discover how effective design management and a user-centered approach
          drove innovation during my time at Banco Ripley.
        </p>
        <div className="mt-8 mb-4">
          <img
            src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/7d478cfe-4942-4e14-b5fb-4f27db3fcadc_rw_1920.jpg?h=6fb9d00d354d1b4ef2e47ddd88ae5068"
            alt="From Lead UX to UX Manager at Banco Ripley"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* Section 1 - UX Lead */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
          Let&apos;s start from the beginning as a UX Lead...
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            In August 2019, I was hired as UX Lead by Banco Ripley for their
            digital wallet <strong className="text-white">Chek</strong>. Chek is
            a 100% digital account with the ambition to become a fully digital
            bank. In this role, I supported different areas: Marketing, Legal,
            Development, Product and Growth, and Ripley&apos;s retail branch.
          </p>
        </div>

        {/* Chek Ecosystem */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8">Chek Ecosystem</h3>

          <div className="space-y-8">
            <div className="border-l-2 border-gray-700 pl-6">
              <h4 className="text-xl font-semibold text-white mb-2">
                Chek Personas App
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Transfers, payments via QR, deposits, and bill splitting.
              </p>
            </div>

            <div className="border-l-2 border-gray-700 pl-6">
              <h4 className="text-xl font-semibold text-white mb-2">
                Chek Comercios App
              </h4>
              <p className="text-gray-300 leading-relaxed">
                100% digital, no POS needed, no commission, and business
                management capabilities.
              </p>
            </div>

            <div className="border-l-2 border-gray-700 pl-6">
              <h4 className="text-xl font-semibold text-white mb-2">
                Websites
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Promote products and services with Help Centers.
              </p>
            </div>

            <div className="border-l-2 border-gray-700 pl-6">
              <h4 className="text-xl font-semibold text-white mb-2">
                Developers Website
              </h4>
              <p className="text-gray-300 leading-relaxed">
                eCommerce integrations for developers.
              </p>
            </div>

            <div className="border-l-2 border-gray-700 pl-6">
              <h4 className="text-xl font-semibold text-white mb-2">
                Backoffice Platform
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Admin features for users, movements, biometric validations, and
                KPIs.
              </p>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Responsibilities</h3>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span>Design system in Figma</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span>
                Managing quarterly initiatives, PI Planning, roadmap in Jira
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span>
                Hiring, leading, and training UX writers, researchers, and
                designers in Scrum
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span>
                Design operating model with Double Diamond, Lean, and Dual Track
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span>
                Defining tools: Figma, Jira, Typeform, Maze, Miro
              </span>
            </li>
          </ul>
        </div>

        {/* Chek Success Note */}
        <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-800">
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">A note about Chek&apos;s success:</strong>{" "}
            Chek reached 1.6 million users by the end of 2024.
          </p>
        </div>
      </section>

      {/* Section 2 - UX Manager */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
          Now let&apos;s move on to my new role as UX Manager...
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            From May 2021 to October 2023, I took on the role of UX Manager. I
            created a{" "}
            <strong className="text-white">UX Center of Excellence</strong> for
            Chile and Peru, and implemented a UX strategy across 5 key areas.
          </p>
        </div>

        <div className="mt-8 mb-4">
          <img
            src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/075bd278-35f3-453d-b1b2-2a3c2e3aaeb9_rw_1920.jpg?h=3a9879a295af91f8fdb2f60338354002"
            alt="UX Manager transition at Banco Ripley"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* 5 Key Areas */}
        <div className="mt-12 space-y-12">
          {/* 1. Enterprise */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-gray-600">01</span>
              <h3 className="text-2xl font-bold">Enterprise</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed pl-14">
              Aligned UX with business objectives through regular meetings with
              Chief Product Owners and leaders across the organization.
            </p>
            <div className="mt-6 max-w-[67%] mx-auto">
              <img
                src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/224e91da-9b40-464b-bbc2-297f507f3b80_rw_1920.jpg?h=1b474610d4e7c6f5001472f88256ae84"
                alt="Enterprise - aligning UX with business"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* 2. Team */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-gray-600">02</span>
              <h3 className="text-2xl font-bold">Team</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed pl-14">
              Managed recruiting, onboarding, feedback, 1:1 meetings, and career
              paths for the design team.
            </p>
            <div className="mt-6 max-w-[67%] mx-auto">
              <img
                src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/2f3e18d1-1187-4b01-861c-b103ba408628_rw_1920.jpg?h=90ec9349ebe16fd89346696f4cad8007"
                alt="Team management and development"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* 3. Strategy */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-gray-600">03</span>
              <h3 className="text-2xl font-bold">Strategy</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed pl-14">
              Defined the roadmap in Jira, set OKRs, and led PI Planning
              following the SAFe framework.
            </p>
            <div className="mt-6 max-w-[67%] mx-auto">
              <img
                src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/9643c2eb-d444-4923-b913-524f5033ead0_rw_1920.jpg?h=2a38e17682495fb86a19abe1dee745a7"
                alt="UX Strategy and vision"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* 4. Experience */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-gray-600">04</span>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed pl-14">
              Built a multibranding design system with tokens, applied
              consistently across all platforms.
            </p>
            <div className="mt-6 max-w-[67%] mx-auto">
              <img
                src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/299d5618-c739-4963-9dda-ac5d3889bfe3_rw_1920.jpg?h=147b14da61b654c5f1abe2e6b4e29c72"
                alt="Experience - human-centered innovation"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* 5. Operations */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-gray-600">05</span>
              <h3 className="text-2xl font-bold">Operations</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed pl-14">
              Established the UX workflow with Double Diamond, managed tools,
              ensured design coherence, maintained a documentary hub, and
              defined the org chart.
            </p>
            <div className="mt-6 max-w-[67%] mx-auto">
              <img
                src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/4d535e33-186a-492a-9622-eea44e54eb8f_rw_1920.jpg?h=a9e61622f980d539dff71f92548344f3"
                alt="Operations - UX delivery processes"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <RelatedProjects current="/banco-ripley" />
      </section>
    </article>
  );
}
