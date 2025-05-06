
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarIcon, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Os segredos para um café perfeito em casa",
    excerpt: "Aprenda como preparar um café delicioso como o da Lisa's Cafe no conforto da sua casa com essas dicas especiais.",
    image: "/lovable-uploads/lisa-cappuccino.png",
    date: "2023-05-12",
    author: "Lisa",
    readTime: "5 min",
    category: "Dicas",
  },
  {
    id: 2,
    title: "A história dos gatos e o café ao longo dos séculos",
    excerpt: "Descubra a fascinante relação entre felinos e cafeína desde os tempos antigos até os cafés temáticos de hoje.",
    image: "/lovable-uploads/lisa-cafe-mascot.png",
    date: "2023-04-28",
    author: "Historiador Felino",
    readTime: "8 min",
    category: "História",
  },
  {
    id: 3,
    title: "Milkshakes especiais para o verão: receitas exclusivas",
    excerpt: "Confira estas receitas refrescantes de milkshakes que vão te ajudar a enfrentar os dias quentes com muito sabor.",
    image: "/lovable-uploads/lisa-milkshake-morango.png",
    date: "2023-03-15",
    author: "Chef Miau",
    readTime: "6 min",
    category: "Receitas",
  },
  {
    id: 4,
    title: "Decoração inspirada em gatinhos para sua casa",
    excerpt: "Ideias fofas e elegantes para trazer o estilo do Lisa's Cafe para sua casa, com elementos temáticos de gatinhos.",
    image: "/lovable-uploads/lisa-mascot.png",
    date: "2023-02-20",
    author: "Decoradora Felina",
    readTime: "7 min",
    category: "Decoração",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-lisa-baby-blue/20 dark:bg-lisa-dark-blue/20 py-16">
        <div className="container text-center max-w-3xl">
          <h1 className="font-display text-4xl font-bold mb-4">
            Blog da Lisa
          </h1>
          <p className="text-muted-foreground">
            Descubra dicas, histórias, receitas e curiosidades sobre o mundo dos cafés e gatinhos
          </p>
        </div>
      </div>

      {/* Featured post */}
      <section className="py-16">
        <div className="container">
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img 
                  src="/lovable-uploads/lisa-mascot.png" 
                  alt="Lisa contando segredos de café" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Destaque
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    12 de Maio, 2023
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    10 min de leitura
                  </span>
                </div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  Conheça a história da criação da Lisa, nossa mascote querida
                </h2>
                <p className="text-muted-foreground mb-6">
                  Neste post especial, compartilhamos os bastidores da criação da Lisa, desde os primeiros sketches até se tornar o símbolo oficial do nosso café temático. Uma jornada de criatividade, amor por café e muitos miados.
                </p>
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/blog/historia-da-lisa">
                    Continuar lendo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="pb-16">
        <div className="container">
          <h2 className="font-display text-3xl font-bold mb-10">Posts Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md h-full transition-transform hover:scale-105">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-medium text-xl mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/blog/${post.id}`}>
                      Ler artigo
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/blog/archive">
                Ver todos os artigos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-16 bg-lisa-cream dark:bg-lisa-dark-blue/20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Assine nossa Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Receba artigos, receitas e novidades do Lisa's Cafe diretamente na sua caixa de entrada
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Seu melhor email" 
              className="rounded-full"
              required
            />
            <Button type="submit" className="rounded-full whitespace-nowrap">
              Inscrever-se
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Também pode nos acompanhar pelo nosso 
            <a 
              href="https://t.me/lisascafebot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline ml-1"
            >
              canal no Telegram
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
