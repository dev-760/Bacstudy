import { QuizQuestion, ExamProblem } from "./types";

// Extra quizzes & exam problems for existing math lessons

export const continuityExtra: { quiz: QuizQuestion[], examProblems: ExamProblem[] } = {
    quiz: [
        { id: "cq6", question: "If $f$ is a polynomial, then $f$ is continuous on:", options: ["Only [0,1]", "ℝ", "Only where f≠0", "Only ℝ⁺"], correctAnswer: 1, explanation: "All polynomials are continuous on ℝ." },
        { id: "cq7", question: "If $\\lim_{x\\to a^+} f(x) \\neq \\lim_{x\\to a^-} f(x)$, then:", options: ["f is continuous at a", "f has a removable discontinuity", "f is not continuous at a", "f is differentiable"], correctAnswer: 2, explanation: "Continuity requires left and right limits to be equal." },
        { id: "cq8", question: "$f(x) = |x|$ is continuous at $x=0$:", options: ["True", "False", "Only from the right", "Undefined"], correctAnswer: 0, explanation: "lim|x| = 0 = f(0), so |x| is continuous at 0." },
        { id: "cq9", question: "IVT requires $f$ to be:", options: ["Differentiable", "Continuous on [a,b]", "Strictly increasing", "Bounded"], correctAnswer: 1, explanation: "The IVT only requires continuity on a closed interval." },
        { id: "cq10", question: "If $f$ is continuous and strictly decreasing on $[a,b]$, then $f([a,b])=$", options: ["[f(a),f(b)]", "[f(b),f(a)]", "]f(b),f(a)[", "Cannot determine"], correctAnswer: 1, explanation: "Decreasing: f(a) > f(b), so image = [f(b), f(a)]." },
        { id: "cq11", question: "The composition $g \\circ f$ is continuous if:", options: ["g is continuous", "f is continuous", "Both f and g are continuous", "Neither needs to be"], correctAnswer: 2, explanation: "Composition of continuous functions is continuous." },
        { id: "cq12", question: "$\\sqrt{f}$ is continuous when:", options: ["f is continuous", "f is continuous and f ≥ 0", "f > 0 only", "Always"], correctAnswer: 1, explanation: "Need f continuous AND f(x) ≥ 0 for √f to be defined and continuous." },
        { id: "cq13", question: "To show $f(x)=0$ has a unique solution on $[a,b]$, use:", options: ["IVT alone", "IVT + strict monotonicity", "Mean Value Theorem", "Taylor series"], correctAnswer: 1, explanation: "IVT gives existence, strict monotonicity gives uniqueness." },
        { id: "cq14", question: "The image of $[0,1]$ by a continuous $f$ is:", options: ["An interval", "A segment [m,M]", "Always [f(0),f(1)]", "Could be anything"], correctAnswer: 1, explanation: "Image of a closed interval by continuous f is a closed interval [m,M]." },
        { id: "cq15", question: "To find $f^{-1}$, we solve $y=f(x)$ for:", options: ["y in terms of f", "x in terms of y", "f in terms of x", "a in terms of b"], correctAnswer: 1, explanation: "Solve y = f(x) for x, then swap variables." },
    ],
    examProblems: [
        { id: "c-ex1", title: "National Exam Problem 1", problem: `<p>Let $f(x) = x^3 + x - 1$.</p><ol><li>Show that $f$ is continuous and strictly increasing on $\\mathbb{R}$.</li><li>Show that $f(x) = 0$ has a unique solution $\\alpha \\in [0,1]$.</li><li>Verify that $0.68 < \\alpha < 0.69$.</li></ol>`, solution: `<ol><li>$f$ is a polynomial → continuous on $\\mathbb{R}$. $f'(x) = 3x^2 + 1 > 0$ for all $x$ → strictly increasing.</li><li>$f(0) = -1 < 0$ and $f(1) = 1 > 0$. By IVT + strict monotonicity → unique solution.</li><li>$f(0.68) = 0.314 + 0.68 - 1 = -0.006 < 0$ and $f(0.69) = 0.328 + 0.69 - 1 = 0.018 > 0$. So $\\alpha \\in (0.68, 0.69)$.</li></ol>` },
        { id: "c-ex2", title: "National Exam Problem 2", problem: `<p>Let $f(x) = \\frac{x^2 - 4}{x - 2}$ for $x \\neq 2$ and $f(2) = k$.</p><ol><li>Find $\\lim_{x \\to 2} f(x)$.</li><li>Find the value of $k$ that makes $f$ continuous at $x=2$.</li></ol>`, solution: `<ol><li>$f(x) = \\frac{(x-2)(x+2)}{x-2} = x+2$ for $x \\neq 2$. So $\\lim_{x \\to 2} f(x) = 4$.</li><li>For continuity: $f(2) = \\lim_{x \\to 2} f(x)$, so $k = 4$.</li></ol>` },
        { id: "c-ex3", title: "National Exam Problem 3", problem: `<p>$f$ is continuous on $[0, 2\\pi]$ with $f(0) = 3$ and $f(2\\pi) = -1$.</p><ol><li>Show that $f(x) = 1$ has at least one solution in $]0, 2\\pi[$.</li><li>Can we conclude the solution is unique? Why?</li></ol>`, solution: `<ol><li>$f$ continuous on $[0,2\\pi]$, $f(0)=3>1>-1=f(2\\pi)$. By IVT, $\\exists c \\in ]0,2\\pi[$ with $f(c)=1$.</li><li>No — IVT alone doesn't give uniqueness. We'd need $f$ to be strictly monotonic for uniqueness.</li></ol>` },
    ],
};

export const derivativesExtra: { quiz: QuizQuestion[], examProblems: ExamProblem[] } = {
    quiz: [
        { id: "dq5", question: "$(e^{2x})'$ equals:", options: ["$e^{2x}$", "$2e^{2x}$", "$2xe^{2x}$", "$e^{2x}/2$"], correctAnswer: 1, explanation: "Chain rule: $(e^u)' = u'e^u = 2e^{2x}$." },
        { id: "dq6", question: "$(\\ln(x^2+1))'$ equals:", options: ["$1/(x^2+1)$", "$2x/(x^2+1)$", "$2x\\ln(x^2+1)$", "$x/(x^2+1)$"], correctAnswer: 1, explanation: "$(\\ln u)' = u'/u = 2x/(x^2+1)$." },
        { id: "dq7", question: "If $f'(a) = 0$ and $f''(a) > 0$, then $a$ is a:", options: ["Maximum", "Minimum", "Inflection point", "Not determined"], correctAnswer: 1, explanation: "Second derivative positive at critical point → local minimum." },
        { id: "dq8", question: "$(x \\cdot e^x)'$ equals:", options: ["$e^x$", "$xe^x$", "$(1+x)e^x$", "$e^x + x$"], correctAnswer: 2, explanation: "Product rule: $1 \\cdot e^x + x \\cdot e^x = (1+x)e^x$." },
        { id: "dq9", question: "The tangent to $f(x) = x^2$ at $x=1$ is:", options: ["$y = 2x - 1$", "$y = 2x + 1$", "$y = x + 1$", "$y = x - 1$"], correctAnswer: 0, explanation: "$f'(x) = 2x$, $f'(1)=2$, $f(1)=1$. $y = 2(x-1)+1 = 2x-1$." },
        { id: "dq10", question: "$(\\sqrt{x})'$ at $x=4$ equals:", options: ["$1/4$", "$1/2$", "$2$", "$4$"], correctAnswer: 0, explanation: "$(\\sqrt{x})' = 1/(2\\sqrt{x})$. At $x=4$: $1/(2 \\cdot 2) = 1/4$." },
        { id: "dq11", question: "$(\\cos^2(x))'$ equals:", options: ["$-2\\cos x \\sin x$", "$2\\cos x$", "$-\\sin^2 x$", "$\\cos(2x)$"], correctAnswer: 0, explanation: "$(u^2)' = 2u \\cdot u' = 2\\cos x(-\\sin x) = -2\\cos x \\sin x = -\\sin(2x)$." },
        { id: "dq12", question: "$f$ has a horizontal tangent when:", options: ["$f(x) = 0$", "$f'(x) = 0$", "$f''(x) = 0$", "$x = 0$"], correctAnswer: 1, explanation: "Horizontal tangent means slope = 0, i.e., $f'(x) = 0$." },
        { id: "dq13", question: "$(1/x^2)'$ equals:", options: ["$-1/x^3$", "$-2/x^3$", "$2/x^3$", "$1/x$"], correctAnswer: 1, explanation: "$(x^{-2})' = -2x^{-3} = -2/x^3$." },
        { id: "dq14", question: "If $f'(x) < 0$ on $]a,b[$, the function is:", options: ["Increasing", "Decreasing", "Constant", "Undefined"], correctAnswer: 1, explanation: "Negative derivative → function is decreasing." },
        { id: "dq15", question: "$(\\tan x)' = 1 + \\tan^2 x =$:", options: ["$\\cos^2 x$", "$\\sin^2 x$", "$1/\\cos^2 x$", "$1/\\sin^2 x$"], correctAnswer: 2, explanation: "$(\\tan x)' = 1/\\cos^2 x = \\sec^2 x$." },
    ],
    examProblems: [
        { id: "d-ex1", title: "National Exam Problem 1", problem: `<p>$f(x) = (x-1)e^{-x}$</p><ol><li>Calculate $f'(x)$.</li><li>Study the sign of $f'(x)$ and the variations of $f$.</li><li>Find the equation of the tangent at $x = 0$.</li></ol>`, solution: `<ol><li>$f'(x) = e^{-x} + (x-1)(-e^{-x}) = e^{-x}(1-x+1) = (2-x)e^{-x}$.</li><li>$e^{-x} > 0$ always, so sign of $f'$ = sign of $(2-x)$. $f' > 0$ on $]-\\infty,2[$, $f' < 0$ on $]2,+\\infty[$. Max at $x=2$: $f(2) = e^{-2}$.</li><li>$f(0) = -1$, $f'(0) = 2$. Tangent: $y = 2x - 1$.</li></ol>` },
        { id: "d-ex2", title: "National Exam Problem 2", problem: `<p>$f(x) = x - \\ln(x+1)$ on $]-1, +\\infty[$.</p><ol><li>Calculate $f'(x)$ and simplify.</li><li>Show $f$ has a minimum at $x=0$.</li><li>Deduce that $\\ln(x+1) \\le x$ for all $x > -1$.</li></ol>`, solution: `<ol><li>$f'(x) = 1 - \\frac{1}{x+1} = \\frac{x}{x+1}$.</li><li>$f'(x) < 0$ on $]-1,0[$ and $f'(x) > 0$ on $]0,+\\infty[$. So $x=0$ is a minimum, $f(0)=0$.</li><li>$f(x) \\ge f(0) = 0$ → $x - \\ln(x+1) \\ge 0$ → $\\ln(x+1) \\le x$. ✓</li></ol>` },
        { id: "d-ex3", title: "National Exam Problem 3", problem: `<p>$f(x) = \\frac{x^2 + 1}{x - 1}$ for $x \\neq 1$.</p><ol><li>Show that $f(x) = x + 1 + \\frac{2}{x-1}$.</li><li>Find all asymptotes.</li><li>Calculate $f'(x)$ and study variations.</li></ol>`, solution: `<ol><li>Long division: $x^2+1 = (x-1)(x+1) + 2$. So $f(x) = x+1+\\frac{2}{x-1}$. ✓</li><li>$x=1$: vertical asymptote. $y=x+1$: oblique asymptote (since $\\frac{2}{x-1} \\to 0$).</li><li>$f'(x) = 1 - \\frac{2}{(x-1)^2} = \\frac{(x-1)^2-2}{(x-1)^2}$. Zero when $(x-1)^2=2$, i.e., $x=1\\pm\\sqrt{2}$.</li></ol>` },
    ],
};

export const exponentialExtra: { quiz: QuizQuestion[], examProblems: ExamProblem[] } = {
    quiz: [
        { id: "eq4", question: "$e^{\\ln 5}$ equals:", options: ["$\\ln 5$", "$5$", "$e^5$", "$5e$"], correctAnswer: 1, explanation: "$e^{\\ln a} = a$ for all $a > 0$." },
        { id: "eq5", question: "$(e^{x^2})'$ equals:", options: ["$e^{x^2}$", "$2xe^{x^2}$", "$x^2 e^{x^2}$", "$2e^{2x}$"], correctAnswer: 1, explanation: "Chain rule: $u = x^2$, $u' = 2x$. $(e^u)' = 2xe^{x^2}$." },
        { id: "eq6", question: "Solve $e^x = 5$:", options: ["$x = 5$", "$x = \\ln 5$", "$x = e^5$", "$x = 5/e$"], correctAnswer: 1, explanation: "$e^x = 5 \\Rightarrow x = \\ln 5$." },
        { id: "eq7", question: "$e^x > 0$ for:", options: ["$x > 0$", "$x \\ge 0$", "All $x \\in \\mathbb{R}$", "$x > 1$"], correctAnswer: 2, explanation: "Exponential is always positive, for all real x." },
        { id: "eq8", question: "$\\lim_{x \\to +\\infty} xe^{-x}$ equals:", options: ["$+\\infty$", "$0$", "$1$", "$-\\infty$"], correctAnswer: 1, explanation: "$e^x$ dominates $x$, so $x/e^x \\to 0$." },
        { id: "eq9", question: "The function $e^x$ is:", options: ["Even", "Odd", "Neither", "Periodic"], correctAnswer: 2, explanation: "$e^{-x} \\neq e^x$ and $e^{-x} \\neq -e^x$, so neither even nor odd." },
        { id: "eq10", question: "$e^a = e^b$ implies:", options: ["$a > b$", "$a < b$", "$a = b$", "Nothing"], correctAnswer: 2, explanation: "Exponential is injective (one-to-one), so $e^a = e^b \\Leftrightarrow a = b$." },
        { id: "eq11", question: "$(xe^x)' = $", options: ["$e^x$", "$(1+x)e^x$", "$xe^x + 1$", "$x^2 e^x$"], correctAnswer: 1, explanation: "Product rule: $1 \\cdot e^x + x \\cdot e^x = (1+x)e^x$." },
        { id: "eq12", question: "$e^0$ equals:", options: ["$0$", "$1$", "$e$", "Undefined"], correctAnswer: 1, explanation: "Any number to the power 0 equals 1: $e^0 = 1$." },
        { id: "eq13", question: "Solve $e^{2x} - 5e^x + 6 = 0$:", options: ["$x = \\ln 2, \\ln 3$", "$x = 2, 3$", "$x = \\ln 6$", "$x = 0, 1$"], correctAnswer: 0, explanation: "Let $t = e^x$: $t^2-5t+6=0 \\Rightarrow t=2,3$. So $x = \\ln 2, \\ln 3$." },
        { id: "eq14", question: "$\\lim_{x \\to 0} \\frac{e^{3x}-1}{x}$ equals:", options: ["$0$", "$1$", "$3$", "$e^3$"], correctAnswer: 2, explanation: "$= 3 \\cdot \\frac{e^{3x}-1}{3x} \\to 3 \\cdot 1 = 3$." },
        { id: "eq15", question: "The graph of $e^x$ passes through:", options: ["$(0,0)$", "$(1,1)$", "$(0,1)$", "$(1,0)$"], correctAnswer: 2, explanation: "$e^0 = 1$, so graph passes through $(0,1)$." },
    ],
    examProblems: [
        { id: "e-ex1", title: "National Exam Problem 1", problem: `<p>$f(x) = (2-x)e^x$.</p><ol><li>Calculate $\\lim_{x \\to -\\infty} f(x)$ and $\\lim_{x \\to +\\infty} f(x)$.</li><li>Calculate $f'(x)$ and study variations.</li><li>Find the maximum value of $f$.</li></ol>`, solution: `<ol><li>$\\lim_{x \\to -\\infty} = (2-x) \\cdot 0^+ \\to +\\infty$ (polynomial dominates). $\\lim_{x \\to +\\infty} = -\\infty \\cdot e^x \\to -\\infty$ (exp dominates).</li><li>$f'(x) = -e^x + (2-x)e^x = (1-x)e^x$. $f' > 0$ for $x < 1$, $f' < 0$ for $x > 1$.</li><li>Max at $x=1$: $f(1) = e$.</li></ol>` },
        { id: "e-ex2", title: "National Exam Problem 2", problem: `<p>Solve: $e^{2x} - 4e^x + 3 = 0$.</p>`, solution: `<p>Let $t = e^x > 0$: $t^2 - 4t + 3 = 0 \\Rightarrow (t-1)(t-3) = 0$. $t=1 \\Rightarrow x = 0$. $t=3 \\Rightarrow x = \\ln 3$. Solutions: $x \\in \\{0, \\ln 3\\}$.</p>` },
        { id: "e-ex3", title: "National Exam Problem 3", problem: `<p>Show that $e^x \\ge 1 + x$ for all $x \\in \\mathbb{R}$.</p>`, solution: `<p>Let $g(x) = e^x - 1 - x$. $g'(x) = e^x - 1$. $g'(x) = 0 \\Leftrightarrow x = 0$. $g' < 0$ on $]-\\infty,0[$ and $g' > 0$ on $]0,+\\infty[$. Minimum at $x=0$: $g(0) = 1-1-0 = 0$. So $g(x) \\ge 0$ → $e^x \\ge 1+x$. ✓</p>` },
    ],
};

export const logarithmExtra: { quiz: QuizQuestion[], examProblems: ExamProblem[] } = {
    quiz: [
        { id: "lq4", question: "$\\ln(e^3 \\cdot e^2)$ equals:", options: ["$6$", "$5$", "$\\ln 6$", "$e^5$"], correctAnswer: 1, explanation: "$\\ln(e^5) = 5$." },
        { id: "lq5", question: "Domain of $\\ln(x-3)$:", options: ["$x > 0$", "$x > 3$", "$x \\ge 3$", "$x \\neq 3$"], correctAnswer: 1, explanation: "Need $x-3 > 0$, so $x > 3$." },
        { id: "lq6", question: "$\\ln(\\sqrt{e})$ equals:", options: ["$e/2$", "$1/2$", "$\\sqrt{e}$", "$2$"], correctAnswer: 1, explanation: "$\\ln(e^{1/2}) = 1/2$." },
        { id: "lq7", question: "$(x\\ln x)'$ equals:", options: ["$\\ln x$", "$1 + \\ln x$", "$1/x$", "$x/\\ln x$"], correctAnswer: 1, explanation: "Product: $\\ln x + x \\cdot (1/x) = \\ln x + 1 = 1 + \\ln x$." },
        { id: "lq8", question: "$\\ln(a) = 0$ means:", options: ["$a = 0$", "$a = 1$", "$a = e$", "$a = -1$"], correctAnswer: 1, explanation: "$\\ln(1) = 0$." },
        { id: "lq9", question: "$\\ln(x) < 0$ when:", options: ["$x < 0$", "$0 < x < 1$", "$x > 1$", "$x = 0$"], correctAnswer: 1, explanation: "$\\ln$ is negative between 0 and 1." },
        { id: "lq10", question: "Solve $\\ln(x) = 3$:", options: ["$x = 3$", "$x = e^3$", "$x = \\ln 3$", "$x = 3e$"], correctAnswer: 1, explanation: "$\\ln x = 3 \\Rightarrow x = e^3$." },
        { id: "lq11", question: "$\\lim_{x \\to 0^+} x\\ln x$ equals:", options: ["$-\\infty$", "$0$", "$+\\infty$", "$1$"], correctAnswer: 1, explanation: "This is a classic limit: $x\\ln x \\to 0$ as $x \\to 0^+$." },
        { id: "lq12", question: "$\\ln(a^3)$ equals:", options: ["$(\\ln a)^3$", "$3\\ln a$", "$\\ln 3a$", "$3 + \\ln a$"], correctAnswer: 1, explanation: "$\\ln(a^n) = n\\ln a$." },
        { id: "lq13", question: "$(\\ln(\\cos x))'$ equals:", options: ["$1/\\cos x$", "$-\\tan x$", "$\\tan x$", "$-\\sin x/\\cos x$"], correctAnswer: 1, explanation: "$(\\ln u)' = u'/u = -\\sin x/\\cos x = -\\tan x$." },
        { id: "lq14", question: "$\\ln e^{-2}$ equals:", options: ["$-2$", "$1/e^2$", "$e^{-2}$", "$2$"], correctAnswer: 0, explanation: "$\\ln(e^n) = n$. So $\\ln(e^{-2}) = -2$." },
        { id: "lq15", question: "The function $\\ln x$ is:", options: ["Increasing on $]0,+\\infty[$", "Decreasing on $]0,+\\infty[$", "Constant", "Defined on $\\mathbb{R}$"], correctAnswer: 0, explanation: "$(\\ln x)' = 1/x > 0$, so strictly increasing." },
    ],
    examProblems: [
        { id: "l-ex1", title: "National Exam Problem 1", problem: `<p>$f(x) = x - 1 - \\ln x$ on $]0, +\\infty[$.</p><ol><li>Show $f$ has a minimum at $x=1$.</li><li>Deduce that $\\ln x \\le x - 1$ for all $x > 0$.</li></ol>`, solution: `<ol><li>$f'(x) = 1 - 1/x = (x-1)/x$. $f' < 0$ on $]0,1[$, $f' > 0$ on $]1,+\\infty[$. Min at $x=1$: $f(1) = 0$.</li><li>$f(x) \\ge 0$ → $x-1-\\ln x \\ge 0$ → $\\ln x \\le x-1$. ✓</li></ol>` },
        { id: "l-ex2", title: "National Exam Problem 2", problem: `<p>Solve: $\\ln(x^2 - 3x + 2) = 0$.</p>`, solution: `<p>$\\ln(u) = 0 \\Rightarrow u = 1$. So $x^2 - 3x + 2 = 1 \\Rightarrow x^2 - 3x + 1 = 0$. $\\Delta = 5$. $x = \\frac{3 \\pm \\sqrt{5}}{2}$. Check domain: need $x^2-3x+2 > 0$, i.e., $(x-1)(x-2) > 0$: $x < 1$ or $x > 2$. Both solutions satisfy this. ✓</p>` },
        { id: "l-ex3", title: "National Exam Problem 3", problem: `<p>$f(x) = \\frac{\\ln x}{x}$ for $x > 0$.</p><ol><li>Calculate $f'(x)$ and find its maximum.</li><li>Calculate $\\lim_{x \\to +\\infty} f(x)$.</li></ol>`, solution: `<ol><li>$f'(x) = \\frac{1/x \\cdot x - \\ln x}{x^2} = \\frac{1-\\ln x}{x^2}$. $f'=0$ when $\\ln x = 1$, $x = e$. Max at $e$: $f(e) = 1/e$.</li><li>$\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$ ($x$ dominates $\\ln x$).</li></ol>` },
    ],
};

export const primitivesExtra: { quiz: QuizQuestion[], examProblems: ExamProblem[] } = {
    quiz: [
        { id: "pq4", question: "$\\int \\frac{2x}{x^2+1} dx =$", options: ["$\\ln(x^2+1) + C$", "$\\frac{1}{x^2+1} + C$", "$x^2+1 + C$", "$2\\ln(x^2+1)$"], correctAnswer: 0, explanation: "Form $\\int u'/u = \\ln|u|$, with $u = x^2+1$, $u' = 2x$." },
        { id: "pq5", question: "A primitive of $\\cos(3x)$ is:", options: ["$\\sin(3x)$", "$\\sin(3x)/3$", "$3\\sin(3x)$", "$-\\sin(3x)/3$"], correctAnswer: 1, explanation: "$\\int \\cos(3x)dx = \\sin(3x)/3 + C$." },
        { id: "pq6", question: "A primitive of $e^{-x}$ is:", options: ["$e^{-x}$", "$-e^{-x}$", "$e^{-x}/x$", "$-xe^{-x}$"], correctAnswer: 1, explanation: "$(−e^{−x})' = e^{−x}$." },
        { id: "pq7", question: "The primitive of $f$ passing through $(0, 5)$ is:", options: ["$F(x) + C$ with $C = 5$", "$F(x) + 5 - F(0)$", "$F(x)$", "Cannot determine"], correctAnswer: 1, explanation: "$F(0) + C = 5$, so $C = 5 - F(0)$. Primitive is $F(x) + 5 - F(0)$." },
        { id: "pq8", question: "$\\int x^{-1/2} dx =$", options: ["$2\\sqrt{x} + C$", "$\\sqrt{x}/2 + C$", "$-1/(2\\sqrt{x}) + C$", "$\\ln(\\sqrt{x}) + C$"], correctAnswer: 0, explanation: "$x^{-1/2+1}/(-1/2+1) = x^{1/2}/(1/2) = 2\\sqrt{x}$." },
        { id: "pq9", question: "All primitives of $f$ differ by:", options: ["A function", "A variable", "A constant", "Nothing"], correctAnswer: 2, explanation: "If $F$ and $G$ are primitives of $f$, then $F - G = C$." },
        { id: "pq10", question: "$\\int 5 dx =$", options: ["$5 + C$", "$5x + C$", "$0$", "$x^5 + C$"], correctAnswer: 1, explanation: "Primitive of a constant $a$ is $ax + C$." },
        { id: "pq11", question: "A primitive of $\\sin(2x)$ is:", options: ["$\\cos(2x)/2$", "$-\\cos(2x)/2$", "$2\\cos(2x)$", "$-2\\cos(2x)$"], correctAnswer: 1, explanation: "$(-\\cos(2x)/2)' = \\sin(2x) \\cdot 2/2 = \\sin(2x)$." },
        { id: "pq12", question: "$\\int 1/(2x) dx =$", options: ["$\\ln(2x)$", "$\\ln|x|/2 + C$", "$2\\ln|x|$", "$1/x$"], correctAnswer: 1, explanation: "$\\frac{1}{2} \\int \\frac{1}{x}dx = \\frac{\\ln|x|}{2} + C$." },
        { id: "pq13", question: "A primitive of $(2x+1)^3$ is:", options: ["$(2x+1)^4/4$", "$(2x+1)^4/8$", "$3(2x+1)^2$", "$(2x+1)^4/2$"], correctAnswer: 1, explanation: "$u=2x+1$, $u'=2$. $\\int u^3 \\cdot (1/2) \\cdot 2dx = u^4/(4 \\cdot 2) = (2x+1)^4/8$." },
        { id: "pq14", question: "$\\int_0^1 (3x^2 + 1)dx =$", options: ["$1$", "$2$", "$3$", "$4$"], correctAnswer: 1, explanation: "$[x^3+x]_0^1 = (1+1) - 0 = 2$." },
        { id: "pq15", question: "$\\int xe^{x^2} dx =$", options: ["$e^{x^2} + C$", "$e^{x^2}/2 + C$", "$x^2 e^{x^2}$", "$2xe^{x^2}$"], correctAnswer: 1, explanation: "$u=x^2$, $u'=2x$, so $\\int xe^{x^2}dx = \\frac{1}{2}e^{x^2}+C$." },
    ],
    examProblems: [
        { id: "p-ex1", title: "National Exam Problem 1", problem: `<p>Find the primitive $F$ of $f(x) = \\frac{2x-1}{x^2-x+1}$ such that $F(1) = 0$.</p>`, solution: `<p>$u = x^2-x+1$, $u' = 2x-1$. So $F(x) = \\ln|x^2-x+1| + C$. $F(1) = \\ln(1) + C = C = 0$. Thus $F(x) = \\ln(x^2-x+1)$.</p>` },
        { id: "p-ex2", title: "National Exam Problem 2", problem: `<p>Calculate $\\int_0^{\\pi/2} \\sin x \\cos x\\, dx$ by two methods.</p>`, solution: `<p><strong>Method 1:</strong> $\\sin x \\cos x = \\frac{\\sin(2x)}{2}$. $\\int_0^{\\pi/2} \\frac{\\sin(2x)}{2}dx = [-\\frac{\\cos(2x)}{4}]_0^{\\pi/2} = \\frac{1}{4}+\\frac{1}{4} = \\frac{1}{2}$.</p><p><strong>Method 2:</strong> $u = \\sin x$, $u' = \\cos x$. $\\int u \\cdot u'dx = [u^2/2] = [\\sin^2 x/2]_0^{\\pi/2} = 1/2$.</p>` },
        { id: "p-ex3", title: "National Exam Problem 3", problem: `<p>Show that a primitive of $\\frac{1}{x\\ln x}$ (for $x > 1$) is $\\ln(\\ln x)$.</p>`, solution: `<p>Let $F(x) = \\ln(\\ln x)$. $F'(x) = \\frac{1}{\\ln x} \\cdot \\frac{1}{x} = \\frac{1}{x\\ln x}$. So $F$ is indeed a primitive. ✓</p>` },
    ],
};

export const sequencesExtra: { quiz: QuizQuestion[], examProblems: ExamProblem[] } = {
    quiz: [
        { id: "sq3", question: "$(u_n) = 3 \\cdot 2^n$ is:", options: ["Arithmetic", "Geometric with $q=2$", "Neither", "Constant"], correctAnswer: 1, explanation: "$u_{n+1}/u_n = 2$, so geometric with ratio 2." },
        { id: "sq4", question: "$\\sum_{k=0}^{n} 1 =$", options: ["$n$", "$n+1$", "$n-1$", "$2n$"], correctAnswer: 1, explanation: "Sum of (n+1) ones = n+1." },
        { id: "sq5", question: "If $u_n = \\frac{n}{n+1}$, then $\\lim u_n =$", options: ["$0$", "$1$", "$+\\infty$", "$1/2$"], correctAnswer: 1, explanation: "$n/(n+1) = 1/(1+1/n) \\to 1$." },
        { id: "sq6", question: "$1 + 2 + 3 + ... + n =$", options: ["$n^2$", "$n(n+1)/2$", "$n(n-1)/2$", "$2n+1$"], correctAnswer: 1, explanation: "Sum of first n integers = n(n+1)/2." },
        { id: "sq7", question: "If $|q| < 1$, then $\\sum_{k=0}^{+\\infty} q^k =$", options: ["$1/(1-q)$", "$q/(1-q)$", "$+\\infty$", "DNE"], correctAnswer: 0, explanation: "Geometric series: $\\sum q^k = 1/(1-q)$ when $|q|<1$." },
        { id: "sq8", question: "$(u_n)$ increasing and bounded above implies:", options: ["Diverges", "Converges", "Oscillates", "Nothing"], correctAnswer: 1, explanation: "Monotone convergence theorem." },
        { id: "sq9", question: "Arithmetic: $u_0=5$, $d=-2$. Then $u_{10}=$", options: ["$-15$", "$-25$", "$25$", "$15$"], correctAnswer: 0, explanation: "$u_{10} = 5 + 10(-2) = 5 - 20 = -15$." },
        { id: "sq10", question: "If $u_{n+1} = f(u_n)$ and $u_n \\to L$, then:", options: ["$L = 0$", "$L = f(L)$", "$L = f(0)$", "$f'(L) = 0$"], correctAnswer: 1, explanation: "Take limit: $L = \\lim u_{n+1} = \\lim f(u_n) = f(L)$." },
        { id: "sq11", question: "$\\lim (1+1/n)^n =$", options: ["$1$", "$+\\infty$", "$e$", "$0$"], correctAnswer: 2, explanation: "This is the definition of $e \\approx 2.718$." },
        { id: "sq12", question: "Geometric sum: $1+3+9+27+81 =$", options: ["$120$", "$121$", "$111$", "$81$"], correctAnswer: 1, explanation: "$\\frac{3^5-1}{3-1} = \\frac{242}{2} = 121$." },
        { id: "sq13", question: "A convergent sequence is always:", options: ["Increasing", "Bounded", "Decreasing", "Monotonic"], correctAnswer: 1, explanation: "Every convergent sequence is bounded (but not necessarily monotonic)." },
        { id: "sq14", question: "$\\lim n^2/(n^2+1) =$", options: ["$0$", "$1$", "$+\\infty$", "$1/2$"], correctAnswer: 1, explanation: "Divide by $n^2$: $1/(1+1/n^2) \\to 1$." },
        { id: "sq15", question: "$u_n = (-1)^n$ is:", options: ["Convergent", "Divergent", "Increasing", "Bounded and convergent"], correctAnswer: 1, explanation: "Alternates between -1 and 1, no limit exists." },
    ],
    examProblems: [
        { id: "s-ex1", title: "National Exam Problem 1", problem: `<p>$(u_n)$ defined by $u_0 = 1$ and $u_{n+1} = \\frac{1}{2}u_n + 1$.</p><ol><li>Calculate $u_1, u_2, u_3$.</li><li>Let $v_n = u_n - 2$. Show $(v_n)$ is geometric.</li><li>Express $u_n$ and find $\\lim u_n$.</li></ol>`, solution: `<ol><li>$u_1 = 3/2$, $u_2 = 7/4$, $u_3 = 15/8$.</li><li>$v_{n+1} = u_{n+1}-2 = \\frac{u_n}{2}+1-2 = \\frac{u_n-2}{2} = \\frac{v_n}{2}$. Geometric with $q=1/2$.</li><li>$v_n = v_0 \\cdot (1/2)^n = -1 \\cdot (1/2)^n$. $u_n = 2 - (1/2)^n$. $\\lim u_n = 2$.</li></ol>` },
        { id: "s-ex2", title: "National Exam Problem 2", problem: `<p>Show that $\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$ gives $\\sum_{k=1}^{10} k^2 = 385$.</p>`, solution: `<p>$\\frac{10 \\times 11 \\times 21}{6} = \\frac{2310}{6} = 385$. ✓</p>` },
        { id: "s-ex3", title: "National Exam Problem 3", problem: `<p>$u_0 = 2$, $u_{n+1} = \\sqrt{u_n + 2}$.</p><ol><li>Show $u_n \\le 2$ for all $n$ (by induction).</li><li>Show $(u_n)$ is increasing.</li><li>Conclude about convergence and find the limit.</li></ol>`, solution: `<ol><li>$u_0=2 \\le 2$. If $u_n \\le 2$, then $u_{n+1} = \\sqrt{u_n+2} \\le \\sqrt{4} = 2$. ✓</li><li>$u_{n+1}-u_n = \\sqrt{u_n+2}-u_n$. Let $f(x)=\\sqrt{x+2}-x$. $f(u_n) \\ge 0$ since $u_n \\le 2$. So increasing.</li><li>Bounded above + increasing → converges. $L = \\sqrt{L+2}$ → $L^2=L+2$ → $L=2$ (positive root).</li></ol>` },
    ],
};
