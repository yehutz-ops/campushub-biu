import { FileText, Star, Download, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MaterialCardProps {
  title: string;
  course: string;
  author: {
    name: string;
    isVerified: boolean;
  };
  price: number; // 0 for free
  rating: number;
  downloads: number;
  tags: string[];
  fileType: "PDF" | "DOCX";
  isPremium?: boolean;
}

export function MaterialCard({
  title,
  course,
  author,
  price,
  rating,
  downloads,
  tags,
  fileType,
  isPremium
}: MaterialCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500/30">
      {/* Decorative Top Accent */}
      {isPremium && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
      )}
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-1">
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-max shadow-sm",
              fileType === "PDF" ? "bg-red-500/10 text-red-600 border border-red-500/20" : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
            )}>
              {fileType}
            </span>
            <h3 className="font-bold text-lg leading-tight mt-1 group-hover:text-indigo-600 transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-xs font-bold text-muted-foreground/80">{course}</p>
          </div>
          <div className="flex gap-1 flex-wrap justify-end max-w-[80px]">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] bg-muted px-1.5 py-0.5 rounded-sm text-muted-foreground font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm ring-1 ring-border">
            {author.name.charAt(0)}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-foreground hover:underline cursor-pointer">{author.name}</span>
            {author.isVerified && <BadgeCheck className="h-3.5 w-3.5 text-blue-500" />}
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
          <div className="flex items-center gap-1 bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded-full font-bold">
            <Star className="h-3.5 w-3.5 fill-amber-500" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1 font-medium">
            <Download className="h-3.5 w-3.5" />
            <span>{downloads.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="flex items-center justify-between border-t border-border/50 bg-muted/20 p-4">
        <span className="font-black text-xl text-foreground">
          {price === 0 ? "חינם" : `₪${price.toFixed(2)}`}
        </span>
        <Button size="sm" className="rounded-full shadow-sm hover:shadow-md transition-all font-bold">
          <FileText className="mr-2 h-4 w-4" />
          {price === 0 ? "הורד עכשיו" : "רכישה"}
        </Button>
      </div>
    </div>
  );
}
