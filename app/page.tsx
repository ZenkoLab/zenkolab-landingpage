"use client"

import { HeroSection } from "@/components/blocks/hero-section"
import { Navbar1 } from "@/components/blocks/navbar1"
import { Icons } from "@/components/ui/icons"
import { Book, Sunset, Trees, Zap } from "lucide-react"
import dynamic from "next/dynamic"

const GlowingEffectDemo = dynamic(() => import("@/components/ui/glowing-effect-demo").then(mod => mod.GlowingEffectDemo))
const LogoCloud = dynamic(() => import("@/components/ui/logo-cloud-2").then(mod => mod.LogoCloud))
const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))
const HomePipeline = dynamic(() => import("@/components/home-pipeline/home-pipeline").then(mod => mod.HomePipeline))

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

export default function Home() {
  return (
    <main>
      <Navbar1 {...navbarData} />
      <HeroSection
        badge={{
          text: "En déploiement",
          suffix: "avec nos premiers partenaires",
          action: null,
        }}
        title="Un œil sur demain, dès aujourd'hui."
        description="Aidez vos orthoptistes à identifier les patients à risque, plus vite."
        actions={[
          {
            text: "Demander une démo",
            href: "/contact",
            variant: "default",
          },
        ]}
        image={{
          light: "/mookkup.png",
          dark: "/mookkup.png",
          alt: "Zenkolab Preview",
        }}
      />
      <GlowingEffectDemo />
      <HomePipeline />
      <LogoCloud />
      <StackedCircularFooter />
    </main>
  )
}
