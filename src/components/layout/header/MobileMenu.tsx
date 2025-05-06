
import { Link } from "react-router-dom";
import { Headphones } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ title: string; href: string }>;
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  return (
    <div className={`
      md:hidden fixed inset-0 top-16 z-40 bg-background border-r border-border transition-all duration-300 ease-in-out transform shadow-lg
      ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
    `}>
      <nav className="flex flex-col gap-6 p-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className="font-medium text-lg text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.title}
          </Link>
        ))}
        <a 
          href="https://t.me/lisascafebot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium text-accent hover:text-accent-foreground transition-colors"
          onClick={onClose}
        >
          <Headphones className="h-5 w-5" />
          <span>Suporte via Telegram</span>
        </a>
      </nav>
    </div>
  );
}
