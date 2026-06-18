import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 md:py-32 text-center bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-500/20 mb-4">
            ברוכים הבאים לעידן החדש של הלמידה
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
            CampusHub <span className="text-blue-600 dark:text-blue-500">BIU</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            הפלטפורמה המתקדמת ביותר לסטודנטים בבר-אילן.
            <br />
            סיכומים, מבחנים, שאלות ותשובות - הכל במקום אחד.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/dashboard"
              className={buttonVariants({ size: "lg" }) + " h-14 px-8 text-lg w-full sm:w-auto shadow-xl hover:scale-105 transition-transform"}
            >
              היכנס לאזור האישי
            </Link>
            <Link 
              href="/marketplace"
              className={buttonVariants({ variant: "outline", size: "lg" }) + " h-14 px-8 text-lg w-full sm:w-auto hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"}
            >
              חפש חומרי לימוד
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 text-3xl">
              📚
            </div>
            <h3 className="text-2xl font-bold">חומרים איכותיים</h3>
            <p className="text-slate-600 dark:text-slate-400">
              מאגר עצום של סיכומים, מחברות ומבחנים משנים קודמות שעברו ביקורת איכות ע"י קהילת הסטודנטים.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-16 w-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-3xl">
              🤝
            </div>
            <h3 className="text-2xl font-bold">קהילה תומכת</h3>
            <p className="text-slate-600 dark:text-slate-400">
              שתפו את הסיכומים שלכם, עזרו לסטודנטים אחרים וקבלו דירוגים ונקודות זכות במערכת.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 text-3xl">
              ⚡
            </div>
            <h3 className="text-2xl font-bold">חיפוש חכם</h3>
            <p className="text-slate-600 dark:text-slate-400">
              מנוע חיפוש מתקדם המאפשר למצוא בדיוק את החומר שאתם צריכים לפי קורס, מרצה, או נושא.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
