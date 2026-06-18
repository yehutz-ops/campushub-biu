import { Download, Star, ThumbsUp, TrendingUp, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function PerformanceStats() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
      <div className="flex items-center justify-between pb-2 border-b">
        <h3 className="font-bold tracking-tight text-slate-800 text-lg">הביצועים שלי</h3>
        <TrendingUp className="h-5 w-5 text-slate-400" />
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        
        {/* Total Downloads */}
        <div className="flex flex-col">
          <p className="text-sm text-slate-500 font-medium mb-1">הורדות מצטברות</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-2xl font-black text-slate-900">12,458</p>
              <p className="text-xs text-green-600 font-medium flex items-center mt-1">
                <svg className="w-3 h-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                18% מהחודש הקודם
              </p>
            </div>
            {/* Circular Progress mimicking the screenshot */}
            <div className="relative w-12 h-12 ml-auto shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-blue-600" strokeWidth="3" strokeDasharray="80, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-blue-600">
                <Download className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Avg Rating */}
        <div className="flex flex-col">
          <p className="text-sm text-slate-500 font-medium mb-1">דירוג ממוצע</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-2xl font-black text-slate-900">4.9</p>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'fill-current' : 'fill-current opacity-30'}`} />
                ))}
              </div>
            </div>
            <div className="relative w-12 h-12 ml-auto shrink-0 bg-amber-100 rounded-full flex items-center justify-center border-4 border-amber-50">
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            </div>
          </div>
        </div>

        {/* Positive Reviews */}
        <div className="flex flex-col">
          <p className="text-sm text-slate-500 font-medium mb-1">ביקורות חיוביות</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-2xl font-black text-slate-900">98%</p>
              <p className="text-xs text-slate-400 mt-1">
                מתוך 612 ביקורות
              </p>
            </div>
            <div className="relative w-12 h-12 ml-auto shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-emerald-500" strokeWidth="3" strokeDasharray="98, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-emerald-500">
                <ThumbsUp className="w-5 h-5 fill-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Contribution */}
        <div className="flex flex-col">
          <p className="text-sm text-slate-500 font-medium mb-1">תרומה חודשית</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-2xl font-black text-slate-900">+842</p>
              <p className="text-xs text-slate-400 mt-1">
                הורדות החודש
              </p>
            </div>
            <div className="w-16 h-8 ml-auto shrink-0">
              {/* Fake Sparkline */}
              <svg className="w-full h-full text-blue-500 drop-shadow-sm" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M0 25 L20 20 L40 28 L60 15 L80 18 L100 5" />
                <circle cx="100" cy="5" r="3" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      <div className="pt-2">
        <Link href="#" className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          צפה בכל הסטטיסטיקות
        </Link>
      </div>
    </div>
  );
}
