import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

function StackedCircularFooter() {
  return (
    <footer className="border-t bg-secondary py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <Link href="/" className="hover:text-primary">
              Accueil
            </Link>
            <Link href="/produit" className="hover:text-primary">
              Produit
            </Link>
            <Link href="/tarifs" className="hover:text-primary">
              Tarifs
            </Link>
            <Link href="/apropos" className="hover:text-primary">
              À propos
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
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
              className="rounded-full"
              asChild
            >
              <a href="https://www.linkedin.com/company/zenkolab-ia/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <RainbowButton className="rounded-full h-10 px-6" asChild>
              <Link href="/contact">Demander une démo</Link>
            </RainbowButton>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 ZenkoLab. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
