import Link from "next/link";
import { Home, BookOpen, ShoppingBag, LayoutDashboard, Settings, HandHeart } from "lucide-react";

const navItems = [
  { name: "בית", href: "/", icon: Home },
  { name: "האזור שלי", href: "/dashboard", icon: LayoutDashboard },
  { name: "קורסים", href: "/courses", icon: BookOpen },
  { name: "מרקטפלייס", href: "/marketplace", icon: ShoppingBag },
  { name: "מרכז הבקשות", href: "/requests", icon: HandHeart },
  { name: "הגדרות", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col border-l border-border/40 bg-muted/20 px-4 py-6 md:flex h-[calc(100vh-4rem)] sticky top-16">
      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-white hover:text-indigo-600 hover:shadow-sm dark:hover:bg-muted/50"
            >
              <Icon className="h-5 w-5 transition-transform group-hover:scale-110 group-active:scale-95" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      {/* Decorative upgrade card */}
      <div className="mt-auto rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 p-5 text-white shadow-md relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1">
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-xl group-hover:scale-150 transition-transform duration-500"></div>
        <h4 className="font-bold mb-1 relative z-10 text-white">CampusHub Premium</h4>
        <p className="text-xs text-white/80 mb-3 relative z-10">שדרג למנוי פרימיום לקבלת סיכומים בלעדיים וללא הגבלת הורדות.</p>
        <button className="w-full rounded-lg bg-white/20 backdrop-blur-sm py-2 text-xs font-bold hover:bg-white/30 transition-colors relative z-10 shadow-inner">
          שדרג עכשיו
        </button>
      </div>
    </aside>
  );
}
