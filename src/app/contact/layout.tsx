import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Carlos Baeza for design systems consulting, UX strategy, and enterprise product design collaboration.",
  alternates: { canonical: "https://carlosbaeza.design/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
