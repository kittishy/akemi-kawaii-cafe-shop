
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { MilkshakeSection } from "@/components/home/MilkshakeSection";
import { BlogSection } from "@/components/home/BlogSection";
import { GamificationSection } from "@/components/home/GamificationSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <MilkshakeSection />
      <BlogSection />
      <GamificationSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
