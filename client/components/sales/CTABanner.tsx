import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface CTABannerProps {
  variant?: "primary" | "secondary";
}

export function CTABanner({ variant = "primary" }: CTABannerProps) {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (variant === "secondary") {
    return (
      <div className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 mb-4 font-medium">
            Bereit, deinem Nervensystem die Ruhe zu geben, die es braucht?
          </p>
          <Button 
            onClick={scrollToCheckout}
            variant="outline"
            size="lg"
            className="text-lg font-bold px-8"
          >
            Ja, ich möchte Eymo für 59€
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary/5 py-16 border-y-2 border-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Nur noch 47 Stück verfügbar
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Wie viele schlaflose Nächte noch? Wie viele Panikattacken musst du noch alleine durchstehen?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToCheckout}
              size="lg"
              className="w-full sm:w-auto h-14 text-lg font-bold shadow-xl shadow-primary/30"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Jetzt für 59€ bestellen
            </Button>
            <div className="text-sm text-gray-600">
              ✓ 60 Tage Geld-zurück-Garantie
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
