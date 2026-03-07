"use client";

import katex from "katex";
import { useMemo } from "react";

// Renders inline LaTeX: $...$ and display LaTeX: $$...$$
export function renderMath(html: string): string {
    // Display math: $$...$$
    let result = html.replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => {
        try {
            return `<div class="math-display">${katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false, trust: true })}</div>`;
        } catch { return `<div class="math-display">${tex}</div>`; }
    });
    // Inline math: $...$
    result = result.replace(/\$([^\$\n]+?)\$/g, (_, tex) => {
        try {
            return katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false, trust: true });
        } catch { return tex; }
    });
    return result;
}

export function MathContent({ html, className }: { html: string; className?: string }) {
    const rendered = useMemo(() => renderMath(html), [html]);
    return (
        <div
            className={`lesson-html ${className || ""}`}
            dangerouslySetInnerHTML={{ __html: rendered }}
        />
    );
}
