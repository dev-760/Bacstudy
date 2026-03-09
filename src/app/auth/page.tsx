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
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-navy-900 dark:text-slate-100">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-10 py-4 sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary text-white shadow-sm">
                        <span className="material-symbols-outlined">school</span>
                    </div>
                    <div>
                        <h1 className="text-navy-900 dark:text-white text-xl font-bold leading-tight tracking-tight hover:text-primary transition-colors">BACStudy</h1>
                        <p className="text-xs text-primary font-medium uppercase tracking-wider">Academic Portal</p>
                    </div>
                </Link>
                <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center p-2 rounded-lg hover:bg-primary/10 transition-colors text-navy-700 dark:text-slate-300">
                        <span className="material-symbols-outlined">help_outline</span>
                    </button>
                    <div className="h-6 w-px bg-primary/20 hidden sm:block"></div>
                    <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                        <span className="material-symbols-outlined text-lg">language</span>
                        English
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex items-center justify-center p-4 md:p-8 relative">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-[100vw] h-[100vh] overflow-hidden pointer-events-none -z-10">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] dark:opacity-30"></div>
                    <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] dark:opacity-30"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-md bg-white dark:bg-slate-900 rounded-xl shadow-2xl shadow-primary/5 border border-primary/10 overflow-hidden relative z-10"
                >
                    {/* Tabs */}
                    <div className="flex w-full border-b border-primary/10 bg-slate-50 dark:bg-slate-800/50">
                        <button
                            className={`flex-[0.5] py-4 text-sm font-bold tracking-wide transition-colors ${mode === "login" ? "text-primary border-b-2 border-primary" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
                            onClick={() => { setMode("login"); setError(""); setSuccess(""); }}
                        >
                            Sign In
                        </button>
                        <button
                            className={`flex-[0.5] py-4 text-sm font-bold tracking-wide transition-colors ${mode === "register" ? "text-primary border-b-2 border-primary" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
                            onClick={() => { setMode("register"); setError(""); setSuccess(""); }}
                        >
                            Register
                        </button>
                    </div>

                    <div className="p-8 pt-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">
                                {mode === "login" ? "Welcome Back" : "Create Account"}
                            </h2>
                            <p className="text-navy-700 dark:text-slate-400 mt-2 text-sm">
                                {mode === "login" ? "Sign in to access your courses and preparation materials." : "Join BACStudy to unlock your academic potential."}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <AnimatePresence>
                                {mode === "register" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-2 overflow-hidden"
                                    >
                                        <label htmlFor="name" className="block text-sm font-semibold text-navy-900 dark:text-slate-200">
                                            Full Name
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors text-xl">person</span>
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                required={mode === "register"}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Student Name"
                                                autoComplete="name"
                                                className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-navy-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-navy-900 dark:text-slate-200">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors text-xl">mail</span>
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="student@example.com"
                                        autoComplete="email"
                                        className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-navy-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-semibold text-navy-900 dark:text-slate-200">
                                        Password
                                    </label>
                                    {mode === "login" && (
                                        <a href="#" className="text-xs font-medium text-primary hover:underline transition-all">Forgot password?</a>
                                    )}
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors text-xl">lock</span>
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
                                        className="block w-full pl-11 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-navy-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <AnimatePresence>
                                {error && (
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="p-3 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg text-xs font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base">error</span> {error}
                                    </motion.div>
                                )}
                                {success && (
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="p-3 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/30 rounded-lg text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base">check_circle</span> {success}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/25 transition-all text-sm ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90 active:scale-[0.98]"}`}
                            >
                                {loading ? (
                                    <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                                ) : (
                                    <>
                                        {mode === "login" ? "Secure Sign In" : "Create Account"}
                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="p-6 text-center">
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                    © {new Date().getFullYear()} BACStudy Platform. All rights reserved. <br className="sm:hidden" />
                    <a href="#" className="hover:text-primary underline ml-1">Privacy Policy</a> • <a href="#" className="hover:text-primary underline ml-1">Terms of Service</a>
                </p>
            </footer>
        </div>
    );
}
