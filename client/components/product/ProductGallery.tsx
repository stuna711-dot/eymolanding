import { useState } from "react";
import { cn } from "@/lib/utils";

const IMAGES = [
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Fb761f623e472427cad2060f56fb01139?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F5f9d0215c4cc43719f54b3b8c6c9fbbc?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F91cc665cd363413a82d5c347b9c2c191?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F087a1df027df4da69604033c6d14357b?format=webp&width=800",
];

export function ProductGallery() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100">
        <img
          src={IMAGES[activeImage]}
          alt="Eymo der Panda - Gewichtetes Plüschtier"
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
              alt={`Ansicht ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
