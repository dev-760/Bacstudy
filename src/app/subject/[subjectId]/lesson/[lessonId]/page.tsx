"use client";

import { use } from "react";
import ClientLayout from "@/components/ClientLayout";
import LessonView from "@/components/LessonView";
import { subjects } from "@/data/subjects";
import Link from "next/link";
import { notFound } from "next/navigation";
import AIChat from "@/components/AIChat";
import { useProgress } from "@/context/ProgressContext";
import { motion } from "framer-motion";

function LessonContent({ subjectId, lessonId }: { subjectId: string; lessonId: string }) {
  const subject = subjects.find((s) => s.id === subjectId);
  const { getProgress } = useProgress();
  if (!subject) return notFound();

  const lesson = subject.lessons.find((l) => l.id === lessonId);
  if (!lesson) return notFound();

  const idx = subject.lessons.findIndex((l) => l.id === lessonId);
  const progressPct = Math.round(((idx) / subject.lessons.length) * 100);

  return (
    <main className="flex-1 overflow-y-auto w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 relative">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-full relative">

        {/* Main Lesson Reader */}
        <article className="flex-1 max-w-3xl bg-white dark:bg-slate-900/60 p-5 md:p-8 lg:p-10 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm relative z-10">

          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-7 pb-4 border-b border-slate-100 dark:border-slate-800/60">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
              Home
            </Link>
            <span className="material-symbols-outlined text-[11px] text-slate-300 dark:text-slate-600">chevron_right</span>
            <Link href={`/subject/${subjectId}`} className="hover:text-primary transition-colors">{subject.name}</Link>
            <span className="material-symbols-outlined text-[11px] text-slate-300 dark:text-slate-600">chevron_right</span>
            <span className="text-slate-700 dark:text-slate-300 truncate max-w-[200px]">{lesson.title}</span>
          </nav>

          <LessonView lesson={lesson} accentColor={subject.color} gradient={subject.gradient} subjectId={subjectId} />

        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 shrink-0 space-y-5 flex flex-col items-start lg:sticky lg:top-4 z-10">

          {/* Course Progress */}
          <div className="bg-white dark:bg-slate-900/60 w-full p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="size-7 rounded-lg flex items-center justify-center shadow-sm text-xs text-white font-bold" style={{ background: subject.gradient }}>
                {subject.icon}
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">{subject.name}</h3>
            </div>
            <div className="flex justify-between items-end mb-2.5">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Module {idx + 1} of {subject.lessons.length}</p>
              <span className="text-xs font-bold" style={{ color: subject.color }}>{progressPct}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="h-full rounded-full"
                style={{ background: subject.gradient }}
              ></motion.div>
            </div>

            <Link href={`/subject/${subjectId}`} className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/40 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold text-xs rounded-xl transition-colors border border-slate-200/60 dark:border-slate-700/40">
              <span className="material-symbols-outlined text-[14px]">list</span>
              View Syllabus
            </Link>
          </div>

          {/* AI Chat */}
          <div className="w-full flex-1 min-h-[400px] flex flex-col">
            <AIChat
              lessonTitle={lesson.title}
              context={`Subject: ${subject.name}. Lesson: ${lesson.title} - ${lesson.description}. Key formulas: ${lesson.keyFormulas.slice(0, 3).join("; ")}`}
              accentColor={subject.color}
            />
          </div>

        </aside>
      </div>
    </main>
  );
}

export default function LessonPage({ params }: { params: Promise<{ subjectId: string; lessonId: string }> }) {
  const { subjectId, lessonId } = use(params);
  return <ClientLayout><LessonContent subjectId={subjectId} lessonId={lessonId} /></ClientLayout>;
}
