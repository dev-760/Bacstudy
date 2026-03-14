"use client";

import { use } from "react";
import ClientLayout from "@/components/ClientLayout";
import { subjects } from "@/data/subjects";
import { nationalExams, NationalExam } from "@/data/exams";
import { useProgress } from "@/context/ProgressContext";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

function SubjectContent({ subjectId }: { subjectId: string }) {
  const subject = subjects.find((s) => s.id === subjectId);
  const { getProgress } = useProgress();
  if (!subject) return notFound();

  const lessons = subject.lessons;
  const completedCount = lessons.filter(l => getProgress(l.id)?.completed).length;
  const progressPct = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  return (
    <main className="flex-1 p-5 md:p-8 lg:p-10 max-w-7xl mx-auto w-full">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-500 mb-6">
        <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
          <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          Dashboard
        </Link>
        <span className="material-symbols-outlined text-[12px] text-slate-300 dark:text-slate-600">chevron_right</span>
        <span className="text-slate-700 dark:text-slate-300">{subject.name}</span>
      </nav>

      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-200/60 dark:border-slate-800/60"
      >
        <div className="flex items-center gap-5">
          <div
            className="size-16 md:size-[72px] rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-lg border border-white/30 dark:border-white/10 relative overflow-hidden"
            style={{ background: subject.gradient, color: '#fff' }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
            {subject.icon}
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {subject.name}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1.5 max-w-xl text-sm leading-relaxed">
              {subject.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white dark:bg-slate-900/60 p-2 pr-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm shrink-0">
          <div className="size-11 rounded-xl flex items-center justify-center font-extrabold text-base shadow-sm" style={{ background: subject.gradient, color: '#fff' }}>
            {subject.examCoefficient}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.1em]">Exam Coeff</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              {subject.examCoefficient >= 5 ? "High Priority" : "Standard"}
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">

          {/* Progress Card */}
          <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.4 }} className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.04] blur-2xl" style={{ background: subject.gradient }}></div>
            <div className="flex-1 w-full relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 mb-1">Your Progress</p>
              <div className="flex items-end gap-3 mb-3.5">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{progressPct}%</span>
                <span className="text-sm font-medium text-slate-500 pb-1">{completedCount} of {lessons.length} completed</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  className="h-full rounded-full"
                  style={{ background: subject.gradient }}
                ></motion.div>
              </div>
            </div>
            <button className="w-full md:w-auto px-6 py-3 text-white font-bold rounded-xl shadow-md transition-all active:scale-[0.97] shrink-0 whitespace-nowrap hover:shadow-lg"
              style={{ background: subject.gradient }}
            >
              {progressPct === 0 ? "Start Learning" : progressPct === 100 ? "Review All" : "Resume Course"}
            </button>
          </motion.div>

          {/* Modules List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Course Modules</h3>
              <span className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800/40 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded-lg border border-slate-200/60 dark:border-slate-700/40 uppercase tracking-wider">
                {lessons.length} Total
              </span>
            </div>

            <div className="space-y-2.5">
              {lessons.length === 0 ? (
                <div className="text-center py-14 px-6 bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 border-dashed rounded-2xl">
                  <div className="size-14 mx-auto mb-4 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl text-slate-300 dark:text-slate-600">folder_off</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">No Content Yet</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">Lessons for this subject are being prepared.</p>
                </div>
              ) : (
                lessons.map((lesson, idx) => {
                  const p = getProgress(lesson.id);
                  const isDone = p?.completed;
                  const qs = p?.quizScore;

                  return (
                    <motion.div key={lesson.id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + idx * 0.04, duration: 0.3 }}>
                      <Link href={`/subject/${subjectId}/lesson/${lesson.id}`} className="group block p-4 bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 rounded-xl hover:border-primary/30 card-hover">
                        <div className="flex items-center gap-4 relative">
                          <div className={`size-11 rounded-xl flex items-center justify-center border-2 shrink-0 transition-all duration-300 ${isDone ? 'border-emerald-200 dark:border-emerald-500/20 shadow-sm' : 'border-slate-200 dark:border-slate-700 group-hover:border-primary/30'}`}
                            style={isDone ? { background: 'linear-gradient(135deg, #34d399, #10b981)', color: '#fff' } : {}}
                          >
                            {isDone ? (
                              <span className="material-symbols-outlined text-[18px] font-bold text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                            ) : (
                              <span className="font-bold text-sm text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">{idx + 1}</span>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 className={`text-[15px] font-bold truncate transition-colors ${isDone ? 'text-slate-600 dark:text-slate-300' : 'text-slate-900 dark:text-white group-hover:text-primary'}`}>
                              {lesson.title}
                            </h4>
                            <div className="flex items-center gap-3 mt-1 flex-wrap">
                              <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                                <span className="material-symbols-outlined text-[13px]">article</span>
                                {lesson.sections.length} Sections
                              </span>
                              {lesson.quiz.length > 0 && (
                                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                                  <span className="material-symbols-outlined text-[13px]">quiz</span>
                                  {lesson.quiz.length} Questions
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-col items-end shrink-0 gap-1 ml-4 hidden sm:flex">
                            {qs != null ? (
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Score</span>
                                <span className={`px-2.5 py-0.5 rounded-lg text-[11px] font-bold ${qs >= 80 ? 'bg-emerald-50 text-emerald-600 border border-emerald-200/50 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' : qs >= 50 ? 'bg-amber-50 text-amber-600 border border-amber-200/50 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20' : 'bg-red-50 text-red-500 border border-red-200/50 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20'}`}>
                                  {qs}%
                                </span>
                              </div>
                            ) : (
                              <span className="text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                Open <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-5">
          <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm sticky top-20">
            {/* AI Guide */}
            <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 mb-4">Course AI Guide</h3>
            <div className="flex items-center gap-4 bg-gradient-to-br from-primary/[0.04] to-accent/[0.04] dark:from-primary/[0.06] dark:to-accent/[0.06] border border-primary/10 dark:border-primary/15 p-4 rounded-xl mb-4">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shrink-0 shadow-md shadow-primary/15">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">EduTutor AI</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  24/7 Academic Support
                </p>
              </div>
            </div>
            <p className="text-[13px] text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
              Stuck on a tricky concept? Your AI tutor is available inside every lesson to explain difficult formulas.
            </p>

            <hr className="border-slate-100 dark:border-slate-800/60 my-5" />

            {/* National Exams */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">National Exams</h3>
              <Link href={`/subject/${subjectId}/exams`} className="text-[11px] font-bold text-primary hover:underline underline-offset-2">View All</Link>
            </div>

            <ul className="space-y-3">
              {(nationalExams[subjectId] || []).slice(0, 3).map((exam, idx) => (
                <li key={idx} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors -mx-1 px-3.5">
                  <div className="size-8 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-primary text-[16px]">description</span>
                  </div>
                  <div className="min-w-0">
                    <a href={exam.examUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-slate-900 dark:text-white line-clamp-1 hover:text-primary transition-colors">
                      {exam.year} — {exam.session}
                    </a>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">PDF</p>
                      {exam.correctionUrl && (
                        <>
                          <span className="text-slate-200 dark:text-slate-700">•</span>
                          <a href={exam.correctionUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-emerald-500 hover:text-emerald-400 transition-colors uppercase tracking-wider">Solution</a>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}

              {(!nationalExams[subjectId] || nationalExams[subjectId].length === 0) && (
                <li className="text-sm text-slate-400 italic p-2">No past exams available yet.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SubjectPage({ params }: { params: Promise<{ subjectId: string }> }) {
  const { subjectId } = use(params);
  return <ClientLayout><SubjectContent subjectId={subjectId} /></ClientLayout>;
}
