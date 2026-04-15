document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;
    let score = 0;
    let answered = false;

    // Elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    
    const btnStart = document.getElementById('btn-start');
    const btnNext = document.getElementById('btn-next');
    const btnRestart = document.getElementById('btn-restart');
    
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const justificationBox = document.getElementById('justification-box');
    const justificationType = document.getElementById('justification-type');
    const justificationText = document.getElementById('justification-text');
    
    const progressFill = document.getElementById('progress-bar');
    const questionCounter = document.getElementById('question-counter');
    const scoreCounter = document.getElementById('score-counter');
    const scoreDisplay = document.getElementById('score-display');

    // Init
    btnStart.addEventListener('click', startQuiz);
    btnNext.addEventListener('click', nextQuestion);
    btnRestart.addEventListener('click', resetQuiz);

    function startQuiz() {
        welcomeScreen.classList.remove('active');
        quizScreen.classList.add('active');
        showQuestion();
    }

    function showQuestion() {
        answered = false;
        const q = quizQuestions[currentQuestionIndex];
        
        // Update counters
        questionCounter.innerText = `Questão ${currentQuestionIndex + 1} de ${quizQuestions.length}`;
        progressFill.style.width = `${((currentQuestionIndex) / quizQuestions.length) * 100}%`;
        
        // Setup question
        questionText.innerText = q.question;
        optionsContainer.innerHTML = '';
        justificationBox.classList.remove('visible', 'correct-feedback', 'wrong-feedback');
        btnNext.classList.remove('visible');

        q.options.forEach((opt, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.innerText = opt;
            button.addEventListener('click', () => handleSelect(index));
            optionsContainer.appendChild(button);
        });
    }

    function handleSelect(selectedIndex) {
        if (answered) return;
        answered = true;
        
        const q = quizQuestions[currentQuestionIndex];
        const isCorrect = selectedIndex === q.answer;
        const options = optionsContainer.querySelectorAll('.option');

        // Disable all
        options.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            score++;
            options[selectedIndex].classList.add('correct');
            justificationType.innerText = "Correto! ✨";
            justificationBox.classList.add('visible', 'correct-feedback');
            scoreCounter.innerText = `Acertos: ${score}`;
        } else {
            options[selectedIndex].classList.add('wrong');
            options[q.answer].classList.add('correct'); // Highlight the right one
            justificationType.innerText = "Não foi dessa vez... 💡";
            justificationBox.classList.add('visible', 'wrong-feedback');
        }

        justificationText.innerText = q.justification;
        btnNext.classList.add('visible');
        
        // Auto-scroll to feedback if needed on mobile
        setTimeout(() => {
            btnNext.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        
        scoreDisplay.innerText = `${score}/${quizQuestions.length}`;
        progressFill.style.width = '100%';
        
        const percentage = (score / quizQuestions.length) * 100;
        let msg = "";
        if (percentage >= 90) msg = "Excelente! Você domina o assunto.";
        else if (percentage >= 70) msg = "Muito bom! Falta pouco para a perfeição.";
        else if (percentage >= 50) msg = "Bom progresso, mas vale uma revisão.";
        else msg = "Continue estudando! A constância é o segredo.";
        
        document.getElementById('performance-msg').innerText = msg;
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        scoreCounter.innerText = `Acertos: 0`;
        resultsScreen.classList.remove('active');
        welcomeScreen.classList.add('active');
    }
});
