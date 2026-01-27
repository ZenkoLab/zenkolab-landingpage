"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import { HelpCircle, ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))

const navbarData = {
  logo: {
    url: "/",
    src: "/logo.png",
    alt: "Zenkolab Logo",
    title: "zenkolab",
  },
  menu: [
    {
      title: "Accueil",
      url: "/",
    },
    {
      title: "Produit",
      url: "/produit",
    },
    {
      title: "Tarifs",
      url: "/tarifs",
    },
    {
      title: "À propos",
      url: "/apropos",
    },
  ],
  mobileExtraLinks: [],
  auth: {
    signup: { text: "Nous contacter", url: "/contact" },
  },
};

const faqData = [
  {
    question: "Quel est le taux de précision de ZenkoLab ?",
    answer: "ZenkoLab atteint une sensibilité de 94% et une spécificité de 87% pour la détection de la DMLA, validée sur plus de 5 000 images cliniques. Ces résultats sont comparables aux standards ophtalmologiques."
  },
  {
    question: "ZenkoLab remplace-t-il l'ophtalmologue ?",
    answer: "Non, ZenkoLab est un outil d'aide à la décision. L'ophtalmologue reste responsable du diagnostic final. ZenkoLab permet de prioriser les cas urgents et de gagner du temps."
  },
  {
    question: "Quels formats d'images sont supportés ?",
    answer: "Rétinographies couleur (JPG, PNG) et coupes OCT (DICOM, JPG). Résolution minimale : 1024x1024 pixels."
  },
  {
    question: "Combien de temps prend l'analyse ?",
    answer: "Entre 5 et 15 secondes par image, selon la résolution et la charge serveur."
  },
  {
    question: "Les données des patients sont-elles sécurisées ?",
    answer: "Oui, ZenkoLab est hébergé en France (HDS), conforme RGPD, avec chiffrement end-to-end et audit de sécurité annuel."
  },
  {
    question: "Puis-je intégrer ZenkoLab à mon logiciel existant ?",
    answer: "Oui, via notre API REST. Documentation disponible pour les clients Professionnel et Entreprise."
  },
  {
    question: "Quel est le coût de formation ?",
    answer: "Formation incluse dans les plans Professionnel et Entreprise. Durée : 2-4 heures selon le nombre d'utilisateurs."
  },
  {
    question: "Y a-t-il un support technique ?",
    answer: "Oui, support email standard inclus. Support prioritaire (réponse < 2h) pour les plans Professionnel et Entreprise."
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <HelpCircle className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                Questions <span className="text-primary">Fréquentes</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Trouvez rapidement les réponses à vos questions sur ZenkoLab, notre technologie et nos services.
              </p>
            </motion.div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" 
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <AccordionItem value={`item-${index}`} className="bg-card rounded-lg mb-4 px-6 border shadow-sm">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold text-foreground">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
              Vous avez d&apos;autres questions ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos interrogations et vous accompagner dans votre projet.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Nous contacter <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <StackedCircularFooter />
    </>
  )
}
