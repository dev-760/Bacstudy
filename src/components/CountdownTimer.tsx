"use client";

import { useEffect, useState } from "react";
import { examDate } from "@/data/subjects";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateCountdown = () => {
      const diff = examDate.getTime() - new Date().getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-2.5 w-full">
        {[0,1,2,3].map(i => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <div className="w-full aspect-square rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
            <div className="h-2.5 w-8 rounded bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
          </div>
        ))}
      </div>
    );
  }

  const timeBlocks = [
    { label: "Days", value: timeLeft.days.toString().padStart(2, "0"), color: "from-primary to-blue-400" },
    { label: "Hours", value: timeLeft.hours.toString().padStart(2, "0"), color: "from-violet-500 to-purple-400" },
    { label: "Min", value: timeLeft.minutes.toString().padStart(2, "0"), color: "from-fuchsia-500 to-pink-400" },
    { label: "Sec", value: timeLeft.seconds.toString().padStart(2, "0"), color: "from-amber-500 to-orange-400" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2.5 w-full">
      {timeBlocks.map((block, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.08, duration: 0.3 }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="relative w-full group">
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${block.color} opacity-[0.08] group-hover:opacity-[0.14] transition-opacity`}></div>
            <div className="relative w-full rounded-xl py-3.5 flex items-center justify-center border border-slate-200/60 dark:border-slate-700/40 bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm">
              <p className={`bg-gradient-to-br ${block.color} bg-clip-text text-transparent text-xl md:text-2xl font-extrabold tabular-nums`}>
                {block.value}
              </p>
            </div>
          </div>
          <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em]">{block.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
