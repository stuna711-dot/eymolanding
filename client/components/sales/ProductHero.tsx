import { Check, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductHero() {
  const handleBuyClick = () => {
    window.location.href = 'https://tiansole.de/products/eymo-der-panda';
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F5c83e30a34b54edaba00b6d3e502f8d1?format=webp&width=800"
                alt="Eymo der Panda - Gewichtetes Plüschtier"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Von Therapeuten empfohlen
              </div>
            </div>
          </div>

          {/* Right: Copy + CTA */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
              ))}
              <span className="text-sm font-medium text-gray-700 ml-2">4,9 von 5 Sternen (2.847 Bewertungen)</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Wenn dein Körper Sicherheit braucht, nicht nur Worte
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Eymo ist ein gewichtetes Plüschtier mit therapeutischem Druck, das deinem Nervensystem hilft, 
              aus dem Panik-Modus in den Ruhe-Modus zu wechseln – wann immer du es brauchst.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 space-y-3 border-2 border-gray-100">
              <h3 className="font-bold text-lg text-gray-900">Das passiert, wenn du Eymo umarmst:</h3>
              {[
                "Dein Herzschlag verlangsamt sich – innerhalb von Minuten",
                "Dein Atem wird tiefer – ohne bewusstes \"Atme langsamer\"",
                "Die Enge in deiner Brust lässt nach",
                "Du fühlst dich nicht mehr so allein"
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </div>

            {/* Price + CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary/20">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-bold text-gray-900">59€</span>
                <span className="text-2xl text-gray-400 line-through">84€</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-30%</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-red-600 font-bold mb-6 bg-red-50 px-4 py-2 rounded-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                Nur noch 47 auf Lager
              </div>

              <Button
                onClick={handleBuyClick}
                className="w-full h-16 text-xl font-bold shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all mb-4"
              >
                <ShoppingBag className="mr-2 h-6 w-6" />
                Jetzt für 59€ bestellen
              </Button>

              <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                <span>✓ 60 Tage Geld-zurück</span>
                <span>✓ Kostenloser Versand</span>
                <span>✓ Sichere Zahlung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
