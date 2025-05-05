
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    id: "1",
    title: "Bebedor Iniciante",
    description: "Comprou seu primeiro café",
    icon: "☕",
    color: "bg-yellow-100 dark:bg-yellow-900",
    unlocked: true
  },
  {
    id: "2",
    title: "Explorador de Sabores",
    description: "Experimentou 5 bebidas diferentes",
    icon: "🔍",
    color: "bg-green-100 dark:bg-green-900",
    unlocked: true
  },
  {
    id: "3",
    title: "Amante de Gatinhos",
    description: "Coletou 3 itens da coleção gatinho",
    icon: "😺",
    color: "bg-purple-100 dark:bg-purple-900",
    unlocked: false
  },
  {
    id: "4",
    title: "Cliente Fiel",
    description: "Realizou 10 compras no site",
    icon: "🏆",
    color: "bg-blue-100 dark:bg-blue-900",
    unlocked: false
  }
];

export function GamificationSection() {
  const [showAll, setShowAll] = useState(false);
  
  return (
    <section className="py-16 bg-lisa-cream dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-bold">Your Progress!</h2>
          <p className="text-muted-foreground mt-2">Colete conquistas e suba no ranking de clientes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="font-display text-xl font-bold mb-4">Nível de Fidelidade</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Level 2: Curious Cat</span>
                  <span className="text-sm text-muted-foreground">150/300 pontos</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Próximos benefícios:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-lisa-baby-blue rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    <span>Frete grátis em compras acima de R$50</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-muted-foreground/20 rounded-full flex items-center justify-center text-muted-foreground text-xs">3</span>
                    <span className="text-muted-foreground">Cupom de 10% em qualquer produto</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Como ganhar mais pontos:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Make a purchase: 10 points per $10</li>
                  <li>• Rate products: 5 points per rating</li>
                  <li>• Share on social media: 15 points</li>
                </ul>
              </div>
            </div>
          </Card>
          
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Suas Conquistas</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.slice(0, showAll ? achievements.length : 2).map((achievement) => (
                <Card key={achievement.id} className={`border-l-4 ${achievement.unlocked ? "border-l-primary" : "border-l-muted-foreground/30"}`}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${achievement.color} flex items-center justify-center text-lg`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      {!achievement.unlocked && (
                        <Badge variant="outline" className="mt-1 text-xs">Bloqueado</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              className="w-full mt-4"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Mostrar menos" : "Mostrar todas"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
