import { Lesson } from "./types";

export const svtLessons: Lesson[] = [
    {
        id: "svt-organic-matter", title: "Consumption of Organic Matter & Energy Flow", description: "Cellular respiration, fermentation, ATP production and energy release",
        sections: [
            { id: "om1", title: "I. Cellular Respiration", content: `<h3>Overall Equation</h3><div class="formula-box"><p>$$C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + \\text{energy (ATP)}$$</p></div><h3>Three Stages</h3><div class="important-box"><ol><li><strong>Glycolysis</strong> (cytoplasm): glucose → 2 pyruvate + 2 ATP</li><li><strong>Krebs Cycle</strong> (mitochondrial matrix): pyruvate oxidation → CO₂ + reduced coenzymes</li><li><strong>Electron Transport Chain</strong> (inner membrane): NADH/FADH₂ → 34 ATP + H₂O</li></ol></div><div class="tip-box"><strong>💡</strong> Total yield: ~36-38 ATP per glucose molecule.</div>` },
            { id: "om2", title: "II. Fermentation", content: `<h3>Anaerobic Pathway</h3><div class="formula-box"><p><strong>Alcoholic:</strong> $C_6H_{12}O_6 \\to 2C_2H_5OH + 2CO_2 + 2ATP$</p><p><strong>Lactic:</strong> $C_6H_{12}O_6 \\to 2C_3H_6O_3 + 2ATP$</p></div><p>Fermentation produces only <strong>2 ATP</strong> (vs 36-38 for respiration).</p>` },
        ],
        keyFormulas: ["Respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 36 ATP", "Fermentation: only 2 ATP", "Glycolysis occurs in cytoplasm", "Krebs cycle in mitochondrial matrix"],
        quiz: [
            { id: "om1q", question: "Total ATP from aerobic respiration:", options: ["2", "4", "36-38", "100"], correctAnswer: 2, explanation: "~36-38 ATP per glucose." },
            { id: "om2q", question: "Glycolysis occurs in:", options: ["Nucleus", "Cytoplasm", "Mitochondria", "Chloroplast"], correctAnswer: 1, explanation: "Glycolysis happens in the cytoplasm." },
            { id: "om3q", question: "Krebs cycle takes place in:", options: ["Cytoplasm", "Inner membrane", "Mitochondrial matrix", "Nucleus"], correctAnswer: 2, explanation: "Krebs cycle occurs in mitochondrial matrix." },
            { id: "om4q", question: "Fermentation is:", options: ["Aerobic", "Anaerobic", "Both", "Neither"], correctAnswer: 1, explanation: "Fermentation occurs without oxygen." },
            { id: "om5q", question: "Lactic fermentation product:", options: ["Ethanol", "Lactic acid", "CO₂ only", "Water"], correctAnswer: 1, explanation: "Lactic acid (C₃H₆O₃)." },
        ],
        examProblems: [
            { id: "om-ex1", title: "Exam Problem", problem: `<p>Compare respiration and fermentation: ATP yield, O₂ requirement, location, and products.</p>`, solution: `<p><strong>Respiration:</strong> 36-38 ATP, requires O₂, mitochondria, products: CO₂ + H₂O. <strong>Fermentation:</strong> 2 ATP, no O₂, cytoplasm, products: ethanol + CO₂ or lactic acid.</p>` },
        ],
    },
    {
        id: "svt-genetics", title: "Genetics & Gene Expression", description: "DNA, transcription, translation, protein synthesis, and mutations",
        sections: [
            { id: "gen1", title: "I. DNA Structure", content: `<h3>The Genetic Material</h3><div class="formula-box"><p>DNA = double helix of nucleotides.</p><p>Base pairing: <strong>A-T</strong> (2 H-bonds), <strong>G-C</strong> (3 H-bonds).</p><p>Gene = segment of DNA coding for a protein.</p></div>` },
            { id: "gen2", title: "II. Protein Synthesis", content: `<h3>Transcription (nucleus)</h3><div class="formula-box"><p>DNA → mRNA (by RNA polymerase)</p><p>Template strand is read 3'→5', mRNA is synthesized 5'→3'.</p></div><h3>Translation (ribosomes)</h3><div class="formula-box"><p>mRNA → protein (by ribosomes + tRNA)</p><p>Codon (3 bases on mRNA) → amino acid</p><p>Start codon: AUG (methionine), Stop codons: UAA, UAG, UGA</p></div>` },
            { id: "gen3", title: "III. Mutations", content: `<h3>Types of Mutations</h3><ul><li><strong>Substitution:</strong> one base replaced</li><li><strong>Insertion:</strong> extra base added (frameshift)</li><li><strong>Deletion:</strong> base removed (frameshift)</li></ul><div class="important-box"><p>Frameshift mutations change all downstream codons → usually nonfunctional protein.</p></div>` },
            { id: "gen4", title: "IV. Sexual Reproduction & Genetic Transfer", content: `<h3>Meiosis</h3><div class="formula-box"><p>2n → n: produces 4 haploid gametes from one diploid cell.</p><p>Crossing over creates new allele combinations.</p></div><h3>Genetic Diversity</h3><p>Sources: crossing over, independent assortment, random fertilization, mutations.</p>` },
        ],
        keyFormulas: ["A-T (2 bonds), G-C (3 bonds)", "DNA → mRNA (transcription)", "mRNA → protein (translation)", "AUG = start, UAA/UAG/UGA = stop"],
        quiz: [
            { id: "gen1q", question: "A pairs with:", options: ["G", "C", "T", "A"], correctAnswer: 2, explanation: "Adenine pairs with Thymine (A-T)." },
            { id: "gen2q", question: "Start codon:", options: ["AUG", "UAA", "UGA", "UAG"], correctAnswer: 0, explanation: "AUG codes for methionine (start)." },
            { id: "gen3q", question: "Transcription occurs in:", options: ["Cytoplasm", "Ribosome", "Nucleus", "Membrane"], correctAnswer: 2, explanation: "DNA → mRNA happens in the nucleus." },
            { id: "gen4q", question: "Meiosis produces ___ cells:", options: ["2 diploid", "4 haploid", "2 haploid", "4 diploid"], correctAnswer: 1, explanation: "Meiosis: 1 diploid → 4 haploid cells." },
            { id: "gen5q", question: "Frameshift mutation is caused by:", options: ["Substitution", "Insertion or deletion", "Crossing over", "Replication"], correctAnswer: 1, explanation: "Adding/removing bases shifts the reading frame." },
        ],
        examProblems: [
            { id: "gen-ex1", title: "Exam Problem", problem: `<p>A DNA template strand reads: 3'-TAC-GGC-AAT-ACT-5'</p><ol><li>Write the mRNA.</li><li>Using the genetic code, find the amino acid sequence.</li><li>What happens if the 4th base (G) is replaced by A?</li></ol>`, solution: `<ol><li>mRNA: 5'-AUG-CCG-UUA-UGA-3'</li><li>AUG=Met, CCG=Pro, UUA=Leu, UGA=Stop → Met-Pro-Leu</li><li>Substitution: CCG→CAG=Gln. New sequence: Met-Gln-Leu (missense mutation).</li></ol>` },
        ],
    },
    {
        id: "svt-soil-water", title: "Use of Organic & Inorganic Matter", description: "Soil formation, water cycle, and environmental issues",
        sections: [
            { id: "sw1", title: "I. Soil Formation", content: `<h3>Rock Weathering</h3><p>Physical (temperature, frost), chemical (water, acids), and biological (roots, organisms) weathering breaks rock into soil particles.</p><div class="formula-box"><p>Soil = minerals + organic matter (humus) + water + air + organisms</p></div>` },
            { id: "sw2", title: "II. Water & Nutrients", content: `<h3>Water Cycle & Pollution</h3><div class="important-box"><p>Threats: pesticides, industrial waste, overexploitation of aquifers.</p><p>Solutions: water treatment, sustainable agriculture, protected areas.</p></div>` },
        ],
        keyFormulas: ["Soil = rock + humus + water + air", "Weathering: physical + chemical + biological", "Sustainability = meeting needs without depleting resources"],
        quiz: [
            { id: "sw1q", question: "Humus is:", options: ["Rock", "Decomposed organic matter", "Water", "Mineral"], correctAnswer: 1, explanation: "Humus = decomposed organic material in soil." },
            { id: "sw2q", question: "Soil erosion is worsened by:", options: ["Forests", "Deforestation", "Rain gardens", "Mulching"], correctAnswer: 1, explanation: "Removing trees exposes soil to erosion." },
            { id: "sw3q", question: "Aquifer = underground:", options: ["Cave", "Water reservoir", "Oil deposit", "Gas pocket"], correctAnswer: 1, explanation: "Aquifer = underground layer holding groundwater." },
            { id: "sw4q", question: "Chemical weathering involves:", options: ["Temperature", "Frost", "Acids/water reactions", "Wind"], correctAnswer: 2, explanation: "Chemical weathering = reactions with water and acids." },
            { id: "sw5q", question: "Sustainable development means:", options: ["Using all resources now", "Balancing needs with conservation", "Stopping all industry", "Only farming"], correctAnswer: 1, explanation: "Meeting present needs without compromising the future." },
        ],
        examProblems: [
            { id: "sw-ex1", title: "Exam Problem", problem: `<p>Explain how human activities affect soil quality and propose two solutions.</p>`, solution: `<p>Human activities (deforestation, intensive farming, pesticides) degrade soil by removing vegetation cover, depleting nutrients, and polluting. Solutions: (1) Crop rotation and organic farming to restore nutrients. (2) Reforestation to prevent erosion and maintain water cycles.</p>` },
        ],
    },
    {
        id: "svt-plate-tectonics", title: "Mountain Formation & Plate Tectonics", description: "Continental drift, plate boundaries, mountain building",
        sections: [
            { id: "pt1", title: "I. Plate Tectonics", content: `<h3>Tectonic Plates</h3><div class="formula-box"><p>Earth's lithosphere is divided into rigid plates that move on the asthenosphere.</p><p><strong>Divergent:</strong> plates move apart → mid-ocean ridge</p><p><strong>Convergent:</strong> plates collide → mountains, subduction</p><p><strong>Transform:</strong> plates slide past → earthquakes</p></div>` },
            { id: "pt2", title: "II. Mountain Formation", content: `<h3>Types of Mountains</h3><div class="important-box"><ul><li><strong>Collision mountains:</strong> continent-continent (e.g., Atlas, Himalayas) → folding, nappes</li><li><strong>Subduction mountains:</strong> oceanic-continental (e.g., Andes) → volcanic arc</li></ul></div><h3>Evidence</h3><p>Ophiolites (oceanic crust on land), metamorphic rocks (blueschist, eclogite), fossils, GPS measurements.</p>` },
        ],
        keyFormulas: ["Divergent → rifting, new crust", "Convergent → mountains, subduction", "Ophiolites = oceanic crust on land", "Atlas = collision mountains"],
        quiz: [
            { id: "pt1q", question: "Plates move on the:", options: ["Core", "Crust", "Asthenosphere", "Atmosphere"], correctAnswer: 2, explanation: "Tectonic plates float on the asthenosphere." },
            { id: "pt2q", question: "Divergent boundary creates:", options: ["Mountains", "Mid-ocean ridge", "Volcanoes only", "Earthquakes only"], correctAnswer: 1, explanation: "Plates moving apart → new ocean floor." },
            { id: "pt3q", question: "Atlas mountains formed by:", options: ["Subduction", "Continental collision", "Divergence", "Hotspot"], correctAnswer: 1, explanation: "Africa-Europe collision created the Atlas." },
            { id: "pt4q", question: "Ophiolites are:", options: ["Fossils", "Oceanic crust on land", "Volcanic rocks", "Sediments"], correctAnswer: 1, explanation: "Ophiolites = oceanic crust pushed onto continent." },
            { id: "pt5q", question: "Subduction means:", options: ["Plates separate", "One plate dives under another", "Plates slide past", "Plates stop"], correctAnswer: 1, explanation: "Ocean plate descends under continental plate." },
        ],
        examProblems: [
            { id: "pt-ex1", title: "Exam Problem", problem: `<p>Using geological evidence (ophiolites, metamorphic rocks, deformation), explain the stages of formation of a collision mountain chain like the Atlas.</p>`, solution: `<p>1) Ocean opens (rifting/divergence). 2) Subduction begins as ocean closes. 3) Ophiolites pushed onto continent. 4) Continental collision creates folds and nappes. 5) Metamorphic rocks (blueschist → eclogite) indicate deep burial. The Atlas formed from the Africa-Europe convergence.</p>` },
        ],
    },
];
