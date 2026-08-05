/*
 * 結果カードのDOM生成。マッチングスコアやタグから見た目を組み立てるだけで、
 * データ取得・状態管理には関与しない。
 */

function starRating(score) {
  if (score >= 8) return "★★★";
  if (score >= 5) return "★★☆";
  return "★☆☆";
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function buildOfferLinks(agent) {
  const offers = agent.related_offers || [];
  if (offers.length === 0) return "";
  return offers
    .map(
      (o) =>
        `<a class="result-card__link result-card__link--offer" href="${escapeHtml(o.url)}" target="_blank" rel="noopener sponsored">${escapeHtml(o.label || "関連サービスを見る")}<span class="badge badge--pr">PR</span></a>`
    )
    .join("");
}

function buildCrossLinkBanner(agent, concern) {
  if (agent.links_to_subsidy_checker && (concern === "it_skillup" || concern === "age_anxiety")) {
    return `<a class="cross-link-banner" href="../subsidy-checker/">転職前のスキルアップに使える教育訓練給付金があるかもしれません。給付金・補助金診断で確認する →</a>`;
  }
  if (concern === "independence") {
    return `<a class="cross-link-banner" href="../sidejob-checker/">フリーランスとして他にどんな仕事が向いているか、副業ジャンル診断でも確認できます →</a>`;
  }
  if (concern === "quit_difficulty") {
    return `<a class="cross-link-banner" href="../resignation-letter-generator/">自分で退職を伝える場合は、退職願・退職届の文面を自動作成できます →</a>`;
  }
  if (concern === "disability_support") {
    return `<a class="cross-link-banner" href="../insurance-checker/">障害や病気に備える保険が必要か、保険診断でも確認できます →</a>`;
  }
  return "";
}

function buildResultCard(agent, concern) {
  const badges = [`<span class="badge">${escapeHtml(agent.category)}</span>`, `<span class="badge badge--accent">マッチ度 ${starRating(agent.score)}</span>`];

  return `
    <article class="result-card">
      <div class="result-card__badges">${badges.join("")}</div>
      <h3 class="result-card__name">${escapeHtml(agent.name)}</h3>
      <p class="result-card__benefit">${escapeHtml(agent.feature_text)}</p>
      <p class="result-card__org">${escapeHtml(agent.fit_text)}</p>
      <p class="result-card__summary">${escapeHtml(agent.summary)}</p>
      <p class="result-card__conditions">${escapeHtml(agent.conditions_text)}</p>
      <div class="result-card__actions">
        ${buildOfferLinks(agent)}
      </div>
      ${buildCrossLinkBanner(agent, concern)}
    </article>
  `;
}

/**
 * @param {HTMLElement} summaryEl
 * @param {HTMLElement} listEl
 * @param {{results: Array, relaxed: boolean}} matchResult
 * @param {Object} answers
 */
function renderResults(summaryEl, listEl, matchResult, answers) {
  const { results } = matchResult;
  const concern = answers ? answers.concern : null;

  if (results.length === 0) {
    summaryEl.innerHTML = `
      <p class="result-summary__count">条件に合う転職支援サービスが見つかりませんでした</p>
      <p class="result-summary__note">回答内容を変えて、もう一度お試しください。</p>
    `;
    listEl.innerHTML = `<div class="result-empty">該当するサービスがありませんでした。「もう一度診断する」からやり直せます。</div>`;
    return;
  }

  summaryEl.innerHTML = `
    <p class="result-summary__count">あなたに合いそうな転職支援サービスが ${results.length} 件見つかりました</p>
    <p class="result-summary__note">マッチ度が高い順に表示しています。</p>
  `;

  listEl.innerHTML = results.map((a) => buildResultCard(a, concern)).join("");
}
