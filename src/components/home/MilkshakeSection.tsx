
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/context/CartContext";

// Mock data - In a real app, this would come from an API
const milkshakes: Product[] = [
  {
    id: "4",
    title: "Milkshake de Morango",
    price: 22.90,
    image: "/placeholder.svg",
    description: "Delicioso milkshake de morango com chantilly e orelhas de gato",
    category: "milkshake",
    likes: 35
  },
  {
    id: "5",
    title: "Milkshake de Lavanda",
    price: 23.90,
    image: "/placeholder.svg",
    description: "Milkshake com sabor suave de lavanda e cobertura especial",
    category: "milkshake",
    likes: 27
  },
  {
    id: "6",
    title: "Milkshake de Caramelo",
    price: 21.90,
    image: "/placeholder.svg",
    description: "Milkshake com calda de caramelo caseiro e chantilly",
    category: "milkshake",
    likes: 22
  }
];

export function MilkshakeSection() {
  const { addItem } = useCart();
  
  return (
    <section className="py-16 bg-akemi-soft-gray dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-bold">Milkshakes Especiais</h2>
          <p className="text-muted-foreground mt-2">Feitos com muito carinho e decorações fofas</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milkshakes.map((shake) => (
            <Card key={shake.id} className="bg-white dark:bg-gray-800 overflow-hidden border-none shadow-md hover:shadow-xl transition-all">
              <div className="p-4">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img 
                    src={shake.image}
                    alt={shake.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-0 space-y-3">
                  <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/20">
                    {shake.likes} likes
                  </Badge>
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{shake.title}</h3>
                    <span className="font-bold">R$ {shake.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{shake.description}</p>
                  <Button className="w-full" onClick={() => addItem(shake)}>
                    Comprar agora
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
