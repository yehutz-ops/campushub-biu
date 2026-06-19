import Link from "next/link";
import { Download, Star } from "lucide-react";

export interface ContributorCardProps {
  contributor: {
    id: string;
    username: string;
    name: string;
    department: string;
    avatar: string;
    downloads: number;
    rating: number;
  };
  rank: number;
}

export function ContributorCard({ contributor, rank }: ContributorCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      {/* Rank Badge */}
      <div className="absolute top-0 right-0 w-10 h-10 bg-slate-50 border-b border-l border-slate-100 rounded-bl-2xl flex items-center justify-center font-black text-slate-400 group-hover:text-[#C9A94E] group-hover:bg-[#C9A94E]/10 transition-colors">
        #{rank}
      </div>

      <div className="flex items-center gap-4 mb-5">
        <img src={contributor.avatar} alt={contributor.name} className="w-14 h-14 rounded-full bg-slate-100 object-cover border-2 border-white shadow-sm" />
        <div>
          <h4 className="font-bold text-lg text-slate-900 leading-tight">{contributor.name}</h4>
          <span className="text-[13px] font-bold text-slate-500">{contributor.department}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-slate-50 rounded-xl p-3 flex flex-col items-center justify-center">
          <div className="flex items-center gap-1.5 text-slate-700 font-black mb-1">
            <Download className="w-4 h-4 text-blue-500" />
            <span>{contributor.downloads}</span>
          </div>
          <span className="text-[11px] font-bold text-slate-500">הורדות</span>
        </div>
        <div className="bg-slate-50 rounded-xl p-3 flex flex-col items-center justify-center">
          <div className="flex items-center gap-1.5 text-slate-700 font-black mb-1">
            <Star className="w-4 h-4 text-[#C9A94E] fill-[#C9A94E]" />
            <span>{contributor.rating.toFixed(1)}</span>
          </div>
          <span className="text-[11px] font-bold text-slate-500">דירוג ממוצע</span>
        </div>
      </div>

      <Link href={`/u/${contributor.username}`}>
        <button className="w-full h-10 rounded-xl bg-slate-900 text-white font-bold text-[14px] hover:bg-slate-800 transition-colors">
          צפה בפרופיל
        </button>
      </Link>
    </div>
  );
}
