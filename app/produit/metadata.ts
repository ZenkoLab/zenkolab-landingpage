import type { Metadata } from "next";

const baseUrl = "https://www.zenkolab.dev";

export const metadata: Metadata = {
  title: "Notre Produit - IA de Dépistage Rétinien",
  description:
    "Découvrez notre solution d'intelligence artificielle pour le dépistage automatisé des pathologies rétiniennes : rétinopathie diabétique, DMLA, glaucome et plus encore.",
  keywords: [
    "produit ZenkoLab",
    "IA dépistage",
    "analyse OCT",
    "fond d'oeil automatisé",
    "détection pathologies",
    "rétinopathie diabétique",
    "DMLA",
    "glaucome",
    "performance IA",
  ],
  openGraph: {
    title: "Notre Produit | ZenkoLab",
    description:
      "Solution d'intelligence artificielle pour le dépistage automatisé des pathologies rétiniennes avec une précision exceptionnelle.",
    url: `${baseUrl}/produit`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ZenkoLab - Notre Produit IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notre Produit | ZenkoLab",
    description:
      "Solution d'IA pour le dépistage automatisé des pathologies rétiniennes.",
  },
  alternates: {
    canonical: `${baseUrl}/produit`,
  },
};
