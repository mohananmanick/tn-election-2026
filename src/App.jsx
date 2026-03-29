import { useState, useMemo, useEffect } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, LineChart, Line, CartesianGrid, AreaChart, Area } from "recharts";

// ─── REAL DATA FROM WEB RESEARCH (as of 29 March 2026) ─────────────────────

const ELECTION_META = {
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
};

const ALLIANCES = {
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
      { name: "AIADMK", seats: 169, leader: "E.K. Palaniswami", color: "#388E3C" },
      { name: "BJP", seats: 27, leader: "Nainar Nagendran", color: "#FF6F00" },
      { name: "PMK", seats: 18, leader: "Anbumani Ramadoss", color: "#FFCA28" },
      { name: "AMMK", seats: 11, leader: "TTV Dhinakaran", color: "#1565C0" },
      { name: "TMC(M)", seats: 5, leader: "G.K. Vasan", color: "#5C6BC0" },
      { name: "IJK", seats: 2, leader: "T.R. Paarivendhar", color: "#8D6E63" },
      { name: "TMMK", seats: 2, leader: "B. John Pandian", color: "#78909C" },
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

const OPINION_POLLS = [
  { source: "Vote Vibe / News18", date: "Mar 2026", spa: { min: 113, max: 123 }, nda: { min: 106, max: 116 }, tvk: { min: 2, max: 8 }, ntk: { min: 0, max: 3 } },
  { source: "Matrize", date: "Mar 2026", spa: { min: 104, max: 114 }, nda: { min: 114, max: 127 }, tvk: { min: 6, max: 12 }, ntk: { min: 1, max: 6 } },
  { source: "Agni News", date: "Jul 2025", spa: { min: 155, max: 170 }, nda: { min: 60, max: 75 }, tvk: { min: 0, max: 5 }, ntk: { min: 0, max: 3 } },
  { source: "Parawheel", date: "Mar 2026", spa: { min: 95, max: 110 }, nda: { min: 85, max: 100 }, tvk: { min: 25, max: 40 }, ntk: { min: 3, max: 8 } },
  { source: "Shining India Survey", date: "Mar 2026", spa: { min: 100, max: 115 }, nda: { min: 110, max: 125 }, tvk: { min: 5, max: 15 }, ntk: { min: 1, max: 5 } },
];

const VOTE_SHARE_POLLS = [
  { source: "Shining India", spa: 36.1, nda: 37.5, tvk: 16.3, ntk: 3.2, undecided: 6.9 },
  { source: "Parawheel", spa: 25.3, nda: 22.8, tvk: 24.7, ntk: 8.0, undecided: 19.2 },
  { source: "DMK Internal (TVK solo)", spa: 45, nda: 22, tvk: 23, ntk: 5, undecided: 5 },
  { source: "TVK Internal", spa: 30, nda: 22, tvk: 30, ntk: 8, undecided: 10 },
];

const CM_PREFERENCE = [
  { name: "M.K. Stalin", party: "DMK", pct: 39.9, color: "#E53935" },
  { name: "E.K. Palaniswami", party: "AIADMK", pct: 37.5, color: "#388E3C" },
  { name: "Vijay", party: "TVK", pct: 14.7, color: "#FFC107" },
  { name: "Others", party: "Others", pct: 7.9, color: "#9E9E9E" },
];

const RESULTS_2021 = {
  spa: { seats: 159, dmk: 133, inc: 18, vck: 4, cpim: 2, cpi: 2 },
  nda: { seats: 75, aiadmk: 66, bjp: 4, pmk: 5 },
  others: { ntk: 0, mnm: 0, ammk: 0, ind: 0 },
  voteShare: { dmkAlliance: 44.5, aiadmkAlliance: 37.2, ntk: 6.58, mnm: 2.73, ammk: 2.85, others: 6.14 },
};

const KEY_ISSUES = [
  { issue: "Welfare Schemes", importance: 92, favorsDMK: true },
  { issue: "Corruption Allegations", importance: 88, favorsDMK: false },
  { issue: "Women's Safety", importance: 85, favorsDMK: false },
  { issue: "Unemployment", importance: 82, favorsDMK: false },
  { issue: "Rising Prices / Inflation", importance: 80, favorsDMK: false },
  { issue: "State Debt Crisis", importance: 75, favorsDMK: false },
  { issue: "NEET / Education", importance: 72, favorsDMK: true },
  { issue: "Tamil Identity / Federalism", importance: 68, favorsDMK: true },
  { issue: "Drug Menace", importance: 65, favorsDMK: false },
  { issue: "Unfulfilled Promises", importance: 60, favorsDMK: false },
];

const KEY_CANDIDATES = [
  { name: "M.K. Stalin", party: "DMK", alliance: "SPA", constituency: "Kolathur", role: "CM / DMK President" },
  { name: "Udhayanidhi Stalin", party: "DMK", alliance: "SPA", constituency: "Chepauk-Thiruvallikeni", role: "Deputy CM" },
  { name: "V. Senthil Balaji", party: "DMK", alliance: "SPA", constituency: "Coimbatore South", role: "DMK Leader" },
  { name: "O. Panneerselvam", party: "DMK", alliance: "SPA", constituency: "Bodinayakkanur", role: "Former CM (joined DMK)" },
  { name: "Ma. Subramanian", party: "DMK", alliance: "SPA", constituency: "Saidapet", role: "Health Minister" },
  { name: "E.K. Palaniswami", party: "AIADMK", alliance: "NDA", constituency: "Edappadi", role: "AIADMK Gen Sec / CM Candidate" },
  { name: "Tamilisai Soundararajan", party: "BJP", alliance: "NDA", constituency: "Mylapore", role: "BJP Leader" },
  { name: "Nainar Nagendran", party: "BJP", alliance: "NDA", constituency: "Sattur", role: "BJP TN Chief" },
  { name: "Anbumani Ramadoss", party: "PMK", alliance: "NDA", constituency: "Pennagaram", role: "PMK President" },
  { name: "TTV Dhinakaran", party: "AMMK", alliance: "NDA", constituency: "Kovilpatti", role: "AMMK Gen Sec" },
  { name: "Vijay", party: "TVK", alliance: "TVK", constituency: "Perambur (likely)", role: "TVK President / CM Candidate" },
  { name: "Seeman", party: "NTK", alliance: "NTK", constituency: "Thiruvottiyur", role: "NTK Chief Coordinator" },
  { name: "Thol. Thirumavalavan", party: "VCK", alliance: "SPA", constituency: "Kattumannarkoil (SC)", role: "VCK President" },
  { name: "Vaiko", party: "MDMK", alliance: "SPA", constituency: "TBD", role: "MDMK Leader" },
  { name: "Premalatha Vijayakanth", party: "DMDK", alliance: "SPA", constituency: "TBD", role: "DMDK Leader" },
];

const DISTRICTS = [
  "Chennai","Tiruvallur","Kancheepuram","Chengalpattu","Vellore","Ranipet","Tirupattur","Krishnagiri",
  "Dharmapuri","Salem","Namakkal","Erode","Tiruppur","Coimbatore","The Nilgiris","Dindigul","Karur",
  "Tiruchirappalli","Perambalur","Ariyalur","Cuddalore","Villupuram","Kallakurichi","Tiruvannamalai",
  "Thanjavur","Tiruvarur","Nagapattinam","Mayiladuthurai","Pudukkottai","Sivaganga","Madurai","Theni",
  "Virudhunagar","Ramanathapuram","Thoothukudi","Tenkasi","Tirunelveli","Kanyakumari"
];

// Representative constituency data for all 234 seats grouped by region
const REGIONS = {
  "Chennai": { seats: 16, dmk2021: 16, aiadmk2021: 0, swing: "DMK stronghold", tvkThreat: "High" },
  "North Tamil Nadu": { seats: 38, dmk2021: 30, aiadmk2021: 8, swing: "DMK leaning", tvkThreat: "High" },
  "Western Tamil Nadu": { seats: 42, dmk2021: 24, aiadmk2021: 18, swing: "Competitive", tvkThreat: "Medium" },
  "Central Tamil Nadu": { seats: 32, dmk2021: 22, aiadmk2021: 10, swing: "DMK leaning", tvkThreat: "Medium" },
  "Cauvery Delta": { seats: 28, dmk2021: 22, aiadmk2021: 6, swing: "DMK stronghold", tvkThreat: "High" },
  "Southern Tamil Nadu": { seats: 48, dmk2021: 28, aiadmk2021: 20, swing: "Competitive", tvkThreat: "Low" },
  "Kongu Belt": { seats: 30, dmk2021: 15, aiadmk2021: 15, swing: "AIADMK leaning", tvkThreat: "Low" },
};

const TIMELINE = [
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
  { date: "18 Mar 2026", event: "Vijay rejects NDA alliance offer" },
  { date: "23 Mar 2026", event: "NDA finalizes seat-sharing" },
  { date: "24 Mar 2026", event: "AIADMK releases manifesto; MNM gives outside support to SPA" },
  { date: "28 Mar 2026", event: "DMK finalizes seat-sharing: 164 + 70 allies" },
  { date: "29 Mar 2026", event: "TVK expected to release full 234 candidate list" },
  { date: "30 Mar 2026", event: "Nominations begin" },
  { date: "23 Apr 2026", event: "POLLING DAY" },
  { date: "4 May 2026", event: "RESULTS DAY" },
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const TABS = ["Overview", "Alliances", "Polls & Surveys", "Constituencies", "Key Candidates", "Issues & Trends", "Timeline"];

const allianceColors = { SPA: "#E53935", NDA: "#388E3C", TVK: "#FFC107", NTK: "#D32F2F", Others: "#9E9E9E" };

function StatCard({ label, value, sub, accent }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 14,
      padding: "18px 20px",
      minWidth: 150,
      flex: "1 1 150px",
      borderTop: `3px solid ${accent || "#666"}`,
    }}>
      <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: "#777", marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

function SectionTitle({ children, sub }) {
  return (
    <div style={{ marginBottom: 20, marginTop: 10 }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: "#fff", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>{children}</h2>
      {sub && <p style={{ fontSize: 13, color: "#888", margin: "4px 0 0" }}>{sub}</p>}
    </div>
  );
}

function Badge({ color, children }) {
  return (
    <span style={{
      display: "inline-block",
      background: color + "22",
      color: color,
      padding: "3px 10px",
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 700,
      border: `1px solid ${color}44`,
    }}>{children}</span>
  );
}

// ─── MAIN APP ───────────────────────────────────────────────────────────────

export default function App() {
  const [tab, setTab] = useState("Overview");
  const [regionFilter, setRegionFilter] = useState("All");
  const [allianceFilter, setAllianceFilter] = useState("All");
  const [searchCandidate, setSearchCandidate] = useState("");

  const filteredCandidates = useMemo(() => {
    let c = KEY_CANDIDATES;
    if (allianceFilter !== "All") c = c.filter(x => x.alliance === allianceFilter);
    if (searchCandidate) c = c.filter(x => x.name.toLowerCase().includes(searchCandidate.toLowerCase()) || x.constituency.toLowerCase().includes(searchCandidate.toLowerCase()));
    return c;
  }, [allianceFilter, searchCandidate]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#eee",
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      overflow: "auto",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=DM+Mono&display=swap" rel="stylesheet" />

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #1a0a2e 0%, #0d1117 50%, #0a1628 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 24px 18px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00e676", boxShadow: "0 0 8px #00e676" }} />
            <span style={{ fontSize: 11, color: "#00e676", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Live Election Tracker</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 4px", background: "linear-gradient(90deg, #fff, #ccc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Tamil Nadu 2026 Election Dashboard
          </h1>
          <p style={{ fontSize: 14, color: "#888", margin: 0 }}>
            234 Constituencies &middot; Polling: 23 April &middot; Results: 4 May &middot; Data as of 29 March 2026
          </p>

          {/* TABS */}
          <div style={{ display: "flex", gap: 4, marginTop: 18, flexWrap: "wrap" }}>
            {TABS.map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: "none",
                  background: tab === t ? "rgba(255,255,255,0.12)" : "transparent",
                  color: tab === t ? "#fff" : "#777",
                  fontSize: 13,
                  fontWeight: tab === t ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "inherit",
                }}
              >{t}</button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px" }}>

        {/* OVERVIEW */}
        {tab === "Overview" && (
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
              <StatCard label="Total Seats" value="234" accent="#fff" />
              <StatCard label="Eligible Voters" value="5.67 Cr" sub="28.9M female / 27.7M male" accent="#19AAED" />
              <StatCard label="Polling Date" value="23 Apr" sub="Single Phase" accent="#00e676" />
              <StatCard label="Major Alliances" value="4" sub="SPA · NDA · TVK · NTK" accent="#FFC107" />
            </div>

            <SectionTitle sub="Based on 2021 results & 2026 alliance changes">2021 Results vs 2026 Landscape</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, marginBottom: 28 }}>
              {/* 2021 Results Pie */}
              <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 style={{ fontSize: 14, color: "#aaa", marginBottom: 12, fontWeight: 700 }}>2021 Seat Results</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={[
                      { name: "DMK+", value: 159, fill: "#E53935" },
                      { name: "AIADMK+", value: 75, fill: "#388E3C" },
                    ]} dataKey="value" cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3}>
                    </Pie>
                    <Tooltip contentStyle={{ background: "#1a1a2e", border: "1px solid #333", borderRadius: 8, color: "#fff" }} />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ display: "flex", justifyContent: "center", gap: 20, fontSize: 13 }}>
                  <span><span style={{ color: "#E53935", fontWeight: 800 }}>159</span> SPA</span>
                  <span><span style={{ color: "#388E3C", fontWeight: 800 }}>75</span> NDA</span>
                </div>
              </div>

              {/* 2026 Prediction Range */}
              <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 style={{ fontSize: 14, color: "#aaa", marginBottom: 12, fontWeight: 700 }}>2026 Poll Average Seat Range</h3>
                {[
                  { name: "SPA (DMK+)", min: 104, max: 123, color: "#E53935" },
                  { name: "NDA (AIADMK+)", min: 106, max: 127, color: "#388E3C" },
                  { name: "TVK", min: 2, max: 40, color: "#FFC107" },
                  { name: "NTK", min: 0, max: 8, color: "#D32F2F" },
                ].map(a => (
                  <div key={a.name} style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#bbb", marginBottom: 4 }}>
                      <span style={{ fontWeight: 700 }}>{a.name}</span>
                      <span>{a.min}–{a.max} seats</span>
                    </div>
                    <div style={{ height: 10, background: "rgba(255,255,255,0.06)", borderRadius: 5, position: "relative", overflow: "hidden" }}>
                      <div style={{
                        position: "absolute",
                        left: `${(a.min / 234) * 100}%`,
                        width: `${((a.max - a.min) / 234) * 100}%`,
                        height: "100%",
                        background: a.color,
                        borderRadius: 5,
                        opacity: 0.8,
                      }} />
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: "1px dashed rgba(255,255,255,0.1)", paddingTop: 8, marginTop: 8, fontSize: 11, color: "#666" }}>
                  Majority mark: 118 seats &middot; Ranges from 5 surveys
                </div>
              </div>
            </div>

            {/* CM Preference */}
            <SectionTitle sub="Vote Vibe / News18 Survey, March 2026">Preferred Chief Minister</SectionTitle>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
              {CM_PREFERENCE.map(c => (
                <div key={c.name} style={{
                  flex: "1 1 120px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 14,
                  padding: "16px 18px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: `4px solid ${c.color}`,
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: 30, fontWeight: 800, color: c.color }}>{c.pct}%</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginTop: 4 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "#888" }}>{c.party}</div>
                </div>
              ))}
            </div>

            {/* Quick Key Issues */}
            <SectionTitle sub="Dominant themes shaping voter sentiment">Top Election Issues</SectionTitle>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {KEY_ISSUES.slice(0, 6).map(i => (
                <div key={i.issue} style={{
                  background: i.favorsDMK ? "rgba(229,57,53,0.1)" : "rgba(56,142,60,0.1)",
                  border: `1px solid ${i.favorsDMK ? "rgba(229,57,53,0.2)" : "rgba(56,142,60,0.2)"}`,
                  borderRadius: 10,
                  padding: "10px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#ddd",
                }}>
                  {i.issue} <span style={{ color: "#888", fontSize: 11 }}>({i.importance}%)</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ALLIANCES */}
        {tab === "Alliances" && (
          <div>
            {Object.entries(ALLIANCES).map(([key, a]) => (
              <div key={key} style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: 14,
                padding: 24,
                marginBottom: 20,
                border: `1px solid rgba(255,255,255,0.06)`,
                borderLeft: `5px solid ${allianceColors[key]}`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: 0 }}>{a.name}</h3>
                    <p style={{ fontSize: 13, color: "#888", margin: "4px 0 0" }}>CM Candidate: <strong style={{ color: allianceColors[key] }}>{a.cmCandidate}</strong></p>
                  </div>
                  <Badge color={allianceColors[key]}>{a.parties.length} {a.parties.length > 1 ? "parties" : "party"}</Badge>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                  {a.parties.map(p => (
                    <div key={p.name} style={{
                      background: p.color + "18",
                      borderRadius: 10,
                      padding: "10px 14px",
                      border: `1px solid ${p.color}33`,
                      minWidth: 100,
                    }}>
                      <div style={{ fontSize: 15, fontWeight: 800, color: p.color }}>{p.name}</div>
                      <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{p.seats}</div>
                      <div style={{ fontSize: 11, color: "#888" }}>seats &middot; {p.leader}</div>
                    </div>
                  ))}
                </div>

                {a.support && (
                  <div style={{ marginTop: 12, fontSize: 12, color: "#777" }}>
                    Outside support: {a.support.join(", ")}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* POLLS & SURVEYS */}
        {tab === "Polls & Surveys" && (
          <div>
            <SectionTitle sub="Multiple agencies — seat projections & vote share estimates">Pre-Poll Survey Comparisons</SectionTitle>

            {/* Seat projections chart */}
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 20, marginBottom: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 style={{ fontSize: 14, color: "#aaa", marginBottom: 16, fontWeight: 700 }}>Seat Projections (Mid-point)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={OPINION_POLLS.map(p => ({
                  source: p.source.split("/")[0].trim(),
                  SPA: Math.round((p.spa.min + p.spa.max) / 2),
                  NDA: Math.round((p.nda.min + p.nda.max) / 2),
                  TVK: Math.round((p.tvk.min + p.tvk.max) / 2),
                  NTK: Math.round((p.ntk.min + p.ntk.max) / 2),
                }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="source" tick={{ fill: "#999", fontSize: 11 }} />
                  <YAxis tick={{ fill: "#999", fontSize: 11 }} />
                  <Tooltip contentStyle={{ background: "#1a1a2e", border: "1px solid #333", borderRadius: 8, color: "#fff" }} />
                  <Legend />
                  <Bar dataKey="SPA" fill="#E53935" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="NDA" fill="#388E3C" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="TVK" fill="#FFC107" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="NTK" fill="#D32F2F" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Vote share comparison */}
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 20, marginBottom: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 style={{ fontSize: 14, color: "#aaa", marginBottom: 16, fontWeight: 700 }}>Vote Share Estimates (%)</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={VOTE_SHARE_POLLS} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis type="number" tick={{ fill: "#999", fontSize: 11 }} domain={[0, 50]} />
                  <YAxis type="category" dataKey="source" tick={{ fill: "#999", fontSize: 10 }} width={120} />
                  <Tooltip contentStyle={{ background: "#1a1a2e", border: "1px solid #333", borderRadius: 8, color: "#fff" }} />
                  <Legend />
                  <Bar dataKey="spa" name="SPA" fill="#E53935" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="nda" name="NDA" fill="#388E3C" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="tvk" name="TVK" fill="#FFC107" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="ntk" name="NTK" fill="#D32F2F" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Detailed poll table */}
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 20, border: "1px solid rgba(255,255,255,0.06)", overflowX: "auto" }}>
              <h3 style={{ fontSize: 14, color: "#aaa", marginBottom: 16, fontWeight: 700 }}>Survey Details (Seat Range)</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    {["Survey", "Date", "SPA", "NDA", "TVK", "NTK"].map(h => (
                      <th key={h} style={{ textAlign: "left", padding: "8px 12px", color: "#888", fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {OPINION_POLLS.map(p => (
                    <tr key={p.source} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <td style={{ padding: "10px 12px", color: "#ddd", fontWeight: 600 }}>{p.source}</td>
                      <td style={{ padding: "10px 12px", color: "#888" }}>{p.date}</td>
                      <td style={{ padding: "10px 12px", color: "#E53935", fontWeight: 700 }}>{p.spa.min}–{p.spa.max}</td>
                      <td style={{ padding: "10px 12px", color: "#388E3C", fontWeight: 700 }}>{p.nda.min}–{p.nda.max}</td>
                      <td style={{ padding: "10px 12px", color: "#FFC107", fontWeight: 700 }}>{p.tvk.min}–{p.tvk.max}</td>
                      <td style={{ padding: "10px 12px", color: "#D32F2F", fontWeight: 700 }}>{p.ntk.min}–{p.ntk.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CONSTITUENCIES */}
        {tab === "Constituencies" && (
          <div>
            <SectionTitle sub="Regional breakdown of 234 constituencies">Constituency Analysis by Region</SectionTitle>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {["All", ...Object.keys(REGIONS)].map(r => (
                <button key={r} onClick={() => setRegionFilter(r)} style={{
                  padding: "6px 14px", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer",
                  background: regionFilter === r ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.04)",
                  color: regionFilter === r ? "#fff" : "#888",
                  fontFamily: "inherit",
                }}>{r}</button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 14 }}>
              {Object.entries(REGIONS)
                .filter(([k]) => regionFilter === "All" || k === regionFilter)
                .map(([region, data]) => (
                <div key={region} style={{
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 14,
                  padding: 20,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", margin: 0 }}>{region}</h3>
                    <Badge color={data.swing.includes("DMK") ? "#E53935" : data.swing.includes("AIADMK") ? "#388E3C" : "#FFC107"}>
                      {data.swing}
                    </Badge>
                  </div>

                  <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#888" }}>Total Seats</div>
                      <div style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>{data.seats}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "#888" }}>DMK 2021</div>
                      <div style={{ fontSize: 24, fontWeight: 800, color: "#E53935" }}>{data.dmk2021}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "#888" }}>AIADMK 2021</div>
                      <div style={{ fontSize: 24, fontWeight: 800, color: "#388E3C" }}>{data.aiadmk2021}</div>
                    </div>
                  </div>

                  {/* Seat bar */}
                  <div style={{ height: 14, background: "rgba(255,255,255,0.06)", borderRadius: 7, display: "flex", overflow: "hidden", marginBottom: 8 }}>
                    <div style={{ width: `${(data.dmk2021 / data.seats) * 100}%`, background: "#E53935", transition: "width 0.5s" }} />
                    <div style={{ width: `${(data.aiadmk2021 / data.seats) * 100}%`, background: "#388E3C", transition: "width 0.5s" }} />
                    <div style={{ flex: 1, background: "rgba(255,255,255,0.08)" }} />
                  </div>

                  <div style={{ fontSize: 12, color: "#888", display: "flex", justifyContent: "space-between" }}>
                    <span>TVK Threat: <strong style={{ color: data.tvkThreat === "High" ? "#FFC107" : data.tvkThreat === "Medium" ? "#FF9800" : "#666" }}>{data.tvkThreat}</strong></span>
                    <span>Others: {data.seats - data.dmk2021 - data.aiadmk2021}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 2021 vs 2026 comparison */}
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 20, marginTop: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 style={{ fontSize: 14, color: "#aaa", marginBottom: 16, fontWeight: 700 }}>2021 Vote Share Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={[
                    { name: "DMK Alliance", value: 44.5, fill: "#E53935" },
                    { name: "AIADMK Alliance", value: 37.2, fill: "#388E3C" },
                    { name: "NTK", value: 6.58, fill: "#D32F2F" },
                    { name: "AMMK", value: 2.85, fill: "#1565C0" },
                    { name: "MNM", value: 2.73, fill: "#9C27B0" },
                    { name: "Others", value: 6.14, fill: "#666" },
                  ]} dataKey="value" cx="50%" cy="50%" outerRadius={90} label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={{ stroke: "#555" }}>
                  </Pie>
                  <Tooltip contentStyle={{ background: "#1a1a2e", border: "1px solid #333", borderRadius: 8, color: "#fff" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* KEY CANDIDATES */}
        {tab === "Key Candidates" && (
          <div>
            <SectionTitle sub="Major candidates across all alliances">Key Candidates & Constituencies</SectionTitle>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {["All", "SPA", "NDA", "TVK", "NTK"].map(a => (
                <button key={a} onClick={() => setAllianceFilter(a)} style={{
                  padding: "6px 14px", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer",
                  background: allianceFilter === a ? allianceColors[a] + "33" : "rgba(255,255,255,0.04)",
                  color: allianceFilter === a ? (allianceColors[a] || "#fff") : "#888",
                  fontFamily: "inherit",
                }}>{a}</button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Search candidate or constituency..."
              value={searchCandidate}
              onChange={e => setSearchCandidate(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 16px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                color: "#fff",
                fontSize: 14,
                marginBottom: 16,
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
              {filteredCandidates.map(c => (
                <div key={c.name + c.constituency} style={{
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 12,
                  padding: 16,
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: `4px solid ${allianceColors[c.alliance] || "#666"}`,
                }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: allianceColors[c.alliance], fontWeight: 700, marginTop: 2 }}>{c.party} ({c.alliance})</div>
                  <div style={{ fontSize: 13, color: "#aaa", marginTop: 6 }}>
                    <span style={{ fontWeight: 600, color: "#ddd" }}>{c.constituency}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#666", marginTop: 4 }}>{c.role}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ISSUES & TRENDS */}
        {tab === "Issues & Trends" && (
          <div>
            <SectionTitle sub="What's driving voter sentiment in 2026">Key Election Issues</SectionTitle>

            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 20, marginBottom: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={KEY_ISSUES} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis type="number" tick={{ fill: "#999", fontSize: 11 }} domain={[0, 100]} />
                  <YAxis type="category" dataKey="issue" tick={{ fill: "#ccc", fontSize: 11 }} width={160} />
                  <Tooltip contentStyle={{ background: "#1a1a2e", border: "1px solid #333", borderRadius: 8, color: "#fff" }} />
                  <Bar dataKey="importance" name="Voter Importance %" radius={[0, 6, 6, 0]}>
                    {KEY_ISSUES.map((e, i) => (
                      <Cell key={i} fill={e.favorsDMK ? "#E53935" : "#388E3C"} opacity={0.8} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div style={{ display: "flex", gap: 20, justifyContent: "center", fontSize: 12, marginTop: 8 }}>
                <span><span style={{ display: "inline-block", width: 12, height: 12, borderRadius: 3, background: "#E53935", marginRight: 6, verticalAlign: "middle" }} />Favors DMK</span>
                <span><span style={{ display: "inline-block", width: 12, height: 12, borderRadius: 3, background: "#388E3C", marginRight: 6, verticalAlign: "middle" }} />Favors Opposition</span>
              </div>
            </div>

            {/* Key Talking Points */}
            <SectionTitle sub="Major campaign narratives">Campaign Narratives</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
              {[
                { title: "DMK's Welfare Push", desc: "₹1,000/month women's aid, Kalaignar Magalir Urimai Thogai scheme, free bus for women, breakfast scheme — banking on visible welfare delivery", color: "#E53935" },
                { title: "AIADMK Manifesto Promises", desc: "₹2,000/month for women, ₹10,000 relief/family, pension hike, free refrigerators & LPG, waiver of education & crop loans", color: "#388E3C" },
                { title: "TVK's Anti-Corruption Drive", desc: "Vijay positions TVK as clean alternative, attacks DMK on 'scientific corruption,' targets youth disillusionment with Dravidian parties", color: "#FFC107" },
                { title: "State Debt Crisis", desc: "Debt nearly doubled from ₹4.85L Cr (2021) to ₹10L Cr (2026). AIADMK calls it a 'debt trap.' Fiscal sustainability questioned by economists", color: "#FF5722" },
                { title: "Women's Safety Concerns", desc: "Disturbing incidents involving schoolgirls triggered outrage. Opposition attacks DMK on law & order; BJP links to rising drug menace", color: "#9C27B0" },
                { title: "Unfulfilled Promises", desc: "NEET not scrapped, Old Pension not restored, education loans not waived, 2L govt vacancies unfilled, monthly billing not implemented", color: "#795548" },
              ].map(n => (
                <div key={n.title} style={{
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 12,
                  padding: 18,
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderTop: `3px solid ${n.color}`,
                }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 6 }}>{n.title}</div>
                  <div style={{ fontSize: 12, color: "#999", lineHeight: 1.5 }}>{n.desc}</div>
                </div>
              ))}
            </div>

            {/* Anti-incumbency data */}
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 20, marginTop: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 style={{ fontSize: 14, color: "#aaa", marginBottom: 16, fontWeight: 700 }}>Voter Satisfaction / Anti-Incumbency</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
                {[
                  { label: "Satisfied with DMK Govt", pct: 49, color: "#E53935" },
                  { label: "High Anti-Incumbency", pct: 41, color: "#FF5722" },
                  { label: "Want DMK to Continue", pct: 45, color: "#E53935" },
                  { label: "Want Change", pct: 48, color: "#388E3C" },
                  { label: "Two-way Contest View", pct: 54, color: "#9E9E9E" },
                  { label: "Three-way Contest View", pct: 19, color: "#FFC107" },
                ].map(d => (
                  <div key={d.label} style={{ textAlign: "center", padding: 12 }}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: d.color }}>{d.pct}%</div>
                    <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>{d.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TIMELINE */}
        {tab === "Timeline" && (
          <div>
            <SectionTitle sub="Key political events leading up to April 23 polling">Election Timeline</SectionTitle>
            <div style={{ position: "relative", paddingLeft: 28 }}>
              <div style={{ position: "absolute", left: 9, top: 0, bottom: 0, width: 2, background: "rgba(255,255,255,0.08)" }} />
              {TIMELINE.map((t, i) => {
                const isFuture = t.date.includes("Apr") || t.date.includes("May") || t.date === "30 Mar 2026";
                const isToday = t.date === "29 Mar 2026";
                return (
                  <div key={i} style={{ position: "relative", paddingBottom: 20, opacity: isFuture ? 0.5 : 1 }}>
                    <div style={{
                      position: "absolute",
                      left: -23,
                      top: 4,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: isToday ? "#00e676" : isFuture ? "#333" : t.event.includes("POLLING") ? "#FFC107" : "#555",
                      border: isToday ? "2px solid #00e676" : "2px solid #222",
                      boxShadow: isToday ? "0 0 10px #00e676" : "none",
                    }} />
                    <div style={{
                      background: isToday ? "rgba(0,230,118,0.08)" : "rgba(255,255,255,0.02)",
                      borderRadius: 10,
                      padding: "10px 16px",
                      border: isToday ? "1px solid rgba(0,230,118,0.2)" : "1px solid rgba(255,255,255,0.04)",
                    }}>
                      <div style={{ fontSize: 11, color: isToday ? "#00e676" : "#888", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>
                        {t.date} {isToday && "← TODAY"}
                      </div>
                      <div style={{ fontSize: 14, color: t.event.includes("POLLING") || t.event.includes("RESULTS") ? "#FFC107" : "#ddd", fontWeight: t.event.includes("POLLING") ? 800 : 500, marginTop: 2 }}>
                        {t.event}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div style={{
          marginTop: 40,
          padding: "20px 0",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          fontSize: 11,
          color: "#555",
          textAlign: "center",
          lineHeight: 1.6,
        }}>
          Data sourced from: Wikipedia, Election Commission of India, The Week, News18, India TV, NewsX,
          The Federal, The Wire, ANI, Business Standard, DT Next, Outlook India, The News Minute, ResearchGate
          <br />
          Surveys: Vote Vibe, Matrize, Parawheel, Shining India, Agni News, DMK/TVK internal assessments
          <br />
          Last updated: 29 March 2026 &middot; This is an analysis tool — not an official election resource
        </div>
      </div>
    </div>
  );
}
