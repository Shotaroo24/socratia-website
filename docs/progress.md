# 進捗管理

タスク完了時にチェックをつけること: `[ ]` → `[x]`

---

## 1. プロジェクトセットアップ
- [x] Next.js プロジェクト作成（App Router, TypeScript）
- [x] Tailwind CSS v4 セットアップ
- [x] Google Fonts 設定（next/font）
- [x] globals.css にCSS変数定義（カラーパレット → Classic Navy × Gold × Warm Cream に全面更新済）
- [x] `lib/constants.ts` 作成
- [x] ディレクトリ構成の作成

## 2. 共通コンポーネント
- [x] `Nav.tsx` — ロゴ、ナビリンク、CTAボタン、モバイルハンバーガー
- [x] `Footer.tsx` — ミッション、法的リンク、メールアドレス、コピーライト
- [x] `layout.tsx` — Nav + Footer を含む共通レイアウト
- [x] `ui/Button.tsx` — 共通ボタンコンポーネント
- [x] `ui/SectionHeader.tsx` — セクション見出し共通コンポーネント
- [x] `ui/Accordion.tsx` — FAQ用アコーディオン

## 3. ランディングページ（`/`）
- [x] `Hero.tsx` — バッジ、タイトル、サブテキスト、CTA
- [x] `Features.tsx` — 3カラムカード（Textbook & Video, Live Lesson, Support）
- [x] `Service.tsx` — $399 サービス詳細（4ブロック交互レイアウト）
- [x] `FreeTrial.tsx` — トライアルCTAセクション
- [x] `FAQ.tsx` — 4つのQ&Aアコーディオン
- [x] `page.tsx` — 全セクション結合（Hero + Features + Service + FreeTrial + FAQ）

## 4. 法的ページ
- [x] `/terms` — Terms & Conditions（元サイトからコンテンツ移植）
- [x] `/privacy` — Privacy Policy（元サイトからコンテンツ移植）
- [x] `/commercial-disclosure` — 特定商取引法（元サイトからコンテンツ移植）

## 5. レスポンシブ対応
- [x] モバイル表示確認・調整（Nav ハンバーガー含む）
- [x] タブレット表示確認・調整
- [x] デスクトップ表示確認

## 5.5 Apply Form（トライアルレッスン申し込みフォーム）
- [x] `/apply` ページ作成（フォームUI）
- [x] API Route `/api/apply` 作成（Resendでメール送信）
- [x] バリデーション（zodでフロント + サーバーサイド）
- [x] ボット対策（Rate Limiting + Honeypot）
- [x] 送信後のサンキュー画面
- [x] Nav / Hero / FreeTrialのCTAリンクを /apply に変更

## 6. SEO・メタ情報
- [x] 各ページの meta title / description 設定
- [x] OGタグ設定
- [x] favicon 設定

## 7. 仕上げ
- [x] アニメーション動作確認（フェードイン、ホバー等）
- [x] 全内部リンクの動作確認
- [x] ~~Google Form リンクの動作確認~~ → /apply に置き換え済みのため不要
- [x] Lighthouse スコア確認（Performance 74〜88 / Accessibility 100 / SEO 100）
- [x] Vercel デプロイ（https://socratia-website.vercel.app/）

---

## 現在のステータス
**フェーズ: Phase 1 完了（ランディングページ + 法的ページ3つ実装完了）**
最終更新: 2026/04/04
