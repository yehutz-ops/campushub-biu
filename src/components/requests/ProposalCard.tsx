import { Button } from "@/components/ui/button";
import { Star, Download, Clock, CreditCard, Check, X } from "lucide-react";
import Image from "next/image";

export interface ProposalCardProps {
  id: string;
  provider: {
    name: string;
    avatar: string;
    rating: number;
    totalDownloads: number;
  };
  message: string;
  estimatedTime: string;
  price?: number;
  onAccept?: (id: string) => void;
  onReject?: (id: string) => void;
  isPending?: boolean;
}

export function ProposalCard({
  id,
  provider,
  message,
  estimatedTime,
  price,
  onAccept,
  onReject,
  isPending = false,
}: ProposalCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
      {/* Provider Snapshot */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-100 shadow-sm">
            <Image src={provider.avatar} alt={provider.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg leading-tight">{provider.name}</h4>
            <div className="flex items-center gap-3 mt-1.5 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-slate-700">{provider.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-3.5 h-3.5 text-blue-500" />
                <span>{provider.totalDownloads} הורדות</span>
              </div>
            </div>
          </div>
        </div>

        {/* Price/Time Tag */}
        <div className="flex flex-col items-end gap-1.5 bg-slate-50 p-2.5 rounded-2xl border border-slate-100/60">
          {price !== undefined ? (
            <div className="flex items-center gap-1.5 text-slate-900 font-bold">
              <CreditCard className="w-4 h-4 text-emerald-600" />
              <span>₪{price}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-sm">
              <Check className="w-4 h-4" />
              <span>ללא עלות</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>{estimatedTime}</span>
          </div>
        </div>
      </div>

      {/* Pitch Message */}
      <div className="bg-blue-50/50 rounded-2xl p-4 mb-6 border border-blue-100/50">
        <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">
          &quot;{message}&quot;
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <Button 
          className="flex-1 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-sm"
          onClick={() => onAccept?.(id)}
          disabled={isPending}
        >
          <Check className="w-4 h-4 ml-2" />
          קבל הצעה
        </Button>
        <Button 
          variant="outline"
          className="flex-1 rounded-full border-slate-200 text-slate-600 hover:bg-red-50 hover:text-red-600 hover:border-red-100 font-semibold"
          onClick={() => onReject?.(id)}
          disabled={isPending}
        >
          <X className="w-4 h-4 ml-2" />
          דחה
        </Button>
      </div>
    </div>
  );
}
