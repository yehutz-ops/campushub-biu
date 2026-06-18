import Image from "next/image";
import { BadgeCheck, MapPin, MessageSquare, Briefcase, Clock, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProfileHeader() {
  return (
    <div className="flex flex-col mb-8 relative">
      {/* Cover Image */}
      <div className="h-64 w-full relative rounded-b-3xl overflow-hidden shadow-sm">
        <Image 
          src="/bar_ilan_campus.png" 
          alt="Bar-Ilan Campus Cover" 
          fill 
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        
        {/* Quote overlay */}
        <div className="absolute top-1/2 -translate-y-1/2 right-12 text-white max-w-sm hidden md:block">
          <h2 className="text-3xl font-light leading-snug tracking-wide">
            <span className="text-amber-400 font-serif text-5xl leading-none">“</span>
            להפוך חומר מורכב<br />
            להבנה פשוטה,<br />
            זה הכוח שלי.<br />
            <span className="text-amber-400 font-serif text-5xl leading-none relative top-4">”</span>
          </h2>
          <p className="mt-4 text-xl italic font-serif opacity-90">- רועי</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Header Content */}
        <div className="relative -mt-24 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 pb-6 border-b">
          
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-right">
            {/* Avatar */}
            <div className="relative h-40 w-40 rounded-full border-4 border-white shadow-xl bg-white overflow-hidden shrink-0 z-10">
              <Image 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop" 
                alt="Roei Malka" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black/60 to-transparent"></div>
              {/* Gold shield at bottom center */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-amber-500 bg-slate-900 rounded-full p-1 shadow-lg border border-amber-500/20">
                <BadgeCheck className="h-5 w-5 fill-amber-500 text-slate-900" />
              </div>
            </div>

            {/* User Info */}
            <div className="flex flex-col gap-2 pb-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h1 className="text-4xl font-black text-slate-900">רועי מלכה</h1>
                <BadgeCheck className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-lg text-slate-600 font-medium">סטודנט לתואר ראשון</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 mt-1">
                <MapPin className="h-4 w-4" />
                <span>המחלקה לכלכלה וניהול | אוניברסיטת בר-אילן</span>
              </div>
              
              {/* Badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200">
                  <StarIcon className="h-3.5 w-3.5 ml-1" />
                  מומחה לסיכומים
                </Badge>
                <Badge variant="secondary" className="bg-slate-900 text-white hover:bg-slate-800">
                  <BadgeCheck className="h-3.5 w-3.5 ml-1" />
                  מסכם מאומת
                </Badge>
                <Badge variant="secondary" className="bg-amber-500 text-white hover:bg-amber-600">
                  <ShieldIcon className="h-3.5 w-3.5 ml-1" />
                  מסכם מוביל
                </Badge>
              </div>
              
              <p className="max-w-2xl mt-4 text-slate-600 leading-relaxed">
                אני מאמין שסיכום טוב יכול לשנות את כל החוויה הלימודית. 
                כאן תמצאו סיכומים ברורים, שירותים מותאמים אישית וליווי עד להצלחה. 
                בואו ללמוד חכם יותר, לא קשה יותר.
              </p>
            </div>
          </div>

          {/* Action Buttons & Quick Stats */}
          <div className="flex flex-col items-center md:items-end gap-6 shrink-0 w-full md:w-auto">
            {/* Quick Stats Card */}
            <div className="bg-white rounded-2xl shadow-sm border p-4 w-full md:w-64 flex flex-col gap-3 relative top-0 md:-top-16">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">חבר בקמפוס מאז</p>
                  <p className="text-sm font-bold">ינואר 2023</p>
                </div>
              </div>
              <div className="w-full h-px bg-slate-100"></div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">זמן תגובה ממוצע</p>
                  <p className="text-sm font-bold">כ- 2 שעות</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full md:w-auto justify-center md:justify-end">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md transition-transform hover:scale-105">
                <MessageSquare className="ml-2 h-4 w-4" />
                צור קשר
              </Button>
              <Button variant="outline" className="border-slate-300 font-bold rounded-xl bg-white hover:bg-slate-50 transition-colors">
                <svg className="ml-2 h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                שלח הודעה
              </Button>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-transform hover:scale-105">
                <Briefcase className="ml-2 h-4 w-4" />
                צפה בשירותים
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

// Helper simple icons
function StarIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" /></svg>;
}

function ShieldIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" /></svg>;
}
