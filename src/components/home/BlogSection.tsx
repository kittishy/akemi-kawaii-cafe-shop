
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: "1",
    title: "Os benefícios do café para sua rotina",
    excerpt: "Descubra como o café pode melhorar sua produtividade e bem-estar quando consumido moderadamente.",
    image: "/placeholder.svg",
    date: "2023-12-15",
    category: "Café",
    author: "Lisa"
  },
  {
    id: "2",
    title: "Como fazer o café perfeito em casa",
    excerpt: "Técnicas simples e efetivas para preparar um café incrível sem equipamentos caros.",
    image: "/placeholder.svg",
    date: "2023-12-05",
    category: "Tutoriais",
    author: "Lisa"
  },
  {
    id: "3",
    title: "História das cafeterias de gatinhos no Japão",
    excerpt: "A origem das cat cafés no Japão e como elas se espalharam pelo mundo todo.",
    image: "/placeholder.svg",
    date: "2023-11-20",
    category: "Cultura",
    author: "Lisa"
  }
];

export function BlogSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-bold">Blog da Lisa</h2>
          <p className="text-muted-foreground mt-2">Conteúdo sobre café, gatos e muito mais</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-medium text-lg">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <div className="pt-2">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Ler mais →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="rounded-full px-8">
            <Link to="/blog">Ver todos os posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
