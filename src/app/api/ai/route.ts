import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are BACStudy AI — a friendly, expert tutor for Moroccan 2BAC Physical Science students preparing for the national exam. 

Your role:
- Help students understand Math, Physics, Chemistry, and English concepts
- Explain solutions step-by-step in a clear, encouraging way
- Use proper mathematical notation when needed
- Give exam tips and strategies
- When asked to generate quiz questions, format them as JSON
- Be concise but thorough
- Use simple language accessible to high school students
- Mix encouragement with education

Important: The national exam is in June 2026. Be motivating!`;

export async function POST(req: NextRequest) {
    try {
        const { messages, mode } = await req.json();

        let systemContent = SYSTEM_PROMPT;
        if (mode === "quiz-help") {
            systemContent += "\n\nThe student needs help understanding a quiz question. Explain the concept clearly and give a tip for remembering it.";
        } else if (mode === "problem-solve") {
            systemContent += "\n\nHelp the student solve this exam problem step by step. Show your work clearly. Use LaTeX notation for math: wrap inline math in $...$ and display math in $$...$$.";
        } else if (mode === "generate-quiz") {
            systemContent += `\n\nGenerate quiz questions in this exact JSON format:
[{"question":"...","options":["A","B","C","D"],"correctAnswer":0,"explanation":"..."}]
Make questions exam-level difficulty for Moroccan 2BAC.`;
        }

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemContent },
                ...messages,
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.6,
            max_completion_tokens: 2048,
            top_p: 1,
            stream: false,
        });

        const reply = completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
        return NextResponse.json({ reply });
    } catch (error: unknown) {
        console.error("AI API Error:", error);
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
