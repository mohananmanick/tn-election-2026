// Auto-updated Tamil Nadu Election 2026 Data File
// Updated: 2026-03-31T00:00:00Z
// Source: Latest web search results from multiple opinion polls and election news

export const LAST_UPDATED = "2026-03-31T00:00:00Z";

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
      { name: "INC", seats: 28, leader: "Girish Chodankar (in-charge)", color: "#19AAED" },
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
      { name: "AIADMK", seats: 167, leader: "E.K. Palaniswami", color: "#388E3C" },
      { name: "BJP", seats: 27, leader: "Nainar Nagendran", color: "#FF6F00" },
      { name: "PMK", seats: 18, leader: "Anbumani Ramadoss", color: "#FFCA28" },
      { name: "AMMK", seats: 11, leader: "TTV Dhinakaran", color: "#1565C0" },
      { name: "TMC(M)", seats: 5, leader: "G.K. Vasan", color: "#5C6BC0" },
      { name: "IJK", seats: 2, leader: "T.R. Paarivendhar", color: "#8D6E63" },
      { name: "TMMK", seats: 2, leader: "B. John Pandian", color: "#78909C" },
      { name: "Others", seats: 2, leader: "Various", color: "#9E9E9E" },
    ],
    totalSeats: 234,
  },
  TVK: {
    name: "Tamilaga Vettri Kazhagam (TVK)",
    leader: "TVK",
    cmCandidate: "Vijay",
    color: "#FFC107",
    parties: [{ name: "TVK", seats: 234, leader: "Vijay", color: "#FFC107" }],
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
  { source: "Vote Vibe / News18", date: "Mar 2026", spa: { min: 113, max: 123 }, nda: { min: 106, max: 116 }, tvk: { min: 2, max: 8 }, ntk: { min: 0, max: 3 } },
  { source: "Matrize", date: "Mar 2026", spa: { min: 104, max: 114 }, nda: { min: 114, max: 127 }, tvk: { min: 6, max: 12 }, ntk: { min: 1, max: 6 } },
  { source: "Parawheel", date: "Mar 2026", spa: { min: 95, max: 110 }, nda: { min: 85, max: 100 }, tvk: { min: 25, max: 40 }, ntk: { min: 3, max: 8 } },
  { source: "Shining India Survey", date: "Mar 2026", spa: { min: 100, max: 115 }, nda: { min: 110, max: 125 }, tvk: { min: 5, max: 15 }, ntk: { min: 1, max: 5 } },
  { source: "Agni News", date: "Jul 2025", spa: { min: 155, max: 170 }, nda: { min: 60, max: 75 }, tvk: { min: 0, max: 5 }, ntk: { min: 0, max: 3 } },
];

export const VOTE_SHARE_POLLS = [
  { source: "Shining India", spa: 36.1, nda: 37.5, tvk: 16.3, ntk: 3.2, undecided: 6.9 },
  { source: "Parawheel", spa: 25.3, nda: 22.8, tvk: 24.7, ntk: 8.0, undecided: 19.2 },
  { source: "DMK Internal (TVK solo)", spa: 45, nda: 22, tvk: 23, ntk: 5, undecided: 5 },
  { source: "TVK Internal", spa: 30, nda: 22, tvk: 30, ntk: 8, undecided: 10 },
];

export const CM_PREFERENCE = [
  { name: "M.K. Stalin", party: "DMK", pct: 39.9, color: "#E53935" },
  { name: "E.K. Palaniswami", party: "AIADMK", pct: 37.5, color: "#388E3C" },
  { name: "Vijay", party: "TVK", pct: 14.7, color: "#FFC107" },
  { name: "Others", party: "Others", pct: 7.9, color: "#9E9E9E" },
];

export const RESULTS_2021 = {
  spa: { seats: 159, dmk: 133, inc: 18, vck: 4, cpim: 2, cpi: 2 },
  nda: { seats: 75, aiadmk: 66, bjp: 4, pmk: 5 },
  others: { ntk: 0, mnm: 0, ammk: 0, ind: 0 },
  voteShare: { dmkAlliance: 44.5, aiadmkAlliance: 37.2, ntk: 6.58, mnm: 2.73, ammk: 2.85, others: 6.14 },
};

export const KEY_ISSUES = [
  { issue: "Welfare Schemes", importance: 92, favorsDMK: true },
  { issue: "Corruption Allegations", importance: 88, favorsDMK: false },
  { issue: "Women's Safety", importance: 85, favorsDMK: false },
  { issue: "Unemployment", importance: 82, favorsDMK: false },
  { issue: "Rising Prices / Inflation", importance: 80, favorsDMK: false },
  { issue: "State Debt Crisis", importance: 78, favorsDMK: false },
  { issue: "NEET / Education", importance: 72, favorsDMK: true },
  { issue: "Tamil Identity / Federalism", importance: 68, favorsDMK: true },
  { issue: "Drug Menace", importance: 66, favorsDMK: false },
  { issue: "Unfulfilled Promises", importance: 64, favorsDMK: false },
];

export const KEY_CANDIDATES = [
  { name: "M.K. Stalin", party: "DMK", alliance: "SPA", constituency: "Kolathur", role: "CM / DMK President" },
  { name: "Udhayanidhi Stalin", party: "DMK", alliance: "SPA", constituency: "Chepauk-Thiruvallikeni", role: "Deputy CM" },
  { name: "V. Senthil Balaji", party: "DMK", alliance: "SPA", constituency: "Coimbatore South", role: "DMK Leader" },
  { name: "O. Panneerselvam", party: "DMK", alliance: "SPA", constituency: "Bodinayakkanur", role: "Former CM (joined DMK)" },
  { name: "Ma. Subramanian", party: "DMK", alliance: "SPA", constituency: "Saidapet", role: "Health Minister" },
  { name: "E.V. Velu", party: "DMK", alliance: "SPA", constituency: "Mylapore", role: "Highways Minister" },
  { name: "E.K. Palaniswami", party: "AIADMK", alliance: "NDA", constituency: "Edappadi", role: "AIADMK Gen Sec / CM Candidate" },
  { name: "Tamilisai Soundararajan", party: "BJP", alliance: "NDA", constituency: "Mylapore", role: "BJP Leader" },
  { name: "Nainar Nagendran", party: "BJP", alliance: "NDA", constituency: "Sattur", role: "BJP TN Chief" },
  { name: "Anbumani Ramadoss", party: "PMK", alliance: "NDA", constituency: "Pennagaram", role: "PMK President" },
  { name: "TTV Dhinakaran", party: "AMMK", alliance: "NDA", constituency: "Kovilpatti", role: "AMMK Gen Sec" },
  { name: "Vijay", party: "TVK", alliance: "TVK", constituency: "Perambur & Trichy East", role: "TVK President / CM Candidate" },
  { name: "Seeman", party: "NTK", alliance: "NTK", constituency: "Thiruvottiyur", role: "NTK Chief Coordinator" },
  { name: "Thol. Thirumavalavan", party: "VCK", alliance: "SPA", constituency: "Kattumannarkoil (SC)", role: "VCK President" },
  { name: "Premalatha Vijayakanth", party: "DMDK", alliance: "SPA", constituency: "TBD", role: "DMDK Leader" },
  { name: "VS Babu", party: "TVK", alliance: "TVK", constituency: "Kolathur", role: "Against MK Stalin" },
  { name: "N. Anand", party: "TVK", alliance: "TVK", constituency: "T. Nagar", role: "TVK Core Team" },
  { name: "Aadhav Arjuna", party: "TVK", alliance: "TVK", constituency: "Villivakkam", role: "TVK General Secretary" },
];

export const REGIONS = {
  "Chennai": { seats: 16, dmk2021: 16, aiadmk2021: 0, swing: "DMK stronghold", tvkThreat: "High" },
  "North Tamil Nadu": { seats: 38, dmk2021: 30, aiadmk2021: 8, swing: "DMK leaning", tvkThreat: "High" },
  "Western Tamil Nadu": { seats: 42, dmk2021: 24, aiadmk2021: 18, swing: "Competitive", tvkThreat: "Medium" },
  "Central Tamil Nadu": { seats: 32, dmk2021: 22, aiadmk2021: 10, swing: "DMK leaning", tvkThreat: "Medium" },
  "Cauvery Delta": { seats: 28, dmk2021: 22, aiadmk2021: 6, swing: "DMK stronghold", tvkThreat: "High" },
  "Southern Tamil Nadu": { seats: 48, dmk2021: 28, aiadmk2021: 20, swing: "Competitive", tvkThreat: "Low" },
  "Kongu Belt": { seats: 30, dmk2021: 15, aiadmk2021: 15, swing: "AIADMK leaning", tvkThreat: "Low" },
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
  { date: "Feb 2026", event: "DMDK joins DMK alliance; NTK releases 234 candidates" },
  { date: "15 Mar 2026", event: "ECI announces election schedule" },
  { date: "18 Mar 2026", event: "Vijay rejects NDA alliance offer (90 seats + CM post)" },
  { date: "23 Mar 2026", event: "NDA finalizes seat-sharing" },
  { date: "24 Mar 2026", event: "AIADMK releases manifesto; MNM gives outside support to SPA" },
  { date: "28 Mar 2026", event: "DMK releases candidate list for 164 seats" },
  { date: "29 Mar 2026", event: "TVK releases full 234 candidate list; Vijay to contest from Perambur & Trichy East" },
  { date: "30 Mar 2026", event: "Nominations begin; PMK releases final candidate list" },
  { date: "6 Apr 2026", event: "Last date for nominations" },
  { date: "9 Apr 2026", event: "Last date for withdrawal" },
  { date: "23 Apr 2026", event: "POLLING DAY" },
  { date: "4 May 2026", event: "RESULTS DAY" },
];

export const CAMPAIGN_NARRATIVES = [
  { title: "DMK's Welfare Push", desc: "₹2,000/month women's aid (doubled from ₹1,000), Kalaignar Magalir Urimai Thogai scheme expansion, free bus for women, breakfast scheme — banking on visible welfare delivery", color: "#E53935" },
  { title: "AIADMK Manifesto Promises", desc: "₹2,000/month for women, ₹10,000 relief/family, pension hike, free refrigerators & LPG, waiver of education & crop loans, paddy procurement at ₹3,500/quintal", color: "#388E3C" },
  { title: "TVK's Anti-Corruption Drive", desc: "Vijay positions TVK as clean alternative, attacks DMK on 'scientific corruption,' targets youth disillusionment. Promises ₹4,000/month for graduates, ₹2,000 for diploma holders", color: "#FFC107" },
  { title: "State Debt Crisis", desc: "Debt nearly doubled from ₹4.85L Cr (2021) to ₹10L Cr (2026). AIADMK calls it a 'debt trap.' DMK blames Centre's reduced tax devolution", color: "#FF5722" },
  { title: "Women's Safety Concerns", desc: "Rising crimes against women became major campaign issue. Opposition attacks DMK on law & order; BJP links to drug menace", color: "#9C27B0" },
  { title: "Unfulfilled Promises", desc: "NEET not scrapped, Old Pension not restored, education loans not waived, 2L govt vacancies unfilled, monthly billing not implemented. DMK claims 364/505 promises fulfilled", color: "#795548" },
];

export const SATISFACTION_DATA = [
  { label: "Satisfied with DMK Govt", pct: 49, color: "#E53935" },
  { label: "High Anti-Incumbency", pct: 45, color: "#FF5722" },
  { label: "Want DMK to Continue", pct: 45, color: "#E53935" },
  { label: "Want Change", pct: 48, color: "#388E3C" },
  { label: "Two-way Contest View", pct: 54, color: "#9E9E9E" },
  { label: "Three-way Contest View", pct: 19, color: "#FFC107" },
];