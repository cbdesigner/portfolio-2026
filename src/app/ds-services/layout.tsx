import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Design Systems Services",
  description:
    "Integrated framework of Governance, Architecture, and Metrics to transform how design systems scale and deliver measurable business value across organizations.",
  alternates: { canonical: "https://carlosbaeza.design/ds-services" },
};

export default function DsServicesLayout({
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
          name: "Design Systems Services",
          description: metadata.description as string,
          author: { "@type": "Person", name: "Carlos Baeza" },
          url: "https://carlosbaeza.design/ds-services",
          keywords: ["Design Systems", "Governance", "Architecture", "Metrics", "Business Value"],
        }}
      />
      {children}
    </>
  );
}
