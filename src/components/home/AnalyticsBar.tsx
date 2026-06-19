import { FileText, Users, BookOpen, Download } from "lucide-react";

interface AnalyticsBarProps {
  analytics: {
    totalMaterials: number;
    activeUsers: number;
    totalCourses: number;
    totalDownloads: number;
  };
}

export function AnalyticsBar({ analytics }: AnalyticsBarProps) {
  const metrics = [
    {
      id: "materials",
      label: "חומרי לימוד",
      value: analytics.totalMaterials.toLocaleString(),
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-50",
    },
    {
      id: "users",
      label: "סטודנטים פעילים",
      value: analytics.activeUsers.toLocaleString(),
      icon: <Users className="w-8 h-8 text-emerald-500" />,
      bg: "bg-emerald-50",
    },
    {
      id: "courses",
      label: "קורסים במאגר",
      value: analytics.totalCourses.toLocaleString(),
      icon: <BookOpen className="w-8 h-8 text-purple-500" />,
      bg: "bg-purple-50",
    },
    {
      id: "downloads",
      label: "הורדות",
      value: analytics.totalDownloads.toLocaleString(),
      icon: <Download className="w-8 h-8 text-amber-500" />,
      bg: "bg-amber-50",
    },
  ];

  return (
    <div className="relative z-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div 
            key={metric.id}
            className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 flex flex-col items-center justify-center text-center border border-slate-100 transition-transform hover:-translate-y-1 duration-300"
          >
            <div className={`w-16 h-16 ${metric.bg} rounded-2xl flex items-center justify-center mb-4`}>
              {metric.icon}
            </div>
            <span className="text-3xl font-black text-slate-900 mb-1">{metric.value}</span>
            <span className="text-sm font-bold text-slate-500">{metric.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
