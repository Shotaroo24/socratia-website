# Phase 4: コンテンツアクセス（動画レッスンページ）

タスク完了時にチェックをつけること: `[ ]` → `[x]`

---

## 概要

ダッシュボードの「Start Learning」→ `/dashboard/lessons` で動画レッスンページを表示。
購入済みユーザー（`publicMetadata.paid === true`）のみアクセス可能。
動画ホスティングは **Bunny Stream**（bunny.net）を使用。

## セクション構成（全95本）

| セクション | 本数 |
|---|---|
| Standard Lesson | 41 |
| Conversational Lesson | 12 |
| Advanced Grammar | 17 |
| Words Summary | 13 |
| Particle Summary | 12 |

---

## 4-1. Bunny Stream準備（手動）
- [x] bunny.net アカウント作成
- [x] Stream → Video Library を作成（名前: Socratia）
- [x] Security設定:
  - [x] Allowed Domains に `socratia-website.vercel.app` を追加（`socratiaacademy.com` はドメイン移行時に追加）
  - [x] Enable Direct Play をオフ（埋め込み経由のみ再生可能）
  - [x] Block Direct URL File Access をオン
  - [x] MediaCage Basic DRM をオン（ダウンロード・画面録画防止、無料）
- [x] USBから動画をPCにコピー
- [x] Bunny Stream にコレクション5つ作成 + 全動画アップロード完了
- [x] APIで全動画の Video ID を一括取得済み

### Bunny Stream情報
- Video Library ID: `636189`
- CDN hostname: `vz-f726e20f-9ee.b-cdn.net`
- リージョン: Frankfurt (Main)
- ストレージ: 約55GB（月$1.65）
- セキュリティ: Allowed Domains + Block Direct URL + MediaCage Basic DRM

## 4-2. レッスンデータ作成
- [x] `src/data/lessons.ts` を作成
- [x] Bunny Stream用にデータ定義（`BUNNY_LIBRARY_ID` + `videoId`）
- [x] 重複動画を除外（95本確定）

```typescript
// Bunny Stream の埋め込みURL形式:
// https://iframe.mediadelivery.net/embed/{libraryId}/{videoId}

export const BUNNY_LIBRARY_ID = "636189";

export const sections = [
  {
    id: "standard",
    title: "Standard Lesson",
    lessons: [
      { id: "sta-01", title: "Lesson 1 (Part 1)", videoId: "612e71e4-...", duration: "24:04" },
      // ... 41本（全データは lessons.ts に記載済み）
    ]
  },
  // ... 他4セクション
];
```

## 4-3. レッスンページUI実装
- [x] `/dashboard/lessons/page.tsx` 作成
- [x] 認証 + 購入チェック（`paid !== true` → リダイレクト or ブロック）
- [x] レイアウト: 折りたたみ式サイドバー（左） + 動画プレイヤー（右）
- [x] サイドバー:
  - セクション名アコーディオン（開閉可能）
  - レッスン一覧（タイトル + 再生時間）
  - 選択中レッスンのハイライト（ネイビー背景 + ゴールドアイコン）
  - サイドバー開閉トグルボタン
- [x] メインエリア: 動画プレイヤーのみ（iframe、16:9）
- [x] レッスン選択時にプレイヤーのsrcを動的切り替え
- [x] デフォルト: 最初のセクションの最初のレッスンを自動選択

## 4-4. Bunny Stream埋め込み（コード修正）
- [x] `lessons.ts` を Bunny Stream の実データで差し替え
- [x] iframe src を Bunny Stream 形式に変更（`https://iframe.mediadelivery.net/embed/{libraryId}/{videoId}`）
- [x] `vimeoId` → `videoId` にプロパティ名変更
- [x] レスポンシブ対応（`aspect-ratio: 16/9`）
- [x] `allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"` 設定
- [x] `npm run build` 通過確認

## 4-5. レスポンシブ対応
- [x] モバイル: サイドバー → 上部ドロップダウン or ハンバーガー展開
- [x] モバイル: 動画プレイヤーがフル幅表示
- [x] タブレット: サイドバー折りたたみデフォルト、トグルで展開

## 4-6. デザイン統一
- [x] `C:\Users\syo46\Socratia\docs\design.md` を参照して実装
- [x] 背景: クリーム `#FAF7F2`
- [x] サイドバー: クリーム背景 + ホワイトのセクションヘッダー
- [x] 選択中レッスン: ネイビー `#1E3355` 背景 + ゴールドアイコン
- [x] セクションラベル: ゴールド `#C9A84C`（letter-spacing: 0.05em）
- [x] ピンク系カラーは一切使わない

## 4-7. ダッシュボードとの接続
- [x] `/dashboard` の「Start Learning」カードのリンク先を `/dashboard/lessons` に設定
- [x] `/dashboard/lessons` → `/dashboard` への「Back to Dashboard」導線

## 4-8. Vercelデプロイ・動作確認
- [ ] `npm run build` 通過確認
- [ ] Vercelに再デプロイ（git push）
- [ ] 本番環境で動画再生確認
- [ ] 未購入ユーザーでアクセスブロック確認
- [ ] モバイル実機で動画再生・UI確認

---

## 補足

### Bunny Stream iframe テンプレート
```html
<iframe
  src="https://iframe.mediadelivery.net/embed/{libraryId}/{videoId}?autoplay=false&loop=false&muted=false&preload=true"
  loading="lazy"
  style="border: 0; width: 100%; aspect-ratio: 16/9;"
  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
  allowfullscreen="true"
></iframe>
```

### Bunny Stream セキュリティ設定（設定済み）
- Stream → Socratia → Security → General
- Allowed Domains: `socratia-website.vercel.app`（ドメイン移行後に `socratiaacademy.com` も追加）
- Enable Direct Play: オフ
- Block Direct URL File Access: オン
- MediaCage Basic DRM: オン

### Bunny Stream 料金（従量課金）
- ストレージ: $0.03/GB/月（55GB → 月$1.65）
- 配信: $0.005/GB（視聴分のみ課金）
- 月額固定費なし

### 注意
- 既存コンポーネントは変更しない（Nav、Footer、Dashboard等）
- ピンク系カラーは一切使わない
- 動作確認できたら完了を報告すること
