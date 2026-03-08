import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Design System Methodology",
  description:
    "Scalable methodology for building and governing design systems across large organizations, from business value strategy to AI-assisted architecture.",
  alternates: { canonical: "https://carlosbaeza.design/ds-methodology" },
};

export default function DsMethodologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Design System Methodology",
          description: metadata.description as string,
          author: { "@type": "Person", name: "Carlos Baeza" },
          url: "https://carlosbaeza.design/ds-methodology",
          keywords: ["Design Systems", "Methodology", "Governance", "Scalability", "AI Architecture"],
        }}
      />
      {children}
    </>
  );
}
