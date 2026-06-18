import { fetchCourses } from "@/actions/courses";
import { CourseCard } from "@/components/courses/CourseCard";
import { FilterSidebar } from "@/components/courses/FilterSidebar";
import { Topbar } from "@/components/layout/topbar";
import { Search } from "lucide-react";

export const metadata = {
  title: "זירת הקורסים | CampusHub BIU",
  description: "חיפוש קורסים, מרצים ומידע אקדמי",
};

export default async function CoursesPage(props: {
  searchParams: Promise<{ q?: string; dept?: string }>;
}) {
  const searchParams = await props.searchParams;
  // Fetch courses with optional filters from URL (simulated via searchParams)
  const courses = await fetchCourses({
    search: searchParams.q,
    department: searchParams.dept,
  });

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50" dir="rtl">
      <Topbar />
      
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
              זירת הקורסים והמרצים
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              גלו מידע אקדמי על כל קורס, צפו בדירוגי מרצים, קראו ביקורות של סטודנטים אמיתיים ומצאו את חומרי הלימוד הטובים ביותר.
            </p>
          </div>
          
          <div className="mt-8 relative max-w-2xl">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text"
              placeholder="חפש שם קורס, מספר קורס או מרצה..."
              defaultValue={searchParams.q || ""}
              className="w-full h-14 pr-12 pl-4 rounded-full border-slate-300 bg-slate-50 shadow-inner focus:bg-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-lg transition-all"
            />
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Right Sidebar - Filters (RTL) */}
          <aside className="w-full lg:w-80 shrink-0">
            <FilterSidebar />
          </aside>

          {/* Left Content - Search Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                {courses.length} קורסים נמצאו
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-500">מיין לפי:</span>
                <select className="bg-transparent border border-slate-300 rounded-lg text-sm font-bold text-slate-700 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
                  <option>הכי פופולריים</option>
                  <option>דירוג (גבוה לנמוך)</option>
                  <option>מספר קורס</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  courseNumber={course.courseNumber}
                  name={course.name}
                  department={course.department}
                  avgDifficulty={course.avgDifficulty}
                  avgRating={course.avgRating}
                  materialCount={course.materialCount}
                  reviewCount={course.reviewCount}
                />
              ))}
              {courses.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
                    <Search className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">לא נמצאו קורסים</h3>
                  <p className="text-slate-500">נסה לשנות את מילות החיפוש או להסיר חלק מהסינונים.</p>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
