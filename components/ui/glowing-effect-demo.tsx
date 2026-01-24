"use client";

import { Image, Star, Smile, AlertCircle } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function GlowingEffectDemo() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-sm font-medium text-brand mb-3">
            Fonctionnalités clés
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Conçu pour le <span className="text-gradient">terrain</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Une solution pensée pour s&apos;intégrer naturellement à votre pratique quotidienne.
          </p>
        </motion.div>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Image className="h-5 w-5 text-brand" />}
            title="Lecture des fonds d'œil et OCT"
            description="ZenkoLab analyse automatiquement les rétinographies et coupes OCT pour détecter les signes de DMLA, rétinopathie diabétique et glaucome."
            delay={0}
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Star className="h-5 w-5 text-brand" />}
            title="Priorisation des urgences"
            description="Les dossiers à risque remontent en priorité. L'ophtalmologiste se concentre sur les cas qui nécessitent son expertise."
            delay={0.1}
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Smile className="h-5 w-5 text-brand" />}
            title="Intégration à vos logiciels"
            description="ZenkoLab se connecte à votre rétinographe et à votre OCT. Pas de changement d'habitude, pas de nouveau matériel."
            delay={0.2}
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<AlertCircle className="h-5 w-5 text-brand" />}
            title="Conforme et sécurisé"
            description="Hébergement HDS, conformité RGPD. Vos données restent en France."
            delay={0.3}
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  delay?: number;
}

const GridItem = ({ area, icon, title, description, delay = 0 }: GridItemProps) => {
  return (
    <motion.li 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn("min-h-[14rem] list-none", area)}
    >
      <div className="relative h-full rounded-2xl border border-border p-2 md:rounded-3xl md:p-3 group">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-background p-6 shadow-sm transition-shadow group-hover:shadow-md md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-xl border border-border bg-brand/5 p-3">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
