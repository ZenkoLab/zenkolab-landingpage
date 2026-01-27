"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import { Book, Sunset, Trees, Zap } from "lucide-react"
import dynamic from "next/dynamic"

const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))
const Contact2 = dynamic(() => import("@/components/ui/contact-2").then(mod => mod.Contact2))

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

export default function ContactPage() {
  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background">
        <Contact2 />
      </main>
      <StackedCircularFooter />
    </>
  )
}
