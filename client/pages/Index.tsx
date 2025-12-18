import { Layout } from "@/components/layout/Layout";
import { ProductHero } from "@/components/sales/ProductHero";
import { Features } from "@/components/product/Features";
import { UseCases } from "@/components/product/UseCases";
import { HowItWorks } from "@/components/product/HowItWorks";
import { SocialProof } from "@/components/sales/SocialProof";
import { CTABanner } from "@/components/sales/CTABanner";
import { Comparison } from "@/components/product/Comparison";
import { CustomerGallery } from "@/components/product/CustomerGallery";
import { Checkout } from "@/components/sales/Checkout";
import { StickyATC } from "@/components/product/StickyATC";

export default function Index() {
  return (
    <Layout>
      <ProductHero />
      <SocialProof />
      <CTABanner />
      <Features />
      <CTABanner variant="secondary" />
      <UseCases />
      <HowItWorks />
      <CTABanner />
      <Comparison />
      <CustomerGallery />
      <CTABanner variant="secondary" />
      <Checkout />
      <StickyATC />
    </Layout>
  );
}
