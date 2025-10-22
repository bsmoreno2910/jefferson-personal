import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Instagram, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 inline-block">
            Entre em Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Pronto para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Começar sua Transformação?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas ou comece agora mesmo. Estamos aqui para ajudar você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              <p className="text-muted-foreground mb-8">
                Entre em contato através dos nossos canais de atendimento. 
                Respondemos rapidamente e estamos prontos para ajudar você a alcançar seus objetivos.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="p-6 border-border hover:border-primary/50 transition-all group cursor-pointer">
                <a
                  href="https://api.whatsapp.com/send/?phone=5511911713717&text=Quero+minha+ficha+de+treino+personalizada+e+entrar+no+grupo+de+treinos+do+WhatsApp+&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      WhatsApp
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Suporte direto via WhatsApp. Tire suas dúvidas em tempo real.
                    </p>
                    <p className="text-primary text-sm mt-2 font-medium">
                      Clique para conversar →
                    </p>
                  </div>
                </a>
              </Card>

              <Card className="p-6 border-border hover:border-primary/50 transition-all group cursor-pointer">
                <a
                  href="mailto:jefersonascimento.edfisica@gmail.com"
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      Email
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Envie um email para nós
                    </p>
                    <p className="text-primary text-sm font-medium">
                      jefersonascimento.edfisica@gmail.com
                    </p>
                  </div>
                </a>
              </Card>

              <Card className="p-6 border-border hover:border-primary/50 transition-all group cursor-pointer">
                <a
                  href="https://www.instagram.com/jefferson_personal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      Instagram
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Siga para dicas e conteúdos exclusivos
                    </p>
                    <p className="text-primary text-sm font-medium">
                      @jefferson_personal
                    </p>
                  </div>
                </a>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar você?"
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

