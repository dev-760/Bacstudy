import { Lesson } from "./types";

export const complexLesson: Lesson = {
    id: "math-complex",
    title: "Complex Numbers",
    description: "Algebraic and trigonometric forms, modulus, argument, and geometric representation",
    sections: [
        {
            id: "cn-intro", title: "I. Algebraic Form", content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>A complex number $z = a + bi$ where $a, b \\in \\mathbb{R}$ and $i^2 = -1$.</p>
  <p>$a = \\text{Re}(z)$ (real part), $b = \\text{Im}(z)$ (imaginary part).</p>
</div>
<h3>Operations</h3>
<div class="formula-box">
  <p>$(a+bi) + (c+di) = (a+c) + (b+d)i$</p>
  <p>$(a+bi)(c+di) = (ac-bd) + (ad+bc)i$</p>
</div>
<h3>Conjugate</h3>
<div class="formula-box">
  <p>$\\overline{z} = a - bi$</p>
  <p>$z \\cdot \\overline{z} = a^2 + b^2 = |z|^2$</p>
</div>` },
        {
            id: "cn-modulus", title: "II. Modulus & Argument", content: `
<h3>Modulus</h3>
<div class="formula-box">
  <p>$$|z| = \\sqrt{a^2 + b^2}$$</p>
  <p>$|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$, $|z_1/z_2| = |z_1|/|z_2|$</p>
</div>
<h3>Argument</h3>
<div class="formula-box">
  <p>$\\arg(z) = \\theta$ where $\\cos\\theta = \\frac{a}{|z|}$, $\\sin\\theta = \\frac{b}{|z|}$</p>
  <p>$\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2)$</p>
</div>` },
        {
            id: "cn-trig", title: "III. Trigonometric Form", content: `
<h3>Trigonometric Form</h3>
<div class="formula-box">
  <p>$$z = |z|(\\cos\\theta + i\\sin\\theta) = |z| \\cdot e^{i\\theta}$$</p>
</div>
<h3>Euler's Formula</h3>
<div class="important-box">
  <p>$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$</p>
  <p>Special case: $e^{i\\pi} + 1 = 0$ (Euler's identity)</p>
</div>
<h3>De Moivre's Theorem</h3>
<div class="formula-box">
  <p>$$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$$</p>
</div>` },
        {
            id: "cn-geometry", title: "IV. Geometric Applications", content: `
<h3>Complex Plane</h3>
<p>Each $z = a + bi$ corresponds to point $M(a, b)$ in the plane.</p>
<div class="formula-box">
  <p>Distance: $|z_B - z_A| = AB$</p>
  <p>Midpoint of $[AB]$: $z_M = \\frac{z_A + z_B}{2}$</p>
</div>
<h3>Transformations</h3>
<ul>
  <li><strong>Translation:</strong> $z' = z + b$</li>
  <li><strong>Rotation:</strong> $z' - z_0 = e^{i\\theta}(z - z_0)$</li>
  <li><strong>Homothety:</strong> $z' - z_0 = k(z - z_0)$</li>
</ul>` },
    ],
    keyFormulas: [
        "$z = a + bi$, $\\overline{z} = a - bi$, $|z| = \\sqrt{a^2+b^2}$",
        "$z \\cdot \\overline{z} = |z|^2$",
        "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$",
        "$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$",
        "$|z_B - z_A| =$ distance AB",
    ],
    quiz: [
        { id: "cn1", question: "i² equals:", options: ["1", "−1", "i", "0"], correctAnswer: 1, explanation: "By definition, i² = −1." },
        { id: "cn2", question: "The modulus of z = 3 + 4i is:", options: ["5", "7", "√7", "25"], correctAnswer: 0, explanation: "|z| = √(9+16) = √25 = 5." },
        { id: "cn3", question: "The conjugate of 2 − 3i is:", options: ["2 + 3i", "−2 + 3i", "−2 − 3i", "3 − 2i"], correctAnswer: 0, explanation: "Change sign of imaginary part: 2 + 3i." },
        { id: "cn4", question: "(1+i)(1−i) equals:", options: ["0", "1", "2", "2i"], correctAnswer: 2, explanation: "(1+i)(1−i) = 1−i² = 1−(−1) = 2." },
        { id: "cn5", question: "e^(iπ) equals:", options: ["1", "−1", "i", "0"], correctAnswer: 1, explanation: "e^(iπ) = cos(π) + i·sin(π) = −1." },
        { id: "cn6", question: "arg(z₁z₂) equals:", options: ["arg(z₁)·arg(z₂)", "arg(z₁)+arg(z₂)", "arg(z₁)−arg(z₂)", "|z₁|+|z₂|"], correctAnswer: 1, explanation: "Arguments add when multiplying." },
        { id: "cn7", question: "The real part of (2+i)² is:", options: ["3", "4", "5", "4i"], correctAnswer: 0, explanation: "(2+i)² = 4+4i+i² = 4+4i−1 = 3+4i. Re = 3." },
        { id: "cn8", question: "|z|² equals:", options: ["z²", "z·z̄", "z+z̄", "z−z̄"], correctAnswer: 1, explanation: "z·z̄ = (a+bi)(a−bi) = a²+b² = |z|²." },
        { id: "cn9", question: "In the complex plane, |z−z₀| = r represents:", options: ["A line", "A circle", "A point", "A parabola"], correctAnswer: 1, explanation: "It's all points at distance r from z₀ — a circle." },
        { id: "cn10", question: "The argument of z = −1 is:", options: ["0", "π/2", "π", "−π/2"], correctAnswer: 2, explanation: "−1 = cos(π)+i·sin(π), so arg = π." },
        { id: "cn11", question: "By De Moivre: (cos θ + i sin θ)³ =", options: ["cos 3θ + i sin 3θ", "3cos θ + 3i sin θ", "cos θ³ + i sin θ³", "3(cos θ + i sin θ)"], correctAnswer: 0, explanation: "De Moivre's theorem with n = 3." },
        { id: "cn12", question: "z = 1 + i in trig form: |z| =", options: ["1", "√2", "2", "√3"], correctAnswer: 1, explanation: "|1+i| = √(1+1) = √2." },
        { id: "cn13", question: "1/i equals:", options: ["i", "−i", "1", "−1"], correctAnswer: 1, explanation: "1/i = i/(i·i) = i/(−1) = −i." },
        { id: "cn14", question: "Midpoint of A(1+2i) and B(3+4i) is:", options: ["2+3i", "4+6i", "1+i", "2+2i"], correctAnswer: 0, explanation: "(z_A+z_B)/2 = (4+6i)/2 = 2+3i." },
        { id: "cn15", question: "A rotation of angle π/2 multiplies z by:", options: ["−1", "i", "−i", "1"], correctAnswer: 1, explanation: "e^(iπ/2) = cos(π/2)+i·sin(π/2) = i." },
    ],
    examProblems: [
        { id: "cn-ex1", title: "National Exam Problem 1", problem: `<p>Let $z_1 = 1+i\\sqrt{3}$ and $z_2 = 2i$.</p><ol><li>Find $|z_1|$, $\\arg(z_1)$.</li><li>Write $z_1$ in exponential form.</li><li>Calculate $z_1 \\cdot z_2$ and $z_1/z_2$.</li></ol>`, solution: `<ol><li>$|z_1| = \\sqrt{1+3} = 2$. $\\cos\\theta = 1/2$, $\\sin\\theta = \\sqrt{3}/2$, so $\\arg(z_1) = \\pi/3$.</li><li>$z_1 = 2e^{i\\pi/3}$.</li><li>$z_1 z_2 = (1+i\\sqrt{3})(2i) = 2i + 2i^2\\sqrt{3} = -2\\sqrt{3}+2i$. $z_1/z_2 = (1+i\\sqrt{3})/(2i) = (1+i\\sqrt{3})(-2i)/(2i)(-2i) = (-2i+2\\sqrt{3})/4 = \\frac{\\sqrt{3}}{2}-\\frac{1}{2}i$.</li></ol>` },
        { id: "cn-ex2", title: "National Exam Problem 2", problem: `<p>Show that $(1+i)^2 = 2i$, then find $(1+i)^8$.</p>`, solution: `<p>$(1+i)^2 = 1+2i+i^2 = 1+2i-1 = 2i$ ✓. $(1+i)^8 = ((1+i)^2)^4 = (2i)^4 = 16i^4 = 16$.</p>` },
        { id: "cn-ex3", title: "National Exam Problem 3", problem: `<p>In the complex plane, let $A(1)$, $B(i)$, $C(-1)$.</p><ol><li>Calculate $\\frac{z_C-z_A}{z_B-z_A}$.</li><li>Deduce the nature of triangle $ABC$.</li></ol>`, solution: `<ol><li>$\\frac{-1-1}{i-1} = \\frac{-2}{-1+i} = \\frac{-2(-1-i)}{(-1+i)(-1-i)} = \\frac{2+2i}{2} = 1+i = \\sqrt{2}e^{i\\pi/4}$.</li><li>$|\\frac{z_C-z_A}{z_B-z_A}| = \\sqrt{2}$ and $\\arg = \\pi/4$. So $AC = \\sqrt{2} \\cdot AB$ and angle $\\widehat{BAC} = \\pi/4$. Triangle is isosceles right at A.</li></ol>` },
    ],
};
