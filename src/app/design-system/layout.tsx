import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Design System Journey",
  description:
    "A journey from Atomic Design to advanced multibranding design systems with Figma Variables and Tokens Studio, across Banco Ripley, Enel, and Autonomus.",
  alternates: { canonical: "https://carlosbaeza.design/design-system" },
};

export default function DesignSystemLayout({
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
          name: "Design System Journey",
          description: metadata.description as string,
          author: { "@type": "Person", name: "Carlos Baeza" },
          url: "https://carlosbaeza.design/design-system",
          keywords: ["Design Systems", "Atomic Design", "Figma Variables", "Tokens Studio", "Multibranding"],
        }}
      />
      {children}
    </>
  );
}
