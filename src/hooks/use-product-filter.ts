
import { useState, useEffect } from "react";
import { Product } from "@/context/CartContext";

export function useProductFilter(products: Product[]) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50]);
  
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
  
  // Refilter products when the source products array changes
  useEffect(() => {
    filterProducts(searchQuery, selectedCategory, priceRange);
  }, [products]);
  
  return {
    filteredProducts,
    searchQuery,
    selectedCategory,
    priceRange,
    handleSearch,
    handleCategoryChange,
    handlePriceChange
  };
}
