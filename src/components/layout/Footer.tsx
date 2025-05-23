
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Github, Twitter, Instagram, Globe, Music, MessageCircle } from "lucide-react";

export function Footer() {
  const { t } = useTheme();
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/440478d4-0308-4bb0-8b3b-3f6538c16e58.png" 
                alt="Lisa's Café" 
                className="h-10 w-auto object-contain rounded-full border border-lisa-baby-blue/30" 
              />
              <span className="font-display font-bold text-lg text-primary">
                Lisa's <span className="text-accent">Café</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
            <div className="flex gap-2 items-center">
              <a 
                href="https://t.me/lisascafe_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t("footer.telegram.chat")}</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">{t("footer.products")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=coffee" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("products.category.coffee")}
                </Link>
              </li>
              <li>
                <Link to="/shop?category=tea" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("products.category.tea")}
                </Link>
              </li>
              <li>
                <Link to="/shop?category=milkshake" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("products.category.milkshake")}
                </Link>
              </li>
              <li>
                <Link to="/shop?category=merchandise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("products.category.merchandise")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.faq")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">{t("footer.follow")}</h3>
            <div className="flex gap-4">
              <a href="https://github.com/kittishy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://x.com/kittishysz" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://www.instagram.com/criecomflow" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://pin.it/3s4HmDTtZ" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <Globe className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://open.spotify.com/user/315sh472qwzqkmzubi3df2xdmbou?si=h2YX-9gmQhWGMZ008x4Umg" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <Music className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Discord: gxth_akemi</p>
            <p className="text-xs text-muted-foreground mt-1">
              <a href="https://t.me/lisascafe_bot" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                {t("footer.telegram.support")}
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Lisa's Café – {t("footer.rights")}
          </p>
          
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
