import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    href: "/banco-ripley",
    title: "Transforming the Digital Experience at Banco Ripley",
    thumbnail:
      "https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/bcfa0f9e-a94f-4090-8271-6ed0b45f534c_rwc_357x0x1964x1536x1964.jpg?h=435cc0d8750dc3bc4fbe914048a3e6a6",
  },
  {
    href: "/design-system",
    title: "Design System",
    thumbnail:
      "https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/ed4d5e87-cda7-495d-82cb-9e53e5783bd2_rwc_0x0x2120x1658x2120.png?h=baf19eb5e21abfced136e7663f2c12ee",
  },
  {
    href: "/autonomus",
    title: "Autonomus",
    thumbnail:
      "https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/37683366-9afb-4a8c-8f7b-c3ec4b33368d_rwc_388x0x3055x2389x3055.png?h=52b53e689d8bc667e6c5c840394d5c1c",
  },
  {
    href: "/my-design-process",
    title: "My Design Process",
    thumbnail: "/images/design-process-thumb.svg",
  },
  {
    href: "/enel-one-hub",
    title: "Enel One Hub",
    thumbnail: "/images/enel-thumb.svg",
  },
  {
    href: "/ux-strategy",
    title: "UX Strategy",
    thumbnail: "/images/ux-strategy-thumb.svg",
  },
  {
    href: "/interview",
    title: "I was interviewed by Multiplica in 2019",
    thumbnail: "/images/interview-thumb.svg",
  },
  {
    href: "/design-system-architect",
    title: "Design System Architect",
    thumbnail: "/images/ds-architect-thumb.svg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <Image
          src="https://cdn.myportfolio.com/cffae2d78aba7c84001c467fdc4cc79e/b601c97b-3ffe-456f-9666-d791647bed24_rwc_0x0x2683x1536x4096.jpg?h=251f1d19fc9a514d4d070e715825f38b"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Hello, I&apos;m Carlos Baeza
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Experienced UX Manager and Head of Product Design, with over 10
            years of industry expertise. Proven in leading cross-functional
            teams to deliver impactful designs aligned with business goals.
            Skilled in fostering collaboration, building client relationships,
            and mentoring designers for success. Thrives in fast-paced
            environments, ensuring quality and client satisfaction. Ready to
            propel UX teams to new heights of success.
          </p>
          <div className="mt-12 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-gray-400"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {projects.map((project) => (
            <ProjectCard
              key={project.href}
              href={project.href}
              title={project.title}
              thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </section>
    </>
  );
}
