import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-grotesk" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://carlosbaeza.design";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Carlos Baeza — Design Systems Architect",
    template: "%s | Carlos Baeza",
  },
  description:
    "Design Systems Architect building AI-Ready Agentic Design Systems Infrastructure at Enterprise Scale. 10+ years leading cross-functional teams at Banco Ripley, Enel, Bupa and more.",
  keywords: [
    "Design Systems",
    "Design Systems Architect",
    "Design Tokens",
    "Figma",
    "Storybook",
    "UX Manager",
    "Product Design",
    "AI Design Systems",
    "Agentic Design",
    "Carlos Baeza",
  ],
  authors: [{ name: "Carlos Baeza", url: siteUrl }],
  creator: "Carlos Baeza",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Carlos Baeza — Design Systems Architect",
    title: "Carlos Baeza — Design Systems Architect",
    description:
      "AI-Ready Agentic Design Systems Infrastructure at Enterprise Scale. Design Tokens · Figma · React · Storybook.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Carlos Baeza — Design Systems Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Baeza — Design Systems Architect",
    description:
      "AI-Ready Agentic Design Systems Infrastructure at Enterprise Scale.",
    creator: "@cbdesigner",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NCCVT8CH');`}
      </Script>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NCCVT8CH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Content protection: block right-click, keyboard shortcuts, drag */}
        <Script id="content-protection" strategy="afterInteractive">
          {`(function(){
  document.addEventListener('contextmenu',function(e){e.preventDefault();});
  document.addEventListener('keydown',function(e){
    if(e.ctrlKey&&(e.key==='p'||e.key==='P'||e.key==='s'||e.key==='S'||e.key==='u'||e.key==='U'||e.key==='c'||e.key==='C')){e.preventDefault();}
    if(e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='i'||e.key==='J'||e.key==='j')){e.preventDefault();}
    if(e.metaKey&&(e.key==='p'||e.key==='P'||e.key==='s'||e.key==='S'||e.key==='u'||e.key==='U'||e.key==='c'||e.key==='C')){e.preventDefault();}
    if(e.key==='F12'){e.preventDefault();}
    if(e.key==='PrintScreen'){e.preventDefault();navigator.clipboard.writeText('');}
  });
  document.addEventListener('dragstart',function(e){e.preventDefault();});
  document.addEventListener('copy',function(e){e.preventDefault();});
  document.addEventListener('cut',function(e){e.preventDefault();});
})();`}
        </Script>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Carlos Baeza",
            url: siteUrl,
            jobTitle: "Design Systems Architect",
            description:
              "Design Systems Architect building AI-Ready Agentic Design Systems Infrastructure at Enterprise Scale. 10+ years leading cross-functional teams at Banco Ripley, Enel, Bupa and more.",
            sameAs: [
              "https://twitter.com/cbdesigner",
              "https://www.linkedin.com/in/carlos-baeza-design/",
            ],
            knowsAbout: [
              "Design Systems",
              "Design Tokens",
              "Figma",
              "Storybook",
              "UX Strategy",
              "Product Design",
              "AI Design Systems",
              "Agentic Design",
              "Multi-brand Theming",
              "Design-to-Code Workflows",
            ],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Carlos Baeza — Design Systems Architect",
            url: siteUrl,
            description:
              "Portfolio of Carlos Baeza, Design Systems Architect specializing in AI-ready design infrastructure at enterprise scale.",
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="min-h-screen pt-22">{children}</main>
            <Footer />
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
