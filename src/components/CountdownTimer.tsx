"use client";

import { useEffect, useState } from "react";
import { examDate } from "@/data/subjects";

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

  if (!mounted) return null;

  const timeBlocks = [
    { label: "Days", value: timeLeft.days.toString().padStart(2, "0") },
    { label: "Hrs", value: timeLeft.hours.toString().padStart(2, "0") },
    { label: "Min", value: timeLeft.minutes.toString().padStart(2, "0") },
    { label: "Sec", value: timeLeft.seconds.toString().padStart(2, "0") },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 w-full">
      {timeBlocks.map((block, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <div className="w-full bg-primary/5 dark:bg-primary/10 rounded-lg py-3 flex items-center justify-center border border-primary/10 shadow-sm">
            <p className="text-primary text-xl md:text-2xl font-bold">{block.value}</p>
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{block.label}</p>
        </div>
      ))}
    </div>
  );
}
