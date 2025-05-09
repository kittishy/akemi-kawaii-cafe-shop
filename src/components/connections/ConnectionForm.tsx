
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function ConnectionForm() {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function handleConnect(e: React.FormEvent) {
    e.preventDefault();
    
    if (!token.trim()) {
      toast({
        title: "Token necessário",
        description: "Por favor, informe seu token para conectar.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Aqui ficaria a lógica de integração com o bot
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Conexão estabelecida!",
        description: "Seu bot está agora conectado à AionX.",
      });
      
      setToken("");
    } catch (error) {
      toast({
        title: "Erro de conexão",
        description: "Não foi possível estabelecer a conexão com o bot.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Adicionar Conexão</CardTitle>
        <CardDescription>
          Sincronize sua conta com um bot autorizado pelo Discord
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleConnect}>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="token">Seu token</Label>
              <Input
                id="token"
                placeholder="Token de autenticação"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                disabled={isLoading}
                required
              />
              <p className="text-sm text-muted-foreground">
                Este token permite sincronizar sua conta com o bot autorizado.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled={isLoading}>
            {isLoading ? "Conectando..." : "Conectar"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
