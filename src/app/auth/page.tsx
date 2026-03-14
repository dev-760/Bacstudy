"use client";

import { useState } from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
    return (
        <AuthProvider>
            <AuthForm />
        </AuthProvider>
    );
}

function AuthForm() {
    const [mode, setMode] = useState<"login" | "register">("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const { signIn, signUp } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);
        if (mode === "login") {
            const { error } = await signIn(email, password);
            if (error) setError(error);
            else router.push("/");
        } else {
            if (password.length < 6) {
                setError("Password must be at least 6 characters");
                setLoading(false);
                return;
            }
            const { error } = await signUp(email, password, name);
            if (error) setError(error);
            else setSuccess("Account created! Check your email to confirm.");
        }
        setLoading(false);
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            {/* Top Navigation */}
            <header className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-background-dark/70 backdrop-blur-xl px-5 md:px-8 py-3 sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="size-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#7c3aed] shadow-md shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
                        <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[15px] font-extrabold leading-none tracking-tight text-slate-900 dark:text-white">BACStudy</h1>
                        <span className="text-[10px] font-semibold text-primary/70 uppercase tracking-widest mt-0.5">Academic Portal</span>
                    </div>
                </Link>
                <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center p-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/40 transition-all text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined text-[20px]">help_outline</span>
                    </button>
                </div>
            </header>

            {/* Main */}
            <main className="flex-1 flex items-center justify-center p-4 md:p-8 relative">
                {/* Background Decorative */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] bg-primary/[0.07] rounded-full blur-[100px] dark:opacity-40"></div>
                    <div className="absolute -bottom-[15%] -right-[10%] w-[50%] h-[50%] bg-[#7c3aed]/[0.07] rounded-full blur-[100px] dark:opacity-40"></div>
                    <div className="absolute inset-0 dot-pattern opacity-30"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="w-full max-w-md relative z-10"
                >
                    {/* Trust Badges */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                            <span className="material-symbols-outlined text-emerald-500 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                            Secure Login
                        </div>
                        <div className="w-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                            <span className="material-symbols-outlined text-primary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                            Encrypted
                        </div>
                        <div className="w-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                            <span className="material-symbols-outlined text-amber-500 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                            Private
                        </div>
                    </div>

                    {/* Card */}
                    <div className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-200/60 dark:border-slate-800/60 overflow-hidden backdrop-blur-sm">
                        {/* Tabs */}
                        <div className="flex w-full border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-800/20">
                            <button
                                className={`relative flex-1 py-3.5 text-[13px] font-bold tracking-wide transition-colors ${mode === "login" ? "text-primary" : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"}`}
                                onClick={() => { setMode("login"); setError(""); setSuccess(""); }}
                            >
                                Sign In
                                {mode === "login" && (
                                    <motion.div layoutId="authTab" className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full" />
                                )}
                            </button>
                            <button
                                className={`relative flex-1 py-3.5 text-[13px] font-bold tracking-wide transition-colors ${mode === "register" ? "text-primary" : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"}`}
                                onClick={() => { setMode("register"); setError(""); setSuccess(""); }}
                            >
                                Register
                                {mode === "register" && (
                                    <motion.div layoutId="authTab" className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full" />
                                )}
                            </button>
                        </div>

                        <div className="p-7 md:p-8">
                            <div className="text-center mb-7">
                                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                    {mode === "login" ? "Welcome Back" : "Create Account"}
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                                    {mode === "login" ? "Sign in to access your courses and preparation materials." : "Join BACStudy to unlock your academic potential."}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <AnimatePresence>
                                    {mode === "register" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-2 overflow-hidden"
                                        >
                                            <label htmlFor="name" className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300">
                                                Full Name
                                            </label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                                    <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-focus-within:text-primary transition-colors text-[20px]">person</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required={mode === "register"}
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Student Name"
                                                    autoComplete="name"
                                                    className="block w-full pl-11 pr-4 py-3 bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/40 transition-all text-sm font-medium"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300">
                                        Email Address
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                            <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-focus-within:text-primary transition-colors text-[20px]">mail</span>
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="student@example.com"
                                            autoComplete="email"
                                            className="block w-full pl-11 pr-4 py-3 bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/40 transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300">
                                            Password
                                        </label>
                                        {mode === "login" && (
                                            <a href="#" className="text-[11px] font-semibold text-primary hover:underline underline-offset-2 transition-all">Forgot password?</a>
                                        )}
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                            <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-focus-within:text-primary transition-colors text-[20px]">lock</span>
                                        </div>
                                        <input
                                            type="password"
                                            id="password"
                                            required
                                            minLength={6}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            autoComplete={mode === "login" ? "current-password" : "new-password"}
                                            className="block w-full pl-11 pr-4 py-3 bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/40 transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {error && (
                                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="p-3 bg-red-50 dark:bg-red-500/5 border border-red-200/60 dark:border-red-500/15 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>error</span> {error}
                                        </motion.div>
                                    )}
                                    {success && (
                                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="p-3 bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200/60 dark:border-emerald-500/15 rounded-xl text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {success}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-primary to-[#1d4ed8] text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all text-sm ${loading ? "opacity-60 cursor-not-allowed" : "hover:shadow-primary/30 active:scale-[0.98]"}`}
                                >
                                    {loading ? (
                                        <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            {mode === "login" ? "Sign In" : "Create Account"}
                                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-6 text-center">
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                            Trusted by Moroccan students preparing for the National Exam
                        </p>
                        <div className="flex items-center justify-center gap-5 mt-3">
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-extrabold text-slate-900 dark:text-white">5</span>
                                <span className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">Subjects</span>
                            </div>
                            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-extrabold text-slate-900 dark:text-white">50+</span>
                                <span className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">Lessons</span>
                            </div>
                            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-extrabold text-slate-900 dark:text-white">AI</span>
                                <span className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">Tutor</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="p-5 text-center border-t border-slate-100 dark:border-slate-800/40">
                <p className="text-slate-400 dark:text-slate-500 text-[11px] font-medium">
                    © {new Date().getFullYear()} BACStudy Platform. All rights reserved.{" "}
                    <a href="#" className="hover:text-primary underline underline-offset-2 ml-1">Privacy</a> •{" "}
                    <a href="#" className="hover:text-primary underline underline-offset-2 ml-1">Terms</a>
                </p>
            </footer>
        </div>
    );
}
