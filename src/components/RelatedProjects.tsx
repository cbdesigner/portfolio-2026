"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

type ProjectKey =
  | "bancoRipley"
  | "designSystem"
  | "autonomus"
  | "myDesignProcess"
  | "enelOneHub"
  | "uxStrategy"
  | "designSystemArchitect"
  | "dsMethodology"
  | "bupaDesignSystem"
  | "dsServices"
  | "profile";

const allProjects: { href: string; key: ProjectKey }[] = [
  { href: "/banco-ripley", key: "bancoRipley" },
  { href: "/design-system", key: "designSystem" },
  { href: "/autonomus", key: "autonomus" },
  { href: "/my-design-process", key: "myDesignProcess" },
  { href: "/enel-one-hub", key: "enelOneHub" },
  { href: "/ux-strategy", key: "uxStrategy" },
  { href: "/design-system-architect", key: "designSystemArchitect" },
  { href: "/ds-methodology", key: "dsMethodology" },
  { href: "/bupa-design-system", key: "bupaDesignSystem" },
  { href: "/ds-services", key: "dsServices" },
  { href: "/profile", key: "profile" },
];

export default function RelatedProjects({ current }: { current: string }) {
  const { t } = useLanguage();

  const related = allProjects.filter((p) => p.href !== current).slice(0, 6);

  return (
    <section className="mt-22 pt-12 border-t border-[var(--color-border)] px-8 md:px-16">
      <h2 className="font-heading text-display-md tracking-display mb-8 text-center">
        {t.relatedProjects}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {related.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            className="block p-4 border border-[var(--color-border)] hover:border-[var(--color-text-tertiary)] transition-colors text-center theme-transition"
          >
            <span className="text-sm text-[var(--color-text-secondary)]">
              {t.projectTitles[project.key]}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
