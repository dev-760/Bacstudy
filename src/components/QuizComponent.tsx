"use client";

import { useState, useCallback } from "react";
import { QuizQuestion } from "@/data/types";
import { useProgress } from "@/context/ProgressContext";
import { renderMath } from "./MathRenderer";
import { motion, AnimatePresence } from "framer-motion";

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
        setAiHelp(null);
    }, []);

    if (done) {
        const pct = Math.round((score / questions.length) * 100);
        const emoji = pct >= 80 ? "🎉" : pct >= 60 ? "💪" : pct >= 40 ? "📚" : "🔄";
        const message = pct >= 80 ? "Excellent work!" : pct >= 60 ? "Good job!" : pct >= 40 ? "Keep studying!" : "Review the lesson!";

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-6 bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl"
            >
                <div className="text-5xl mb-4">{emoji}</div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">{message}</h3>
                <div className="mb-6">
                    <span className="text-4xl font-extrabold" style={{ color: accentColor }}>{score}/{questions.length}</span>
                    <span className="text-sm text-slate-400 ml-2 font-medium">({pct}%)</span>
                </div>
                <button
                    onClick={restart}
                    className="px-6 py-3 rounded-xl text-white font-bold text-sm transition-all active:scale-[0.97] shadow-md hover:shadow-lg"
                    style={{ background: accentColor }}
                >
                    Try Again
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6">
            {/* Progress */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Question {cur + 1} of {questions.length}
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">{Math.round(((cur + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full rounded-full"
                        style={{ background: accentColor }}
                        animate={{ width: `${((cur + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                </div>
            </div>

            {/* Question */}
            <h3
                className="text-[16px] font-bold text-slate-900 dark:text-white mb-6 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderMath(q.question) }}
            />

            {/* Options */}
            <div className="flex flex-col gap-2.5 mb-5">
                {q.options.map((opt, i) => {
                    const isCorrect = i === q.correctAnswer;
                    const isSelected = i === selected;

                    let classes = "bg-slate-50/80 dark:bg-slate-800/30 border-slate-200/60 dark:border-slate-700/40 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100/80 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300";
                    let letterClasses = "bg-slate-100 dark:bg-slate-700/50 text-slate-400 dark:text-slate-500";

                    if (revealed && isCorrect) {
                        classes = "bg-emerald-50 dark:bg-emerald-500/8 border-emerald-300 dark:border-emerald-500/30 text-slate-900 dark:text-white";
                        letterClasses = "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400";
                    } else if (revealed && isSelected && !isCorrect) {
                        classes = "bg-red-50 dark:bg-red-500/8 border-red-300 dark:border-red-500/30 text-slate-900 dark:text-white";
                        letterClasses = "bg-red-100 dark:bg-red-500/20 text-red-500 dark:text-red-400";
                    }

                    return (
                        <button
                            key={i}
                            onClick={() => pick(i)}
                            disabled={revealed}
                            className={`flex items-center gap-3 p-3.5 border rounded-xl text-left w-full transition-all ${classes} ${!revealed ? 'cursor-pointer active:scale-[0.99]' : 'cursor-default'}`}
                        >
                            <span className={`size-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-all ${letterClasses}`}>
                                {String.fromCharCode(65 + i)}
                            </span>
                            <span className="flex-1 text-[14px] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: renderMath(opt) }} />
                            {revealed && isCorrect && <span className="material-symbols-outlined text-emerald-500 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>}
                            {revealed && isSelected && !isCorrect && <span className="material-symbols-outlined text-red-500 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>}
                        </button>
                    );
                })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
                {revealed && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="flex gap-3 p-4 bg-primary/[0.04] dark:bg-primary/[0.06] border border-primary/10 dark:border-primary/15 rounded-xl mb-4 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                            <span className="shrink-0 text-base mt-0.5">💡</span>
                            <p className="m-0">{q.explanation}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* AI Help */}
            {revealed && selected !== q.correctAnswer && (
                <div className="mb-4">
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
                        }} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-violet-500/8 to-primary/8 dark:from-violet-500/10 dark:to-primary/10 border border-violet-200/60 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 hover:from-violet-500/12 hover:to-primary/12 transition-all">
                            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                            Ask AI to Explain
                        </button>
                    )}
                    {aiLoading && (
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-violet-50 dark:bg-violet-500/5 border border-violet-200/40 dark:border-violet-500/10 text-sm font-medium text-violet-600 dark:text-violet-400">
                            <div className="size-4 border-2 border-violet-300 border-t-violet-600 rounded-full animate-spin"></div>
                            AI is thinking...
                        </div>
                    )}
                    {aiHelp && (
                        <div className="p-4 rounded-xl bg-violet-50/50 dark:bg-violet-500/5 border border-violet-200/40 dark:border-violet-500/10 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                            <div className="font-bold text-violet-600 dark:text-violet-400 text-xs mb-3 flex items-center gap-2 uppercase tracking-wider">
                                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span> AI Explanation
                            </div>
                            <div className="lesson-html" dangerouslySetInnerHTML={{ __html: renderMath(aiHelp.replace(/\n/g, "<br/>")) }} />
                        </div>
                    )}
                </div>
            )}

            {/* Next Button */}
            {revealed && (
                <motion.button
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={next}
                    className="block w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all active:scale-[0.99] shadow-md hover:shadow-lg"
                    style={{ background: accentColor }}
                >
                    {cur < questions.length - 1 ? "Next Question →" : "See Results"}
                </motion.button>
            )}
        </div>
    );
}
