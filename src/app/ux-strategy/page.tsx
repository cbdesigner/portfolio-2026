import { Metadata } from "next";
import RelatedProjects from "@/components/RelatedProjects";

export const metadata: Metadata = {
  title: "Carlos Baeza - UX Strategy",
};

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

        {/* Overview iframe */}
        <section className="mb-16">
          <div className="relative w-full max-w-[1000px] mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A361%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              allowFullScreen
            />
          </div>
        </section>

        {/* 1 > Strategy */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">1 &gt; Strategy</h2>
          <div className="relative w-full max-w-[1000px] mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A395%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              allowFullScreen
            />
          </div>
        </section>

        {/* 2 > Enterprise */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">2 &gt; Enterprise</h2>
          <div className="relative w-full max-w-[1000px] mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A398%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              allowFullScreen
            />
          </div>
        </section>

        {/* 3 > Team */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">3 &gt; Team</h2>
          <div className="relative w-full max-w-[1000px] mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A399%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              allowFullScreen
            />
          </div>
        </section>

        {/* 4 > Operations */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">4 &gt; Operations</h2>
          <div className="relative w-full max-w-[1000px] mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A397%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              allowFullScreen
            />
          </div>
        </section>

        {/* 5 > Experience */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">5 &gt; Experience</h2>
          <div className="relative w-full max-w-[1000px] mx-auto" style={{ paddingBottom: '85%' }}>
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL67zzf8ZNLhjUuwKQmIfWw%2FUX-Strategy%3Fpage-id%3D0%253A1%26node-id%3D801%253A396%26viewport%3D241%252C48%252C0.22%26scaling%3Dcontain%26starting-point-node-id%3D801%253A361"
              allowFullScreen
            />
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects current="/ux-strategy" />
      </div>
    </div>
  );
}
