
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { Product } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data - In a real app, this would come from an API
const mockProducts: Product[] = [
  {
    id: "1",
    title: "Café Mocha Gatinho",
    price: 18.90,
    image: "/placeholder.svg",
    description: "Nosso café mocha especial com chantilly em formato de pata de gato",
    category: "coffee",
    rating: 4.9,
    likes: 30,
    stock: 15
  },
  {
    id: "2",
    title: "Expresso Akemi",
    price: 12.50,
    image: "/placeholder.svg",
    description: "Expresso forte com um toque de canela e arte latte em forma de gatinho",
    category: "coffee",
    rating: 4.8,
    likes: 25,
    stock: 20
  },
  {
    id: "3",
    title: "Cappuccino Kawaii",
    price: 16.90,
    image: "/placeholder.svg",
    description: "Cappuccino cremoso com chocolate em pó e marshmallows coloridos",
    category: "coffee",
    rating: 4.7,
    likes: 28,
    stock: 12
  },
  {
    id: "4",
    title: "Milkshake de Morango",
    price: 22.90,
    image: "/placeholder.svg",
    description: "Delicioso milkshake de morango com chantilly e orelhas de gato",
    category: "milkshake",
    rating: 4.9,
    likes: 35,
    stock: 10
  },
  {
    id: "5",
    title: "Milkshake de Lavanda",
    price: 23.90,
    image: "/placeholder.svg",
    description: "Milkshake com sabor suave de lavanda e cobertura especial",
    category: "milkshake",
    rating: 4.5,
    likes: 27,
    stock: 8
  },
  {
    id: "6",
    title: "Milkshake de Caramelo",
    price: 21.90,
    image: "/placeholder.svg",
    description: "Milkshake com calda de caramelo caseiro e chantilly",
    category: "milkshake",
    rating: 4.6,
    likes: 22,
    stock: 14
  }
];

export function FeaturedProducts() {
  const { t } = useTheme();
  const { addItem } = useCart();
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});
  
  const toggleLike = (productId: string) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };
  
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-bold">{t("products.trending")}</h2>
          <p className="text-muted-foreground mt-2">{t("products.explore")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.slice(0, 3).map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all">
              <div className="aspect-square relative">
                <Badge variant="secondary" className="absolute top-2 left-2 z-10">
                  {product.category === "coffee" ? "Café" : "Milkshake"}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-10 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                  onClick={() => toggleLike(product.id)}
                >
                  <Heart 
                    className={`h-5 w-5 ${likedProducts[product.id] ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} 
                  />
                </Button>
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4 space-y-2">
                <div className="flex justify-between">
                  <h3 className="font-medium">{product.title}</h3>
                  <span className="font-bold">R$ {product.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-muted-foreground">{product.rating} ({product.likes} likes)</span>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => addItem(product)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="rounded-full px-8">
            <Link to="/shop">Ver mais produtos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
