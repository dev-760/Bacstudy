import { Lesson } from "./types";

export const englishLessons: Lesson[] = [
    {
        id: "eng-gifts-of-youth",
        title: "Gifts of Youth",
        description: "Values, beliefs, culture, and civic engagement among youth",
        sections: [
            {
                id: "gy-vocab", title: "I. Key Vocabulary", content: `
<h3>Essential Words</h3>
<div class="formula-box">
  <ul>
    <li><strong>Civic engagement</strong> — active participation in community life</li>
    <li><strong>Volunteerism</strong> — giving time freely to help others</li>
    <li><strong>Cultural heritage</strong> — traditions passed down through generations</li>
    <li><strong>Tolerance</strong> — respect for differing views and beliefs</li>
    <li><strong>Empathy</strong> — understanding another person's feelings</li>
    <li><strong>Social cohesion</strong> — bonds that unite a society</li>
    <li><strong>Community service</strong> — unpaid work benefiting the public</li>
  </ul>
</div>
<h3>Expressions</h3>
<ul>
  <li>"to make a difference" — to have a positive impact</li>
  <li>"to raise awareness" — to inform people about an issue</li>
  <li>"to bridge the gap" — to connect different groups</li>
</ul>` },
            {
                id: "gy-grammar", title: "II. Grammar Focus", content: `
<h3>Reported Speech</h3>
<div class="formula-box">
  <p><strong>Direct:</strong> She said, "I volunteer every weekend."</p>
  <p><strong>Indirect:</strong> She said (that) she volunteered every weekend.</p>
</div>
<h3>Tense Shifts</h3>
<div class="important-box">
  <ul>
    <li>Present Simple → Past Simple</li>
    <li>Present Continuous → Past Continuous</li>
    <li>Past Simple → Past Perfect</li>
    <li>Will → Would</li>
    <li>Can → Could</li>
  </ul>
</div>
<h3>Reporting Verbs</h3>
<p><strong>say, tell, explain, suggest, advise, claim, argue, deny, admit</strong></p>
<div class="tip-box">
  <strong>💡 Exam tip:</strong> Remember to change pronouns, time words (today → that day, tomorrow → the next day), and place words (here → there).
</div>` },
            {
                id: "gy-writing", title: "III. Writing Skills", content: `
<h3>Opinion Essay Structure</h3>
<div class="important-box">
  <ol>
    <li><strong>Introduction:</strong> Hook + thesis statement</li>
    <li><strong>Body 1:</strong> First argument + example</li>
    <li><strong>Body 2:</strong> Second argument + example</li>
    <li><strong>Body 3:</strong> Counter-argument + refutation</li>
    <li><strong>Conclusion:</strong> Restate thesis + final thought</li>
  </ol>
</div>
<h3>Useful Linking Words</h3>
<div class="formula-box">
  <p><strong>Addition:</strong> Moreover, Furthermore, In addition, Besides</p>
  <p><strong>Contrast:</strong> However, Nevertheless, On the other hand, Although</p>
  <p><strong>Cause/Effect:</strong> Therefore, Consequently, As a result, Due to</p>
  <p><strong>Conclusion:</strong> In conclusion, To sum up, All in all, Overall</p>
</div>` },
        ],
        keyFormulas: [
            "Direct → Indirect: shift tense one step back",
            "Linking words: Moreover, However, Therefore, In conclusion",
            "Essay: Introduction → Body (2-3 paragraphs) → Conclusion",
            "Reported speech: change pronouns + time expressions",
        ],
        quiz: [
            { id: "gy1", question: "Change to reported speech: He said, 'I am studying.'", options: ["He said he is studying", "He said he was studying", "He said he studied", "He said he had studied"], correctAnswer: 1, explanation: "Present continuous → past continuous in reported speech." },
            { id: "gy2", question: "'Civic engagement' means:", options: ["Government control", "Active community participation", "Military service", "Tax payment"], correctAnswer: 1, explanation: "Civic engagement = participation in community/public life." },
            { id: "gy3", question: "Which is a contrast linking word?", options: ["Moreover", "Therefore", "However", "In addition"], correctAnswer: 2, explanation: "'However' introduces a contrasting idea." },
            { id: "gy4", question: "She said, 'I will come tomorrow.' → She said she ___ come ___.", options: ["will/tomorrow", "would/the next day", "would/tomorrow", "will/the next day"], correctAnswer: 1, explanation: "will → would, tomorrow → the next day." },
            { id: "gy5", question: "'To raise awareness' means:", options: ["To increase prices", "To inform people about an issue", "To build a building", "To start a company"], correctAnswer: 1, explanation: "Raise awareness = make people aware/informed." },
            { id: "gy6", question: "The correct essay conclusion phrase is:", options: ["First of all", "In addition", "To sum up", "For example"], correctAnswer: 2, explanation: "'To sum up' signals a conclusion." },
            { id: "gy7", question: "He said, 'I can swim.' → He said he ___ swim.", options: ["can", "could", "will", "may"], correctAnswer: 1, explanation: "can → could in reported speech." },
            { id: "gy8", question: "'Empathy' is closest to:", options: ["Sympathy", "Understanding others' feelings", "Anger", "Happiness"], correctAnswer: 1, explanation: "Empathy = ability to understand and share others' feelings." },
            { id: "gy9", question: "Which is NOT a reporting verb?", options: ["Suggest", "Recommend", "Beautiful", "Deny"], correctAnswer: 2, explanation: "'Beautiful' is an adjective, not a reporting verb." },
            { id: "gy10", question: "'Furthermore' is used for:", options: ["Contrast", "Addition", "Conclusion", "Time"], correctAnswer: 1, explanation: "'Furthermore' adds supporting information." },
            { id: "gy11", question: "She said, 'I went yesterday.' → She said she ___ ___.", options: ["went/yesterday", "had gone/the day before", "goes/today", "went/the day before"], correctAnswer: 1, explanation: "Past simple → past perfect, yesterday → the day before." },
            { id: "gy12", question: "A thesis statement goes in the:", options: ["Conclusion", "Body", "Introduction", "Title"], correctAnswer: 2, explanation: "The thesis statement is in the introduction paragraph." },
            { id: "gy13", question: "'To bridge the gap' means:", options: ["Build a bridge", "Connect different groups", "Create a problem", "Travel abroad"], correctAnswer: 1, explanation: "Metaphor for connecting/reducing differences between groups." },
            { id: "gy14", question: "'Although' introduces:", options: ["Result", "Concession/contrast", "Time", "Condition"], correctAnswer: 1, explanation: "'Although' introduces a concessive clause." },
            { id: "gy15", question: "They said, 'We are here.' → They said they were ___.", options: ["here", "there", "where", "nowhere"], correctAnswer: 1, explanation: "here → there in reported speech." },
        ],
        examProblems: [
            { id: "gy-ex1", title: "Writing Task 1", problem: `<p>Write an essay (250-300 words) on the topic: <strong>"Should community service be mandatory for all high school students?"</strong></p><p>Include: introduction with thesis, 2-3 body paragraphs with examples, and a conclusion.</p>`, solution: `<p><strong>Sample outline:</strong></p><p><strong>Intro:</strong> Many schools debate whether to make community service mandatory. I believe it should be required because it builds character and strengthens communities.</p><p><strong>Body 1:</strong> Community service teaches responsibility and empathy. Students who volunteer learn real-world skills.</p><p><strong>Body 2:</strong> It strengthens community bonds. When students help, entire neighborhoods benefit.</p><p><strong>Body 3:</strong> Some argue this limits freedom, but mandatory service is educational, not punitive.</p><p><strong>Conclusion:</strong> Mandatory community service would create more engaged, empathetic citizens.</p>` },
            { id: "gy-ex2", title: "Writing Task 2", problem: `<p>Change to reported speech:</p><ol><li>"I am very happy today," said Maria.</li><li>"We will visit Morocco next year," they announced.</li><li>"Don't forget your homework," the teacher told us.</li></ol>`, solution: `<ol><li>Maria said (that) she was very happy that day.</li><li>They announced (that) they would visit Morocco the following year.</li><li>The teacher told us not to forget our homework.</li></ol>` },
            { id: "gy-ex3", title: "Writing Task 3", problem: `<p>Read and answer: "Young people in Morocco are increasingly involved in volunteer work. Organizations like the Moroccan Red Crescent provide opportunities for youth to serve their communities."</p><ol><li>What organization is mentioned?</li><li>What opportunity does it provide?</li><li>Do you think volunteerism is important? Why? (3-4 sentences)</li></ol>`, solution: `<ol><li>The Moroccan Red Crescent.</li><li>It provides opportunities for youth to serve their communities.</li><li>Yes, volunteerism is crucial. It helps young people develop empathy and social skills. Moreover, it addresses community needs that governments might overlook. Finally, it creates a sense of belonging and purpose.</li></ol>` },
        ],
    },
    {
        id: "eng-moroccan-culture",
        title: "Moroccan Culture & Diversity",
        description: "Cultural values, customs, traditions, and diversity in Morocco",
        sections: [
            {
                id: "mc-vocab", title: "I. Key Vocabulary", content: `
<h3>Cultural Terms</h3>
<div class="formula-box">
  <ul>
    <li><strong>Diversity</strong> — variety of cultures, languages, and traditions</li>
    <li><strong>Customs</strong> — traditional practices of a group</li>
    <li><strong>Heritage</strong> — valued things from the past (art, buildings, traditions)</li>
    <li><strong>Multicultural</strong> — including people from many different cultures</li>
    <li><strong>Coexistence</strong> — living together peacefully</li>
    <li><strong>Handicraft</strong> — objects made by hand using traditional methods</li>
    <li><strong>Folklore</strong> — traditional stories, music, and customs</li>
  </ul>
</div>` },
            {
                id: "mc-grammar", title: "II. Grammar: Passive Voice", content: `
<h3>Passive Voice Formation</h3>
<div class="formula-box">
  <p><strong>Active:</strong> Subject + Verb + Object</p>
  <p><strong>Passive:</strong> Object + be (conjugated) + Past Participle (+ by Subject)</p>
</div>
<h3>Examples by Tense</h3>
<div class="important-box">
  <ul>
    <li><strong>Present:</strong> Tea <em>is served</em> to guests.</li>
    <li><strong>Past:</strong> The mosque <em>was built</em> in 1993.</li>
    <li><strong>Future:</strong> The festival <em>will be held</em> next month.</li>
    <li><strong>Present Perfect:</strong> The ruins <em>have been restored</em>.</li>
    <li><strong>Modal:</strong> Traditions <em>should be preserved</em>.</li>
  </ul>
</div>
<div class="tip-box">
  <strong>💡 When to use passive:</strong> When the action is more important than who did it, or when the doer is unknown.
</div>` },
            {
                id: "mc-functions", title: "III. Language Functions", content: `
<h3>Expressing Opinions</h3>
<div class="formula-box">
  <p><strong>Strong:</strong> I firmly believe that... / I am convinced that...</p>
  <p><strong>Moderate:</strong> In my opinion... / I think that... / It seems to me that...</p>
  <p><strong>Weak:</strong> I tend to think... / Perhaps...</p>
</div>
<h3>Agreeing & Disagreeing</h3>
<div class="formula-box">
  <p><strong>Agree:</strong> I totally agree. / That's a good point. / Exactly!</p>
  <p><strong>Disagree:</strong> I'm afraid I disagree. / I see your point, but... / I beg to differ.</p>
</div>` },
        ],
        keyFormulas: [
            "Passive: Object + be + Past Participle (+ by agent)",
            "Opinion: I believe / I think / In my opinion",
            "Agree: I agree / Disagree: I'm afraid I disagree",
        ],
        quiz: [
            { id: "mc1", question: "Change to passive: 'They celebrate Eid every year.'", options: ["Eid is celebrated every year", "Eid was celebrated", "Eid celebrates every year", "They are celebrated"], correctAnswer: 0, explanation: "Object becomes subject + is + past participle." },
            { id: "mc2", question: "'Heritage' means:", options: ["Modern technology", "Things valued from the past", "Money", "New buildings"], correctAnswer: 1, explanation: "Heritage = valued cultural elements passed down." },
            { id: "mc3", question: "Passive of 'She wrote the letter':", options: ["The letter was written by her", "The letter wrote by her", "She was written the letter", "The letter is wrote"], correctAnswer: 0, explanation: "Object + was + past participle + by + agent." },
            { id: "mc4", question: "'Coexistence' means:", options: ["Living alone", "Living together peacefully", "Fighting", "Competition"], correctAnswer: 1, explanation: "Co- (together) + existence = living together." },
            { id: "mc5", question: "Which is a strong opinion?", options: ["Perhaps...", "I tend to think...", "I firmly believe...", "Maybe..."], correctAnswer: 2, explanation: "'Firmly believe' shows strong conviction." },
            { id: "mc6", question: "'The cake will ___ (eat).' Complete:", options: ["be eaten", "be ate", "eating", "is eaten"], correctAnswer: 0, explanation: "Future passive: will + be + past participle." },
            { id: "mc7", question: "'Handicraft' refers to:", options: ["Machine products", "Handmade traditional objects", "Digital art", "Sports equipment"], correctAnswer: 1, explanation: "Handicraft = objects made by hand." },
            { id: "mc8", question: "Polite disagreement:", options: ["You're wrong!", "I beg to differ", "That's stupid", "Never!"], correctAnswer: 1, explanation: "'I beg to differ' is polite and formal." },
            { id: "mc9", question: "Present perfect passive of 'They have restored the ruins':", options: ["The ruins has been restored", "The ruins have been restored", "The ruins have restored", "The ruins restored"], correctAnswer: 1, explanation: "Have/has + been + past participle." },
            { id: "mc10", question: "'Multicultural' means:", options: ["One culture only", "Including many cultures", "Without culture", "Ancient culture"], correctAnswer: 1, explanation: "Multi- (many) + cultural." },
            { id: "mc11", question: "Modal passive: 'We should respect traditions.'", options: ["Traditions should be respected", "Traditions should respect", "Traditions are should respected", "Should traditions be respect"], correctAnswer: 0, explanation: "Modal + be + past participle." },
            { id: "mc12", question: "'In my opinion' expresses:", options: ["Fact", "Personal view", "Question", "Command"], correctAnswer: 1, explanation: "It introduces a personal opinion." },
            { id: "mc13", question: "'Folklore' includes:", options: ["Only music", "Only stories", "Traditional stories, music, customs", "Only art"], correctAnswer: 2, explanation: "Folklore encompasses all traditional cultural expressions." },
            { id: "mc14", question: "'The project ___ completed last year.' (passive)", options: ["is", "was", "were", "been"], correctAnswer: 1, explanation: "Past passive: was + past participle." },
            { id: "mc15", question: "'I see your point, but...' shows:", options: ["Full agreement", "Partial agreement before disagreeing", "Anger", "Confusion"], correctAnswer: 1, explanation: "Acknowledges the other view before presenting disagreement." },
        ],
        examProblems: [
            { id: "mc-ex1", title: "Writing Task 1", problem: `<p>Write a paragraph (100 words) about <strong>the importance of preserving Moroccan cultural heritage</strong>. Use at least 2 passive voice structures.</p>`, solution: `<p><strong>Sample:</strong> Morocco's cultural heritage <em>is considered</em> one of the richest in the world. Traditional crafts such as pottery and carpet-weaving <em>have been practiced</em> for centuries. These traditions <em>should be preserved</em> because they represent our national identity. Moreover, historic sites like the medinas of Fez and Marrakech attract millions of tourists each year. In my opinion, cultural education programs <em>must be implemented</em> in schools so that young Moroccans can appreciate and continue their ancestors' traditions.</p>` },
            { id: "mc-ex2", title: "Grammar Exercise", problem: `<p>Rewrite in passive voice:</p><ol><li>People speak Arabic and Amazigh in Morocco.</li><li>Artisans have made these carpets by hand.</li><li>The government will build a new cultural center.</li></ol>`, solution: `<ol><li>Arabic and Amazigh are spoken in Morocco.</li><li>These carpets have been made by hand (by artisans).</li><li>A new cultural center will be built (by the government).</li></ol>` },
            { id: "mc-ex3", title: "Reading Comprehension", problem: `<p>"Morocco is a land of diversity. Its people include Arabs, Amazigh, and other ethnic groups. This diversity is reflected in its languages, cuisine, and architecture."</p><ol><li>What groups are mentioned?</li><li>How is diversity reflected?</li><li>Why do you think diversity is a strength? (3 sentences)</li></ol>`, solution: `<ol><li>Arabs, Amazigh, and other ethnic groups.</li><li>Through languages, cuisine, and architecture.</li><li>Diversity enriches a society by bringing different perspectives. It encourages creativity and innovation through cultural exchange. Furthermore, it helps people develop tolerance and understanding.</li></ol>` },
        ],
    },
    {
        id: "eng-women-power",
        title: "Women & Power",
        description: "Gender equality, women's rights, and empowerment",
        sections: [
            {
                id: "wp-vocab", title: "I. Key Vocabulary", content: `
<h3>Gender & Rights Terms</h3>
<div class="formula-box">
  <ul>
    <li><strong>Gender equality</strong> — equal rights for all genders</li>
    <li><strong>Empowerment</strong> — gaining power and control over one's life</li>
    <li><strong>Discrimination</strong> — unfair treatment based on gender, race, etc.</li>
    <li><strong>Literacy</strong> — ability to read and write</li>
    <li><strong>Suffrage</strong> — the right to vote</li>
    <li><strong>Glass ceiling</strong> — invisible barrier preventing advancement</li>
    <li><strong>Gender gap</strong> — difference between men and women in opportunities</li>
    <li><strong>Advocate</strong> — a person who supports a cause publicly</li>
  </ul>
</div>` },
            {
                id: "wp-grammar", title: "II. Grammar: Wish & Conditional", content: `
<h3>Wish + Past Simple (Unreal Present)</h3>
<div class="formula-box">
  <p><strong>I wish I had more time.</strong> (But I don't have time now.)</p>
  <p><strong>She wishes she could drive.</strong> (But she can't.)</p>
</div>
<h3>Wish + Past Perfect (Regret)</h3>
<div class="formula-box">
  <p><strong>I wish I had studied harder.</strong> (But I didn't study.)</p>
</div>
<h3>Conditionals</h3>
<div class="important-box">
  <p><strong>Type 2 (unreal present):</strong> If + past simple, would + infinitive</p>
  <p>"If women had equal access to education, the economy would grow faster."</p>
  <p><strong>Type 3 (unreal past):</strong> If + past perfect, would have + past participle</p>
  <p>"If she had been given the opportunity, she would have succeeded."</p>
</div>` },
            {
                id: "wp-functions", title: "III. Functions & Writing", content: `
<h3>Expressing Wishes & Regrets</h3>
<div class="formula-box">
  <p><strong>Wishes:</strong> I wish... / If only... / I hope that...</p>
  <p><strong>Regrets:</strong> I wish I had... / I regret not + -ing / If only I had...</p>
</div>
<h3>Argumentative Essay Tips</h3>
<div class="tip-box">
  <strong>💡 For/Against essay structure:</strong>
  <ol>
    <li>Introduction: state the issue</li>
    <li>Arguments FOR with examples</li>
    <li>Arguments AGAINST with examples</li>
    <li>Your opinion + conclusion</li>
  </ol>
</div>` },
        ],
        keyFormulas: [
            "Wish + past simple = unreal present",
            "Wish + past perfect = past regret",
            "Type 2: If + past, would + base verb",
            "Type 3: If + past perfect, would have + PP",
        ],
        quiz: [
            { id: "wp1", question: "'I wish I ___ taller.' (unreal present)", options: ["am", "was/were", "will be", "had been"], correctAnswer: 1, explanation: "Wish + past simple for unreal present." },
            { id: "wp2", question: "'Gender equality' means:", options: ["Men are superior", "Equal rights for all genders", "Women don't work", "Only women vote"], correctAnswer: 1, explanation: "Equal opportunities regardless of gender." },
            { id: "wp3", question: "Type 2 conditional: 'If she ___ harder, she ___ pass.'", options: ["studies/will", "studied/would", "had studied/would have", "study/can"], correctAnswer: 1, explanation: "If + past simple, would + infinitive." },
            { id: "wp4", question: "'Glass ceiling' is:", options: ["A real ceiling", "An invisible barrier to advancement", "A type of window", "A reward"], correctAnswer: 1, explanation: "Metaphor for invisible barriers preventing promotion." },
            { id: "wp5", question: "'I wish I had studied more.' expresses:", options: ["Future plan", "Present wish", "Past regret", "Advice"], correctAnswer: 2, explanation: "Wish + past perfect = regret about the past." },
            { id: "wp6", question: "'Empowerment' means:", options: ["Losing power", "Gaining control over one's life", "Government power", "Electric power"], correctAnswer: 1, explanation: "Empowerment = process of becoming stronger." },
            { id: "wp7", question: "Type 3: 'If he ___ the exam, he ___ graduated.'", options: ["passes/will have", "passed/would", "had passed/would have", "pass/would"], correctAnswer: 2, explanation: "Type 3: if + past perfect, would have + PP." },
            { id: "wp8", question: "'Suffrage' means the right to:", options: ["Suffer", "Vote", "Work", "Travel"], correctAnswer: 1, explanation: "Suffrage = right to vote in elections." },
            { id: "wp9", question: "'If only I could fly!' = I wish I ___.", options: ["can fly", "could fly", "will fly", "flew"], correctAnswer: 1, explanation: "'If only' = 'I wish'. Could = past of can." },
            { id: "wp10", question: "'Advocate' means:", options: ["Lawyer only", "Public supporter of a cause", "Government official", "Teacher"], correctAnswer: 1, explanation: "Advocate = person who publicly supports something." },
            { id: "wp11", question: "'She wished she ___ to the meeting.' (regret - not go)", options: ["goes", "went", "had gone", "will go"], correctAnswer: 2, explanation: "Past regret: wish + past perfect." },
            { id: "wp12", question: "'Discrimination' involves:", options: ["Equal treatment", "Unfair treatment", "Good treatment", "No treatment"], correctAnswer: 1, explanation: "Discrimination = unjust treatment based on characteristics." },
            { id: "wp13", question: "Which expresses regret?", options: ["I hope to visit", "I wish I had visited", "I will visit", "I am visiting"], correctAnswer: 1, explanation: "Wish + past perfect expresses past regret." },
            { id: "wp14", question: "'If women had equal pay, they ___ more independent.'", options: ["are", "were", "would be", "will be"], correctAnswer: 2, explanation: "Type 2 conditional: would + base verb." },
            { id: "wp15", question: "'Literacy rate' refers to:", options: ["Reading speed", "% who can read and write", "Number of books", "School grades"], correctAnswer: 1, explanation: "Literacy rate = percentage of literate people." },
        ],
        examProblems: [
            { id: "wp-ex1", title: "Writing Task 1", problem: `<p>Write an argumentative essay (250 words): <strong>"Education is the key to women's empowerment." Do you agree?</strong></p>`, solution: `<p><strong>Sample outline:</strong> Intro: Education empowers women by giving them skills and independence. Body 1: Education increases earning potential and financial independence. Body 2: Educated women make better health decisions for families. Body 3: Some argue tradition matters more, but education and tradition can coexist. Conclusion: Education is indeed essential for empowerment.</p>` },
            { id: "wp-ex2", title: "Grammar Exercise", problem: `<p>Complete with the correct form:</p><ol><li>I wish I ___ (know) how to code.</li><li>If she ___ (have) more resources, she ___ (start) her business.</li><li>He wishes he ___ (not/miss) the opportunity last year.</li></ol>`, solution: `<ol><li>I wish I <strong>knew</strong> how to code. (unreal present)</li><li>If she <strong>had</strong> more resources, she <strong>would start</strong> her business. (Type 2)</li><li>He wishes he <strong>hadn't missed</strong> the opportunity last year. (past regret)</li></ol>` },
            { id: "wp-ex3", title: "Reading Comprehension", problem: `<p>"In Morocco, the Mudawwana reform of 2004 significantly improved women's legal rights, including raising the marriage age and granting women the right to divorce."</p><ol><li>What is the Mudawwana?</li><li>Name two changes it introduced.</li><li>Why are legal reforms important for women? (2-3 sentences)</li></ol>`, solution: `<ol><li>It's the Moroccan family law / personal status code.</li><li>Raised marriage age; granted women the right to divorce.</li><li>Legal reforms establish equal rights in law, providing a framework for change. They protect women from unfair treatment and give them legal tools to defend their rights.</li></ol>` },
        ],
    },
];
