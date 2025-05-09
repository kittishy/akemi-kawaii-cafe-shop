
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Coffee, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";

const About = () => {
  const { t } = useTheme();
  
  // Efeito para revelar elementos ao rolar
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    document.querySelectorAll('.cafe-reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <Layout>
      {/* Hero section */}
      <div className="k-cafe-bg py-20 relative overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 text-4xl opacity-10"
          animate={{ 
            y: [0, -15, 0], 
            rotate: [0, -5, 0] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          ☕
        </motion.div>
        <motion.div 
          className="absolute bottom-10 right-10 text-4xl opacity-10"
          animate={{ 
            y: [0, 15, 0], 
            rotate: [0, 5, 0] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          🍵
        </motion.div>
        
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 space-y-6">
              <motion.h1 
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span>{t("about.title").split(" ")[0]} </span>
                <span className="text-primary">{t("about.title").split(" ")[1]}</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("about.subtitle")}
              </motion.p>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button asChild className="cafe-button">
                  <a href="https://t.me/lisascafebot" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("about.button.talk")}
                  </a>
                </Button>
              </motion.div>
            </div>
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-lisa-soft-pink/30 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-lisa-soft-blue/30 rounded-full filter blur-2xl"></div>
              <img 
                src="/lovable-uploads/lisa-full.png" 
                alt="Lisa Mascote" 
                className="rounded-3xl w-full max-w-md mx-auto z-10 relative cafe-floating"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Lisa section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="cafe-reveal space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">{t("about.history.title")}</h2>
              <div className="prose max-w-none text-muted-foreground dark:text-muted-foreground">
                <p className="text-lg">
                  {t("about.history.p1")}
                </p>
                <p>
                  {t("about.history.p2")}
                </p>
                <p>
                  {t("about.history.p3")}
                </p>
                <p>
                  {t("about.history.p4")}
                </p>
              </div>
            </div>
            <div className="j-cafe-card cafe-reveal bg-gradient-to-br from-white to-lisa-cream/50 dark:from-gray-800 dark:to-gray-800/90 rounded-3xl p-8 space-y-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">{t("about.facts.title")}</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">🐱</span>
                  <div>
                    <h3 className="font-medium text-lg">{t("about.facts.age.title")}</h3>
                    <p className="text-muted-foreground">{t("about.facts.age.description")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">☕</span>
                  <div>
                    <h3 className="font-medium text-lg">{t("about.facts.drink.title")}</h3>
                    <p className="text-muted-foreground">{t("about.facts.drink.description")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">🎵</span>
                  <div>
                    <h3 className="font-medium text-lg">{t("about.facts.music.title")}</h3>
                    <p className="text-muted-foreground">{t("about.facts.music.description")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">💤</span>
                  <div>
                    <h3 className="font-medium text-lg">{t("about.facts.hobby.title")}</h3>
                    <p className="text-muted-foreground">{t("about.facts.hobby.description")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="py-20 bg-lisa-cream dark:bg-gray-900">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 cafe-reveal">{t("about.gallery.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div 
              className="j-cafe-card overflow-hidden shadow hover:shadow-lg transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/lisa-cafe-mascot.png" 
                  alt={t("about.gallery.image1.title")}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-lg">{t("about.gallery.image1.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("about.gallery.image1.description")}</p>
              </div>
            </motion.div>
            <motion.div 
              className="j-cafe-card overflow-hidden shadow hover:shadow-lg transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/lisa-mascot.png" 
                  alt={t("about.gallery.image2.title")}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-lg">{t("about.gallery.image2.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("about.gallery.image2.description")}</p>
              </div>
            </motion.div>
            <motion.div 
              className="j-cafe-card overflow-hidden shadow hover:shadow-lg transition-all duration-300 group sm:col-span-2 md:col-span-1"
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden bg-lisa-lavender/30 dark:bg-lisa-lavender/10">
                <img 
                  src="/lovable-uploads/lisa-full.png" 
                  alt={t("about.gallery.image3.title")}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-lg">{t("about.gallery.image3.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("about.gallery.image3.description")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="j-cafe-card bg-gradient-to-br from-white via-white to-lisa-soft-blue/20 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800/90 rounded-3xl p-10 md:p-12 shadow-lg text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t("about.cta.title")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              {t("about.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cafe-button">
                <Link to="/shop">
                  <Coffee className="mr-2 h-4 w-4" />
                  {t("about.cta.products")}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="cafe-button-outline">
                <a href="https://t.me/lisascafebot" target="_blank" rel="noopener noreferrer">
                  <Heart className="mr-2 h-4 w-4" />
                  {t("about.cta.fanclub")}
                </a>
              </Button>
            </div>
            <motion.div 
              className="mt-8 text-4xl opacity-50"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              🐾
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
