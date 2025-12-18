import { Shield, Truck, Lock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Guarantee() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Warum jetzt bestellen?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="h-14 w-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">Nur noch 47 auf Lager</h3>
              <p className="text-sm text-gray-600">
                Nächste Lieferung erst in 4-6 Wochen. Wie viele schlaflose Nächte sind das?
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="h-14 w-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">60 Tage Geld-zurück</h3>
              <p className="text-sm text-gray-600">
                Wenn Eymo dir nicht hilft, schickst du ihn zurück – ohne Fragen, ohne Stress.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Star className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">4,9 / 5 Sterne</h3>
              <p className="text-sm text-gray-600">
                2.847 Bewertungen von Menschen, die endlich Ruhe gefunden haben.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-primary/20 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Du hast schon genug gewartet
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Wie viele schlaflose Nächte noch? Wie viele Panikattacken, die du alleine durchstehen musst? 
                Jeder Tag, an dem du deinem Nervensystem nicht hilfst, ist ein Tag, an dem die Erschöpfung tiefer wird.
              </p>
            </div>

            <div className="text-center">
              <Button className="h-16 px-12 text-xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all">
                Jetzt Eymo bestellen – 89€
              </Button>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  60 Tage Geld-zurück
                </span>
                <span className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  Kostenloser Versand
                </span>
                <span className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Sichere Zahlung
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
