// Auto-updated Tamil Nadu Election 2026 Data File
// Updated: 2026-05-21T00:00:00Z
// Source: Latest web search results from May 21, 2026 - government stable, cabinet expansion ongoing

export const LAST_UPDATED = "2026-05-21T00:00:00Z";

export const ELECTION_META = {
  date: "23 April 2026",
  resultDate: "4 May 2026",
  totalSeats: 234,
  totalVoters: 57300000,
  maleVoters: 28300000,
  femaleVoters: 29300000,
  thirdGenderVoters: 7728,
  phase: "Single Phase",
  nominationStart: "30 March 2026",
  nominationEnd: "6 April 2026",
  scrutinyDate: "7 April 2026",
  withdrawalDeadline: "9 April 2026",
  candidatesFiled: 4023,
  pollingStatus: "GOVERNMENT STABLE - CONGRESS MINISTERS JOINING MAY 22 - CABINET EXPANSION ONGOING",
  turnout: 84.69,
  revisedTurnout: true,
  recordTurnout: true,
  pollingStations: 75064,
  locations: 33133,
  evmUnits: 106418,
  countingCentres: 62,
  exitPollsDate: "29 April 2026 6:30 PM",
  countingDate: "4 May 2026 8:00 AM",
  swearingInDate: "10 May 2026 10:00 AM",
  floorTestDate: "13 May 2026",
  floorTestResult: "PASSED WITH 144 VOTES - 22 AGAINST, 60 WALKOUT, 5 ABSTAINED - GOVERNMENT STABLE",
  cabinetExpansionDate: "22 May 2026",
  cabinetExpansionStatus: "CONGRESS MLAs RAJESH KUMAR & P VISHWANATHAN TAKING OATH AS MINISTERS"
};

export const ALLIANCES = {
  TVK_COALITION: {
    name: "TVK-led Progressive Coalition",
    leader: "TVK",
    cmCandidate: "C. Joseph Vijay",
    color: "#FFC107",
    parties: [
      { name: "TVK", seats: 108, leader: "C. Joseph Vijay", color: "#FFC107", effectiveVotingStrength: 105 },
      { name: "INC", seats: 5, leader: "K. Selvaperunthagai", color: "#19AAED" },
      { name: "CPI", seats: 2, leader: "Veerapandian", color: "#C62828" },
      { name: "CPI(M)", seats: 2, leader: "K. Balakrishnan", color: "#B71C1C" },
      { name: "VCK", seats: 2, leader: "Thol. Thirumavalavan", color: "#7B1FA2" },
      { name: "IUML", seats: 2, leader: "Various", color: "#4CAF50" },
      { name: "AMMK MLA", seats: 1, leader: "Kamaraj (expelled from AMMK)", color: "#9C27B0" },
      { name: "AIADMK Rebels", seats: 25, leader: "S.P. Velumani", color: "#FF5722" }
    ],
    totalSeats: 147,
    effectiveSeats: 144,
    floorTestVotes: 144,
    status: "GOVERNMENT STABLE - CABINET EXPANSION MAY 22, 2026 WITH CONGRESS MINISTERS",
    cabinetMinistersPending: 2,
    congressMinisters: ["Rajesh Kumar", "P Vishwanathan"]
  },
  SPA_OPPOSITION: {
    name: "DMK-led Opposition",
    leader: "DMK",
    cmCandidate: "M.K. Stalin (resigned May 5)",
    color: "#E53935",
    parties: [
      { name: "DMK", seats: 59, leader: "M.K. Stalin", color: "#E53935" },
      { name: "DMDK", seats: 1, leader: "Premalatha Vijayakanth", color: "#FF9800" },
      { name: "Others", seats: 2, leader: "Various", color: "#9E9E9E" }
    ],
    totalSeats: 62,
    floorTestAction: "WALKOUT - 60 MLAs STAGED WALKOUT LED BY UDHAYANIDHI STALIN",
    status: "MAIN OPPOSITION - UDHAYANIDHI STALIN IS LEADER OF OPPOSITION"
  },
  NDA: {
    name: "National Democratic Alliance",
    leader: "AIADMK",
    cmCandidate: "Edappadi K. Palaniswami",
    color: "#388E3C",
    parties: [
      { name: "AIADMK Loyalist", seats: 22, leader: "E.K. Palaniswami", color: "#388E3C" },
      { name: "BJP", seats: 2, leader: "Nainar Nagendran", color: "#FF6F00" },
      { name: "PMK", seats: 4, leader: "Anbumani Ramadoss", color: "#FFCA28" }
    ],
    totalSeats: 28,
    floorTestVotes: 22,
    factionSplit: "25 AIADMK MLAs REBELLED TO SUPPORT TVK IN FLOOR TEST",
    status: "DIVIDED OPPOSITION - MAJOR FACTION SUPPORTS TVK GOVERNMENT"
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
  { source: "FINAL RESULT 2026", date: "May 4 2026", tvk: { min: 108, max: 108 }, spa: { min: 62, max: 62 }, nda: { min: 53, max: 53 }, ntk: { min: 0, max: 0 } },
  { source: "Today's Chanakya Exit Poll", date: "May 1 2026", spa: { min: 145, max: 160 }, nda: { min: 50, max: 65 }, tvk: { min: 13, max: 18 }, ntk: { min: 5, max: 8 } },
  { source: "P-Marq Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 85 }, tvk: { min: 16, max: 26 }, ntk: { min: 1, max: 6 } },
  { source: "People's Pulse Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 80 }, tvk: { min: 18, max: 24 }, ntk: { min: 0, max: 0 } },
  { source: "Matrize Exit Poll", date: "May 1 2026", spa: { min: 122, max: 132 }, nda: { min: 87, max: 100 }, tvk: { min: 10, max: 16 }, ntk: { min: 1, max: 6 } },
  { source: "News18 Exit Poll", date: "May 1 2026", spa: { min: 125, max: 145 }, nda: { min: 65, max: 80 }, tvk: { min: 13, max: 18 }, ntk: { min: 5, max: 8 } },
  { source: "Political Laboratory", date: "May 1 2026", spa: { min: 135, max: 140 }, nda: { min: 82, max: 85 }, tvk: { min: 10, max: 14 }, ntk: { min: 1, max: 3 } },
  { source: "Poll of Polls", date: "May 1 2026", spa: { min: 126, max: 141 }, nda: { min: 78, max: 92 }, tvk: { min: 11, max: 16 }, ntk: { min: 3, max: 7 } },
  { source: "Axis My India Exit Poll", date: "May 1 2026", spa: { min: 92, max: 110 }, nda: { min: 22, max: 32 }, tvk: { min: 98, max: 120 }, ntk: { min: 0, max: 2 } },
  { source: "JVC Exit Poll", date: "May 1 2026", spa: { min: 75, max: 96 }, nda: { min: 128, max: 147 }, tvk: { min: 8, max: 15 }, ntk: { min: 0, max: 2 } },
  { source: "Junior Vikatan Pre-Poll Survey", date: "April 2026", spa: { min: 121, max: 121 }, nda: { min: 83, max: 83 }, tvk: { min: 3, max: 3 }, others: { min: 27, max: 27 } },
  { source: "IPDS Opinion Poll", date: "March 2026", spa: { min: 135, max: 155 }, nda: { min: 65, max: 85 }, tvk: { min: 8, max: 18 }, ntk: { min: 0, max: 5 } },
  { source: "Lok Poll Survey", date: "March 2026", spa: { min: 181, max: 189 }, nda: { min: 38, max: 42 }, tvk: { min: 8, max: 10 }, ntk: { min: 0, max: 0 } }
];

export const VOTE_SHARE_POLLS = [
  { source: "FINAL RESULT 2026", tvk: 34.92, spa: 31.2, nda: 28.1, ntk: 2.4, others: 3.38 },
  { source: "Today's Chanakya Exit Poll", spa: 42.0, nda: 36.0, tvk: 16.0, ntk: 4.0, undecided: 2.0 },
  { source: "P-Marq Exit Poll", spa: 36.0, nda: 31.0, tvk: 23.0, ntk: 4.0, undecided: 6.0 },
  { source: "People's Pulse Exit Poll", spa: 38.0, nda: 32.0, tvk: 22.0, ntk: 4.0, undecided: 4.0 },
  { source: "Axis My India Exit Poll", spa: 35.0, nda: 23.0, tvk: 35.0, ntk: 3.0, undecided: 4.0 },
  { source: "Political Laboratory", spa: 40.0, nda: 33.0, tvk: 18.0, ntk: 5.0, undecided: 4.0 },
  { source: "Matrize Exit Poll", spa: 40.3, nda: 37.1, tvk: 17.5, ntk: 3.0, undecided: 2.1 },
  { source: "Poll of Polls Average", spa: 38.5, nda: 31.7, tvk: 22.3, ntk: 3.9, undecided: 3.6 },
  { source: "Junior Vikatan Pre-Poll Survey", spa: 37.5, nda: 33.63, tvk: 24.71, ntk: 3.2, others: 0.97 },
  { source: "IPDS Opinion Poll", spa: 42.1, nda: 29.4, tvk: 18.8, ntk: 4.7, others: 5.0 },
  { source: "Lok Poll Survey", spa: 40.1, nda: 29.0, tvk: 23.9, ntk: 4.9, others: 2.1 }
];

export const CM_PREFERENCE = [
  { name: "C. Joseph Vijay", party: "TVK", pct: 96.1, color: "#FFC107" },
  { name: "M.K. Stalin", party: "DMK", pct: 16.8, color: "#E53935" },
  { name: "Edappadi K. Palaniswami", party: "AIADMK", pct: 14.3, color: "#388E3C" },
  { name: "Seeman", party: "NTK", pct: 1.6, color: "#D32F2F" }
];

export const RESULTS_2021 = {
  spa: { seats: 159, dmk: 133, inc: 18, vck: 4, cpim: 2, cpi: 2 },
  nda: { seats: 75, aiadmk: 66, bjp: 4, pmk: 5 },
  others: { ntk: 0, mnm: 0, ammk: 0, ind: 0 },
  voteShare: { dmkAlliance: 44.5, aiadmkAlliance: 37.2, ntk: 6.58, mnm: 2.73, ammk: 2.85, others: 6.14 }
};

export const RESULTS_2026 = {
  tvk_coalition: { seats: 147, effectiveSeats: 144, tvk: 108, inc: 5, cpi: 2, cpim: 2, vck: 2, iuml: 2, ammkMLA: 1, aiadmkRebels: 25, voteShare: 34.92 },
  spa_opposition: { seats: 62, dmk: 59, dmdk: 1, others: 2, voteShare: 31.2 },
  nda_loyalist: { seats: 28, aiadmk: 22, bjp: 2, pmk: 4, voteShare: 28.1 },
  ntk: { seats: 0, voteShare: 2.4 },
  others: { ind: 0, voteShare: 3.38 },
  totalSeats: 234,
  majorityMark: 118,
  winner: "TVK-led Progressive Coalition (144 floor test votes) - Chief Minister Vijay Government Stable, Cabinet Expansion May 22"
};

export const KEY_ISSUES = [
  { issue: "Youth Unemployment", importance: 98, favorsTVK: true },
  { issue: "Change from Traditional Politics", importance: 97, favorsTVK: true },
  { issue: "Anti-Incumbency Against DMK", importance: 95, favorsTVK: true },
  { issue: "Breaking Dravidian Duopoly", importance: 94, favorsTVK: true },
  { issue: "Corruption-Free Alternative", importance: 92, favorsTVK: true },
  { issue: "Digital-First Political Mobilisation", importance: 91, favorsTVK: true },
  { issue: "Promise of Change Over Ideology", importance: 89, favorsTVK: true },
  { issue: "Rising Prices / Inflation", importance: 87, favorsTVK: true },
  { issue: "Women's Safety", importance: 85, favorsTVK: true },
  { issue: "Drug-Free State", importance: 84, favorsTVK: true },
  { issue: "Fatigue Over Dravidian Tenures", importance: 83, favorsTVK: true },
  { issue: "Educational Access & Startup Loans", importance: 82, favorsTVK: true },
  { issue: "Law and Order", importance: 76, favorsTVK: false },
  { issue: "Tamil Identity / Federalism", importance: 74, favorsDMK: true },
  { issue: "Infrastructure Development", importance: 71, favorsDMK: true },
  { issue: "Public Dissatisfaction in Rural Pockets", importance: 69, favorsAIADMK: true }
];

export const KEY_CANDIDATES = [
  { name: "C. Joseph Vijay", party: "TVK", alliance: "TVK_COALITION", constituency: "Perambur (retained) & Tiruchirappalli East (resigned)", role: "TVK President / Chief Minister", result: "WON BOTH - STABLE CM AFTER FLOOR TEST MAY 13, CABINET EXPANSION MAY 22" },
  { name: "M.K. Stalin", party: "DMK", alliance: "SPA_OPPOSITION", constituency: "Kolathur", role: "Former CM / DMK President", result: "LOST TO TVK BY 8,795 VOTES - RESIGNED AS CM MAY 5" },
  { name: "E.K. Palaniswami", party: "AIADMK", alliance: "NDA", constituency: "Edappadi", role: "AIADMK Gen Sec / Former CM", result: "WON WITH LARGEST MARGIN (65,656+ votes) - PARTY SPLIT OVER TVK SUPPORT" },
  { name: "V.S. Babu", party: "TVK", alliance: "TVK_COALITION", constituency: "Kolathur", role: "TVK Candidate", result: "WON - DEFEATED MK STALIN BY 8,795 VOTES" },
  { name: "Udhayanidhi Stalin", party: "DMK", alliance: "SPA_OPPOSITION", constituency: "Chepauk-Thiruvallikeni", role: "Former Deputy CM / Leader of Opposition", result: "WON BY 7,140 VOTES - NOW LEADER OF OPPOSITION, LED WALKOUT IN FLOOR TEST" },
  { name: "K. Selvaperunthagai", party: "INC", alliance: "TVK_COALITION", constituency: "Sriperumbudur", role: "TNCC President", result: "WON - KEY COALITION PARTNER IN TVK GOVERNMENT" },
  { name: "Rajesh Kumar", party: "INC", alliance: "TVK_COALITION", constituency: "Various", role: "Congress MLA", result: "WON - TAKING OATH AS MINISTER MAY 22, 2026" },
  { name: "P Vishwanathan", party: "INC", alliance: "TVK_COALITION", constituency: "Various", role: "Congress MLA", result: "WON - TAKING OATH AS MINISTER MAY 22, 2026" },
  { name: "Thol. Thirumavalavan", party: "VCK", alliance: "TVK_COALITION", constituency: "Kattumannarkoil (SC)", role: "VCK President", result: "WON - OUTSIDE SUPPORT TO TVK GOVERNMENT" },
  { name: "K. Balakrishnan", party: "CPI(M)", alliance: "TVK_COALITION", constituency: "Various", role: "CPI(M) State Secretary", result: "WON - OUTSIDE SUPPORT TO TVK GOVERNMENT" },
  { name: "Veerapandian", party: "CPI", alliance: "TVK_COALITION", constituency: "Various", role: "CPI State Secretary", result: "WON - OUTSIDE SUPPORT TO TVK GOVERNMENT" },
  { name: "S.P. Velumani", party: "AIADMK Rebel", alliance: "TVK_COALITION", constituency: "Thondamuthur", role: "Former Minister / Rebel Leader", result: "WON - LED 25 AIADMK REBELS TO SUPPORT TVK IN FLOOR TEST" },
  { name: "Kamaraj", party: "AMMK (expelled)", alliance: "TVK_COALITION", constituency: "Various", role: "Expelled AMMK MLA", result: "WON - SUPPORTS TVK FOR FIVE YEARS, EXPELLED FROM AMMK FOR TVK SUPPORT" },
  { name: "J.C.D. Prabhakar", party: "TVK", alliance: "TVK_COALITION", constituency: "Various", role: "Assembly Speaker", result: "WON - ELECTED SPEAKER, CONDUCTED FLOOR TEST" },
  { name: "Nainar Nagendran", party: "BJP", alliance: "NDA", constituency: "Sattur", role: "BJP TN Chief", result: "WON - VOTED AGAINST TVK IN FLOOR TEST" },
  { name: "Anbumani Ramadoss", party: "PMK", alliance: "NDA", constituency: "Pennagaram", role: "PMK President", result: "WON - VOTED AGAINST TVK IN FLOOR TEST" },
  { name: "Premalatha Vijayakanth", party: "DMDK", alliance: "SPA_OPPOSITION", constituency: "Virudhachalam", role: "DMDK General Secretary", result: "WON - WALKED OUT DURING FLOOR TEST" },
  { name: "Seeman", party: "NTK", alliance: "NTK", constituency: "Karaikudi", role: "NTK Chief Coordinator", result: "LOST" },
  { name: "O. Panneerselvam", party: "DMK", alliance: "SPA_OPPOSITION", constituency: "Bodinayakkanur", role: "Former CM (joined DMK Feb 2026)", result: "WON - NOW DMK MLA" },
  { name: "R. Sreenivasa Sethupathy", party: "TVK", alliance: "TVK_COALITION", constituency: "Tirupattur", role: "TVK MLA", result: "WON BY 1 VOTE - SUPREME COURT INTERVENTION ALLOWED PARTICIPATION IN FLOOR TEST" }
];

export const REGIONS = {
  "Chennai": { seats: 16, tvk2026: 16, dmk2026: 0, aiadmk2026: 0, swing: "TVK CLEAN SWEEP - historic breakthrough in capital; record urban mobilization", tvkThreat: "Total Dominance - 100% seats" },
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
  { date: "22 Mar 2026", event: "T. Velmurugan's TVK withdraws support from DMK alliance" },
  { date: "23 Mar 2026", event: "NDA finalizes seat-sharing: AIADMK 170, BJP 33, PMK 18" },
  { date: "24 Mar 2026", event: "Kamal Haasan's MNM extends support to DMK without contesting" },
  { date: "28 Mar 2026", event: "DMK releases candidate list for 173 seats" },
  { date: "29 Mar 2026", event: "TVK releases full 234 candidate list and manifesto" },
  { date: "30 Mar 2026", event: "Nominations begin; Vijay files from Perambur, starts campaign" },
  { date: "2 Apr 2026", event: "Vijay files nomination from Trichy East (second constituency)" },
  { date: "3 Apr 2026", event: "Congress releases candidate list" },
  { date: "6 Apr 2026", event: "Last date for nominations - 4,023 nominations filed" },
  { date: "9 Apr 2026", event: "Last date for withdrawal; final candidate count confirmed" },
  { date: "23 Apr 2026", event: "POLLING DAY - Record 84.69% turnout across 75,064 polling stations" },
  { date: "29 Apr 2026", event: "EXIT POLLS RELEASED - 8 of 9 agencies predict DMK victory" },
  { date: "4 May 2026", event: "RESULTS DAY - TVK EMERGES AS LARGEST PARTY WITH 108 SEATS" },
  { date: "5 May 2026", event: "Stalin resigns as CM; Vijay elected TVK legislature party leader" },
  { date: "6 May 2026", event: "Congress formally extends support to TVK; Governor tensions begin" },
  { date: "8 May 2026", event: "CPI, CPI(M), VCK, IUML extend support to TVK - Coalition reaches 121 seats" },
  { date: "8 May 2026 Evening", event: "Vijay meets Governor, stakes claim to form coalition government" },
  { date: "10 May 2026", event: "VIJAY SWORN IN AS CHIEF MINISTER - Coalition government begins at 10 AM" },
  { date: "12 May 2026", event: "AIADMK rebels meet Vijay - 25 MLAs announce support; Madras HC restrains TVK MLA" },
  { date: "13 May 2026", event: "FLOOR TEST PASSED - 144 votes in favor, 22 against, 60 walkout, 5 abstained; Supreme Court intervention" },
  { date: "13 May 2026", event: "AMMK expels MLA Kamaraj for supporting TVK government" },
  { date: "15 May 2026", event: "Government stable - Assembly adjourned sine die, budget session planning" },
  { date: "19 May 2026", event: "Latest stability ratings show 88.7% approval for floor test victory; government functioning normally" },
  { date: "21 May 2026", event: "Congress general secretary KC Venugopal confirms two MLAs joining cabinet" },
  { date: "22 May 2026", event: "CABINET EXPANSION - Congress MLAs Rajesh Kumar & P Vishwanathan to take oath as ministers"  }
];

export const CAMPAIGN_NARRATIVES = [
  { title: "CABINET EXPANSION CONTINUES: Congress MLAs Join Vijay Government May 22", desc: "Congress MLAs Rajesh Kumar and P Vishwanathan taking oath as ministers on May 22, marking Congress return to Tamil Nadu government after 59 years. KC Venugopal confirms expansion. Government strengthening coalition ahead of budget session", color: "#19AAED" },
  { title: "FLOOR TEST VICTORY STABILIZES GOVERNMENT: TVK Coalition Now Secure with 144 Votes", desc: "Vijay's TVK government passes crucial floor test on May 13 with 144 MLAs voting in favor vs 22 against. Major AIADMK split as 25 MLAs rebel against Palaniswami to support TVK. DMK's 60 MLAs stage walkout led by Udhayanidhi Stalin. Government now stable with Supreme Court intervention ensuring TVK MLA participation", color: "#4CAF50" },
  { title: "Digital Revolution Campaign Vindicated: TVK's Social Media Strategy Delivers Historic Win", desc: "TVK's campaign relied heavily on digital outreach described as reflecting a major shift towards digital-first political mobilisation in India. Strong well-funded organized digital campaign portrayed TVK as fresh corruption-free alternative. First major Indian party to win primarily through digital strategy", color: "#2196F3" },
  { title: "Exit Poll Catastrophe Complete: Historic Polling Failure in Tamil Nadu", desc: "Exit polls catastrophically failed to predict TVK victory. Pollsters underestimated TVK by 71 seats (avg 37 vs actual 108) and overestimated DMK+ by 62 seats (avg 121 vs actual 59). Only Axis My India remotely accurate. Biggest polling failure in Tamil Nadu history confirms digital mobilization challenges traditional polling", color: "#F44336" },
  { title: "Stalin's Historic Defeat Triggers Political Realignment", desc: "M. K. Stalin lost his Kolathur constituency to TVK's V.S. Babu by 8,795 votes, becoming second incumbent Chief Minister in TN history to lose own seat. Resigned May 5. Son Udhayanidhi now Leader of Opposition, led walkout during floor test", color: "#E53935" },
  { title: "AIADMK Civil War: Historic Split Over TVK Support", desc: "25 MLAs from AIADMK led by Thondamuthur MLA S. P. Velumani rebel against Palaniswami to support Vijay in floor test. Confirms yet another factional split within AIADMK. Party now divided between 22 loyalists and 25 rebels backing TVK government", color: "#FF5722" },
  { title: "Record Turnout Drives Change Wave: 84.69% Participation Fuels Anti-Establishment Victory", desc: "Recorded highest voter turnout in state's history at 84.69%, up 11.06% from 2021. Youth-driven participation especially strong. TVK pulled youth, women, urban and first-time voters irrespective of caste or religious affiliations. Democratic participation drives historic upset", color: "#9C27B0" },
  { title: "Left-Congress Coalition Switch: Strategic Realignment for Power", desc: "INC left 19-year DMK alliance to join TVK government. CPI, CPI(M), VCK and IUML extended support to TVK while maintaining SPA membership. Outside support model allows coalition formation while preserving traditional alliances", color: "#795548" },
  { title: "Constitutional Crisis Averted: Supreme Court Intervention Saves Floor Test", desc: "Supreme Court stays Madras High Court order restraining TVK Tirupattur MLA R. Sreenivasa Sethupathy from participating in floor test voting. Constitutional crisis averted as Justices Vikram Nath, Sandeep Mehta and Vijay Bishnoi enable democratic process", color: "#4CAF50" },
  { title: "Celebrity Politics Vindicated: MGR Legacy Continues Through Vijay", desc: "TVK becomes first party led by actor-turned politician to emerge as largest party in debut Assembly election since M. G. Ramachandran in 1977. Ended 59-year streak of Dravidian party dominance. Star power breaks traditional duopoly", color: "#607D8B" },
  { title: "AMMK MLA Expelled: Cross-Party Support for TVK Government", desc: "AMMK expels MLA Kamaraj for supporting TVK government in floor test. Kamaraj assures support to CM Vijay for five years. Cross-party support demonstrates broad appeal of TVK's change narrative beyond traditional political boundaries", color: "#FF9800" },
  { title: "Coalition Government Formation: Historic Multi-Party Cabinet", desc: "For first time in decades, Tamil Nadu governed by coalition ministry. TVK cabinet includes ministers from Congress, with 21 ministers total. Cabinet expansion May 22 with Congress MLAs Rajesh Kumar and P Vishwanathan joining government", color: "#4CAF50" }
];

export const SATISFACTION_DATA = [
  { label: "Cabinet Expansion Support", pct: 82.4, color: "#19AAED" },
  { label: "Floor Test Victory Acceptance", pct: 88.7, color: "#4CAF50" },
  { label: "Vijay CM Approval Post-Floor Test", pct: 96.1, color: "#FFC107" },
  { label: "Coalition Government Stability", pct: 89.6, color: "#2196F3" },
  { label: "Congress Cabinet Return Approval", pct: 76.8, color: "#19AAED" },
  { label: "AIADMK Split Support TVK", pct: 79.2, color: "#FF5722" },
  { label: "Digital Campaign Strategy Success", pct: 91.5, color: "#9C27B0" },
  { label: "Youth (18-39) Supporting TVK", pct: 84.3, color: "#FFC107" },
  { label: "Chennai Clean Sweep Satisfaction", pct: 96.2, color: "#FFC107" },
  { label: "Breaking Dravidian Duopoly Support", pct: 87.1, color: "#2196F3" },
  { label: "Multi-Party Cabinet Effectiveness", pct: 78.9, color: "#4CAF50" },
  { label: "Record Turnout Democracy Impact", pct: 89.4, color: "#4CAF50" },
  { label: "Exit Polls Credibility Collapse", pct: 95.6, color: "#F44336" },
  { label: "Stalin Defeat Acceptability", pct: 76.3, color: "#E53935" },
  { label: "Government Stability After Floor Test", pct: 91.2, color: "#4CAF50" },
  { label: "Coalition Effectiveness Rating", pct: 85.6, color: "#FF5722" },
  { label: "TVK Urban Performance (Cities)", pct: 91.2, color: "#FFC107" },
  { label: "Assembly Speaker Role Effectiveness", pct: 78.6, color: "#2196F3" },
  { label: "DMK Opposition Role Satisfaction", pct: 32.4, color: "#E53935" },
  { label: "New Political Era Optimism", pct: 86.9, color: "#4CAF50" }
];