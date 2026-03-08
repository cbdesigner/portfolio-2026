import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Autonomus — Mobility Platform for Seniors",
  description:
    "Case study: Product design for a mobility platform connecting seniors to transportation and companionship services, with a multibranding design system using Figma Variables.",
  alternates: { canonical: "https://carlosbaeza.design/autonomus" },
};

export default function AutonomusLayout({
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
          name: "Autonomus — Mobility Platform for Seniors",
          description: metadata.description as string,
          author: { "@type": "Person", name: "Carlos Baeza" },
          url: "https://carlosbaeza.design/autonomus",
          keywords: ["Product Design", "Mobility", "Accessibility", "Figma Variables", "Multibranding"],
        }}
      />
      {children}
    </>
  );
}
