import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Banco Ripley — Digital Banking Transformation",
  description:
    "Case study: Full redesign of Banco Ripley's digital banking experience. From UX Lead to Corporate UX Manager, building a UX Center of Excellence for Chile and Peru with 27 specialists.",
  alternates: { canonical: "https://carlosbaeza.design/banco-ripley" },
};

export default function BancoRipleyLayout({
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
          name: "Banco Ripley — Digital Banking Transformation",
          description: metadata.description as string,
          author: { "@type": "Person", name: "Carlos Baeza" },
          url: "https://carlosbaeza.design/banco-ripley",
          keywords: ["UX Design", "Banking", "Design System", "Digital Transformation", "PWA"],
        }}
      />
      {children}
    </>
  );
}
