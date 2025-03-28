"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
// @ts-ignore
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          CodeZone
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary">
            Sobre
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-sm font-medium hover:text-primary">
            Projetos
          </button>
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary">
            Serviços
          </button>
          <Button onClick={() => scrollToSection("contact")} variant="default" size="sm">
            Contate-me
          </Button>
        </nav>

        {/* Botão do Menu Mobile */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Navegação Mobile */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 text-sm font-medium hover:text-primary text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="py-2 text-sm font-medium hover:text-primary text-left"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="py-2 text-sm font-medium hover:text-primary text-left"
            >
              Serviços
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="default" size="sm" className="w-full">
              Contate-me
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

