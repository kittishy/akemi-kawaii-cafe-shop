
import { Link } from "react-router-dom";
import { Headphones } from "lucide-react";

interface DesktopNavigationProps {
  navLinks: Array<{ title: string; href: string }>;
}

export function DesktopNavigation({ navLinks }: DesktopNavigationProps) {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className="font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {link.title}
        </Link>
      ))}
      <a 
        href="https://t.me/lisascafebot" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-1 font-medium text-accent hover:text-accent-foreground transition-colors"
      >
        <Headphones className="h-4 w-4" />
        <span>Suporte</span>
      </a>
    </nav>
  );
}
