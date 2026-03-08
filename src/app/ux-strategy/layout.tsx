import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "UX Strategy",
  description:
    "Strategic UX framework across 5 key areas: Strategy, Team, Operations, Experience, and Enterprise. Leading design teams and building organizational design capability at scale.",
  alternates: { canonical: "https://carlosbaeza.design/ux-strategy" },
};

export default function UxStrategyLayout({
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
          name: "UX Strategy",
          description: metadata.description as string,
          author: { "@type": "Person", name: "Carlos Baeza" },
          url: "https://carlosbaeza.design/ux-strategy",
          keywords: ["UX Strategy", "Design Leadership", "Team Management", "Enterprise UX", "Operations"],
        }}
      />
      {children}
    </>
  );
}
