import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "design-system-architect",
  title: "Design System Architect",
  description:
    "AI-ready design infrastructure built for scale, governance, and deterministic design-to-code workflows. Token architecture, component systems, and multi-brand theming. Holistic approach to design system architecture connecting strategy, tooling, and team enablement.",
  shortDescription:
    "AI-ready design infrastructure built for scale, governance, and deterministic design-to-code workflows. Token architecture, component systems, and multi-brand theming.",
  category: "Design Systems · Architecture · AI-Ready",
  keywords: ["AI Design Systems", "Design Tokens", "Architecture", "Design-to-Code", "MCP", "Governance"],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function DesignSystemArchitectLayout({
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
