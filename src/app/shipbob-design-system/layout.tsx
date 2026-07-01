import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "shipbob-design-system",
  title: "ShipBob Design System — AI-Ready Infrastructure",
  description:
    "Enterprise design system infrastructure for ShipBob that reduced interface development time by 75% and enabled AI-ready scalability. System-driven approach to complex fulfillment operations with deterministic design-to-code workflows.",
  shortDescription:
    "Enterprise design system infrastructure for ShipBob that reduced interface development time by 75% and enabled AI-ready scalability.",
  client: "ShipBob",
  category: "Design Systems · Logistics · AI-Ready",
  impact: "75% reduction in interface development time. Enabled AI-ready scalability.",
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
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function ShipBobLayout({
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
