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

          {/* Copyright */}
          <p className="text-sm opacity-90">
            © 2025, Tiansole
          </p>
        </div>
      </div>
    </footer>
  );
}
