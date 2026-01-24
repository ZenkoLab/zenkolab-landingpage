"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export function LogoCloud() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block text-sm font-medium text-brand mb-3">
            Écosystème
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Nos partenaires et <span className="text-gradient">soutiens</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative grid grid-cols-2 md:grid-cols-3 border border-border rounded-2xl overflow-hidden"
        >
          <LogoCard
            className="border-r border-b bg-background"
            logo={{
              src: "/21st.png",
              alt: "21st",
              className: "h-10 w-auto md:h-14",
            }}
          />

          <LogoCard
            className="border-b md:border-r bg-muted/50"
            logo={{
              src: "https://upload.wikimedia.org/wikipedia/fr/8/86/Logo_CentraleSup%C3%A9lec.svg",
              alt: "CentraleSupélec",
              className: "h-10 w-auto md:h-16",
            }}
          />

          <LogoCard
            className="border-r border-b md:border-r-0 bg-background"
            logo={{
              src: "/docrezo.png",
              alt: "DocRezo",
              className: "h-10 w-auto md:h-14",
            }}
          />

          <LogoCard
            className="border-b md:border-r md:border-b-0 bg-muted/50"
            logo={{
              src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Inr_logo_rouge.svg",
              alt: "Inria",
              className: "h-10 w-auto md:h-14",
            }}
          />

          <LogoCard
            className="border-r md:border-b-0 bg-background"
            logo={{
              src: "/aphp.png",
              alt: "APHP",
              className: "h-10 w-auto md:h-14",
            }}
          />

          <LogoCard
            className="bg-muted/50"
            logo={{
              src: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Logo_Universit%C3%A9_Paris-Saclay_2019-12.svg",
              alt: "Université Paris-Saclay",
              className: "h-10 w-auto md:h-16",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

interface LogoCardProps {
  logo: Logo;
  className?: string;
}

function LogoCard({ logo, className }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-6 py-10 md:py-12 transition-colors hover:bg-brand/5",
        className
      )}
    >
      <img
        alt={logo.alt}
        className={cn(
          "pointer-events-none select-none dark:brightness-0 dark:invert object-contain transition-transform hover:scale-105",
          logo.className || "h-4 md:h-5"
        )}
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
    </div>
  );
}
