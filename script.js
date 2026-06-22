document.addEventListener('DOMContentLoaded', () => {
    const ACTIVE_SESSION_KEY = 'biomed_quiz_active_session';
    const RANDOM_QUESTION_COUNT = 30;

    const tabNav = document.getElementById('tab-nav');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const partPanel = document.getElementById('part-panel');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');

    const partTitle = document.getElementById('part-title');
    const partSubtitle = document.getElementById('part-subtitle');
    const partCount = document.getElementById('part-count');
    const partStatus = document.getElementById('part-status');
    const partNotes = document.getElementById('part-notes');
    const partActions = document.getElementById('part-actions');
    const continueBtn = document.getElementById('continue-btn');
    const startRandomBtn = document.getElementById('start-random-btn');
    const startAllBtn = document.getElementById('start-all-btn');

    const quizModeBadge = document.getElementById('quiz-mode-badge');
    const backToPartsBtn = document.getElementById('back-to-parts-btn');
    const nextBtn = document.getElementById('next-btn');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionNumber = document.getElementById('question-number');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const timerEl = document.getElementById('timer');

    const scoreText = document.getElementById('score-text');
    const scoreCircleFill = document.getElementById('score-circle-fill');
    const correctCountEl = document.getElementById('correct-count');
    const wrongCountEl = document.getElementById('wrong-count');
    const resultMessage = document.getElementById('result-message');
    const resultButtons = document.getElementById('result-buttons');
    const roundResult = document.getElementById('round-result');
    const wrongReviewCount = document.getElementById('wrong-review-count');

    let parts = [];
    let activePartId = 'part1';
    let selectedQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let secondsElapsed = 0;
    let timer;
    let isAnswered = false;
    let selectedAnswers = {};
    let currentQuizLabel = '';

    function normalizeParts() {
        const source = Array.isArray(window.biomedQuestionParts) ? window.biomedQuestionParts : [];
        parts = source.map((part, partIndex) => ({
            ...part,
            questions: parseRawQuestions(part.raw || '', part.id || `part${partIndex + 1}`)
        }));
    }

    function parseRawQuestions(raw, partId) {
        const clean = raw.split(/BẢNG ĐÁP ÁN TỔNG HỢP/i)[0];
        const answerMap = parseAnswerMap(raw);
        const blocks = clean.split(/(?=Câu\s+\d+\.)/g).filter(block => /^Câu\s+\d+\./.test(block.trim()));

        return blocks.map((block, index) => {
            const questionMatch = block.match(/^Câu\s+(\d+)\.\s*([\s\S]*?)(?=\nA\.)/m);
            const answerMatch = block.match(/Đáp án:\s*([A-D])/i);
            const options = ['A', 'B', 'C', 'D'].map(letter => {
                const match = block.match(new RegExp(`\\n${letter}\\.\\s*([^\\n]+)`, 'i'));
                return match ? match[1].trim() : '';
            });
            const questionNumber = questionMatch ? Number(questionMatch[1]) : index + 1;
            const answerLetter = answerMatch
                ? answerMatch[1].toUpperCase()
                : (answerMap[questionNumber] || 'A');

            return {
                id: `${partId}-${index + 1}`,
                number: questionNumber,
                text: questionMatch ? questionMatch[2].trim() : `Câu ${index + 1}`,
                options,
                correct: answerLetter.charCodeAt(0) - 65,
                explanation: `Đáp án đúng: ${answerLetter}.`
            };
        }).filter(question => question.text && question.options.every(Boolean));
    }

    function parseAnswerMap(raw) {
        const answerStart = raw.search(/(?:ĐÁP ÁN|BẢNG ĐÁP ÁN)/i);
        if (answerStart < 0) return {};

        const answerText = raw.slice(answerStart);
        const map = {};
        const answerPattern = /(\d+)\s*[\.\-]\s*([A-D])/gi;
        let match;
        while ((match = answerPattern.exec(answerText)) !== null) {
            map[Number(match[1])] = match[2].toUpperCase();
        }
        return map;
    }

    function getActivePart() {
        return parts.find(part => part.id === activePartId) || parts[0];
    }

    function switchTab(partId) {
        activePartId = partId;
        tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === partId));
        showPartPanel();
        renderPartPanel();
    }

    function renderPartPanel() {
        const part = getActivePart();
        if (!part) return;

        const count = part.questions.length;
        partTitle.textContent = part.title;
        partSubtitle.textContent = part.subtitle || 'Chưa có mô tả cho phần này.';
        partCount.textContent = count;
        partStatus.textContent = count ? 'Sẵn sàng' : 'Chờ';
        partActions.classList.toggle('hidden', count === 0);
        startRandomBtn.disabled = count === 0;
        startAllBtn.disabled = count === 0;
        renderContinueButton();

        if (count) {
            const description = Array.isArray(part.description) && part.description.length
                ? part.description
                : [
                    `Ôn tập nội dung chính của ${part.title.toLowerCase()}.`,
                    'Các câu hỏi được lấy từ tài liệu môn học và dùng để tự kiểm tra kiến thức.'
                ];
            partNotes.innerHTML = description.map(line => `<li>${line}</li>`).join('');
        } else {
            partNotes.innerHTML = `
                <li>Nội dung của ${part.title.toLowerCase()} sẽ được bổ sung theo tài liệu môn học.</li>
                <li>Tab này hiện chưa có ngân hàng câu hỏi để làm bài.</li>
            `;
        }
    }

    function showPartPanel() {
        clearInterval(timer);
        saveActiveSession();
        partPanel.classList.add('active');
        quizScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        tabNav.classList.remove('hidden');
        renderContinueButton();
    }

    function showQuizScreen() {
        partPanel.classList.remove('active');
        resultScreen.classList.remove('active');
        quizScreen.classList.add('active');
        tabNav.classList.add('hidden');
    }

    function getSavedSession() {
        try {
            return JSON.parse(localStorage.getItem(ACTIVE_SESSION_KEY));
        } catch (e) {
            clearActiveSession();
            return null;
        }
    }

    function renderContinueButton() {
        const saved = getSavedSession();
        const canContinue = canRestoreSavedSession(saved, activePartId);
        continueBtn.classList.toggle('hidden', !canContinue);
        if (canContinue) {
            const current = (saved.currentQuestionIndex || 0) + 1;
            const total = saved.selectedQuestionIds.length;
            continueBtn.textContent = `Làm tiếp câu ${current}/${total}`;
        }
    }

    function canRestoreSavedSession(saved, partId = saved?.activePartId) {
        if (!saved || saved.activePartId !== partId || !Array.isArray(saved.selectedQuestionIds)) return false;

        const part = parts.find(item => item.id === partId);
        if (!part) return false;

        const questionIds = new Set(part.questions.map(question => question.id));
        return saved.selectedQuestionIds.length > 0
            && saved.selectedQuestionIds.every(id => questionIds.has(id));
    }

    function showResultScreen() {
        partPanel.classList.remove('active');
        quizScreen.classList.remove('active');
        resultScreen.classList.add('active');
        tabNav.classList.add('hidden');
    }

    function startQuiz(mode) {
        const part = getActivePart();
        if (!part || !part.questions.length) return;

        selectedQuestions = mode === 'all'
            ? shuffleArray(part.questions)
            : shuffleArray(part.questions).slice(0, Math.min(RANDOM_QUESTION_COUNT, part.questions.length));
        currentQuestionIndex = 0;
        score = 0;
        secondsElapsed = 0;
        selectedAnswers = {};
        currentQuizLabel = `${part.title} - ${mode === 'all' ? 'Toàn bộ' : `${selectedQuestions.length} câu`}`;

        quizModeBadge.textContent = currentQuizLabel;
        quizModeBadge.className = 'quiz-mode-badge part';
        showQuizScreen();
        showQuestion();
        startTimer(true);
        saveActiveSession();
    }

    function showQuestion() {
        const question = selectedQuestions[currentQuestionIndex];
        isAnswered = false;
        nextBtn.classList.add('hidden');
        removeExplanation();

        questionNumber.textContent = `Câu ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
        progressBarFill.style.width = `${((currentQuestionIndex + 1) / selectedQuestions.length) * 100}%`;
        questionText.textContent = question.text;
        optionsContainer.innerHTML = '';

        const indices = shuffleArray(question.options.map((_, index) => index));
        indices.forEach(optionIndex => {
            const option = document.createElement('div');
            option.className = 'option';
            option.dataset.originalIndex = optionIndex;
            option.innerHTML = `<div class="option-indicator"></div><span>${question.options[optionIndex]}</span>`;
            option.addEventListener('click', () => selectOption(optionIndex));
            optionsContainer.appendChild(option);
        });

        const savedAnswer = selectedAnswers[currentQuestionIndex];
        if (savedAnswer !== undefined) showAnsweredState(savedAnswer);
    }

    function selectOption(optionIndex) {
        if (isAnswered) return;

        const question = selectedQuestions[currentQuestionIndex];
        selectedAnswers[currentQuestionIndex] = optionIndex;
        if (optionIndex === question.correct) score++;

        showToast(optionIndex === question.correct ? 'Chính xác' : 'Sai rồi', optionIndex === question.correct ? 'success' : 'error');
        showAnsweredState(optionIndex);
        saveActiveSession();
    }

    function showAnsweredState(selectedIndex) {
        isAnswered = true;
        const question = selectedQuestions[currentQuestionIndex];

        optionsContainer.querySelectorAll('.option').forEach(option => {
            const originalIndex = Number(option.dataset.originalIndex);
            option.classList.toggle('correct', originalIndex === question.correct);
            option.classList.toggle('wrong', originalIndex === selectedIndex && selectedIndex !== question.correct);
        });

        removeExplanation();
        const explanation = document.createElement('div');
        explanation.className = 'explanation';
        explanation.innerHTML = `<strong>Giải thích:</strong> ${question.explanation}`;
        optionsContainer.parentElement.appendChild(explanation);
        nextBtn.classList.remove('hidden');
    }

    function nextQuestion() {
        removeExplanation();
        currentQuestionIndex++;

        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
            saveActiveSession();
        } else {
            showResults();
        }
    }

    function showResults() {
        clearInterval(timer);
        clearActiveSession();

        const total = selectedQuestions.length || 1;
        const wrongCount = total - score;
        const percent = Math.round((score / total) * 100);

        showResultScreen();
        scoreText.textContent = `${percent}%`;
        scoreCircleFill.setAttribute('stroke-dasharray', `${percent}, 100`);
        scoreCircleFill.style.strokeDasharray = `${percent} 100`;
        correctCountEl.textContent = score;
        wrongCountEl.textContent = wrongCount;
        roundResult.textContent = (getActivePart()?.title || '').replace('Phần ', '');
        wrongReviewCount.textContent = wrongCount;

        if (percent >= 80) resultMessage.textContent = 'Kết quả tốt. Có thể chuyển sang phần tiếp theo khi đã có dữ liệu.';
        else if (percent >= 50) resultMessage.textContent = 'Nên xem lại các câu sai trước khi làm tiếp.';
        else resultMessage.textContent = 'Cần ôn lại lý thuyết của phần này.';

        resultButtons.innerHTML = '';
        resultButtons.appendChild(makeButton('Làm lại lượt này', 'primary-btn', () => restartCurrentQuiz()));
        resultButtons.appendChild(makeButton('Quay lại 9 phần', 'secondary-btn', () => {
            showPartPanel();
            renderPartPanel();
        }));
    }

    function restartCurrentQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        secondsElapsed = 0;
        selectedAnswers = {};
        quizModeBadge.textContent = currentQuizLabel;
        showQuizScreen();
        showQuestion();
        startTimer(true);
        saveActiveSession();
    }

    function saveActiveSession() {
        if (!selectedQuestions.length || currentQuestionIndex >= selectedQuestions.length) return;

        localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify({
            activePartId,
            selectedQuestionIds: selectedQuestions.map(question => question.id),
            currentQuestionIndex,
            score,
            secondsElapsed,
            selectedAnswers,
            currentQuizLabel
        }));
    }

    function restoreActiveSession() {
        const saved = getSavedSession();
        if (!saved || !Array.isArray(saved.selectedQuestionIds)) return false;

        activePartId = saved.activePartId || 'part1';
        const part = getActivePart();
        if (!part) return false;

        selectedQuestions = saved.selectedQuestionIds
            .map(id => part.questions.find(question => question.id === id))
            .filter(Boolean);

        if (selectedQuestions.length !== saved.selectedQuestionIds.length) {
            clearActiveSession();
            return false;
        }

        currentQuestionIndex = saved.currentQuestionIndex || 0;
        score = saved.score || 0;
        secondsElapsed = saved.secondsElapsed || 0;
        selectedAnswers = saved.selectedAnswers || {};
        currentQuizLabel = saved.currentQuizLabel || part.title;

        tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === activePartId));
        quizModeBadge.textContent = currentQuizLabel;
        quizModeBadge.className = 'quiz-mode-badge part';
        showQuizScreen();
        showQuestion();
        startTimer(false);
        return true;
    }

    function clearActiveSession() {
        localStorage.removeItem(ACTIVE_SESSION_KEY);
    }

    function startTimer(reset) {
        clearInterval(timer);
        if (reset) secondsElapsed = 0;
        updateTimerUI();

        timer = setInterval(() => {
            secondsElapsed++;
            updateTimerUI();
            saveActiveSession();
        }, 1000);
    }

    function updateTimerUI() {
        const minutes = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
        const seconds = (secondsElapsed % 60).toString().padStart(2, '0');
        timerEl.textContent = `${minutes}:${seconds}`;
    }

    function removeExplanation() {
        const oldExplanation = document.querySelector('.explanation');
        if (oldExplanation) oldExplanation.remove();
    }

    function shuffleArray(items) {
        const copy = [...items];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function makeButton(text, className, onClick) {
        const button = document.createElement('button');
        button.className = className;
        button.textContent = text;
        button.addEventListener('click', onClick);
        return button;
    }

    function showToast(message, type) {
        const toast = document.createElement('div');
        const backgrounds = {
            success: 'linear-gradient(135deg,#22c55e,#16a34a)',
            error: 'linear-gradient(135deg,#ef4444,#dc2626)'
        };

        toast.textContent = message;
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%) translateY(20px)',
            padding: '12px 24px',
            borderRadius: '12px',
            color: 'white',
            background: backgrounds[type] || backgrounds.success,
            boxShadow: '0 10px 25px -3px rgba(0,0,0,0.4)',
            zIndex: 1000,
            opacity: 0,
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            fontWeight: '600',
            fontSize: '0.9rem'
        });
        document.body.appendChild(toast);
        requestAnimationFrame(() => {
            toast.style.opacity = 1;
            toast.style.transform = 'translateX(-50%) translateY(0)';
        });
        setTimeout(() => {
            toast.style.opacity = 0;
            toast.style.transform = 'translateX(-50%) translateY(20px)';
            setTimeout(() => toast.remove(), 300);
        }, 1400);
    }

    tabBtns.forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));
    continueBtn.addEventListener('click', restoreActiveSession);
    startRandomBtn.addEventListener('click', () => startQuiz('random'));
    startAllBtn.addEventListener('click', () => startQuiz('all'));
    backToPartsBtn.addEventListener('click', () => {
        showPartPanel();
        renderPartPanel();
    });
    nextBtn.addEventListener('click', nextQuestion);
    window.addEventListener('beforeunload', saveActiveSession);

    normalizeParts();
    renderPartPanel();
});
