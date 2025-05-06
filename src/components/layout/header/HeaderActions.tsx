
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SwitchLocale } from "@/components/ui/switch-locale";
import { CartSheet } from "./CartSheet";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon">
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
      
      <ThemeToggle />
      
      <SwitchLocale />
      
      <CartSheet />
    </div>
  );
}
