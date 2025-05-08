
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Os benefícios do café para a saúde mental",
    excerpt: "Conheça como o café pode ser um aliado para a sua saúde mental e bem-estar diário.",
    image: "/lovable-uploads/akemi-mascot.png",
    date: "12 Abril 2023",
    author: "Lisa"
  },
  {
    id: 2,
    title: "Receitas fáceis de doces com café",
    excerpt: "Aprenda a preparar sobremesas deliciosas utilizando café como ingrediente principal.",
    image: "/lovable-uploads/akemi-full.png",
    date: "5 Março 2023",
    author: "Akemi"
  },
  {
    id: 3,
    title: "Como escolher o café perfeito para você",
    excerpt: "Um guia para iniciantes sobre os diferentes tipos de grãos e torras de café.",
    image: "/lovable-uploads/7eda1067-8586-41ec-8b78-50ec5763e70a.png",
    date: "27 Fevereiro 2023",
    author: "Gatinho"
  }
];

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
            <motion.div 
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <Button variant="ghost" className="group">
                  {language === "pt-BR" ? "Leia mais" : "Read more"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
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
