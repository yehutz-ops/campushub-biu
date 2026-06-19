import { MaterialCard } from "@/components/marketplace/material-card";
import { Navbar } from "@/components/layout/Navbar";
import { Filter, SortDesc, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Data
const MOCK_MATERIALS = [
  { id: 1, title: "סיכום מלא - מבוא לפסיכולוגיה סמסטר א", course: "101-מבוא לפסיכולוגיה", author: { name: "דנית כהן", isVerified: true }, price: 0, rating: 4.9, downloads: 1542, tags: ["פופולרי", "מלא"], fileType: "PDF" as const, isPremium: false },
  { id: 2, title: "הכנה לבחינה - מערכות הפעלה (מועד א+ב)", course: "89-350 מערכות הפעלה", author: { name: "יובל לוי", isVerified: true }, price: 25, rating: 5.0, downloads: 340, tags: ["פרימיום", "מבחנים"], fileType: "PDF" as const, isPremium: true },
  { id: 3, title: "מטלה 3 (פתורה) - מבני נתונים ומבוא לאלגוריתמים", course: "89-210 מבני נתונים", author: { name: "רועי מזרחי", isVerified: false }, price: 0, rating: 4.2, downloads: 89, tags: ["תרגיל"], fileType: "DOCX" as const, isPremium: false },
  { id: 4, title: "סיכום קורס תורת המחירים א' - כולל גרפים", course: "66-211 תורת המחירים א'", author: { name: "מיכל אהרון", isVerified: true }, price: 15, rating: 4.8, downloads: 210, tags: ["כלכלה", "פרימיום"], fileType: "PDF" as const, isPremium: true },
  { id: 5, title: "שחזור מועד א 2023 - אלגברה לינארית", course: "89-112 אלגברה לינארית", author: { name: "איתי גל", isVerified: true }, price: 0, rating: 4.5, downloads: 892, tags: ["שחזור"], fileType: "PDF" as const, isPremium: false },
];

export default function MarketplacePage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/10">
      <Navbar />
      <div className="flex flex-1">
        <main className="flex-1 p-6 md:p-10 max-w-screen-2xl mx-auto w-full relative">
          <div className="absolute top-0 left-0 right-0 h-[400px] w-full bg-gradient-to-b from-blue-50/60 to-transparent dark:from-blue-950/20 -z-10" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-blue-200">
                  <Zap className="h-3 w-3" /> מרקטפלייס
                </span>
              </div>
              <h1 className="text-4xl font-black tracking-tight text-foreground">
                מרכז החומרים BIU
              </h1>
              <p className="text-muted-foreground mt-2 max-w-2xl text-lg">
                גלה חומרי לימוד איכותיים, סיכומים ותרגילים ששותפו על ידי סטודנטים מצטיינים מאוניברסיטת בר-אילן.
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full font-bold shadow-sm bg-background">
                <Filter className="mr-2 h-4 w-4" />
                סינון מתקדם
              </Button>
              <Button variant="outline" size="sm" className="rounded-full font-bold shadow-sm bg-background">
                <SortDesc className="mr-2 h-4 w-4" />
                מיון
              </Button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {MOCK_MATERIALS.map(material => (
              <MaterialCard key={material.id} {...material} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
