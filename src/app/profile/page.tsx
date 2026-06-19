import ProfileContent from "@/components/ProfileContent";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";

const SITE = "https://carlosbaeza.design";

export const metadata: Metadata = {
  title: "Profile — Design Systems Architect & Head of Product Design",
  description:
    "Full professional profile of Carlos Baeza, Design Systems Architect with 10+ years building enterprise-grade design systems for Banco Ripley, Enel, Bupa and more. Experience, education, certifications, and skills.",
  keywords: [
    "Carlos Baeza",
    "Design Systems Architect",
    "Head of Product Design",
    "UX Manager",
    "Design Tokens",
    "Figma",
    "Design System",
    "UX Strategy",
    "Product Design",
    "AI-Ready Design Systems",
    "Santiago Chile",
  ],
  alternates: { canonical: `${SITE}/profile` },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "profile",
    url: `${SITE}/profile`,
    siteName: "Carlos Baeza — Design Systems Architect",
    title: "Carlos Baeza — Design Systems Architect | Professional Profile",
    description:
      "10+ years building enterprise-grade design systems for Banco Ripley, Enel, Bupa and more. Experience, education, certifications, and skills.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Carlos Baeza — Design Systems Architect" }],
    firstName: "Carlos",
    lastName: "Baeza",
    username: "cbdesigner",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Baeza — Design Systems Architect | Professional Profile",
    description:
      "10+ years building enterprise-grade design systems for Banco Ripley, Enel, Bupa and more.",
    images: ["/twitter-image"],
    creator: "@cbdesigner",
  },
};

/* ── Structured data: ProfilePage + Person (SEO + AEO) ──────────────────
 * The Person uses the same @id as the global Person schema in the root
 * layout so search/answer engines treat them as one enriched entity.    */
const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE}/profile`,
  url: `${SITE}/profile`,
  name: "Carlos Baeza — Professional Profile",
  inLanguage: ["en", "es"],
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE}/#person`,
    name: "Carlos Baeza",
    alternateName: "Carlos Baeza Designer",
    url: `${SITE}/profile`,
    image: `${SITE}/opengraph-image`,
    jobTitle: "Design Systems Architect",
    description:
      "Design Systems Architect, Head of Product Design and UX Manager with 10+ years building AI-ready, enterprise-grade design systems. Has led cross-functional teams of up to 27 specialists across banking, energy, healthcare and mobility.",
    worksFor: {
      "@type": "Organization",
      name: "Snapflow Labs",
      description: "AI-Native company building AI-ready design system infrastructure.",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Design Systems Architect",
      occupationalCategory: "15-1255.00",
      skills: [
        "Design Systems Architecture",
        "Design Tokens",
        "Figma Variables",
        "Storybook",
        "UX Strategy",
        "Product Design",
        "Information Architecture",
        "User Research",
        "Design-to-Code Workflows",
        "Multi-brand Theming",
      ],
    },
    knowsAbout: [
      "Design Systems",
      "Design Tokens",
      "W3C Design Tokens",
      "Figma",
      "Storybook",
      "UX Strategy",
      "Product Design",
      "AI Design Systems",
      "Agentic Design",
      "Design Governance",
      "Design-to-Code Workflows",
    ],
    knowsLanguage: [
      { "@type": "Language", name: "Spanish" },
      { "@type": "Language", name: "English" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    nationality: { "@type": "Country", name: "Chile" },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Universidad del Desarrollo",
        description: "Full Stack Development (2024)",
      },
      { "@type": "EducationalOrganization", name: "Duoc UC", description: "Diseño Gráfico (2002–2004)" },
      { "@type": "EducationalOrganization", name: "Escuela de Creativos Brother" },
    ],
    hasCredential: [
      "SAFe 5 Product Owner / Product Manager — Scaled Agile, Inc.",
      "Product Strategy — Product School",
      "Google Tag Manager Fundamentals — Google",
      "Design Sprint Innovation — Universidad del Desarrollo",
      "React Web Application Ninja — Universidad del Desarrollo",
    ].map((c) => ({ "@type": "EducationalOccupationalCredential", name: c })),
    sameAs: [
      "https://www.linkedin.com/in/carlos-baeza-design/",
      "https://twitter.com/cbdesigner",
    ],
  },
};

export default function ProfilePage() {
  return (
    <>
      <JsonLd data={profileJsonLd} />
      <ProfileContent />
    </>
  );
}
