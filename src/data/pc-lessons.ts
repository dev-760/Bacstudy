import { Lesson } from "./types";

export const pcLessons: Lesson[] = [
    {
        id: "pc-radioactive-decay",
        title: "Radioactive Decay",
        description: "Atomic nucleus, types of radioactivity, decay laws, and half-life",
        sections: [
            {
                id: "atomic-nucleus",
                title: "I. The Atomic Nucleus",
                content: `
<h3>Components of the Atomic Nucleus</h3>
<p>The atomic nucleus is made up of <strong>protons</strong> and <strong>neutrons</strong> — together called <strong>nucleons</strong>.</p>

<table class="study-table">
  <tr><th>Particle</th><th>Charge</th><th>Mass</th></tr>
  <tr><td>Proton (p)</td><td>+e = +1.6×10⁻¹⁹ C</td><td>mₚ = 1.6726 × 10⁻²⁷ kg</td></tr>
  <tr><td>Neutron (n)</td><td>0 (neutral)</td><td>mₙ = 1.6750 × 10⁻²⁷ kg</td></tr>
</table>

<h3>Symbolic Representation</h3>
<div class="formula-box">
  <p><strong>ᴬ_Z X</strong> where:</p>
  <ul>
    <li>X = chemical symbol</li>
    <li>A = mass number (total nucleons)</li>
    <li>Z = atomic number (number of protons)</li>
    <li>N = A − Z = number of neutrons</li>
  </ul>
</div>

<h3>Isotopes</h3>
<p>Isotopes are nuclides of the <strong>same element</strong> (same Z) but with <strong>different mass numbers</strong> (different A).</p>
<p>Example: Carbon isotopes: ¹²₆C, ¹³₆C, ¹⁴₆C — all have 6 protons but different neutron numbers.</p>`,
            },
            {
                id: "radioactivity-types",
                title: "II. Types of Radioactivity",
                content: `
<h3>Discovery</h3>
<p>Natural radioactivity was discovered by <strong>Becquerel</strong> in 1896.</p>

<h3>Three Types of Radiation</h3>
<div class="important-box">
  <table class="study-table">
    <tr><th>Type</th><th>Nature</th><th>Charge</th><th>Stopped by</th></tr>
    <tr><td><strong>Alpha (α)</strong></td><td>Helium nuclei ⁴₂He</td><td>+2e</td><td>Sheet of paper</td></tr>
    <tr><td><strong>Beta⁻ (β⁻)</strong></td><td>Electrons ⁰₋₁e</td><td>−e</td><td>Few mm of aluminum</td></tr>
    <tr><td><strong>Gamma (γ)</strong></td><td>EM waves</td><td>0</td><td>Concrete/Lead wall</td></tr>
  </table>
</div>

<h3>Decay Equations</h3>
<div class="formula-box">
  <p><strong>Alpha decay:</strong> ᴬ_Z X → ᴬ⁻⁴_(Z−2) Y + ⁴₂He</p>
  <p><strong>Beta⁻ decay:</strong> ᴬ_Z X → ᴬ_(Z+1) Y + ⁰₋₁e</p>
  <p><strong>Beta⁺ decay:</strong> ᴬ_Z X → ᴬ_(Z−1) Y + ⁰₊₁e</p>
</div>

<h3>Conservation Laws</h3>
<div class="important-box">
  <p>In every nuclear reaction:</p>
  <ul>
    <li><strong>Conservation of mass number:</strong> ΣA(reactants) = ΣA(products)</li>
    <li><strong>Conservation of charge:</strong> ΣZ(reactants) = ΣZ(products)</li>
  </ul>
</div>`,
            },
            {
                id: "decay-law",
                title: "III. Radioactive Decay Law",
                content: `
<h3>The Decay Law</h3>
<div class="formula-box">
  <p><strong>N(t) = N₀ × e⁻ᵏᵗ</strong></p>
  <ul>
    <li>N(t): number of radioactive nuclei at time t</li>
    <li>N₀: initial number of nuclei</li>
    <li>λ: decay constant (s⁻¹)</li>
  </ul>
</div>

<h3>Half-life (t₁/₂)</h3>
<div class="formula-box">
  <p>The half-life is the time for half the nuclei to decay:</p>
  <p><strong>t₁/₂ = ln(2)/λ = 0.693/λ</strong></p>
</div>

<h3>Activity</h3>
<div class="formula-box">
  <p>Activity A(t) = λ × N(t) = A₀ × e⁻ᵏᵗ</p>
  <p>Unit: Becquerel (Bq) = 1 disintegration/second</p>
</div>

<div class="tip-box">
  <strong>💡 Exam tip:</strong> After n half-lives, the fraction remaining is (1/2)ⁿ. After 3 half-lives: 1/8 remains.
</div>`,
            },
        ],
        keyFormulas: [
            "N(t) = N₀ × e^(−λt)",
            "t₁/₂ = ln(2)/λ",
            "Activity A = λN",
            "Alpha: ᴬ_Z X → ᴬ⁻⁴_(Z−2)Y + ⁴₂He",
            "Beta⁻: ᴬ_Z X → ᴬ_(Z+1)Y + ⁰₋₁e",
        ],
        quiz: [
            {
                id: "rd1",
                question: "In alpha decay, the mass number decreases by:",
                options: ["1", "2", "4", "0"],
                correctAnswer: 2,
                explanation: "Alpha particle is ⁴₂He, so mass number decreases by 4.",
            },
            {
                id: "rd2",
                question: "After 3 half-lives, what fraction of radioactive nuclei remains?",
                options: ["1/3", "1/4", "1/8", "1/6"],
                correctAnswer: 2,
                explanation: "After n half-lives: (1/2)ⁿ = (1/2)³ = 1/8.",
            },
            {
                id: "rd3",
                question: "What is conserved in nuclear reactions?",
                options: [
                    "Mass number only",
                    "Charge number only",
                    "Both mass number and charge number",
                    "Neither",
                ],
                correctAnswer: 2,
                explanation: "Soddy's laws: both A (mass number) and Z (charge number) are conserved.",
            },
            {
                id: "rd4",
                question: "The unit of radioactive activity is:",
                options: ["Gray (Gy)", "Sievert (Sv)", "Becquerel (Bq)", "Curie only"],
                correctAnswer: 2,
                explanation: "Activity is measured in Becquerel (Bq) = 1 disintegration per second.",
            },
        ],
    },
    {
        id: "pc-nuclei-energy",
        title: "Nuclei, Mass & Energy",
        description: "Einstein's E=mc², binding energy, nuclear fission and fusion",
        sections: [
            {
                id: "mass-energy",
                title: "I. Mass-Energy Equivalence",
                content: `
<h3>Einstein's Relation</h3>
<div class="formula-box">
  <p><strong>E = mc²</strong></p>
  <ul>
    <li>E: mass energy (Joules)</li>
    <li>m: rest mass (kg)</li>
    <li>c: speed of light = 3×10⁸ m/s</li>
  </ul>
</div>
<p>Any change in mass Δm produces a change in energy: <strong>ΔE = Δm × c²</strong></p>

<h3>Units in Nuclear Physics</h3>
<table class="study-table">
  <tr><th>Quantity</th><th>Unit</th><th>Value</th></tr>
  <tr><td>Energy</td><td>electronvolt (eV)</td><td>1 eV = 1.6×10⁻¹⁹ J</td></tr>
  <tr><td>Energy</td><td>MeV</td><td>1 MeV = 10⁶ eV</td></tr>
  <tr><td>Mass</td><td>atomic mass unit (u)</td><td>1 u = 1.66×10⁻²⁷ kg</td></tr>
  <tr><td>Mass</td><td>MeV/c²</td><td>1 u = 931.5 MeV/c²</td></tr>
</table>`,
            },
            {
                id: "binding-energy",
                title: "II. Binding Energy",
                content: `
<h3>Definition</h3>
<div class="formula-box">
  <p>The <strong>binding energy</strong> E_b of a nucleus ᴬ_Z X is the energy needed to separate it into individual nucleons:</p>
  <p><strong>E_b = [Z × mₚ + (A−Z) × mₙ − m(X)] × c²</strong></p>
</div>
<p>The binding energy is always <strong>positive</strong>.</p>

<h3>Mass Defect</h3>
<div class="formula-box">
  <p><strong>Δm = Z × mₚ + (A−Z) × mₙ − m(X)</strong></p>
  <p>This is the "missing mass" that was converted to binding energy.</p>
</div>

<h3>Binding Energy per Nucleon</h3>
<div class="formula-box">
  <p><strong>ξ = E_b / A</strong> (in MeV/nucleon)</p>
</div>
<p>A nucleus is <strong>more stable</strong> when ξ is <strong>larger</strong>.</p>
<p>From the Aston curve: 0 ≤ ξ ≤ 8.8 MeV/nucleon. Most stable nuclei have A ≈ 56 (Iron).</p>`,
            },
            {
                id: "fission-fusion",
                title: "III. Fission & Fusion",
                content: `
<h3>Nuclear Fission</h3>
<div class="formula-box">
  <p>A <strong>heavy nucleus</strong> splits into two lighter nuclei when hit by a neutron.</p>
  <p>Example: ²³⁵U + ¹n → ¹⁴⁰Cs + ⁹³Rb + 3¹n</p>
</div>
<p>Used in: nuclear power plants, atomic bombs</p>

<h3>Nuclear Fusion</h3>
<div class="formula-box">
  <p>Two <strong>light nuclei</strong> merge to form a heavier nucleus.</p>
  <p>Example: ²H + ³H → ⁴He + ¹n</p>
</div>
<p>Occurs in: the Sun and stars</p>

<h3>Energy Released</h3>
<div class="formula-box">
  <p><strong>E_released = |Δm| × c²</strong></p>
  <p>where Δm = m(products) − m(reactants) < 0</p>
</div>

<div class="tip-box">
  <strong>💡 Key concept:</strong> Both fission and fusion release energy because the products are MORE stable (higher binding energy per nucleon) than the reactants.
</div>`,
            },
        ],
        keyFormulas: [
            "E = mc²",
            "E_b = [Z·mₚ + (A−Z)·mₙ − m(X)] × c²",
            "ξ = E_b / A (binding energy per nucleon)",
            "1 u = 931.5 MeV/c²",
            "E_released = |Δm| × c²",
        ],
        quiz: [
            {
                id: "ne1",
                question: "In E = mc², what does c represent?",
                options: ["Coulomb constant", "Speed of light", "Specific heat", "Capacitance"],
                correctAnswer: 1,
                explanation: "c is the speed of light in vacuum: c = 3×10⁸ m/s.",
            },
            {
                id: "ne2",
                question: "1 atomic mass unit (u) equals approximately:",
                options: ["931.5 MeV/c²", "1.6×10⁻¹⁹ J", "6.02×10²³", "1 kg"],
                correctAnswer: 0,
                explanation: "1 u = 1.66×10⁻²⁷ kg = 931.5 MeV/c².",
            },
            {
                id: "ne3",
                question: "Nuclear fusion combines:",
                options: [
                    "Heavy nuclei into lighter ones",
                    "Light nuclei into a heavier one",
                    "Nuclei with electrons",
                    "Neutrons with photons",
                ],
                correctAnswer: 1,
                explanation: "Fusion = merging light nuclei (like hydrogen) into heavier ones (like helium).",
            },
        ],
    },
    {
        id: "pc-rl-circuit",
        title: "RL Circuit (Coil)",
        description: "Properties of a coil, RL dipole response, time constant",
        sections: [
            {
                id: "coil-basics",
                title: "I. The Coil",
                content: `
<h3>Definition</h3>
<p>A <strong>coil</strong> is a winding of conductive wire (usually copper) around an insulating cylinder.</p>

<h3>Voltage across a Coil</h3>
<div class="formula-box">
  <p><strong>u_L(t) = L × di/dt + r × i</strong></p>
  <ul>
    <li>L: inductance (Henry, H)</li>
    <li>r: internal resistance (Ω)</li>
    <li>i: current (A)</li>
  </ul>
</div>

<p>If r = 0 (ideal coil): <strong>u_L = L × di/dt</strong></p>
<p>If current is constant (i = cte): di/dt = 0, so <strong>u_L = r × i</strong> (behaves like a resistor)</p>

<h3>Key Behavior</h3>
<div class="important-box">
  <p>A coil <strong>delays</strong> the establishment and cancellation of current in a circuit.</p>
  <p>Rapid current changes → large voltage (overvoltage) across the coil.</p>
</div>`,
            },
            {
                id: "rl-response",
                title: "II. RL Circuit Response",
                content: `
<h3>Circuit Description</h3>
<p>RL dipole = resistor R in series with coil (L, r). Total resistance: R_T = R + r</p>

<h3>Differential Equation</h3>
<div class="formula-box">
  <p>Closing the switch: <strong>E = R_T × i + L × di/dt</strong></p>
  <p>This is a first-order linear ODE.</p>
</div>

<h3>Solution: Current Establishment</h3>
<div class="formula-box">
  <p><strong>i(t) = (E/R_T) × (1 − e^(−t/τ))</strong></p>
  <p>where <strong>τ = L/R_T</strong> is the time constant</p>
</div>

<h3>Time Constant τ</h3>
<ul>
  <li>At t = τ: i = 0.63 × E/R_T (63% of max)</li>
  <li>At t = 5τ: i ≈ E/R_T (permanent regime, >99%)</li>
</ul>

<h3>Voltage across the Coil</h3>
<div class="formula-box">
  <p><strong>u_L(t) = E × e^(−t/τ)</strong></p>
</div>

<div class="tip-box">
  <strong>💡 Graphical method:</strong> To find τ from a graph, draw the tangent at t = 0. It intersects the asymptote at t = τ.
</div>`,
            },
            {
                id: "rl-energy",
                title: "III. Energy in a Coil",
                content: `
<h3>Magnetic Energy</h3>
<div class="formula-box">
  <p>Energy stored in a coil carrying current i:</p>
  <p><strong>E_L = ½ × L × i²</strong></p>
</div>

<h3>Energy Balance</h3>
<p>During current establishment, the generator supplies energy that is:</p>
<ul>
  <li>Partially <strong>stored</strong> in the coil as magnetic energy (½Li²)</li>
  <li>Partially <strong>dissipated</strong> in R and r as heat (Joule effect)</li>
</ul>`,
            },
        ],
        keyFormulas: [
            "u_L = L(di/dt) + ri",
            "i(t) = (E/R_T)(1 − e^(−t/τ))",
            "τ = L/R_T",
            "E_L = ½Li²",
            "At t = τ: i = 63% of final value",
        ],
        quiz: [
            {
                id: "rl1",
                question: "The time constant of an RL circuit is:",
                options: ["τ = RC", "τ = L/R", "τ = LC", "τ = R/L"],
                correctAnswer: 1,
                explanation: "For an RL circuit, τ = L/R_T where R_T is total resistance.",
            },
            {
                id: "rl2",
                question: "At t = 5τ, the current in an RL circuit reaches approximately:",
                options: ["50%", "63%", "95%", "99%"],
                correctAnswer: 3,
                explanation: "After 5 time constants, the current reaches about 99% of its final value.",
            },
            {
                id: "rl3",
                question: "The energy stored in a coil is:",
                options: ["½CV²", "½Li²", "½Ri²", "Li"],
                correctAnswer: 1,
                explanation: "Magnetic energy stored in a coil: E = ½Li².",
            },
        ],
    },
    {
        id: "pc-rc-circuit",
        title: "RC Circuit (Capacitor)",
        description: "Capacitor properties, RC circuit charge/discharge, time constant",
        sections: [
            {
                id: "capacitor-basics",
                title: "I. The Capacitor",
                content: `
<h3>Definition</h3>
<p>A <strong>capacitor</strong> consists of two conducting plates (armatures) separated by an insulating material (dielectric).</p>

<h3>Capacitance</h3>
<div class="formula-box">
  <p><strong>q = C × U_c</strong></p>
  <ul>
    <li>q: charge (Coulombs, C)</li>
    <li>C: capacitance (Farads, F)</li>
    <li>U_c: voltage across capacitor (V)</li>
  </ul>
</div>

<h3>Current-Charge Relationship</h3>
<div class="formula-box">
  <p><strong>i = dq/dt = C × dU_c/dt</strong></p>
</div>

<div class="tip-box">
  <strong>💡 Key insight:</strong> A capacitor stores charge. During charging, electrons accumulate on one plate. The capacitor retains its charge even when disconnected!
</div>`,
            },
            {
                id: "rc-charge",
                title: "II. RC Charging",
                content: `
<h3>Charging Equation</h3>
<div class="formula-box">
  <p>Differential equation: <strong>E = RC × dU_c/dt + U_c</strong></p>
  <p>Solution: <strong>U_c(t) = E × (1 − e^(−t/τ))</strong></p>
  <p>where <strong>τ = RC</strong></p>
</div>

<h3>Charging Current</h3>
<div class="formula-box">
  <p><strong>i(t) = (E/R) × e^(−t/τ)</strong></p>
</div>

<h3>Key Values</h3>
<ul>
  <li>At t = 0: U_c = 0, i = E/R (maximum current)</li>
  <li>At t = τ: U_c = 0.63E</li>
  <li>At t = 5τ: U_c ≈ E (fully charged)</li>
</ul>`,
            },
            {
                id: "rc-discharge",
                title: "III. RC Discharging",
                content: `
<h3>Discharging Equations</h3>
<div class="formula-box">
  <p><strong>U_c(t) = E × e^(−t/τ)</strong></p>
  <p><strong>i(t) = −(E/R) × e^(−t/τ)</strong></p>
</div>

<h3>Energy in a Capacitor</h3>
<div class="formula-box">
  <p><strong>E_c = ½ × C × U_c²</strong></p>
</div>

<p>During discharge, this energy is entirely dissipated as heat in the resistance (Joule effect).</p>`,
            },
        ],
        keyFormulas: [
            "q = CU_c",
            "i = C(dU_c/dt)",
            "τ = RC",
            "Charging: U_c(t) = E(1 − e^(−t/τ))",
            "Discharging: U_c(t) = E × e^(−t/τ)",
            "E_c = ½CU_c²",
        ],
        quiz: [
            {
                id: "rc1",
                question: "The time constant of an RC circuit is:",
                options: ["τ = R/C", "τ = RC", "τ = L/R", "τ = 1/RC"],
                correctAnswer: 1,
                explanation: "For an RC circuit, the time constant τ = R × C.",
            },
            {
                id: "rc2",
                question: "During capacitor charging through R, the voltage U_c follows:",
                options: [
                    "U_c = E × e^(−t/τ)",
                    "U_c = E × (1 − e^(−t/τ))",
                    "U_c = E × t/τ",
                    "U_c is constant",
                ],
                correctAnswer: 1,
                explanation: "The charging equation shows an exponential rise to E.",
            },
        ],
    },
    {
        id: "pc-rlc-circuit",
        title: "RLC Circuit",
        description: "Free oscillations, damping regimes, natural frequency",
        sections: [
            {
                id: "rlc-setup",
                title: "I. Free Oscillations in RLC Circuit",
                content: `
<h3>Setup</h3>
<p>A series RLC circuit connects: Resistor (R'), Inductor (L, r), and Capacitor (C) in series.</p>
<p>Total resistance: <strong>R = r + r'</strong></p>

<h3>What Happens</h3>
<p>A charged capacitor discharges into the coil. The charge oscillates between the plates because the coil resists current changes. Due to resistance, energy is lost as heat → oscillations are <strong>damped</strong>.</p>

<h3>Differential Equation</h3>
<div class="formula-box">
  <p><strong>LC × d²U_c/dt² + RC × dU_c/dt + U_c = 0</strong></p>
</div>`,
            },
            {
                id: "rlc-regimes",
                title: "II. Oscillation Regimes",
                content: `
<h3>Three Regimes</h3>
<div class="important-box">
  <table class="study-table">
    <tr><th>Regime</th><th>Condition</th><th>Behavior</th></tr>
    <tr><td><strong>Pseudo-periodic</strong></td><td>R is small</td><td>Damped oscillations with pseudo-period T</td></tr>
    <tr><td><strong>Aperiodic</strong></td><td>R is large</td><td>No oscillations, slow decay to zero</td></tr>
    <tr><td><strong>Critical</strong></td><td>R = R_c</td><td>Fastest return to zero without oscillating</td></tr>
    <tr><td><strong>Periodic</strong></td><td>R = 0 (ideal)</td><td>Undamped oscillations with period T₀</td></tr>
  </table>
</div>

<h3>Natural Period</h3>
<div class="formula-box">
  <p>When R = 0: <strong>T₀ = 2π√(LC)</strong></p>
  <p>Natural frequency: <strong>f₀ = 1/(2π√(LC))</strong></p>
</div>

<h3>Solution for R = 0</h3>
<div class="formula-box">
  <p><strong>U_c(t) = U_max × cos(2πt/T₀ + φ)</strong></p>
</div>`,
            },
            {
                id: "rlc-energy",
                title: "III. Energy in RLC Circuit",
                content: `
<h3>Energy Types</h3>
<div class="formula-box">
  <ul>
    <li>Electric energy (capacitor): <strong>E_C = ½CU_c²</strong></li>
    <li>Magnetic energy (coil): <strong>E_L = ½Li²</strong></li>
    <li>Total energy: <strong>E = E_C + E_L</strong></li>
  </ul>
</div>

<h3>Energy Behavior</h3>
<ul>
  <li><strong>R = 0:</strong> Total energy E is constant (no losses). Energy oscillates between capacitor and coil.</li>
  <li><strong>R ≠ 0:</strong> Total energy decreases over time. Energy lost as heat in R (Joule effect).</li>
</ul>

<div class="formula-box">
  <p>Energy dissipated as heat: <strong>dE/dt = −Ri²</strong></p>
</div>`,
            },
        ],
        keyFormulas: [
            "LC(d²U_c/dt²) + RC(dU_c/dt) + U_c = 0",
            "T₀ = 2π√(LC)",
            "f₀ = 1/(2π√(LC))",
            "E = ½CU_c² + ½Li²",
            "dE/dt = −Ri² (energy loss)",
        ],
        quiz: [
            {
                id: "rlc1",
                question: "The natural frequency of an RLC circuit is:",
                options: ["f₀ = 1/(2πRC)", "f₀ = 1/(2π√(LC))", "f₀ = R/(2πL)", "f₀ = 2π√(LC)"],
                correctAnswer: 1,
                explanation: "Natural frequency f₀ = 1/(2π√(LC)).",
            },
            {
                id: "rlc2",
                question: "In the pseudo-periodic regime, resistance R is:",
                options: ["Zero", "Small", "Large", "Equal to critical resistance"],
                correctAnswer: 1,
                explanation: "Small R allows oscillations but with decreasing amplitude (damped).",
            },
            {
                id: "rlc3",
                question: "When R = 0 in an RLC circuit, the total energy is:",
                options: ["Always increasing", "Constant", "Always decreasing", "Zero"],
                correctAnswer: 1,
                explanation: "With no resistance, no energy is lost to heat, so total energy remains constant.",
            },
        ],
    },
    {
        id: "pc-light-waves",
        title: "Light Waves",
        description: "Diffraction, interference, dispersion, and wave nature of light",
        sections: [
            {
                id: "diffraction",
                title: "I. Diffraction of Light",
                content: `
<h3>Experiment</h3>
<p>A laser beam (λ = 633 nm) passes through a slit of width <strong>a</strong>. On a screen at distance D, a wider central bright spot appears, surrounded by dimmer secondary spots.</p>

<div class="important-box">
  <p>This phenomenon is called <strong>diffraction</strong> and proves that light has a <strong>wave nature</strong>.</p>
</div>

<h3>Observations</h3>
<ul>
  <li>Smaller slit width → wider central spot</li>
  <li>Larger wavelength → wider central spot</li>
  <li>Larger distance D → wider central spot</li>
</ul>

<h3>Angular Deviation</h3>
<div class="formula-box">
  <p><strong>θ = λ/a</strong> (for small angles, θ in radians)</p>
  <p>Width of central bright fringe: <strong>L = 2λD/a</strong></p>
</div>

<div class="tip-box">
  <strong>💡 Key relationship:</strong> θ is proportional to λ and inversely proportional to a. This is why diffraction is noticeable when the slit width is comparable to the wavelength.
</div>`,
            },
            {
                id: "dispersion",
                title: "II. Dispersion of Light",
                content: `
<h3>White Light Dispersion</h3>
<p>When white light passes through a prism, it separates into its component colors (spectrum). This proves white light is a <strong>mixture of wavelengths</strong>.</p>

<h3>Visible Spectrum</h3>
<table class="study-table">
  <tr><th>Color</th><th>Wavelength Range</th></tr>
  <tr><td>Violet</td><td>380 − 450 nm</td></tr>
  <tr><td>Blue</td><td>450 − 495 nm</td></tr>
  <tr><td>Green</td><td>495 − 570 nm</td></tr>
  <tr><td>Yellow</td><td>570 − 590 nm</td></tr>
  <tr><td>Orange</td><td>590 − 620 nm</td></tr>
  <tr><td>Red</td><td>620 − 780 nm</td></tr>
</table>

<h3>Relationship: Speed, Frequency, Wavelength</h3>
<div class="formula-box">
  <p><strong>c = λ × f</strong> (in vacuum)</p>
  <p><strong>v = λ_medium × f</strong> (in a medium)</p>
  <p><strong>n = c/v</strong> (refractive index)</p>
</div>`,
            },
        ],
        keyFormulas: [
            "θ = λ/a (diffraction angle)",
            "L = 2λD/a (central fringe width)",
            "c = λf",
            "n = c/v (refractive index)",
            "Visible: 380nm (violet) to 780nm (red)",
        ],
        quiz: [
            {
                id: "lw1",
                question: "What happens to the diffraction pattern when the slit width decreases?",
                options: [
                    "Central spot gets narrower",
                    "Central spot gets wider",
                    "Pattern disappears",
                    "No change",
                ],
                correctAnswer: 1,
                explanation: "Smaller slit = more diffraction = wider central spot. L = 2λD/a.",
            },
            {
                id: "lw2",
                question: "The diffraction of light proves that light has:",
                options: [
                    "Only particle nature",
                    "Only wave nature",
                    "Wave nature",
                    "No specific nature",
                ],
                correctAnswer: 2,
                explanation: "Diffraction is a wave phenomenon, proving light behaves as a wave.",
            },
        ],
    },
    {
        id: "pc-modulation",
        title: "Amplitude Modulation",
        description: "AM modulation, modulation index, demodulation, radio receivers",
        sections: [
            {
                id: "modulation-principle",
                title: "I. Amplitude Modulation",
                content: `
<h3>Why Modulation?</h3>
<ul>
  <li>Low-frequency signals are quickly <strong>attenuated</strong> with distance</li>
  <li>Their propagation speed is low compared to EM waves</li>
  <li>Reception requires impractically <strong>large antennas</strong></li>
</ul>
<p>Solution: "carry" the low-frequency signal on a high-frequency carrier wave.</p>

<h3>Signals</h3>
<div class="formula-box">
  <p><strong>Modulating signal:</strong> s(t) = S_m × cos(2πf_s × t)</p>
  <p><strong>Carrier:</strong> p(t) = P_m × cos(2πf_p × t) where f_p ≫ f_s</p>
</div>

<h3>Modulated Signal</h3>
<div class="formula-box">
  <p><strong>u_s(t) = A[1 + m × cos(2πf_s × t)] × cos(2πf_p × t)</strong></p>
  <p>where A = KP_mU₀ and <strong>m = S_m/U₀</strong> (modulation index)</p>
</div>`,
            },
            {
                id: "modulation-index",
                title: "II. Modulation Index",
                content: `
<h3>Measuring m</h3>
<div class="formula-box">
  <p><strong>m = (U_max − U_min)/(U_max + U_min)</strong></p>
</div>

<h3>Conditions for Good Modulation</h3>
<div class="important-box">
  <ul>
    <li><strong>m < 1</strong> (no overmodulation)</li>
    <li><strong>f_p > 10f_s</strong></li>
  </ul>
</div>
<p>If m > 1 → <strong>overmodulation</strong> → signal is distorted!</p>

<h3>Frequency Spectrum</h3>
<p>The modulated signal contains <strong>three frequencies</strong>:</p>
<div class="formula-box">
  <p>f_p, &nbsp; f_p + f_s, &nbsp; f_p − f_s</p>
</div>`,
            },
            {
                id: "demodulation",
                title: "III. Demodulation",
                content: `
<h3>Steps to Recover the Signal</h3>
<ol>
  <li><strong>Envelope detection:</strong> Diode (rectification) + low-pass filter
    <div class="formula-box">
      <p>Time constant condition: <strong>T_p ≪ τ ≪ T_s</strong></p>
      <p>Or: f_s < 1/(R₁C₁) < f_p</p>
    </div>
  </li>
  <li><strong>DC offset removal:</strong> High-pass filter removes the constant U₀ component</li>
</ol>

<h3>AM Radio Receiver</h3>
<p>Components of an AM receiver:</p>
<ul>
  <li>Antenna</li>
  <li>LC tuning circuit (selects frequency)</li>
  <li>Amplifier</li>
  <li>Demodulation circuit</li>
</ul>
<div class="formula-box">
  <p>Tuning condition: <strong>f₀ = 1/(2π√(LC)) = f_p</strong></p>
</div>`,
            },
        ],
        keyFormulas: [
            "u_s(t) = A[1 + m·cos(2πf_s·t)]·cos(2πf_p·t)",
            "m = (U_max − U_min)/(U_max + U_min)",
            "Good modulation: m < 1 and f_p > 10f_s",
            "Spectrum: f_p, f_p+f_s, f_p−f_s",
            "Tuning: f₀ = 1/(2π√(LC)) = f_p",
        ],
        quiz: [
            {
                id: "am1",
                question: "For good amplitude modulation, the modulation index m must be:",
                options: ["m > 1", "m = 1", "m < 1", "m = 0"],
                correctAnswer: 2,
                explanation: "m must be less than 1, otherwise overmodulation occurs (distortion).",
            },
            {
                id: "am2",
                question: "The frequency spectrum of an AM signal contains:",
                options: [
                    "1 frequency",
                    "2 frequencies",
                    "3 frequencies",
                    "Infinite frequencies",
                ],
                correctAnswer: 2,
                explanation: "AM spectrum has: f_p (carrier), f_p+f_s, and f_p−f_s (sidebands).",
            },
            {
                id: "am3",
                question: "The first step in demodulation is:",
                options: [
                    "Amplification",
                    "Envelope detection (rectification)",
                    "Frequency filtering",
                    "Modulation",
                ],
                correctAnswer: 1,
                explanation: "First: rectify using a diode to get the envelope, then filter the DC component.",
            },
        ],
    },
];
