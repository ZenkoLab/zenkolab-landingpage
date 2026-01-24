"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import dynamic from "next/dynamic"
import { navbarData } from "@/lib/navigation"

const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))
const Pricing = dynamic(() => import("@/components/ui/single-pricing-card-1").then(mod => mod.Pricing))

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
