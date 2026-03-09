"use client";

import ClientLayout from "@/components/ClientLayout";
import { subjects, getStudyStats, getDaysRemaining } from "@/data/subjects";
import { useProgress } from "@/context/ProgressContext";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";

function Dashboard() {
  const { getOverallProgress, progress } = useProgress();
  const { totalLessons, totalQuizQuestions } = getStudyStats();
  const { user } = useAuth();
  const overall = getOverallProgress();
  const days = getDaysRemaining();

  const quizScores = Object.values(progress).filter((p) => p.quizScore != null).map((p) => p.quizScore as number);
  const avgScore = quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0;
  const firstName = user?.user_metadata?.full_name?.split(" ")[0] || "Student";

  return (
    <div className="flex flex-1 flex-col lg:flex-row w-full min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shrink-0 shadow-sm z-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-2">
            <div className="bg-primary/10 rounded-full size-12 flex items-center justify-center overflow-hidden border border-primary/20 text-primary font-bold text-lg">
              {firstName[0]?.toUpperCase() || "S"}
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-slate-100 text-sm font-bold truncate max-w-[150px]">{user?.user_metadata?.full_name || "Guest User"}</h1>
              <p className="text-slate-500 text-xs">2BAC • English Option</p>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-[22px]">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-[22px]">book</span>
              <span className="text-sm font-medium">Courses</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-[22px]">folder_open</span>
              <span className="text-sm font-medium">Resources</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-[22px]">grade</span>
              <span className="text-sm font-medium">Grades</span>
            </Link>
          </nav>

          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-[20px]">lightbulb</span>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Top Tip</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">"Try the Pomodoro technique: 25 mins study, 5 mins break to maintain focus and maximize retention."</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">Academic Overview</h2>
            <p className="text-slate-500">Welcome back, {firstName}! Keep pushing forward.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
          </motion.div>
        </div>

        {/* Glassmorphic Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-panel flex flex-col gap-2 rounded-xl p-5 shadow-sm border-white/50 dark:border-slate-700/50">
            <div className="flex justify-between items-start">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Overall Progress</p>
              <span className="material-symbols-outlined text-primary opacity-50">trending_up</span>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-3xl font-bold">{overall.percentage}%</p>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-1">
              <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: `${overall.percentage}%` }}></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-panel flex flex-col gap-2 rounded-xl p-5 shadow-sm border-white/50 dark:border-slate-700/50">
            <div className="flex justify-between items-start">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Lessons Done</p>
              <span className="material-symbols-outlined text-primary opacity-50">school</span>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-3xl font-bold">{overall.completed} <span className="text-lg text-slate-500 font-medium">/ {totalLessons}</span></p>
            <p className="text-green-600 dark:text-green-400 text-xs font-bold flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[14px]">play_circle</span> Keep building momentum
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-panel flex flex-col gap-2 rounded-xl p-5 shadow-sm border-white/50 dark:border-slate-700/50">
            <div className="flex justify-between items-start">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Quiz Average</p>
              <span className="material-symbols-outlined text-primary opacity-50">verified</span>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-3xl font-bold">{avgScore}%</p>
            <p className="text-slate-500 text-xs mt-1">{quizScores.length} quizzes taken</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-panel flex flex-col gap-2 rounded-xl p-5 shadow-sm border-white/50 dark:border-slate-700/50">
            <div className="flex justify-between items-start">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Exam Goal</p>
              <span className="material-symbols-outlined text-primary opacity-50">flag</span>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-3xl font-bold">{days}</p>
            <p className="text-slate-500 text-xs mt-1">Days remaining to National Exam</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Courses */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 px-1 border-b border-slate-200 dark:border-slate-800 pb-2">Subject Progress</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjects.map((subject, idx) => {
                const subjectLessons = subject.lessons.map(l => progress[l.id]);
                const completed = subjectLessons.filter(p => p?.completed).length;
                const total = subject.lessons.length;
                const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

                return (
                  <motion.div
                    key={subject.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <Link href={`/subject/${subject.id}`} className="block h-full bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="size-10 rounded-lg flex items-center justify-center text-xl shadow-sm border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 group-hover:scale-110 transition-transform">
                          {subject.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">{subject.name}</h4>
                          <p className="text-xs text-slate-500">Coeff: {subject.examCoefficient} • {total} Modules</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-600 dark:text-slate-400">Mastery</span>
                          <span className="text-slate-900 dark:text-slate-100">{pct}%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${pct}%`, background: subject.gradient }}></div>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider border border-slate-200 dark:border-slate-700">
                          {total - completed} Lessons Left
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Exam Countdown & Schedule */}
          <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

              <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="material-symbols-outlined">timer</span>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">Exam Countdown</h3>
              </div>

              <div className="flex justify-center my-4">
                <CountdownTimer />
              </div>

              <p className="text-xs text-slate-500 text-center mt-6 italic bg-slate-50 dark:bg-slate-800/50 py-2 rounded-lg border border-slate-100 dark:border-slate-800">2BAC Physical Science — National Exam</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">Study Plan</h3>
                <button className="text-primary text-xs font-bold hover:underline">Revise</button>
              </div>

              <div className="space-y-5">
                <div className="relative pl-6 border-l-2 border-slate-100 dark:border-slate-800">
                  <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Math Focus</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Complete Limits section</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded">High Prio</span>
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-slate-100 dark:border-slate-800">
                  <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-900"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Physics Past Exam</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Attempt Mechanics 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <ClientLayout>
      <Dashboard />
    </ClientLayout>
  );
}
