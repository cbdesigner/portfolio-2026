import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "My Design Process",
  description:
    "Structured UX design process based on the Double Diamond framework: Discover, Define, Develop, and Deliver. Applied across enterprise and startup product environments.",
  alternates: { canonical: "https://carlosbaeza.design/my-design-process" },
};

export default function MyDesignProcessLayout({
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
          name: "My Design Process",
          description: metadata.description as string,
          author: { "@type": "Person", name: "Carlos Baeza" },
          url: "https://carlosbaeza.design/my-design-process",
          keywords: ["Design Process", "Double Diamond", "UX Methodology", "Design Thinking"],
        }}
      />
      {children}
    </>
  );
}
