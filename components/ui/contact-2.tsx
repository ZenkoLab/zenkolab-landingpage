"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle, Mail, Linkedin, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contactez-nous",
  description = "Nous sommes disponibles pour répondre à vos questions, discuter de vos besoins ou explorer des opportunités de collaboration.",
  phone = "+33 6 00 00 00 00",
  email = "josselinprrt@gmail.com",
  web = { label: "zenkolab.com", url: "https://zenkolab.com" },
}: Contact2Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="inline-block text-sm font-medium text-brand mb-3">
                Contact
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
                Discutons de <span className="text-gradient">votre projet</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-md mb-8">
                {description}
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <a 
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-brand/50 hover:bg-brand/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                    <Mail className="h-5 w-5 text-brand" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground text-sm truncate">{email}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-brand transition-colors" />
                </a>

                <a 
                  href="https://www.linkedin.com/company/zenkolab-ia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-brand/50 hover:bg-brand/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-brand" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-muted-foreground text-sm">ZenkoLab</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-brand transition-colors" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background">
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-brand" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">Localisation</p>
                    <p className="text-muted-foreground text-sm">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-10"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4"
              >
                <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold">Message envoyé !</h3>
                <p className="text-muted-foreground max-w-sm">
                  Merci de nous avoir contactés. Nous reviendrons vers vous dans les plus brefs délais.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-6 rounded-full">
                  Envoyer un autre message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">Prénom</Label>
                    <Input 
                      type="text" 
                      id="firstname" 
                      name="firstname" 
                      placeholder="Votre prénom" 
                      required 
                      className="rounded-lg h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Nom</Label>
                    <Input 
                      type="text" 
                      id="lastname" 
                      name="lastname" 
                      placeholder="Votre nom" 
                      required 
                      className="rounded-lg h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email professionnel</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="votre@email.com" 
                    required 
                    className="rounded-lg h-11"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise / Établissement</Label>
                    <Input 
                      type="text" 
                      id="company" 
                      name="company" 
                      placeholder="Nom de votre structure" 
                      className="rounded-lg h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Fonction</Label>
                    <Input 
                      type="text" 
                      id="role" 
                      name="role" 
                      placeholder="Ex: Ophtalmologue" 
                      className="rounded-lg h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="L'objet de votre message" 
                    required 
                    className="rounded-lg h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    placeholder="Dites-nous en plus sur votre projet..." 
                    id="message" 
                    name="message" 
                    required 
                    className="rounded-lg min-h-[120px] resize-none"
                  />
                </div>
                <Button 
                  className="w-full rounded-full h-12 bg-brand hover:bg-brand/90 text-brand-foreground mt-2" 
                  type="submit" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
