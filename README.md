# 転職エージェント診断アプリ MVP

今の働き方・転職の悩みなど5つの質問に答えるだけで、合いそうな転職エージェント・転職支援サービスを診断するWebアプリ。HAKONIWA LAB([[subsidy-checker]]・[[sidejob-checker]]と同じアーキテクチャ)の3本目のツール。ビルドツール不要のVanilla HTML/CSS/JS。

給付金診断(スキルアップ)→副業診断(フリーランス)→転職診断(キャリアチェンジ)という「キャリア系診断3部作」の最後のピース。

## ローカルでの動作確認

```
cd career-checker
python -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開く。`index.html` を直接ダブルクリックしても動作する(`js/data.js` にデータを埋め込み済みのため `fetch` は使っていない)。

## ファイル構成

```
career-checker/
├─ index.html          … 診断フォーム+結果表示のSPA本体
├─ css/style.css        … subsidy-checker/sidejob-checkerと同じCSS変数デザインシステム(コピー)
├─ js/
│   ├─ data.js           … AGENTS配列(data/agents.jsonのコピー、グローバル変数として埋め込み)
│   ├─ match.js           … タグベースのスコアリングによるマッチングエンジン(純粋関数、DOM非依存)
│   ├─ quiz.js            … 質問フロー・状態管理・DOM描画
│   └─ render.js          … 結果カードのDOM生成
└─ data/agents.json     … データの原本(人間が編集する場所)
```

## データの更新手順

1. `data/agents.json` を編集する。
2. 編集後、`js/data.js` を更新する:
   ```
   printf 'const AGENTS = ' > js/data.js
   cat data/agents.json >> js/data.js
   printf ';\n' >> js/data.js
   ```
3. `node --check js/data.js` で構文チェック。

### tagsフィールドの語彙

- `employment_status`: `employee` / `freelance` / `unemployed` / `student`(空配列は制限なし)
- `concern`: `it_skillup`(ITエンジニアとしてキャリアアップ) / `independence`(フリーランス・独立志向) / `age_anxiety`(年齢的な不安) / `quit_difficulty`(退職を切り出しにくい) / `disability_support`(障害・特性への配慮)
- `work_style`: `fulltime` / `freelance_contract`(空配列は制限なし=どちらでも)
- `industry`: `it` / `other` / `any`(空配列は`any`扱い)
- `age_range`: `20s` / `30s` / `40s_plus`(空配列は制限なし)

### スコアリングとpriorityの向き

`js/match.js`の`scoreAgent`は`concern`一致を最重要視(+5)し、`industry`/`work_style`/`age_range`/`employment_status`で加点する減点なし方式。ハード除外(hardFail)は無い(budget等のゲート条件が存在しないため)。同点の場合は`priority`の**小さい数字を優先表示**する(1が最優先)。subsidy-checker/sidejob-checkerの`priority`は降順(大きい数字が優先)になっており本アプリとは向きが逆なので、データ編集時は注意すること。

## マネタイズ導線

各サービスの `related_offers` フィールド(`{label, url, type}`形式のオブジェクト配列)に追加すると、結果カードに「PR」バッジ付きボタンが自動表示される(`js/render.js`の`buildOfferLinks`)。2026-07-31初期実装時点で、subsidy-checkerで既に承認済みのA8.net案件7件(IT求人ナビ フリーランス・社内SE転職ナビ・明光キャリアパートナーズ・エイジレスエージェント・退職代行Jobs・障害者ナビ)と、sidejob-checkerで新規追加したクラウドワークス テックを全件流用。新規A8審査なしで即着手できたのが本アプリを企画した理由。リンクは`rel="noopener sponsored"`付与、フッターにもプロモーション表記あり(景品表示法のステマ規制対応)。

`concern`が`it_skillup`または`age_anxiety`のサービスには`subsidy-checker`への、`independence`が選ばれた場合は`sidejob-checker`への相互クロスリンクバナーを表示する(`js/render.js`の`buildCrossLinkBanner`)。

## デプロイ

`career-checker/` フォルダをそのまま `hakoniwa-lab` アカウント配下の新規リポジトリ(`hakoniwa-lab/career-checker`)にpushし、GitHub Pages(ブランチ`main`・ルート)を有効化する。git commitのauthor設定は、このリポジトリのローカル`git config`で`hakoniwa-lab <309971408+hakoniwa-lab@users.noreply.github.com>`に設定すること(globalのペルソナ設定を変更しない)。デプロイ後、`sidejob-checker`・`subsidy-checker`・`seki-lab-hub`のクロスリンク先(`../career-checker/`)が実際に機能するか確認する。
