import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "design-system",
  title: "Design System Journey",
  description:
    "A journey from Atomic Design to advanced multibranding design systems with Figma Variables and Tokens Studio, across Banco Ripley, Enel, and Autonomus. Evolution of design system thinking and enterprise scale.",
  shortDescription:
    "A journey from Atomic Design to advanced multibranding design systems with Figma Variables and Tokens Studio, across Banco Ripley, Enel, and Autonomus.",
  category: "Design Systems · Documentation",
  keywords: ["Design Systems", "Atomic Design", "Figma Variables", "Tokens Studio", "Multibranding", "Evolution"],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function DesignSystemLayout({
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
