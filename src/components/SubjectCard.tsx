"use client";

import { Subject } from "@/data/types";
import { useProgress } from "@/context/ProgressContext";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SubjectCard({ subject }: { subject: Subject }) {
  const { progress } = useProgress();
  const done = subject.lessons.filter((l) => progress[l.id]?.completed).length;
  const total = subject.lessons.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const disabled = total === 0;

  return (
    <Link
      href={disabled ? "#" : `/subject/${subject.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        pointerEvents: disabled ? "none" : "auto",
        height: "100%",
      }}
    >
      <div
        className="glass-panel"
        style={{
          position: "relative",
          padding: "24px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          cursor: disabled ? "default" : "pointer",
          overflow: "hidden",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            right: "-40%",
            width: "80%",
            height: "80%",
            background: subject.gradient,
            opacity: 0.05,
            borderRadius: "50%",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20, position: "relative", zIndex: 1 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              background: subject.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              boxShadow: `0 8px 24px ${subject.color}20`
            }}
          >
            {subject.icon}
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {disabled && (
              <span style={{ fontSize: "0.7rem", padding: "4px 10px", borderRadius: 8, background: "rgba(255,255,255,0.06)", color: "var(--text-muted)", fontWeight: 600 }}>
                Coming Soon
              </span>
            )}
            <span style={{ fontSize: "0.75rem", padding: "4px 10px", borderRadius: 8, background: "rgba(255,255,255,0.05)", color: "var(--text-secondary)", fontWeight: 600, border: "1px solid rgba(255,255,255,0.05)" }}>
              Coeff. {subject.examCoefficient}
            </span>
          </div>
        </div>

        {/* Name & Desc */}
        <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: 8, position: "relative", zIndex: 1, letterSpacing: -0.01 + "em", color: "#fff" }}>
          {subject.name}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 24, position: "relative", zIndex: 1, flexGrow: 1 }}>
          {subject.description}
        </p>

        {/* Progress */}
        <div style={{ position: "relative", zIndex: 1, marginTop: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: 8, fontWeight: 500 }}>
            <span>{done} of {total} lessons</span>
            <span style={{ fontWeight: 700, color: subject.color }}>{pct}%</span>
          </div>
          <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              style={{ height: "100%", borderRadius: 2, background: subject.gradient }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
