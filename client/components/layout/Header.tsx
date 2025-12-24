import { Link } from "react-router-dom";
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-[#53537E] text-white text-xs md:text-sm py-2.5 text-center font-medium tracking-wide uppercase">
      🔥 Nur noch 47 auf Lager – 30% Rabatt nur heute: 59€ statt 84€
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-center">
        {/* Logo (Center) */}
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold tracking-tight">TIANSOLE</span>
        </Link>
      </div>
    </header>
  );
}
