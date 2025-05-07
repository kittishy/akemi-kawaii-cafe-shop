
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
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
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="ghost" 
            size="icon"
            className="relative overflow-hidden group"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none"
            >
              <div className="w-full h-full rounded-full border-2 border-dashed border-primary" />
            </motion.div>
            <Globe className="h-5 w-5" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px] p-1">
        <motion.div layout>
          <DropdownMenuItem 
            className={`rounded-md mb-1 ${language === "pt-BR" ? "bg-muted font-medium" : ""}`} 
            onClick={() => setLanguage("pt-BR")}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🇧🇷</span>
              <span>Português</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className={`rounded-md ${language === "en-US" ? "bg-muted font-medium" : ""}`} 
            onClick={() => setLanguage("en-US")}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🇺🇸</span>
              <span>English</span>
            </div>
          </DropdownMenuItem>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );

}
