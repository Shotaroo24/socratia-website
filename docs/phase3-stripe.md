# Phase 3: 決済機能（Stripe）

タスク完了時にチェックをつけること: `[ ]` → `[x]`

---

## 運用方針
- 決済はStripe Payment Linkで手動運用
- トライアル後、ShotaroがPayment Linkを生徒にWhatsAppで送付
- 支払い確認後、ClerkダッシュボードでpublicMetadataに { paid: true } を手動セット
- サイト上に購入ボタンは置かない

## 3-1. Stripeセットアップ（手動）
- [x] Stripeアカウント作成
- [x] 商品作成（Socratia - Japanese Online Course / $399 / ワンタイム）
- [x] APIキー取得・.env.local に追加
- [x] Vercelの環境変数にも追加

## 3-2. ダッシュボードの購入状態分岐
- [x] Clerk の publicMetadata.paid を取得して表示分岐
- [x] 未購入時: コンテンツ非表示 + 案内メッセージ表示
- [x] 購入済み時: 通常のダッシュボード表示

## 3-3. 不要コード削除
- [x] api/checkout/route.ts 削除
- [x] api/webhook/route.ts 削除
- [x] stripe関連パッケージアンインストール（package.jsonから削除・node_modulesは要npm install）
- [x] lib/stripe.ts 削除
