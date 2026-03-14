"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const { user, signOut, loading: authLoading } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#0f1117]/70 backdrop-blur-xl px-5 md:px-8 py-2.5 sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="size-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
          <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-slate-900 dark:text-white text-[15px] font-extrabold leading-none tracking-tight">BACStudy</h2>
          <span className="text-[10px] font-semibold text-primary/70 uppercase tracking-widest mt-0.5">Academic Platform</span>
        </div>
      </Link>

      <div className="flex flex-1 justify-end gap-3 md:gap-6 items-center">
        {/* Search */}
        <label className="hidden md:flex flex-col min-w-44 h-9 max-w-72">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 hover:border-slate-300 dark:hover:border-slate-600 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
            <div className="text-slate-400 flex items-center justify-center pl-3.5">
              <span className="material-symbols-outlined text-[18px]">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 px-3 text-[13px] font-medium" placeholder="Search lessons..." />
          </div>
        </label>

        {/* Action Buttons */}
        <div className="flex gap-1.5">
          <button className="relative flex items-center justify-center rounded-xl size-9 bg-slate-100/80 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 hover:bg-slate-200/80 dark:hover:bg-slate-700/60 hover:text-slate-700 dark:hover:text-slate-200 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
            <span className="material-symbols-outlined text-[19px]">notifications</span>
            <span className="absolute -top-0.5 -right-0.5 size-2 bg-primary rounded-full ring-2 ring-white dark:ring-[#0f1117]"></span>
          </button>
          <button className="flex items-center justify-center rounded-xl size-9 bg-slate-100/80 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 hover:bg-slate-200/80 dark:hover:bg-slate-700/60 hover:text-slate-700 dark:hover:text-slate-200 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
            <span className="material-symbols-outlined text-[19px]">settings</span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

        {/* Profile */}
        <div ref={profileRef} className="relative">
          {!authLoading && user ? (
            <>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-all group"
              >
                <div className="bg-gradient-to-br from-primary to-accent text-white rounded-lg size-8 flex items-center justify-center font-bold text-sm shadow-sm">
                  {(user.user_metadata?.full_name?.[0] || user.email?.[0] || "U").toUpperCase()}
                </div>
                <div className="hidden sm:flex flex-col items-start">
                  <span className="text-xs font-semibold text-slate-900 dark:text-white leading-none">{user.user_metadata?.full_name?.split(" ")[0] || "Student"}</span>
                  <span className="text-[10px] text-slate-500 leading-none mt-0.5">2BAC Science</span>
                </div>
                <span className="material-symbols-outlined text-[16px] text-slate-400 hidden sm:block">expand_more</span>
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-60 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/30 z-50 overflow-hidden"
                  >
                    <div className="px-4 py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                        {user.user_metadata?.full_name || "Student"}
                      </p>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{user.email}</p>
                    </div>
                    <div className="p-1.5">
                      <button className="w-full text-left px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px]">person</span> Profile
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px]">settings</span> Settings
                      </button>
                      <div className="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
                      <button
                        onClick={() => { signOut(); setProfileOpen(false); }}
                        className="w-full text-left px-3 py-2 text-sm text-red-500 font-medium rounded-lg hover:bg-red-50 dark:hover:bg-red-500/5 transition-colors flex items-center gap-2.5"
                      >
                        <span className="material-symbols-outlined text-[18px]">logout</span> Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : !authLoading && (
            <Link
              href="/auth"
              className="px-5 py-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white text-sm font-bold rounded-xl shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all whitespace-nowrap active:scale-[0.97]"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
