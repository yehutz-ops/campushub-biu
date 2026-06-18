import { Users, Star, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MOCK_REVIEWS = [
  {
    id: 1,
    author: "דניאל א.",
    title: "סטודנט לכלכלה",
    rating: 5.0,
    text: "רועי פשוט אלוף! הסיכומים שלו סדרו לי את כל החומר, ברורים, מפורטים וחוסכים המון זמן. ממליץ בחום!",
    timeAgo: "לפני יומיים",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    id: 2,
    author: "מיכל ש.",
    title: "סטודנטית למנע״ס",
    rating: 5.0,
    text: "השיעור הפרטי עזר לי להבין נושאים שהתקשיתי בהם במשך סמסטר שלם. תודה!",
    timeAgo: "לפני 5 ימים",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  },
  {
    id: 3,
    author: "אורי ל.",
    title: "סטודנט לחשבונאות",
    rating: 4.8,
    text: "מרתון ההכנה היה מאורגן ברמה גבוהה והעניק לי ביטחון לקראת המבחן. שווה כל שקל.",
    timeAgo: "לפני שבוע",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  }
];

export function CommunityReviews() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
      <div className="flex items-center justify-between pb-2 border-b">
        <h3 className="font-bold tracking-tight text-slate-800 text-lg flex items-center gap-2">
          ביקורות מהקהילה
          <Users className="h-5 w-5 text-slate-400" />
        </h3>
        <span className="text-sm text-blue-600 font-bold hover:underline cursor-pointer">
          הצג הכל
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {MOCK_REVIEWS.map((review, index) => (
          <div key={review.id} className="flex flex-col gap-3 pb-5 border-b border-slate-100 last:border-0 last:pb-0">
            <div className="flex justify-between items-start">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(review.rating) ? 'fill-current' : 'fill-current opacity-30'}`} />
                ))}
                <span className="text-sm font-bold text-slate-800 ml-2">{review.rating.toFixed(1)}</span>
              </div>
            </div>
            
            <p className="text-slate-700 text-sm leading-relaxed pr-1 border-r-2 border-blue-100">
              {review.text}
            </p>

            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-slate-400">{review.timeAgo}</span>
              <div className="flex items-center gap-3 text-right">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900">{review.author}</span>
                  <span className="text-xs text-slate-500">{review.title}</span>
                </div>
                <div className="h-10 w-10 rounded-full overflow-hidden shrink-0 border border-slate-200">
                  <Image src={review.avatar} alt={review.author} width={40} height={40} className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-full justify-start text-blue-600 border-slate-200 hover:bg-slate-50 font-bold mt-2">
        <Plus className="ml-2 h-4 w-4" />
        הוסף ביקורת
      </Button>
    </div>
  );
}
