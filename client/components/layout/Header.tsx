import { Link } from "react-router-dom";
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-[#5a7684] text-white text-xs md:text-sm py-2.5 text-center font-medium tracking-wide uppercase">
      Holiday Sale: Up to 30% off + 2 free gifts
    </div>
  );
}

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-ml-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium">Home</Link>
                <Link to="/shop" className="text-lg font-medium">Shop</Link>
                <Link to="/bundle" className="text-lg font-medium">Bundle & Save</Link>
                <Link to="/community" className="text-lg font-medium">Community</Link>
                <Link to="/about" className="text-lg font-medium">About</Link>
                <Link to="/contact" className="text-lg font-medium">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Nav (Left) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors">Shop</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link to="/community" className="text-sm font-medium hover:text-primary transition-colors">Community</Link>
        </nav>

        {/* Logo (Center) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold tracking-tight">PULSE OF POTENTIAL</span>
          </Link>
        </div>

        {/* Icons (Right) */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Link to="/account">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
