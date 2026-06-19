"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, PlusCircle } from "lucide-react";
import { SuggestionModal } from "./SuggestionModal";

export interface AddableSelectProps {
  label: string;
  placeholder: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
  entityType: string;
}

export function AddableSelect({ label, placeholder, options, value, onChange, entityType }: AddableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.id === value);

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="block text-[13px] font-bold text-slate-700 mb-1.5">{label}</label>
      
      <div 
        className="flex items-center justify-between w-full bg-white border border-slate-200 rounded-xl h-12 px-4 cursor-pointer hover:border-[#C9A94E]/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-[14px] ${selectedOption ? "text-slate-900 font-bold" : "text-slate-400"}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {options.map((opt) => (
              <div 
                key={opt.id}
                className="px-4 py-2.5 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer transition-colors"
                onClick={() => {
                  onChange(opt.id);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </div>
            ))}
          </div>
          <div 
            className="px-4 py-3 bg-slate-50 border-t border-slate-100 text-[#C9A94E] hover:bg-[#C9A94E]/10 cursor-pointer transition-colors flex items-center gap-2 font-bold text-[14px]"
            onClick={() => {
              setIsOpen(false);
              setIsModalOpen(true);
            }}
          >
            <PlusCircle className="w-4 h-4" />
            + הוסף חדש
          </div>
        </div>
      )}

      {isModalOpen && (
        <SuggestionModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          entityType={entityType}
        />
      )}
    </div>
  );
}
