"use client";

import { useState } from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthPage() {
    return <AuthProvider><AuthForm /></AuthProvider>;
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
            if (password.length < 6) { setError("Password must be at least 6 characters"); setLoading(false); return; }
            const { error } = await signUp(email, password, name);
            if (error) setError(error);
            else setSuccess("Account created! Check your email to confirm.");
        }
        setLoading(false);
    };

    const inputStyle: React.CSSProperties = {
        width: "100%", padding: "12px 16px", borderRadius: 12, fontSize: "0.9rem",
        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
        color: "#f0f0f5", outline: "none", transition: "border-color 0.2s",
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            <div style={{
                width: "100%", maxWidth: 420, padding: 32, borderRadius: 24,
                background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
            }}>
                {/* Logo */}
                <div style={{ textAlign: "center", marginBottom: 28 }}>
                    <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <img src="/logo.svg" alt="BACStudy" style={{ width: 48, height: 48, borderRadius: 14, marginBottom: 12 }} />
                        <h1 style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: -0.5 }}>
                            BAC<span style={{ color: "#4f8cf7" }}>Study</span>
                        </h1>
                    </Link>
                    <p style={{ fontSize: "0.82rem", color: "#6b7280", marginTop: 6 }}>
                        {mode === "login" ? "Welcome back! Sign in to continue." : "Create your account to start studying."}
                    </p>
                </div>

                {/* Tabs */}
                <div style={{ display: "flex", gap: 4, marginBottom: 24, background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 3 }}>
                    {(["login", "register"] as const).map((m) => (
                        <button key={m} onClick={() => { setMode(m); setError(""); setSuccess(""); }}
                            style={{
                                flex: 1, padding: "10px", borderRadius: 10, fontSize: "0.85rem", fontWeight: 600,
                                background: mode === m ? "rgba(79,140,247,0.15)" : "transparent",
                                color: mode === m ? "#4f8cf7" : "#6b7280",
                                border: "none", cursor: "pointer", transition: "all 0.2s",
                            }}>
                            {m === "login" ? "Sign In" : "Sign Up"}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {mode === "register" && (
                        <div>
                            <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "#9ca3af", marginBottom: 6, display: "block" }}>Full Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Hassan" required style={inputStyle} />
                        </div>
                    )}
                    <div>
                        <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "#9ca3af", marginBottom: 6, display: "block" }}>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required style={inputStyle} />
                    </div>
                    <div>
                        <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "#9ca3af", marginBottom: 6, display: "block" }}>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required minLength={6} style={inputStyle} />
                    </div>

                    {error && (
                        <div style={{ padding: "10px 14px", borderRadius: 12, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#ef4444", fontSize: "0.82rem" }}>
                            {error}
                        </div>
                    )}
                    {success && (
                        <div style={{ padding: "10px 14px", borderRadius: 12, background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)", color: "#34d399", fontSize: "0.82rem" }}>
                            {success}
                        </div>
                    )}

                    <button type="submit" disabled={loading} style={{
                        padding: "13px", borderRadius: 12, fontWeight: 700, fontSize: "0.95rem",
                        background: loading ? "rgba(255,255,255,0.05)" : "linear-gradient(135deg, #4f8cf7, #a855f7)",
                        color: loading ? "#6b7280" : "#fff", border: "none", cursor: loading ? "wait" : "pointer",
                        transition: "all 0.2s", marginTop: 4,
                    }}>
                        {loading ? "Loading..." : mode === "login" ? "Sign In" : "Create Account"}
                    </button>
                </form>

                <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#6b7280", marginTop: 20 }}>
                    {mode === "login" ? "Don't have an account? " : "Already have an account? "}
                    <button onClick={() => { setMode(mode === "login" ? "register" : "login"); setError(""); setSuccess(""); }}
                        style={{ color: "#4f8cf7", background: "none", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.78rem" }}>
                        {mode === "login" ? "Sign up" : "Sign in"}
                    </button>
                </p>
            </div>
        </div>
    );
}
