import { Topbar } from "@/components/layout/topbar";
import { Sidebar } from "@/components/layout/sidebar";
import { MaterialCard } from "@/components/marketplace/material-card";
import { BadgeCheck, Star, Users, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UserProfilePage({ params }: { params: { username: string } }) {
  // Decode username if necessary
  const username = decodeURIComponent(params.username);
  
  // Mock Data for User
  const user = {
    name: username.includes("-") ? username.split("-").join(" ") : username,
    handle: `@${username}`,
    department: "הנדסת תוכנה",
    bio: "סטודנט להנדסת תוכנה שנה ד׳. מעלה סיכומים מסודרים ומפורטים, במיוחד בקורסי מערכות ומבני נתונים.",
    isVerified: true,
    stats: {
      rating: 4.9,
      downloads: 4210,
      followers: 154,
    }
  };

  // Mock Materials for this user
  const MOCK_MATERIALS = [
    { id: 1, title: "סיכום מלא - מערכות הפעלה", course: "89-350 מערכות הפעלה", author: { name: user.name, isVerified: user.isVerified }, price: 0, rating: 5.0, downloads: 1204, tags: ["פופולרי"], fileType: "PDF" as const, isPremium: false },
    { id: 2, title: "מבני נתונים - הרצאות 1-13 (הכנה למבחן)", course: "89-210 מבני נתונים", author: { name: user.name, isVerified: user.isVerified }, price: 20, rating: 4.8, downloads: 412, tags: ["פרימיום"], fileType: "PDF" as const, isPremium: true },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-muted/10">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-0 md:p-0 relative">
          {/* Cover Photo */}
          <div className="h-48 md:h-64 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 relative overflow-hidden">
             {/* Decorative pattern */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')" }} />
          </div>

          <div className="max-w-screen-2xl mx-auto px-6 md:px-10 pb-10">
            {/* Profile Header */}
            <div className="relative -mt-16 sm:-mt-24 mb-10 flex flex-col sm:flex-row gap-6 items-end sm:items-center justify-between">
              <div className="flex items-end sm:items-center gap-6">
                <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-3xl bg-background p-2 shadow-xl ring-1 ring-border relative">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-4xl font-black text-white">
                    {user.name.charAt(0)}
                  </div>
                  {user.isVerified && (
                    <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1 shadow-md">
                      <BadgeCheck className="h-8 w-8 text-blue-500" />
                    </div>
                  )}
                </div>
                <div className="pb-2">
                  <h1 className="text-3xl sm:text-4xl font-black text-foreground">{user.name}</h1>
                  <div className="flex items-center gap-4 mt-2 text-muted-foreground font-medium">
                    <span>{user.handle}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {user.department}</span>
                  </div>
                </div>
              </div>
              
              <div className="pb-2 flex gap-3 w-full sm:w-auto">
                <Button className="flex-1 sm:flex-none rounded-full px-8 shadow-md font-bold">
                  עקוב
                </Button>
                <Button variant="outline" className="flex-1 sm:flex-none rounded-full shadow-sm bg-background font-bold text-indigo-600 border-indigo-600/30">
                  צור קשר
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column (Info & Stats) */}
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl border border-border/50 bg-background p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3">אודות</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {user.bio}
                  </p>
                </div>

                <div className="rounded-3xl border border-border/50 bg-background p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">סטטיסטיקות מחבר</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center pb-4 border-b border-border/50">
                      <div className="flex items-center gap-2 text-muted-foreground font-bold">
                        <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                        דירוג ממוצע
                      </div>
                      <span className="font-black text-xl">{user.stats.rating}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border/50">
                      <div className="flex items-center gap-2 text-muted-foreground font-bold">
                        <Download className="h-5 w-5" />
                        הורדות
                      </div>
                      <span className="font-black text-xl">{user.stats.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-muted-foreground font-bold">
                        <Users className="h-5 w-5" />
                        עוקבים
                      </div>
                      <span className="font-black text-xl">{user.stats.followers}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Materials) */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <h2 className="text-2xl font-black mb-2">הסיכומים של {user.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {MOCK_MATERIALS.map(material => (
                    <MaterialCard key={material.id} {...material} />
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}
