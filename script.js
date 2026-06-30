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
    const finalStartBtn = document.getElementById('final-start-btn');
    const finalCountEl = document.getElementById('final-count');
    const finalBasicStartBtn = document.getElementById('final-basic-start-btn');
    const finalBasicGenerateBtn = document.getElementById('final-basic-generate-btn');
    const finalBasicTotalEl = document.getElementById('final-basic-total');
    const finalAiStartBtn = document.getElementById('final-ai-start-btn');
    const finalAiCountEl = document.getElementById('final-ai-count');
    const finalAiBasicStartBtn = document.getElementById('final-ai-basic-start-btn');
    const finalAiBasicGenerateBtn = document.getElementById('final-ai-basic-generate-btn');
    const finalAiBasicTotalEl = document.getElementById('final-ai-basic-total');

    // Shared quiz elements
    const nextBtn = document.getElementById('next-btn');
    const quizBackBtn = document.getElementById('quiz-back-btn');
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
    let finalQuestions = [];
    let finalAiQuestions = [];
    let selectedQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let secondsElapsed = 0;
    let isAnswered = false;
    let currentQuizKey = '';
    let currentQuizSourceName = '';
    let currentQuizBadgeText = '';
    let currentAnswerRecords = [];
    let currentOptionOrders = [];

    // Quiz mode: 'basic', 'topic', 'midterm', 'final', or 'final-ai'
    let quizMode = 'basic';
    let activeTab = 'midterm';
    let currentTopicTitle = '';

    // Smart repetition
    let currentRound = 1;
    let wrongQuestionIds = [];
    let correctQuestionIds = [];
    const STORAGE_KEY = 'csharp_quiz_smart_state';
    const QUIZ_SESSION_PREFIX = 'csharp_quiz_session:';
    const ACTIVE_SESSION_KEY = 'csharp_quiz_active_session_key';
    const QUESTIONS_PER_EXAM = 30;

    // ===== TOPIC CATEGORIES CONFIG =====
    const TOPIC_CATEGORIES = [
        {
            id: 'class-members', icon: '🏗️',
            title: '1. Cấu trúc và thành phần của lớp (Class Members)',
            subtopics: [
                { id: 'constructor', title: 'Hàm khởi tạo (Constructor)', icon: '🔧',
                  desc: 'Cách khởi tạo, nạp chồng, quy tắc kiểu trả về, từ khóa this/base.',
                  tags: ['Constructor'] },
                { id: 'properties', title: 'Quản lý thuộc tính (Properties)', icon: '📋',
                  desc: 'Tính đóng gói, bộ truy cập get/set, bảo vệ trường dữ liệu.',
                  tags: ['Properties', 'Static property', 'Field'] },
                { id: 'static', title: 'Thành phần tĩnh (Static)', icon: '📌',
                  desc: 'Phân biệt biến/phương thức static và thành phần non-static; quy tắc truy cập.',
                  tags: ['Static', 'Static constructor', 'Static methods', 'Static field',
                         'Static method', 'Static và instance methods', 'Static và non-static'] },
                { id: 'methods', title: 'Phương thức (Methods)', icon: '⚡',
                  desc: 'Định nghĩa, cách sử dụng và nạp chồng phương thức.',
                  tags: ['Method overloading', 'Phương thức'] },
            ]
        },
        {
            id: 'oop-principles', icon: '🧬',
            title: '2. Các nguyên lý hướng đối tượng',
            subtopics: [
                { id: 'inheritance', title: 'Kế thừa (Inheritance)', icon: '🧬',
                  desc: 'Quan hệ cha - con, thứ tự gọi và thực thi constructor.',
                  tags: ['Inheritance', 'Kế thừa'] },
                { id: 'polymorphism', title: 'Đa hình (Polymorphism)', icon: '🎭',
                  desc: 'Phân biệt nạp chồng phương thức và ghi đè phương thức.',
                  tags: ['Polymorphism', 'Đa hình', 'Method overloading'] },
                { id: 'access-modifiers', title: 'Phạm vi truy cập (Access Modifiers)', icon: '🔐',
                  desc: 'Quy tắc sử dụng public, private, protected.',
                  tags: ['Access Modifiers', 'Phạm vi truy cập'] },
            ]
        },
        {
            id: 'exception', icon: '⚠️',
            title: '3. Xử lý ngoại lệ (Exception)',
            subtopics: [
                { id: 'runtime-error', title: 'Lỗi Runtime', icon: '⏱️',
                  desc: 'Khái niệm lỗi phát sinh khi chương trình đang chạy.',
                  tags: ['Runtime error', 'Lỗi Runtime', 'Exception'] },
                { id: 'try-catch-finally', title: 'try - catch - finally', icon: '🧱',
                  desc: 'Cấu trúc khối lệnh try, catch và finally.',
                  tags: ['try catch finally', 'Try catch finally', 'Exception'] },
                { id: 'throw', title: 'Ném ngoại lệ (throw)', icon: '↗️',
                  desc: 'Cơ chế và từ khóa ném ngoại lệ.',
                  tags: ['throw', 'Throw', 'Exception'] },
            ]
        },
        {
            id: 'interface', icon: '🔌',
            title: '4. Interface',
            subtopics: [
                { id: 'interface-contract', title: 'Bản thiết kế hành vi', icon: '📄',
                  desc: 'Interface như một hợp đồng về hành vi cần hiện thực.',
                  tags: ['Interface', 'Contract'] },
                { id: 'interface-instance', title: 'Không khởi tạo trực tiếp', icon: '🚫',
                  desc: 'Đặc điểm không thể tạo đối tượng trực tiếp từ interface.',
                  tags: ['Interface'] },
                { id: 'multiple-interface', title: 'Đa hiện thực interface', icon: '🧩',
                  desc: 'Cơ chế hiện thực nhiều interface trong cùng một lớp.',
                  tags: ['Interface', 'Multiple interface', 'Đa hiện thực'] },
            ]
        },
        {
            id: 'delegate-event', icon: '📣',
            title: '5. Delegate và Event',
            subtopics: [
                { id: 'delegate', title: 'Delegate', icon: '🔗',
                  desc: 'Bản chất tham chiếu phương thức, multicast delegate.',
                  tags: ['Delegate', 'Multicast delegate'] },
                { id: 'event', title: 'Event', icon: '📢',
                  desc: 'Mô hình Publisher - Subscriber, cơ chế kích hoạt và đăng ký sự kiện.',
                  tags: ['Event', 'Publisher Subscriber', 'Publisher - Subscriber'] },
            ]
        },
        {
            id: 'reading-debugging', icon: '🔍',
            title: '6. Kỹ năng đọc hiểu và sửa lỗi',
            subtopics: [
                { id: 'predict-output', title: 'Dự đoán kết quả', icon: '🔮',
                  desc: 'Phân tích logic luồng chạy, xác định giá trị biến hoặc kết quả in ra màn hình.',
                  tags: ['Dự đoán kết quả', 'Predict output'] },
                { id: 'find-errors', title: 'Phát hiện lỗi', icon: '🧪',
                  desc: 'Nhận diện lỗi cú pháp, lỗi vi phạm nguyên lý OOP hoặc lỗi ép kiểu.',
                  tags: ['Phát hiện lỗi', 'Syntax error', 'Ép kiểu'] },
            ]
        }
    ];

    // ===== QUESTION PARSER =====
    function parseMarkdown(md) {
        const questions = [];
        const questionBlocks = md.split(/^## Câu (?:sai )?\d+/m).slice(1);
        questionBlocks.forEach((block, idx) => {
            const lines = block.trim().split('\n');
            let qCode = '', topic = '', explanation = '';
            const qTextLines = [];
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
                if (options.length > 0 && t) {
                    options[options.length - 1] += '\n' + line;
                    return;
                }
                if (t && !options.length) qTextLines.push(line);
            });

            const parsedQuestion = splitQuestionTextAndCode(qTextLines.join('\n'), qCode);

            if (parsedQuestion.text && options.length > 0) {
                questions.push({
                    id: idx, text: parsedQuestion.text, code: parsedQuestion.code,
                    options, correct: correctIndex, explanation, topic
                });
            }
        });
        return questions;
    }

    function splitQuestionTextAndCode(text, code) {
        const normalizedText = String(text || '').replace(/\r\n/g, '\n').trim();
        const normalizedCode = String(code || '').trim();
        if (!normalizedText) return { text: '', code: normalizedCode };
        if (normalizedCode) return { text: normalizedText, code: normalizedCode };

        const lines = normalizedText.split('\n');
        const codeStart = findLooseCodeStart(lines);
        if (codeStart === -1) return { text: normalizedText, code: '' };

        const questionLines = lines.slice(0, codeStart).filter(line => line.trim());
        const codeLines = trimBlankLines(lines.slice(codeStart));
        return {
            text: questionLines.join('\n').trim(),
            code: codeLines.join('\n').trim()
        };
    }

    function findLooseCodeStart(lines) {
        for (let i = 0; i < lines.length; i++) {
            if (!looksLikeCSharpCodeStart(lines[i])) continue;
            if (scoreCodeRun(lines.slice(i)) >= 2) return i;
        }
        return -1;
    }

    function looksLikeCSharpCodeStart(line) {
        const t = line.trim();
        if (!t) return false;
        return /^(using|namespace|class|interface|struct|enum|try|catch|finally|if|else|for|foreach|while|switch)\b/.test(t)
            || /^(public|private|protected|internal|static|sealed|abstract|virtual|override|readonly|const)\b/.test(t)
            || /^(void|int|string|bool|double|float|decimal|char|var|object)\s+\w+/.test(t)
            || /^Console\.(Write|WriteLine|ReadLine)\b/.test(t)
            || /^[A-Z]\w*\s+\w+\s*=\s*new\b/.test(t)
            || /^\w+\s*=\s*[^=]/.test(t);
    }

    function scoreCodeRun(lines) {
        let score = 0;
        let seenCode = false;
        for (const line of lines) {
            const t = line.trim();
            if (!t) {
                if (seenCode) score += 0.25;
                continue;
            }
            if (/^[{}]$/.test(t) || /[;{}]$/.test(t) || looksLikeCSharpCodeStart(t)) {
                score++;
                seenCode = true;
                continue;
            }
            if (seenCode && /^[A-Za-z_]\w*\s*\(.*\)/.test(t)) score++;
        }
        return score;
    }

    function trimBlankLines(lines) {
        const copy = [...lines];
        while (copy.length && !copy[0].trim()) copy.shift();
        while (copy.length && !copy[copy.length - 1].trim()) copy.pop();
        return copy;
    }

    function loadQuestions() {
        if (window.questionBankData) {
            allQuestions = parseMarkdown(window.questionBankData);
            console.log(`Loaded ${allQuestions.length} questions.`);
            if (totalQuestionsEl) totalQuestionsEl.textContent = allQuestions.length;
            if (finalBasicTotalEl) finalBasicTotalEl.textContent = allQuestions.length;
            if (finalAiBasicTotalEl) finalAiBasicTotalEl.textContent = allQuestions.length;
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
        if (window.finalQuestionBankData) {
            finalQuestions = parseMarkdown(window.finalQuestionBankData);
            console.log(`Loaded ${finalQuestions.length} final questions.`);
            if (finalCountEl) finalCountEl.textContent = finalQuestions.length;
        }
        if (window.finalAiQuestionBankData) {
            finalAiQuestions = parseMarkdown(window.finalAiQuestionBankData);
            console.log(`Loaded ${finalAiQuestions.length} final AI questions.`);
            if (finalAiCountEl) finalAiCountEl.textContent = finalAiQuestions.length;
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
        const hashes = {
            midterm: '#giuaki',
            final: '#cuoiki',
            'final-ai': '#cuoiki-ai'
        };
        const hash = hashes[tabId] || '#giuaki';
        if (window.location.hash !== hash) window.location.hash = hash;
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            switchTab(btn.dataset.tab);
        });
    });

    function syncTabFromHash() {
        const tabs = {
            '#cuoiki': 'final',
            '#cuoiki-ai': 'final-ai'
        };
        switchTab(tabs[window.location.hash] || 'midterm');
    }

    function switchFinalSubtab(section, subtabId) {
        section.querySelectorAll('.final-subtab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.finalSubtab === subtabId);
        });
        section.querySelectorAll('.final-subtab-panel').forEach(panel => {
            panel.classList.toggle('active', panel.dataset.finalSubtab === subtabId);
        });
    }

    document.querySelectorAll('#final-start, #final-ai-start').forEach(section => {
        section.querySelectorAll('.final-subtab-btn').forEach(btn => {
            btn.addEventListener('click', () => switchFinalSubtab(section, btn.dataset.finalSubtab));
        });
    });

    // ===== TOPIC SELECTION (TAB 2) =====
    function buildTopicUI(containerId = 'topics-container', questionSource = topicQuestions, sourceName = 'topic') {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';

        TOPIC_CATEGORIES.forEach(cat => {
            const catDiv = document.createElement('div');
            catDiv.className = 'topic-category';

            // Count questions for this category
            let catCount = 0;
            cat.subtopics.forEach(sub => {
                sub._count = getQuestionsForTags(sub.tags, questionSource).length;
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
                    const resetBtn = document.createElement('button');
                    resetBtn.className = 'subtopic-reset-btn';
                    resetBtn.type = 'button';
                    resetBtn.textContent = 'Reset';
                    resetBtn.title = 'Xóa bài đang làm của chủ đề này';
                    resetBtn.addEventListener('click', event => {
                        event.stopPropagation();
                        clearQuizSession(`topic:${sourceName}:${sub.id}`);
                        showToast('Đã reset chủ đề này', 'info');
                    });
                    card.appendChild(resetBtn);
                    card.addEventListener('click', () => startTopicQuiz(sub, questionSource, sourceName));
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

    function getQuestionsForTags(tags, questionSource = topicQuestions) {
        if (!tags || tags.length === 0) return [];
        return questionSource.filter(q => tags.includes(q.topic));
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

    // ===== QUIZ SESSION CACHE =====
    function getQuestionSource(sourceName) {
        const sources = {
            basic: allQuestions,
            topic: topicQuestions,
            midterm: midtermQuestions,
            final: finalQuestions,
            'final-ai': finalAiQuestions
        };
        return sources[sourceName] || topicQuestions;
    }

    function sessionStorageKey(quizKey) {
        return QUIZ_SESSION_PREFIX + quizKey;
    }

    function loadQuizSession(quizKey) {
        try {
            return JSON.parse(localStorage.getItem(sessionStorageKey(quizKey)));
        } catch (e) {
            return null;
        }
    }

    function clearQuizSession(quizKey) {
        if (quizKey) localStorage.removeItem(sessionStorageKey(quizKey));
        if (localStorage.getItem(ACTIVE_SESSION_KEY) === quizKey) {
            localStorage.removeItem(ACTIVE_SESSION_KEY);
        }
    }

    function saveQuizSession() {
        if (!currentQuizKey) return;
        localStorage.setItem(ACTIVE_SESSION_KEY, currentQuizKey);
        localStorage.setItem(sessionStorageKey(currentQuizKey), JSON.stringify({
            quizKey: currentQuizKey,
            quizMode,
            sourceName: currentQuizSourceName,
            badgeText: currentQuizBadgeText,
            currentTopicTitle,
            activeTab,
            selectedIds: selectedQuestions.map(q => q.id),
            currentQuestionIndex,
            score,
            secondsElapsed,
            isAnswered,
            wrongQuestionIds,
            correctQuestionIds,
            answerRecords: currentAnswerRecords,
            optionOrders: currentOptionOrders
        }));
    }

    function restoreQuizSession(session) {
        if (!session || !session.selectedIds || !session.sourceName) return false;
        const source = getQuestionSource(session.sourceName);
        const byId = new Map(source.map(q => [q.id, q]));
        const restoredQuestions = session.selectedIds.map(id => byId.get(id)).filter(Boolean);
        if (!restoredQuestions.length || restoredQuestions.length !== session.selectedIds.length) return false;

        currentQuizKey = session.quizKey;
        quizMode = session.quizMode;
        currentQuizSourceName = session.sourceName;
        currentQuizBadgeText = session.badgeText;
        currentTopicTitle = session.currentTopicTitle || '';
        activeTab = session.activeTab || activeTab;
        selectedQuestions = restoredQuestions;
        currentQuestionIndex = Math.min(session.currentQuestionIndex || 0, selectedQuestions.length - 1);
        score = session.score || 0;
        secondsElapsed = session.secondsElapsed || 0;
        isAnswered = !!session.isAnswered;
        wrongQuestionIds = session.wrongQuestionIds || [];
        correctQuestionIds = session.correctQuestionIds || [];
        currentAnswerRecords = session.answerRecords || [];
        currentOptionOrders = session.optionOrders || [];
        beginQuiz(currentQuizBadgeText, { restore: true });
        return true;
    }

    function startCachedQuiz({ quizKey, mode, sourceName, questions, badgeText, topicTitle = '' }) {
        if (restoreQuizSession(loadQuizSession(quizKey))) {
            showToast('Đã tiếp tục bài đang làm', 'info');
            return;
        }

        currentQuizKey = quizKey;
        quizMode = mode;
        currentQuizSourceName = sourceName;
        currentQuizBadgeText = badgeText;
        currentTopicTitle = topicTitle;
        selectedQuestions = questions;
        wrongQuestionIds = [];
        correctQuestionIds = [];
        currentAnswerRecords = [];
        currentOptionOrders = selectedQuestions.map(q => shuffleArray(q.options.map((_, i) => i)));
        beginQuiz(badgeText);
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

    function startTopicQuiz(subtopic, questionSource = topicQuestions) {
        const qs = getQuestionsForTags(subtopic.tags, questionSource);
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

    function startFinalQuiz() {
        if (!finalQuestions.length) { loadQuestions(); if (!finalQuestions.length) return alert('Chưa có câu hỏi ôn cuối kỳ!'); }
        quizMode = 'final';
        selectedQuestions = shuffleArray([...finalQuestions]);
        wrongQuestionIds = [];
        correctQuestionIds = [];
        beginQuiz('🏁 Ôn thi cuối kỳ');
    }

    function startFinalAiQuiz() {
        if (!finalAiQuestions.length) { loadQuestions(); if (!finalAiQuestions.length) return alert('Chưa có câu hỏi ôn cuối kỳ - AI!'); }
        quizMode = 'final-ai';
        selectedQuestions = shuffleArray([...finalAiQuestions]);
        wrongQuestionIds = [];
        correctQuestionIds = [];
        beginQuiz('🤖 Ôn thi cuối kỳ - AI');
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

    function startBasicQuiz() {
        if (!allQuestions.length) { loadQuestions(); if (!allQuestions.length) return alert('Dữ liệu chưa sẵn sàng!'); }
        loadSmartState();
        updateRoundUI();
        const questions = generateSmartQuestionSet();
        if (!questions.length) return alert('Không thể tạo đề!');
        startCachedQuiz({
            quizKey: 'basic:main',
            mode: 'basic',
            sourceName: 'basic',
            questions,
            badgeText: 'Trắc nghiệm cơ bản - Lần ' + currentRound
        });
    }

    function startTopicQuiz(subtopic, questionSource = topicQuestions, sourceName = 'topic') {
        const qs = getQuestionsForTags(subtopic.tags, questionSource);
        if (!qs.length) return alert('Chưa có câu hỏi cho chủ đề này!');
        startCachedQuiz({
            quizKey: `topic:${sourceName}:${subtopic.id}`,
            mode: 'topic',
            sourceName,
            questions: shuffleArray([...qs]),
            badgeText: subtopic.icon + ' ' + subtopic.title,
            topicTitle: subtopic.title
        });
    }

    function startMidtermQuiz() {
        if (!midtermQuestions.length) { loadQuestions(); if (!midtermQuestions.length) return alert('Chưa có câu hỏi ôn giữa kỳ!'); }
        startCachedQuiz({
            quizKey: 'exam:midterm',
            mode: 'midterm',
            sourceName: 'midterm',
            questions: shuffleArray([...midtermQuestions]),
            badgeText: 'Ôn thi giữa kỳ'
        });
    }

    function startFinalQuiz() {
        if (!finalQuestions.length) { loadQuestions(); if (!finalQuestions.length) return alert('Chưa có câu hỏi ôn cuối kỳ!'); }
        startCachedQuiz({
            quizKey: 'exam:final',
            mode: 'final',
            sourceName: 'final',
            questions: shuffleArray([...finalQuestions]),
            badgeText: 'Ôn thi cuối kỳ'
        });
    }

    function startFinalAiQuiz() {
        if (!finalAiQuestions.length) { loadQuestions(); if (!finalAiQuestions.length) return alert('Chưa có câu hỏi ôn cuối kỳ - AI!'); }
        startCachedQuiz({
            quizKey: 'exam:final-ai',
            mode: 'final-ai',
            sourceName: 'final-ai',
            questions: shuffleArray([...finalAiQuestions]),
            badgeText: 'Ôn thi cuối kỳ - AI'
        });
    }

    function beginQuiz(badgeText, opts = {}) {
        if (!opts.restore) {
            currentQuizBadgeText = badgeText;
            currentQuestionIndex = 0;
            score = 0;
            secondsElapsed = 0;
            isAnswered = false;
            wrongQuestionIds = [];
            correctQuestionIds = [];
            currentAnswerRecords = [];
            currentOptionOrders = [];
        }

        if (quizModeBadge) {
            quizModeBadge.textContent = badgeText;
            quizModeBadge.className = 'quiz-mode-badge ' + quizMode;
        }

        showScreen('quiz');
        showQuestion();
        startTimer();
        saveQuizSession();
    }

    // ===== QUIZ ENGINE =====
    function showQuestion() {
        const q = selectedQuestions[currentQuestionIndex];
        const answerRecord = currentAnswerRecords[currentQuestionIndex];
        isAnswered = !!answerRecord;
        nextBtn.classList.toggle('hidden', !isAnswered);
        // Remove old explanation
        const oldExp = document.querySelector('.explanation');
        if (oldExp) oldExp.remove();

        questionNumber.innerText = `Câu ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
        progressBarFill.style.width = `${((currentQuestionIndex + 1) / selectedQuestions.length) * 100}%`;
        questionText.innerText = cleanDisplayText(q.text);

        if (q.code) { codeBlockWrapper.classList.remove('hidden'); questionCode.innerText = q.code; }
        else { codeBlockWrapper.classList.add('hidden'); }

        optionsContainer.innerHTML = '';
        if (!currentOptionOrders[currentQuestionIndex]) {
            currentOptionOrders[currentQuestionIndex] = shuffleArray(q.options.map((_, i) => i));
        }
        const indices = currentOptionOrders[currentQuestionIndex];
        indices.forEach(oi => {
            const div = document.createElement('div');
            div.className = 'option';
            div.innerHTML = `<div class="option-indicator"></div><span></span>`;
            div.querySelector('span').innerText = cleanDisplayText(q.options[oi]);
            div.dataset.originalIndex = oi;
            div.addEventListener('click', () => selectOption(oi, div));
            if (answerRecord) {
                if (oi === q.correct) div.classList.add('correct');
                if (oi === answerRecord.selectedIndex && oi !== q.correct) div.classList.add('wrong');
            }
            optionsContainer.appendChild(div);
        });

        if (answerRecord && q.explanation) {
            const exp = document.createElement('div');
            exp.className = 'explanation';
            exp.innerHTML = `<strong>💡 Giải thích:</strong> ${q.explanation}`;
            optionsContainer.parentElement.appendChild(exp);
        }
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

        currentAnswerRecords[currentQuestionIndex] = {
            selectedIndex: index,
            isCorrect: index === q.correct
        };

        if (q.explanation) {
            const exp = document.createElement('div');
            exp.className = 'explanation';
            exp.innerHTML = `<strong>💡 Giải thích:</strong> ${q.explanation}`;
            optionsContainer.parentElement.appendChild(exp);
        }
        nextBtn.classList.remove('hidden');
        saveQuizSession();
    }

    function nextQuestion() {
        const oldExp = document.querySelector('.explanation');
        if (oldExp) oldExp.remove();
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            saveQuizSession();
            showQuestion();
        }
        else showResults();
    }

    // ===== RESULTS =====
    function showResults() {
        clearInterval(timer);
        clearQuizSession(currentQuizKey);
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
        } else if (quizMode === 'midterm') {
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
        } else {
            // Final modes
            roundStat.style.display = 'none';
            reviewInfoDiv.style.display = 'none';
            const isFinalAi = quizMode === 'final-ai';
            const finalTitle = isFinalAi ? 'cuối kỳ - AI' : 'cuối kỳ';
            const finalBadge = isFinalAi ? '🤖 Ôn thi cuối kỳ - AI' : '🏁 Ôn thi cuối kỳ';

            const restartBtn2 = document.createElement('button');
            restartBtn2.className = 'primary-btn';
            restartBtn2.textContent = '🔄 Làm lại đề ' + finalTitle;
            restartBtn2.addEventListener('click', () => { beginQuiz(finalBadge); });
            resultButtons.appendChild(restartBtn2);

            const backBtn = document.createElement('button');
            backBtn.className = 'secondary-btn';
            backBtn.textContent = '← Quay lại tab ôn ' + finalTitle;
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

    function cleanDisplayText(text) {
        return String(text || '')
            .replace(/^-\s*\[[ x]\]\s*/gm, '')
            .replace(/```[a-zA-Z0-9_-]*\n?/g, '')
            .replace(/```/g, '')
            .replace(/`([^`\n]+)`/g, '$1')
            .trim();
    }

    function startTimer() {
        clearInterval(timer);
        const renderTimer = () => {
            const m = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
            const s = (secondsElapsed % 60).toString().padStart(2, '0');
            timerEl.innerText = `${m}:${s}`;
        };
        renderTimer();
        timer = setInterval(() => {
            secondsElapsed++;
            renderTimer();
            saveQuizSession();
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
    if (startBtn) startBtn.addEventListener('click', startBasicQuiz);
    if (generateBtn) generateBtn.addEventListener('click', startBasicQuiz);
    if (resetBtn) resetBtn.addEventListener('click', () => clearQuizSession('basic:main'));
    if (resetBtn) resetBtn.addEventListener('click', () => { resetSmartState(); showToast('Đã reset về lần 1!', 'info'); });
    if (midtermStartBtn) midtermStartBtn.addEventListener('click', startMidtermQuiz);
    if (finalStartBtn) finalStartBtn.addEventListener('click', startFinalQuiz);
    if (finalBasicStartBtn) finalBasicStartBtn.addEventListener('click', startBasicQuiz);
    if (finalBasicGenerateBtn) finalBasicGenerateBtn.addEventListener('click', startBasicQuiz);
    if (finalAiStartBtn) finalAiStartBtn.addEventListener('click', startFinalAiQuiz);
    if (finalAiBasicStartBtn) finalAiBasicStartBtn.addEventListener('click', startBasicQuiz);
    if (finalAiBasicGenerateBtn) finalAiBasicGenerateBtn.addEventListener('click', startBasicQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    if (quizBackBtn) quizBackBtn.addEventListener('click', () => {
        saveQuizSession();
        localStorage.removeItem(ACTIVE_SESSION_KEY);
        clearInterval(timer);
        goBackToTab();
    });
    window.addEventListener('hashchange', syncTabFromHash);

    // ===== INIT =====
    loadQuestions();
    loadSmartState();
    updateRoundUI();
    buildTopicUI();
    buildTopicUI('final-topics-container', finalQuestions.length ? finalQuestions : topicQuestions, finalQuestions.length ? 'final' : 'topic');
    buildTopicUI('final-ai-topics-container', finalAiQuestions, 'final-ai');
    syncTabFromHash();
    const activeSessionKey = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (activeSessionKey) restoreQuizSession(loadQuizSession(activeSessionKey));
});
