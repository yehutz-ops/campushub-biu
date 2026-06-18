import { Topbar } from "@/components/layout/topbar";
import { Crown, FileText } from "lucide-react";
import { ProfileHeader } from "@/components/profile/profile-header";
import { PerformanceStats } from "@/components/profile/performance-stats";
import { CommunityReviews } from "@/components/profile/community-reviews";
import { ServiceCard } from "@/components/profile/service-card";
import { MaterialMiniCard } from "@/components/profile/material-mini-card";

export default function UserProfilePage({ params }: { params: { username: string } }) {
  // Decode username if necessary
  // const username = decodeURIComponent(params.username);
  
  // Mock Services Data
  const MOCK_SERVICES = [
    {
      id: "s1",
      title: "סיכום פרימיום",
      description: "סיכומים מפורטים, מעוצבים ומאורגנים לפי נושאים",
      price: 49,
      rating: 4.9,
      reviewsCount: 342,
      badge: "פופולרי",
      theme: "green" as const,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
          {/* Star Icon overlay */}
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" className="text-amber-400 drop-shadow-md origin-bottom-right scale-50 -translate-y-2 translate-x-4"></polygon>
        </svg>
      )
    },
    {
      id: "s2",
      title: "מרתון הכנה למבחן",
      description: "מפגש קבוצתי אינטנסיבי לסיכום וחזרה על החומר",
      price: 129,
      rating: 4.8,
      reviewsCount: 178,
      badge: "פופולרי",
      theme: "purple" as const,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          {/* Arrow */}
          <path d="M16 6L21 2" strokeWidth="2"></path>
          <polygon points="21 2 18 2 21 5" fill="currentColor"></polygon>
        </svg>
      )
    },
    {
      id: "s3",
      title: "שיעור פרטי",
      description: "ליווי אישי 1:1 מותאם לצרכים ולמטרות שלך",
      price: 149,
      rating: 5.0,
      reviewsCount: 96,
      badge: "חידוש",
      theme: "blue" as const,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      )
    }
  ];

  // Mock Mini Materials Data
  const MOCK_MINI_MATERIALS = [
    {
      id: "m1",
      title: "סיכום מיקרו כלכלה",
      fileType: "DOCX" as const,
      downloads: 1245,
      rating: 4.9,
      thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: "m2",
      title: "סיכום סטטיסטיקה",
      fileType: "PDF" as const,
      downloads: 892,
      rating: 4.8,
      thumbnailUrl: "https://images.unsplash.com/photo-1635048424329-a9bfb104d7ea?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: "m3",
      title: "שאלות פתורות מבחן 2023",
      fileType: "PDF" as const,
      downloads: 1102,
      rating: 4.9,
    },
    {
      id: "m4",
      title: "מפת מושגים - ניהול אסטרטגי",
      fileType: "DOCX" as const,
      downloads: 756,
      rating: 4.7,
      thumbnailUrl: "https://images.unsplash.com/photo-1508873535684-277a3cb8c90a?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: "m5",
      title: "סיכום חשבונאות פיננסית",
      fileType: "PDF" as const,
      downloads: 1534,
      rating: 4.9,
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc]">
      <Topbar />
      <div className="flex flex-1">
        <main className="flex-1 p-0 md:p-0 relative w-full overflow-hidden">
          <div className="max-w-[1600px] mx-auto w-full pb-10">
            {/* Header Component */}
            <div className="px-4 sm:px-6 lg:px-8">
              <ProfileHeader />
            </div>
            
            {/* Main Content Layout */}
            <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-12 gap-8 mt-6">
              
              {/* Left Column (Stats & Reviews) - approx 35% */}
              <div className="xl:col-span-4 flex flex-col gap-8">
                <PerformanceStats />
                <CommunityReviews />
              </div>

              {/* Right Column (Services & Materials) - approx 65% */}
              <div className="xl:col-span-8 flex flex-col gap-8">
                
                {/* Services Section */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between pb-2">
                    <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                      השירותים שלי
                      <Crown className="h-5 w-5 text-amber-500 fill-amber-500" />
                    </h2>
                    <span className="text-sm text-blue-600 font-bold hover:underline cursor-pointer">
                      הצג הכל
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_SERVICES.map(service => (
                      <ServiceCard key={service.id} {...service} />
                    ))}
                  </div>
                </div>

                {/* Uploaded Materials Section */}
                <div className="flex flex-col gap-5 mt-4">
                  <div className="flex items-center justify-between pb-2">
                    <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                      חומרים שהעליתי
                      <FileText className="h-5 w-5 text-slate-600" />
                    </h2>
                    <span className="text-sm text-blue-600 font-bold hover:underline cursor-pointer">
                      הצג הכל
                    </span>
                  </div>
                  
                  {/* Horizontal Scrollable container for materials */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {MOCK_MINI_MATERIALS.map(material => (
                      <MaterialMiniCard key={material.id} {...material} />
                    ))}
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
