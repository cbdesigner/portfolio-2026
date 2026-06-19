import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShipBob Design System — AI-Ready Infrastructure Case Study",
  description:
    "Enterprise design system infrastructure for ShipBob that reduced interface development time by 75% and enabled AI-ready scalability. How we built a system-driven approach to complex fulfillment operations.",
  keywords: [
    "ShipBob",
    "Design System",
    "AI-Ready Design Systems",
    "Enterprise Design",
    "Design Tokens",
    "Component Library",
    "Fulfillment",
    "Logistics",
    "Design Infrastructure",
  ],
  alternates: { canonical: "https://carlosbaeza.design/shipbob-design-system" },
  openGraph: {
    type: "article",
    url: "https://carlosbaeza.design/shipbob-design-system",
    title: "ShipBob Design System — AI-Ready Infrastructure",
    description:
      "How ShipBob reduced interface development time by 75% through enterprise design system infrastructure.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ShipBob Design System Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipBob Design System — AI-Ready Infrastructure",
    description:
      "75% reduction in interface development time through system-driven design.",
    images: ["/twitter-image"],
  },
};

export default function ShipBobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
