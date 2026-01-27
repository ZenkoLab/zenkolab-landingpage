"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import { Eye, Building2, Home, Users, ArrowRight, CheckCircle2 } from "lucide-react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
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
      title: "Cas d'usage",
      url: "/cas-d-usage",
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

const useCases = [
  {
    icon: <Eye className="w-10 h-10" />,
    title: "Orthoptistes",
    subtitle: "Optimisez votre pratique quotidienne",
    description: "Bénéficiez d'un second avis instantané sur vos examens de fond d'œil. Notre IA vous aide à identifier rapidement les patients nécessitant une prise en charge prioritaire par l'ophtalmologiste.",
    benefits: [
      "Aide à la décision en temps réel",
      "Réduction du risque d'erreur diagnostique",
      "Documentation automatique des anomalies détectées",
      "Gain de temps sur le triage des patients"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Centres de Santé",
    subtitle: "Élargissez votre offre de soins visuels",
    description: "Proposez un dépistage rétinien de qualité sans nécessiter la présence permanente d'un ophtalmologiste. Idéal pour les zones à accès limité aux soins spécialisés.",
    benefits: [
      "Dépistage accessible pour tous les patients",
      "Réduction des délais de prise en charge",
      "Collaboration simplifiée avec les spécialistes",
      "Valorisation de votre offre de prévention"
    ],
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: <Home className="w-10 h-10" />,
    title: "Maisons de Santé Pluriprofessionnelles",
    subtitle: "Coordonnez le parcours de soins visuels",
    description: "Intégrez le dépistage rétinien dans votre approche pluridisciplinaire. Notre solution facilite la coordination entre généralistes, diabétologues et ophtalmologistes.",
    benefits: [
      "Parcours patient coordonné et fluide",
      "Dépistage systématique des patients à risque",
      "Partage sécurisé des résultats entre professionnels",
      "Suivi longitudinal des patients chroniques"
    ],
    color: "from-violet-500 to-violet-600"
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Cabinets d'Ophtalmologie",
    subtitle: "Concentrez-vous sur les cas complexes",
    description: "Libérez du temps médical en automatisant le triage des examens de routine. Notre IA pré-qualifie les dossiers pour vous permettre de vous concentrer sur les cas pathologiques.",
    benefits: [
      "Optimisation du temps médical précieux",
      "Augmentation de la capacité de consultation",
      "Standardisation de la qualité du dépistage",
      "Meilleure répartition des ressources"
    ],
    color: "from-orange-500 to-orange-600"
  }
];

export default function CasDUsagePage() {
  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                Une solution adaptée à <span className="text-primary">chaque pratique</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Découvrez comment ZenkoLab s&apos;intègre à votre quotidien pour améliorer le dépistage des pathologies rétiniennes.
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

        {/* Use Cases Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full p-8 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300">
                    {/* Icon with gradient background */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${useCase.color} text-white mb-6 shadow-lg`}>
                      {useCase.icon}
                    </div>
                    
                    {/* Content */}
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {useCase.title}
                    </h2>
                    <p className="text-primary font-medium mb-4">
                      {useCase.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    {/* Benefits list */}
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Un impact mesurable
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Les bénéfices concrets de l&apos;intégration de ZenkoLab dans votre pratique.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "95%", label: "Sensibilité de détection" },
                { value: "<30s", label: "Temps d'analyse" },
                { value: "6+", label: "Pathologies détectées" },
                { value: "100%", label: "Traçabilité des examens" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Prêt à transformer votre pratique ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discutons ensemble de la meilleure façon d&apos;intégrer ZenkoLab à votre environnement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="gap-2">
                    Demander une démo <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/produit">
                  <Button size="lg" variant="outline" className="gap-2">
                    Découvrir le produit
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <StackedCircularFooter />
    </>
  )
}
