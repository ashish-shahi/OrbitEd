// main.js - Synchronized "Fresh Load" Logic
import { QUIZ_QUESTIONS } from './questions.js';
import { calculateResults } from './quiz.js';

// Global State
let currentQuestionIndex = 0;
let userAnswers = []; 

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const progressPercentDisplay = document.getElementById('progress-percent');
// Select the specific parent for the nav area
const questionArea = document.querySelector('.question-area'); 

function init() {
    // 1. Initial State: Loader is visible (z-index 20000). 
    // Content is HIDDEN because .app-loaded class is missing.
    
    renderQuestion();
    
    // 2. Wait 600ms for "Initialization" feel
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        
        // Prepare the layout (prevent layout jump)
        quizContainer.style.display = 'block'; 
        
        // 3. Trigger The Swap
        // Fade OUT Loader
        loader.style.opacity = '0';
        // Fade IN App (Header, Footer, Main)
        document.body.classList.add('app-loaded'); 
        
        // 4. Cleanup Loader from DOM
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); 
    }, 600); 
}

function renderQuestion() {
    const question = QUIZ_QUESTIONS[currentQuestionIndex];
    
    // Animate text
    questionText.style.opacity = 0;
    setTimeout(() => {
        questionText.textContent = question.question;
        questionText.style.opacity = 1;
    }, 200);

    // Update Progress
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${QUIZ_QUESTIONS.length}`;
    const percent = Math.round(((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100);
    progressBar.style.width = `${percent}%`;
    progressPercentDisplay.textContent = `${percent}%`;

    // Render Options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        // Restore previous selection if user went back
        const previousAnswer = userAnswers.find(a => a.questionId === question.id);
        if (previousAnswer && previousAnswer.selectedOptions.includes(option.text)) {
            card.classList.add('selected');
        }

        card.style.animation = `fadeInUp 0.4s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';
        
        card.textContent = option.text;
        card.onclick = () => toggleSelection(card, question);
        optionsContainer.appendChild(card);
    });

    // --- NAVIGATION BUTTONS LOGIC ---
    const existingNav = document.querySelector('.nav-area');
    if (existingNav) existingNav.remove();

    const navArea = document.createElement('div');
    navArea.className = 'nav-area';

    if (currentQuestionIndex > 0) {
        const backBtn = document.createElement('button');
        backBtn.className = 'back-btn';
        backBtn.innerHTML = `← Back`;
        backBtn.onclick = handleBack;
        navArea.appendChild(backBtn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    const isLast = currentQuestionIndex === QUIZ_QUESTIONS.length - 1;
    nextBtn.innerHTML = isLast ? 'Reveal Matches &rarr;' : 'Next Question &rarr;';
    nextBtn.onclick = handleNext;
    navArea.appendChild(nextBtn);

    questionArea.appendChild(navArea);
}

function toggleSelection(card, question) {
    const isSelected = card.classList.contains('selected');
    const currentSelected = optionsContainer.querySelectorAll('.selected');

    if (isSelected) {
        card.classList.remove('selected');
    } else {
        if (currentSelected.length < question.max_options) {
            card.classList.add('selected');
        } else {
            // Shake effect
            card.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-5px)' },
                { transform: 'translateX(5px)' },
                { transform: 'translateX(0)' }
            ], { duration: 300 });

            if(question.max_options === 1) {
                 currentSelected.forEach(el => el.classList.remove('selected'));
                 card.classList.add('selected');
            }
        }
    }
}

function handleBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        userAnswers.pop();
        renderQuestion();
    }
}

function handleNext() {
    const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
    const selectedCards = Array.from(optionsContainer.querySelectorAll('.selected'));
    
    if (selectedCards.length === 0 && !currentQuestion.optional) {
        const btn = document.querySelector('.next-btn');
        btn.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(5px)' },
            { transform: 'translateX(0)' }
        ], { duration: 300 });
        return;
    }

    const answerData = {
        questionId: currentQuestion.id,
        selectedOptions: selectedCards.map(card => card.textContent)
    };

    const existingIndex = userAnswers.findIndex(a => a.questionId === currentQuestion.id);
    if (existingIndex >= 0) {
        userAnswers[existingIndex] = answerData;
    } else {
        userAnswers.push(answerData);
    }

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResults();
    }
}

// --- UPDATED RESULTS SEQUENCE ---
function showResults() {
    const loader = document.getElementById('loading-screen');
    
    // 1. Show Loader VISUALLY instantly
    // Since it has z-index 20000 and solid white background, it COVERS the existing page.
    loader.style.display = 'flex';
    void loader.offsetWidth; // Force repaint
    loader.style.opacity = '1';
    
    // 2. Hide the App (Header/Footer/Main) "behind the scenes"
    // We remove the class, which sets opacity: 0 and visibility: hidden on UI elements.
    document.body.classList.remove('app-loaded');

    // 3. Update Text
    const loadingText = loader.querySelector('p');
    if(loadingText) loadingText.textContent = "Analyzing your profile...";

    // 4. Wait for "AI Calculation" (1.2s delay for dramatic effect)
    setTimeout(() => {
        // Swap Container Display
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Calculate Results
        const results = calculateResults(userAnswers, window.CAREERS_DATA || CAREERS_DATA); 
        renderResultsList(results.slice(0, 10)); 
        
        // 5. The Grand Reveal
        // Fade OUT Loader
        loader.style.opacity = '0';
        
        // Fade IN Header, Footer, and Results together
        document.body.classList.add('app-loaded'); 

        // Cleanup loader display after fade-out completes
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
        
    }, 1200); 
}

function renderResultsList(careers) {
    const list = document.getElementById('results-list');
    list.innerHTML = '';

    if (careers.length === 0) {
        list.innerHTML = `
            <div class="no-results-msg">
                <h3>No exact matches found.</h3>
                <p>Your "Deal Breakers" might be too strict. Try broadening your horizons.</p>
            </div>`;
        return;
    }

    const topScore = careers[0].score;
    const highestScore = Math.max(topScore, 50); 

    careers.forEach((career, index) => {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';

        let matchPercent = Math.round((career.score / highestScore) * 100);
        matchPercent = Math.min(100, Math.max(0, matchPercent));

        let matchClass = 'match-low';
        let matchLabel = 'Good Fit';
        if (matchPercent > 85) { matchClass = 'match-high'; matchLabel = 'Excellent Match'; }
        else if (matchPercent > 60) { matchClass = 'match-med'; matchLabel = 'Strong Match'; }

        const reasonsHtml = career.matchReasons.slice(0, 3)
            .map(r => `<span class="reason-tag">${r}</span>`).join('');

        card.innerHTML = `
            <div class="career-main">
                <div class="card-top-row">
                    <span class="domain-badge">${career.domain}</span>
                    <div class="match-pill ${matchClass}">
                        ${matchPercent}% ${matchLabel}
                    </div>
                </div>
                
                <h3 class="career-title">${career.title}</h3>
                <p class="career-desc">${career.content.short_desc}</p>
                
                <div class="card-actions">
                    <span class="metric-value" style="font-size: 0.9rem; color: var(--text-secondary)">
                        Salary: <strong>${career.compensation.display_range}</strong>
                    </span>
                    <button class="toggle-details-btn" onclick="toggleDetails(this)">
                        View Analysis <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                    </button>
                </div>
            </div>

            <div class="analysis-panel" hidden>
                <div class="metric-grid">
                    <div class="metric-item">
                        <span class="metric-label">Education</span>
                        <span class="metric-value" style="text-transform: capitalize">${career.requirements.education_level}</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-label">Work Style</span>
                        <span class="metric-value">${career.match_profile.work_style ? career.match_profile.work_style[0] : 'Various'}</span>
                    </div>
                </div>
                
                <div class="metric-item">
                    <span class="metric-label">Why it matches you</span>
                    <div class="match-reasons">
                        ${reasonsHtml || '<span class="reason-tag">Matches your general profile</span>'}
                    </div>
                </div>
            </div>
        `;
        list.appendChild(card);
    });
}

window.toggleDetails = function(btn) {
    const panel = btn.closest('.career-card').querySelector('.analysis-panel');
    const isHidden = panel.hidden;
    panel.hidden = !isHidden;
    
    const svg = btn.querySelector('svg');
    svg.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
    svg.style.transition = 'transform 0.3s ease';
    
    btn.innerHTML = isHidden 
        ? `Close Analysis <svg style="transform: rotate(180deg); transition: transform 0.3s" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>`
        : `View Analysis <svg style="transform: rotate(0deg); transition: transform 0.3s" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>`;
};

init();