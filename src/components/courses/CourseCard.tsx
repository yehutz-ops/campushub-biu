import Link from "next/link";
import { StarRating } from "@/components/shared/StarRating";
import { MetricProgressBar } from "@/components/shared/MetricProgressBar";
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
      className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C9A94E]/15 hover:border-[#C9A94E]/30 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-full h-1.5 bg-gradient-to-l from-[#C9A94E] to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex flex-col mb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-slate-50 text-slate-600 font-bold border-slate-200 text-[11px] px-2 py-0.5">
            {courseNumber}
          </Badge>
          <span className="text-[12px] font-bold text-slate-500 bg-slate-50 px-2 rounded-full">
            {materialCount} חומרים
          </span>
        </div>
        <h3 className="text-[18px] font-bold text-slate-900 leading-tight group-hover:text-[#C9A94E] transition-colors line-clamp-2">
          {name}
        </h3>
        <p className="text-[13px] text-slate-500 mt-1 font-medium">{department}</p>
      </div>

      <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-100">
        
        {/* Rating Row */}
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-bold text-slate-600">שביעות רצון</span>
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-bold text-slate-700">{avgRating.toFixed(1)}</span>
            <StarRating rating={avgRating} starClassName="w-3.5 h-3.5" />
            <span className="text-[11px] text-slate-400">({reviewCount})</span>
          </div>
        </div>
        
        {/* Difficulty Row */}
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-bold text-slate-600">רמת קושי</span>
          <div className="flex items-center gap-3 w-1/2 justify-end">
            <span className="text-[13px] font-bold text-slate-700">{avgDifficulty.toFixed(1)}</span>
            <MetricProgressBar value={avgDifficulty} type="difficulty" className="w-20" />
          </div>
        </div>

      </div>
    </Link>
  );
}
