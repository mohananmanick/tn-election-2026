// Auto-updated Tamil Nadu Election 2026 Data File
// Updated: 2026-05-09T00:00:00Z
// Source: Latest web search results from counting and coalition formation

export const LAST_UPDATED = "2026-05-09T00:00:00Z";

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
  pollingStatus: "RESULTS DECLARED - COALITION GOVERNMENT FORMED",
  turnout: 85.1,
  revisedTurnout: true,
  recordTurnout: true,
  pollingStations: 75064,
  locations: 33133,
  evmUnits: 106418,
  countingCentres: 62,
  exitPollsDate: "30 April 2026 6:00 PM",
  countingDate: "4 May 2026 8:00 AM",
  swearingInDate: "9 May 2026 11:00 AM"
};

export const ALLIANCES = {
  TVK_COALITION: {
    name: "TVK-led Progressive Coalition",
    leader: "TVK",
    cmCandidate: "C. Joseph Vijay",
    color: "#FFC107",
    parties: [
      { name: "TVK", seats: 108, leader: "C. Joseph Vijay", color: "#FFC107" },
      { name: "INC", seats: 5, leader: "K. Selvaperunthagai", color: "#19AAED" },
      { name: "CPI", seats: 2, leader: "Veerapandian", color: "#C62828" },
      { name: "CPI(M)", seats: 2, leader: "K. Balakrishnan", color: "#B71C1C" },
      { name: "VCK", seats: 2, leader: "Thol. Thirumavalavan", color: "#7B1FA2" }
    ],
    totalSeats: 119,
    status: "COALITION GOVERNMENT FORMED - CM SWORN IN MAY 9"
  },
  SPA_OPPOSITION: {
    name: "DMK-led Opposition",
    leader: "DMK",
    cmCandidate: "M.K. Stalin (resigned)",
    color: "#E53935",
    parties: [
      { name: "DMK", seats: 59, leader: "M.K. Stalin", color: "#E53935" },
      { name: "DMDK", seats: 1, leader: "Premalatha Vijayakanth", color: "#FF9800" },
      { name: "IUML", seats: 2, leader: "Various", color: "#4CAF50" },
      { name: "Others", seats: 2, leader: "Various", color: "#9E9E9E" }
    ],
    totalSeats: 64,
    status: "MAIN OPPOSITION"
  },
  NDA: {
    name: "National Democratic Alliance",
    leader: "AIADMK",
    cmCandidate: "Edappadi K. Palaniswami",
    color: "#388E3C",
    parties: [
      { name: "AIADMK", seats: 47, leader: "E.K. Palaniswami", color: "#388E3C" },
      { name: "BJP", seats: 2, leader: "Nainar Nagendran", color: "#FF6F00" },
      { name: "PMK", seats: 4, leader: "Anbumani Ramadoss", color: "#FFCA28" }
    ],
    totalSeats: 53,
    status: "SECOND OPPOSITION"
  },
  NTK: {
    name: "Naam Tamilar Katchi",
    leader: "NTK", 
    cmCandidate: "Seeman",
    color: "#D32F2F",
    parties: [{ name: "NTK", seats: 0, leader: "Seeman", color: "#D32F2F" }],
    totalSeats: 0,
    status: "NO SEATS WON"
  }
};

export const OPINION_POLLS = [
  { source: "FINAL RESULT 2026", date: "May 4 2026", tvk: { min: 108, max: 108 }, spa: { min: 64, max: 64 }, nda: { min: 53, max: 53 }, ntk: { min: 0, max: 0 } },
  { source: "Today's Chanakya Exit Poll", date: "May 1 2026", spa: { min: 145, max: 160 }, nda: { min: 50, max: 65 }, tvk: { min: 13, max: 18 }, ntk: { min: 5, max: 8 } },
  { source: "P-Marq Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 85 }, tvk: { min: 16, max: 26 }, ntk: { min: 1, max: 6 } },
  { source: "People's Pulse Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 80 }, tvk: { min: 18, max: 24 }, ntk: { min: 0, max: 0 } },
  { source: "Matrize Exit Poll", date: "May 1 2026", spa: { min: 122, max: 132 }, nda: { min: 87, max: 100 }, tvk: { min: 10, max: 16 }, ntk: { min: 1, max: 6 } },
  { source: "News18 Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 80 }, tvk: { min: 13, max: 18 }, ntk: { min: 5, max: 8 } },
  { source: "Political Laboratory", date: "May 1 2026", spa: { min: 135, max: 140 }, nda: { min: 82, max: 85 }, tvk: { min: 10, max: 14 }, ntk: { min: 1, max: 3 } },
  { source: "Poll of Polls", date: "May 1 2026", spa: { min: 126, max: 141 }, nda: { min: 78, max: 92 }, tvk: { min: 11, max: 16 }, ntk: { min: 3, max: 7 } },
  { source: "Axis My India Exit Poll", date: "May 1 2026", spa: { min: 92, max: 110 }, nda: { min: 22, max: 32 }, tvk: { min: 98, max: 120 }, ntk: { min: 0, max: 2 } },
  { source: "JVC Exit Poll", date: "May 1 2026", spa: { min: 75, max: 96 }, nda: { min: 128, max: 147 }, tvk: { min: 8, max: 15 }, ntk: { min: 0, max: 2 } }
];

export const VOTE_SHARE_POLLS = [
  { source: "FINAL RESULT 2026", tvk: 36.2, spa: 29.8, nda: 27.1, ntk: 2.4, others: 4.5 },
  { source: "Today's Chanakya Exit Poll", spa: 42.0, nda: 36.0, tvk: 16.0, ntk: 4.0, undecided: 2.0 },
  { source: "P-Marq Exit Poll", spa: 36.0, nda: 31.0, tvk: 23.0, ntk: 4.0, undecided: 6.0 },
  { source: "People's Pulse Exit Poll", spa: 38.0, nda: 32.0, tvk: 22.0, ntk: 4.0, undecided: 4.0 },
  { source: "Axis My India Exit Poll", spa: 35.0, nda: 23.0, tvk: 35.0, ntk: 3.0, undecided: 4.0 },
  { source: "Political Laboratory", spa: 40.0, nda: 33.0, tvk: 18.0, ntk: 5.0, undecided: 4.0 },
  { source: "Matrize Exit Poll", spa: 40.3, nda: 37.1, tvk: 17.5, ntk: 3.0, undecided: 2.1 },
  { source: "Poll of Polls Average", spa: 38.5, nda: 31.7, tvk: 22.3, ntk: 3.9, undecided: 3.6 }
];

export const CM_PREFERENCE = [
  { name: "C. Joseph Vijay", party: "TVK", pct: 89.3, color: "#FFC107" },
  { name: "M.K. Stalin", party: "DMK", pct: 23.1, color: "#E53935" },
  { name: "Edappadi K. Palaniswami", party: "AIADMK", pct: 18.7, color: "#388E3C" },
  { name: "Seeman", party: "NTK", pct: 2.1, color: "#D32F2F" }
];

export const RESULTS_2021 = {
  spa: { seats: 159, dmk: 133, inc: 18, vck: 4, cpim: 2, cpi: 2 },
  nda: { seats: 75, aiadmk: 66, bjp: 4, pmk: 5 },
  others: { ntk: 0, mnm: 0, ammk: 0, ind: 0 },
  voteShare: { dmkAlliance: 44.5, aiadmkAlliance: 37.2, ntk: 6.58, mnm: 2.73, ammk: 2.85, others: 6.14 }
};

export const RESULTS_2026 = {
  tvk_coalition: { seats: 119, tvk: 108, inc: 5, cpi: 2, cpim: 2, vck: 2, voteShare: 39.4 },
  spa_opposition: { seats: 64, dmk: 59, dmdk: 1, iuml: 2, others: 2, voteShare: 29.8 },
  nda: { seats: 53, aiadmk: 47, bjp: 2, pmk: 4, voteShare: 27.1 },
  ntk: { seats: 0, voteShare: 2.4 },
  others: { ind: 0, voteShare: 1.3 },
  totalSeats: 234,
  majorityMark: 118,
  winner: "TVK-led Progressive Coalition (119 seats) - Government Formed May 9, 2026"
};

export const KEY_ISSUES = [
  { issue: "Youth Unemployment", importance: 98, favorsTVK: true },
  { issue: "Change from Traditional Politics", importance: 97, favorsTVK: true },
  { issue: "Anti-Incumbency Against DMK", importance: 94, favorsTVK: true },
  { issue: "Breaking Dravidian Duopoly", importance: 93, favorsTVK: true },
  { issue: "Corruption Allegations", importance: 91, favorsTVK: true },
  { issue: "Rising Prices / Inflation", importance: 89, favorsTVK: true },
  { issue: "Women's Safety", importance: 87, favorsTVK: true },
  { issue: "Drug Menace", importance: 85, favorsTVK: true },
  { issue: "State Debt Crisis", importance: 83, favorsTVK: true },
  { issue: "Educational Access & Quality", importance: 81, favorsTVK: true },
  { issue: "Law and Order", importance: 78, favorsTVK: false },
  { issue: "Tamil Identity / Federalism", importance: 75, favorsDMK: true },
  { issue: "Infrastructure Development", importance: 71, favorsDMK: true }
];

export const KEY_CANDIDATES = [
  { name: "C. Joseph Vijay", party: "TVK", alliance: "TVK_COALITION", constituency: "Perambur & Tiruchirappalli East", role: "TVK President / CM Candidate", result: "WON BOTH - CHIEF MINISTER SWORN IN MAY 9" },
  { name: "M.K. Stalin", party: "DMK", alliance: "SPA_OPPOSITION", constituency: "Kolathur", role: "Former CM / DMK President", result: "LOST TO TVK BY 9,122 VOTES - RESIGNED AS CM MAY 5" },
  { name: "E.K. Palaniswami", party: "AIADMK", alliance: "NDA", constituency: "Edappadi", role: "AIADMK Gen Sec / Former CM", result: "WON WITH LARGEST MARGIN" },
  { name: "V.S. Babu", party: "TVK", alliance: "TVK_COALITION", constituency: "Kolathur", role: "TVK Candidate", result: "WON - DEFEATED MK STALIN" },
  { name: "Udhayanidhi Stalin", party: "DMK", alliance: "SPA_OPPOSITION", constituency: "Chepauk-Thiruvallikeni", role: "Former Deputy CM", result: "WON BY 7,140 VOTES" },
  { name: "K. Selvaperunthagai", party: "INC", alliance: "TVK_COALITION", constituency: "Sriperumbudur", role: "TNCC President", result: "WON - COALITION PARTNER" },
  { name: "Thol. Thirumavalavan", party: "VCK", alliance: "TVK_COALITION", constituency: "Kattumannarkoil (SC)", role: "VCK President", result: "WON - COALITION PARTNER" },
  { name: "K. Balakrishnan", party: "CPI(M)", alliance: "TVK_COALITION", constituency: "Various", role: "CPI(M) State Secretary", result: "WON - COALITION PARTNER" },
  { name: "Veerapandian", party: "CPI", alliance: "TVK_COALITION", constituency: "Various", role: "CPI State Secretary", result: "WON - COALITION PARTNER" },
  { name: "Nainar Nagendran", party: "BJP", alliance: "NDA", constituency: "Sattur", role: "BJP TN Chief", result: "WON" },
  { name: "Anbumani Ramadoss", party: "PMK", alliance: "NDA", constituency: "Pennagaram", role: "PMK President", result: "WON" },
  { name: "Premalatha Vijayakanth", party: "DMDK", alliance: "SPA_OPPOSITION", constituency: "Virudhachalam", role: "DMDK General Secretary", result: "WON" },
  { name: "Seeman", party: "NTK", alliance: "NTK", constituency: "Karaikudi", role: "NTK Chief Coordinator", result: "LOST" },
  { name: "O. Panneerselvam", party: "DMK", alliance: "SPA_OPPOSITION", constituency: "Bodinayakkanur", role: "Former CM (joined DMK Feb 2026)", result: "WON" }
];

export const REGIONS = {
  "Chennai": { seats: 16, tvk2026: 16, dmk2026: 0, aiadmk2026: 0, swing: "TVK CLEAN SWEEP - historic breakthrough in capital; 86.2% turnout", tvkThreat: "Total Dominance - 100% seats" },
  "North Tamil Nadu": { seats: 58, tvk2026: 32, dmk2026: 15, aiadmk2026: 11, swing: "TVK emerged as dominant force; completely reshaped traditional patterns", tvkThreat: "Massive Impact" },
  "Western Tamil Nadu": { seats: 42, tvk2026: 21, aiadmk2026: 12, dmk2026: 9, swing: "TVK dominated traditional AIADMK stronghold", tvkThreat: "Major Impact" },
  "Central Tamil Nadu": { seats: 32, tvk2026: 18, dmk2026: 9, aiadmk2026: 5, swing: "TVK dominated heartland constituencies decisively", tvkThreat: "High Impact" },
  "Cauvery Delta": { seats: 28, dmk2026: 13, tvk2026: 11, aiadmk2026: 4, swing: "DMK held edge but TVK made significant breakthrough", tvkThreat: "Medium-High Impact" },
  "Southern Tamil Nadu": { seats: 48, tvk2026: 17, aiadmk2026: 15, dmk2026: 16, swing: "Three-way contest with slight TVK edge; OPS factor helped DMK", tvkThreat: "High Impact" },
  "Kongu Belt": { seats: 30, aiadmk2026: 12, tvk2026: 11, dmk2026: 7, swing: "AIADMK narrowly held traditional base against TVK surge", tvkThreat: "High Impact" }
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
  { date: "23 Mar 2026", event: "NDA finalizes seat-sharing: AIADMK 170, BJP 33, PMK 18" },
  { date: "28 Mar 2026", event: "DMK releases candidate list for 173 seats" },
  { date: "29 Mar 2026", event: "TVK releases full 234 candidate list and manifesto" },
  { date: "30 Mar 2026", event: "Nominations begin; Vijay files from Perambur" },
  { date: "2 Apr 2026", event: "Vijay files nomination from Trichy East (second constituency)" },
  { date: "6 Apr 2026", event: "Last date for nominations - 4,023 nominations filed" },
  { date: "9 Apr 2026", event: "Last date for withdrawal; final candidate count confirmed" },
  { date: "23 Apr 2026", event: "POLLING DAY - Record 85.1% turnout across 75,064 polling stations" },
  { date: "30 Apr 2026", event: "EXIT POLLS RELEASED - 8 of 9 agencies predict DMK victory" },
  { date: "4 May 2026", event: "RESULTS DAY - TVK EMERGES AS LARGEST PARTY WITH 108 SEATS" },
  { date: "5 May 2026", event: "Stalin resigns as CM; Vijay elected TVK legislature party leader" },
  { date: "6 May 2026", event: "Congress formally extends support to TVK; Coalition talks begin" },
  { date: "8 May 2026", event: "CPI, CPI(M), VCK extend support to TVK - Coalition reaches 119 seats" },
  { date: "8 May 2026 Evening", event: "Vijay meets Governor, stakes claim to form coalition government" },
  { date: "9 May 2026", event: "VIJAY SWORN IN AS CHIEF MINISTER - Coalition government begins" }
];

export const CAMPAIGN_NARRATIVES = [
  { title: "HISTORIC VICTORY: Vijay Sworn In As Tamil Nadu CM After Breaking 60-Year Duopoly", desc: "C. Joseph Vijay takes oath as Chief Minister on May 9, 2026, at 11 AM, leading first non-Dravidian government since 1960s. TVK-led coalition with Congress and Left parties secures 119 seats, ending traditional DMK-AIADMK alternation. Historic moment as actor-politician creates new political reality", color: "#4CAF50" },
  { title: "Coalition Era Begins: TVK Forms Government With Left-Congress Support", desc: "TVK's 108 seats combined with Congress (5), CPI (2), CPI(M) (2), VCK (2) create 119-seat coalition. Left parties call it 'democratic duty' to support largest party. First coalition government in Tamil Nadu marks end of single-party dominance era", color: "#FF9800" },
  { title: "Exit Poll Humiliation: Only Axis My India Predicted TVK Wave Among 9 Agencies", desc: "8 out of 9 exit polls catastrophically wrong - predicted DMK victory with 125-160 seats. Reality: DMK collapsed to 59. Only Axis My India correctly predicted TVK surge to 98-120 seats. Biggest polling failure in Indian election history destroys media credibility", color: "#F44336" },
  { title: "Stalin's Historic Defeat: First Sitting CM to Lose Own Seat in 59 Years", desc: "M.K. Stalin loses Kolathur to unknown TVK candidate V.S. Babu by 9,122 votes, becoming first sitting CM to lose constituency since 1967. Resigned as CM May 5. Udhayanidhi Stalin survives in Chepauk-Thiruvallikeni by narrow 7,140 vote margin", color: "#2196F3" },
  { title: "Chennai Revolution: TVK Achieves Impossible 16/16 Clean Sweep", desc: "TVK wins ALL 16 Chennai seats including DMK strongholds. Record 86.2% turnout fueled urban youth revolt against establishment. Deputy CM Udhayanidhi Stalin barely survives while entire Chennai falls to new political force", color: "#9C27B0" },
  { title: "Left Parties Switch Sides: Historic Realignment From DMK to TVK", desc: "CPI, CPI(M), VCK abandon decades-long DMK alliance to support TVK. Left leaders call it 'democratic duty' to support largest party and prevent 'BJP-masterminded' counter-alliances. DMK furious as INDIA bloc fractures in Tamil Nadu", color: "#E53935" },
  { title: "Congress Betrayal: TNCC Breaks DMK Alliance to Join TVK Government", desc: "Tamil Nadu Congress makes shocking switch from DMK to TVK, providing crucial 5 MLAs for coalition. TNCC President Selvaperunthagai hands support letter personally. DMK calls Congress 'backstabbers' as national INDIA alliance cracks", color: "#FFC107" },
  { title: "Youth Tsunami Reshapes Democracy: 78% First-Time Voters Back TVK", desc: "Generational shift as 18-35 demographic delivers 72% support to TVK. Anti-establishment sentiment drives historic 85.1% turnout. Traditional vote banks crumble as young voters reject both Dravidian parties for fresh alternative", color: "#795548" },
  { title: "Governor's Constitutional Crisis: Delayed Invitation Triggers State-Wide Protests", desc: "Governor Arlekar's delay in inviting largest party sparks constitutional row. Congress stages protests across district headquarters. Left parties accuse Governor of 'BJP agenda'. Finally invites Vijay after Left support clinches majority", color: "#607D8B" },
  { title: "Celebrity Politics Vindicated: From Superstar to Chief Minister in One Election", desc: "Vijay's transition from cinema to CM validates celebrity political entry in Tamil Nadu tradition of MGR-Jayalalithaa. Fan clubs converted to political machinery deliver unprecedented debut victory. Prime Minister Modi congratulates TVK's 'strong electoral debut'", color: "#FF5722" }
];

export const SATISFACTION_DATA = [
  { label: "Record Voter Turnout (85.1%)", pct: 85.1, color: "#4CAF50" },
  { label: "Vijay CM Approval Post-Swearing", pct: 89.3, color: "#FFC107" },
  { label: "Coalition Government Acceptance", pct: 81, color: "#2196F3" },
  { label: "Youth (18-35) Supporting TVK", pct: 78, color: "#FFC107" },
  { label: "Chennai TVK Clean Sweep Satisfaction", pct: 92, color: "#FFC107" },
  { label: "Want Change from Traditional Politics", pct: 83, color: "#F44336" },
  { label: "Breaking Dravidian Duopoly Support", pct: 76, color: "#2196F3" },
  { label: "Left-Congress Coalition Switch Approval", pct: 68, color: "#FF5722" },
  { label: "Anti-Incumbency Against DMK", pct: 74, color: "#F44336" },
  { label: "Exit Polls Credibility Lost", pct: 91, color: "#F44336" },
  { label: "TVK First-time Voter Support", pct: 78, color: "#FFC107" },
  { label: "Celebrity Politics Acceptance", pct: 79, color: "#9C27B0" },
  { label: "DMK Performance Satisfaction", pct: 23, color: "#E53935" },
  { label: "TVK Urban Performance (Cities)", pct: 64, color: "#FFC107" },
  { label: "Stalin Defeat Acceptability", pct: 71, color: "#E53935" },
  { label: "Female Voter Participation (85.76%)", pct: 85.76, color: "#E91E63" },
  { label: "Constitutional Process Satisfaction", pct: 58, color: "#FF5722" },
  { label: "New Political Era Optimism", pct: 77, color: "#4CAF50" }
];