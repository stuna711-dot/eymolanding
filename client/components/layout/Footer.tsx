import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Schnelllinks</h3>
            <ul className="space-y-3">
              <li><Link to="/search" className="text-gray-600 hover:text-primary transition-colors">Suchen</Link></li>
              <li><Link to="/track" className="text-gray-600 hover:text-primary transition-colors">Bestellung verfolgen</Link></li>
              <li><Link to="/bulk" className="text-gray-600 hover:text-primary transition-colors">Großbestellungen</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-primary transition-colors">Versandrichtlinien</Link></li>
              <li><Link to="/refund" className="text-gray-600 hover:text-primary transition-colors">Rückgaberecht</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">AGB</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6">Gratis E-Book und Mystery-Rabatt sichern</h3>
            <p className="text-gray-600 mb-4">
              Werde Teil unserer Community und erhalte exklusiven Zugang zu neuen Produkten, Angeboten und mehr.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="bg-gray-50 border-gray-200 focus:border-primary"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8">
                Anmelden
              </Button>
            </form>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Kontakt</h3>
            <p className="text-gray-600 mb-4">
              Fragen? Wir freuen uns von dir zu hören.
            </p>
            <a href="mailto:hello@tiansole.com" className="text-primary font-medium hover:underline block mb-6">
              hello@tiansole.com
            </a>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025, Tiansole. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
            {/* Payment Icons Placeholders */}
            <div className="h-6 w-10 bg-gray-200 rounded" title="Visa"></div>
            <div className="h-6 w-10 bg-gray-200 rounded" title="Mastercard"></div>
            <div className="h-6 w-10 bg-gray-200 rounded" title="Amex"></div>
            <div className="h-6 w-10 bg-gray-200 rounded" title="PayPal"></div>
            <div className="h-6 w-10 bg-gray-200 rounded" title="Apple Pay"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
