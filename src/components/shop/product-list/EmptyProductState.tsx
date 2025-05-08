
import { useTheme } from "@/context/ThemeContext";

export function EmptyProductState() {
  const { language } = useTheme();
  
  return (
    <div className="text-center py-12">
      <h3 className="text-lg font-medium mb-2">
        {language === "pt-BR" ? "Nenhum produto encontrado" : "No products found"}
      </h3>
      <p className="text-muted-foreground">
        {language === "pt-BR" 
          ? "Tente ajustar seus filtros para encontrar o que procura." 
          : "Try adjusting your filters to find what you're looking for."}
      </p>
    </div>
  );
}
