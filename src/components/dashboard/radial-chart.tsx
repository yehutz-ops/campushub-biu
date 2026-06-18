"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface RadialChartProps {
  title: string;
  value: number; // Percentage 0-100
  color?: string;
  description?: string;
  className?: string;
}

export function RadialChart({ 
  title, 
  value, 
  color = "bg-indigo-500", 
  description,
  className 
}: RadialChartProps) {
  const data = [
    { name: "Completed", value: value },
    { name: "Remaining", value: 100 - value },
  ];

  // Simple mapping of tailwind bg classes to hex colors for recharts
  const colorMap: Record<string, string> = {
    "bg-indigo-500": "#6366f1",
    "bg-blue-500": "#3b82f6",
    "bg-emerald-500": "#10b981",
    "bg-rose-500": "#f43f5e",
    "bg-purple-500": "#a855f7"
  };
  
  const activeColor = colorMap[color] || "#6366f1";

  return (
    <div className={cn(
      "group relative flex flex-col items-center justify-center rounded-3xl border border-border/50 bg-background p-6 shadow-sm transition-all hover:shadow-md",
      className
    )}>
      <h3 className="mb-2 text-sm font-bold text-muted-foreground w-full text-right">{title}</h3>
      
      <div className="relative h-32 w-32 mt-2 transition-transform group-hover:scale-105 duration-500">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={55}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
              cornerRadius={10}
            >
              <Cell fill={activeColor} className="drop-shadow-sm" />
              {/* Background track cell */}
              <Cell fill="hsl(var(--muted))" opacity={0.5} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-black text-foreground">{value}%</span>
        </div>
      </div>
      
      {description && (
        <p className="mt-4 text-xs text-muted-foreground text-center max-w-[150px]">
          {description}
        </p>
      )}
    </div>
  );
}
