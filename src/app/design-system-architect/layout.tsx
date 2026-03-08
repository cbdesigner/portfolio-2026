import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Design System Architect",
  description:
    "AI-ready design infrastructure built for scale, governance, and deterministic design-to-code workflows. Token architecture, component systems, and multi-brand theming.",
  alternates: { canonical: "https://carlosbaeza.design/design-system-architect" },
};

export default function DesignSystemArchitectLayout({
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
          name: "Design System Architect",
          description: metadata.description as string,
          author: { "@type": "Person", name: "Carlos Baeza" },
          url: "https://carlosbaeza.design/design-system-architect",
          keywords: ["AI Design Systems", "Design Tokens", "Architecture", "Design-to-Code", "MCP"],
        }}
      />
      {children}
    </>
  );
}
