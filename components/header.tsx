"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Package, Phone } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappNumber = "905375460274"
  const whatsappMessage = encodeURIComponent("Merhaba, nakliye hizmeti hakkında bilgi almak istiyorum.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Package className="h-10 w-10 lg:h-12 lg:w-12 text-accent" />
            <span className="text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight">Ekinci Nakliyat</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/#hizmetler"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Hizmetler
            </Link>
            <Link
              href="/hakkimizda"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              İletişim
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                Teklif Al
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/#hizmetler"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hizmetler
              </Link>
              <Link
                href="/hakkimizda"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </Link>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 mr-2" />
                  Teklif Al
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
