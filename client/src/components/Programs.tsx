import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Home, TrendingDown, Zap } from "lucide-react";

const programs = [
  {
    title: "Treino Avançado GYM",
    description: "Métodos avançados de hipertrofia para alunos experientes que buscam maximizar ganhos musculares.",
    icon: Dumbbell,
    level: "Avançado",
    image: "/program_gym.jpg",
    features: [
      "Periodização avançada",
      "Técnicas de intensidade",
      "Treino de força máxima",
      "Acompanhamento semanal"
    ]
  },
  {
    title: "Hipertrofia e Definição",
    description: "Programa completo para ganho de massa muscular e definição na academia.",
    icon: Zap,
    level: "Intermediário",
    image: "/program_hypertrophy.jpg",
    features: [
      "Treino de hipertrofia",
      "Definição muscular",
      "Protocolo de treino direcionado",
      "Feedback semanal"
    ]
  },
  {
    title: "Funcional em Casa",
    description: "Perda de peso e condicionamento físico treinando em casa, sem equipamentos.",
    icon: Home,
    level: "Iniciante",
    image: "/program_home.jpg",
    features: [
      "Treino sem equipamentos",
      "Exercícios funcionais",
      "Perda de peso",
      "Flexibilidade de horário"
    ]
  },
  {
    title: "Perda de Gordura",
    description: "O método mais eficaz para emagrecimento e definição corporal.",
    icon: TrendingDown,
    level: "Todos os níveis",
    image: "/program_fatloss.jpg",
    features: [
      "Emagrecimento eficaz",
      "Definição corporal",
      "Treino metabólico",
      "Resultados rápidos"
    ]
  }
];

const levelColors = {
  "Iniciante": "bg-green-500/10 text-green-500 border-green-500/20",
  "Intermediário": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Avançado": "bg-purple-500/10 text-purple-500 border-purple-500/20",
  "Todos os níveis": "bg-accent/10 text-accent border-accent/20"
};

export default function Programs() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 inline-block">
            Programas de Treino
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Escolha o Programa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Ideal para Você
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Treine com consistência para alcançar seu objetivo. O melhor é que não importa onde você está.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Level Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${levelColors[program.level as keyof typeof levelColors]}`}>
                    {program.level}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs">✓</span>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => window.open("https://api.whatsapp.com/send/?phone=5511911713717&text=Quero+minha+ficha+de+treino+personalizada+e+entrar+no+grupo+de+treinos+do+WhatsApp+&type=phone_number&app_absent=0", "_blank")}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity mt-4"
                >
                  Quero Treinar Agora
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Todos os programas incluem suporte via WhatsApp e correção de exercícios
          </p>
        </div>
      </div>
    </section>
  );
}

