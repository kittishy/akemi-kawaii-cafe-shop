
import React from "react";
import { useTheme } from "@/context/ThemeContext";

export function ShopHero() {
  const { t } = useTheme();
  
  return (
    <div className="bg-primary/10 dark:bg-primary-dark/20 py-10">
      <div className="container text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{t("shop.title")}</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          {t("shop.description")}
        </p>
      </div>
    </div>
  );
}
