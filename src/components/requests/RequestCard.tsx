import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, Clock, ArrowLeft } from "lucide-react";
import Image from "next/image";

export interface RequestCardProps {
  id: string;
  title: string;
  type?: string;
  description: string;
  status: "open" | "in-progress" | "closed" | "under-review";
  deadline: Date;
  proposalCount: number;
  course: { name: string; degreeType?: string; lecturer?: string };
  user: { name: string; avatar: string };
}

export function RequestCard({
  title,
  type = "סיכום",
  description,
  status,
  deadline,
  proposalCount,
  course,
  user,
}: RequestCardProps) {
  // Determine status color
  let statusBadge = null;
  switch (status) {
    case "open":
      statusBadge = <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-transparent">פתוח להצעות</Badge>;
      break;
    case "in-progress":
      statusBadge = <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">בתהליך</Badge>;
      break;
    case "closed":
      statusBadge = <Badge variant="outline" className="text-slate-500">סגור</Badge>;
      break;
    case "under-review":
      statusBadge = <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">בבדיקה</Badge>;
      break;
  }

  // Calculate days left
  const daysLeft = Math.max(0, Math.ceil((deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24)));

  return (
    <div className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent opacity-50 rounded-bl-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
            <Image src={user.avatar} alt={user.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 line-clamp-1 text-lg leading-tight">{title}</h3>
            <p className="text-sm text-slate-500 font-medium">מאת {user.name}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          {statusBadge}
          <Badge variant="outline" className="text-xs font-normal text-slate-600 rounded-full">{type}</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="mb-6 flex-grow relative z-10">
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Metadata Footer */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 p-4 bg-slate-50 rounded-2xl relative z-10 border border-slate-100/50">
        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
          <BookOpen className="w-4 h-4 text-blue-500 shrink-0" strokeWidth={2.5} />
          <span className="line-clamp-1">{course.name}</span>
        </div>
        
        {course.degreeType && (
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
            <GraduationCap className="w-4 h-4 text-violet-500 shrink-0" strokeWidth={2.5} />
            <span className="line-clamp-1">{course.degreeType}</span>
          </div>
        )}
        
        {course.lecturer && (
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
            <Users className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={2.5} />
            <span className="line-clamp-1">{course.lecturer}</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 relative z-10">
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4" />
            <span>עוד {daysLeft} ימים</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <span className="flex h-5 items-center justify-center rounded-full bg-slate-100 px-2 text-xs text-slate-700">
              {proposalCount} הצעות
            </span>
          </div>
        </div>

        <Button 
          className="rounded-full shadow-sm hover:shadow-md transition-all gap-2 pl-4 pr-5 font-semibold bg-blue-600 hover:bg-blue-700 text-white"
          disabled={status !== "open"}
        >
          שלח הצעה
          <ArrowLeft className="w-4 h-4 -mr-1" />
        </Button>
      </div>
    </div>
  );
}
