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
      question: "CPI (Consumer Price Index) formulas + advantages and disadvantages",
      answer: `
FORMULAS:
- CPI = (Cost of basket in current year / Cost of basket in base year) x 100
- Inflation rate = ((New CPI - Old CPI) / Old CPI) x 100

ADVANTAGES:
- Measures inflation clearly and consistently
- Uses weighted basket of goods making it representative
- Helps governments and central banks make policy decisions
- Allows comparisons over time

DISADVANTAGES:
- Basket may become outdated as consumer habits change
- Different households experience different inflation rates
- Quality changes of products are difficult to measure
- Time lag in collecting data may reduce accuracy
`
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
      question: "Import and Export Substitution",
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
      question: "Balance of Payments and Current Account Deficits",
      answer: `
Definition:
The balance of payments is a record of all financial transactions between one country and the rest of the world over a period of time.

Key Point:
The balance of payments must sum to zero overall, meaning a current account deficit/surplus is matched by compensating flows on the financial/capital account.

CURRENT ACCOUNT

Includes:
1) Trade in goods
2) Trade in services
3) Primary income
4) Secondary income/transfers

Current Account Deficit:
Imports > Exports

Current Account Surplus:
Exports > Imports

CAPITAL & FINANCIAL ACCOUNT

Definition:
Records flows of money and investment between countries.

Includes:
1) Foreign Direct Investment (FDI)
2) Portfolio investment
3) Capital transfers
4) Purchases/sales of assets

Key Point:
A current account deficit is financed through surplus inflows on the capital/financial account.

CAUSES OF A CURRENT ACCOUNT DEFICIT

1) Low productivity
2) High labour/factor costs
3) Strong exchange rate
4) Poor international competitiveness
5) Weak industrial structure
6) High consumer spending on imports
7) Adverse terms of trade
8) Lack of comparative advantage

IMPACTS OF A CURRENT ACCOUNT DEFICIT

i) Increased foreign debt
ii) Falling confidence in the economy
iii) Downward pressure on the exchange rate
iv) Job losses in domestic industries
v) Reliance on capital inflows/FDI
vi) Lower economic growth

SOLUTIONS TO A CURRENT ACCOUNT DEFICIT

1) Exchange rate depreciation/devaluation
- Exports become cheaper
- Imports become more expensive

Problems:
i) Imported inflation
ii) Depends on PED/PES
iii) May worsen terms of trade

2) Supply side policies
- Improve productivity and competitiveness
- Education/training
- Infrastructure investment

Problems:
i) Expensive
ii) Long time lags

3) Deflationary policies
- Reduce aggregate demand
- Lower import spending

Problems:
i) Slower economic growth
ii) Higher unemployment

4) Protectionism
- Tariffs
- Quotas
- Subsidies

Problems:
i) Retaliation/trade wars
ii) Reduced consumer choice
iii) Higher prices
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
      question: "Advantages and disadvantages of market liberalisation",
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
      question: "Policies to reduce unemployment",
      answer: `
CYCLICAL UNEMPLOYMENT

Expansionary Fiscal / Monetary Policy
- Increase Government Spending (G)
- Reduce Taxation (T)
- Reduce Interest Rates (i.r.)
- Quantitative Easing (QE)

Problems:
i) Conflict of objectives
ii) Government finances / debt
iii) Consumer & business confidence
iv) Time lags
v) Inflationary pressures

STRUCTURAL UNEMPLOYMENT

1) Education & training
2) Retraining schemes
3) Improve geographical mobility
4) Relocation grants
5) Better transport infrastructure
6) Lower unemployment benefits to increase incentive to work
7) Improve labour market flexibility

Problems:
i) Expensive
ii) Long time lags
iii) May not match skills employers require
iv) Increased income inequality
v) Reduced living standards for unemployed workers
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
    },
    {
      question: "Regulation",
      answer: `
Pros
- Protects workers and consumers
- Prevents exploitation
- Encourages fair competition

Cons
- Compliance costs
- Reduces flexibility of firms
- May reduce profits
`
    },
    {
      question: "Actual Growth vs Potential Growth",
      answer: `
Actual Economic Growth
- Increase in real GDP over time
- Short-run growth
- Driven by higher AD
- Measured by % change in real GDP

Potential Economic Growth
- Increase in productive capacity of the economy
- Long-run growth
- Shown by outward shift of LRAS
- Caused by improved factors of production
`
    },
    {
      question: "Causes of Economic Growth",
      answer: `
Causes
- Increase in labour supply / population migration
- Increase in capital investment
- Increase in land/resources
- Entrepreneurship
- Education and training
- Technological advances
- Improvements in efficiency/productivity
`
    },
    {
      question: "Problems With Measuring Unemployment",
      answer: `
Problems
- Some unemployed people do not claim benefits
- Some may claim benefits while employed
- Hidden unemployment
- Countries use different measurement methods
`
    },
    {
      question: "Claimant Count vs Labour Force Survey definitions",
      answer: `
Claimant Count
- Measures people claiming unemployment benefits

Labour Force Survey (LFS)
- Survey asking people if they are unemployed
`
    },
    {
      question: "Relationship Between Government and Business",
      answer: `
Government Support
- Subsidies
- Spending
- Tax support

Relationship
- Balance needed between economic growth and social/environmental protection
`
    },
    {
      question: "Negative Impacts of Economic Growth",
      answer: `
Cons
- Inflation
- Environmental damage
- Inequality
- Unsustainable growth
`
    },
    {
      question: "Monopolistic Competition",
      answer: `
Characteristics
- Many buyers and sellers
- Slightly differentiated products
- Firms are price makers
- Low barriers to entry and exit
- Non-price competition
- Firms earn normal profit in long run
`
    },
    {
      question: "Functions & Principles of the WTO",
      answer: `
Principles of Trade
- Non-discrimination
- Protection from unfair trade/protectionism
- Predictable trade
- Fair competition
- Special provisions for developing countries

Functions of the WTO
- Set and enforce trade rules
- Resolve trade disputes
- Provide forum for negotiations
- Monitor global trade policies
- Help developing countries benefit from trade
`
    },
    {
      question: "Barriers to Entry",
      answer: `
Examples
- Patents
- Licences
- Regulation
- Technical superiority
- Startup costs
- Sunk costs
- Economies of scale
- Brand loyalty
- Predatory pricing
- Advertising
- Limit pricing
`
    },
    {
      question: "Natural Monopoly",
      answer: `
Natural Monopoly
- Huge fixed costs
- Economies of scale are very large
- One firm can supply the whole market more efficiently
- Competition would create wasteful duplication
`
    },
    {
      question: "Absolute Advantage",
      answer: `
Absolute Advantage
- When a country can produce more goods/services than another country using the same resources
`
    },
    {
      question: "Monopoly Regulation",
      answer: `
Methods of Regulation
- Price regulation (RPI - X pricing)
- Quality control/performance targets
- Profit control and covering costs

Problems
- Unintended consequences
- Regulatory capture
- Asymmetric information
- Higher costs/incentives issues
`
    },
    {
      question: "Barriers to Exit",
      answer: `
Examples
- Underused assets
- Sunk cost recovery
- Contracts
- Redundancy costs
`
    },
    {
      question: "Pros and Cons of Privatisation",
      answer: `
Pros
- Increases allocative efficiency
- Reduces X-inefficiency
- Profit incentive drives dynamic efficiency
- Greater competition may improve productivity

Cons
- Limited competition can cause productive and allocative inefficiency
- Less profitable services may be cut even if socially desirable
- Risk of private monopolies
- Success depends on competition and government regulation
`
    },
    {
      question: "Reasons for International Trade + Limitations of Comparative Advantage",
      answer: `
Reasons for Trade
- Comparative advantage
- Trade blocs
- Non-price factors
- Protectionism
- Transport costs
- Exchange rates

Limitations / Assumptions of Comparative Advantage
- Assumes no transport costs
- Assumes perfect information
- Assumes no economies of scale
`
    },
    {
      question: "Characteristics of Perfect Competition",
      answer: `
Characteristics
- Many buyers and sellers
- Homogeneous products
- Firms are price takers
- No barriers to entry or exit
- Perfect information
- Firms are profit maximisers
`
    },
    {
      question: "Benefits of International Trade",
      answer: `
Benefits
- Access to goods/services not available domestically
- Lower costs through comparative advantage
- Larger markets leading to higher sales and profits
- Greater consumer choice
- Economies of scale
`
    },
    {
      question: "Types of Integration",
      answer: `
Backward Vertical Integration
- Closer to suppliers
- Greater control over inputs/costs

Forward Vertical Integration
- Closer to consumers
- More control over sales/distribution

Horizontal Integration
- Merger with firms in same industry
- Reduces competition
- Increases market share

Conglomerate Integration
- Expansion into unrelated industries
- Spreads risk
`
    },
    {
      question: "Law of Diminishing Returns",
      answer: `
Definition
- In the short run, adding more variable inputs to fixed inputs will eventually cause marginal product to fall
`
    },
    {
      question: "Rationalisation",
      answer: `
Definition
- Reorganisation of a business to increase efficiency, usually reducing business size/costs

Examples
- Closing branches
- Transferring production overseas
- Reducing product range
`
    },
    {
      question: "Why Do Governments Regulate Markets?",
      answer: `
Reasons
- Protect consumers
- Protect workers, e.g. minimum wage
- Protect the environment
- Promote fair competition
`
    },
    {
      question: "Short Run Aggregate Supply (SRAS)",
      answer: `
Definition
- Shows the relationship between the price level and real output in the short run
- SRAS slopes upward from left to right

Why SRAS slopes upward
- Higher prices increase profits
- Firms increase output
- Some costs fixed in short run

Factors shifting SRAS
- Labour costs
- Commodity prices
- Exchange rates
- Taxes/subsidies
- Productivity
`
    },
    {
      question: "Keynesian vs Neo-Classical LRAS",
      answer: `
Neo-Classical LRAS
- Vertical at full employment
- Economy self-corrects back to equilibrium
- Flexible wages/prices

Keynesian LRAS
- Can be below full employment
- Sticky wages/prices
- Government intervention may be needed
`
    },
    {
      question: "Natural Rate of Unemployment / NAIRU",
      answer: `
Definition
- Lowest unemployment rate possible without causing accelerating inflation

Causes
- Frictional unemployment
- Structural unemployment
- Imperfect labour markets

Evaluation
- Can change over time
- Supply-side policies may reduce it
`
    },
    {
      question: "Demand-Pull Inflation",
      answer: `
Definition
- Inflation caused by excessive aggregate demand

Causes
- Consumer spending
- Government spending
- Exports
- Cheap credit

Effects
- Higher prices
- Reduced purchasing power
- Possible economic growth
`
    },
    {
      question: "Cost-Push Inflation",
      answer: `
Definition
- Inflation caused by rising production costs

Causes
- Wage increases
- Energy prices
- Exchange rate depreciation
- Higher taxes

Effects
- Lower profits
- Lower growth
- Possible unemployment
`
    },
    {
      question: "Quantity Theory of Money",
      answer: `
Theory
- Excessive money supply growth causes inflation

Key Idea
- More money chasing same amount of goods

Evaluation
- Depends on velocity of circulation
- Inflation may also be caused by supply-side factors
`
    },
    {
      question: "Wage-Price Spiral",
      answer: `
Definition
- Rising wages increase costs
- Firms raise prices
- Workers demand higher wages again

Result
- Sustained inflation
`
    },
    {
      question: "Deflation",
      answer: `
Definition
- Sustained fall in general price level

Problems
- Delayed spending
- Lower profits
- Higher unemployment
- Economic slowdown

Possible Benefits
- Increased purchasing power
- Lower costs for consumers
`
    },
    {
      question: "Structural vs Cyclical Budget Deficits",
      answer: `
Structural Deficit
- Long-term deficit
- Exists even during economic growth

Cyclical Deficit
- Caused by recession
- Temporary fall in tax revenue/increase in benefits
`
    },
    {
      question: "Public Sector Debt",
      answer: `
Definition
- Total accumulated government borrowing

Problems
- Interest payments
- Risk of credit downgrades
- Crowding out
- Lower confidence

Evaluation
- Depends on economic growth and borrowing costs
`
    },
    {
      question: "Quantitative Easing (QE)",
      answer: `
Definition
- Central bank creates money to buy financial assets

Aims
- Increase lending
- Increase AD
- Prevent recession/deflation

Advantages
- Stimulates economy
- Increases liquidity

Disadvantages
- Inflation risk
- Asset bubbles
- Increased inequality
`
    },
    {
      question: "Asset Bubbles",
      answer: `
Definition
- Rapid rise in asset prices above real value

Examples
- Housing market
- Shares
- Cryptocurrency

Problems
- Financial instability
- Crashes/recessions
`
    },
    {
      question: "Financial Stability",
      answer: `
Definition
- Financial system operates smoothly without crisis

Importance
- Encourages investment
- Maintains confidence
- Prevents banking collapse
`
    },
    {
      question: "Funding for Lending",
      answer: `
Definition
- Central bank provides cheap funding to banks to encourage lending

Advantages
- Encourages borrowing and investment
- Supports economic growth

Disadvantages
- May increase debt
- Banks may still avoid risky lending
`
    },
    {
      question: "Price Discrimination",
      answer: `
Definition
- Charging different prices to different consumers for same product

Advantages
- Higher profits
- Some consumers pay lower prices

Disadvantages
- Unfair pricing
- Exploitation of consumers
`
    },
    {
      question: "Game Theory",
      answer: `
Definition
- Analyses strategic behaviour between firms

Used In
- Oligopolies
- Pricing decisions
- Collusion
`
    },
    {
      question: "Nash Equilibrium",
      answer: `
Definition
- Situation where no firm benefits from changing strategy alone

Importance
- Explains stable decisions in oligopolies
`
    },
    {
      question: "Contestability",
      answer: `
Definition
- Ease of entering/leaving a market

High Contestability
- Low barriers to entry
- Encourages efficiency

Low Contestability
- Market power increases
`
    },
    {
      question: "Satisficing",
      answer: `
Definition
- Firms aim for satisfactory profit rather than maximum profit

Reasons
- Avoid risk
- Stakeholder objectives
- Long-term survival
`
    },
    {
      question: "Internal vs External Growth",
      answer: `
Internal Growth
- Organic expansion
- New products/stores

External Growth
- Mergers/takeovers

Evaluation
- External growth faster but riskier
`
    },
    {
      question: "Economies of Scale",
      answer: `
Definition
- Falling average costs as output increases

Examples
- Purchasing
- Technical
- Financial
- Managerial
`
    },
    {
      question: "Diseconomies of Scale",
      answer: `
Definition
- Rising average costs as firms become too large

Causes
- Communication problems
- Poor coordination
- Bureaucracy
`
    },
    {
      question: "Define internal economies and diseconomies of scale as well as external economies and diseconomies of scale",
      answer: `
Internal Economies of Scale:
Cost advantages gained by a firm as it increases in size/output, causing long run average costs to fall.

Internal Diseconomies of Scale:
Cost disadvantages faced by a firm when it becomes too large, causing long run average costs to rise.

External Economies of Scale:
Cost advantages gained by firms due to growth of the entire industry, leading to lower average costs.

External Diseconomies of Scale:
Cost disadvantages faced by firms due to expansion of the whole industry, causing average costs to rise.
`
    },
    {
      question: "Normal vs Abnormal Profit",
      answer: `
Normal Profit
- Minimum profit needed to stay in industry

Abnormal Profit
- Profit above normal profit
`
    },
    {
      question: "Revenue Formulas",
      answer: `
Formula
- Total Revenue (TR) = Price x Quantity
- Average Revenue (AR) = TR / Quantity
- Marginal Revenue (MR) = Change in TR / Change in Output
`
    },
    {
      question: "Cost Formulas",
      answer: `
Formula
- Total Cost (TC) = Fixed Costs + Variable Costs
- Average Cost (AC) = TC / Quantity
- Marginal Cost (MC) = Change in TC / Change in Output
`
    },
    {
      question: "Business Objectives and Diagram Positions",
      answer: `
Profit Maximisation
- MC = MR

Revenue Maximisation
- MR = 0
- TR is at maximum

Sales Maximisation
- AR = AC
- Firm maximises sales while making normal profit

Allocative Efficiency
- AR = MC

Productive Efficiency
- MC = AC
- Lowest point of AC curve

Supernormal Profit
- AR > AC
- Profit area between AR and AC
`
    },
    {
      question: "Productive Efficiency",
      answer: `
Definition
- Producing at lowest average cost

Shown By
- Output at lowest point of AC curve
`
    },
    {
      question: "Allocative Efficiency",
      answer: `
Definition
- Resources allocated according to consumer preferences

Condition
- Price = Marginal Cost
`
    },
    {
      question: "Dynamic Efficiency",
      answer: `
Definition
- Efficiency improving over time through innovation/investment
`
    },
    {
      question: "Terms of Trade",
      answer: `
Formula
- Export Price Index / Import Price Index x 100

Improvement
- Export prices rise faster than import prices
`
    },
    {
      question: "Exchange Rate Manipulation",
      answer: `
Definition
- Government/central bank influencing exchange rates artificially

Reasons
- Improve exports
- Protect industries

Problems
- Retaliation
- Inflation
`
    },
    {
      question: "Economic and Monetary Union (EMU)",
      answer: `
Definition
- Countries sharing common currency and monetary policy

Advantages
- Easier trade
- Lower transaction costs

Disadvantages
- Loss of monetary policy control
- Different economies may need different interest rates
`
    },
    {
      question: "Optimal Currency Area",
      answer: `
Definition
- Region where sharing a currency is economically beneficial

Conditions
- Labour mobility
- Similar economies
- Fiscal transfers
`
    },
    {
      question: "European Central Bank (ECB)",
      answer: `
Role
- Controls eurozone monetary policy
- Sets interest rates
- Maintains inflation stability
`
    },
    {
      question: "Advantages and Disadvantages of EU Membership",
      answer: `
Advantages
- Free trade
- Labour mobility
- Larger markets
- FDI attraction

Disadvantages
- Loss of sovereignty
- Membership costs
- Regulation
`
    },
    {
      question: "Labour Mobility",
      answer: `
Definition
- Movement of workers between regions/countries/jobs

Advantages
- Fills labour shortages
- Economic growth

Disadvantages
- Pressure on public services
- Brain drain
`
    },
    {
      question: "Capital Flows",
      answer: `
Definition
- Movement of money/investment between countries

Examples
- FDI
- Portfolio investment
`
    },
    {
      question: "MEDCs vs LEDCs",
      answer: `
MEDCs
- High income
- Advanced industry
- Better infrastructure

LEDCs
- Lower income
- Primary sector dependence
- Lower living standards
`
    },
    {
      question: "Purchasing Power Parity (PPP)",
      answer: `
Definition
- Adjusts GDP for differences in living costs between countries

Importance
- More accurate comparison of living standards
`
    },
    {
      question: "GDP vs GNP",
      answer: `
GDP
- Output produced within a country

GNP
- GDP plus net income from abroad
`
    },
    {
      question: "Human Development Index (HDI)",
      answer: `
Measures
- Income
- Education
- Life expectancy

HDI Levels
- 0-0.49 = Low development
- 0.5-0.69 = Medium development
- 0.7-0.79 = High development
- >0.8 = Very high development

Advantages
- Wider measure than GDP

Disadvantages
- Ignores inequality/environment
`
    },
    {
      question: "Resource Curse",
      answer: `
Definition
- Countries with valuable resources may experience slower development

Reasons
- Corruption
- Overdependence on commodities
- Conflict
`
    },
    {
      question: "Import Substitution Industrialisation (ISI)",
      answer: `
Definition
- Replacing imports with domestic production

Advantages
- Protects domestic firms
- Creates jobs

Disadvantages
- Inefficiency
- Lack of competition
`
    },
    {
      question: "Export-Led Growth",
      answer: `
Definition
- Growth strategy focused on increasing exports

Advantages
- Foreign currency earnings
- Higher GDP

Disadvantages
- Dependence on global demand
`
    },
    {
      question: "Infrastructure Problems in LEDCs",
      answer: `
Examples
- Poor roads
- Weak electricity supply
- Limited internet access

Effects
- Lower productivity
- Lower investment
`
    },
    {
      question: "Population Growth and Development",
      answer: `
Advantages
- Larger workforce
- Larger markets

Disadvantages
- Pressure on services
- Unemployment
- Resource shortages
`
    },
    {
      question: "Institutional Weakness",
      answer: `
Definition
- Weak governments/legal systems reducing economic development

Problems
- Corruption
- Political instability
- Weak property rights
- Lower investment
`
    }
  ],
  business: [
    {
      question: "What is rationalisation?",
      answer: "Rationalisation is when a business reorganises operations to improve efficiency and reduce costs, often involving redundancies or new technology.",
      color: "white"
    },
    {
      question: "What is the working capital formula?",
      answer: "Working Capital = Current Assets - Current Liabilities",
      color: "blue"
    },
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
      question: "Types of Integration",
      answer: `
Backward Vertical Integration
- Closer to suppliers
- Greater control over inputs/costs

Forward Vertical Integration
- Closer to consumers
- More control over sales/distribution

Horizontal Integration
- Merger with firms in same industry
- Reduces competition
- Increases market share

Conglomerate Integration
- Expansion into unrelated industries
- Spreads risk
`
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
      answer: `
Advantages
- Simple to calculate
- Uses profit figures
- Easy to compare investments

Disadvantages
- Ignores time value of money
- Based on estimates
- Ignores cash flow
`
    },
    {
      question: "ARR Profitability Evaluation",
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
      answer: `
Formula
- Gearing = (Non-current Liabilities / Capital Employed) x 100

Meaning
- Measures how much of a business is financed by long-term debt

Low Gearing
- Lower financial risk
- Less interest to pay

High Gearing
- Higher financial risk
- Higher interest repayments
- More vulnerable if profits fall
`
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
      question: "Pros and Cons of Cost Benefit Analysis (CBA)",
      answer: `
Advantages
- Considers a wide range of costs and benefits
- Includes impacts on society and the community
- Values external costs and benefits ignored by businesses
- Helps rank projects in order of value
- Shows businesses care about the environment

Disadvantages
- Difficult to put a value on pollution and social impacts
- Includes subjective value judgements
- Intangible benefits vary between people
- Wrong calculations may lead to poor decisions
- May not include all stakeholders
`
    },
    {
      question: "Cost Benefit Analysis Evaluation",
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
    },
    {
      question: "Private Costs and Private Benefits",
      answer: `
Private Costs
- Costs paid by the business making the investment
- Includes training, recruitment and marketing costs

Private Benefits
- Benefits gained by the business from the investment
- Includes higher productivity, increased sales, brand value and profit
`
    },
    {
      question: "Outsourcing",
      answer: `
Definition
- Contracting business processes to an external provider

Examples
- Finance
- HR
- Marketing

Advantages
- Uses specialists
- Improved quality
- Lower costs
- Focus on core competency
- Economies of scale

Disadvantages
- Loss of control
- Quality issues
- Ethical concerns
- Over-reliance on external providers
- Supplier power may increase
`
    },
    {
      question: "Advantages and Disadvantages of NPV",
      answer: `
Advantages
- Considers time value of money
- Uses cash flow

Disadvantages
- Hard to calculate
- Relies on estimates
- Discount rate may be inaccurate
`
    },
    {
      question: "Public Costs and Public Benefits",
      answer: `
Public Costs
- External costs to society from business activity
- Environmental damage
- Loss of open space
- Increased traffic congestion

Public Benefits
- External benefits to society
- Job creation from investment
- Reduced crime in high unemployment areas
- Increased tax revenue
`
    },
    {
      question: "Current Ratio",
      answer: `
Formula
- Current Assets / Current Liabilities

Purpose
- Measures liquidity
- Shows ability to pay short-term debts

Normal Value
- Usually between 1.5 and 2
`
    },
    {
      question: "Acid Test Ratio",
      answer: `
Formula
- (Current Assets - Inventory) / Current Liabilities

Measures
- Liquidity of a business
- Ability to pay short-term debts without selling stock

Normal Value
- Around 1:1
`
    },
    {
      question: "Delphi Method",
      answer: `
Definition
- Forecasting method using expert opinions

How It Works
- Experts answer questionnaires anonymously
- Responses are collected and shared
- Experts revise answers after feedback
- Process repeats until agreement is reached
`
    },
    {
      question: "Gross Profit Formula",
      answer: `
Formula
- Gross Profit = Revenue - Cost of Sales
`
    },
    {
      question: "Ansoff's Matrix",
      answer: `
Market Penetration
- Existing products in existing markets

Product Development
- New products in existing markets

Market Development
- Existing products in new markets

Diversification
- New products in new markets
- Highest risk strategy
`
    },
    {
      question: "Social Costs and Social Benefits",
      answer: "<div class=\"answer-list\"><p class=\"cons\"><strong>Social Costs</strong></p><p class=\"cons\">Negative effects on society from business activity</p><p class=\"cons\">Pollution</p><p class=\"cons\">Congestion</p><p class=\"cons\">Noise</p><p class=\"pros\"><strong>Social Benefits</strong></p><p class=\"pros\">Positive effects on society</p><p class=\"pros\">Job creation</p><p class=\"pros\">Better infrastructure</p><p class=\"pros\">Economic growth</p></div>"
    },
    {
      question: "Return on Capital Employed (ROCE)",
      answer: `
Formula
- ROCE = (Operating Profit / Capital Employed) x 100

Purpose
- Measures profitability and efficiency
`
    },
    {
      question: "Capital Employed Formula",
      answer: `
Formula
- Capital Employed = Total Assets - Current Liabilities
`
    },
    {
      question: "Business Aims",
      answer: `
For Profit Businesses
- Profit maximisation
- Growth
- Survival
- Market share

Non Profit Organisations
- Provide services
- Help communities
- Social welfare objectives
`
    },
    {
      question: "Window Dressing",
      answer: `
Definition:
Window dressing is when a business manipulates or presents financial accounts in a way that makes the business appear more financially attractive than it really is.

Examples:
- Delaying payments
- Recording revenue early
- Selling assets temporarily
- Reducing short-term liabilities before accounts are published

Purpose:
- Attract investors
- Improve shareholder confidence
- Make profitability/liquidity appear stronger
- Improve chances of gaining loans

Problems:
i) Misleading to investors and stakeholders
ii) May damage reputation if discovered
iii) Could reduce trust/confidence
iv) May lead to legal or ethical issues
`
    },
    {
      question: "Why Firms Depreciate Assets",
      answer: `
Reasons
- Assets lose value over time
- Wear and tear
- Technology becomes outdated
- Gives more accurate profit figures
- Matches cost of asset to years used
- Helps with future planning
`
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
  const isBullet = line.startsWith("- ");
  const negativeSectionNames = [
    "cons",
    "disadvantages",
    "problems",
    "negative impacts",
    "negative effects",
    "high gearing",
    "public costs",
    "private costs",
    "social costs"
  ];
  const positiveSectionNames = [
    "pros",
    "advantages",
    "benefits",
    "possible benefits",
    "low gearing",
    "public benefits",
    "private benefits",
    "social benefits"
  ];
  const cleanLowerLine = lowerLine.replace(/:$/, "");

  if (
    positiveSectionNames.includes(cleanLowerLine) ||
    lowerLine.includes("advantages") ||
    lowerLine.includes("benefits") ||
    lowerLine.startsWith("pros") ||
    lowerLine.startsWith("positive")
  ) {
    return "pros";
  }

  if (
    negativeSectionNames.includes(cleanLowerLine) ||
    lowerLine.includes("disadvantages") ||
    lowerLine.includes("negative") ||
    lowerLine.startsWith("costs") ||
    lowerLine.startsWith("cons") ||
    lowerLine.startsWith("problems")
  ) {
    return "cons";
  }

  if (
    lowerLine.startsWith("formula") ||
    lowerLine.includes(" formula") ||
    lowerLine.startsWith("condition") ||
    lowerLine.includes("=") ||
    lowerLine.includes("ped of exports")
  ) {
    return "formula";
  }

  if (lowerLine.startsWith("definition")) {
    return "definition";
  }

  if (isCostsQuestion) {
    return "cons";
  }

  if (!isBullet && line.length <= 45 && !/[.!?]$/.test(line)) {
    return "definition";
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

  const lowerQuestion = question.toLowerCase();
  const isCostsQuestion = lowerQuestion.startsWith("costs") || lowerQuestion.startsWith("negative");
  let currentClass = isCostsQuestion ? "cons" : "definition";
  const lines = trimmedAnswer.split("\n").map((line) => line.trim()).filter(Boolean);
  const formattedLines = lines.map((line) => {
    currentClass = getAnswerLineClass(line, currentClass, isCostsQuestion);
    const cleanLine = line.replace(/^- /, "");
    const escapedLine = escapeHtml(cleanLine);
    const lineWithBoldLead = !cleanLine.includes(" - ") && cleanLine.length <= 45 && !/[.!?]$/.test(cleanLine)
      ? `<strong>${escapedLine}</strong>`
      : escapedLine
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
    let refreshing = false;

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) {
        return;
      }

      refreshing = true;
      window.location.reload();
    });

    navigator.serviceWorker.register("./sw.js?v=32").then((registration) => {
      registration.update();

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;

        if (!newWorker) {
          return;
        }

        newWorker.addEventListener("statechange", () => {
          if (
            newWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            newWorker.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });
    });
  });
}
