document.addEventListener('DOMContentLoaded', () => {
    // ===== DOM ELEMENTS =====
    const tabNav = document.getElementById('tab-nav');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabIndicator = document.querySelector('.tab-indicator');
    const tabPanels = document.querySelectorAll('.tab-panel');

    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const quizModeBadge = document.getElementById('quiz-mode-badge');

    // Basic tab elements
    const startBtn = document.getElementById('start-btn');
    const generateBtn = document.getElementById('generate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const roundBadge = document.getElementById('round-badge');
    const roundInfo = document.getElementById('round-info');
    const totalQuestionsEl = document.getElementById('total-questions');
    const midtermStartBtn = document.getElementById('midterm-start-btn');
    const midtermCountEl = document.getElementById('midterm-count');

    // Shared quiz elements
    const nextBtn = document.getElementById('next-btn');
    const questionText = document.getElementById('question-text');
    const questionCode = document.getElementById('question-code');
    const codeBlockWrapper = document.getElementById('code-block-wrapper');
    const optionsContainer = document.getElementById('options-container');
    const questionNumber = document.getElementById('question-number');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const timerEl = document.getElementById('timer');

    // Results elements
    const scoreText = document.getElementById('score-text');
    const scoreCircleFill = document.getElementById('score-circle-fill');
    const correctCountEl = document.getElementById('correct-count');
    const wrongCountEl = document.getElementById('wrong-count');
    const resultMessage = document.getElementById('result-message');
    const resultButtons = document.getElementById('result-buttons');
    const roundStat = document.getElementById('round-stat');
    const reviewInfoDiv = document.getElementById('review-info');

    // ===== STATE =====
    let allQuestions = [];
    let topicQuestions = [];
    let midtermQuestions = [];
    let selectedQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let secondsElapsed = 0;
    let isAnswered = false;

    // Quiz mode: 'basic', 'topic', or 'midterm'
    let quizMode = 'basic';
    let activeTab = 'basic';
    let currentTopicTitle = '';

    // Smart repetition
    let currentRound = 1;
    let wrongQuestionIds = [];
    let correctQuestionIds = [];
    const STORAGE_KEY = 'csharp_quiz_smart_state';
    const QUESTIONS_PER_EXAM = 30;

    // ===== TOPIC CATEGORIES CONFIG =====
    const TOPIC_CATEGORIES = [
        {
            id: 'class-members', icon: '🏗️',
            title: '1. Cấu trúc và thành phần của lớp (Class Members)',
            subtopics: [
                { id: 'constructor', title: 'Constructor', icon: '🔧',
                  desc: 'Cách khởi tạo đối tượng, nạp chồng constructor và các quy tắc về kiểu trả về',
                  tags: ['Constructor'] },
                { id: 'properties', title: 'Properties', icon: '📋',
                  desc: 'Sử dụng get/set để bảo vệ dữ liệu (Encapsulation)',
                  tags: ['Properties', 'Static property'] },
                { id: 'static', title: 'Thành phần tĩnh (Static)', icon: '📌',
                  desc: 'Phân biệt static và non-static: biến, phương thức, constructor',
                  tags: ['Static', 'Static constructor', 'Static methods', 'Static field',
                         'Static method', 'Static và instance methods', 'Static và non-static'] },
                { id: 'methods', title: 'Phương thức (Methods)', icon: '⚡',
                  desc: 'Định nghĩa, sử dụng và nạp chồng phương thức (Overloading)',
                  tags: ['Method overloading', 'Phương thức'] },
                { id: 'fields-class', title: 'Field & Class', icon: '📦',
                  desc: 'Khai báo field, class, tạo đối tượng',
                  tags: ['Field', 'Class', 'Class và object'] },
            ]
        },
        {
            id: 'programming-syntax', icon: '💻',
            title: '2. Kỹ thuật lập trình và cú pháp C#',
            subtopics: [
                { id: 'data-types', title: 'Kiểu dữ liệu & cấu trúc cơ bản', icon: '📊',
                  desc: 'Kiểu dữ liệu, cú pháp cơ bản, biến và gán giá trị',
                  tags: ['Kiểu dữ liệu', 'Cú pháp cơ bản', 'Cú pháp điều kiện',
                         'Cấu trúc chương trình', 'Biến và gán giá trị'] },
                { id: 'reference-type', title: 'Tham trị và tham chiếu', icon: '🔗',
                  desc: 'Phân biệt value type vs reference type, từ khóa ref',
                  tags: ['Reference type'] },
                { id: 'io', title: 'Xử lý chuỗi và I/O', icon: '💬',
                  desc: 'In dữ liệu ra màn hình, định dạng chuỗi, using System',
                  tags: ['Using và Console', 'Namespace'] },
                { id: 'enum', title: 'Enum & kiểu mở rộng', icon: '📝',
                  desc: 'Kiểu liệt kê (Enum), List, Array',
                  tags: ['Enum'] },
            ]
        },
        {
            id: 'advanced-oop', icon: '🧬',
            title: '3. Nguyên lý hướng đối tượng nâng cao',
            placeholder: true,
            subtopics: [
                { id: 'inheritance', title: 'Kế thừa (Inheritance)', icon: '🧬',
                  desc: 'Lớp con kế thừa từ lớp cha, thứ tự khởi tạo',
                  tags: ['Inheritance', 'Kế thừa'], placeholder: true },
                { id: 'polymorphism', title: 'Đa hình (Polymorphism)', icon: '🎭',
                  desc: 'Overloading vs Overriding, virtual/override',
                  tags: ['Polymorphism', 'Đa hình'], placeholder: true },
                { id: 'access-modifiers', title: 'Phạm vi truy cập', icon: '🔐',
                  desc: 'public, private, protected — kiểm soát quyền hạn',
                  tags: ['Access Modifiers', 'Phạm vi truy cập'], placeholder: true },
            ]
        },
        {
            id: 'code-reading', icon: '🔍',
            title: '4. Kỹ năng đọc hiểu và truy vết mã',
            placeholder: true,
            subtopics: [
                { id: 'predict-output', title: 'Dự đoán kết quả', icon: '🔮',
                  desc: 'Phân tích logic để xác định giá trị cuối cùng',
                  tags: ['Dự đoán kết quả'], placeholder: true },
                { id: 'find-errors', title: 'Phát hiện lỗi', icon: '🐛',
                  desc: 'Nhận diện lỗi cú pháp hoặc vi phạm nguyên tắc',
                  tags: ['Phát hiện lỗi'], placeholder: true },
            ]
        }
    ];

    // ===== QUESTION PARSER =====
    function parseMarkdown(md) {
        const questions = [];
        const questionBlocks = md.split(/^## Câu (?:sai )?\d+/m).slice(1);
        questionBlocks.forEach((block, idx) => {
            const lines = block.trim().split('\n');
            let qText = '', qCode = '', topic = '', explanation = '';
            let options = [], correctIndex = -1, inCodeBlock = false;

            lines.forEach(line => {
                const t = line.trim();
                if (t.startsWith('```')) { inCodeBlock = !inCodeBlock; return; }
                if (inCodeBlock) { qCode += line + '\n'; return; }
                if (t.startsWith('Chủ đề:')) { topic = t.replace('Chủ đề:', '').trim(); return; }
                if (t.startsWith('- Bạn chọn:') || t.startsWith('- Đáp án đúng:')) return;
                if (t.startsWith('- [ ]') || t.startsWith('- [x]')) {
                    const isCorrect = t.startsWith('- [x]');
                    options.push(t.replace(/- \[[ x]\] /, ''));
                    if (isCorrect) correctIndex = options.length - 1;
                    return;
                }
                if (t.startsWith('>')) { explanation = t.replace('>', '').trim(); return; }
                if (t && !options.length) qText += line + ' ';
            });

            if (qText && options.length > 0) {
                questions.push({
                    id: idx, text: qText.trim(), code: qCode.trim(),
                    options, correct: correctIndex, explanation, topic
                });
            }
        });
        return questions;
    }

    function loadQuestions() {
        if (window.questionBankData) {
            allQuestions = parseMarkdown(window.questionBankData);
            console.log(`Loaded ${allQuestions.length} questions.`);
            if (totalQuestionsEl) totalQuestionsEl.textContent = allQuestions.length;
        }
        if (window.topicQuestionBankData) {
            topicQuestions = parseMarkdown(window.topicQuestionBankData);
            console.log(`Loaded ${topicQuestions.length} topic questions.`);
        }
        if (window.midtermQuestionBankData) {
            midtermQuestions = parseMarkdown(window.midtermQuestionBankData);
            console.log(`Loaded ${midtermQuestions.length} midterm questions.`);
            if (midtermCountEl) midtermCountEl.textContent = midtermQuestions.length;
        }
    }

    // ===== TAB SWITCHING =====
    function switchTab(tabId) {
        activeTab = tabId;
        // Update buttons
        tabBtns.forEach((btn, i) => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
            if (btn.dataset.tab === tabId) {
                tabIndicator.style.transform = `translateX(${i * 100}%)`;
            }
        });
        // Show/hide panels
        tabPanels.forEach(p => p.classList.toggle('active', p.dataset.tab === tabId));
        // Hide quiz/results when switching tabs
        quizScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        tabNav.classList.remove('hidden');
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // ===== TOPIC SELECTION (TAB 2) =====
    function buildTopicUI() {
        const container = document.getElementById('topics-container');
        if (!container) return;
        container.innerHTML = '';

        TOPIC_CATEGORIES.forEach(cat => {
            const catDiv = document.createElement('div');
            catDiv.className = 'topic-category';

            // Count questions for this category
            let catCount = 0;
            cat.subtopics.forEach(sub => {
                sub._count = getQuestionsForTags(sub.tags).length;
                catCount += sub._count;
            });

            // Category header
            const header = document.createElement('div');
            header.className = 'category-header open';
            header.innerHTML = `
                <span class="category-icon">${cat.icon}</span>
                <span class="category-title">${cat.title}</span>
                <span class="category-count">${catCount} câu</span>
                <span class="category-chevron">▼</span>
            `;

            // Subtopics grid
            const grid = document.createElement('div');
            grid.className = 'subtopics-grid open';

            cat.subtopics.forEach(sub => {
                const card = document.createElement('div');
                const isDisabled = sub._count === 0;
                card.className = 'subtopic-card' + (isDisabled ? ' disabled' : '');
                card.innerHTML = `
                    <div class="subtopic-card-header">
                        <span class="subtopic-icon">${sub.icon}</span>
                        <span class="subtopic-title">${sub.title}</span>
                    </div>
                    <span class="subtopic-desc">${sub.desc}</span>
                    <span class="subtopic-badge ${isDisabled ? 'soon' : 'count'}">
                        ${isDisabled ? 'Sắp có' : sub._count + ' câu'}
                    </span>
                `;
                if (!isDisabled) {
                    card.addEventListener('click', () => startTopicQuiz(sub));
                }
                grid.appendChild(card);
            });

            // Toggle accordion
            header.addEventListener('click', () => {
                header.classList.toggle('open');
                grid.classList.toggle('open');
            });

            catDiv.appendChild(header);
            catDiv.appendChild(grid);
            container.appendChild(catDiv);
        });
    }

    function getQuestionsForTags(tags) {
        if (!tags || tags.length === 0) return [];
        return topicQuestions.filter(q => tags.includes(q.topic));
    }

    // ===== SCREEN MANAGEMENT =====
    function showScreen(screenId) {
        tabPanels.forEach(p => p.classList.remove('active'));
        quizScreen.classList.remove('active');
        resultScreen.classList.remove('active');

        if (screenId === 'quiz') {
            quizScreen.classList.add('active');
            tabNav.classList.add('hidden');
        } else if (screenId === 'result') {
            resultScreen.classList.add('active');
            tabNav.classList.add('hidden');
        } else {
            tabNav.classList.remove('hidden');
            const panel = document.querySelector(`.tab-panel[data-tab="${activeTab}"]`);
            if (panel) panel.classList.add('active');
        }
    }

    function goBackToTab() {
        showScreen('tab');
    }

    // ===== SMART REPETITION (Basic mode) =====
    function loadSmartState() {
        try {
            const s = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if (s) {
                currentRound = s.currentRound || 1;
                wrongQuestionIds = s.wrongQuestionIds || [];
                correctQuestionIds = s.correctQuestionIds || [];
            }
        } catch (e) { /* ignore */ }
    }
    function saveSmartState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            currentRound, wrongQuestionIds, correctQuestionIds
        }));
    }
    function resetSmartState() {
        currentRound = 1;
        wrongQuestionIds = [];
        correctQuestionIds = [];
        localStorage.removeItem(STORAGE_KEY);
        updateRoundUI();
    }
    function updateRoundUI() {
        if (roundBadge) roundBadge.textContent = `Lần ${currentRound}`;
        if (roundInfo) {
            const msgs = {
                1: 'Lần đầu — Chọn ngẫu nhiên hoàn toàn',
                2: 'Lần 2 — Câu sai 100% • Câu đúng 50% lặp lại',
                3: 'Lần 3 — Câu sai 100% • Câu đúng 30% lặp lại'
            };
            roundInfo.textContent = msgs[currentRound] || msgs[1];
        }
    }

    function generateSmartQuestionSet() {
        let selected = [];
        if (currentRound === 1) {
            selected = shuffleArray([...allQuestions]).slice(0, QUESTIONS_PER_EXAM);
        } else {
            const rate = currentRound === 2 ? 0.5 : 0.3;
            let must = wrongQuestionIds.map(id => allQuestions.find(q => q.id === id)).filter(Boolean);
            let maybe = correctQuestionIds.filter(() => Math.random() < rate)
                .map(id => allQuestions.find(q => q.id === id)).filter(Boolean);
            selected = [...must, ...maybe];
            const usedIds = new Set(selected.map(q => q.id));
            if (selected.length < QUESTIONS_PER_EXAM) {
                const rest = shuffleArray(allQuestions.filter(q => !usedIds.has(q.id)));
                selected = [...selected, ...rest.slice(0, QUESTIONS_PER_EXAM - selected.length)];
            }
            if (selected.length > QUESTIONS_PER_EXAM) {
                const wrongSet = new Set(wrongQuestionIds);
                const w = selected.filter(q => wrongSet.has(q.id));
                const o = shuffleArray(selected.filter(q => !wrongSet.has(q.id)));
                selected = [...w, ...o].slice(0, QUESTIONS_PER_EXAM);
            }
        }
        return shuffleArray(selected);
    }

    // ===== START QUIZ =====
    function startBasicQuiz() {
        if (!allQuestions.length) { loadQuestions(); if (!allQuestions.length) return alert('Dữ liệu chưa sẵn sàng!'); }
        quizMode = 'basic';
        loadSmartState();
        updateRoundUI();
        selectedQuestions = generateSmartQuestionSet();
        if (!selectedQuestions.length) return alert('Không thể tạo đề!');
        wrongQuestionIds = [];
        correctQuestionIds = [];
        beginQuiz('Trắc nghiệm cơ bản — Lần ' + currentRound);
    }

    function startTopicQuiz(subtopic) {
        const qs = getQuestionsForTags(subtopic.tags);
        if (!qs.length) return alert('Chưa có câu hỏi cho chủ đề này!');
        quizMode = 'topic';
        currentTopicTitle = subtopic.title;
        selectedQuestions = shuffleArray([...qs]);
        wrongQuestionIds = [];
        correctQuestionIds = [];
        beginQuiz(subtopic.icon + ' ' + subtopic.title);
    }

    function startMidtermQuiz() {
        if (!midtermQuestions.length) { loadQuestions(); if (!midtermQuestions.length) return alert('Chưa có câu hỏi ôn giữa kỳ!'); }
        quizMode = 'midterm';
        selectedQuestions = shuffleArray([...midtermQuestions]);
        wrongQuestionIds = [];
        correctQuestionIds = [];
        beginQuiz('🎓 Ôn thi giữa kỳ');
    }

    function beginQuiz(badgeText) {
        currentQuestionIndex = 0;
        score = 0;
        secondsElapsed = 0;
        isAnswered = false;

        // Set mode badge
        if (quizModeBadge) {
            quizModeBadge.textContent = badgeText;
            quizModeBadge.className = 'quiz-mode-badge ' + quizMode;
        }

        showScreen('quiz');
        showQuestion();
        startTimer();
    }

    // ===== QUIZ ENGINE =====
    function showQuestion() {
        const q = selectedQuestions[currentQuestionIndex];
        isAnswered = false;
        nextBtn.classList.add('hidden');
        // Remove old explanation
        const oldExp = document.querySelector('.explanation');
        if (oldExp) oldExp.remove();

        questionNumber.innerText = `Câu ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
        progressBarFill.style.width = `${((currentQuestionIndex + 1) / selectedQuestions.length) * 100}%`;
        questionText.innerText = q.text;

        if (q.code) { codeBlockWrapper.classList.remove('hidden'); questionCode.innerText = q.code; }
        else { codeBlockWrapper.classList.add('hidden'); }

        optionsContainer.innerHTML = '';
        const indices = shuffleArray(q.options.map((_, i) => i));
        indices.forEach(oi => {
            const div = document.createElement('div');
            div.className = 'option';
            div.innerHTML = `<div class="option-indicator"></div><span>${q.options[oi]}</span>`;
            div.dataset.originalIndex = oi;
            div.addEventListener('click', () => selectOption(oi, div));
            optionsContainer.appendChild(div);
        });
    }

    function selectOption(index, element) {
        if (isAnswered) return;
        isAnswered = true;
        const q = selectedQuestions[currentQuestionIndex];
        const options = optionsContainer.querySelectorAll('.option');

        if (index === q.correct) {
            score++;
            element.classList.add('correct');
            correctQuestionIds.push(q.id);
            showToast('Chính xác! ✓', 'success');
        } else {
            element.classList.add('wrong');
            wrongQuestionIds.push(q.id);
            options.forEach(opt => {
                if (parseInt(opt.dataset.originalIndex) === q.correct) opt.classList.add('correct');
            });
            showToast('Sai rồi! ✗', 'error');
        }

        if (q.explanation) {
            const exp = document.createElement('div');
            exp.className = 'explanation';
            exp.innerHTML = `<strong>💡 Giải thích:</strong> ${q.explanation}`;
            optionsContainer.parentElement.appendChild(exp);
        }
        nextBtn.classList.remove('hidden');
    }

    function nextQuestion() {
        const oldExp = document.querySelector('.explanation');
        if (oldExp) oldExp.remove();
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) showQuestion();
        else showResults();
    }

    // ===== RESULTS =====
    function showResults() {
        clearInterval(timer);
        const totalAnswered = selectedQuestions.length || 1;
        const percent = Math.round((score / totalAnswered) * 100);

        showScreen('result');

        scoreText.textContent = `${percent}%`;
        scoreCircleFill.setAttribute('stroke-dasharray', `${percent}, 100`);
        scoreCircleFill.style.strokeDasharray = `${percent} 100`;
        correctCountEl.innerText = score;
        wrongCountEl.innerText = selectedQuestions.length - score;

        if (percent >= 80) resultMessage.innerText = 'Xuất sắc! Bạn nắm rất vững kiến thức. 🎉';
        else if (percent >= 50) resultMessage.innerText = 'Khá tốt! Hãy ôn luyện thêm một chút. 💪';
        else resultMessage.innerText = 'Cần cố gắng hơn! Bạn nên xem lại lý thuyết. 📚';

        // Build result buttons based on mode
        resultButtons.innerHTML = '';

        if (quizMode === 'basic') {
            // Show round info
            roundStat.style.display = '';
            reviewInfoDiv.style.display = '';
            document.getElementById('round-result').textContent = `${currentRound}/3`;
            document.getElementById('wrong-review-count').textContent = wrongQuestionIds.length;
            saveSmartState();

            // Next round button
            const nextRoundBtn = document.createElement('button');
            nextRoundBtn.className = 'primary-btn';
            if (currentRound >= 3) {
                nextRoundBtn.textContent = '🔄 Reset & Tạo đề mới (Lần 1)';
                nextRoundBtn.addEventListener('click', () => { resetSmartState(); startBasicQuiz(); });
            } else {
                const nr = currentRound + 1;
                const rate = nr === 2 ? '50%' : '30%';
                nextRoundBtn.textContent = `📝 Tạo đề lần ${nr} (câu đúng lặp ${rate})`;
                nextRoundBtn.addEventListener('click', () => { currentRound++; saveSmartState(); startBasicQuiz(); });
            }
            resultButtons.appendChild(nextRoundBtn);

            // Restart button
            const restartBtn2 = document.createElement('button');
            restartBtn2.className = 'secondary-btn';
            restartBtn2.textContent = '🔄 Làm lại đề này';
            restartBtn2.addEventListener('click', () => { beginQuiz('Trắc nghiệm cơ bản — Lần ' + currentRound); });
            resultButtons.appendChild(restartBtn2);

            // Back button
            const backBtn = document.createElement('button');
            backBtn.className = 'ghost-btn';
            backBtn.textContent = '← Quay lại trang chủ';
            backBtn.addEventListener('click', goBackToTab);
            resultButtons.appendChild(backBtn);

        } else if (quizMode === 'topic') {
            // Topic mode
            roundStat.style.display = 'none';
            reviewInfoDiv.style.display = 'none';

            const restartBtn2 = document.createElement('button');
            restartBtn2.className = 'primary-btn';
            restartBtn2.textContent = '🔄 Làm lại chủ đề này';
            restartBtn2.addEventListener('click', () => { beginQuiz('📚 ' + currentTopicTitle); });
            resultButtons.appendChild(restartBtn2);

            const backBtn = document.createElement('button');
            backBtn.className = 'secondary-btn';
            backBtn.textContent = '← Quay lại chọn chủ đề';
            backBtn.addEventListener('click', goBackToTab);
            resultButtons.appendChild(backBtn);
        } else {
            // Midterm mode
            roundStat.style.display = 'none';
            reviewInfoDiv.style.display = 'none';

            const restartBtn2 = document.createElement('button');
            restartBtn2.className = 'primary-btn';
            restartBtn2.textContent = '🔄 Làm lại đề giữa kỳ';
            restartBtn2.addEventListener('click', () => { beginQuiz('🎓 Ôn thi giữa kỳ'); });
            resultButtons.appendChild(restartBtn2);

            const backBtn = document.createElement('button');
            backBtn.className = 'secondary-btn';
            backBtn.textContent = '← Quay lại tab ôn giữa kỳ';
            backBtn.addEventListener('click', goBackToTab);
            resultButtons.appendChild(backBtn);
        }
    }

    // ===== UTILITIES =====
    function shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function startTimer() {
        clearInterval(timer);
        secondsElapsed = 0;
        timer = setInterval(() => {
            secondsElapsed++;
            const m = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
            const s = (secondsElapsed % 60).toString().padStart(2, '0');
            timerEl.innerText = `${m}:${s}`;
        }, 1000);
    }

    function showToast(msg, type) {
        const toast = document.createElement('div');
        toast.innerText = msg;
        const bgs = { success: 'linear-gradient(135deg,#22c55e,#16a34a)', error: 'linear-gradient(135deg,#ef4444,#dc2626)', info: 'linear-gradient(135deg,#6366f1,#4f46e5)' };
        Object.assign(toast.style, {
            position: 'fixed', bottom: '30px', left: '50%',
            transform: 'translateX(-50%) translateY(20px)',
            padding: '12px 24px', borderRadius: '12px', color: 'white',
            background: bgs[type] || bgs.info,
            boxShadow: '0 10px 25px -3px rgba(0,0,0,0.4)',
            zIndex: 1000, opacity: 0,
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            fontWeight: '600', fontSize: '0.9rem'
        });
        document.body.appendChild(toast);
        requestAnimationFrame(() => { toast.style.opacity = 1; toast.style.transform = 'translateX(-50%) translateY(0)'; });
        setTimeout(() => { toast.style.opacity = 0; toast.style.transform = 'translateX(-50%) translateY(20px)'; setTimeout(() => toast.remove(), 300); }, 2000);
    }

    // ===== EVENT LISTENERS =====
    startBtn.addEventListener('click', startBasicQuiz);
    generateBtn.addEventListener('click', startBasicQuiz);
    resetBtn.addEventListener('click', () => { resetSmartState(); showToast('Đã reset về lần 1!', 'info'); });
    if (midtermStartBtn) midtermStartBtn.addEventListener('click', startMidtermQuiz);
    nextBtn.addEventListener('click', nextQuestion);

    // ===== INIT =====
    loadQuestions();
    loadSmartState();
    updateRoundUI();
    buildTopicUI();
});
