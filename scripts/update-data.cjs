#!/usr/bin/env node

// ╔══════════════════════════════════════════════════════════════════════╗
// ║  AUTO-UPDATE SCRIPT — TN Election 2026 Dashboard                    ║
// ║  Runs every 2 days via GitHub Actions                               ║
// ║  Uses Claude API + Web Search to fetch latest election data         ║
// ╚══════════════════════════════════════════════════════════════════════╝

const fs = require("fs");
const path = require("path");

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const DATA_FILE = path.join(__dirname, "..", "src", "data.js");

if (!ANTHROPIC_API_KEY) {
  console.error("❌ ANTHROPIC_API_KEY not set. Exiting.");
  process.exit(1);
}

async function callClaude(prompt, systemPrompt) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 12000,
      system: systemPrompt,
      tools: [
        {
          type: "web_search_20250305",
          name: "web_search",
        },
      ],
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Claude API error ${response.status}: ${err}`);
  }

  const data = await response.json();

  const textBlocks = data.content
    .filter((item) => item.type === "text")
    .map((item) => item.text);

  return textBlocks.join("\n");
}

async function fetchLatestData() {
  console.log("🔍 Fetching latest TN 2026 election data via Claude + Web Search...\n");

  const today = new Date().toISOString().split("T")[0];

  const systemPrompt = `You are an election data researcher. Your job is to output ONLY a valid JavaScript ES module file (src/data.js) containing the latest Tamil Nadu 2026 election data.

CRITICAL RULES:
- Output ONLY the JavaScript code. No markdown fences, no explanation, no preamble.
- Start directly with: // Auto-updated...
- Use export const for each data structure.
- Keep the EXACT same variable names and structure as the template below.
- Update ALL values with the latest information from your web searches.
- If you can't find updated info for a field, keep the previous value.
- Include LAST_UPDATED as today's ISO date string.

REQUIRED VARIABLES (keep these exact names):
LAST_UPDATED, ELECTION_META, ALLIANCES, OPINION_POLLS, VOTE_SHARE_POLLS, 
CM_PREFERENCE, RESULTS_2021, KEY_ISSUES, KEY_CANDIDATES, REGIONS, TIMELINE,
CAMPAIGN_NARRATIVES, SATISFACTION_DATA`;

  const prompt = `Today is ${today}. Search the web for the LATEST information about the Tamil Nadu 2026 state assembly election and generate an updated src/data.js file.

Search for ALL of these topics and update the data:
1. Latest opinion polls and survey results (seat projections, vote share)
2. Any new alliance changes, seat-sharing updates, or party switches
3. New candidate announcements or changes
4. Latest campaign events, controversies, or timeline updates  
5. Updated CM preference polls
6. Any new key issues or shifting voter sentiment
7. Nomination filing updates
8. Any changes in voter registration numbers

Here is the CURRENT data file structure to update (keep the same format, update values):

${fs.readFileSync(DATA_FILE, "utf-8")}

IMPORTANT: Output ONLY the complete updated JavaScript file content. No markdown, no explanation.`;

  const result = await callClaude(prompt, systemPrompt);
  return result;
}

function cleanOutput(raw) {
  let cleaned = raw
    .replace(/^```(?:javascript|js)?\n?/gm, "")
    .replace(/\n?```$/gm, "")
    .trim();

  if (!cleaned.startsWith("//") && !cleaned.startsWith("export")) {
    const exportIdx = cleaned.indexOf("export ");
    const commentIdx = cleaned.indexOf("//");
    const startIdx = Math.min(
      exportIdx === -1 ? Infinity : exportIdx,
      commentIdx === -1 ? Infinity : commentIdx
    );
    if (startIdx !== Infinity) {
      cleaned = cleaned.substring(startIdx);
    }
  }

  return cleaned;
}

function validateData(content) {
  const requiredExports = [
    "LAST_UPDATED",
    "ELECTION_META",
    "ALLIANCES",
    "OPINION_POLLS",
    "KEY_CANDIDATES",
    "REGIONS",
    "TIMELINE",
  ];

  for (const exp of requiredExports) {
    if (!content.includes(`export const ${exp}`)) {
      throw new Error(`Missing required export: ${exp}`);
    }
  }

  if (content.length < 3000) {
    throw new Error(`Output too short (${content.length} chars), likely incomplete`);
  }

  return true;
}

async function main() {
  try {
    const currentData = fs.readFileSync(DATA_FILE, "utf-8");

    console.log("📡 Calling Claude API with web search...\n");
    const rawResult = await fetchLatestData();

    console.log("🧹 Cleaning output...\n");
    const cleaned = cleanOutput(rawResult);

    console.log("✅ Validating data structure...\n");
    validateData(cleaned);

    fs.writeFileSync(DATA_FILE, cleaned, "utf-8");
    console.log(`✅ Data file updated successfully!`);
    console.log(`📁 Written to: ${DATA_FILE}`);
    console.log(`📏 Size: ${cleaned.length} characters`);

    const hasNewPolls = cleaned !== currentData;
    console.log(`\n${hasNewPolls ? "📊 Changes detected — new data written" : "ℹ️  No changes detected"}`);
  } catch (error) {
    console.error(`\n❌ Update failed: ${error.message}`);
    console.error("⚠️  Keeping previous data file unchanged.");
    process.exit(1);
  }
}

main();
