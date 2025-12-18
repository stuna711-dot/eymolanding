import { useState } from "react";
import { Star, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BUNDLES = [
  {
    id: "single",
    title: "Einzeln",
    price: 89,
    originalPrice: 129,
    badge: "SALE",
    description: "1x Eymo + Gratis Calm-Guide E-Book",
    savings: "31% sparen",
  },
  {
    id: "duo",
    title: "Duo-Pack",
    price: 159,
    originalPrice: 258,
    badge: "BELIEBT",
    description: "2x Eymo + Gratis Calm-Guide",
    savings: "38% sparen",
    subtitle: "Einer für Zuhause, einer fürs Büro",
  },
  {
    id: "family",
    title: "Familien-Set",
    price: 299,
    originalPrice: 516,
    badge: null,
    description: "4x Eymo + Gratis Calm-Guide",
    savings: "42% sparen",
    subtitle: "Perfekt für die ganze Familie",
  },
];

export function ProductInfo() {
  const [selectedBundle, setSelectedBundle] = useState("duo");

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
          Von Therapeuten empfohlen
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
          Wenn dein Körper Sicherheit braucht, nicht nur Worte
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Eymo ist ein gewichtetes Plüschtier mit therapeutischem Druck, das deinem Nervensystem hilft, 
          aus dem Panik-Modus in den Ruhe-Modus zu wechseln – wann immer du es brauchst.
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
          ))}
        </div>
        <span className="text-sm font-medium text-gray-700">4,9 von 5 Sternen</span>
        <span className="text-sm text-gray-500">| 2.847 Bewertungen</span>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 rounded-xl p-6 space-y-3 border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Das passiert, wenn du Eymo umarmst:</h3>
        {[
          "Dein Herzschlag verlangsamt sich – innerhalb von Minuten, nicht Stunden",
          "Dein Atem wird tiefer – ohne bewusstes \"Atme langsamer\"",
          "Die Enge in deiner Brust lässt nach – weil dein Körper endlich das Signal bekommt: \"Du bist sicher\"",
          "Du fühlst dich nicht mehr so allein – auch wenn niemand da ist",
        ].map((benefit, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span>{benefit}</span>
          </li>
        ))}
      </div>

      {/* Stock Indicator */}
      <div className="flex items-center gap-2 text-sm font-bold text-red-600 bg-red-50 w-fit px-4 py-2 rounded-full border border-red-100">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
        </span>
        Limitiertes Angebot: Nur noch 47 auf Lager
      </div>

      {/* Bundle Selector */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-gray-900">Preisoptionen wählen:</h3>
        <div className="grid gap-3">
          {BUNDLES.map((bundle) => (
            <div
              key={bundle.id}
              onClick={() => setSelectedBundle(bundle.id)}
              className={cn(
                "relative cursor-pointer rounded-xl border-2 p-5 transition-all hover:shadow-md",
                selectedBundle === bundle.id
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-gray-200 bg-white hover:border-gray-300"
              )}
            >
              {bundle.badge && (
                <div className={cn(
                  "absolute -top-3 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm",
                  bundle.badge === "BELIEBT" 
                    ? "bg-primary text-white" 
                    : "bg-red-500 text-white"
                )}>
                  {bundle.badge}
                </div>
              )}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className={cn(
                    "h-5 w-5 rounded-full border-2 flex items-center justify-center mt-1 flex-shrink-0",
                    selectedBundle === bundle.id ? "border-primary" : "border-gray-300"
                  )}>
                    {selectedBundle === bundle.id && (
                      <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg text-gray-900">{bundle.title}</div>
                    <div className="text-sm text-gray-600 mt-0.5">{bundle.description}</div>
                    {bundle.subtitle && (
                      <div className="text-xs text-gray-500 mt-1 italic">{bundle.subtitle}</div>
                    )}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-bold text-xl text-gray-900">{bundle.price}€</div>
                  <div className="text-sm text-gray-400 line-through">{bundle.originalPrice}€</div>
                  <div className="text-xs font-bold text-green-600 mt-1">{bundle.savings}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="pt-4 space-y-4">
        <Button className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all">
          In den Warenkorb – {(BUNDLES.find(b => b.id === selectedBundle)?.price || 0)}€
        </Button>
        <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
          <span className="flex items-center gap-1.5">
            <Info className="h-4 w-4" />
            60 Tage Geld-zurück-Garantie
          </span>
          <span className="flex items-center gap-1.5">
            <Info className="h-4 w-4" />
            Kostenloser Versand ab 60€
          </span>
        </div>
      </div>
    </div>
  );
}
