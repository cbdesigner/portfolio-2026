import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chek Digital Wallet — Banco Ripley Case Study",
  description:
    "800K+ users. Digital wallet democratizing banking in Chile and Peru. Led UX strategy, design system, and team for Chek Personas, Comercios, and web platforms.",
  keywords: [
    "Chek",
    "Digital Wallet",
    "Banco Ripley",
    "UX Design",
    "Design System",
    "Mobile App",
    "Ionic",
    "PWA",
    "FinTech",
  ],
  alternates: { canonical: "https://portfolio-2026-3cva.onrender.com/chek" },
  openGraph: {
    type: "article",
    url: "https://portfolio-2026-3cva.onrender.com/chek",
    title: "Chek Digital Wallet — Banco Ripley Case Study",
    description:
      "Led UX strategy and design system for Chek, a digital wallet democratizing banking for 800K+ users in Chile and Peru.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chek Digital Wallet Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chek Digital Wallet — Banco Ripley Case Study",
    description:
      "800K+ users. Digital wallet democratizing banking in Chile and Peru with Chek.",
    images: ["/twitter-image"],
  },
};

export default function ChekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
