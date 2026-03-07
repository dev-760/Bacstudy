import { Lesson } from "./types";

export const probabilityLesson: Lesson = {
    id: "math-probability",
    title: "Probability",
    description: "Conditional probability, independence, and total probability theorem",
    sections: [
        {
            id: "prob-basics", title: "I. Fundamentals", content: `
<h3>Definitions</h3>
<div class="formula-box">
  <p>$\\Omega$ = sample space, $A$ = event, $P(A) \\in [0,1]$</p>
  <p>$P(\\Omega) = 1$, $P(\\emptyset) = 0$</p>
  <p>$P(\\overline{A}) = 1 - P(A)$</p>
  <p>$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</p>
</div>
<h3>Equiprobability</h3>
<div class="formula-box">
  <p>$$P(A) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}$$</p>
</div>` },
        {
            id: "prob-conditional", title: "II. Conditional Probability", content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>$$P_B(A) = P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\quad \\text{(with } P(B) > 0\\text{)}$$</p>
</div>
<h3>Multiplication Rule</h3>
<div class="formula-box">
  <p>$$P(A \\cap B) = P(B) \\cdot P_B(A) = P(A) \\cdot P_A(B)$$</p>
</div>
<h3>Tree Diagrams</h3>
<div class="tip-box">
  <strong>💡 Exam tip:</strong> Draw a probability tree for multi-step experiments. Multiply along branches, add across branches.
</div>` },
        {
            id: "prob-independence", title: "III. Independence", content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>$A$ and $B$ are <strong>independent</strong> if and only if:</p>
  <p>$$P(A \\cap B) = P(A) \\times P(B)$$</p>
</div>
<p>Equivalently: $P_B(A) = P(A)$ (knowing $B$ doesn't change $A$).</p>
<div class="important-box">
  <p>If $A$ and $B$ are independent, then $A$ and $\\overline{B}$ are also independent.</p>
</div>` },
        {
            id: "prob-total", title: "IV. Total Probability", content: `
<h3>Total Probability Theorem</h3>
<div class="formula-box">
  <p>If $B_1, B_2, ..., B_n$ partition $\\Omega$:</p>
  <p>$$P(A) = \\sum_{k=1}^{n} P(B_k) \\cdot P_{B_k}(A)$$</p>
</div>
<h3>Bayes' Theorem</h3>
<div class="formula-box">
  <p>$$P_{A}(B_k) = \\frac{P(B_k) \\cdot P_{B_k}(A)}{P(A)}$$</p>
</div>` },
    ],
    keyFormulas: [
        "$P(A|B) = P(A \\cap B)/P(B)$",
        "$P(A \\cap B) = P(A) \\cdot P(B)$ (independence)",
        "$P(\\overline{A}) = 1 - P(A)$",
        "Total prob: $P(A) = \\sum P(B_k) \\cdot P_{B_k}(A)$",
    ],
    quiz: [
        { id: "pr1", question: "P(Ā) + P(A) equals:", options: ["0", "1/2", "1", "2"], correctAnswer: 2, explanation: "Complementary events always sum to 1." },
        { id: "pr2", question: "If P(A) = 0.3 and P(B) = 0.4 and A,B independent, P(A∩B) =", options: ["0.7", "0.12", "0.1", "0.3"], correctAnswer: 1, explanation: "Independent: P(A∩B) = 0.3×0.4 = 0.12." },
        { id: "pr3", question: "P(A|B) is defined only when:", options: ["P(A) > 0", "P(B) > 0", "P(A∩B) > 0", "P(A∪B) > 0"], correctAnswer: 1, explanation: "We divide by P(B), so need P(B) > 0." },
        { id: "pr4", question: "P(A∪B) = P(A) + P(B) when A,B are:", options: ["Independent", "Dependent", "Mutually exclusive", "Equal"], correctAnswer: 2, explanation: "Mutually exclusive: A∩B = ∅, so P(A∩B) = 0." },
        { id: "pr5", question: "In a tree diagram, you multiply along:", options: ["Rows", "Columns", "Branches", "Leaves only"], correctAnswer: 2, explanation: "Multiply probabilities along each branch path." },
        { id: "pr6", question: "A die is thrown. P(even) =", options: ["1/6", "1/3", "1/2", "2/3"], correctAnswer: 2, explanation: "3 even outcomes (2,4,6) out of 6. P = 3/6 = 1/2." },
        { id: "pr7", question: "If P(A|B) = P(A), then A and B are:", options: ["Equal", "Complementary", "Independent", "Mutually exclusive"], correctAnswer: 2, explanation: "Definition of independence." },
        { id: "pr8", question: "P(A∪B) = 0.7, P(A) = 0.5, P(B) = 0.4. Then P(A∩B) =", options: ["0.1", "0.2", "0.3", "0.9"], correctAnswer: 1, explanation: "P(A∩B) = P(A)+P(B)−P(A∪B) = 0.5+0.4−0.7 = 0.2." },
        { id: "pr9", question: "Bayes' theorem is used to:", options: ["Find P(A∪B)", "Reverse conditional probability", "Calculate averages", "Find variance"], correctAnswer: 1, explanation: "Bayes switches from P(A|B) to P(B|A)." },
        { id: "pr10", question: "Total probability requires B₁,...,Bₙ to form:", options: ["A union", "An intersection", "A partition of Ω", "Independent events"], correctAnswer: 2, explanation: "Events must partition the sample space." },
        { id: "pr11", question: "Two coins are tossed. P(both heads) =", options: ["1/2", "1/4", "1/3", "3/4"], correctAnswer: 1, explanation: "P(H)×P(H) = 1/2 × 1/2 = 1/4." },
        { id: "pr12", question: "If A⊂B, then P(A|B) =", options: ["P(A)/P(B)", "P(B)/P(A)", "1", "0"], correctAnswer: 0, explanation: "A⊂B means A∩B = A, so P(A|B) = P(A)/P(B)." },
        { id: "pr13", question: "P(A∩B) ≤ min(P(A), P(B)) is:", options: ["Sometimes true", "Always true", "Never true", "Only if independent"], correctAnswer: 1, explanation: "A∩B ⊆ A and A∩B ⊆ B, so P(A∩B) ≤ both." },
        { id: "pr14", question: "Drawing without replacement makes events:", options: ["Independent", "Dependent", "Impossible", "Certain"], correctAnswer: 1, explanation: "Without replacement changes probabilities → dependent." },
        { id: "pr15", question: "0 ≤ P(A) ≤ 1 is a(n):", options: ["Theorem", "Axiom", "Hypothesis", "Exception"], correctAnswer: 1, explanation: "This is one of Kolmogorov's axioms of probability." },
    ],
    examProblems: [
        { id: "pr-ex1", title: "National Exam Problem 1", problem: `<p>A bag has 4 red and 6 blue balls. Two balls are drawn without replacement.</p><ol><li>Draw the probability tree.</li><li>Calculate P(both red).</li><li>Calculate P(second ball is red).</li></ol>`, solution: `<ol><li>First draw: P(R₁)=4/10, P(B₁)=6/10. Second|R₁: P(R₂)=3/9, P(B₂)=6/9. Second|B₁: P(R₂)=4/9, P(B₂)=5/9.</li><li>P(R₁∩R₂) = 4/10 × 3/9 = 12/90 = 2/15.</li><li>Total prob: P(R₂) = P(R₁)P(R₂|R₁)+P(B₁)P(R₂|B₁) = 4/10×3/9 + 6/10×4/9 = 12/90+24/90 = 36/90 = 2/5.</li></ol>` },
        { id: "pr-ex2", title: "National Exam Problem 2", problem: `<p>A factory has machines A (60%) and B (40%). Defect rates: A→2%, B→5%.</p><ol><li>Find P(defective).</li><li>A product is defective. Find P(from machine A).</li></ol>`, solution: `<ol><li>P(D) = P(A)P(D|A)+P(B)P(D|B) = 0.6×0.02+0.4×0.05 = 0.012+0.02 = 0.032.</li><li>Bayes: P(A|D) = P(A)P(D|A)/P(D) = 0.012/0.032 = 3/8 = 0.375.</li></ol>` },
        { id: "pr-ex3", title: "National Exam Problem 3", problem: `<p>A student answers 3 MCQ questions (4 choices each) by guessing randomly. Let $X$ = number of correct answers.</p><ol><li>Show this is a binomial distribution.</li><li>Calculate P(X=0), P(X=1), P(X≥1).</li></ol>`, solution: `<ol><li>n=3 trials, each with p=1/4 and independence → $X \\sim B(3, 1/4)$.</li><li>$P(X=0)=(3/4)^3=27/64$. $P(X=1)=\\binom{3}{1}(1/4)(3/4)^2=3\\times9/64=27/64$. $P(X\\ge1)=1-P(X=0)=37/64$.</li></ol>` },
    ],
};

export const integralsLesson: Lesson = {
    id: "math-integrals",
    title: "Integrals & Area Calculation",
    description: "Definite integrals, properties, integration techniques, and area between curves",
    sections: [
        {
            id: "int-def", title: "I. Definite Integral", content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>If $F$ is a primitive of $f$ on $[a,b]$:</p>
  <p>$$\\int_a^b f(x)\\,dx = F(b) - F(a) = [F(x)]_a^b$$</p>
</div>
<h3>Properties</h3>
<div class="formula-box">
  <p>$\\int_a^b [f(x)+g(x)]dx = \\int_a^b f(x)dx + \\int_a^b g(x)dx$</p>
  <p>$\\int_a^b \\alpha f(x)dx = \\alpha \\int_a^b f(x)dx$</p>
  <p>$\\int_a^b f(x)dx = -\\int_b^a f(x)dx$</p>
  <p>$\\int_a^a f(x)dx = 0$</p>
  <p>$\\int_a^b f(x)dx + \\int_b^c f(x)dx = \\int_a^c f(x)dx$ (Chasles)</p>
</div>` },
        {
            id: "int-techniques", title: "II. Integration Techniques", content: `
<h3>Table of Primitives</h3>
<div class="formula-box">
  <p>$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ &emsp; $\\int \\frac{1}{x}dx = \\ln|x| + C$</p>
  <p>$\\int e^x dx = e^x + C$ &emsp; $\\int \\cos x\\,dx = \\sin x + C$</p>
  <p>$\\int \\sin x\\,dx = -\\cos x + C$</p>
</div>
<h3>Composite Patterns</h3>
<div class="formula-box">
  <p>$\\int u'e^u dx = e^u + C$ &emsp; $\\int \\frac{u'}{u}dx = \\ln|u| + C$</p>
  <p>$\\int u'u^n dx = \\frac{u^{n+1}}{n+1} + C$</p>
</div>
<h3>Integration by Parts</h3>
<div class="formula-box">
  <p>$$\\int_a^b u \\cdot v'\\,dx = [uv]_a^b - \\int_a^b u' \\cdot v\\,dx$$</p>
</div>` },
        {
            id: "int-area", title: "III. Area Calculation", content: `
<h3>Area under a Curve</h3>
<div class="formula-box">
  <p>$$\\text{Area} = \\int_a^b |f(x)|\\,dx$$</p>
</div>
<h3>Area between Two Curves</h3>
<div class="formula-box">
  <p>$$\\text{Area} = \\int_a^b |f(x) - g(x)|\\,dx$$</p>
</div>
<div class="tip-box">
  <strong>💡 Method:</strong> Find intersection points, determine which function is on top in each interval, then integrate.
</div>` },
    ],
    keyFormulas: [
        "$\\int_a^b f(x)dx = F(b) - F(a)$",
        "$\\int u \\cdot v' = uv - \\int u' \\cdot v$ (by parts)",
        "Area = $\\int_a^b |f(x)|dx$",
        "Chasles: $\\int_a^c = \\int_a^b + \\int_b^c$",
    ],
    quiz: [
        { id: "in1", question: "∫₀¹ 2x dx =", options: ["0", "1", "2", "½"], correctAnswer: 1, explanation: "F(x) = x². F(1)−F(0) = 1−0 = 1." },
        { id: "in2", question: "∫ x² dx =", options: ["x³/3 + C", "2x + C", "x³ + C", "x²/2 + C"], correctAnswer: 0, explanation: "Power rule: xⁿ⁺¹/(n+1) = x³/3." },
        { id: "in3", question: "∫₁² 1/x dx =", options: ["ln 2", "1/2", "ln 1", "1"], correctAnswer: 0, explanation: "[ln|x|]₁² = ln 2 − ln 1 = ln 2." },
        { id: "in4", question: "∫ₐᵃ f(x) dx =", options: ["f(a)", "1", "0", "2f(a)"], correctAnswer: 2, explanation: "Integral over zero-width interval = 0." },
        { id: "in5", question: "∫₀^π sin x dx =", options: ["0", "1", "2", "−2"], correctAnswer: 2, explanation: "[−cos x]₀^π = −cos π + cos 0 = 1 + 1 = 2." },
        { id: "in6", question: "∫ eˣ dx =", options: ["xeˣ + C", "eˣ + C", "eˣ/x + C", "ln(eˣ) + C"], correctAnswer: 1, explanation: "The integral of eˣ is eˣ + C." },
        { id: "in7", question: "∫₁³ 1 dx =", options: ["1", "2", "3", "0"], correctAnswer: 1, explanation: "[x]₁³ = 3 − 1 = 2." },
        { id: "in8", question: "Integration by parts uses:", options: ["∫ uv' = uv − ∫ u'v", "∫ u+v = ∫u + ∫v", "∫ u/v = ln|v|", "∫ u² = u³/3"], correctAnswer: 0, explanation: "IBP formula: ∫ uv' = uv − ∫ u'v." },
        { id: "in9", question: "Area = ∫|f(x)|dx because:", options: ["f may be negative", "f is always positive", "We need derivatives", "Direction matters"], correctAnswer: 0, explanation: "If f < 0, ∫f < 0 but area must be positive." },
        { id: "in10", question: "∫ cos(2x) dx =", options: ["sin(2x)+C", "sin(2x)/2+C", "2sin(2x)+C", "−sin(2x)/2+C"], correctAnswer: 1, explanation: "∫cos(u)·(1/2)du = sin(u)/2 + C where u=2x." },
        { id: "in11", question: "∫₀¹ eˣ dx =", options: ["1", "e", "e−1", "e+1"], correctAnswer: 2, explanation: "[eˣ]₀¹ = e¹ − e⁰ = e − 1." },
        { id: "in12", question: "Chasles' relation says:", options: ["∫ₐᵇ + ∫ᵇᶜ = ∫ₐᶜ", "∫ₐᵇ × ∫ᵇᶜ = ∫ₐᶜ", "∫ₐᵇ = ∫ₐᶜ + ∫ᶜᵇ", "Both A and C"], correctAnswer: 3, explanation: "Chasles: ∫ₐᵇ + ∫ᵇᶜ = ∫ₐᶜ, equivalent to rearranging." },
        { id: "in13", question: "∫ 3x² dx =", options: ["x³ + C", "6x + C", "x³/3 + C", "9x³ + C"], correctAnswer: 0, explanation: "3·x³/3 = x³ + C." },
        { id: "in14", question: "∫₀^(π/2) cos x dx =", options: ["0", "1", "−1", "π/2"], correctAnswer: 1, explanation: "[sin x]₀^(π/2) = sin(π/2)−sin(0) = 1−0 = 1." },
        { id: "in15", question: "∫ₐᵇ f dx = −∫ᵇₐ f dx is:", options: ["Sometimes true", "Always true", "Never true", "Only for positive f"], correctAnswer: 1, explanation: "This is a fundamental property of integrals." },
    ],
    examProblems: [
        { id: "in-ex1", title: "National Exam Problem 1", problem: `<p>Calculate $\\int_0^1 (2x+1)e^{x^2+x} dx$.</p>`, solution: `<p>Let $u = x^2+x$, then $u' = 2x+1$. The integral is $\\int u' e^u dx = [e^u]_0^1 = e^{1+1} - e^0 = e^2 - 1$.</p>` },
        { id: "in-ex2", title: "National Exam Problem 2", problem: `<p>Calculate $\\int_0^1 x e^x dx$ using integration by parts.</p>`, solution: `<p>$u = x$, $v' = e^x$, so $u' = 1$, $v = e^x$. $\\int_0^1 xe^x dx = [xe^x]_0^1 - \\int_0^1 e^x dx = e - [e^x]_0^1 = e - (e-1) = 1$.</p>` },
        { id: "in-ex3", title: "National Exam Problem 3", problem: `<p>Let $f(x) = x^2 - 2x$.</p><ol><li>Find where $f(x) = 0$.</li><li>Calculate the area between $f$ and the x-axis on $[0, 3]$.</li></ol>`, solution: `<ol><li>$x(x-2) = 0 \\Rightarrow x = 0$ or $x = 2$.</li><li>$f < 0$ on $[0,2]$, $f > 0$ on $[2,3]$. Area = $\\int_0^2 |f|dx + \\int_2^3 f\\,dx = -[x^3/3-x^2]_0^2 + [x^3/3-x^2]_2^3 = -(-4/3)+4/3 = 4/3+4/3 = 8/3$.</li></ol>` },
    ],
};

export const spaceGeometryLesson: Lesson = {
    id: "math-space-geometry",
    title: "Space Geometry",
    description: "Scalar product, equations of lines and planes, distances and angles in 3D",
    sections: [
        {
            id: "sg-vectors", title: "I. Vectors in Space", content: `
<h3>Coordinates</h3>
<div class="formula-box">
  <p>$\\vec{u} = (x, y, z)$, $\\vec{v} = (x', y', z')$</p>
  <p>$\\vec{u} + \\vec{v} = (x+x', y+y', z+z')$</p>
  <p>$k\\vec{u} = (kx, ky, kz)$</p>
</div>
<h3>Scalar Product</h3>
<div class="formula-box">
  <p>$$\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz' = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cos\\theta$$</p>
  <p>$$\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$$</p>
</div>
<p>$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$</p>` },
        {
            id: "sg-planes", title: "II. Equations of Planes", content: `
<h3>General Equation</h3>
<div class="formula-box">
  <p>$$ax + by + cz + d = 0$$</p>
  <p>Normal vector: $\\vec{n} = (a, b, c)$</p>
</div>
<h3>Plane through 3 Points</h3>
<p>Given $A$, $B$, $C$: normal $\\vec{n} = \\vec{AB} \\times \\vec{AC}$ (cross product).</p>
<h3>Parallel & Perpendicular Planes</h3>
<div class="formula-box">
  <p>$(P_1) \\parallel (P_2) \\Leftrightarrow \\vec{n_1} = k\\vec{n_2}$</p>
  <p>$(P_1) \\perp (P_2) \\Leftrightarrow \\vec{n_1} \\cdot \\vec{n_2} = 0$</p>
</div>` },
        {
            id: "sg-lines", title: "III. Lines & Distances", content: `
<h3>Parametric Equations of a Line</h3>
<div class="formula-box">
  <p>Through $A(x_0,y_0,z_0)$ with direction $\\vec{u}(a,b,c)$:</p>
  <p>$$x = x_0 + at, \\quad y = y_0 + bt, \\quad z = z_0 + ct$$</p>
</div>
<h3>Distance Point to Plane</h3>
<div class="formula-box">
  <p>$$d(M, P) = \\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2+b^2+c^2}}$$</p>
</div>` },
    ],
    keyFormulas: [
        "$\\vec{u}\\cdot\\vec{v} = xx'+yy'+zz'$",
        "$\\|\\vec{u}\\| = \\sqrt{x^2+y^2+z^2}$",
        "Plane: $ax+by+cz+d=0$, normal $(a,b,c)$",
        "$d(M,P) = |ax_0+by_0+cz_0+d|/\\sqrt{a^2+b^2+c^2}$",
    ],
    quiz: [
        { id: "sg1", question: "u⃗·v⃗ = 0 means:", options: ["Parallel", "Perpendicular", "Equal", "Opposite"], correctAnswer: 1, explanation: "Zero scalar product means orthogonal." },
        { id: "sg2", question: "‖(1,2,2)‖ =", options: ["3", "5", "√5", "√9"], correctAnswer: 0, explanation: "√(1+4+4) = √9 = 3." },
        { id: "sg3", question: "(1,2,3)·(4,5,6) =", options: ["15", "32", "21", "27"], correctAnswer: 1, explanation: "1×4+2×5+3×6 = 4+10+18 = 32." },
        { id: "sg4", question: "Normal to 2x+3y−z+1=0 is:", options: ["(2,3,1)", "(2,3,−1)", "(1,1,1)", "(2,−3,1)"], correctAnswer: 1, explanation: "Coefficients of x,y,z give normal: (2,3,−1)." },
        { id: "sg5", question: "Two planes parallel ⟺ normals are:", options: ["Perpendicular", "Proportional", "Equal", "Zero"], correctAnswer: 1, explanation: "n₁ = kn₂ for parallel planes." },
        { id: "sg6", question: "Distance from O(0,0,0) to x+y+z−3=0:", options: ["√3", "3", "1", "3/√3"], correctAnswer: 0, explanation: "d = |0+0+0−3|/√(1+1+1) = 3/√3 = √3." },
        { id: "sg7", question: "A line in 3D needs:", options: ["A point and direction", "Two points", "Both A and B", "Only a direction"], correctAnswer: 2, explanation: "Point + direction, or equivalently two points." },
        { id: "sg8", question: "Cross product gives:", options: ["A scalar", "A vector ⊥ to both", "The angle", "The distance"], correctAnswer: 1, explanation: "u×v is perpendicular to both u and v." },
        { id: "sg9", question: "Angle between planes uses:", options: ["Cross product", "Scalar product of normals", "Sum of normals", "Subtraction"], correctAnswer: 1, explanation: "cos θ = |n₁·n₂|/(‖n₁‖‖n₂‖)." },
        { id: "sg10", question: "Midpoint of A(1,2,3) and B(3,4,5):", options: ["(2,3,4)", "(4,6,8)", "(1,1,1)", "(2,2,2)"], correctAnswer: 0, explanation: "((1+3)/2, (2+4)/2, (3+5)/2) = (2,3,4)." },
        { id: "sg11", question: "A sphere has equation:", options: ["ax+by+cz=d", "(x−a)²+(y−b)²+(z−c)²=r²", "x²+y²=r²", "z=ax+by"], correctAnswer: 1, explanation: "Sphere: all points at distance r from center (a,b,c)." },
        { id: "sg12", question: "k(x,y,z) = (kx,ky,kz) is:", options: ["Addition", "Scalar multiplication", "Dot product", "Cross product"], correctAnswer: 1, explanation: "Multiplying a vector by a scalar." },
        { id: "sg13", question: "If u⃗ = (1,0,0) and v⃗ = (0,1,0), u⃗·v⃗ =", options: ["0", "1", "−1", "√2"], correctAnswer: 0, explanation: "1×0+0×1+0×0 = 0 (perpendicular basis vectors)." },
        { id: "sg14", question: "A plane is determined by:", options: ["1 point", "2 points", "3 non-collinear points", "4 points"], correctAnswer: 2, explanation: "Three non-collinear points determine a unique plane." },
        { id: "sg15", question: "Line ⊥ to plane ⟺ direction ∥ to:", options: ["Any vector in plane", "Normal of plane", "Another line", "The origin"], correctAnswer: 1, explanation: "Line perpendicular to plane has direction parallel to normal." },
    ],
    examProblems: [
        { id: "sg-ex1", title: "National Exam Problem 1", problem: `<p>$A(1,0,2)$, $B(3,1,0)$, $C(0,2,1)$.</p><ol><li>Find $\\vec{AB}$ and $\\vec{AC}$.</li><li>Show A,B,C are not collinear.</li><li>Find the equation of plane (ABC).</li></ol>`, solution: `<ol><li>$\\vec{AB}=(2,1,-2)$, $\\vec{AC}=(-1,2,-1)$.</li><li>$\\vec{AB} \\neq k\\vec{AC}$ (no scalar k works), so not collinear.</li><li>Normal $\\vec{n}=\\vec{AB}\\times\\vec{AC}=(1\\times(-1)-(-2)\\times2, (-2)\\times(-1)-2\\times(-1), 2\\times2-1\\times(-1))=(3,4,5)$. Plane: $3(x-1)+4(y-0)+5(z-2)=0 \\Rightarrow 3x+4y+5z-13=0$.</li></ol>` },
        { id: "sg-ex2", title: "National Exam Problem 2", problem: `<p>Find the distance from $M(1,1,1)$ to the plane $2x-y+2z-6=0$.</p>`, solution: `<p>$d = \\frac{|2(1)-1(1)+2(1)-6|}{\\sqrt{4+1+4}} = \\frac{|2-1+2-6|}{3} = \\frac{3}{3} = 1$.</p>` },
        { id: "sg-ex3", title: "National Exam Problem 3", problem: `<p>Show that $\\vec{u}=(1,1,0)$ and $\\vec{v}=(0,1,1)$ are not collinear. Find a vector $\\vec{w}$ perpendicular to both.</p>`, solution: `<p>No scalar $k$: $(1,1,0) = k(0,1,1)$ impossible ($k=1/1$ but $1 \\neq 0$). $\\vec{w}=\\vec{u}\\times\\vec{v} = (1\\cdot1-0\\cdot1, 0\\cdot0-1\\cdot1, 1\\cdot1-1\\cdot0) = (1,-1,1)$. Check: $\\vec{w}\\cdot\\vec{u}=1-1+0=0$ ✓, $\\vec{w}\\cdot\\vec{v}=0-1+1=0$ ✓.</p>` },
    ],
};

export const arithmeticLesson: Lesson = {
    id: "math-arithmetic",
    title: "Arithmetic",
    description: "Divisibility, Euclidean algorithm, prime numbers, and congruences",
    sections: [
        {
            id: "ar-divisibility", title: "I. Divisibility", content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>$a$ divides $b$ (written $a | b$) if $\\exists k \\in \\mathbb{Z}, b = ka$.</p>
</div>
<h3>Properties</h3>
<ul>
  <li>$a|b$ and $a|c \\Rightarrow a|(b+c)$ and $a|(b-c)$</li>
  <li>$a|b \\Rightarrow a|kb$ for any $k$</li>
  <li>$a|b$ and $b|c \\Rightarrow a|c$ (transitivity)</li>
</ul>
<h3>Euclidean Division</h3>
<div class="formula-box">
  <p>$a = bq + r$ with $0 \\le r < |b|$</p>
  <p>$q$ = quotient, $r$ = remainder</p>
</div>` },
        {
            id: "ar-gcd", title: "II. GCD & Euclidean Algorithm", content: `
<h3>GCD</h3>
<div class="formula-box">
  <p>$\\gcd(a,b)$ = greatest common divisor of $a$ and $b$.</p>
  <p>Key property: $\\gcd(a,b) = \\gcd(b, a \\mod b)$</p>
</div>
<h3>Euclidean Algorithm</h3>
<div class="example-box">
  <p>Find gcd(252, 198):</p>
  <p>$252 = 1 \\times 198 + 54$</p>
  <p>$198 = 3 \\times 54 + 36$</p>  
  <p>$54 = 1 \\times 36 + 18$</p>
  <p>$36 = 2 \\times 18 + 0$</p>
  <p>So $\\gcd(252, 198) = 18$.</p>
</div>
<h3>Bézout's Identity</h3>
<div class="formula-box">
  <p>$\\gcd(a,b) = d \\Rightarrow \\exists u,v \\in \\mathbb{Z}: au + bv = d$</p>
</div>` },
        {
            id: "ar-primes", title: "III. Prime Numbers", content: `
<h3>Definition</h3>
<p>$p > 1$ is <strong>prime</strong> if its only divisors are $1$ and $p$.</p>
<div class="formula-box">
  <p>First primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...</p>
</div>
<h3>Fundamental Theorem of Arithmetic</h3>
<div class="important-box">
  <p>Every integer $n > 1$ has a <strong>unique</strong> prime factorization.</p>
  <p>Example: $360 = 2^3 \\times 3^2 \\times 5$</p>
</div>` },
        {
            id: "ar-congruence", title: "IV. Congruences", content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>$a \\equiv b \\pmod{n}$ means $n | (a-b)$.</p>
</div>
<h3>Properties</h3>
<div class="formula-box">
  <p>$a \\equiv b$ and $c \\equiv d \\pmod{n}$:</p>
  <p>$a+c \\equiv b+d \\pmod{n}$</p>
  <p>$a \\times c \\equiv b \\times d \\pmod{n}$</p>
  <p>$a^k \\equiv b^k \\pmod{n}$</p>
</div>` },
    ],
    keyFormulas: [
        "$a = bq + r$, $0 \\le r < |b|$",
        "$\\gcd(a,b) = \\gcd(b, a\\bmod b)$",
        "Bézout: $au + bv = \\gcd(a,b)$",
        "$a \\equiv b \\pmod{n} \\Leftrightarrow n|(a-b)$",
    ],
    quiz: [
        { id: "ar1", question: "gcd(12, 8) =", options: ["2", "4", "8", "24"], correctAnswer: 1, explanation: "12 = 1×8+4, 8 = 2×4+0. GCD = 4." },
        { id: "ar2", question: "7 is prime because:", options: ["It's odd", "Only divisible by 1 and 7", "It's less than 10", "Sum of digits is odd"], correctAnswer: 1, explanation: "Prime = exactly two divisors: 1 and itself." },
        { id: "ar3", question: "17 mod 5 =", options: ["2", "3", "5", "12"], correctAnswer: 0, explanation: "17 = 3×5 + 2. Remainder is 2." },
        { id: "ar4", question: "15 ≡ ? (mod 4)", options: ["1", "2", "3", "0"], correctAnswer: 2, explanation: "15 = 3×4 + 3, so 15 ≡ 3 (mod 4)." },
        { id: "ar5", question: "gcd(a,b) = 1 means a,b are:", options: ["Equal", "Coprime", "Both prime", "Both even"], correctAnswer: 1, explanation: "GCD = 1 means no common factors: coprime." },
        { id: "ar6", question: "2 is the only:", options: ["Odd prime", "Even prime", "Prime less than 3", "Both B and C"], correctAnswer: 3, explanation: "2 is the only even prime and the only prime < 3." },
        { id: "ar7", question: "Bézout: 3×7 + (-2)×10 = 1 shows gcd(7,10)=", options: ["0", "1", "7", "10"], correctAnswer: 1, explanation: "au+bv = 1 proves gcd = 1." },
        { id: "ar8", question: "360 = 2³×3²×5 has how many prime factors?", options: ["2", "3", "5", "8"], correctAnswer: 1, explanation: "Three distinct primes: 2, 3, 5." },
        { id: "ar9", question: "If a|b and a|c, then a divides:", options: ["b/c", "b×c only", "b+c and b−c", "Nothing else"], correctAnswer: 2, explanation: "If a|b and a|c, then a|(b±c)." },
        { id: "ar10", question: "3² ≡ ? (mod 7)", options: ["0", "1", "2", "4"], correctAnswer: 2, explanation: "9 = 1×7 + 2, so 9 ≡ 2 (mod 7)." },
        { id: "ar11", question: "lcm(a,b) × gcd(a,b) =", options: ["a+b", "a×b", "a−b", "a/b"], correctAnswer: 1, explanation: "LCM × GCD = product of the two numbers." },
        { id: "ar12", question: "1 is:", options: ["Prime", "Composite", "Neither", "Both"], correctAnswer: 2, explanation: "1 is neither prime nor composite by convention." },
        { id: "ar13", question: "Euclidean algorithm finds:", options: ["LCM", "GCD", "Prime factorization", "Remainder"], correctAnswer: 1, explanation: "It finds gcd by repeated division." },
        { id: "ar14", question: "If gcd(a,n)=1, Bézout gives:", options: ["a inverse mod n", "a = n", "a|n", "Nothing useful"], correctAnswer: 0, explanation: "au+nv=1 means au≡1 (mod n), so u is the inverse." },
        { id: "ar15", question: "100 mod 7 =", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "100 = 14×7 + 2." },
    ],
    examProblems: [
        { id: "ar-ex1", title: "National Exam Problem 1", problem: `<p>Using the Euclidean algorithm, find $\\gcd(323, 187)$. Then find $u, v$ such that $323u + 187v = \\gcd(323, 187)$.</p>`, solution: `<p>$323 = 1 \\times 187 + 136$, $187 = 1 \\times 136 + 51$, $136 = 2 \\times 51 + 34$, $51 = 1 \\times 34 + 17$, $34 = 2 \\times 17$. GCD = 17. Back-substitute: $17 = 51-34 = 51-(136-2\\times51) = 3\\times51-136 = 3(187-136)-136 = 3\\times187-4\\times136 = 3\\times187-4(323-187) = 7\\times187-4\\times323$. So $u=-4, v=7$.</p>` },
        { id: "ar-ex2", title: "National Exam Problem 2", problem: `<p>Show that for all $n \\in \\mathbb{N}$: $3^{2n} - 1$ is divisible by 8.</p>`, solution: `<p>$3^{2n} = (3^2)^n = 9^n$. $9 \\equiv 1 \\pmod{8}$, so $9^n \\equiv 1^n = 1 \\pmod{8}$. Therefore $3^{2n}-1 \\equiv 0 \\pmod{8}$.</p>` },
        { id: "ar-ex3", title: "National Exam Problem 3", problem: `<p>Solve in $\\mathbb{Z}$: $5x \\equiv 3 \\pmod{7}$.</p>`, solution: `<p>Find 5⁻¹ mod 7: $5 \\times 3 = 15 = 2 \\times 7 + 1$, so $5 \\times 3 \\equiv 1 \\pmod{7}$, inverse is 3. Multiply: $x \\equiv 3 \\times 3 = 9 \\equiv 2 \\pmod{7}$. Solutions: $x = 7k + 2$, $k \\in \\mathbb{Z}$.</p>` },
    ],
};
