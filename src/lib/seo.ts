import { Metadata } from "next";

const baseUrl = "https://carlosbaeza.design";

export interface ProjectMetadata {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  client?: string;
  role?: string;
  timeline?: string;
  keywords: string[];
  category: string;
  impact?: string;
}

export function generateProjectMetadata(project: ProjectMetadata): Metadata {
  const url = `${baseUrl}/${project.slug}`;
  const ogImage = `${baseUrl}/opengraph-image`;

  return {
    title: project.title,
    description: project.shortDescription,
    keywords: [
      ...project.keywords,
      "Design Systems",
      "Carlos Baeza",
      "Case Study",
      "UX Design",
      project.category,
    ],
    authors: [{ name: "Carlos Baeza", url: baseUrl }],
    creator: "Carlos Baeza",
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.shortDescription,
      siteName: "Carlos Baeza — Design Systems Architect",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      authors: ["Carlos Baeza"],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      creator: "@cbdesigner",
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export function generateProjectJsonLd(project: ProjectMetadata) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${baseUrl}/${project.slug}`,
    name: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Carlos Baeza",
      url: baseUrl,
    },
    url: `${baseUrl}/${project.slug}`,
    image: `${baseUrl}/opengraph-image`,
    keywords: project.keywords.join(", "),
    about: {
      "@type": "Thing",
      name: project.category,
    },
    ...(project.client && {
      client: {
        "@type": "Organization",
        name: project.client,
      },
    }),
    ...(project.role && {
      roleDescription: project.role,
    }),
    ...(project.impact && {
      result: project.impact,
    }),
  };
}

export function generateArticleJsonLd(
  title: string,
  description: string,
  slug: string,
  datePublished?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${baseUrl}/${slug}`,
    image: `${baseUrl}/opengraph-image`,
    author: {
      "@type": "Person",
      name: "Carlos Baeza",
      url: baseUrl,
    },
    ...(datePublished && {
      datePublished,
      dateModified: datePublished,
    }),
  };
}
