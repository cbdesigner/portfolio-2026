import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copec Voltex eMobility Hub — Design System & Platform Case Study",
  description:
    "Scalable design system and eMobility platform for Copec Voltex featuring EV catalog, educational resources, and cost calculator. 50% reduction in design-to-development time through modular design system.",
  keywords: [
    "Copec Voltex",
    "eMobility",
    "Design System",
    "Electric Vehicles",
    "Design Tokens",
    "Component Library",
    "Sustainability",
    "React",
    "Figma",
    "Storybook",
  ],
  alternates: { canonical: "https://portfolio-2026-3cva.onrender.com/copec-voltex" },
  openGraph: {
    type: "article",
    url: "https://portfolio-2026-3cva.onrender.com/copec-voltex",
    title: "Copec Voltex eMobility Hub — Design System & Platform",
    description:
      "How we built a scalable design system and eMobility platform for Copec Voltex to promote sustainable transportation.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Copec Voltex eMobility Hub Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Copec Voltex eMobility Hub — Design System & Platform",
    description:
      "50% reduction in design-to-development time through modular design system for eMobility platform.",
    images: ["/twitter-image"],
  },
};

export default function CopecVoltexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
