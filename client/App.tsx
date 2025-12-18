import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Placeholder />} />
          <Route path="/bundle" element={<Placeholder />} />
          <Route path="/community" element={<Placeholder />} />
          <Route path="/about" element={<Placeholder />} />
          <Route path="/contact" element={<Placeholder />} />
          <Route path="/search" element={<Placeholder />} />
          <Route path="/track" element={<Placeholder />} />
          <Route path="/creators" element={<Placeholder />} />
          <Route path="/bulk" element={<Placeholder />} />
          <Route path="/shipping" element={<Placeholder />} />
          <Route path="/refund" element={<Placeholder />} />
          <Route path="/privacy" element={<Placeholder />} />
          <Route path="/terms" element={<Placeholder />} />
          <Route path="/account" element={<Placeholder />} />
          <Route path="/cart" element={<Placeholder />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
