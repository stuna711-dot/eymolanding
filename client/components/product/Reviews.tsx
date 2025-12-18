import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const REVIEWS = [
  {
    name: "Sarah M.",
    date: "2 days ago",
    rating: 5,
    title: "Life changing!",
    content: "I never thought a stuffed animal could help with my anxiety so much. Pookie is heavy enough to feel grounding but soft enough to cuddle all night.",
  },
  {
    name: "Jessica K.",
    date: "1 week ago",
    rating: 5,
    title: "Best purchase ever",
    content: "Bought this for my daughter who struggles with sensory processing. She takes it everywhere. The quality is amazing.",
  },
  {
    name: "Emily R.",
    date: "2 weeks ago",
    rating: 5,
    title: "So comforting",
    content: "I use this when I'm working from home and feeling stressed. It sits on my lap and really helps me focus.",
  },
];

export function Reviews() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Real people, real love for Pookie</h2>
          <p className="text-gray-600">Thousands of customers are already in love with Pookie worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{review.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">"{review.content}"</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="font-medium text-gray-900">{review.name}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
