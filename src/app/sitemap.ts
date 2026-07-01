import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://carlosbaeza.design";

const projects = [
  { slug: "banco-ripley", changeFrequency: "monthly" as const, priority: 0.9 },
  { slug: "chek", changeFrequency: "monthly" as const, priority: 0.9 },
  { slug: "copec-voltex", changeFrequency: "monthly" as const, priority: 0.8 },
  { slug: "autonomus", changeFrequency: "monthly" as const, priority: 0.8 },
  { slug: "enel-one-hub", changeFrequency: "monthly" as const, priority: 0.8 },
  { slug: "ux-strategy", changeFrequency: "monthly" as const, priority: 0.8 },
  { slug: "my-design-process", changeFrequency: "monthly" as const, priority: 0.8 },
  { slug: "design-system", changeFrequency: "monthly" as const, priority: 0.8 },
  { slug: "bupa-design-system", changeFrequency: "monthly" as const, priority: 0.8 },
  { slug: "shipbob-design-system", changeFrequency: "monthly" as const, priority: 0.8 },
  { slug: "design-system-architect", changeFrequency: "monthly" as const, priority: 0.8 },
  { slug: "ds-methodology", changeFrequency: "monthly" as const, priority: 0.8 },
  { slug: "ds-services", changeFrequency: "monthly" as const, priority: 0.7 },
];

const mainPages = [
  { slug: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { slug: "projects", changeFrequency: "weekly" as const, priority: 0.9 },
  { slug: "profile", changeFrequency: "monthly" as const, priority: 0.7 },
  { slug: "interview", changeFrequency: "monthly" as const, priority: 0.7 },
  { slug: "contact", changeFrequency: "monthly" as const, priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainSitemap: MetadataRoute.Sitemap = mainPages.map((page) => ({
    url: page.slug ? `${baseUrl}/${page.slug}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const projectSitemap: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: project.changeFrequency,
    priority: project.priority,
  }));

  return [...mainSitemap, ...projectSitemap];
}
