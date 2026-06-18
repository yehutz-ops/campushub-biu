import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({ rating, maxStars = 5, className = "", starClassName = "w-4 h-4" }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center gap-0.5 ${className}`} dir="ltr">
      {/* Render full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className={`${starClassName} text-[#C9A94E] fill-[#C9A94E]`} />
      ))}
      
      {/* Render half star */}
      {hasHalfStar && (
        <div className="relative">
          <Star className={`${starClassName} text-slate-200 fill-slate-200`} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className={`${starClassName} text-[#C9A94E] fill-[#C9A94E]`} />
          </div>
        </div>
      )}

      {/* Render empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className={`${starClassName} text-slate-200 fill-slate-200`} />
      ))}
    </div>
  );
}
