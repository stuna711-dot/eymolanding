import { Heart, ShieldCheck, Brain, Smile } from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "Therapeutischer Druck, der funktioniert",
    description: "Eymos 5 kg gleichmäßig verteiltes Gewicht aktiviert deinen Parasympathikus – den Teil deines Nervensystems, der für Ruhe zuständig ist.",
  },
  {
    icon: Heart,
    title: "Arme, die dich wirklich umarmen",
    description: "Eymos Arme sind beschwert. Sie legen sich um deine Schultern, deinen Nacken – und bleiben dort. Eine Umarmung, die nicht loslässt.",
  },
  {
    icon: ShieldCheck,
    title: "Für die Momente, wo nichts anderes hilft",
    description: "3 Uhr morgens, vor der Arbeit, am Schreibtisch – Eymo geht dorthin, wo Gewichtsdecken nicht hinkommen.",
  },
  {
    icon: Smile,
    title: "Wissenschaftlich fundiert",
    description: "Studien zeigen: Deep Pressure senkt Cortisol um bis zu 31% und erhöht die Produktion von Serotonin und Dopamin.",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Was Eymo anders macht als alles, was du bisher probiert hast
          </h2>
          <p className="text-lg text-gray-600">
            Im Gegensatz zu Gewichtsdecken oder normalen Kuscheltieren gibt dir Eymo genau die richtige Menge Druck – 
            portabel, atembar, jederzeit verfügbar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mx-auto h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-5 text-primary">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
