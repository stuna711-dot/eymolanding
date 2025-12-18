import { Layout } from "@/components/layout/Layout";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { Features } from "@/components/product/Features";
import { HowItWorks } from "@/components/product/HowItWorks";
import { Reviews } from "@/components/product/Reviews";
import { Guarantee } from "@/components/product/Guarantee";
import { StickyATC } from "@/components/product/StickyATC";

export default function Index() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Gallery */}
          <div className="lg:sticky lg:top-24 h-fit">
            <ProductGallery />
          </div>

          {/* Right Column - Product Info */}
          <div>
            <ProductInfo />
          </div>
        </div>
      </div>

      <Features />
      <HowItWorks />
      <Reviews />
      <Guarantee />
      <StickyATC />
    </Layout>
  );
}
