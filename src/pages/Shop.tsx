
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingCart, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";
import { products } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { value: "all", label: "Todos" },
  { value: "coffee", label: "Cafés" },
  { value: "tea", label: "Chás" },
  { value: "milkshake", label: "Milkshakes" },
  { value: "merchandise", label: "Produtos" }
];

const Shop = () => {
  const { addItem } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});
  
  const toggleLike = (productId: string) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleImageLoad = (productId: string) => {
    setLoadingImages(prev => ({
      ...prev,
      [productId]: false
    }));
  };
  
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    filterProducts(searchQuery, value, priceRange);
  };
  
  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    filterProducts(searchQuery, selectedCategory, values);
  };
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProducts(query, selectedCategory, priceRange);
  };
  
  const filterProducts = (query: string, category: string, price: number[]) => {
    let filtered = products;
    
    // Filter by search query
    if (query) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter(product => product.category === category);
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= price[0] && product.price <= price[1]
    );
    
    setFilteredProducts(filtered);
  };
  
  return (
    <Layout>
      {/* Hero banner */}
      <div className="bg-akemi-baby-blue/20 dark:bg-akemi-dark-blue/20 py-10">
        <div className="container text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Loja Lisa's Cafe</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore nossa coleção de cafés e produtos especiais inspirados em gatinhos
          </p>
        </div>
      </div>
      
      {/* Shop content */}
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <div className="lg:w-1/4 space-y-6">
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-medium flex items-center">
                  <Filter className="h-4 w-4 mr-2" /> Filtros
                </h3>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Pesquisar</h4>
                  <Input
                    type="text"
                    placeholder="Digite o que procura..."
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Categoria</h4>
                  <Select 
                    value={selectedCategory}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione uma categoria" />
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
                    <h4 className="text-sm font-medium">Faixa de preço</h4>
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
                    onValueChange={handlePriceChange}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Promoções</h3>
                <div className="bg-accent/20 rounded-lg p-3 text-sm">
                  <p className="font-medium">20% OFF nos milkshakes!</p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Use o cupom: LISALOVE
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Product grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                {filteredProducts.length} produtos encontrados
              </p>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordernar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Em destaque</SelectItem>
                  <SelectItem value="price-asc">Menor preço</SelectItem>
                  <SelectItem value="price-desc">Maior preço</SelectItem>
                  <SelectItem value="newest">Mais recentes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">Nenhum produto encontrado</h3>
                <p className="text-muted-foreground">
                  Tente ajustar seus filtros para encontrar o que procura.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all">
                    <div className="aspect-square relative">
                      <Badge variant="secondary" className="absolute top-2 left-2 z-10">
                        {categories.find(c => c.value === product.category)?.label || product.category}
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
                      {loadingImages[product.id] !== false && (
                        <Skeleton className="absolute inset-0 w-full h-full" />
                      )}
                      <img 
                        src={product.image}
                        alt={product.title}
                        className={`w-full h-full object-cover transition-transform group-hover:scale-105 ${loadingImages[product.id] !== false ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={() => handleImageLoad(product.id)}
                      />
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{product.title}</h3>
                        <span className="font-bold">R$ {product.price.toFixed(2)}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm text-muted-foreground">{product.rating} ({product.likes} likes)</span>
                        </div>
                        <Button size="sm" onClick={() => addItem(product)}>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Adicionar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <div className="flex gap-1">
                <Button variant="outline" size="icon" disabled>
                  &lt;
                </Button>
                <Button variant="default" size="icon">
                  1
                </Button>
                <Button variant="outline" size="icon">
                  2
                </Button>
                <Button variant="outline" size="icon">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
