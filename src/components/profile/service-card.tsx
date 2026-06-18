import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  theme: "green" | "purple" | "blue";
  icon: React.ReactNode;
};

export function ServiceCard({ title, description, price, rating, reviewsCount, badge, theme, icon }: ServiceCardProps) {
  const themeStyles = {
    green: {
      bg: "from-emerald-500 to-emerald-700",
      badge: "bg-amber-400 text-amber-900",
      lightBg: "bg-emerald-50"
    },
    purple: {
      bg: "from-purple-500 to-indigo-700",
      badge: "bg-amber-400 text-amber-900",
      lightBg: "bg-purple-50"
    },
    blue: {
      bg: "from-blue-500 to-blue-700",
      badge: "bg-emerald-400 text-emerald-900",
      lightBg: "bg-blue-50"
    }
  };

  const currentTheme = themeStyles[theme];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      {/* Top Banner section */}
      <div className={`h-32 bg-gradient-to-br ${currentTheme.bg} relative p-4 flex flex-col items-center justify-center`}>
        {badge && (
          <Badge className={`absolute top-3 right-3 ${currentTheme.badge} border-none font-bold shadow-sm`}>
            {badge}
          </Badge>
        )}
        
        {/* Abstract decorative elements */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h20v20H0V0zm10 10l10-10H0l10 10zm0 0L0 20h20L10 10z\\' fill=\\'%23ffffff\\' fill-opacity=\\'0.4\\' fill-rule=\\'evenodd\\'%3E%3C/svg%3E')" }} />
        
        <div className="text-white z-10 scale-125 mb-2 drop-shadow-md">
          {icon}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 text-center">
        <h3 className="font-bold text-lg text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-500 mb-4">{description}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center text-sm font-bold text-slate-700">
            <span className="flex items-center text-amber-500 mr-1">
              <Star className="h-4 w-4 fill-amber-500" />
            </span>
            {rating.toFixed(1)} <span className="text-slate-400 font-normal mr-1">({reviewsCount})</span>
          </div>
          <div className="font-black text-slate-900">
            החל מ- {price} ₪
          </div>
        </div>

        <div className="mt-4 border-t border-slate-100 pt-4">
          <Button variant="outline" className="w-full font-bold text-blue-600 border-slate-200 hover:bg-slate-50 rounded-xl">
            לפרטים
          </Button>
        </div>
      </div>
    </div>
  );
}
