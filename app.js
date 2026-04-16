document.addEventListener('DOMContentLoaded', () => {
    // --- State Management ---
    let allQuestions = [];
    let currentFilteredQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let answered = false;
    let selectedCategory = 'all';
    let startTime = null;
    let timerInterval = null;
    let totalSeconds = 0;
    let wrongAnswersIndices = [];
    let isReviewMode = false;

    // --- DOM Elements ---
    const screens = {
        home: document.getElementById('home-screen'),
        quiz: document.getElementById('quiz-screen'),
        results: document.getElementById('results-screen'),
        history: document.getElementById('history-screen')
    };

    const homeElements = {
        btnStart: document.getElementById('btn-start'),
        subjectCards: document.querySelectorAll('.subject-card')
    };

    const quizElements = {
        timerVal: document.getElementById('timer-val'),
        progressText: document.getElementById('progress-text'),
        progressBarInner: document.getElementById('progress-bar-inner'),
        questionText: document.getElementById('question-text'),
        optionsList: document.getElementById('options-list'),
        explanationBox: document.getElementById('explanation-box'),
        explanationTitle: document.getElementById('explanation-title'),
        explanationText: document.getElementById('explanation-text'),
        btnNext: document.getElementById('btn-next')
    };

    const resultElements = {
        performanceMsg: document.getElementById('performance-msg'),
        circleProgress: document.getElementById('circle-progress'),
        resultPercent: document.getElementById('result-percent'),
        statCorrect: document.getElementById('stat-correct'),
        statTime: document.getElementById('stat-time'),
        btnReviewWrong: document.getElementById('btn-review-wrong'),
        btnRestart: document.getElementById('btn-restart')
    };

    const navElements = {
        btnUpload: document.getElementById('btn-upload'),
        fileInput: document.getElementById('file-input'),
        toggleHistory: document.getElementById('toggle-history'),
        toggleTheme: document.getElementById('toggle-theme'),
        closeHistory: document.getElementById('close-history'),
        historyList: document.getElementById('history-list')
    };

    // --- Initialization ---
    init();

    async function init() {
        try {
            const response = await fetch('questions.json');
            allQuestions = await response.json();
            setupEventListeners();
            loadHistory();
            refreshCategories();
        } catch (error) {
            console.error('Erro ao carregar questões:', error);
            // Don't alert here so users can still upload their own
            setupEventListeners();
        }
    }

    function setupEventListeners() {
        // Home Navigation
        setupCategoryListeners();

        homeElements.btnStart.addEventListener('click', () => startQuiz(false));

        // Quiz Logic
        quizElements.btnNext.addEventListener('click', nextQuestion);

        // Results Logic
        resultElements.btnRestart.addEventListener('click', resetToHome);
        resultElements.btnReviewWrong.addEventListener('click', () => startQuiz(true));

        // Nav & Utils
        navElements.toggleHistory.addEventListener('click', () => switchScreen('history'));
        navElements.closeHistory.addEventListener('click', () => switchScreen('home'));
        navElements.toggleTheme.addEventListener('click', toggleTheme);

        // Upload Logic
        navElements.btnUpload.addEventListener('click', () => navElements.fileInput.click());
        navElements.fileInput.addEventListener('change', handleFileUpload);
    }

    function setupCategoryListeners() {
        document.querySelectorAll('.subject-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.subject-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedCategory = card.dataset.category;
            });
        });
    }

    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (!Array.isArray(data)) throw new Error('O arquivo deve ser uma lista [] de questões.');
                
                allQuestions = data;
                refreshCategories();
                alert('Questões carregadas com sucesso! 🎉');
                switchScreen('home');
            } catch (err) {
                alert('Erro ao processar arquivo: ' + err.message);
            }
        };
        reader.readAsText(file);
    }

    function refreshCategories() {
        const categories = [...new Set(allQuestions.map(q => q.category))];
        const grid = document.querySelector('.subject-grid');
        
        // Mantemos "Todos" e geramos o resto
        let html = `
            <div class="subject-card selected" data-category="all">
                <span class="subject-icon">📚</span>
                <h3>Todos</h3>
                <p>${allQuestions.length} questões</p>
            </div>
        `;

        const icons = ['🔍', '📝', '📉', '🧠', '⚙️', '📊'];
        categories.forEach((cat, idx) => {
            if (!cat) return;
            const count = allQuestions.filter(q => q.category === cat).length;
            html += `
                <div class="subject-card" data-category="${cat}">
                    <span class="subject-icon">${icons[idx % icons.length]}</span>
                    <h3>${cat}</h3>
                    <p>${count} questões</p>
                </div>
            `;
        });

        grid.innerHTML = html;
        selectedCategory = 'all';
        setupCategoryListeners();
    }

    // --- Core Quiz Functions ---

    function startQuiz(reviewMode = false) {
        isReviewMode = reviewMode;
        
        if (reviewMode) {
            // Only use questions that were answered incorrectly
            currentFilteredQuestions = wrongAnswersIndices.map(idx => currentFilteredQuestions[idx]);
        } else {
            // Filter by category and shuffle
            if (selectedCategory === 'all') {
                currentFilteredQuestions = [...allQuestions];
            } else {
                currentFilteredQuestions = allQuestions.filter(q => q.category === selectedCategory);
            }
            shuffleArray(currentFilteredQuestions);
        }

        if (currentFilteredQuestions.length === 0) {
            alert('Nenhuma questão encontrada para os critérios selecionados.');
            return;
        }

        currentQuestionIndex = 0;
        score = 0;
        wrongAnswersIndices = [];
        totalSeconds = 0;
        
        switchScreen('quiz');
        startTimer();
        showQuestion();
    }

    function showQuestion() {
        answered = false;
        const q = currentFilteredQuestions[currentQuestionIndex];
        
        // Update UI
        quizElements.progressText.innerText = `Questão ${currentQuestionIndex + 1} de ${currentFilteredQuestions.length}`;
        const progressPercent = ((currentQuestionIndex) / currentFilteredQuestions.length) * 100;
        quizElements.progressBarInner.style.width = `${progressPercent}%`;
        
        quizElements.questionText.innerText = q.question;
        quizElements.optionsList.innerHTML = '';
        quizElements.explanationBox.classList.remove('visible');
        quizElements.btnNext.style.display = 'none';

        const labels = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `
                <span class="label">${labels[index]}</span>
                <span class="text">${opt}</span>
            `;
            btn.addEventListener('click', () => handleSelection(index));
            quizElements.optionsList.appendChild(btn);
        });
    }

    function handleSelection(selectedIndex) {
        if (answered) return;
        answered = true;

        const q = currentFilteredQuestions[currentQuestionIndex];
        const isCorrect = selectedIndex === q.answer;
        const btns = quizElements.optionsList.querySelectorAll('.option-btn');

        btns.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            score++;
            btns[selectedIndex].classList.add('correct');
            quizElements.explanationTitle.innerHTML = '✨ Resposta Correta!';
        } else {
            btns[selectedIndex].classList.add('wrong');
            btns[q.answer].classList.add('correct');
            quizElements.explanationTitle.innerHTML = '💡 Explicação';
            wrongAnswersIndices.push(currentQuestionIndex);
        }

        quizElements.explanationText.innerText = q.justification;
        quizElements.explanationBox.classList.add('visible');
        quizElements.btnNext.style.display = 'flex';

        // Scroll to feedback
        setTimeout(() => {
            quizElements.btnNext.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 100);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentFilteredQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        stopTimer();
        switchScreen('results');

        const percentage = Math.round((score / currentFilteredQuestions.length) * 100);
        
        // Stat Circle Animation
        const offset = 440 - (440 * percentage) / 100;
        resultElements.circleProgress.style.strokeDashoffset = offset;
        resultElements.resultPercent.innerText = `${percentage}%`;

        // Stats boxes
        resultElements.statCorrect.innerText = `${score}/${currentFilteredQuestions.length}`;
        resultElements.statTime.innerText = formatTime(totalSeconds);

        // Feedback message
        if (percentage >= 90) resultElements.performanceMsg.innerText = "Excelente! Você está pronto(a).";
        else if (percentage >= 70) resultElements.performanceMsg.innerText = "Muito bom! Mais um pouco e você atinge a perfeição.";
        else if (percentage >= 50) resultElements.performanceMsg.innerText = "Bom progresso, mas vale reforçar os estudos.";
        else resultElements.performanceMsg.innerText = "Continue estudando! Vamos focar na revisão?";

        // Review button visibility
        resultElements.btnReviewWrong.style.display = (wrongAnswersIndices.length > 0 && !isReviewMode) ? 'flex' : 'none';

        // Save to History
        if (!isReviewMode) {
            saveToHistory({
                date: new Date().toLocaleDateString('pt-BR'),
                category: selectedCategory,
                score: score,
                total: currentFilteredQuestions.length,
                time: totalSeconds
            });
        }
    }

    // --- Helper Functions ---

    function switchScreen(screenName) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[screenName].classList.add('active');
        window.scrollTo(0, 0);
    }

    function resetToHome() {
        switchScreen('home');
    }

    function startTimer() {
        totalSeconds = 0;
        updateTimerUI();
        timerInterval = setInterval(() => {
            totalSeconds++;
            updateTimerUI();
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function updateTimerUI() {
        quizElements.timerVal.innerText = formatTime(totalSeconds);
    }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function toggleTheme() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }

    // Load theme preference
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    // --- History Management ---

    function saveToHistory(entry) {
        let history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        history.unshift(entry);
        history = history.slice(0, 10); // Keep last 10
        localStorage.setItem('quizHistory', JSON.stringify(history));
        loadHistory();
    }

    function loadHistory() {
        const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        if (history.length === 0) {
            navElements.historyList.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 2rem;">Nenhum simulado realizado ainda.</p>';
            return;
        }

        navElements.historyList.innerHTML = history.map(h => `
            <div class="history-item">
                <div>
                    <div style="font-weight: 700; font-size: 0.9rem;">${h.category === 'all' ? 'Completo' : h.category}</div>
                    <div style="font-size: 0.75rem; color: var(--text-light);">${h.date} &bull; ${formatTime(h.time)}</div>
                </div>
                <div style="font-weight: 800; color: var(--primary); font-size: 1.1rem;">
                    ${Math.round((h.score / h.total) * 100)}%
                </div>
            </div>
        `).join('');
    }
});

