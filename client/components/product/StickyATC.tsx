import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function StickyATC() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const checkout = document.getElementById('checkout');
      const checkoutPosition = checkout?.offsetTop || 9999999;

      // Show after scrolling past hero, hide when reaching checkout
      setIsVisible(scrollY > 600 && scrollY < checkoutPosition - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary/20 p-4 z-40 transform transition-transform duration-300 shadow-[0_-8px_16px_-4px_rgba(0,0,0,0.2)]",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden md:block">
          <div className="font-bold text-gray-900">Eymo der Panda</div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">59€</span>
            <span className="text-sm text-gray-400 line-through">84€</span>
          </div>
        </div>
        <Button
          onClick={() => window.location.href = 'https://tiansole.de/products/eymo-der-panda'}
          className="w-full md:w-auto md:px-12 h-12 font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all"
        >
          Jetzt bestellen
        </Button>
      </div>
    </div>
  );
}
