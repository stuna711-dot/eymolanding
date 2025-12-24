import { Button } from "@/components/ui/button";
import { ShoppingBag, Lock, Truck, RotateCcw } from "lucide-react";

export function Checkout() {
  return (
    <section id="checkout" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sichere dir jetzt deinen Eymo
            </h2>
            <p className="text-lg text-gray-600">
              Nur noch 47 Stück verfügbar. Nächste Lieferung erst in 4-6 Wochen.
            </p>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary/10 overflow-hidden mb-8">
            <div className="bg-primary/5 p-6 border-b border-primary/10">
              <h3 className="font-bold text-xl text-gray-900">Deine Bestellung</h3>
            </div>

            <div className="p-8">
              {/* Product */}
              <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 border-gray-100">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Fb761f623e472427cad2060f56fb01139?format=webp&width=200"
                    alt="Eymo der Panda"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Eymo der Panda</h4>
                  <p className="text-sm text-gray-600">Gewichtetes Plüschtier (5 kg)</p>
                  <p className="text-xs text-gray-500 mt-2">Menge: 1</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">59€</div>
                  <div className="text-sm text-gray-400 line-through">84€</div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Truck className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Kostenloser Versand (2-4 Werktage)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center">
                    <RotateCcw className="h-3 w-3 text-green-600" />
                  </div>
                  <span>60 Tage Geld-zurück-Garantie</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Lock className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Sichere SSL-verschlüsselte Zahlung</span>
                </div>
              </div>

              {/* Total */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Zwischensumme</span>
                  <span className="font-medium text-gray-900">59,00€</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Versand</span>
                  <span className="font-medium text-green-600">Kostenlos</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-lg font-bold text-gray-900">Gesamt</span>
                  <span className="text-3xl font-bold text-gray-900">59€</span>
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm text-green-600 font-medium">Du sparst 25€ (30%)</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => window.location.href = 'https://tiansole.de/products/eymo-der-panda'}
                className="w-full h-16 text-xl font-bold shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all mb-4"
              >
                <ShoppingBag className="mr-2 h-6 w-6" />
                Jetzt sicher bestellen
              </Button>

              <p className="text-center text-xs text-gray-500">
                Sichere Zahlung mit SSL-Verschlüsselung. Deine Daten sind geschützt.
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-green-600" />
              <span>SSL Sicher</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-green-600" />
              <span>Schneller Versand</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4 text-green-600" />
              <span>60 Tage Rückgabe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
