
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulated API call
    setTimeout(() => {
      toast({
        title: "Inscrito com sucesso!",
        description: "Obrigado por se inscrever na nossa newsletter.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <section className="py-16 bg-primary/10 dark:bg-primary/5">
      <div className="container max-w-4xl">
        <div className="rounded-3xl bg-white dark:bg-gray-800 p-8 md:p-12 shadow-lg relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-accent/30 dark:bg-accent/10"></div>
          <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-primary/30 dark:bg-primary/10"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Assine nossa Newsletter
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Receba ofertas exclusivas, dicas sobre café e conteúdo especial sobre nossos gatinhos diretamente em seu email
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="rounded-full"
              >
                {isLoading ? "Inscrevendo..." : "Inscrever-se"}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              Ao se inscrever, você concorda com nossa Política de Privacidade.
              <br />Não enviamos spam, prometemos!
            </p>
          </div>
          
          {/* Floating cat paws */}
          <div className="absolute top-5 left-5 text-2xl opacity-20 dark:opacity-10 animate-bounce">🐾</div>
          <div className="absolute bottom-8 right-8 text-2xl opacity-20 dark:opacity-10 animate-bounce delay-300">🐾</div>
        </div>
      </div>
    </section>
  );
}
