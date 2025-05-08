
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  const { language } = useTheme();
  
  return (
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
  );
}
