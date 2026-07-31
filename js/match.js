/*
 * マッチングエンジン。DOM・windowの状態には触れない純粋関数のみで構成する
 * (将来React等へ移植する際にロジックだけ持っていけるようにするため)。
 */

function scoreAgent(agent, answers) {
  const tags = agent.tags || {};
  let score = 0;

  // 悩み・目的: 最重要視
  const concernTags = tags.concern || [];
  if (concernTags.includes(answers.concern)) {
    score += 5;
  }

  // 希望業界: 指定なし(any)のサービスは誰にでも加点
  const industryTags = tags.industry && tags.industry.length > 0 ? tags.industry : ["any"];
  if (industryTags.includes("any") || industryTags.includes(answers.industry) || answers.industry === "any") {
    score += 2;
  }

  // 希望する働き方: 指定なし(either)のサービスは誰にでも加点
  const workStyleTags = tags.work_style && tags.work_style.length > 0 ? tags.work_style : ["either"];
  if (workStyleTags.includes("either") || workStyleTags.includes(answers.work_style) || answers.work_style === "either") {
    score += 2;
  }

  // 年齢層: 指定がないサービスは誰にでも加点
  const ageTags = tags.age_range || [];
  if (ageTags.length === 0 || ageTags.includes(answers.age_range)) {
    score += 1;
  }

  // 現在の就業状況: 指定がないサービスは誰にでも加点
  const empTags = tags.employment_status || [];
  if (empTags.length === 0 || empTags.includes(answers.employment_status)) {
    score += 1;
  }

  return Object.assign({}, agent, { score });
}

/**
 * @param {Array} agents - data.js の AGENTS 配列
 * @param {Object} answers - quiz.js が集めた回答オブジェクト
 * @returns {{ results: Array, relaxed: boolean }}
 */
function matchAgents(agents, answers) {
  const scored = agents.map((a) => scoreAgent(a, answers));
  // priorityは小さい数字ほど優先表示(1が最優先)
  scored.sort((a, b) => b.score - a.score || (a.priority || 99) - (b.priority || 99));
  return { results: scored, relaxed: false };
}
