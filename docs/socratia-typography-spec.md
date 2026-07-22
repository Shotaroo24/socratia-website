# Socratia タイポグラフィ確定スペック（実装プロンプト）

> このファイルはそのまま Claude Code に渡せる指示書。**Phase単位**で渡すとレビューしやすい。
> 目的：バラバラの `text-*` 直書き・inline `fontSize` を、統一トークン9個に差し替える。
> ロジックは触らない。**サイズ／行間／字間／太さの付け替えのみ**。
>
> **Claude Codeへの前提**：①§0の「意図的な例外」に挙げた要素は変更禁止。②色・余白・`uppercase`・レイアウト系クラスは残す。③各Phase後に `npm run build` を通してから次へ。

---

## 0. 設計原則（これを守る）

1. **書体の役割を固定する**
   - **Cormorant Garamond（`font-heading`）= 大きい表示専用**。32px未満では使わない。
   - **DM Sans（既定）= それ以外ぜんぶ**（小見出し・カードタイトル・FAQ質問・本文・数字・ラベル・ナビ・ボタン・フッター見出し・アプリUI）。
2. **アプリ側（`/dashboard`・`/dashboard/lessons`・`/dashboard/guide`）は Cormorant を使わない**。全部 DM Sans。
   - ※**決定済み**：ダッシュボード挨拶H1（`DashboardClient.tsx` L99）だけ例外的にセリフ（`font-heading text-display-section`）を許可。それ以外のアプリ見出しは全部 DM Sans。
3. **サイズは全部 `clamp()` で流体化**（375px→1280pxを線形補間）。`base→md` の2段刻みは廃止。タブレット段の欠落も同時に解消。
4. **本文の床は16px**。`text-sm`(14px)を本文に使わない。
5. **セリフのまま残す“意図的な例外”**（触らない）：
   - Navロゴ「SOCRATIA」＝ブランドマークなので対象外。
   - HowItWorks の大きな飾り数字（3.5rem・不透明度0.22/0.3）＝大サイズのセリフ表示なので適合。そのまま。
   - StatsBand の数字（`clamp(2.8rem,4vw,4rem)`）＝既に「流体・セリフ・大」で唯一正しくできている。そのまま（任意でトークン化可）。

---

## 1. トークン定義（9個）

| トークン | 書体 | サイズ (モバイル→デスクトップ) | clamp | line-height | letter-spacing | 既定weight | 用途 |
|---|---|---|---|---|---|---|---|
| `text-display-hero` | Cormorant | 40→68px | `clamp(2.5rem, 1.78rem + 3.09vw, 4.25rem)` | 1.05 | -0.01em | 700 | Hero H1・applyヒーロー |
| `text-display-section` | Cormorant | 32→48px | `clamp(2rem, 1.59rem + 1.77vw, 3rem)` | 1.1 | -0.005em | 700 | 全セクションH2・法務ページH1・Pricing価格 |
| `text-title-lg` | DM Sans | 22→28px | `clamp(1.375rem, 1.22rem + 0.66vw, 1.75rem)` | 1.2 | 0 | 600 | ステップ見出し・プラン名・Dash H1・法務H2 |
| `text-title` | DM Sans | 19→22px | `clamp(1.1875rem, 1.11rem + 0.33vw, 1.375rem)` | 1.25 | 0 | 600 | Serviceカードタイトル・**FAQ質問**・Footer見出し・DashカードH2・法務H3 |
| `text-body-lg` | DM Sans | 16→18px | `clamp(1rem, 0.95rem + 0.22vw, 1.125rem)` | 1.6 | 0 | 400 | Heroサブ・カード説明・FAQ回答・導入文 |
| `text-body` | DM Sans | 16px（固定） | `1rem` | 1.6 | 0 | 400 | 既定の段落・ナビ・ボタン・法務本文 |
| `text-body-sm` | DM Sans | 14→15px | `clamp(0.875rem, 0.85rem + 0.11vw, 0.9375rem)` | 1.5 | 0 | 400 | Footerリンク・Lessons一覧・密なUI・補助リンク |
| `text-label` | DM Sans | 13px（固定） | `0.8125rem` | 1 | 0.18em | 600 | 全kicker/eyebrow・**Service番号01〜04**・小ゴールドラベル。※`uppercase`はマークアップ側で付ける |
| `text-caption` | DM Sans | 13px（固定） | `0.8125rem` | 1.4 | 0 | 400 | StatsBand補足・Lesson duration・注記・エラー文 |

---

## 2. `src/app/globals.css` の変更

### (a) 既存の `@theme inline { … }` ブロックに追記（Fontsコメントの下）

```css
  /* --- Type scale tokens (fluid, 375→1280px) --- */
  --text-display-hero: clamp(2.5rem, 1.78rem + 3.09vw, 4.25rem);
  --text-display-hero--line-height: 1.05;
  --text-display-hero--letter-spacing: -0.01em;
  --text-display-hero--font-weight: 700;

  --text-display-section: clamp(2rem, 1.59rem + 1.77vw, 3rem);
  --text-display-section--line-height: 1.1;
  --text-display-section--letter-spacing: -0.005em;
  --text-display-section--font-weight: 700;

  --text-title-lg: clamp(1.375rem, 1.22rem + 0.66vw, 1.75rem);
  --text-title-lg--line-height: 1.2;
  --text-title-lg--font-weight: 600;

  --text-title: clamp(1.1875rem, 1.11rem + 0.33vw, 1.375rem);
  --text-title--line-height: 1.25;
  --text-title--font-weight: 600;

  --text-body-lg: clamp(1rem, 0.95rem + 0.22vw, 1.125rem);
  --text-body-lg--line-height: 1.6;

  --text-body: 1rem;
  --text-body--line-height: 1.6;

  --text-body-sm: clamp(0.875rem, 0.85rem + 0.11vw, 0.9375rem);
  --text-body-sm--line-height: 1.5;

  --text-label: 0.8125rem;
  --text-label--line-height: 1;
  --text-label--letter-spacing: 0.18em;
  --text-label--font-weight: 600;

  --text-caption: 0.8125rem;
  --text-caption--line-height: 1.4;
```

### (b) 見出しの一括セリフ指定を**削除**する

```css
/* 削除する ↓ ここが「Cormorantを全サイズに流し込む」元凶 */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-cormorant), serif;
}
```

理由：`h3` のカードタイトル等まで強制セリフになる。今後セリフは **`font-heading` クラスを付けた要素だけ**に適用する（`--font-heading` から `font-heading` ユーティリティは既に生成済み）。`body` は DM Sans のまま維持。

---

## 3. 対応表（現行 → 変更後）

差し替えの原則：**サイズ/行間/字間クラスはトークンが内包する → 既存の `text-x* md:text-*` `leading-*` `tracking-[*]` は消す**。色・余白(`mb-*`)・`uppercase`・レイアウト系はそのまま残す。

### Phase 1 — 土台（globals + 共通）

**`src/components/ui/SectionHeader.tsx`**
| 行 | 現行の該当部分 | → 変更後 |
|---|---|---|
| L17 | `text-xs md:text-[13px] font-semibold tracking-[0.2em] uppercase` | `text-label uppercase` |
| L21 | `font-heading text-4xl md:text-5xl … leading-tight` | `font-heading text-display-section` |
| L26 | `text-lg leading-relaxed` | `text-body-lg` |

**`src/components/Hero.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L45 | `text-xs md:text-[13px] … tracking-[0.28em]`（`font-medium`削除） | `text-label uppercase`（`text-main`は残す） |
| L52 | `font-heading text-[2.5rem] md:text-5xl lg:text-6xl xl:text-[4.25rem] … leading-[1.1] tracking-tight` | `font-heading text-display-hero` |
| L62 | `text-lg md:text-xl leading-relaxed` | `text-body-lg` |
| L70 | `text-base`（Button側が持つので削除） | （削除 → Button既定=`text-body`） |

**`src/components/Nav.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L15 | `text-sm md:text-base font-medium` | `text-body font-medium` |
| L73 | `font-heading font-medium text-xl md:text-2xl uppercase` | **触らない**（ブランドロゴ例外） |
| L86 | `text-sm md:text-base font-medium` | `text-body font-medium` |
| L119 / L128 | `font-medium`（サイズ無し） | `text-body font-medium` |

**`src/components/ui/Button.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L21（base文字列） | `… text-sm md:text-base tracking-wide …` | `… text-body tracking-wide …` |

### Phase 2 — LP各セクション（★数字/タイトル/FAQのバランス修正含む）

**`src/components/Service.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L56 | `text-xs md:text-[13px] font-semibold tracking-[0.22em] uppercase` | `text-label uppercase` |
| L61 | `font-heading text-4xl md:text-5xl … leading-tight` | `font-heading text-display-section` |
| L85–86 ★**番号01〜04** | `className="font-heading mb-1"` + `style={{fontSize:'1.05rem', color:'#896520', lineHeight:1}}` | `className="text-label uppercase mb-2"` + `style={{ color:'#896520' }}`（`font-heading`とinline fontSize/lineHeight削除） |
| L90 ★**タイトル** | `font-heading text-xl font-bold` | `text-title font-semibold`（`font-heading`削除＝DM Sans化） |
| L91 | `text-sm md:text-lg leading-relaxed` | `text-body-lg` |

→ 結果：「小さいゴールドのラベル(番号) / 太いsansのタイトル / 上のセリフ大見出し」で3声が分離。セリフ同士の潰し合いが消える。

**`src/components/HowItWorks.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L11 | eyebrow `text-xs md:text-[13px] … tracking-[0.22em] uppercase` | `text-label uppercase` |
| L16 | `font-heading text-4xl md:text-5xl … leading-tight` | `font-heading text-display-section` |
| L19 | `text-lg md:text-xl leading-relaxed` | `text-body-lg` |
| L35–36 / L68–69 | 飾り数字 3.5rem 不透明度 | **触らない**（大セリフ表示＝適合） |
| L40 / L74 | `font-heading text-[1.75rem] font-bold` | `text-title-lg font-semibold`（DM Sans化） |
| L42 / L48 / L80 / L86 | `text-sm md:text-lg` | `text-body-lg` |
| L55 / L58 | `text-2xl`（矢印→↓） | **触らない**（装飾グリフ） |

**`src/components/Pricing.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L43 | eyebrow `text-xs md:text-[13px] … tracking-[0.22em] uppercase text-main` | `text-label uppercase text-main` |
| L51 | `font-heading text-4xl md:text-5xl … leading-tight` | `font-heading text-display-section` |
| L57 価格 | `font-heading text-3xl md:text-4xl font-bold leading-none` | `font-heading text-display-section`（大セリフ数字として維持） |
| L60 / L69 | `text-sm md:text-lg` | `text-body-lg` |
| L82 プラン名 | `font-heading text-2xl font-bold` | `text-title-lg font-semibold`（DM Sans化） |
| L88 | `text-xs tracking-[0.12em] uppercase` | `text-label uppercase` |
| L92 | `font-heading text-xl`（`highlight`条件は残す） | `text-title font-semibold`（DM Sans化） |

**`src/components/FAQ.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L10/22/33/45/58 回答 | `text-base md:text-lg leading-relaxed` | `text-body-lg` |
| L90 ★**質問** | `font-heading font-semibold … leading-snug text-lg md:text-xl` | `text-title font-semibold`（`font-heading`削除＝DM Sans化） |
| **別件バグ** | FAQ kickerがsticky navに食い込む | セクションのアンカー要素に `scroll-mt-24`（scroll-margin-top）を追加 |

**`src/components/StatsBand.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L28–29 数字 | `font-heading font-bold` + clamp | **触らない**（適合済み） |
| L33 ラベル | `font-medium text-sm md:text-base` | `text-body font-medium` |
| L34 補足 | `text-xs md:text-sm` | `text-caption` |

**`src/components/Footer.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L19/37/47/67 見出し | `font-heading text-xl font-semibold` | `text-title font-semibold`（DM Sans化） |
| L40/56/72/80 リンク・本文 | `text-sm md:text-base` | `text-body-sm` |

### Phase 3 — アプリ（Dashboard / Guide / Lessons）＝全部 DM Sans、inline px 全滅

**`src/app/dashboard/(main)/DashboardClient.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L87–90 eyebrow | `font-medium uppercase` + `style={{fontSize:'12px'}}` | `text-label uppercase`（inline fontSize削除） |
| L99 H1 | `font-heading text-2xl md:text-3xl leading-snug` | **`font-heading text-display-section`**（★セリフ維持の例外。現行 24→30px から **32→48px に拡大**する点に注意。大きすぎたら言って → Dash専用のセリフ小トークンを足す） |
| L162 カードH2 | `font-heading font-bold text-lg md:text-2xl` | `text-title font-semibold` |
| L167 本文 | `text-sm md:text-lg leading-relaxed` | `text-body-lg` |
| L178 / L186 ボタン | `text-sm md:text-base font-medium` | `text-body font-medium` |

**`src/app/dashboard/(main)/guide/page.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L15 / L56 / L84 本文 | `text-base md:text-lg leading-relaxed` | `text-body-lg` |
| L45 | `text-sm md:text-base italic` | `text-body-sm italic` |
| L101 戻るリンク | `text-sm md:text-base font-medium` | `text-body-sm font-medium` |
| L122 H1 | `font-heading text-4xl md:text-5xl leading-tight` | `text-title-lg font-semibold`（セリフ削除） |
| L154 番号バッジ | `font-heading font-bold text-lg` | `text-title font-semibold` |
| L169–170 小見出し | `font-heading font-bold` + `clamp(1.2rem,3vw,1.5rem)` | `text-title font-semibold`（inline fontSize削除） |

**`src/app/dashboard/lessons/LessonsClient.tsx`**（全部 inline `fontSize` → トークン化）
| 行 | 要素 | 現行 | → 変更後 |
|---|---|---|---|
| L147–149 | ゴールドの章ラベル | `fontSize:13, fontWeight:500, letterSpacing:0.05em` | `className="text-label"` + `color:'#C9A84C'`（inline size/weight/spacing削除） |
| L190–192 | レッスン名 | `fontSize:14` | `text-body-sm`（colorのみinline維持） |
| L199–201 | duration | `fontSize:11` | `text-caption` |
| L264–265 | Back to Dashboard | `fontSize:14` | `text-body-sm` |
| L294–296 | ゴールドの章ラベル | `fontSize:13 …` | `text-label` + gold |
| L327–329 | レッスン名 | `fontSize:14` | `text-body-sm` |
| L335–337 | duration | `fontSize:11` | `text-caption` |
| L419–421 | リンク | `fontSize:14` | `text-body-sm` |
| L485–487 | アクティブレッスン名 | `fontSize:15, fontWeight:600` | `text-body font-semibold` |
| L494–496 | duration | `fontSize:12` | `text-caption` |

### Phase 4 —（任意）法務ページ＋applyフォーム

**`terms/page.tsx`・`privacy/page.tsx`・`commercial-disclosure/page.tsx`**（共通パターン）
| 現行 | → 変更後 |
|---|---|
| H1 `font-heading text-3xl md:text-4xl` | `font-heading text-display-section` |
| H2 `font-heading text-2xl`（terms L317/privacy L183） | `text-title-lg font-semibold`（DM Sans化） |
| H3 `font-heading text-lg`（terms L332） | `text-title font-semibold` |
| commercial dt `font-heading text-base`（L109） | `text-body font-semibold` |
| 本文 `text-sm md:text-base` | `text-body` |
| 日付など `text-sm`（L16 等） | `text-caption` |

**`src/app/(public)/apply/ApplyForm.tsx`**
| 行 | 現行 | → 変更後 |
|---|---|---|
| L128 eyebrow | `text-[0.68rem] … tracking-[0.22em] uppercase` | `text-label uppercase` |
| L133 ヒーローH1 | `font-heading …`（inline size） | `font-heading text-display-section` |
| L139 / L160 本文 | `text-base md:text-lg` | `text-body-lg` |
| L156 H1 | `font-heading text-3xl md:text-4xl` | `font-heading text-display-section` |
| L293 / L327 | `text-sm md:text-base` | `text-body` |
| L338 送信ボタン | `text-base` | `text-body` |
| L382 フィールドラベル | `text-base md:text-lg font-bold` | `text-body font-semibold` |
| L387 エラー | `text-xs` | `text-caption` |

---

## 4. 完了チェック（1〜8への対応）

| # | 元の問題 | この変更での解消 |
|---|---|---|
| 1 | Lessonsが inline px・非レスポンシブ・11px | 全部トークン化、pxゼロ、最小13px |
| 2 | タブレット段が無い（base→mdの2段） | 全トークン `clamp()` で375→1280を流体補間 |
| 3 | 見出しスケールが場当たり | `display-section` / `title-lg` / `title` に一本化 |
| 4 | 本文14→18（16飛ばし） | 本文の床を `body-lg`(16→18) / `body`(16) に |
| 5 | Cormorantを小サイズに使用 | セリフ32px床、小見出しはsansへ |
| 6 | 固定サイズが画面幅に無反応 | clampで全部連続スケール |
| 7 | clampがStatsBandだけ | clampが全体の標準に |
| 8 | tracking/leading不統一 | 全部トークンに内包（label=0.18em等に統一） |

## 5. 実装の進め方（推奨）
1. Phase 1 を適用 → `npm run dev` で Hero/共通見出し確認 → デプロイ確認
2. Phase 2 → Service番号・FAQを実機で目視（今回の主目的）
3. Phase 3 → Dashboard/Lessonsで px 残存ゼロを grep 確認：`grep -rn "fontSize" src/app/dashboard`
4. Phase 4 →（任意）法務/apply
5. 最終 grep で漏れ確認：`grep -rEn "text-(xs|3xl|4xl|5xl|6xl)|md:text-" src/ | grep -v display-`
