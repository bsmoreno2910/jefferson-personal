import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Junior M",
    role: "Aluno há 6 meses",
    text: "Sempre quis ter um personal trainer, mas nunca tive a oportunidade de investir nesse tipo de serviço. Quando conheci o app do Jefferson, vi a chance de treinar com um profissional excelente por um valor mais do que acessível.",
    rating: 5
  },
  {
    name: "Carolina Marghetti",
    role: "Aluna há 4 meses",
    text: "Queria agradecer a todo suporte que recebi da equipe do Jeff. Me surpreendi muito com todo o conteúdo do aplicativo, a exposição das aulas, as explicações, toda a dinâmica. TOP!!!",
    rating: 5
  },
  {
    name: "Sidney D.P.O.F",
    role: "Aluno há 2 meses",
    text: "Eu não acreditava muito que poderia ter bons resultados treinando em uma plataforma online, mas com o app eu consegui perder 7 KGS em 30 dias, seguindo os protocolos direcionados para o meu objetivo.",
    rating: 5,
    highlight: "7kg em 30 dias"
  },
  {
    name: "Camila Santos",
    role: "Aluna há 3 meses",
    text: "Eu sou iniciante da vida fitness, mas com o aplicativo, me senti mais segura e instruída. Mesmo em tão pouco tempo já estou tendo bons resultados. Indo para o meu terceiro mês e não quero parar mais.",
    rating: 5
  },
  {
    name: "Apollo E.A",
    role: "Aluno há 5 meses",
    text: "Com o auxílio do app, diminui medidas e torneci o meu corpo em um curto período de tempo. O Jefferson foi super atencioso e me deu várias dicas boas que me ajudaram muito.",
    rating: 5
  },
  {
    name: "Claudia Souza",
    role: "Aluna há 2 meses",
    text: "Em 40 dias treinando com o meu 'Personal de Bolso', foram quase 10 KGS embora, meu humor melhorou, meu sono está mais regulado, me sinto mais bonita, disposta e feliz. Obrigada, Jefferson!!!",
    rating: 5,
    highlight: "10kg em 40 dias"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 inline-block">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            O Que Nossos Alunos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Estão Dizendo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultados reais de pessoas reais que transformaram suas vidas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative p-6 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              <div className="relative space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Highlight Badge */}
                {testimonial.highlight && (
                  <div className="inline-block">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                      🎯 {testimonial.highlight}
                    </span>
                  </div>
                )}

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "19.9K+", label: "Alunos Ativos" },
            { value: "982+", label: "Treinos Disponíveis" },
            { value: "95%", label: "Satisfação" },
            { value: "24/7", label: "Suporte" }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

