"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import { Book, Sunset, Trees, Zap, Linkedin, Mail, ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Timeline } from "@/components/ui/timeline"
import { LogoCloud } from "@/components/ui/logo-cloud-2"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { navbarData } from "@/lib/navigation"

const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))

export default function AProposPage() {
  const timelineData = [
    {
      title: "Septembre 2024",
      content: (
        <div>
          <p className="text-brand text-xs md:text-sm font-medium mb-2">
            Rencontre des fondateurs
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Josselin et Chakib se rencontrent sur les bancs de CentraleSupélec. Partageant une vision commune sur l&apos;impact de l&apos;IA en santé, ils décident d&apos;unir leurs forces.
          </p>
        </div>
      ),
    },
    {
      title: "Décembre 2024",
      content: (
        <div>
          <p className="text-brand text-xs md:text-sm font-medium mb-2">
            Genèse de ZenkoLab
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Lancement officiel du projet. Premiers travaux de R&D sur les algorithmes de détection de pathologies rétiniennes.
          </p>
        </div>
      ),
    },
    {
      title: "Mars 2025",
      content: (
        <div>
          <p className="text-brand text-xs md:text-sm font-medium mb-2">
            Preuve de Concept
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Validation du premier prototype avec des taux de précision prometteurs. Intégration à l&apos;incubateur de CentraleSupélec.
          </p>
        </div>
      ),
    },
    {
      title: "Septembre 2025",
      content: (
        <div>
          <p className="text-brand text-xs md:text-sm font-medium mb-2">
            Déploiement Pilote
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Lancement des premiers partenariats avec des centres de santé et des orthoptistes pour tester la solution en conditions réelles.
          </p>
        </div>
      ),
    },
    {
      title: "À suivre...",
      content: (
        <div>
          <p className="text-brand text-xs md:text-sm font-medium mb-2">
            L&apos;avenir s&apos;écrit maintenant
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
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
        <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-brand/10 rounded-full blur-3xl"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-0 right-1/4 w-80 md:w-[500px] h-80 md:h-[500px] bg-cyan-400/10 rounded-full blur-3xl"
            />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block text-sm font-medium text-brand mb-3">
                À propos
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
                Réinventer le dépistage <span className="text-gradient">ophtalmologique</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                ZenkoLab allie expertise médicale et intelligence artificielle pour lutter contre les déserts médicaux et prévenir la cécité évitable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-muted/30 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <span className="inline-block text-sm font-medium text-brand mb-3">
                    Notre raison d&apos;être
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Notre Mission</h2>
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Face au vieillissement de la population et à la pénurie croissante d&apos;ophtalmologistes, les délais de rendez-vous s&apos;allongent dangereusement.
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Notre mission est de déployer une solution de triage intelligent qui permet aux orthoptistes et aux centres de santé de pré-qualifier les dossiers patients. Nous permettons aux médecins de se concentrer sur les cas pathologiques nécessitant une expertise immédiate.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-brand/20 to-cyan-400/20 flex items-center justify-center border border-border"
              >
                <div className="text-center p-6">
                  <div className="w-20 h-20 rounded-full bg-brand/20 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-brand" />
                  </div>
                  <p className="text-foreground font-medium text-lg">Technologie de pointe au service de la vision</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-medium text-brand mb-3">
                Ce qui nous guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Nos Valeurs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Les piliers qui guident le développement de nos solutions au quotidien.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Book className="w-6 h-6 text-brand" />,
                  title: "Excellence Scientifique",
                  description: "Nos algorithmes sont validés cliniquement et développés en collaboration étroite avec des experts de la rétine."
                },
                {
                  icon: <Trees className="w-6 h-6 text-brand" />,
                  title: "Impact Social",
                  description: "Nous œuvrons pour réduire les inégalités d'accès aux soins visuels, partout sur le territoire."
                },
                {
                  icon: <Sunset className="w-6 h-6 text-brand" />,
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
                  className="p-6 rounded-2xl border border-border bg-background hover:border-brand/30 hover:shadow-lg transition-all group"
                >
                  <div className="mb-4 p-3 bg-brand/10 w-fit rounded-xl group-hover:bg-brand/20 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-muted/30 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-medium text-brand mb-3">
                Notre parcours
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Notre Histoire</h2>
            </motion.div>
            <Timeline data={timelineData} />
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-medium text-brand mb-3">
                Les visages derrière ZenkoLab
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">L&apos;équipe fondatrice</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Une alliance complémentaire entre expertise technique et vision stratégique.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {/* Founder 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl bg-background border border-border p-2 transition-all hover:border-brand/30 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted relative">
                  <img 
                    src="/josselin.png" 
                    alt="Josselin Perret" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-xl font-bold">Josselin Perret</h3>
                  <p className="text-brand font-medium mb-3">Cofondateur & CEO</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Étudiant à CentraleSupélec, il a réalisé un échange académique à l&apos;ESSEC Business School.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a 
                      href="https://www.linkedin.com/in/josselin-perret" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-[#0077b5] hover:border-[#0077b5] transition-colors"
                      aria-label="LinkedIn de Josselin Perret"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="mailto:josselinprrt@gmail.com"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-brand hover:border-brand transition-colors"
                      aria-label="Email de Josselin Perret"
                    >
                      <Mail className="w-5 h-5" />
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
                className="group relative overflow-hidden rounded-2xl bg-background border border-border p-2 transition-all hover:border-brand/30 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted relative">
                  <img 
                    src="/chakib.png" 
                    alt="Chakib Lahrach" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-xl font-bold">Chakib Lahrach</h3>
                  <p className="text-brand font-medium mb-3">Cofondateur & CTO</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Étudiant à CentraleSupélec. Vice-président d&apos;Automatants et président d&apos;Unaite.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a 
                      href="https://www.linkedin.com/in/chakib-lahrach/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-[#0077b5] hover:border-[#0077b5] transition-colors"
                      aria-label="LinkedIn de Chakib Lahrach"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="mailto:chakib.paris16@gmail.com"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-brand hover:border-brand transition-colors"
                      aria-label="Email de Chakib Lahrach"
                    >
                      <Mail className="w-5 h-5" />
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
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
                Prêt à rejoindre <span className="text-gradient">l&apos;aventure</span> ?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Que vous soyez un professionnel de santé ou un partenaire potentiel, nous serions ravis d&apos;échanger avec vous.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground h-12 px-8 shadow-lg shadow-brand/25">
                  Nous contacter <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <StackedCircularFooter />
    </>
  )
}
