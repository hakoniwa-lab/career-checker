/*
 * 質問フロー・状態管理・DOM描画。マッチングは match.js、結果描画は render.js に委譲する。
 */

const QUESTIONS = [
  {
    id: "employment_status",
    title: "今の働き方は？",
    options: [
      { value: "employee", label: "会社員として働いている" },
      { value: "freelance", label: "フリーランス・個人事業主" },
      { value: "unemployed", label: "離職中・求職中" },
      { value: "student", label: "学生" },
    ],
  },
  {
    id: "concern",
    title: "転職・キャリアで一番の悩みは？",
    options: [
      { value: "it_skillup", label: "ITエンジニアとしてキャリアアップしたい" },
      { value: "independence", label: "フリーランス・独立志向がある" },
      { value: "age_anxiety", label: "年齢的に転職が不安" },
      { value: "quit_difficulty", label: "退職を切り出しにくい" },
      { value: "disability_support", label: "障害・特性に配慮した働き方を探したい" },
    ],
  },
  {
    id: "work_style",
    title: "希望する働き方は？",
    options: [
      { value: "fulltime", label: "正社員" },
      { value: "freelance_contract", label: "フリーランス・業務委託" },
      { value: "either", label: "どちらでも" },
    ],
  },
  {
    id: "industry",
    title: "希望する業界は？",
    options: [
      { value: "it", label: "IT・エンジニア系" },
      { value: "other", label: "IT以外" },
      { value: "any", label: "こだわらない" },
    ],
  },
  {
    id: "age_range",
    title: "年齢層は？",
    options: [
      { value: "20s", label: "20代" },
      { value: "30s", label: "30代" },
      { value: "40s_plus", label: "40代以上" },
    ],
  },
];

const state = { index: 0, answers: {} };

const screens = {
  intro: document.getElementById("screen-intro"),
  quiz: document.getElementById("screen-quiz"),
  result: document.getElementById("screen-result"),
};
const quizCard = document.getElementById("quiz-card");
const progressBar = document.getElementById("progress-bar");
const progressLabel = document.getElementById("progress-label");
const backBtn = document.getElementById("btn-back");
const resultSummaryEl = document.getElementById("result-summary");
const resultListEl = document.getElementById("result-list");

function showScreen(name) {
  Object.keys(screens).forEach((key) => {
    screens[key].hidden = key !== name;
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function renderQuestion() {
  const q = QUESTIONS[state.index];
  progressLabel.textContent = `質問 ${state.index + 1} / ${QUESTIONS.length}`;
  progressBar.style.width = `${Math.round((state.index / QUESTIONS.length) * 100)}%`;
  backBtn.hidden = state.index === 0;

  let html = `<p class="quiz-question">${escapeHtml(q.title)}</p>`;
  html += `<div class="quiz-options">${q.options
    .map((o) => `<button type="button" class="quiz-option" data-value="${escapeHtml(o.value)}">${escapeHtml(o.label)}</button>`)
    .join("")}</div>`;

  quizCard.innerHTML = html;

  quizCard.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers[q.id] = btn.dataset.value;
      goNext();
    });
  });
}

function goNext() {
  if (state.index < QUESTIONS.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function goBack() {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
}

function finishQuiz() {
  progressBar.style.width = "100%";
  const matchResult = matchAgents(AGENTS, state.answers);
  renderResults(resultSummaryEl, resultListEl, matchResult, state.answers);
  showScreen("result");
}

function startQuiz() {
  state.index = 0;
  state.answers = {};
  showScreen("quiz");
  renderQuestion();
}

function restartQuiz() {
  showScreen("intro");
}

document.getElementById("btn-start").addEventListener("click", startQuiz);
document.getElementById("btn-back").addEventListener("click", goBack);
document.getElementById("btn-restart").addEventListener("click", restartQuiz);

showScreen("intro");
