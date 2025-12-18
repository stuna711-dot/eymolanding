import { Heart, ShieldCheck, Zap, Smile } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Lowers cortisol levels",
    description: "Weighted pressure helps reduce the stress hormone cortisol, helping you feel calmer instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Deep Pressure Therapy",
    description: "Mimics the feeling of a hug, which helps to relax the nervous system and improve sleep.",
  },
  {
    icon: Heart,
    title: "Calms your nervous system",
    description: "Slows down your heart rate and breathing, making it easier to unwind after a long day.",
  },
  {
    icon: Smile,
    title: "Hugs that heal",
    description: "Increases oxytocin (the love hormone) and serotonin, boosting your mood naturally.",
  },
];

export function Features() {
  return (
    <section className="py-16 bg-[#f1f4f5]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-gray-600">
            Pookie isn't just a stuffed animal. It's a science-backed tool designed to help you feel better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
