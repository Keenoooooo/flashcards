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
      answer: "Corporate Social Responsibility."
    },
    {
      question: "Define market share.",
      answer: "The percentage of total market sales a business has."
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
  answerEl.textContent = card.answer;
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
