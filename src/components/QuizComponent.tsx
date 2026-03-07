"use client";

import { useState, useCallback } from "react";
import { QuizQuestion } from "@/data/types";
import { useProgress } from "@/context/ProgressContext";
import { renderMath } from "./MathRenderer";

interface Props {
    questions: QuizQuestion[];
    lessonId: string;
    accentColor: string;
}

export default function QuizComponent({ questions, lessonId, accentColor }: Props) {
    const [cur, setCur] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [revealed, setRevealed] = useState(false);
    const [score, setScore] = useState(0);
    const [done, setDone] = useState(false);
    const { saveQuizScore } = useProgress();
    const [aiHelp, setAiHelp] = useState<string | null>(null);
    const [aiLoading, setAiLoading] = useState(false);

    const q = questions[cur];

    const pick = useCallback((i: number) => {
        if (revealed) return;
        setSelected(i);
        setRevealed(true);
        if (i === q.correctAnswer) setScore((s) => s + 1);
    }, [revealed, q]);

    const next = useCallback(() => {
        if (cur < questions.length - 1) {
            setCur((c) => c + 1);
            setSelected(null);
            setRevealed(false);
            setAiHelp(null);
        } else {
            const pct = Math.round((score / questions.length) * 100);
            saveQuizScore(lessonId, pct);
            setDone(true);
        }
    }, [cur, questions.length, score, lessonId, saveQuizScore]);

    const restart = useCallback(() => {
        setCur(0);
        setSelected(null);
        setRevealed(false);
        setScore(0);
        setDone(false);
    }, []);

    if (done) {
        const pct = Math.round((score / questions.length) * 100);
        const emoji = pct >= 80 ? "🎉" : pct >= 60 ? "💪" : pct >= 40 ? "📚" : "🔄";
        return (
            <div style={{ textAlign: "center", padding: "48px 24px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20 }}>
                <div style={{ fontSize: "3.5rem", marginBottom: 12 }}>{emoji}</div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8 }}>
                    {pct >= 80 ? "Excellent!" : pct >= 60 ? "Good job!" : pct >= 40 ? "Keep studying!" : "Review the lesson!"}
                </h3>
                <div style={{ marginBottom: 20 }}>
                    <span style={{ fontSize: "2.2rem", fontWeight: 800, color: accentColor }}>{score}/{questions.length}</span>
                    <span style={{ fontSize: "0.9rem", color: "#9ca3af", marginLeft: 8 }}>({pct}%)</span>
                </div>
                <button
                    onClick={restart}
                    style={{ padding: "12px 28px", borderRadius: 12, background: accentColor, color: "#fff", fontWeight: 600, fontSize: "0.95rem", transition: "all 0.2s" }}
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: "28px 24px" }}>
            {/* Progress */}
            <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: "0.78rem", color: "#6b7280", marginBottom: 6, fontWeight: 500 }}>
                    Question {cur + 1} of {questions.length}
                </div>
                <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ height: "100%", borderRadius: 2, width: `${((cur + 1) / questions.length) * 100}%`, background: accentColor, transition: "width 0.4s ease" }} />
                </div>
            </div>

            {/* Question */}
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 20, lineHeight: 1.5 }}
                dangerouslySetInnerHTML={{ __html: renderMath(q.question) }}
            />

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                {q.options.map((opt, i) => {
                    const isCorrect = i === q.correctAnswer;
                    const isSelected = i === selected;
                    let bg = "rgba(255,255,255,0.02)";
                    let border = "rgba(255,255,255,0.08)";
                    let letterBg = "rgba(255,255,255,0.06)";
                    let letterColor = "#9ca3af";

                    if (revealed && isCorrect) {
                        bg = "rgba(52,211,153,0.08)";
                        border = "#34d399";
                        letterBg = "rgba(52,211,153,0.15)";
                        letterColor = "#34d399";
                    } else if (revealed && isSelected && !isCorrect) {
                        bg = "rgba(239,68,68,0.08)";
                        border = "#ef4444";
                        letterBg = "rgba(239,68,68,0.15)";
                        letterColor = "#ef4444";
                    }

                    return (
                        <button
                            key={i}
                            onClick={() => pick(i)}
                            disabled={revealed}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "13px 16px",
                                border: `1px solid ${border}`,
                                borderRadius: 13,
                                background: bg,
                                color: "#f0f0f5",
                                fontSize: "0.9rem",
                                cursor: revealed ? "default" : "pointer",
                                transition: "all 0.2s",
                                textAlign: "left",
                                width: "100%",
                            }}
                        >
                            <span style={{
                                width: 30, height: 30, borderRadius: 8,
                                background: letterBg, display: "flex", alignItems: "center", justifyContent: "center",
                                fontWeight: 700, fontSize: "0.8rem", flexShrink: 0, color: letterColor,
                                transition: "all 0.2s",
                            }}>
                                {String.fromCharCode(65 + i)}
                            </span>
                            <span style={{ flex: 1 }} dangerouslySetInnerHTML={{ __html: renderMath(opt) }} />
                            {revealed && isCorrect && <span style={{ color: "#34d399", fontWeight: 700, fontSize: "1.1rem" }}>✓</span>}
                            {revealed && isSelected && !isCorrect && <span style={{ color: "#ef4444", fontWeight: 700, fontSize: "1.1rem" }}>✗</span>}
                        </button>
                    );
                })}
            </div>

            {/* Explanation */}
            {revealed && (
                <div style={{
                    display: "flex", gap: 10, padding: "14px 16px",
                    background: "rgba(79,140,247,0.05)", border: "1px solid rgba(79,140,247,0.12)",
                    borderRadius: 13, marginBottom: 16, fontSize: "0.86rem", lineHeight: 1.6, color: "#b4bcc8",
                }}>
                    <span style={{ flexShrink: 0, fontSize: "1rem" }}>💡</span>
                    <p style={{ margin: 0 }}>{q.explanation}</p>
                </div>
            )}

            {/* AI Help Button */}
            {revealed && selected !== q.correctAnswer && (
                <div style={{ marginBottom: 16 }}>
                    {!aiHelp && !aiLoading && (
                        <button onClick={async () => {
                            setAiLoading(true);
                            try {
                                const res = await fetch("/api/ai", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({
                                        messages: [{ role: "user", content: `I got this quiz question wrong. Question: "${q.question}". I chose "${q.options[selected!]}" but the correct answer is "${q.options[q.correctAnswer]}". The explanation says: "${q.explanation}". Please explain this concept more clearly and give me a memory trick to remember it.` }],
                                        mode: "quiz-help",
                                    }),
                                });
                                const data = await res.json();
                                setAiHelp(data.reply || "Could not get AI help.");
                            } catch { setAiHelp("Connection error."); }
                            setAiLoading(false);
                        }} style={{
                            padding: "10px 16px", borderRadius: 12, fontSize: "0.82rem", fontWeight: 600,
                            background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(79,140,247,0.1))",
                            border: "1px solid rgba(168,85,247,0.2)", color: "#a855f7", cursor: "pointer",
                            display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s",
                        }}>
                            🤖 Ask AI to Explain
                        </button>
                    )}
                    {aiLoading && (
                        <div style={{ padding: "12px 16px", borderRadius: 12, background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.1)", fontSize: "0.82rem", color: "#a855f7" }}>
                            🤖 AI is thinking...
                        </div>
                    )}
                    {aiHelp && (
                        <div style={{ padding: "14px 16px", borderRadius: 13, background: "rgba(168,85,247,0.04)", border: "1px solid rgba(168,85,247,0.1)", fontSize: "0.84rem", lineHeight: 1.6, color: "#c4c8d4" }}>
                            <div style={{ fontWeight: 700, color: "#a855f7", fontSize: "0.78rem", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>🤖 AI Explanation</div>
                            <div className="lesson-html" dangerouslySetInnerHTML={{ __html: renderMath(aiHelp.replace(/\n/g, "<br/>")) }} />
                        </div>
                    )}
                </div>
            )}

            {/* Next */}
            {revealed && (
                <button onClick={next} style={{
                    display: "block", width: "100%", padding: "13px",
                    borderRadius: 13, background: accentColor, color: "#fff",
                    fontWeight: 600, fontSize: "0.95rem", transition: "all 0.2s",
                }}>
                    {cur < questions.length - 1 ? "Next Question →" : "See Results"}
                </button>
            )}
        </div>
    );
}
