"use client";

import { useEffect, useState } from "react";
import { getDaysRemaining, examDate } from "@/data/subjects";

export default function CountdownTimer() {
  const [days, setDays] = useState(getDaysRemaining());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setDays(getDaysRemaining()), 60000);
    return () => clearInterval(t);
  }, []);

  if (!mounted) return null;

  const totalDays = 90;
  const elapsed = Math.max(0, totalDays - days);
  const pct = Math.min(100, Math.round((elapsed / totalDays) * 100));
  const c = 2 * Math.PI * 52;
  const offset = c - (pct / 100) * c;
  const urgency = days <= 14 ? "#ef4444" : days <= 30 ? "#f97316" : days <= 60 ? "#facc15" : "#34d399";

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const examStr = `${months[examDate.getMonth()]} ${examDate.getDate()}, ${examDate.getFullYear()}`;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "18px 22px",
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 18,
      }}
    >
      {/* Ring */}
      <div style={{ position: "relative", width: 100, height: 100, flexShrink: 0 }}>
        <svg width="100" height="100" viewBox="0 0 110 110">
          <circle cx="55" cy="55" r="52" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5" />
          <circle
            cx="55" cy="55" r="52" fill="none" stroke={urgency} strokeWidth="5"
            strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
            transform="rotate(-90 55 55)"
            style={{ transition: "stroke-dashoffset 1s ease", filter: `drop-shadow(0 0 6px ${urgency}50)` }}
          />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: "1.8rem", fontWeight: 800, lineHeight: 1, color: urgency }}>{days}</span>
          <span style={{ fontSize: "0.65rem", color: "#6b7280", textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>days</span>
        </div>
      </div>

      {/* Info */}
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f0f0f5", marginBottom: 8 }}>
          Exam: {examStr}
        </p>
        <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden", marginBottom: 6 }}>
          <div style={{
            height: "100%", borderRadius: 3, background: urgency,
            width: `${pct}%`, transition: "width 1s ease",
            boxShadow: `0 0 8px ${urgency}40`
          }} />
        </div>
        <span style={{ fontSize: "0.72rem", color: "#6b7280" }}>{pct}% of preparation time elapsed</span>
      </div>
    </div>
  );
}
