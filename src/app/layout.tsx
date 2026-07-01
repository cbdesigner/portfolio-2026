import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ImageLightbox from "@/components/ImageLightbox";
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
    "Design System Governance",
    "Scalable Design Infrastructure",
    "Enterprise Design Systems",
    "UX Strategy",
    "Design System Methodology",
    "Lima Designer",
    "South America Design",
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FF3ZGYF0TR"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FF3ZGYF0TR');`}
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
            "@id": `${siteUrl}/#person`,
            name: "Carlos Baeza",
            url: siteUrl,
            image: "/opengraph-image",
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
              "Design System Governance",
              "Scalable Design Infrastructure",
            ],
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-12.0464",
              longitude: "-77.0428",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "PE",
              addressRegion: "Lima",
              addressLocality: "Lima",
            },
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
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${siteUrl}/projects?q={search_term_string}`,
              },
              "query-input": "required name=search_term_string",
            },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Carlos Baeza — Design Systems Architect",
            url: siteUrl,
            description:
              "Design Systems Architect with 10+ years of experience at Banco Ripley, Enel, Bupa, and more. Specializing in AI-ready design infrastructure, design tokens, and enterprise-scale systems.",
            mainEntity: {
              "@type": "Person",
              name: "Carlos Baeza",
              jobTitle: "Design Systems Architect",
              url: siteUrl,
              image: "/opengraph-image",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-12.0464",
                longitude: "-77.0428",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "PE",
                addressRegion: "Lima",
              },
            },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Design System Architect?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Design Systems Architect builds and scales design infrastructure across enterprise organizations. They define design tokens, component libraries, and governance models that enable teams to maintain consistency while moving fast.",
                },
              },
              {
                "@type": "Question",
                name: "What experience does Carlos Baeza have?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Carlos Baeza has 10+ years leading design systems at scale. He's built design infrastructure at Banco Ripley (Chek, Ripley), Enel, Bupa, ShipBob, and more. His work spans mobile apps, web platforms, and cross-brand theming.",
                },
              },
              {
                "@type": "Question",
                name: "What tools does Carlos Baeza use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Carlos specializes in Figma (design), Storybook (documentation), React (frontend), design tokens, and governance frameworks. He also works with Ionic for mobile, Tailwind CSS, and enterprise CI/CD pipelines.",
                },
              },
              {
                "@type": "Question",
                name: "Is Carlos Baeza available for consulting or freelance work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Contact Carlos via the contact page for inquiries about design systems consulting, architecture reviews, or team mentorship.",
                },
              },
            ],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: `${siteUrl}/projects`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Profile",
                item: `${siteUrl}/profile`,
              },
            ],
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="min-h-screen pt-22">{children}</main>
            <Footer />
            <BackToTop />
            <ImageLightbox />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
