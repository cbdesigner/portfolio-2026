import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "banco-ripley",
  title: "Banco Ripley — Digital Banking Transformation",
  description:
    "Led digital transformation at Banco Ripley from UX Lead to Corporate UX Manager. Built a UX Center of Excellence serving 27 specialists across Chile and Peru. Designed and implemented digital banking platforms serving millions of users with focus on accessibility, fintech innovation, and enterprise-scale design systems.",
  shortDescription:
    "Full redesign of Banco Ripley's digital banking experience. From UX Lead to Corporate UX Manager, building a UX Center of Excellence for Chile and Peru with 27 specialists.",
  client: "Banco Ripley",
  role: "UX Lead → Corporate UX Manager",
  timeline: "2017 — 2020+",
  category: "UX Design · Banking · Design Systems",
  impact: "Transformed digital banking experience for millions of users across Chile and Peru",
  keywords: [
    "UX Design",
    "Banking",
    "Design System",
    "Digital Transformation",
    "PWA",
    "Mobile App",
    "FinTech",
    "Design System Governance",
    "Enterprise Design",
    "UX Center of Excellence",
  ],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function BancoRipleyLayout({
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
