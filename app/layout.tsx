import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

const baseUrl = "https://www.zenkolab.dev";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ZenkoLab | IA pour le Dépistage Rétinien",
    template: "%s | ZenkoLab",
  },
  description:
    "ZenkoLab développe des solutions d'intelligence artificielle pour le dépistage automatisé des pathologies rétiniennes. Un oeil sur demain, dès aujourd'hui.",
  keywords: [
    "ZenkoLab",
    "intelligence artificielle",
    "IA santé",
    "ophtalmologie",
    "rétinopathie",
    "dépistage rétinien",
    "imagerie médicale",
    "OCT",
    "fond d'oeil",
    "diabète",
    "DMLA",
    "glaucome",
    "orthoptiste",
    "ophtalmologiste",
    "diagnostic automatisé",
    "healthtech",
    "medtech",
    "France",
  ],
  authors: [{ name: "ZenkoLab", url: baseUrl }],
  creator: "ZenkoLab",
  publisher: "ZenkoLab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: baseUrl,
    siteName: "ZenkoLab",
    title: "ZenkoLab | IA pour le Dépistage Rétinien",
    description:
      "ZenkoLab développe des solutions d'intelligence artificielle pour le dépistage automatisé des pathologies rétiniennes. Un oeil sur demain, dès aujourd'hui.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ZenkoLab - IA pour le Dépistage Rétinien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZenkoLab | IA pour le Dépistage Rétinien",
    description:
      "ZenkoLab développe des solutions d'intelligence artificielle pour le dépistage automatisé des pathologies rétiniennes.",
    images: ["/opengraph-image.png"],
    creator: "@zenkolab",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "technology",
  classification: "Medical Technology",
};

// JSON-LD structured data for the organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZenkoLab",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description:
    "ZenkoLab développe des solutions d'intelligence artificielle pour le dépistage automatisé des pathologies rétiniennes.",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Josselin",
    },
    {
      "@type": "Person",
      name: "Chakib",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: `${baseUrl}/contact`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
