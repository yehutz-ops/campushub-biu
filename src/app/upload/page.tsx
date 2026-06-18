"use client";

import { useState } from "react";
import { Topbar } from "@/components/layout/topbar";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { UploadCloud, CheckCircle2, ChevronLeft } from "lucide-react";
// import { uploadMaterialAction } from "@/app/actions/material"; 

export default function UploadPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Client-side form handler bridging to Server Action
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In production:
    // const formData = new FormData(e.target as HTMLFormElement);
    // await uploadMaterialAction(formData);
    
    // Simulating server latency for phenomenal UI experience
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3); // Success step
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-muted/10">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10 max-w-screen-xl mx-auto w-full relative">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-black tracking-tight text-foreground">העלאת חומר לימוד חדש 🚀</h1>
            <p className="text-muted-foreground mt-2 text-lg">שתף את הסיכומים שלך, עזור לחברים לתואר ותתחיל להרוויח.</p>
          </div>

          <div className="max-w-3xl mx-auto bg-background rounded-3xl border border-border/50 shadow-lg shadow-indigo-500/5 overflow-hidden">
            {/* Progress Bar */}
            <div className="flex border-b border-border/50 bg-muted/20">
              <div className={`flex-1 py-4 text-center font-bold border-b-2 transition-colors ${step >= 1 ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-muted-foreground'}`}>
                1. קובץ
              </div>
              <div className={`flex-1 py-4 text-center font-bold border-b-2 transition-colors ${step >= 2 ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-muted-foreground'}`}>
                2. פרטים מזהים
              </div>
              <div className={`flex-1 py-4 text-center font-bold border-b-2 transition-colors ${step >= 3 ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-muted-foreground'}`}>
                3. סיום
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
              {/* Step 1: Upload */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col items-center">
                  <div className="w-full h-64 border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/50 flex flex-col items-center justify-center cursor-pointer hover:bg-indigo-50 transition-colors group">
                    <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner border border-indigo-200">
                      <UploadCloud className="h-10 w-10 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-bold text-indigo-900">גרור קובץ לכאן או לחץ לבחירה</h3>
                    <p className="text-sm text-indigo-600/70 mt-1 font-medium">תומך ב- PDF, DOCX (עד 50MB)</p>
                  </div>
                  <div className="mt-8 w-full flex justify-end">
                    <Button type="button" onClick={() => setStep(2)} className="rounded-full px-8 shadow-sm font-bold hover:shadow-md transition-shadow bg-indigo-600">
                      המשך לשלב הבא <ChevronLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">כותרת הסיכום</label>
                    <input name="title" required placeholder="לדוגמא: סיכום למבחן אלגברה לינארית סמסטר א" className="w-full h-12 rounded-xl border border-input bg-transparent px-4 font-medium placeholder:font-normal focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all shadow-sm" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">קוד קורס</label>
                      <input name="courseCode" required placeholder="89-112" className="w-full h-12 rounded-xl border border-input bg-transparent px-4 font-medium focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all shadow-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">מחיר (₪)</label>
                      <input name="price" type="number" defaultValue={0} min={0} className="w-full h-12 rounded-xl border border-input bg-transparent px-4 font-medium focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all shadow-sm" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">תיאור ותגיות</label>
                    <textarea name="description" placeholder="מה כולל הסיכום? האם הוא מכסה את כל החומר?" className="w-full h-24 rounded-xl border border-input bg-transparent p-4 font-medium focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none shadow-sm" />
                  </div>

                  <div className="mt-8 w-full flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="rounded-full font-bold">
                      חזור לקובץ
                    </Button>
                    <Button type="submit" disabled={isSubmitting} className="rounded-full px-8 shadow-sm font-bold bg-indigo-600 hover:bg-indigo-700 hover:shadow-md transition-all">
                      {isSubmitting ? "מעלה לשרת..." : "פרסם סיכום"}
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <div className="animate-in zoom-in-95 duration-500 flex flex-col items-center py-6 text-center">
                  <div className="h-28 w-28 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 ring-8 ring-emerald-500/5">
                    <CheckCircle2 className="h-14 w-14 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-black mb-2 text-foreground">הסיכום עלה בהצלחה!</h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-md">הסיכום שלך זמין כעת במרקטפלייס ויעזור למאות סטודנטים בבר-אילן.</p>
                  <Button type="button" className="rounded-full px-8 font-bold bg-foreground text-background hover:bg-muted-foreground transition-colors" onClick={() => window.location.href = '/marketplace'}>
                    צפה במרקטפלייס
                  </Button>
                </div>
              )}
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
