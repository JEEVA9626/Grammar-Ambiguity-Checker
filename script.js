const input = document.getElementById('input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

checkBtn.addEventListener('click', checkGrammar);

function checkGrammar() {
    const text = input.value.trim();
    if (!text) return;

    // Check for grammatical errors and ambiguities
    const errors = [];
    const ambiguities = [];

    // Check for double words
    if (/\b(\w+)\s+\1\b/.test(text)) {
        errors.push('Double word detected.');
    }

    // Check for consecutive verbs
    if (/\b(VB|VBD|VBG|VBN|VBP|VBZ)\s+(VB|VBD|VBG|VBN|VBP|VBZ)\b/.test(text)) {
        ambiguities.push('Consecutive verbs detected. Consider rephrasing for clarity.');
    }

    // Check for passive voice
    if (/\b(am|is|are|was|were|be|been|being)\s+(VB|VBD|VBG|VBN|VBP|VBZ)\b/.test(text)) {
        ambiguities.push('Passive voice detected. Consider using active voice for clarity.');
    }

    // Display results
    resultDiv.innerHTML = '';
    if (errors.length > 0) {
        resultDiv.innerHTML += '<h2>Errors:</h2>';
        errors.forEach(error => {
            resultDiv.innerHTML += `<p class="error">${error}</p>`;
        });
    }
    if (ambiguities.length > 0) {
        resultDiv.innerHTML += '<h2>Potential Ambiguities:</h2>';
        ambiguities.forEach(ambiguity => {
            resultDiv.innerHTML += `<p class="ambiguity">${ambiguity}</p>`;
        });
    }
    if (errors.length === 0 && ambiguities.length === 0) {
        resultDiv.innerHTML = '<p>No grammatical errors or ambiguities detected.</p>';
    }
}
