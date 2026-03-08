import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Interview by Multiplica (2019)",
  description:
    "Carlos Baeza interviewed by Multiplica about UX leadership at Banco Ripley, the future of machine learning in design, and bridging UX strategy with agile product teams.",
  alternates: { canonical: "https://carlosbaeza.design/interview" },
};

export default function InterviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Interview — Carlos Baeza on UX Leadership",
          description: metadata.description as string,
          author: { "@type": "Person", name: "Carlos Baeza" },
          url: "https://carlosbaeza.design/interview",
        }}
      />
      {children}
    </>
  );
}
