"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import { Book, Sunset, Trees, Zap } from "lucide-react"
import dynamic from "next/dynamic"

const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))
const Pricing = dynamic(() => import("@/components/ui/single-pricing-card-1").then(mod => mod.Pricing))

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

export default function TarifsPage() {
  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background">
        <Pricing />
      </main>
      <StackedCircularFooter />
    </>
  )
}
