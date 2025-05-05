import { useTheme } from "@/context/ThemeContext";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSidebarProps {
  searchQuery: string;
  selectedCategory: string;
  priceRange: number[];
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (value: string) => void;
  onPriceChange: (values: number[]) => void;
}

export function FilterSidebar({
  searchQuery,
  selectedCategory,
  priceRange,
  onSearchChange, // Function to handle search query changes
  onCategoryChange, // Function to handle category changes
  onPriceChange, // Function to handle price range changes
}: FilterSidebarProps) {
  const { language } = useTheme();

  const [categories, setCategories] = useState<{ value: string; label: string }[]>([]);
  const [filterTitles, setFilterTitles] = useState<{
    title: string;
    search: string;
    category: string;
    priceRange: string;
    promotion: string;
    coupon: string;
    placeholder: string
  }>({
    title: "",
    search: "",
    category: "",
    priceRange: "",
    promotion: "",
    coupon: "",
    placeholder: ""
  });

  useEffect(() => {
    if (language === "pt-BR") {
      setCategories([
        { value: "all", label: "Todos" },
        { value: "coffee", label: "Cafés" },
        { value: "tea", label: "Chás" },
        { value: "milkshake", label: "Milkshakes" },
        { value: "merchandise", label: "Produtos" },
      ]);
      setFilterTitles({title: "Filtros", search: "Pesquisar", category: "Categoria", priceRange: "Faixa de preço", promotion: "Promoções", coupon: "Use o cupom:", placeholder: "Digite o que procura..."})
    } else if (language === "en-US") {
      setCategories([
        { value: "all", label: "All" },
        { value: "coffee", label: "Coffees" },
        { value: "tea", label: "Teas" },
        { value: "milkshake", label: "Milkshakes" },
        { value: "merchandise", label: "Merchandise" },
      ]);
      setFilterTitles({title: "Filters", search: "Search", category: "Category", priceRange: "Price Range", promotion: "Promotions", coupon: "Use the coupon:", placeholder: "Type what you are looking for..."})
    }
  }, [language]);
  return (
    <div className="lg:w-1/4 space-y-6">
      <Card>
        <CardContent className="p-4 space-y-4">
          <h3 className="font-medium flex items-center">
            <Filter className="h-4 w-4 mr-2" /> {filterTitles.title}
          </h3>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Pesquisar</h4>
            <Input
              type="text"
              placeholder="Digite o que procura..."
              placeholder={filterTitles.placeholder} value={searchQuery}
              onChange={onSearchChange}
            />
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Categoria</h4>
            <Select 
              value={selectedCategory}
              onValueChange={onCategoryChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={filterTitles.category} />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">{filterTitles.priceRange}</h4>
              <span className="text-xs text-muted-foreground">
                R${priceRange[0]} - R${priceRange[1]}
              </span>
            </div>
            <Slider
              defaultValue={[0, 50]}
              min={0}
              max={50}
              step={1}
              value={priceRange}
              onValueChange={onPriceChange}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">{filterTitles.promotion}</h3>
          <div className="bg-accent/20 rounded-lg p-3 text-sm">
            <p className="font-medium">20% OFF on milkshakes!</p>
            <p className="text-muted-foreground text-xs mt-1">
              {filterTitles.coupon} LISALOVE
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
