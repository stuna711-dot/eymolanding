import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.split("/").filter(Boolean).pop() || "Page";
  const formattedName = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, " ");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{formattedName}</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          This page is currently under construction. We're working hard to bring you the best experience.
        </p>
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
