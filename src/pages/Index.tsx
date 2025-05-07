
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { MilkshakeSection } from "@/components/home/MilkshakeSection";
import { BlogSection } from "@/components/home/BlogSection";
import { GamificationSection } from "@/components/home/GamificationSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Index = () => {
  return (
    <Layout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden"
      >
        <motion.div variants={sectionVariants}>
          <HeroSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <FeaturedProducts />
        </motion.div>
        
        {/* Decorative element between sections */}
        <div className="w-full flex justify-center my-4 opacity-50">
          <div className="text-2xl">🐾 🐾 🐾</div>
        </div>
        
        <motion.div variants={sectionVariants}>
          <MilkshakeSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <BlogSection />
        </motion.div>
        
        {/* Decorative element between sections */}
        <div className="w-full flex justify-center my-4 opacity-50">
          <div className="text-2xl">🐾 🐾 🐾</div>
        </div>
        
        <motion.div variants={sectionVariants}>
          <GamificationSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <NewsletterSection />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Index;
