"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddableSelect } from "./AddableSelect";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  departments: any[];
  degrees: any[];
  courses: any[];
  lecturers: any[];
}

export function HeroSection({ departments, degrees, courses, lecturers }: HeroSectionProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    department: "",
    degree: "",
    course: "",
    lecturer: "",
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (filters.department) params.set("dept", filters.department);
    if (filters.degree) params.set("degree", filters.degree);
    if (filters.course) params.set("course", filters.course);
    if (filters.lecturer) params.set("lecturer", filters.lecturer);
    
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-[#0F1D3A] to-[#13264A] pt-24 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden z-0 flex flex-col items-center justify-center">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#C9A94E] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-[#1E3A8A] rounded-full mix-blend-multiply filter blur-[150px] opacity-60" />
      </div>

      <div className="text-center max-w-4xl mx-auto z-10 w-full">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 drop-shadow-lg">
          כל חומרי הלימוד <br />
          <span className="text-[#C9A94E]">במקום אחד</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-12">
          המנוע החכם של CampusHubBIU לחיפוש, סינון ושיתוף חומרי לימוד, סיכומים ומידע אקדמי.
        </p>

        {/* Search & Filter Engine */}
        <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl">
          <div className="relative mb-4">
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
            <Input 
              type="text"
              placeholder="חפש סיכומים, מבחנים, מרצים, או כל דבר אחר..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full h-16 pr-14 pl-6 rounded-2xl bg-white text-lg text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#C9A94E] border-0 shadow-inner"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <AddableSelect 
              label="מחלקה" 
              placeholder="בחר מחלקה" 
              options={departments} 
              value={filters.department} 
              onChange={(val) => setFilters(prev => ({ ...prev, department: val }))}
              entityType="מחלקה"
            />
            <AddableSelect 
              label="תואר" 
              placeholder="בחר תואר" 
              options={degrees} 
              value={filters.degree} 
              onChange={(val) => setFilters(prev => ({ ...prev, degree: val }))}
              entityType="תואר"
            />
            <AddableSelect 
              label="קורס" 
              placeholder="בחר קורס" 
              options={courses} 
              value={filters.course} 
              onChange={(val) => setFilters(prev => ({ ...prev, course: val }))}
              entityType="קורס"
            />
            <AddableSelect 
              label="מרצה" 
              placeholder="בחר מרצה" 
              options={lecturers} 
              value={filters.lecturer} 
              onChange={(val) => setFilters(prev => ({ ...prev, lecturer: val }))}
              entityType="מרצה"
            />
          </div>

          <Button 
            onClick={handleSearch}
            className="w-full h-14 rounded-xl text-lg font-bold bg-[#C9A94E] hover:bg-[#b09340] text-white shadow-lg transition-transform hover:scale-[1.01]"
          >
            חפש עכשיו
          </Button>
        </div>
      </div>
    </div>
  );
}
