import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Julia K., 28",
    rating: 5,
    title: "Ich weine nicht mehr jeden Morgen vor Angst",
    content: "Innerhalb von zwei Wochen hatten sich meine Panikattacken von täglich auf 1-2 pro Woche reduziert. Eymo gibt mir das Gefühl: 'Du schaffst das.'",
    condition: "Panikstörung",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F63734ffc9460435782fa4e03fa9ddd00?format=webp&width=400"
  },
  {
    name: "Markus S., 35",
    rating: 5,
    title: "Mein stiller Therapeut",
    content: "Ich brauche Druck, um mich zu regulieren. Eymo ist perfekt – ich kann die Arme genau da hinlegen, wo ich sie brauche. Ich nehme ihn sogar mit auf Reisen.",
    condition: "hochsensibel, ADHS",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Fd25b9f344f4c404bac3ad93897df30cd?format=webp&width=400"
  },
  {
    name: "Lena B., 42",
    rating: 5,
    title: "Das Einzige, das mich in dunklen Momenten hält",
    content: "Die Abende waren die Hölle. Eymo fühlt sich an wie das Einzige, das mich buchstäblich hält. Ich kann endlich atmen.",
    condition: "Depression",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F9733687223074a60a586995a40ee4f22?format=webp&width=400"
  },
];

export function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Über 2.800 Menschen haben ihr Leben mit Eymo verändert
          </h2>
          <p className="text-lg text-gray-600">
            Das sind echte Bewertungen von echten Menschen, die endlich Ruhe gefunden haben.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              {review.image && (
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-3">{review.title}</h3>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                  "{review.content}"
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{review.condition}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-lg font-medium">
            ⭐⭐⭐⭐⭐ <span className="font-bold text-gray-900">4,9 von 5 Sternen</span> aus 2.847 Bewertungen
          </p>
        </div>
      </div>
    </section>
  );
}
