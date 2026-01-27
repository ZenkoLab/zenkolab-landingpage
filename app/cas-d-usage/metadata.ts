import type { Metadata } from "next";

const baseUrl = "https://www.zenkolab.dev";

export const metadata: Metadata = {
  title: "Cas d'Usage - Applications de Notre IA",
  description:
    "Découvrez comment ZenkoLab aide les professionnels de santé : orthoptistes, ophtalmologistes, centres de santé et maisons de santé pluriprofessionnelles dans le dépistage rétinien.",
  keywords: [
    "cas d'usage ZenkoLab",
    "orthoptiste IA",
    "centre de santé dépistage",
    "maison de santé pluriprofessionnelle",
    "ophtalmologiste IA",
    "dépistage rétinien",
    "télémédecine ophtalmologie",
    "déserts médicaux",
  ],
  openGraph: {
    title: "Cas d'Usage | ZenkoLab",
    description:
      "Découvrez comment ZenkoLab transforme le dépistage rétinien pour différents professionnels de santé.",
    url: `${baseUrl}/cas-d-usage`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ZenkoLab - Cas d'Usage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cas d'Usage | ZenkoLab",
    description:
      "Découvrez comment ZenkoLab transforme le dépistage rétinien pour différents professionnels de santé.",
  },
  alternates: {
    canonical: `${baseUrl}/cas-d-usage`,
  },
};
