/**
 * Simulado de Qualidade de Software - Application Controller
 * Handles state, events, timer, scoring, views, and persistence.
 */

import { questionsData, topicsSummary } from './data/questions.js';

// =============================================================================
// Application State
// =============================================================================

const state = {
  activeView: 'view-home',
  quizQuestions: [],
  currentIndex: 0,
  userAnswers: {},         // { [questionId]: selectedOptionIndex }
  flaggedQuestions: new Set(),
  mode: 'exam',            // 'exam' | 'study'
  timerTotalSeconds: 0,
  timerRemainingSeconds: 0,
  timerInterval: null,
  startTime: null,
  endTime: null,
  activeFilter: 'all',     // for review screen: 'all' | 'incorrect' | 'correct' | 'blank' | 'flagged'
  theme: 'light',
  lastQuizResult: null
};

// =============================================================================
// DOM Elements Cache
// =============================================================================

const dom = {
  // Navigation
  btnLogoHome: document.getElementById('btn-logo-home'),
  navBtnHome: document.getElementById('nav-btn-home'),
  navBtnPractice: document.getElementById('nav-btn-practice'),
  navBtnTheory: document.getElementById('nav-btn-theory'),
  navBtnHistory: document.getElementById('nav-btn-history'),
  btnHeroStudy: document.getElementById('btn-hero-study'),
  btnThemeToggle: document.getElementById('btn-theme-toggle'),
  themeIcon: document.getElementById('theme-icon'),

  // Views
  viewHome: document.getElementById('view-home'),
  viewQuiz: document.getElementById('view-quiz'),
  viewResults: document.getElementById('view-results'),
  viewReview: document.getElementById('view-review'),
  viewTheory: document.getElementById('view-theory'),
  viewHistory: document.getElementById('view-history'),

  // Setup view
  configTopic: document.getElementById('config-topic'),
  configTime: document.getElementById('config-time'),
  configShuffle: document.getElementById('config-shuffle'),
  cardModeExam: document.getElementById('card-mode-exam'),
  cardModeStudy: document.getElementById('card-mode-study'),
  btnStartQuiz: document.getElementById('btn-start-quiz'),

  // Quiz view
  quizQuestionCounter: document.getElementById('quiz-question-counter'),
  quizAnsweredCount: document.getElementById('quiz-answered-count'),
  quizProgressBar: document.getElementById('quiz-progress-bar'),
  quizTimerContainer: document.getElementById('quiz-timer-container'),
  quizTimerText: document.getElementById('quiz-timer-text'),
  btnFlagQuestion: document.getElementById('btn-flag-question'),
  btnFlagText: document.getElementById('btn-flag-text'),
  btnTogglePalette: document.getElementById('btn-toggle-palette'),
  quizLayoutWrapper: document.getElementById('quiz-layout-wrapper'),
  quizSidebarPanel: document.getElementById('quiz-sidebar-panel'),
  sidebarBackdrop: document.getElementById('sidebar-backdrop'),
  btnCloseSidebar: document.getElementById('btn-close-sidebar'),
  questionPaletteContainer: document.getElementById('question-palette-container'),

  // Question Card
  cardTopicBadge: document.getElementById('card-topic-badge'),
  cardDiffBadge: document.getElementById('card-diff-badge'),
  cardSubtopic: document.getElementById('card-subtopic'),
  cardQuestionText: document.getElementById('card-question-text'),
  cardOptionsContainer: document.getElementById('card-options-container'),
  studyFeedbackContainer: document.getElementById('study-feedback-container'),
  studyFeedbackTitle: document.getElementById('study-feedback-title'),
  studyFeedbackText: document.getElementById('study-feedback-text'),
  studyFeedbackRef: document.getElementById('study-feedback-ref'),

  // Quiz Navigation Buttons
  btnPrevQuestion: document.getElementById('btn-prev-question'),
  btnClearAnswer: document.getElementById('btn-clear-answer'),
  btnNextQuestion: document.getElementById('btn-next-question'),
  btnFinishQuiz: document.getElementById('btn-finish-quiz'),

  // Results View
  resultsScoreCircle: document.getElementById('results-score-circle'),
  resultsScorePct: document.getElementById('results-score-pct'),
  resultsScoreFraction: document.getElementById('results-score-fraction'),
  resultsFeedbackTitle: document.getElementById('results-feedback-title'),
  resultsFeedbackMessage: document.getElementById('results-feedback-message'),
  kpiCorrect: document.getElementById('kpi-correct'),
  kpiIncorrect: document.getElementById('kpi-incorrect'),
  kpiBlank: document.getElementById('kpi-blank'),
  kpiTime: document.getElementById('kpi-time'),
  resultsTopicBreakdownContainer: document.getElementById('results-topic-breakdown-container'),
  resultsMistakesSection: document.getElementById('results-mistakes-section'),
  resultsMistakesContainer: document.getElementById('results-mistakes-container'),
  mistakesSummaryText: document.getElementById('mistakes-summary-text'),
  btnGotoReview: document.getElementById('btn-goto-review'),
  btnRetryMistakes: document.getElementById('btn-retry-mistakes'),
  btnRetryAll: document.getElementById('btn-retry-all'),
  btnPrintReport: document.getElementById('btn-print-report'),

  // Study View
  studyNavTabs: document.getElementById('study-nav-tabs'),

  // Review View
  reviewFilterContainer: document.getElementById('review-filter-container'),
  reviewCardsContainer: document.getElementById('review-cards-container'),
  btnReviewBackResults: document.getElementById('btn-review-back-results'),
  countFilterAll: document.getElementById('count-filter-all'),
  countFilterIncorrect: document.getElementById('count-filter-incorrect'),
  countFilterCorrect: document.getElementById('count-filter-correct'),
  countFilterBlank: document.getElementById('count-filter-blank'),
  countFilterFlagged: document.getElementById('count-filter-flagged'),

  // History View
  historyListContainer: document.getElementById('history-list-container'),
  btnClearHistory: document.getElementById('btn-clear-history'),

  // Modal
  modalConfirmFinish: document.getElementById('modal-confirm-finish'),
  modalConfirmBody: document.getElementById('modal-confirm-body'),
  btnModalCancel: document.getElementById('btn-modal-cancel'),
  btnModalConfirm: document.getElementById('btn-modal-confirm')
};

// =============================================================================
// Initialization
// =============================================================================

function initApp() {
  initTheme();
  bindNavigationEvents();
  bindSetupEvents();
  bindQuizEvents();
  bindResultsEvents();
  bindReviewEvents();
  bindHistoryEvents();
  bindModalEvents();
  bindStudyTabEvents();
}

// =============================================================================
// Theme Handling
// =============================================================================

function initTheme() {
  const savedTheme = localStorage.getItem('simulado_qualidade_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  state.theme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(state.theme);
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('simulado_qualidade_theme', theme);

  if (theme === 'dark') {
    dom.themeIcon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
  } else {
    dom.themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
  }
}

// =============================================================================
// View Management
// =============================================================================

function switchView(viewId) {
  state.activeView = viewId;
  closeMobilePalette();

  // Hide all view sections
  document.querySelectorAll('.view-section').forEach(section => {
    section.classList.remove('active');
  });

  // Show target view
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update navbar button states
  [dom.navBtnHome, dom.navBtnPractice, dom.navBtnTheory, dom.navBtnHistory].forEach(btn => {
    btn.classList.remove('active');
  });

  if (viewId === 'view-home') dom.navBtnHome.classList.add('active');
  if (viewId === 'view-theory') dom.navBtnTheory.classList.add('active');
  if (viewId === 'view-history') {
    dom.navBtnHistory.classList.add('active');
    renderHistory();
  }
}

function bindNavigationEvents() {
  dom.btnLogoHome.addEventListener('click', () => {
    if (state.activeView === 'view-quiz') {
      if (confirm('Você está em um simulado em andamento. Deseja realmente voltar ao início? O progresso desta tentativa será cancelado.')) {
        stopTimer();
        switchView('view-home');
      }
    } else {
      switchView('view-home');
    }
  });

  dom.navBtnHome.addEventListener('click', () => {
    if (state.activeView === 'view-quiz') {
      if (confirm('Deseja interromper o simulado em andamento e retornar ao início?')) {
        stopTimer();
        switchView('view-home');
      }
    } else {
      switchView('view-home');
    }
  });

  dom.navBtnPractice.addEventListener('click', () => {
    if (state.activeView === 'view-quiz') {
      if (!confirm('Deseja interromper o simulado em andamento e iniciar o Modo Treino?')) return;
      stopTimer();
    }
    // Launch practice mode: all questions, study mode, no timer
    startCustomQuiz({
      topic: 'all',
      timeMinutes: 0,
      shuffle: 'no',
      mode: 'study'
    });
  });

  dom.navBtnTheory.addEventListener('click', () => {
    switchView('view-theory');
  });

  if (dom.btnHeroStudy) {
    dom.btnHeroStudy.addEventListener('click', () => {
      switchView('view-theory');
    });
  }

  dom.navBtnHistory.addEventListener('click', () => {
    switchView('view-history');
  });

  dom.btnThemeToggle.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });
}

// =============================================================================
// Simulation Setup & Launch
// =============================================================================

function bindSetupEvents() {
  // Mode selection cards
  const modeRadios = document.querySelectorAll('input[name="sim-mode"]');
  modeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      dom.cardModeExam.classList.toggle('selected', e.target.value === 'exam');
      dom.cardModeStudy.classList.toggle('selected', e.target.value === 'study');
    });
  });

  dom.cardModeExam.addEventListener('click', () => {
    const radio = dom.cardModeExam.querySelector('input[type="radio"]');
    radio.checked = true;
    radio.dispatchEvent(new Event('change'));
  });

  dom.cardModeStudy.addEventListener('click', () => {
    const radio = dom.cardModeStudy.querySelector('input[type="radio"]');
    radio.checked = true;
    radio.dispatchEvent(new Event('change'));
  });

  // Start button
  dom.btnStartQuiz.addEventListener('click', () => {
    const selectedTopic = dom.configTopic.value;
    const selectedTime = parseInt(dom.configTime.value, 10);
    const selectedShuffle = dom.configShuffle.value;
    const selectedMode = document.querySelector('input[name="sim-mode"]:checked').value;

    startCustomQuiz({
      topic: selectedTopic,
      timeMinutes: selectedTime,
      shuffle: selectedShuffle,
      mode: selectedMode
    });
  });
}

function startCustomQuiz({ topic, timeMinutes, shuffle, mode, customQuestionPool }) {
  // Prepare questions pool
  let questions = [];

  if (customQuestionPool && customQuestionPool.length > 0) {
    questions = [...customQuestionPool];
  } else if (topic === 'all') {
    questions = [...questionsData];
  } else {
    questions = questionsData.filter(q => q.topic === topic);
  }

  // Shuffle if requested
  if (shuffle === 'yes') {
    questions = shuffleArray(questions);
  }

  // Set state
  state.quizQuestions = questions;
  state.currentIndex = 0;
  state.userAnswers = {};
  state.flaggedQuestions = new Set();
  state.mode = mode;
  state.startTime = Date.now();
  state.endTime = null;

  // Setup timer
  stopTimer();
  state.timerTotalSeconds = timeMinutes * 60;
  state.timerRemainingSeconds = state.timerTotalSeconds;

  if (state.timerTotalSeconds > 0) {
    dom.quizTimerContainer.style.display = 'inline-flex';
    updateTimerDisplay();
    startTimer();
  } else {
    dom.quizTimerContainer.style.display = 'none';
  }

  // Render question palette & view
  renderQuestionPalette();
  renderCurrentQuestion();
  switchView('view-quiz');
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// =============================================================================
// Timer Logic
// =============================================================================

function startTimer() {
  state.timerInterval = setInterval(() => {
    state.timerRemainingSeconds--;

    if (state.timerRemainingSeconds <= 0) {
      stopTimer();
      alert('O tempo limite do simulado foi esgotado! O simulado será finalizado automaticamente.');
      finishQuiz();
    } else {
      updateTimerDisplay();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const mins = Math.floor(state.timerRemainingSeconds / 60);
  const secs = state.timerRemainingSeconds % 60;
  dom.quizTimerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  // Color alerts
  dom.quizTimerContainer.classList.remove('warning', 'danger');
  if (state.timerRemainingSeconds <= 60) {
    dom.quizTimerContainer.classList.add('danger');
  } else if (state.timerRemainingSeconds <= 300) {
    dom.quizTimerContainer.classList.add('warning');
  }
}

// =============================================================================
// Active Quiz View Rendering & Interaction
// =============================================================================

function renderCurrentQuestion() {
  const total = state.quizQuestions.length;
  if (total === 0) return;

  const currentQ = state.quizQuestions[state.currentIndex];
  const qId = currentQ.id;
  const isFlagged = state.flaggedQuestions.has(qId);
  const chosenIndex = state.userAnswers[qId];

  // Update counters & progress
  dom.quizQuestionCounter.textContent = `Questão ${state.currentIndex + 1} de ${total}`;
  const answeredCount = Object.keys(state.userAnswers).filter(k => state.userAnswers[k] !== undefined && state.userAnswers[k] !== null).length;
  dom.quizAnsweredCount.textContent = `${answeredCount} respondida${answeredCount !== 1 ? 's' : ''}`;
  dom.quizProgressBar.style.width = `${((state.currentIndex + 1) / total) * 100}%`;

  // Badges & Subtopic
  dom.cardTopicBadge.textContent = currentQ.topic;
  dom.cardTopicBadge.className = 'badge';
  if (currentQ.topic.includes('Introdução')) {
    dom.cardTopicBadge.classList.add('badge-intro');
  } else if (currentQ.topic === 'GQM') {
    dom.cardTopicBadge.classList.add('badge-gqm');
  } else if (currentQ.topic === 'PSM') {
    dom.cardTopicBadge.classList.add('badge-psm');
  }

  dom.cardDiffBadge.textContent = currentQ.difficulty;
  dom.cardDiffBadge.className = 'badge';
  if (currentQ.difficulty === 'Fácil') dom.cardDiffBadge.classList.add('badge-easy');
  else if (currentQ.difficulty === 'Médio') dom.cardDiffBadge.classList.add('badge-medium');
  else dom.cardDiffBadge.classList.add('badge-hard');

  dom.cardSubtopic.textContent = currentQ.subtopic;
  dom.cardQuestionText.textContent = currentQ.question;

  // Flag button state
  dom.btnFlagQuestion.classList.toggle('active', isFlagged);
  dom.btnFlagText.textContent = isFlagged ? 'Marcada' : 'Revisar';

  // Render Options
  dom.cardOptionsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];

  currentQ.options.forEach((optText, index) => {
    const tile = document.createElement('div');
    tile.className = 'option-tile';
    if (chosenIndex === index) {
      tile.classList.add('selected');
    }

    tile.innerHTML = `
      <span class="option-letter">${letters[index]}</span>
      <span class="option-text">${escapeHtml(optText)}</span>
    `;

    tile.addEventListener('click', () => {
      selectOption(index);
    });

    dom.cardOptionsContainer.appendChild(tile);
  });

  // Handle Study Mode Feedback Box
  if (state.mode === 'study' && chosenIndex !== undefined && chosenIndex !== null) {
    showStudyFeedback(currentQ, chosenIndex);
  } else {
    dom.studyFeedbackContainer.style.display = 'none';
  }

  // Navigation button states
  dom.btnPrevQuestion.disabled = state.currentIndex === 0;

  if (state.currentIndex === total - 1) {
    dom.btnNextQuestion.style.display = 'none';
  } else {
    dom.btnNextQuestion.style.display = 'inline-flex';
  }

  // Update Palette active indicator
  updateQuestionPalette();
}

function selectOption(optionIndex) {
  const currentQ = state.quizQuestions[state.currentIndex];
  state.userAnswers[currentQ.id] = optionIndex;

  // Re-render options styling
  const tiles = dom.cardOptionsContainer.querySelectorAll('.option-tile');
  tiles.forEach((tile, idx) => {
    tile.classList.toggle('selected', idx === optionIndex);
  });

  // Update answered count
  const answeredCount = Object.keys(state.userAnswers).filter(k => state.userAnswers[k] !== undefined && state.userAnswers[k] !== null).length;
  dom.quizAnsweredCount.textContent = `${answeredCount} respondida${answeredCount !== 1 ? 's' : ''}`;

  // Study Mode immediate feedback
  if (state.mode === 'study') {
    showStudyFeedback(currentQ, optionIndex);
  }

  updateQuestionPalette();
}

function clearCurrentAnswer() {
  const currentQ = state.quizQuestions[state.currentIndex];
  delete state.userAnswers[currentQ.id];

  const tiles = dom.cardOptionsContainer.querySelectorAll('.option-tile');
  tiles.forEach(tile => tile.classList.remove('selected'));

  dom.studyFeedbackContainer.style.display = 'none';

  const answeredCount = Object.keys(state.userAnswers).filter(k => state.userAnswers[k] !== undefined && state.userAnswers[k] !== null).length;
  dom.quizAnsweredCount.textContent = `${answeredCount} respondida${answeredCount !== 1 ? 's' : ''}`;

  updateQuestionPalette();
}

function showStudyFeedback(question, chosenIndex) {
  const isCorrect = chosenIndex === question.correctAnswer;
  dom.studyFeedbackContainer.style.display = 'block';
  dom.studyFeedbackContainer.className = `study-feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;

  dom.studyFeedbackTitle.innerHTML = isCorrect
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Resposta Correta!`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg> Resposta Incorreta (Correta: Alternativa ${['A', 'B', 'C', 'D', 'E'][question.correctAnswer]})`;

  dom.studyFeedbackText.textContent = question.explanation;
  dom.studyFeedbackRef.textContent = `Referência: ${question.reference}`;
}

function toggleFlagCurrentQuestion() {
  const currentQ = state.quizQuestions[state.currentIndex];
  if (state.flaggedQuestions.has(currentQ.id)) {
    state.flaggedQuestions.delete(currentQ.id);
  } else {
    state.flaggedQuestions.add(currentQ.id);
  }
  const isFlagged = state.flaggedQuestions.has(currentQ.id);
  dom.btnFlagQuestion.classList.toggle('active', isFlagged);
  dom.btnFlagText.textContent = isFlagged ? 'Marcada' : 'Revisar';

  updateQuestionPalette();
}

// =============================================================================
// Question Palette Grid (Sidebar)
// =============================================================================

function openMobilePalette() {
  if (dom.quizSidebarPanel) dom.quizSidebarPanel.classList.add('open-mobile');
  if (dom.sidebarBackdrop) dom.sidebarBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobilePalette() {
  if (dom.quizSidebarPanel) dom.quizSidebarPanel.classList.remove('open-mobile');
  if (dom.sidebarBackdrop) dom.sidebarBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function renderQuestionPalette() {
  dom.questionPaletteContainer.innerHTML = '';
  state.quizQuestions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'palette-btn';
    btn.textContent = idx + 1;
    btn.dataset.index = idx;
    btn.title = `Questão ${idx + 1} - ${q.topic}`;

    btn.addEventListener('click', () => {
      state.currentIndex = idx;
      renderCurrentQuestion();
      if (window.innerWidth <= 768) {
        closeMobilePalette();
      }
    });

    dom.questionPaletteContainer.appendChild(btn);
  });
  updateQuestionPalette();
}

function updateQuestionPalette() {
  const buttons = dom.questionPaletteContainer.querySelectorAll('.palette-btn');
  buttons.forEach((btn, idx) => {
    const q = state.quizQuestions[idx];
    const isAnswered = state.userAnswers[q.id] !== undefined && state.userAnswers[q.id] !== null;
    const isCurrent = state.currentIndex === idx;
    const isFlagged = state.flaggedQuestions.has(q.id);

    btn.className = 'palette-btn';
    if (isAnswered) btn.classList.add('answered');
    if (isCurrent) btn.classList.add('current');
    if (isFlagged) btn.classList.add('flagged');
  });
}

// =============================================================================
// Quiz Event Listeners
// =============================================================================

function bindQuizEvents() {
  dom.btnPrevQuestion.addEventListener('click', () => {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderCurrentQuestion();
    }
  });

  dom.btnNextQuestion.addEventListener('click', () => {
    if (state.currentIndex < state.quizQuestions.length - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
    }
  });

  dom.btnClearAnswer.addEventListener('click', clearCurrentAnswer);
  dom.btnFlagQuestion.addEventListener('click', toggleFlagCurrentQuestion);

  dom.btnTogglePalette.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      if (dom.quizSidebarPanel.classList.contains('open-mobile')) {
        closeMobilePalette();
      } else {
        openMobilePalette();
      }
    } else {
      dom.quizLayoutWrapper.classList.toggle('with-sidebar');
      const isHidden = !dom.quizLayoutWrapper.classList.contains('with-sidebar');
      dom.quizSidebarPanel.style.display = isHidden ? 'none' : 'flex';
    }
  });

  if (dom.btnCloseSidebar) {
    dom.btnCloseSidebar.addEventListener('click', closeMobilePalette);
  }

  if (dom.sidebarBackdrop) {
    dom.sidebarBackdrop.addEventListener('click', closeMobilePalette);
  }

  dom.btnFinishQuiz.addEventListener('click', () => {
    closeMobilePalette();
    promptFinishQuiz();
  });
}

function promptFinishQuiz() {
  const total = state.quizQuestions.length;
  const answered = Object.keys(state.userAnswers).filter(k => state.userAnswers[k] !== undefined && state.userAnswers[k] !== null).length;
  const blank = total - answered;
  const flagged = state.flaggedQuestions.size;

  let message = `Você respondeu <strong>${answered} de ${total}</strong> questões.`;
  if (blank > 0) {
    message += `<br>⚠️ Ainda restam <strong>${blank}</strong> questão(ões) em branco.`;
  }
  if (flagged > 0) {
    message += `<br>🚩 Você tem <strong>${flagged}</strong> questão(ões) marcada(s) para revisar.`;
  }
  message += `<br><br>Deseja realmente encerrar a tentativa e ver o diagnóstico agora?`;

  dom.modalConfirmBody.innerHTML = message;
  dom.modalConfirmFinish.classList.add('active');
}

function bindModalEvents() {
  dom.btnModalCancel.addEventListener('click', () => {
    dom.modalConfirmFinish.classList.remove('active');
  });

  dom.btnModalConfirm.addEventListener('click', () => {
    dom.modalConfirmFinish.classList.remove('active');
    finishQuiz();
  });
}

// =============================================================================
// Finish Simulation & Compute Results
// =============================================================================

function finishQuiz() {
  stopTimer();
  state.endTime = Date.now();

  const totalQuestions = state.quizQuestions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let blankCount = 0;

  // Topic metrics accumulator
  const topicStats = {};

  state.quizQuestions.forEach(q => {
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, correct: 0 };
    }
    topicStats[q.topic].total++;

    const chosen = state.userAnswers[q.id];
    if (chosen === undefined || chosen === null) {
      blankCount++;
    } else if (chosen === q.correctAnswer) {
      correctCount++;
      topicStats[q.topic].correct++;
    } else {
      incorrectCount++;
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const timeSpentMs = state.endTime - state.startTime;
  const timeSpentSecs = Math.floor(timeSpentMs / 1000);
  const timeFormatted = formatTime(timeSpentSecs);

  const result = {
    id: 'sim_' + Date.now(),
    date: new Date().toLocaleString('pt-BR'),
    mode: state.mode === 'exam' ? 'Simulado Real' : 'Modo Treino',
    total: totalQuestions,
    correct: correctCount,
    incorrect: incorrectCount,
    blank: blankCount,
    percentage: percentage,
    timeSpentFormatted: timeFormatted,
    topicStats: topicStats,
    questions: state.quizQuestions.map(q => ({
      id: q.id,
      topic: q.topic,
      userChoice: state.userAnswers[q.id] ?? null,
      correctChoice: q.correctAnswer,
      isCorrect: state.userAnswers[q.id] === q.correctAnswer,
      isFlagged: state.flaggedQuestions.has(q.id)
    }))
  };

  state.lastQuizResult = result;
  saveQuizToHistory(result);
  renderResultsDashboard(result);
  switchView('view-results');
}

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// =============================================================================
// Results View Rendering
// =============================================================================

function renderResultsDashboard(result) {
  const pct = result.percentage;
  dom.resultsScorePct.textContent = `${pct}%`;
  dom.resultsScoreFraction.textContent = `${result.correct} / ${result.total}`;

  // Gauge color based on grade
  let color = 'var(--primary)';
  let title = 'Desempenho Regular';
  let message = 'Você completou o simulado. Revise os tópicos com menor percentual para consolidar a teoria!';

  if (pct >= 85) {
    color = 'var(--success)';
    title = 'Excelente! Domínio Avançado! 🏆';
    message = 'Parabéns! Você demonstrou forte domínio sobre Medição e Análise, GQM e PSM. Está muito bem preparado!';
  } else if (pct >= 70) {
    color = 'var(--primary)';
    title = 'Aprovado! Bom Desempenho! 🎯';
    message = 'Você atingiu um índice de aprovação consistente. Vale a pena revisar as explicações das questões erradas.';
  } else if (pct >= 50) {
    color = 'var(--warning)';
    title = 'Na Média - Vale Revisar Conceitos ⚠️';
    message = 'Você compreendeu a base, mas algumas armadilhas conceituais de GQM e PSM precisam de mais estudo.';
  } else {
    color = 'var(--danger)';
    title = 'Atenção - Estudo Recomendado 📚';
    message = 'Recomendamos ler o Resumo Teórico antes de fazer uma nova tentativa com foco nos fundamentos normativos.';
  }

  dom.resultsScoreCircle.style.setProperty('--score-pct', pct);
  dom.resultsScoreCircle.style.setProperty('--score-color', color);

  dom.resultsFeedbackTitle.textContent = title;
  dom.resultsFeedbackMessage.textContent = message;

  // KPI cards
  dom.kpiCorrect.textContent = result.correct;
  dom.kpiIncorrect.textContent = result.incorrect;
  dom.kpiBlank.textContent = result.blank;
  dom.kpiTime.textContent = result.timeSpentFormatted;

  // Breakdown by Topic
  dom.resultsTopicBreakdownContainer.innerHTML = '';
  Object.keys(result.topicStats).forEach(topicName => {
    const stat = result.topicStats[topicName];
    const topicPct = Math.round((stat.correct / stat.total) * 100);

    let topicColor = 'var(--primary)';
    if (topicName.includes('Introdução')) topicColor = 'var(--accent-intro)';
    else if (topicName === 'GQM') topicColor = 'var(--accent-gqm)';
    else if (topicName === 'PSM') topicColor = 'var(--accent-psm)';

    const card = document.createElement('div');
    card.className = 'topic-result-card';
    card.innerHTML = `
      <div class="topic-result-header">
        <span style="color: ${topicColor}; font-weight: 700;">${topicName}</span>
        <span>${stat.correct} / ${stat.total} acertos (${topicPct}%)</span>
      </div>
      <div class="topic-result-bar-bg">
        <div class="topic-result-bar-fill" style="width: ${topicPct}%; background-color: ${topicColor};"></div>
      </div>
    `;
    dom.resultsTopicBreakdownContainer.appendChild(card);
  });

  // Render Mistakes & Misconceptions Report directly on results screen
  renderMistakesReport(result);

  // Mistakes retry button
  if (result.incorrect > 0 || result.blank > 0) {
    dom.btnRetryMistakes.style.display = 'inline-flex';
  } else {
    dom.btnRetryMistakes.style.display = 'none';
  }
}

function renderMistakesReport(result) {
  if (!dom.resultsMistakesContainer) return;
  dom.resultsMistakesContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];

  // Identify questions with incorrect answer or left blank
  const mistakes = state.quizQuestions
    .map((q, originalIdx) => {
      const userChoice = state.userAnswers[q.id];
      const isBlank = userChoice === undefined || userChoice === null;
      const isCorrect = userChoice === q.correctAnswer;
      return {
        question: q,
        number: originalIdx + 1,
        userChoice,
        isBlank,
        isCorrect
      };
    })
    .filter(item => !item.isCorrect);

  if (mistakes.length === 0) {
    if (dom.mistakesSummaryText) {
      dom.mistakesSummaryText.textContent = 'Você demonstrou domínio perfeito de todos os conteúdos avaliados!';
    }
    dom.resultsMistakesContainer.innerHTML = `
      <div class="perfect-score-banner">
        <h4>🎉 Desempenho Impecável: 100% de Acertos!</h4>
        <p>Você acertou todas as ${result.total} questões do simulado. Nenhuma questão foi respondida incorretamente ou deixada em branco!</p>
      </div>
    `;
    return;
  }

  if (dom.mistakesSummaryText) {
    const wrongOnly = mistakes.filter(m => !m.isBlank).length;
    const blankOnly = mistakes.filter(m => m.isBlank).length;
    dom.mistakesSummaryText.innerHTML = `Você teve <strong>${wrongOnly} erro${wrongOnly !== 1 ? 's' : ''}</strong> e <strong>${blankOnly} questão(ões) em branco</strong> de um total de ${result.total} questões. Analise abaixo a resposta correta de cada uma e a justificativa teórica de por que a resposta assinalada está incorreta:`;
  }

  mistakes.forEach(item => {
    const q = item.question;
    const card = document.createElement('div');
    card.className = `mistake-card ${item.isBlank ? 'is-blank' : ''}`;

    let topicBadgeClass = 'badge-intro';
    if (q.topic === 'GQM') topicBadgeClass = 'badge-gqm';
    else if (q.topic === 'PSM') topicBadgeClass = 'badge-psm';

    let diffBadgeClass = 'badge-medium';
    if (q.difficulty === 'Fácil') diffBadgeClass = 'badge-easy';
    else if (q.difficulty === 'Difícil') diffBadgeClass = 'badge-hard';

    const statusBadge = item.isBlank
      ? `<span class="review-status-badge blank">⚠️ Não Respondida (Em Branco)</span>`
      : `<span class="review-status-badge incorrect">✕ Resposta Incorreta</span>`;

    // User Choice Box
    let userChoiceHtml = '';
    if (item.isBlank) {
      userChoiceHtml = `
        <div class="mistake-choice-box user-choice-blank">
          <span class="mistake-choice-label">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            Sua Escolha: Questão em Branco
          </span>
          <span class="mistake-choice-text" style="font-style: italic; color: var(--text-muted);">
            Nenhuma alternativa foi assinalada antes da finalização do simulado.
          </span>
        </div>
      `;
    } else {
      const userLetter = letters[item.userChoice] || '?';
      const userText = q.options[item.userChoice] || '';
      userChoiceHtml = `
        <div class="mistake-choice-box user-choice-wrong">
          <span class="mistake-choice-label">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            Sua Resposta: Alternativa ${userLetter}
          </span>
          <span class="mistake-choice-text">
            <strong>${userLetter})</strong> ${escapeHtml(userText)}
          </span>
        </div>
      `;
    }

    // Correct Choice Box
    const correctLetter = letters[q.correctAnswer];
    const correctText = q.options[q.correctAnswer];
    const correctChoiceHtml = `
      <div class="mistake-choice-box correct-choice">
        <span class="mistake-choice-label">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Gabarito Correto: Alternativa ${correctLetter}
        </span>
        <span class="mistake-choice-text">
          <strong>${correctLetter})</strong> ${escapeHtml(correctText)}
        </span>
      </div>
    `;

    card.innerHTML = `
      <div class="mistake-card-top">
        <div class="question-tags">
          <span class="badge" style="background: var(--bg-muted); color: var(--text-primary); font-weight: 800;">Questão ${item.number}</span>
          <span class="badge ${topicBadgeClass}">${q.topic}</span>
          <span class="badge ${diffBadgeClass}">${q.difficulty}</span>
          <span class="question-subtopic">${escapeHtml(q.subtopic)}</span>
        </div>
        ${statusBadge}
      </div>

      <div class="question-text" style="font-size: 0.975rem;">
        ${escapeHtml(q.question)}
      </div>

      <div class="mistake-comparison-grid">
        ${userChoiceHtml}
        ${correctChoiceHtml}
      </div>

      <div class="mistake-why-box">
        <div class="mistake-why-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
          Por que a resposta assinalada está incorreta e qual a justificativa teórica?
        </div>
        <p class="mistake-why-text">${escapeHtml(q.explanation)}</p>
        <span class="mistake-why-ref">Fonte / Referência Normativa: ${escapeHtml(q.reference)}</span>
      </div>
    `;

    dom.resultsMistakesContainer.appendChild(card);
  });
}

function bindStudyTabEvents() {
  const tabs = document.querySelectorAll('.study-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetPaneId = tab.dataset.tab;
      document.querySelectorAll('.study-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === targetPaneId);
      });
    });
  });
}

function bindResultsEvents() {
  dom.btnGotoReview.addEventListener('click', () => {
    state.activeFilter = 'all';
    renderReviewCards();
    switchView('view-review');
  });

  dom.btnRetryMistakes.addEventListener('click', () => {
    if (!state.lastQuizResult) return;
    const mistakesPool = state.quizQuestions.filter(q => {
      const choice = state.userAnswers[q.id];
      return choice !== q.correctAnswer;
    });

    if (mistakesPool.length === 0) {
      alert('Você acertou todas as questões desta tentativa!');
      return;
    }

    startCustomQuiz({
      topic: 'all',
      timeMinutes: 0,
      shuffle: 'no',
      mode: 'study',
      customQuestionPool: mistakesPool
    });
  });

  dom.btnRetryAll.addEventListener('click', () => {
    switchView('view-home');
  });

  dom.btnPrintReport.addEventListener('click', () => {
    window.print();
  });
}

// =============================================================================
// Review & Detailed Explanation Screen
// =============================================================================

function renderReviewCards() {
  dom.reviewCardsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];

  // Counts for filter badges
  let countAll = state.quizQuestions.length;
  let countCorrect = 0;
  let countIncorrect = 0;
  let countBlank = 0;
  let countFlagged = 0;

  state.quizQuestions.forEach(q => {
    const userChoice = state.userAnswers[q.id];
    const isBlank = userChoice === undefined || userChoice === null;
    const isCorrect = userChoice === q.correctAnswer;
    const isFlagged = state.flaggedQuestions.has(q.id);

    if (isBlank) countBlank++;
    else if (isCorrect) countCorrect++;
    else countIncorrect++;

    if (isFlagged) countFlagged++;
  });

  dom.countFilterAll.textContent = countAll;
  dom.countFilterCorrect.textContent = countCorrect;
  dom.countFilterIncorrect.textContent = countIncorrect;
  dom.countFilterBlank.textContent = countBlank;
  dom.countFilterFlagged.textContent = countFlagged;

  // Filter questions based on state.activeFilter
  const filtered = state.quizQuestions.filter(q => {
    const userChoice = state.userAnswers[q.id];
    const isBlank = userChoice === undefined || userChoice === null;
    const isCorrect = userChoice === q.correctAnswer;
    const isFlagged = state.flaggedQuestions.has(q.id);

    if (state.activeFilter === 'correct') return isCorrect;
    if (state.activeFilter === 'incorrect') return !isCorrect && !isBlank;
    if (state.activeFilter === 'blank') return isBlank;
    if (state.activeFilter === 'flagged') return isFlagged;
    return true; // 'all'
  });

  if (filtered.length === 0) {
    dom.reviewCardsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600;">Nenhuma questão encontrada para este filtro.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((q) => {
    const userChoice = state.userAnswers[q.id];
    const isBlank = userChoice === undefined || userChoice === null;
    const isCorrect = userChoice === q.correctAnswer;
    const originalIndex = state.quizQuestions.findIndex(item => item.id === q.id);

    const card = document.createElement('div');
    card.className = `review-card ${isBlank ? 'blank' : isCorrect ? 'correct' : 'incorrect'}`;

    let statusBadgeHtml = '';
    if (isBlank) {
      statusBadgeHtml = `<span class="review-status-badge blank">⚠️ Não Respondida</span>`;
    } else if (isCorrect) {
      statusBadgeHtml = `<span class="review-status-badge correct">✓ Você Acertou</span>`;
    } else {
      statusBadgeHtml = `<span class="review-status-badge incorrect">✕ Você Errou</span>`;
    }

    // Build options
    let optionsHtml = '';
    q.options.forEach((optText, optIdx) => {
      const isThisCorrect = optIdx === q.correctAnswer;
      const isThisUserWrong = !isCorrect && userChoice === optIdx;

      let optClass = 'review-option';
      let icon = letters[optIdx];
      if (isThisCorrect) {
        optClass += ' is-correct';
        icon = '✓ ' + letters[optIdx];
      } else if (isThisUserWrong) {
        optClass += ' is-user-wrong';
        icon = '✕ ' + letters[optIdx];
      }

      optionsHtml += `
        <div class="${optClass}">
          <strong style="min-width: 28px;">${icon}</strong>
          <span>${escapeHtml(optText)}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="review-card-top">
        <div class="question-tags">
          <span class="badge" style="background: var(--bg-muted); color: var(--text-primary);">Questão ${originalIndex + 1}</span>
          <span class="badge ${q.topic.includes('Introdução') ? 'badge-intro' : q.topic === 'GQM' ? 'badge-gqm' : 'badge-psm'}">${q.topic}</span>
          <span class="badge badge-${q.difficulty === 'Fácil' ? 'easy' : q.difficulty === 'Médio' ? 'medium' : 'hard'}">${q.difficulty}</span>
          <span class="question-subtopic">${escapeHtml(q.subtopic)}</span>
        </div>
        ${statusBadgeHtml}
      </div>

      <div class="question-text" style="font-size: 0.975rem;">
        ${escapeHtml(q.question)}
      </div>

      <div class="review-options">
        ${optionsHtml}
      </div>

      <div class="review-explanation">
        <strong>Justificativa e Análise Conceitual:</strong>
        <p>${escapeHtml(q.explanation)}</p>
        <span style="font-size: 0.775rem; color: var(--text-muted); display: block; margin-top: 0.5rem; font-style: italic;">
          Fonte / Referência: ${escapeHtml(q.reference)}
        </span>
      </div>
    `;

    dom.reviewCardsContainer.appendChild(card);
  });
}

function bindReviewEvents() {
  const filterBtns = dom.reviewFilterContainer.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      state.activeFilter = target.dataset.filter;
      renderReviewCards();
    });
  });

  dom.btnReviewBackResults.addEventListener('click', () => {
    switchView('view-results');
  });
}

// =============================================================================
// History Storage & Rendering
// =============================================================================

function saveQuizToHistory(result) {
  try {
    const raw = localStorage.getItem('simulado_qualidade_history');
    const history = raw ? JSON.parse(raw) : [];
    // Store latest on top, keep max 20
    history.unshift({
      id: result.id,
      date: result.date,
      mode: result.mode,
      total: result.total,
      correct: result.correct,
      percentage: result.percentage,
      time: result.timeSpentFormatted
    });
    localStorage.setItem('simulado_qualidade_history', JSON.stringify(history.slice(0, 20)));
  } catch (err) {
    console.error('Falha ao gravar histórico local:', err);
  }
}

function renderHistory() {
  try {
    const raw = localStorage.getItem('simulado_qualidade_history');
    const history = raw ? JSON.parse(raw) : [];

    if (history.length === 0) {
      dom.historyListContainer.innerHTML = `
        <div class="history-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 0.75rem; color: var(--text-muted);"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <p style="font-weight: 600; font-size: 1.1rem; color: var(--text-secondary);">Nenhuma tentativa salva ainda.</p>
          <p style="font-size: 0.875rem;">Complete um simulado ou treino para acompanhar sua evolução quantitativa aqui.</p>
        </div>
      `;
      return;
    }

    dom.historyListContainer.innerHTML = '';
    history.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'history-card';

      let badgeColor = 'var(--primary)';
      if (item.percentage >= 80) badgeColor = 'var(--success)';
      else if (item.percentage < 50) badgeColor = 'var(--danger)';

      card.innerHTML = `
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
            <strong style="font-size: 1.05rem;">Tentativa #${history.length - idx}</strong>
            <span class="badge" style="background: var(--bg-muted); color: var(--text-secondary);">${item.mode}</span>
          </div>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${item.date} • Duração: ${item.time}</span>
        </div>

        <div style="display: flex; align-items: center; gap: 1rem;">
          <div style="text-align: right;">
            <span style="font-size: 1.4rem; font-weight: 800; color: ${badgeColor};">${item.percentage}%</span>
            <span style="display: block; font-size: 0.75rem; color: var(--text-muted);">${item.correct} de ${item.total} acertos</span>
          </div>
        </div>
      `;
      dom.historyListContainer.appendChild(card);
    });
  } catch (err) {
    console.error('Falha ao carregar histórico:', err);
  }
}

function bindHistoryEvents() {
  dom.btnClearHistory.addEventListener('click', () => {
    if (confirm('Deseja realmente limpar todo o histórico de simulados salvos neste navegador?')) {
      localStorage.removeItem('simulado_qualidade_history');
      renderHistory();
    }
  });
}

// =============================================================================
// Utilities
// =============================================================================

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Boot application when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

