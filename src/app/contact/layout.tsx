import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carlos Baeza - Contact",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
