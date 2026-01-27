import type { Metadata } from "next";

const baseUrl = "https://www.zenkolab.dev";

export const metadata: Metadata = {
  title: "Contact - Demandez une Démo",
  description:
    "Contactez l'équipe ZenkoLab pour demander une démonstration de notre solution IA de dépistage rétinien ou pour toute question.",
  keywords: [
    "contact ZenkoLab",
    "demande démo",
    "démonstration IA",
    "contacter équipe",
    "partenariat santé",
  ],
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
  openGraph: {
    title: "Contact | ZenkoLab",
    description:
      "Contactez-nous pour une démonstration de notre solution IA de dépistage rétinien.",
    url: `${baseUrl}/contact`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ZenkoLab - Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | ZenkoLab",
    description:
      "Contactez-nous pour une démonstration de notre solution IA de dépistage rétinien.",
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};
