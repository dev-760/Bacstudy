import { Lesson } from "./types";

export const pcLessonsNew: Lesson[] = [
    {
        id: "pc-mech-waves", title: "Mechanical Waves", description: "Progressive mechanical waves: propagation, speed, and properties",
        sections: [
            { id: "mw1", title: "I. Definition & Propagation", content: `<h3>What is a Mechanical Wave?</h3><div class="formula-box"><p>A <strong>mechanical wave</strong> is a disturbance that propagates through a material medium without matter transport.</p><p>Types: <strong>Transverse</strong> (perpendicular to propagation) and <strong>Longitudinal</strong> (parallel).</p></div><h3>Speed of Propagation</h3><div class="formula-box"><p>$$v = \\frac{d}{\\Delta t}$$</p><p>where $d$ = distance, $\\Delta t$ = time delay between two points.</p></div>` },
            { id: "mw2", title: "II. Properties", content: `<h3>Key Properties</h3><ul><li><strong>No matter transport:</strong> only energy is transferred</li><li><strong>Requires a medium:</strong> cannot propagate in vacuum</li><li><strong>Dispersion:</strong> speed may depend on frequency</li><li><strong>Non-dispersive:</strong> speed is constant for all frequencies</li></ul><div class="tip-box"><strong>💡 Exam tip:</strong> In a non-dispersive medium, the wave shape is preserved during propagation.</div>` },
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
        id: "pc-periodic-waves", title: "Periodic Mechanical Waves", description: "Wavelength, frequency, period, and sinusoidal waves",
        sections: [
            { id: "pw1", title: "I. Periodic Waves", content: `<h3>Definitions</h3><div class="formula-box"><p><strong>Period</strong> $T$: time for one complete oscillation (in seconds).</p><p><strong>Frequency</strong> $f = \\frac{1}{T}$ (in Hz).</p><p><strong>Wavelength</strong> $\\lambda = v \\cdot T = \\frac{v}{f}$ (in meters).</p></div><h3>Sinusoidal Wave</h3><div class="formula-box"><p>$$y(x,t) = A\\sin\\left(\\frac{2\\pi t}{T} - \\frac{2\\pi x}{\\lambda}\\right)$$</p></div>` },
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
        id: "pc-light-waves", title: "Light Wave Propagation", description: "Diffraction, interference of light, Young's double slit",
        sections: [
            { id: "lw1", title: "I. Light Diffraction", content: `<h3>Light as a Wave</h3><div class="formula-box"><p>Light is an electromagnetic wave: $c = 3 \\times 10^8$ m/s in vacuum.</p><p>$\\lambda_{\\text{visible}}$: 400 nm (violet) to 800 nm (red).</p></div><h3>Single Slit Diffraction</h3><div class="formula-box"><p>$$\\sin\\theta = \\frac{\\lambda}{a}$$</p><p>Width of central fringe: $L = \\frac{2\\lambda D}{a}$</p></div>` },
            { id: "lw2", title: "II. Young's Double Slit", content: `<h3>Interference Pattern</h3><div class="formula-box"><p>$$i = \\frac{\\lambda D}{a}$$</p><p>$i$ = fringe spacing, $D$ = distance to screen, $a$ = slit separation.</p></div><div class="tip-box"><strong>💡 Exam tip:</strong> To find $\\lambda$, measure $i$ and use $\\lambda = ia/D$.</div>` },
        ],
        keyFormulas: ["$c = 3 \\times 10^8$ m/s", "$i = \\lambda D/a$", "$\\sin\\theta = \\lambda/a$"],
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
        id: "pc-radioactivity", title: "Radioactive Decay", description: "Types of decay, half-life, decay law, and dating",
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
            { id: "rd-ex1", title: "Exam Problem 1", problem: `<p>Carbon-14 has $t_{1/2} = 5730$ years. A sample has activity $A = 0.25 A_0$.</p><ol><li>Find the decay constant $\\lambda$.</li><li>Find the age of the sample.</li></ol>`, solution: `<ol><li>$\\lambda = \\ln 2/t_{1/2} = 0.693/5730 = 1.21 \\times 10^{-4}$ year⁻¹.</li><li>$0.25 = e^{-\\lambda t}$ → $\\ln(0.25) = -\\lambda t$ → $t = -\\ln(0.25)/\\lambda = 2\\ln 2/\\lambda = 2 \\times 5730 = 11460$ years.</li></ol>` },
        ],
    },
    {
        id: "pc-nuclear-energy", title: "Nuclear Mass & Energy", description: "Mass defect, binding energy, fission and fusion",
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
        id: "pc-rc", title: "RC Circuit", description: "Charging and discharging a capacitor, time constant τ",
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
        id: "pc-rl", title: "RL Circuit", description: "Inductor behavior, RL circuit transient response",
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
        id: "pc-rlc", title: "RLC Oscillations", description: "Free oscillations, damping, natural frequency",
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
            { id: "rlc-ex1", title: "Exam Problem 1", problem: `<p>$L = 0.1$ H, $C = 10$ μF.</p><ol><li>Calculate $T_0$ and $f_0$.</li><li>The capacitor is charged to $U_0 = 5$ V. Calculate total energy.</li></ol>`, solution: `<ol><li>$T_0 = 2\\pi\\sqrt{0.1 \\times 10^{-5}} = 2\\pi \\times 10^{-3} \\approx 6.28$ ms. $f_0 = 1/T_0 \\approx 159$ Hz.</li><li>$E = \\frac{1}{2}CU_0^2 = \\frac{1}{2}(10^{-5})(25) = 125$ μJ.</li></ol>` },
        ],
    },
    {
        id: "pc-newton", title: "Newton's Laws", description: "Three laws of motion, applications to dynamics",
        sections: [
            { id: "nw1", title: "I. Newton's Three Laws", content: `<h3>First Law (Inertia)</h3><div class="formula-box"><p>A body remains at rest or in uniform motion unless acted upon by an external force.</p></div><h3>Second Law</h3><div class="formula-box"><p>$$\\sum \\vec{F} = m\\vec{a}$$</p></div><h3>Third Law</h3><div class="formula-box"><p>$\\vec{F}_{A/B} = -\\vec{F}_{B/A}$ (action = reaction)</p></div>` },
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
        id: "pc-acids-bases", title: "Acid-Base Reactions", description: "pH, strong/weak acids, titration curves",
        sections: [
            { id: "ab1", title: "I. pH & Acid-Base Theory", content: `<h3>Definitions</h3><div class="formula-box"><p>$$pH = -\\log[H_3O^+]$$</p><p>Acid: proton donor ($HA \\to A^- + H^+$)</p><p>Base: proton acceptor ($B + H^+ \\to BH^+$)</p></div><h3>Strong vs Weak</h3><div class="formula-box"><p><strong>Strong acid:</strong> fully dissociates → $pH = -\\log C_a$</p><p><strong>Weak acid:</strong> partially dissociates → $pH > -\\log C_a$</p></div>` },
            { id: "ab2", title: "II. Titration", content: `<h3>Equivalence Point</h3><div class="formula-box"><p>$$C_a V_a = C_b V_b$$</p></div><div class="tip-box"><strong>💡 Exam tip:</strong> At equivalence, moles of acid = moles of base. Use this to find unknown concentrations.</div>` },
        ],
        keyFormulas: ["$pH = -\\log[H_3O^+]$", "$C_aV_a = C_bV_b$ (equivalence)", "Strong acid: $pH = -\\log C_a$", "$K_a = [A^-][H_3O^+]/[HA]$"],
        quiz: [
            { id: "ab1q", question: "pH = 3 means [H₃O⁺] =", options: ["3 mol/L", "10⁻³ mol/L", "0.3 mol/L", "10³ mol/L"], correctAnswer: 1, explanation: "[H₃O⁺] = 10^(-pH) = 10⁻³." },
            { id: "ab2q", question: "At equivalence: CaVa =", options: ["CbVb", "Cb/Vb", "Ca+Cb", "0"], correctAnswer: 0, explanation: "Moles acid = moles base at equivalence." },
            { id: "ab3q", question: "Strong acid pH 1 → [H₃O⁺] =", options: ["0.01", "0.1", "1", "10"], correctAnswer: 1, explanation: "10⁻¹ = 0.1 mol/L." },
            { id: "ab4q", question: "A weak acid has Ka:", options: [">>1", "<<1", "= 1", "= 0"], correctAnswer: 1, explanation: "Ka << 1 for weak acids (partial dissociation)." },
            { id: "ab5q", question: "pH of pure water at 25°C:", options: ["0", "7", "14", "1"], correctAnswer: 1, explanation: "Neutral pH = 7." },
        ],
        examProblems: [
            { id: "ab-ex1", title: "Exam Problem 1", problem: `<p>Titrating 20 mL of acetic acid with NaOH (0.1 mol/L). Equivalence at $V_b = 15$ mL.</p><ol><li>Find $C_a$.</li><li>Calculate pH at equivalence if $K_a = 1.8 \\times 10^{-5}$.</li></ol>`, solution: `<ol><li>$C_a = C_b V_b/V_a = 0.1 \\times 15/20 = 0.075$ mol/L.</li><li>At equivalence: sodium acetate solution. $pH = 7 + \\frac{1}{2}(pK_a + \\log C_b') \\approx 8.7$.</li></ol>` },
        ],
    },
];
