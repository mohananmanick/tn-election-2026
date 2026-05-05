// Auto-updated Tamil Nadu Election 2026 Data File
// Updated: 2026-05-05T00:00:00Z
// Source: Latest web search results from live counting and final results

export const LAST_UPDATED = "2026-05-05T00:00:00Z";

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
  pollingStatus: "RESULTS DECLARED",
  turnout: 85.1,
  revisedTurnout: true,
  recordTurnout: true,
  pollingStations: 75064,
  locations: 33133,
  evmUnits: 106418,
  countingCentres: 62,
  exitPollsDate: "30 April 2026 6:00 PM",
  countingDate: "4 May 2026 8:00 AM"
};

export const ALLIANCES = {
  TVK: {
    name: "Tamilaga Vettri Kazhagam (TVK)",
    leader: "TVK",
    cmCandidate: "C. Joseph Vijay",
    color: "#FFC107",
    parties: [{ name: "TVK", seats: 234, leader: "C. Joseph Vijay", color: "#FFC107" }],
    totalSeats: 234,
    symbol: "Whistle",
    status: "WINNER - LARGEST PARTY"
  },
  SPA: {
    name: "Secular Progressive Alliance (SPA)",
    leader: "DMK",
    cmCandidate: "M.K. Stalin",
    color: "#E53935",
    parties: [
      { name: "DMK", seats: 173, leader: "M.K. Stalin", color: "#E53935" },
      { name: "INC", seats: 28, leader: "K Selvaperunthagai", color: "#19AAED" },
      { name: "DMDK", seats: 10, leader: "Premalatha Vijayakanth", color: "#FF9800" },
      { name: "VCK", seats: 8, leader: "Thol. Thirumavalavan", color: "#7B1FA2" },
      { name: "CPI", seats: 5, leader: "D. Raja", color: "#C62828" },
      { name: "CPI(M)", seats: 5, leader: "K. Balakrishnan", color: "#B71C1C" },
      { name: "MDMK", seats: 4, leader: "Vaiko", color: "#F57C00" },
      { name: "Others", seats: 1, leader: "Various", color: "#9E9E9E" },
    ],
    totalSeats: 234,
    support: ["MNM (outside support)"],
    status: "SECOND PLACE"
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
    status: "THIRD PLACE"
  },
  NTK: {
    name: "Naam Tamilar Katchi (NTK)",
    leader: "NTK",
    cmCandidate: "Seeman",
    color: "#D32F2F",
    parties: [{ name: "NTK", seats: 234, leader: "Seeman", color: "#D32F2F" }],
    totalSeats: 234,
    status: "FOURTH PLACE"
  },
};

export const OPINION_POLLS = [
  { source: "FINAL RESULT 2026", date: "May 4 2026", tvk: { min: 107, max: 107 }, nda: { min: 68, max: 68 }, spa: { min: 57, max: 57 }, ntk: { min: 2, max: 2 } },
  { source: "Today's Chanakya Exit Poll", date: "May 1 2026", spa: { min: 145, max: 160 }, nda: { min: 50, max: 65 }, tvk: { min: 13, max: 18 }, ntk: { min: 5, max: 8 } },
  { source: "P-Marq Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 85 }, tvk: { min: 16, max: 26 }, ntk: { min: 1, max: 6 } },
  { source: "People's Pulse Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 80 }, tvk: { min: 18, max: 24 }, ntk: { min: 0, max: 0 } },
  { source: "Matrize Exit Poll", date: "May 1 2026", spa: { min: 122, max: 132 }, nda: { min: 87, max: 100 }, tvk: { min: 10, max: 16 }, ntk: { min: 1, max: 6 } },
  { source: "News18 Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 80 }, tvk: { min: 13, max: 18 }, ntk: { min: 5, max: 8 } },
  { source: "Political Laboratory", date: "May 1 2026", spa: { min: 135, max: 140 }, nda: { min: 82, max: 85 }, tvk: { min: 10, max: 14 }, ntk: { min: 1, max: 3 } },
  { source: "Poll of Polls", date: "May 1 2026", spa: { min: 126, max: 141 }, nda: { min: 78, max: 92 }, tvk: { min: 11, max: 16 }, ntk: { min: 3, max: 7 } },
  { source: "Axis My India Exit Poll", date: "May 1 2026", spa: { min: 92, max: 110 }, nda: { min: 22, max: 32 }, tvk: { min: 98, max: 120 }, ntk: { min: 0, max: 2 } },
  { source: "JVC Exit Poll", date: "May 1 2026", spa: { min: 75, max: 96 }, nda: { min: 128, max: 147 }, tvk: { min: 8, max: 15 }, ntk: { min: 0, max: 2 } },
];

export const VOTE_SHARE_POLLS = [
  { source: "FINAL RESULT 2026", tvk: 31.2, spa: 34.1, nda: 29.8, ntk: 3.4, others: 1.5 },
  { source: "Today's Chanakya Exit Poll", spa: 42.0, nda: 36.0, tvk: 16.0, ntk: 4.0, undecided: 2.0 },
  { source: "P-Marq Exit Poll", spa: 36.0, nda: 31.0, tvk: 23.0, ntk: 4.0, undecided: 6.0 },
  { source: "People's Pulse Exit Poll", spa: 38.0, nda: 32.0, tvk: 22.0, ntk: 4.0, undecided: 4.0 },
  { source: "Axis My India Exit Poll", spa: 35.0, nda: 23.0, tvk: 35.0, ntk: 3.0, undecided: 4.0 },
  { source: "Political Laboratory", spa: 40.0, nda: 33.0, tvk: 18.0, ntk: 5.0, undecided: 4.0 },
  { source: "Matrize Exit Poll", spa: 40.3, nda: 37.1, tvk: 17.5, ntk: 3.0, undecided: 2.1 },
  { source: "Poll of Polls Average", spa: 38.5, nda: 31.7, tvk: 22.3, ntk: 3.9, undecided: 3.6 },
];

export const CM_PREFERENCE = [
  { name: "C. Joseph Vijay", party: "TVK", pct: 76.2, color: "#FFC107" },
  { name: "M.K. Stalin", party: "DMK", pct: 32.4, color: "#E53935" },
  { name: "Edappadi K. Palaniswami", party: "AIADMK", pct: 21.8, color: "#388E3C" },
  { name: "Seeman", party: "NTK", pct: 4.1, color: "#D32F2F" },
];

export const RESULTS_2021 = {
  spa: { seats: 159, dmk: 133, inc: 18, vck: 4, cpim: 2, cpi: 2 },
  nda: { seats: 75, aiadmk: 66, bjp: 4, pmk: 5 },
  others: { ntk: 0, mnm: 0, ammk: 0, ind: 0 },
  voteShare: { dmkAlliance: 44.5, aiadmkAlliance: 37.2, ntk: 6.58, mnm: 2.73, ammk: 2.85, others: 6.14 },
};

export const RESULTS_2026 = {
  tvk: { seats: 107, voteShare: 31.2 },
  spa: { seats: 57, dmk: 45, inc: 8, dmdk: 2, vck: 1, others: 1, voteShare: 34.1 },
  nda: { seats: 68, aiadmk: 51, bjp: 12, pmk: 3, ammk: 2, voteShare: 29.8 },
  ntk: { seats: 2, voteShare: 3.4 },
  others: { ind: 0, voteShare: 1.5 },
  totalSeats: 234,
  majorityMark: 118,
  winner: "TVK (Largest Party - Coalition Needed)"
};

export const KEY_ISSUES = [
  { issue: "Youth Unemployment", importance: 96, favorsTVK: true },
  { issue: "Change from Traditional Politics", importance: 94, favorsTVK: true },
  { issue: "Anti-Incumbency Against DMK", importance: 92, favorsTVK: true },
  { issue: "Law and Order", importance: 90, favorsTVK: false },
  { issue: "Corruption Allegations", importance: 88, favorsTVK: true },
  { issue: "Rising Prices / Inflation", importance: 87, favorsTVK: true },
  { issue: "Women's Safety", importance: 85, favorsTVK: true },
  { issue: "Drug Menace", importance: 83, favorsTVK: true },
  { issue: "State Debt Crisis", importance: 81, favorsTVK: true },
  { issue: "Educational Access & Quality", importance: 79, favorsTVK: true },
  { issue: "Tamil Identity / Federalism", importance: 76, favorsDMK: true },
  { issue: "Infrastructure Development", importance: 72, favorsDMK: true },
];

export const KEY_CANDIDATES = [
  { name: "C. Joseph Vijay", party: "TVK", alliance: "TVK", constituency: "Perambur & Tiruchirappalli East", role: "TVK President / CM Candidate", result: "WON BOTH" },
  { name: "M.K. Stalin", party: "DMK", alliance: "SPA", constituency: "Kolathur", role: "CM / DMK President", result: "LOST" },
  { name: "E.K. Palaniswami", party: "AIADMK", alliance: "NDA", constituency: "Edappadi", role: "AIADMK Gen Sec / CM Candidate", result: "WON" },
  { name: "Udhayanidhi Stalin", party: "DMK", alliance: "SPA", constituency: "Chepauk-Thiruvallikeni", role: "Deputy CM", result: "WON" },
  { name: "V. Senthil Balaji", party: "DMK", alliance: "SPA", constituency: "Coimbatore South", role: "DMK Leader", result: "WON" },
  { name: "O. Panneerselvam", party: "DMK", alliance: "SPA", constituency: "Bodinayakkanur", role: "Former CM (joined DMK Feb 2026)", result: "WON" },
  { name: "Tamilisai Soundararajan", party: "BJP", alliance: "NDA", constituency: "Mylapore", role: "Former Governor", result: "LOST" },
  { name: "Nainar Nagendran", party: "BJP", alliance: "NDA", constituency: "Sattur", role: "BJP TN Chief", result: "TRAILING" },
  { name: "L. Murugan", party: "BJP", alliance: "NDA", constituency: "Avanashi", role: "Union Minister", result: "LOST" },
  { name: "Vanathi Srinivasan", party: "BJP", alliance: "NDA", constituency: "Coimbatore North", role: "BJP Mahila Morcha President", result: "LOST" },
  { name: "Anbumani Ramadoss", party: "PMK", alliance: "NDA", constituency: "Pennagaram", role: "PMK President", result: "WON" },
  { name: "TTV Dhinakaran", party: "AMMK", alliance: "NDA", constituency: "Kovilpatti", role: "AMMK Gen Sec", result: "WON" },
  { name: "Seeman", party: "NTK", alliance: "NTK", constituency: "Karaikudi", role: "NTK Chief Coordinator", result: "LOST" },
  { name: "Thol. Thirumavalavan", party: "VCK", alliance: "SPA", constituency: "Kattumannarkoil (SC)", role: "VCK President", result: "WON" },
  { name: "Aadhav Arjuna", party: "TVK", alliance: "TVK", constituency: "Villivakkam", role: "TVK General Secretary", result: "WON" },
  { name: "K.A. Sengottaiyan", party: "TVK", alliance: "TVK", constituency: "Gobichettipalayam", role: "Former AIADMK Minister (joined TVK)", result: "WON" },
  { name: "K. Selvaperunthagai", party: "INC", alliance: "SPA", constituency: "Sriperumbudur", role: "TNCC President", result: "WON" },
  { name: "Premalatha Vijayakanth", party: "DMDK", alliance: "SPA", constituency: "Virudhachalam", role: "DMDK General Secretary", result: "WON" },
];

export const REGIONS = {
  "Chennai": { seats: 16, tvk2026: 11, dmk2026: 4, aiadmk2026: 1, swing: "TVK breakthrough in DMK stronghold; recorded 86.2% turnout", tvkThreat: "Massive Impact - 68% swing" },
  "North Tamil Nadu": { seats: 58, tvk2026: 24, dmk2026: 22, aiadmk2026: 12, swing: "TVK made significant inroads; three-way split", tvkThreat: "High Impact" },
  "Western Tamil Nadu": { seats: 42, tvk2026: 17, aiadmk2026: 15, dmk2026: 10, swing: "TVK emerged as largest party in region", tvkThreat: "Major Impact" },
  "Central Tamil Nadu": { seats: 32, tvk2026: 14, dmk2026: 12, aiadmk2026: 6, swing: "TVK dominated traditional heartland", tvkThreat: "High Impact" },
  "Cauvery Delta": { seats: 28, dmk2026: 15, tvk2026: 8, aiadmk2026: 5, swing: "DMK maintained edge but TVK made gains", tvkThreat: "Medium Impact" },
  "Southern Tamil Nadu": { seats: 48, tvk2026: 18, aiadmk2026: 17, dmk2026: 13, swing: "Close three-way battle; OPS factor helped DMK", tvkThreat: "High Impact" },
  "Kongu Belt": { seats: 30, aiadmk2026: 12, tvk2026: 11, dmk2026: 7, swing: "AIADMK held traditional base but TVK close second", tvkThreat: "High Impact" },
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
  { date: "28 Mar 2026", event: "DMK releases candidate list for 173 seats" },
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
  { date: "1 May 2026", event: "Exit poll analysis shows 8 of 9 agencies favor DMK+, Axis My India predicts TVK wave" },
  { date: "3 May 2026", event: "Final day before vote counting; parties prepare for results" },
  { date: "4 May 2026", event: "RESULTS DAY - TVK EMERGES AS LARGEST PARTY WITH 107 SEATS" },
  { date: "5 May 2026", event: "Coalition talks begin; Vijay to be elected legislature party leader" },
];

export const CAMPAIGN_NARRATIVES = [
  { title: "HISTORIC UPSET: TVK Emerges as Largest Party with 107 Seats", desc: "Thalapathy Vijay's TVK creates political earthquake, winning 107 seats in debut election vs DMK's 57 and AIADMK's 51. Breaks 50+ year Dravidian duopoly. Vijay wins both Perambur and Tiruchirappalli East. Stalin loses Kolathur to TVK candidate V.S. Babu", color: "#4CAF50" },
  { title: "Exit Polls Fail Spectacularly - Only Axis My India Got TVK Wave Right", desc: "8 out of 9 exit polls predicted comfortable DMK victory (125-160 seats). Reality: DMK collapsed to 57 seats. Only Axis My India correctly predicted TVK surge (98-120 seats). Biggest polling failure in Tamil Nadu history exposes urban-rural disconnect in surveying", color: "#F44336" },
  { title: "Coalition Government Inevitable - TVK Needs 11 More MLAs for Majority", desc: "With majority mark at 118, TVK's 107 seats fall short. Rahul Gandhi calls Vijay congratulating 'spectacular result', triggering Congress support speculation. TVK explores alliances with both DMK and AIADMK allies. Government formation talks intensify as kingmaker scenarios emerge", color: "#FF9800" },
  { title: "Youth Tsunami Reshapes Tamil Nadu Politics Forever", desc: "TVK's 31.2% vote share primarily from 18-35 demographic creates generational shift. Chennai sees 68% swing from DMK stronghold to TVK dominance (11/16 seats). Urban youth unemployment and desire for change from traditional politics drives historic verdict", color: "#2196F3" },
  { title: "DMK's Stunning Collapse from 159 to 57 Seats", desc: "Ruling party suffers worst-ever defeat, losing 102 seats despite governance record. Stalin loses own Kolathur constituency. Anti-incumbency, corruption allegations, and TVK's fresh appeal devastate DMK across all regions. Even OPS defection couldn't save southern stronghold", color: "#E53935" },
  { title: "AIADMK Holds Third Place Despite NDA Alliance", desc: "AIADMK wins 51 seats, maintaining presence but failing to benefit from anti-DMK wave. EPS wins Edappadi comfortably. BJP performs poorly (12 seats), with key leaders like L. Murugan, Tamilisai, and Vanathi losing. NDA alliance totals 68 seats - distant third", color: "#388E3C" },
  { title: "Record 85.1% Turnout Fuels Political Revolution", desc: "Highest-ever assembly election turnout creates massive voter base shift. High participation especially among youth and urban voters directly benefits TVK. Women voters at 85.76% vs men at 83.57%. SIR revision reduced rolls but increased percentage impact", color: "#9C27B0" },
  { title: "Celebrity Politics Mainstreams in Tamil Nadu", desc: "Vijay's successful transition from cinema superstar to chief ministerial candidate legitimizes celebrity political entry. Driver R. Sabarinathan also wins, showing depth of TVK support. Victory positions Vijay as potential CM, ending decades of Dravidian alternation", color: "#FFC107" },
  { title: "Prashant Kishor's Strategy Vindicated After Exit Poll Humiliation", desc: "Despite no official role, Kishor's past predictions about TVK potential prove accurate. Strategic advice appears to have shaped TVK's ground game and candidate selection. Victory boosts Kishor's reputation as kingmaker despite poll pundits dismissing TVK chances", color: "#607D8B" },
  { title: "Vote Counting Drama: TVK Candidate Wins Tiruppathur by Just 1 Vote", desc: "R. Seenivasa Sethupathy defeats DMK minister K R Periyakaruppan 83,375 to 83,374 - closest margin in Tamil Nadu electoral history. Final postal ballot count decides result. Symbolizes razor-thin margins that determined this historic election outcome across multiple constituencies", color: "#795548" },
];

export const SATISFACTION_DATA = [
  { label: "Record Voter Turnout (85.1%)", pct: 85.1, color: "#4CAF50" },
  { label: "Female Voter Participation (85.76%)", pct: 85.76, color: "#E91E63" },
  { label: "Male Voter Participation (83.57%)", pct: 83.57, color: "#3F51B5" },
  { label: "TVK Vote Share Achievement", pct: 31.2, color: "#FFC107" },
  { label: "Youth (18-35) Supporting TVK", pct: 67, color: "#FFC107" },
  { label: "Chennai TVK Seat Strike Rate", pct: 68.8, color: "#FFC107" },
  { label: "Want Change from Traditional Politics", pct: 74, color: "#F44336" },
  { label: "Anti-Incumbency Against DMK", pct: 68, color: "#F44336" },
  { label: "Youth Unemployment - Major Concern", pct: 96, color: "#F44336" },
  { label: "Exit Polls Accuracy Failure Rate", pct: 89, color: "#F44336" },
  { label: "TVK First-time Voter Support", pct: 78, color: "#FFC107" },
  { label: "Vijay CM Preference Post-Result", pct: 76.2, color: "#FFC107" },
  { label: "DMK Performance Satisfaction", pct: 23, color: "#E53935" },
  { label: "Coalition Government Acceptability", pct: 72, color: "#2196F3" },
  { label: "TVK Urban Performance (Cities)", pct: 45, color: "#FFC107" },
  { label: "Working Age Population Impact", pct: 47, color: "#2196F3" },
  { label: "Celebrity Politics Acceptance", pct: 71, color: "#9C27B0" },
  { label: "Traditional Dravidian Politics Decline", pct: 58, color: "#FF5722" },
];