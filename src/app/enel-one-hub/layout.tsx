import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Enel One Hub — Unified Design System",
  description:
    "Case study: Unified design system enabling consistency across Enel's digital products in Latin America, with stakeholder research across Chile, Peru, Argentina, and Colombia.",
  alternates: { canonical: "https://carlosbaeza.design/enel-one-hub" },
};

export default function EnelOneHubLayout({
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
          name: "Enel One Hub — Unified Design System",
          description: metadata.description as string,
          author: { "@type": "Person", name: "Carlos Baeza" },
          url: "https://carlosbaeza.design/enel-one-hub",
          keywords: ["Design Systems", "Energy", "Enterprise", "Stakeholder Research", "Latin America"],
        }}
      />
      {children}
    </>
  );
}
