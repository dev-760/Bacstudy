"use client";

import { use } from "react";
import ClientLayout from "@/components/ClientLayout";
import LessonView from "@/components/LessonView";
import { subjects } from "@/data/subjects";
import Link from "next/link";
import { notFound } from "next/navigation";
import AIChat from "@/components/AIChat";
import { useProgress } from "@/context/ProgressContext";

function LessonContent({ subjectId, lessonId }: { subjectId: string; lessonId: string }) {
  const subject = subjects.find((s) => s.id === subjectId);
  const { getProgress } = useProgress();
  if (!subject) return notFound();

  const lesson = subject.lessons.find((l) => l.id === lessonId);
  if (!lesson) return notFound();

  const idx = subject.lessons.findIndex((l) => l.id === lessonId);
  const progressPct = Math.round(((idx) / subject.lessons.length) * 100);

  return (
    <main className="flex-1 overflow-y-auto w-full max-w-7xl mx-auto p-4 md:p-8 relative">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 h-full relative">

        {/* Main Lesson Reader */}
        <article className="flex-1 max-w-3xl bg-white dark:bg-slate-900 p-6 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative z-10">

          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">home</span>
              Home
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link href={`/subject/${subjectId}`} className="hover:text-primary transition-colors">{subject.name}</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-slate-900 dark:text-slate-100">{lesson.title}</span>
          </nav>

          <LessonView lesson={lesson} accentColor={subject.color} gradient={subject.gradient} subjectId={subjectId} />

        </article>

        {/* Sidebar: Table of Contents & AIChat */}
        <aside className="w-full lg:w-80 shrink-0 space-y-6 flex flex-col items-start lg:sticky lg:top-4 z-10">

          {/* Course Progress Context */}
          <div className="bg-white dark:bg-slate-900 w-full p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">{subject.name}</h3>
            <div className="flex justify-between items-end mb-2">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Module {idx + 1} of {subject.lessons.length}</p>
              <span className="text-xs font-bold text-primary">{progressPct}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-4">
              <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${progressPct}%`, background: subject.gradient }}></div>
            </div>

            <div className="flex gap-2 text-xs">
              <Link href={`/subject/${subjectId}`} className="w-full text-center py-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
                Syllabus
              </Link>
            </div>
          </div>

          {/* AI Chat Appears Here */}
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
