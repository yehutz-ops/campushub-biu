"use client";

import { useState, useTransition } from "react";
import { Filter, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const DEPARTMENTS = ["מדעי המחשב", "כלכלה", "פסיכולוגיה", "משפטים", "הנדסה", "מנהל עסקים"];
const DEGREES = [{ id: "Bachelors", label: "תואר ראשון" }, { id: "Masters", label: "תואר שני" }, { id: "PhD", label: "תואר שלישי" }];
const YEARS = [{ id: "A", label: "שנה א'" }, { id: "B", label: "שנה ב'" }, { id: "C", label: "שנה ג'" }, { id: "D", label: "שנה ד'" }];
const SEMESTERS = [{ id: "A", label: "סמסטר א'" }, { id: "B", label: "סמסטר ב'" }, { id: "Summer", label: "סמסטר קיץ" }, { id: "Annual", label: "שנתי" }];

export function FilterSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    department: true,
    degree: true,
    year: false,
    semester: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Get current active filter
  const activeDept = searchParams.get("dept");

  const toggleFilter = (section: string, value: string) => {
    // For this simple implementation, we only handle single-select department as requested by the initial mock.
    // In a full nuqs-based engine, we'd append/remove to arrays in the URL.
    if (section === "department") {
      const params = new URLSearchParams(searchParams);
      if (activeDept === value) {
        params.delete("dept");
      } else {
        params.set("dept", value);
      }
      
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      });
    }
  };

  const clearAll = () => {
    startTransition(() => {
      router.replace(pathname, { scroll: false });
    });
  };

  return (
    <div className={`w-full bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-20 transition-opacity ${isPending ? 'opacity-70' : 'opacity-100'}`}>
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Filter className="w-5 h-5 text-[#C9A94E]" />
          סינון תוצאות
        </h2>
        <button 
          className="text-[12px] text-slate-500 font-bold hover:text-[#C9A94E] transition-colors"
          onClick={clearAll}
        >
          נקה הכל
        </button>
      </div>

      <div className="space-y-4">
        {/* Department Filter */}
        <div className="border-b border-gray-50 pb-4">
          <button 
            className="flex items-center justify-between w-full text-right font-bold text-slate-800 mb-3"
            onClick={() => toggleSection("department")}
          >
            מחלקה
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openSections["department"] ? "rotate-180" : ""}`} />
          </button>
          {openSections["department"] && (
            <div className="space-y-2.5 mt-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
              {DEPARTMENTS.map((dept) => (
                <label key={dept} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${activeDept === dept ? 'bg-[#C9A94E] border-[#C9A94E]' : 'bg-white border-gray-300 group-hover:border-[#C9A94E]/50'}`}>
                    {activeDept === dept && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <input type="checkbox" className="hidden" checked={activeDept === dept} onChange={() => toggleFilter("department", dept)} />
                  <span className={`text-[13px] ${activeDept === dept ? 'font-bold text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>{dept}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        
        {/* Degree Filter (UI only for now) */}
        <div className="border-b border-gray-50 pb-4 opacity-50 pointer-events-none">
          <button className="flex items-center justify-between w-full text-right font-bold text-slate-800 mb-3">
            תואר
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
      
      <Button className="w-full mt-6 rounded-xl font-bold bg-[#C9A94E] hover:bg-[#b09340] h-12 shadow-sm text-white" variant="default" onClick={() => {}}>
        החל סינון
      </Button>
    </div>
  );
}
