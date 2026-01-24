"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    suffix?: string;
    action?: {
      text: string;
      href: string;
    } | null;
  };
  title: string;
  description: string;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  const { resolvedTheme } = useTheme();
  const imageSrc = resolvedTheme === "dark" ? image.dark : image.light;

  return (
    <section
      className={cn(
        "relative bg-background text-foreground",
        "py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8",
        "overflow-hidden"
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge 
                variant="outline" 
                className="gap-2 px-4 py-2 rounded-full border-brand/30 bg-brand/5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                <span className="text-brand font-medium">
                  {badge.text}
                </span>
                {badge.suffix && (
                  <span className="text-muted-foreground">{badge.suffix}</span>
                )}
                {badge.action && (
                  <a href={badge.action.href} className="flex items-center gap-1 text-brand hover:text-brand/80">
                    {badge.action.text}
                    <ArrowRightIcon className="h-3 w-3" />
                  </a>
                )}
              </Badge>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-foreground">Un œil sur </span>
            <span className="text-gradient">demain</span>
            <span className="text-foreground">,</span>
            <br />
            <span className="text-foreground">dès aujourd&apos;hui.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10 flex flex-wrap justify-center gap-4 mt-4"
          >
            {actions.map((action, index) => {
              if (index === 0) {
                return (
                  <Button 
                    key={index} 
                    asChild 
                    size="lg" 
                    className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30 transition-all h-12 px-8 text-base"
                  >
                    <a href={action.href} className="flex items-center gap-2">
                      {action.text}
                      <ArrowRightIcon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              }
              return (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="rounded-full h-12 px-8 text-base"
                >
                  <a href={action.href} className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              );
            })}
          </motion.div>

          {/* Image with Glow */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative mt-12 md:mt-16 w-full max-w-5xl"
          >
            <MockupFrame
              className=""
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={imageSrc}
                  alt={image.alt}
                  width={1248}
                  height={765}
                  priority
                  className="rounded-lg"
                />
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="opacity-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
