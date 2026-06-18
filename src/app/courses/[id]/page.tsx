import { fetchCourseDetails } from "@/actions/courses";
import { Topbar } from "@/components/layout/topbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, UploadCloud, FileText, UserCircle2, Calendar, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StarRating } from "@/components/shared/StarRating";
import { MetricProgressBar } from "@/components/shared/MetricProgressBar";

export default async function CourseDetailsPage({ params }: { params: { id: string } }) {
  const course = await fetchCourseDetails(params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc]" dir="rtl">
      <Topbar />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-[13px] font-medium text-slate-500">
          <Link href="/courses" className="hover:text-[#C9A94E] transition-colors">קורסים</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 rotate-180" />
          <Link href={`/courses?dept=${course.department}`} className="hover:text-[#C9A94E] transition-colors">{course.department}</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 rotate-180" />
          <span className="text-slate-900 font-bold">{course.name}</span>
        </div>
      </div>

      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        
        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#C9A94E] to-yellow-300" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="flex-1">
              <Badge variant="outline" className="mb-4 bg-slate-50 text-slate-700 border-gray-200 px-3 py-1 font-bold text-[12px]">
                קורס מס' {course.courseNumber}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                {course.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 text-[13px] font-medium text-slate-600 mb-8">
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-gray-100">
                  <GraduationCap className="w-4 h-4 text-slate-400" /> {course.degree === "Bachelors" ? "תואר ראשון" : course.degree}
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-gray-100">
                  <Calendar className="w-4 h-4 text-slate-400" /> שנה {course.year} סמסטר {course.semester}
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-gray-100">
                  <BookOpen className="w-4 h-4 text-slate-400" /> {course.credits} נ"ז
                </div>
              </div>

              {/* Call to Actions (Updated to new requirements) */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <Link href={`/upload?courseId=${course.id}`}>
                  <Button variant="default" className="rounded-full h-12 px-8 font-bold bg-slate-900 hover:bg-slate-800 text-white text-base transition-all">
                    <UploadCloud className="w-5 h-5 ml-2" />
                    העלה חומר
                  </Button>
                </Link>
                <Link href={`/search?courseId=${course.id}`}>
                  <Button variant="outline" className="rounded-full h-12 px-8 font-bold border-gray-300 text-slate-700 hover:bg-slate-50 text-base transition-all">
                    <FileText className="w-5 h-5 ml-2" />
                    צפה בחומרים
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Analytics - Prioritized Lecturer Rep & Difficulty */}
            <div className="flex flex-col gap-6 bg-slate-50/50 p-6 rounded-2xl border border-gray-100 shrink-0 w-full lg:w-72">
              <div className="flex flex-col gap-2">
                <span className="text-[13px] font-bold text-slate-600">צוות הוראה מוביל</span>
                {course.lecturers.map((lecturer: any) => (
                  <div key={lecturer.id} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <UserCircle2 className="w-5 h-5 text-slate-500" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-[14px] text-slate-900">{lecturer.name}</h4>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[12px] font-bold text-slate-700">{lecturer.avgRating.toFixed(1)}</span>
                        <StarRating rating={lecturer.avgRating} starClassName="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-px w-full bg-gray-200" />

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold text-slate-600">רמת קושי הקורס</span>
                  <span className="text-[14px] font-black text-slate-800">{course.avgDifficulty.toFixed(1)}</span>
                </div>
                <MetricProgressBar value={course.avgDifficulty} type="difficulty" className="h-2" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Reviews Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-slate-900">חוות דעת ({course.reviewCount})</h2>
                <Button variant="outline" className="rounded-full font-bold">הוסף חוות דעת</Button>
              </div>

              <div className="space-y-6">
                {course.reviews.map((review: any) => (
                  <div key={review.id} className="pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#C9A94E]/10 text-[#C9A94E] flex items-center justify-center font-bold">
                          {review.user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-[14px] text-slate-900">{review.user.name}</div>
                          <div className="text-[12px] text-slate-500">{new Date(review.createdAt).toLocaleDateString("he-IL")}</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <span className="text-[11px] text-slate-500 font-bold mb-1">דירוג</span>
                          <StarRating rating={review.overallRating} starClassName="w-3 h-3" />
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[11px] text-slate-500 font-bold mb-1">קושי</span>
                          <MetricProgressBar value={review.difficultyScore} type="difficulty" className="w-12 h-1.5 mt-1" />
                        </div>
                      </div>
                    </div>
                    <p className="text-[14px] text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Materials Preview Snippet */}
            <div className="bg-slate-900 rounded-2xl p-8 shadow-md text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A94E] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />
              <h3 className="text-lg font-black mb-2 relative z-10">העשירו את הקהילה</h3>
              <p className="text-slate-300 text-[13px] mb-6 leading-relaxed relative z-10">העלו סיכומים או מבחנים משלכם ותרוויחו קרדיט אקדמי או תשלום על כל הורדה.</p>
              <Link href={`/upload?courseId=${course.id}`} className="relative z-10">
                <Button className="w-full bg-[#C9A94E] text-white hover:bg-[#b09340] font-bold rounded-xl h-12 shadow-sm transition-colors">
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
