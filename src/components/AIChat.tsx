"use client";

import { useState, useRef, useEffect } from "react";
import { renderMath } from "./MathRenderer";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface Props {
    context?: string;
    lessonTitle?: string;
    accentColor?: string;
}

export default function AIChat({ context, lessonTitle, accentColor = "#2563eb" }: Props) {
    const [chatActive, setChatActive] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatActive && scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, chatActive]);

    const send = async (text?: string) => {
        if (!chatActive) setChatActive(true);
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

    if (!chatActive) {
        return (
            <div className="bg-gradient-to-br from-primary/[0.04] to-accent/[0.04] dark:from-primary/[0.06] dark:to-accent/[0.06] p-6 rounded-2xl border border-primary/10 dark:border-primary/15 flex-1 flex flex-col items-center justify-center text-center w-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.04] rounded-full blur-2xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/[0.04] rounded-full blur-2xl -z-10"></div>

                <div className="size-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-primary/15 mb-4">
                    <span className="material-symbols-outlined text-2xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">EduTutor AI</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-6 max-w-[220px] leading-relaxed mt-1">Need help with {lessonTitle?.split(' ')[0] || "this"} concepts? Ask your AI tutor.</p>
                <button
                    onClick={() => setChatActive(true)}
                    className="w-full py-3 bg-white dark:bg-slate-900/60 text-primary font-bold text-sm rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-700/40 hover:border-primary/30 hover:shadow transition-all flex items-center justify-center gap-2 active:scale-[0.97]"
                >
                    <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span> Start Chat
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm overflow-hidden flex-1 w-full max-h-[600px] lg:max-h-none h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-3.5 border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-800/20">
                <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white relative shadow-sm">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                        <div className="absolute -bottom-0.5 -right-0.5 size-2.5 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-slate-900"></div>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-none">EduTutor AI</h4>
                        <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider">Online</span>
                    </div>
                </div>
                <button
                    onClick={() => setChatActive(false)}
                    className="size-7 rounded-lg bg-slate-100/80 dark:bg-slate-800/40 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700/40 transition-all"
                >
                    <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3.5 bg-slate-50/30 dark:bg-transparent">
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center p-4">
                        <span className="material-symbols-outlined text-3xl text-slate-200 dark:text-slate-700 mb-3 block">waving_hand</span>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Hi there!</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 max-w-[200px]">I'm here to help you master {lessonTitle}.</p>

                        <div className="mt-5 flex flex-col w-full gap-2">
                            <button onClick={() => send("Explain this topic simply.")} className="p-2.5 border border-slate-200/60 dark:border-slate-700/40 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 text-left hover:bg-slate-100/80 dark:hover:bg-slate-800/30 transition-all hover:border-slate-300 dark:hover:border-slate-600">
                                📝 Explain this topic simply
                            </button>
                            <button onClick={() => send("Give me a challenging practice question.")} className="p-2.5 border border-slate-200/60 dark:border-slate-700/40 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 text-left hover:bg-slate-100/80 dark:hover:bg-slate-800/30 transition-all hover:border-slate-300 dark:hover:border-slate-600">
                                ❓ Give me a practice question
                            </button>
                        </div>
                    </div>
                )}

                {messages.map((m, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 4, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.15 }}
                        className={`flex max-w-[85%] ${m.role === "user" ? "self-end" : "self-start"}`}
                    >
                        <div className={`p-3 text-[13px] leading-relaxed ${m.role === "user"
                                ? "bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl rounded-tr-md shadow-md shadow-primary/10"
                                : "bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/40 rounded-2xl rounded-tl-md shadow-sm"
                            }`}>
                            {m.role === "assistant" ? (
                                <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 marker:text-primary" dangerouslySetInnerHTML={{ __html: renderMath(m.content.replace(/\n/g, "<br/>")) }} />
                            ) : (
                                m.content
                            )}
                        </div>
                    </motion.div>
                ))}

                {loading && (
                    <div className="self-start max-w-[85%] flex">
                        <div className="px-4 py-3 bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 rounded-2xl rounded-tl-md shadow-sm flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="p-3 bg-white dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Type your question..."
                    className="flex-1 bg-slate-100/80 dark:bg-slate-800/40 text-slate-900 dark:text-white text-[13px] rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/15 transition-all border border-transparent focus:border-primary/20 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium"
                />
                <button
                    onClick={() => send()}
                    disabled={loading || !input.trim()}
                    className="size-9 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white disabled:opacity-40 disabled:from-slate-300 disabled:to-slate-300 dark:disabled:from-slate-700 dark:disabled:to-slate-700 transition-all shrink-0 shadow-sm hover:shadow active:scale-[0.95]"
                >
                    <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                </button>
            </div>
        </div>
    );
}
