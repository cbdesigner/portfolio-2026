"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

/* ── Types ─────────────────────────────────────── */
export type FilterValue = "all" | "projects" | "methodology" | "designSystems";

export interface ProjectItem {
  href: string;
  title: string;
  category: string;
  description: string;
  filter: FilterValue;
}

interface ProjectGridProps {
  items: ProjectItem[];
}

/* ── Filter config ─────────────────────────────── */
const FILTERS: { key: FilterValue; labelKey: keyof typeof LABEL_MAP }[] = [
  { key: "all", labelKey: "all" },
  { key: "projects", labelKey: "projects" },
  { key: "methodology", labelKey: "methodologies" },
  { key: "designSystems", labelKey: "designSystems" },
];

const LABEL_MAP = {
  all: "all",
  projects: "projects",
  methodologies: "methodologies",
  designSystems: "designSystems",
} as const;

/* ── Component ─────────────────────────────────── */
export default function ProjectGrid({ items }: ProjectGridProps) {
  const [active, setActive] = useState<FilterValue>("all");
  const { t } = useLanguage();

  const filtered = active === "all"
    ? items
    : items.filter((item) => item.filter === active);

  return (
    <section className="px-8 md:px-16 pt-12 pb-20">
      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        {FILTERS.map(({ key, labelKey }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`
                px-5 py-2 text-caption uppercase tracking-widest-caps
                border transition-all duration-300
                ${isActive
                  ? "bg-[var(--color-text-primary)] text-[var(--color-surface)] border-[var(--color-text-primary)]"
                  : "bg-transparent text-[var(--color-text-tertiary)] border-[var(--color-border)] hover:text-[var(--color-text-secondary)] hover:border-[var(--color-text-tertiary)]"
                }
              `}
            >
              {t.categories[labelKey]}
            </button>
          );
        })}

        {/* Count */}
        <span className="ml-auto font-mono text-caption text-[var(--color-text-tertiary)]">
          {String(filtered.length).padStart(2, "0")} {filtered.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col justify-between p-6 aspect-[4/3]
              bg-[var(--color-card-bg)] border border-[var(--color-border)]
              transition-all duration-300
              hover:border-[var(--color-text-tertiary)] hover:-translate-y-0.5"
          >
            {/* Top: category + title */}
            <div>
              <p className="text-caption uppercase tracking-widest-caps text-[var(--color-text-tertiary)] mb-3">
                {item.category}
              </p>
              <h3 className="font-heading text-body-lg text-[var(--color-text-primary)] leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-body-md text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Bottom: arrow link */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
              <span className="inline-flex items-center gap-2 text-caption uppercase tracking-widest-caps text-[var(--color-text-primary)] group-hover:gap-3 transition-all duration-300">
                {t.viewProject}
                <svg
                  width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
