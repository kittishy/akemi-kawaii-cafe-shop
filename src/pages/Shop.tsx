import { useTheme, ThemeContextType } from "@/context/ThemeContext";
import { Layout } from "@/components/layout/Layout";
import { products } from "@/data/products";
import { ShopHero } from "@/components/shop/ShopHero";
import { FilterSidebar } from "@/components/shop/FilterSidebar";
import { ProductList } from "@/components/shop/ProductList";
import { useProductFilter } from "@/hooks/use-product-filter";
import { useEffect, useState } from "react";


const Shop = () => {
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    categories,
    setCategories,
    setPriceRange,
    minPrice,
    maxPrice,
    selectedCategory,
    priceRange,
    handleSearch,
    handleCategoryChange,
    handlePriceChange
  } = useProductFilter(products);

  const { language } = useTheme() as ThemeContextType;
  const [shopHeroContent, setShopHeroContent] = useState<{ title: string; subtitle: string }>({
    title: "",
    subtitle: "",
  });

  useEffect(() => {
    if (language === "pt-BR") {
      setShopHeroContent({
        title: "Café da Lisa",
        subtitle: "Descubra nossas delícias!",
      });
    } else if (language === "en-US") {
      setShopHeroContent({
        title: "Lisa's Cafe",
        subtitle: "Discover Our Delicious Treats!",
      });
    }
  }, [language]);
  
  const handleFilterClear = () => {
    setSearchQuery("");
    setCategories([]);
    setPriceRange([minPrice, maxPrice]);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <ShopHero
        title={shopHeroContent.title}
        subtitle={shopHeroContent.subtitle}
        backgroundImage="/images/shop-hero.jpg"
        categoryCount={categories.length}
        filterCount={
          (searchQuery ? 1 : 0) +
          (selectedCategory !== null ? 1 : 0) +
          (priceRange[0] !== minPrice || priceRange[1] !== maxPrice ? 1 : 0)
        }
        onFilterClear={handleFilterClear}
      />

      {/* Main Content Area */}
      <div className="container py-10">
        {/* Product Filters and Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <FilterSidebar 
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            priceRange={priceRange}
            onSearchChange={handleSearch}
            onCategoryChange={handleCategoryChange}
            onPriceChange={handlePriceChange}
          />
          
          {/* Product grid */}
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
