# 技術スタック

| 項目 | 選定 |
|------|------|
| フレームワーク | Next.js (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| デプロイ | Vercel |
| フォーム | Google Form（外部リンク） |
| パッケージマネージャー | npm |
| フォント | Google Fonts |
| アニメーション | CSS + framer-motion（必要に応じて） |

## 定数管理

`lib/constants.ts` に以下を集約：

```typescript
export const SITE_CONFIG = {
  name: "Socratia",
  tagline: "The Premier Japanese Speaking Program",
  email: "info@socratiaacademy.com",
  price: "$399",
  trialFormUrl: "https://forms.google.com/your-form-id", // プレースホルダー
} as const;
```

## 今回使わないもの
- データベース
- 認証（Phase 2）
- 決済（Phase 3）
- CMS
