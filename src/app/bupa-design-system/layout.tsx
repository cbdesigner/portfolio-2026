import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "bupa-design-system",
  title: "Bupa Design System — Healthcare Enterprise",
  description:
    "Enterprise-grade tokenized design system for Bupa healthcare, serving 5 digital products with 50+ components, 1000+ tokens, and Light/Dark theme support. Medical appointment booking system with design tokens.",
  shortDescription:
    "Enterprise-grade tokenized design system for Bupa healthcare, serving 5 digital products with 50+ components, 1000+ tokens, and Light/Dark theme support.",
  client: "Bupa",
  category: "Design Systems · Healthcare · Enterprise",
  keywords: ["Design Systems", "Healthcare", "Design Tokens", "Theming", "Enterprise", "Medical Design"],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function BupaDesignSystemLayout({
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
