import { Lesson } from "./types";

export const svtLessons: Lesson[] = [

  // ══════════════════════════════════════════════════════════════
  // UNIT 1 – CONSUMPTION OF ORGANIC MATTER AND ENERGY FLOW
  // ══════════════════════════════════════════════════════════════

  {
    id: "svt-cellular-respiration",
    title: "Cellular Respiration & Energy Release",
    description:
      "How cells break down organic molecules (glucose) to produce ATP through glycolysis, the Krebs cycle, and oxidative phosphorylation",
    sections: [
      {
        id: "cr1",
        title: "I. Overview of Cellular Energy",
        content: `
<h3>ATP: The Energy Currency</h3>
<div class="formula-box">
  <p><strong>ATP</strong> (adenosine triphosphate) is the universal energy molecule used by all cells.</p>
  <p>ATP ⇌ ADP + Pᵢ + energy (≈ 30.5 kJ/mol)</p>
  <p>Three metabolic pathways regenerate ATP from glucose (C₆H₁₂O₆):</p>
  <ul>
    <li>Glycolysis (cytoplasm) – anaerobic</li>
    <li>Krebs cycle (mitochondrial matrix) – aerobic</li>
    <li>Oxidative phosphorylation / electron transport chain (inner mitochondrial membrane) – aerobic</li>
  </ul>
</div>`,
      },
      {
        id: "cr2",
        title: "II. Glycolysis",
        content: `
<h3>Glycolysis (Cytoplasm)</h3>
<div class="formula-box">
  <p>Glucose (6C) → 2 Pyruvate (3C) + <strong>2 ATP</strong> (net) + 2 NADH</p>
  <p>Does <em>not</em> require oxygen (anaerobic step).</p>
  <p>Key steps: phosphorylation of glucose, cleavage into two 3-carbon molecules, oxidation with NAD⁺ reduction.</p>
</div>`,
      },
      {
        id: "cr3",
        title: "III. Krebs Cycle & Oxidative Phosphorylation",
        content: `
<h3>Krebs Cycle (Mitochondrial Matrix)</h3>
<div class="formula-box">
  <p>Pyruvate → Acetyl-CoA (2C) + CO₂ + NADH</p>
  <p>Per glucose: <strong>2 ATP</strong>, 6 NADH, 2 FADH₂, 4 CO₂</p>
</div>
<h3>Oxidative Phosphorylation (Inner Mitochondrial Membrane)</h3>
<div class="formula-box">
  <p>NADH and FADH₂ feed electrons into the electron transport chain (ETC).</p>
  <p>O₂ is the final electron acceptor → H₂O formed.</p>
  <p>Proton gradient drives ATP synthase → <strong>~32–34 ATP</strong> per glucose.</p>
  <p><strong>Overall aerobic respiration:</strong></p>
  <p>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~36–38 ATP</p>
</div>
<h3>Fermentation (Anaerobic Conditions)</h3>
<div class="formula-box">
  <p><strong>Lactic fermentation:</strong> Pyruvate + NADH → Lactate + NAD⁺ (muscle cells)</p>
  <p><strong>Alcoholic fermentation:</strong> Pyruvate → Ethanol + CO₂ (yeast)</p>
  <p>Fermentation regenerates NAD⁺ to keep glycolysis running. Yield: only <strong>2 ATP</strong>.</p>
</div>`,
      },
    ],
    keyFormulas: [
      "Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~36 ATP",
      "Glycolysis: Glucose → 2 Pyruvate + 2 ATP (net) + 2 NADH",
      "Lactic fermentation: Pyruvate → Lactate (2 ATP only)",
      "RQ (respiratory quotient) = CO₂ produced / O₂ consumed",
    ],
    quiz: [
      {
        id: "cr-q1",
        question: "Where does glycolysis take place?",
        options: ["Mitochondrial matrix", "Cytoplasm", "Inner mitochondrial membrane", "Nucleus"],
        correctAnswer: 1,
        explanation: "Glycolysis occurs in the cytoplasm and does not require oxygen.",
      },
      {
        id: "cr-q2",
        question: "What is the final electron acceptor in aerobic respiration?",
        options: ["CO₂", "NAD⁺", "O₂", "ATP"],
        correctAnswer: 2,
        explanation: "Oxygen (O₂) accepts electrons at the end of the electron transport chain, forming water.",
      },
      {
        id: "cr-q3",
        question: "How many net ATP molecules are produced by glycolysis alone?",
        options: ["36", "4", "2", "0"],
        correctAnswer: 2,
        explanation: "Glycolysis produces 4 ATP but consumes 2, giving a net gain of 2 ATP.",
      },
      {
        id: "cr-q4",
        question: "Lactic fermentation occurs in which conditions?",
        options: ["Aerobic", "Anaerobic", "High oxygen", "Presence of CO₂"],
        correctAnswer: 1,
        explanation: "Lactic fermentation is an anaerobic process that regenerates NAD⁺ without using oxygen.",
      },
      {
        id: "cr-q5",
        question: "The Krebs cycle takes place in the:",
        options: ["Cytoplasm", "Nucleus", "Mitochondrial matrix", "Ribosome"],
        correctAnswer: 2,
        explanation: "The Krebs cycle (citric acid cycle) occurs in the mitochondrial matrix.",
      },
    ],
    examProblems: [
      {
        id: "cr-ex1",
        title: "Exam Problem – Respiration & Fermentation",
        problem: `<p>A muscle cell is subjected to intense exercise causing oxygen shortage.</p>
<ol>
  <li>Name the metabolic pathway that provides ATP under these anaerobic conditions.</li>
  <li>Write the equation for this process starting from pyruvate.</li>
  <li>Compare the ATP yield of anaerobic vs. aerobic respiration from one glucose molecule.</li>
  <li>Explain why lactate accumulates in muscles during intense exercise.</li>
</ol>`,
        solution: `<ol>
  <li>Lactic fermentation (anaerobic glycolysis).</li>
  <li>Pyruvate + NADH → Lactate + NAD⁺ (catalysed by lactate dehydrogenase).</li>
  <li>Anaerobic: 2 ATP per glucose. Aerobic: ~36–38 ATP per glucose.</li>
  <li>When O₂ is insufficient, the ETC cannot function, so pyruvate is converted to lactate to regenerate NAD⁺ and keep glycolysis running, causing lactate to accumulate.</li>
</ol>`,
      },
    ],
  },

  {
    id: "svt-skeletal-muscle",
    title: "Skeletal Muscle and Energy Conversion",
    description:
      "Structure of striated skeletal muscle, the sliding filament theory, ATP sources for muscle contraction, and muscle fatigue",
    sections: [
      {
        id: "sm1",
        title: "I. Structure of Skeletal Muscle",
        content: `
<h3>Hierarchical Organisation</h3>
<div class="formula-box">
  <p><strong>Muscle → Fascicles → Muscle fibres (cells) → Myofibrils → Sarcomeres</strong></p>
  <p>The <strong>sarcomere</strong> is the basic contractile unit, bounded by Z-lines.</p>
  <p>Contains two protein filaments:</p>
  <ul>
    <li><strong>Thick filaments:</strong> myosin (A-band)</li>
    <li><strong>Thin filaments:</strong> actin (I-band + overlap)</li>
  </ul>
  <p>Under light microscope: alternating dark (A) and light (I) bands → striated appearance.</p>
</div>`,
      },
      {
        id: "sm2",
        title: "II. Sliding Filament Theory & ATP",
        content: `
<h3>Mechanism of Contraction</h3>
<div class="formula-box">
  <p>1. Nerve impulse → release of Ca²⁺ from sarcoplasmic reticulum.</p>
  <p>2. Ca²⁺ binds troponin → tropomyosin shifts → exposes actin binding sites.</p>
  <p>3. Myosin heads bind actin, form cross-bridges.</p>
  <p>4. ATP hydrolysis (ATP → ADP + Pᵢ) powers the power stroke: myosin head pivots, pulling actin toward centre → sarcomere shortens.</p>
  <p>5. New ATP binds → myosin head detaches → cycle repeats.</p>
</div>
<h3>ATP Sources for Muscle Contraction</h3>
<div class="formula-box">
  <p><strong>Immediate (seconds):</strong> stored ATP + phosphocreatine (PCr) → Creatine + ATP</p>
  <p><strong>Short-term (seconds–minutes):</strong> anaerobic glycolysis → 2 ATP + lactate</p>
  <p><strong>Long-term (minutes–hours):</strong> aerobic respiration → ~36 ATP from glucose or fatty acids</p>
</div>`,
      },
    ],
    keyFormulas: [
      "PCr + ADP → Creatine + ATP (immediate energy)",
      "Sarcomere shortening: actin slides over myosin, Z-lines approach",
      "Ca²⁺ triggers contraction by exposing actin binding sites",
      "ATP hydrolysis = energy for power stroke",
    ],
    quiz: [
      {
        id: "sm-q1",
        question: "The basic contractile unit of muscle is the:",
        options: ["Myofibril", "Sarcomere", "Fascicle", "Motor unit"],
        correctAnswer: 1,
        explanation: "The sarcomere, bounded by Z-lines, is the functional unit of muscle contraction.",
      },
      {
        id: "sm-q2",
        question: "Which ion triggers muscle contraction?",
        options: ["Na⁺", "K⁺", "Ca²⁺", "Mg²⁺"],
        correctAnswer: 2,
        explanation: "Ca²⁺ released from the sarcoplasmic reticulum binds troponin and initiates contraction.",
      },
      {
        id: "sm-q3",
        question: "During muscle contraction, thick filaments are made of:",
        options: ["Actin", "Tropomyosin", "Myosin", "Troponin"],
        correctAnswer: 2,
        explanation: "Thick filaments are composed of myosin; thin filaments are actin.",
      },
      {
        id: "sm-q4",
        question: "Phosphocreatine (PCr) provides energy for:",
        options: ["Long-duration exercise", "Immediate short bursts", "Fat metabolism", "Protein synthesis"],
        correctAnswer: 1,
        explanation: "PCr rapidly regenerates ATP for the first few seconds of intense activity.",
      },
      {
        id: "sm-q5",
        question: "What happens to the I-band during muscle contraction?",
        options: ["It widens", "It disappears entirely", "It shortens/narrows", "It stays the same"],
        correctAnswer: 2,
        explanation: "The I-band (actin only) shortens as actin slides toward the centre; the A-band length stays constant.",
      },
    ],
    examProblems: [
      {
        id: "sm-ex1",
        title: "Exam Problem – Muscle Contraction",
        problem: `<p>Examine the following scenario: a sprinter runs 100 m.</p>
<ol>
  <li>Identify the primary ATP source used during the first 5 seconds.</li>
  <li>Describe the role of Ca²⁺ in initiating contraction at the sarcomere level.</li>
  <li>Explain the sliding filament theory using actin, myosin, and ATP.</li>
  <li>After the race, the athlete's muscles are sore. Explain this using your knowledge of fermentation.</li>
</ol>`,
        solution: `<ol>
  <li>Phosphocreatine (PCr) + stored ATP provide immediate energy for the first ~5–10 seconds.</li>
  <li>Ca²⁺ is released from the sarcoplasmic reticulum, binds to troponin on thin filaments, causing tropomyosin to move and expose myosin-binding sites on actin.</li>
  <li>Myosin heads (energised by ATP hydrolysis) bind actin, perform a power stroke pulling actin toward the M-line, then detach when new ATP binds. This shortens the sarcomere.</li>
  <li>During intense exercise, anaerobic glycolysis produces lactate, which lowers muscle pH, causing the soreness and burning sensation.</li>
</ol>`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // UNIT 2 – GENETIC INFORMATION: NATURE, EXPRESSION & TRANSFER
  // ══════════════════════════════════════════════════════════════

  {
    id: "svt-genetic-information",
    title: "Nature of Genetic Information & DNA Replication",
    description:
      "DNA structure, the genetic code, chromosomes, cell cycle, mitosis, and semi-conservative DNA replication",
    sections: [
      {
        id: "gi1",
        title: "I. DNA Structure & the Genetic Code",
        content: `
<h3>DNA: The Molecule of Heredity</h3>
<div class="formula-box">
  <p>DNA = double helix of two antiparallel polynucleotide strands.</p>
  <p><strong>Nucleotide =</strong> deoxyribose sugar + phosphate group + nitrogenous base (A, T, G, C)</p>
  <p><strong>Base pairing (Chargaff's rules):</strong> A–T (2 H-bonds), G–C (3 H-bonds)</p>
  <p>DNA is packaged with histone proteins → nucleosomes → chromatin → chromosomes.</p>
</div>
<h3>The Genetic Code</h3>
<div class="formula-box">
  <p>A <strong>codon</strong> = 3 consecutive bases on mRNA → codes for one amino acid.</p>
  <p>64 codons total: 61 code for amino acids + 3 stop codons (UAA, UAG, UGA).</p>
  <p>Code is <strong>universal</strong>, <strong>non-overlapping</strong>, and <strong>degenerate</strong> (multiple codons per amino acid).</p>
  <p>AUG = start codon (methionine).</p>
</div>`,
      },
      {
        id: "gi2",
        title: "II. Cell Cycle & Mitosis",
        content: `
<h3>Cell Cycle Phases</h3>
<div class="formula-box">
  <p><strong>Interphase (G1 – S – G2):</strong> cell growth and DNA replication.</p>
  <p><strong>S phase:</strong> DNA replication → each chromosome duplicated into 2 identical chromatids.</p>
  <p><strong>Mitosis (M phase): PMAT</strong></p>
  <ul>
    <li><strong>Prophase:</strong> chromosomes condense, spindle forms</li>
    <li><strong>Metaphase:</strong> chromosomes align at cell equator (metaphase plate)</li>
    <li><strong>Anaphase:</strong> sister chromatids separate to opposite poles</li>
    <li><strong>Telophase:</strong> nuclear envelopes reform, cytokinesis</li>
  </ul>
  <p>Result: 2 genetically identical daughter cells with same chromosome number (2n → 2n).</p>
</div>`,
      },
      {
        id: "gi3",
        title: "III. DNA Replication (Semi-Conservative)",
        content: `
<h3>Mechanism</h3>
<div class="formula-box">
  <p><strong>Semi-conservative replication:</strong> each new DNA molecule contains one parental strand + one new strand (demonstrated by Meselson & Stahl using ¹⁵N/¹⁴N).</p>
  <p>Steps:</p>
  <ul>
    <li>Helicase unwinds and separates the two strands (breaks H-bonds)</li>
    <li>DNA polymerase adds complementary nucleotides (5'→3' direction)</li>
    <li>Leading strand: continuous synthesis; Lagging strand: synthesised in Okazaki fragments</li>
    <li>DNA ligase joins Okazaki fragments</li>
  </ul>
</div>
<div class="tip-box"><strong>💡 Exam tip:</strong> Taylor's experiment (using radioactive thymidine) confirmed semi-conservative replication in chromosomes.</div>`,
      },
    ],
    keyFormulas: [
      "A pairs with T (2 H-bonds); G pairs with C (3 H-bonds)",
      "Codon = 3 bases on mRNA; anticodon = 3 bases on tRNA",
      "Mitosis: 2n → 2n (identical daughter cells)",
      "Semi-conservative replication: 1 parental + 1 new strand per daughter DNA",
    ],
    quiz: [
      {
        id: "gi-q1",
        question: "Which base pairs with Adenine in DNA?",
        options: ["Cytosine", "Guanine", "Thymine", "Uracil"],
        correctAnswer: 2,
        explanation: "In DNA, Adenine (A) pairs with Thymine (T) via 2 hydrogen bonds.",
      },
      {
        id: "gi-q2",
        question: "A codon consists of how many bases?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        explanation: "A codon is a triplet of 3 nucleotide bases on the mRNA.",
      },
      {
        id: "gi-q3",
        question: "DNA replication is described as 'semi-conservative' because:",
        options: [
          "Only half the DNA is copied",
          "Each new DNA has one old and one new strand",
          "Replication uses conservative enzymes",
          "Only one strand is used as template",
        ],
        correctAnswer: 1,
        explanation: "Each daughter DNA molecule retains one original (parental) strand and gains one newly synthesised strand.",
      },
      {
        id: "gi-q4",
        question: "During which phase of mitosis do chromosomes align at the cell equator?",
        options: ["Prophase", "Anaphase", "Telophase", "Metaphase"],
        correctAnswer: 3,
        explanation: "During metaphase, chromosomes line up at the metaphase plate (cell equator).",
      },
      {
        id: "gi-q5",
        question: "The start codon on mRNA is:",
        options: ["UAA", "UAG", "AUG", "UGA"],
        correctAnswer: 2,
        explanation: "AUG codes for methionine and serves as the universal start codon for translation.",
      },
    ],
    examProblems: [
      {
        id: "gi-ex1",
        title: "Exam Problem – DNA & Replication",
        problem: `<p>A DNA segment has the following base sequence on one strand: 5'-ATGCCTGAA-3'</p>
<ol>
  <li>Write the complementary strand (indicate direction).</li>
  <li>Write the mRNA sequence transcribed from the template strand.</li>
  <li>How many amino acids does this sequence code for (excluding stop codons)?</li>
  <li>After one round of replication, how many ¹⁵N-labelled strands would remain if the original DNA was fully ¹⁵N-labelled? (Meselson-Stahl logic)</li>
</ol>`,
        solution: `<ol>
  <li>Complementary strand: 3'-TACGGACTT-5'</li>
  <li>mRNA (transcribed from template 3'→5'): 5'-AUGCCUGAA-3'</li>
  <li>9 bases ÷ 3 = 3 codons → 3 amino acids (Met-Pro-Glu).</li>
  <li>After one replication: 2 DNA molecules, each with 1 ¹⁵N strand + 1 ¹⁴N strand. So 2 ¹⁵N strands remain (one in each daughter molecule). This is the semi-conservative result.</li>
</ol>`,
      },
    ],
  },

  {
    id: "svt-gene-expression",
    title: "Gene Expression: Transcription & Translation",
    description:
      "How genetic information flows from DNA to protein via transcription (DNA → mRNA) and translation (mRNA → protein)",
    sections: [
      {
        id: "ge1",
        title: "I. Transcription (DNA → mRNA)",
        content: `
<h3>Process</h3>
<div class="formula-box">
  <p>Occurs in the <strong>nucleus</strong> (eukaryotes).</p>
  <p>1. RNA polymerase binds to the promoter region on DNA.</p>
  <p>2. The two DNA strands separate locally.</p>
  <p>3. RNA polymerase reads the <strong>template strand</strong> (3'→5') and synthesises mRNA (5'→3').</p>
  <p>4. RNA uses <strong>Uracil (U)</strong> instead of Thymine: A→U, T→A, G→C, C→G.</p>
  <p>5. Pre-mRNA is processed: 5' cap, poly-A tail, introns removed (splicing) → mature mRNA.</p>
  <p>6. mRNA exits nucleus through nuclear pores → cytoplasm.</p>
</div>`,
      },
      {
        id: "ge2",
        title: "II. Translation (mRNA → Protein)",
        content: `
<h3>Process at the Ribosome</h3>
<div class="formula-box">
  <p>Occurs on <strong>ribosomes</strong> in the cytoplasm (or rough ER).</p>
  <p>Key molecules:</p>
  <ul>
    <li><strong>mRNA:</strong> carries the coded message (codons)</li>
    <li><strong>tRNA:</strong> carries amino acids; has an anticodon complementary to mRNA codon</li>
    <li><strong>Ribosome:</strong> has A, P, E sites; catalyses peptide bond formation</li>
  </ul>
  <p>Steps: Initiation (AUG) → Elongation (codon-anticodon matching + peptide bond) → Termination (stop codon: UAA, UAG, UGA)</p>
  <p>Result: a <strong>polypeptide chain</strong> (protein)</p>
</div>
<h3>Mutation and Its Effects</h3>
<div class="formula-box">
  <p>A <strong>mutation</strong> is a change in the DNA base sequence.</p>
  <p><strong>Point mutation:</strong> substitution → may change one amino acid (missense), create a stop codon (nonsense), or have no effect (silent).</p>
  <p><strong>Frameshift:</strong> insertion or deletion → shifts reading frame, alters all downstream amino acids.</p>
</div>`,
      },
    ],
    keyFormulas: [
      "Transcription: DNA template → mRNA (U replaces T)",
      "Translation: mRNA codon ↔ tRNA anticodon → amino acid",
      "Central dogma: DNA → mRNA → Protein",
      "Stop codons: UAA, UAG, UGA (no amino acid)",
    ],
    quiz: [
      {
        id: "ge-q1",
        question: "Where does transcription take place in eukaryotes?",
        options: ["Cytoplasm", "Ribosome", "Nucleus", "Mitochondria"],
        correctAnswer: 2,
        explanation: "Transcription occurs in the nucleus where DNA is located.",
      },
      {
        id: "ge-q2",
        question: "In mRNA, Thymine (T) is replaced by:",
        options: ["Adenine", "Uracil", "Cytosine", "Guanine"],
        correctAnswer: 1,
        explanation: "RNA uses Uracil (U) instead of Thymine (T).",
      },
      {
        id: "ge-q3",
        question: "The tRNA molecule carries:",
        options: ["A codon", "A gene", "An amino acid", "mRNA"],
        correctAnswer: 2,
        explanation: "Each tRNA carries a specific amino acid and has an anticodon that recognises a mRNA codon.",
      },
      {
        id: "ge-q4",
        question: "A frameshift mutation is caused by:",
        options: [
          "Base substitution",
          "Insertion or deletion of bases",
          "UV radiation only",
          "Change in chromosome number",
        ],
        correctAnswer: 1,
        explanation: "Insertion or deletion of nucleotides shifts the reading frame, changing all codons downstream.",
      },
      {
        id: "ge-q5",
        question: "The sequence of events in the central dogma is:",
        options: [
          "Protein → mRNA → DNA",
          "DNA → Protein → mRNA",
          "DNA → mRNA → Protein",
          "mRNA → DNA → Protein",
        ],
        correctAnswer: 2,
        explanation: "The central dogma: DNA is transcribed into mRNA, which is translated into protein.",
      },
    ],
    examProblems: [
      {
        id: "ge-ex1",
        title: "Exam Problem – Transcription & Translation",
        problem: `<p>The template strand of a gene reads (3'→5'): TAC-GGA-CTT-ACG</p>
<ol>
  <li>Write the corresponding mRNA sequence.</li>
  <li>Identify the anticodons of the corresponding tRNAs.</li>
  <li>Determine the amino acid sequence (use a genetic code table).</li>
  <li>A point mutation changes the 4th base from G to A. Describe the impact on the protein.</li>
</ol>`,
        solution: `<ol>
  <li>mRNA (5'→3'): AUG-CCU-GAA-UGC</li>
  <li>tRNA anticodons: UAC – GGA – CUU – ACG</li>
  <li>Amino acids: Met – Pro – Glu – Cys</li>
  <li>Changing DNA position 4 (G→A): the mRNA codon CCU→CAU → Pro becomes His. This is a missense mutation; the protein has a different amino acid at position 2, which may alter its structure and function.</li>
</ol>`,
      },
    ],
  },

  {
    id: "svt-meiosis-reproduction",
    title: "Meiosis & Sexual Reproduction",
    description:
      "Meiosis phases, genetic shuffling mechanisms (crossing over & independent assortment), gamete formation, and fertilisation",
    sections: [
      {
        id: "mei1",
        title: "I. Meiosis Overview",
        content: `
<h3>Purpose & Result</h3>
<div class="formula-box">
  <p>Meiosis produces <strong>4 haploid (n) gametes</strong> from a diploid (2n) cell.</p>
  <p>Two successive divisions:</p>
  <p><strong>Meiosis I (reductive):</strong> homologous chromosomes separate → 2 haploid cells (still with duplicated chromatids)</p>
  <p><strong>Meiosis II (equational):</strong> sister chromatids separate → 4 haploid cells</p>
</div>
<h3>Key Stages</h3>
<div class="formula-box">
  <p><strong>Prophase I:</strong> homologous chromosomes pair up (synapsis) → crossing over (recombination) occurs between non-sister chromatids.</p>
  <p><strong>Metaphase I:</strong> bivalents align at cell equator; independent assortment occurs.</p>
  <p><strong>Anaphase I:</strong> homologs separate (not sister chromatids).</p>
  <p><strong>Meiosis II:</strong> identical to mitosis in each haploid cell.</p>
</div>`,
      },
      {
        id: "mei2",
        title: "II. Genetic Shuffling Mechanisms",
        content: `
<h3>Sources of Genetic Variation</h3>
<div class="formula-box">
  <p><strong>1. Intrachromosomal recombination (crossing over):</strong><br>
  During Prophase I, non-sister chromatids of homologous chromosomes exchange segments → new allele combinations (recombinant chromosomes).</p>
  <p><strong>2. Interchromosomal shuffling (independent assortment):</strong><br>
  At Metaphase I, each pair of homologs orients randomly → 2ⁿ possible gamete combinations (n = haploid number).</p>
  <p><strong>3. Fertilisation:</strong><br>
  Random fusion of gametes from two parents → enormous genetic diversity in offspring.</p>
</div>`,
      },
    ],
    keyFormulas: [
      "Meiosis: 2n → 4n (haploid gametes)",
      "Crossing over: intrachromosomal recombination in Prophase I",
      "Independent assortment: 2ⁿ gamete types possible",
      "Fertilisation restores 2n: n (egg) + n (sperm) → 2n (zygote)",
    ],
    quiz: [
      {
        id: "mei-q1",
        question: "Meiosis produces how many daughter cells?",
        options: ["2 diploid", "2 haploid", "4 diploid", "4 haploid"],
        correctAnswer: 3,
        explanation: "Meiosis produces 4 genetically distinct haploid (n) cells (gametes).",
      },
      {
        id: "mei-q2",
        question: "Crossing over occurs during:",
        options: ["Metaphase II", "Prophase I", "Anaphase I", "Telophase II"],
        correctAnswer: 1,
        explanation: "Crossing over (chiasmata formation) occurs during Prophase I when homologs are paired.",
      },
      {
        id: "mei-q3",
        question: "Independent assortment refers to the random orientation of:",
        options: [
          "Sister chromatids in Meiosis II",
          "Homologous pairs at Metaphase I",
          "DNA strands during replication",
          "Ribosomes during translation",
        ],
        correctAnswer: 1,
        explanation: "At Metaphase I, each homologous pair aligns randomly, producing 2ⁿ possible gamete combinations.",
      },
      {
        id: "mei-q4",
        question: "What is the ploidy of cells after Meiosis I?",
        options: ["4n", "2n", "n", "3n"],
        correctAnswer: 2,
        explanation: "After Meiosis I (reductive division), cells are haploid (n) but still have duplicated chromatids.",
      },
      {
        id: "mei-q5",
        question: "Fertilisation restores the diploid number by:",
        options: [
          "Doubling a haploid cell",
          "Crossing over between gametes",
          "Fusion of two haploid gametes",
          "Mitosis of a gamete",
        ],
        correctAnswer: 2,
        explanation: "Fusion of egg (n) + sperm (n) → zygote (2n), restoring the species chromosome number.",
      },
    ],
    examProblems: [
      {
        id: "mei-ex1",
        title: "Exam Problem – Meiosis & Genetic Diversity",
        problem: `<p>A diploid organism has 2n = 6 chromosomes (3 homologous pairs).</p>
<ol>
  <li>How many chromosomes are in a gamete?</li>
  <li>How many different gamete types can be produced by independent assortment alone?</li>
  <li>Explain how crossing over increases this diversity further.</li>
  <li>Compare the genetic outcome of mitosis vs. meiosis.</li>
</ol>`,
        solution: `<ol>
  <li>Gamete has n = 3 chromosomes.</li>
  <li>2ⁿ = 2³ = 8 different gamete types by independent assortment.</li>
  <li>Crossing over during Prophase I creates recombinant chromosomes with new allele combinations, exponentially increasing the number of unique gametes beyond 2ⁿ.</li>
  <li>Mitosis: 2 genetically identical diploid cells (clonal). Meiosis: 4 genetically unique haploid cells (gametes) due to crossing over and independent assortment.</li>
</ol>`,
      },
    ],
  },

  {
    id: "svt-heredity-laws",
    title: "Statistical Laws of Hereditary Trait Transmission",
    description:
      "Mendelian genetics, monohybridism, dihybridism, codominance, sex-linked genes, lethal alleles, and gene linkage",
    sections: [
      {
        id: "hl1",
        title: "I. Monohybridism (One Gene Pair)",
        content: `
<h3>Key Vocabulary</h3>
<div class="formula-box">
  <p><strong>Locus:</strong> position of a gene on a chromosome.</p>
  <p><strong>Allele:</strong> variant form of a gene. <strong>Dominant (A)</strong> masks recessive (a).</p>
  <p><strong>Homozygous:</strong> AA or aa. <strong>Heterozygous:</strong> Aa.</p>
  <p><strong>Phenotype:</strong> observable trait. <strong>Genotype:</strong> genetic makeup.</p>
</div>
<h3>Mendel's Laws</h3>
<div class="formula-box">
  <p><strong>Law of Segregation:</strong> alleles separate during gamete formation → each gamete carries one allele.</p>
  <p><strong>F1 cross Aa × Aa:</strong> offspring ratio 3 dominant : 1 recessive (phenotype); 1 AA : 2 Aa : 1 aa (genotype).</p>
  <p><strong>Codominance:</strong> both alleles expressed equally (e.g., blood groups AB).</p>
  <p><strong>Lethal alleles:</strong> certain homozygous genotypes are lethal → modified ratios (e.g., 2:1 instead of 3:1).</p>
</div>`,
      },
      {
        id: "hl2",
        title: "II. Dihybridism & Gene Linkage",
        content: `
<h3>Two Gene Pairs – Independent Genes</h3>
<div class="formula-box">
  <p>If genes are on different chromosomes (independent assortment):</p>
  <p>AaBb × AaBb → 9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb (phenotype ratio 9:3:3:1)</p>
</div>
<h3>Linked Genes (Same Chromosome)</h3>
<div class="formula-box">
  <p>Genes on the same chromosome tend to be inherited together (linkage).</p>
  <p>Crossing over can separate linked alleles → <strong>recombinant gametes</strong>.</p>
  <p>Recombination frequency (%) = (recombinants / total offspring) × 100</p>
  <p>RF = genetic distance in centimorgans (cM).</p>
</div>
<h3>Sex-Linked Genes</h3>
<div class="formula-box">
  <p>Genes on the X chromosome are X-linked. Males (XY) are hemizygous.</p>
  <p>X-linked recessive: females need 2 copies to express; males express with 1 copy.</p>
  <p>Example: colour blindness, haemophilia.</p>
</div>`,
      },
    ],
    keyFormulas: [
      "Monohybrid F2: 3 dominant : 1 recessive (phenotype)",
      "Dihybrid F2 (independent): 9:3:3:1",
      "Recombination frequency = recombinants/total × 100%",
      "X-linked recessive: XᴬXᵃ (carrier female), XᵃY (affected male)",
    ],
    quiz: [
      {
        id: "hl-q1",
        question: "In a monohybrid cross Aa × Aa, the phenotype ratio is:",
        options: ["1:1", "1:2:1", "3:1", "9:3:3:1"],
        correctAnswer: 2,
        explanation: "Aa × Aa produces 1AA : 2Aa : 1aa genotypes, giving 3 dominant : 1 recessive phenotype.",
      },
      {
        id: "hl-q2",
        question: "The 9:3:3:1 ratio applies to a dihybrid cross where genes are:",
        options: ["Linked", "On the same chromosome", "Independent (on different chromosomes)", "Codominant"],
        correctAnswer: 2,
        explanation: "The 9:3:3:1 ratio (Mendel's Law of Independent Assortment) applies when genes are on different chromosomes.",
      },
      {
        id: "hl-q3",
        question: "A carrier female for a X-linked recessive trait has the genotype:",
        options: ["XᴬXᴬ", "XᵃXᵃ", "XᴬXᵃ", "XᵃY"],
        correctAnswer: 2,
        explanation: "A carrier female has one dominant and one recessive X-linked allele (XᴬXᵃ); she does not show the trait.",
      },
      {
        id: "hl-q4",
        question: "Codominance means:",
        options: [
          "One allele is completely dominant",
          "Both alleles are expressed simultaneously",
          "Neither allele is expressed",
          "Alleles are located on sex chromosomes",
        ],
        correctAnswer: 1,
        explanation: "In codominance, both alleles contribute to the phenotype equally (e.g., blood type AB).",
      },
      {
        id: "hl-q5",
        question: "Recombination frequency between two linked genes equals:",
        options: [
          "Total offspring / recombinants × 100",
          "(Recombinants / total offspring) × 100",
          "Parental types / total × 100",
          "Number of chiasmata only",
        ],
        correctAnswer: 1,
        explanation: "RF (%) = (number of recombinant offspring / total offspring) × 100, indicating map distance.",
      },
    ],
    examProblems: [
      {
        id: "hl-ex1",
        title: "Exam Problem – Genetics Cross",
        problem: `<p>In guinea pigs, black coat (B) is dominant over white (b), and short hair (S) is dominant over long (s). The genes are on different chromosomes.</p>
<ol>
  <li>A black short-haired guinea pig (BbSs) is crossed with a white long-haired one (bbss). Predict the offspring phenotype ratios.</li>
  <li>Two black short-haired guinea pigs are crossed and produce 9 black short : 3 black long : 3 white short : 1 white long. What are the parental genotypes?</li>
  <li>If B and S were linked, how would the results differ?</li>
</ol>`,
        solution: `<ol>
  <li>BbSs × bbss (testcross): offspring = 1 BbSs : 1 Bbss : 1 bbSs : 1 bbss = 1 black short : 1 black long : 1 white short : 1 white long (1:1:1:1 ratio).</li>
  <li>9:3:3:1 ratio is the classic dihybrid F2 result. Both parents must be BbSs.</li>
  <li>If linked, parental-type gametes (BS and bs) would be more frequent than recombinants, producing mostly black-short and white-long offspring, deviating from 9:3:3:1.</li>
</ol>`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // UNIT 3 – USE OF ORGANIC AND INORGANIC MATTER
  // ══════════════════════════════════════════════════════════════

  {
    id: "svt-waste-pollution",
    title: "Household Waste & Environmental Pollution",
    description:
      "Types of waste, pollution of air, water and soil from energy and industrial consumption, and environmental monitoring",
    sections: [
      {
        id: "wp1",
        title: "I. Household Waste (Ordures Ménagères)",
        content: `
<h3>Categories of Waste</h3>
<div class="formula-box">
  <p><strong>Biodegradable waste:</strong> food scraps, paper → decomposed by microorganisms → compost.</p>
  <p><strong>Non-biodegradable waste:</strong> plastics, metals, glass → persist in environment.</p>
  <p><strong>Hazardous waste:</strong> batteries, chemicals, medical waste → require special disposal.</p>
</div>
<h3>Waste Management Methods</h3>
<div class="formula-box">
  <ul>
    <li><strong>Landfill (discharge):</strong> controlled burial; risk of groundwater contamination.</li>
    <li><strong>Incineration:</strong> burns waste; reduces volume but releases CO₂, dioxins.</li>
    <li><strong>Composting:</strong> aerobic decomposition of organic waste → fertiliser.</li>
    <li><strong>Recycling:</strong> recovering materials (glass, paper, metals, plastics).</li>
  </ul>
</div>`,
      },
      {
        id: "wp2",
        title: "II. Air & Water Pollution",
        content: `
<h3>Air Pollution from Fossil Fuels</h3>
<div class="formula-box">
  <p>Combustion of fossil fuels releases: CO₂, CO, SO₂, NOₓ, particulate matter.</p>
  <p><strong>Greenhouse effect:</strong> CO₂, CH₄, H₂O vapour trap infrared radiation → global warming.</p>
  <p><strong>Acid rain:</strong> SO₂ + H₂O → H₂SO₃; NOₓ + H₂O → HNO₃ → damages ecosystems.</p>
  <p><strong>Ozone layer depletion:</strong> CFCs destroy stratospheric O₃ → increased UV radiation.</p>
</div>
<h3>Water & Soil Pollution</h3>
<div class="formula-box">
  <p><strong>Eutrophication:</strong> excess nutrients (N, P from fertilisers) → algae bloom → O₂ depletion → aquatic death.</p>
  <p><strong>Pesticides & heavy metals</strong> accumulate in food chains (bioaccumulation/biomagnification).</p>
  <p><strong>Biological oxygen demand (BOD):</strong> measure of organic pollution in water — higher BOD = more pollution.</p>
</div>`,
      },
      {
        id: "wp3",
        title: "III. Nuclear Materials & Environmental Control",
        content: `
<h3>Radioactive Waste</h3>
<div class="formula-box">
  <p>Nuclear power produces radioactive waste with very long half-lives.</p>
  <p>Classified as: low-level, intermediate-level, high-level waste.</p>
  <p>Requires deep geological storage; poses long-term environmental risk.</p>
</div>
<h3>Monitoring Environmental Quality</h3>
<div class="formula-box">
  <p><strong>Bioindicators:</strong> species whose presence/absence indicates pollution level (e.g., lichens for air quality, macroinvertebrates for water quality).</p>
  <p><strong>IBGN (biological index):</strong> measures freshwater quality using invertebrate communities.</p>
  <p><strong>Chemical analysis:</strong> measures pH, dissolved O₂, nitrates, heavy metals in water samples.</p>
</div>`,
      },
    ],
    keyFormulas: [
      "BOD: higher value = more organic pollution",
      "Eutrophication: excess nutrients → algae bloom → O₂ depletion",
      "Acid rain: SO₂ + H₂O → H₂SO₃ (sulfurous acid)",
      "Bioaccumulation: toxin concentration increases up the food chain",
    ],
    quiz: [
      {
        id: "wp-q1",
        question: "Which waste treatment method produces compost?",
        options: ["Incineration", "Landfill", "Composting", "Recycling"],
        correctAnswer: 2,
        explanation: "Composting is the aerobic decomposition of organic waste into a nutrient-rich soil amendment.",
      },
      {
        id: "wp-q2",
        question: "Acid rain is primarily caused by:",
        options: ["CO₂ emissions", "SO₂ and NOₓ emissions", "CFCs", "Ozone"],
        correctAnswer: 1,
        explanation: "SO₂ and NOₓ from combustion react with water to form sulfuric and nitric acids, causing acid rain.",
      },
      {
        id: "wp-q3",
        question: "Eutrophication is caused by excess:",
        options: ["CO₂", "Nitrogen and phosphorus", "Heavy metals", "Radioactive materials"],
        correctAnswer: 1,
        explanation: "Excess nitrogen and phosphorus (from fertilisers) cause algae blooms leading to oxygen depletion.",
      },
      {
        id: "wp-q4",
        question: "BOD (Biological Oxygen Demand) measures:",
        options: ["Oxygen produced by plants", "Oxygen consumed by decomposers", "CO₂ in water", "Radioactivity level"],
        correctAnswer: 1,
        explanation: "BOD measures the amount of O₂ used by microorganisms to decompose organic matter — a key water pollution indicator.",
      },
      {
        id: "wp-q5",
        question: "Lichens are used as bioindicators for:",
        options: ["Water quality", "Soil pH", "Air quality", "Radiation levels"],
        correctAnswer: 2,
        explanation: "Lichens are very sensitive to air pollution (especially SO₂); their absence indicates poor air quality.",
      },
    ],
    examProblems: [
      {
        id: "wp-ex1",
        title: "Exam Problem – Pollution & Environment",
        problem: `<p>A river near an industrial zone shows high BOD, low dissolved oxygen, and absence of sensitive macroinvertebrates.</p>
<ol>
  <li>What do these indicators suggest about water quality?</li>
  <li>Explain the process of eutrophication and its effects on aquatic life.</li>
  <li>Propose two measures to reduce water pollution in this area.</li>
  <li>Define bioaccumulation and explain why predators at the top of food chains are most at risk from pesticides.</li>
</ol>`,
        solution: `<ol>
  <li>High BOD + low O₂ + absence of sensitive species indicate severe organic pollution, likely from industrial or agricultural runoff.</li>
  <li>Excess nutrients (N, P) → explosive algae growth → algae die → decomposers consume O₂ → anoxic conditions → fish and other organisms die.</li>
  <li>Measures: wastewater treatment before discharge; reduction of agricultural fertiliser use/runoff; buffer strips along riverbanks.</li>
  <li>Bioaccumulation: progressive increase in toxin concentration in organisms as the toxin is not broken down but stored. Top predators consume many contaminated prey → very high concentrations accumulate in their tissues (biomagnification).</li>
</ol>`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // UNIT 4 – GEOLOGICAL PHENOMENA & PLATE TECTONICS
  // ══════════════════════════════════════════════════════════════

  {
    id: "svt-mountain-tectonics",
    title: "Mountain Building & Plate Tectonics",
    description:
      "Structural and petrographic features of mountain ranges, tectonic deformations, subduction, obduction, and collision",
    sections: [
      {
        id: "mt1",
        title: "I. Types of Mountain Chains",
        content: `
<h3>Classification</h3>
<div class="formula-box">
  <p><strong>Subduction chains (cordilleras):</strong> oceanic plate subducts under continental plate → volcanic arc mountains (e.g., Andes).</p>
  <p><strong>Obduction chains (ophiolite zones):</strong> oceanic crust pushed onto continental crust (rare; e.g., Oman).</p>
  <p><strong>Collision chains:</strong> two continental plates collide after ocean closure → thickened crust, no volcanism (e.g., Himalayas, Alps).</p>
</div>
<h3>Structural Features of Mountain Chains</h3>
<div class="formula-box">
  <ul>
    <li><strong>Oceanic suture:</strong> remnants of former ocean (ophiolites, deep-sea sediments)</li>
    <li><strong>Nappes de charriage:</strong> large thrust sheets transported tens of km</li>
    <li><strong>Roots:</strong> thickened continental crust extending deep into mantle (isostasy)</li>
  </ul>
</div>`,
      },
      {
        id: "mt2",
        title: "II. Tectonic Deformations",
        content: `
<h3>Types of Rock Deformation</h3>
<div class="formula-box">
  <p><strong>Folds (plis):</strong> ductile deformation under high pressure/temperature at depth.</p>
  <ul>
    <li>Anticline: arches upward (oldest rocks in core)</li>
    <li>Syncline: arches downward (youngest rocks in core)</li>
  </ul>
  <p><strong>Faults (failles):</strong> brittle deformation at shallow depth.</p>
  <ul>
    <li>Normal fault: extensional stress, hanging wall moves down</li>
    <li>Reverse fault / thrust fault: compressional stress, hanging wall moves up</li>
    <li>Strike-slip fault: horizontal movement</li>
  </ul>
  <p><strong>Thrust sheets (nappes de charriage):</strong> large-scale reverse faults transporting rock units horizontally.</p>
</div>`,
      },
    ],
    keyFormulas: [
      "Subduction: oceanic plate sinks under continental → volcanic arc",
      "Collision: 2 continental plates → fold mountains, no active volcanism",
      "Anticline: oldest rocks in core; syncline: youngest in core",
      "Thrust fault: compressional, hanging wall moves up and over",
    ],
    quiz: [
      {
        id: "mt-q1",
        question: "The Himalayas formed by:",
        options: [
          "Subduction of oceanic plate",
          "Collision of two continental plates",
          "Obduction of oceanic crust",
          "Volcanic activity alone",
        ],
        correctAnswer: 1,
        explanation: "The Himalayas formed when the Indian plate collided with the Eurasian plate — a continent-continent collision.",
      },
      {
        id: "mt-q2",
        question: "An anticline is characterised by:",
        options: [
          "Youngest rocks in the core",
          "Oldest rocks in the core",
          "Horizontal rock layers",
          "A downward arch",
        ],
        correctAnswer: 1,
        explanation: "An anticline arches upward; erosion exposes the oldest rocks in its core.",
      },
      {
        id: "mt-q3",
        question: "A reverse (thrust) fault is caused by:",
        options: ["Tensional stress", "Compressional stress", "Shear stress", "Gravity alone"],
        correctAnswer: 1,
        explanation: "Compressional forces drive the hanging wall up and over the footwall in reverse/thrust faults.",
      },
      {
        id: "mt-q4",
        question: "Ophiolites are remnants of:",
        options: ["Continental crust", "Mantle rock only", "Former oceanic crust", "Metamorphic basement"],
        correctAnswer: 2,
        explanation: "Ophiolites are slices of ancient oceanic crust and upper mantle now found on land, marking ancient suture zones.",
      },
      {
        id: "mt-q5",
        question: "Subduction of oceanic crust under continental crust produces:",
        options: [
          "Fold mountains with no volcanism",
          "A volcanic arc on the overriding plate",
          "Oceanic ridges",
          "Transform faults",
        ],
        correctAnswer: 1,
        explanation: "Subducting oceanic crust melts and rises, forming a volcanic arc (e.g., the Andes).",
      },
    ],
    examProblems: [
      {
        id: "mt-ex1",
        title: "Exam Problem – Mountain Building",
        problem: `<p>Two tectonic scenarios are described:</p>
<p><strong>A:</strong> An oceanic plate subducts beneath a continental plate. The subducting slab reaches 100 km depth.</p>
<p><strong>B:</strong> After the ocean between two continents closes completely, the two continental masses converge.</p>
<ol>
  <li>For scenario A: predict the geological features that form at the surface above the subduction zone.</li>
  <li>For scenario B: describe the structures produced and explain why volcanism ceases.</li>
  <li>What rock types (petrographic evidence) in a mountain range indicate a former subduction zone?</li>
  <li>Define 'nappe de charriage' and explain its significance in mountain building.</li>
</ol>`,
        solution: `<ol>
  <li>Scenario A: volcanic arc (andesite volcanoes), deep trench at subduction zone, fold mountains on continental side, earthquakes at Benioff zone.</li>
  <li>Scenario B: crust thickens (doubles) → fold mountains with deep roots; no volcanism because continental crust is too buoyant to subduct deeply and melt.</li>
  <li>Ophiolites (fragments of oceanic crust: pillow basalts, gabbro, peridotite), blueschist metamorphic rocks (high pressure, low temperature), and deep-sea sediments indicate former subduction/ocean.</li>
  <li>A nappe de charriage is a large sheet of rock transported horizontally over tens of kilometres along a low-angle thrust fault, indicating extreme compressional tectonics during mountain building.</li>
</ol>`,
      },
    ],
  },

  {
    id: "svt-metamorphism-granitisation",
    title: "Metamorphism, Granitisation & Plate Tectonics",
    description:
      "Types of metamorphism, metamorphic facies, the relationship between P-T conditions and mineral assemblages, and granitisation",
    sections: [
      {
        id: "mg1",
        title: "I. Metamorphism",
        content: `
<h3>Definition</h3>
<div class="formula-box">
  <p><strong>Metamorphism:</strong> transformation of existing rocks (sedimentary, igneous, or metamorphic) by heat and/or pressure <em>in the solid state</em> (no melting).</p>
  <p>New minerals (index minerals) grow that are stable at the new P-T conditions.</p>
</div>
<h3>Types of Metamorphism</h3>
<div class="formula-box">
  <p><strong>Regional (Barrovian) metamorphism:</strong> large-scale, moderate P & T → collision zones.<br>
  Zones (increasing grade): chlorite → biotite → garnet → staurolite → kyanite → sillimanite.</p>
  <p><strong>Contact metamorphism:</strong> high T, low P, near magmatic intrusions → hornfels.</p>
  <p><strong>High-P/low-T metamorphism:</strong> subduction zones → blueschist facies (glaucophane, lawsonite).</p>
  <p><strong>Eclogite facies:</strong> very high P → deep subduction (>60 km).</p>
</div>
<h3>Metamorphic Facies</h3>
<div class="formula-box">
  <p>A <strong>facies</strong> is a set of minerals stable at specific P-T conditions. The P-T path of a rock determines which facies it passes through.</p>
  <p>Geothermal gradient: oceanic (30°C/km in subduction) vs. continental (25–30°C/km average).</p>
</div>`,
      },
      {
        id: "mg2",
        title: "II. Granitisation",
        content: `
<h3>Origin of Granites in Mountain Belts</h3>
<div class="formula-box">
  <p>At the deepest levels of mountain roots, temperatures can reach the <strong>melting point</strong> of crustal rocks → partial melting → <strong>magma (granite composition)</strong>.</p>
  <p>This magma rises (less dense) and crystallises → <strong>granitic plutons</strong> within the mountain belt.</p>
  <p><strong>Granitisation</strong> in the broad sense: replacement of pre-existing minerals by feldspar and quartz (in-situ transformation), controversial mechanism.</p>
</div>
<h3>Relationship with Metamorphism</h3>
<div class="formula-box">
  <p>High-grade metamorphism (amphibolite/granulite facies) → partial melting begins.</p>
  <p><strong>Migmatites:</strong> mixed rocks with both metamorphic (solid) and igneous (melted) portions → transitional between metamorphism and magmatism.</p>
  <p>Granite forms the cores of many ancient and modern mountain belts.</p>
</div>`,
      },
    ],
    keyFormulas: [
      "Metamorphism: solid-state transformation by heat and/or pressure",
      "Blueschist: high-P, low-T → subduction zone indicator",
      "Index minerals (increasing grade): chlorite → garnet → staurolite → sillimanite",
      "Migmatite: partial melt → transition between metamorphism and granite",
    ],
    quiz: [
      {
        id: "mg-q1",
        question: "Metamorphism occurs in the:",
        options: [
          "Liquid state (melt)",
          "Solid state without melting",
          "Gaseous state",
          "Aqueous solution only",
        ],
        correctAnswer: 1,
        explanation: "Metamorphism transforms rocks in the solid state; if rocks melt, it becomes magmatism.",
      },
      {
        id: "mg-q2",
        question: "Blueschist metamorphism indicates:",
        options: [
          "High temperature, low pressure (contact zone)",
          "High pressure, low temperature (subduction zone)",
          "Low pressure, low temperature",
          "High temperature, high pressure (collision core)",
        ],
        correctAnswer: 1,
        explanation: "Blueschist facies (glaucophane-bearing) forms at high pressure and low temperature typical of subduction zones.",
      },
      {
        id: "mg-q3",
        question: "Migmatites are:",
        options: [
          "Pure granites",
          "Pure metamorphic rocks",
          "Mixed rocks with metamorphic and partially melted portions",
          "Sedimentary rocks",
        ],
        correctAnswer: 2,
        explanation: "Migmatites show both solid metamorphic fabric and leucosome (melt) veins — a transition to granite formation.",
      },
      {
        id: "mg-q4",
        question: "Contact metamorphism is characterised by:",
        options: [
          "High pressure, low temperature",
          "Regional scale deformation",
          "High temperature, low pressure near intrusions",
          "Subduction environment",
        ],
        correctAnswer: 2,
        explanation: "Contact metamorphism occurs near magmatic intrusions where heat is the dominant factor, not pressure.",
      },
      {
        id: "mg-q5",
        question: "The highest grade index mineral in Barrovian metamorphism is:",
        options: ["Chlorite", "Biotite", "Garnet", "Sillimanite"],
        correctAnswer: 3,
        explanation: "Sillimanite marks the highest-grade zone in Barrovian metamorphic sequences.",
      },
    ],
    examProblems: [
      {
        id: "mg-ex1",
        title: "Exam Problem – Metamorphism & Mountain Building",
        problem: `<p>Geologists study two rock samples from a mountain belt:</p>
<p><strong>Sample A:</strong> contains glaucophane and lawsonite (blueschist assemblage).</p>
<p><strong>Sample B:</strong> contains sillimanite and K-feldspar (high-grade metamorphic rock).</p>
<ol>
  <li>What P-T conditions does each sample indicate?</li>
  <li>In which tectonic context did each sample form?</li>
  <li>Explain how granites can form in the core of a collision mountain range.</li>
  <li>What are migmatites and what do they tell us about conditions at depth?</li>
</ol>`,
        solution: `<ol>
  <li>Sample A (blueschist): high pressure (>0.6 GPa), low temperature (<400°C) — subduction conditions. Sample B (sillimanite zone): high temperature (>650°C), moderate-high pressure — deep crustal conditions during continental collision.</li>
  <li>Sample A: subduction zone (former oceanic crust dragged to depth). Sample B: deep in a continental collision zone where crustal thickening causes high P and T.</li>
  <li>At the roots of collision belts, crustal thickening raises temperatures enough to partially melt crustal rocks (especially at T > 650–700°C), producing granitic melt that rises buoyantly and crystallises as granite plutons.</li>
  <li>Migmatites are rocks showing both a solid metamorphic framework (melanosome) and veins of leucosome (granitic melt). They indicate that temperatures reached the solidus, marking the onset of partial melting at depth.</li>
</ol>`,
      },
    ],
  },
];
