const flashcard = document.getElementById("flashcard");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
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
    },
    {
      question: "Phillips Curve",
      answer: `
Shows the possible inverse relationship between unemployment and inflation.

When unemployment is high:
- Inflationary pressure is weak
- There is spare capacity/output gap
- High unemployment weakens wage negotiations
- Lower spending power reduces AD

When unemployment is low:
- Wage pressure rises
- Firms raise prices as costs increase
- Inflation may increase
- Strong growth may cause shortages and CPI inflation
`
    },
    {
      question: "Why might the Phillips Curve shift?",
      answer: `
1. Supply-side policies increase productivity and potential output, lowering structural unemployment and shifting the curve left.

2. Lower market power and stronger competition can reduce wage and price pressures, lowering inflation.

3. International trade can reduce production costs and prices, lowering inflation and shifting the curve left.
`
    },
    {
      question: "Benefits and costs of Economic Growth",
      answer: `
Benefits for households:
- Higher incomes
- Better living standards
- More jobs

Benefits for firms:
- Higher profits
- Expansion opportunities

Benefits for government:
- More tax revenue
- More public spending ability

Costs:
- Inflation
- Environmental damage
- Inequality
`
    },
    {
      question: "Output Gap",
      answer: `
Definition:
Difference between actual output and potential output.

Positive output gap:
- Economy above capacity
- Inflationary pressure

Negative output gap:
- Economy below capacity
- Unemployment
`
    },
    {
      question: "Foreign Direct Investment (FDI)",
      answer: `
Definition:
Investment by foreign companies into another country.

Advantages:
- Increased capital
- Creates employment
- Transfer of technology and skills
- Multiplier effect
- Improved infrastructure

Disadvantages:
- Profit repatriation
- Labour exploitation
- Environmental damage
- Local firms may struggle
- Economic dependence
`
    },
    {
      question: "Protectionism",
      answer: `
Definition:
Government policies to reduce imports and/or promote exports using tariffs, subsidies or exchange rate management.

Advantages:
- Protects domestic industries
- Creates jobs
- Improves balance of payments
- Encourages self-sufficiency

Disadvantages:
- Inefficiency due to less competition
- Higher prices
- Risk of retaliation
- Government failure
`
    },
    {
      question: "Industrialisation",
      answer: `
Definition:
Shift from primary sector production to secondary manufacturing industries.

Advantages:
- Increases GDP
- Creates jobs
- Higher productivity
- Boosts exports
- Improves skills and technology

Disadvantages:
- Environmental damage
- Inequality
- High costs
- Risk of poor working conditions
- Dependence on global demand
`
    },
    {
      question: "International Aid",
      answer: `
Definition:
Transfer of resources from one country to another to support development.

Advantages:
- Improves infrastructure
- Reduces poverty
- Improves education and healthcare
- Supports economic growth

Disadvantages:
- Dependency
- Risk of corruption
- Aid may come with conditions
- Money may be wasted
`
    },
    {
      question: "Difference between Economic Growth and Development",
      answer: `
Economic Growth:
Increase in real GDP/output.

Economic Development:
Improvement in quality of life including poverty reduction, healthcare, education and living standards.
`
    },
    {
      question: "Stages of the Economic Cycle",
      answer: `
1. Boom
2. Peak
3. Recession
4. Recovery
`
    },
    {
      question: "Debt Relief",
      answer: `
Definition:
Reduction or cancellation of debt owed by countries.

Advantages:
- Frees government spending for public services
- Breaks debt cycle
- Encourages investment
- Improves living standards

Disadvantages:
- Moral hazard
- Countries may become reliant
- Often comes with conditions
- Does not fix structural issues
- Cost to lenders
`
    },
    {
      question: "Current Account Deficits",
      answer: `
Structural deficit:
Long-term current account deficit caused by poor competitiveness.

Causes:
- Strong exchange rate
- High income/import demand
- Low competitiveness
- Faster growth than trading partners

Impacts:
- Higher living standards short term
- Can be financed by FDI
- Debt
- Currency depreciation
- Lower growth/jobs

Solutions:
- Currency depreciation
- Supply-side policies
- Protectionism
`
    },
    {
      question: "Marshall-Lerner Condition",
      answer: `
Definition:
A depreciation will only improve the current account if the combined PED of exports and imports is greater than 1.

Advantages:
- Exports become more competitive
- Imports become less attractive

Disadvantages:
- May not work if demand is inelastic
- Can worsen inflation
`
    },
    {
      question: "J Curve",
      answer: `
Definition:
After a depreciation, the current account may initially worsen before improving over time.

Reason:
- Existing contracts and consumer habits delay adjustment in export and import demand.
`
    },
    {
      question: "Free Trade",
      answer: `
Definition:
Trade without government restrictions such as tariffs or quotas.

Advantages:
- Lower prices for consumers
- More competition and efficiency
- Greater choice
- Encourages investment and growth

Disadvantages:
- Domestic firms may fail
- Job losses in some industries
- Dependence on imports/global markets
- Possible exploitation and environmental damage
`
    },
    {
      question: "Competition Policy",
      answer: `
Aims:
- Prevent excessive pricing
- Promote competition
- Ensure quality standards and consumer choice
- Regulate natural monopolies

When regulators intervene:
- Collusion/cartels
- Investigating mergers
- Abuse of concentrated market power
`
    },
    {
      question: "Advantages and disadvantages of monopolies",
      answer: `
Advantages:
- Increased consumer choice
- Incentive for firms to innovate
- Productive and allocative efficiency
- Dynamic efficiency

Disadvantages:
- Loss of allocative and productive efficiency
- Higher prices and reduced output
- Formation of oligopolies/local monopolies
- Depends on the level of regulation
`
    },
    {
      question: "Costs of unemployment",
      answer: `
Households:
- Loss of income
- Lower living standards
- Stress and worsening mental health

Government:
- Lower tax revenue
- Higher benefit spending

Firms:
- Lower demand for goods
- Reduced profits

Economy:
- Wasted resources
- Lower GDP
- Negative multiplier effect
`
    },
    {
      question: "Liberalisation",
      answer: `
Definition:
Removal of government restrictions to allow freer market activity and more competition.

Advantages:
- More competition
- Lower prices
- Greater efficiency
- Encourages FDI
- More innovation and choice

Disadvantages:
- Domestic firms may fail
- Increased inequality
- Risk of market failure
- Dependence on global markets
`
    },
    {
      question: "Deregulation",
      answer: `
Definition:
Reducing government rules and regulations on businesses and markets.

Advantages:
- Increases competition
- Lower prices for consumers
- Greater efficiency
- Encourages innovation
- More consumer choice

Disadvantages:
- Firms may cut corners
- Increased inequality
- Risk of exploitation
- Market failure may occur
`
    }
  ],
  business: [
    {
      question: "SMART Objectives",
      answer: `
Specific - clear and focused objective
Measurable - progress can be tracked
Achievable - realistic to complete
Relevant - linked to business aims
Time-bound - has a deadline
`
    },
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

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getAnswerLineClass(line, currentClass, isCostsQuestion) {
  const lowerLine = line.toLowerCase();

  if (lowerLine.startsWith("advantages") || lowerLine.startsWith("benefits") || lowerLine.startsWith("pros")) {
    return "pros";
  }

  if (lowerLine.startsWith("disadvantages") || lowerLine.startsWith("costs") || lowerLine.startsWith("cons")) {
    return "cons";
  }

  if (lowerLine.startsWith("definition") || lowerLine.includes(" formula")) {
    return lowerLine.includes("formula") ? "formula" : "definition";
  }

  if (isCostsQuestion) {
    return "cons";
  }

  if (line.endsWith(":")) {
    return "definition";
  }

  return currentClass || "definition";
}

function formatAnswer(answer, question) {
  const trimmedAnswer = answer.trim();

  if (trimmedAnswer.startsWith("<")) {
    return trimmedAnswer;
  }

  const isCostsQuestion = question.toLowerCase().startsWith("costs");
  let currentClass = isCostsQuestion ? "cons" : "definition";
  const lines = trimmedAnswer.split("\n").map((line) => line.trim()).filter(Boolean);
  const formattedLines = lines.map((line) => {
    currentClass = getAnswerLineClass(line, currentClass, isCostsQuestion);
    const cleanLine = line.replace(/^- /, "");
    const escapedLine = escapeHtml(cleanLine);
    const lineWithBoldLead = escapedLine
      .replace(/^([^:]+):$/, "<strong>$1:</strong>")
      .replace(/^([^:]+): /, "<strong>$1:</strong> ")
      .replace(/^([A-Za-z -]+) - /, "<strong>$1</strong> - ");

    return `<p class="${currentClass}">${lineWithBoldLead}</p>`;
  });

  return `<div class="answer-list">${formattedLines.join("")}</div>`;
}

function loadCard() {
  const card = cards[currentSubject][currentIndex];
  const totalCards = cards[currentSubject].length;
  const progressPercent = ((currentIndex + 1) / totalCards) * 100;

  questionEl.textContent = card.question;
  answerEl.innerHTML = formatAnswer(card.answer, card.question);
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

backBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards[currentSubject].length) % cards[currentSubject].length;
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
