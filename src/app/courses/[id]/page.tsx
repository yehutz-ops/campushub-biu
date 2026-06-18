import { fetchCourseDetails } from "@/actions/courses";
import { Topbar } from "@/components/layout/topbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, UploadCloud, FileText, UserCircle2, Star, Flame, Calendar, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// A custom SVG circular progress ring component
function CircularProgress({ value, max, colorClass, label }: { value: number, max: number, colorClass: string, label: string }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            className="text-slate-100"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`transition-all duration-1000 ease-out ${colorClass}`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-xl font-black text-slate-900">{value.toFixed(1)}</span>
          <span className="text-[10px] font-bold text-slate-500">מתוך {max}</span>
        </div>
      </div>
      <span className="mt-2 text-sm font-bold text-slate-700">{label}</span>
    </div>
  );
}

export default async function CourseDetailsPage({ params }: { params: { id: string } }) {
  const course = await fetchCourseDetails(params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc]" dir="rtl">
      <Topbar />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm font-medium text-slate-500">
          <Link href="/courses" className="hover:text-indigo-600 transition-colors">קורסים</Link>
          <ChevronRight className="w-4 h-4 mx-2 rotate-180" />
          <Link href={`/courses?dept=${course.department}`} className="hover:text-indigo-600 transition-colors">{course.department}</Link>
          <ChevronRight className="w-4 h-4 mx-2 rotate-180" />
          <span className="text-slate-900">{course.name}</span>
        </div>
      </div>

      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        
        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="flex-1">
              <Badge variant="outline" className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-200 px-3 py-1 font-bold text-sm">
                קורס מס' {course.courseNumber}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                {course.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 mb-8">
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  <GraduationCap className="w-4 h-4 text-slate-400" /> {course.degree === "Bachelors" ? "תואר ראשון" : course.degree}
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  <Calendar className="w-4 h-4 text-slate-400" /> שנה {course.year} סמסטר {course.semester}
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  <BookOpen className="w-4 h-4 text-slate-400" /> {course.credits} נ"ז
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <Link href={`/marketplace?courseId=${course.id}`}>
                  <Button className="rounded-full h-12 px-8 font-bold bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 text-base transition-all hover:-translate-y-0.5">
                    <FileText className="w-5 h-5 ml-2" />
                    צפה ב-{course.materialCount} חומרי לימוד
                  </Button>
                </Link>
                <Link href={`/upload?courseId=${course.id}`}>
                  <Button variant="outline" className="rounded-full h-12 px-8 font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-50 text-base transition-all">
                    <UploadCloud className="w-5 h-5 ml-2" />
                    העלה חומר משלך
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Analytics */}
            <div className="flex gap-8 bg-slate-50/50 p-6 rounded-3xl border border-slate-100 shrink-0">
              <CircularProgress 
                value={course.avgRating} 
                max={5} 
                colorClass="text-emerald-500" 
                label="דירוג כללי" 
              />
              <CircularProgress 
                value={course.avgDifficulty} 
                max={5} 
                colorClass="text-orange-500" 
                label="רמת קושי" 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Reviews Section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-slate-900">חוות דעת ({course.reviewCount})</h2>
                <Button variant="outline" className="rounded-full font-bold">הוסף חוות דעת</Button>
              </div>

              <div className="space-y-6">
                {course.reviews.map((review: any) => (
                  <div key={review.id} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                          {review.user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{review.user.name}</div>
                          <div className="text-xs text-slate-500">{new Date(review.createdAt).toLocaleDateString("he-IL")}</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center bg-emerald-50 px-2 py-1 rounded-lg">
                          <span className="text-xs text-emerald-700 font-bold mb-0.5">דירוג</span>
                          <div className="flex items-center gap-1 text-sm font-bold text-emerald-700">
                            <Star className="w-3.5 h-3.5 fill-emerald-700" /> {review.overallRating}
                          </div>
                        </div>
                        <div className="flex flex-col items-center bg-orange-50 px-2 py-1 rounded-lg">
                          <span className="text-xs text-orange-700 font-bold mb-0.5">קושי</span>
                          <div className="flex items-center gap-1 text-sm font-bold text-orange-700">
                            <Flame className="w-3.5 h-3.5 fill-orange-700" /> {review.difficultyScore}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Lecturer Info */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-lg font-black text-slate-900 mb-6">סגל הקורס</h3>
              <div className="space-y-4">
                {course.lecturers.map((lecturer: any) => (
                  <div key={lecturer.id} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shrink-0">
                      <UserCircle2 className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{lecturer.name}</h4>
                      <div className="flex items-center gap-2 mt-1 text-xs font-medium text-slate-500">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="text-slate-700">{lecturer.avgRating.toFixed(1)}</span>
                        </div>
                        <span>•</span>
                        <span>{lecturer.reviewCount} ביקורות</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials Preview Snippet */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 shadow-md text-white">
              <h3 className="text-lg font-black mb-2">מצאתם חומר שעזר לכם?</h3>
              <p className="text-indigo-100 text-sm mb-6 leading-relaxed">שתפו אותו עם סטודנטים אחרים, עזרו לקהילה ואפילו תרוויחו על זה כסף במידה ותרצו להציע אותו בפרימיום.</p>
              <Link href={`/upload?courseId=${course.id}`}>
                <Button className="w-full bg-white text-indigo-700 hover:bg-indigo-50 font-bold rounded-xl h-12 shadow-sm">
                  <UploadCloud className="w-5 h-5 ml-2" />
                  העלאת חומר חדש
                </Button>
              </Link>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
