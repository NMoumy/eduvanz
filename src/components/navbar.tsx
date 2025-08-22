"use client";

import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="flex h-16 items-center px-4">
        {/* Section gauche - Sidebar trigger et logo */}
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          {/* <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">E</span>
            </div>
            <span className="font-semibold hidden sm:block">Eduvanz</span>
          </div> */}
        </div>

        {/* Section centrale - Barre de recherche */}
        <div className="flex-1 max-w-md mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Rechercher..." className="pl-8 border-border" />
          </div>
        </div>

        {/* Section droite - Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
