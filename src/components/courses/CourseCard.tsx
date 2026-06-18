import Link from "next/link";
import { Star, Flame, FileText, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface CourseCardProps {
  id: string;
  courseNumber: string;
  name: string;
  department: string;
  avgDifficulty: number;
  avgRating: number;
  materialCount: number;
  reviewCount: number;
}

export function CourseCard({
  id,
  courseNumber,
  name,
  department,
  avgDifficulty,
  avgRating,
  materialCount,
  reviewCount,
}: CourseCardProps) {
  return (
    <Link 
      href={`/courses/${id}`}
      className="group block bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-1.5 bg-gradient-to-l from-indigo-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <Badge variant="outline" className="mb-2 bg-slate-50 text-slate-600 font-bold border-slate-200 text-xs px-2 py-0.5">
            {courseNumber}
          </Badge>
          <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-indigo-700 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-slate-500 mt-1 font-medium">{department}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-1.5" title="דירוג הקורס">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="font-bold text-slate-700">{avgRating.toFixed(1)}</span>
          <span className="text-xs text-slate-400">({reviewCount})</span>
        </div>
        
        <div className="flex items-center gap-1.5" title="רמת קושי">
          <Flame className={`w-4 h-4 ${avgDifficulty >= 4 ? 'text-red-500 fill-red-500/20' : avgDifficulty >= 3 ? 'text-orange-500 fill-orange-500/20' : 'text-emerald-500 fill-emerald-500/20'}`} />
          <span className="font-bold text-slate-700">{avgDifficulty.toFixed(1)}</span>
        </div>

        <div className="flex items-center gap-1.5 mr-auto" title="חומרי לימוד זמינים">
          <FileText className="w-4 h-4 text-blue-500" />
          <span className="font-bold text-slate-700">{materialCount}</span>
        </div>
        
        <div className="bg-indigo-50 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
          <ChevronLeft className="w-4 h-4 text-indigo-600" />
        </div>
      </div>
    </Link>
  );
}
