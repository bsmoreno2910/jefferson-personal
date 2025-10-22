import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-lg font-bold text-white">JP</span>
              </div>
              <span className="text-lg font-bold">Jefferson Personal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Seu personal trainer de bolso. Treinos personalizados para alcançar seus objetivos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Programas
                </button>
              </li>

              <li>
                <button
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Depoimentos
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Treino Avançado GYM</li>
              <li>Hipertrofia e Definição</li>
              <li>Funcional em Casa</li>
              <li>Perda de Gordura</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:jefersonascimento.edfisica@gmail.com"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/jefferson_personal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@jefferson_personal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jefferson Personal Online. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/jefferson_personal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card hover:bg-primary/10 flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card hover:bg-primary/10 flex items-center justify-center transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:jefersonascimento.edfisica@gmail.com"
                className="w-10 h-10 rounded-full bg-card hover:bg-primary/10 flex items-center justify-center transition-colors group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

