// Auto-updated Tamil Nadu Election 2026 Data File
// Updated: 2026-04-15T00:00:00Z
// Source: Latest web search results from multiple opinion polls and election news

export const LAST_UPDATED = "2026-04-15T00:00:00Z";

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
  { source: "Lok Poll", date: "Apr 2026", spa: { min: 181, max: 189 }, nda: { min: 38, max: 42 }, tvk: { min: 8, max: 10 }, ntk: { min: 0, max: 0 } },
  { source: "Matrize Opinion Poll", date: "Apr 2026", spa: { min: 102, max: 115 }, nda: { min: 107, max: 120 }, tvk: { min: 5, max: 12 }, ntk: { min: 1, max: 6 } },
  { source: "Inside Elections Survey", date: "Apr 2026", spa: { min: 159, max: 165 }, nda: { min: 64, max: 70 }, tvk: { min: 4, max: 6 }, ntk: { min: 0, max: 0 } },
  { source: "Vote Vibe / News18", date: "Mar 2026", spa: { min: 113, max: 123 }, nda: { min: 106, max: 116 }, tvk: { min: 2, max: 8 }, ntk: { min: 0, max: 3 } },
  { source: "Shining India Survey", date: "Apr 2026", spa: { min: 85, max: 105 }, nda: { min: 95, max: 115 }, tvk: { min: 20, max: 30 }, ntk: { min: 3, max: 7 } },
];

export const VOTE_SHARE_POLLS = [
  { source: "Lok Poll", spa: 40.1, nda: 29.0, tvk: 23.9, ntk: 4.9, undecided: 2.1 },
  { source: "Matrize Opinion Poll", spa: 38.0, nda: 40.0, tvk: 16.0, ntk: 4.0, undecided: 2.0 },
  { source: "Inside Elections Survey", spa: 44.0, nda: 33.0, tvk: 18.0, ntk: 3.0, undecided: 2.0 },
  { source: "Vote Vibe / News18", spa: 42.3, nda: 38.1, tvk: 11.5, ntk: 4.8, undecided: 3.3 },
  { source: "Shining India Survey", spa: 36.1, nda: 37.5, tvk: 16.3, ntk: 3.2, undecided: 6.9 },
];

export const CM_PREFERENCE = [
  { name: "M.K. Stalin", party: "DMK", pct: 41.0, color: "#E53935" },
  { name: "C. Joseph Vijay", party: "TVK", pct: 25.1, color: "#FFC107" },
  { name: "Edappadi K. Palaniswami", party: "AIADMK", pct: 26.5, color: "#388E3C" },
  { name: "K. Annamalai", party: "BJP", pct: 2.4, color: "#FF6F00" },
  { name: "Others", party: "Others", pct: 5.0, color: "#9E9E9E" },
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
  { issue: "Unemployment", importance: 88, favorsDMK: false },
  { issue: "Women's Safety", importance: 87, favorsDMK: false },
  { issue: "Rising Prices / Inflation", importance: 85, favorsDMK: false },
  { issue: "State Debt Crisis", importance: 83, favorsDMK: false },
  { issue: "Drug Menace", importance: 80, favorsDMK: false },
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
  "Chennai": { seats: 16, dmk2021: 16, aiadmk2021: 0, swing: "DMK stronghold, TVK making inroads", tvkThreat: "High" },
  "North Tamil Nadu": { seats: 38, dmk2021: 30, aiadmk2021: 8, swing: "DMK projected 53-56 seats per Lok Poll", tvkThreat: "Medium" },
  "Western Tamil Nadu": { seats: 42, dmk2021: 24, aiadmk2021: 18, swing: "Shocking DMK surge per polls - 44-46 seats", tvkThreat: "Low" },
  "Central Tamil Nadu": { seats: 32, dmk2021: 22, aiadmk2021: 10, swing: "DMK dominance continues per Delta zone projections", tvkThreat: "Medium" },
  "Cauvery Delta": { seats: 28, dmk2021: 22, aiadmk2021: 6, swing: "DMK projected 39-40 seats", tvkThreat: "Low" },
  "Southern Tamil Nadu": { seats: 48, dmk2021: 28, aiadmk2021: 20, swing: "DMK projected 45-47 seats", tvkThreat: "Medium" },
  "Kongu Belt": { seats: 30, dmk2021: 15, aiadmk2021: 15, swing: "Major upset - DMK leading in traditional AIADMK bastion", tvkThreat: "Low" },
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
  { date: "29 Mar 2026", event: "TVK releases full 234 candidate list; DMK unveils manifesto" },
  { date: "30 Mar 2026", event: "Nominations begin; Vijay and Stalin file papers from their constituencies" },
  { date: "1 Apr 2026", event: "MK Stalin kicks off campaign in Tiruchirappalli" },
  { date: "2 Apr 2026", event: "Vijay files nomination from Trichy East (second constituency)" },
  { date: "3 Apr 2026", event: "BJP and Congress release candidate lists" },
  { date: "6 Apr 2026", event: "Last date for nominations - 3,430 nominations filed across 234 seats" },
  { date: "7 Apr 2026", event: "Scrutiny of nominations; Lok Poll shows DMK landslide prediction" },
  { date: "8 Apr 2026", event: "Matrize poll shows NDA slight edge; Inside Elections predicts DMK retention" },
  { date: "9 Apr 2026", event: "Last date for withdrawal" },
  { date: "15 Apr 2026", event: "Campaign intensifies with all parties conducting final rallies" },
  { date: "23 Apr 2026", event: "POLLING DAY" },
  { date: "4 May 2026", event: "RESULTS DAY" },
];

export const CAMPAIGN_NARRATIVES = [
  { title: "DMK's Manifesto 2.0 Blitz", desc: "₹8,000 'Illatharasi' coupon for women (doubling current ₹1,000), ₹2,000 monthly aid, 35 lakh laptops, 50 lakh jobs, 10 lakh houses, health insurance up to ₹10 lakh — massive welfare expansion under 'Stalin Thodarattum, Tamil Nadu Vellattum' theme", color: "#E53935" },
  { title: "AIADMK's 297 Promise Counter-Attack", desc: "₹2,000/month for women under 'Kula Vilakku', ₹10,000 relief/family, free refrigerators, 3 LPG cylinders/year, MGNREGA 150 days, student loan waivers — direct challenge to DMK's welfare dominance under 'Makkalai Kaappom' campaign", color: "#388E3C" },
  { title: "TVK's Youth Revolution Pitch", desc: "₹4,000/month for unemployed graduates over 29, ₹2,500 for women, 6 free LPG cylinders/year, 75% job reservation for Tamilians, drug-free TN promise — targeting first-time voters and anti-establishment sentiment aggressively", color: "#FFC107" },
  { title: "Highly Contradictory Polls Create Chaos", desc: "Lok Poll shows DMK landslide (181-189), Matrize gives NDA edge (107-120), Inside Elections predicts DMK retention (159-165), Shining India shows close NDA lead (37.5% vs 36.1%). CM preference: Stalin 41%, Vijay 25.1%, EPS 26.5%", color: "#9C27B0" },
  { title: "Anti-Incumbency vs Development Record", desc: "Mixed signals on DMK performance: 50% rate govt as good/very good, but rising concerns on law & order (92%), corruption (90%), unemployment (88%). Key debate: welfare expansion vs governance issues", color: "#FF5722" },
  { title: "OPS Defection Strengthens DMK", desc: "Former CM O. Panneerselvam's February DMK switch creates major credibility boost for ruling alliance, contesting Bodinayakkanur constituency, signals significant AIADMK factional weakness ahead of polls", color: "#E53935" },
  { title: "Kongu Belt Earthquake Per Surveys", desc: "Shocking Lok Poll finding: DMK projected to win 44-46 seats in traditional AIADMK western stronghold vs AIADMK's 9-10 seats. If accurate, represents massive political realignment in crucial region", color: "#4CAF50" },
];

export const SATISFACTION_DATA = [
  { label: "DMK Govt Performance - Very Good", pct: 30, color: "#E53935" },
  { label: "DMK Govt Performance - Good", pct: 20, color: "#FF9800" },
  { label: "DMK Govt Performance - Average", pct: 25, color: "#FFC107" },
  { label: "DMK Govt Performance - Bad", pct: 15, color: "#F44336" },
  { label: "DMK Govt Performance - Very Bad", pct: 10, color: "#B71C1C" },
  { label: "Want DMK to Continue", pct: 55, color: "#E53935" },
  { label: "Want Change", pct: 25, color: "#388E3C" },
  { label: "Law & Order - Major Concern", pct: 92, color: "#F44336" },
  { label: "Corruption Concerns", pct: 90, color: "#F44336" },
  { label: "Undecided Voters", pct: 18, color: "#9E9E9E" },
];