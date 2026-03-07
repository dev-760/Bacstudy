import { Lesson } from "./types";

export const mathLessons: Lesson[] = [
    {
        id: "math-continuity",
        title: "Continuity",
        description:
            "Continuity of functions at a point and on intervals, operations on continuous functions",
        sections: [
            {
                id: "continuity-at-point",
                title: "I. Continuity at a Point",
                content: `
<h3>Definition</h3>
<p>Let <em>f</em> be a numeric function defined on an interval of type <strong>]a − α, a + α[</strong> where α > 0.</p>
<div class="formula-box">
  <p><em>f</em> is continuous at <strong>a</strong> ⟺ lim<sub>x→a</sub> f(x) = f(a)</p>
</div>
<p>In simple words: a function is <strong>continuous at a point</strong> if you can draw the graph at that point <em>without lifting your pen</em>.</p>

<h3>Example</h3>
<p>Consider the function:</p>
<div class="formula-box">
  <p>f(x) = { x³+1)/(x+1) if x ≠ −1<br/>f(−1) = 3 if x = −1</p>
</div>
<p>To check continuity at x = −1:</p>
<ol>
  <li>Calculate lim<sub>x→−1</sub> f(x) = lim<sub>x→−1</sub> (x³+1)/(x+1)</li>
  <li>Factor: x³+1 = (x+1)(x²−x+1)</li>
  <li>So lim = lim<sub>x→−1</sub> (x²−x+1) = 1+1+1 = <strong>3</strong></li>
  <li>Since lim<sub>x→−1</sub> f(x) = 3 = f(−1), f is continuous at −1 ✓</li>
</ol>

<h3>Piecewise Function Example</h3>
<p>Study the continuity of f at −1, 0, and 1:</p>
<div class="formula-box">
  <p>f(x) = {<br/>
  &nbsp;&nbsp;2x² − 3x &nbsp; if x < −1<br/>
  &nbsp;&nbsp;x² + 4 &nbsp;&nbsp;&nbsp; if −1 ≤ x < 1<br/>
  &nbsp;&nbsp;√(x²+1) + 2 if x ≥ 1</p>
</div>
<div class="tip-box">
  <strong>💡 Pro Tip:</strong> For piecewise functions, always check the <em>junction points</em> — the x-values where the formula changes. Check that left limit = right limit = f(a).
</div>`,
            },
            {
                id: "right-left-continuity",
                title: "II. Right/Left Continuity",
                content: `
<h3>Definitions</h3>
<div class="formula-box">
  <p><em>f</em> is continuous to the <strong>right</strong> at a ⟺ lim<sub>x→a⁺</sub> f(x) = f(a)</p>
  <p><em>f</em> is continuous to the <strong>left</strong> at a ⟺ lim<sub>x→a⁻</sub> f(x) = f(a)</p>
</div>

<h3>Key Property</h3>
<p>The following are <strong>equivalent</strong>:</p>
<ul>
  <li>f is continuous at a</li>
  <li>f is continuous at a from the right AND from the left</li>
  <li>lim<sub>x→a⁺</sub> f(x) = lim<sub>x→a⁻</sub> f(x) = f(a)</li>
</ul>

<h3>Example: Finding m for continuity</h3>
<p>Given:</p>
<div class="formula-box">
  <p>f(x) = {<br/>
  &nbsp;&nbsp;2sin(x²)/x + 2 &nbsp; if x > 0<br/>
  &nbsp;&nbsp;x + 1 + m &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if x ≤ 0</p>
</div>
<p>For f to be continuous at 0:</p>
<ol>
  <li>Right limit: lim<sub>x→0⁺</sub> (2sin(x²)/x + 2) = 0 + 2 = 2</li>
  <li>Left limit: lim<sub>x→0⁻</sub> (x + 1 + m) = 1 + m</li>
  <li>f(0) = 0 + 1 + m = 1 + m</li>
  <li>For continuity: 1 + m = 2, so <strong>m = 1</strong></li>
</ol>`,
            },
            {
                id: "continuity-interval",
                title: "III. Continuity on an Interval",
                content: `
<h3>Definitions</h3>
<ul>
  <li>f is continuous on <strong>]a, b[</strong> if f is continuous at every point of ]a, b[</li>
  <li>f is continuous on <strong>[a, b]</strong> if f is continuous on ]a, b[, and continuous to the right at a, and to the left at b</li>
  <li>Similar definitions for [a, b[, ]a, b], [a, +∞[, etc.</li>
</ul>

<h3>Standard Continuous Functions</h3>
<div class="important-box">
  <p>These functions are <strong>always continuous</strong> on their domains:</p>
  <ul>
    <li>✅ Polynomial functions → continuous on ℝ</li>
    <li>✅ sin(x) and cos(x) → continuous on ℝ</li>
    <li>✅ √x → continuous on ℝ⁺</li>
    <li>✅ Rational functions → continuous where defined</li>
    <li>✅ tan(x) → continuous where defined</li>
  </ul>
</div>`,
            },
            {
                id: "operations-continuous",
                title: "IV. Operations on Continuous Functions",
                content: `
<h3>Properties</h3>
<p>If f and g are continuous on an interval I and α ∈ ℝ, then:</p>
<ul>
  <li><strong>f ± g</strong> is continuous on I</li>
  <li><strong>f × g</strong> is continuous on I</li>
  <li><strong>αf</strong> is continuous on I</li>
  <li><strong>f/g</strong> is continuous on I (where g ≠ 0)</li>
  <li><strong>fⁿ</strong> is continuous on I</li>
  <li><strong>|f|</strong> is continuous on I</li>
  <li><strong>√f</strong> is continuous on I (if f ≥ 0)</li>
</ul>

<h3>Composition</h3>
<div class="formula-box">
  <p>If f is continuous on I and g is continuous on f(I), then <strong>g ∘ f</strong> is continuous on I.</p>
</div>

<h3>Example</h3>
<p>f(x) = x² − x + cos(x)</p>
<p>Since x → x² − x (polynomial) and x → cos(x) are both continuous on ℝ, their sum f is continuous on ℝ. ✓</p>`,
            },
            {
                id: "ivt",
                title: "V. Image of an Interval & IVT",
                content: `
<h3>Key Theorems</h3>
<div class="formula-box">
  <p><strong>Theorem 1:</strong> The image of a segment [a,b] by a continuous function is a segment.</p>
  <p><strong>Theorem 2:</strong> The image of an interval by a continuous function is an interval.</p>
</div>

<h3>Image of Monotonic Functions</h3>
<p>If f is continuous and <strong>strictly monotonic</strong> on I, then f(I) can be determined using the table:</p>
<ul>
  <li>f increasing on [a,b] → f([a,b]) = [f(a), f(b)]</li>
  <li>f decreasing on [a,b] → f([a,b]) = [f(b), f(a)]</li>
</ul>

<h3>Intermediate Value Theorem (IVT)</h3>
<div class="important-box">
  <p><strong>IVT:</strong> If f is continuous on [a,b] and λ is between f(a) and f(b), then there exists c ∈ [a,b] such that <strong>f(c) = λ</strong>.</p>
</div>

<h3>Corollary (Zero Theorem)</h3>
<div class="formula-box">
  <p>If f is continuous on [a,b] and <strong>f(a) × f(b) < 0</strong>, then the equation f(x) = 0 has at least one solution in ]a,b[.</p>
</div>

<h3>Uniqueness</h3>
<p>If f is also <strong>strictly monotonic</strong> on [a,b], then the solution is <strong>unique</strong>.</p>

<div class="tip-box">
  <strong>💡 Dichotomy Method:</strong> To approximate the solution, repeatedly halve the interval [a,b] by checking the sign of f at the midpoint. This gives better and better approximations.
</div>`,
            },
            {
                id: "reciprocal-functions",
                title: "VI. Reciprocal Functions",
                content: `
<h3>Theorem</h3>
<div class="formula-box">
  <p>If f is continuous and strictly monotonic on an interval I, then f has a <strong>reciprocal function</strong> f⁻¹ defined on f(I).</p>
</div>

<h3>Properties of f⁻¹</h3>
<ul>
  <li>f⁻¹ is continuous and strictly monotonic on f(I)</li>
  <li>f⁻¹ has the <strong>same monotonicity</strong> as f</li>
  <li>The graph of f⁻¹ is the <strong>reflection</strong> of the graph of f over the line y = x</li>
  <li>f(f⁻¹(y)) = y for all y in f(I)</li>
  <li>f⁻¹(f(x)) = x for all x in I</li>
</ul>

<div class="tip-box">
  <strong>💡 Exam tip:</strong> To find f⁻¹, solve y = f(x) for x in terms of y, then swap x and y.
</div>`,
            },
        ],
        keyFormulas: [
            "f continuous at a ⟺ lim(x→a) f(x) = f(a)",
            "IVT: f continuous on [a,b], λ between f(a) and f(b) → ∃c ∈ [a,b], f(c) = λ",
            "f(a) × f(b) < 0 → equation f(x) = 0 has solution in ]a,b[",
            "Image of [a,b] by continuous f is a segment [m, M]",
            "f continuous + strictly monotonic → f⁻¹ exists, same monotonicity",
        ],
        quiz: [
            {
                id: "q1",
                question: "What does it mean for f to be continuous at point a?",
                options: [
                    "f(a) exists",
                    "lim(x→a) f(x) exists",
                    "lim(x→a) f(x) = f(a)",
                    "f is defined on an interval containing a",
                ],
                correctAnswer: 2,
                explanation:
                    "Continuity at a requires THREE things: f(a) is defined, the limit exists, AND they are equal.",
            },
            {
                id: "q2",
                question:
                    "If f is continuous on [a,b] and f(a) × f(b) < 0, what can we conclude?",
                options: [
                    "f has no zeros in [a,b]",
                    "f(x) = 0 has at least one solution in ]a,b[",
                    "f is strictly monotonic on [a,b]",
                    "f is differentiable on [a,b]",
                ],
                correctAnswer: 1,
                explanation:
                    "This is the Zero Theorem (corollary of IVT). Since f changes sign, it must cross zero.",
            },
            {
                id: "q3",
                question:
                    "Which of these functions is NOT continuous on all of ℝ?",
                options: ["sin(x)", "x² + 3x − 1", "1/x", "cos(x) + x"],
                correctAnswer: 2,
                explanation:
                    "1/x is not defined at x = 0, so it cannot be continuous on all of ℝ.",
            },
            {
                id: "q4",
                question:
                    "If f is continuous and strictly increasing on [a,b], what is f([a,b])?",
                options: [
                    "[f(b), f(a)]",
                    "[f(a), f(b)]",
                    "]f(a), f(b)[",
                    "Cannot be determined",
                ],
                correctAnswer: 1,
                explanation:
                    "For a strictly increasing continuous function, f maps [a,b] to [f(a), f(b)].",
            },
            {
                id: "q5",
                question:
                    "The graph of f⁻¹ is obtained by reflecting the graph of f over which line?",
                options: ["x-axis", "y-axis", "y = x", "y = −x"],
                correctAnswer: 2,
                explanation:
                    "The reciprocal function's graph is always the reflection over the first bisector y = x.",
            },
        ],
    },
    {
        id: "math-derivatives",
        title: "Derivatives & Applications",
        description:
            "Derivative rules, derivative of composite functions, applications to function study",
        sections: [
            {
                id: "derivative-definition",
                title: "I. Definition of Derivative",
                content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>f is differentiable at a if the following limit exists:</p>
  <p><strong>f'(a) = lim<sub>x→a</sub> (f(x) − f(a))/(x − a)</strong></p>
  <p>Or equivalently: <strong>f'(a) = lim<sub>h→0</sub> (f(a+h) − f(a))/h</strong></p>
</div>

<h3>Geometric Interpretation</h3>
<p>f'(a) is the <strong>slope of the tangent line</strong> to the curve y = f(x) at the point (a, f(a)).</p>
<div class="formula-box">
  <p>Equation of the tangent at x = a: <strong>y = f'(a)(x − a) + f(a)</strong></p>
</div>

<div class="tip-box">
  <strong>💡 Key insight:</strong> If f'(a) = 0, the tangent is horizontal. This is where extrema may occur!
</div>`,
            },
            {
                id: "derivative-rules",
                title: "II. Derivative Rules",
                content: `
<h3>Basic Derivatives Table</h3>
<table class="study-table">
  <tr><th>Function f(x)</th><th>Derivative f'(x)</th></tr>
  <tr><td>c (constant)</td><td>0</td></tr>
  <tr><td>x</td><td>1</td></tr>
  <tr><td>xⁿ</td><td>nxⁿ⁻¹</td></tr>
  <tr><td>1/x</td><td>−1/x²</td></tr>
  <tr><td>√x</td><td>1/(2√x)</td></tr>
  <tr><td>sin(x)</td><td>cos(x)</td></tr>
  <tr><td>cos(x)</td><td>−sin(x)</td></tr>
  <tr><td>tan(x)</td><td>1/cos²(x) = 1 + tan²(x)</td></tr>
  <tr><td>eˣ</td><td>eˣ</td></tr>
  <tr><td>ln(x)</td><td>1/x</td></tr>
</table>

<h3>Operation Rules</h3>
<div class="formula-box">
  <ul>
    <li>(f + g)' = f' + g'</li>
    <li>(αf)' = αf'</li>
    <li>(f × g)' = f'g + fg'</li>
    <li>(f/g)' = (f'g − fg')/g²</li>
    <li>(g ∘ f)' = f' × (g' ∘ f)</li>
  </ul>
</div>`,
            },
            {
                id: "derivative-composite",
                title: "III. Derivative of Composite Functions",
                content: `
<h3>Chain Rule</h3>
<div class="formula-box">
  <p>If h(x) = g(f(x)), then:</p>
  <p><strong>h'(x) = f'(x) × g'(f(x))</strong></p>
</div>

<h3>Common Composite Derivatives</h3>
<table class="study-table">
  <tr><th>Function</th><th>Derivative</th></tr>
  <tr><td>[u(x)]ⁿ</td><td>n × u'(x) × [u(x)]ⁿ⁻¹</td></tr>
  <tr><td>√(u(x))</td><td>u'(x) / (2√(u(x)))</td></tr>
  <tr><td>1/u(x)</td><td>−u'(x) / [u(x)]²</td></tr>
  <tr><td>sin(u(x))</td><td>u'(x) × cos(u(x))</td></tr>
  <tr><td>cos(u(x))</td><td>−u'(x) × sin(u(x))</td></tr>
  <tr><td>e^(u(x))</td><td>u'(x) × e^(u(x))</td></tr>
  <tr><td>ln(u(x))</td><td>u'(x) / u(x)</td></tr>
</table>

<div class="tip-box">
  <strong>💡 Remember:</strong> "Derivative of the outside × derivative of the inside"
</div>`,
            },
            {
                id: "function-study",
                title: "IV. Study of Functions",
                content: `
<h3>Steps to Study a Function</h3>
<div class="important-box">
  <ol>
    <li><strong>Domain:</strong> Find Df (where f is defined)</li>
    <li><strong>Limits at boundaries:</strong> Calculate limits at ±∞ and boundary points</li>
    <li><strong>Asymptotes:</strong> Horizontal, vertical, oblique</li>
    <li><strong>Derivative:</strong> Calculate f'(x)</li>
    <li><strong>Sign of f':</strong> Determine where f' > 0, f' < 0, f' = 0</li>
    <li><strong>Variation table:</strong> Increasing/decreasing intervals + extrema</li>
    <li><strong>Graph:</strong> Plot key points and draw the curve</li>
  </ol>
</div>

<h3>Asymptotes</h3>
<ul>
  <li><strong>Horizontal:</strong> If lim<sub>x→±∞</sub> f(x) = L, then y = L is a horizontal asymptote</li>
  <li><strong>Vertical:</strong> If lim<sub>x→a</sub> f(x) = ±∞, then x = a is a vertical asymptote</li>
  <li><strong>Oblique:</strong> If lim<sub>x→±∞</sub> (f(x) − (ax+b)) = 0, then y = ax+b is an oblique asymptote</li>
</ul>`,
            },
        ],
        keyFormulas: [
            "f'(a) = lim(x→a) [f(x)−f(a)]/(x−a)",
            "Tangent line: y = f'(a)(x−a) + f(a)",
            "(fg)' = f'g + fg'",
            "(f/g)' = (f'g − fg')/g²",
            "Chain rule: (g∘f)' = f' × (g'∘f)",
        ],
        quiz: [
            {
                id: "d1",
                question: "What is the derivative of f(x) = x³ + 2x² − 5x + 1?",
                options: [
                    "3x² + 4x − 5",
                    "3x² + 2x − 5",
                    "x⁴/4 + 2x³/3 − 5x²/2 + x",
                    "3x³ + 4x − 5",
                ],
                correctAnswer: 0,
                explanation:
                    "Using power rule: (x³)' = 3x², (2x²)' = 4x, (−5x)' = −5, (1)' = 0.",
            },
            {
                id: "d2",
                question: "What is the derivative of sin(3x)?",
                options: [
                    "cos(3x)",
                    "3cos(3x)",
                    "−3cos(3x)",
                    "3sin(3x)",
                ],
                correctAnswer: 1,
                explanation:
                    "By chain rule: derivative of sin(u) = u'cos(u). Here u = 3x, u' = 3.",
            },
            {
                id: "d3",
                question: "The tangent line to f at point a has slope equal to:",
                options: [
                    "f(a)",
                    "f'(a)",
                    "(f(b)−f(a))/(b−a)",
                    "f(a)/a",
                ],
                correctAnswer: 1,
                explanation:
                    "The derivative f'(a) gives exactly the slope of the tangent line at x = a.",
            },
            {
                id: "d4",
                question: "If f'(x) > 0 on interval I, then f is:",
                options: [
                    "Decreasing on I",
                    "Strictly increasing on I",
                    "Constant on I",
                    "Not defined on I",
                ],
                correctAnswer: 1,
                explanation:
                    "Positive derivative means the function is strictly increasing.",
            },
        ],
    },
    {
        id: "math-exponential",
        title: "Exponential Function",
        description:
            "Properties, equations, and graph of the exponential function eˣ",
        sections: [
            {
                id: "exp-definition",
                title: "I. Definition & Properties",
                content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>The exponential function is the unique function f such that:</p>
  <p><strong>f'(x) = f(x)</strong> and <strong>f(0) = 1</strong></p>
  <p>Written as: f(x) = eˣ = exp(x)</p>
</div>

<h3>Fundamental Properties</h3>
<div class="important-box">
  <ul>
    <li>eˣ > 0 for all x ∈ ℝ (always positive!)</li>
    <li>e⁰ = 1</li>
    <li>e¹ = e ≈ 2.718</li>
    <li>(eˣ)' = eˣ (its own derivative!)</li>
    <li>eˣ is strictly increasing on ℝ</li>
  </ul>
</div>

<h3>Algebraic Rules</h3>
<div class="formula-box">
  <ul>
    <li>eᵃ × eᵇ = eᵃ⁺ᵇ</li>
    <li>eᵃ / eᵇ = eᵃ⁻ᵇ</li>
    <li>(eᵃ)ⁿ = eⁿᵃ</li>
    <li>1/eᵃ = e⁻ᵃ</li>
    <li>eᵃ = eᵇ ⟺ a = b</li>
    <li>eᵃ > eᵇ ⟺ a > b</li>
  </ul>
</div>`,
            },
            {
                id: "exp-limits",
                title: "II. Limits",
                content: `
<h3>Key Limits</h3>
<div class="formula-box">
  <ul>
    <li>lim<sub>x→+∞</sub> eˣ = +∞</li>
    <li>lim<sub>x→−∞</sub> eˣ = 0</li>
    <li>lim<sub>x→+∞</sub> eˣ/x = +∞ (exponential dominates polynomial)</li>
    <li>lim<sub>x→+∞</sub> eˣ/xⁿ = +∞ (for any n)</li>
    <li>lim<sub>x→−∞</sub> xⁿeˣ = 0 (for any n)</li>
    <li>lim<sub>x→0</sub> (eˣ − 1)/x = 1</li>
  </ul>
</div>

<div class="tip-box">
  <strong>💡 Growth comparison:</strong> Exponential always beats polynomial at infinity. We say eˣ grows faster than any power of x.
</div>`,
            },
            {
                id: "exp-equations",
                title: "III. Equations & Inequalities",
                content: `
<h3>Solving Exponential Equations</h3>
<div class="formula-box">
  <p><strong>eᶠ⁽ˣ⁾ = eᵍ⁽ˣ⁾ ⟺ f(x) = g(x)</strong></p>
  <p><strong>eᶠ⁽ˣ⁾ > eᵍ⁽ˣ⁾ ⟺ f(x) > g(x)</strong></p>
</div>

<h3>Examples</h3>
<p><strong>Solve:</strong> e²ˣ⁻¹ = e³</p>
<p>Solution: 2x − 1 = 3, so 2x = 4, so <strong>x = 2</strong></p>

<p><strong>Solve:</strong> e²ˣ − 3eˣ + 2 = 0</p>
<p>Let t = eˣ (note: t > 0). Then t² − 3t + 2 = 0</p>
<p>(t−1)(t−2) = 0, so t = 1 or t = 2</p>
<p>eˣ = 1 → x = 0, or eˣ = 2 → x = ln(2)</p>

<div class="tip-box">
  <strong>💡 Exam technique:</strong> When you see e²ˣ, think of it as (eˣ)². Set t = eˣ to reduce to a polynomial equation!
</div>`,
            },
        ],
        keyFormulas: [
            "(eˣ)' = eˣ",
            "eᵃ × eᵇ = eᵃ⁺ᵇ",
            "lim(x→+∞) eˣ/xⁿ = +∞",
            "lim(x→0) (eˣ−1)/x = 1",
            "eᵃ = eᵇ ⟺ a = b",
        ],
        quiz: [
            {
                id: "e1",
                question: "What is the derivative of e³ˣ?",
                options: ["e³ˣ", "3e³ˣ", "3xe³ˣ", "e³ˣ/3"],
                correctAnswer: 1,
                explanation:
                    "By chain rule: (e^u)' = u' × e^u. Here u = 3x, u' = 3.",
            },
            {
                id: "e2",
                question: "What is lim(x→−∞) eˣ?",
                options: ["+∞", "−∞", "0", "1"],
                correctAnswer: 2,
                explanation:
                    "As x goes to −∞, eˣ approaches 0 (but never reaches it since eˣ > 0 always).",
            },
            {
                id: "e3",
                question: "Simplify: e²ˣ × e⁻ˣ",
                options: ["e³ˣ", "eˣ", "e⁻²ˣ²", "e²ˣ²"],
                correctAnswer: 1,
                explanation: "eᵃ × eᵇ = eᵃ⁺ᵇ. So e²ˣ × e⁻ˣ = e²ˣ⁻ˣ = eˣ.",
            },
        ],
    },
    {
        id: "math-logarithm",
        title: "Logarithmic Function",
        description:
            "Natural logarithm ln(x): properties, equations, derivatives",
        sections: [
            {
                id: "ln-definition",
                title: "I. Definition & Basic Properties",
                content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>The natural logarithm ln is the <strong>reciprocal function</strong> of the exponential function.</p>
  <p><strong>y = ln(x) ⟺ x = eʸ</strong> (for x > 0)</p>
  <p>Domain: ]0, +∞[</p>
</div>

<h3>Key Values</h3>
<ul>
  <li>ln(1) = 0</li>
  <li>ln(e) = 1</li>
  <li>ln(eⁿ) = n</li>
</ul>

<h3>Algebraic Properties</h3>
<div class="formula-box">
  <ul>
    <li>ln(ab) = ln(a) + ln(b)</li>
    <li>ln(a/b) = ln(a) − ln(b)</li>
    <li>ln(aⁿ) = n × ln(a)</li>
    <li>ln(1/a) = −ln(a)</li>
    <li>ln(√a) = ½ ln(a)</li>
  </ul>
</div>

<h3>Connection with exp</h3>
<div class="formula-box">
  <ul>
    <li>e^(ln(x)) = x for x > 0</li>
    <li>ln(eˣ) = x for all x ∈ ℝ</li>
  </ul>
</div>`,
            },
            {
                id: "ln-derivative",
                title: "II. Derivative & Study",
                content: `
<h3>Derivative</h3>
<div class="formula-box">
  <p><strong>(ln(x))' = 1/x</strong> for x > 0</p>
  <p><strong>(ln(u))' = u'/u</strong> (chain rule)</p>
</div>

<h3>Limits</h3>
<div class="formula-box">
  <ul>
    <li>lim<sub>x→+∞</sub> ln(x) = +∞</li>
    <li>lim<sub>x→0⁺</sub> ln(x) = −∞</li>
    <li>lim<sub>x→+∞</sub> ln(x)/x = 0 (x dominates ln)</li>
    <li>lim<sub>x→0⁺</sub> x × ln(x) = 0</li>
    <li>lim<sub>x→0</sub> ln(1+x)/x = 1</li>
  </ul>
</div>

<div class="tip-box">
  <strong>💡 Growth hierarchy:</strong> ln(x) grows SLOWER than any positive power of x. At infinity: ln(x) ≪ xᵅ ≪ eˣ for any α > 0.
</div>`,
            },
            {
                id: "ln-equations",
                title: "III. Equations with ln",
                content: `
<h3>Solving Rules</h3>
<div class="formula-box">
  <p><strong>ln(a) = ln(b) ⟺ a = b</strong> (and a > 0, b > 0)</p>
  <p><strong>ln(a) > ln(b) ⟺ a > b</strong> (and a > 0, b > 0)</p>
</div>

<h3>Example 1</h3>
<p>Solve: ln(2x − 1) = ln(x + 3)</p>
<p>Condition: 2x−1 > 0 and x+3 > 0 → x > 1/2</p>
<p>2x − 1 = x + 3 → <strong>x = 4</strong> (valid since 4 > 1/2) ✓</p>

<h3>Example 2</h3>
<p>Solve: ln(x²) = 4</p>
<p>2ln|x| = 4 → ln|x| = 2 → |x| = e² → <strong>x = e² or x = −e²</strong></p>

<div class="important-box">
  <strong>⚠️ Common exam mistake:</strong> Always check the domain! ln(x) is only defined for x > 0. When solving inequalities, verify solutions are in the domain.
</div>`,
            },
        ],
        keyFormulas: [
            "ln(x) = y ⟺ x = eʸ",
            "(ln(x))' = 1/x",
            "ln(ab) = ln(a) + ln(b)",
            "ln(aⁿ) = n·ln(a)",
            "lim(x→+∞) ln(x)/x = 0",
            "lim(x→0⁺) x·ln(x) = 0",
        ],
        quiz: [
            {
                id: "l1",
                question: "What is ln(e⁵)?",
                options: ["e⁵", "5", "5e", "1/5"],
                correctAnswer: 1,
                explanation: "ln(eⁿ) = n. So ln(e⁵) = 5.",
            },
            {
                id: "l2",
                question: "Simplify: ln(8) − ln(2)",
                options: ["ln(6)", "ln(4)", "ln(10)", "4"],
                correctAnswer: 1,
                explanation: "ln(a) − ln(b) = ln(a/b). ln(8/2) = ln(4).",
            },
            {
                id: "l3",
                question: "What is the derivative of ln(2x + 1)?",
                options: [
                    "1/(2x+1)",
                    "2/(2x+1)",
                    "(2x+1)/2",
                    "ln(2)/(2x+1)",
                ],
                correctAnswer: 1,
                explanation:
                    "By chain rule: (ln(u))' = u'/u = 2/(2x+1).",
            },
        ],
    },
    {
        id: "math-primitives",
        title: "Primitive Functions (Antiderivatives)",
        description:
            "Finding primitives, integration rules, and calculating areas",
        sections: [
            {
                id: "primitives-definition",
                title: "I. Definition",
                content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>A function F is a <strong>primitive</strong> (antiderivative) of f on interval I if:</p>
  <p><strong>F'(x) = f(x)</strong> for all x ∈ I</p>
</div>

<h3>Key Property</h3>
<p>If F is a primitive of f, then ALL primitives of f are of the form <strong>F(x) + C</strong> where C is a constant.</p>

<div class="tip-box">
  <strong>💡 Think of it:</strong> Integration is the "reverse" of differentiation. If you differentiate F and get f, then F is a primitive of f.
</div>`,
            },
            {
                id: "primitives-table",
                title: "II. Table of Primitives",
                content: `
<h3>Basic Primitives</h3>
<table class="study-table">
  <tr><th>f(x)</th><th>F(x) (primitive)</th><th>Domain</th></tr>
  <tr><td>a (constant)</td><td>ax + C</td><td>ℝ</td></tr>
  <tr><td>xⁿ</td><td>xⁿ⁺¹/(n+1) + C</td><td>ℝ (n ≠ −1)</td></tr>
  <tr><td>1/x</td><td>ln|x| + C</td><td>]0,+∞[ or ]−∞,0[</td></tr>
  <tr><td>1/x²</td><td>−1/x + C</td><td>]0,+∞[ or ]−∞,0[</td></tr>
  <tr><td>1/√x</td><td>2√x + C</td><td>]0,+∞[</td></tr>
  <tr><td>cos(x)</td><td>sin(x) + C</td><td>ℝ</td></tr>
  <tr><td>sin(x)</td><td>−cos(x) + C</td><td>ℝ</td></tr>
  <tr><td>eˣ</td><td>eˣ + C</td><td>ℝ</td></tr>
</table>

<h3>Composite Primitives</h3>
<table class="study-table">
  <tr><th>f(x)</th><th>F(x)</th></tr>
  <tr><td>u'(x) × [u(x)]ⁿ</td><td>[u(x)]ⁿ⁺¹/(n+1) + C</td></tr>
  <tr><td>u'(x)/u(x)</td><td>ln|u(x)| + C</td></tr>
  <tr><td>u'(x) × e^(u(x))</td><td>e^(u(x)) + C</td></tr>
  <tr><td>u'(x) × cos(u(x))</td><td>sin(u(x)) + C</td></tr>
  <tr><td>u'(x) × sin(u(x))</td><td>−cos(u(x)) + C</td></tr>
</table>`,
            },
            {
                id: "integrals",
                title: "III. Definite Integrals & Areas",
                content: `
<h3>Definite Integral</h3>
<div class="formula-box">
  <p><strong>∫ₐᵇ f(x)dx = F(b) − F(a)</strong></p>
  <p>where F is any primitive of f.</p>
</div>

<h3>Properties</h3>
<ul>
  <li>∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx</li>
  <li>∫ₐᵇ αf(x)dx = α × ∫ₐᵇ f(x)dx</li>
  <li>∫ₐᵇ f(x)dx = −∫ᵇₐ f(x)dx</li>
  <li>∫ₐᵃ f(x)dx = 0</li>
  <li>∫ₐᵇ f(x)dx + ∫ᵇᶜ f(x)dx = ∫ₐᶜ f(x)dx (Chasles)</li>
</ul>

<h3>Area Calculation</h3>
<div class="formula-box">
  <p>Area between curve f and x-axis on [a,b]:</p>
  <p><strong>Area = ∫ₐᵇ |f(x)|dx</strong></p>
  <p>Area between two curves f and g on [a,b]:</p>
  <p><strong>Area = ∫ₐᵇ |f(x) − g(x)|dx</strong></p>
</div>

<div class="tip-box">
  <strong>💡 Watch out:</strong> The integral ∫ₐᵇ f(x)dx can be negative! For area, always use absolute value or split the integral where f changes sign.
</div>`,
            },
        ],
        keyFormulas: [
            "F'(x) = f(x) → F is a primitive of f",
            "∫ₐᵇ f(x)dx = F(b) − F(a)",
            "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C",
            "∫ eˣ dx = eˣ + C",
            "∫ 1/x dx = ln|x| + C",
            "Area = ∫ₐᵇ |f(x)|dx",
        ],
        quiz: [
            {
                id: "p1",
                question: "What is a primitive of f(x) = 3x²?",
                options: [
                    "6x",
                    "x³ + C",
                    "x³",
                    "9x³ + C",
                ],
                correctAnswer: 1,
                explanation:
                    "∫3x² dx = 3 × x³/3 + C = x³ + C. Don't forget the constant!",
            },
            {
                id: "p2",
                question: "Calculate ∫₀¹ 2x dx",
                options: ["0", "1", "2", "½"],
                correctAnswer: 1,
                explanation:
                    "Primitive of 2x is x². So ∫₀¹ 2x dx = 1² − 0² = 1.",
            },
            {
                id: "p3",
                question: "What is ∫ cos(2x) dx?",
                options: [
                    "sin(2x) + C",
                    "2sin(2x) + C",
                    "sin(2x)/2 + C",
                    "−sin(2x) + C",
                ],
                correctAnswer: 2,
                explanation:
                    "By substitution: ∫cos(u) × (1/2)du = sin(u)/2 + C = sin(2x)/2 + C.",
            },
        ],
    },
    {
        id: "math-sequences",
        title: "Numerical Sequences",
        description:
            "Arithmetic & geometric sequences, convergence, recursive sequences",
        sections: [
            {
                id: "seq-definitions",
                title: "I. Definitions & Types",
                content: `
<h3>Definition</h3>
<p>A <strong>numerical sequence</strong> (uₙ) is a function from ℕ to ℝ that assigns to each natural number n a real number uₙ.</p>

<h3>Arithmetic Sequences</h3>
<div class="formula-box">
  <p><strong>Definition:</strong> uₙ₊₁ = uₙ + d (constant difference d)</p>
  <p><strong>General term:</strong> uₙ = u₀ + nd</p>
  <p><strong>Sum:</strong> S = (n+1) × (u₀ + uₙ)/2</p>
</div>

<h3>Geometric Sequences</h3>
<div class="formula-box">
  <p><strong>Definition:</strong> uₙ₊₁ = q × uₙ (constant ratio q)</p>
  <p><strong>General term:</strong> uₙ = u₀ × qⁿ</p>
  <p><strong>Sum:</strong> S = u₀ × (1 − qⁿ⁺¹)/(1 − q) if q ≠ 1</p>
</div>`,
            },
            {
                id: "seq-monotonicity",
                title: "II. Monotonicity & Bounds",
                content: `
<h3>Studying Monotonicity</h3>
<p>Three methods:</p>
<ol>
  <li><strong>Sign of uₙ₊₁ − uₙ:</strong>
    <ul>
      <li>If uₙ₊₁ − uₙ > 0 → increasing</li>
      <li>If uₙ₊₁ − uₙ < 0 → decreasing</li>
    </ul>
  </li>
  <li><strong>Ratio uₙ₊₁/uₙ (if uₙ > 0):</strong>
    <ul>
      <li>If ratio > 1 → increasing</li>
      <li>If ratio < 1 → decreasing</li>
    </ul>
  </li>
  <li><strong>Using f:</strong> If uₙ = f(n), study f'</li>
</ol>

<h3>Bounded Sequences</h3>
<div class="formula-box">
  <p>(uₙ) is <strong>bounded above</strong> if ∃M, ∀n: uₙ ≤ M</p>
  <p>(uₙ) is <strong>bounded below</strong> if ∃m, ∀n: uₙ ≥ m</p>
  <p>(uₙ) is <strong>bounded</strong> if bounded above AND below</p>
</div>`,
            },
            {
                id: "seq-convergence",
                title: "III. Convergence",
                content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>(uₙ) <strong>converges</strong> to L if: lim<sub>n→+∞</sub> uₙ = L</p>
</div>

<h3>Key Limits</h3>
<ul>
  <li>lim 1/n = 0</li>
  <li>lim 1/n² = 0</li>
  <li>lim qⁿ = 0 if |q| < 1</li>
  <li>lim qⁿ = +∞ if q > 1</li>
  <li>lim n = +∞</li>
</ul>

<h3>Convergence Theorem</h3>
<div class="important-box">
  <p><strong>Monotone Convergence:</strong> Every bounded monotonic sequence converges.</p>
  <ul>
    <li>Increasing + bounded above → converges</li>
    <li>Decreasing + bounded below → converges</li>
  </ul>
</div>

<div class="tip-box">
  <strong>💡 Fixed Point Method:</strong> If uₙ₊₁ = f(uₙ) and (uₙ) converges to L, then L = f(L). Solve this equation to find the limit!
</div>`,
            },
        ],
        keyFormulas: [
            "Arithmetic: uₙ = u₀ + nd, Sum = (n+1)(u₀+uₙ)/2",
            "Geometric: uₙ = u₀ × qⁿ, Sum = u₀(1−qⁿ⁺¹)/(1−q)",
            "lim qⁿ = 0 if |q| < 1",
            "Bounded + Monotonic → Convergent",
            "If uₙ→L and uₙ₊₁ = f(uₙ), then L = f(L)",
        ],
        quiz: [
            {
                id: "s1",
                question:
                    "If uₙ₊₁ = uₙ + 3 and u₀ = 2, what is u₅?",
                options: ["15", "17", "12", "20"],
                correctAnswer: 1,
                explanation:
                    "Arithmetic with d=3: u₅ = u₀ + 5d = 2 + 15 = 17.",
            },
            {
                id: "s2",
                question:
                    "A geometric sequence with u₀ = 4 and q = 1/2. What is lim uₙ?",
                options: ["4", "+∞", "0", "2"],
                correctAnswer: 2,
                explanation:
                    "Since |q| = 1/2 < 1, qⁿ → 0, so uₙ = 4(1/2)ⁿ → 0.",
            },
        ],
    },
];
