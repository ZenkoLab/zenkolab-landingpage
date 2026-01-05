import type { Metadata } from "next";

const baseUrl = "https://www.zenkolab.dev";

export const metadata: Metadata = {
  title: "À Propos - Notre Histoire et Notre Équipe",
  description:
    "Découvrez l'histoire de ZenkoLab, startup fondée par des étudiants de CentraleSupélec, dédiée à révolutionner le dépistage rétinien grâce à l'IA.",
  keywords: [
    "à propos ZenkoLab",
    "équipe ZenkoLab",
    "startup santé",
    "CentraleSupélec",
    "fondateurs",
    "histoire ZenkoLab",
    "incubateur",
  ],
  openGraph: {
    title: "À Propos | ZenkoLab",
    description:
      "L'histoire de ZenkoLab, startup dédiée au dépistage rétinien par IA.",
    url: `${baseUrl}/apropos`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ZenkoLab - À Propos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos | ZenkoLab",
    description:
      "L'histoire de ZenkoLab, startup dédiée au dépistage rétinien par IA.",
  },
  alternates: {
    canonical: `${baseUrl}/apropos`,
  },
};
