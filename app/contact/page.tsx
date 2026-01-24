"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import dynamic from "next/dynamic"
import { navbarData } from "@/lib/navigation"

const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))
const Contact2 = dynamic(() => import("@/components/ui/contact-2").then(mod => mod.Contact2))

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
