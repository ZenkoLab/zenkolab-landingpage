"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))
const AiPipelineSection = dynamic(() => import("@/components/ai-pipeline/ai-pipeline-section").then(mod => mod.AiPipelineSection))
const AiPerformanceSection = dynamic(() => import("@/components/analytics/ai-performance-section").then(mod => mod.AiPerformanceSection))
const GlossarySection = dynamic(() => import("@/components/analytics/glossary-section").then(mod => mod.GlossarySection))

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

export default function ProduitPage() {
  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background pt-20 md:pt-24">
        {/* AI Performance Section */}
        <div className="mb-0">
          <AiPerformanceSection />
        </div>

        {/* Pipeline Section */}
        <AiPipelineSection />

        {/* Glossary Section */}
        <div className="container mx-auto px-4 md:px-6 py-20">
            <GlossarySection />
        </div>
      </main>
      <StackedCircularFooter />
    </>
  )
}
