# ランディングページ仕様

## コンテンツソース
以下のURLを直接参照してコンテンツを取得すること：
**https://socratiaacademy.com/home**

テキスト・構成はほぼそのまま移植。デザインは design.md に従って作り替える。

## セクション構成（上から順）

### 1. Navigation（固定ヘッダー）
- ロゴ:「SOCRATIA」テキストロゴ（セリフ体、letter-spacing: 0.08em、大文字）
- リンク: Our Service / FAQ / Apply Now / Log in
- 「Apply Now」→ Google Form（`SITE_CONFIG.trialFormUrl`）ゴールドCTAボタン
- 「Log in」→ Phase 1では非表示 or disabled
- 背景: ネイビー `#0B1522`
- モバイル: ハンバーガーメニュー
- sticky + blur

### 2. Hero（中央配置）
- 背景: ネイビーグラデーション `linear-gradient(175deg, #0B1522, #162640, #1E3355)`
- バッジ: `— FOR COMPLETE BEGINNERS —`（ゴールドテキスト、ダッシュ付き、letter-spacing広め、ピル型ではない）
- タイトル:「The Premier Japanese Speaking Program」（中央配置、セリフ体、`#F2EDE4`）
- タイトル下: ゴールドの細線ディバイダー（幅40px、中央）
- サブテキスト:「Our "Input + Live Practice" method...」（`#8899AA`、max-width制限）
- CTA:「Apply for a Free Trial ›」→ Google Form（ゴールド pill ボタン）
- **動画なし**

### 3. Features（3カラムカード）
- 背景: ウォームクリーム `#FAF7F2`
- ラベル:「FEATURES」（ゴールド、小文字、letter-spacing広め）
- 見出し:「Features of Our Course」（セリフ体）
- 3カード: ホワイト背景 + ボーダー `#E8E2D6`、中央配置
- 各カードに番号（ゴールド）+ タイトル + 説明文
- 説明文は元サイトからそのまま取得

### 4. Service（$399）
- 背景: ホワイト `#FFFFFF`
- ラベル: ゴールド `OUR SERVICE — $399`
- 4ブロック: Textbook Learning / Video Learning / Live Lesson / Support
- 各ブロック2つの特徴
- 交互レイアウト（画像左右入れ替え）
- 画像は `images.md` 参照

### 5. Free Trial CTA
- 背景: ネイビーグラデーション（Heroと同系統）
- 見出し:「Still Unsure?」→「Apply for a Free Trial Lesson」
- 説明文 + CTAボタン → Google Form（ゴールド pill）

### 6. FAQ（アコーディオン）
- 背景: ウォームクリーム `#FAF7F2`
- 4つのQ&A
- 元サイトの内容そのまま

### 7. Footer
- 背景: ネイビー `#0B1522`
- 共通フッター（`Footer.tsx`）
- 法的ページへの内部リンク
- メールアドレス
- LearnWorldsロゴは削除
