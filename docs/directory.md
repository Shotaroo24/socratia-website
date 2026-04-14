# ディレクトリ構成

```
socratia-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 共通レイアウト（Nav + Footer）
│   │   ├── page.tsx                # ランディングページ
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   └── commercial-disclosure/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Service.tsx
│   │   ├── FreeTrial.tsx
│   │   ├── FAQ.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Accordion.tsx
│   │       └── SectionHeader.tsx
│   ├── lib/
│   │   └── constants.ts           # Google Form URL等の定数
│   └── styles/
│       └── globals.css            # Tailwind + CSS変数
├── public/
│   └── images/                    # 画像アセット（images.md参照）
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## ルール
- コンポーネントはセクション単位で分割
- 法的ページ（terms, privacy, commercial-disclosure）は各 `page.tsx` に直接コンテンツを記述（コンポーネント分割不要）
- 共通UIは `components/ui/` に配置
- 画像は `public/images/` に配置
