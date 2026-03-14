"use client";

import ClientLayout from "@/components/ClientLayout";
import { subjects, getStudyStats, getDaysRemaining } from "@/data/subjects";
import { useProgress } from "@/context/ProgressContext";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

function StatCard({ label, value, suffix, icon, description, delay, gradient }: {
  label: string; value: string | number; suffix?: string; icon: string; description?: string; delay: number; gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-card card-hover rounded-2xl p-5 relative overflow-hidden group"
    >
      <div className={`absolute -top-8 -right-8 size-24 rounded-full bg-gradient-to-br ${gradient} opacity-[0.06] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-500`}></div>
      <div className="flex justify-between items-start relative z-10">
        <p className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-[0.12em]">{label}</p>
        <div className={`size-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm`}>
          <span className="material-symbols-outlined text-white text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        </div>
      </div>
      <div className="mt-3 relative z-10">
        <p className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight">
          {value}{suffix && <span className="text-lg text-slate-400 dark:text-slate-500 font-semibold ml-1">{suffix}</span>}
        </p>
        {description && <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 font-medium">{description}</p>}
      </div>
    </motion.div>
  );
}

function Dashboard() {
  const { getOverallProgress, progress } = useProgress();
  const { totalLessons, totalQuizQuestions } = getStudyStats();
  const { user } = useAuth();
  const overall = getOverallProgress();
  const days = getDaysRemaining();

  const quizScores = Object.values(progress).filter((p) => p.quizScore != null).map((p) => p.quizScore as number);
  const avgScore = quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0;
  const firstName = user?.user_metadata?.full_name?.split(" ")[0] || "Student";

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="flex flex-1 flex-col lg:flex-row w-full min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-[260px] flex flex-col border-r border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#0f1117]/50 backdrop-blur-xl p-4 shrink-0 z-10">
        <div className="flex flex-col gap-5">
          {/* User Card */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800/50">
            <div className="bg-gradient-to-br from-primary to-accent rounded-xl size-11 flex items-center justify-center text-white font-bold text-base shadow-md shadow-primary/15">
              {firstName[0]?.toUpperCase() || "S"}
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-slate-900 dark:text-white text-sm font-bold truncate">{user?.user_metadata?.full_name || "Guest User"}</h1>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium">2BAC • Physical Science</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-0.5">
            <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/10 dark:bg-primary/15 text-primary font-semibold transition-all relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
              <span className="text-[13px]">Dashboard</span>
            </Link>
            {[
              { href: "#", icon: "auto_stories", label: "Courses" },
              { href: "#", icon: "folder_open", label: "Resources" },
              { href: "#", icon: "leaderboard", label: "Progress" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-white transition-all">
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="text-[13px] font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Study Tip */}
          <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/[0.04] to-accent/[0.04] dark:from-primary/[0.06] dark:to-accent/[0.06] border border-primary/10 dark:border-primary/15">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="size-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>tips_and_updates</span>
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.1em]">Study Tip</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">"Use the Pomodoro technique: 25 mins of focused study, then a 5-minute break. This maximizes retention."</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 md:p-8 overflow-y-auto">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <motion.div {...fadeUp} transition={{ duration: 0.4 }}>
            <h2 className="text-2xl md:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {getTimeOfDay()}, <span className="text-gradient">{firstName}</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">Here's your academic progress overview.</p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.1 }} className="flex items-center gap-2.5 bg-white dark:bg-slate-800/60 px-4 py-2 rounded-xl border border-slate-200/60 dark:border-slate-700/40 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
            <span className="text-[13px] font-semibold text-slate-600 dark:text-slate-300">{new Date().toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })}</span>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard label="Overall Progress" value={overall.percentage} suffix="%" icon="trending_up" delay={0.1} gradient="from-blue-500 to-cyan-400">
          </StatCard>
          <StatCard label="Lessons Done" value={overall.completed} suffix={`/ ${totalLessons}`} icon="school" description="Keep building momentum" delay={0.15} gradient="from-emerald-500 to-teal-400" />
          <StatCard label="Quiz Average" value={`${avgScore}%`} icon="verified" description={`${quizScores.length} quizzes taken`} delay={0.2} gradient="from-violet-500 to-purple-400" />
          <StatCard label="Exam Countdown" value={days} suffix="days" icon="flag" description="Until the National Exam" delay={0.25} gradient="from-amber-500 to-orange-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Subject Progress */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Subject Progress</h3>
              <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{subjects.length} Subjects</span>
            </div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3.5" variants={stagger} initial="initial" animate="animate">
              {subjects.map((subject, idx) => {
                const subjectLessons = subject.lessons.map(l => progress[l.id]);
                const completed = subjectLessons.filter(p => p?.completed).length;
                const total = subject.lessons.length;
                const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

                return (
                  <motion.div key={subject.id} variants={fadeUp} transition={{ duration: 0.35 }}>
                    <Link href={`/subject/${subject.id}`} className="block h-full bg-white dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 card-hover group relative overflow-hidden">
                      {/* Subtle gradient glow */}
                      <div
                        className="absolute -top-12 -right-12 size-28 rounded-full opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500 blur-xl"
                        style={{ background: subject.gradient }}
                      ></div>

                      <div className="flex items-center gap-3 mb-4 relative z-10">
                        <div
                          className="size-11 rounded-xl flex items-center justify-center text-lg shadow-sm group-hover:scale-105 transition-transform duration-300"
                          style={{ background: subject.gradient, color: '#fff' }}
                        >
                          {subject.icon}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight truncate">{subject.name}</h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Coeff {subject.examCoefficient} • {total} Modules</p>
                        </div>
                      </div>

                      <div className="space-y-2.5 relative z-10">
                        <div className="flex justify-between text-[11px] font-semibold">
                          <span className="text-slate-500 dark:text-slate-400">Mastery</span>
                          <span className="text-slate-900 dark:text-white">{pct}%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 + idx * 0.1 }}
                            className="h-full rounded-full"
                            style={{ background: subject.gradient }}
                          ></motion.div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between relative z-10">
                        <span className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider border border-slate-100 dark:border-slate-700/50">
                          {total - completed === 0 ? "✓ Complete" : `${total - completed} remaining`}
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600 group-hover:text-primary group-hover:translate-x-0.5 transition-all">arrow_forward</span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            {/* Countdown Card */}
            <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent -z-0 transition-transform group-hover:scale-110"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/5 to-transparent -z-0"></div>

              <div className="flex items-center gap-2.5 mb-5 relative z-10">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 dark:text-white">Exam Countdown</h3>
              </div>

              <div className="relative z-10 mb-5">
                <CountdownTimer />
              </div>

              <p className="text-[11px] text-slate-500 text-center italic bg-slate-50 dark:bg-slate-800/40 py-2 px-3 rounded-xl border border-slate-100 dark:border-slate-700/40 relative z-10">
                2BAC Physical Science — National Exam
              </p>
            </div>

            {/* Study Plan */}
            <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 dark:text-white">Study Plan</h3>
                <button className="text-primary text-[11px] font-bold hover:underline underline-offset-2">View All</button>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Math Focus", desc: "Complete Limits section", priority: "high", active: true },
                  { title: "Physics Past Exam", desc: "Attempt Mechanics 2021", priority: "medium", active: false },
                  { title: "Chemistry Review", desc: "Revise Acids & Bases", priority: "normal", active: false },
                ].map((item, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-slate-100 dark:border-slate-800">
                    <div className={`absolute -left-[9px] top-0.5 size-4 rounded-full border-[3px] ${item.active
                      ? 'bg-primary border-primary/20 shadow-sm shadow-primary/20'
                      : 'bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-900'
                    }`}></div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{item.title}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                      {item.priority === "high" && (
                        <span className="text-[9px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-200/50 dark:border-amber-500/20 uppercase tracking-wider">Priority</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 dark:text-white mb-4">Performance</h3>
              <div className="space-y-3">
                {[
                  { label: "Study Streak", value: "3 days", icon: "local_fire_department", color: "text-orange-500" },
                  { label: "Total Questions", value: `${totalQuizQuestions}`, icon: "quiz", color: "text-violet-500" },
                  { label: "Completion Rate", value: `${overall.percentage}%`, icon: "pie_chart", color: "text-emerald-500" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/30 border border-slate-100/50 dark:border-slate-700/30">
                    <div className="flex items-center gap-2.5">
                      <span className={`material-symbols-outlined text-[18px] ${item.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{item.label}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">{item.value}</span>
                  </div>
                ))}
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
