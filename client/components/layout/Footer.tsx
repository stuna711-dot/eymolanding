import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#53537E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Legal Heading */}
          <h3 className="text-sm font-semibold tracking-wider uppercase">
            RECHTLICHES
          </h3>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
            <Link to="/agb" className="hover:underline transition-colors">
              AGB
            </Link>
            <Link to="/datenschutz" className="hover:underline transition-colors">
              Datenschutz
            </Link>
            <Link to="/impressum" className="hover:underline transition-colors">
              Impressum
            </Link>
            <Link to="/widerrufsbelehrung" className="hover:underline transition-colors">
              Widerrufsbelehrung
            </Link>
          </div>

          {/* Payment Icons */}
          <div className="flex flex-wrap items-center justify-center gap-2 py-4">
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg" alt="American Express" className="h-6" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/37fc65d0be90813e3499.svg" alt="Apple Pay" className="h-6" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/b4426b4244e87d3f50c5.svg" alt="Google Pay" className="h-6" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/84bf4f9e9870c4842bb4.svg" alt="Maestro" className="h-6" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/37fc65d0be90813e3499.svg" alt="Mastercard" className="h-6" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c280ae8c76b5f7c5c695.svg" alt="PayPal" className="h-6" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/87df356e66f9e4d8ca72.svg" alt="Shop Pay" className="h-6" />
            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg" alt="Visa" className="h-6" />
          </div>

          {/* Copyright */}
          <p className="text-sm opacity-90">
            © 2025, Tiansole
          </p>
        </div>
      </div>
    </footer>
  );
}
