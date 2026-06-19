"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UploadCloud, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { isSignedIn } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "דף הבית", href: "/" },
    { name: "קורסים", href: "/courses" },
    { name: "שוק המסכמים", href: "/marketplace" },
    { name: "מרכז הבקשות", href: "/requests" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-6 pb-2 pointer-events-none">
      <div className="mx-auto max-w-6xl w-full">
        {/* Floating Pill */}
        <nav className="bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 ease-out">
          
          {/* Logo (RTL Start -> Right) */}
          <Link href="/" className="flex items-center gap-1.5 shrink-0 transition-transform hover:scale-105">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-[#C9A94E] font-black text-xl leading-none">C</span>
            </div>
            <span className="text-xl tracking-tight hidden sm:block">
              <span className="font-black text-slate-900">CampusHub</span>
              <span className="font-medium text-[#C9A94E]">BIU</span>
            </span>
          </Link>

          {/* Desktop Navigation Links (Center) */}
          <div className="hidden md:flex items-center justify-center gap-8 flex-1 px-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[15px] font-bold text-slate-600 hover:text-[#C9A94E] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions (RTL End -> Left) */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/upload" className="hidden sm:block">
              <Button className="rounded-full bg-[#C9A94E] hover:bg-[#b59540] text-white font-bold h-10 px-6 shadow-md shadow-[#C9A94E]/20 hover:shadow-lg hover:shadow-[#C9A94E]/30 transition-all duration-300 hover:-translate-y-0.5">
                העלה חומר
                <UploadCloud className="w-4 h-4 mr-2" />
              </Button>
            </Link>
            
            {isSignedIn ? (
              <div className="border-2 border-slate-100 rounded-full p-0.5 hover:border-[#C9A94E]/30 transition-colors">
                <UserButton appearance={{ elements: { avatarBox: "w-9 h-9" } }} />
              </div>
            ) : (
              <Link href="/sign-in">
                <Button variant="ghost" className="rounded-full font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100">
                  התחבר
                </Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-3xl p-4 flex flex-col gap-2 pointer-events-auto animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[16px] font-bold text-slate-700 p-4 rounded-2xl hover:bg-slate-50 hover:text-[#C9A94E] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px w-full bg-slate-100 my-2" />
            <Link href="/upload" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full rounded-2xl bg-[#C9A94E] text-white font-bold h-14">
                <UploadCloud className="w-5 h-5 ml-2" />
                העלה חומר
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
