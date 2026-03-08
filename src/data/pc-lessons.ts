import { Lesson } from "./types";

export const pcLessonsNew: Lesson[] = [
    // ─── SEMESTER 1 ──────────────────────────────────────────────────────────────
    {
        id: "pc-mech-waves", title: "Progressive Mechanical Waves", description: "Progressive mechanical waves: propagation, speed, and properties",
        sections: [
            { id: "mw1", title: "I. Definition & Propagation", content: `<h3>What is a Mechanical Wave?</h3><div class="formula-box"><p>A <strong>mechanical wave</strong> is a disturbance that propagates through a material medium without matter transport.</p><p>Types: <strong>Transverse</strong> (perpendicular to propagation) and <strong>Longitudinal</strong> (parallel).</p></div><h3>Speed of Propagation</h3><div class="formula-box"><p>$$v = \\frac{d}{\\Delta t}$$</p><p>where $d$ = distance, $\\Delta t$ = time delay between two points.</p></div>` },
            { id: "mw2", title: "II. Properties", content: `<h3>Key Properties</h3><ul><li><strong>No matter transport:</strong> only energy is transferred</li><li><strong>Requires a medium:</strong> cannot propagate in vacuum</li><li><strong>Dispersive medium:</strong> speed depends on frequency</li><li><strong>Non-dispersive medium:</strong> speed is constant for all frequencies</li></ul><div class="tip-box"><strong>💡 Exam tip:</strong> In a non-dispersive medium, the wave shape is preserved during propagation.</div>` },
        ],
        keyFormulas: ["$v = d/\\Delta t$", "Transverse: displacement ⊥ propagation", "Longitudinal: displacement ∥ propagation"],
        quiz: [
            { id: "mw1q", question: "A mechanical wave requires:", options: ["Vacuum", "A material medium", "Light", "Electricity"], correctAnswer: 1, explanation: "Mechanical waves need a medium to propagate." },
            { id: "mw2q", question: "In a transverse wave, particles move:", options: ["Along propagation", "Perpendicular to propagation", "In circles", "Not at all"], correctAnswer: 1, explanation: "Transverse = perpendicular displacement." },
            { id: "mw3q", question: "v = d/Δt gives the wave's:", options: ["Frequency", "Wavelength", "Speed", "Amplitude"], correctAnswer: 2, explanation: "Distance / time = speed of propagation." },
            { id: "mw4q", question: "Sound is a ___ wave:", options: ["Transverse", "Longitudinal", "Electromagnetic", "Static"], correctAnswer: 1, explanation: "Sound = longitudinal mechanical wave." },
            { id: "mw5q", question: "A wave transfers:", options: ["Matter", "Energy", "Mass", "Atoms"], correctAnswer: 1, explanation: "Waves transfer energy, not matter." },
        ],
        examProblems: [
            { id: "mw-ex1", title: "Exam Problem 1", problem: `<p>Two microphones are $d = 3.4$ m apart. The time delay between them is $\\Delta t = 10$ ms.</p><ol><li>Calculate the speed of sound.</li><li>Is sound dispersive in air?</li></ol>`, solution: `<ol><li>$v = d/\\Delta t = 3.4/0.01 = 340$ m/s.</li><li>No, sound in air is non-dispersive (all frequencies travel at same speed).</li></ol>` },
        ],
    },
    {
        id: "pc-periodic-waves", title: "Periodic Mechanical Waves", description: "Wavelength, frequency, period, sinusoidal waves, diffraction and interference",
        sections: [
            { id: "pw1", title: "I. Periodic Waves", content: `<h3>Definitions</h3><div class="formula-box"><p><strong>Period</strong> $T$: time for one complete oscillation (in seconds).</p><p><strong>Frequency</strong> $f = \\frac{1}{T}$ (in Hz).</p><p><strong>Wavelength</strong> $\\lambda = v \\cdot T = \\frac{v}{f}$ (in meters).</p></div><h3>Sinusoidal Wave Equation</h3><div class="formula-box"><p>$$y(x,t) = A\\sin\\left(\\frac{2\\pi t}{T} - \\frac{2\\pi x}{\\lambda}\\right)$$</p></div>` },
            { id: "pw2", title: "II. Diffraction & Interference", content: `<h3>Diffraction</h3><div class="formula-box"><p>Occurs when $\\lambda \\geq a$ (wavelength ≥ slit width).</p><p>Diffraction angle: $\\theta \\approx \\frac{\\lambda}{a}$</p></div><h3>Interference</h3><div class="formula-box"><p><strong>Constructive:</strong> path difference $\\delta = k\\lambda$</p><p><strong>Destructive:</strong> $\\delta = (k + \\frac{1}{2})\\lambda$</p></div>` },
        ],
        keyFormulas: ["$\\lambda = vT = v/f$", "$f = 1/T$", "Diffraction when $\\lambda \\geq a$", "$\\delta = k\\lambda$ (constructive)"],
        quiz: [
            { id: "pw1q", question: "λ = v·T is the:", options: ["Amplitude", "Wavelength", "Frequency", "Period"], correctAnswer: 1, explanation: "λ (lambda) is the wavelength." },
            { id: "pw2q", question: "f = 50 Hz means T =", options: ["50 s", "0.02 s", "0.5 s", "2 s"], correctAnswer: 1, explanation: "T = 1/f = 1/50 = 0.02 s." },
            { id: "pw3q", question: "Diffraction occurs when:", options: ["λ << a", "λ ≥ a", "λ = 0", "a = 0"], correctAnswer: 1, explanation: "Wavelength must be comparable to or larger than the opening." },
            { id: "pw4q", question: "Constructive interference: δ =", options: ["kλ", "(k+½)λ", "0 only", "λ/4"], correctAnswer: 0, explanation: "Path difference = integer × wavelength." },
            { id: "pw5q", question: "If v = 340 m/s and f = 680 Hz, λ =", options: ["0.5 m", "1 m", "2 m", "340 m"], correctAnswer: 0, explanation: "λ = v/f = 340/680 = 0.5 m." },
        ],
        examProblems: [
            { id: "pw-ex1", title: "Exam Problem 1", problem: `<p>A wave has $v = 4$ m/s and $\\lambda = 0.8$ m.</p><ol><li>Find the frequency and period.</li><li>Write the equation $y(x,t)$ if $A = 2$ cm.</li></ol>`, solution: `<ol><li>$f = v/\\lambda = 4/0.8 = 5$ Hz. $T = 1/f = 0.2$ s.</li><li>$y(x,t) = 0.02\\sin(10\\pi t - 2.5\\pi x)$ m.</li></ol>` },
        ],
    },
    {
        id: "pc-light-waves", title: "Propagation of Light Waves", description: "Diffraction and interference of light, Young's double slit experiment",
        sections: [
            { id: "lw1", title: "I. Light Diffraction", content: `<h3>Light as a Wave</h3><div class="formula-box"><p>Light is an electromagnetic wave: $c = 3 \\times 10^8$ m/s in vacuum.</p><p>$\\lambda_{\\text{visible}}$: 400 nm (violet) to 800 nm (red).</p></div><h3>Single Slit Diffraction</h3><div class="formula-box"><p>$$\\sin\\theta = \\frac{\\lambda}{a}$$</p><p>Width of central fringe: $L = \\frac{2\\lambda D}{a}$</p></div>` },
            { id: "lw2", title: "II. Young's Double Slit", content: `<h3>Interference Pattern</h3><div class="formula-box"><p>$$i = \\frac{\\lambda D}{a}$$</p><p>$i$ = fringe spacing, $D$ = distance to screen, $a$ = slit separation.</p></div><div class="tip-box"><strong>💡 Exam tip:</strong> To find $\\lambda$, measure $i$ and use $\\lambda = ia/D$.</div>` },
        ],
        keyFormulas: ["$c = 3 \\times 10^8$ m/s", "$i = \\lambda D/a$", "$\\sin\\theta = \\lambda/a$", "Visible: 400–800 nm"],
        quiz: [
            { id: "lw1q", question: "Speed of light in vacuum:", options: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "340 m/s"], correctAnswer: 1, explanation: "c = 3×10⁸ m/s." },
            { id: "lw2q", question: "Visible light range:", options: ["100-300 nm", "400-800 nm", "800-1200 nm", "1-10 μm"], correctAnswer: 1, explanation: "Visible: 400 nm (violet) to 800 nm (red)." },
            { id: "lw3q", question: "Young's fringe spacing i =", options: ["λD/a", "λa/D", "aD/λ", "λ/aD"], correctAnswer: 0, explanation: "i = λD/a." },
            { id: "lw4q", question: "Increasing slit separation a:", options: ["Increases i", "Decreases i", "No effect", "Removes fringes"], correctAnswer: 1, explanation: "i = λD/a, so larger a → smaller i." },
            { id: "lw5q", question: "Light is a(n) ___ wave:", options: ["Mechanical", "Electromagnetic", "Sound", "Seismic"], correctAnswer: 1, explanation: "Light doesn't need a medium — it's electromagnetic." },
        ],
        examProblems: [
            { id: "lw-ex1", title: "Exam Problem 1", problem: `<p>Young's experiment: $a = 0.5$ mm, $D = 2$ m, $i = 2.4$ mm.</p><ol><li>Calculate $\\lambda$.</li><li>What color is this light?</li></ol>`, solution: `<ol><li>$\\lambda = ia/D = 2.4 \\times 10^{-3} \\times 0.5 \\times 10^{-3}/2 = 600$ nm.</li><li>600 nm → orange/yellow light.</li></ol>` },
        ],
    },
    {
        id: "pc-slow-fast-reactions", title: "Slow and Fast Chemical Transformations", description: "Reaction rate, factors affecting speed, kinetics",
        sections: [
            { id: "sf1", title: "I. Slow vs Fast Reactions", content: `<h3>Classification</h3><div class="formula-box"><p><strong>Fast reaction:</strong> occurs in milliseconds (e.g. neutralization).</p><p><strong>Slow reaction:</strong> takes minutes to hours (e.g. rusting, esterification).</p></div><h3>Factors Affecting Reaction Rate</h3><ul><li><strong>Temperature:</strong> rate increases with temperature</li><li><strong>Concentration:</strong> higher concentration → faster reaction</li><li><strong>Catalyst:</strong> lowers activation energy, speeds up reaction</li><li><strong>Surface area:</strong> more contact → faster reaction</li></ul>` },
        ],
        keyFormulas: ["Rate increases with T, concentration, catalyst", "Catalyst: not consumed in reaction", "Activation energy $E_a$ lowered by catalyst"],
        quiz: [
            { id: "sf1q", question: "Rusting is a ___ transformation:", options: ["Fast", "Slow", "Instantaneous", "Reversible"], correctAnswer: 1, explanation: "Rusting takes a long time — it is slow." },
            { id: "sf2q", question: "A catalyst:", options: ["Is consumed", "Lowers Ea", "Slows the reaction", "Changes equilibrium"], correctAnswer: 1, explanation: "A catalyst lowers activation energy without being consumed." },
            { id: "sf3q", question: "Increasing temperature:", options: ["Slows reactions", "Speeds up reactions", "Has no effect", "Stops reactions"], correctAnswer: 1, explanation: "Higher T → more collisions → faster rate." },
            { id: "sf4q", question: "Neutralization is:", options: ["Slow", "Fast", "Catalyzed", "Endothermic"], correctAnswer: 1, explanation: "Acid-base neutralization is essentially instantaneous." },
            { id: "sf5q", question: "Grinding a solid reactant:", options: ["Decreases rate", "Increases rate", "No effect", "Changes products"], correctAnswer: 1, explanation: "More surface area → more contact → faster reaction." },
        ],
        examProblems: [
            { id: "sf-ex1", title: "Exam Problem 1", problem: `<p>The reaction between zinc and sulfuric acid is monitored. At 20°C, complete reaction takes 5 min. At 40°C, it takes 1.5 min.</p><ol><li>Classify this reaction as slow or fast.</li><li>What factor explains the difference between the two experiments?</li></ol>`, solution: `<ol><li>At 20°C, 5 min is relatively slow (not instantaneous). The reaction is slow to moderately fast.</li><li>Temperature: increasing temperature increases the reaction rate.</li></ol>` },
        ],
    },
    {
        id: "pc-reaction-rate", title: "Monitoring a Chemical Transformation – Reaction Rate", description: "Tracking reaction progress, reaction rate, half-life of a reaction",
        sections: [
            { id: "rr1", title: "I. Monitoring a Transformation", content: `<h3>Progress Table (ICE Table)</h3><div class="formula-box"><p>Track amount of substance at each stage: Initial, Change, Equilibrium/End.</p><p><strong>Rate of reaction</strong> $v = \\frac{1}{\\nu_i}\\frac{d[X_i]}{dt}$</p></div><h3>Half-life $t_{1/2}$</h3><div class="formula-box"><p>Time for the reaction to reach 50% completion: $x(t_{1/2}) = x_{max}/2$</p></div>` },
            { id: "rr2", title: "II. Factors Affecting Rate", content: `<h3>Temperature & Concentration</h3><ul><li>Rate increases with concentration of reactants</li><li>Rate increases with temperature</li><li>Catalyst increases rate without being consumed</li></ul><div class="tip-box"><strong>💡 Exam tip:</strong> The half-life $t_{1/2}$ is read directly from the concentration vs. time graph.</div>` },
        ],
        keyFormulas: ["$v = \\frac{d[\\text{product}]}{dt}$", "$t_{1/2}$: time for 50% completion", "ICE table for tracking progress"],
        quiz: [
            { id: "rr1q", question: "The half-life t½ of a reaction is:", options: ["Time to complete the reaction", "Time to reach 50% conversion", "The period", "The activation energy"], correctAnswer: 1, explanation: "t½ = time for half the limiting reactant to be consumed." },
            { id: "rr2q", question: "Rate of reaction has units of:", options: ["mol", "mol/L", "mol/(L·s)", "s⁻¹"], correctAnswer: 2, explanation: "Rate = change in concentration per unit time." },
            { id: "rr3q", question: "In an ICE table, 'C' stands for:", options: ["Catalyst", "Change", "Concentration", "Constant"], correctAnswer: 1, explanation: "ICE = Initial, Change, Equilibrium." },
            { id: "rr4q", question: "Increasing reactant concentration:", options: ["Decreases rate", "Increases rate", "No effect", "Changes products"], correctAnswer: 1, explanation: "More molecules → more collisions → faster rate." },
            { id: "rr5q", question: "t½ is determined from a graph of:", options: ["T vs time", "[X] vs time", "V vs time", "P vs T"], correctAnswer: 1, explanation: "Read the time at half the initial concentration from the [X] vs t graph." },
        ],
        examProblems: [
            { id: "rr-ex1", title: "Exam Problem 1", problem: `<p>The decomposition of $H_2O_2$ is monitored. At $t=0$, $[H_2O_2]_0 = 0.10$ mol/L. At $t = 200$ s, $[H_2O_2] = 0.05$ mol/L.</p><ol><li>Determine $t_{1/2}$.</li><li>Calculate the average reaction rate between $t=0$ and $t=200$ s.</li></ol>`, solution: `<ol><li>Concentration halved at $t = 200$ s, so $t_{1/2} = 200$ s.</li><li>$v_{avg} = \\Delta[H_2O_2]/\\Delta t = (0.10-0.05)/200 = 2.5 \\times 10^{-4}$ mol/(L·s).</li></ol>` },
        ],
    },
    {
        id: "pc-radioactivity", title: "Radioactive Decay", description: "Types of radioactive decay, half-life, decay law, and nuclear dating",
        sections: [
            { id: "rd1", title: "I. Types of Radioactivity", content: `<h3>Nuclear Reactions</h3><div class="formula-box"><p><strong>Alpha (α):</strong> $^A_Z X \\to ^{A-4}_{Z-2}Y + ^4_2 He$</p><p><strong>Beta⁻ (β⁻):</strong> $^A_Z X \\to ^A_{Z+1}Y + ^0_{-1}e + \\bar{\\nu}$</p><p><strong>Beta⁺ (β⁺):</strong> $^A_Z X \\to ^A_{Z-1}Y + ^0_{+1}e + \\nu$</p><p><strong>Gamma (γ):</strong> excited nucleus → ground state + photon</p></div><div class="important-box"><p>Conservation laws: mass number $A$ and charge $Z$ are conserved.</p></div>` },
            { id: "rd2", title: "II. Decay Law", content: `<h3>Exponential Decay</h3><div class="formula-box"><p>$$N(t) = N_0 e^{-\\lambda t} = N_0 \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$$</p><p>$$t_{1/2} = \\frac{\\ln 2}{\\lambda}$$</p><p>$\\lambda$ = decay constant, $t_{1/2}$ = half-life.</p></div><h3>Activity</h3><div class="formula-box"><p>$$A(t) = \\lambda N(t) = A_0 e^{-\\lambda t}$$</p><p>Unit: Becquerel (Bq) = 1 decay/s.</p></div>` },
        ],
        keyFormulas: ["$N(t) = N_0 e^{-\\lambda t}$", "$t_{1/2} = \\ln 2/\\lambda$", "$A = \\lambda N$", "α: A→A-4, Z→Z-2"],
        quiz: [
            { id: "rd1q", question: "In α decay, A decreases by:", options: ["1", "2", "4", "0"], correctAnswer: 2, explanation: "Alpha particle has A=4." },
            { id: "rd2q", question: "t₁/₂ = ln2/λ is the:", options: ["Period", "Half-life", "Wavelength", "Frequency"], correctAnswer: 1, explanation: "t₁/₂ is the half-life." },
            { id: "rd3q", question: "After 3 half-lives, fraction remaining:", options: ["1/2", "1/4", "1/8", "1/16"], correctAnswer: 2, explanation: "(1/2)³ = 1/8." },
            { id: "rd4q", question: "Activity is measured in:", options: ["Joules", "Watts", "Becquerels", "Hertz"], correctAnswer: 2, explanation: "1 Bq = 1 disintegration per second." },
            { id: "rd5q", question: "β⁻ decay: Z becomes:", options: ["Z-1", "Z+1", "Z-2", "Z"], correctAnswer: 1, explanation: "Neutron → proton + electron: Z increases by 1." },
        ],
        examProblems: [
            { id: "rd-ex1", title: "Exam Problem 1", problem: `<p>Carbon-14 has $t_{1/2} = 5730$ years. A sample has activity $A = 0.25 A_0$.</p><ol><li>Find the decay constant $\\lambda$.</li><li>Find the age of the sample.</li></ol>`, solution: `<ol><li>$\\lambda = \\ln 2/t_{1/2} = 0.693/5730 = 1.21 \\times 10^{-4}$ year⁻¹.</li><li>$0.25 = e^{-\\lambda t}$ → $t = 2\\ln 2/\\lambda = 2 \\times 5730 = 11460$ years.</li></ol>` },
        ],
    },
    {
        id: "pc-nuclear-energy", title: "Nuclei, Mass and Energy", description: "Mass defect, binding energy, nuclear fission and fusion",
        sections: [
            { id: "ne1", title: "I. Mass-Energy Equivalence", content: `<h3>Einstein's Formula</h3><div class="formula-box"><p>$$E = mc^2$$</p><p>1 u = 931.5 MeV/c²</p></div><h3>Mass Defect & Binding Energy</h3><div class="formula-box"><p>$\\Delta m = [Z \\cdot m_p + (A-Z) \\cdot m_n] - m_{\\text{nucleus}}$</p><p>$E_\\ell = \\Delta m \\cdot c^2$ (binding energy)</p><p>$E_\\ell/A$ = binding energy per nucleon (stability indicator)</p></div>` },
            { id: "ne2", title: "II. Fission & Fusion", content: `<h3>Nuclear Fission</h3><div class="formula-box"><p>Heavy nucleus → lighter nuclei + neutrons + energy</p><p>Example: $^{235}_{92}U + ^1_0 n \\to ^{141}_{56}Ba + ^{92}_{36}Kr + 3^1_0 n$</p></div><h3>Nuclear Fusion</h3><div class="formula-box"><p>Light nuclei → heavier nucleus + energy</p><p>Example: $^2_1 H + ^3_1 H \\to ^4_2 He + ^1_0 n$</p></div><div class="important-box"><p>Both release energy because products have higher $E_\\ell/A$.</p></div>` },
        ],
        keyFormulas: ["$E = mc^2$", "$\\Delta m = Zm_p + (A-Z)m_n - m_{nuc}$", "$E_\\ell = \\Delta m \\cdot c^2$", "1 u = 931.5 MeV/c²"],
        quiz: [
            { id: "ne1q", question: "E = mc² was proposed by:", options: ["Newton", "Einstein", "Bohr", "Curie"], correctAnswer: 1, explanation: "Einstein's mass-energy equivalence." },
            { id: "ne2q", question: "1 u = ___ MeV/c²:", options: ["1", "511", "931.5", "1000"], correctAnswer: 2, explanation: "1 atomic mass unit = 931.5 MeV/c²." },
            { id: "ne3q", question: "Fission splits:", options: ["Light nuclei", "Heavy nuclei", "Electrons", "Photons"], correctAnswer: 1, explanation: "Fission = splitting heavy nuclei." },
            { id: "ne4q", question: "Fusion combines:", options: ["Heavy nuclei", "Light nuclei", "Molecules", "Atoms"], correctAnswer: 1, explanation: "Fusion = combining light nuclei." },
            { id: "ne5q", question: "Most stable nuclei have highest:", options: ["A", "Z", "Eℓ/A", "Mass"], correctAnswer: 2, explanation: "Iron-56 has the highest binding energy per nucleon." },
        ],
        examProblems: [
            { id: "ne-ex1", title: "Exam Problem 1", problem: `<p>Given: $m(^2_1H) = 2.01410$ u, $m(^3_1H) = 3.01605$ u, $m(^4_2He) = 4.00260$ u, $m_n = 1.00866$ u.</p><ol><li>Write the fusion reaction.</li><li>Calculate the mass defect and energy released.</li></ol>`, solution: `<ol><li>$^2_1H + ^3_1H \\to ^4_2He + ^1_0n$</li><li>$\\Delta m = (2.01410+3.01605)-(4.00260+1.00866) = 0.01889$ u. $E = 0.01889 \\times 931.5 = 17.6$ MeV.</li></ol>` },
        ],
    },
    {
        id: "pc-reversible-reactions", title: "Chemical Transformations in Both Directions", description: "Reversible reactions, equilibrium constant Kc, reaction quotient",
        sections: [
            { id: "rev1", title: "I. Reversible Reactions", content: `<h3>Forward and Reverse Reactions</h3><div class="formula-box"><p>Many reactions are reversible: $aA + bB \\rightleftharpoons cC + dD$</p><p>Equilibrium is reached when forward rate = reverse rate.</p></div><h3>Equilibrium Constant</h3><div class="formula-box"><p>$$K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$</p><p>$K_c$ depends only on temperature.</p></div>` },
            { id: "rev2", title: "II. Reaction Quotient", content: `<h3>Quotient $Q_r$</h3><div class="formula-box"><p>Same formula as $K_c$ but at any moment in time.</p><p>If $Q_r < K_c$: reaction proceeds forward (→).</p><p>If $Q_r > K_c$: reaction proceeds backward (←).</p><p>If $Q_r = K_c$: system is at equilibrium.</p></div>` },
        ],
        keyFormulas: ["$K_c = [C]^c[D]^d/([A]^a[B]^b)$", "$Q_r < K_c$ → forward", "$Q_r > K_c$ → backward", "At equilibrium: $Q_r = K_c$"],
        quiz: [
            { id: "rev1q", question: "A reversible reaction uses symbol:", options: ["→", "←", "⇌", "↑"], correctAnswer: 2, explanation: "⇌ indicates equilibrium between forward and reverse." },
            { id: "rev2q", question: "Kc depends on:", options: ["Concentration", "Pressure", "Temperature", "Volume"], correctAnswer: 2, explanation: "Kc is a constant that depends only on temperature." },
            { id: "rev3q", question: "If Qr < Kc, the reaction proceeds:", options: ["Backward", "Forward", "Stops", "Randomly"], correctAnswer: 1, explanation: "System moves toward products to reach equilibrium." },
            { id: "rev4q", question: "At equilibrium, Qr:", options: ["< Kc", "> Kc", "= Kc", "= 0"], correctAnswer: 2, explanation: "Equilibrium condition: Qr = Kc." },
            { id: "rev5q", question: "The equilibrium constant Kc:", options: ["Changes with concentration", "Changes with temperature", "Is always 1", "Equals Qr always"], correctAnswer: 1, explanation: "Kc is temperature-dependent only." },
        ],
        examProblems: [
            { id: "rev-ex1", title: "Exam Problem 1", problem: `<p>For the reaction $N_2 + 3H_2 \\rightleftharpoons 2NH_3$, $K_c = 0.50$ at a given temperature.</p><ol><li>Write the expression for $K_c$.</li><li>At a certain moment: $[N_2]=1.0$, $[H_2]=2.0$, $[NH_3]=1.0$ mol/L. Is the system at equilibrium?</li></ol>`, solution: `<ol><li>$K_c = [NH_3]^2/([N_2][H_2]^3)$</li><li>$Q_r = 1^2/(1.0 \\times 2^3) = 1/8 = 0.125 < K_c = 0.50$ → reaction proceeds forward.</li></ol>` },
        ],
    },
    {
        id: "pc-chemical-equilibrium", title: "Equilibrium State of a Chemical System", description: "Chemical equilibrium, Le Chatelier's principle, equilibrium constant",
        sections: [
            { id: "eq1", title: "I. Chemical Equilibrium", content: `<h3>Equilibrium Condition</h3><div class="formula-box"><p>At equilibrium: rate$_{forward}$ = rate$_{backward}$</p><p>Equilibrium constant: $K_c = \\frac{[\\text{products}]^{\\nu}}{[\\text{reactants}]^{\\nu}}$</p></div><h3>Equilibrium Calculations</h3><div class="formula-box"><p>Use ICE table to find equilibrium concentrations.</p></div>` },
            { id: "eq2", title: "II. Le Chatelier's Principle", content: `<h3>Shifting Equilibrium</h3><div class="formula-box"><p>If a stress is applied to an equilibrium system, the system shifts to partially counteract that stress.</p></div><ul><li>Add reactant → shifts right (forward)</li><li>Remove product → shifts right (forward)</li><li>Increase temperature → favors endothermic direction</li><li>Increase pressure → favors side with fewer moles of gas</li></ul>` },
        ],
        keyFormulas: ["$K_c$ expression from balanced equation", "Le Chatelier: stress → shift to oppose", "ICE table for equilibrium calculation"],
        quiz: [
            { id: "eq1q", question: "Le Chatelier's principle concerns:", options: ["Kinetics only", "Shifting equilibrium under stress", "Reaction rate", "Bond energy"], correctAnswer: 1, explanation: "Le Chatelier: equilibrium shifts to oppose a disturbance." },
            { id: "eq2q", question: "Adding more reactant to an equilibrium:", options: ["Shifts backward", "Shifts forward", "No effect", "Changes Kc"], correctAnswer: 1, explanation: "System shifts to consume the added reactant." },
            { id: "eq3q", question: "Increasing temperature favors:", options: ["Exothermic direction", "Endothermic direction", "No change", "Both directions"], correctAnswer: 1, explanation: "Higher T → equilibrium shifts endothermic direction." },
            { id: "eq4q", question: "Kc > 1 means:", options: ["Reactants favored", "Products favored", "System is neutral", "No equilibrium"], correctAnswer: 1, explanation: "Large Kc → equilibrium lies toward products." },
            { id: "eq5q", question: "At equilibrium, concentrations are:", options: ["Zero", "Changing rapidly", "Constant", "Increasing"], correctAnswer: 2, explanation: "Concentrations are constant (not zero) at equilibrium." },
        ],
        examProblems: [
            { id: "eq-ex1", title: "Exam Problem 1", problem: `<p>$H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$. Initial: $[H_2]=[I_2]=1.0$ mol/L, $[HI]=0$. At equilibrium $[HI]=1.6$ mol/L.</p><ol><li>Find equilibrium concentrations of $H_2$ and $I_2$.</li><li>Calculate $K_c$.</li></ol>`, solution: `<ol><li>$[H_2]=[I_2] = 1.0 - 0.8 = 0.2$ mol/L.</li><li>$K_c = [HI]^2/([H_2][I_2]) = 1.6^2/(0.2 \\times 0.2) = 64$.</li></ol>` },
        ],
    },
    {
        id: "pc-rc", title: "RC Circuit", description: "Charging and discharging a capacitor, time constant τ = RC",
        sections: [
            { id: "rc1", title: "I. Charging", content: `<h3>RC Charging</h3><div class="formula-box"><p>$$u_C(t) = E(1 - e^{-t/\\tau})$$</p><p>$$i(t) = \\frac{E}{R}e^{-t/\\tau}$$</p><p>Time constant: $\\tau = RC$</p></div><div class="tip-box"><strong>💡</strong> After $5\\tau$, the capacitor is ~99% charged.</div>` },
            { id: "rc2", title: "II. Discharging", content: `<h3>RC Discharging</h3><div class="formula-box"><p>$$u_C(t) = E \\cdot e^{-t/\\tau}$$</p><p>$$i(t) = -\\frac{E}{R}e^{-t/\\tau}$$</p></div><h3>Energy Stored</h3><div class="formula-box"><p>$$E_C = \\frac{1}{2}Cu_C^2 = \\frac{1}{2}\\frac{q^2}{C}$$</p></div>` },
        ],
        keyFormulas: ["$\\tau = RC$", "$u_C = E(1-e^{-t/\\tau})$ (charging)", "$u_C = Ee^{-t/\\tau}$ (discharging)", "$E_C = \\frac{1}{2}Cu_C^2$"],
        quiz: [
            { id: "rc1q", question: "τ = RC has units of:", options: ["Volts", "Amperes", "Seconds", "Farads"], correctAnswer: 2, explanation: "Ω × F = seconds." },
            { id: "rc2q", question: "After 5τ, capacitor is ___ charged:", options: ["50%", "63%", "86%", "~99%"], correctAnswer: 3, explanation: "1-e⁻⁵ ≈ 0.993 ≈ 99%." },
            { id: "rc3q", question: "Energy stored in capacitor:", options: ["½CV²", "CV", "C²V", "½C²V²"], correctAnswer: 0, explanation: "E = ½Cu²." },
            { id: "rc4q", question: "At t=0 (charging), uC =", options: ["E", "0", "E/2", "∞"], correctAnswer: 1, explanation: "Capacitor starts uncharged: uC(0) = 0." },
            { id: "rc5q", question: "At t=τ (charging), uC ≈", options: ["0.37E", "0.50E", "0.63E", "0.86E"], correctAnswer: 2, explanation: "uC(τ) = E(1-e⁻¹) ≈ 0.63E." },
        ],
        examProblems: [
            { id: "rc-ex1", title: "Exam Problem 1", problem: `<p>$R = 10$ kΩ, $C = 100$ μF, $E = 12$ V.</p><ol><li>Calculate τ.</li><li>Find $u_C$ and $i$ at $t = \\tau$.</li><li>Find the energy stored when fully charged.</li></ol>`, solution: `<ol><li>$\\tau = RC = 10^4 \\times 10^{-4} = 1$ s.</li><li>$u_C(\\tau) = 12(1-e^{-1}) \\approx 7.58$ V. $i(\\tau) = (12/10000)e^{-1} \\approx 0.44$ mA.</li><li>$E_C = \\frac{1}{2} \\times 10^{-4} \\times 144 = 7.2$ mJ.</li></ol>` },
        ],
    },
    {
        id: "pc-rl", title: "RL Circuit", description: "Inductor behavior, RL circuit transient response, time constant τ = L/R",
        sections: [
            { id: "rl1", title: "I. RL Circuit Response", content: `<h3>Establishing Current</h3><div class="formula-box"><p>$$i(t) = \\frac{E}{R}(1 - e^{-t/\\tau})$$</p><p>$$u_L(t) = E \\cdot e^{-t/\\tau}$$</p><p>$\\tau = L/R$</p></div><h3>Energy in Inductor</h3><div class="formula-box"><p>$$E_L = \\frac{1}{2}Li^2$$</p></div>` },
        ],
        keyFormulas: ["$\\tau = L/R$", "$i = (E/R)(1-e^{-t/\\tau})$", "$E_L = \\frac{1}{2}Li^2$"],
        quiz: [
            { id: "rl1q", question: "RL time constant τ =", options: ["RL", "R/L", "L/R", "√(LC)"], correctAnswer: 2, explanation: "τ = L/R for RL circuits." },
            { id: "rl2q", question: "Inductor opposes changes in:", options: ["Voltage", "Current", "Resistance", "Capacitance"], correctAnswer: 1, explanation: "Inductors resist current changes (Lenz's law)." },
            { id: "rl3q", question: "Energy in inductor: EL =", options: ["½Li²", "Li", "½L²i", "L²i²"], correctAnswer: 0, explanation: "Energy = ½Li²." },
            { id: "rl4q", question: "At t→∞, inductor acts as:", options: ["Open circuit", "Short circuit", "Capacitor", "Resistor"], correctAnswer: 1, explanation: "Steady state: uL = 0, inductor = wire." },
            { id: "rl5q", question: "uL at t=0 (switch closed):", options: ["0", "E", "E/2", "∞"], correctAnswer: 1, explanation: "All voltage across inductor initially." },
        ],
        examProblems: [
            { id: "rl-ex1", title: "Exam Problem 1", problem: `<p>$R = 100$ Ω, $L = 0.5$ H, $E = 10$ V.</p><ol><li>Calculate τ and the steady-state current.</li><li>Find $i(\\tau)$ and $u_L(\\tau)$.</li></ol>`, solution: `<ol><li>$\\tau = L/R = 0.005$ s = 5 ms. $I_0 = E/R = 0.1$ A.</li><li>$i(\\tau) = 0.1(1-e^{-1}) \\approx 63$ mA. $u_L(\\tau) = 10e^{-1} \\approx 3.68$ V.</li></ol>` },
        ],
    },
    {
        id: "pc-rlc", title: "Free Oscillations of a Series RLC Circuit", description: "LC free oscillations, damping regimes, natural frequency",
        sections: [
            { id: "rlc1", title: "I. Free Oscillations", content: `<h3>LC Circuit (No Resistance)</h3><div class="formula-box"><p>$$q(t) = Q_m \\cos(\\omega_0 t + \\varphi)$$</p><p>$$\\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad T_0 = 2\\pi\\sqrt{LC}$$</p></div><h3>RLC: Damped Oscillations</h3><div class="formula-box"><p>Differential equation: $L\\frac{d^2q}{dt^2} + R\\frac{dq}{dt} + \\frac{q}{C} = 0$</p></div><p>R causes energy dissipation → amplitude decreases over time.</p>` },
        ],
        keyFormulas: ["$\\omega_0 = 1/\\sqrt{LC}$", "$T_0 = 2\\pi\\sqrt{LC}$", "$E = \\frac{1}{2}Li^2 + \\frac{1}{2}\\frac{q^2}{C}$"],
        quiz: [
            { id: "rlc1q", question: "Natural frequency ω₀ =", options: ["√(LC)", "1/√(LC)", "LC", "1/LC"], correctAnswer: 1, explanation: "ω₀ = 1/√(LC)." },
            { id: "rlc2q", question: "In LC circuit, energy oscillates between:", options: ["R and L", "L and C", "R and C", "All three"], correctAnswer: 1, explanation: "Energy: magnetic (L) ↔ electric (C)." },
            { id: "rlc3q", question: "R in RLC causes:", options: ["Amplification", "Damping", "Resonance only", "Nothing"], correctAnswer: 1, explanation: "Resistance dissipates energy → damping." },
            { id: "rlc4q", question: "T₀ = 2π√(LC). If C doubles, T₀:", options: ["Doubles", "×√2", "Halves", "×4"], correctAnswer: 1, explanation: "T₀ ∝ √C, so ×√2." },
            { id: "rlc5q", question: "Total energy in LC circuit is:", options: ["Increasing", "Decreasing", "Constant", "Zero"], correctAnswer: 2, explanation: "No resistance → no dissipation → constant energy." },
        ],
        examProblems: [
            { id: "rlc-ex1", title: "Exam Problem 1", problem: `<p>$L = 0.1$ H, $C = 10$ μF.</p><ol><li>Calculate $T_0$ and $f_0$.</li><li>The capacitor is charged to $U_0 = 5$ V. Calculate total energy.</li></ol>`, solution: `<ol><li>$T_0 = 2\\pi\\sqrt{0.1 \\times 10^{-5}} \\approx 6.28$ ms. $f_0 \\approx 159$ Hz.</li><li>$E = \\frac{1}{2}CU_0^2 = \\frac{1}{2}(10^{-5})(25) = 125$ μJ.</li></ol>` },
        ],
    },
    {
        id: "pc-rlc-forced", title: "Series RLC Circuit in Forced Sinusoidal Regime", description: "Impedance, resonance, Fresnel diagram, phase shift (SM track)",
        sections: [
            { id: "rlcf1", title: "I. Forced Oscillations", content: `<h3>Sinusoidal Generator</h3><div class="formula-box"><p>Source: $u(t) = U_m \\cos(\\omega t)$</p><p>Impedance: $Z = \\sqrt{R^2 + (L\\omega - \\frac{1}{C\\omega})^2}$</p><p>Current: $i(t) = I_m \\cos(\\omega t + \\varphi)$</p></div>` },
            { id: "rlcf2", title: "II. Resonance", content: `<h3>Current Resonance</h3><div class="formula-box"><p>Resonance when $L\\omega_r = \\frac{1}{C\\omega_r}$ → $\\omega_r = \\frac{1}{\\sqrt{LC}} = \\omega_0$</p><p>At resonance: $Z = R$ (minimum), current is maximum.</p></div><h3>Fresnel Diagram</h3><p>Phasors (rotating vectors) used to represent voltages and current in steady state.</p>` },
        ],
        keyFormulas: ["$Z = \\sqrt{R^2+(L\\omega-1/C\\omega)^2}$", "$\\omega_r = 1/\\sqrt{LC}$", "At resonance: Z = R, I = max", "$\\varphi = \\arctan\\left(\\frac{L\\omega - 1/C\\omega}{R}\\right)$"],
        quiz: [
            { id: "rlcf1q", question: "Impedance Z at resonance equals:", options: ["0", "R", "L", "∞"], correctAnswer: 1, explanation: "At resonance, reactances cancel: Z = R." },
            { id: "rlcf2q", question: "Resonant frequency ωr =", options: ["√(LC)", "1/√(LC)", "R/L", "L/R"], correctAnswer: 1, explanation: "ωr = 1/√(LC) = ω₀." },
            { id: "rlcf3q", question: "At resonance, current is:", options: ["Zero", "Minimum", "Maximum", "Undefined"], correctAnswer: 2, explanation: "Z is minimum at resonance → I is maximum." },
            { id: "rlcf4q", question: "A Fresnel diagram represents:", options: ["Time-domain signals", "Phasors (rotating vectors)", "Energy vs time", "Resistance vs frequency"], correctAnswer: 1, explanation: "Fresnel diagrams use phasors to show amplitude and phase." },
            { id: "rlcf5q", question: "When ω < ωr, the circuit is:", options: ["Inductive", "Capacitive", "Resistive", "Undefined"], correctAnswer: 1, explanation: "Below resonance, capacitive reactance dominates." },
        ],
        examProblems: [
            { id: "rlcf-ex1", title: "Exam Problem 1", problem: `<p>$R = 50$ Ω, $L = 0.1$ H, $C = 10$ μF. Generator: $u(t) = 10\\cos(\\omega t)$ V.</p><ol><li>Find $\\omega_r$.</li><li>Calculate the maximum current at resonance.</li></ol>`, solution: `<ol><li>$\\omega_r = 1/\\sqrt{LC} = 1/\\sqrt{0.1 \\times 10^{-5}} = 1000$ rad/s.</li><li>At resonance $Z=R=50$ Ω, so $I_m = U_m/R = 10/50 = 0.2$ A.</li></ol>` },
        ],
    },
    {
        id: "pc-em-waves", title: "Electromagnetic Waves", description: "Nature of EM waves, EM spectrum, propagation, and amplitude modulation",
        sections: [
            { id: "em1", title: "I. Electromagnetic Waves", content: `<h3>Properties</h3><div class="formula-box"><p>EM waves propagate in vacuum at $c = 3 \\times 10^8$ m/s.</p><p>They do <strong>not</strong> require a medium.</p><p>$\\lambda = c/f$, EM spectrum: radio → microwave → infrared → visible → UV → X-ray → gamma.</p></div>` },
            { id: "em2", title: "II. Amplitude Modulation (AM)", content: `<h3>Modulation</h3><div class="formula-box"><p>Carrier wave: $u_p(t) = U_p \\cos(2\\pi f_p t)$</p><p>Modulated signal: $u(t) = U_p(1 + m\\cos(2\\pi f_s t))\\cos(2\\pi f_p t)$</p><p>Modulation depth: $m = \\frac{U_m}{U_p}$</p></div><p>Demodulation recovers the signal using a detector (diode + RC filter).</p>` },
        ],
        keyFormulas: ["$c = \\lambda f = 3\\times10^8$ m/s", "$m = U_m/U_p$", "AM: modulated = carrier × (1 + m·signal)"],
        quiz: [
            { id: "em1q", question: "EM waves travel in vacuum at:", options: ["340 m/s", "3×10⁸ m/s", "∞", "Depends on freq"], correctAnswer: 1, explanation: "c = 3×10⁸ m/s in vacuum." },
            { id: "em2q", question: "EM waves require:", options: ["Air", "Water", "No medium", "Conductor"], correctAnswer: 2, explanation: "EM waves propagate without a medium." },
            { id: "em3q", question: "Modulation depth m = 0.5 means:", options: ["100% modulation", "50% modulation", "25% modulation", "No modulation"], correctAnswer: 1, explanation: "m = 0.5 → 50% amplitude modulation." },
            { id: "em4q", question: "AM demodulation uses:", options: ["Inductor", "Diode + RC filter", "Battery", "Amplifier"], correctAnswer: 1, explanation: "Envelope detector: diode + RC." },
            { id: "em5q", question: "Highest frequency EM waves:", options: ["Radio waves", "Infrared", "X-rays", "Gamma rays"], correctAnswer: 3, explanation: "Gamma rays have the highest frequency in the EM spectrum." },
        ],
        examProblems: [
            { id: "em-ex1", title: "Exam Problem 1", problem: `<p>An AM station broadcasts at $f_p = 1$ MHz with $m = 0.8$. The signal frequency is $f_s = 1$ kHz.</p><ol><li>Calculate the carrier wavelength.</li><li>What are the two sideband frequencies?</li></ol>`, solution: `<ol><li>$\\lambda = c/f_p = 3\\times10^8/10^6 = 300$ m.</li><li>Sidebands: $f_p \\pm f_s = 1001$ kHz and $999$ kHz.</li></ol>` },
        ],
    },
    {
        id: "pc-acid-base-reactions", title: "Transformations Involving Acid-Base Reactions", description: "Brønsted–Lowry theory, pH, Ka, pKa, weak vs strong acids",
        sections: [
            { id: "ab1", title: "I. pH & Acid-Base Theory", content: `<h3>Definitions</h3><div class="formula-box"><p>$$pH = -\\log[H_3O^+]$$</p><p><strong>Acid (Brønsted):</strong> proton donor ($HA + H_2O \\to A^- + H_3O^+$)</p><p><strong>Base (Brønsted):</strong> proton acceptor ($B + H_2O \\to BH^+ + OH^-$)</p></div><h3>Strong vs Weak</h3><div class="formula-box"><p><strong>Strong acid:</strong> fully dissociates → $pH = -\\log C_a$</p><p><strong>Weak acid:</strong> partially dissociates → $K_a = \\frac{[A^-][H_3O^+]}{[HA]}$, $pK_a = -\\log K_a$</p></div>` },
            { id: "ab2", title: "II. Conjugate Pairs & Water", content: `<h3>Acid-Base Conjugate Pairs</h3><div class="formula-box"><p>$HA / A^-$: conjugate pair.</p><p>$pK_a + pK_b = 14$ (at 25°C).</p><p>$pH + pOH = 14$, $K_e = [H_3O^+][OH^-] = 10^{-14}$</p></div>` },
        ],
        keyFormulas: ["$pH = -\\log[H_3O^+]$", "$K_a = [A^-][H_3O^+]/[HA]$", "$pK_a + pK_b = 14$", "Strong acid: $pH = -\\log C_a$"],
        quiz: [
            { id: "ab1q", question: "pH = 3 means [H₃O⁺] =", options: ["3 mol/L", "10⁻³ mol/L", "0.3 mol/L", "10³ mol/L"], correctAnswer: 1, explanation: "[H₃O⁺] = 10^(-pH) = 10⁻³." },
            { id: "ab2q", question: "A Brønsted acid is a:", options: ["Proton acceptor", "Proton donor", "Electron donor", "Hydroxide donor"], correctAnswer: 1, explanation: "Acid = proton (H⁺) donor." },
            { id: "ab3q", question: "Strong acid pH 1 → [H₃O⁺] =", options: ["0.01", "0.1", "1", "10"], correctAnswer: 1, explanation: "10⁻¹ = 0.1 mol/L." },
            { id: "ab4q", question: "A weak acid has Ka:", options: [">>1", "<<1", "= 1", "= 0"], correctAnswer: 1, explanation: "Ka << 1 for weak acids (partial dissociation)." },
            { id: "ab5q", question: "pH of pure water at 25°C:", options: ["0", "7", "14", "1"], correctAnswer: 1, explanation: "Neutral pH = 7." },
        ],
        examProblems: [
            { id: "ab-ex1", title: "Exam Problem 1", problem: `<p>Acetic acid solution $C_a = 0.1$ mol/L, $K_a = 1.8 \\times 10^{-5}$.</p><ol><li>Calculate the pH.</li><li>What is the degree of dissociation?</li></ol>`, solution: `<ol><li>$[H_3O^+] = \\sqrt{K_a \\cdot C_a} = \\sqrt{1.8\\times10^{-5} \\times 0.1} = 1.34\\times10^{-3}$ mol/L. $pH = 2.87$.</li><li>$\\alpha = [H_3O^+]/C_a = 1.34\\times10^{-3}/0.1 = 1.34\\%$.</li></ol>` },
        ],
    },
    {
        id: "pc-acid-base-titration", title: "Acid-Base Titration", description: "Titration curves, equivalence point, pH indicators",
        sections: [
            { id: "abt1", title: "I. Titration Principle", content: `<h3>Equivalence Point</h3><div class="formula-box"><p>$$C_a V_a = C_b V_b$$</p><p>At equivalence, moles of acid = moles of base.</p></div><div class="tip-box"><strong>💡 Exam tip:</strong> To find unknown concentration, measure $V_{eq}$ and apply $C_{unknown} = C_{known} V_{known}/V_{unknown}$.</div>` },
            { id: "abt2", title: "II. Titration Curve", content: `<h3>pH vs Volume Added</h3><ul><li>Before equivalence: pH rises slowly</li><li>At equivalence: steep jump in pH</li><li>After equivalence: pH levels off (basic)</li></ul><p><strong>Half-equivalence point:</strong> $pH = pK_a$ (for weak acid titration)</p>` },
        ],
        keyFormulas: ["$C_a V_a = C_b V_b$ (equivalence)", "$pH = pK_a$ at half-equivalence", "Indicator chosen: color change near equivalence pH"],
        quiz: [
            { id: "abt1q", question: "At equivalence: CaVa =", options: ["CbVb", "Cb/Vb", "Ca+Cb", "0"], correctAnswer: 0, explanation: "Moles acid = moles base at equivalence." },
            { id: "abt2q", question: "At half-equivalence point, pH =", options: ["7", "pKa", "14", "0"], correctAnswer: 1, explanation: "pH = pKa at half-equivalence for weak acid." },
            { id: "abt3q", question: "The equivalence point is found at:", options: ["Max pH", "Inflection point of curve", "Min pH", "pH = 7 always"], correctAnswer: 1, explanation: "The steepest part (inflection) of the pH curve = equivalence." },
            { id: "abt4q", question: "A pH indicator changes color:", options: ["At pH 7 always", "Near the equivalence point", "Before titration starts", "After all base is added"], correctAnswer: 1, explanation: "Choose an indicator whose color change range includes the equivalence pH." },
            { id: "abt5q", question: "Titrating strong acid with strong base: equivalence pH =", options: ["<7", "7", ">7", "pKa"], correctAnswer: 1, explanation: "Strong acid + strong base → neutral salt → pH = 7." },
        ],
        examProblems: [
            { id: "abt-ex1", title: "Exam Problem 1", problem: `<p>Titrating 20 mL of acetic acid with NaOH (0.1 mol/L). Equivalence at $V_b = 15$ mL.</p><ol><li>Find $C_a$.</li><li>Calculate pH at equivalence if $K_a = 1.8 \\times 10^{-5}$.</li></ol>`, solution: `<ol><li>$C_a = C_b V_b/V_a = 0.1 \\times 15/20 = 0.075$ mol/L.</li><li>At equivalence: sodium acetate solution. $pH \\approx 8.7$.</li></ol>` },
        ],
    },

    // ─── SEMESTER 2 ──────────────────────────────────────────────────────────────
    {
        id: "pc-newton", title: "Newton's Laws", description: "Three laws of motion, free-body diagrams, applications to dynamics",
        sections: [
            { id: "nw1", title: "I. Newton's Three Laws", content: `<h3>First Law (Inertia)</h3><div class="formula-box"><p>A body remains at rest or in uniform motion unless acted upon by an external net force.</p></div><h3>Second Law</h3><div class="formula-box"><p>$$\\sum \\vec{F} = m\\vec{a}$$</p></div><h3>Third Law</h3><div class="formula-box"><p>$\\vec{F}_{A/B} = -\\vec{F}_{B/A}$ (action = reaction, equal and opposite)</p></div>` },
            { id: "nw2", title: "II. Applications", content: `<h3>Inclined Plane</h3><div class="formula-box"><p>Along the plane: $ma = mg\\sin\\alpha - f$</p><p>Perpendicular: $N = mg\\cos\\alpha$</p></div><h3>Free Fall</h3><div class="formula-box"><p>$a = g = 9.81$ m/s² (no air resistance)</p><p>$v = gt$, $h = \\frac{1}{2}gt^2$</p></div>` },
        ],
        keyFormulas: ["$\\sum\\vec{F} = m\\vec{a}$", "$P = mg$", "$a = g\\sin\\alpha$ (frictionless incline)", "$v = gt$, $h = \\frac{1}{2}gt^2$"],
        quiz: [
            { id: "nw1q", question: "F = ma is Newton's ___ law:", options: ["First", "Second", "Third", "Fourth"], correctAnswer: 1, explanation: "Second law: ΣF = ma." },
            { id: "nw2q", question: "Action-reaction is Newton's:", options: ["1st law", "2nd law", "3rd law", "Law of gravity"], correctAnswer: 2, explanation: "Third law: equal and opposite forces." },
            { id: "nw3q", question: "Free fall acceleration (m/s²):", options: ["3.14", "6.67", "9.81", "299"], correctAnswer: 2, explanation: "g ≈ 9.81 m/s²." },
            { id: "nw4q", question: "On frictionless incline, a =", options: ["g", "g sinα", "g cosα", "g tanα"], correctAnswer: 1, explanation: "Component of gravity along the plane." },
            { id: "nw5q", question: "Weight P = mg has units of:", options: ["kg", "m/s²", "Newtons", "Joules"], correctAnswer: 2, explanation: "Weight is a force, measured in Newtons." },
        ],
        examProblems: [
            { id: "nw-ex1", title: "Exam Problem 1", problem: `<p>A 2 kg block slides down a 30° frictionless incline.</p><ol><li>Find the acceleration.</li><li>Find the speed after 3 s (starting from rest).</li></ol>`, solution: `<ol><li>$a = g\\sin 30° = 9.81 \\times 0.5 = 4.9$ m/s².</li><li>$v = at = 4.9 \\times 3 = 14.7$ m/s.</li></ol>` },
        ],
    },
    {
        id: "pc-free-fall", title: "Free Fall of a Solid Body", description: "Vertical free fall, fall with air resistance (viscous friction)",
        sections: [
            { id: "ff1", title: "A. Free Fall (No Friction)", content: `<h3>Equations of Free Fall</h3><div class="formula-box"><p>$a = g = 9.81$ m/s² (downward)</p><p>$v(t) = v_0 + gt$</p><p>$z(t) = z_0 + v_0 t + \\frac{1}{2}gt^2$</p></div><div class="tip-box"><strong>💡</strong> For drop from rest: $v_0 = 0$, $z_0 = h$.</div>` },
            { id: "ff2", title: "B. Vertical Fall with Friction", content: `<h3>Air Resistance</h3><div class="formula-box"><p>Friction force: $f = kv$ (viscous) or $f = kv^2$</p><p>Newton's second law: $ma = mg - kv$</p><p>Terminal (limit) velocity: $v_{lim} = mg/k$</p></div>` },
        ],
        keyFormulas: ["$a = g$ (free fall)", "$v_{lim} = mg/k$", "$v(t) = v_{lim}(1 - e^{-kt/m})$"],
        quiz: [
            { id: "ff1q", question: "In free fall (no air), a =", options: ["0", "g", "g/2", "2g"], correctAnswer: 1, explanation: "Free fall acceleration = g = 9.81 m/s²." },
            { id: "ff2q", question: "Terminal velocity is reached when:", options: ["v = 0", "a = g", "mg = kv", "t = ∞ only"], correctAnswer: 2, explanation: "At terminal velocity: mg = friction force." },
            { id: "ff3q", question: "A ball dropped from rest: v after 2 s =", options: ["4.9 m/s", "9.8 m/s", "19.6 m/s", "0"], correctAnswer: 2, explanation: "v = gt = 9.81×2 ≈ 19.6 m/s." },
            { id: "ff4q", question: "With air resistance, as v increases:", options: ["Friction decreases", "Friction increases", "g changes", "Mass changes"], correctAnswer: 1, explanation: "f = kv → friction grows as v grows." },
            { id: "ff5q", question: "At terminal velocity, net force =", options: ["mg", "0", "kv", "ma"], correctAnswer: 1, explanation: "mg - kv_lim = 0 → net force = 0." },
        ],
        examProblems: [
            { id: "ff-ex1", title: "Exam Problem 1", problem: `<p>A 0.5 kg ball falls with air resistance $f = kv$, $k = 1$ N·s/m.</p><ol><li>Calculate $v_{lim}$.</li><li>Write the differential equation for $v(t)$.</li></ol>`, solution: `<ol><li>$v_{lim} = mg/k = 0.5\\times9.81/1 = 4.9$ m/s.</li><li>$m\\frac{dv}{dt} = mg - kv$ → $0.5\\frac{dv}{dt} = 4.9 - v$.</li></ol>` },
        ],
    },
    {
        id: "pc-projectile", title: "Planar Motion: Projectile in Gravitational Field", description: "Projectile motion, equations of trajectory, charged particle in magnetic and electric fields",
        sections: [
            { id: "pm1", title: "I. Projectile Motion", content: `<h3>Decomposition of Motion</h3><div class="formula-box"><p><strong>Horizontal:</strong> $x(t) = v_0 \\cos\\theta \\cdot t$ (uniform)</p><p><strong>Vertical:</strong> $y(t) = v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2$ (accelerated)</p></div><h3>Trajectory Equation</h3><div class="formula-box"><p>$$y = x\\tan\\theta - \\frac{g}{2v_0^2\\cos^2\\theta}x^2$$</p></div>` },
            { id: "pm2", title: "II. Charged Particle in Fields", content: `<h3>In Magnetic Field (SM)</h3><div class="formula-box"><p>Lorentz force: $\\vec{F} = q\\vec{v} \\times \\vec{B}$ → circular motion</p><p>Radius: $r = \\frac{mv}{|q|B}$</p></div><h3>In Electric Field (SM)</h3><div class="formula-box"><p>$\\vec{F} = q\\vec{E}$ → uniform acceleration (like projectile)</p><p>$a = qE/m$ (along field direction)</p></div>` },
        ],
        keyFormulas: ["$x = v_0\\cos\\theta \\cdot t$", "$y = v_0\\sin\\theta \\cdot t - \\frac{1}{2}gt^2$", "$r = mv/|q|B$ (magnetic)", "$a = qE/m$ (electric)"],
        quiz: [
            { id: "pm1q", question: "Horizontal motion of a projectile is:", options: ["Accelerated", "Uniform", "Decelerated", "Circular"], correctAnswer: 1, explanation: "No horizontal force → constant velocity." },
            { id: "pm2q", question: "Maximum range achieved at θ =", options: ["30°", "45°", "60°", "90°"], correctAnswer: 1, explanation: "Range is maximum at 45° (no air resistance)." },
            { id: "pm3q", question: "Trajectory of a projectile is a:", options: ["Circle", "Ellipse", "Parabola", "Straight line"], correctAnswer: 2, explanation: "Projectile path is parabolic." },
            { id: "pm4q", question: "In magnetic field, charged particle moves in:", options: ["Straight line", "Parabola", "Circle", "Ellipse"], correctAnswer: 2, explanation: "Magnetic force is always perpendicular to v → circular path." },
            { id: "pm5q", question: "Radius of circular orbit r = mv/|q|B. If B doubles:", options: ["r doubles", "r halves", "r unchanged", "r = 0"], correctAnswer: 1, explanation: "r ∝ 1/B." },
        ],
        examProblems: [
            { id: "pm-ex1", title: "Exam Problem 1", problem: `<p>A ball is launched at $v_0 = 20$ m/s at $\\theta = 30°$.</p><ol><li>Find the time of flight.</li><li>Find the horizontal range.</li></ol>`, solution: `<ol><li>$T = 2v_0\\sin\\theta/g = 2\\times20\\times0.5/9.81 \\approx 2.04$ s.</li><li>$R = v_0\\cos\\theta \\times T = 20\\times0.866\\times2.04 \\approx 35.4$ m.</li></ol>` },
        ],
    },
    {
        id: "pc-spontaneous-evolution", title: "Spontaneous Evolution of a Chemical System", description: "Reaction quotient, direction of spontaneous evolution, final equilibrium state",
        sections: [
            { id: "se1", title: "I. Predicting Direction of Evolution", content: `<h3>Using Qr and Kc</h3><div class="formula-box"><p>Compare $Q_{r,i}$ (initial quotient) to $K^\\circ$ (equilibrium constant).</p><p>$Q_{r,i} < K^\\circ$ → forward direction (→)</p><p>$Q_{r,i} > K^\\circ$ → backward direction (←)</p><p>$Q_{r,i} = K^\\circ$ → already at equilibrium</p></div>` },
            { id: "se2", title: "II. Final State", content: `<h3>Equilibrium Calculations</h3><p>At final state: $Q_{r,f} = K^\\circ$. Use ICE table to find equilibrium concentrations and conversion rate $\\tau$.</p><div class="formula-box"><p>Conversion rate: $\\tau = x_{eq}/x_{max}$</p></div>` },
        ],
        keyFormulas: ["Compare $Q_r$ to $K^\\circ$", "$Q_r < K^\\circ$ → forward", "Final state: $Q_{r,f} = K^\\circ$", "$\\tau = x_{eq}/x_{max}$"],
        quiz: [
            { id: "se1q", question: "If Qr,i = K°, the system:", options: ["Reacts forward", "Reacts backward", "Is at equilibrium", "Does nothing"], correctAnswer: 2, explanation: "Qr = K° means the system is already at equilibrium." },
            { id: "se2q", question: "Conversion rate τ = 1 means:", options: ["0% converted", "50% converted", "100% converted", "Equilibrium"], correctAnswer: 2, explanation: "τ = 1 means the limiting reactant is completely consumed." },
            { id: "se3q", question: "Qr < K° means reaction goes:", options: ["Backward", "Forward", "Stops", "Both ways"], correctAnswer: 1, explanation: "System moves forward to produce more products." },
            { id: "se4q", question: "K° >> 1 means:", options: ["Reaction barely proceeds", "Reaction nearly complete", "Equilibrium far left", "No reaction"], correctAnswer: 1, explanation: "Large K° → products strongly favored → nearly complete." },
            { id: "se5q", question: "ICE table stands for:", options: ["Initial-Change-End", "Ionic-Covalent-Exchange", "Increase-Constant-Equilibrium", "None"], correctAnswer: 0, explanation: "ICE = Initial, Change, Equilibrium concentrations." },
        ],
        examProblems: [
            { id: "se-ex1", title: "Exam Problem 1", problem: `<p>$A + B \\rightleftharpoons C$, $K^\\circ = 100$. Initially: $[A]=[B]=0.5$ mol/L, $[C]=0$.</p><ol><li>Calculate $Q_{r,i}$ and predict direction of evolution.</li><li>Set up the ICE table and find equilibrium concentrations.</li></ol>`, solution: `<ol><li>$Q_{r,i} = 0/(0.5\\times0.5) = 0 < K^\\circ = 100$ → forward.</li><li>At equilibrium: let $x$ = change. $K^\\circ = x/((0.5-x)^2) = 100$. Solving: $x \\approx 0.476$ mol/L.</li></ol>` },
        ],
    },
    {
        id: "pc-electrochemistry", title: "Spontaneous Transformations in Batteries and Energy Production", description: "Electrochemical cells, oxidation-reduction, EMF, Faraday's law",
        sections: [
            { id: "ec1", title: "I. Electrochemical Cells", content: `<h3>Galvanic Cell (Battery)</h3><div class="formula-box"><p>Spontaneous redox reaction → electrical energy.</p><p><strong>Anode (–):</strong> oxidation ($M \\to M^{n+} + ne^-$)</p><p><strong>Cathode (+):</strong> reduction ($M^{n+} + ne^- \\to M$)</p></div>` },
            { id: "ec2", title: "II. Faraday's Law & EMF", content: `<h3>Faraday's Law</h3><div class="formula-box"><p>$$n_e = \\frac{Q}{F} = \\frac{It}{F}$$</p><p>$F = 96485$ C/mol (Faraday constant)</p></div><h3>EMF</h3><div class="formula-box"><p>$E = E_{cathode} - E_{anode}$ (standard potentials)</p></div>` },
        ],
        keyFormulas: ["Anode: oxidation", "Cathode: reduction", "$n_e = Q/F = It/F$", "$E = E^\\circ_{cathode} - E^\\circ_{anode}$"],
        quiz: [
            { id: "ec1q", question: "In a galvanic cell, the anode is:", options: ["+, reduction", "–, oxidation", "+, oxidation", "–, reduction"], correctAnswer: 1, explanation: "Anode = negative terminal = oxidation." },
            { id: "ec2q", question: "Faraday constant F ≈", options: ["6.02×10²³ C/mol", "96485 C/mol", "8.314 J/(mol·K)", "1.6×10⁻¹⁹ C"], correctAnswer: 1, explanation: "F = 96485 C/mol." },
            { id: "ec3q", question: "Q = It gives charge in:", options: ["Joules", "Coulombs", "Moles", "Volts"], correctAnswer: 1, explanation: "Current × time = charge (Coulombs)." },
            { id: "ec4q", question: "Positive EMF means:", options: ["Non-spontaneous", "Spontaneous", "At equilibrium", "Endothermic"], correctAnswer: 1, explanation: "E > 0 → spontaneous reaction." },
            { id: "ec5q", question: "In electrolysis, reduction occurs at:", options: ["Anode", "Cathode", "Both", "Neither"], correctAnswer: 1, explanation: "Cathode = reduction in both galvanic cells and electrolysis." },
        ],
        examProblems: [
            { id: "ec-ex1", title: "Exam Problem 1", problem: `<p>A copper-zinc electrochemical cell. $E^\\circ(Cu^{2+}/Cu) = +0.34$ V, $E^\\circ(Zn^{2+}/Zn) = -0.76$ V.</p><ol><li>Identify anode and cathode.</li><li>Calculate the standard EMF.</li></ol>`, solution: `<ol><li>Zn is oxidized (anode, –). Cu²⁺ is reduced (cathode, +).</li><li>$E = E_{cathode} - E_{anode} = 0.34 - (-0.76) = 1.10$ V.</li></ol>` },
        ],
    },
    {
        id: "pc-satellites-planets", title: "Motion of Satellites and Planets", description: "Kepler's laws, law of gravitation, circular orbital motion",
        sections: [
            { id: "sp1", title: "I. Law of Universal Gravitation", content: `<h3>Newton's Gravitational Force</h3><div class="formula-box"><p>$$F = G\\frac{m_1 m_2}{r^2}$$</p><p>$G = 6.67 \\times 10^{-11}$ N·m²/kg²</p></div><h3>Circular Orbital Motion</h3><div class="formula-box"><p>$F_{grav} = F_{centripetal}$: $G\\frac{Mm}{r^2} = m\\frac{v^2}{r}$</p><p>$v = \\sqrt{GM/r}$, $T = \\frac{2\\pi r}{v}$</p></div>` },
            { id: "sp2", title: "II. Kepler's Laws", content: `<h3>Third Law (Harmonic Law)</h3><div class="formula-box"><p>$$\\frac{T^2}{r^3} = \\frac{4\\pi^2}{GM}$$</p><p>This ratio is the same for all satellites of the same central body.</p></div>` },
        ],
        keyFormulas: ["$F = GMm/r^2$", "$v = \\sqrt{GM/r}$", "$T^2/r^3 = 4\\pi^2/(GM)$", "$G = 6.67\\times10^{-11}$ N·m²/kg²"],
        quiz: [
            { id: "sp1q", question: "Gravitational force F ∝", options: ["r²", "1/r", "1/r²", "r"], correctAnswer: 2, explanation: "F = GMm/r² → F ∝ 1/r²." },
            { id: "sp2q", question: "Orbital speed v = ", options: ["√(GM/r)", "GMm/r", "2πr/T only", "gr"], correctAnswer: 0, explanation: "Balancing gravity and centripetal force gives v = √(GM/r)." },
            { id: "sp3q", question: "Kepler's 3rd law: T²/r³ =", options: ["GM", "4π²/GM", "2πGM", "r/v"], correctAnswer: 1, explanation: "T²/r³ = 4π²/(GM)." },
            { id: "sp4q", question: "Geostationary orbit has T =", options: ["1 hour", "24 hours", "1 month", "1 year"], correctAnswer: 1, explanation: "Geostationary: T = 24 h (same as Earth's rotation)." },
            { id: "sp5q", question: "As orbital radius increases, speed:", options: ["Increases", "Decreases", "Stays same", "Becomes 0"], correctAnswer: 1, explanation: "v = √(GM/r) → larger r → smaller v." },
        ],
        examProblems: [
            { id: "sp-ex1", title: "Exam Problem 1", problem: `<p>The Moon orbits Earth at $r = 3.84 \\times 10^8$ m with $T = 27.3$ days. $M_{Earth} = 5.97 \\times 10^{24}$ kg.</p><ol><li>Verify Kepler's third law numerically.</li><li>Calculate the orbital speed of the Moon.</li></ol>`, solution: `<ol><li>$T^2/r^3 = (27.3\\times86400)^2/(3.84\\times10^8)^3 \\approx 1.02\\times10^{-13}$. $4\\pi^2/(GM) = 4\\pi^2/(6.67\\times10^{-11}\\times5.97\\times10^{24}) \\approx 9.9\\times10^{-14}$ ✓ (consistent).</li><li>$v = 2\\pi r/T = 2\\pi\\times3.84\\times10^8/(27.3\\times86400) \\approx 1023$ m/s.</li></ol>` },
        ],
    },
    {
        id: "pc-rotation", title: "Rotation of a Solid Around a Fixed Axis", description: "Angular kinematics, moment of inertia, Newton's second law for rotation",
        sections: [
            { id: "rot1", title: "I. Angular Kinematics", content: `<h3>Angular Quantities</h3><div class="formula-box"><p>Angular velocity: $\\omega = \\frac{d\\theta}{dt}$ (rad/s)</p><p>Angular acceleration: $\\alpha = \\frac{d\\omega}{dt}$ (rad/s²)</p><p>Link to linear: $v = r\\omega$, $a_t = r\\alpha$</p></div>` },
            { id: "rot2", title: "II. Newton's Law for Rotation", content: `<h3>Rotational Dynamics</h3><div class="formula-box"><p>$$\\sum M_\\Delta = J\\alpha$$</p><p>$J$ = moment of inertia (kg·m²), $M_\\Delta$ = torque (N·m)</p></div><h3>Kinetic Energy</h3><div class="formula-box"><p>$$E_k = \\frac{1}{2}J\\omega^2$$</p></div>` },
        ],
        keyFormulas: ["$\\omega = d\\theta/dt$", "$v = r\\omega$", "$\\sum M = J\\alpha$", "$E_k = \\frac{1}{2}J\\omega^2$"],
        quiz: [
            { id: "rot1q", question: "Angular velocity ω unit:", options: ["m/s", "rad/s", "rad/s²", "N·m"], correctAnswer: 1, explanation: "ω is in radians per second." },
            { id: "rot2q", question: "ΣM = Jα is analogous to:", options: ["v = d/t", "F = ma", "E = mc²", "P = UI"], correctAnswer: 1, explanation: "Rotational version of Newton's 2nd law: torque = I × angular acceleration." },
            { id: "rot3q", question: "v = rω relates:", options: ["Linear and angular velocity", "Force and torque", "Energy and power", "Frequency and wavelength"], correctAnswer: 0, explanation: "Linear speed at radius r: v = rω." },
            { id: "rot4q", question: "Rotational kinetic energy =", options: ["½mv²", "½Jω²", "Jω", "mω²r"], correctAnswer: 1, explanation: "Ek_rot = ½Jω²." },
            { id: "rot5q", question: "Moment of inertia J depends on:", options: ["Mass only", "Speed only", "Mass distribution about axis", "Temperature"], correctAnswer: 2, explanation: "J = Σmr² depends on mass and its distance from axis." },
        ],
        examProblems: [
            { id: "rot-ex1", title: "Exam Problem 1", problem: `<p>A disk ($J = 0.2$ kg·m²) is accelerated by a torque $M = 4$ N·m from rest.</p><ol><li>Find the angular acceleration.</li><li>Find ω after 5 s.</li></ol>`, solution: `<ol><li>$\\alpha = M/J = 4/0.2 = 20$ rad/s².</li><li>$\\omega = \\alpha t = 20\\times5 = 100$ rad/s.</li></ol>` },
        ],
    },
    {
        id: "pc-mechanical-oscillators", title: "Mechanical Oscillators", description: "Spring-mass pendulum, gravity pendulum, torsion pendulum, free oscillations",
        sections: [
            { id: "mo1", title: "A. Spring-Mass Oscillator", content: `<h3>Elastic Pendulum</h3><div class="formula-box"><p>Restoring force: $F = -kx$</p><p>$$\\omega_0 = \\sqrt{\\frac{k}{m}}, \\quad T_0 = 2\\pi\\sqrt{\\frac{m}{k}}$$</p><p>Position: $x(t) = X_m \\cos(\\omega_0 t + \\varphi)$</p></div>` },
            { id: "mo2", title: "B. Gravity & Torsion Pendulums", content: `<h3>Simple Gravity Pendulum</h3><div class="formula-box"><p>$$T_0 = 2\\pi\\sqrt{\\frac{L}{g}}$$ (small angle: $\\theta < 10°$)</p></div><h3>Torsion Pendulum</h3><div class="formula-box"><p>$$T_0 = 2\\pi\\sqrt{\\frac{J}{C}}$$</p><p>$J$ = moment of inertia, $C$ = torsion constant.</p></div>` },
        ],
        keyFormulas: ["$T_0 = 2\\pi\\sqrt{m/k}$ (spring)", "$T_0 = 2\\pi\\sqrt{L/g}$ (pendulum)", "$T_0 = 2\\pi\\sqrt{J/C}$ (torsion)", "$x(t) = X_m\\cos(\\omega_0 t + \\varphi)$"],
        quiz: [
            { id: "mo1q", question: "Spring-mass period T₀ =", options: ["2π√(k/m)", "2π√(m/k)", "√(k/m)", "m/k"], correctAnswer: 1, explanation: "T₀ = 2π√(m/k)." },
            { id: "mo2q", question: "Simple pendulum T₀ depends on:", options: ["Mass and L", "L and g only", "Mass only", "Amplitude"], correctAnswer: 1, explanation: "T₀ = 2π√(L/g) — independent of mass and amplitude (small angles)." },
            { id: "mo3q", question: "If spring constant k doubles, T₀:", options: ["Doubles", "Halves", "×√2", "×(1/√2)"], correctAnswer: 3, explanation: "T₀ ∝ 1/√k → k×2 → T₀ ×(1/√2)." },
            { id: "mo4q", question: "Free oscillation frequency ω₀ is:", options: ["Forced frequency", "Natural frequency", "Damping frequency", "Resonance only"], correctAnswer: 1, explanation: "ω₀ is the natural (proper) frequency of the system." },
            { id: "mo5q", question: "Valid small angle condition:", options: ["θ < 45°", "θ < 10°", "θ < 30°", "Any θ"], correctAnswer: 1, explanation: "Sinθ ≈ θ valid for θ < ~10°." },
        ],
        examProblems: [
            { id: "mo-ex1", title: "Exam Problem 1", problem: `<p>A 0.2 kg mass on a spring ($k = 50$ N/m) oscillates freely.</p><ol><li>Calculate $T_0$ and $f_0$.</li><li>The mass is pulled 5 cm and released. Write $x(t)$.</li></ol>`, solution: `<ol><li>$T_0 = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.2/50} \\approx 0.40$ s. $f_0 = 1/T_0 \\approx 2.5$ Hz.</li><li>$x(t) = 0.05\\cos(\\omega_0 t)$ m with $\\omega_0 = 2\\pi/T_0 \\approx 15.8$ rad/s.</li></ol>` },
        ],
    },
    {
        id: "pc-electrolysis", title: "Forced Transformations – Electrolysis", description: "Electrolysis principles, electrolytic cell, Faraday's laws, applications",
        sections: [
            { id: "el1", title: "I. Electrolysis Principle", content: `<h3>Electrolytic Cell</h3><div class="formula-box"><p>External current forces a non-spontaneous redox reaction.</p><p><strong>Cathode (–):</strong> reduction (gains electrons)</p><p><strong>Anode (+):</strong> oxidation (loses electrons)</p></div>` },
            { id: "el2", title: "II. Faraday's Laws", content: `<h3>Quantity of Substance Deposited</h3><div class="formula-box"><p>$$n = \\frac{Q}{nF} = \\frac{It}{nF}$$</p><p>$n$ = moles of substance, $n_e$ = electrons per ion, $F = 96485$ C/mol.</p><p>Mass deposited: $m = n \\times M$</p></div>` },
        ],
        keyFormulas: ["Cathode: reduction", "Anode: oxidation", "$n = It/(n_e F)$", "$m = nM$"],
        quiz: [
            { id: "el1q", question: "Electrolysis requires:", options: ["Spontaneous reaction", "External power source", "No current", "Temperature only"], correctAnswer: 1, explanation: "Electrolysis uses external electricity to drive non-spontaneous reactions." },
            { id: "el2q", question: "At the cathode in electrolysis:", options: ["Oxidation", "Reduction", "No reaction", "Gas always forms"], correctAnswer: 1, explanation: "Cathode = negative = reduction." },
            { id: "el3q", question: "Mass of metal deposited m =", options: ["ItF", "nM", "Q/F", "MIt/(n_eF)"], correctAnswer: 3, explanation: "n = It/(n_eF), then m = nM." },
            { id: "el4q", question: "Electroplating uses:", options: ["Galvanic cell", "Electrolysis", "Fission", "Fusion"], correctAnswer: 1, explanation: "Electroplating deposits metal via electrolysis." },
            { id: "el5q", question: "Faraday constant F ≈ ___ C/mol:", options: ["9648.5", "96485", "964850", "9.6"], correctAnswer: 1, explanation: "F ≈ 96485 C/mol." },
        ],
        examProblems: [
            { id: "el-ex1", title: "Exam Problem 1", problem: `<p>Copper is deposited by electrolysis. Current $I = 2$ A for $t = 30$ min. $M_{Cu} = 63.5$ g/mol, $n_e = 2$.</p><ol><li>Calculate the charge $Q$.</li><li>Find the mass of copper deposited.</li></ol>`, solution: `<ol><li>$Q = It = 2 \\times 1800 = 3600$ C.</li><li>$n_{Cu} = Q/(n_e F) = 3600/(2\\times96485) = 0.01866$ mol. $m = 0.01866\\times63.5 \\approx 1.18$ g.</li></ol>` },
        ],
    },
    {
        id: "pc-energy-oscillators", title: "Energy Aspects of Oscillators", description: "Mechanical energy in spring-mass and pendulum systems, damping and energy dissipation",
        sections: [
            { id: "eo1", title: "I. Energy in Spring-Mass Oscillator", content: `<h3>Kinetic & Potential Energy</h3><div class="formula-box"><p>$E_k = \\frac{1}{2}mv^2$, $E_p = \\frac{1}{2}kx^2$</p><p>Total: $E_{mec} = E_k + E_p = \\frac{1}{2}kX_m^2$ (constant, no friction)</p></div>` },
            { id: "eo2", title: "II. Damped Oscillations – Energy Loss", content: `<h3>Energy Dissipation</h3><div class="formula-box"><p>With friction, $E_{mec}$ decreases over time.</p><p>$\\frac{dE_{mec}}{dt} = -f_v v^2 < 0$</p><p>Amplitude decreases exponentially.</p></div>` },
        ],
        keyFormulas: ["$E_{mec} = \\frac{1}{2}kX_m^2$ (free)", "$E_k + E_p = \\text{const}$ (no friction)", "Damped: amplitude ↓ exponentially"],
        quiz: [
            { id: "eo1q", question: "At max displacement, kinetic energy =", options: ["Maximum", "½kXm²", "0", "mω²Xm²"], correctAnswer: 2, explanation: "At max displacement v = 0 → Ek = 0." },
            { id: "eo2q", question: "In free oscillation, total mechanical energy:", options: ["Increases", "Decreases", "Is constant", "Oscillates"], correctAnswer: 2, explanation: "No friction → energy conserved." },
            { id: "eo3q", question: "Potential energy of spring: Ep =", options: ["½mv²", "½kx²", "kx", "mgh"], correctAnswer: 1, explanation: "Elastic PE = ½kx²." },
            { id: "eo4q", question: "With air resistance, amplitude:", options: ["Stays constant", "Increases", "Decreases", "Oscillates"], correctAnswer: 2, explanation: "Damped oscillations: amplitude decays exponentially." },
            { id: "eo5q", question: "Total energy at equilibrium position:", options: ["All PE", "All KE", "Zero", "Negative"], correctAnswer: 1, explanation: "At x=0, Ep=0, all energy is kinetic." },
        ],
        examProblems: [
            { id: "eo-ex1", title: "Exam Problem 1", problem: `<p>Spring ($k = 40$ N/m), mass $m = 0.1$ kg. Amplitude $X_m = 4$ cm.</p><ol><li>Calculate total mechanical energy.</li><li>Find the maximum speed.</li></ol>`, solution: `<ol><li>$E = \\frac{1}{2}kX_m^2 = \\frac{1}{2}\\times40\\times(0.04)^2 = 0.032$ J.</li><li>$v_{max} = X_m\\omega_0 = X_m\\sqrt{k/m} = 0.04\\sqrt{400} = 0.04\\times20 = 0.8$ m/s.</li></ol>` },
        ],
    },
    {
        id: "pc-atom-newton", title: "Atom and Newton's Mechanics", description: "Bohr model of the hydrogen atom, quantized energy levels, application of Newton's laws to circular orbital motion of the electron",
        sections: [
            { id: "an1", title: "I. Bohr Model of the Hydrogen Atom", content: `<h3>Quantized Orbits</h3><div class="formula-box"><p>Electron orbit radius: $r_n = n^2 a_0$ where $a_0 = 0.529$ Å</p><p>Energy levels: $E_n = -\\frac{13.6}{n^2}$ eV</p><p>$n$ = principal quantum number ($n = 1, 2, 3...$)</p></div>` },
            { id: "an2", title: "II. Newton's Law Applied to the Electron", content: `<h3>Circular Orbit Condition</h3><div class="formula-box"><p>Coulomb force = centripetal force:</p><p>$$\\frac{ke^2}{r^2} = \\frac{mv^2}{r}$$</p><p>This gives: $v = \\sqrt{ke^2/(mr)}$</p></div>` },
        ],
        keyFormulas: ["$E_n = -13.6/n^2$ eV", "$r_n = n^2 a_0$", "$ke^2/r^2 = mv^2/r$", "$\\Delta E = hf$ (photon emitted/absorbed)"],
        quiz: [
            { id: "an1q", question: "Ground state of hydrogen (n=1): E₁ =", options: ["-13.6 eV", "-3.4 eV", "0 eV", "+13.6 eV"], correctAnswer: 0, explanation: "E₁ = -13.6/1² = -13.6 eV." },
            { id: "an2q", question: "Bohr radius a₀ ≈", options: ["0.529 Å", "0.1 nm", "1 nm", "10⁻¹⁰ m"], correctAnswer: 0, explanation: "a₀ = 0.529 Å = 0.0529 nm." },
            { id: "an3q", question: "When electron jumps from n=3 to n=1:", options: ["Photon absorbed", "Photon emitted", "No change", "Nucleus splits"], correctAnswer: 1, explanation: "Higher to lower level → photon emitted." },
            { id: "an4q", question: "Coulomb force on electron provides:", options: ["Gravitational force", "Centripetal force", "Normal force", "Friction"], correctAnswer: 1, explanation: "Electrostatic attraction = centripetal force for circular orbit." },
            { id: "an5q", question: "Energy to ionize hydrogen from n=1:", options: ["1 eV", "3.4 eV", "13.6 eV", "27.2 eV"], correctAnswer: 2, explanation: "Ionization energy = 13.6 eV (from n=1 to n=∞)." },
        ],
        examProblems: [
            { id: "an-ex1", title: "Exam Problem 1", problem: `<p>A hydrogen electron transitions from $n=4$ to $n=2$.</p><ol><li>Calculate the energy of the emitted photon.</li><li>Find its frequency (use $h = 6.63\\times10^{-34}$ J·s).</li></ol>`, solution: `<ol><li>$\\Delta E = E_4 - E_2 = -13.6/16 - (-13.6/4) = -0.85 + 3.4 = 2.55$ eV $= 4.08\\times10^{-19}$ J.</li><li>$f = \\Delta E/h = 4.08\\times10^{-19}/6.63\\times10^{-34} \\approx 6.16\\times10^{14}$ Hz.</li></ol>` },
        ],
    },
    {
        id: "pc-esterification", title: "Esterification and Hydrolysis Reactions", description: "Esterification equilibrium, hydrolysis, saponification, rate and yield",
        sections: [
            { id: "es1", title: "I. Esterification", content: `<h3>Formation of Esters</h3><div class="formula-box"><p>Acid + Alcohol $\\rightleftharpoons$ Ester + Water</p><p>$$RCOOH + R'OH \\rightleftharpoons RCOOR' + H_2O$$</p><p>Catalyst: H⁺ (strong acid, e.g. H₂SO₄)</p><p>Equilibrium constant $K_c \\approx 4$ (equimolar)</p></div>` },
            { id: "es2", title: "II. Hydrolysis & Saponification", content: `<h3>Hydrolysis (Reverse)</h3><div class="formula-box"><p>$RCOOR' + H_2O \\rightleftharpoons RCOOH + R'OH$</p><p>Same equilibrium, approached from the right.</p></div><h3>Saponification (Irreversible)</h3><div class="formula-box"><p>$RCOOR' + NaOH \\to RCOONa + R'OH$</p><p>Complete reaction (irreversible).</p></div>` },
        ],
        keyFormulas: ["$K_c \\approx 4$ (esterification)", "Max yield ≈ 67% equimolar", "Saponification: complete (irreversible)", "Catalyst speeds up but doesn't shift equilibrium"],
        quiz: [
            { id: "es1q", question: "Esterification is:", options: ["Irreversible", "Reversible equilibrium", "Spontaneous only", "Always complete"], correctAnswer: 1, explanation: "Esterification is a reversible equilibrium reaction." },
            { id: "es2q", question: "Saponification uses:", options: ["H₂SO₄", "NaOH", "H₂O", "HCl"], correctAnswer: 1, explanation: "Saponification = base hydrolysis with NaOH → irreversible." },
            { id: "es3q", question: "Maximum esterification yield (equimolar) ≈", options: ["33%", "50%", "67%", "100%"], correctAnswer: 2, explanation: "Kc ≈ 4 → equilibrium at ~67% conversion equimolar." },
            { id: "es4q", question: "H₂SO₄ in esterification acts as:", options: ["Reactant", "Product", "Catalyst", "Solvent"], correctAnswer: 2, explanation: "H₂SO₄ is a catalyst — it speeds up but is not consumed." },
            { id: "es5q", question: "Hydrolysis is the ___ of esterification:", options: ["Same reaction", "Reverse", "Oxidation", "Reduction"], correctAnswer: 1, explanation: "Hydrolysis breaks ester → acid + alcohol (reverse of esterification)." },
        ],
        examProblems: [
            { id: "es-ex1", title: "Exam Problem 1", problem: `<p>1 mol of acetic acid + 1 mol of ethanol. $K_c = 4$.</p><ol><li>Write the esterification reaction.</li><li>Calculate the equilibrium moles of ester formed.</li></ol>`, solution: `<ol><li>$CH_3COOH + C_2H_5OH \\rightleftharpoons CH_3COOC_2H_5 + H_2O$</li><li>Let $x$ = moles of ester at equilibrium. $K_c = \\frac{x \\cdot x}{(1-x)(1-x)} = 4$ → $x/(1-x) = 2$ → $x = 2/3 \\approx 0.67$ mol.</li></ol>` },
        ],
    },
    {
        id: "pc-chemical-control", title: "Controlling the Evolution of a Chemical System", description: "Strategies to shift equilibrium, improve yield, temperature and pressure effects",
        sections: [
            { id: "cc1", title: "I. Improving Reaction Yield", content: `<h3>Le Chatelier's Principle Applied</h3><ul><li><strong>Excess of one reactant</strong> → shifts equilibrium toward products</li><li><strong>Remove a product</strong> (distillation, precipitation) → shifts forward</li><li><strong>Temperature:</strong> favor exothermic direction at lower T</li><li><strong>Pressure:</strong> favor side with fewer moles of gas</li></ul>` },
            { id: "cc2", title: "II. Industrial Applications", content: `<h3>Haber Process (NH₃ synthesis)</h3><div class="formula-box"><p>$N_2 + 3H_2 \\rightleftharpoons 2NH_3$, $\\Delta H < 0$ (exothermic)</p><p>Optimal: moderate T (~450°C), high P (~200 atm), Fe catalyst.</p></div>` },
        ],
        keyFormulas: ["Le Chatelier: remove product → shift forward", "Excess reactant → higher yield", "High P favors fewer gas moles", "Low T favors exothermic direction"],
        quiz: [
            { id: "cc1q", question: "To increase ester yield, one can:", options: ["Use less acid", "Remove water formed", "Lower temperature always", "Add NaOH"], correctAnswer: 1, explanation: "Removing water (product) shifts equilibrium forward." },
            { id: "cc2q", question: "In Haber process, high pressure:", options: ["Decreases NH₃", "Increases NH₃ yield", "No effect", "Stops reaction"], correctAnswer: 1, explanation: "High P shifts toward fewer gas moles → more NH₃." },
            { id: "cc3q", question: "For exothermic reaction, lower T:", options: ["Decreases yield", "Increases yield", "No effect", "Requires catalyst"], correctAnswer: 1, explanation: "Lower T favors exothermic direction → more products." },
            { id: "cc4q", question: "Adding excess ethanol in esterification:", options: ["Reduces ester yield", "Increases ester yield", "No effect", "Produces soap"], correctAnswer: 1, explanation: "Excess reactant shifts equilibrium toward products." },
            { id: "cc5q", question: "Catalyst in chemical equilibrium:", options: ["Shifts equilibrium right", "Shifts equilibrium left", "Speeds up but no shift", "Changes Kc"], correctAnswer: 2, explanation: "Catalyst speeds up both forward and reverse equally — no shift in equilibrium position." },
        ],
        examProblems: [
            { id: "cc-ex1", title: "Exam Problem 1", problem: `<p>For the synthesis of ester with $K_c = 4$, a chemist uses 1 mol acid and 3 mol alcohol.</p><ol><li>Set up the ICE table.</li><li>Show that yield is higher than the equimolar case (67%).</li></ol>`, solution: `<ol><li>Let $x$ = moles of ester. $K_c = x^2/((1-x)(3-x)) = 4$.</li><li>$x^2 = 4(1-x)(3-x)$. Solving: $3x^2 - 16x + 12 = 0$ → $x \\approx 0.88$ mol → yield ≈ 88% > 67% ✓.</li></ol>` },
        ],
    },
];
