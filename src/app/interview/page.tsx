import { Metadata } from "next";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Carlos Baeza - I was interviewed by Multiplica in 2019",
};

export default function InterviewPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I was interviewed by Multiplica in 2019
          </h1>
        </header>

        {/* What is Multiplica */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What is Multiplica?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Multiplica is a digital-native consulting firm specializing in
            digital experiences. With over 20 years of experience and presence
            in cities worldwide, they help organizations transform their digital
            strategies and deliver exceptional user experiences.
          </p>
        </section>

        {/* Interview with Carlos Baeza */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Interview with Carlos Baeza, UX Lead at Banco Ripley
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Carlos shares the story of his arrival to Banco Ripley to lead
              Chek, a digital product that would become a key part of the
              bank&apos;s digital transformation strategy.
            </p>
            <p>
              He explains how UX directly influences business results, driving
              measurable improvements in user engagement, conversion rates, and
              customer satisfaction.
            </p>
            <blockquote className="border-l-4 border-gray-600 pl-6 py-2 my-6 italic text-gray-400">
              &ldquo;Integrating UX methodology into agile teams allows us to
              move faster while keeping the user at the center of every
              decision.&rdquo;
            </blockquote>
            <p>
              For Carlos, UX adds value by helping teams discover and validate
              hypotheses early in the process, reducing risk and ensuring the
              right product is built for the right audience.
            </p>
            <p>
              Beyond his role at Banco Ripley, Carlos is also the CEO of a UX
              Services company, where he helps organizations strengthen their
              design capabilities and mature their UX practices.
            </p>
            <p>
              He has also been designing a product suite in partnership with a
              legal tech company, applying user-centered design principles to a
              traditionally underserved industry.
            </p>
          </div>
        </section>

        {/* Maturity in UX */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Maturity in UX
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              In 2019, the UX field was reaching a pivotal moment. Digital
              products were increasingly improving people&apos;s lives, and UX
              was making a significant impact not only on external products but
              also on companies internally, transforming workflows and
              organizational culture.
            </p>
          </div>
        </section>

        {/* Main Gaps */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Main Gaps</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              One of the main gaps identified is the macro conceptualization
              from an organizational perspective. Companies often struggle to
              see UX as a strategic function rather than just a design activity.
            </p>
            <p>
              Another significant challenge lies in soft skills. The ability to
              communicate, collaborate, and influence across teams remains a
              critical area for growth in the UX profession.
            </p>
          </div>
        </section>

        {/* What Awaits Us */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What Awaits Us
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Carlos pointed to Machine Learning as the short-term future of
              design, predicting that AI-powered tools would transform how
              designers work and create experiences.
            </p>
            <p>
              Speed and quality are essential to stay competitive. The ability
              to iterate rapidly while maintaining high standards of usability
              and aesthetics is what sets great teams apart.
            </p>
            <p>
              He also mentions his experience with{" "}
              <span className="text-white font-semibold">uizard.io</span>, an
              AI-powered tool that was already demonstrating how machine
              learning could accelerate the design process by converting
              sketches into digital prototypes.
            </p>
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/interview" />
      </div>
    </div>
  );
}
