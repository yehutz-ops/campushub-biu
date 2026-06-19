"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface SuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  entityType: string;
}

export function SuggestionModal({ isOpen, onClose, entityType }: SuggestionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h3 className="text-xl font-bold text-slate-900">הוספת {entityType}</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <p className="text-[14px] text-slate-500 mb-4 leading-relaxed">
            ה{entityType} שחיפשת חסר במערכת? שלח לנו בקשה להוספה ואנחנו נדאג לעדכן את המאגר בהקדם.
          </p>
          
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2">שם ה{entityType}</label>
            <Input placeholder={`לדוגמה: ${entityType === 'קורס' ? 'מבוא לפסיכולוגיה' : 'מדעי המחשב'}`} className="h-12 rounded-xl" />
          </div>
        </div>
        
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-3">
          <Button onClick={onClose} className="w-full h-12 rounded-xl font-bold bg-[#C9A94E] hover:bg-[#b09340] text-white">
            שלח בקשה
          </Button>
          <Button onClick={onClose} variant="outline" className="w-full h-12 rounded-xl font-bold border-slate-200 text-slate-700">
            ביטול
          </Button>
        </div>
      </div>
    </div>
  );
}
