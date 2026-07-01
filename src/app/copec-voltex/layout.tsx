import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "copec-voltex",
  title: "Copec Voltex eMobility Hub — Design System & Platform",
  description:
    "Scalable design system and eMobility platform for Copec Voltex featuring EV catalog, educational resources, and cost calculator. 50% reduction in design-to-development time through modular design system built with design tokens and component library.",
  shortDescription:
    "Scalable design system and eMobility platform for Copec Voltex featuring EV catalog, educational resources, and cost calculator. 50% reduction in design-to-development time.",
  client: "Copec Voltex",
  category: "Design Systems · eMobility · Sustainability",
  impact: "50% reduction in design-to-development time. Promoted sustainable transportation across Chile.",
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
    "Sustainable Transportation",
  ],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function CopecVoltexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={generateProjectJsonLd(projectData)} />
      {children}
    </>
  );
}
