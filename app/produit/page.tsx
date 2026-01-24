"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import dynamic from "next/dynamic"
import { navbarData } from "@/lib/navigation"

const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))
const AiPipelineSection = dynamic(() => import("@/components/ai-pipeline/ai-pipeline-section").then(mod => mod.AiPipelineSection))
const AiPerformanceSection = dynamic(() => import("@/components/analytics/ai-performance-section").then(mod => mod.AiPerformanceSection))
const GlossarySection = dynamic(() => import("@/components/analytics/glossary-section").then(mod => mod.GlossarySection))

export default function ProduitPage() {
  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background">
        {/* AI Performance Section */}
        <div className="pt-8">
          <AiPerformanceSection />
        </div>

        {/* Pipeline Section */}
        <AiPipelineSection />

        {/* Glossary Section */}
        <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GlossarySection />
          </div>
        </div>
      </main>
      <StackedCircularFooter />
    </>
  )
}
