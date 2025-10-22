import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JP</span>
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:block">
                Jefferson Personal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Programas
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=5511911713717&text=Quero+minha+ficha+de+treino+personalizada+e+entrar+no+grupo+de+treinos+do+WhatsApp+&type=phone_number&app_absent=0", "_blank")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <nav className="flex flex-col space-y-4 py-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                Programas
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                Contato
              </button>
              <div className="px-4">
                <Button
                  onClick={() => window.open("https://api.whatsapp.com/send/?phone=5511911713717&text=Quero+minha+ficha+de+treino+personalizada+e+entrar+no+grupo+de+treinos+do+WhatsApp+&type=phone_number&app_absent=0", "_blank")}
                  className="w-full bg-gradient-to-r from-primary to-accent"
                >
                  Começar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

