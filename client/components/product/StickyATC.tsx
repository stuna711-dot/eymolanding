import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function StickyATC() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show after scrolling past the main hero section (approx 600px)
      setIsVisible(scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 transform transition-transform duration-300 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden md:block">
          <div className="font-bold text-gray-900">Eymo der Panda</div>
          <div className="text-sm text-gray-500">89€</div>
        </div>
        <Button className="w-full md:w-auto md:px-8 font-bold shadow-lg shadow-primary/20">
          In den Warenkorb
        </Button>
      </div>
    </div>
  );
}
