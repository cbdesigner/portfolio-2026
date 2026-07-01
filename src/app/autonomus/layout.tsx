import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "autonomus",
  title: "Autonomus — Mobility Platform for Seniors",
  description:
    "Multibranding design system and platform connecting seniors to transportation and companionship services. Designed for simplicity and trust with focus on accessibility and inclusive design patterns.",
  shortDescription:
    "Mobility platform for seniors with multibranding design system using Figma Variables. Connecting seniors to transportation and companionship services.",
  category: "Design Systems · Mobility · Accessibility",
  keywords: [
    "Product Design",
    "Mobility",
    "Accessibility",
    "Figma Variables",
    "Multibranding",
    "Seniors",
    "Inclusive Design",
  ],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function AutonomusLayout({
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
