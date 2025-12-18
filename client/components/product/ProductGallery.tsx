import { useState } from "react";
import { cn } from "@/lib/utils";

const IMAGES = [
  "https://images.pexels.com/photos/754195/pexels-photo-754195.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/754195/pexels-photo-754195.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2", // Placeholder variation
  "https://images.pexels.com/photos/754195/pexels-photo-754195.jpeg?auto=compress&cs=tinysrgb&w=800&grayscale", // Placeholder variation
  "https://images.pexels.com/photos/754195/pexels-photo-754195.jpeg?auto=compress&cs=tinysrgb&w=800&sepia", // Placeholder variation
];

export function ProductGallery() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100 border border-gray-100">
        <img
          src={IMAGES[activeImage]}
          alt="Product View"
          className="h-full w-full object-cover object-center transition-all duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
          Bestseller
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {IMAGES.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={cn(
              "relative flex-shrink-0 h-20 w-20 overflow-hidden rounded-md border-2 transition-all",
              activeImage === idx
                ? "border-primary ring-2 ring-primary/20"
                : "border-transparent hover:border-gray-200"
            )}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
