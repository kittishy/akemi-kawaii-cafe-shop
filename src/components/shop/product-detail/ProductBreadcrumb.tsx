
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ProductBreadcrumbProps {
  category: string;
  title: string;
}

export function ProductBreadcrumb({ category, title }: ProductBreadcrumbProps) {
  const { t } = useTheme();
  
  return (
    <div className="mb-8 text-sm flex items-center">
      <Button variant="ghost" size="sm" className="mr-2" asChild>
        <Link to="/shop">
          <ArrowLeft className="h-4 w-4 mr-1" />
          {t("nav.shop")}
        </Link>
      </Button>
      <div className="flex items-center text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">{t("nav.home")}</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-foreground transition-colors">{t("nav.shop")}</Link>
        <span className="mx-2">/</span>
        <Link to={`/shop?category=${category}`} className="hover:text-foreground transition-colors">
          {t(`products.category.${category}`)}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{title}</span>
      </div>
    </div>
  );
}
