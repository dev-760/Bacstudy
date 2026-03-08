import { Lesson } from "./types";

export const englishLessons: Lesson[] = [
    // ─── UNIT 1 ──────────────────────────────────────────────────────────────
    {
        id: "eng-youth-potential-challenges",
        title: "Unit 1: Youth – Potential and Challenges",
        description: "Vocabulary, functions (expressing opinions, agreeing/disagreeing), gerund or infinitive, reading comprehension, and descriptive writing",
        sections: [
            {
                id: "u1-vocab", title: "I. Vocabulary", content: `
<h3>Key Vocabulary – Youth</h3>
<div class="formula-box">
<p><strong>Nouns:</strong> ambition, challenge, opportunity, potential, achievement, aspiration, peer pressure, self-esteem, empowerment, volunteer</p>
<p><strong>Verbs:</strong> overcome, achieve, aspire, pursue, inspire, empower, engage, strive</p>
<p><strong>Adjectives:</strong> determined, talented, motivated, resilient, innovative, creative</p>
</div>`
            },
            {
                id: "u1-functions", title: "II. Functions – Expressing Opinions, Agreeing & Disagreeing", content: `
<h3>Expressing Opinions</h3>
<div class="formula-box">
<p><strong>Giving opinion:</strong> In my opinion… / I think… / I believe… / As far as I'm concerned… / From my point of view…</p>
<p><strong>Agreeing:</strong> I totally agree. / That's exactly my point. / You're absolutely right. / I couldn't agree more.</p>
<p><strong>Disagreeing:</strong> I'm afraid I disagree. / I don't think so. / On the contrary… / I see it differently.</p>
</div>`
            },
            {
                id: "u1-grammar", title: "III. Grammar – Gerund or Infinitive", content: `
<h3>Gerund (verb + -ing)</h3>
<div class="formula-box">
<p>Used after: <em>enjoy, avoid, mind, finish, suggest, consider, keep, admit, deny</em></p>
<p>Example: She enjoys <strong>playing</strong> football.</p>
</div>
<h3>Infinitive (to + verb)</h3>
<div class="formula-box">
<p>Used after: <em>want, hope, decide, refuse, agree, promise, manage, need, plan, expect</em></p>
<p>Example: He decided <strong>to study</strong> abroad.</p>
</div>
<h3>Verbs taking both (meaning changes)</h3>
<div class="formula-box">
<p><em>remember / forget / stop / try</em></p>
<p>I stopped <strong>smoking</strong>. (quit) vs I stopped <strong>to smoke</strong>. (paused in order to)</p>
</div>`
            },
            {
                id: "u1-writing", title: "IV. Writing – Describing a Person", content: `
<h3>Structure</h3>
<div class="formula-box">
<p><strong>Introduction:</strong> Introduce the person (name, relation, first impression).</p>
<p><strong>Physical description:</strong> Appearance, height, build, features.</p>
<p><strong>Personality:</strong> Character traits with supporting examples.</p>
<p><strong>Conclusion:</strong> Why this person inspires/matters to you.</p>
</div>
<h3>Useful Expressions</h3>
<div class="formula-box">
<p>He/She is known for… / What makes him/her special is… / Despite… he/she manages to…</p>
</div>`
            },
        ],
        keyFormulas: [
            "Gerund after: enjoy, avoid, mind, finish",
            "Infinitive after: want, hope, decide, refuse",
            "Opinion: In my opinion… / I believe…",
            "Agree: I couldn't agree more.",
            "Disagree: I'm afraid I disagree."
        ],
        quiz: [
            { id: "u1q1", question: "Which verb is followed by the gerund?", options: ["decide", "enjoy", "want", "hope"], correctAnswer: 1, explanation: "'Enjoy' is always followed by the gerund (-ing form)." },
            { id: "u1q2", question: "He refused ___ the offer.", options: ["accepting", "to accept", "accept", "accepted"], correctAnswer: 1, explanation: "'Refuse' is followed by the infinitive (to + verb)." },
            { id: "u1q3", question: "Which phrase expresses disagreement?", options: ["I couldn't agree more.", "That's my point exactly.", "I'm afraid I disagree.", "You're right."], correctAnswer: 2, explanation: "'I'm afraid I disagree' politely expresses disagreement." },
            { id: "u1q4", question: "She stopped ___ when the teacher entered. (pause)", options: ["to talk", "talking", "talked", "talk"], correctAnswer: 0, explanation: "'Stop + infinitive' means paused in order to do something." },
            { id: "u1q5", question: "What is the correct way to give an opinion?", options: ["I must say…", "In my opinion…", "You should…", "It is said…"], correctAnswer: 1, explanation: "'In my opinion…' is the standard phrase for expressing personal views." },
        ],
        examProblems: [
            {
                id: "u1-ex1", title: "Writing Task – Unit 1",
                problem: `<p>Write a paragraph (80–100 words) describing a young person who inspires you. Include: who they are, their achievements, their personality, and why they inspire you.</p>`,
                solution: `<p><strong>Model answer:</strong> One young person who truly inspires me is Malala Yousafzai. Despite facing great danger, she continued fighting for girls' education. She is determined, courageous, and compassionate. Her resilience in the face of adversity shows that young people have the power to change the world. I admire her because she turned her suffering into strength and became a global symbol of hope.</p>`
            },
        ],
    },

    // ─── UNIT 2 ──────────────────────────────────────────────────────────────
    {
        id: "eng-humour",
        title: "Unit 2: Humour",
        description: "Vocabulary of humour, asking for clarification, modal verbs, reading comprehension, and narrative writing",
        sections: [
            {
                id: "u2-vocab", title: "I. Vocabulary – Humour", content: `
<h3>Key Vocabulary</h3>
<div class="formula-box">
<p><strong>Nouns:</strong> joke, pun, wit, sarcasm, irony, comedy, laughter, stand-up, anecdote, humorist</p>
<p><strong>Verbs:</strong> amuse, entertain, laugh, chuckle, giggle, mock, tease</p>
<p><strong>Adjectives:</strong> funny, hilarious, witty, sarcastic, ironic, absurd, humorous</p>
</div>`
            },
            {
                id: "u2-functions", title: "II. Functions – Lack of Understanding & Asking for Clarification", content: `
<h3>Expressing Lack of Understanding</h3>
<div class="formula-box">
<p>I'm sorry, I don't quite follow. / Could you say that again? / I'm not sure I understand what you mean.</p>
</div>
<h3>Asking for Clarification</h3>
<div class="formula-box">
<p>Could you clarify that? / What exactly do you mean by…? / Are you saying that…? / Could you give an example?</p>
</div>`
            },
            {
                id: "u2-grammar", title: "III. Grammar – Modal Verbs", content: `
<h3>Modal Verbs & Their Uses</h3>
<div class="formula-box">
<p><strong>can / could</strong> → ability, possibility, request</p>
<p><strong>may / might</strong> → possibility, permission</p>
<p><strong>must / have to</strong> → obligation, deduction</p>
<p><strong>should / ought to</strong> → advice, recommendation</p>
<p><strong>would</strong> → hypothetical, polite request</p>
<p><strong>shall</strong> → future (formal), suggestion</p>
<p>Structure: Modal + base form (no <em>to</em>, no <em>-s</em>)</p>
</div>`
            },
            {
                id: "u2-writing", title: "IV. Writing – A Funny Story", content: `
<h3>Structure</h3>
<div class="formula-box">
<p><strong>Setting:</strong> Introduce time, place, and characters.</p>
<p><strong>Rising action:</strong> Describe the funny situation building up.</p>
<p><strong>Climax:</strong> The funniest/most unexpected moment.</p>
<p><strong>Resolution:</strong> How it ended. Reflection or punchline.</p>
</div>
<h3>Useful Connectors</h3>
<div class="formula-box">
<p>Suddenly… / To everyone's surprise… / At that moment… / Eventually… / In the end…</p>
</div>`
            },
        ],
        keyFormulas: [
            "can/could → ability & possibility",
            "must → obligation / logical deduction",
            "should → advice",
            "Modal + base verb (no 'to')",
            "Clarification: Could you clarify that?"
        ],
        quiz: [
            { id: "u2q1", question: "You ___ wear a seatbelt. It's the law.", options: ["should", "might", "must", "could"], correctAnswer: 2, explanation: "'Must' expresses strong obligation." },
            { id: "u2q2", question: "He ___ be at home; his car is outside.", options: ["might", "must", "can", "would"], correctAnswer: 1, explanation: "'Must' is used for logical deduction based on evidence." },
            { id: "u2q3", question: "Which phrase asks for clarification?", options: ["I see.", "What do you mean by that?", "I agree.", "You're right."], correctAnswer: 1, explanation: "'What do you mean by that?' requests further explanation." },
            { id: "u2q4", question: "She ___ speak three languages when she was ten.", options: ["must", "should", "could", "would"], correctAnswer: 2, explanation: "'Could' expresses past ability." },
            { id: "u2q5", question: "You ___ eat more vegetables. (advice)", options: ["must", "should", "will", "might"], correctAnswer: 1, explanation: "'Should' is used for advice and recommendations." },
        ],
        examProblems: [
            {
                id: "u2-ex1", title: "Writing Task – Unit 2",
                problem: `<p>Write a short funny story (80–100 words) about a misunderstanding or an embarrassing situation that ended well.</p>`,
                solution: `<p><strong>Model answer:</strong> Last summer, I decided to surprise my family by cooking dinner. I followed what I thought was a recipe for pasta, but I accidentally added sugar instead of salt. When my family tasted it, their faces were priceless. My little brother burst out laughing and said it was the best dessert pasta he had ever had. In the end, we ordered pizza and laughed all evening about my culinary disaster. It was an unforgettable and hilarious evening.</p>`
            },
        ],
    },

    // ─── UNIT 3 ──────────────────────────────────────────────────────────────
    {
        id: "eng-education",
        title: "Unit 3: Education",
        description: "Vocabulary of education, expressing purpose, past perfect tense, reading comprehension, and report writing",
        sections: [
            {
                id: "u3-vocab", title: "I. Vocabulary – Education", content: `
<h3>Key Vocabulary</h3>
<div class="formula-box">
<p><strong>Nouns:</strong> literacy, curriculum, scholarship, dropout, tuition, pedagogy, enrollment, illiteracy, syllabus, institution</p>
<p><strong>Verbs:</strong> enroll, graduate, dropout, tutor, educate, train, assess, achieve</p>
<p><strong>Adjectives:</strong> educated, literate, illiterate, compulsory, optional, vocational</p>
</div>`
            },
            {
                id: "u3-functions", title: "II. Functions – Expressing Purpose", content: `
<h3>Purpose Expressions</h3>
<div class="formula-box">
<p><strong>To / In order to / So as to</strong> + infinitive → She studied hard <strong>to pass</strong> her exams.</p>
<p><strong>So that / In order that</strong> + clause → He worked extra hours <strong>so that</strong> he could save money.</p>
<p><strong>For</strong> + noun → They built a library <strong>for</strong> students.</p>
<p><strong>For + gerund</strong> → This tool is used <strong>for measuring</strong> temperature.</p>
</div>`
            },
            {
                id: "u3-grammar", title: "III. Grammar – Past Perfect", content: `
<h3>Form</h3>
<div class="formula-box">
<p>Subject + <strong>had</strong> + past participle</p>
<p>Positive: She <strong>had finished</strong> her homework before dinner.</p>
<p>Negative: He <strong>hadn't arrived</strong> when we left.</p>
<p>Question: <strong>Had</strong> they <strong>met</strong> before?</p>
</div>
<h3>Use</h3>
<div class="formula-box">
<p>Describes an action completed <em>before</em> another past action.</p>
<p>Key words: <em>before, after, already, by the time, when, as soon as</em></p>
<p>By the time she arrived, the show <strong>had already started</strong>.</p>
</div>`
            },
            {
                id: "u3-writing", title: "IV. Writing – A Report", content: `
<h3>Structure</h3>
<div class="formula-box">
<p><strong>Title / Heading:</strong> Report on [topic]</p>
<p><strong>Introduction:</strong> Purpose and scope of the report.</p>
<p><strong>Findings:</strong> Data, observations, key points (use sub-headings).</p>
<p><strong>Conclusion & Recommendations:</strong> Summary and suggestions.</p>
</div>
<h3>Register</h3>
<div class="formula-box">
<p>Formal and impersonal. Use passive voice. Avoid contractions.</p>
</div>`
            },
        ],
        keyFormulas: [
            "Past Perfect: had + past participle",
            "Purpose: to / in order to / so that",
            "By the time…, …had already…",
            "Report: formal, structured, impersonal"
        ],
        quiz: [
            { id: "u3q1", question: "By the time we arrived, the class ___ already ___.", options: ["has / started", "had / started", "was / starting", "did / start"], correctAnswer: 1, explanation: "Past Perfect: had + past participle, used before another past event." },
            { id: "u3q2", question: "She studied hard ___ pass her exam.", options: ["so that", "for", "in order to", "because"], correctAnswer: 2, explanation: "'In order to' + infinitive expresses purpose." },
            { id: "u3q3", question: "He left early ___ he could catch the train.", options: ["in order to", "so that", "to", "for"], correctAnswer: 1, explanation: "'So that' + clause expresses purpose." },
            { id: "u3q4", question: "A report should be written in ___ style.", options: ["informal", "conversational", "formal", "poetic"], correctAnswer: 2, explanation: "Reports use formal, impersonal language." },
            { id: "u3q5", question: "Which word signals past perfect?", options: ["yesterday", "tomorrow", "by the time", "now"], correctAnswer: 2, explanation: "'By the time' is a common trigger for past perfect." },
        ],
        examProblems: [
            {
                id: "u3-ex1", title: "Writing Task – Unit 3",
                problem: `<p>Write a short report (80–100 words) on the problem of school dropout in your country. Include: causes, effects, and recommendations.</p>`,
                solution: `<p><strong>Model answer:</strong><br/><strong>Report on School Dropout in Morocco</strong><br/>This report examines the issue of school dropout among secondary students.<br/><strong>Findings:</strong> Many students leave school due to poverty, long distances to school, and lack of motivation. This leads to unemployment and social exclusion.<br/><strong>Recommendations:</strong> The government should provide financial aid, build more schools in rural areas, and raise awareness about the importance of education. Teachers should also adopt more engaging teaching methods to keep students motivated.</p>`
            },
        ],
    },

    // ─── UNIT 4 ──────────────────────────────────────────────────────────────
    {
        id: "eng-sustainable-development",
        title: "Unit 4: Sustainable Development",
        description: "Environmental vocabulary, cause and effect, future simple/perfect tenses, reading comprehension, and formal letter writing",
        sections: [
            {
                id: "u4-vocab", title: "I. Vocabulary – Sustainable Development", content: `
<h3>Key Vocabulary</h3>
<div class="formula-box">
<p><strong>Nouns:</strong> environment, pollution, deforestation, ecosystem, renewable energy, carbon footprint, biodiversity, climate change, sustainability, conservation</p>
<p><strong>Verbs:</strong> recycle, conserve, deplete, pollute, protect, sustain, reduce, raise awareness</p>
<p><strong>Adjectives:</strong> renewable, non-renewable, sustainable, eco-friendly, toxic, endangered</p>
</div>`
            },
            {
                id: "u4-functions", title: "II. Functions – Expressing Cause and Effect", content: `
<h3>Cause Expressions</h3>
<div class="formula-box">
<p><strong>Because / Since / As / Due to / Owing to / Because of</strong></p>
<p>Deforestation is increasing <strong>because</strong> of illegal logging.</p>
</div>
<h3>Effect Expressions</h3>
<div class="formula-box">
<p><strong>Therefore / As a result / Consequently / Thus / Hence / Lead to / Cause</strong></p>
<p>Pollution has increased; <strong>as a result</strong>, many species are threatened.</p>
</div>`
            },
            {
                id: "u4-grammar", title: "III. Grammar – Future Simple & Future Perfect", content: `
<h3>Future Simple</h3>
<div class="formula-box">
<p>Will + base verb → predictions, decisions, promises</p>
<p>Scientists <strong>will develop</strong> new technologies by 2050.</p>
</div>
<h3>Future Perfect</h3>
<div class="formula-box">
<p>Will + have + past participle → action completed before a future point</p>
<p>By 2030, renewable energy <strong>will have replaced</strong> fossil fuels in many countries.</p>
<p>Key words: <em>by, by the time, before</em></p>
</div>`
            },
            {
                id: "u4-writing", title: "IV. Writing – A Formal Letter", content: `
<h3>Structure</h3>
<div class="formula-box">
<p><strong>Sender's address</strong> (top right) / <strong>Date</strong></p>
<p><strong>Recipient's address</strong> (top left)</p>
<p><strong>Salutation:</strong> Dear Sir/Madam, / Dear Mr./Ms. [Name],</p>
<p><strong>Body:</strong> Purpose → Details → Request/Suggestion</p>
<p><strong>Closing:</strong> Yours faithfully (unknown) / Yours sincerely (known)</p>
</div>`
            },
        ],
        keyFormulas: [
            "Future Simple: will + base verb",
            "Future Perfect: will + have + past participle",
            "Cause: because, due to, owing to",
            "Effect: therefore, as a result, consequently",
            "Formal letter: Yours faithfully / Yours sincerely"
        ],
        quiz: [
            { id: "u4q1", question: "By 2040, scientists ___ a cure for many diseases.", options: ["will find", "will have found", "found", "find"], correctAnswer: 1, explanation: "Future Perfect: action completed before a future point in time." },
            { id: "u4q2", question: "Pollution is rising ___ industrial waste.", options: ["therefore", "as a result", "due to", "consequently"], correctAnswer: 2, explanation: "'Due to' + noun phrase introduces a cause." },
            { id: "u4q3", question: "Close a formal letter to an unknown recipient with:", options: ["Best wishes", "Yours sincerely", "Yours faithfully", "Love"], correctAnswer: 2, explanation: "'Yours faithfully' is used when the recipient is unknown (Dear Sir/Madam)." },
            { id: "u4q4", question: "Forests are being destroyed; ___, many animals are losing their habitats.", options: ["although", "however", "as a result", "despite"], correctAnswer: 2, explanation: "'As a result' introduces an effect." },
            { id: "u4q5", question: "'Will + have + past participle' is the structure for:", options: ["Past Perfect", "Future Simple", "Future Perfect", "Present Perfect"], correctAnswer: 2, explanation: "Future Perfect = will + have + past participle." },
        ],
        examProblems: [
            {
                id: "u4-ex1", title: "Writing Task – Unit 4",
                problem: `<p>Write a formal letter (80–100 words) to the Mayor of your city asking for measures to reduce pollution.</p>`,
                solution: `<p><strong>Model answer:</strong><br/>Dear Sir/Madam,<br/>I am writing to express my deep concern about the increasing levels of pollution in our city. Due to industrial emissions and excessive car use, air quality has deteriorated significantly, leading to serious health problems for residents.<br/>I would like to suggest investing in public transport, planting more trees, and promoting renewable energy. These measures will help protect our environment and improve the quality of life for all citizens.<br/>I hope you will consider these recommendations seriously.<br/>Yours faithfully,<br/>[Your Name]</p>`
            },
        ],
    },

    // ─── UNIT 5 ──────────────────────────────────────────────────────────────
    {
        id: "eng-women-power",
        title: "Unit 5: Women and Power",
        description: "Vocabulary of gender equality, expressing addition and concession, passive voice, reading comprehension, and book/film review",
        sections: [
            {
                id: "u5-vocab", title: "I. Vocabulary – Women and Power", content: `
<h3>Key Vocabulary</h3>
<div class="formula-box">
<p><strong>Nouns:</strong> equality, discrimination, empowerment, feminism, gender gap, stereotype, leadership, suffrage, activist, pioneer</p>
<p><strong>Verbs:</strong> empower, advocate, challenge, overcome, achieve, discriminate, struggle, campaign</p>
<p><strong>Adjectives:</strong> equal, independent, powerful, influential, courageous, determined</p>
</div>`
            },
            {
                id: "u5-functions", title: "II. Functions – Addition & Concession", content: `
<h3>Addition</h3>
<div class="formula-box">
<p><strong>Furthermore / Moreover / In addition / Besides / Also / Not only…but also</strong></p>
<p>She is a great leader. <strong>Moreover</strong>, she is a role model for young women.</p>
</div>
<h3>Concession</h3>
<div class="formula-box">
<p><strong>Although / Even though / Though / Despite / In spite of / However / Nevertheless</strong></p>
<p><strong>Although</strong> she faced many obstacles, she succeeded.</p>
<p><strong>Despite</strong> the challenges, she never gave up.</p>
</div>`
            },
            {
                id: "u5-grammar", title: "III. Grammar – Passive Voice", content: `
<h3>Form</h3>
<div class="formula-box">
<p>Subject + <strong>be (conjugated)</strong> + past participle (+ by + agent)</p>
<p>Active: People elected her. → Passive: <strong>She was elected</strong> (by people).</p>
</div>
<h3>Tense Table</h3>
<div class="formula-box">
<p>Present Simple: is/are + pp</p>
<p>Past Simple: was/were + pp</p>
<p>Future: will be + pp</p>
<p>Present Perfect: has/have been + pp</p>
<p>Modal: can/must/should be + pp</p>
</div>`
            },
            {
                id: "u5-writing", title: "IV. Writing – A Book/Film Review", content: `
<h3>Structure</h3>
<div class="formula-box">
<p><strong>Introduction:</strong> Title, author/director, genre, brief summary.</p>
<p><strong>Body:</strong> Plot (without spoilers), characters, themes, strengths & weaknesses.</p>
<p><strong>Conclusion:</strong> Personal recommendation. Who would enjoy it?</p>
</div>
<h3>Useful Phrases</h3>
<div class="formula-box">
<p>The book/film revolves around… / The storyline is captivating… / I would highly recommend… / It is worth reading/watching…</p>
</div>`
            },
        ],
        keyFormulas: [
            "Passive: be + past participle",
            "Addition: furthermore, moreover, in addition",
            "Concession: although, despite, however",
            "Review: intro → plot → evaluation → recommendation"
        ],
        quiz: [
            { id: "u5q1", question: "The letter ___ yesterday. (write – passive)", options: ["wrote", "was written", "has written", "is writing"], correctAnswer: 1, explanation: "Past passive: was/were + past participle." },
            { id: "u5q2", question: "She succeeded ___ the difficulties. (concession)", options: ["although", "despite", "however", "moreover"], correctAnswer: 1, explanation: "'Despite' + noun/gerund expresses concession." },
            { id: "u5q3", question: "She is talented. ___, she works very hard.", options: ["Despite", "Although", "Moreover", "Because"], correctAnswer: 2, explanation: "'Moreover' adds another positive point (addition)." },
            { id: "u5q4", question: "___ she was tired, she continued working.", options: ["Despite", "Although", "Moreover", "Due to"], correctAnswer: 1, explanation: "'Although' + clause expresses contrast/concession." },
            { id: "u5q5", question: "A book review should end with:", options: ["A summary of every chapter", "A personal recommendation", "The author's biography", "A grammar exercise"], correctAnswer: 1, explanation: "Reviews conclude with the writer's recommendation." },
        ],
        examProblems: [
            {
                id: "u5-ex1", title: "Writing Task – Unit 5",
                problem: `<p>Write a short review (80–100 words) of a book or film about a powerful woman who inspired you.</p>`,
                solution: `<p><strong>Model answer:</strong> I Am Malala, written by Malala Yousafzai, is an inspiring autobiography about a young Pakistani girl who fought for girls' right to education. The book revolves around her extraordinary courage in the face of Taliban threats. Despite being shot, she survived and became a global advocate for education. Her story is both moving and motivating. The writing is simple yet powerful. I would highly recommend this book to anyone who believes in the power of education and the strength of women.</p>`
            },
        ],
    },

    // ─── UNIT 6 ──────────────────────────────────────────────────────────────
    {
        id: "eng-culture",
        title: "Unit 6: Culture",
        description: "Cultural vocabulary, defining/apologizing/complaining, phrasal verbs, reading comprehension, informal letter writing",
        sections: [
            {
                id: "u6-vocab", title: "I. Vocabulary – Culture", content: `
<h3>Key Vocabulary</h3>
<div class="formula-box">
<p><strong>Nouns:</strong> tradition, heritage, customs, folklore, identity, multiculturalism, diversity, ritual, ceremony, integration</p>
<p><strong>Verbs:</strong> celebrate, preserve, inherit, integrate, adapt, value, respect, blend</p>
<p><strong>Adjectives:</strong> cultural, traditional, diverse, multicultural, ancient, authentic</p>
</div>`
            },
            {
                id: "u6-functions", title: "II. Functions – Defining, Apologizing & Complaining", content: `
<h3>Defining</h3>
<div class="formula-box">
<p>A/An [noun] is a person/thing that… / … which… / … who…</p>
<p>Culture is something <strong>that</strong> reflects people's values and traditions.</p>
</div>
<h3>Apologizing</h3>
<div class="formula-box">
<p>I'm terribly sorry. / Please accept my apologies. / I apologize for… / It was my fault.</p>
</div>
<h3>Complaining</h3>
<div class="formula-box">
<p>I'm writing to complain about… / I'm not satisfied with… / I would like to draw your attention to…</p>
</div>`
            },
            {
                id: "u6-grammar", title: "III. Grammar – Phrasal Verbs", content: `
<h3>What are phrasal verbs?</h3>
<div class="formula-box">
<p>Verb + particle (preposition/adverb) with a new idiomatic meaning.</p>
<p><strong>give up</strong> → quit / <strong>look after</strong> → take care of / <strong>carry out</strong> → conduct, perform</p>
<p><strong>bring up</strong> → raise (children) / mention / <strong>put off</strong> → postpone</p>
<p><strong>find out</strong> → discover / <strong>take part in</strong> → participate</p>
</div>
<h3>Types</h3>
<div class="formula-box">
<p><strong>Separable:</strong> Look it up. / Look up the word. (object can split verb+particle)</p>
<p><strong>Inseparable:</strong> She looks after her parents. (cannot be split)</p>
</div>`
            },
            {
                id: "u6-writing", title: "IV. Writing – An Informal Letter", content: `
<h3>Structure</h3>
<div class="formula-box">
<p><strong>Address & Date</strong> (top right)</p>
<p><strong>Greeting:</strong> Dear [Name],</p>
<p><strong>Body:</strong> Friendly, personal tone. Use contractions. Share news, ask questions.</p>
<p><strong>Closing:</strong> Best wishes, / Yours, / Take care, / Love,</p>
</div>`
            },
        ],
        keyFormulas: [
            "Phrasal verb = verb + particle (new meaning)",
            "give up = quit / look after = care for",
            "Apology: I apologize for… / Please accept my apologies.",
            "Informal letter: Dear [Name] → Yours / Best wishes"
        ],
        quiz: [
            { id: "u6q1", question: "She ___ smoking last year. (quit)", options: ["put off", "gave up", "found out", "brought up"], correctAnswer: 1, explanation: "'Give up' means to quit or stop doing something." },
            { id: "u6q2", question: "He ___ the children while their parents were away.", options: ["carried out", "looked after", "put off", "gave up"], correctAnswer: 1, explanation: "'Look after' means to take care of someone." },
            { id: "u6q3", question: "An informal letter ends with:", options: ["Yours faithfully", "Best regards (formal)", "Best wishes / Love", "To whom it may concern"], correctAnswer: 2, explanation: "Informal letters use casual closings like 'Best wishes' or 'Love'." },
            { id: "u6q4", question: "I ___ an interesting fact about Morocco. (discover)", options: ["found out", "put off", "gave up", "brought up"], correctAnswer: 0, explanation: "'Find out' means to discover or learn new information." },
            { id: "u6q5", question: "Which phrase is used for complaining?", options: ["I'm writing to thank you for…", "I'm not satisfied with…", "I would like to invite you to…", "I am delighted to inform you…"], correctAnswer: 1, explanation: "'I'm not satisfied with…' is a standard complaining expression." },
        ],
        examProblems: [
            {
                id: "u6-ex1", title: "Writing Task – Unit 6",
                problem: `<p>Write an informal letter (80–100 words) to a foreign friend telling them about a Moroccan tradition or celebration.</p>`,
                solution: `<p><strong>Model answer:</strong><br/>Dear Tom,<br/>How are you? I hope you're well. I wanted to tell you about Eid Al-Adha, one of the most important celebrations in Morocco. Every family that can afford it sacrifices a sheep to share meat with the poor, relatives, and neighbors. People dress in traditional clothes called djellabas and visit family. The streets are full of life and joy. I think you would love the food and the warm atmosphere. You should come and visit us during Eid one day!<br/>Best wishes,<br/>[Your Name]</p>`
            },
        ],
    },

    // ─── UNIT 7 ──────────────────────────────────────────────────────────────
    {
        id: "eng-citizenship",
        title: "Unit 7: Citizenship",
        description: "Citizenship vocabulary, asking for and giving advice, reported speech, reading comprehension, writing about causes/effects/solutions",
        sections: [
            {
                id: "u7-vocab", title: "I. Vocabulary – Citizenship", content: `
<h3>Key Vocabulary</h3>
<div class="formula-box">
<p><strong>Nouns:</strong> rights, duties, responsibility, democracy, justice, freedom, participation, volunteering, community, civic, tolerance</p>
<p><strong>Verbs:</strong> vote, participate, contribute, respect, obey, protest, campaign, advocate</p>
<p><strong>Adjectives:</strong> active, responsible, democratic, civic, aware, engaged</p>
</div>`
            },
            {
                id: "u7-functions", title: "II. Functions – Asking for & Giving Advice", content: `
<h3>Asking for Advice</h3>
<div class="formula-box">
<p>What should I do? / Could you advise me? / What would you recommend? / What do you think I should do?</p>
</div>
<h3>Giving Advice</h3>
<div class="formula-box">
<p>You should… / You ought to… / I suggest (that) you… / Why don't you…? / If I were you, I would… / You'd better…</p>
</div>`
            },
            {
                id: "u7-grammar", title: "III. Grammar – Reported Speech", content: `
<h3>Statements</h3>
<div class="formula-box">
<p>Direct: She said, "I am happy." → Reported: She said (that) she <strong>was</strong> happy.</p>
<p>Tense backshift: am→was / is→was / will→would / can→could / have→had</p>
</div>
<h3>Questions</h3>
<div class="formula-box">
<p>Direct: "Where do you live?" → Reported: He asked me <strong>where I lived</strong>. (no question mark, no inversion)</p>
</div>
<h3>Commands</h3>
<div class="formula-box">
<p>Direct: "Open the door!" → Reported: She told him <strong>to open</strong> the door.</p>
</div>
<h3>Time & Place Shifts</h3>
<div class="formula-box">
<p>now→then / today→that day / tomorrow→the next day / here→there / this→that</p>
</div>`
            },
            {
                id: "u7-writing", title: "IV. Writing – Causes, Effects & Solutions", content: `
<h3>Structure</h3>
<div class="formula-box">
<p><strong>Introduction:</strong> Define the problem.</p>
<p><strong>Causes:</strong> Why does it happen? (Firstly… / One major cause is…)</p>
<p><strong>Effects:</strong> What are the consequences? (As a result… / This leads to…)</p>
<p><strong>Solutions:</strong> What can be done? (The government should… / People ought to…)</p>
<p><strong>Conclusion:</strong> Call to action or summary.</p>
</div>`
            },
        ],
        keyFormulas: [
            "Reported speech: tense backshift",
            "He said he was → was (not is)",
            "Advice: You should / If I were you…",
            "Reported question: no inversion, no ?",
            "Causes→Effects→Solutions paragraph structure"
        ],
        quiz: [
            { id: "u7q1", question: "She said, 'I will come.' → She said she ___ come.", options: ["will", "would", "can", "shall"], correctAnswer: 1, explanation: "'Will' becomes 'would' in reported speech (backshift)." },
            { id: "u7q2", question: "He asked, 'Where do you live?' → He asked me where I ___.", options: ["do live", "lived", "live", "am living"], correctAnswer: 1, explanation: "Reported questions use statement word order + backshift." },
            { id: "u7q3", question: "Which phrase gives advice?", options: ["I wonder if…", "If I were you, I would…", "I'm afraid that…", "As a result…"], correctAnswer: 1, explanation: "'If I were you, I would…' is a classic advice structure." },
            { id: "u7q4", question: "'Today' in direct speech becomes ___ in reported speech.", options: ["now", "yesterday", "that day", "this day"], correctAnswer: 2, explanation: "Time expressions shift: 'today' → 'that day'." },
            { id: "u7q5", question: "She told him, 'Study harder.' → She told him ___ harder.", options: ["studying", "to study", "study", "studied"], correctAnswer: 1, explanation: "Commands in reported speech use 'to + infinitive'." },
        ],
        examProblems: [
            {
                id: "u7-ex1", title: "Writing Task – Unit 7",
                problem: `<p>Write a paragraph (80–100 words) about the causes, effects, and solutions of youth unemployment in Morocco.</p>`,
                solution: `<p><strong>Model answer:</strong> Youth unemployment is one of the most pressing challenges in Morocco today. One major cause is the mismatch between the education system and the job market. Furthermore, limited economic growth in rural areas forces young people to migrate to cities. As a result, many graduates remain without work for years, leading to poverty and social frustration. To solve this problem, the government should invest in vocational training and support entrepreneurship. Moreover, companies ought to create more internship opportunities for fresh graduates.</p>`
            },
        ],
    },

    // ─── UNIT 8 ──────────────────────────────────────────────────────────────
    {
        id: "eng-international-organizations",
        title: "Unit 8: International Organizations",
        description: "Vocabulary of international organizations, responding to good/bad news, prefixes and suffixes, reading comprehension, formal email writing",
        sections: [
            {
                id: "u8-vocab", title: "I. Vocabulary – International Organizations", content: `
<h3>Key Vocabulary</h3>
<div class="formula-box">
<p><strong>Nouns:</strong> organization, aid, humanitarian, mission, peacekeeping, sanction, treaty, diplomat, refugee, solidarity</p>
<p><strong>Verbs:</strong> cooperate, intervene, negotiate, fund, support, promote, enforce, protect</p>
<p><strong>Adjectives:</strong> global, international, multilateral, humanitarian, diplomatic</p>
<p><strong>Examples:</strong> UN, UNESCO, UNICEF, WHO, NGO, Red Cross</p>
</div>`
            },
            {
                id: "u8-functions", title: "II. Functions – Responding to Good/Bad News", content: `
<h3>Responding to Good News</h3>
<div class="formula-box">
<p>That's wonderful! / Congratulations! / I'm so happy for you! / How exciting! / That's great news!</p>
</div>
<h3>Responding to Bad News</h3>
<div class="formula-box">
<p>I'm so sorry to hear that. / That's terrible. / What a shame. / I'm really sorry. / If there's anything I can do…</p>
</div>`
            },
            {
                id: "u8-grammar", title: "III. Grammar – Prefixes and Suffixes", content: `
<h3>Common Prefixes</h3>
<div class="formula-box">
<p><strong>un-</strong> (not): unhappy, unfair / <strong>dis-</strong> (not/opposite): disagree, dishonest</p>
<p><strong>mis-</strong> (wrongly): misunderstand / <strong>re-</strong> (again): rebuild, recycle</p>
<p><strong>inter-</strong> (between): international / <strong>over-</strong> (too much): overwork</p>
</div>
<h3>Common Suffixes</h3>
<div class="formula-box">
<p><strong>-tion/-sion</strong> (noun): education, pollution / <strong>-ment</strong> (noun): development</p>
<p><strong>-ful</strong> (adjective): hopeful / <strong>-less</strong> (adjective): hopeless</p>
<p><strong>-ly</strong> (adverb): quickly / <strong>-er/-or</strong> (person): teacher, actor</p>
<p><strong>-ize</strong> (verb): modernize, globalize</p>
</div>`
            },
            {
                id: "u8-writing", title: "IV. Writing – A Formal Email", content: `
<h3>Structure</h3>
<div class="formula-box">
<p><strong>Subject line:</strong> Brief and clear.</p>
<p><strong>Salutation:</strong> Dear Sir/Madam, / Dear Mr./Ms. [Name],</p>
<p><strong>Body:</strong> Purpose → Information/Request → Action expected</p>
<p><strong>Closing:</strong> I look forward to hearing from you. / Yours faithfully/sincerely,</p>
</div>`
            },
        ],
        keyFormulas: [
            "Prefix un- = not / re- = again / inter- = between",
            "Suffix -tion = noun / -ful = adjective / -ly = adverb",
            "Good news: That's wonderful! / Congratulations!",
            "Bad news: I'm so sorry to hear that.",
            "Formal email: subject + salutation + body + closing"
        ],
        quiz: [
            { id: "u8q1", question: "The prefix 're-' means:", options: ["not", "again", "between", "wrongly"], correctAnswer: 1, explanation: "'Re-' means 'again': rebuild = build again." },
            { id: "u8q2", question: "The suffix '-less' means:", options: ["full of", "without", "able to", "the act of"], correctAnswer: 1, explanation: "'-less' means without: hopeless = without hope." },
            { id: "u8q3", question: "UNICEF is an organization that focuses on:", options: ["Trade", "Children's rights", "Military operations", "Nuclear energy"], correctAnswer: 1, explanation: "UNICEF is the United Nations International Children's Emergency Fund." },
            { id: "u8q4", question: "Responding to bad news, you say:", options: ["Congratulations!", "How exciting!", "I'm so sorry to hear that.", "That's great news!"], correctAnswer: 2, explanation: "'I'm so sorry to hear that' is the appropriate response to bad news." },
            { id: "u8q5", question: "The word 'international' uses the prefix:", options: ["un-", "inter-", "mis-", "re-"], correctAnswer: 1, explanation: "'Inter-' means between: international = between nations." },
        ],
        examProblems: [
            {
                id: "u8-ex1", title: "Writing Task – Unit 8",
                problem: `<p>Write a formal email (80–100 words) to a humanitarian organization asking to volunteer for their next campaign.</p>`,
                solution: `<p><strong>Model answer:</strong><br/>Subject: Volunteering Application<br/>Dear Sir/Madam,<br/>I am writing to express my interest in volunteering for your upcoming humanitarian campaign. I am a 20-year-old student with a strong commitment to helping others. I have previously participated in community projects related to literacy and environmental awareness.<br/>I believe my communication skills and enthusiasm would make a positive contribution to your mission. I would be grateful for the opportunity to join your team.<br/>I look forward to hearing from you.<br/>Yours faithfully,<br/>[Your Name]</p>`
            },
        ],
    },

    // ─── UNIT 9 ──────────────────────────────────────────────────────────────
    {
        id: "eng-science-technology",
        title: "Unit 9: Science and Technology",
        description: "Technology vocabulary, expressing certainty and uncertainty, conditionals and wish, reading comprehension, advantages and disadvantages essay",
        sections: [
            {
                id: "u9-vocab", title: "I. Vocabulary – Science & Technology", content: `
<h3>Key Vocabulary</h3>
<div class="formula-box">
<p><strong>Nouns:</strong> innovation, invention, artificial intelligence, digital, cybersecurity, biotechnology, automation, gadget, network, breakthrough</p>
<p><strong>Verbs:</strong> invent, develop, upgrade, hack, innovate, connect, download, install, launch</p>
<p><strong>Adjectives:</strong> digital, wireless, automated, sophisticated, cutting-edge, high-tech</p>
</div>`
            },
            {
                id: "u9-functions", title: "II. Functions – Expressing Certainty & Uncertainty", content: `
<h3>Certainty</h3>
<div class="formula-box">
<p>I'm absolutely certain that… / I'm sure that… / There's no doubt that… / Definitely / Certainly</p>
</div>
<h3>Uncertainty</h3>
<div class="formula-box">
<p>I'm not sure whether… / I doubt that… / It's possible that… / Perhaps / Maybe / I think… but I'm not certain.</p>
</div>`
            },
            {
                id: "u9-grammar", title: "III. Grammar – Conditionals & Wish", content: `
<h3>Conditional Types</h3>
<div class="formula-box">
<p><strong>Type 0</strong> (always true): If + present, present → If you heat water, it boils.</p>
<p><strong>Type 1</strong> (real/likely): If + present, will → If I study, I will pass.</p>
<p><strong>Type 2</strong> (unreal/imaginary): If + past simple, would → If I had money, I would travel.</p>
<p><strong>Type 3</strong> (past unreal): If + past perfect, would have + pp → If I had studied, I would have passed.</p>
</div>
<h3>Wish</h3>
<div class="formula-box">
<p><strong>Present wish</strong> (regret): I wish I <strong>had</strong> a car. (past simple)</p>
<p><strong>Past wish</strong> (regret): I wish I <strong>had studied</strong> harder. (past perfect)</p>
<p><strong>Future wish</strong> (irritation): I wish he <strong>would stop</strong> smoking.</p>
</div>`
            },
            {
                id: "u9-writing", title: "IV. Writing – Advantages & Disadvantages", content: `
<h3>Structure</h3>
<div class="formula-box">
<p><strong>Introduction:</strong> Introduce the topic/technology.</p>
<p><strong>Advantages:</strong> On the one hand… / One major benefit is…</p>
<p><strong>Disadvantages:</strong> On the other hand… / However, one drawback is…</p>
<p><strong>Conclusion:</strong> Overall… / In conclusion, despite its drawbacks…</p>
</div>`
            },
        ],
        keyFormulas: [
            "Type 1: If + present → will",
            "Type 2: If + past simple → would",
            "Type 3: If + past perfect → would have + pp",
            "Wish + past simple (present regret)",
            "Wish + past perfect (past regret)"
        ],
        quiz: [
            { id: "u9q1", question: "If I ___ harder, I would have passed. (Type 3)", options: ["study", "studied", "had studied", "have studied"], correctAnswer: 2, explanation: "Type 3 conditional uses 'had + past participle' in the if-clause." },
            { id: "u9q2", question: "I wish I ___ a better phone. (present regret)", options: ["have", "had", "will have", "had had"], correctAnswer: 1, explanation: "'Wish' + past simple expresses a present wish/regret." },
            { id: "u9q3", question: "If you heat ice, it ___ (always true – Type 0).", options: ["melts", "would melt", "will melt", "melted"], correctAnswer: 0, explanation: "Type 0 uses present simple in both clauses for universal truths." },
            { id: "u9q4", question: "Which expresses uncertainty?", options: ["I'm absolutely certain.", "Definitely!", "It's possible that…", "There's no doubt."], correctAnswer: 2, explanation: "'It's possible that…' expresses uncertainty." },
            { id: "u9q5", question: "If I had enough money, I ___ travel the world. (Type 2)", options: ["will", "would", "could have", "should"], correctAnswer: 1, explanation: "Type 2: If + past simple → would + base verb." },
        ],
        examProblems: [
            {
                id: "u9-ex1", title: "Writing Task – Unit 9",
                problem: `<p>Write a paragraph (80–100 words) about the advantages and disadvantages of the mobile phone.</p>`,
                solution: `<p><strong>Model answer:</strong> The mobile phone is undoubtedly one of the most transformative inventions of the modern era. On the one hand, it allows people to communicate instantly, access information, and use helpful applications. Furthermore, it has made the world more connected than ever. On the other hand, excessive use of mobile phones can lead to addiction, poor eyesight, and social isolation. Moreover, privacy and cybersecurity risks are growing concerns. In conclusion, while mobile phones offer tremendous benefits, they should be used responsibly to avoid their negative effects.</p>`
            },
        ],
    },

    // ─── UNIT 10 ─────────────────────────────────────────────────────────────
    {
        id: "eng-brain-drain",
        title: "Unit 10: Brain Drain",
        description: "Vocabulary of brain drain and immigration, expressing regret, relative pronouns, reading comprehension, and argumentative essay writing",
        sections: [
            {
                id: "u10-vocab", title: "I. Vocabulary – Brain Drain", content: `
<h3>Key Vocabulary</h3>
<div class="formula-box">
<p><strong>Nouns:</strong> emigration, immigration, migration, exile, expatriate, talent, skilled worker, diaspora, remittance, host country</p>
<p><strong>Verbs:</strong> emigrate, immigrate, migrate, flee, settle, integrate, return, contribute</p>
<p><strong>Adjectives:</strong> skilled, qualified, talented, unskilled, legal, illegal, economic</p>
</div>`
            },
            {
                id: "u10-functions", title: "II. Functions – Expressing Regret", content: `
<h3>Expressing Regret</h3>
<div class="formula-box">
<p>I regret… / I'm sorry that… / I wish I had… / If only I had… / It's a pity that… / What a shame…</p>
<p>I wish I <strong>had stayed</strong> in my country. (past regret)</p>
<p>If only I <strong>had studied</strong> more. (past regret)</p>
</div>`
            },
            {
                id: "u10-grammar", title: "III. Grammar – Relative Pronouns", content: `
<h3>Defining Relative Clauses</h3>
<div class="formula-box">
<p><strong>who</strong> → people: The doctor <strong>who</strong> treated me was kind.</p>
<p><strong>which</strong> → things: The book <strong>which</strong> I read was interesting.</p>
<p><strong>that</strong> → people or things (defining only): The car <strong>that</strong> I bought is red.</p>
<p><strong>whose</strong> → possession: The student <strong>whose</strong> work was best won a prize.</p>
<p><strong>where</strong> → place: The city <strong>where</strong> I was born is beautiful.</p>
<p><strong>when</strong> → time: I remember the day <strong>when</strong> we met.</p>
</div>
<h3>Non-defining Relative Clauses</h3>
<div class="formula-box">
<p>Add extra info → use commas, no 'that'</p>
<p>My brother, <strong>who</strong> lives in Canada, is an engineer.</p>
</div>`
            },
            {
                id: "u10-writing", title: "IV. Writing – Argumentative Essay (For or Against)", content: `
<h3>Structure</h3>
<div class="formula-box">
<p><strong>Introduction:</strong> State the issue and your position (or present both sides).</p>
<p><strong>Arguments For:</strong> Firstly… / One argument in favour is…</p>
<p><strong>Arguments Against:</strong> However… / On the other hand…</p>
<p><strong>Conclusion:</strong> In conclusion, I believe… / To sum up, although… I think…</p>
</div>
<h3>Key Phrases</h3>
<div class="formula-box">
<p>Proponents argue that… / Critics claim that… / It is widely believed that… / There is no denying that…</p>
</div>`
            },
        ],
        keyFormulas: [
            "who → people / which → things / that → both",
            "whose → possession / where → place / when → time",
            "Regret: I wish I had… / If only I had…",
            "Argumentative: for → against → conclusion",
            "Non-defining clause uses commas, never 'that'"
        ],
        quiz: [
            { id: "u10q1", question: "The scientist ___ discovered penicillin was Alexander Fleming.", options: ["which", "whose", "who", "where"], correctAnswer: 2, explanation: "'Who' is used for people in relative clauses." },
            { id: "u10q2", question: "Morocco, ___ economy is growing, attracts many investors.", options: ["who", "where", "that", "whose"], correctAnswer: 3, explanation: "'Whose' shows possession (Morocco's economy)." },
            { id: "u10q3", question: "I wish I ___ left my country. (past regret)", options: ["didn't", "hadn't", "haven't", "wouldn't"], correctAnswer: 1, explanation: "'Wish + past perfect' expresses regret about a past action." },
            { id: "u10q4", question: "Paris is the city ___ the Eiffel Tower is located.", options: ["who", "whose", "where", "which"], correctAnswer: 2, explanation: "'Where' is used for places in relative clauses." },
            { id: "u10q5", question: "In a 'for and against' essay, the conclusion should:", options: ["List all the arguments again", "State a personal opinion or balanced summary", "Introduce a new argument", "Give a definition"], correctAnswer: 1, explanation: "The conclusion summarizes and/or gives the writer's final balanced view." },
        ],
        examProblems: [
            {
                id: "u10-ex1", title: "Writing Task – Unit 10",
                problem: `<p>Write an argumentative essay (80–100 words) on the topic: "Brain drain is harmful to developing countries." Give arguments for and against, then state your opinion.</p>`,
                solution: `<p><strong>Model answer:</strong> Brain drain, the emigration of skilled professionals to wealthier countries, is a major concern for developing nations like Morocco. On one hand, it deprives these countries of their most talented citizens, leading to a shortage of doctors, engineers, and teachers. This slows development and worsens inequality. On the other hand, emigrants often send remittances home and can transfer knowledge when they return. In conclusion, while brain drain has some advantages, I believe governments must create better opportunities at home to retain their skilled workforce.</p>`
            },
        ],
    },
];
