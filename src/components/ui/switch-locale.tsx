
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function SwitchLocale() {
  const { language, setLanguage } = useTheme();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          className={language === "pt-BR" ? "bg-muted" : ""} 
          onClick={() => setLanguage("pt-BR")}
        >
          🇧🇷 Português
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={language === "en-US" ? "bg-muted" : ""} 
          onClick={() => setLanguage("en-US")}
        >
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
