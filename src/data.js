// Auto-updated Tamil Nadu Election 2026 Data File
// Updated: 2026-04-07T00:00:00Z
// Source: Latest web search results from multiple opinion polls and election news

export const LAST_UPDATED = "2026-04-07T00:00:00Z";

export const ELECTION_META = {
  date: "23 April 2026",
  resultDate: "4 May 2026",
  totalSeats: 234,
  totalVoters: 56707380,
  maleVoters: 27738925,
  femaleVoters: 28960838,
  thirdGenderVoters: 7617,
  phase: "Single Phase",
  nominationStart: "30 March 2026",
  nominationEnd: "6 April 2026",
  scrutinyDate: "7 April 2026",
  withdrawalDeadline: "9 April 2026"
};

export const ALLIANCES = {
  SPA: {
    name: "Secular Progressive Alliance (SPA)",
    leader: "DMK",
    cmCandidate: "M.K. Stalin",
    color: "#E53935",
    parties: [
      { name: "DMK", seats: 164, leader: "M.K. Stalin", color: "#E53935" },
      { name: "INC", seats: 28, leader: "K Selvaperunthagai", color: "#19AAED" },
      { name: "DMDK", seats: 10, leader: "Premalatha Vijayakanth", color: "#FF9800" },
      { name: "VCK", seats: 8, leader: "Thol. Thirumavalavan", color: "#7B1FA2" },
      { name: "CPI", seats: 5, leader: "D. Raja", color: "#C62828" },
      { name: "CPI(M)", seats: 5, leader: "K. Balakrishnan", color: "#B71C1C" },
      { name: "MDMK", seats: 4, leader: "Vaiko", color: "#F57C00" },
      { name: "IUML", seats: 2, leader: "K.M. Kader Mohideen", color: "#2E7D32" },
      { name: "KMDK", seats: 2, leader: "E.R. Eswaran", color: "#558B2F" },
      { name: "MMK", seats: 2, leader: "Jawahirullah", color: "#00695C" },
      { name: "Others", seats: 4, leader: "Various", color: "#9E9E9E" },
    ],
    totalSeats: 234,
    support: ["MNM (outside support)"],
  },
  NDA: {
    name: "National Democratic Alliance (NDA)",
    leader: "AIADMK",
    cmCandidate: "Edappadi K. Palaniswami",
    color: "#388E3C",
    parties: [
      { name: "AIADMK", seats: 169, leader: "E.K. Palaniswami", color: "#388E3C" },
      { name: "BJP", seats: 27, leader: "Nainar Nagendran", color: "#FF6F00" },
      { name: "PMK", seats: 18, leader: "Anbumani Ramadoss", color: "#FFCA28" },
      { name: "AMMK", seats: 11, leader: "TTV Dhinakaran", color: "#1565C0" },
      { name: "TMC(M)", seats: 5, leader: "G.K. Vasan", color: "#5C6BC0" },
      { name: "IJK", seats: 2, leader: "T.R. Paarivendhar", color: "#8D6E63" },
      { name: "TMMK", seats: 1, leader: "B. John Pandian", color: "#78909C" },
      { name: "PB", seats: 1, leader: "A. Krishnasamy", color: "#607D8B" },
    ],
    totalSeats: 234,
  },
  TVK: {
    name: "Tamilaga Vettri Kazhagam (TVK)",
    leader: "TVK",
    cmCandidate: "C. Joseph Vijay",
    color: "#FFC107",
    parties: [{ name: "TVK", seats: 234, leader: "C. Joseph Vijay", color: "#FFC107" }],
    totalSeats: 234,
  },
  NTK: {
    name: "Naam Tamilar Katchi (NTK)",
    leader: "NTK",
    cmCandidate: "Seeman",
    color: "#D32F2F",
    parties: [{ name: "NTK", seats: 234, leader: "Seeman", color: "#D32F2F" }],
    totalSeats: 234,
  },
};

export const OPINION_POLLS = [
  { source: "Shining India Survey", date: "Apr 2026", spa: { min: 80, max: 90 }, nda: { min: 95, max: 105 }, tvk: { min: 35, max: 45 }, ntk: { min: 6, max: 10 } },
  { source: "Vote Vibe / News18", date: "Mar 2026", spa: { min: 113, max: 123 }, nda: { min: 106, max: 116 }, tvk: { min: 2, max: 8 }, ntk: { min: 0, max: 3 } },
  { source: "Opinions & Ratings", date: "Apr 2026", spa: { min: 85, max: 95 }, nda: { min: 88, max: 98 }, tvk: { min: 42, max: 52 }, ntk: { min: 5, max: 9 } },
  { source: "IPDS (Loyola Alumni)", date: "Jan 2026", spa: { min: 95, max: 110 }, nda: { min: 70, max: 85 }, tvk: { min: 45, max: 55 }, ntk: { min: 8, max: 12 } },
  { source: "Parawheel", date: "Mar 2026", spa: { min: 95, max: 110 }, nda: { min: 85, max: 100 }, tvk: { min: 25, max: 40 }, ntk: { min: 3, max: 8 } },
];

export const VOTE_SHARE_POLLS = [
  { source: "Shining India", spa: 36.1, nda: 37.5, tvk: 16.3, ntk: 3.2, undecided: 6.9 },
  { source: "Opinions & Ratings", spa: 32.8, nda: 35.2, tvk: 21.7, ntk: 6.1, undecided: 4.2 },
  { source: "Vote Vibe / News18", spa: 42.3, nda: 38.1, tvk: 11.5, ntk: 4.8, undecided: 3.3 },
  { source: "IPDS (Loyola Alumni)", spa: 38.5, nda: 28.3, tvk: 24.2, ntk: 5.7, undecided: 3.3 },
  { source: "Parawheel", spa: 25.3, nda: 22.8, tvk: 24.7, ntk: 8.0, undecided: 19.2 },
];

export const CM_PREFERENCE = [
  { name: "M.K. Stalin", party: "DMK", pct: 33.3, color: "#E53935" },
  { name: "Edappadi K. Palaniswami", party: "AIADMK", pct: 29.8, color: "#388E3C" },
  { name: "C. Joseph Vijay", party: "TVK", pct: 23.2, color: "#FFC107" },
  { name: "K. Annamalai", party: "BJP", pct: 6.2, color: "#FF6F00" },
  { name: "Others", party: "Others", pct: 7.5, color: "#9E9E9E" },
];

export const RESULTS_2021 = {
  spa: { seats: 159, dmk: 133, inc: 18, vck: 4, cpim: 2, cpi: 2 },
  nda: { seats: 75, aiadmk: 66, bjp: 4, pmk: 5 },
  others: { ntk: 0, mnm: 0, ammk: 0, ind: 0 },
  voteShare: { dmkAlliance: 44.5, aiadmkAlliance: 37.2, ntk: 6.58, mnm: 2.73, ammk: 2.85, others: 6.14 },
};

export const KEY_ISSUES = [
  { issue: "Law and Order", importance: 92, favorsDMK: false },
  { issue: "Corruption Allegations", importance: 90, favorsDMK: false },
  { issue: "Drug Menace", importance: 88, favorsDMK: false },
  { issue: "Women's Safety", importance: 87, favorsDMK: false },
  { issue: "Unemployment", importance: 85, favorsDMK: false },
  { issue: "Rising Prices / Inflation", importance: 83, favorsDMK: false },
  { issue: "State Debt Crisis", importance: 80, favorsDMK: false },
  { issue: "Welfare Schemes", importance: 78, favorsDMK: true },
  { issue: "NEET / Education", importance: 75, favorsDMK: true },
  { issue: "Tamil Identity / Federalism", importance: 72, favorsDMK: true },
];

export const KEY_CANDIDATES = [
  { name: "M.K. Stalin", party: "DMK", alliance: "SPA", constituency: "Kolathur", role: "CM / DMK President" },
  { name: "Udhayanidhi Stalin", party: "DMK", alliance: "SPA", constituency: "Chepauk-Thiruvallikeni", role: "Deputy CM" },
  { name: "V. Senthil Balaji", party: "DMK", alliance: "SPA", constituency: "Coimbatore South", role: "DMK Leader" },
  { name: "O. Panneerselvam", party: "DMK", alliance: "SPA", constituency: "Bodinayakkanur", role: "Former CM (joined DMK Feb 2026)" },
  { name: "Ma. Subramanian", party: "DMK", alliance: "SPA", constituency: "Saidapet", role: "Health Minister" },
  { name: "E.V. Velu", party: "DMK", alliance: "SPA", constituency: "Mylapore", role: "Highways Minister" },
  { name: "E.K. Palaniswami", party: "AIADMK", alliance: "NDA", constituency: "Edappadi", role: "AIADMK Gen Sec / CM Candidate" },
  { name: "Tamilisai Soundararajan", party: "BJP", alliance: "NDA", constituency: "Mylapore", role: "Former Governor" },
  { name: "Nainar Nagendran", party: "BJP", alliance: "NDA", constituency: "Sattur", role: "BJP TN Chief" },
  { name: "L. Murugan", party: "BJP", alliance: "NDA", constituency: "Avanashi", role: "Union Minister" },
  { name: "Vanathi Srinivasan", party: "BJP", alliance: "NDA", constituency: "Coimbatore North", role: "BJP Mahila Morcha President" },
  { name: "Anbumani Ramadoss", party: "PMK", alliance: "NDA", constituency: "Pennagaram", role: "PMK President" },
  { name: "TTV Dhinakaran", party: "AMMK", alliance: "NDA", constituency: "Kovilpatti", role: "AMMK Gen Sec" },
  { name: "C. Joseph Vijay", party: "TVK", alliance: "TVK", constituency: "Perambur & Tiruchirappalli East", role: "TVK President / CM Candidate" },
  { name: "Seeman", party: "NTK", alliance: "NTK", constituency: "Thiruvottiyur", role: "NTK Chief Coordinator" },
  { name: "Thol. Thirumavalavan", party: "VCK", alliance: "SPA", constituency: "Kattumannarkoil (SC)", role: "VCK President" },
  { name: "Premalatha Vijayakanth", party: "DMDK", alliance: "SPA", constituency: "TBD", role: "DMDK Leader" },
  { name: "N. Anand", party: "TVK", alliance: "TVK", constituency: "Thiyagarayanagar", role: "TVK Core Team" },
  { name: "Aadhav Arjuna", party: "TVK", alliance: "TVK", constituency: "Villivakkam", role: "TVK General Secretary" },
  { name: "K.A. Sengottaiyan", party: "TVK", alliance: "TVK", constituency: "Gobichettipalayam", role: "TVK Leader (ex-AIADMK)" },
];

export const REGIONS = {
  "Chennai": { seats: 16, dmk2021: 16, aiadmk2021: 0, swing: "DMK stronghold, TVK challenging", tvkThreat: "High" },
  "North Tamil Nadu": { seats: 38, dmk2021: 30, aiadmk2021: 8, swing: "DMK leaning, anti-incumbency visible", tvkThreat: "High" },
  "Western Tamil Nadu": { seats: 42, dmk2021: 24, aiadmk2021: 18, swing: "Competitive three-way", tvkThreat: "Medium" },
  "Central Tamil Nadu": { seats: 32, dmk2021: 22, aiadmk2021: 10, swing: "DMK under pressure", tvkThreat: "High" },
  "Cauvery Delta": { seats: 28, dmk2021: 22, aiadmk2021: 6, swing: "DMK stronghold tested", tvkThreat: "High" },
  "Southern Tamil Nadu": { seats: 48, dmk2021: 28, aiadmk2021: 20, swing: "Competitive", tvkThreat: "Low" },
  "Kongu Belt": { seats: 30, dmk2021: 15, aiadmk2021: 15, swing: "AIADMK-NDA advantage", tvkThreat: "Low" },
};

export const TIMELINE = [
  { date: "Feb 2024", event: "Vijay launches TVK party" },
  { date: "Sep 2024", event: "TVK declares centre-left ideology, rejects BJP" },
  { date: "Oct 2024", event: "TVK Vikravandi conference — 800K+ attendees" },
  { date: "Mar 2024", event: "MNM joins DMK's SPA" },
  { date: "Sep 2023", event: "AIADMK quits NDA" },
  { date: "Apr 2025", event: "AIADMK-BJP reunite in NDA" },
  { date: "Jun 2025", event: "DMK launches membership drive" },
  { date: "Jul 2025", event: "AIADMK campaign launch: 'Makkalai Kaappom'" },
  { date: "Sep 2025", event: "TVK Karur rally stampede — 41 dead" },
  { date: "Jan 2026", event: "PMK & AMMK join AIADMK-led NDA" },
  { date: "19 Feb 2026", event: "DMDK joins DMK alliance" },
  { date: "27 Feb 2026", event: "O. Panneerselvam joins DMK" },
  { date: "15 Mar 2026", event: "ECI announces election schedule" },
  { date: "18 Mar 2026", event: "Vijay rejects NDA alliance offer (90 seats + CM post)" },
  { date: "22 Mar 2026", event: "T. Velmurugan-led TVK withdraws from SPA" },
  { date: "23 Mar 2026", event: "NDA finalizes seat-sharing: AIADMK 169, BJP 27, PMK 18, AMMK 11" },
  { date: "24 Mar 2026", event: "AIADMK releases manifesto with 297 promises; MNM gives outside support to SPA" },
  { date: "28 Mar 2026", event: "DMK releases candidate list for 164 seats" },
  { date: "29 Mar 2026", event: "TVK releases full 234 candidate list; DMK unveils 'Superstar Manifesto' with 525+ promises" },
  { date: "30 Mar 2026", event: "Nominations begin; Vijay and Stalin file papers from their first constituencies" },
  { date: "1 Apr 2026", event: "MK Stalin kicks off campaign in Tiruchirappalli" },
  { date: "2 Apr 2026", event: "Vijay files nomination from Trichy East (second constituency)" },
  { date: "3 Apr 2026", event: "BJP releases 27 candidate list, Congress candidate list released" },
  { date: "5 Apr 2026", event: "Multiple polls show close three-way race, fragmented mandate likely" },
  { date: "6 Apr 2026", event: "Last date for nominations - 3,430 nominations filed across 234 seats" },
  { date: "7 Apr 2026", event: "Scrutiny of nominations begins" },
  { date: "9 Apr 2026", event: "Last date for withdrawal" },
  { date: "23 Apr 2026", event: "POLLING DAY" },
  { date: "4 May 2026", event: "RESULTS DAY" },
];

export const CAMPAIGN_NARRATIVES = [
  { title: "DMK's 'Superstar Manifesto'", desc: "₹8,000 'Illatharasi' coupon for women, ₹2,000 monthly aid (doubled from ₹1,000), 35 lakh laptops, 50 lakh jobs, 10 lakh houses, health insurance up to ₹10 lakh — 525+ promises for 'Dravidian Model 2.0'", color: "#E53935" },
  { title: "NDA's United Front", desc: "AIADMK's 297 promises include ₹2,000/month for women, ₹10,000 relief/family, BJP gets 27 seats (up from 20 in 2021), PMK 18 seats, AMMK 11 seats — smooth negotiations completed quickly", color: "#388E3C" },
  { title: "Vijay's Dual Contest Strategy", desc: "TVK leader contests from both Perambur (Chennai) and Trichy East, positions as 'TVK vs DMK' battle, promises drug-free TN, ₹4,000/month for unemployed graduates, ₹20 lakh collateral-free loans", color: "#FFC107" },
  { title: "Fragmented Opinion Polls", desc: "Multiple surveys show close three-way race: Stalin 33.3%, EPS 29.8%, Vijay 23.2% in CM preference. Vote share varies widely - some show NDA ahead, others DMK leading, TVK emerging as kingmaker", color: "#9C27B0" },
  { title: "Anti-Incumbency vs Performance", desc: "59% say law & order is poor, 50% want change vs 43% want DMK to continue. Stalin performance: 23% excellent, 40% average, 37% poor. Corruption cases against ministers fuel discontent", color: "#FF5722" },
  { title: "OPS Defection Impact", desc: "Former CM O. Panneerselvam's February switch to DMK from AIADMK creates major boost for ruling alliance, likely contesting Bodinayakkanur, signals AIADMK's internal weaknesses", color: "#E53935" },
  { title: "Youth & Urban Shift", desc: "41% of youth voters prefer TVK in some polls, urban areas show fragmented preferences. Vijay ranks first among young leaders attracting new voters, threatens both DMK and AIADMK vote banks", color: "#FFC107" },
];

export const SATISFACTION_DATA = [
  { label: "Modi Performance - Excellent", pct: 40, color: "#FF6F00" },
  { label: "Stalin Performance - Excellent", pct: 23, color: "#E53935" },
  { label: "Stalin Performance - Average", pct: 40, color: "#FF9800" },
  { label: "Stalin Performance - Poor", pct: 37, color: "#F44336" },
  { label: "DMK Govt - Satisfied", pct: 49, color: "#E53935" },
  { label: "DMK Govt - Dissatisfied", pct: 25, color: "#F44336" },
  { label: "Law & Order - Poor", pct: 59, color: "#F44336" },
  { label: "Want DMK to Continue", pct: 43, color: "#E53935" },
  { label: "Want Change", pct: 50, color: "#388E3C" },
  { label: "Undecided Voters", pct: 7, color: "#9E9E9E" },
];