interface MetricProgressBarProps {
  value: number;
  max?: number;
  type: "difficulty" | "interest";
  className?: string;
}

export function MetricProgressBar({ value, max = 5, type, className = "" }: MetricProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  // Contextual colors
  const bgColor = type === "difficulty" ? "bg-red-100" : "bg-emerald-100";
  const fillColor = type === "difficulty" ? "bg-gradient-to-r from-red-500 to-orange-400" : "bg-gradient-to-r from-emerald-400 to-teal-500";

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className={`h-1.5 w-full rounded-full overflow-hidden ${bgColor}`} dir="ltr">
        <div 
          className={`h-full rounded-full ${fillColor} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
