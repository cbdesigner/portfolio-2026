import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "ds-methodology",
  title: "Design System Methodology",
  description:
    "Scalable methodology for building and governing design systems across large organizations, from business value strategy to AI-assisted architecture. Framework for design maturity and team enablement.",
  shortDescription:
    "Scalable methodology for building and governing design systems across large organizations, from business value strategy to AI-assisted architecture.",
  category: "Design Systems · Methodology · Governance",
  keywords: ["Design Systems", "Methodology", "Governance", "Scalability", "AI Architecture"],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function DsMethodologyLayout({
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
