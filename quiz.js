/**
 * AI-Powered Career Explorer - Intelligence Engine v3.2
 * -----------------------------------------------------
 * Updates:
 * 1. Added Previous/Next navigation logic.
 * 2. Deferred weight calculation to support answer modification.
 * 3. Updated UI rendering for premium separator.
 */

// --- CONFIGURATION ---
const CONFIG = {
    careersUrl: 'careers.json',
    questionsUrl: 'questions.json',
    totalQuestions: 8,
    debug: new URLSearchParams(window.location.search).get('debug') === '1'
};

// --- KNOWLEDGE BASE: DOMAINS & EXPLANATIONS ---
const DOMAIN_MAP = {
    'technology': 'Tech', 'coding': 'Tech', 'web_dev': 'Tech', 'backend_dev': 'Tech', 'data_science': 'Tech',
    'finance': 'Finance', 'money': 'Finance', 'investment': 'Finance', 'corporate': 'Finance',
    'healthcare': 'Health', 'biology': 'Health', 'medical': 'Health', 'doctor': 'Health',
    'creative': 'Arts', 'design': 'Arts', 'visual': 'Arts', 'writing': 'Arts',
    'trade': 'Trade', 'manual_labor': 'Trade', 'construction': 'Trade', 'mechanics': 'Trade',
    'science': 'Science', 'research': 'Science', 'physics': 'Science', 'chemistry': 'Science',
    'law': 'Law', 'government_exam': 'Law', 'policy': 'Law'
};

const TOKEN_REASONS = {
    'coding': 'Matches your interest in programming',
    'creative': 'Aligns with your creative preferences',
    'analytical': 'Requires the analytical skills you enjoy',
    'leadership': 'Fits your goal to lead and manage',
    'remote_possible': 'Supports your preference for remote work',
    'high_pay': 'Meets your high earning potential goal',
    'mathematics': 'Leverages your strength in math',
    'helping_people': 'Fulfills your desire to help others',
    'outdoor': 'Matches your preference for field work',
    'visual': 'Uses your visual design skills',
    'biology': 'Connects with your interest in biology',
    'finance': 'Matches your interest in financial markets',
    'social_impact': 'Aligns with your desire for social impact',
    'entrepreneurial': 'Fits your risk-taking/business mindset'
};

// --- TOKEN NORMALIZATION ---
const TOKEN_ALIASES = {
    'programming': 'coding', 'development': 'coding', 'backend': 'backend_dev', 
    'frontend': 'frontend_dev', 'js': 'javascript', 'web_development': 'web_dev',
    'admin': 'administration', 'manager': 'management', 'math': 'mathematics',
    'stats': 'statistics', 'med': 'medical', 'physician': 'doctor',
    'biz': 'business', 'tech': 'technology'
};

// --- STATE ---
const state = {
    careers: [], 
    questions: [], 
    currentQuestionIndex: 0,
    userWeights: {}, // Calculated at the end
    idf: {}, 
    invertedIndex: {}, 
    // Storage for selected options per question index
    answers: [], // Array of { questionId, selectedOptions: [] }
    dominantDomain: null
};

// --- DOM ELEMENTS ---
const dom = {
    app: document.getElementById('app'),
    quizContainer: document.getElementById('quiz-container'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    resultsContainer: document.getElementById('results-container'),
    resultsList: document.getElementById('results-list'),
    loading: document.getElementById('loading-screen')
};

// --- INITIALIZATION ---
async function init() {
    try {
        const [careersRes, questionsRes] = await Promise.all([
            fetch(CONFIG.careersUrl), fetch(CONFIG.questionsUrl)
        ]);
        if (!careersRes.ok || !questionsRes.ok) throw new Error("Failed to load data.");

        state.careers = await careersRes.json();
        state.questions = await questionsRes.json();

        // Initialize empty answers array
        state.answers = new Array(CONFIG.totalQuestions).fill(null);

        buildInvertedIndex();
        precomputeIDF();
        
        dom.loading.style.display = 'none';
        dom.quizContainer.style.display = 'block';
        renderQuestion();
    } catch (error) {
        console.error(error);
        dom.loading.innerHTML = `<span style="color:red">System Error: ${error.message}</span>`;
    }
}

function normalize(token) {
    const t = token.toLowerCase().trim();
    return TOKEN_ALIASES[t] || t;
}

// --- INDEXING ---
function buildInvertedIndex() {
    state.careers.forEach((career, index) => {
        career.tokens.forEach(raw => {
            const t = normalize(raw);
            if (!state.invertedIndex[t]) state.invertedIndex[t] = [];
            state.invertedIndex[t].push(index);
        });
    });
}

function precomputeIDF() {
    const docCount = state.careers.length;
    const tokenDocs = {};
    state.careers.forEach(c => {
        new Set(c.tokens.map(normalize)).forEach(t => tokenDocs[t] = (tokenDocs[t] || 0) + 1);
    });
    for (const [t, df] of Object.entries(tokenDocs)) {
        state.idf[t] = Math.log(1 + (docCount / df));
    }
}

// --- QUIZ LOGIC ---

function renderQuestion() {
    const q = state.questions[state.currentQuestionIndex];
    if (!q) return finishQuiz();

    // 1. Update Progress
    dom.questionText.innerText = q.text;
    dom.progressText.innerText = `Question ${state.currentQuestionIndex + 1} of ${CONFIG.totalQuestions}`;
    dom.progressBar.style.width = `${((state.currentQuestionIndex + 1) / CONFIG.totalQuestions) * 100}%`;
    dom.optionsContainer.innerHTML = '';

    // 2. Render Options
    q.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        
        // Check if previously selected
        const currentAns = state.answers[state.currentQuestionIndex];
        if (currentAns && currentAns.selectedOptions.some(o => o.text === opt.text)) {
            btn.classList.add('selected');
        }

        btn.onclick = () => handleSelection(q, opt, btn);
        dom.optionsContainer.appendChild(btn);
    });

    // 3. Render Navigation Buttons
    renderNavigation(q);
}

function renderNavigation(question) {
    const isFirst = state.currentQuestionIndex === 0;
    const isLast = state.currentQuestionIndex === CONFIG.totalQuestions - 1;
    
    const navDiv = document.createElement('div');
    navDiv.className = 'quiz-nav';
    
    // Previous Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-btn prev-btn';
    prevBtn.innerText = '← Previous';
    prevBtn.disabled = isFirst;
    prevBtn.onclick = prevQuestion;
    
    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-btn next-btn';
    nextBtn.id = 'global-next-btn';
    nextBtn.innerText = isLast ? 'Find My Careers' : 'Next Question →';
    nextBtn.onclick = nextQuestion;
    
    // Disable Next initially unless we have a saved answer
    const hasAnswer = !!state.answers[state.currentQuestionIndex];
    nextBtn.disabled = !hasAnswer;

    navDiv.appendChild(prevBtn);
    navDiv.appendChild(nextBtn);
    dom.optionsContainer.appendChild(navDiv);
}

function handleSelection(question, option, btn) {
    let currentAns = state.answers[state.currentQuestionIndex] || { questionId: question.id, selectedOptions: [] };

    if (question.type === 'single') {
        // Deselect all others visually
        const buttons = dom.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(b => b.classList.remove('selected'));
        
        // Select clicked
        btn.classList.add('selected');
        
        // Update State
        currentAns.selectedOptions = [option];
        
        // Auto-enable next
        document.getElementById('global-next-btn').disabled = false;
        
    } else {
        // Multi-select toggle
        btn.classList.toggle('selected');
        
        if (btn.classList.contains('selected')) {
            // Add if not present
            if (!currentAns.selectedOptions.find(o => o.text === option.text)) {
                currentAns.selectedOptions.push(option);
            }
        } else {
            // Remove
            currentAns.selectedOptions = currentAns.selectedOptions.filter(o => o.text !== option.text);
        }
        
        // Enable Next if at least one selected
        document.getElementById('global-next-btn').disabled = currentAns.selectedOptions.length === 0;
    }

    // Save to state
    state.answers[state.currentQuestionIndex] = currentAns;
}

function prevQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        renderQuestion();
    }
}

function nextQuestion() {
    // Double check we have an answer (security)
    if (!state.answers[state.currentQuestionIndex] || state.answers[state.currentQuestionIndex].selectedOptions.length === 0) return;

    state.currentQuestionIndex++;
    if (state.currentQuestionIndex < CONFIG.totalQuestions) {
        renderQuestion();
    } else {
        finishQuiz();
    }
}

// --- ENGINE CORE (Deferred Calculation) ---

function computeUserWeights() {
    state.userWeights = {}; // Reset before calc
    
    state.answers.forEach(ans => {
        if (!ans) return;
        ans.selectedOptions.forEach(opt => {
            if (opt.weights) {
                applyWeights(opt.weights);
            }
        });
    });
}

function applyWeights(weights) {
    for (const [k, v] of Object.entries(weights)) {
        const t = normalize(k);
        state.userWeights[t] = (state.userWeights[t] || 0) + v;
    }
}

function determineDominantDomain() {
    const domainScores = {};
    for (const [token, weight] of Object.entries(state.userWeights)) {
        if (weight > 0 && DOMAIN_MAP[token]) {
            const domain = DOMAIN_MAP[token];
            domainScores[domain] = (domainScores[domain] || 0) + weight;
        }
    }
    let bestDomain = null;
    let maxScore = -Infinity;
    for (const [d, s] of Object.entries(domainScores)) {
        if (s > maxScore) { maxScore = s; bestDomain = d; }
    }
    state.dominantDomain = bestDomain;
    if (CONFIG.debug) console.log("Dominant Domain:", bestDomain, domainScores);
}

function calculateMatches() {
    // 1. Re-run weight summing from selection history
    computeUserWeights();
    determineDominantDomain();

    const candidateIndices = new Set();
    Object.keys(state.userWeights).forEach(t => {
        if (state.userWeights[t] > 0 && state.invertedIndex[t]) {
            state.invertedIndex[t].forEach(i => candidateIndices.add(i));
        }
    });

    let scores = Array.from(candidateIndices).map(index => {
        const career = state.careers[index];
        let rawScore = 0;
        let matchReasons = [];
        let matchedCount = 0;
        let missingReq = 0;

        career.tokens.forEach(rawToken => {
            const t = normalize(rawToken);
            const userW = state.userWeights[t];
            
            if (['high_growth', 'medium_growth'].includes(t)) return;

            if (userW) {
                const idfVal = state.idf[t] || 1.5;
                const tokenScore = userW * idfVal;
                
                rawScore += tokenScore;
                matchedCount++;

                if (userW > 0 && TOKEN_REASONS[t] && matchReasons.length < 3) {
                    matchReasons.push(TOKEN_REASONS[t]);
                }
            }
            
            if (userW < 0) {
                rawScore += (userW * 5); 
            }
        });

        let domainPenalty = 1.0;
        const careerDomain = getCareerDomain(career.tokens);
        if (state.dominantDomain && careerDomain && careerDomain !== state.dominantDomain) {
            domainPenalty = 0.70; 
            rawScore *= domainPenalty;
        }

        const richness = career.tokens.length || 1;
        const ratio = matchedCount / richness;

        if (career.required_tokens) {
            career.required_tokens.forEach(req => {
                const normReq = normalize(req);
                if (!state.userWeights[normReq] || state.userWeights[normReq] <= 0) missingReq++;
            });
        }
        if (missingReq > 0) rawScore -= (missingReq * 15);

        if (career.growth === 'High Growth') rawScore += 2;
        if (career.growth === 'Medium Growth') rawScore += 1;

        let finalScore = rawScore / Math.log(1 + richness);

        if (ratio < 0.18) finalScore *= 0.6; 
        else if (ratio < 0.30) finalScore *= 0.85;

        return {
            ...career,
            rawScore: finalScore,
            matchedRatio: ratio,
            matchReasons: matchReasons,
            debug: { domain: careerDomain, penalty: domainPenalty, raw: rawScore }
        };
    });

    scores.sort((a, b) => b.rawScore - a.rawScore);
    const topScore = scores[0]?.rawScore || 1;

    scores = scores.map(c => {
        let percent = (c.rawScore / topScore) * 98;
        if (c.matchedRatio < 0.25) percent = Math.min(percent, 65);
        return { ...c, matchPercent: Math.round(Math.max(0, percent)) };
    });

    return scores.sort((a, b) => b.matchPercent - a.matchPercent);
}

function getCareerDomain(tokens) {
    for (let t of tokens) {
        if (DOMAIN_MAP[normalize(t)]) return DOMAIN_MAP[normalize(t)];
    }
    return 'General';
}

// --- RESULTS UI ---
function finishQuiz() {
    dom.quizContainer.style.display = 'none';
    dom.resultsContainer.style.display = 'block';
    
    dom.resultsList.innerHTML = '';

    const results = calculateMatches();
    const topMatch = results[0];

    if (!topMatch || topMatch.matchPercent < 40) {
        dom.resultsList.innerHTML = `<div class="warning-banner"><strong>Broad Interests Detected:</strong> We couldn't pinpoint one perfect path, but these options fit your general profile.</div>`;
    }

    let hasRenderedSeparator = false;

    results.slice(0, 10).forEach((career, index) => {
        // Separator Logic
        if (index > 0 && !hasRenderedSeparator && career.matchPercent < 75) {
            const sep = document.createElement('div');
            sep.className = 'results-separator';
            sep.innerHTML = `<span>Other Potential Matches</span>`;
            dom.resultsList.appendChild(sep);
            hasRenderedSeparator = true;
        }

        const tier = getConfidenceTier(career.matchPercent);
        
        const card = document.createElement('div');
        card.className = 'career-card';
        card.innerHTML = `
            <div class="card-header">
                <h2 class="career-title">${career.title}</h2>
                <div style="text-align:right">
                    <span class="match-badge ${getMatchColor(career.matchPercent)}">${career.matchPercent}% Match</span>
                    <div style="font-size:0.75rem; color:#666; margin-top:4px; font-weight:600">${tier}</div>
                </div>
            </div>
            <p class="career-desc">${career.short_desc}</p>
            
            <div style="background:#f9fafb; padding:12px; border-radius:8px; margin-bottom:16px; border:1px solid #f3f4f6;">
                <strong style="font-size:0.75rem; color:#6b7280; text-transform:uppercase; letter-spacing:0.05em;">Why this matches</strong>
                <ul style="margin:8px 0 0 18px; padding:0; font-size:0.9rem; color:#374151; line-height:1.4;">
                    ${career.matchReasons.map(r => `<li>${r}</li>`).join('') || '<li>General fit based on profile</li>'}
                </ul>
            </div>

            <div class="tags">
                ${career.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
                <span class="tag growth">${career.growth}</span>
            </div>
            
            <div class="career-details">
                <p><strong>Salary:</strong> ${career.salary_range}</p>
            </div>
            
            ${CONFIG.debug ? renderDebug(career) : ''}
            
            <button class="details-btn" onclick="toggleDetails('${career.id}')">View Full Pathway ↓</button>
            
            <div id="details-${career.id}" class="hidden-details" style="display:none;">
                <div class="detail-row">
                    <div class="detail-label">The Role</div>
                    <div class="detail-content">${career.long_desc}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Education Pathway</div>
                    <div class="detail-content">${career.pathway}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Sample Roles</div>
                    <div class="detail-content">${career.sample_roles.join(', ')}</div>
                </div>
            </div>
        `;
        dom.resultsList.appendChild(card);
    });
}

function getConfidenceTier(score) {
    if (score >= 90) return "Excellent Match";
    if (score >= 80) return "Strong Option";
    if (score >= 65) return "Good Fit";
    return "Possible Match";
}

function getMatchColor(percent) {
    if (percent >= 85) return 'match-high';
    if (percent >= 65) return 'match-med';
    return 'match-low';
}

function renderDebug(c) {
    return `<div class="debug-info">Raw:${c.rawScore.toFixed(1)} | Ratio:${c.matchedRatio.toFixed(2)} | DomPenalty:${c.debug.penalty}</div>`;
}

window.toggleDetails = (id) => {
    const el = document.getElementById(`details-${id}`);
    const btn = document.querySelector(`button[onclick="toggleDetails('${id}')"]`);
    const isHidden = el.style.display === 'none';
    
    el.style.display = isHidden ? 'block' : 'none';
    btn.innerText = isHidden ? 'Hide Pathway ↑' : 'View Full Pathway ↓';
};

document.addEventListener('DOMContentLoaded', init);