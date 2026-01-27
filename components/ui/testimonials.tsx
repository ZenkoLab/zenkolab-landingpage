"use client";

import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "ZenkoLab a transformé notre pratique. L'analyse automatisée nous permet de détecter les cas urgents bien plus rapidement.",
    author: "Dr. Marie Lefebvre",
    role: "Ophtalmologue",
    organization: "Centre Hospitalier de Lyon",
  },
  {
    quote: "L'intégration avec nos équipements existants s'est faite sans friction. Nos orthoptistes ont gagné un temps précieux.",
    author: "Dr. Thomas Martin",
    role: "Chef de service",
    organization: "Clinique Ophtalmologique de Paris",
  },
  {
    quote: "La priorisation des dossiers à risque nous aide à mieux organiser nos consultations et à traiter les urgences en premier.",
    author: "Sophie Durand",
    role: "Orthoptiste",
    organization: "Cabinet d'Ophtalmologie de Bordeaux",
  },
];

type TestimonialsProps = React.ComponentProps<"section">;

export function Testimonials({ className, ...props }: TestimonialsProps) {
  return (
    <section className={cn("py-16 px-6", className)} {...props}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Témoignages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ce que disent nos utilisateurs.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative flex flex-col justify-between rounded-[1.25rem] border-[0.75px] border-border p-6 bg-background shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
      <div className="mb-4">
        <Quote className="h-8 w-8 text-muted-foreground/40" />
      </div>
      <blockquote className="flex-1 mb-6">
        <p className="text-base leading-relaxed text-foreground">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{testimonial.author}</p>
        <p className="text-sm text-muted-foreground">
          {testimonial.role}, {testimonial.organization}
        </p>
      </div>
    </div>
  );
}
