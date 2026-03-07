"use client";

import { use } from "react";
import ClientLayout from "@/components/ClientLayout";
import { subjects } from "@/data/subjects";
import { useProgress } from "@/context/ProgressContext";
import Link from "next/link";
import { notFound } from "next/navigation";

function SubjectContent({ subjectId }: { subjectId: string }) {
  const subject = subjects.find((s) => s.id === subjectId);
  const { getProgress } = useProgress();
  if (!subject) return notFound();

  return (
    <div className="page-wrapper" style={{ paddingTop: 24 }}>
      {/* Glow */}
      <div style={{
        position: "fixed", top: -150, left: -100, width: 400, height: 400,
        background: `radial-gradient(circle, ${subject.color}08, transparent 70%)`,
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Back */}
      <Link href="/" style={{ fontSize: "0.82rem", color: "#6b7280", display: "inline-block", marginBottom: 16, transition: "color 0.2s" }}>
        ← Dashboard
      </Link>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 32, position: "relative", zIndex: 1 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16, background: subject.gradient,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.6rem", flexShrink: 0,
        }}>
          {subject.icon}
        </div>
        <div>
          <h1 style={{ fontSize: "clamp(1.4rem, 4vw, 1.8rem)", fontWeight: 900, letterSpacing: -0.5, marginBottom: 4 }}>
            {subject.name}
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "0.85rem", marginBottom: 10 }}>{subject.description}</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {[
              { icon: "📚", text: `${subject.lessons.length} lessons` },
              { icon: "⚖️", text: `Coefficient ${subject.examCoefficient}` },
              { icon: "✅", text: `${subject.lessons.filter(l => getProgress(l.id)?.completed).length} completed` },
            ].map((m, i) => (
              <span key={i} style={{ fontSize: "0.78rem", color: "#6b7280" }}>{m.icon} {m.text}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Lessons */}
      {subject.lessons.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 24px", color: "#6b7280" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>📂</div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#9ca3af", marginBottom: 6 }}>No lessons yet</h3>
          <p style={{ fontSize: "0.85rem" }}>Coming soon!</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {subject.lessons.map((lesson, idx) => {
            const p = getProgress(lesson.id);
            const isDone = p?.completed;
            const qs = p?.quizScore;
            const sTotal = lesson.sections.length;
            const sDone = p?.sectionsCompleted?.length || 0;
            const sPct = Math.round((sDone / sTotal) * 100);

            return (
              <Link key={lesson.id} href={`/subject/${subjectId}/lesson/${lesson.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="lesson-row" style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "16px 18px", background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${isDone ? `${subject.color}20` : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 15, transition: "all 0.3s", cursor: "pointer",
                }}>
                  {/* Number */}
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: isDone ? subject.color : "rgba(255,255,255,0.04)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: isDone ? "0.9rem" : "0.85rem",
                    color: isDone ? "#fff" : "#6b7280", flexShrink: 0,
                    transition: "all 0.2s",
                  }}>
                    {isDone ? "✓" : idx + 1}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 3, lineHeight: 1.3 }}>{lesson.title}</h3>
                    <div style={{ display: "flex", gap: 8, fontSize: "0.72rem", color: "#6b7280", flexWrap: "wrap" }}>
                      <span>{sTotal} sections</span>
                      <span>·</span>
                      <span>{lesson.quiz.length} quiz</span>
                      {qs != null && (
                        <>
                          <span>·</span>
                          <span style={{ color: qs >= 80 ? "#34d399" : qs >= 50 ? "#facc15" : "#ef4444" }}>
                            Score: {qs}%
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Progress Ring */}
                  <div style={{ position: "relative", width: 38, height: 38, flexShrink: 0 }} className="hide-mobile">
                    <svg width="38" height="38" viewBox="0 0 38 38">
                      <circle cx="19" cy="19" r="16" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" />
                      <circle cx="19" cy="19" r="16" fill="none" stroke={subject.color} strokeWidth="2.5"
                        strokeDasharray={`${2 * Math.PI * 16}`}
                        strokeDashoffset={`${2 * Math.PI * 16 * (1 - sPct / 100)}`}
                        strokeLinecap="round" transform="rotate(-90 19 19)"
                        style={{ transition: "all 0.5s ease" }}
                      />
                    </svg>
                    <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", fontWeight: 700, color: subject.color }}>
                      {sPct}%
                    </span>
                  </div>

                  <span style={{ color: "#6b7280", fontSize: "0.9rem", flexShrink: 0, transition: "all 0.2s" }} className="arrow-icon">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <style jsx global>{`
        .lesson-row:hover {
          transform: translateX(3px);
          border-color: rgba(255,255,255,0.1) !important;
          background: rgba(255,255,255,0.035) !important;
        }
        .lesson-row:hover .arrow-icon {
          color: ${subject.color} !important;
          transform: translateX(3px);
        }
        @media (max-width: 600px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}

export default function SubjectPage({ params }: { params: Promise<{ subjectId: string }> }) {
  const { subjectId } = use(params);
  return <ClientLayout><SubjectContent subjectId={subjectId} /></ClientLayout>;
}
