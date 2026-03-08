import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Bupa Design System — Healthcare Enterprise",
  description:
    "Case study: Enterprise-grade tokenized design system for Bupa healthcare, serving 5 digital products with 50+ components, 1000+ tokens, and Light/Dark theme support.",
  alternates: { canonical: "https://carlosbaeza.design/bupa-design-system" },
};

export default function BupaDesignSystemLayout({
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
          name: "Bupa Design System — Healthcare Enterprise",
          description: metadata.description as string,
          author: { "@type": "Person", name: "Carlos Baeza" },
          url: "https://carlosbaeza.design/bupa-design-system",
          keywords: ["Design Systems", "Healthcare", "Design Tokens", "Theming", "Enterprise"],
        }}
      />
      {children}
    </>
  );
}
