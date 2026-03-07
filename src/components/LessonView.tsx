"use client";

import { useState } from "react";
import { Lesson } from "@/data/types";
import { useProgress } from "@/context/ProgressContext";
import QuizComponent from "./QuizComponent";
import { MathContent, renderMath } from "./MathRenderer";

interface Props {
  lesson: Lesson;
  accentColor: string;
  gradient: string;
}

export default function LessonView({ lesson, accentColor, gradient }: Props) {
  const [tab, setTab] = useState<"learn" | "formulas" | "quiz" | "exam">("learn");
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});
  const [section, setSection] = useState(0);
  const { markSectionCompleted, markLessonCompleted, getProgress } = useProgress();
  const prog = getProgress(lesson.id);
  const completed = prog?.sectionsCompleted || [];

  const sectionPct = Math.round((completed.length / Math.max(1, lesson.sections.length)) * 100);

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, gap: 16 }}>
        <div>
          <h1 style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 800, letterSpacing: -0.5, marginBottom: 4, lineHeight: 1.2 }}>
            {lesson.title}
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "0.88rem" }}>{lesson.description}</p>
        </div>
        <div style={{ position: "relative", width: 50, height: 50, flexShrink: 0 }}>
          <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="21" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3.5" />
            <circle cx="25" cy="25" r="21" fill="none" stroke={accentColor} strokeWidth="3.5"
              strokeDasharray={`${2 * Math.PI * 21}`}
              strokeDashoffset={`${2 * Math.PI * 21 * (1 - sectionPct / 100)}`}
              strokeLinecap="round" transform="rotate(-90 25 25)"
              style={{ transition: "stroke-dashoffset 0.6s ease" }}
            />
          </svg>
          <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 700, color: accentColor }}>
            {sectionPct}%
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 2, marginBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.06)", overflowX: "auto" }}>
        {(["learn", "formulas", "quiz", ...(lesson.examProblems?.length ? ["exam" as const] : [])] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "10px 18px",
              borderBottom: `2px solid ${tab === t ? accentColor : "transparent"}`,
              color: tab === t ? accentColor : "#6b7280",
              fontSize: "0.85rem",
              fontWeight: 600,
              transition: "all 0.2s",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {t === "learn" ? "📖 Learn" : t === "formulas" ? "📐 Formulas" : t === "quiz" ? "✅ Quiz" : "📋 Exam"}
            {t === "quiz" && prog?.quizScore != null && (
              <span style={{ background: `${accentColor}20`, color: accentColor, padding: "1px 7px", borderRadius: 8, fontSize: "0.68rem", fontWeight: 700 }}>
                {prog.quizScore}%
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Learn Tab */}
      {tab === "learn" && (
        <div className="learn-layout">
          {/* Section Nav — scrollable on mobile */}
          <div className="section-nav">
            {lesson.sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setSection(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 10,
                  borderLeft: section === i ? `3px solid ${accentColor}` : "3px solid transparent",
                  background: section === i ? "rgba(255,255,255,0.04)" : "transparent",
                  color: section === i ? "#f0f0f5" : "#6b7280",
                  fontSize: "0.8rem",
                  fontWeight: section === i ? 600 : 400,
                  textAlign: "left",
                  width: "100%",
                  transition: "all 0.2s",
                  whiteSpace: "normal",
                }}
              >
                <span style={{
                  width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.72rem", fontWeight: 700,
                  background: completed.includes(s.id) ? accentColor : "rgba(255,255,255,0.05)",
                  color: completed.includes(s.id) ? "#fff" : "#9ca3af",
                  transition: "all 0.2s",
                }}>
                  {completed.includes(s.id) ? "✓" : i + 1}
                </span>
                <span style={{ lineHeight: 1.3 }}>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Section Content */}
          <div style={{ minWidth: 0 }}>
            <MathContent html={lesson.sections[section]?.content || ""} />
            <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
              {!completed.includes(lesson.sections[section]?.id) && (
                <button
                  onClick={() => {
                    markSectionCompleted(lesson.id, lesson.sections[section].id);
                    if (section < lesson.sections.length - 1) setSection(section + 1);
                  }}
                  style={{ padding: "11px 20px", borderRadius: 12, background: gradient, color: "#fff", fontWeight: 600, fontSize: "0.88rem", transition: "all 0.2s" }}
                >
                  ✓ Mark Complete
                </button>
              )}
              {section < lesson.sections.length - 1 && (
                <button
                  onClick={() => setSection(section + 1)}
                  style={{ padding: "11px 20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", color: "#f0f0f5", fontWeight: 600, fontSize: "0.88rem", transition: "all 0.2s" }}
                >
                  Next →
                </button>
              )}
              {section === lesson.sections.length - 1 && completed.length === lesson.sections.length && !prog?.completed && (
                <button
                  onClick={() => markLessonCompleted(lesson.id)}
                  style={{ padding: "11px 20px", borderRadius: 12, background: gradient, color: "#fff", fontWeight: 600, fontSize: "0.88rem", transition: "all 0.2s" }}
                >
                  🎉 Complete Lesson
                </button>
              )}
            </div>
          </div>

          <style jsx global>{`
            .learn-layout {
              display: grid;
              grid-template-columns: 230px 1fr;
              gap: 24px;
            }
            .section-nav {
              display: flex;
              flex-direction: column;
              gap: 3px;
              position: sticky;
              top: 76px;
              align-self: start;
              max-height: calc(100vh - 100px);
              overflow-y: auto;
            }
            @media (max-width: 768px) {
              .learn-layout {
                grid-template-columns: 1fr;
                gap: 16px;
              }
              .section-nav {
                position: static;
                flex-direction: row;
                overflow-x: auto;
                padding-bottom: 4px;
                max-height: none;
              }
              .section-nav button {
                white-space: nowrap !important;
                min-width: max-content;
                border-left: none !important;
                border-bottom: 2px solid transparent;
              }
            }
          `}</style>
        </div>
      )}

      {/* Formulas Tab */}
      {tab === "formulas" && (
        <div style={{ maxWidth: 700 }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 4 }}>Key Formulas & Rules</h2>
          <p style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: 20 }}>Quick reference — memorize these for the exam!</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {lesson.keyFormulas.map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 12,
                padding: "14px 16px", background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)", borderRadius: 13,
                transition: "all 0.2s",
              }}>
                <span style={{
                  fontWeight: 800, fontSize: "0.78rem", width: 26, height: 26,
                  borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center",
                  background: `${accentColor}15`, color: accentColor, flexShrink: 0,
                }}>
                  {i + 1}
                </span>
                <div style={{ fontSize: "0.85rem", color: "#c4c8d4", lineHeight: 1.5, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: renderMath(f) }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quiz Tab */}
      {tab === "quiz" && (
        <div style={{ maxWidth: 700 }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 4 }}>Test Your Knowledge</h2>
          <p style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: 20 }}>
            {lesson.quiz.length} questions — test your understanding
          </p>
          <QuizComponent questions={lesson.quiz} lessonId={lesson.id} accentColor={accentColor} />
        </div>
      )}

      {/* Exam Problems Tab */}
      {tab === "exam" && lesson.examProblems && (
        <div style={{ maxWidth: 700 }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 4 }}>National Exam Style Problems</h2>
          <p style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: 20 }}>Practice with exam-level problems</p>
          {lesson.examProblems.map((ep) => (
            <div key={ep.id} className="exam-problem">
              <h4>📋 {ep.title}</h4>
              <MathContent html={ep.problem} />
              <button
                onClick={() => setShowSolution(s => ({ ...s, [ep.id]: !s[ep.id] }))}
                style={{ padding: "8px 16px", borderRadius: 10, background: showSolution[ep.id] ? "rgba(52,211,153,0.1)" : "rgba(168,85,247,0.1)", border: `1px solid ${showSolution[ep.id] ? "rgba(52,211,153,0.2)" : "rgba(168,85,247,0.2)"}`, color: showSolution[ep.id] ? "#34d399" : "#a855f7", fontSize: "0.82rem", fontWeight: 600, transition: "all 0.2s", marginTop: 8 }}
              >
                {showSolution[ep.id] ? "Hide Solution" : "Show Solution"}
              </button>
              {showSolution[ep.id] && (
                <div className="exam-solution">
                  <h5>✅ Solution</h5>
                  <MathContent html={ep.solution} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
