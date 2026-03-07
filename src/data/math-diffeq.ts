import { Lesson } from "./types";

export const diffEqLesson: Lesson = {
    id: "math-diff-eq",
    title: "Differential Equations",
    description: "First-order linear ODEs: y' = ay + b, solutions, and applications",
    sections: [
        {
            id: "de-intro", title: "I. Introduction", content: `
<h3>What is a Differential Equation?</h3>
<p>A <strong>differential equation</strong> is an equation involving a function $y(x)$ and its derivatives.</p>
<div class="formula-box">
  <p>A first-order ODE has the form: $y' = f(x, y)$</p>
  <p>A <strong>solution</strong> is any function $y(x)$ that satisfies the equation.</p>
</div>
<h3>Verifying a Solution</h3>
<p>To verify $y(x)$ is a solution: substitute into the equation and check both sides are equal.</p>
<div class="tip-box"><strong>💡 Exam tip:</strong> Always verify your solution by computing $y'$ and substituting back.</div>` },
        {
            id: "de-homogeneous", title: "II. Equation y' = ay", content: `
<h3>General Solution</h3>
<div class="formula-box">
  <p>The equation $y' = ay$ (where $a \\in \\mathbb{R}$) has general solution:</p>
  <p>$$y(x) = C \\cdot e^{ax}, \\quad C \\in \\mathbb{R}$$</p>
</div>
<h3>With Initial Condition</h3>
<div class="formula-box">
  <p>If $y(x_0) = y_0$, then the <strong>unique</strong> solution is:</p>
  <p>$$y(x) = y_0 \\cdot e^{a(x - x_0)}$$</p>
</div>
<h3>Example</h3>
<p>Solve $y' = 3y$ with $y(0) = 2$:</p>
<p>General solution: $y = Ce^{3x}$. Using $y(0) = 2$: $C = 2$.</p>
<p>$$y(x) = 2e^{3x}$$</p>` },
        {
            id: "de-complete", title: "III. Equation y' = ay + b", content: `
<h3>General Solution</h3>
<div class="formula-box">
  <p>The equation $y' = ay + b$ (with $a \\neq 0$) has general solution:</p>
  <p>$$y(x) = C \\cdot e^{ax} - \\frac{b}{a}$$</p>
</div>
<div class="important-box">
  <p><strong>Method:</strong></p>
  <ol>
    <li>Find the particular constant solution: $y_p = -\\frac{b}{a}$</li>
    <li>General solution = homogeneous solution + particular</li>
    <li>$y = Ce^{ax} + y_p$</li>
  </ol>
</div>
<h3>Example</h3>
<p>Solve $y' = -2y + 6$ with $y(0) = 1$:</p>
<p>Particular: $y_p = -6/(-2) = 3$. General: $y = Ce^{-2x} + 3$.</p>
<p>$y(0) = C + 3 = 1 \\Rightarrow C = -2$.</p>
<p>$$y(x) = -2e^{-2x} + 3$$</p>` },
        {
            id: "de-applications", title: "IV. Applications", content: `
<h3>Radioactive Decay</h3>
<div class="formula-box">
  <p>$N'(t) = -\\lambda N(t)$ → solution: $N(t) = N_0 e^{-\\lambda t}$</p>
</div>
<h3>RC Circuit</h3>
<div class="formula-box">
  <p>$RC \\cdot \\frac{du_c}{dt} + u_c = E$ → $u_c' = -\\frac{1}{RC}u_c + \\frac{E}{RC}$</p>
  <p>Solution: $u_c(t) = E(1 - e^{-t/RC})$</p>
</div>
<h3>Population Growth</h3>
<div class="formula-box">
  <p>$P'(t) = kP(t)$ → $P(t) = P_0 e^{kt}$ (exponential growth if $k > 0$)</p>
</div>` },
    ],
    keyFormulas: [
        "$y' = ay \\Rightarrow y = Ce^{ax}$",
        "$y' = ay + b \\Rightarrow y = Ce^{ax} - \\frac{b}{a}$",
        "Particular solution: $y_p = -\\frac{b}{a}$",
        "With $y(x_0) = y_0$: $y = y_0 e^{a(x-x_0)}$",
    ],
    quiz: [
        { id: "de1", question: "The general solution of y' = 5y is:", options: ["y = 5x + C", "y = Ce⁵ˣ", "y = 5eˣ", "y = Ce⁻⁵ˣ"], correctAnswer: 1, explanation: "y' = ay has solution y = Ce^(ax), here a = 5." },
        { id: "de2", question: "The particular solution of y' = −2y + 8 is:", options: ["y = 4", "y = −4", "y = 8", "y = 2"], correctAnswer: 0, explanation: "yₚ = −b/a = −8/(−2) = 4." },
        { id: "de3", question: "y' = 3y, y(0) = 2. What is y(1)?", options: ["2e³", "3e²", "6e", "2e"], correctAnswer: 0, explanation: "y = 2e^(3x), so y(1) = 2e³." },
        { id: "de4", question: "If y = Ce⁻ˣ + 5 solves y' = ay + b, then a =", options: ["1", "−1", "5", "−5"], correctAnswer: 1, explanation: "The exponent gives a = −1." },
        { id: "de5", question: "A diff. equation is 'first-order' when it involves:", options: ["Only y", "y and y'", "y, y', and y''", "No derivatives"], correctAnswer: 1, explanation: "First-order means only the first derivative y' appears." },
        { id: "de6", question: "The number of solutions to y' = 2y with initial condition y(0) = 3 is:", options: ["0", "1", "2", "Infinite"], correctAnswer: 1, explanation: "An initial value problem has a unique solution." },
        { id: "de7", question: "lim(x→+∞) of Ce⁻²ˣ + 3 equals:", options: ["C + 3", "3", "+∞", "0"], correctAnswer: 1, explanation: "e⁻²ˣ → 0, so limit = 0 + 3 = 3." },
        { id: "de8", question: "y' = −y + 4, y(0) = 0. The solution is:", options: ["y = 4(1−e⁻ˣ)", "y = 4e⁻ˣ", "y = −4e⁻ˣ + 4", "Both A and C"], correctAnswer: 3, explanation: "y = Ce⁻ˣ + 4, y(0) = C+4 = 0, C = −4. y = −4e⁻ˣ+4 = 4(1−e⁻ˣ)." },
        { id: "de9", question: "N'(t) = −λN models:", options: ["Population growth", "Radioactive decay", "Charging capacitor", "Free fall"], correctAnswer: 1, explanation: "This is the decay law with solution N = N₀e^(−λt)." },
        { id: "de10", question: "y = 0 is a solution of y' = ay for:", options: ["Only a = 0", "Any a", "No value of a", "Only a > 0"], correctAnswer: 1, explanation: "y = 0 gives y' = 0 = a·0. True for all a (C = 0)." },
        { id: "de11", question: "The general solution of y' = −y + 1 is:", options: ["y = Ce⁻ˣ + 1", "y = Ceˣ − 1", "y = Ce⁻ˣ − 1", "y = Ceˣ + 1"], correctAnswer: 0, explanation: "a = −1, b = 1, yₚ = −1/(−1) = 1. y = Ce⁻ˣ + 1." },
        { id: "de12", question: "If y = 2e³ˣ, then y' equals:", options: ["2e³ˣ", "3e³ˣ", "6e³ˣ", "e⁶ˣ"], correctAnswer: 2, explanation: "(Ce^(ax))' = aCe^(ax) = 3·2·e^(3x) = 6e^(3x)." },
        { id: "de13", question: "For y' = ay + b, if a > 0 then the solutions:", options: ["All converge to −b/a", "All diverge", "Oscillate", "Stay constant"], correctAnswer: 1, explanation: "Ce^(ax) → ±∞ when a > 0, so solutions diverge." },
        { id: "de14", question: "An RC circuit satisfies u' = −u/τ + E/τ. The steady state voltage is:", options: ["0", "E", "τ", "E/τ"], correctAnswer: 1, explanation: "Particular solution: −(E/τ)/(−1/τ) = E." },
        { id: "de15", question: "To solve y' = 2y − 6, first find:", options: ["The derivative", "The integral", "The particular solution yₚ = 3", "The domain"], correctAnswer: 2, explanation: "yₚ = −(−6)/2 = 3, then general solution y = Ce²ˣ + 3." },
    ],
    examProblems: [
        { id: "de-ex1", title: "National Exam Problem 1", problem: `<p>Solve the differential equation $y' + 2y = 6$ with $y(0) = 0$.</p><ol><li>Write the equation in standard form $y' = ay + b$.</li><li>Find the general solution.</li><li>Determine the particular solution satisfying $y(0) = 0$.</li><li>Calculate $\\lim_{x \\to +\\infty} y(x)$.</li></ol>`, solution: `<ol><li>$y' = -2y + 6$, so $a = -2$, $b = 6$.</li><li>$y = Ce^{-2x} + 3$.</li><li>$y(0) = C + 3 = 0 \\Rightarrow C = -3$. So $y(x) = -3e^{-2x} + 3 = 3(1-e^{-2x})$.</li><li>$\\lim_{x \\to +\\infty} y(x) = 3$ (since $e^{-2x} \\to 0$).</li></ol>` },
        { id: "de-ex2", title: "National Exam Problem 2", problem: `<p>A population $P(t)$ grows according to $P'(t) = 0.05P(t)$, with $P(0) = 1000$.</p><ol><li>Solve the differential equation.</li><li>After how many years does the population double?</li></ol>`, solution: `<ol><li>$P(t) = 1000e^{0.05t}$.</li><li>$2000 = 1000e^{0.05t} \\Rightarrow e^{0.05t} = 2 \\Rightarrow t = \\frac{\\ln 2}{0.05} \\approx 13.86$ years.</li></ol>` },
        { id: "de-ex3", title: "National Exam Problem 3", problem: `<p>In an RL circuit, the current satisfies $i' = -\\frac{R}{L}i + \\frac{E}{L}$ with $R = 100\\,\\Omega$, $L = 0.5\\,$H, $E = 12\\,$V, $i(0) = 0$.</p><ol><li>Find $a$ and $b$.</li><li>Solve for $i(t)$.</li><li>Calculate the time constant $\\tau$ and $i(\\tau)$.</li></ol>`, solution: `<ol><li>$a = -R/L = -200$, $b = E/L = 24$.</li><li>$i(t) = Ce^{-200t} + 0.12$. $i(0) = C + 0.12 = 0 \\Rightarrow C = -0.12$. $i(t) = 0.12(1 - e^{-200t})$.</li><li>$\\tau = L/R = 0.0025\\,$s. $i(\\tau) = 0.12(1-e^{-1}) \\approx 0.12 \\times 0.632 \\approx 0.076\\,$A.</li></ol>` },
    ],
};
