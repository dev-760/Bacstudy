import { Lesson } from "./types";

export const englishLessonsNew: Lesson[] = [
    {
        id: "eng-education-types",
        title: "Formal, Informal and Non-Formal Education",
        description: "Comprehensive guide to educational systems, related vocabulary, and grammar (Gerunds & Infinitives).",
        sections: [
            {
                id: "edu1",
                title: "I. Key Vocabulary",
                content: `
<h3>Educational Concepts</h3>
<div class="formula-box">
  <ul>
    <li><strong>Formal Education:</strong> Structured education system provided by the state (e.g., primary school, university). It follows a syllabus and leads to certification.</li>
    <li><strong>Informal Education:</strong> Unstructured learning through daily life, family, and media. There are no certificates.</li>
    <li><strong>Non-formal Education:</strong> Organized educational activities outside the formal system (e.g., adult literacy classes, workshops, vocational training).</li>
    <li><strong>Vocational training:</strong> Practical training for a specific job or trade.</li>
    <li><strong>Literacy / Illiteracy:</strong> The ability (or inability) to read and write.</li>
    <li><strong>Drop out:</strong> To leave school or university before completing the course.</li>
    <li><strong>Basic education:</strong> Fundamental learning covering reading, writing, and basic math.</li>
  </ul>
</div>
<h3>Collocations</h3>
<ul>
  <li>To <em>attend</em> classes</li>
  <li>To <em>graduate</em> from university</li>
  <li>To <em>acquire</em> knowledge or skills</li>
  <li>To <em>pursue</em> higher education</li>
</ul>`
            },
            {
                id: "edu2",
                title: "II. Grammar: Gerunds and Infinitives",
                content: `
<h3>The Gerund (Verb + -ing)</h3>
<div class="important-box">
  <p>Use the gerund:</p>
  <ul>
    <li>After prepositions (e.g., in, on, at, about, for): <em>She is good <strong>at solving</strong> problems.</em></li>
    <li>As the subject of a sentence: <em><strong>Reading</strong> broadens the mind.</em></li>
    <li>After certain verbs: <em>enjoy, avoid, mind, finish, suggest, risk, practice, deny, admit, consider.</em></li>
  </ul>
  <p>Example: <em>I enjoy <strong>learning</strong> new languages.</em></p>
</div>
<h3>The Infinitive (To + Verb)</h3>
<div class="formula-box">
  <p>Use the infinitive:</p>
  <ul>
    <li>After adjectives: <em>It is difficult <strong>to learn</strong> Chinese.</em></li>
    <li>To express purpose: <em>I go to school <strong>to study</strong>.</em></li>
    <li>After certain verbs: <em>want, decide, hope, promise, plan, agree, offer, refuse, manage.</em></li>
  </ul>
  <p>Example: <em>He promised <strong>to help</strong> me with my homework.</em></p>
</div>
<div class="tip-box">
  <strong>Note:</strong> Some verbs take both with no change in meaning (start, begin, continue). Others take both WITH a change in meaning (stop, remember, forget).
  <br><em>He stopped smoking.</em> (He quit the habit). vs. <em>He stopped to smoke.</em> (He paused in order to smoke).
</div>`
            },
            {
                id: "edu3",
                title: "III. Communication: Expressing Purpose",
                content: `
<h3>Expressions of Purpose</h3>
<ul>
  <li><strong>To / In order to / So as to + Infinitive:</strong><br><em>She studies hard <strong>in order to pass</strong> the exam.</em></li>
  <li><strong>So that / In order that + Subject + Modal (can/could/will/would):</strong><br><em>She studies hard <strong>so that she can pass</strong> the exam.</em></li>
  <li><strong>For + Noun or V-ing:</strong><br><em>This tool is used <strong>for cutting</strong> wood.</em></li>
</ul>`
            }
        ],
        keyFormulas: [
            "Formal Education = Schools/Certification", "Informal = Lifelong learning/Family", "Non-formal = Workshops/No standard degree",
            "Gerunds follow: enjoy, mind, avoid, finish + prepositions",
            "Infinitives follow: decide, want, hope, plan + adjectives",
            "Purpose: in order to / so as to + Infinitive"
        ],
        quiz: [
            { id: "edu_q1", question: "Which type of education occurs naturally in daily life without a teacher or syllabus?", options: ["Formal", "Informal", "Non-formal", "Special"], correctAnswer: 1, explanation: "Informal education happens through experience, family, and media." },
            { id: "edu_q2", question: "Choose the correct form: 'She avoided _______ the difficult question.'", options: ["to answer", "answer", "answering", "answered"], correctAnswer: 2, explanation: "The verb 'avoid' is followed by a gerund (-ing)." },
            { id: "edu_q3", question: "They decided _______ a new literacy program for adults.", options: ["launching", "to launch", "launch", "launched"], correctAnswer: 1, explanation: "The verb 'decide' is followed by an infinitive (to + verb)." },
            { id: "edu_q4", question: "What does 'dropping out' mean?", options: ["Getting the best grades", "Joining a university", "Leaving school before finishing", "Graduating successfully"], correctAnswer: 2, explanation: "To drop out means to quit school early." },
            { id: "edu_q5", question: "Choose the correct purpose expression: 'He left early _______ catch the first train.'", options: ["so that", "for", "in order to", "because"], correctAnswer: 2, explanation: "'in order to' is followed by the bare infinitive 'catch'." },
            { id: "edu_q6", question: "Adult cooking classes or coding bootcamps are examples of:", options: ["Formal education", "Non-formal education", "Informal education", "Compulsory education"], correctAnswer: 1, explanation: "They are structured but outside the standard required school system." },
            { id: "edu_q7", question: "Complete: 'It is important _______ the instructions carefully.'", options: ["reading", "to read", "read", "having read"], correctAnswer: 1, explanation: "After adjectives like 'important', we use the infinitive with 'to'." }
        ],
        examProblems: [
            { id: "edu_ex1", title: "Writing Task", problem: "<p>Write a short paragraph evaluating the importance of non-formal education (like adult literacy classes) in developing countries.</p>", solution: "<p>Non-formal education plays a crucial role in developing countries by providing second chances to those who missed formal schooling. It helps reduce illiteracy, equips adults with practical vocational skills, and empowers women and marginalized groups. Consequently, it leads to better employment opportunities and overall economic development in society.</p>" }
        ]
    },

    {
        id: "eng-humour",
        title: "Humour",
        description: "The role of humor in society, types of comedy, and related grammar (Modals of Deduction).",
        sections: [
            {
                id: "hum1",
                title: "I. Vocabulary of Humour",
                content: `
<h3>Key Terms</h3>
<div class="formula-box">
  <ul>
    <li><strong>Sense of humour:</strong> The ability to perceive and appreciate jokes.</li>
    <li><strong>To make fun of / To mock:</strong> To laugh at someone in an unkind way.</li>
    <li><strong>Satire:</strong> The use of humor, irony, or exaggeration to expose and criticize people's stupidity or vices.</li>
    <li><strong>Witty:</strong> Showing quick and inventive verbal humor.</li>
    <li><strong>Slapstick:</strong> Comedy based on deliberately clumsy actions and humorously embarrassing events.</li>
    <li><strong>Joke / Riddle / Pun:</strong> Forms of verbal humor where the meaning relies on wordplay or unexpected punchlines.</li>
  </ul>
</div>`
            },
            {
                id: "hum2",
                title: "II. Grammar: Modals of Deduction (Certainty & Possibility)",
                content: `
<h3>Present Deduction</h3>
<div class="important-box">
  <ul>
    <li><strong>Must + base verb:</strong> When you are 100% sure something is TRUE. <br><em>He has a huge house. He <strong>must be</strong> rich.</em></li>
    <li><strong>Can't + base verb:</strong> When you are 100% sure something is FALSE. <br><em>He hasn't eaten all day. He <strong>can't be</strong> full.</em></li>
    <li><strong>May / Might / Could + base verb:</strong> When you think something is POSSIBLE (50%). <br><em>She didn't answer the phone. She <strong>might be</strong> sleeping.</em></li>
  </ul>
</div>
<h3>Past Deduction</h3>
<div class="formula-box">
  <ul>
    <li><strong>Must have + Past Participle:</strong> Sure it happened.<br><em>The street is wet. It <strong>must have rained</strong> last night.</em></li>
    <li><strong>Can't have + Past Participle:</strong> Sure it didn't happen.<br><em>He failed the test. He <strong>can't have studied</strong> hard.</em></li>
    <li><strong>Might have + Past Participle:</strong> Possible past event.<br><em>I can't find my keys. I <strong>might have left</strong> them in the car.</em></li>
  </ul>
</div>`
            }
        ],
        keyFormulas: [
            "Modals of present deduction: must be, can't be, might be",
            "Modals of past deduction: must have + P.P., can't have + P.P.",
            "Satire = criticizing through humor",
            "Witty = clever and funny"
        ],
        quiz: [
            { id: "hum_q1", question: "Which modal do we use for strong negative probability in the present?", options: ["Mustn't", "Shouldn't", "Can't", "Might not"], correctAnswer: 2, explanation: "'Can't' is used when we are practically certain something is not true." },
            { id: "hum_q2", question: "The streets are completely flooded. It _______ heavily last night.", options: ["must rain", "can't have rained", "must have rained", "could rain"], correctAnswer: 2, explanation: "Past certainty uses 'must have + past participle'." },
            { id: "hum_q3", question: "A comedy style relying on physical action (like slipping on a banana peel) is called:", options: ["Satire", "Slapstick", "Pun", "Dark comedy"], correctAnswer: 1, explanation: "Slapstick involves physical, clumsy comedy." },
            { id: "hum_q4", question: "He's yawning during the stand-up show. He _______ the comedian very funny.", options: ["must find", "can't find", "must have found", "might found"], correctAnswer: 1, explanation: "Present negative deduction based on the fact that he is yawning." }
        ],
        examProblems: [
            { id: "hum_ex1", title: "Grammar Re-write", problem: "<p>Rewrite using the correct modal of deduction: I am absolutely sure that she didn't steal the money because she was with me all day.</p>", solution: "<p>She <strong>can't have stolen</strong> the money because she was with me all day.</p>" }
        ]
    },

    {
        id: "eng-science-tech",
        title: "Science and Technology",
        description: "Vocabulary relating to innovations, their pros and cons, and linking words for Cause and Effect.",
        sections: [
            {
                id: "st1",
                title: "I. Key Vocabulary and Issues",
                content: `
<h3>Innovations and Devices</h3>
<div class="formula-box">
  <ul>
    <li><strong>Breakthrough:</strong> A sudden, dramatic, and important discovery.</li>
    <li><strong>State-of-the-art / Cutting-edge:</strong> The most recent stage in the development of a product, highly advanced.</li>
    <li><strong>Device / Gadget / Appliance:</strong> Electronic tools or machines.</li>
    <li><strong>Technophile vs Technophobe:</strong> Someone who loves technology vs someone who fears it.</li>
  </ul>
</div>
<h3>Pros & Cons</h3>
<p><strong>Benefits:</strong> Medical advances, efficiency, global communication, access to information.</p>
<p><strong>Drawbacks:</strong> Cyberbullying, privacy loss, digital divide, screen dependency, job automation.</p>`
            },
            {
                id: "st2",
                title: "II. Communication: Cause and Effect",
                content: `
<h3>Expressing Cause (Reason)</h3>
<ul>
  <li><strong>Because / Since / As:</strong> followed by a clause (Subject + Verb).<br><em>Since technology is advancing, our lives are changing.</em></li>
  <li><strong>Because of / Due to / Thanks to + Noun/Gerund:</strong><br><em>Because of the internet, communication is faster.</em> (Thanks to is usually positive; Due to can be negative).</li>
</ul>
<h3>Expressing Effect (Result)</h3>
<ul>
  <li><strong>Therefore / Consequently / As a result / For this reason:</strong><br><em>Automation is increasing. As a result, many factory jobs are lost.</em></li>
  <li><strong>So:</strong> used mid-sentence.<br><em>Phones are expensive, so I bought a used one.</em></li>
</ul>`
            }
        ],
        keyFormulas: [
            "Cause (Clause): Because, Since, As",
            "Cause (Noun Phrase): Because of, Due to, Owing to",
            "Result/Effect: Therefore, Consequently, As a result",
            "Breakthrough = Major discovery"
        ],
        quiz: [
            { id: "st_q1", question: "Which linking word is followed by a Noun Phrase?", options: ["Because", "Since", "Due to", "As"], correctAnswer: 2, explanation: "'Due to', 'Because of', and 'Thanks to' are followed by nouns, not full clauses." },
            { id: "st_q2", question: "A person who is afraid of or dislikes technology is a:", options: ["Technophile", "Technocrat", "Technician", "Technophobe"], correctAnswer: 3, explanation: "Phobia means fear, thus technophobe." },
            { id: "st_q3", question: "Robots are replacing workers in factories; _______, unemployment is rising.", options: ["because of", "consequently", "since", "due to"], correctAnswer: 1, explanation: "Consequently is an adverb showing the result of the previous statement." },
            { id: "st_q4", question: "A sudden, major scientific discovery is known as a:", options: ["Breakdown", "Backup", "Breakthrough", "Layout"], correctAnswer: 2, explanation: "A breakthrough is a major advance." }
        ],
        examProblems: [
            { id: "st_ex1", title: "Sentence combination", problem: "<p>Combine using the word in brackets: (Due to)<br>Heavy rain fell all night. The internet cables were damaged.</p>", solution: "<p><strong>Due to</strong> the heavy rain that fell all night, the internet cables were damaged.</p>" }
        ]
    },

    {
        id: "eng-sustainable-dev",
        title: "Sustainable Development",
        description: "Focus on environment, economy, and the future tense grammar structures.",
        sections: [
            {
                id: "sd1",
                title: "I. The Three Pillars and Vocabulary",
                content: `
<h3>Core Concept</h3>
<p><strong>Definition:</strong> Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.</p>
<div class="important-box">
  <p><strong>Three Pillars:</strong></p>
  <ol>
    <li>Environmental Protection (e.g., renewable energy, recycling, preserving biodiversity)</li>
    <li>Economic Growth (e.g., fair trade, poverty reduction, green jobs)</li>
    <li>Social Equity (e.g., human rights, education, gender equality)</li>
  </ol>
</div>
<h3>Vocabulary</h3>
<ul>
  <li><strong>Renewable energy:</strong> Energy from natural resources (sun, wind).</li>
  <li><strong>Deforestation:</strong> Cutting down forests at a massive scale.</li>
  <li><strong>Ecological footprint:</strong> The impact of human activities measured in terms of the area of biologically productive land/water needed.</li>
</ul>`
            },
            {
                id: "sd2",
                title: "II. Grammar: Future Perfect & Future Continuous",
                content: `
<h3>Future Perfect</h3>
<div class="formula-box">
  <p><strong>Structure:</strong> Will have + Past Participle</p>
  <p><strong>Use:</strong> Talk about an action that will be completed BEFORE a specific time in the future. Often used with 'By'.</p>
  <p><em>Example: By 2050, temperatures <strong>will have risen</strong> by 2 degrees.</em></p>
</div>
<h3>Future Continuous</h3>
<div class="formula-box">
  <p><strong>Structure:</strong> Will be + Verb-ing</p>
  <p><strong>Use:</strong> Talk about an action that will be in progress AT a specific time in the future.</p>
  <p><em>Example: This time next year, we <strong>will be driving</strong> electric cars.</em></p>
</div>`
            }
        ],
        keyFormulas: [
            "Future Perfect = Will + have + Past Participle (By Next Year...)",
            "Future Continuous = Will + be + V-ing (At this time tomorrow...)",
            "3 Pillars of SD: Economy, Environment, Social Equity"
        ],
        quiz: [
            { id: "sd_q1", question: "By 2030, scientists _______ a cure for many forms of cancer.", options: ["will discover", "will have discovered", "will be discovering", "discovered"], correctAnswer: 1, explanation: "Uses 'By + future date', indicating an action completed before that time (Future Perfect)." },
            { id: "sd_q2", question: "What is an example of renewable energy?", options: ["Coal", "Petroleum", "Solar power", "Natural Gas"], correctAnswer: 2, explanation: "Solar power comes from the sun and is naturally replenished." },
            { id: "sd_q3", question: "Don't call me at 8 PM. I _______ dinner with my family.", options: ["will have eaten", "will be eating", "eat", "ate"], correctAnswer: 1, explanation: "In progress at a specific future time, requiring Future Continuous." },
            { id: "sd_q4", question: "The term for massive clearing of trees is:", options: ["Afforestation", "Reforestation", "Desertification", "Deforestation"], correctAnswer: 3, explanation: "De-forest-ation is the removal of forests." }
        ],
        examProblems: []
    },

    {
        id: "eng-brain-drain",
        title: "Brain Drain",
        description: "Emigration of skilled individuals, push and pull factors, and Relative Pronouns.",
        sections: [
            {
                id: "bd1",
                title: "I. Vocabulary of Migration",
                content: `
<h3>What is Brain Drain?</h3>
<p>The emigration (leaving) of highly trained, skilled, or intelligent people (like doctors, engineers, scientists) from a particular country, usually developing nations, to developed nations.</p>
<div class="formula-box">
  <ul>
    <li><strong>Push Factors (Negative reasons to leave):</strong> Low wages, lack of research facilities, political instability, unemployment, corruption.</li>
    <li><strong>Pull Factors (Positive reasons to go elsewhere):</strong> High salaries, better living conditions, advanced technology, career opportunities, intellectual freedom.</li>
    <li><strong>Brain Gain:</strong> The benefit to the receiving country, or when skilled workers return to their home country with new skills.</li>
    <li><strong>Remittances:</strong> Money sent back home by migrants to their families.</li>
  </ul>
</div>`
            },
            {
                id: "bd2",
                title: "II. Grammar: Relative Clauses and Pronouns",
                content: `
<h3>Relative Pronouns</h3>
<div class="important-box">
  <ul>
    <li><strong>Who:</strong> For people (Subject). <em>The doctor <strong>who</strong> emigrated is my uncle.</em></li>
    <li><strong>Whom:</strong> For people (Object). <em>The scientist <strong>to whom</strong> I spoke is brilliant.</em></li>
    <li><strong>Which:</strong> For animals and things. <em>The laboratory <strong>which</strong> they built is modern.</em></li>
    <li><strong>That:</strong> For people, animals, and things (Defining clauses only).</li>
    <li><strong>Whose:</strong> For possession (belongs to). <em>The engineer <strong>whose</strong> design won the prize moved to Canada.</em></li>
    <li><strong>Where/When/Why:</strong> For Place / Time / Reason.</li>
  </ul>
</div>
<div class="tip-box">
  <strong>Defining vs Non-defining:</strong> Non-defining clauses use commas and cannot use "that".<br>
  <em>My father, <strong>who</strong> is a doctor, works abroad.</em> (Non-defining)
</div>`
            }
        ],
        keyFormulas: [
            "Push factors = Bad conditions (low wages)",
            "Pull factors = Good conditions (high salary)",
            "Who = Person subject | Whom = Person object | Whose = Possession"
        ],
        quiz: [
            { id: "bd_q1", question: "Low salaries and political instability are considered:", options: ["Pull factors", "Brain gain factors", "Push factors", "Remittances"], correctAnswer: 2, explanation: "Push factors drive people away from their home country." },
            { id: "bd_q2", question: "The engineer _______ invention revolutionized the industry won an award.", options: ["who", "whom", "whose", "which"], correctAnswer: 2, explanation: "Possession is indicated by 'whose' (the invention of the engineer)." },
            { id: "bd_q3", question: "Which relative pronoun is used for objects/things?", options: ["Who", "Whose", "Whom", "Which"], correctAnswer: 3, explanation: "Which is used for inanimate objects and animals." },
            { id: "bd_q4", question: "Money sent home by immigrants to their families is called:", options: ["Taxes", "Remittances", "Bribes", "Loans"], correctAnswer: 1, explanation: "Remittances are financial transfers from migrants to their home countries." }
        ],
        examProblems: []
    },

    {
        id: "eng-intl-orgs",
        title: "International Organizations",
        description: "The UN, WHO, NGOs, Acronyms, and Phrasal Verbs.",
        sections: [
            {
                id: "io1",
                title: "I. Types of Organizations",
                content: `
<h3>Acronyms and Roles</h3>
<ul>
  <li><strong>UN (United Nations):</strong> Maintains international peace and security, develops friendly relations among nations. HQ in New York.</li>
  <li><strong>WHO (World Health Organization):</strong> Directs international health within the UN's system.</li>
  <li><strong>UNICEF:</strong> United Nations International Children's Emergency Fund (helps children globally).</li>
  <li><strong>UNESCO:</strong> Education, Science, and Culture organization.</li>
  <li><strong>NGO (Non-Governmental Organization):</strong> Non-profit, citizen-based groups functioning independently of government (e.g., Amnesty International, Greenpeace, Red Cross).</li>
</ul>
<p><strong>Key verbs:</strong> to coordinate, to negotiate, to provide relief, to intervene, to fund.</p>`
            },
            {
                id: "io2",
                title: "II. Grammar: Phrasal Verbs",
                content: `
<p>A phrasal verb is a Verb + Particle (preposition or adverb) that takes on a new meaning.</p>
<div class="formula-box">
  <ul>
    <li><strong>Set up:</strong> To establish / start (a business or organization). <em>The UN was set up in 1945.</em></li>
    <li><strong>Bring about:</strong> To cause to happen. <em>NGOs bring about positive changes.</em></li>
    <li><strong>Look after:</strong> To take care of. <em>UNICEF looks after children's rights.</em></li>
    <li><strong>Stand for:</strong> To represent or mean. <em>WHO stands for World Health Organization.</em></li>
    <li><strong>Turn down:</strong> To reject (an offer or request).</li>
    <li><strong>Put off:</strong> To postpone.</li>
  </ul>
</div>`
            }
        ],
        keyFormulas: [
            "UN = Peace | WHO = Health | UNICEF = Children | UNESCO = Culture/Education",
            "Set up = Establish",
            "Bring about = Cause",
            "Stand for = Represent (Acronym)"
        ],
        quiz: [
            { id: "io_q1", question: "What does WHO stand for?", options: ["World Human Organization", "World Health Organization", "Wide Health Order", "World Helping Organization"], correctAnswer: 1, explanation: "World Health Organization." },
            { id: "io_q2", question: "The government decided to _______ a new committee to investigate the crisis.", options: ["put off", "turn down", "set up", "bring about"], correctAnswer: 2, explanation: "Set up means to establish or create." },
            { id: "io_q3", question: "NGOs are organizations that are:", options: ["Controlled by the United Nations", "For-profit businesses", "Independent of governments", "Military branches"], correctAnswer: 2, explanation: "Non-Governmental Organizations operate independently of state control." },
            { id: "io_q4", question: "Because of the rain, they had to _______ the outdoor meeting.", options: ["put off", "look after", "stand for", "set up"], correctAnswer: 0, explanation: "Put off means to postpone or delay." }
        ],
        examProblems: []
    },

    {
        id: "eng-citizenship",
        title: "Citizenship",
        description: "Civic rights, duties, active participation, and Prefix/Suffix word formation.",
        sections: [
            {
                id: "cit1",
                title: "I. Rights and Responsibilities",
                content: `
<h3>Civic Values</h3>
<div class="important-box">
  <p><strong>Rights (What you are entitled to):</strong></p>
  <ul>
    <li>Freedom of speech and expression</li>
    <li>Right to vote in elections</li>
    <li>Right to education and healthcare</li>
    <li>Equal protection under the law</li>
  </ul>
  <p><strong>Duties / Obligations (What you must do):</strong></p>
  <ul>
    <li>Paying taxes</li>
    <li>Obeying the law</li>
    <li>Voting and participating in the democratic process</li>
    <li>Respecting the rights and beliefs of others</li>
  </ul>
</div>
<p><strong>Active citizenship:</strong> Volunteering, community service, staying informed about public issues.</p>`
            },
            {
                id: "cit2",
                title: "II. Vocabulary Building: Prefixes and Suffixes",
                content: `
<h3>Prefixes (Change Meaning)</h3>
<ul>
  <li><strong>un-, in-, im-, dis-, ir-, il- :</strong> Give the opposite meaning (e.g., <em>fair → unfair, legal → illegal, responsible → irresponsible, polite → impolite</em>).</li>
  <li><strong>re- :</strong> Do again (e.g., <em>rewrite, rebuild</em>).</li>
  <li><strong>co- :</strong> Together (e.g., <em>cooperate, co-worker</em>).</li>
  <li><strong>under- / over- :</strong> Too little / Too much (e.g., <em>underpaid, overestimated</em>).</li>
</ul>
<h3>Suffixes (Change Word Class)</h3>
<ul>
  <li>Verb to Noun: <strong>-ment, -ation, -ance</strong> (e.g., <em>develop → development, educate → education</em>).</li>
  <li>Noun to Adjective: <strong>-ful, -less, -ous</strong> (e.g., <em>care → careful / careless, danger → dangerous</em>).</li>
  <li>Noun/Verb to Person: <strong>-er, -or, -ist</strong> (e.g., <em>work → worker, art → artist</em>).</li>
</ul>`
            }
        ],
        keyFormulas: [
            "Rights = Voting, Free Speech, Education",
            "Duties = Taxes, Obeying laws, Respecting others",
            "Prefixes modify meaning: im-, il-, ir-, un- (Opposites)",
            "Suffixes change word class: -ment (Noun), -ful (Adj), -er (Person)"
        ],
        quiz: [
            { id: "cit_q1", question: "Which of the following is considered a civic DUTY rather than a right?", options: ["Free speech", "Receiving education", "Paying taxes", "Practicing religion"], correctAnswer: 2, explanation: "Taxes are a mandatory obligation required by the state." },
            { id: "cit_q2", question: "What prefix makes the word 'legal' opposite?", options: ["un-", "in-", "im-", "il-"], correctAnswer: 3, explanation: "il + legal = illegal." },
            { id: "cit_q3", question: "What suffix turns the verb 'govern' into a noun?", options: ["-ful", "-ment", "-less", "-ous"], correctAnswer: 1, explanation: "Govern + ment = Government." },
            { id: "cit_q4", question: "Volunteering to clean up a local park is an example of:", options: ["Political corruption", "Active citizenship", "Violating rights", "Formal education"], correctAnswer: 1, explanation: "Active citizenship involves community service and engagement." }
        ],
        examProblems: []
    }
];
