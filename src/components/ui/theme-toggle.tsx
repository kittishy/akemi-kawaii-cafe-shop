
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // We need to make sure component is mounted before showing the toggle
  // to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="transition-colors duration-300"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`h-5 w-5 absolute inset-0 transition-all duration-300 ease-in-out ${
            theme === "light" 
              ? "transform rotate-0 opacity-100" 
              : "transform rotate-90 opacity-0"
          }`} 
        />
        <Moon 
          className={`h-5 w-5 absolute inset-0 transition-all duration-300 ease-in-out ${
            theme === "dark" 
              ? "transform rotate-0 opacity-100" 
              : "transform -rotate-90 opacity-0"
          }`} 
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
