const fs = require('fs');
const https = require('https');

const urls = [
    { id: 'english', url: 'https://moutamadris.ma/%D8%A7%D9%85%D8%AA%D8%AD%D8%A7%D9%86%D8%A7%D8%AA-%D9%88%D8%B7%D9%86%D9%8A%D8%A9-%D9%85%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%84%D8%BA%D8%A9-%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9/' },
    { id: 'philosophy', url: 'https://moutamadris.ma/%D8%A7%D9%85%D8%AA%D8%AD%D8%A7%D9%86%D8%A7%D8%AA-%D9%88%D8%B7%D9%86%D9%8A%D8%A9-%D9%85%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-%D8%A8/' },
    { id: 'math', url: 'https://moutamadris.ma/%D8%A7%D9%85%D8%AA%D8%AD%D8%A7%D9%86%D8%A7%D8%AA-%D9%88%D8%B7%D9%86%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA-%D8%AE%D9%8A%D8%A7%D8%B1-%D8%A7%D9%86%D8%AC%D9%84/' },
    { id: 'svt', url: 'https://moutamadris.ma/%D8%A7%D9%85%D8%AA%D8%AD%D8%A7%D9%86%D8%A7%D8%AA-%D9%88%D8%B7%D9%86%D9%8A%D8%A9-%D9%81%D9%8A-%D8%B9%D9%84%D9%88%D9%85-%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9-%D9%88%D8%A7%D9%84%D8%A7%D8%B1%D8%B6/' },
    { id: 'pc', url: 'https://moutamadris.ma/%D8%A7%D9%85%D8%AA%D8%AD%D8%A7%D9%86%D8%A7%D8%AA-%D9%88%D8%B7%D9%86%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1-%D9%88%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1-2/' },
    { id: 'pc_alt', url: 'http://www.pc1.ma/examensbac.html' }
];

function fetchHTML(url) {
    return new Promise((resolve, reject) => {
        const req = url.startsWith('https') ? require('https') : require('http');
        req.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', err => reject(err));
    });
}

async function scrape() {
    const examsData = {};

    for (const source of urls) {
        try {
            console.log(`Fetching ${source.id}...`);
            const html = await fetchHTML(source.url);

            // Match all pdf links
            const pdfRegex = /href="([^"]+\.pdf)"/g;
            let match;
            const pdfs = new Set();
            while ((match = pdfRegex.exec(html)) !== null) {
                pdfs.add(match[1]);
            }

            const examsList = [];
            for (const url of pdfs) {
                // Parse moutamadris URLs, decode URI component
                const decoded = decodeURIComponent(url);
                const isCorrection = decoded.includes('عناصر-الإجابة') || decoded.includes('تصحيح') || decoded.includes('Correction');
                let yearMatch = decoded.match(/20\d{2}/);
                let year = yearMatch ? yearMatch[0] : 'Unknown';

                let session = 'Regular';
                if (decoded.includes('استدراكية') || decoded.includes('rattrapage')) {
                    session = 'Makeup';
                }

                // Skip files without year
                if (year === 'Unknown') continue;

                // Track PC alt links
                if (source.id === 'pc_alt' && !url.includes('http')) {
                    // Make it absolute
                    examsList.push({
                        url: 'http://www.pc1.ma/' + url.replace(/^[\.\/]+/, ''),
                        year,
                        session,
                        isCorrection
                    });
                } else {
                    examsList.push({
                        url,
                        year,
                        session,
                        isCorrection
                    });
                }
            }

            if (!examsData[source.id]) examsData[source.id] = [];
            examsData[source.id].push(...examsList);

            console.log(`Found ${examsList.length} viable exams for ${source.id}`);
        } catch (err) {
            console.error(`Error fetching ${source.id}:`, err.message);
        }
    }

    // Process and organize
    const organized = {};
    Object.keys(examsData).forEach(subjectId => {
        const realId = subjectId === 'pc_alt' ? 'pc' : subjectId;
        if (!organized[realId]) organized[realId] = [];

        organized[realId] = [...organized[realId], ...examsData[subjectId]];
    });

    // Group by Year and Session
    const finalData = {};
    Object.keys(organized).forEach(sub => {
        const byYearSess = {};

        organized[sub].forEach(exam => {
            const key = `${exam.year}-${exam.session}`;
            if (!byYearSess[key]) {
                byYearSess[key] = {
                    year: exam.year,
                    session: exam.session,
                    examUrl: null,
                    correctionUrl: null
                };
            }
            if (exam.isCorrection) {
                byYearSess[key].correctionUrl = exam.url;
            } else {
                if (!byYearSess[key].examUrl) {
                    byYearSess[key].examUrl = exam.url;
                }
            }
        });

        finalData[sub] = Object.values(byYearSess)
            .filter(e => e.examUrl) // Ensure we have the exam at least
            .sort((a, b) => parseInt(b.year) - parseInt(a.year)); // Sort newest first
    });

    // Write out the TS file
    const tsContent = `export type NationalExam = {
  year: string;
  session: 'Regular' | 'Makeup';
  examUrl: string;
  correctionUrl: string | null;
};

export const nationalExams: Record<string, NationalExam[]> = ${JSON.stringify(finalData, null, 2)};
`;

    fs.mkdirSync('./src/data', { recursive: true });
    fs.writeFileSync('./src/data/exams.ts', tsContent);
    console.log('Successfully wrote to src/data/exams.ts');
}

scrape();
