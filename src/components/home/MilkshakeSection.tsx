
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { milkshakes } from "@/data/products";
import { Skeleton } from "@/components/ui/skeleton";

export function MilkshakeSection() {
  const { addItem } = useCart();
  const { t, language } = useTheme();
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});
  
  const handleImageLoad = (productId: string) => {
    setLoadingImages(prev => ({
      ...prev,
      [productId]: false
    }));
  };
  
  return (
    <section className="py-16 bg-lisa-soft-gray dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-bold">{t("milkshakes.title")}</h2>
          <p className="text-muted-foreground mt-2">{t("milkshakes.description")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milkshakes.map((shake) => (
            <Card key={shake.id} className="bg-white dark:bg-gray-800 overflow-hidden border-none shadow-md hover:shadow-xl transition-all">
              <div className="p-4">
                <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                  {loadingImages[shake.id] !== false && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  <img 
                    src={shake.image}
                    alt={shake.title}
                    className={`w-full h-full object-cover transition-all group-hover:scale-105 ${loadingImages[shake.id] !== false ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => handleImageLoad(shake.id)}
                  />
                </div>
                <CardContent className="p-0 space-y-3">
                  <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/20">
                    {shake.likes} {t("milkshakes.likes")}
                  </Badge>
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{shake.title}</h3>
                    <span className="font-bold">
                      {language === "pt-BR" ? "R$" : "$"} {shake.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{shake.description}</p>
                  <Button className="w-full" onClick={() => addItem(shake)}>
                    {t("milkshakes.buy")}
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
