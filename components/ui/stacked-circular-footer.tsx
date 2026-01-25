import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Mail, Linkedin, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

function StackedCircularFooter() {
  const currentYear = new Date().getFullYear()
  
  const navigationLinks = [
    { label: "Accueil", href: "/" },
    { label: "Produit", href: "/produit" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "À propos", href: "/apropos" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <footer className="border-t bg-secondary">
      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="ZenkoLab Logo" 
                width={40} 
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">ZenkoLab</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Solutions d&apos;intelligence artificielle pour le dépistage automatisé des pathologies rétiniennes.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-9 w-9 hover:bg-primary hover:text-primary-foreground transition-colors"
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
                className="rounded-full h-9 w-9 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/company/zenkolab-ia/" 
                  title="LinkedIn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation section */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Navigation</h3>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:contact@zenkolab.dev" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                contact@zenkolab.dev
              </a>
              <div className="text-sm text-muted-foreground flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>CentraleSupélec, Gif-sur-Yvette, France</span>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Démarrer</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Découvrez comment ZenkoLab peut transformer votre pratique.
            </p>
            <RainbowButton className="rounded-full h-10 px-6 w-full sm:w-auto" asChild>
              <Link href="/contact">Demander une démo</Link>
            </RainbowButton>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} ZenkoLab. Tous droits réservés.
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link 
                href="/contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Mentions légales
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
