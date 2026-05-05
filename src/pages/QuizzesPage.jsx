const _jsxFileName = "src\\pages\\QuizzesPage.tsx"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, BookOpen, ChevronRight, Star, Target } from "lucide-react";

const quizzes = [
  // existing/utility quizzes
  { id: 1, title: "Machine Learning Fundamentals", course: "Advanced Machine Learning", questions: 10, duration: "30 min", difficulty: "Hard", score: 88, completed: true, category: "AI & Data" },
  { id: 2, title: "HTML & CSS Basics", course: "Full-Stack Web Development", questions: 10, duration: "20 min", difficulty: "Easy", score: null, completed: false, category: "Engineering" },
  { id: 3, title: "Python Data Structures", course: "Python Programming Basics", questions: 10, duration: "35 min", difficulty: "Medium", score: 72, completed: true, category: "Python" },

  // Topic-specific quizzes requested
  {
    id: 10,
    title: "Statistics: Descriptive & Inferential",
    course: "Statistics Essentials",
    questions: 4,
    duration: "20 min",
    difficulty: "Medium",
    score: null,
    completed: false,
    category: "Statistics",
    questionsData: [
      { text: "Which measure describes the spread of a dataset?", options: ["Mean", "Median", "Standard Deviation", "Mode"], correct: 2 },
      { text: "A p-value less than 0.05 typically indicates:", options: ["Strong evidence for null", "Insufficient data", "Statistical significance", "Large effect size"], correct: 2 },
      { text: "Which plot shows distribution of a continuous variable?", options: ["Bar chart", "Histogram", "Scatter plot", "Box plot"], correct: 1 },
      { text: "Central Limit Theorem concerns the distribution of:", options: ["Sample means", "Population medians", "Individual observations", "Variances"], correct: 0 },
    ],
  },
  {
    id: 11,
    title: "Linear Algebra: Vectors & Matrices",
    course: "Linear Algebra Basics",
    questions: 4,
    duration: "25 min",
    difficulty: "Medium",
    score: null,
    completed: false,
    category: "Linear Algebra",
    questionsData: [
      { text: "What is the result of multiplying a matrix by the identity matrix?", options: ["Zero matrix", "The same matrix", "Transpose", "Inverse"], correct: 1 },
      { text: "Two vectors are orthogonal when their dot product is:", options: ["1", "0", "-1", "Undefined"], correct: 1 },
      { text: "The determinant of a 2x2 matrix [[a,b],[c,d]] is:", options: ["ad - bc", "ab + cd", "a + d", "ac - bd"], correct: 0 },
      { text: "Eigenvalues are values λ such that (A - λI)x = 0 has a nontrivial solution. True or False?", options: ["True", "False", "Sometimes", "Only for symmetric matrices"], correct: 0 },
    ],
  },
  {
    id: 12,
    title: "Agile Development: Scrum & Kanban",
    course: "Agile Development Practices",
    questions: 4,
    duration: "18 min",
    difficulty: "Easy",
    score: null,
    completed: false,
    category: "Agile",
    questionsData: [
      { text: "Who is responsible for maximizing product value in Scrum?", options: ["Scrum Master", "Product Owner", "Development Team", "Stakeholders"], correct: 1 },
      { text: "A Kanban board primarily visualizes what?", options: ["Code quality", "Work in progress", "Team hierarchy", "Sprint backlog"], correct: 1 },
      { text: "Timeboxed meetings in Scrum are called:", options: ["Sprints", "Retrospectives", "Ceremonies", "Timeboxes"], correct: 2 },
      { text: "Velocity in Agile measures:", options: ["Team speed in mph", "Story points completed per sprint", "Number of meetings", "Code commits per day"], correct: 1 },
    ],
  },
  {
    id: 13,
    title: "Software Engineering: Design & Testing",
    course: "Software Engineering Foundations",
    questions: 4,
    duration: "22 min",
    difficulty: "Medium",
    score: null,
    completed: false,
    category: "Software Engineering",
    questionsData: [
      { text: "What design principle promotes small modules with single responsibility?", options: ["DRY", "SOLID (Single Responsibility)", "KISS", "YAGNI"], correct: 1 },
      { text: "Unit tests should be:", options: ["Slow and comprehensive", "Independent and fast", "Dependent on DB", "Performed only in CI"], correct: 1 },
      { text: "Continuous Integration (CI) primarily helps to:", options: ["Deploy to production automatically", "Merge code frequently and test", "Document APIs", "Replace code reviews"], correct: 1 },
      { text: "Mocking in tests is used to:", options: ["Increase runtime", "Simulate external dependencies", "Write less code", "Avoid assertions"], correct: 1 },
    ],
  },
  {
    id: 14,
    title: "Calculus: Limits & Derivatives",
    course: "Calculus I",
    questions: 4,
    duration: "20 min",
    difficulty: "Medium",
    score: null,
    completed: false,
    category: "Calculus",
    questionsData: [
      { text: "The derivative of sin(x) is:", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], correct: 0 },
      { text: "Limit of (1 + 1/n)^n as n→∞ equals:", options: ["0", "1", "e", "Infinity"], correct: 2 },
      { text: "The integral is the inverse operation of:", options: ["Addition", "Differentiation", "Multiplication", "Exponentiation"], correct: 1 },
      { text: "Critical points help find:", options: ["Integrals", "Maxima and minima", "Series expansions", "Linear approximations"], correct: 1 },
    ],
  },
];

const difficultyColors = {
  Easy: "bg-green-100 text-green-700 border-green-200",
  Medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Hard: "bg-red-100 text-red-700 border-red-200",
};

const questionBank = {
  "Statistics": [
    { text: "Which is a measure of central tendency?", options: ["Variance","Mean","Range","Skewness"], correct: 1 },
    { text: "P-value helps assess:", options: ["Data quality","Statistical significance","Sample size","Correlation"], correct: 1 },
    { text: "Which test compares means of two groups?", options: ["t-test","Chi-square","ANOVA","Regression"], correct: 0 },
  ],
  "Engineering": [
    { text: "What does HTML stand for?", options: ["Hyper Text Markup Language","High Tech Modern Language","Home Tool Markup Language","Hyper Transfer Markup Language"], correct: 0 },
    { text: "Which tag is used for the largest heading?", options: ["<h6>", "<heading>", "<h1>", "<head>"], correct: 2 },
    { text: "Which CSS property changes text color?", options: ["font-style", "text-color", "color", "foreground"], correct: 2 },
    { text: "Which HTML element creates a link?", options: ["<a>", "<link>", "<href>", "<url>"], correct: 0 },
    { text: "Which property adds space inside an element?", options: ["margin", "padding", "border-spacing", "gap"], correct: 1 },
    { text: "Which attribute is used for image source?", options: ["alt", "src", "href", "title"], correct: 1 },
    { text: "CSS Flexbox is mainly used for:", options: ["Database design", "Layout alignment", "Image compression", "Form validation"], correct: 1 },
    { text: "Which selector targets an element by class?", options: ["#id", ".class", "*", "tag"], correct: 1 },
    { text: "Which HTML element is used for table rows?", options: ["<td>", "<tr>", "<th>", "<table>"], correct: 1 },
    { text: "What does responsive design mean?", options: ["Works only on desktop", "Adapts to screen size", "Uses JavaScript only", "Loads faster"], correct: 1 },
  ],
  "Linear Algebra": [
    { text: "What does rank(A) represent?", options: ["Number of pivots","Determinant","Trace","Inverse"], correct: 0 },
    { text: "Matrix multiplication is:", options: ["Commutative","Associative","Always symmetric","Element-wise"], correct: 1 },
    { text: "A vector space requires:", options: ["Scalar multiplication","Only integer scalars","Ordered elements","Cyclic property"], correct: 0 },
  ],
  "Agile": [
    { text: "Scrum uses iterations called:", options: ["Sprints","Cycles","Phases","Iterations"], correct: 0 },
    { text: "Daily short standups usually last:", options: ["5–15 min","1 hour","Half day","2 hours"], correct: 0 },
    { text: "Definition of Done ensures:", options: ["Partial work","Ready for QA","Completed criteria met","No tests"], correct: 2 },
  ],
  "Software Engineering": [
    { text: "What is unit testing?", options: ["Testing whole system","Testing small modules","Testing UI only","Testing DB only"], correct: 1 },
    { text: "Code review improves:", options: ["Performance only","Quality and maintainability","Deployment speed only","Design docs"], correct: 1 },
    { text: "Refactoring aims to:", options: ["Add features","Improve structure","Remove tests","Change requirements"], correct: 1 },
  ],
  "Calculus": [
    { text: "Derivative of x^2 is:", options: ["x","2x","x^2","2"], correct: 1 },
    { text: "Integral of 1/x is:", options: ["ln|x|","x","1/x^2","e^x"], correct: 0 },
    { text: "Limit helps evaluate behavior as variable:", options: ["Oscillates","Approaches a value","Multiplies","Divides"], correct: 1 },
  ],
  "AI & Data": [
    { text: "Which algorithm is for classification?", options: ["K-Means","Linear Regression","Random Forest","PCA"], correct: 2 },
    { text: "Overfitting occurs when:", options: ["Model too simple","Model too complex","Perfect generalization","No training data"], correct: 1 },
    { text: "Cross-validation is used for:", options: ["Model selection","Feature scaling","Data collection","Deployment"], correct: 0 },
    { text: "Which metric is common for classification performance?", options: ["Accuracy","MSE","RMSE","Variance"], correct: 0 },
    { text: "A confusion matrix compares:", options: ["Training speed","Predicted vs actual labels","Feature counts","Missing values"], correct: 1 },
    { text: "Clustering is generally:", options: ["Supervised","Unsupervised","Reinforcement","Semi-random"], correct: 1 },
    { text: "Feature scaling is useful because it:", options: ["Adds labels","Normalizes ranges","Removes all noise","Creates new classes"], correct: 1 },
    { text: "Which technique reduces dimensionality?", options: ["PCA","KNN","Naive Bayes","SVM"], correct: 0 },
    { text: "A training set is used to:", options: ["Evaluate final score only","Train the model","Store predictions","Deploy the app"], correct: 1 },
    { text: "A validation set is used to:", options: ["Tune hyperparameters","Replace training data","Increase labels","Avoid testing"], correct: 0 },
  ],
  "Python": [
    { text: "Which of these is a Python data type?", options: ["string","integer","list","all of these"], correct: 3 },
    { text: "What does `len()` return?", options: ["Last item", "Length of an object", "Data type", "Index of element"], correct: 1 },
    { text: "Which symbol starts a comment in Python?", options: ["//", "#", "/*", "--"], correct: 1 },
    { text: "Which structure stores key-value pairs?", options: ["list", "tuple", "set", "dict"], correct: 3 },
    { text: "Which loop is commonly used when you know the sequence?", options: ["for", "switch", "repeat", "goto"], correct: 0 },
    { text: "What does `append()` do on a list?", options: ["Removes item", "Adds item to end", "Sorts list", "Creates tuple"], correct: 1 },
    { text: "Python uses indentation to define:", options: ["Types", "Blocks", "Imports", "Classes only"], correct: 1 },
    { text: "Which keyword defines a function?", options: ["func", "def", "lambda", "function"], correct: 1 },
    { text: "Which operator means equality comparison?", options: ["=", "==", "!=", ":="], correct: 1 },
    { text: "A list in Python is:", options: ["Immutable", "Mutable", "Always numeric", "Always sorted"], correct: 1 },
  ],
};

const scoreColor = (score) => {
  if (score >= 90) return "text-green-600";
  if (score >= 70) return "text-blue-600";
  return "text-orange-500";
};

export default function QuizzesPage() {
  const [filter, setFilter] = useState("all");
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [step, setStep] = useState(0);
  const [quizData, setQuizData] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultScore, setResultScore] = useState(null);

  const prepareQuiz = (q) => {
    if (q.questionsData) return q;
    const bank = questionBank[q.category] || Object.values(questionBank).flat();
    const pool = [...bank];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const picked = pool.slice(0, Math.min(q.questions || 4, 10));
    return { ...q, questionsData: picked };
  };

  const filtered = quizzes.filter((q) => {
    if (filter === "completed") return q.completed;
    if (filter === "pending") return !q.completed;
    return true;
  });

  const completedCount = quizzes.filter((q) => q.completed).length;
  const scored = quizzes.filter((q) => typeof q.score === "number");
  const avgScore = scored.length ? Math.round(scored.reduce((a, b) => a + b.score, 0) / scored.length) : 0;

  const [selected, setSelected] = useState(null);

  const activeQuizData =
    activeQuiz !== null
      ? quizData && quizData.id === activeQuiz
        ? quizData
        : quizzes.find((q) => q.id === activeQuiz)
      : null;
  const totalQuestions = activeQuizData ? (activeQuizData.questionsData || []).length || activeQuizData.questions || 0 : 0;
  const currentQuestion = activeQuizData
    ? (activeQuizData.questionsData && activeQuizData.questionsData[step]) || {
        text: "Which algorithm is commonly used for classification tasks in supervised learning?",
        options: ["K-Means", "Linear Regression", "Random Forest", "DBSCAN"],
        correct: 2,
      }
    : null;

  const closeQuiz = () => {
    setShowResult(false);
    setResultScore(null);
    setActiveQuiz(null);
    setQuizData(null);
    setAnswers([]);
    setStep(0);
    setSelected(null);
  };

  const handleNext = () => {
    const nextAnswers = [...answers, selected];
    setAnswers(nextAnswers);

    if (step + 1 < totalQuestions) {
      setStep(step + 1);
      setSelected(null);
      return;
    }

    const score = nextAnswers.reduce((count, answer, index) => {
      const question = activeQuizData?.questionsData?.[index];
      return count + (question && answer === question.correct ? 1 : 0);
    }, 0);
    const percent = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;

    setResultScore(percent);
    setShowResult(true);
    setActiveQuiz(null);
  };

  return (
    React.createElement('div', { className: "min-h-screen pt-10 pb-16"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 102}}
      , React.createElement('div', { className: "container mx-auto px-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
        /* Header */
        , React.createElement(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mb-10", __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}
          , React.createElement('div', { className: "flex items-center gap-2 mb-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}
            , React.createElement(CheckCircle, { className: "w-5 h-5 text-primary"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}} )
            , React.createElement('span', { className: "text-sm font-semibold text-primary uppercase tracking-widest"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}, "Assessments")
          )
          , React.createElement('h1', { className: "text-4xl md:text-5xl font-bold font-display text-foreground mb-3"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}, "Quizzes")
          , React.createElement('p', { className: "text-muted-foreground text-lg" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}, "Test your knowledge and track your progress."      )
        )

        /* Stats */
        , React.createElement(motion.div, { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "grid grid-cols-3 gap-4 mb-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}
          , [
            { icon: CheckCircle, label: "Completed", value: `${completedCount}/${quizzes.length}`, color: "text-green-500" },
            { icon: Star, label: "Avg Score", value: `${avgScore}%`, color: "text-amber-500" },
            { icon: Target, label: "Pending", value: `${quizzes.length - completedCount}`, color: "text-blue-500" },
          ].map((stat, i) => (
            React.createElement('div', { key: i, className: "rounded-2xl p-5" , style: { background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(180,200,230,0.3)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}}
              , React.createElement(stat.icon, { className: `w-5 h-5 ${stat.color} mb-2`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}} )
              , React.createElement('div', { className: "text-2xl font-bold text-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}, stat.value)
              , React.createElement('div', { className: "text-xs text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 124}}, stat.label)
            )
          ))
        )

        /* Filter tabs */
        , React.createElement('div', { className: "flex gap-2 mb-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 130}}
          , (["all", "completed", "pending"] ).map((f) => (
            React.createElement('button', { key: f, onClick: () => setFilter(f), className: `px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${filter === f ? "bg-primary text-white shadow-md" : "bg-white/70 border border-border text-foreground/70 hover:bg-white"}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}}
              , f
            )
          ))
        )

        /* Quiz cards */
        , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-5"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}
          , filtered.map((quiz, i) => (
            React.createElement(motion.div, {
              key: quiz.id,
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: i * 0.06 },
              'data-testid': `card-quiz-${quiz.id}`,
              className: "rounded-2xl p-6 group"  ,
              style: { background: "rgba(255,255,255,0.72)", backdropFilter: "blur(16px)", border: "1px solid rgba(180,200,230,0.35)", boxShadow: "0 4px 20px rgba(100,140,200,0.08)" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 141}}

              , React.createElement('div', { className: "flex items-start justify-between mb-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 150}}
                , React.createElement('div', { className: "flex-1", __self: this, __source: {fileName: _jsxFileName, lineNumber: 151}}
                  , React.createElement('div', { className: "flex items-center gap-2 mb-1.5"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 152}}
                    , React.createElement('span', { className: `text-xs font-semibold px-2.5 py-0.5 rounded-full border ${difficultyColors[quiz.difficulty]}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 153}}, quiz.difficulty)
                    , quiz.completed && React.createElement('span', { className: "text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-200"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}, "Completed")
                  )
                  , React.createElement('h3', { className: "font-bold text-foreground text-base"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 156}}, quiz.title)
                  , React.createElement('p', { className: "text-xs text-muted-foreground mt-0.5"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 157}}, quiz.course)
                )
                , quiz.score !== null && (
                  React.createElement('div', { className: `text-2xl font-bold ${scoreColor(quiz.score)}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 160}}, quiz.score, "%")
                )
              )
              , React.createElement('div', { className: "flex items-center gap-4 text-xs text-muted-foreground mb-4"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}}
                , React.createElement('span', { className: "flex items-center gap-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}, React.createElement(BookOpen, { className: "w-3.5 h-3.5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}} ), quiz.questions, " questions" )
                , React.createElement('span', { className: "flex items-center gap-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}}, React.createElement(Clock, { className: "w-3.5 h-3.5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}} ), quiz.duration)
              )
              , React.createElement('button', {
                onClick: () => { const prepared = prepareQuiz(quiz); setQuizData(prepared); setActiveQuiz(prepared.id); setStep(0); setSelected(null); setAnswers([]); setShowResult(false); },
                className: `w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                  quiz.completed
                    ? "border border-primary text-primary hover:bg-primary/10"
                    : "text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-md"
                }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}

                , quiz.completed ? "Retake Quiz" : "Start Quiz"
              )
            )
          ))
        )
        , activeQuizData && React.createElement('div', { className: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" },
          React.createElement('div', { className: "w-full max-w-2xl rounded-3xl border border-white/40 bg-white shadow-2xl" },
            React.createElement('div', { className: "flex items-start justify-between gap-4 p-6 border-b border-border" },
              React.createElement('div', null,
                React.createElement('p', { className: "text-xs font-semibold uppercase tracking-widest text-primary mb-2" }, "Quiz in progress"),
                React.createElement('h2', { className: "text-2xl font-bold text-foreground" }, activeQuizData.title),
                React.createElement('p', { className: "text-sm text-muted-foreground mt-1" }, `Question ${step + 1} of ${totalQuestions}`)
              ),
              React.createElement('button', { onClick: closeQuiz, className: "rounded-full px-3 py-1.5 text-sm font-medium bg-muted hover:bg-muted/80" }, "Close")
            ),
            React.createElement('div', { className: "p-6" },
              React.createElement('h3', { className: "text-xl font-semibold text-foreground mb-4" }, currentQuestion.text),
              React.createElement('div', { className: "grid gap-3" },
                currentQuestion.options.map((option, index) => (
                  React.createElement('button', {
                    key: option,
                    onClick: () => setSelected(index),
                    className: `w-full text-left rounded-2xl border px-4 py-3 transition-all ${selected === index ? "border-primary bg-primary/10 text-primary" : "border-border bg-white hover:bg-slate-50"}`
                  }, option)
                ))
              ),
              React.createElement('div', { className: "mt-6 flex items-center justify-between gap-3" },
                React.createElement('button', { onClick: closeQuiz, className: "px-4 py-2 rounded-xl border border-border bg-white hover:bg-slate-50" }, "Cancel"),
                React.createElement('button', {
                  onClick: handleNext,
                  disabled: selected === null,
                  className: "px-5 py-2 rounded-xl bg-primary text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                }, step + 1 < totalQuestions ? "Next" : "Submit")
              )
            )
          )
        )
        , showResult && React.createElement('div', { className: "fixed inset-0 bg-black/30 flex items-center justify-center z-40" },
          React.createElement('div', { className: `rounded-xl p-6 w-full max-w-sm text-center bg-white border ${resultScore > avgScore ? "border-green-200" : "border-red-200"}` },
            React.createElement('h3', { className: `text-2xl font-bold ${resultScore > avgScore ? "text-green-600" : "text-red-600"}` }, resultScore, "%"),
            React.createElement('p', { className: "mt-2 text-sm text-muted-foreground" }, resultScore > avgScore ? "Great job — above average! 🎉" : "Keep practicing — below average."),
            React.createElement('div', { className: "mt-4 flex gap-2 justify-center" },
              React.createElement('button', { onClick: closeQuiz, className: "px-4 py-2 rounded bg-muted" }, "Close"),
              React.createElement('button', { onClick: () => { setShowResult(false); setStep(0); setSelected(null); setAnswers([]); if (quizData) setActiveQuiz(quizData.id); }, className: "px-4 py-2 rounded bg-primary text-white" }, "Retake")
            )
          )
        )
      )
    )
  );
}
