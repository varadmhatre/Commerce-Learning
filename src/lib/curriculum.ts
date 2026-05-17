import type { Chapter } from "@/types/learning";

export const roadmap: Chapter[] = [
  {
    id: "human-wants",
    title: "Human Wants",
    subtitle: "Why every economy starts with desire, choice, and trade-offs.",
    pillar: "Foundations",
    difficulty: "beginner",
    minutes: 18,
    xp: 120,
    color: "from-cyan-400 to-blue-500",
    iconName: "Sparkles",
    concept: "Human wants are unlimited, but time, money, attention, and resources are limited. Commerce exists because people exchange value to satisfy these wants better than they could alone.",
    beginner: "Think of your monthly allowance as a tiny economy. You may want snacks, games, books, and savings, but you cannot buy everything at once. Choosing one thing means postponing another.",
    advanced: "Wants become market demand only when backed by purchasing power and willingness to pay. Firms study latent wants, convert them into product categories, and compete on perceived utility.",
    example: "A student chooses between a streaming subscription and a finance book. The decision reveals preference, opportunity cost, and expected utility.",
    observationTask: "Track three purchases around you today and write what human want each purchase was trying to satisfy.",
    miniProject: "Create a wants map for a college student: survival, comfort, status, learning, entertainment, and future security.",
    checkpoints: ["Separate needs from wants", "Identify hidden opportunity costs", "Explain why businesses study wants"],
    flashcards: [
      { front: "What turns a want into demand?", back: "Willingness and ability to pay." },
      { front: "Why are wants important to commerce?", back: "They create the reason for production, exchange, marketing, and innovation." }
    ],
    quiz: [
      { prompt: "A want becomes economic demand when it has:", options: ["A celebrity endorsement", "Purchasing power and willingness to pay", "A low price only", "Government approval"], answer: 1, explanation: "Demand is not just desire; it needs ability and willingness to pay." }
    ]
  },
  {
    id: "scarcity-utility",
    title: "Scarcity & Utility",
    subtitle: "The engine behind price, value, and economic decision-making.",
    pillar: "Foundations",
    difficulty: "beginner",
    minutes: 24,
    xp: 140,
    color: "from-violet-400 to-fuchsia-500",
    iconName: "Gem",
    concept: "Scarcity means resources are limited relative to wants. Utility is the satisfaction from consuming a good or service. Prices emerge because scarce things with utility must be allocated.",
    beginner: "Water is cheap in a city but priceless in a desert. Same product, different scarcity, different utility, different value.",
    advanced: "Marginal utility usually declines as consumption rises, shaping demand curves and consumer surplus. Scarcity also creates shadow prices even when market prices are absent.",
    example: "The first slice of pizza when hungry gives high utility; the fifth gives much less.",
    observationTask: "Notice one item that feels more valuable in one context than another and explain why.",
    miniProject: "Draw a marginal utility curve for cups of coffee consumed in one day.",
    checkpoints: ["Define scarcity", "Explain utility", "Connect marginal utility to demand"],
    flashcards: [
      { front: "What is marginal utility?", back: "Extra satisfaction from consuming one more unit." },
      { front: "Why do scarce goods often have prices?", back: "Prices help allocate limited goods among competing uses." }
    ],
    quiz: [
      { prompt: "The fifth glass of water after four glasses usually has:", options: ["Higher marginal utility", "Lower marginal utility", "No utility ever", "Infinite price"], answer: 1, explanation: "Marginal utility commonly declines as immediate satisfaction is met." }
    ]
  },
  {
    id: "money-banking",
    title: "Money & Banking",
    subtitle: "How trust, deposits, credit, and payment rails power modern life.",
    pillar: "Money Systems",
    difficulty: "beginner",
    minutes: 32,
    xp: 180,
    color: "from-emerald-300 to-teal-500",
    iconName: "Landmark",
    concept: "Money solves barter problems by acting as a medium of exchange, unit of account, and store of value. Banks move money through time by collecting deposits, making loans, and managing risk.",
    beginner: "A bank is not just a locker. It is a trust machine that records balances, helps payments move, and lends money to people who promise to repay.",
    advanced: "Modern banking combines fractional reserves, duration transformation, credit underwriting, capital adequacy, payment settlement, and central-bank liquidity backstops.",
    example: "When you use a debit card, no physical cash travels. Databases update claims between banks and merchants.",
    observationTask: "List every non-cash payment you see in a day and identify the institutions involved.",
    miniProject: "Sketch a payment journey from customer card swipe to merchant bank account.",
    checkpoints: ["Functions of money", "Difference between deposits and loans", "Why trust matters in banking"],
    flashcards: [
      { front: "Three functions of money", back: "Medium of exchange, unit of account, store of value." },
      { front: "What is credit risk?", back: "The risk that a borrower does not repay as agreed." }
    ],
    quiz: [
      { prompt: "Which is NOT a core function of money?", options: ["Medium of exchange", "Unit of account", "Store of value", "Guaranteed profit"], answer: 3, explanation: "Money enables exchange and accounting, but does not guarantee profit." }
    ]
  },
  {
    id: "inflation-demand-supply",
    title: "Inflation, Demand & Supply",
    subtitle: "Read prices like signals from a living economic network.",
    pillar: "Markets",
    difficulty: "intermediate",
    minutes: 38,
    xp: 220,
    color: "from-orange-300 to-rose-500",
    iconName: "TrendingUp",
    concept: "Demand shows how much buyers want at each price. Supply shows how much sellers offer. Inflation is a sustained rise in the general price level, often from demand pressure, supply shocks, money growth, or expectations.",
    beginner: "If more people want concert tickets and seats are fixed, prices rise. If production costs rise for many goods, your overall cost of living can rise too.",
    advanced: "Inflation dynamics include output gaps, wage-price feedback, monetary transmission, supply-chain constraints, and anchored or unanchored expectations.",
    example: "A poor harvest reduces vegetable supply, pushing prices up even if demand is unchanged.",
    observationTask: "Find one item whose price changed recently and infer whether demand, supply, or costs likely shifted.",
    miniProject: "Use the simulator to shift demand and supply curves for a coffee shop after a viral review.",
    checkpoints: ["Draw demand and supply", "Explain equilibrium", "Distinguish relative price changes from inflation"],
    flashcards: [
      { front: "What is equilibrium price?", back: "The price where quantity demanded equals quantity supplied." },
      { front: "What is inflation?", back: "A sustained increase in the general price level." }
    ],
    quiz: [
      { prompt: "A supply shock usually means:", options: ["Supply curve shifts", "Demand disappears", "Money stops working", "All prices must fall"], answer: 0, explanation: "Supply shocks change sellers' ability or cost to produce." }
    ]
  },
  {
    id: "accounting-business",
    title: "Business & Accounting Basics",
    subtitle: "Decode profit, cash flow, balance sheets, and business models.",
    pillar: "Business Systems",
    difficulty: "intermediate",
    minutes: 42,
    xp: 250,
    color: "from-amber-300 to-yellow-500",
    iconName: "ReceiptText",
    concept: "Accounting translates business activity into financial statements. Profit is not the same as cash. Strong businesses manage revenue, costs, assets, liabilities, and customer value creation.",
    beginner: "A lemonade stand can look profitable but still run out of cash if customers pay later and lemons must be bought today.",
    advanced: "Accrual accounting, working capital, unit economics, gross margin, contribution margin, and operating leverage reveal the real quality of a business model.",
    example: "A subscription company spends cash now to acquire customers and earns revenue gradually over months.",
    observationTask: "Pick a local business and list its likely revenue streams, fixed costs, and variable costs.",
    miniProject: "Build a one-page income statement for a weekend pop-up store.",
    checkpoints: ["Separate profit and cash", "Read assets and liabilities", "Estimate unit economics"],
    flashcards: [
      { front: "Profit formula", back: "Revenue minus expenses." },
      { front: "Asset vs liability", back: "An asset is owned value; a liability is an obligation owed." }
    ],
    quiz: [
      { prompt: "A profitable business can fail if it lacks:", options: ["A logo", "Cash flow", "A social account", "More meetings"], answer: 1, explanation: "Bills are paid with cash, not accounting profit alone." }
    ]
  },
  {
    id: "investing-sips-mutual-funds",
    title: "Investing, SIPs & Mutual Funds",
    subtitle: "Turn patience, diversification, and compounding into a wealth system.",
    pillar: "Wealth Building",
    difficulty: "intermediate",
    minutes: 46,
    xp: 280,
    color: "from-lime-300 to-emerald-500",
    iconName: "LineChart",
    concept: "Investing means buying assets expected to generate future cash flows or appreciation. SIPs automate periodic investing. Mutual funds pool investor money into diversified portfolios managed by professionals or rules.",
    beginner: "A SIP is like planting a money seed every month. Some months you buy at high prices, some at low prices, and time helps compounding do the heavy lifting.",
    advanced: "Portfolio outcomes depend on asset allocation, expense ratios, tracking error, risk-adjusted return, drawdowns, behavioral discipline, and tax efficiency.",
    example: "Investing $200 monthly for 25 years at 9% can grow dramatically because returns earn returns.",
    observationTask: "Compare two funds by expense ratio, risk level, and investment objective.",
    miniProject: "Use the SIP calculator to design a 10-year goal plan and document assumptions.",
    checkpoints: ["Explain compounding", "Understand diversification", "Compare active and index funds"],
    flashcards: [
      { front: "What is a SIP?", back: "A systematic investment plan that invests a fixed amount regularly." },
      { front: "Why diversify?", back: "To reduce dependence on any single asset or company outcome." }
    ],
    quiz: [
      { prompt: "Compounding means:", options: ["Returns can earn returns", "Prices never fall", "Taxes disappear", "Risk becomes zero"], answer: 0, explanation: "Compounding happens when accumulated returns also generate future returns." }
    ]
  },
  {
    id: "credit-taxes-insurance",
    title: "Credit, Debt, Taxes & Insurance",
    subtitle: "Protect your downside before chasing upside.",
    pillar: "Personal Finance",
    difficulty: "intermediate",
    minutes: 40,
    xp: 240,
    color: "from-sky-300 to-indigo-500",
    iconName: "ShieldCheck",
    concept: "Credit pulls future purchasing power into the present. Taxes fund public systems and affect net returns. Insurance transfers certain risks so one event does not destroy your financial base.",
    beginner: "A loan is not free money. It is future income promised to someone else, usually with interest.",
    advanced: "Good financial architecture optimizes debt service ratios, emergency liquidity, risk transfer, tax location, and after-tax compounding.",
    example: "High-interest credit card debt can grow faster than many investments, making repayment the best guaranteed return.",
    observationTask: "Find the APR on a credit product and translate it into monthly interest cost.",
    miniProject: "Build a personal risk shield: emergency fund, health coverage, term insurance, and debt payoff order.",
    checkpoints: ["Know APR", "Explain insurance pooling", "Distinguish gross and net returns"],
    flashcards: [
      { front: "What is APR?", back: "Annual percentage rate, the yearly cost of borrowing." },
      { front: "Why buy insurance?", back: "To transfer large uncertain losses you cannot comfortably absorb." }
    ],
    quiz: [
      { prompt: "Before investing aggressively, most beginners should first build:", options: ["A yacht fund", "An emergency fund", "A complex derivatives account", "More subscriptions"], answer: 1, explanation: "Emergency savings prevent forced borrowing or selling during shocks." }
    ]
  },
  {
    id: "entrepreneurship-marketing",
    title: "Entrepreneurship & Marketing",
    subtitle: "Build offers people understand, trust, desire, and pay for.",
    pillar: "Creation",
    difficulty: "advanced",
    minutes: 50,
    xp: 320,
    color: "from-pink-300 to-purple-500",
    iconName: "Rocket",
    concept: "Entrepreneurship creates value under uncertainty. Marketing connects a valuable solution to a specific audience through positioning, messaging, distribution, and trust.",
    beginner: "A business is not just an idea. It is a repeatable system that solves a problem for people who pay enough to sustain it.",
    advanced: "Scalable ventures optimize customer acquisition cost, lifetime value, retention loops, contribution margin, pricing power, and distribution leverage.",
    example: "A tutoring startup wins by focusing on anxious first-year students, not by saying it teaches everyone everything.",
    observationTask: "Analyze one ad: target customer, pain point, promise, proof, and call to action.",
    miniProject: "Design a landing page offer for a micro-business and estimate CAC vs LTV.",
    checkpoints: ["Define customer segment", "Write a value proposition", "Understand CAC and LTV"],
    flashcards: [
      { front: "What is positioning?", back: "How a product is framed in the customer's mind relative to alternatives." },
      { front: "What is LTV?", back: "Lifetime value, expected gross value from a customer over time." }
    ],
    quiz: [
      { prompt: "A strong niche helps because it:", options: ["Makes messaging sharper", "Removes all competition", "Guarantees funding", "Eliminates operations"], answer: 0, explanation: "Specific audiences make the product, message, and channels clearer." }
    ]
  },
  {
    id: "macro-cycles-wealth",
    title: "Macroeconomics, Cycles & Advanced Wealth",
    subtitle: "Connect central banks, cycles, companies, psychology, and portfolios.",
    pillar: "Advanced Systems",
    difficulty: "advanced",
    minutes: 58,
    xp: 380,
    color: "from-red-300 to-orange-500",
    iconName: "Orbit",
    concept: "Advanced wealth creation blends macro awareness, business quality, valuation, risk management, tax planning, behavior, and long-term compounding through market cycles.",
    beginner: "Economies move in seasons: expansion, overheating, slowdown, and recovery. Investors must avoid making permanent decisions from temporary fear or excitement.",
    advanced: "Cycle-aware investing studies rates, credit spreads, liquidity, earnings revisions, valuation multiples, balance-sheet strength, and behavioral regime shifts.",
    example: "Rising interest rates can pressure expensive growth stocks because future cash flows are discounted more heavily.",
    observationTask: "Read one central bank headline and infer which part of the economy it may affect first.",
    miniProject: "Create a diversified policy portfolio and write rules for rebalancing in market stress.",
    checkpoints: ["Explain cycles", "Connect rates to valuation", "Name common investor biases"],
    flashcards: [
      { front: "What is a market cycle?", back: "A recurring pattern of expansion, optimism, stress, contraction, and recovery." },
      { front: "What is loss aversion?", back: "The tendency to feel losses more intensely than equal gains." }
    ],
    quiz: [
      { prompt: "A long-term investor's biggest enemy is often:", options: ["Only math", "Behavior during volatility", "Reading statements", "Diversification"], answer: 1, explanation: "Poor behavior can destroy otherwise sound plans." }
    ]
  }
];

export function getChapter(id: string) {
  return roadmap.find((chapter) => chapter.id === id) ?? roadmap[0];
}
