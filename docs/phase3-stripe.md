# Phase 3: 決済機能（Stripe）

タスク完了時にチェックをつけること: `[ ]` → `[x]`

---

## 運用方針
- 決済は **Stripe Payment Link** で手動運用
- トライアル後、ShotaroがPayment Linkを生徒にWhatsAppで送付
- 支払い確認後、**Clerkダッシュボードで生徒のアカウントを手動作成**（生徒のGmailアドレスで登録）
- 生徒にログインURL + 「このGmailでログインしてください」と案内
- サイト上に購入ボタンは置かない
- NavのLoginリンクはそのまま残す（登録済みユーザーが普通にログイン可能）

### 認証フロー（ログイン済み = 購入済み）
```
生徒が Stripe Payment Link で支払い
  ↓
Shotaro が支払い確認
  ↓
Shotaro が Clerk ダッシュボードで手動ユーザー作成（Gmail指定）
  ↓
生徒にログインURL（/login）を WhatsApp で案内
  ↓
生徒が Google ログイン → ダッシュボードへ
```

**重要:** Clerkにアカウントが存在するユーザーのみログイン可能。
そのため `publicMetadata.paid` のチェックは不要（コードから削除済み）。
「ログインできる = Shotaroが登録した = 支払い済み」が保証される。

## 3-1. Stripeセットアップ（手動）
- [x] Stripeアカウント作成
- [x] 商品作成（Socratia - Japanese Online Course / $399 / ワンタイム）
- [x] APIキー取得・.env.local に追加
- [x] Vercelの環境変数にも追加

## 3-2. ダッシュボードの購入状態分岐
- [x] ~~Clerk の publicMetadata.paid を取得して表示分岐~~ → **削除済み（手動登録方式により不要）**
- [x] ~~未購入時: コンテンツ非表示 + 案内メッセージ表示~~ → **削除済み**
- [x] ログイン済みユーザーには常にダッシュボード表示（ログイン = 購入済み）

## 3-3. 不要コード削除
- [x] api/checkout/route.ts 削除
- [x] api/webhook/route.ts 削除
- [x] stripe関連パッケージアンインストール（package.jsonから削除）
- [x] lib/stripe.ts 削除
- [x] publicMetadata.paid チェックコードを dashboard/page.tsx, dashboard/lessons/page.tsx から削除
- [x] lib/constants.ts の未使用 trialFormUrl 削除
