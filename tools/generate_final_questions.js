const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const realQuizDir = path.join(root, 'cuoikitracnghiem', 'realquiz');
const outputFile = path.join(root, 'final_questions.js');

const LABELS = {
  header: '\u00d4n thi cu\u1ed1i k\u1ef3 - Real Quiz',
  question: 'C\u00e2u',
  topic: 'Ch\u1ee7 \u0111\u1ec1',
  correctAnswer: '\u0110\u00e1p \u00e1n \u0111\u00fang',
  explanation: 'Gi\u1ea3i th\u00edch',
};

const SOURCES = [
  { file: 'ck1_quiz_questions.md', topic: '\u0110\u1ec1 CK 1', expected: 40 },
  { file: 'ck2_quiz_questions.md', topic: '\u0110\u1ec1 CK 2', expected: 40 },
  { file: 'abstractclass_quiz_questions.md', topic: 'Abstract Class', expected: 20 },
  { file: 'exception_quiz_questions.md', topic: 'Exception', expected: 20 },
  { file: 'inheritance_poly_quiz_questions.md', topic: 'Inheritance & Polymorphism', expected: 20 },
  { file: 'interface_quiz_questions.md', topic: 'Real Interface', expected: 20 },
  { file: 'delegate_event_quiz_questions.md', topic: 'Delegate & Event', expected: 20 },
];

function clean(text) {
  return text
    .replace(/\r/g, '')
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+$/gm, '')
    .trim();
}

function parseQuestionBlock(block) {
  const lines = clean(block).split('\n');
  const stem = [];
  const options = [];
  let correct = '';
  let correctText = '';
  let explanation = '';
  let currentOption = null;
  let nextBulletOption = 0;
  let inExplanation = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;
    if (/^\*?\*?(?:C\u00e2u|Question)\s+\d+/i.test(line) || /^#+\s*(?:C\u00e2u|Question)\s+\d+/i.test(line)) continue;

    const answerMatch = line.match(/^(?:\*\*)?(?:\u0110\u00e1p \u00e1n \u0111\u00fang|Correct answer)\s*:?\s*(?:\*\*)?\s*(.+?)\s*(?:\*\*)?$/i);
    if (answerMatch) {
      const answerRaw = clean(answerMatch[1] || '').replace(/\*\*/g, '');
      const letterMatch = answerRaw.match(/^([A-D])(?:[).:]|\b)\s*(.*)$/i);
      if (letterMatch) {
        correct = letterMatch[1].toUpperCase();
        correctText = clean(letterMatch[2] || '');
      } else {
        correctText = answerRaw;
      }
      currentOption = null;
      inExplanation = false;
      continue;
    }

    const explanationMatch = line.match(/^(?:\*\*)?(?:Gi\u1ea3i th\u00edch|Explanation)\s*:?\s*(?:\*\*)?\s*(.*)$/i);
    if (explanationMatch) {
      explanation = clean(explanationMatch[1] || '');
      currentOption = null;
      inExplanation = true;
      continue;
    }

    const optionMatch = line.match(/^(?:[-*]\s*)?([A-D])[\).]\s+(.+)$/);
    if (optionMatch) {
      currentOption = optionMatch[1].toUpperCase();
      options.push({
        letter: currentOption,
        text: clean(optionMatch[2].replace(/\*\*$/g, '')),
      });
      inExplanation = false;
      continue;
    }

    const bulletOptionMatch = line.match(/^[-*]\s+(.+)$/);
    if (bulletOptionMatch) {
      currentOption = String.fromCharCode(65 + nextBulletOption);
      nextBulletOption += 1;
      options.push({
        letter: currentOption,
        text: clean(bulletOptionMatch[1].replace(/\*\*$/g, '')),
      });
      inExplanation = false;
      continue;
    }

    if (inExplanation) {
      explanation += `${explanation ? '\n' : ''}${rawLine}`;
    } else if (currentOption && /^[^-*#]/.test(rawLine)) {
      const option = options[options.length - 1];
      option.text = clean(`${option.text}\n${rawLine}`);
    } else {
      stem.push(rawLine);
      currentOption = null;
    }
  }

  if (options.length < 2 || !stem.length) return null;

  const normalizedCorrectText = correctText.toLowerCase();
  const correctOption =
    options.find(option => option.letter === correct) ||
    options.find(option => option.text.toLowerCase() === normalizedCorrectText);
  return {
    question: clean(stem.join('\n')),
    options: options.map(option => option.text),
    answer: correctOption ? correctOption.text : correctText,
    explanation: clean(explanation),
  };
}

function parseSource(source) {
  const filePath = path.join(realQuizDir, source.file);
  const content = fs.readFileSync(filePath, 'utf8');
  const blocks = content
    .split(/(?=^#{2,}\s*(?:C\u00e2u|Question)\s+\d+|^\*\*(?:C\u00e2u|Question)\s+\d+)/gmi)
    .map(clean)
    .filter(block => /(?:C\u00e2u|Question)\s+\d+/i.test(block));

  const questions = blocks
    .map(parseQuestionBlock)
    .filter(Boolean)
    .map(question => ({ ...question, topic: source.topic }));

  if (questions.length !== source.expected) {
    console.warn(`${source.file}: parsed ${questions.length}/${source.expected}`);
  } else {
    console.log(`${source.file}: ${questions.length}/${source.expected}`);
  }

  return questions;
}

function renderMarkdown(questions) {
  const lines = [`# ${LABELS.header}`, ''];

  questions.forEach((question, index) => {
    lines.push(`## ${LABELS.question} ${index + 1}`);
    lines.push(`${LABELS.topic}: ${question.topic}`);
    lines.push(question.question);
    lines.push('');
    question.options.forEach((option, optionIndex) => {
      const letter = String.fromCharCode(65 + optionIndex);
      lines.push(`${letter}. ${option}`);
    });
    lines.push('');
    lines.push(`${LABELS.correctAnswer}: ${question.answer}`);
    if (question.explanation) {
      lines.push(`${LABELS.explanation}: ${question.explanation}`);
    }
    lines.push('');
  });

  return `${lines.join('\n').trim()}\n`;
}

const questions = SOURCES.flatMap(parseSource);
const markdown = renderMarkdown(questions);
const output = `window.finalQuestionBankData = ${JSON.stringify(markdown)};\n`;
fs.writeFileSync(outputFile, output, 'utf8');
console.log(`generated ${questions.length} questions -> ${path.relative(root, outputFile)}`);
