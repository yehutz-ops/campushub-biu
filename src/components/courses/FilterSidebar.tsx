"use client";

import { useState } from "react";
import { Filter, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEPARTMENTS = ["מדעי המחשב", "כלכלה", "פסיכולוגיה", "משפטים", "הנדסה", "מנהל עסקים"];
const DEGREES = [{ id: "Bachelors", label: "תואר ראשון" }, { id: "Masters", label: "תואר שני" }, { id: "PhD", label: "תואר שלישי" }];
const YEARS = [{ id: "A", label: "שנה א'" }, { id: "B", label: "שנה ב'" }, { id: "C", label: "שנה ג'" }, { id: "D", label: "שנה ד'" }];
const SEMESTERS = [{ id: "A", label: "סמסטר א'" }, { id: "B", label: "סמסטר ב'" }, { id: "Summer", label: "סמסטר קיץ" }, { id: "Annual", label: "שנתי" }];

export function FilterSidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    department: true,
    degree: true,
    year: false,
    semester: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Mock state for selected filters (in real implementation, read from URL searchParams)
  const [selected, setSelected] = useState<Record<string, string[]>>({
    department: [],
    degree: [],
    year: [],
    semester: [],
  });

  const toggleFilter = (section: string, value: string) => {
    setSelected((prev) => {
      const current = prev[section];
      const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      return { ...prev, [section]: updated };
    });
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 shadow-sm sticky top-20">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
        <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
          <Filter className="w-5 h-5 text-indigo-600" />
          סינון תוצאות
        </h2>
        <button 
          className="text-xs text-slate-500 font-bold hover:text-indigo-600 transition-colors"
          onClick={() => setSelected({ department: [], degree: [], year: [], semester: [] })}
        >
          נקה הכל
        </button>
      </div>

      <div className="space-y-4">
        {/* Department Filter */}
        <div className="border-b border-slate-50 pb-4">
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
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${selected.department.includes(dept) ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-slate-300 group-hover:border-indigo-400'}`}>
                    {selected.department.includes(dept) && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className={`text-sm ${selected.department.includes(dept) ? 'font-bold text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>{dept}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Degree Filter */}
        <div className="border-b border-slate-50 pb-4">
          <button 
            className="flex items-center justify-between w-full text-right font-bold text-slate-800 mb-3"
            onClick={() => toggleSection("degree")}
          >
            תואר
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openSections["degree"] ? "rotate-180" : ""}`} />
          </button>
          {openSections["degree"] && (
            <div className="space-y-2.5 mt-2">
              {DEGREES.map((deg) => (
                <label key={deg.id} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${selected.degree.includes(deg.id) ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-slate-300 group-hover:border-indigo-400'}`}>
                    {selected.degree.includes(deg.id) && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className={`text-sm ${selected.degree.includes(deg.id) ? 'font-bold text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>{deg.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Year Filter */}
        <div className="border-b border-slate-50 pb-4">
          <button 
            className="flex items-center justify-between w-full text-right font-bold text-slate-800 mb-3"
            onClick={() => toggleSection("year")}
          >
            שנת לימוד
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openSections["year"] ? "rotate-180" : ""}`} />
          </button>
          {openSections["year"] && (
            <div className="grid grid-cols-2 gap-2 mt-2">
              {YEARS.map((yr) => (
                <button 
                  key={yr.id}
                  onClick={() => toggleFilter("year", yr.id)}
                  className={`py-1.5 px-3 rounded-lg text-sm font-bold border transition-all ${selected.year.includes(yr.id) ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'}`}
                >
                  {yr.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Semester Filter */}
        <div>
          <button 
            className="flex items-center justify-between w-full text-right font-bold text-slate-800 mb-3"
            onClick={() => toggleSection("semester")}
          >
            סמסטר
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openSections["semester"] ? "rotate-180" : ""}`} />
          </button>
          {openSections["semester"] && (
            <div className="grid grid-cols-2 gap-2 mt-2">
              {SEMESTERS.map((sem) => (
                <button 
                  key={sem.id}
                  onClick={() => toggleFilter("semester", sem.id)}
                  className={`py-1.5 px-3 rounded-lg text-sm font-bold border transition-all ${selected.semester.includes(sem.id) ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'}`}
                >
                  {sem.label}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
      
      <Button className="w-full mt-6 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 h-12 shadow-md shadow-indigo-600/20">
        החל סינון
      </Button>
    </div>
  );
}
