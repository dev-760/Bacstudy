"use client";

import { useState, useRef, useEffect } from "react";
import { renderMath } from "./MathRenderer";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface Props {
    context?: string;
    lessonTitle?: string;
    accentColor?: string;
}

export default function AIChat({ context, lessonTitle, accentColor = "#4f8cf7" }: Props) {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
    }, [messages]);

    const send = async (text?: string) => {
        const msg = text || input.trim();
        if (!msg || loading) return;
        setInput("");
        const newMsgs: Message[] = [...messages, { role: "user", content: msg }];
        setMessages(newMsgs);
        setLoading(true);
        try {
            const contextMsg = context ? `[Context: Student is studying "${lessonTitle}". ${context}]\n\n` : "";
            const res = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: newMsgs.map((m) => ({
                        role: m.role,
                        content: m.role === "user" && m === newMsgs[newMsgs.length - 1]
                            ? contextMsg + m.content
                            : m.content,
                    })),
                    mode: "problem-solve",
                }),
            });
            const data = await res.json();
            setMessages([...newMsgs, { role: "assistant", content: data.reply || data.error || "Error" }]);
        } catch {
            setMessages([...newMsgs, { role: "assistant", content: "Connection error. Please try again." }]);
        }
        setLoading(false);
    };

    const quickActions = [
        { label: "📝 Explain this topic", msg: `Explain the key concepts of "${lessonTitle || "this topic"}" simply, as if I'm a beginner.` },
        { label: "🧠 Give me a tip", msg: `Give me an exam tip for "${lessonTitle || "this topic"}" - something that will help me score marks in the national exam.` },
        { label: "❓ Practice question", msg: `Give me a practice question about "${lessonTitle || "this topic"}" with the answer and explanation.` },
    ];

    const fabStyle: React.CSSProperties = {
        position: "fixed", bottom: 24, right: 24, width: 56, height: 56, borderRadius: "50%",
        background: `linear-gradient(135deg, ${accentColor}, #a855f7)`,
        color: "#fff", fontSize: 24, display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(79,140,247,0.4)", cursor: "pointer", zIndex: 1000,
        transition: "all 0.3s", border: "none",
    };

    const panelStyle: React.CSSProperties = {
        position: "fixed", bottom: 24, right: 24, width: "min(420px, calc(100vw - 32px))",
        height: "min(600px, calc(100vh - 100px))", borderRadius: 20,
        background: "rgba(12, 12, 20, 0.97)", border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)", display: "flex", flexDirection: "column",
        zIndex: 1001, boxShadow: "0 8px 40px rgba(0,0,0,0.5)", overflow: "hidden",
    };

    if (!open) {
        return (
            <button style={fabStyle} onClick={() => setOpen(true)} title="AI Study Assistant">
                🤖
            </button>
        );
    }

    return (
        <div style={panelStyle}>
            {/* Header */}
            <div style={{
                padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                background: "rgba(255,255,255,0.02)",
            }}>
                <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 20 }}>🤖</span> BACStudy AI
                        <span style={{
                            fontSize: "0.6rem", padding: "2px 8px", borderRadius: 8,
                            background: "rgba(52,211,153,0.15)", color: "#34d399", fontWeight: 600,
                        }}>ONLINE</span>
                    </div>
                    <p style={{ fontSize: "0.72rem", color: "#6b7280", marginTop: 2 }}>Your AI study assistant</p>
                </div>
                <button onClick={() => setOpen(false)} style={{
                    width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.05)",
                    color: "#9ca3af", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center",
                    border: "none", cursor: "pointer",
                }}>✕</button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                {messages.length === 0 && (
                    <div style={{ textAlign: "center", padding: "30px 10px" }}>
                        <div style={{ fontSize: 40, marginBottom: 12 }}>🎓</div>
                        <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>How can I help you study?</h3>
                        <p style={{ fontSize: "0.78rem", color: "#6b7280", marginBottom: 20 }}>
                            Ask me anything about your lessons, or use quick actions below
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            {quickActions.map((a, i) => (
                                <button key={i} onClick={() => send(a.msg)} style={{
                                    padding: "10px 14px", borderRadius: 12, fontSize: "0.78rem", fontWeight: 500,
                                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                                    color: "#c4c8d4", textAlign: "left", cursor: "pointer", transition: "all 0.2s",
                                }}>{a.label}</button>
                            ))}
                        </div>
                    </div>
                )}
                {messages.map((m, i) => (
                    <div key={i} style={{
                        alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                        maxWidth: "88%",
                    }}>
                        <div style={{
                            padding: "10px 14px", borderRadius: 14,
                            background: m.role === "user"
                                ? `linear-gradient(135deg, ${accentColor}, #a855f7)`
                                : "rgba(255,255,255,0.04)",
                            border: m.role === "user" ? "none" : "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.82rem", lineHeight: 1.6, color: m.role === "user" ? "#fff" : "#d4d8e4",
                        }}>
                            {m.role === "assistant" ? (
                                <div className="lesson-html" dangerouslySetInnerHTML={{ __html: renderMath(m.content.replace(/\n/g, "<br/>")) }} />
                            ) : m.content.length > 100 ? m.content.substring(0, 100) + "..." : m.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div style={{ alignSelf: "flex-start", padding: "10px 14px", borderRadius: 14, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", fontSize: "0.82rem", color: "#6b7280" }}>
                        <span className="ai-dots">Thinking<span>.</span><span>.</span><span>.</span></span>
                        <style jsx>{`
              .ai-dots span { animation: dotPulse 1.4s infinite; opacity: 0; }
              .ai-dots span:nth-child(1) { animation-delay: 0s; }
              .ai-dots span:nth-child(2) { animation-delay: 0.2s; }
              .ai-dots span:nth-child(3) { animation-delay: 0.4s; }
              @keyframes dotPulse { 0%,80%,100% { opacity: 0 } 40% { opacity: 1 } }
            `}</style>
                    </div>
                )}
            </div>

            {/* Input */}
            <div style={{
                padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex", gap: 8, background: "rgba(255,255,255,0.02)",
            }}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Ask me anything..."
                    style={{
                        flex: 1, padding: "10px 14px", borderRadius: 12, fontSize: "0.82rem",
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                        color: "#f0f0f5", outline: "none",
                    }}
                />
                <button
                    onClick={() => send()}
                    disabled={loading || !input.trim()}
                    style={{
                        padding: "10px 16px", borderRadius: 12, fontWeight: 600, fontSize: "0.82rem",
                        background: loading || !input.trim() ? "rgba(255,255,255,0.05)" : `linear-gradient(135deg, ${accentColor}, #a855f7)`,
                        color: loading || !input.trim() ? "#6b7280" : "#fff",
                        border: "none", cursor: loading ? "wait" : "pointer", transition: "all 0.2s",
                    }}
                >Send</button>
            </div>
        </div>
    );
}
