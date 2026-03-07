"use client";

import ClientLayout from "@/components/ClientLayout";
import CountdownTimer from "@/components/CountdownTimer";
import SubjectCard from "@/components/SubjectCard";
import { subjects, getStudyStats, getDaysRemaining } from "@/data/subjects";
import { useProgress } from "@/context/ProgressContext";
import { motion } from "framer-motion";

function Dashboard() {
  const { getOverallProgress, progress } = useProgress();
  const { totalLessons, totalQuizQuestions } = getStudyStats();
  const overall = getOverallProgress();
  const days = getDaysRemaining();

  const quizScores = Object.values(progress)
    .filter((p) => p.quizScore != null)
    .map((p) => p.quizScore as number);
  const avgScore = quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0;
  const remaining = totalLessons - overall.completed;
  const daily = days > 0 ? Math.max(1, Math.ceil(remaining / days)) : remaining;

  const stats = [
    { icon: "📚", value: `${overall.completed}/${totalLessons}`, label: "Lessons Done", color: "#3b82f6" },
    { icon: "📊", value: `${overall.percentage}%`, label: "Progress", color: "#8b5cf6" },
    { icon: "✅", value: `${quizScores.length}`, label: "Quizzes Taken", color: "#10b981" },
    { icon: "⭐", value: `${avgScore}%`, label: "Avg Score", color: "#f59e0b" },
  ];

  return (
    <div className="page-wrapper">
      {/* Background Orbs */}
      <div style={{
        position: "absolute", top: -150, right: -100, width: 500, height: 500,
        background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 60%)",
        pointerEvents: "none", zIndex: 0
      }} />
      <div style={{
        position: "absolute", top: 200, left: -200, width: 400, height: 400,
        background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 60%)",
        pointerEvents: "none", zIndex: 0
      }} />

      {/* Hero Section */}
      <section style={{ padding: "60px 0 40px", position: "relative", zIndex: 1 }}>
        <div className="hero-grid">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", marginBottom: 16,
              background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: 30, fontSize: "0.78rem", fontWeight: 600, color: "#60a5fa",
              boxShadow: "0 4px 12px rgba(59,130,246,0.1)"
            }}>
              <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa" }} />
              2BAC Physical Science — English Option
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: -0.03 + "em", lineHeight: 1.1, marginBottom: 16 }}>
              Unlock Your <br/>
              <span className="text-gradient">
                Highest Potential
              </span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, maxWidth: 500, marginBottom: 24 }}>
              <strong style={{ color: "#fff" }}>{days} days</strong> until the national exam. Complete{" "}
              <strong style={{ color: "#fff" }}>{daily} lesson{daily > 1 ? "s" : ""} a day</strong> and guarantee your success. Stay consistent.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <CountdownTimer />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ marginBottom: 48, position: "relative", zIndex: 1 }}>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel"
              style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "20px 24px", 
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: `linear-gradient(135deg, ${s.color}15, ${s.color}05)`, 
                border: `1px solid ${s.color}30`,
                color: s.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem", flexShrink: 0,
                boxShadow: `0 8px 16px ${s.color}10`
              }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subjects Grid */}
      <section style={{ marginBottom: 60, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff", marginBottom: 6 }}>Your Subjects</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Select a module to continue studying</p>
          </div>
        </div>
        <div className="subjects-grid">
          {subjects.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <SubjectCard subject={s} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Motivational Banner */}
      <section style={{ position: "relative", zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel"
          style={{
            padding: "40px 32px", textAlign: "center",
            background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))",
            position: "relative", overflow: "hidden"
          }}
        >
          {/* Decorative blur */}
          <div style={{ position: "absolute", top: -50, left: "50%", transform: "translateX(-50%)", width: 200, height: 100, background: "var(--purple)", filter: "blur(80px)", opacity: 0.15, pointerEvents: "none" }} />
          
          <div style={{ fontSize: "2.5rem", marginBottom: 12, animation: "float 4s ease-in-out infinite" }}>🚀</div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>You Are Capable of Greatness</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 600, margin: "0 auto 28px" }}>
            Whether you&apos;re revising or starting from zero, the secret is <strong style={{ color: "#fff" }}>consistency</strong>.<br/>
            Study focused blocks, test your knowledge, and trust the process.
          </p>
          
          <div className="tips-row">
            {[
              { icon: "🎯", text: "Prioritize High-Coeff Subjects" },
              { icon: "⏱️", text: "Use the Pomodoro Technique" },
              { icon: "🔄", text: "Test Yourself Repeatedly" },
              { icon: "📱", text: "Stay Away From Distractions" },
            ].map((tip, i) => (
              <div key={i} style={{
                padding: "12px 16px", background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12,
                fontSize: "0.85rem", color: "var(--text-secondary)", textAlign: "left",
                display: "flex", alignItems: "center", gap: 10,
                transition: "all 0.2s", cursor: "default"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
              >
                <span style={{ fontSize: "1.1rem" }}>{tip.icon}</span>
                <span style={{ fontWeight: 500 }}>{tip.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <style jsx global>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: center;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .subjects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .tips-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          max-width: 650px;
          margin: 0 auto;
        }
        .pulse-dot {
          animation: pulseGlow 2s infinite;
        }
        
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; justify-items: center; }
          .hero-grid > div:first-child { align-items: center; display: flex; flex-direction: column; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr; }
          .tips-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <ClientLayout>
      <Dashboard />
    </ClientLayout>
  );
}
