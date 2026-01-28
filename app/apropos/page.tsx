"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import { Book, Sunset, Trees, Zap, Linkedin, Mail, ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Timeline } from "@/components/ui/timeline"
import { LogoCloud } from "@/components/ui/logo-cloud-2"
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
    {
      title: "Blog",
      url: "/blog",
    },
  ],
  mobileExtraLinks: [],
  auth: {
    signup: { text: "Nous contacter", url: "/contact" },
  },
};

export default function AProposPage() {
  const timelineData = [
    {
      title: "Septembre 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Rencontre des fondateurs
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            Josselin et Chakib se rencontrent sur les bancs de CentraleSupélec. Partageant une vision commune sur l&apos;impact de l&apos;IA en santé, ils décident d&apos;unir leurs forces.
          </p>
        </div>
      ),
    },
    {
      title: "Décembre 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Genèse de ZenkoLab
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            Lancement officiel du projet. Premiers travaux de R&D sur les algorithmes de détection de pathologies rétiniennes.
          </p>
        </div>
      ),
    },
    {
      title: "Mars 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Preuve de Concept
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            Validation du premier prototype avec des taux de précision prometteurs. Intégration à l&apos;incubateur de CentraleSupélec.
          </p>
        </div>
      ),
    },
    {
      title: "Septembre 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Déploiement Pilote
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            Lancement des premiers partenariats avec des centres de santé et des orthoptistes pour tester la solution en conditions réelles.
          </p>
        </div>
      ),
    },
    {
      title: "À suivre...",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            L&apos;avenir s&apos;écrit maintenant
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            Nous continuons d&apos;innover pour rendre le dépistage ophtalmologique accessible à tous. Rejoignez-nous dans cette aventure !
          </p>
        </div>
      ),
    },
  ];

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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                Réinventer le dépistage <span className="text-primary">ophtalmologique</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                ZenkoLab allie expertise médicale et intelligence artificielle pour lutter contre les déserts médicaux et prévenir la cécité évitable.
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

        {/* Mission Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">Notre Mission</h2>
                  <div className="h-1.5 bg-blue-600 w-[100px] rounded-full mb-6" />
                </div>
                <p className="text-lg text-muted-foreground">
                  Face au vieillissement de la population et à la pénurie croissante d&apos;ophtalmologistes, les délais de rendez-vous s&apos;allongent dangereusement.
                </p>
                <p className="text-lg text-muted-foreground">
                  Notre mission est de déployer une solution de triage intelligent qui permet aux orthoptistes et aux centres de santé de pré-qualifier les dossiers patients. Nous permettons aux médecins de se concentrer sur les cas pathologiques nécessitant une expertise immédiate.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-border shadow-xl"
              >
                <div className="text-center p-6">
                  <Zap className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
                  <p className="text-white font-medium">Technologie de pointe au service de la vision</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">Nos Valeurs</h2>
              <div className="h-1.5 bg-blue-600 mx-auto rounded-full mb-6 w-[100px]" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Les piliers qui guident le développement de nos solutions au quotidien.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Book className="w-8 h-8 text-primary" />,
                  title: "Excellence Scientifique",
                  description: "Nos algorithmes sont validés cliniquement et développés en collaboration étroite avec des experts de la rétine."
                },
                {
                  icon: <Trees className="w-8 h-8 text-primary" />,
                  title: "Impact Social",
                  description: "Nous œuvrons pour réduire les inégalités d'accès aux soins visuels, partout sur le territoire."
                },
                {
                  icon: <Sunset className="w-8 h-8 text-primary" />,
                  title: "Transparence & Sécurité",
                  description: "La confidentialité des données de santé et l'explicabilité de nos résultats sont nos priorités absolues."
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-10 bg-background">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-12">
               <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">Notre Histoire</h2>
               <div className="h-1.5 bg-blue-600 mx-auto rounded-full mb-6 w-[100px]" />
             </div>
             <Timeline data={timelineData} />
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">L&apos;équipe fondatrice</h2>
              <div className="h-1.5 bg-blue-600 mx-auto rounded-full mb-6 w-[100px]" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Une alliance complémentaire entre expertise technique et vision stratégique.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Founder 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl bg-background border p-2 transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted relative">
                  <img 
                    src="/josselin.png" 
                    alt="Josselin Perret" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">Josselin Perret</h3>
                  <p className="text-primary font-medium mb-4">Cofondateur & CEO</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Étudiant à CentraleSupélec, il a réalisé un échange académique à l&apos;ESSEC Business School.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <a 
                      href="https://www.linkedin.com/in/josselin-perret" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center text-muted-foreground hover:text-[#0077b5] transition-colors"
                      aria-label="LinkedIn de Josselin Perret"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="mailto:josselinprrt@gmail.com"
                      className="inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Email de Josselin Perret"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Founder 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-background border p-2 transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted relative">
                  <img 
                    src="/chakib.png" 
                    alt="Chakib Lahrach" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">Chakib Lahrach</h3>
                  <p className="text-primary font-medium mb-4">Cofondateur & CTO</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Étudiant à CentraleSupélec. Vice-président d&apos;Automatants et président d&apos;Unaite.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <a 
                      href="https://www.linkedin.com/in/chakib-lahrach/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center text-muted-foreground hover:text-[#0077b5] transition-colors"
                      aria-label="LinkedIn de Chakib Lahrach"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="mailto:chakib.paris16@gmail.com"
                      className="inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Email de Chakib Lahrach"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <LogoCloud />

        {/* CTA Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">Prêt à rejoindre l&apos;aventure ?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Que vous soyez un professionnel de santé ou un partenaire potentiel, nous serions ravis d&apos;échanger avec vous.
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
