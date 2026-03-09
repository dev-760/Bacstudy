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
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 md:px-10 py-3 sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-4 text-primary transition-transform hover:scale-105">
        <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
          <span className="material-symbols-outlined text-primary">school</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">BACStudy</h2>
      </Link>

      <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
        <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="text-slate-500 flex items-center justify-center pl-4">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-none placeholder:text-slate-500 px-4 text-sm" placeholder="Search resources..." />
          </div>
        </label>

        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </button>
        </div>

        <div ref={profileRef} className="relative">
          {!authLoading && user ? (
            <>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="bg-primary/20 text-primary dark:bg-primary/20 rounded-full size-10 border-2 border-primary/20 shadow-sm flex items-center justify-center font-bold overflow-hidden transition-transform hover:scale-105"
              >
                {(user.user_metadata?.full_name?.[0] || user.email?.[0] || "U").toUpperCase()}
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg z-50 overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                        {user.user_metadata?.full_name || "Student"}
                      </p>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{user.email}</p>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={() => { signOut(); setProfileOpen(false); }}
                        className="w-full text-left px-3 py-2 text-sm text-red-600 font-medium rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors flex items-center gap-2"
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
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg shadow-md transition-all whitespace-nowrap"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
