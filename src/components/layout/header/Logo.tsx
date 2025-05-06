
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/440478d4-0308-4bb0-8b3b-3f6538c16e58.png" 
        alt="Lisa's Cafe" 
        className="h-12 w-auto object-contain rounded-full border border-lisa-baby-blue/30" 
      />
      <span className="font-display font-bold text-lg md:text-xl text-primary">
        Lisa's<span className="text-accent">Cafe</span>
      </span>
    </Link>
  );
}
