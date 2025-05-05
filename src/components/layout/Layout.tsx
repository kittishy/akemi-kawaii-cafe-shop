
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollArea className="flex-1">
        <main className="flex-1">
          {children}
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
}
