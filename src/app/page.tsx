import { Topbar } from "@/components/layout/topbar";
import { fetchHomeData, fetchTopContributors } from "@/actions/home";
import { HeroSection } from "@/components/home/HeroSection";
import { AnalyticsBar } from "@/components/home/AnalyticsBar";
import { QuickActions } from "@/components/home/QuickActions";
import { ContributorCard } from "@/components/home/ContributorCard";

export default async function HomePage() {
  // Fetch data concurrently for performance
  const [homeData, topContributors] = await Promise.all([
    fetchHomeData(),
    fetchTopContributors()
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans" dir="rtl">
      <Topbar />

      <main className="flex-1 w-full">
        {/* 1. Hero Layer with Filter Engine */}
        <HeroSection 
          departments={homeData.departments}
          degrees={homeData.degrees}
          courses={homeData.courses}
          lecturers={homeData.lecturers}
        />

        {/* 2. Analytics Overlap Bar */}
        <AnalyticsBar analytics={homeData.analytics} />

        {/* 3. Quick Actions Row */}
        <QuickActions />

        {/* 4. Community Layer (Top Contributors) */}
        <section className="bg-white border-t border-slate-100 py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">מובילי הקהילה</h2>
                <p className="text-slate-500 font-medium text-[15px]">
                  הסטודנטים שתורמים הכי הרבה ידע ומרוויחים הכי הרבה קרדיט.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {topContributors.map((contributor, index) => (
                <ContributorCard 
                  key={contributor.id} 
                  contributor={contributor} 
                  rank={index + 1} 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
