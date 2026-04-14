# Phase 2: 認証機能（Clerk + Googleログイン）

タスク完了時にチェックをつけること: `[ ]` → `[x]`

---

## 2-1. Clerkセットアップ
- [x] Clerkアカウント作成（https://clerk.com）
- [x] Clerkダッシュボードで新規アプリケーション作成（アプリ名: Socratia Academy）
- [x] Googleログインのみ有効化（Email/Password はオフ）
- [x] Google OAuth設定（Google Cloud ConsoleでOAuth 2.0クライアントID作成 → ClerkにClient ID / Secret を登録）
- [x] APIキー取得（`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`）
- [x] `.env.local` にAPIキー追加

## 2-2. プロジェクトへのClerk導入
- [x] `@clerk/nextjs` パッケージインストール
- [x] `layout.tsx` に `<ClerkProvider>` ラッパー追加
- [x] `middleware.ts` 作成（保護ルートの定義: `/dashboard` 以下を認証必須に）※Next.js 16では `proxy.ts`
- [x] 環境変数の型定義追加（`env.d.ts` or `.env.example` 更新）

## 2-3. 認証ページ
- [x] `/login` ページ作成（Clerkの `<SignIn>` コンポーネント使用）
- [x] `/signup` ページ作成（Clerkの `<SignUp>` コンポーネント使用）
- [x] ログイン/サインアップ後のリダイレクト先設定（→ `/dashboard`）
- [x] デザイン調整（Navy × Gold × Cream のカラーに合わせる）

## 2-4. Navバー更新
- [x] 未ログイン時: 「Login」ボタン表示（`/login` へ）
- [x] ログイン時: ユーザーアイコン + ドロップダウン（Dashboard / Logout）
- [x] モバイルハンバーガーメニューにも同様の分岐追加

## 2-5. ダッシュボードページ
- [x] `/dashboard` ページ作成（認証必須）
- [x] ログイン中ユーザーの名前表示（Welcome back, {name}!）
- [x] Hero / Discord / Course Guide / Textbook の4セクション実装
- [x] 画像: C:\Users\syo46\Socratia\images\ から使用

## 2-6. 生徒の事前登録
- [ ] Clerkダッシュボードから既存生徒のアカウントを手動作成
- [ ] 生徒への案内メール準備（新サイトURL + Googleログインの手順）

## 2-7. Vercelデプロイ・動作確認
- [x] Vercelの環境変数に Clerk のキーを追加（`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`）
- [x] 本番環境でGoogleログインの動作確認
- [x] 未ログインで `/dashboard` にアクセス → `/login` にリダイレクトされるか確認

---

## 補足

### 必要な環境変数（.env.local に追加）
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_xxx
CLERK_SECRET_KEY=sk_xxx
```

### Clerkで生徒を事前登録する方法
1. Clerkダッシュボード → Users → 「+ Create user」
2. メールアドレスを入力（生徒がGoogleログインで使うGmailアドレス）
3. 生徒に「このGmailでログインしてください」と案内

### Google OAuth設定手順
1. Google Cloud Console（https://console.cloud.google.com）→ APIとサービス → 認証情報
2. 「+ 認証情報を作成」→ OAuth 2.0 クライアント ID
3. アプリケーションの種類: ウェブアプリケーション
4. 承認済みリダイレクト URI: Clerkダッシュボードに表示されるコールバックURLを貼る
5. 作成後、Client ID と Client Secret を Clerkダッシュボードの Google 設定に貼る
