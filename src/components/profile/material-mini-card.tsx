import { Star, MoreVertical } from "lucide-react";
import Image from "next/image";

export type MaterialMiniCardProps = {
  id: string;
  title: string;
  fileType: "PDF" | "DOCX";
  downloads: number;
  rating: number;
  thumbnailUrl?: string;
};

export function MaterialMiniCard({ title, fileType, downloads, rating, thumbnailUrl }: MaterialMiniCardProps) {
  const isPdf = fileType === "PDF";
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col overflow-hidden hover:shadow-md transition-shadow group cursor-pointer relative">
      
      {/* File type badge */}
      <div className={`absolute top-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-black text-white z-10 ${isPdf ? 'bg-red-500' : 'bg-blue-600'}`}>
        {fileType}
      </div>

      {/* Thumbnail preview area */}
      <div className="h-28 bg-slate-50 relative border-b border-slate-100 flex items-center justify-center overflow-hidden">
        {thumbnailUrl ? (
          <Image src={thumbnailUrl} alt={title} fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity mix-blend-multiply" />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
            {/* Placeholder document pattern */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
        )}
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <h4 className="text-sm font-bold text-slate-800 line-clamp-2 mb-2 leading-tight">
          {title}
        </h4>
        
        <div className="mt-auto flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <MoreVertical className="h-3 w-3 text-slate-400" />
            <span>הורדות:</span>
            <span className="font-bold text-slate-700">{downloads.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="h-3 w-3 fill-amber-500" />
            {rating.toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
}
