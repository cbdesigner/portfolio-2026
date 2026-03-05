import Link from "next/link";

interface Project {
  href: string;
  title: string;
}

export default function RelatedProjects({ current }: { current: string }) {
  const allProjects: Project[] = [
    { href: "/banco-ripley", title: "Transforming the Digital Experience at Banco Ripley" },
    { href: "/design-system", title: "Design System" },
    { href: "/autonomus", title: "Autonomus" },
    { href: "/my-design-process", title: "My Design Process" },
    { href: "/enel-one-hub", title: "Enel One Hub" },
    { href: "/ux-strategy", title: "UX Strategy" },
    { href: "/interview", title: "I was interviewed by Multiplica in 2019" },
    { href: "/design-system-architect", title: "Design System Architect" },
    { href: "/ds-methodology", title: "Design System Methodology" },
    { href: "/bupa-design-system", title: "Bupa Design System" },
    { href: "/profile", title: "Profile — Carlos Baeza" },
  ];

  const related = allProjects.filter((p) => p.href !== current).slice(0, 6);

  return (
    <section className="mt-20 pt-12 border-t border-gray-800">
      <h2 className="font-heading text-2xl font-bold mb-8 text-center">You may also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {related.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            className="block p-4 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors text-center"
          >
            <span className="text-sm text-gray-300">{project.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
