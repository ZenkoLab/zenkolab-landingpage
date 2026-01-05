import type { Metadata } from "next";

const baseUrl = "https://www.zenkolab.dev";

export const metadata: Metadata = {
  title: "Tarifs - Plans et Abonnements",
  description:
    "Découvrez nos offres tarifaires adaptées aux ophtalmologistes, orthoptistes et centres de santé. Solution IA de dépistage rétinien à la carte.",
  keywords: [
    "tarifs ZenkoLab",
    "prix IA santé",
    "abonnement dépistage",
    "offre ophtalmologie",
    "solution orthoptiste",
    "centre de santé",
  ],
  openGraph: {
    title: "Tarifs | ZenkoLab",
    description:
      "Offres tarifaires adaptées à votre pratique pour le dépistage rétinien par IA.",
    url: `${baseUrl}/tarifs`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ZenkoLab - Tarifs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs | ZenkoLab",
    description:
      "Offres tarifaires adaptées à votre pratique pour le dépistage rétinien par IA.",
  },
  alternates: {
    canonical: `${baseUrl}/tarifs`,
  },
};
