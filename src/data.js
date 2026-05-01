// Auto-updated Tamil Nadu Election 2026 Data File
// Updated: 2026-05-01T00:00:00Z
// Source: Latest web search results from exit polls and election coverage

export const LAST_UPDATED = "2026-05-01T00:00:00Z";

export const ELECTION_META = {
  date: "23 April 2026",
  resultDate: "4 May 2026", 
  totalSeats: 234,
  totalVoters: 57343291,
  maleVoters: 28300000,
  femaleVoters: 29300000,
  thirdGenderVoters: 7728,
  phase: "Single Phase",
  nominationStart: "30 March 2026",
  nominationEnd: "6 April 2026",
  scrutinyDate: "7 April 2026",
  withdrawalDeadline: "9 April 2026",
  candidatesFiled: 4023,
  pollingStatus: "COMPLETED",
  turnout: 85.1,
  revisedTurnout: true,
  recordTurnout: true,
  pollingStations: 75064,
  locations: 33133,
  evmUnits: 106418,
  countingCentres: 62,
  exitPollsDate: "30 April 2026 6:00 PM"
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
      { name: "AIADMK", seats: 170, leader: "E.K. Palaniswami", color: "#388E3C" },
      { name: "BJP", seats: 33, leader: "Nainar Nagendran", color: "#FF6F00" },
      { name: "PMK", seats: 18, leader: "Anbumani Ramadoss", color: "#FFCA28" },
      { name: "AMMK", seats: 11, leader: "TTV Dhinakaran", color: "#1565C0" },
      { name: "TMC(M)", seats: 2, leader: "G.K. Vasan", color: "#5C6BC0" },
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
  { source: "Today's Chanakya Exit Poll", date: "May 1 2026", spa: { min: 145, max: 160 }, nda: { min: 50, max: 65 }, tvk: { min: 13, max: 18 }, ntk: { min: 5, max: 8 } },
  { source: "P-Marq Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 85 }, tvk: { min: 16, max: 26 }, ntk: { min: 1, max: 6 } },
  { source: "People's Pulse Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 80 }, tvk: { min: 18, max: 24 }, ntk: { min: 0, max: 0 } },
  { source: "Matrize Exit Poll", date: "May 1 2026", spa: { min: 122, max: 132 }, nda: { min: 87, max: 100 }, tvk: { min: 10, max: 16 }, ntk: { min: 1, max: 6 } },
  { source: "News18 Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 80 }, tvk: { min: 13, max: 18 }, ntk: { min: 5, max: 8 } },
  { source: "Political Laboratory", date: "May 1 2026", spa: { min: 135, max: 140 }, nda: { min: 82, max: 85 }, tvk: { min: 10, max: 14 }, ntk: { min: 1, max: 3 } },
  { source: "Poll of Polls", date: "May 1 2026", spa: { min: 126, max: 141 }, nda: { min: 78, max: 92 }, tvk: { min: 11, max: 16 }, ntk: { min: 3, max: 7 } },
  { source: "Axis My India Exit Poll", date: "May 1 2026", spa: { min: 92, max: 110 }, nda: { min: 22, max: 32 }, tvk: { min: 98, max: 120 }, ntk: { min: 0, max: 2 } },
];

export const VOTE_SHARE_POLLS = [
  { source: "Today's Chanakya Exit Poll", spa: 42.0, nda: 36.0, tvk: 16.0, ntk: 4.0, undecided: 2.0 },
  { source: "P-Marq Exit Poll", spa: 36.0, nda: 31.0, tvk: 23.0, ntk: 4.0, undecided: 6.0 },
  { source: "People's Pulse Exit Poll", spa: 38.0, nda: 32.0, tvk: 22.0, ntk: 4.0, undecided: 4.0 },
  { source: "Axis My India Exit Poll", spa: 35.0, nda: 23.0, tvk: 35.0, ntk: 3.0, undecided: 4.0 },
  { source: "Political Laboratory", spa: 40.0, nda: 33.0, tvk: 18.0, ntk: 5.0, undecided: 4.0 },
  { source: "Poll of Polls Average", spa: 38.2, nda: 31.0, tvk: 22.8, ntk: 4.0, undecided: 4.0 },
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
  "Chennai": { seats: 16, dmk2021: 16, aiadmk2021: 0, swing: "DMK stronghold, but TVK making major inroads among youth; recorded historic 86.2% turnout (83.7% initially)", tvkThreat: "Very High" },
  "North Tamil Nadu": { seats: 58, dmk2021: 30, aiadmk2021: 8, swing: "DMK projected to maintain dominance; high turnout regions favor ruling party", tvkThreat: "Medium" },
  "Western Tamil Nadu": { seats: 42, dmk2021: 24, aiadmk2021: 18, swing: "Exit polls show DMK surprising surge in traditional AIADMK stronghold", tvkThreat: "Medium" },
  "Central Tamil Nadu": { seats: 32, dmk2021: 22, aiadmk2021: 10, swing: "DMK dominance continues per exit poll projections", tvkThreat: "Medium" },
  "Cauvery Delta": { seats: 28, dmk2021: 22, aiadmk2021: 6, swing: "DMK maintaining strong position; consistent turnout patterns", tvkThreat: "Low" },
  "Southern Tamil Nadu": { seats: 48, dmk2021: 28, aiadmk2021: 20, swing: "DMK strengthened by OPS joining; exit polls favor ruling alliance", tvkThreat: "Medium" },
  "Kongu Belt": { seats: 30, dmk2021: 15, aiadmk2021: 15, swing: "Major surprise - DMK leading even in traditional AIADMK bastion per multiple exit polls", tvkThreat: "Low" },
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
  { date: "23 Mar 2026", event: "NDA finalizes seat-sharing: AIADMK 170, BJP 33, PMK 18, AMMK 11" },
  { date: "24 Mar 2026", event: "AIADMK releases 297-promise manifesto; MNM gives outside support to SPA" },
  { date: "28 Mar 2026", event: "DMK releases candidate list for 164 seats" },
  { date: "29 Mar 2026", event: "TVK releases full 234 candidate list and manifesto; DMK unveils manifesto" },
  { date: "30 Mar 2026", event: "Nominations begin; Vijay files from Perambur, Stalin from Kolathur" },
  { date: "2 Apr 2026", event: "Vijay files nomination from Trichy East (second constituency)" },
  { date: "3 Apr 2026", event: "BJP and Congress release candidate lists" },
  { date: "6 Apr 2026", event: "Last date for nominations - 4,023 nominations filed" },
  { date: "7 Apr 2026", event: "Scrutiny of nominations" },
  { date: "8 Apr 2026", event: "Final voter count: 5.73 crore after SIR exercise" },
  { date: "9 Apr 2026", event: "Last date for withdrawal; final candidate count confirmed" },
  { date: "23 Apr 2026", event: "POLLING DAY - Historic record 85.1% turnout across 75,064 polling stations" },
  { date: "24 Apr 2026", event: "ECI confirms record turnout; Exit polls banned until Apr 30" },
  { date: "25 Apr 2026", event: "Turnout revised upward to 85.1% from initial 84.69%" },
  { date: "30 Apr 2026", event: "EXIT POLLS RELEASED at 6:00 PM after embargo lifts" },
  { date: "1 May 2026", event: "Exit poll analysis shows 9 of 11 agencies favor DMK+, Axis My India predicts TVK wave" },
  { date: "4 May 2026", event: "RESULTS DAY - Vote counting and declaration" },
];

export const CAMPAIGN_NARRATIVES = [
  { title: "Exit Polls Create Historic Uncertainty - Axis My India Predicts TVK Landslide", desc: "Major shock: Axis My India projects TVK winning 98-120 seats vs DMK's 92-110, making Vijay potential kingmaker or CM. Other 9 agencies show comfortable DMK+ win (125-160 seats). Axis prediction based on 44,460 interviews but criticized for demographic sampling issues", color: "#FF5722" },
  { title: "Record-Breaking 85.1% Turnout Rewrites Tamil Nadu History", desc: "State achieves highest Assembly election turnout since Independence at 85.1% (revised from 84.69%). Women voters at 85.76% vs men at 83.57%. Karur district tops with 93.39%. Special Intensive Revision reduced voter base from 6.29 to 5.73 crore, inflating percentages", color: "#2196F3" },
  { title: "Exit Poll Consensus: DMK+ Retains Power Despite Anti-Incumbency", desc: "9 out of 11 exit poll agencies project comfortable DMK victory (125-160 seats). Today's Chanakya most bullish (145-160), P-Marq shows 125-145. AIADMK projected 50-100 seats across polls. Poll of Polls average: DMK+ 126-141, NDA 78-92", color: "#4CAF50" },
  { title: "TVK's Debut Impact: Vote-Splitter or Game-Changer?", desc: "Most exit polls show TVK winning 10-26 seats with 16-23% vote share, primarily among youth. Could benefit DMK by splitting anti-incumbency vote. Pradeep Gupta claims TVK performed 'exceptionally well' in Chennai. Geographic concentration will determine actual seat conversion", color: "#FFC107" },
  { title: "Axis My India Sampling Controversy Emerges", desc: "Critics highlight Axis poll's demographic issues: OBC/MBC underrepresented at 28% vs actual 51%, missing 31% of electorate from survey universe. Despite identical 35% vote share projection for both DMK and TVK, translates into opposite seat outcomes", color: "#9C27B0" },
  { title: "O. Panneerselvam's Strategic DMK Switch Strengthens Ruling Party", desc: "Former 3-time CM's February defection from AIADMK to DMK brings southern Tamil Nadu credibility. Contesting from his Bodinayakkanur stronghold where he won thrice. Move seen as key factor in DMK's projected southern belt dominance per exit polls", color: "#4CAF50" },
  { title: "DMDK-DMK Historic Alliance Materializes After Years of Rivalry", desc: "Premalatha Vijayakanth's DMDK joins DMK for first time in party history, allocated 10 seats plus Rajya Sabha berth. Move significantly strengthens Secular Progressive Alliance and ends years of political uncertainty for Captain's legacy party", color: "#03A9F4" },
  { title: "Chennai Records Dramatic Turnout Surge of +24 Percentage Points", desc: "Capital sees massive jump from 59.29% (2021) to 83.58% (2026), biggest increase statewide. However, absolute votes dropped by 47,322 due to electoral roll revision. Paradox explained by smaller voter base creating statistical inflation in turnout percentage", color: "#FF9800" },
  { title: "Three-Way CM Race: Vijay Leads Preference Despite Seat Projections", desc: "Makkal Choice poll shows Vijay at 62% CM preference vs Stalin's 41% and EPS's 24%. However, most exit polls project him winning only 10-26 seats. Disconnect highlights difference between aspirational leadership appeal and actual electoral arithmetic", color: "#E91E63" },
  { title: "High-Stakes Counting Day Approaches Amid Polling Accuracy Debate", desc: "May 4 results will test credibility of Indian exit polling after massive variance. Tamil Nadu's first-past-the-post system makes seat predictions challenging for debut parties. State's history shows exit polls often underestimate AIADMK, overestimate DMK margins", color: "#795548" },
];

export const SATISFACTION_DATA = [
  { label: "Record Voter Turnout (85.1%)", pct: 85.1, color: "#4CAF50" },
  { label: "Female Voter Participation (85.76%)", pct: 85.76, color: "#E91E63" },
  { label: "Male Voter Participation (83.57%)", pct: 83.57, color: "#3F51B5" },
  { label: "Youth Unemployment - Major Concern", pct: 94, color: "#F44336" },
  { label: "Law & Order - Major Concern", pct: 92, color: "#F44336" },
  { label: "Corruption Allegations Impact", pct: 90, color: "#F44336" },
  { label: "Rising Prices Concern", pct: 89, color: "#F44336" },
  { label: "Women's Safety Concern", pct: 87, color: "#F44336" },
  { label: "Exit Poll DMK+ Win Consensus", pct: 82, color: "#E53935" },
  { label: "Vijay CM Preference (Makkal Choice)", pct: 62, color: "#FFC107" },
  { label: "Want Change (Alt Survey)", pct: 62, color: "#F44336" },
  { label: "Want DMK to Continue", pct: 55, color: "#E53935" },
  { label: "Working Age Population (20-49)", pct: 47, color: "#2196F3" },
  { label: "First-time Voters Impact", pct: 25.5, color: "#2196F3" },
  { label: "DMK Govt Performance - Very Good", pct: 30, color: "#E53935" },
  { label: "TVK Youth Support (20-29 age)", pct: 59, color: "#FFC107" },
  { label: "TVK First-time Voter Support", pct: 68, color: "#FFC107" },
  { label: "Undecided Voters Pre-Poll", pct: 18, color: "#9E9E9E" },
];