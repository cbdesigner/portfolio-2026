import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateProjectMetadata, generateProjectJsonLd } from "@/lib/seo";

const projectData = {
  slug: "my-design-process",
  title: "My Design Process",
  description:
    "Structured UX design process based on the Double Diamond framework: Discover, Define, Develop, and Deliver. Applied across enterprise and startup product environments.",
  shortDescription:
    "Structured UX design process based on the Double Diamond framework: Discover, Define, Develop, and Deliver. Applied across enterprise and startup product environments.",
  category: "Methodology · Process · Design Thinking",
  keywords: ["Design Process", "Double Diamond", "UX Methodology", "Design Thinking"],
};

export const metadata: Metadata = generateProjectMetadata(projectData);

export default function MyDesignProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={generateProjectJsonLd(projectData)} />
      {children}
    </>
  );
}
