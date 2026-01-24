"use client";

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, ArrowRight, Eye } from "lucide-react"
import Link from "next/link"

function StackedCircularFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-secondary/50 border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src="/logo.png" alt="ZenkoLab" className="h-10" />
            </Link>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              ZenkoLab développe des solutions d&apos;intelligence artificielle pour le dépistage automatisé des pathologies rétiniennes. Un œil sur demain, dès aujourd&apos;hui.
            </p>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10 hover:bg-brand hover:text-brand-foreground hover:border-brand transition-all"
                asChild
              >
                <a href="mailto:josselinprrt@gmail.com" title="Email">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/company/zenkolab-ia/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "Produit", href: "/produit" },
                { name: "Tarifs", href: "/tarifs" },
                { name: "À propos", href: "/apropos" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-brand transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Prêt à commencer ?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Découvrez comment ZenkoLab peut transformer votre pratique.
            </p>
            <Button 
              asChild 
              className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground shadow-sm w-full justify-center"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Demander une démo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ZenkoLab. Tous droits réservés.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Eye className="h-4 w-4 text-brand" />
              <span>Un œil sur demain, dès aujourd&apos;hui.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
