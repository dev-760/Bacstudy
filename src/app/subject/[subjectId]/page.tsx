"use client";

import { use } from "react";
import ClientLayout from "@/components/ClientLayout";
import { subjects } from "@/data/subjects";
import { nationalExams, NationalExam } from "@/data/exams";
import { useProgress } from "@/context/ProgressContext";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

function SubjectContent({ subjectId }: { subjectId: string }) {
  const subject = subjects.find((s) => s.id === subjectId);
  const { getProgress } = useProgress();
  if (!subject) return notFound();

  const lessons = subject.lessons;
  const completedCount = lessons.filter(l => getProgress(l.id)?.completed).length;
  const progressPct = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  return (
    <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
        <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">home</span>
          Dashboard
        </Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span>Subjects</span>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-slate-900 dark:text-slate-100">{subject.name}</span>
      </nav>

      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-5">
          <div
            className="size-16 md:size-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-md border border-white/20"
            style={{ background: subject.gradient, color: '#fff' }}
          >
            {subject.icon}
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {subject.name}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1 max-w-xl text-sm md:text-base">
              {subject.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-2 pr-4 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
          <div className="size-10 rounded-full flex items-center justify-center bg-primary/10 text-primary font-bold">
            {subject.examCoefficient}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Exam Coeff</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">High Priority</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Progress & Modules */}
        <div className="lg:col-span-2 space-y-8">

          {/* Progress Card */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="flex-1 w-full">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Your Progress</h3>
              <div className="flex items-end gap-3 mb-3">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">{progressPct}%</span>
                <span className="text-sm font-medium text-slate-500 pb-1">{completedCount} of {lessons.length} lessons completed</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700/50">
                <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${progressPct}%`, background: subject.gradient }}></div>
              </div>
            </div>
            <button className="w-full md:w-auto px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-md transition-transform active:scale-95 shrink-0 whitespace-nowrap">
              {progressPct === 0 ? "Start Learning" : progressPct === 100 ? "Review All" : "Resume Course"}
            </button>
          </motion.div>

          {/* Chapters List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Course Modules</h3>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-full border border-slate-200 dark:border-slate-700">
                {lessons.length} Total
              </span>
            </div>

            <div className="space-y-3">
              {lessons.length === 0 ? (
                <div className="text-center py-12 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 border-dashed rounded-2xl">
                  <div className="text-4xl mb-4">📂</div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">No Content Yet</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">Lessons for this subject are currently being prepared. Check back later.</p>
                </div>
              ) : (
                lessons.map((lesson, idx) => {
                  const p = getProgress(lesson.id);
                  const isDone = p?.completed;
                  const qs = p?.quizScore;

                  return (
                    <motion.div key={lesson.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                      <Link href={`/subject/${subjectId}/lesson/${lesson.id}`} className="group block p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 hover:shadow-md transition-all">
                        <div className="flex items-center gap-4 relative">
                          {/* Status Icon */}
                          <div className={`size-12 rounded-full flex items-center justify-center border-2 shrink-0 transition-colors ${isDone ? 'bg-emerald-50 border-emerald-200 text-emerald-500 dark:bg-emerald-500/10 dark:border-emerald-500/20' : 'bg-slate-50 border-slate-200 text-slate-400 dark:bg-slate-800 dark:border-slate-700'}`}>
                            {isDone ? <span className="material-symbols-outlined font-bold">check</span> : <span className="font-bold text-sm">{idx + 1}</span>}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className={`text-base font-bold truncate transition-colors ${isDone ? 'text-slate-700 dark:text-slate-300' : 'text-slate-900 dark:text-white group-hover:text-primary'}`}>
                              {lesson.title}
                            </h4>
                            <div className="flex items-center gap-3 mt-1 flex-wrap">
                              <span className="text-xs text-slate-500 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">article</span>
                                {lesson.sections.length} Sections
                              </span>
                              {lesson.quiz.length > 0 && (
                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[14px]">quiz</span>
                                  {lesson.quiz.length} Questions
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Quiz Score / Action */}
                          <div className="flex flex-col items-end shrink-0 gap-1 ml-4 hidden sm:flex">
                            {qs != null ? (
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-slate-500">Quiz Score</span>
                                <span className={`px-2 py-0.5 rounded text-xs font-bold ${qs >= 80 ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : qs >= 50 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                                  {qs}%
                                </span>
                              </div>
                            ) : (
                              <span className="text-xs font-bold text-primary group-hover:underline">Start Lesson</span>
                            )}
                          </div>

                          <div className="sm:hidden text-slate-400">
                            <span className="material-symbols-outlined">chevron_right</span>
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

        {/* Right Column: Sidebar */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-5">Course AI Guide</h3>
            <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 rounded-xl mb-4">
              <div className="size-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shrink-0 shadow-md">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">EduTutor AI</h4>
                <p className="text-xs text-slate-500 mt-0.5">24/7 Academic Support</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
              Stuck on a tricky concept? Your AI tutor is available inside every lesson to explain difficult formulas or provide extra examples.
            </p>

            <hr className="border-slate-200 dark:border-slate-800 my-5" />

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">National Exams</h3>
              <Link href={`/subject/${subjectId}/exams`} className="text-xs font-bold text-primary hover:underline">View All</Link>
            </div>

            <ul className="space-y-3">
              {(nationalExams[subjectId] || []).slice(0, 3).map((exam, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0">history_edu</span>
                  <div>
                    <a href={exam.examUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-1 hover:text-primary transition-colors">
                      {exam.year} — {exam.session} Session
                    </a>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-xs text-slate-500">PDF Document</p>
                      {exam.correctionUrl && (
                        <>
                          <span className="text-slate-300 dark:text-slate-700">•</span>
                          <a href={exam.correctionUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-emerald-600 hover:text-emerald-500 transition-colors uppercase tracking-wider">Solution</a>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}

              {(!nationalExams[subjectId] || nationalExams[subjectId].length === 0) && (
                <li className="text-sm text-slate-500 italic">No past exams available yet.</li>
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
