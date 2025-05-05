
import { Layout } from "@/components/layout/Layout";
import { products } from "@/data/products";
import { ShopHero } from "@/components/shop/ShopHero";
import { FilterSidebar } from "@/components/shop/FilterSidebar";
import { ProductList } from "@/components/shop/ProductList";
import { useProductFilter } from "@/hooks/use-product-filter";

const Shop = () => {
  const {
    filteredProducts,
    searchQuery,
    selectedCategory,
    priceRange,
    handleSearch,
    handleCategoryChange,
    handlePriceChange
  } = useProductFilter(products);
  
  return (
    <Layout>
      {/* Hero banner */}
      <ShopHero />
      
      {/* Shop content */}
      <div className="container py-8">
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
