import Link from "next/link";
import { Search, Bell, Menu, Plus, Home, BookOpen, HandHeart, ShoppingBag, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Topbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
        
        {/* Right side in RTL (Logo & Mobile Menu) */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 select-none">
            <span className="bg-gradient-to-l from-indigo-600 to-blue-500 bg-clip-text text-2xl font-black text-transparent tracking-tight">
              CampusHub
            </span>
            <span className="rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-bold text-blue-600 border border-blue-500/20 shadow-sm">
              BIU
            </span>
          </div>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden flex-1 items-center justify-center px-6 md:flex gap-1">
          <div className="flex items-center gap-1 bg-muted/40 p-1.5 rounded-full border border-input shadow-inner">
            <Link href="/" title="בית" className="p-2.5 rounded-full text-muted-foreground hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all">
              <Home className="w-5 h-5" />
            </Link>
            <Link href="/courses" title="קורסים" className="p-2.5 rounded-full text-muted-foreground hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all">
              <BookOpen className="w-5 h-5" />
            </Link>
            <Link href="/requests" title="מרכז הבקשות" className="p-2.5 rounded-full text-muted-foreground hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all">
              <HandHeart className="w-5 h-5" />
            </Link>
            <Link href="/marketplace" title="מרקטפלייס" className="p-2.5 rounded-full text-muted-foreground hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all">
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <Link href="/dashboard" title="האזור שלי" className="p-2.5 rounded-full text-muted-foreground hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all">
              <LayoutDashboard className="w-5 h-5" />
            </Link>
          </div>
        </nav>

        {/* Left side in RTL (Actions & Profile) */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="outline" className="hidden sm:flex gap-2 rounded-full border-indigo-500/20 text-indigo-600 hover:bg-indigo-500/5 hover:text-indigo-700 transition-colors font-medium">
            <Plus className="h-4 w-4" />
            <span>העלאת חומר</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 rounded-full">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-background animate-pulse"></span>
          </Button>

          {/* User Profile Avatar Placeholder */}
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 ring-2 ring-background border shadow-md flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:opacity-90 transition-opacity hover:scale-105 active:scale-95">
            י"ק
          </div>
        </div>
      </div>
    </header>
  );
}
