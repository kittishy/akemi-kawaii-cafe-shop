
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Github, Twitter, Instagram, Globe, Music } from "lucide-react";

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
                src="/lovable-uploads/7eda1067-8586-41ec-8b78-50ec5763e70a.png" 
                alt="Akemi Cat Cafe" 
                className="h-10 w-10 object-contain rounded-full" 
              />
              <span className="font-display font-bold text-lg text-primary">
                Akemi<span className="text-accent">Cat</span>Cafe
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Café inspirado em gatinhos para alegrar seu dia. Produtos exclusivos com temática kawaii!
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/coffee" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cafés
                </Link>
              </li>
              <li>
                <Link to="/shop/tea" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Chás
                </Link>
              </li>
              <li>
                <Link to="/shop/milkshakes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Milkshakes
                </Link>
              </li>
              <li>
                <Link to="/shop/merchandise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Produtos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
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
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Akemi Cat Cafe. {t("footer.rights")}
          </p>
          
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
