import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Access Carlos Baeza's portfolio to explore design system case studies, UX strategy projects, and methodology frameworks.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://carlosbaeza.design/login" },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
