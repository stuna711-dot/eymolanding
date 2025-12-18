import { useState } from "react";
import { Star, Check, Info, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BUNDLES = [
  {
    id: "single",
    title: "Single + Free Gifts",
    price: 58.90,
    originalPrice: 84.20,
    badge: "SALE",
    description: "1x Weighted Panda + Free Gifts",
  },
  {
    id: "friends",
    title: "Friends Pack",
    price: 106.02,
    originalPrice: 168.40,
    badge: "MOST POPULAR",
    description: "2x Weighted Pandas + Free Gifts",
    savings: "Save $62.38",
  },
  {
    id: "family",
    title: "Family Pack",
    price: 200.26,
    originalPrice: 336.80,
    badge: null,
    description: "4x Weighted Pandas + Free Gifts",
    savings: "Save $136.54",
  },
];

export function ProductInfo() {
  const [selectedBundle, setSelectedBundle] = useState("friends");

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
          ))}
          <span className="text-sm text-gray-500 ml-2 underline decoration-gray-300 underline-offset-4">
            2,483 Reviews
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Pookie the Panda Weighted Animal
        </h1>
      </div>

      {/* Promo Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-start gap-3">
        <div className="bg-primary/10 p-2 rounded-full">
          <Check className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">+ Limited time only: 2 Free gifts</h3>
          <p className="text-sm text-gray-600">De-stress workbook & audio meditation included with your order.</p>
        </div>
      </div>

      {/* Description Snippet */}
      <p className="text-gray-600 leading-relaxed">
        The original weighted stuffed animal designed to reduce stress and anxiety. 
        Pookie provides deep pressure therapy to help you feel calm, focused, and grounded.
      </p>

      {/* Benefits */}
      <ul className="space-y-2">
        {[
          "Reduce stress and anxiety naturally",
          "Increase focus and feel calmer",
          "Spark happy brain chemicals (Oxytocin)",
        ].map((benefit, i) => (
          <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            {benefit}
          </li>
        ))}
      </ul>

      {/* Stock Indicator */}
      <div className="flex items-center gap-2 text-sm font-medium text-red-600 bg-red-50 w-fit px-3 py-1 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        Low stock available
      </div>

      {/* Bundle Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Bundle & Save</h3>
        </div>
        <div className="grid gap-3">
          {BUNDLES.map((bundle) => (
            <div
              key={bundle.id}
              onClick={() => setSelectedBundle(bundle.id)}
              className={cn(
                "relative cursor-pointer rounded-xl border-2 p-4 transition-all hover:bg-gray-50",
                selectedBundle === bundle.id
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 bg-white"
              )}
            >
              {bundle.badge && (
                <div className="absolute -top-3 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {bundle.badge}
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "h-5 w-5 rounded-full border-2 flex items-center justify-center",
                    selectedBundle === bundle.id ? "border-primary" : "border-gray-300"
                  )}>
                    {selectedBundle === bundle.id && (
                      <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{bundle.title}</div>
                    <div className="text-xs text-gray-500">{bundle.description}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">${bundle.price.toFixed(2)}</div>
                  <div className="text-xs text-gray-400 line-through">${bundle.originalPrice.toFixed(2)}</div>
                </div>
              </div>
              {bundle.savings && (
                <div className="mt-2 ml-8 text-xs font-medium text-green-600 bg-green-50 w-fit px-2 py-0.5 rounded">
                  {bundle.savings}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="pt-4">
        <Button className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
          Add to Cart - ${(BUNDLES.find(b => b.id === selectedBundle)?.price || 0).toFixed(2)}
        </Button>
        <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
          <Info className="h-3 w-3" />
          Free shipping on orders over $60
        </p>
      </div>
    </div>
  );
}
