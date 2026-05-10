const flashcard = document.getElementById("flashcard");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");
const flipBtn = document.getElementById("flipBtn");
const subjectSelect = document.getElementById("subjectSelect");
const progress = document.getElementById("progress");
const progressFill = document.getElementById("progressFill");
const progressBar = document.querySelector(".progress-bar");

const cards = {
  economics: [
    {
      question: "What is comparative advantage?",
      answer: "Producing goods with the lowest opportunity cost."
    },
    {
      question: "Define inflation.",
      answer: "A sustained increase in the general price level."
    }
  ],
  business: [
    {
      question: "What is CSR?",
      answer: "<span class=\"definition\"><strong>Corporate Social Responsibility</strong>.</span>"
    },
    {
      question: "Define market share.",
      answer: "<span class=\"definition\">The percentage of total market sales a <strong>business</strong> has.</span>"
    },
    {
      question: "Define sales forecasting",
      answer: "<span class=\"definition\">Estimating future <strong>sales revenue</strong> by predicting how much will sell over a period.</span>"
    },
    {
      question: "Define qualitative forecasting",
      answer: "<span class=\"definition\">Forecasting based on <strong>opinions</strong>, judgement and experience, not numerical data.</span>"
    },
    {
      question: "Advantages and disadvantages of qualitative forecasting",
      answer: "<div class=\"answer-list\"><p class=\"pros\"><strong>Pros:</strong> useful for new products, flexible, uses expert knowledge.</p><p class=\"cons\"><strong>Cons:</strong> subjective, less reliable, difficult to verify.</p></div>"
    },
    {
      question: "Define quantitative forecasting",
      answer: "<span class=\"definition\">Forecasting using <strong>numerical data</strong> and past patterns.</span>"
    },
    {
      question: "Advantages and disadvantages of quantitative forecasting",
      answer: "<div class=\"answer-list\"><p class=\"pros\"><strong>Pros:</strong> objective, logical, uses data.</p><p class=\"cons\"><strong>Cons:</strong> only as good as the data, may be inaccurate.</p></div>"
    },
    {
      question: "Define moving average",
      answer: "<span class=\"definition\">Uses past data to identify <strong>trends</strong> and smooth fluctuations.</span>"
    },
    {
      question: "Advantages and disadvantages of moving average",
      answer: "<div class=\"answer-list\"><p class=\"pros\"><strong>Pros:</strong> smooths trends, reduces extreme fluctuations.</p><p class=\"cons\"><strong>Cons:</strong> time consuming, based only on past data.</p></div>"
    },
    {
      question: "Define extrapolation",
      answer: "<span class=\"definition\">Extending past <strong>trends</strong> into the future.</span>"
    },
    {
      question: "Advantages and disadvantages of extrapolation",
      answer: "<div class=\"answer-list\"><p class=\"pros\"><strong>Pros:</strong> quick and easy.</p><p class=\"cons\"><strong>Cons:</strong> assumes trends continue, ignores sudden market changes.</p></div>"
    },
    {
      question: "Define payback period",
      answer: "<span class=\"definition\">The time taken to recover the original <strong>investment</strong>.</span>"
    },
    {
      question: "Advantages and disadvantages of payback",
      answer: "<div class=\"answer-list\"><p class=\"pros\"><strong>Pros:</strong> simple, focuses on liquidity, useful when risk is high.</p><p class=\"cons\"><strong>Cons:</strong> ignores profits after payback and time value of money.</p></div>"
    },
    {
      question: "ARR formula",
      answer: "<span class=\"formula\"><strong>ARR</strong> = Average Annual Profit / Initial Investment x 100</span>"
    },
    {
      question: "Advantages and disadvantages of ARR",
      answer: "<div class=\"answer-list\"><p class=\"pros\"><strong>Pros:</strong> measures profitability, easy to compare projects.</p><p class=\"cons\"><strong>Cons:</strong> ignores timing of profits, uses accounting profit not cash flow.</p></div>"
    },
    {
      question: "Define NPV",
      answer: "<span class=\"definition\"><strong>Investment appraisal</strong> method using discounted cash flow.</span>"
    },
    {
      question: "NPV decision rule",
      answer: "<span class=\"formula\"><strong>NPV</strong> &gt; 0 = Accept.<br><strong>NPV</strong> &lt; 0 = Reject.</span>"
    },
    {
      question: "Define discounted cash flow",
      answer: "<span class=\"definition\">Future cash flows adjusted using a <strong>discount factor</strong> to reflect time value of money.</span>"
    },
    {
      question: "Define gearing",
      answer: "<span class=\"definition\">Measures the proportion of finance from <strong>loans</strong> rather than owner equity.</span>"
    },
    {
      question: "Interpret gearing ratios",
      answer: "<span class=\"definition\"><strong>Above 50%</strong> = highly geared.<br><strong>Below 50%</strong> = low geared.</span>"
    },
    {
      question: "Define straight line depreciation",
      answer: "<span class=\"definition\">Spreads the cost of an <strong>asset</strong> evenly over its useful life.</span>"
    },
    {
      question: "Straight line depreciation formula",
      answer: "<span class=\"formula\">(<strong>Cost</strong> - Residual Value) / Expected Life</span>"
    },
    {
      question: "Supplier bargaining power",
      answer: "<span class=\"definition\">Few suppliers increase <strong>supplier power</strong>, causing higher costs and lower profits.</span>"
    },
    {
      question: "Buyer bargaining power",
      answer: "<span class=\"definition\">Customers influence <strong>prices</strong> and products, leading to lower prices and margins.</span>"
    },
    {
      question: "Competitive rivalry",
      answer: "<span class=\"definition\">High <strong>competition</strong> between firms can reduce prices and profitability.</span>"
    },
    {
      question: "Threat of new entrants",
      answer: "<span class=\"definition\">New firms entering the market increase <strong>competition</strong>.</span>"
    },
    {
      question: "Threat of substitutes",
      answer: "<span class=\"definition\">Alternative products can replace a business product, causing lower <strong>demand</strong>.</span>"
    },
    {
      question: "Define decision trees",
      answer: "<span class=\"definition\">Technique showing possible <strong>outcomes</strong>, risks, probabilities and rewards.</span>"
    },
    {
      question: "Define cost benefit analysis",
      answer: "<span class=\"definition\">Measures <strong>social</strong> and private costs and benefits of a project.</span>"
    },
    {
      question: "Advantages and disadvantages of cost benefit analysis",
      answer: "<div class=\"answer-list\"><p class=\"pros\"><strong>Pros:</strong> improves efficiency, predicts impacts.</p><p class=\"cons\"><strong>Cons:</strong> hard to value some impacts, long-term effects uncertain.</p></div>"
    },
    {
      question: "Unfreezing",
      answer: "<span class=\"definition\">Preparing employees for <strong>change</strong> and creating motivation.</span>"
    },
    {
      question: "Change/Transition",
      answer: "<span class=\"definition\">Moving employees to new <strong>methods</strong> and systems.</span>"
    },
    {
      question: "Refreezing",
      answer: "<span class=\"definition\">Embedding changes so they become normal <strong>practice</strong>.</span>"
    },
    {
      question: "Imposed piecemeal change",
      answer: "<span class=\"definition\">Small changes introduced by <strong>management</strong> without consultation.</span>"
    },
    {
      question: "Imposed total change",
      answer: "<span class=\"definition\">Large-scale change introduced all at once without <strong>consultation</strong>.</span>"
    },
    {
      question: "Negotiated piecemeal change",
      answer: "<span class=\"definition\">Small gradual changes agreed between <strong>management</strong> and employees.</span>"
    },
    {
      question: "Negotiated total change",
      answer: "<span class=\"definition\">Large-scale change agreed between <strong>management</strong> and employees.</span>"
    }
  ],
  digital: [
    {
      question: "What does CPU stand for?",
      answer: "Central Processing Unit."
    },
    {
      question: "What is RAM?",
      answer: "Temporary memory used by programs currently running."
    }
  ]
};

let currentSubject = "economics";
let currentIndex = 0;

function loadCard() {
  const card = cards[currentSubject][currentIndex];
  const totalCards = cards[currentSubject].length;
  const progressPercent = ((currentIndex + 1) / totalCards) * 100;

  questionEl.textContent = card.question;
  answerEl.innerHTML = card.answer;
  progress.textContent = `Card ${currentIndex + 1} of ${totalCards}`;
  progressFill.style.width = `${progressPercent}%`;
  progressBar.setAttribute("aria-valuenow", Math.round(progressPercent));
  flashcard.classList.remove("flipped");
}

flipBtn.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards[currentSubject].length;
  loadCard();
});

subjectSelect.addEventListener("change", (e) => {
  currentSubject = e.target.value;
  currentIndex = 0;
  loadCard();
});

loadCard();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}
