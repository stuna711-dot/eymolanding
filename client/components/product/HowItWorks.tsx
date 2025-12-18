import { Activity, TrendingDown, Zap, Heart } from "lucide-react";

const STEPS = [
  {
    number: "1",
    icon: Activity,
    title: "Dein Parasympathikus wird aktiviert",
    description: "Der Druck von Eymos Armen sagt deinem Körper: \"Kampf-oder-Flucht ist vorbei. Du darfst jetzt in den Ruhe-Modus wechseln.\"",
    effect: "Deine Schultern entspannen sich. Dein Atem wird tiefer. Die Enge in deiner Brust lässt nach."
  },
  {
    number: "2",
    icon: TrendingDown,
    title: "Dein Cortisolspiegel sinkt",
    description: "Cortisol ist dein Stresshormon. Deep Pressure kann Cortisol um bis zu 31% senken – oft innerhalb von 10-15 Minuten.",
    effect: "Die innere Unruhe lässt nach. Du fühlst dich nicht mehr wie ein gespannter Draht, der jeden Moment reißen könnte."
  },
  {
    number: "3",
    icon: Zap,
    title: "Serotonin und Dopamin werden freigesetzt",
    description: "Das sind die \"Glückshormone\" – sie helfen dir, dich sicher und ruhig zu fühlen. Tiefer Druck regt die Produktion natürlich an.",
    effect: "Ein Gefühl von Erleichterung. Fast so, als würde etwas Schweres von dir genommen. Endlich wieder durchatmen können."
  },
  {
    number: "4",
    icon: Heart,
    title: "Dein Herzschlag verlangsamt sich",
    description: "Wenn dein Körper das Signal bekommt, dass er sicher ist, muss dein Herz nicht mehr rasen. Es darf langsamer schlagen.",
    effect: "Das Pochen in deiner Brust beruhigt sich. Du fühlst dich geerdet, statt wie auf einer Achterbahn gefangen."
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dein Nervensystem braucht kein Gespräch. Es braucht ein Signal.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Wenn du unter Angst, Panik oder Depression leidest, ist dein Körper ständig im Alarm-Modus – 
            auch wenn rational gesehen keine Gefahr besteht. Dein Verstand weiß, dass du sicher bist. 
            Aber dein Körper glaubt es nicht.
          </p>
          <p className="text-lg font-semibold text-primary mt-4">
            Die Lösung: Deep Pressure Stimulation – sanfter, gleichmäßiger Druck, der deinem Nervensystem 
            ein physisches Signal gibt: "Du bist sicher. Du darfst loslassen."
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-bold text-4xl text-primary/20">{step.number}</span>
                    <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm font-medium text-gray-900">
                      <span className="text-primary font-bold">Das merkst du:</span> {step.effect}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
