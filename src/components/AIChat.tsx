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

export default function AIChat({ context, lessonTitle, accentColor = "#2463eb" }: Props) {
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
            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20 flex-1 flex flex-col items-center justify-center text-center shadow-sm w-full">
                <div className="size-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-md border-2 border-primary/20 mb-4 motion-safe:animate-bounce">
                    <span className="material-symbols-outlined text-3xl text-primary">smart_toy</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">EduTutor AI</h3>
                <p className="text-slate-500 text-xs mb-6 max-w-[200px]">Need help with {lessonTitle?.split(' ')[0] || "this"} concepts? Ask your AI tutor.</p>
                <button
                    onClick={() => setChatActive(true)}
                    className="w-full py-3 bg-white dark:bg-slate-900 text-primary font-bold rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors flex items-center justify-center gap-2 active:scale-95"
                >
                    <span className="material-symbols-outlined text-[18px]">chat</span> Start Chat
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex-1 w-full max-h-[600px] lg:max-h-none h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 border-t-0 dark:bg-slate-800/50">
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                        <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                        <div className="absolute top-0 -right-1 size-2.5 bg-emerald-500 rounded-full border border-white dark:border-slate-900"></div>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-none">EduTutor AI</h4>
                        <span className="text-[10px] font-bold text-emerald-500">Online</span>
                    </div>
                </div>
                <button
                    onClick={() => setChatActive(false)}
                    className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-slate-50/50 dark:bg-slate-900/50">
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center p-4">
                        <span className="material-symbols-outlined text-4xl text-slate-300 dark:text-slate-600 mb-3 block">waving_hand</span>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Hi there!</p>
                        <p className="text-xs text-slate-500 mt-1 max-w-[200px]">I'm here to help you master {lessonTitle}. What would you like to know?</p>

                        <div className="mt-6 flex flex-col w-full gap-2">
                            <button onClick={() => send("Explain this topic simply.")} className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                📝 Explain this topic simply
                            </button>
                            <button onClick={() => send("Give me a challenging practice question.")} className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                ❓ Give me a practice question
                            </button>
                        </div>
                    </div>
                )}

                {messages.map((m, i) => (
                    <div key={i} className={`flex max-w-[85%] ${m.role === "user" ? "self-end" : "self-start"}`}>
                        <div className={`p-3 rounded-2xl text-sm ${m.role === "user"
                                ? "bg-primary text-white rounded-tr-sm shadow-md"
                                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-tl-sm shadow-sm"
                            }`}>
                            {m.role === "assistant" ? (
                                <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 marker:text-primary" dangerouslySetInnerHTML={{ __html: renderMath(m.content.replace(/\n/g, "<br/>")) }} />
                            ) : (
                                m.content
                            )}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="self-start max-w-[85%] flex">
                        <div className="px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Type your question..."
                    className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/30"
                />
                <button
                    onClick={() => send()}
                    disabled={loading || !input.trim()}
                    className="size-10 rounded-full bg-primary flex items-center justify-center text-white disabled:opacity-50 disabled:bg-slate-300 dark:disabled:bg-slate-700 transition-colors shrink-0"
                >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
            </div>
        </div>
    );
}
