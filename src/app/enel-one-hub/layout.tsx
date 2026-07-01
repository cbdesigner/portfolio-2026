import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "enel-one-hub",
  title: "Enel One Hub — Unified Design System",
  description:
    "Unified design system enabling consistency across Enel's digital products in Latin America with stakeholder research across Chile, Peru, Argentina, and Colombia. Enterprise-scale design system governance and implementation.",
  shortDescription:
    "Unified design system enabling consistency across Enel's digital products in Latin America, with stakeholder research across Chile, Peru, Argentina, and Colombia.",
  client: "Enel",
  category: "Design Systems · Energy · Enterprise",
  keywords: ["Design Systems", "Energy", "Enterprise", "Stakeholder Research", "Latin America", "Governance"],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function EnelOneHubLayout({
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
