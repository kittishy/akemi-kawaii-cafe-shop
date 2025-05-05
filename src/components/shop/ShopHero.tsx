
import { useTheme, ThemeContextType } from "@/context/ThemeContext";
import React, { useEffect, useState } from "react";

interface ShopHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  categoryCount?: number;
  filterCount?: number;
  onFilterClear?: () => void;
}

export function ShopHero({
  title,
  subtitle,
  backgroundImage,
  categoryCount,
  filterCount,
  onFilterClear
}: ShopHeroProps) {
  const { language } = useTheme() as ThemeContextType;
  const [shopHeroContent, setShopHeroContent] = useState<{ title: string; subtitle: string }>({ title: '', subtitle: '' });

  useEffect(() => {
    if (language === 'pt-BR') {
      setShopHeroContent({ title: 'Loja Lisa\'s Cafe', subtitle: 'Explore nossa coleção de cafés e produtos especiais inspirados em gatinhos' });
    } else if (language === 'en-US') {
      setShopHeroContent({ title: 'Lisa\'s Cafe Shop', subtitle: 'Explore our collection of coffees and special cat-inspired products' });
    }
  }, [language]);

  return (
    <div className="bg-primary/10 dark:bg-primary/5 py-10">
      <div className="container text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{shopHeroContent.title}</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">{shopHeroContent.subtitle}</p>
      </div>
    </div>
  );
}
