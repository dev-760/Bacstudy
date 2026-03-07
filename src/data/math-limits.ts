import { Lesson } from "./types";

export const limitsLesson: Lesson = {
    id: "math-limits",
    title: "Limits of Functions",
    description: "Limits at infinity, limits at a point, indeterminate forms, and comparison theorems",
    sections: [
        {
            id: "limits-infinity",
            title: "I. Limits at Infinity",
            content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>$$\\lim_{x \\to +\\infty} f(x) = L$$</p>
  <p>means $f(x)$ gets arbitrarily close to $L$ as $x$ grows without bound.</p>
</div>

<h3>Standard Limits</h3>
<div class="formula-box">
  <p>$$\\lim_{x \\to +\\infty} \\frac{1}{x} = 0 \\qquad \\lim_{x \\to +\\infty} \\frac{1}{x^n} = 0$$</p>
  <p>$$\\lim_{x \\to +\\infty} x^n = +\\infty \\qquad \\lim_{x \\to +\\infty} \\sqrt{x} = +\\infty$$</p>
</div>

<h3>Horizontal Asymptote</h3>
<p>If $\\lim_{x \\to +\\infty} f(x) = L$, the line $y = L$ is a <strong>horizontal asymptote</strong>.</p>

<div class="tip-box">
  <strong>💡 Strategy:</strong> For rational functions $\\frac{P(x)}{Q(x)}$, divide numerator and denominator by the highest power of $x$ in the denominator.
</div>`,
        },
        {
            id: "limits-point",
            title: "II. Limits at a Point",
            content: `
<h3>Finite Limit</h3>
<div class="formula-box">
  <p>$$\\lim_{x \\to a} f(x) = L$$</p>
</div>

<h3>Infinite Limit — Vertical Asymptote</h3>
<p>If $\\lim_{x \\to a} f(x) = \\pm\\infty$, the line $x = a$ is a <strong>vertical asymptote</strong>.</p>

<h3>Left and Right Limits</h3>
<div class="formula-box">
  <p>$$\\lim_{x \\to a^+} f(x) \\quad \\text{(right limit)} \\qquad \\lim_{x \\to a^-} f(x) \\quad \\text{(left limit)}$$</p>
</div>
<div class="important-box">
  <p>$\\lim_{x \\to a} f(x) = L$ exists if and only if $\\lim_{x \\to a^+} f(x) = \\lim_{x \\to a^-} f(x) = L$.</p>
</div>`,
        },
        {
            id: "indeterminate",
            title: "III. Indeterminate Forms",
            content: `
<h3>The 7 Indeterminate Forms</h3>
<div class="formula-box">
  <p>$$\\frac{0}{0}, \\quad \\frac{\\infty}{\\infty}, \\quad 0 \\times \\infty, \\quad \\infty - \\infty, \\quad 1^\\infty, \\quad 0^0, \\quad \\infty^0$$</p>
</div>

<h3>Resolution Techniques</h3>
<ul>
  <li><strong>Factoring:</strong> Factor common terms, e.g. $\\lim \\frac{x^2-1}{x-1} = \\lim \\frac{(x-1)(x+1)}{x-1} = 2$</li>
  <li><strong>Conjugate:</strong> Multiply by $\\frac{\\sqrt{a}+\\sqrt{b}}{\\sqrt{a}+\\sqrt{b}}$</li>
  <li><strong>L'Hôpital (reference):</strong> $\\lim \\frac{f}{g} = \\lim \\frac{f'}{g'}$ for $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$</li>
</ul>

<h3>Key Reference Limits</h3>
<div class="formula-box">
  <p>$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\qquad \\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1 \\qquad \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$$</p>
</div>`,
        },
        {
            id: "comparison",
            title: "IV. Comparison Theorems",
            content: `
<h3>Squeeze Theorem (Sandwich)</h3>
<div class="formula-box">
  <p>If $g(x) \\le f(x) \\le h(x)$ near $a$ and $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$, then:</p>
  <p>$$\\lim_{x \\to a} f(x) = L$$</p>
</div>

<h3>Growth Comparison at $+\\infty$</h3>
<div class="important-box">
  <p>$$\\ln(x) \\ll x^\\alpha \\ll e^x \\quad \\text{for any } \\alpha > 0$$</p>
  <p>Logarithm grows slowest, exponential grows fastest.</p>
</div>

<h3>Oblique Asymptote</h3>
<div class="formula-box">
  <p>If $\\lim_{x \\to \\pm\\infty} [f(x) - (ax+b)] = 0$, then $y = ax + b$ is an <strong>oblique asymptote</strong>.</p>
  <p>Find $a = \\lim \\frac{f(x)}{x}$ and $b = \\lim [f(x) - ax]$.</p>
</div>`,
        },
    ],
    keyFormulas: [
        "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
        "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$",
        "$\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$",
        "$\\ln x \\ll x^\\alpha \\ll e^x$ at $+\\infty$",
        "Squeeze: $g \\le f \\le h$, $\\lim g = \\lim h = L \\Rightarrow \\lim f = L$",
    ],
    quiz: [
        { id: "lm1", question: "What is $\\lim_{x \\to +\\infty} \\frac{3x^2+1}{x^2-2}$?", options: ["0", "3", "+∞", "−2"], correctAnswer: 1, explanation: "Divide by x²: lim (3+1/x²)/(1−2/x²) = 3/1 = 3." },
        { id: "lm2", question: "Which is an indeterminate form?", options: ["∞+∞", "0/1", "∞−∞", "1×∞"], correctAnswer: 2, explanation: "∞−∞ is indeterminate. ∞+∞ = +∞ (not indeterminate)." },
        { id: "lm3", question: "$\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$ equals:", options: ["0", "1", "3", "1/3"], correctAnswer: 2, explanation: "= 3 × (sin(3x)/(3x)) → 3×1 = 3." },
        { id: "lm4", question: "If $\\lim_{x \\to 2} f(x) = +\\infty$, then $x = 2$ is a:", options: ["Horizontal asymptote", "Oblique asymptote", "Vertical asymptote", "No asymptote"], correctAnswer: 2, explanation: "Infinite limit at a point means vertical asymptote." },
        { id: "lm5", question: "$\\lim_{x \\to +\\infty} \\frac{\\ln x}{x}$ equals:", options: ["+∞", "1", "0", "e"], correctAnswer: 2, explanation: "ln grows slower than x, so the ratio → 0." },
        { id: "lm6", question: "$\\lim_{x \\to +\\infty} \\frac{e^x}{x^{100}}$ equals:", options: ["0", "1", "+∞", "100"], correctAnswer: 2, explanation: "Exponential dominates any polynomial power." },
        { id: "lm7", question: "To find $\\lim \\frac{x^2-4}{x-2}$ at $x=2$:", options: ["Direct substitution", "Factor and simplify", "Use L'Hôpital only", "Impossible"], correctAnswer: 1, explanation: "Factor: (x²−4)/(x−2) = (x−2)(x+2)/(x−2) = x+2 → 4." },
        { id: "lm8", question: "$\\lim_{x \\to 0^+} \\frac{1}{x}$ equals:", options: ["0", "+∞", "−∞", "DNE"], correctAnswer: 1, explanation: "As x → 0 from the right, 1/x → +∞." },
        { id: "lm9", question: "The Squeeze Theorem requires:", options: ["Only upper bound", "Only lower bound", "Both bounds with same limit", "Differentiability"], correctAnswer: 2, explanation: "Need g ≤ f ≤ h with lim g = lim h = L." },
        { id: "lm10", question: "$\\lim_{x \\to +\\infty}(\\sqrt{x^2+x}-x)$ equals:", options: ["0", "1/2", "+∞", "1"], correctAnswer: 1, explanation: "Multiply by conjugate: (x²+x−x²)/(√(x²+x)+x) = x/(x(√(1+1/x)+1)) → 1/2." },
        { id: "lm11", question: "For $f(x) = \\frac{2x+3}{x-1}$, the horizontal asymptote is:", options: ["y = 0", "y = 2", "y = 3", "y = −1"], correctAnswer: 1, explanation: "lim f(x) = 2x/x = 2 as x → ∞." },
        { id: "lm12", question: "$\\lim_{x \\to 0} \\frac{e^x-1}{\\sin x}$ equals:", options: ["0", "1", "e", "∞"], correctAnswer: 1, explanation: "(e^x−1)/x → 1 and sin(x)/x → 1, so ratio → 1/1 = 1." },
        { id: "lm13", question: "$\\lim_{x \\to -\\infty} e^x$ equals:", options: ["+∞", "1", "0", "−∞"], correctAnswer: 2, explanation: "e^x approaches 0 as x → −∞ (never negative)." },
        { id: "lm14", question: "$\\frac{0}{0}$ is:", options: ["Equal to 1", "Equal to 0", "Indeterminate", "Undefined but known"], correctAnswer: 2, explanation: "0/0 is an indeterminate form — the limit could be any value." },
        { id: "lm15", question: "To find the oblique asymptote $y=ax+b$, compute:", options: ["a = lim f(x)/x, b = lim(f(x)−ax)", "a = f'(0), b = f(0)", "a = lim f(x), b = lim f'(x)", "Not possible for rational functions"], correctAnswer: 0, explanation: "a = lim f(x)/x at ±∞, then b = lim[f(x)−ax]." },
    ],
    examProblems: [
        { id: "lm-ex1", title: "National Exam Problem 1", problem: `<p>Let $f(x) = \\frac{x^2 - 3x + 2}{x - 1}$.</p><ol><li>Determine the domain of $f$.</li><li>Calculate $\\lim_{x \\to 1} f(x)$.</li><li>Find the oblique asymptote of $f$ at $\\pm\\infty$.</li></ol>`, solution: `<ol><li>$D_f = \\mathbb{R} \\setminus \\{1\\}$</li><li>Factor: $f(x) = \\frac{(x-1)(x-2)}{x-1} = x-2$ for $x \\neq 1$. So $\\lim_{x \\to 1} f(x) = -1$.</li><li>$f(x) = x - 2$, so $y = x - 2$ is the oblique asymptote (it's actually the function itself).</li></ol>` },
        { id: "lm-ex2", title: "National Exam Problem 2", problem: `<p>Calculate:</p><ol><li>$\\lim_{x \\to +\\infty} \\frac{2x^3 - x + 1}{3x^3 + 2x^2}$</li><li>$\\lim_{x \\to 0} \\frac{\\sin(2x)}{3x}$</li><li>$\\lim_{x \\to +\\infty} (\\sqrt{x^2 + 3x} - x)$</li></ol>`, solution: `<ol><li>Divide by $x^3$: $\\lim = \\frac{2}{3}$.</li><li>$= \\frac{2}{3} \\cdot \\frac{\\sin(2x)}{2x} \\to \\frac{2}{3} \\cdot 1 = \\frac{2}{3}$.</li><li>Multiply by conjugate: $\\frac{3x}{\\sqrt{x^2+3x}+x} = \\frac{3}{\\sqrt{1+3/x}+1} \\to \\frac{3}{2}$.</li></ol>` },
        { id: "lm-ex3", title: "National Exam Problem 3", problem: `<p>Let $f(x) = \\frac{e^x}{e^x + 1}$.</p><ol><li>Calculate $\\lim_{x \\to +\\infty} f(x)$ and $\\lim_{x \\to -\\infty} f(x)$.</li><li>Deduce the horizontal asymptotes.</li><li>Show that $f(x) = \\frac{1}{1 + e^{-x}}$ and determine if $f$ is increasing or decreasing.</li></ol>`, solution: `<ol><li>$\\lim_{x \\to +\\infty} = 1$ (divide by $e^x$). $\\lim_{x \\to -\\infty} = 0$ (numerator→0).</li><li>$y = 1$ (right) and $y = 0$ (left) are horizontal asymptotes.</li><li>Divide by $e^x$: $f(x) = \\frac{1}{1+e^{-x}}$. $f'(x) = \\frac{e^{-x}}{(1+e^{-x})^2} > 0$ for all $x$, so $f$ is strictly increasing.</li></ol>` },
    ],
};
