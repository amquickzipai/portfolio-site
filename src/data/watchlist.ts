export interface WatchlistItem {
  ticker: string;
  name: string;
  thesis: string;
  theme: string;
}

export interface WatchlistTheme {
  id: number;
  name: string;
  description: string;
  items: WatchlistItem[];
}

export const watchlistThemes: WatchlistTheme[] = [
  {
    id: 1,
    name: "Bullshit Jobs",
    description: "Companies that will benefit from AI replacing low-value, administrative roles. These are large organizations with high overhead that could see significant margin improvement through AI-driven efficiency.",
    items: [
      { ticker: "ACN", name: "Accenture", thesis: "IT consulting giant reshaping workforce for AI era, massive potential for headcount optimization", theme: "Bullshit Jobs" },
      { ticker: "CAP.PA", name: "Capgemini", thesis: "European IT services company with high labor costs relative to revenue", theme: "Bullshit Jobs" },
      { ticker: "BT.A.L", name: "BT Group", thesis: "Already planning 40,000 job cuts, AI will accelerate this further", theme: "Bullshit Jobs" },
      { ticker: "CHRW", name: "CH Robinson", thesis: "Already optimized company talking about AI efficiency on earnings calls", theme: "Bullshit Jobs" },
    ]
  },
  {
    id: 2,
    name: "Post-Traumatic Supply Disorder",
    description: "Former pandemic darlings with infrastructure assets that would be prohibitively expensive to replicate in current market conditions.",
    items: [
      { ticker: "APP", name: "AppLovin", thesis: "Stimulus-era overbuilding now represents irreplaceable infrastructure", theme: "Post-Traumatic Supply Disorder" },
      { ticker: "SE", name: "Sea Limited", thesis: "Southeast Asian tech giant with established platform moats", theme: "Post-Traumatic Supply Disorder" },
      { ticker: "CVNA", name: "Carvana", thesis: "Built massive used car logistics network at zero rates", theme: "Post-Traumatic Supply Disorder" },
    ]
  },
  {
    id: 3,
    name: "Inference on Device",
    description: "Companies positioned to benefit from AI inference moving to edge devices rather than centralized cloud.",
    items: [
      { ticker: "SGM.AX", name: "Sims Ltd", thesis: "Key pick for on-device inference theme with recycling exposure", theme: "Inference on Device" },
    ]
  },
  {
    id: 4,
    name: "Advanced Packaging",
    description: "Semiconductor packaging companies benefiting from AI chip complexity.",
    items: [
      { ticker: "AMKR", name: "Amkor Technology", thesis: "Leading advanced packaging provider for AI chips", theme: "Advanced Packaging" },
      { ticker: "ASX", name: "ASE Technology", thesis: "Global semiconductor packaging leader", theme: "Advanced Packaging" },
    ]
  },
  {
    id: 5,
    name: "AI Materials",
    description: "Companies providing critical materials for AI infrastructure.",
    items: [
      { ticker: "CC", name: "Chemours", thesis: "Specialty chemicals for advanced manufacturing", theme: "AI Materials" },
    ]
  },
  {
    id: 6,
    name: "GOP Loses House",
    description: "Healthcare names that benefit if political dynamics shift and ACA remains protected.",
    items: [
      { ticker: "MOH", name: "Molina Healthcare", thesis: "Managed care company heavily exposed to Medicaid expansion", theme: "GOP Loses House" },
    ]
  },
  {
    id: 7,
    name: "Midterm Media Spend",
    description: "Companies that will benefit from political advertising spending in 2026 midterms.",
    items: [
      { ticker: "NRDS", name: "NerdWallet", thesis: "Digital platform poised to capture political ad spend", theme: "Midterm Media Spend" },
    ]
  },
  {
    id: 8,
    name: "Shipbuilding",
    description: "Naval and maritime construction beneficiaries of increased defense spending.",
    items: [
      { ticker: "HII", name: "Huntington Ingalls", thesis: "America's largest military shipbuilder", theme: "Shipbuilding" },
    ]
  },
  {
    id: 9,
    name: "Bread & Circuses",
    description: "Entertainment and consumer discretionary plays.",
    items: [
      { ticker: "SPHR", name: "Sphere Entertainment", thesis: "Iconic entertainment venue with massive growth potential", theme: "Bread & Circuses" },
    ]
  },
  {
    id: 10,
    name: "Earned Wage Access",
    description: "Fintech companies enabling workers to access earned wages before payday.",
    items: [
      { ticker: "DAVE", name: "Dave Inc", thesis: "Leading earned wage access platform", theme: "Earned Wage Access" },
    ]
  },
  {
    id: 11,
    name: "Rate Sensitive Regionals",
    description: "Regional banks that benefit from rate cuts.",
    items: [
      { ticker: "RKT", name: "Rocket Companies", thesis: "Mortgage lender with high rate sensitivity", theme: "Rate Sensitive Regionals" },
    ]
  },
  {
    id: 12,
    name: "Insurance Marketing",
    description: "Insurance lead generation and marketing platforms.",
    items: [
      { ticker: "NRDS", name: "NerdWallet", thesis: "Personal finance platform with insurance marketing exposure", theme: "Insurance Marketing" },
      { ticker: "EVER", name: "EverQuote", thesis: "Insurance comparison marketplace", theme: "Insurance Marketing" },
      { ticker: "MAX", name: "MediaAlpha", thesis: "Insurance advertising platform", theme: "Insurance Marketing" },
    ]
  },
  {
    id: 13,
    name: "World Cup 2026",
    description: "Companies benefiting from 2026 FIFA World Cup in US, Mexico, and Canada.",
    items: [
      { ticker: "UAL", name: "United Airlines", thesis: "Travel demand surge from World Cup", theme: "World Cup 2026" },
      { ticker: "CHH", name: "Choice Hotels", thesis: "Hotel demand increase from World Cup", theme: "World Cup 2026" },
    ]
  },
  {
    id: 14,
    name: "Geopolitical Special Situations",
    description: "Investments tied to specific geopolitical developments.",
    items: [
      { ticker: "PAM", name: "Pampa Energia", thesis: "Argentine energy play on Milei reforms", theme: "Geopolitical Special Situations" },
      { ticker: "CEPU", name: "Central Puerto", thesis: "Argentine power generation upside", theme: "Geopolitical Special Situations" },
    ]
  },
  {
    id: 15,
    name: "China",
    description: "Chinese tech and semiconductor exposure.",
    items: [
      { ticker: "ACMR", name: "ACM Research", thesis: "Semiconductor equipment with China exposure, beneficiary of onshoring", theme: "China" },
      { ticker: "BABA", name: "Alibaba", thesis: "Chinese e-commerce giant at depressed valuations", theme: "China" },
      { ticker: "BIDU", name: "Baidu", thesis: "Chinese search and AI leader", theme: "China" },
      { ticker: "TCEHY", name: "Tencent", thesis: "Chinese gaming and social media giant", theme: "China" },
    ]
  },
  {
    id: 16,
    name: "European Utilities",
    description: "European power companies benefiting from energy transition.",
    items: [
      { ticker: "ENR.DE", name: "Siemens Energy", thesis: "German energy infrastructure leader", theme: "European Utilities" },
    ]
  },
  {
    id: 17,
    name: "Robotics & Automation",
    description: "Companies driving the next wave of industrial and service automation.",
    items: [
      { ticker: "6954.T", name: "Fanuc", thesis: "Global robotics leader for factory automation", theme: "Robotics & Automation" },
      { ticker: "TER", name: "Teradyne", thesis: "Robotics through Universal Robots subsidiary", theme: "Robotics & Automation" },
      { ticker: "ROK", name: "Rockwell Automation", thesis: "Industrial automation leader returning to growth", theme: "Robotics & Automation" },
      { ticker: "HSAI", name: "Hesai Group", thesis: "LiDAR technology for autonomous systems", theme: "Robotics & Automation" },
      { ticker: "OUST", name: "Ouster", thesis: "Digital LiDAR sensors for automation", theme: "Robotics & Automation" },
    ]
  },
  {
    id: 18,
    name: "Biotherapeutics",
    description: "Next-generation obesity and oncology treatments.",
    items: [
      { ticker: "LLY", name: "Eli Lilly", thesis: "GLP-1 leader with Mounjaro/Zepbound", theme: "Biotherapeutics" },
      { ticker: "ARWR", name: "Arrowhead Pharmaceuticals", thesis: "RNAi therapeutics pipeline", theme: "Biotherapeutics" },
      { ticker: "ALNY", name: "Alnylam Pharmaceuticals", thesis: "Leader in RNAi therapeutics", theme: "Biotherapeutics" },
      { ticker: "TOI", name: "The Oncology Institute", thesis: "Community oncology consolidation play", theme: "Biotherapeutics" },
    ]
  },
  {
    id: 19,
    name: "Macro Trades",
    description: "Macro-driven investment themes.",
    items: [
      { ticker: "EIDO", name: "iShares MSCI Indonesia ETF", thesis: "Indonesia vs Vietnam relative value", theme: "Macro Trades" },
      { ticker: "VNM", name: "VanEck Vietnam ETF", thesis: "Vietnam manufacturing growth", theme: "Macro Trades" },
    ]
  },
  {
    id: 20,
    name: "The Girlfriend Index",
    description: "Consumer brands popular with female demographics.",
    items: [
      { ticker: "VSCO", name: "Victoria's Secret", thesis: "Brand turnaround play", theme: "The Girlfriend Index" },
      { ticker: "REAL", name: "The RealReal", thesis: "Luxury resale platform", theme: "The Girlfriend Index" },
      { ticker: "IPAR", name: "Inter Parfums", thesis: "Premium fragrance house", theme: "The Girlfriend Index" },
    ]
  },
  {
    id: 21,
    name: "Jumia",
    description: "African e-commerce play.",
    items: [
      { ticker: "JMIA", name: "Jumia Technologies", thesis: "The Amazon of Africa, high-risk high-reward emerging market e-commerce", theme: "Jumia" },
    ]
  },
  {
    id: 22,
    name: "Synopsys",
    description: "Semiconductor EDA tools essential for chip design.",
    items: [
      { ticker: "SNPS", name: "Synopsys", thesis: "Essential EDA tools for chip design, beneficiary of semiconductor complexity", theme: "Synopsys" },
    ]
  },
  {
    id: 23,
    name: "Long Boeing / Short Airbus",
    description: "Pair trade betting on Boeing recovery vs Airbus challenges.",
    items: [
      { ticker: "BA", name: "Boeing", thesis: "Production recovery and defense strength", theme: "Long Boeing / Short Airbus" },
      { ticker: "AIR.PA", name: "Airbus (Short)", thesis: "Supply chain issues and delivery challenges", theme: "Long Boeing / Short Airbus" },
    ]
  },
  {
    id: 24,
    name: "Saylor's Bluff",
    description: "Bitcoin vs leveraged Bitcoin exposure.",
    items: [
      { ticker: "BTC-USD", name: "Bitcoin", thesis: "Direct cryptocurrency exposure", theme: "Saylor's Bluff" },
      { ticker: "MSTR", name: "MicroStrategy (Short)", thesis: "Over-leveraged Bitcoin proxy trading at premium", theme: "Saylor's Bluff" },
    ]
  },
  {
    id: 25,
    name: "WPP plc",
    description: "Traditional advertising holding company turnaround.",
    items: [
      { ticker: "WPP.L", name: "WPP plc", thesis: "Advertising giant not dead yet, potential AI beneficiary in creative", theme: "WPP plc" },
    ]
  },
  {
    id: 26,
    name: "Orbital Manufacturing",
    description: "Space-based manufacturing moonshot.",
    items: [
      { ticker: "RDW", name: "Redwire Corp", thesis: "Space infrastructure and in-orbit manufacturing", theme: "Orbital Manufacturing" },
      { ticker: "PL", name: "Planet Labs", thesis: "Earth observation satellite constellation", theme: "Orbital Manufacturing" },
    ]
  },
];

export const getAllWatchlistItems = (): WatchlistItem[] => {
  return watchlistThemes.flatMap(theme => theme.items);
};

export const getUniqueWatchlistTickers = (): string[] => {
  const tickers = new Set(getAllWatchlistItems().map(item => item.ticker));
  return Array.from(tickers).sort();
};
