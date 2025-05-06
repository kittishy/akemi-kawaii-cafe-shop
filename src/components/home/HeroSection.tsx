
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  const { t } = useTheme();
  
  return (
    <section className="relative overflow-hidden">
      {/* Background with wave effect */}
      <div className="absolute inset-0 bg-lisa-cream dark:bg-lisa-dark-blue/20 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" 
             style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}></div>
      </div>
      
      <div className="container pt-10 lg:pt-16 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-lisa-lavender dark:bg-lisa-dark-lavender/40 text-sm font-medium">
              {t("hero.badge")}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              {t("hero.title")}
              <span className="text-primary block mt-1"></span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-md">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/shop">{t("hero.cta")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/about">Conheça a Lisa</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-lisa-lavender flex items-center justify-center text-xs">
                  😺
                </div>
                <div className="w-8 h-8 rounded-full bg-lisa-baby-blue flex items-center justify-center text-xs">
                  🐱
                </div>
                <div className="w-8 h-8 rounded-full bg-lisa-peach flex items-center justify-center text-xs">
                  😸
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">500+</span> {t("hero.customers")}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full filter blur-3xl"></div>
            
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-xl animate-float">
              <img 
                src="/lovable-uploads/77e34000-1c92-4c67-877d-b08f50e4a2ce.png" 
                alt="Lisa Mascote" 
                className="w-full h-auto rounded-2xl"
              />
              
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg animate-wiggle">
                <span className="text-2xl">🐾</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
