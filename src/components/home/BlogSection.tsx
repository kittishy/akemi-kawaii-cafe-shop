
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlogPostCard } from "./blog/BlogPostCard";
import { blogPosts } from "@/data/blog-posts";

export function BlogSection() {
  const { language, t } = useTheme();
  
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Blog
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {language === "pt-BR" 
              ? "Descubra dicas, receitas e curiosidades sobre o mundo do café" 
              : "Discover tips, recipes and curiosities about the coffee world"}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="rounded-full">
            {language === "pt-BR" ? "Ver todos os artigos" : "View all articles"}
          </Button>
        </div>
      </div>
    </section>
  );
}
