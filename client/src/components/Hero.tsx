import { Button } from "@/components/ui/button";
import { Check, Dumbbell, MessageCircle, TrendingUp, MapPin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                🔥 Seu Personal de Bolso
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Conquiste o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Físico dos Seus Sonhos
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Treinos personalizados para emagrecimento, hipertrofia e definição muscular. 
              Treine onde quiser com acompanhamento profissional direto no seu celular.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Dumbbell, text: "Treino Personalizado" },
                { icon: MessageCircle, text: "Suporte WhatsApp" },
                { icon: TrendingUp, text: "Resultados Comprovados" },
                { icon: MapPin, text: "Treine em Qualquer Lugar" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=5511911713717&text=Quero+minha+ficha+de+treino+personalizada+e+entrar+no+grupo+de+treinos+do+WhatsApp+&type=phone_number&app_absent=0", "_blank")}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                Começar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("programs")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-8 py-6"
              >
                Ver Programas
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  +19.9K alunos satisfeitos
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:h-[600px] animate-fade-in-up delay-200">
            <div className="relative h-full rounded-2xl overflow-hidden">
              {/* Main Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <img
                src="/jefferson_post_4.webp"
                alt="Jefferson Personal Trainer"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Card - Stats */}
              <div className="absolute top-8 right-8 bg-card/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">982+</p>
                    <p className="text-xs text-muted-foreground">Treinos Disponíveis</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Success */}
              <div className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-xl animate-float delay-500">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">95% de Satisfação</p>
                    <p className="text-xs text-muted-foreground">Resultados Comprovados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

