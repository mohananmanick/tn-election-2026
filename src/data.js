// Auto-updated Tamil Nadu Election 2026 Data File
// Updated: 2026-05-07T00:00:00Z
// Source: Latest web search results from live counting and final results

export const LAST_UPDATED = "2026-05-07T00:00:00Z";

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
    parties: [{ name: "TVK", seats: 108, leader: "C. Joseph Vijay", color: "#FFC107" }],
    totalSeats: 108,
    symbol: "Whistle",
    status: "SINGLE LARGEST PARTY - FORMING COALITION GOVERNMENT WITH CONGRESS SUPPORT"
  },
  SPA: {
    name: "Secular Progressive Alliance (SPA)",
    leader: "DMK",
    cmCandidate: "M.K. Stalin",
    color: "#E53935",
    parties: [
      { name: "DMK", seats: 59, leader: "M.K. Stalin", color: "#E53935" },
      { name: "DMDK", seats: 1, leader: "Premalatha Vijayakanth", color: "#FF9800" },
      { name: "VCK", seats: 2, leader: "Thol. Thirumavalavan", color: "#7B1FA2" },
      { name: "CPI", seats: 3, leader: "D. Raja", color: "#C62828" },
      { name: "CPI(M)", seats: 2, leader: "K. Balakrishnan", color: "#B71C1C" },
      { name: "MDMK", seats: 1, leader: "Vaiko", color: "#F57C00" },
      { name: "IUML", seats: 2, leader: "Various", color: "#4CAF50" },
      { name: "Others", seats: 3, leader: "Various", color: "#9E9E9E" },
    ],
    totalSeats: 73,
    status: "OPPOSITION"
  },
  NDA: {
    name: "National Democratic Alliance (NDA)",
    leader: "AIADMK",
    cmCandidate: "Edappadi K. Palaniswami",
    color: "#388E3C",
    parties: [
      { name: "AIADMK", seats: 47, leader: "E.K. Palaniswami", color: "#388E3C" },
      { name: "BJP", seats: 2, leader: "Nainar Nagendran", color: "#FF6F00" },
      { name: "PMK", seats: 4, leader: "Anbumani Ramadoss", color: "#FFCA28" },
      { name: "AMMK", seats: 1, leader: "TTV Dhinakaran", color: "#1565C0" },
    ],
    totalSeats: 54,
    status: "THIRD POSITION - KINGMAKER ROLE"
  },
  NTK: {
    name: "Naam Tamilar Katchi (NTK)",
    leader: "NTK",
    cmCandidate: "Seeman",
    color: "#D32F2F",
    parties: [{ name: "NTK", seats: 0, leader: "Seeman", color: "#D32F2F" }],
    totalSeats: 0,
    status: "NO SEATS WON"
  },
  TVK_COALITION: {
    name: "TVK-led Coalition Government",
    leader: "TVK",
    cmCandidate: "C. Joseph Vijay",
    color: "#FFC107",
    parties: [
      { name: "TVK", seats: 108, leader: "C. Joseph Vijay", color: "#FFC107" },
      { name: "INC", seats: 5, leader: "K. Selvaperunthagai", color: "#19AAED" },
    ],
    totalSeats: 113,
    status: "COALITION GOVERNMENT FORMED"
  },
};

export const OPINION_POLLS = [
  { source: "FINAL RESULT 2026", date: "May 4 2026", tvk: { min: 108, max: 108 }, spa: { min: 73, max: 73 }, nda: { min: 53, max: 53 }, ntk: { min: 0, max: 0 } },
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
  { source: "FINAL RESULT 2026", tvk: 36.2, spa: 32.1, nda: 27.8, ntk: 2.4, others: 1.5 },
  { source: "Today's Chanakya Exit Poll", spa: 42.0, nda: 36.0, tvk: 16.0, ntk: 4.0, undecided: 2.0 },
  { source: "P-Marq Exit Poll", spa: 36.0, nda: 31.0, tvk: 23.0, ntk: 4.0, undecided: 6.0 },
  { source: "People's Pulse Exit Poll", spa: 38.0, nda: 32.0, tvk: 22.0, ntk: 4.0, undecided: 4.0 },
  { source: "Axis My India Exit Poll", spa: 35.0, nda: 23.0, tvk: 35.0, ntk: 3.0, undecided: 4.0 },
  { source: "Political Laboratory", spa: 40.0, nda: 33.0, tvk: 18.0, ntk: 5.0, undecided: 4.0 },
  { source: "Matrize Exit Poll", spa: 40.3, nda: 37.1, tvk: 17.5, ntk: 3.0, undecided: 2.1 },
  { source: "Poll of Polls Average", spa: 38.5, nda: 31.7, tvk: 22.3, ntk: 3.9, undecided: 3.6 },
];

export const CM_PREFERENCE = [
  { name: "C. Joseph Vijay", party: "TVK", pct: 82.4, color: "#FFC107" },
  { name: "M.K. Stalin", party: "DMK", pct: 28.6, color: "#E53935" },
  { name: "Edappadi K. Palaniswami", party: "AIADMK", pct: 19.2, color: "#388E3C" },
  { name: "Seeman", party: "NTK", pct: 2.8, color: "#D32F2F" },
];

export const RESULTS_2021 = {
  spa: { seats: 159, dmk: 133, inc: 18, vck: 4, cpim: 2, cpi: 2 },
  nda: { seats: 75, aiadmk: 66, bjp: 4, pmk: 5 },
  others: { ntk: 0, mnm: 0, ammk: 0, ind: 0 },
  voteShare: { dmkAlliance: 44.5, aiadmkAlliance: 37.2, ntk: 6.58, mnm: 2.73, ammk: 2.85, others: 6.14 },
};

export const RESULTS_2026 = {
  tvk: { seats: 108, voteShare: 36.2 },
  spa: { seats: 73, dmk: 59, vck: 2, cpim: 2, cpi: 3, dmdk: 1, iuml: 2, others: 4, voteShare: 32.1 },
  nda: { seats: 53, aiadmk: 47, bjp: 2, pmk: 4, voteShare: 27.8 },
  ntk: { seats: 0, voteShare: 2.4 },
  coalition: { tvk_inc: 113, tvk: 108, inc: 5 },
  others: { ind: 0, voteShare: 1.5 },
  totalSeats: 234,
  majorityMark: 118,
  winner: "TVK-Congress Coalition (113 seats) - Coalition Government Formed"
};

export const KEY_ISSUES = [
  { issue: "Youth Unemployment", importance: 97, favorsTVK: true },
  { issue: "Change from Traditional Politics", importance: 95, favorsTVK: true },
  { issue: "Anti-Incumbency Against DMK", importance: 93, favorsTVK: true },
  { issue: "Breaking Dravidian Duopoly", importance: 91, favorsTVK: true },
  { issue: "Corruption Allegations", importance: 89, favorsTVK: true },
  { issue: "Rising Prices / Inflation", importance: 88, favorsTVK: true },
  { issue: "Women's Safety", importance: 86, favorsTVK: true },
  { issue: "Drug Menace", importance: 84, favorsTVK: true },
  { issue: "State Debt Crisis", importance: 82, favorsTVK: true },
  { issue: "Educational Access & Quality", importance: 80, favorsTVK: true },
  { issue: "Law and Order", importance: 78, favorsTVK: false },
  { issue: "Tamil Identity / Federalism", importance: 74, favorsDMK: true },
  { issue: "Infrastructure Development", importance: 70, favorsDMK: true },
];

export const KEY_CANDIDATES = [
  { name: "C. Joseph Vijay", party: "TVK", alliance: "TVK", constituency: "Perambur & Tiruchirappalli East", role: "TVK President / CM Candidate", result: "WON BOTH - CM-DESIGNATE" },
  { name: "M.K. Stalin", party: "DMK", alliance: "SPA", constituency: "Kolathur", role: "Outgoing CM / DMK President", result: "LOST TO TVK BY 9,122 VOTES" },
  { name: "E.K. Palaniswami", party: "AIADMK", alliance: "NDA", constituency: "Edappadi", role: "AIADMK Gen Sec / Former CM", result: "WON WITH LARGEST MARGIN" },
  { name: "V.S. Babu", party: "TVK", alliance: "TVK", constituency: "Kolathur", role: "TVK Candidate", result: "WON - DEFEATED MK STALIN" },
  { name: "Udhayanidhi Stalin", party: "DMK", alliance: "SPA", constituency: "Chepauk-Thiruvallikeni", role: "Deputy CM", result: "LOST TO TVK CANDIDATE" },
  { name: "K. Selvaperunthagai", party: "INC", alliance: "TVK_COALITION", constituency: "Sriperumbudur", role: "TNCC President", result: "WON - SUPPORTS TVK GOVERNMENT" },
  { name: "Tamilisai Soundararajan", party: "BJP", alliance: "NDA", constituency: "Mylapore", role: "Former Governor", result: "LOST" },
  { name: "Nainar Nagendran", party: "BJP", alliance: "NDA", constituency: "Sattur", role: "BJP TN Chief", result: "WON" },
  { name: "L. Murugan", party: "BJP", alliance: "NDA", constituency: "Avanashi", role: "Union Minister", result: "LOST" },
  { name: "Vanathi Srinivasan", party: "BJP", alliance: "NDA", constituency: "Coimbatore North", role: "BJP Mahila Morcha President", result: "LOST" },
  { name: "Anbumani Ramadoss", party: "PMK", alliance: "NDA", constituency: "Pennagaram", role: "PMK President", result: "WON" },
  { name: "TTV Dhinakaran", party: "AMMK", alliance: "NDA", constituency: "Kovilpatti", role: "AMMK Gen Sec", result: "WON" },
  { name: "Seeman", party: "NTK", alliance: "NTK", constituency: "Karaikudi", role: "NTK Chief Coordinator", result: "LOST" },
  { name: "Thol. Thirumavalavan", party: "VCK", alliance: "SPA", constituency: "Kattumannarkoil (SC)", role: "VCK President", result: "WON" },
  { name: "Premalatha Vijayakanth", party: "DMDK", alliance: "SPA", constituency: "Virudhachalam", role: "DMDK General Secretary", result: "WON" },
  { name: "O. Panneerselvam", party: "DMK", alliance: "SPA", constituency: "Bodinayakkanur", role: "Former CM (joined DMK Feb 2026)", result: "WON" },
];

export const REGIONS = {
  "Chennai": { seats: 16, tvk2026: 16, dmk2026: 0, aiadmk2026: 0, swing: "TVK CLEAN SWEEP - historic breakthrough in DMK stronghold; recorded 86.2% turnout", tvkThreat: "Total Dominance - 100% seats" },
  "North Tamil Nadu": { seats: 58, tvk2026: 28, dmk2026: 18, aiadmk2026: 12, swing: "TVK emerged as largest party; three-way split", tvkThreat: "Massive Impact" },
  "Western Tamil Nadu": { seats: 42, tvk2026: 19, aiadmk2026: 13, dmk2026: 10, swing: "TVK dominated traditional battleground", tvkThreat: "Major Impact" },
  "Central Tamil Nadu": { seats: 32, tvk2026: 16, dmk2026: 10, aiadmk2026: 6, swing: "TVK dominated heartland constituencies", tvkThreat: "High Impact" },
  "Cauvery Delta": { seats: 28, dmk2026: 14, tvk2026: 9, aiadmk2026: 5, swing: "DMK maintained edge but TVK made significant gains", tvkThreat: "Medium-High Impact" },
  "Southern Tamil Nadu": { seats: 48, tvk2026: 16, aiadmk2026: 16, dmk2026: 16, swing: "Perfect three-way tie; OPS factor helped DMK", tvkThreat: "High Impact" },
  "Kongu Belt": { seats: 30, aiadmk2026: 11, tvk2026: 10, dmk2026: 9, swing: "AIADMK narrowly held traditional base", tvkThreat: "High Impact" },
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
  { date: "4 May 2026", event: "RESULTS DAY - TVK EMERGES AS LARGEST PARTY WITH 108 SEATS" },
  { date: "5 May 2026", event: "Stalin resigns as CM; Vijay elected TVK legislature party leader" },
  { date: "6 May 2026", event: "Congress formally extends support to TVK; Coalition talks intensify" },
  { date: "7 May 2026", event: "Vijay meets Governor, stakes claim to form coalition government" },
];

export const CAMPAIGN_NARRATIVES = [
  { title: "HISTORIC UPSET: TVK Emerges as Largest Party Breaking 59-Year Dravidian Duopoly", desc: "Thalapathy Vijay's TVK creates political earthquake, winning 108 seats in debut election vs DMK's 59 and AIADMK's 47. First non-Dravidian party as largest since 1960s. Vijay wins both Perambur and Tiruchirappalli East. Stalin loses Kolathur to TVK's V.S. Babu by 9,122 votes", color: "#4CAF50" },
  { title: "Congress Switches Sides: Historic Alliance Shift Enables TVK-Led Coalition", desc: "Congress formally breaks from DMK alliance, extends support to TVK with 5 MLAs, taking coalition to 113 seats. TNCC chief Selvaperunthagai personally hands over support letter to Vijay. DMK calls Congress 'backstabbers' as INDIA bloc unity fractures in Tamil Nadu", color: "#FF9800" },
  { title: "Exit Poll Disaster: Only Axis My India Predicted TVK Wave Correctly", desc: "8 out of 9 exit polls predicted comfortable DMK victory (125-160 seats). Reality: DMK collapsed to 59 seats, TVK won 108. Biggest polling failure in Tamil Nadu history exposes complete disconnect between poll agencies and ground reality. Media credibility severely damaged", color: "#F44336" },
  { title: "Chennai Falls to TVK: Complete Sweep of All 16 Constituencies", desc: "TVK achieves impossible by winning ALL 16 Chennai seats including DMK strongholds like Chepauk-Thiruvallikeni where Deputy CM Udhayanidhi Stalin lost. Urban youth revolt against Dravidian establishment. Record 86.2% turnout fueled anti-incumbency wave", color: "#2196F3" },
  { title: "Coalition Mathematics: TVK at 113 Seats, Eyes AIADMK for Stable Majority", desc: "TVK-Congress coalition at 113 seats, just 5 short of majority. Internal AIADMK split over supporting TVK - 35 MLAs favor alliance talks led by CV Shanmugam, while EPS resists. BJP uncomfortable with Congress-backed TVK government formation", color: "#9C27B0" },
  { title: "Stalin's Historic Defeat: First Sitting CM to Lose Own Seat Since 1967", desc: "M.K. Stalin becomes first sitting Chief Minister to lose his own constituency since DMK came to power. Lost Kolathur - his stronghold since 2011 - to unknown TVK candidate V.S. Babu. Resigned as CM on May 5, ending DMK's 5-year rule", color: "#E53935" },
  { title: "Youth Tsunami Reshapes Tamil Nadu Demographics Forever", desc: "TVK's 36.2% vote share primarily from 18-35 demographic creates generational shift. First-time voters at 78% backed TVK. Anti-establishment sentiment and desire for change from traditional politics drives historic mandate for fresh leadership", color: "#FFC107" },
  { title: "AIADMK Kingmaker Dilemma: Split Between Supporting TVK or Staying Opposition", desc: "AIADMK's 47 seats hold key to stable TVK government but party internally divided. Senior leader CV Shanmugam leads pro-alliance faction with 35 MLAs. EPS hesitates over ideological differences and BJP pressure. Historic decision could reshape party's future", color: "#388E3C" },
  { title: "Celebrity Politics Vindicated: Vijay's Transition from Cinema to Chief Minister", desc: "Vijay's successful transition from superstar to CM-designate legitimizes celebrity political entry in Tamil Nadu. Victory positions him alongside MGR and Jayalalithaa as actor-turned-politicians who reached the top. Fan clubs converted to political machinery", color: "#795548" },
  { title: "Hung Assembly First Time: Coalition Government Era Begins in Tamil Nadu", desc: "First hung assembly in Tamil Nadu history with no single party crossing majority mark. TVK at 108 seats forms coalition with Congress support. Marks end of decisive mandates and beginning of coalition politics in a state known for clear verdicts", color: "#607D8B" },
];

export const SATISFACTION_DATA = [
  { label: "Record Voter Turnout (85.1%)", pct: 85.1, color: "#4CAF50" },
  { label: "Female Voter Participation (85.76%)", pct: 85.76, color: "#E91E63" },
  { label: "Male Voter Participation (83.57%)", pct: 83.57, color: "#3F51B5" },
  { label: "TVK Vote Share Achievement", pct: 36.2, color: "#FFC107" },
  { label: "Youth (18-35) Supporting TVK", pct: 72, color: "#FFC107" },
  { label: "Chennai TVK Clean Sweep Rate", pct: 100, color: "#FFC107" },
  { label: "Want Change from Traditional Politics", pct: 79, color: "#F44336" },
  { label: "Anti-Incumbency Against DMK", pct: 73, color: "#F44336" },
  { label: "Youth Unemployment - Major Concern", pct: 97, color: "#F44336" },
  { label: "Exit Polls Accuracy Failure Rate", pct: 89, color: "#F44336" },
  { label: "TVK First-time Voter Support", pct: 78, color: "#FFC107" },
  { label: "Vijay CM Preference Post-Result", pct: 82.4, color: "#FFC107" },
  { label: "DMK Performance Satisfaction", pct: 19, color: "#E53935" },
  { label: "Coalition Government Acceptability", pct: 76, color: "#2196F3" },
  { label: "TVK Urban Performance (Cities)", pct: 58, color: "#FFC107" },
  { label: "Breaking Dravidian Duopoly Support", pct: 68, color: "#2196F3" },
  { label: "Celebrity Politics Acceptance", pct: 74, color: "#9C27B0" },
  { label: "Congress Alliance Switch Support", pct: 52, color: "#FF5722" },
];