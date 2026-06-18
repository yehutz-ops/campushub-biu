import { StatCard } from "@/components/dashboard/stat-card";
import { RadialChart } from "@/components/dashboard/radial-chart";
import { DownloadCloud, Star, Users, CheckCircle2 } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black tracking-tight text-foreground">
          ברוך שובך, יונתן 👋
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          הנה מה שקורה עם חומרי הלימוד שלך בבר-אילן השבוע. יש לך <span className="font-bold text-indigo-600">3</span> ביקורות חדשות לקרוא.
        </p>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="סה״כ הורדות" 
          value="1,248" 
          icon={<DownloadCloud className="h-6 w-6" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard 
          title="דירוג ממוצע" 
          value="4.9" 
          icon={<Star className="h-6 w-6" />}
          trend={{ value: 2, isPositive: true }}
        />
        <StatCard 
          title="עוקבים פעילים" 
          value="84" 
          icon={<Users className="h-6 w-6" />}
          trend={{ value: 5, isPositive: false }}
        />
        <StatCard 
          title="סיכומים שאושרו" 
          value="24" 
          icon={<CheckCircle2 className="h-6 w-6" />}
        />
      </div>

      {/* Radial Charts & Secondary Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2 rounded-3xl border border-border/50 bg-background p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-indigo-500 to-purple-600" />
          <h2 className="text-xl font-bold mb-4">פעילות חודשית</h2>
          <div className="h-[300px] w-full rounded-2xl bg-muted/20 border border-dashed border-muted/80 flex items-center justify-center">
            <span className="text-muted-foreground font-medium bg-background px-4 py-2 rounded-lg shadow-sm">
              גרף פעילות (Recharts LineChart) ישולב כאן 📈
            </span>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <RadialChart 
            title="ביקורות חיוביות" 
            value={92} 
            color="bg-emerald-500" 
            description="מתוך 145 ביקורות שנכתבו על הסיכומים שלך."
          />
          <RadialChart 
            title="יעד העלאות סמסטריאלי" 
            value={65} 
            color="bg-indigo-500" 
            description="העלית 13 קבצים מתוך יעד של 20 העלאות לסמסטר הנוכחי."
          />
        </div>
      </div>
    </div>
  );
}
