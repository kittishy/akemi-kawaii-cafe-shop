
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/context/ThemeContext";

interface ProductSortingProps {
  productCount: number;
  sortOption: string;
  onSortChange: (value: string) => void;
}

export function ProductSorting({ productCount, sortOption, onSortChange }: ProductSortingProps) {
  const { language } = useTheme();
  
  return (
    <div className="flex justify-between items-center mb-6">
      <p className="text-muted-foreground">
        {productCount} {language === "pt-BR" ? "produtos encontrados" : "products found"}
      </p>
      <Select value={sortOption} onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={language === "pt-BR" ? "Ordenar por" : "Sort by"} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured">{language === "pt-BR" ? "Em destaque" : "Featured"}</SelectItem>
          <SelectItem value="price-asc">{language === "pt-BR" ? "Menor preço" : "Price: Low to High"}</SelectItem>
          <SelectItem value="price-desc">{language === "pt-BR" ? "Maior preço" : "Price: High to Low"}</SelectItem>
          <SelectItem value="newest">{language === "pt-BR" ? "Mais recentes" : "Newest"}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
