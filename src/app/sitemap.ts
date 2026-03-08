import { MetadataRoute } from "next";

const BASE_URL = "https://carlosbaeza.design";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const publicPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/profile`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/interview`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const projectPages: MetadataRoute.Sitemap = [
    "/banco-ripley",
    "/autonomus",
    "/enel-one-hub",
    "/bupa-design-system",
    "/ux-strategy",
    "/design-system",
    "/design-system-architect",
    "/my-design-process",
    "/ds-methodology",
    "/ds-services",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...publicPages, ...projectPages];
}
