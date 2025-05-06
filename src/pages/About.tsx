
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Coffee, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-lisa-lavender/30 dark:bg-lisa-dark-lavender/20 py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 space-y-6">
              <h1 className="font-display text-4xl font-bold">
                Conheça a <span className="text-primary">Lisa</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A mascote mais fofa do mundo dos cafés temáticos, com personalidade única e cheio de curiosidades para compartilhar.
              </p>
              <div className="flex gap-4">
                <Button asChild className="rounded-full">
                  <a href="https://t.me/lisascafebot" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Fale com a Lisa
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full filter blur-3xl"></div>
              <img 
                src="/lovable-uploads/lisa-full.png" 
                alt="Lisa Mascote" 
                className="rounded-3xl w-full max-w-md mx-auto z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Lisa section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold">A História da Lisa</h2>
              <div className="prose max-w-none text-muted-foreground dark:text-muted-foreground">
                <p>
                  Lisa é uma gatinha com pelagem branca e detalhes em tons pastel, que nasceu com um talento especial para os aromas e sabores de café.
                </p>
                <p>
                  Desde pequena, Lisa sempre foi encantada com o ritual de preparo do café. Com sua curiosidade felina natural, observava atentamente os baristas trabalhando e aprendeu todos os segredos de como fazer o café perfeito.
                </p>
                <p>
                  Um dia, decidiu abrir seu próprio café temático, onde poderia compartilhar seu amor por bebidas deliciosas em um ambiente acolhedor e cheio de personalidade felina.
                </p>
                <p>
                  Hoje, Lisa é a anfitriã oficial do Lisa's Cafe, onde recebe seus clientes com muito carinho e presenteia cada um com uma experiência sensorial única.
                </p>
              </div>
            </div>
            <div className="bg-lisa-cream dark:bg-lisa-dark-blue/20 rounded-3xl p-8 space-y-6">
              <h2 className="font-display text-3xl font-bold text-center">Curiosidades</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary text-2xl">🐱</span>
                  <div>
                    <h3 className="font-medium">Idade</h3>
                    <p className="text-muted-foreground">Lisa tem 4 anos em idade felina, o que equivale a uma jovem barista cheia de energia e criatividade.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary text-2xl">☕</span>
                  <div>
                    <h3 className="font-medium">Bebida Favorita</h3>
                    <p className="text-muted-foreground">Seu cappuccino especial com canela e arte latte em formato de patinha.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary text-2xl">🎵</span>
                  <div>
                    <h3 className="font-medium">Música</h3>
                    <p className="text-muted-foreground">Lisa adora lo-fi beats enquanto prepara o café da manhã para seus clientes.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary text-2xl">💤</span>
                  <div>
                    <h3 className="font-medium">Hobby</h3>
                    <p className="text-muted-foreground">Colecionar xícaras vintage e tirar sonecas estratégicas entre um preparo e outro.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="py-16 bg-lisa-soft-gray dark:bg-gray-900">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-10">Galeria da Lisa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/lisa-cafe-mascot.png" 
                alt="Lisa no Café" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">Lisa preparando café</h3>
                <p className="text-sm text-muted-foreground">Lisa em ação no seu café favorito.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/lisa-mascot.png" 
                alt="Lisa sorridente" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">Lisa soridente</h3>
                <p className="text-sm text-muted-foreground">Um sorriso que ilumina o dia de todos os clientes.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/lisa-full.png" 
                alt="Lisa de corpo inteiro" 
                className="w-full h-64 object-contain bg-lisa-lavender/30 dark:bg-lisa-dark-lavender/20"
              />
              <div className="p-4">
                <h3 className="font-medium">Lisa de corpo inteiro</h3>
                <p className="text-sm text-muted-foreground">A mascote completa com todos os detalhes fofos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-lg text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Venha tomar um café com a Lisa!
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Conheça nossas bebidas especiais, produtos temáticos e entre para o nosso clube de amigos da Lisa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/shop">
                  <Coffee className="mr-2 h-4 w-4" />
                  Ver produtos
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="https://t.me/lisascafebot" target="_blank" rel="noopener noreferrer">
                  <Heart className="mr-2 h-4 w-4" />
                  Clube de fãs
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
