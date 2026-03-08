import ProfileContent from "@/components/ProfileContent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Profile | Design Systems Architect | AI-Ready Agentic Design Systems Infrastructure",
  description:
    "Full professional profile of Carlos Baeza. Design Systems Architect building AI-Ready Agentic Design Systems Infrastructure at Enterprise Scale.",
  alternates: { canonical: "https://carlosbaeza.design/profile" },
};

export default function ProfilePage() {
  return <ProfileContent />;
}
