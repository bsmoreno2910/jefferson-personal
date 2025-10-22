import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Mensal",
    price: "89,90",
    installment: "12x R$ 8,99",
    popular: false,
    features: [
      "Treinos Personalizados",
      "Acesso ao WhatsApp (Dúvidas e perguntas)",
      "Correção de Exercícios",
      "Feedback Semanal",
      "Acesso ao Aplicativo",
      "Protocolo de Treinos Direcionado"
    ]
  },
  {
    name: "Trimestral",
    price: "249,90",
    installment: "12x R$ 24,99",
    popular: true,
    savings: "Economize R$ 19,80",
    features: [
      "Treinos Personalizados",
      "Acesso ao WhatsApp (Dúvidas e perguntas)",
      "Correções de Exercícios",
      "Feedback Semanal",
      "Acesso ao Aplicativo",
      "Protocolo de Treinos Direcionado",
      "Suporte Prioritário",
      "Plano Nutricional Básico"
    ]
  }
];

export default function Pricing() {
  const handleSubscribe = (planName: string) => {
    // Scroll to contact or open WhatsApp
    const whatsappNumber = "5511999999999"; // Replace with actual number
    const message = encodeURIComponent(`Olá! Gostaria de assinar o plano ${planName}.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 inline-block">
            Planos e Preços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Invista no Seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Melhor Físico
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para você e comece sua transformação hoje mesmo.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.popular
                  ? "border-2 border-primary shadow-2xl shadow-primary/20 scale-105"
                  : "border-border"
              } hover:shadow-2xl transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-bl-2xl flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-bold">MAIS POPULAR</span>
                </div>
              )}

              <div className="p-8 space-y-6">
                {/* Plan Header */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  {plan.savings && (
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                      {plan.savings}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-bold text-primary">
                      R$ {plan.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    ou {plan.installment}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 py-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handleSubscribe(plan.name)}
                  className={`w-full py-6 text-lg ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      : "bg-card hover:bg-primary border-2 border-primary"
                  } transition-all`}
                >
                  Assinar {plan.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Garantia de Satisfação</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estamos tão confiantes nos nossos resultados que oferecemos garantia total. 
                Se você não estiver satisfeito nos primeiros 7 dias, devolvemos 100% do seu investimento.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Pagamento Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Cancele Quando Quiser</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Suporte 24/7</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

