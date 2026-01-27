import type { Metadata } from "next";

const baseUrl = "https://www.zenkolab.dev";

export const metadata: Metadata = {
  title: "Blog - Actualités et Insights",
  description:
    "Découvrez nos articles sur l'intelligence artificielle en ophtalmologie, les dernières avancées en dépistage rétinien et l'actualité de ZenkoLab.",
  keywords: [
    "blog ZenkoLab",
    "actualités IA santé",
    "articles ophtalmologie",
    "dépistage rétinien",
    "intelligence artificielle médicale",
    "innovation santé",
  ],
  openGraph: {
    title: "Blog | ZenkoLab",
    description:
      "Articles et actualités sur l'IA en ophtalmologie et le dépistage rétinien.",
    url: `${baseUrl}/blog`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ZenkoLab - Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | ZenkoLab",
    description:
      "Articles et actualités sur l'IA en ophtalmologie et le dépistage rétinien.",
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};
