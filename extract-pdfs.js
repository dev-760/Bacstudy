const fs = require('fs');
const path = require('path');

async function extractPDF(filePath) {
    const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

    try {
        const data = new Uint8Array(fs.readFileSync(filePath));
        const doc = await pdfjsLib.getDocument({ data }).promise;
        let fullText = '';

        for (let i = 1; i <= doc.numPages; i++) {
            const page = await doc.getPage(i);
            const content = await page.getTextContent();
            const strings = content.items.map(item => item.str);
            fullText += strings.join(' ') + '\n--- PAGE BREAK ---\n';
        }

        return {
            file: path.basename(filePath),
            pages: doc.numPages,
            text: fullText
        };
    } catch (err) {
        return { file: path.basename(filePath), error: err.message };
    }
}

const lessonsDir = path.join(__dirname, '..', 'lessons');

async function main() {
    let output = '';
    function log(msg) { output += msg + '\n'; }

    // Extract Math book
    const mathResult = await extractPDF(path.join(lessonsDir, 'Math book.pdf'));
    log('=== MATH BOOK ===');
    log('Pages: ' + mathResult.pages);
    log('Error: ' + (mathResult.error || 'none'));
    log('Text (first 10000 chars):');
    log((mathResult.text || 'NONE').substring(0, 10000));
    log('');

    // Extract English
    const engResult = await extractPDF(path.join(lessonsDir, 'english.pdf'));
    log('=== ENGLISH ===');
    log('Pages: ' + engResult.pages);
    log('Error: ' + (engResult.error || 'none'));
    log('Text (first 10000 chars):');
    log((engResult.text || 'NONE').substring(0, 10000));
    log('');

    // Extract PC files
    const pcDir = path.join(lessonsDir, 'PC');
    const pcFiles = fs.readdirSync(pcDir).filter(f => f.endsWith('.pdf'));
    for (const file of pcFiles) {
        const result = await extractPDF(path.join(pcDir, file));
        log(`=== PC: ${file} ===`);
        log('Pages: ' + result.pages);
        log('Error: ' + (result.error || 'none'));
        log('Text (first 4000 chars):');
        log((result.text || 'NONE').substring(0, 4000));
        log('');
    }

    fs.writeFileSync(path.join(__dirname, 'pdf-content.txt'), output, 'utf8');
    console.log('Done! Written to pdf-content.txt (' + output.length + ' chars)');
}

main().catch(e => console.error('Fatal:', e));
