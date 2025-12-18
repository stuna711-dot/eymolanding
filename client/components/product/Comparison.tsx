import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Das ist nicht einfach <span className="italic">irgendein</span> Weighted Plush
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Der Unterschied zwischen Eymo und gewöhnlichen Kuscheltieren
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Visual Comparison */}
          <div className="mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Fd7e848727d9d4dc29db4b1b5c62fc9cc?format=webp&width=1200"
              alt="Eymo vs gewöhnliches Weighted Kuscheltier Vergleich"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Detailed Feature Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Eymo der Panda</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Umarmende, gewichtete Arme – legen sich sanft um Schultern & Brust",
                  "Bleibt an Ort und Stelle – beim Arbeiten, Aufräumen oder Entspannen",
                  "Fühlt sich an wie gehalten werden – nicht wie ein Spielzeug",
                  "Tiefer, beruhigender Druck – genau dort, wo dein Körper ihn braucht"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 opacity-75">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <X className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-500">Gewöhnliches Weighted Kuscheltier</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Kann dich nicht umarmen – liegt nur da",
                  "Rutscht sofort weg – funktioniert nur im Bett, wenn du still liegst",
                  "Kein echtes Umarmungsgefühl – wie jedes andere Kuscheltier",
                  "Wie jedes andere Kuscheltier"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Details with Image */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F5968e262762a49f6acac27d6ae314f07?format=webp&width=1200"
              alt="Eymo Eigenschaften im Detail"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
