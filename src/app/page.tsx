import { Navbar } from "@/components/layout/Navbar";
import { fetchHomeData, fetchTopContributors } from "@/actions/home";
import { HeroSection } from "@/components/home/HeroSection";
import { AnalyticsBar } from "@/components/home/AnalyticsBar";
import { QuickActions } from "@/components/home/QuickActions";
import { CommunitySection } from "@/components/home/CommunitySection";

export default async function HomePage() {
  // Fetch data concurrently for performance
  const [homeData, topContributors] = await Promise.all([
    fetchHomeData(),
    fetchTopContributors()
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans" dir="rtl">
      <Navbar />

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
        <CommunitySection contributors={topContributors} />
      </main>
    </div>
  );
}
