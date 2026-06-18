import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon: ReactNode;
  className?: string;
}

export function StatCard({ title, value, trend, icon, className }: StatCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-3xl border border-border/50 bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-indigo-500/30",
      className
    )}>
      {/* Subtle background glow effect */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition-all group-hover:bg-indigo-500/20" />
      
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-2 text-3xl font-black text-foreground tracking-tight">
            {value}
          </h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-inner">
          {icon}
        </div>
      </div>
      
      {trend && (
        <div className="mt-4 flex items-center gap-2 text-sm font-medium relative z-10">
          <span className={cn(
            "flex items-center rounded-full px-2 py-0.5 text-xs font-bold shadow-sm",
            trend.isPositive 
              ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400" 
              : "bg-rose-500/15 text-rose-700 dark:text-rose-400"
          )}>
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
          </span>
          <span className="text-muted-foreground text-xs">מאז החודש שעבר</span>
        </div>
      )}
    </div>
  );
}
