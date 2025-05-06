
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, MapPin, Clock, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado por entrar em contato, responderemos em breve.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-lisa-peach/30 dark:bg-lisa-dark-blue/20 py-16">
        <div className="container text-center max-w-2xl">
          <h1 className="font-display text-4xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-muted-foreground">
            Estamos aqui para responder suas dúvidas, ouvir sugestões ou simplesmente bater um papo sobre café e gatinhos!
          </p>
        </div>
      </div>

      {/* Contact section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact form */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
              <h2 className="font-display text-2xl font-bold mb-6">Envie uma mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Como podemos ajudar?"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="bg-lisa-baby-blue/20 dark:bg-lisa-dark-blue/30 rounded-3xl p-8">
                <h2 className="font-display text-2xl font-bold mb-6">Fale com a Lisa no Telegram</h2>
                <p className="text-muted-foreground mb-6">
                  Prefere um contato mais direto? Fale com a Lisa pelo nosso bot no Telegram e tenha suas dúvidas respondidas rapidamente!
                </p>
                <Button asChild className="rounded-full w-full sm:w-auto">
                  <a href="https://t.me/lisascafebot" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar no Telegram (@lisascafebot)
                  </a>
                </Button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h2 className="font-display text-2xl font-bold mb-6">Informações de Contato</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <MapPin className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Endereço</h3>
                      <p className="text-muted-foreground">Rua dos Gatinhos, 123 - Bairro Felino</p>
                      <p className="text-muted-foreground">São Paulo - SP, 01234-567</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Horário de Funcionamento</h3>
                      <p className="text-muted-foreground">Segunda a Sexta: 8h às 20h</p>
                      <p className="text-muted-foreground">Sábados e Domingos: 9h às 18h</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-muted-foreground">(11) 91234-5678</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">contato@lisascafe.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section (placeholder) */}
      <section className="py-10">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl h-80 bg-lisa-soft-gray dark:bg-gray-700">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground">Mapa do local estará disponível em breve!</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
