import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "ds-services",
  title: "Design Systems Services",
  description:
    "Integrated framework of Governance, Architecture, and Metrics to transform how design systems scale and deliver measurable business value across organizations.",
  shortDescription:
    "Integrated framework of Governance, Architecture, and Metrics to transform how design systems scale and deliver measurable business value across organizations.",
  category: "Design Systems · Services · Enterprise",
  keywords: ["Design Systems", "Governance", "Architecture", "Metrics", "Business Value"],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function DsServicesLayout({
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
