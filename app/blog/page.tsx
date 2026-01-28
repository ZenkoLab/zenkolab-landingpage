"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { FileText, Clock } from "lucide-react"

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

export default function BlogPage() {
  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background">
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
                Notre <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Actualités, insights et réflexions sur l&apos;intelligence artificielle appliquée à l&apos;ophtalmologie.
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
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="p-8 rounded-2xl border bg-card text-card-foreground shadow-sm">
                <div className="mb-6 p-4 bg-primary/10 w-fit mx-auto rounded-full">
                  <FileText className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Articles à venir
                </h2>
                <p className="text-muted-foreground mb-6">
                  Nous préparons du contenu de qualité sur l&apos;IA en santé, les pathologies rétiniennes et les innovations en ophtalmologie. Restez connectés !
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Bientôt disponible</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <StackedCircularFooter />
    </>
  )
}
