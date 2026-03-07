import { Lesson } from "./types";

export const svtLessons: Lesson[] = [
    {
        id: "svt-atp-respiration", title: "Unit 1: Energy Flow & Organic Matter Consumption", description: "Cellular respiration, fermentation, and muscle contraction.",
        sections: [
            { id: "atp1", title: "I. Cellular Respiration", content: `<h3>Overall Equation</h3><div class="formula-box"><p>$$C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + \\text{energy (38 ATP)}$$</p></div><h3>Three Stages</h3><div class="important-box"><ol><li><strong>Glycolysis</strong> (in the hyaloplasm/cytoplasm): breaks 1 glucose into 2 Pyruvates. Yields 2 ATP and 2 NADH, H$^+$.</li><li><strong>Krebs Cycle</strong> (in the mitochondrial matrix): Pyruvate is oxidized into Acetyl-CoA, then completely degraded into CO$_2$. Yields 2 ATP, 8 NADH, and 2 FADH$_2$.</li><li><strong>Electron Transport Chain</strong> (on the inner mitochondrial membrane): Electrons from NADH/FADH$_2$ pass through cytochromes to O$_2$ (final acceptor), pumping H$^+$ to create a gradient. ATP Synthase uses this gradient to make 34 ATP via oxidative phosphorylation.</li></ol></div>` },
            { id: "atp2", title: "II. Fermentation", content: `<h3>Anaerobic Pathway</h3><p>When O$_2$ is absent, cells perform fermentation in the cytoplasm to regenerate NAD$^+$.</p><div class="formula-box"><p><strong>Alcoholic:</strong> $C_6H_{12}O_6 \\to 2C_2H_5OH \\text{ (ethanol)} + 2CO_2 + 2ATP$</p><p><strong>Lactic:</strong> $C_6H_{12}O_6 \\to 2C_3H_6O_3 \\text{ (lactic acid)} + 2ATP$</p></div><p>Fermentation is very inefficient (only 2 ATP per glucose) compared to aerobic respiration.</p>` },
            { id: "atp3", title: "III. Muscle Contraction", content: `<h3>Skeletal Muscle</h3><div class="important-box"><p><strong>Structure:</strong> Muscle $\\to$ Fascicles $\\to$ Muscle Fibers (cells) $\\to$ Myofibrils $\\to$ Sarcomeres.</p><p><strong>Sarcomere:</strong> The functional unit composed of Actin (thin) and Myosin (thick) filaments.</p><p><strong>Mechanism:</strong> Calcium ($Ca^{2+}$) binds to troponin, exposing actin sites. Myosin heads bind, pivot (using ATP hydrolysis), and slide the filaments, shortening the sarcomere.</p></div>` }
        ],
        keyFormulas: ["Respiration: C₆H₁₂O₆ + 6O₂ → 38 ATP", "Fermentation: -> 2 ATP (anaerobic)", "Sarcomere = Actin + Myosin + Ca2+ + ATP"],
        quiz: [
            { id: "atp_q1", question: "Glycolysis occurs in the:", options: ["Mitochondrial matrix", "Cytoplasm / Hyaloplasm", "Nucleus", "Ribosome"], correctAnswer: 1, explanation: "Glycolysis takes place in the fluid of the cytoplasm without oxygen." },
            { id: "atp_q2", question: "The final electron acceptor in the mitochondrial electron transport chain is:", options: ["Carbon dioxide", "Water", "Oxygen", "ATP"], correctAnswer: 2, explanation: "Oxygen accepts the drained electrons and H+ protons to form Water (H2O)." },
            { id: "atp_q3", question: "During muscle contraction, which ion exposes the binding sites on actin?", options: ["Sodium (Na+)", "Potassium (K+)", "Calcium (Ca2+)", "Iron (Fe2+)"], correctAnswer: 2, explanation: "Calcium binds to troponin, causing a shift in tropomyosin and exposing the myosin-binding sites on the actin filament." },
            { id: "atp_q4", question: "Lactic fermentation products are:", options: ["Lactic acid and 2 ATP", "Ethanol and CO2", "38 ATP and Water", "Glucose and O2"], correctAnswer: 0, explanation: "Lactic fermentation converts pyruvate directly into lactic acid, yielding only 2 ATP from glycolysis." }
        ]
    },

    {
        id: "svt-genetics-nature", title: "Unit 2A: Nature & Expression of Genetic Information", description: "DNA structure, Mitosis, Transcription, and Translation.",
        sections: [
            { id: "gen1", title: "I. DNA & Mitosis", content: `<h3>Structure and Cycle</h3><p>DNA is a double helix of nucleotides (A pairs with T via 2 H-bonds, C pairs with G via 3 H-bonds).</p><div class="formula-box"><p>Cell Cycle = Interphase (G1, S-phase DNA replication, G2) + Mitosis (Prophase, Metaphase, Anaphase, Telophase).</p></div><p>DNA Replication is <strong>semi-conservative</strong> (Meselson and Stahl experiment), occurring during the S phase.</p>` },
            { id: "gen2", title: "II. Gene Expression", content: `<h3>From Gene to Protein</h3><div class="important-box"><p><strong>1. Transcription (Nucleus):</strong> RNA Polymerase reads the template DNA strand (3' $\\to$ 5') to synthesize mRNA (5' $\\to$ 3'). In RNA, Thymine (T) is replaced by Uracil (U).</p><p><strong>2. Translation (Cytoplasm/Ribosomes):</strong> Ribosomes read mRNA codons (groups of 3 bases). tRNA brings the matching amino acid. The start codon is AUG (Methionine). Stop codons are UAA, UAG, UGA.</p></div>` },
            { id: "gen3", title: "III. Mutations", content: `<h3>Genetic Alterations</h3><div class="formula-box"><ul><li><strong>Substitution:</strong> Swapping one base for another (Causes Missense, Nonsense, or Silent mutations).</li><li><strong>Insertion / Deletion:</strong> Adding or removing a base (Causes a Frameshift mutation, changing every downstream codon).</li></ul></div>` }
        ],
        keyFormulas: ["DNA: A-T, C-G | RNA: A-U, C-G", "Mitosis = PMAT. Semi-conservative replication.", "Transcription (Nucleus) -> Translation (Ribosome)"],
        quiz: [
            { id: "genA_q1", question: "DNA replication is described as:", options: ["Conservative", "Dispersive", "Semi-conservative", "Destructive"], correctAnswer: 2, explanation: "Each new DNA molecule consists of one old (template) strand and one newly synthesized strand." },
            { id: "genA_q2", question: "Which enzyme is primarily responsible for Transcription?", options: ["DNA Polymerase", "RNA Polymerase", "Helicase", "Ligase"], correctAnswer: 1, explanation: "RNA Polymerase binds to DNA and synthesizes the messenger RNA (mRNA)." },
            { id: "genA_q3", question: "A mutation that adds a single nucleotide into the DNA sequence causes:", options: ["A silent mutation", "A point substitution", "A frameshift", "No effect"], correctAnswer: 2, explanation: "Insertions and deletions shift the reading frame of the 3-letter codons." }
        ]
    },

    {
        id: "svt-genetics-transmission", title: "Unit 2B: Transmission of Genetic Information (Meiosis & Mendel)", description: "Meiosis, genetic diversity, independent assortment, and human genetics.",
        sections: [
            { id: "trn1", title: "I. Meiosis and Fertilization", content: `<h3>Sexual Reproduction Basics</h3><div class="important-box"><p><strong>Meiosis:</strong> 1 Diploid cell (2n) $\\to$ 4 Haploid gametes (n). Consists of Meiosis I (Reductional: separates homologous chromosomes) and Meiosis II (Equational: separates sister chromatids).</p><p><strong>Fertilization:</strong> Fuses two haploid gametes (n+n) to restore the diploid state (2n) in the zygote.</p></div>` },
            { id: "trn2", title: "II. Genetic Diversity", content: `<h3>Sources of Variation</h3><div class="formula-box"><ul><li><strong>Crossing-over (Prophase I):</strong> Exchange of chromosome segments between homologous pairs (Intra-chromosomal recombination).</li><li><strong>Independent Assortment (Anaphase I):</strong> Random distribution of maternal and paternal chromosomes (Inter-chromosomal recombination).</li><li><strong>Random Fertilization:</strong> Random pairing of a vast variety of sperm and egg cells.</li></ul></div>` },
            { id: "trn3", title: "III. Mendelian Genetics (Diploids)", content: `<h3>Monohybrid and Dihybrid Crosses</h3><p>Mendel's laws deal with the inheritance of alleles.</p><div class="important-box"><ul><li><strong>Monohybridism:</strong> F2 phenotypic ratio of 3:1 (Complete dominance) or 1:2:1 (Codominance). In lethal alleles, it's 2:1.</li><li><strong>Dihybridism (Independent):</strong> F2 phenotypic ratio is 9:3:3:1.</li><li><strong>Dihybridism (Linked genes):</strong> A test-cross yields a high percentage of parental phenotypes and a low percentage of recombinants (due to crossing-over).</li></ul></div>` },
            { id: "trn4", title: "IV. Human Genetics & Populations", content: `<h3>Pedigrees and Hardy-Weinberg</h3><p>Tracing diseases in human families (autosomal vs sex-linked, dominant vs recessive).</p><div class="formula-box"><p>Hardy-Weinberg Principle for a stable population: $p^2 + 2pq + q^2 = 1$ and $p + q = 1$.</p></div>` }
        ],
        keyFormulas: ["Meiosis: 2n -> 4n (Reductional + Equational)", "Independent Assortment = 9:3:3:1 ratio", "Hardy-Weinberg: p² + 2pq + q² = 1"],
        quiz: [
            { id: "trn_q1", question: "During which phase of Meiosis does crossing-over occur?", options: ["Metaphase I", "Prophase II", "Anaphase I", "Prophase I"], correctAnswer: 3, explanation: "Homologous chromosomes pair up to form bivalents/tetrads and exchange segments in Prophase I." },
            { id: "trn_q2", question: "A test-cross resulting in vastly more parental phenotypes than recombinant phenotypes indicates:", options: ["Independent genes", "Linked genes", "Codominance", "Lethal alleles"], correctAnswer: 1, explanation: "Linked genes are located close together on the same chromosome and tend to be inherited together." },
            { id: "trn_q3", question: "If the frequency of a recessive allele (q) in a population is 0.4, the frequency of homozygous recessive individuals is:", options: ["0.6", "0.4", "0.16", "0.48"], correctAnswer: 2, explanation: "By Hardy-Weinberg, homozygous recessive frequency is q^2 = 0.4^2 = 0.16." }
        ]
    },

    {
        id: "svt-pollution-soils", title: "Unit 3: Organic & Inorganic Matter Use (Pollution)", description: "Pollution types, greenhouse effect, radioactive waste, and environmental preservation.",
        sections: [
            { id: "pol1", title: "I. Solid and Liquid Wastes", content: `<h3>Domestic and Industrial Garbage</h3><div class="important-box"><p><strong>Landfills:</strong> Creating 'leachate' (toxic liquid) which contaminates groundwater. Needs geomembranes.</p><p><strong>Incineration:</strong> Burning waste to produce energy, but creates toxic 'dioxins' and greenhouse gases.</p><p><strong>Composting & Recycling:</strong> Sustainable transformation of organic matter into fertilizer (humus/compost) and reusing materials.</p></div>` },
            { id: "pol2", title: "II. Air and Water Pollution", content: `<h3>Major Impacts</h3><div class="formula-box"><ul><li><strong>Greenhouse Effect:</strong> Increased CO$_2$, CH$_4$, CFCs trapping heat $\\to$ Global Warming.</li><li><strong>Ozone Depletion:</strong> CFCs destroying the O$_3$ layer, allowing harmful UV radiation.</li><li><strong>Acid Rain:</strong> SO$_2$ and NO$_x$ from factories combining with water forming H$_2$SO$_4$.</li><li><strong>Eutrophication:</strong> Excess nitrates and phosphates (fertilizers) causing algal blooms, depleting oxygen in lakes and killing fish.</li></ul></div>` },
            { id: "pol3", title: "III. Nuclear Waste", content: `<h3>Radioactivity</h3><p>Energy from nuclear fission (Uranium). The waste remains radioactive for thousands of years. It is classified by its activity level (High, Medium, Low) and half-life (Short, Long). Proper deep geological disposal is required to prevent contamination.</p>` }
        ],
        keyFormulas: ["Eutrophication = Runoff -> Algae -> No Oxygen -> Death", "Greenhouse Gases: CO2, CH4, CFC, N2O"],
        quiz: [
            { id: "pol_q1", question: "The process where excess fertilizers cause uncontrolled algal growth in lakes, ultimately killing fish due to oxygen depletion, is called:", options: ["Acidification", "Eutrophication", "Desertification", "Salinization"], correctAnswer: 1, explanation: "Eutrophication is the over-enrichment of water bodies with nutrients." },
            { id: "pol_q2", question: "Which gas is primarily responsible for the depletion of the ozone layer?", options: ["Carbon dioxide (CO2)", "Methane (CH4)", "Chlorofluorocarbons (CFCs)", "Oxygen (O2)"], correctAnswer: 2, explanation: "CFCs contain chlorine, which catalytically destroys ozone molecules in the stratosphere." },
            { id: "pol_q3", question: "Toxic liquid that drains from a landfill is known as:", options: ["Compost", "Leachate", "Slag", "Biogas"], correctAnswer: 1, explanation: "Leachate forms when rainwater filters through degrading solid waste, picking up toxins." }
        ]
    },

    {
        id: "svt-plate-tectonics", title: "Unit 4: Geological Phenomena (Mountain Formation)", description: "Plate tectonics, mountain classification, metamorphism, and granitization.",
        sections: [
            { id: "geo1", title: "I. Plate Boundaries & Subduction", content: `<h3>Types of Margins</h3><div class="important-box"><p><strong>Constructive (Divergent):</strong> Mid-ocean ridges where new crust forms.</p><p><strong>Destructive (Convergent):</strong> Subduction zones where dense oceanic lithosphere sinks under lighter continental lithosphere.</p><p>Subduction is marked by deep oceanic trenches, Wadati-Benioff earthquake zones, thermal anomalies, and explosive andesitic volcanism.</p></div>` },
            { id: "geo2", title: "II. Mountain Chains", content: `<h3>Classification</h3><div class="formula-box"><ul><li><strong>Subduction Mountains:</strong> Formed at continental margins (e.g., The Andes). Driven by subduction forces.</li><li><strong>Obduction Mountains:</strong> Formed when oceanic crust is pushed <i>over</i> a continent instead of sinking (Ophiolites are found). e.g., Oman.</li><li><strong>Collision Mountains:</strong> Formed when an ocean completely closes and two continents crash (e.g., The Himalayas, The Alps). Featuring intense folding, faults, and nappes (thrust sheets).</li></ul></div>` },
            { id: "geo3", title: "III. Metamorphism and Granitization", content: `<h3>Rock Transformations</h3><p><strong>Metamorphism:</strong> Solid-state change of rocks due to increased Pressure (P) and Temperature (T). E.g., Clay $\\to$ Schist $\\to$ Micaschist $\\to$ Gneiss.</p><div class="important-box"><ul><li><strong>Dynamic:</strong> High Pressure (Subduction zones, forming Blueschist/Eclogite).</li><li><strong>Thermal:</strong> High Temperature (Contact metamorphism near magma).</li><li><strong>Thermodynamic:</strong> High P and T (Collision zones, Regional metamorphism).</li></ul><p>If rocks melt entirely (anatexis), they form anatectic Granite.</p></div>` }
        ],
        keyFormulas: ["Subduction = Andes, Collision = Himalayas, Obduction = Oman", "Metamorphism = Solid state change due to P/T", "Ophiolite = Oceanic crust trapped on land"],
        quiz: [
            { id: "geo_q1", question: "What is the primary indicator of an obduction zone?", options: ["Deep ocean trench", "Ophiolite complexes on a continent", "Expansive deserts", "Rift valleys"], correctAnswer: 1, explanation: "Ophiolites are pieces of oceanic crust abducted/thrust onto a continental plate." },
            { id: "geo_q2", question: "The Himalayas are an example of:", options: ["Subduction mountains", "Collision mountains", "Obduction mountains", "Volcanic islands"], correctAnswer: 1, explanation: "Formed by the collision between the Indian and Eurasian continental plates." },
            { id: "geo_q3", question: "The solid-state transformation of a rock due to changes in pressure and temperature is called:", options: ["Weathering", "Erosion", "Metamorphism", "Magmatism"], correctAnswer: 2, explanation: "Metamorphism rearranges minerals without melting the rock." },
            { id: "geo_q4", question: "Which sequence shows correctly increasing metamorphic grade?", options: ["Gneiss -> Schist -> Clay", "Clay -> Schist -> Gneiss", "Magma -> Gneiss -> Schist", "Schist -> Clay -> Gneiss"], correctAnswer: 1, explanation: "As pressure and temp rise: Clay -> Slate -> Schist -> Gneiss." }
        ]
    }
];
