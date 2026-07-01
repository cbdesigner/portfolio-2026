import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "chek",
  title: "Chek Digital Wallet — Banco Ripley Case Study",
  description:
    "Led comprehensive UX strategy, design system architecture, and team leadership for Chek—a digital wallet serving 800K+ users across three mobile and web platforms. Enabled unbanked Chileans and foreigners to access banking services, sell without commission, and transact with zero maintenance fees.",
  shortDescription:
    "800K+ users. Digital wallet democratizing banking in Chile and Peru. Led UX strategy, design system, and team for Chek Personas, Comercios, and web platforms.",
  client: "Banco Ripley",
  role: "UX Lead & Design Manager",
  timeline: "Dec 2019 — 2020+",
  category: "FinTech · Digital Wallet · Design Systems",
  impact: "Served 800K+ users with 4.5★ ratings. Democratized banking access for unbanked populations across Chile and Peru.",
  keywords: [
    "Chek",
    "Digital Wallet",
    "Banco Ripley",
    "UX Design",
    "Design System",
    "Mobile App",
    "Ionic",
    "PWA",
    "FinTech",
    "Banking",
    "Fintech Design",
    "Payment Systems",
  ],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function ChekLayout({
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
