"use client";

import { useState } from "react";
import { Lesson } from "@/data/types";
import { useProgress } from "@/context/ProgressContext";
import QuizComponent from "./QuizComponent";
import { MathContent, renderMath } from "./MathRenderer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Props {
  lesson: Lesson;
  accentColor: string;
  gradient: string;
  subjectId: string;
}

export default function LessonView({ lesson, accentColor, gradient, subjectId }: Props) {
  const [tab, setTab] = useState<"learn" | "formulas" | "quiz" | "exam">("learn");
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});
  const [section, setSection] = useState(0);
  const { markSectionCompleted, markLessonCompleted, getProgress } = useProgress();
  const prog = getProgress(lesson.id);
  const completed = prog?.sectionsCompleted || [];

  const tabs = [
    { id: "learn" as const, icon: "menu_book", label: "Reader" },
    { id: "formulas" as const, icon: "functions", label: "Formulas" },
    { id: "quiz" as const, icon: "quiz", label: "Quiz" },
    ...(lesson.examProblems && lesson.examProblems.length > 0
      ? [{ id: "exam" as const, icon: "assignment", label: "Exam" }]
      : []),
  ];

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-0 border-b border-slate-200/60 dark:border-slate-800/60 scrollbar-hide">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`relative flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-all ${
              tab === t.id
                ? "text-primary"
                : "text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            <span className="material-symbols-outlined text-[17px]" style={tab === t.id ? { fontVariationSettings: "'FILL' 1" } : {}}>{t.icon}</span>
            {t.label}
            {tab === t.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                style={{ background: accentColor }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {/* LEARN TAB */}
          {tab === "learn" && (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">{lesson.sections[section]?.title}</h2>

                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 mt-6 prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:font-bold prose-a:text-primary prose-strong:text-slate-800 dark:prose-strong:text-slate-200 prose-p:leading-[1.8] text-[15px]">
                  <MathContent html={lesson.sections[section]?.content || ""} />
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="flex-1">
                    {!completed.includes(lesson.sections[section]?.id) && (
                      <button
                        onClick={() => {
                          markSectionCompleted(lesson.id, lesson.sections[section].id);
                          if (section < lesson.sections.length - 1) setSection(section + 1);
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/15 font-bold text-sm rounded-xl transition-colors border border-emerald-200/60 dark:border-emerald-500/20"
                      >
                        <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Mark Complete
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setSection(Math.max(0, section - 1))}
                      disabled={section === 0}
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 font-semibold text-sm rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-200/80 dark:hover:bg-slate-700/40 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                    >
                      <span className="material-symbols-outlined text-[17px]">arrow_back</span> Prev
                    </button>

                    {section < lesson.sections.length - 1 ? (
                      <button
                        onClick={() => setSection(section + 1)}
                        className="flex items-center gap-1.5 px-4 py-2.5 text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow transition-all active:scale-[0.97]"
                        style={{ background: gradient }}
                      >
                        Next <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                      </button>
                    ) : (
                      !prog?.completed && completed.length === lesson.sections.length && (
                        <button
                          onClick={() => markLessonCompleted(lesson.id)}
                          className="flex items-center gap-2 px-5 py-2.5 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.97]"
                          style={{ background: gradient }}
                        >
                          <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span> Finish Lesson
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Section Index */}
              <div className="w-full md:w-52 shrink-0 order-first md:order-last">
                <div className="md:sticky md:top-24 space-y-1">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 mb-3 px-2">Contents</h3>
                  {lesson.sections.map((s, i) => {
                    const isDone = completed.includes(s.id);
                    const isCurrent = section === i;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSection(i)}
                        className={`w-full flex items-start gap-2.5 p-2.5 rounded-xl text-left transition-all text-[13px] ${isCurrent ? 'bg-primary/8 dark:bg-primary/12 text-primary font-semibold' :
                            'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/30 font-medium'
                          }`}
                      >
                        <div className={`mt-0.5 size-5 flex items-center justify-center rounded-full border-[1.5px] shrink-0 transition-all ${isDone ? 'bg-emerald-500 border-emerald-500 text-white' :
                            isCurrent ? 'border-primary text-primary' : 'border-slate-200 dark:border-slate-600 text-slate-300 dark:text-slate-600'
                          }`}>
                          {isDone ? <span className="material-symbols-outlined text-[11px] font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> : <span className="text-[9px] font-bold">{i + 1}</span>}
                        </div>
                        <span className="leading-snug">{s.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* FORMULAS TAB */}
          {tab === "formulas" && (
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">Key Formulas & Rules</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">Quick reference — memorize these for the exam!</p>

              <div className="space-y-3">
                {lesson.keyFormulas.map((f, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-slate-50/80 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800/60 rounded-xl relative overflow-hidden group hover:border-primary/20 transition-all">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r" style={{ background: gradient }}></div>
                    <div className="size-8 rounded-lg bg-white dark:bg-slate-900/60 shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center justify-center font-bold text-xs text-slate-400 dark:text-slate-500 shrink-0">
                      {i + 1}
                    </div>
                    <div className="text-slate-700 dark:text-slate-200 pt-0.5 prose prose-slate dark:prose-invert text-[15px]">
                      <MathContent html={renderMath(f)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* QUIZ TAB */}
          {tab === "quiz" && (
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">Knowledge Check</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">Test your comprehension of {lesson.title} with these {lesson.quiz.length} questions.</p>

              <QuizComponent questions={lesson.quiz} lessonId={lesson.id} accentColor={accentColor} />
            </div>
          )}

          {/* EXAM TAB */}
          {tab === "exam" && lesson.examProblems && (
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">National Exam Problems</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">Extracted from or modeled after previous Moroccan National Exams.</p>

              <div className="space-y-6">
                {lesson.examProblems.map((ep) => (
                  <div key={ep.id} className="p-6 bg-slate-50/80 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="size-8 rounded-lg bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-violet-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>assignment</span>
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-[15px]">{ep.title}</h4>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-[15px]">
                      <MathContent html={ep.problem} />
                    </div>

                    <button
                      onClick={() => setShowSolution(s => ({ ...s, [ep.id]: !s[ep.id] }))}
                      className="mt-6 flex items-center gap-2 px-4 py-2.5 bg-violet-50 text-violet-600 hover:bg-violet-100 dark:bg-violet-500/8 dark:text-violet-400 dark:hover:bg-violet-500/15 font-bold rounded-xl transition-colors border border-violet-200/60 dark:border-violet-500/20 text-sm"
                    >
                      <span className="material-symbols-outlined text-[17px]">
                        {showSolution[ep.id] ? "visibility_off" : "visibility"}
                      </span>
                      {showSolution[ep.id] ? "Hide Solution" : "Show Solution"}
                    </button>

                    <AnimatePresence>
                      {showSolution[ep.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-700/40 overflow-hidden"
                        >
                          <h5 className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 mb-4 text-sm">
                            <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Solution
                          </h5>
                          <div className="prose prose-slate dark:prose-invert max-w-none text-[15px]">
                            <MathContent html={ep.solution} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
