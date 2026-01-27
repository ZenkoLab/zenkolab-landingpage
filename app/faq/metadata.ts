import type { Metadata } from "next";

const baseUrl = "https://www.zenkolab.dev";

export const metadata: Metadata = {
  title: "FAQ - Questions Fréquentes",
  description:
    "Trouvez les réponses à vos questions sur ZenkoLab : précision, sécurité des données, formats supportés, intégration API et support technique.",
  keywords: [
    "FAQ ZenkoLab",
    "questions fréquentes",
    "précision IA",
    "sécurité données santé",
    "RGPD",
    "API REST",
    "support technique",
    "DMLA",
    "OCT",
    "rétinographie",
  ],
  openGraph: {
    title: "FAQ | ZenkoLab",
    description:
      "Trouvez les réponses à vos questions sur ZenkoLab : précision, sécurité, formats supportés et plus.",
    url: `${baseUrl}/faq`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ZenkoLab - FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | ZenkoLab",
    description:
      "Trouvez les réponses à vos questions sur ZenkoLab : précision, sécurité, formats supportés et plus.",
  },
  alternates: {
    canonical: `${baseUrl}/faq`,
  },
};
