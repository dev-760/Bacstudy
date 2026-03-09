"use client";

import { use } from "react";
import ClientLayout from "@/components/ClientLayout";
import { subjects } from "@/data/subjects";
import { nationalExams } from "@/data/exams";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

function ExamsContent({ subjectId }: { subjectId: string }) {
    const subject = subjects.find((s) => s.id === subjectId);
    const examsList = nationalExams[subjectId] || [];

    if (!subject) return notFound();

    return (
        <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
                <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">home</span>
                    Dashboard
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link href={`/subject/${subjectId}`} className="hover:text-primary transition-colors">{subject.name}</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-slate-900 dark:text-slate-100">National Exams</span>
            </nav>

            {/* Hero Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
                <div>
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight flex items-center gap-3">
                        <span className="material-symbols-outlined text-4xl text-primary">history_edu</span>
                        {subject.name} Past Papers
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xl text-sm md:text-base">
                        Official Moroccan National Exams and Correction Schemes for the past several years. Practicing these is critical for scoring high marks.
                    </p>
                </div>
                <div className="shrink-0 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl flex items-center gap-3">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">{examsList.length}</span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Available<br />Papers</span>
                </div>
            </div>

            {examsList.length === 0 ? (
                <div className="text-center py-16 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 border-dashed rounded-2xl">
                    <div className="text-5xl mb-4 text-slate-300 dark:text-slate-700"><span className="material-symbols-outlined text-inherit text-[64px]">find_in_page</span></div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No Exams Found</h3>
                    <p className="text-sm text-slate-500 max-w-sm mx-auto">We don't have past national exam papers for this subject in the database right now.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {examsList.map((exam, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            key={i}
                            className="group bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-3">
                                    <span className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-lg ${exam.session === "Regular"
                                            ? "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                                            : "bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20"
                                        }`}>
                                        {exam.session} Session
                                    </span>
                                    <span className="text-xl font-black text-slate-300 dark:text-slate-700 group-hover:text-primary/30 transition-colors">
                                        {exam.year}
                                    </span>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 line-clamp-2">
                                    National Exam {exam.year} — {subject.name}
                                </h3>
                            </div>

                            <div className="flex items-center gap-2 mt-auto">
                                <a
                                    href={exam.examUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-2.5 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-700 transition-colors active:scale-[0.98]"
                                >
                                    <span className="material-symbols-outlined text-[18px]">download</span> Exam PDF
                                </a>

                                {exam.correctionUrl ? (
                                    <a
                                        href={exam.correctionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 py-2.5 rounded-lg text-sm font-bold border border-emerald-200 dark:border-emerald-500/20 transition-colors active:scale-[0.98]"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">fact_check</span> Solution
                                    </a>
                                ) : (
                                    <div className="flex-1 flex items-center justify-center gap-2 bg-slate-50/50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 py-2.5 rounded-lg text-sm font-bold border border-slate-100 dark:border-slate-800 cursor-not-allowed">
                                        No Solution
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </main>
    );
}

export default function SubjectExamsPage({ params }: { params: Promise<{ subjectId: string }> }) {
    const { subjectId } = use(params);
    return <ClientLayout><ExamsContent subjectId={subjectId} /></ClientLayout>;
}
