import { Lesson } from "./types";

export const mathLessons: Lesson[] = [
    // ─── SEMESTER 1 ──────────────────────────────────────────────────────────────
    {
        id: "math-limits-continuity", title: "Limits and Continuity", description: "Limits of functions, indeterminate forms, asymptotes, continuity, IVT, inverse functions",
        sections: [
            { id: "lc1", title: "I. Limits of Functions", content: `<h3>Definition & Operations</h3><div class="formula-box"><p>$$\\lim_{x \\to a} f(x) = L$$</p><p><strong>Operations on limits:</strong> sum, product, quotient rules.</p><p><strong>Indeterminate forms:</strong> $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, $0 \\times \\infty$, $\\infty - \\infty$ → factorize, rationalize, or use L'Hôpital.</p></div><h3>Asymptotes</h3><div class="formula-box"><p><strong>Horizontal:</strong> $\\lim_{x\\to\\pm\\infty} f(x) = L$ → $y = L$</p><p><strong>Vertical:</strong> $\\lim_{x\\to a} f(x) = \\pm\\infty$ → $x = a$</p><p><strong>Oblique:</strong> $\\lim_{x\\to\\infty}[f(x)-(ax+b)] = 0$ → $y = ax+b$</p></div>` },
            { id: "lc2", title: "II. Continuity", content: `<h3>Continuity at a Point</h3><div class="formula-box"><p>$f$ is continuous at $x_0$ if: $\\lim_{x\\to x_0} f(x) = f(x_0)$</p></div><h3>Intermediate Value Theorem (IVT)</h3><div class="formula-box"><p>If $f$ is continuous on $[a,b]$ and $f(a) \\cdot f(b) < 0$, then $\\exists\\, c \\in (a,b)$ such that $f(c) = 0$.</p></div><h3>Inverse Functions</h3><div class="formula-box"><p>If $f$ is continuous and strictly monotone on $I$, then $f^{-1}$ exists, is continuous, and its graph is the reflection of $f$ about $y = x$.</p></div>` },
        ],
        keyFormulas: ["$\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$", "IVT: $f(a)f(b)<0$ → root in $(a,b)$", "Oblique asymptote: $y=ax+b$ if $\\lim[f(x)-ax-b]=0$", "Indeterminate forms: factor/rationalize"],
        quiz: [
            { id: "lc1q", question: "$\\lim_{x→0} \\frac{\\sin x}{x}$ =", options: ["0", "∞", "1", "undefined"], correctAnswer: 2, explanation: "Fundamental trigonometric limit: lim sin(x)/x = 1 as x→0." },
            { id: "lc2q", question: "A vertical asymptote x = a occurs when:", options: ["f(a) = 0", "lim f(x) = ±∞ as x→a", "f is continuous at a", "f'(a) = 0"], correctAnswer: 1, explanation: "f blows up to ±∞ as x approaches a." },
            { id: "lc3q", question: "IVT guarantees a root if:", options: ["f(a) = f(b)", "f(a)·f(b) < 0", "f is differentiable", "f is bounded"], correctAnswer: 1, explanation: "Sign change on [a,b] + continuity → at least one root." },
            { id: "lc4q", question: "f is continuous at x₀ if:", options: ["f(x₀) exists only", "lim f(x) = f(x₀)", "f'(x₀) = 0", "f is defined everywhere"], correctAnswer: 1, explanation: "Three conditions: limit exists, f(x₀) defined, and they're equal." },
            { id: "lc5q", question: "$\\frac{0}{0}$ is called:", options: ["A limit", "An asymptote", "An indeterminate form", "A discontinuity"], correctAnswer: 2, explanation: "0/0, ∞/∞, etc. are indeterminate forms requiring further work." },
        ],
        examProblems: [
            { id: "lc-ex1", title: "Exam Problem 1", problem: `<p>Let $f(x) = \\frac{x^2 - 4}{x - 2}$.</p><ol><li>Find $\\lim_{x\\to 2} f(x)$.</li><li>Can $f$ be extended to a continuous function at $x=2$? If so, define $f(2)$.</li><li>Find the asymptotes of $g(x) = \\frac{x^2+1}{x}$.</li></ol>`, solution: `<ol><li>$\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2} = x+2$. So $\\lim_{x\\to 2} = 4$.</li><li>Yes: define $f(2) = 4$. Then $f$ is continuous on $\\mathbb{R}$.</li><li>$g(x)=x+1/x$. Vertical: $x=0$. Oblique: $y=x$ since $g(x)-x=1/x\\to 0$.</li></ol>` },
        ],
    },
    {
        id: "math-derivation", title: "Differentiation and Study of Functions", description: "Derivatives, composed functions, function analysis, asymptotes, curve sketching",
        sections: [
            { id: "der1", title: "I. Derivatives", content: `<h3>Derivative Rules</h3><div class="formula-box"><p>$(uv)' = u'v + uv'$, $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$</p><p><strong>Chain rule:</strong> $(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)$</p><p>$(f(ax+b))' = a \\cdot f'(ax+b)$</p></div><h3>Common Derivatives</h3><div class="formula-box"><p>$(x^n)' = nx^{n-1}$, $(\\ \\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$, $(\\sin x)' = \\cos x$, $(\\cos x)' = -\\sin x$</p></div>` },
            { id: "der2", title: "II. Function Analysis", content: `<h3>Variation Table</h3><div class="formula-box"><p>$f'(x) > 0$ → $f$ increasing. $f'(x) < 0$ → $f$ decreasing.</p><p>$f'(x_0) = 0$ and sign change → local extremum.</p></div><h3>Symmetry & Inflection</h3><div class="formula-box"><p>Even function: $f(-x)=f(x)$ (axis symmetry). Odd: $f(-x)=-f(x)$ (center symmetry).</p><p>Inflection point: $f''(x_0)=0$ and $f''$ changes sign.</p></div>` },
        ],
        keyFormulas: ["Chain rule: $(f(g(x)))' = f'(g(x))\\cdot g'(x)$", "$f'>0$ → increasing", "$f'(x_0)=0$ + sign change → extremum", "$(\\ln u)' = u'/u$, $(e^u)' = u'e^u$"],
        quiz: [
            { id: "der1q", question: "$(uv)' =$", options: ["u'v'", "u'v + uv'", "u'v - uv'", "u/v'"], correctAnswer: 1, explanation: "Product rule: (uv)' = u'v + uv'." },
            { id: "der2q", question: "If f'(x) > 0 on an interval, f is:", options: ["Decreasing", "Constant", "Increasing", "Zero"], correctAnswer: 2, explanation: "Positive derivative → function is increasing." },
            { id: "der3q", question: "Chain rule: (f∘g)'(x) =", options: ["f'(x)·g'(x)", "f'(g(x))·g'(x)", "f(g'(x))", "g'(f(x))"], correctAnswer: 1, explanation: "Compose the outer derivative with the inner function, then multiply by inner derivative." },
            { id: "der4q", question: "An inflection point occurs where:", options: ["f'=0", "f''=0 and changes sign", "f is zero", "f is continuous"], correctAnswer: 1, explanation: "f'' changes sign at an inflection point." },
            { id: "der5q", question: "(1/x)' =", options: ["ln x", "-1/x²", "1/x²", "-ln x"], correctAnswer: 1, explanation: "(x⁻¹)' = -x⁻² = -1/x²." },
        ],
        examProblems: [
            { id: "der-ex1", title: "Exam Problem 1", problem: `<p>Let $f(x) = \\frac{x^2 - 2x + 3}{x - 1}$.</p><ol><li>Find the domain of $f$ and its asymptotes.</li><li>Calculate $f'(x)$ and set up a variation table.</li><li>Sketch the curve.</li></ol>`, solution: `<ol><li>$D_f = \\mathbb{R}\\setminus\\{1\\}$. Vertical: $x=1$. Oblique: perform division: $f(x) = x-1+\\frac{2}{x-1}$ → $y=x-1$.</li><li>$f'(x) = \\frac{(2x-2)(x-1)-(x^2-2x+3)}{(x-1)^2} = \\frac{x^2-2x-1}{(x-1)^2}$. Roots at $x=1\\pm\\sqrt{2}$.</li><li>f has local max at $x=1-\\sqrt{2}$ and local min at $x=1+\\sqrt{2}$.</li></ol>` },
        ],
    },
    {
        id: "math-sequences", title: "Numerical Sequences", description: "Arithmetic and geometric sequences, limits of sequences, convergence theorems, proof by induction",
        sections: [
            { id: "seq1", title: "I. Sequences & Their Types", content: `<h3>Arithmetic Sequence</h3><div class="formula-box"><p>$u_{n+1} = u_n + r$, $u_n = u_0 + nr$</p><p>Sum: $S_n = \\frac{(n+1)(u_0+u_n)}{2}$</p></div><h3>Geometric Sequence</h3><div class="formula-box"><p>$u_{n+1} = q \\cdot u_n$, $u_n = u_0 \\cdot q^n$</p><p>Sum: $S_n = u_0 \\cdot \\frac{1-q^{n+1}}{1-q}$ (if $q \\neq 1$)</p></div>` },
            { id: "seq2", title: "II. Limits & Convergence", content: `<h3>Limits of Sequences</h3><div class="formula-box"><p>$|q| < 1 \\Rightarrow q^n \\to 0$. $q > 1 \\Rightarrow q^n \\to +\\infty$.</p><p><strong>Squeeze theorem:</strong> $u_n \\leq v_n \\leq w_n$ and $u_n, w_n \\to L \\Rightarrow v_n \\to L$.</p></div><h3>Monotone Convergence Theorem</h3><div class="formula-box"><p>A monotone bounded sequence converges.</p></div><h3>Proof by Induction</h3><div class="formula-box"><p>1. Base case: verify for $n=0$ (or $n=1$). 2. Inductive step: assume true for $n$, prove for $n+1$.</p></div>` },
        ],
        keyFormulas: ["Arithmetic: $u_n = u_0 + nr$", "Geometric: $u_n = u_0 q^n$", "Sum geometric: $S_n = u_0\\frac{1-q^{n+1}}{1-q}$", "$|q|<1 \\Rightarrow q^n\\to 0$"],
        quiz: [
            { id: "seq1q", question: "Arithmetic sequence: u_{n+1} - u_n =", options: ["q (constant)", "r (constant)", "n", "0"], correctAnswer: 1, explanation: "Common difference r is constant in arithmetic sequences." },
            { id: "seq2q", question: "Geometric sequence: u_{n+1}/u_n =", options: ["r", "q (constant)", "n", "1"], correctAnswer: 1, explanation: "Common ratio q is constant in geometric sequences." },
            { id: "seq3q", question: "If |q| < 1, then qⁿ →", options: ["∞", "1", "0", "q"], correctAnswer: 2, explanation: "Geometric sequences with |q|<1 converge to 0." },
            { id: "seq4q", question: "Proof by induction: the inductive step assumes:", options: ["n=0", "True for all n", "True for n, prove n+1", "True for n+1"], correctAnswer: 2, explanation: "Induction: assume P(n), then prove P(n+1)." },
            { id: "seq5q", question: "A monotone increasing bounded above sequence:", options: ["Diverges", "Converges", "Oscillates", "Goes to ∞"], correctAnswer: 1, explanation: "Monotone Convergence Theorem guarantees convergence." },
        ],
        examProblems: [
            { id: "seq-ex1", title: "Exam Problem 1", problem: `<p>Define $u_0 = 1$ and $u_{n+1} = \\frac{u_n}{2} + 1$.</p><ol><li>Show by induction that $u_n < 2$ for all $n$.</li><li>Show that $(u_n)$ is increasing.</li><li>Conclude that $(u_n)$ converges and find its limit.</li></ol>`, solution: `<ol><li>Base: $u_0=1<2$. If $u_n<2$: $u_{n+1}=u_n/2+1<1+1=2$. ✓</li><li>$u_{n+1}-u_n = u_n/2+1-u_n = 1-u_n/2 = (2-u_n)/2 > 0$ since $u_n<2$. Increasing.</li><li>Monotone + bounded → converges. Let $L=\\lim u_n$: $L=L/2+1$ → $L=2$.</li></ol>` },
        ],
    },
    {
        id: "math-primitives", title: "Antiderivatives (Primitives)", description: "Definition and properties of antiderivatives, standard primitives, techniques",
        sections: [
            { id: "prim1", title: "I. Definition & Properties", content: `<h3>Antiderivative (Primitive)</h3><div class="formula-box"><p>$F$ is a primitive of $f$ on $I$ if $F'(x) = f(x)$ for all $x \\in I$.</p><p>All primitives of $f$ differ by a constant: $F(x) + C$.</p></div><h3>Standard Primitives</h3><div class="formula-box"><p>$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ ($n \\neq -1$)</p><p>$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$</p><p>$\\int e^x\\,dx = e^x + C$</p><p>$\\int \\cos x\\,dx = \\sin x + C$, $\\int \\sin x\\,dx = -\\cos x + C$</p></div>` },
            { id: "prim2", title: "II. Techniques", content: `<h3>Key Patterns</h3><div class="formula-box"><p>$\\int u' \\cdot u^n\\,dx = \\frac{u^{n+1}}{n+1} + C$</p><p>$\\int \\frac{u'}{u}\\,dx = \\ln|u| + C$</p><p>$\\int u' e^u\\,dx = e^u + C$</p></div><div class="tip-box"><strong>💡 Exam tip:</strong> Always identify the "inner function" $u$ and check that $u'$ appears as a factor.</div>` },
        ],
        keyFormulas: ["$\\int x^n = x^{n+1}/(n+1)+C$", "$\\int u'/u = \\ln|u|+C$", "$\\int u'e^u = e^u+C$", "$\\int u'u^n = u^{n+1}/(n+1)+C$"],
        quiz: [
            { id: "prim1q", question: "A primitive F of f satisfies:", options: ["F = f", "F' = f", "F'' = f", "F = f'"], correctAnswer: 1, explanation: "By definition, F'(x) = f(x)." },
            { id: "prim2q", question: "∫eˣ dx =", options: ["eˣ/x + C", "eˣ + C", "xeˣ + C", "ln(eˣ) + C"], correctAnswer: 1, explanation: "The exponential function is its own antiderivative." },
            { id: "prim3q", question: "∫(1/x) dx =", options: ["-1/x² + C", "ln|x| + C", "x ln x + C", "1/x² + C"], correctAnswer: 1, explanation: "∫dx/x = ln|x| + C." },
            { id: "prim4q", question: "∫u'·uⁿ dx =", options: ["uⁿ⁺¹ + C", "uⁿ⁺¹/(n+1) + C", "nuⁿ⁻¹ + C", "u'uⁿ⁺¹ + C"], correctAnswer: 1, explanation: "This is the reverse chain rule pattern." },
            { id: "prim5q", question: "∫cos x dx =", options: ["-sin x + C", "sin x + C", "cos x + C", "-cos x + C"], correctAnswer: 1, explanation: "(sin x)' = cos x." },
        ],
        examProblems: [
            { id: "prim-ex1", title: "Exam Problem 1", problem: `<p>Find a primitive of each:</p><ol><li>$f(x) = 3x^2 - \\frac{2}{x} + e^x$</li><li>$g(x) = \\frac{2x}{x^2+1}$</li><li>$h(x) = (2x+1)e^{x^2+x}$</li></ol>`, solution: `<ol><li>$F(x) = x^3 - 2\\ln|x| + e^x + C$</li><li>$u = x^2+1$, $u'=2x$: $G(x) = \\ln(x^2+1) + C$</li><li>$u=x^2+x$, $u'=2x+1$: $H(x) = e^{x^2+x} + C$</li></ol>` },
        ],
    },
    {
        id: "math-logarithm", title: "Logarithmic Functions", description: "Natural logarithm: definition, properties, derivatives, limits, growth comparison",
        sections: [
            { id: "log1", title: "I. The Natural Logarithm", content: `<h3>Definition & Properties</h3><div class="formula-box"><p>$\\ln : (0, +\\infty) \\to \\mathbb{R}$, defined by $(\\ln x)' = \\frac{1}{x}$, $\\ln 1 = 0$.</p><p><strong>Algebraic properties:</strong></p><p>$\\ln(ab) = \\ln a + \\ln b$</p><p>$\\ln(a/b) = \\ln a - \\ln b$</p><p>$\\ln(a^n) = n\\ln a$</p></div><h3>Key Limits</h3><div class="formula-box"><p>$\\lim_{x\\to 0^+} \\ln x = -\\infty$, $\\lim_{x\\to+\\infty} \\ln x = +\\infty$</p><p>$\\lim_{x\\to+\\infty} \\frac{\\ln x}{x} = 0$ (logarithm grows slower than any power)</p><p>$\\lim_{x\\to 0^+} x\\ln x = 0$</p></div>` },
            { id: "log2", title: "II. Derivatives & Logarithmic Functions", content: `<h3>Derivatives</h3><div class="formula-box"><p>$(\\ln u)' = \\frac{u'}{u}$ (for $u > 0$)</p><p>$\\log_a x = \\frac{\\ln x}{\\ln a}$, so $(\\log_a x)' = \\frac{1}{x \\ln a}$</p></div><h3>Growth Comparison</h3><div class="formula-box"><p>For any $\\alpha > 0$: $\\lim_{x\\to+\\infty}\\frac{\\ln x}{x^\\alpha} = 0$</p><p>Logarithm is dominated by any positive power of $x$.</p></div>` },
        ],
        keyFormulas: ["$(\\ln x)' = 1/x$", "$(\\ln u)' = u'/u$", "$\\ln(ab)=\\ln a+\\ln b$", "$\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0$", "$\\lim_{x\\to 0^+}x\\ln x=0$"],
        quiz: [
            { id: "log1q", question: "(ln x)' =", options: ["1/x²", "ln x", "1/x", "x"], correctAnswer: 2, explanation: "The derivative of ln x is 1/x." },
            { id: "log2q", question: "ln(ab) =", options: ["ln a · ln b", "ln a + ln b", "ln a - ln b", "ln(a+b)"], correctAnswer: 1, explanation: "Logarithm of a product = sum of logarithms." },
            { id: "log3q", question: "lim(x→+∞) ln(x)/x =", options: ["+∞", "1", "0", "-∞"], correctAnswer: 2, explanation: "Logarithm grows much slower than x → ratio → 0." },
            { id: "log4q", question: "lim(x→0⁺) x·ln(x) =", options: ["-∞", "0", "+∞", "1"], correctAnswer: 1, explanation: "x→0 faster than ln(x)→-∞, so product→0." },
            { id: "log5q", question: "(ln(x²+1))' =", options: ["1/(x²+1)", "2x/(x²+1)", "ln(2x)", "x/(x²+1)"], correctAnswer: 1, explanation: "u=x²+1, u'=2x: (ln u)' = u'/u = 2x/(x²+1)." },
        ],
        examProblems: [
            { id: "log-ex1", title: "Exam Problem 1", problem: `<p>Let $f(x) = x\\ln x - x$ on $(0,+\\infty)$.</p><ol><li>Find $f'(x)$.</li><li>Study variations of $f$ and find its minimum.</li><li>Show that $\\ln x \\leq x - 1$ for all $x > 0$.</li></ol>`, solution: `<ol><li>$f'(x) = \\ln x + 1 - 1 = \\ln x$.</li><li>$f'(x)=0 \\Leftrightarrow x=1$. $f'<0$ on $(0,1)$, $f'>0$ on $(1,\\infty)$. Min at $x=1$: $f(1)=-1$.</li><li>Let $g(x)=x-1-\\ln x$. $g'(x)=1-1/x$. Min at $x=1$: $g(1)=0$. So $g(x)\\geq 0$ → $\\ln x \\leq x-1$. ✓</li></ol>` },
        ],
    },
    {
        id: "math-complex1", title: "Complex Numbers – Part 1", description: "Algebraic form, modulus, argument, trigonometric and exponential forms, geometric applications",
        sections: [
            { id: "cx1", title: "I. Algebraic Form", content: `<h3>Definition</h3><div class="formula-box"><p>$z = a + bi$, where $a = \\text{Re}(z)$, $b = \\text{Im}(z)$, $i^2 = -1$.</p><p>Conjugate: $\\bar{z} = a - bi$</p><p>$z\\bar{z} = a^2 + b^2 = |z|^2$</p></div><h3>Operations</h3><div class="formula-box"><p>Addition, subtraction, multiplication: expand using $i^2=-1$.</p><p>Division: $\\frac{z_1}{z_2} = \\frac{z_1 \\bar{z_2}}{|z_2|^2}$</p></div>` },
            { id: "cx2", title: "II. Modulus, Argument & Euler's Formula", content: `<h3>Polar/Trigonometric Form</h3><div class="formula-box"><p>$|z| = \\sqrt{a^2+b^2}$ (modulus)</p><p>$\\arg(z) = \\theta$ such that $\\cos\\theta = a/|z|$, $\\sin\\theta = b/|z|$</p><p>$z = |z|(\\cos\\theta + i\\sin\\theta) = |z|e^{i\\theta}$ (Euler)</p></div><h3>Properties</h3><div class="formula-box"><p>$|z_1 z_2| = |z_1||z_2|$, $\\arg(z_1 z_2) = \\arg z_1 + \\arg z_2$</p><p>De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta$</p></div>` },
        ],
        keyFormulas: ["$i^2 = -1$", "$|z| = \\sqrt{a^2+b^2}$", "$z = re^{i\\theta}$", "De Moivre: $(e^{i\\theta})^n = e^{in\\theta}$", "$z\\bar{z} = |z|^2$"],
        quiz: [
            { id: "cx1q", question: "i² =", options: ["1", "-1", "i", "0"], correctAnswer: 1, explanation: "By definition of the imaginary unit, i² = -1." },
            { id: "cx2q", question: "|z| for z = 3 + 4i:", options: ["7", "5", "1", "12"], correctAnswer: 1, explanation: "|z| = √(3²+4²) = √25 = 5." },
            { id: "cx3q", question: "The conjugate of z = 2 - 3i is:", options: ["2 + 3i", "-2 + 3i", "2 - 3i", "3 + 2i"], correctAnswer: 0, explanation: "Conjugate: change sign of imaginary part → 2+3i." },
            { id: "cx4q", question: "Euler's formula: e^(iθ) =", options: ["cos θ + i sin θ", "cos θ - i sin θ", "e^θ + iθ", "sin θ + i cos θ"], correctAnswer: 0, explanation: "e^(iθ) = cos θ + i sin θ." },
            { id: "cx5q", question: "arg(z₁z₂) =", options: ["arg(z₁)·arg(z₂)", "arg(z₁)+arg(z₂)", "arg(z₁)-arg(z₂)", "|z₁||z₂|"], correctAnswer: 1, explanation: "Arguments add when multiplying complex numbers." },
        ],
        examProblems: [
            { id: "cx-ex1", title: "Exam Problem 1", problem: `<p>Let $z_1 = 1 + i\\sqrt{3}$ and $z_2 = \\sqrt{3} + i$.</p><ol><li>Write $z_1$ and $z_2$ in exponential form.</li><li>Compute $z_1 \\cdot z_2$ and $z_1/z_2$ in exponential form.</li><li>Deduce $\\cos(75°)$ and $\\sin(75°)$.</li></ol>`, solution: `<ol><li>$z_1=2e^{i\\pi/3}$, $z_2=2e^{i\\pi/6}$.</li><li>$z_1z_2=4e^{i\\pi/2}=4i$. $z_1/z_2=e^{i\\pi/6}=\\frac{\\sqrt{3}}{2}+\\frac{i}{2}$.</li><li>$z_1z_2=4(\\cos 90°+i\\sin 90°)$. $z_1/z_2$ at arg $=\\pi/6=30°$. For 75°: use $z_1^2/\\overline{z_2}$... or note $\\pi/3+\\pi/6=\\pi/2$: $\\cos(\\pi/4+\\pi/6)$ etc. Using $z_1z_2$: $\\cos 90°=0$, $\\sin 90°=1$. ✓</li></ol>` },
        ],
    },

    // ─── SEMESTER 2 ──────────────────────────────────────────────────────────────
    {
        id: "math-exponential", title: "Exponential Functions", description: "The exponential function eˣ: definition, properties, derivative, limits, growth comparison",
        sections: [
            { id: "exp1", title: "I. The Exponential Function", content: `<h3>Definition & Properties</h3><div class="formula-box"><p>$\\exp : \\mathbb{R} \\to (0,+\\infty)$, the unique function satisfying $f'=f$ and $f(0)=1$.</p><p>$(e^x)' = e^x$, $(e^u)' = u'e^u$</p><p><strong>Algebraic rules:</strong> $e^{a+b}=e^ae^b$, $e^{-x}=1/e^x$, $(e^x)^n=e^{nx}$</p></div><h3>Key Limits</h3><div class="formula-box"><p>$\\lim_{x\\to+\\infty}e^x=+\\infty$, $\\lim_{x\\to-\\infty}e^x=0$</p><p>$\\lim_{x\\to+\\infty}\\frac{e^x}{x^n}=+\\infty$ (exp dominates any power)</p><p>$\\lim_{x\\to-\\infty}x^ne^x=0$</p></div>` },
            { id: "exp2", title: "II. Generalised Exponential & Study", content: `<h3>Base-a Exponential</h3><div class="formula-box"><p>$a^x = e^{x\\ln a}$ (for $a>0$, $a\\neq 1$)</p><p>$(a^x)' = a^x \\ln a$</p></div><h3>Growth Comparison</h3><div class="formula-box"><p>For any $n \\in \\mathbb{N}$: $\\lim_{x\\to+\\infty}\\frac{x^n}{e^x} = 0$</p><p>Exponential grows faster than any polynomial.</p></div>` },
        ],
        keyFormulas: ["$(e^x)' = e^x$", "$(e^u)' = u'e^u$", "$e^{a+b}=e^ae^b$", "$\\lim e^x/x^n = +\\infty$", "$a^x = e^{x\\ln a}$"],
        quiz: [
            { id: "exp1q", question: "(eˣ)' =", options: ["xeˣ⁻¹", "eˣ", "1/eˣ", "eˣ/x"], correctAnswer: 1, explanation: "The exponential function is its own derivative." },
            { id: "exp2q", question: "lim(x→+∞) eˣ/x² =", options: ["0", "1", "+∞", "2"], correctAnswer: 2, explanation: "Exponential grows faster than any polynomial." },
            { id: "exp3q", question: "e^(a+b) =", options: ["eᵃ + eᵇ", "eᵃ · eᵇ", "eᵃ - eᵇ", "(ea)ᵇ"], correctAnswer: 1, explanation: "Product rule for exponentials: e^(a+b) = eᵃ·eᵇ." },
            { id: "exp4q", question: "(e^(x²))' =", options: ["e^(x²)", "2xe^(x²)", "x²e^(x²-1)", "e^(2x)"], correctAnswer: 1, explanation: "Chain rule: u=x², u'=2x: (eᵘ)' = u'eᵘ = 2xe^(x²)." },
            { id: "exp5q", question: "lim(x→-∞) xeˣ =", options: ["-∞", "+∞", "0", "1"], correctAnswer: 2, explanation: "xeˣ → 0 as x→-∞ (exponential dominates polynomial)." },
        ],
        examProblems: [
            { id: "exp-ex1", title: "Exam Problem 1", problem: `<p>Let $f(x) = (x-1)e^x$.</p><ol><li>Find the domain and limits at $\\pm\\infty$.</li><li>Calculate $f'(x)$ and set up a variation table.</li><li>Find the equation of the tangent line at $(0, f(0))$.</li></ol>`, solution: `<ol><li>$D_f=\\mathbb{R}$. $\\lim_{x\\to-\\infty}f(x)=0$ (growth comparison). $\\lim_{x\\to+\\infty}f(x)=+\\infty$.</li><li>$f'(x) = e^x + (x-1)e^x = xe^x$. $f'(x)=0 \\Leftrightarrow x=0$. Min at $x=0$: $f(0)=-1$.</li><li>$f'(0)=0$: tangent is $y=-1$ (horizontal).</li></ol>` },
        ],
    },
    {
        id: "math-complex2", title: "Complex Numbers – Part 2", description: "nth roots of complex numbers, geometric transformations, sets of points in the complex plane",
        sections: [
            { id: "cx21", title: "I. nth Roots & Equations in ℂ", content: `<h3>Solving z² = a + bi</h3><div class="formula-box"><p>Let $z = x+iy$: expand $z^2$, identify real and imaginary parts, solve the system.</p></div><h3>nth Roots of Unity</h3><div class="formula-box"><p>$z^n = 1$ has $n$ solutions: $\\omega_k = e^{2ik\\pi/n}$, $k=0,1,\\ldots,n-1$</p><p>They form a regular $n$-gon on the unit circle.</p></div>` },
            { id: "cx22", title: "II. Geometric Applications", content: `<h3>Affixes & Transformations</h3><div class="formula-box"><p>Point $M$ has affix $z$. $\\overrightarrow{AB}$ has affix $z_B - z_A$.</p><p>$|z_B - z_A|$ = distance $AB$.</p><p>$\\arg(z_B-z_A)$ = angle of $\\overrightarrow{AB}$ with x-axis.</p></div><h3>Sets of Points</h3><div class="formula-box"><p>$|z-z_0|=r$ → circle centre $z_0$, radius $r$.</p><p>$\\arg(z-z_0)=\\theta$ → ray from $z_0$ at angle $\\theta$.</p><p>$\\left|\\frac{z-a}{z-b}\\right|=k$ → Apollonius circle.</p></div>` },
        ],
        keyFormulas: ["$z^n=1$: roots $e^{2ik\\pi/n}$", "$|z_B-z_A|$ = distance", "$\\arg\\frac{z_C-z_A}{z_B-z_A}$ = angle at A", "$|z-z_0|=r$ → circle"],
        quiz: [
            { id: "cx21q", question: "The equation z² = -1 has ___ solutions in ℂ:", options: ["0", "1", "2", "∞"], correctAnswer: 2, explanation: "z² = -1 → z = ±i, two solutions." },
            { id: "cx22q", question: "The nth roots of unity are equally spaced on:", options: ["A line", "A parabola", "The unit circle", "The real axis"], correctAnswer: 2, explanation: "They form a regular n-gon on the unit circle |z|=1." },
            { id: "cx23q", question: "|zB - zA| represents:", options: ["Sum of affixes", "Distance AB", "Angle of AB", "Area of triangle"], correctAnswer: 1, explanation: "The modulus of the difference equals the distance between points." },
            { id: "cx24q", question: "|z - z₀| = r is the equation of:", options: ["A line", "A circle", "A parabola", "An ellipse"], correctAnswer: 1, explanation: "All points at distance r from z₀ form a circle." },
            { id: "cx25q", question: "arg(z - z₀) = θ represents:", options: ["A circle", "The whole plane", "A ray from z₀", "A line through origin"], correctAnswer: 2, explanation: "Fixed argument from z₀ = a ray (half-line)." },
        ],
        examProblems: [
            { id: "cx2-ex1", title: "Exam Problem 1", problem: `<p>Solve $z^2 = 5 + 12i$.</p><ol><li>Let $z = a+bi$ and find $a, b$.</li><li>Find the two square roots.</li><li>Hence solve $w^2 - 3w + (2+3i) = 0$.</li></ol>`, solution: `<ol><li>$a^2-b^2=5$ and $2ab=12$ → $ab=6$ → $b=6/a$. Then $a^2-36/a^2=5$ → $a^4-5a^2-36=0$ → $a^2=9$ → $a=\\pm 3$, $b=\\pm 2$.</li><li>$z = 3+2i$ or $z=-3-2i$.</li><li>Discriminant $\\Delta = 9-4(2+3i)=1-12i$... or use quadratic formula with $\\sqrt{\\Delta}$.</li></ol>` },
        ],
    },
    {
        id: "math-integral", title: "Integral Calculus", description: "Definite integral, properties, area calculations, mean value, integral functions",
        sections: [
            { id: "int1", title: "I. Definite Integral", content: `<h3>Definition & Properties</h3><div class="formula-box"><p>$$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$$</p><p><strong>Linearity:</strong> $\\int_a^b (\\alpha f + \\beta g) = \\alpha\\int_a^b f + \\beta\\int_a^b g$</p><p><strong>Chasles:</strong> $\\int_a^b f = \\int_a^c f + \\int_c^b f$</p></div><h3>Key Properties</h3><div class="formula-box"><p>If $f \\geq 0$ on $[a,b]$: $\\int_a^b f \\geq 0$.</p><p>$\\left|\\int_a^b f\\right| \\leq \\int_a^b |f|$.</p><p>Mean value: $\\mu = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$.</p></div>` },
            { id: "int2", title: "II. Area & Integral Functions", content: `<h3>Area Between Curves</h3><div class="formula-box"><p>Area between $f$ and $g$: $\\mathcal{A} = \\int_a^b |f(x)-g(x)|\\,dx$</p></div><h3>Integral Function</h3><div class="formula-box"><p>$F(x) = \\int_a^x f(t)\\,dt$ is differentiable and $F'(x) = f(x)$.</p></div>` },
        ],
        keyFormulas: ["$\\int_a^b f = F(b)-F(a)$", "Area: $\\int_a^b|f-g|$", "Mean: $\\frac{1}{b-a}\\int_a^b f$", "$\\frac{d}{dx}\\int_a^x f(t)dt = f(x)$"],
        quiz: [
            { id: "int1q", question: "∫₀¹ x dx =", options: ["1", "1/2", "2", "0"], correctAnswer: 1, explanation: "[x²/2]₀¹ = 1/2 - 0 = 1/2." },
            { id: "int2q", question: "Chasles' relation: ∫ₐᵇ f =", options: ["∫ₐᶜf - ∫ᶜᵇf", "∫ₐᶜf + ∫ᶜᵇf", "∫ᵇₐf", "0"], correctAnswer: 1, explanation: "∫ₐᵇ = ∫ₐᶜ + ∫ᶜᵇ for any c." },
            { id: "int3q", question: "If f ≥ 0 on [a,b], then ∫ₐᵇ f is:", options: ["Negative", "≥ 0", "= 0", "Undefined"], correctAnswer: 1, explanation: "Non-negative function → non-negative integral." },
            { id: "int4q", question: "Mean value of f on [a,b] is:", options: ["f(a)+f(b)", "(1/(b-a))∫f", "∫f·(b-a)", "f((a+b)/2)"], correctAnswer: 1, explanation: "μ = (1/(b-a))·∫ₐᵇ f(x)dx." },
            { id: "int5q", question: "d/dx ∫ₐˣ f(t) dt =", options: ["F(x)-F(a)", "f(x)", "f(a)", "0"], correctAnswer: 1, explanation: "Fundamental theorem of calculus: derivative of integral function = f(x)." },
        ],
        examProblems: [
            { id: "int-ex1", title: "Exam Problem 1", problem: `<p>Let $f(x) = x^2 - x$ and $g(x) = x$.</p><ol><li>Find intersection points of $C_f$ and $C_g$.</li><li>Calculate the area enclosed between the two curves.</li><li>Find the mean value of $f$ on $[0, 2]$.</li></ol>`, solution: `<ol><li>$x^2-x=x$ → $x^2-2x=0$ → $x=0$ or $x=2$.</li><li>On $[0,2]$: $g(x)-f(x)=2x-x^2 \\geq 0$. Area $=\\int_0^2(2x-x^2)dx=[x^2-x^3/3]_0^2=4-8/3=4/3$.</li><li>$\\mu=\\frac{1}{2}\\int_0^2(x^2-x)dx=\\frac{1}{2}[x^3/3-x^2/2]_0^2=\\frac{1}{2}(8/3-2)=\\frac{1}{2}\\cdot\\frac{2}{3}=\\frac{1}{3}$.</li></ol>` },
        ],
    },
    {
        id: "math-ode", title: "Differential Equations", description: "First and second order linear differential equations with constant coefficients",
        sections: [
            { id: "ode1", title: "I. First Order: y' + ay = b", content: `<h3>Homogeneous: y' + ay = 0</h3><div class="formula-box"><p>Solution: $y_h = Ce^{-ax}$, $C \\in \\mathbb{R}$.</p></div><h3>With Right-Hand Side: y' + ay = b</h3><div class="formula-box"><p>Particular solution: $y_p = b/a$ (constant).</p><p>General solution: $y = Ce^{-ax} + \\frac{b}{a}$</p></div><div class="tip-box"><strong>💡 Exam tip:</strong> Use an initial condition $y(x_0)=y_0$ to find $C$.</div>` },
            { id: "ode2", title: "II. Second Order: y'' + ay' + by = 0", content: `<h3>Characteristic Equation</h3><div class="formula-box"><p>$r^2 + ar + b = 0$, discriminant $\\Delta = a^2 - 4b$.</p><p>$\\Delta > 0$: $y = C_1e^{r_1x} + C_2e^{r_2x}$</p><p>$\\Delta = 0$: $y = (C_1 + C_2x)e^{rx}$</p><p>$\\Delta < 0$: $r = \\alpha \\pm i\\beta$, $y = e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</p></div>` },
        ],
        keyFormulas: ["$y'+ay=0$: $y=Ce^{-ax}$", "$y'+ay=b$: $y=Ce^{-ax}+b/a$", "$\\Delta>0$: two real roots", "$\\Delta<0$: complex roots → oscillatory solution"],
        quiz: [
            { id: "ode1q", question: "Solution of y' + 2y = 0:", options: ["y = Ce²ˣ", "y = Ce⁻²ˣ", "y = C + 2x", "y = 2Ce^x"], correctAnswer: 1, explanation: "y' + ay = 0 → y = Ce^(-ax) = Ce^(-2x)." },
            { id: "ode2q", question: "Particular solution of y' + 2y = 6:", options: ["y = 6", "y = 3", "y = 12", "y = 6e^(-2x)"], correctAnswer: 1, explanation: "y_p = b/a = 6/2 = 3." },
            { id: "ode3q", question: "Characteristic equation of y'' - y' - 2y = 0:", options: ["r² - r - 2 = 0", "r² + r - 2 = 0", "r² - r + 2 = 0", "r + 2 = 0"], correctAnswer: 0, explanation: "Replace y'' → r², y' → r, y → 1." },
            { id: "ode4q", question: "If Δ < 0 in characteristic equation, solution is:", options: ["Two real exponentials", "One exponential", "Oscillatory (sin/cos)", "Polynomial"], correctAnswer: 2, explanation: "Complex conjugate roots → e^(αx)(C₁cos(βx)+C₂sin(βx))." },
            { id: "ode5q", question: "The general solution of a 1st order ODE contains:", options: ["0 constants", "1 constant C", "2 constants", "∞ constants"], correctAnswer: 1, explanation: "First order ODE → one integration constant C." },
        ],
        examProblems: [
            { id: "ode-ex1", title: "Exam Problem 1", problem: `<p>Solve the following differential equations:</p><ol><li>$y' - 3y = 6$ with $y(0) = 5$.</li><li>$y'' - 3y' + 2y = 0$.</li></ol>`, solution: `<ol><li>Homogeneous: $y_h = Ce^{3x}$. Particular: $y_p = -2$. General: $y = Ce^{3x} - 2$. Initial: $5 = C - 2$ → $C=7$. So $y = 7e^{3x}-2$.</li><li>Characteristic: $r^2-3r+2=0$ → $(r-1)(r-2)=0$ → $r_1=1$, $r_2=2$. $y = C_1e^x + C_2e^{2x}$.</li></ol>` },
        ],
    },
    {
        id: "math-geometry-space", title: "Geometry in Space: Dot Product & Cross Product", description: "3D vectors, dot product, cross product, planes, lines, distances in space",
        sections: [
            { id: "geo1", title: "I. Dot Product in Space", content: `<h3>Definition & Properties</h3><div class="formula-box"><p>$\\vec{u} \\cdot \\vec{v} = x_1x_2 + y_1y_2 + z_1z_2$</p><p>$\\vec{u} \\cdot \\vec{v} = |\\vec{u}||\\vec{v}|\\cos\\theta$</p><p>Perpendicular: $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u}\\cdot\\vec{v}=0$</p></div><h3>Plane Equation</h3><div class="formula-box"><p>Normal vector $\\vec{n}=(a,b,c)$ → plane: $ax+by+cz+d=0$</p><p>Distance from point $M(x_0,y_0,z_0)$ to plane: $d=\\frac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$</p></div>` },
            { id: "geo2", title: "II. Cross Product", content: `<h3>Cross Product</h3><div class="formula-box"><p>$\\vec{u} \\times \\vec{v} = \\begin{vmatrix}\\vec{i}&\\vec{j}&\\vec{k}\\\\x_1&y_1&z_1\\\\x_2&y_2&z_2\\end{vmatrix}$</p><p>$\\vec{u}\\times\\vec{v} \\perp \\vec{u}$ and $\\vec{u}\\times\\vec{v} \\perp \\vec{v}$</p><p>$|\\vec{u}\\times\\vec{v}| = |\\vec{u}||\\vec{v}|\\sin\\theta$ = area of parallelogram</p></div>` },
        ],
        keyFormulas: ["$\\vec{u}\\cdot\\vec{v}=x_1x_2+y_1y_2+z_1z_2$", "$\\perp \\Leftrightarrow \\vec{u}\\cdot\\vec{v}=0$", "Plane: $ax+by+cz+d=0$", "$d=|ax_0+by_0+cz_0+d|/\\sqrt{a^2+b^2+c^2}$"],
        quiz: [
            { id: "geo1q", question: "u⃗·v⃗ = 0 means the vectors are:", options: ["Parallel", "Perpendicular", "Equal", "Opposite"], correctAnswer: 1, explanation: "Zero dot product ↔ perpendicular vectors." },
            { id: "geo2q", question: "Normal vector to plane 2x-y+3z=5 is:", options: ["(2,-1,3)", "(5,0,0)", "(1,1,1)", "(2,1,-3)"], correctAnswer: 0, explanation: "Coefficients (a,b,c) form the normal vector." },
            { id: "geo3q", question: "u⃗×v⃗ is perpendicular to:", options: ["Only u⃗", "Only v⃗", "Both u⃗ and v⃗", "Neither"], correctAnswer: 2, explanation: "The cross product is perpendicular to both factors." },
            { id: "geo4q", question: "|u⃗×v⃗| equals:", options: ["|u||v|cosθ", "|u||v|sinθ", "|u|+|v|", "|u|-|v|"], correctAnswer: 1, explanation: "Cross product magnitude = |u||v|sin(θ) = area of parallelogram." },
            { id: "geo5q", question: "Distance from point to plane formula involves:", options: ["Cross product", "Dot product", "Both", "Neither"], correctAnswer: 0, explanation: "d = |ax₀+by₀+cz₀+d|/√(a²+b²+c²) uses the normal vector components." },
        ],
        examProblems: [
            { id: "geo-ex1", title: "Exam Problem 1", problem: `<p>Consider points $A(1,2,0)$, $B(3,0,1)$, $C(0,1,2)$.</p><ol><li>Find $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$.</li><li>Compute $\\overrightarrow{AB} \\times \\overrightarrow{AC}$ to get a normal to plane $ABC$.</li><li>Write the equation of plane $ABC$.</li><li>Find the distance from $D(1,1,1)$ to this plane.</li></ol>`, solution: `<ol><li>$\\overrightarrow{AB}=(2,-2,1)$, $\\overrightarrow{AC}=(-1,-1,2)$.</li><li>$\\vec{n}=\\overrightarrow{AB}\\times\\overrightarrow{AC}=(-4+1)\\vec{i}-(-1\\cdot2-(-1))\\vec{j}+(-2-2)\\vec{k}=(-3,3,-4)$ (compute full determinant).</li><li>Use $\\vec{n}$ and point $A$: $-3(x-1)+3(y-2)-4(z-0)=0$ → $-3x+3y-4z-3=0$.</li><li>$d=|-3(1)+3(1)-4(1)-3|/\\sqrt{9+9+16}=|-7|/\\sqrt{34}=7/\\sqrt{34}$.</li></ol>` },
        ],
    },
    {
        id: "math-combinatorics", title: "Combinatorics (Counting)", description: "Permutations, arrangements, combinations, binomial theorem, Pascal's triangle",
        sections: [
            { id: "comb1", title: "I. Counting Principles", content: `<h3>Factorial & Arrangements</h3><div class="formula-box"><p>$n! = n\\times(n-1)\\times\\cdots\\times 1$, $0!=1$</p><p><strong>Arrangements</strong> (ordered, no repetition): $A_n^k = \\frac{n!}{(n-k)!}$</p><p><strong>Permutations:</strong> $n!$ (all $n$ elements)</p></div><h3>Combinations</h3><div class="formula-box"><p>$$\\binom{n}{k} = C_n^k = \\frac{n!}{k!(n-k)!}$$</p><p>$\\binom{n}{0}=\\binom{n}{n}=1$, $\\binom{n}{1}=n$, $\\binom{n}{k}=\\binom{n}{n-k}$</p></div>` },
            { id: "comb2", title: "II. Binomial Theorem & Pascal", content: `<h3>Binomial Theorem</h3><div class="formula-box"><p>$(a+b)^n = \\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k$</p></div><h3>Pascal's Triangle</h3><div class="formula-box"><p>$\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$</p></div>` },
        ],
        keyFormulas: ["$A_n^k = n!/(n-k)!$", "$C_n^k = n!/(k!(n-k)!)$", "$(a+b)^n = \\sum C_n^k a^{n-k}b^k$", "Pascal: $C_n^k+C_n^{k+1}=C_{n+1}^{k+1}$"],
        quiz: [
            { id: "comb1q", question: "C(5,2) =", options: ["10", "20", "5", "15"], correctAnswer: 0, explanation: "C(5,2) = 5!/(2!3!) = 10." },
            { id: "comb2q", question: "A(n,k) counts:", options: ["Unordered subsets of size k", "Ordered selections of k from n", "Permutations of n", "Subsets of size n-k"], correctAnswer: 1, explanation: "Arrangements = ordered selections without repetition." },
            { id: "comb3q", question: "C(n,k) = C(n, ___)", options: ["k+1", "n-k", "n+k", "k-1"], correctAnswer: 1, explanation: "Symmetry: C(n,k) = C(n,n-k)." },
            { id: "comb4q", question: "Coefficient of x³ in (1+x)⁵:", options: ["5", "10", "3", "1"], correctAnswer: 1, explanation: "C(5,3) = 10." },
            { id: "comb5q", question: "0! =", options: ["0", "1", "undefined", "∞"], correctAnswer: 1, explanation: "By convention, 0! = 1." },
        ],
        examProblems: [
            { id: "comb-ex1", title: "Exam Problem 1", problem: `<p>A committee of 3 is chosen from 5 men and 4 women.</p><ol><li>How many committees are possible?</li><li>How many include at least one woman?</li><li>Find the coefficient of $x^2$ in the expansion of $(2+x)^6$.</li></ol>`, solution: `<ol><li>$C_9^3 = 84$.</li><li>All - none: $84 - C_5^3 = 84 - 10 = 74$.</li><li>$(2+x)^6$: coefficient of $x^2$ is $C_6^2 \\cdot 2^4 = 15\\times16 = 240$.</li></ol>` },
        ],
    },
    {
        id: "math-probability", title: "Probability", description: "Conditional probability, independence, total probability theorem, Bayes' theorem, random variables",
        sections: [
            { id: "prob1", title: "I. Conditional Probability & Independence", content: `<h3>Conditional Probability</h3><div class="formula-box"><p>$$P(A|B) = \\frac{P(A\\cap B)}{P(B)}$$</p><p><strong>Independence:</strong> $A$ and $B$ independent $\\Leftrightarrow P(A\\cap B) = P(A)\\cdot P(B)$</p></div><h3>Total Probability Theorem</h3><div class="formula-box"><p>If $(B_i)$ is a partition of $\\Omega$:</p><p>$$P(A) = \\sum_i P(A|B_i)\\cdot P(B_i)$$</p></div>` },
            { id: "prob2", title: "II. Bayes' Theorem & Random Variables", content: `<h3>Bayes' Theorem</h3><div class="formula-box"><p>$$P(B_i|A) = \\frac{P(A|B_i)\\cdot P(B_i)}{P(A)}$$</p></div><h3>Discrete Random Variable</h3><div class="formula-box"><p>Expected value: $E(X) = \\sum x_i \\cdot P(X=x_i)$</p><p>Variance: $V(X) = E(X^2) - [E(X)]^2$</p><p>Standard deviation: $\\sigma = \\sqrt{V(X)}$</p></div>` },
        ],
        keyFormulas: ["$P(A|B)=P(A\\cap B)/P(B)$", "Independence: $P(A\\cap B)=P(A)P(B)$", "Total prob: $P(A)=\\sum P(A|B_i)P(B_i)$", "$E(X)=\\sum x_i p_i$", "$V(X)=E(X^2)-(E(X))^2$"],
        quiz: [
            { id: "prob1q", question: "P(A|B) =", options: ["P(A)·P(B)", "P(A∩B)/P(B)", "P(A∪B)", "P(B|A)"], correctAnswer: 1, explanation: "Conditional probability: P(A|B) = P(A∩B)/P(B)." },
            { id: "prob2q", question: "A and B are independent if:", options: ["P(A|B)=0", "P(A∩B)=P(A)·P(B)", "P(A∪B)=1", "P(A)=P(B)"], correctAnswer: 1, explanation: "Independence condition: joint = product of marginals." },
            { id: "prob3q", question: "Total probability theorem requires:", options: ["A and B independent", "A partition (Bᵢ) of Ω", "P(A) = 1", "Bayes' theorem"], correctAnswer: 1, explanation: "Need a partition (B₁,...,Bₙ) of the sample space." },
            { id: "prob4q", question: "E(X) is the:", options: ["Most likely value", "Expected (mean) value", "Maximum value", "Variance"], correctAnswer: 1, explanation: "E(X) = Σxᵢ·P(X=xᵢ) is the mean/expected value." },
            { id: "prob5q", question: "σ (standard deviation) =", options: ["V(X)", "E(X)", "√V(X)", "V(X)²"], correctAnswer: 2, explanation: "σ = √Var(X)." },
        ],
        examProblems: [
            { id: "prob-ex1", title: "Exam Problem 1", problem: `<p>A factory has two machines: M₁ produces 60% of items (3% defective), M₂ produces 40% (5% defective).</p><ol><li>What is the probability that a randomly chosen item is defective?</li><li>Given an item is defective, what is the probability it came from M₁? (Bayes)</li></ol>`, solution: `<ol><li>$P(D) = P(D|M_1)P(M_1)+P(D|M_2)P(M_2) = 0.03\\times0.6+0.05\\times0.4=0.018+0.020=0.038$.</li><li>$P(M_1|D)=\\frac{P(D|M_1)P(M_1)}{P(D)}=\\frac{0.018}{0.038}=\\frac{9}{19}\\approx 47.4\\%$.</li></ol>` },
        ],
    },
];
