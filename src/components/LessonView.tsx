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

  const handleTabChange = (newTab: "learn" | "formulas" | "quiz" | "exam") => {
    setTab(newTab);
  };

  const getTabClass = (currentTab: string) => {
    if (tab === currentTab) {
      return "px-4 py-2 text-sm font-bold text-primary border-b-2 border-primary whitespace-nowrap transition-colors";
    }
    return "px-4 py-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 border-b-2 border-transparent transition-colors whitespace-nowrap";
  };

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 md:gap-4 mb-8 overflow-x-auto pb-0 border-b border-slate-200 dark:border-slate-800 scrollbar-hide">
        <button onClick={() => handleTabChange("learn")} className={getTabClass("learn")}>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">menu_book</span> Reader</span>
        </button>
        <button onClick={() => handleTabChange("formulas")} className={getTabClass("formulas")}>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">functions</span> Formulas</span>
        </button>
        <button onClick={() => handleTabChange("quiz")} className={getTabClass("quiz")}>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">quiz</span> Quiz Practice</span>
        </button>
        {lesson.examProblems && lesson.examProblems.length > 0 && (
          <button onClick={() => handleTabChange("exam")} className={getTabClass("exam")}>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">assignment</span> Exam Problems</span>
          </button>
        )}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {/* LEARN TAB */}
          {tab === "learn" && (
            <div className="flex flex-col md:flex-row gap-8">
              {/* Content Reader */}
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{lesson.sections[section]?.title}</h2>

                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 mt-6 prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-primary">
                  <MathContent html={lesson.sections[section]?.content || ""} />
                </div>

                {/* Pagination / Actions */}
                <div className="flex flex-wrap items-center gap-4 mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex-1">
                    {!completed.includes(lesson.sections[section]?.id) && (
                      <button
                        onClick={() => {
                          markSectionCompleted(lesson.id, lesson.sections[section].id);
                          if (section < lesson.sections.length - 1) setSection(section + 1);
                        }}
                        className="flex items-center gap-2 px-6 py-2.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20 font-bold rounded-lg transition-colors border border-emerald-200 dark:border-emerald-500/20"
                      >
                        <span className="material-symbols-outlined text-[18px]">check_circle</span> Mark Section Complete
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSection(Math.max(0, section - 1))}
                      disabled={section === 0}
                      className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      <span className="material-symbols-outlined text-[18px]">arrow_back</span> Prev
                    </button>

                    {section < lesson.sections.length - 1 ? (
                      <button
                        onClick={() => setSection(section + 1)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-bold rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                      >
                        Next <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </button>
                    ) : (
                      !prog?.completed && completed.length === lesson.sections.length && (
                        <button
                          onClick={() => markLessonCompleted(lesson.id)}
                          className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary/90 transition-transform active:scale-95"
                        >
                          <span className="material-symbols-outlined text-[18px]">workspace_premium</span> Finish Lesson
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Section Index (Sidebar on Desktop) */}
              <div className="w-full md:w-56 shrink-0 order-first md:order-last">
                <div className="md:sticky md:top-24 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 px-2">Table of Contents</h3>
                  {lesson.sections.map((s, i) => {
                    const isDone = completed.includes(s.id);
                    const isCurrent = section === i;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSection(i)}
                        className={`w-full flex items-start gap-3 p-2.5 rounded-lg text-left transition-colors font-medium text-sm ${isCurrent ? 'bg-primary/10 text-primary dark:bg-primary/20' :
                            'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                      >
                        <div className={`mt-0.5 size-5 flex items-center justify-center rounded-full border shrink-0 ${isDone ? 'bg-emerald-500 border-emerald-500 text-white' :
                            isCurrent ? 'border-primary text-primary' : 'border-slate-300 dark:border-slate-600 text-slate-400'
                          }`}>
                          {isDone ? <span className="material-symbols-outlined text-[12px] font-bold">check</span> : <span className="text-[10px]">{i + 1}</span>}
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
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Key Formulas & Rules</h2>
              <p className="text-slate-500 mb-8">Quick reference — memorize these for the exam! These are the essential rules extracted from this module.</p>

              <div className="space-y-4">
                {lesson.keyFormulas.map((f, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl relative overflow-hidden group hover:border-primary/30 transition-colors">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                    <div className="size-8 rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center font-bold text-slate-500 shrink-0">
                      {i + 1}
                    </div>
                    <div className="text-slate-800 dark:text-slate-200 pt-1 prose prose-slate dark:prose-invert">
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
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Knowledge Check</h2>
              <p className="text-slate-500 mb-8">Test your comprehension of {lesson.title} with these {lesson.quiz.length} questions.</p>

              <QuizComponent questions={lesson.quiz} lessonId={lesson.id} accentColor={accentColor} />
            </div>
          )}

          {/* EXAM TAB */}
          {tab === "exam" && lesson.examProblems && (
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">National Exam Problems</h2>
              <p className="text-slate-500 mb-8">These problems are extracted directly from or modeled after previous Moroccan National Exams.</p>

              <div className="space-y-8">
                {lesson.examProblems.map((ep) => (
                  <div key={ep.id} className="p-6 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-purple-500">assignment</span>
                      <h4 className="font-bold text-slate-900 dark:text-white">{ep.title}</h4>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                      <MathContent html={ep.problem} />
                    </div>

                    <button
                      onClick={() => setShowSolution(s => ({ ...s, [ep.id]: !s[ep.id] }))}
                      className="mt-6 flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:hover:bg-purple-500/20 font-bold rounded-lg transition-colors border border-purple-200 dark:border-purple-500/30 text-sm"
                    >
                      <span className="material-symbols-outlined text-[18px]">
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
                          className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 overflow-hidden"
                        >
                          <h5 className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                            <span className="material-symbols-outlined text-[18px]">check_circle</span> Solution
                          </h5>
                          <div className="prose prose-slate dark:prose-invert max-w-none">
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
