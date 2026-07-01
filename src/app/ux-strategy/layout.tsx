import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "ux-strategy",
  title: "UX Strategy",
  description:
    "Strategic UX framework across 5 key areas: Strategy, Team, Operations, Experience, and Enterprise. Leading design teams and building organizational design capability at scale.",
  shortDescription:
    "Strategic UX framework across 5 key areas: Strategy, Team, Operations, Experience, and Enterprise. Leading design teams and building organizational design capability at scale.",
  category: "UX Design · Strategy · Leadership",
  keywords: ["UX Strategy", "Design Leadership", "Team Management", "Enterprise UX", "Operations"],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function UxStrategyLayout({
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
