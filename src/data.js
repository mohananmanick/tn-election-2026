// Auto-updated Tamil Nadu Election 2026 Data File
// Updated: 2026-04-27T00:00:00Z
// Source: Latest web search results from multiple opinion polls and election news

export const LAST_UPDATED = "2026-04-27T00:00:00Z";

export const ELECTION_META = {
  date: "23 April 2026",
  resultDate: "4 May 2026", 
  totalSeats: 234,
  totalVoters: 57343291,
  maleVoters: 28030658,
  femaleVoters: 29304905,
  thirdGenderVoters: 7728,
  phase: "Single Phase",
  nominationStart: "30 March 2026",
  nominationEnd: "6 April 2026",
  scrutinyDate: "7 April 2026",
  withdrawalDeadline: "9 April 2026",
  candidatesFiled: 4023,
  pollingStatus: "COMPLETED",
  turnout: 84.69,
  recordTurnout: true,
  pollingStations: 75064,
  locations: 33133,
  evmUnits: 106418,
  countingCentres: 62
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
    symbol: "Whistle",
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
  { source: "Dinamalar (Apr 22)", date: "Apr 2026", spa: { min: 110, max: 120 }, nda: { min: 110, max: 120 }, tvk: { min: 5, max: 10 }, ntk: { min: 0, max: 2 } },
  { source: "Lok Poll", date: "Apr 2026", spa: { min: 181, max: 189 }, nda: { min: 38, max: 42 }, tvk: { min: 8, max: 10 }, ntk: { min: 0, max: 0 } },
  { source: "Junior Vikatan", date: "Apr 2026", spa: { min: 121, max: 121 }, nda: { min: 83, max: 83 }, tvk: { min: 3, max: 3 }, ntk: { min: 0, max: 0 } },
  { source: "Matrize Opinion Poll", date: "Apr 2026", spa: { min: 102, max: 115 }, nda: { min: 107, max: 120 }, tvk: { min: 5, max: 12 }, ntk: { min: 1, max: 6 } },
  { source: "Inside Elections Survey", date: "Mar 2026", spa: { min: 159, max: 165 }, nda: { min: 64, max: 70 }, tvk: { min: 4, max: 6 }, ntk: { min: 0, max: 0 } },
  { source: "IPDS Opinion Poll", date: "Apr 2026", spa: { min: 135, max: 145 }, nda: { min: 75, max: 85 }, tvk: { min: 8, max: 12 }, ntk: { min: 2, max: 4 } },
  { source: "Nakkheeran Survey", date: "Apr 2026", spa: { min: 150, max: 160 }, nda: { min: 60, max: 70 }, tvk: { min: 8, max: 14 }, ntk: { min: 2, max: 4 } },
  { source: "Chanakya TV", date: "Apr 2026", spa: { min: 95, max: 105 }, nda: { min: 115, max: 125 }, tvk: { min: 6, max: 12 }, ntk: { min: 2, max: 4 } },
];

export const VOTE_SHARE_POLLS = [
  { source: "Dinamalar (Apr 22)", spa: 32.0, nda: 36.0, tvk: 23.0, ntk: 7.0, undecided: 18.0 },
  { source: "Lok Poll", spa: 40.1, nda: 29.0, tvk: 23.9, ntk: 4.9, undecided: 2.1 },
  { source: "Junior Vikatan", spa: 37.5, nda: 33.6, tvk: 24.7, ntk: 2.0, undecided: 2.2 },
  { source: "Matrize Opinion Poll", spa: 38.0, nda: 40.0, tvk: 16.0, ntk: 4.0, undecided: 2.0 },
  { source: "Inside Elections Survey", spa: 44.0, nda: 33.0, tvk: 18.0, ntk: 3.0, undecided: 2.0 },
  { source: "IPDS Opinion Poll", spa: 42.0, nda: 31.0, tvk: 20.0, ntk: 5.0, undecided: 2.0 },
  { source: "Nakkheeran Survey", spa: 45.0, nda: 29.0, tvk: 19.0, ntk: 5.0, undecided: 2.0 },
];

export const CM_PREFERENCE = [
  { name: "C. Joseph Vijay", party: "TVK", pct: 62.0, color: "#FFC107" },
  { name: "M.K. Stalin", party: "DMK", pct: 41.0, color: "#E53935" },
  { name: "Edappadi K. Palaniswami", party: "AIADMK", pct: 24.1, color: "#388E3C" },
  { name: "Seeman", party: "NTK", pct: 7.8, color: "#D32F2F" },
];

export const RESULTS_2021 = {
  spa: { seats: 159, dmk: 133, inc: 18, vck: 4, cpim: 2, cpi: 2 },
  nda: { seats: 75, aiadmk: 66, bjp: 4, pmk: 5 },
  others: { ntk: 0, mnm: 0, ammk: 0, ind: 0 },
  voteShare: { dmkAlliance: 44.5, aiadmkAlliance: 37.2, ntk: 6.58, mnm: 2.73, ammk: 2.85, others: 6.14 },
};

export const KEY_ISSUES = [
  { issue: "Youth Unemployment", importance: 94, favorsDMK: false },
  { issue: "Law and Order", importance: 92, favorsDMK: false },
  { issue: "Corruption Allegations", importance: 90, favorsDMK: false },
  { issue: "Rising Prices / Inflation", importance: 89, favorsDMK: false },
  { issue: "Women's Safety", importance: 87, favorsDMK: false },
  { issue: "Drug Menace", importance: 85, favorsDMK: false },
  { issue: "State Debt Crisis", importance: 83, favorsDMK: false },
  { issue: "Welfare Schemes", importance: 78, favorsDMK: true },
  { issue: "NEET / Education", importance: 75, favorsDMK: true },
  { issue: "Tamil Identity / Federalism", importance: 72, favorsDMK: true },
];

export const KEY_CANDIDATES = [
  { name: "C. Joseph Vijay", party: "TVK", alliance: "TVK", constituency: "Perambur & Tiruchirappalli East", role: "TVK President / CM Candidate" },
  { name: "M.K. Stalin", party: "DMK", alliance: "SPA", constituency: "Kolathur", role: "CM / DMK President" },
  { name: "E.K. Palaniswami", party: "AIADMK", alliance: "NDA", constituency: "Edappadi", role: "AIADMK Gen Sec / CM Candidate" },
  { name: "Udhayanidhi Stalin", party: "DMK", alliance: "SPA", constituency: "Chepauk-Thiruvallikeni", role: "Deputy CM" },
  { name: "V. Senthil Balaji", party: "DMK", alliance: "SPA", constituency: "Coimbatore South", role: "DMK Leader" },
  { name: "O. Panneerselvam", party: "DMK", alliance: "SPA", constituency: "Bodinayakkanur", role: "Former CM (joined DMK Feb 2026)" },
  { name: "Tamilisai Soundararajan", party: "BJP", alliance: "NDA", constituency: "Mylapore", role: "Former Governor" },
  { name: "Nainar Nagendran", party: "BJP", alliance: "NDA", constituency: "Sattur", role: "BJP TN Chief" },
  { name: "L. Murugan", party: "BJP", alliance: "NDA", constituency: "Avanashi", role: "Union Minister" },
  { name: "Vanathi Srinivasan", party: "BJP", alliance: "NDA", constituency: "Coimbatore North", role: "BJP Mahila Morcha President" },
  { name: "Anbumani Ramadoss", party: "PMK", alliance: "NDA", constituency: "Pennagaram", role: "PMK President" },
  { name: "TTV Dhinakaran", party: "AMMK", alliance: "NDA", constituency: "Kovilpatti", role: "AMMK Gen Sec" },
  { name: "Seeman", party: "NTK", alliance: "NTK", constituency: "Karaikudi", role: "NTK Chief Coordinator" },
  { name: "Thol. Thirumavalavan", party: "VCK", alliance: "SPA", constituency: "Kattumannarkoil (SC)", role: "VCK President" },
  { name: "Aadhav Arjuna", party: "TVK", alliance: "TVK", constituency: "Villivakkam", role: "TVK General Secretary" },
  { name: "K.A. Sengottaiyan", party: "TVK", alliance: "TVK", constituency: "Gobichettipalayam", role: "Former AIADMK Minister (joined TVK)" },
  { name: "K. Selvaperunthagai", party: "INC", alliance: "SPA", constituency: "Sriperumbudur", role: "TNCC President" },
  { name: "Premalatha Vijayakanth", party: "DMDK", alliance: "SPA", constituency: "Virudhachalam", role: "DMDK General Secretary" },
];

export const REGIONS = {
  "Chennai": { seats: 16, dmk2021: 16, aiadmk2021: 0, swing: "DMK stronghold, but TVK making inroads among youth; recorded 83.74% turnout", tvkThreat: "High" },
  "North Tamil Nadu": { seats: 58, dmk2021: 30, aiadmk2021: 8, swing: "DMK projected 53-56 seats per Lok Poll; highest turnout regions", tvkThreat: "Medium" },
  "Western Tamil Nadu": { seats: 42, dmk2021: 24, aiadmk2021: 18, swing: "Shocking DMK surge per polls - 44-46 seats projected in Kongu region", tvkThreat: "Medium" },
  "Central Tamil Nadu": { seats: 32, dmk2021: 22, aiadmk2021: 10, swing: "DMK dominance continues per Delta zone projections", tvkThreat: "Medium" },
  "Cauvery Delta": { seats: 28, dmk2021: 22, aiadmk2021: 6, swing: "DMK projected 39-40 seats; strong turnout recorded", tvkThreat: "Low" },
  "Southern Tamil Nadu": { seats: 48, dmk2021: 28, aiadmk2021: 20, swing: "DMK projected 45-47 seats with OPS joining; Karur leads with 91.86% turnout", tvkThreat: "Medium" },
  "Kongu Belt": { seats: 30, dmk2021: 15, aiadmk2021: 15, swing: "Major upset - DMK leading in traditional AIADMK bastion per Lok Poll", tvkThreat: "Low" },
};

export const TIMELINE = [
  { date: "Feb 2024", event: "Vijay launches TVK party" },
  { date: "Sep 2024", event: "TVK declares centre-left ideology, rejects BJP" },
  { date: "Oct 2024", event: "TVK Vikravandi conference — 800K+ attendees" },
  { date: "Mar 2024", event: "MNM joins DMK's SPA" },
  { date: "Sep 2023", event: "AIADMK quits NDA" },
  { date: "Apr 2025", event: "AIADMK-BJP reunite in NDA" },
  { date: "19 Feb 2026", event: "DMDK joins DMK alliance" },
  { date: "27 Feb 2026", event: "O. Panneerselvam joins DMK" },
  { date: "15 Mar 2026", event: "ECI announces election schedule" },
  { date: "18 Mar 2026", event: "Vijay rejects NDA alliance offer, announces solo contest" },
  { date: "22 Mar 2026", event: "T. Velmurugan-led TVK withdraws from SPA" },
  { date: "23 Mar 2026", event: "NDA finalizes seat-sharing: AIADMK 169, BJP 27, PMK 18, AMMK 11" },
  { date: "24 Mar 2026", event: "AIADMK releases 297-promise manifesto; MNM gives outside support to SPA" },
  { date: "28 Mar 2026", event: "DMK releases candidate list for 164 seats" },
  { date: "29 Mar 2026", event: "TVK releases full 234 candidate list and manifesto; DMK unveils manifesto" },
  { date: "30 Mar 2026", event: "Nominations begin; Vijay files from Perambur, Stalin from Kolathur" },
  { date: "2 Apr 2026", event: "Vijay files nomination from Trichy East (second constituency)" },
  { date: "3 Apr 2026", event: "BJP and Congress release candidate lists" },
  { date: "6 Apr 2026", event: "Last date for nominations - 4,023 nominations filed" },
  { date: "7 Apr 2026", event: "Scrutiny of nominations; contradictory polls emerge" },
  { date: "8 Apr 2026", event: "Voter count increases to 5.73 crore after revision" },
  { date: "9 Apr 2026", event: "Last date for withdrawal; final candidate count confirmed" },
  { date: "12 Apr 2026", event: "Makkal Choice poll shows Vijay leading CM preference with 62%" },
  { date: "17 Apr 2026", event: "Junior Vikatan poll shows DMK retaining power with 121 seats" },
  { date: "21 Apr 2026", event: "Final campaign day - silent period begins 6 PM" },
  { date: "22 Apr 2026", event: "Dinamalar poll predicts photo finish with 60 swing seats and 18% undecided voters" },
  { date: "23 Apr 2026", event: "POLLING DAY - Record 84.69% turnout across 75,064 polling stations (highest in state history)" },
  { date: "24 Apr 2026", event: "ECI confirms record turnout; Exit polls banned until Apr 29; EVMs secured in counting centres" },
  { date: "4 May 2026", event: "RESULTS DAY - Vote counting and declaration" },
];

export const CAMPAIGN_NARRATIVES = [
  { title: "HISTORIC TURNOUT: 84.69% Voting Sets New Record", desc: "Tamil Nadu achieved its highest-ever Assembly election turnout since Independence with 84.69% voter participation. Record was set after Special Intensive Revision removed duplicate and dead voters. Karur district led with 91.86% turnout. Women voters recorded 85.76% participation vs 83.57% male participation", color: "#2196F3" },
  { title: "Exit Polls Banned Until April 29 - Multi-State Rules Apply", desc: "Despite Tamil Nadu completing polling, Election Commission rules prohibit exit poll release until West Bengal's second phase concludes on April 29. Violation punishable by law. Results counting scheduled for May 4 across all states simultaneously", color: "#FF9800" },
  { title: "Dinamalar Poll Predicts Photo Finish with 60 Swing Seats", desc: "Latest pre-poll survey shows DMK losing 12-14% vote share vs 2021, with AIADMK gaining edge (36% vs DMK's 32%). TVK's 23% and NTK's 7% could determine outcome. Whopping 18% voters remain undecided on election eve", color: "#9C27B0" },
  { title: "Vijay's Youth Revolution Manifesto - TVK Goes Solo", desc: "₹4,000/month for unemployed graduates over 29, ₹2,500 for women, 6 free LPG cylinders/year, 75% job reservation for Tamilians, drug-free TN promise. AI ministry, ₹1.5 trillion economy by 2036. Contesting all 234 seats with 'Whistle' symbol", color: "#FFC107" },
  { title: "DMK's Manifesto 2.0 Expansion", desc: "₹8,000 'Illatharasi' coupon for homemakers (8x current schemes), ₹2,000 monthly aid for women (doubling current ₹1,000), free laptops for all college students, breakfast scheme expansion, 50 lakh jobs promise under 'Stalin Thodarattum, Tamil Nadu Vellattum'", color: "#E53935" },
  { title: "AIADMK's 297 Promise Counter-Attack", desc: "₹2,000/month for women under 'Kula Vilakku', ₹10,000 relief/family, free refrigerators, 3 LPG cylinders/year, MGNREGA 150 days, student loan waivers, ₹25,000 two-wheeler subsidy for working women under 'Makkalai Kaappom' campaign", color: "#388E3C" },
  { title: "Wildly Contradictory Opinion Polls Create Uncertainty", desc: "8 major surveys show massive divergence: Lok Poll (DMK 181-189), Dinamalar (photo finish), Matrize (NDA edge 107-120), Junior Vikatan (DMK 121), Inside Elections (DMK 159-165). Up to 60 'close contest' seats identified. Makkal Choice shows Vijay leading CM preference with 62%", color: "#FF5722" },
  { title: "Anti-Incumbency vs Welfare Record Dilemma", desc: "Inside Elections: 55% want DMK to continue vs 25% want change, but Junior Vikatan shows 62% favor change. Major concerns on youth unemployment (94%), law & order (92%), corruption (90%), inflation (89%). Mixed government performance ratings", color: "#795548" },
  { title: "Panneerselvam's Strategic Defection to DMK", desc: "Former 3-time CM O. Panneerselvam's February 2026 switch to DMK brings southern belt strength to ruling party, particularly in Bodinayakanur constituency. His presence lends unexpected advantage in regions where DMK historically struggled", color: "#4CAF50" },
  { title: "DMDK Joins DMK Alliance - First Time in History", desc: "Premalatha Vijayakanth's DMDK joins DMK-led alliance for first time since party's 2005 founding, ending years of political indecision. DMK allocated 10 seats to DMDK plus one Rajya Sabha seat, significantly strengthening secular front ahead of polls", color: "#03A9F4" },
  { title: "Special Intensive Revision (SIR) Streamlines Voter Base", desc: "Election Commission conducted massive voter list cleanup reducing registered voters from 6.29 crore (2021) to 5.73 crore after removing 56 lakh duplicate and dead voters. Despite smaller voter base, turnout percentage appears higher, creating statistical complexities in comparison", color: "#9E9E9E" },
];

export const SATISFACTION_DATA = [
  { label: "DMK Govt Performance - Very Good", pct: 30, color: "#E53935" },
  { label: "DMK Govt Performance - Good", pct: 20, color: "#FF9800" },
  { label: "DMK Govt Performance - Average", pct: 25, color: "#FFC107" },
  { label: "DMK Govt Performance - Bad", pct: 15, color: "#F44336" },
  { label: "DMK Govt Performance - Very Bad", pct: 10, color: "#B71C1C" },
  { label: "Want DMK to Continue", pct: 55, color: "#E53935" },
  { label: "Want Change", pct: 25, color: "#388E3C" },
  { label: "Want Change (Alt Survey)", pct: 62, color: "#F44336" },
  { label: "Youth Unemployment - Major Concern", pct: 94, color: "#F44336" },
  { label: "Law & Order - Major Concern", pct: 92, color: "#F44336" },
  { label: "Record Voter Turnout (84.69%)", pct: 84.69, color: "#4CAF50" },
  { label: "Undecided Voters (Dinamalar)", pct: 18, color: "#9E9E9E" },
  { label: "First-time Voters", pct: 25.5, color: "#2196F3" },
  { label: "Female Voter Participation (85.76%)", pct: 85.76, color: "#E91E63" },
  { label: "Male Voter Participation (83.57%)", pct: 83.57, color: "#3F51B5" },
];