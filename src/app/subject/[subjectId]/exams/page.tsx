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
        <main className="flex-1 p-5 md:p-8 lg:p-10 max-w-5xl mx-auto w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-500 mb-6">
                <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                    Dashboard
                </Link>
                <span className="material-symbols-outlined text-[12px] text-slate-300 dark:text-slate-600">chevron_right</span>
                <Link href={`/subject/${subjectId}`} className="hover:text-primary transition-colors">{subject.name}</Link>
                <span className="material-symbols-outlined text-[12px] text-slate-300 dark:text-slate-600">chevron_right</span>
                <span className="text-slate-700 dark:text-slate-300">National Exams</span>
            </nav>

            {/* Hero Header */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-200/60 dark:border-slate-800/60"
            >
                <div>
                    <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                        <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                        {subject.name} Past Papers
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl text-sm leading-relaxed">
                        Official Moroccan National Exams and Correction Schemes for the past several years. Practicing these is critical for scoring high marks.
                    </p>
                </div>
                <div className="shrink-0 bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-3 pr-5 rounded-2xl flex items-center gap-4 shadow-sm">
                    <div className="size-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 flex items-center justify-center">
                        <span className="text-2xl font-black text-primary">{examsList.length}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] leading-tight flex flex-col">
                        <span>Available</span>
                        <span>Papers</span>
                    </span>
                </div>
            </motion.div>

            {examsList.length === 0 ? (
                <div className="text-center py-16 px-6 bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 border-dashed rounded-2xl">
                    <div className="size-16 mx-auto mb-4 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-slate-300 dark:text-slate-600">find_in_page</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No Exams Found</h3>
                    <p className="text-sm text-slate-500 max-w-sm mx-auto">We don't have past national exam papers for this subject in the database right now.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {examsList.map((exam, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            key={i}
                            className="group bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:border-primary/30 card-hover flex flex-col justify-between h-full relative overflow-hidden"
                        >
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/[0.03] rounded-full blur-2xl group-hover:bg-primary/[0.06] transition-colors"></div>

                            <div>
                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <span className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-lg border ${exam.session === "Regular"
                                            ? "bg-slate-50 text-slate-600 border-slate-200/60 dark:bg-slate-800/50 dark:text-slate-300 dark:border-slate-700/50"
                                            : "bg-amber-50 text-amber-600 border-amber-200/60 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20"
                                        }`}>
                                        {exam.session} Session
                                    </span>
                                    <span className="text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-primary/20 transition-colors">
                                        {exam.year}
                                    </span>
                                </div>
                                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-6 leading-snug relative z-10">
                                    National Exam {exam.year} — {subject.name}
                                </h3>
                            </div>

                            <div className="flex items-center gap-3 mt-auto relative z-10">
                                <a
                                    href={exam.examUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100/80 dark:bg-slate-800/40 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-300 py-3 rounded-xl text-[13px] font-bold border border-slate-200/60 dark:border-slate-700/50 transition-all active:scale-[0.98]"
                                >
                                    <span className="material-symbols-outlined text-[18px]">download</span> PDF
                                </a>

                                {exam.correctionUrl ? (
                                    <a
                                        href={exam.correctionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100/80 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 py-3 rounded-xl text-[13px] font-bold border border-emerald-200/60 dark:border-emerald-500/20 transition-all active:scale-[0.98]"
                                    >
                                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>fact_check</span> Solution
                                    </a>
                                ) : (
                                    <div className="flex-1 flex items-center justify-center gap-2 bg-slate-50/50 dark:bg-slate-800/20 text-slate-400 dark:text-slate-600 py-3 rounded-xl text-[13px] font-bold border border-slate-100 dark:border-slate-800/50 cursor-not-allowed">
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
