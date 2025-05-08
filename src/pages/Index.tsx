
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { MilkshakeSection } from "@/components/home/MilkshakeSection";
import { BlogSection } from "@/components/home/BlogSection";
import { GamificationSection } from "@/components/home/GamificationSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <PageContainer>
        <HeroSection />
        <FeaturedProducts />
        
        <SectionDivider />
        
        <MilkshakeSection />
        <BlogSection />
        
        <SectionDivider />
        
        <GamificationSection />
        <NewsletterSection />
      </PageContainer>
    </Layout>
  );
};

export default Index;
