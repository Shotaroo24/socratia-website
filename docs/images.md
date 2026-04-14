# 画像・動画アセット

## 配置先
`public/images/` ディレクトリ（動画含む）

## 必要なアセット一覧

### 動画

| ファイル名 | 用途 | セクション | Vimeo ID | 状態 |
|-----------|------|-----------|----------|------|
| `Hero Final 2 (With Irasuto).mp4` | Hero埋め込み動画 | Hero | 1151308515 | ✅ 準備済 |

Hero動画の実装方法：
- 方法A（推奨）: Vimeo埋め込み `https://player.vimeo.com/video/1151308515` → 帯域節約
- 方法B: mp4を `public/images/` に配置して `<video>` タグで直接再生

### 画像

| ファイル名 | 用途 | セクション | 状態 |
|-----------|------|-----------|------|
| `hero-page.*` | Heroセクションの背景/イメージ | Hero | ✅ 準備済 |
| `hero-thumbnail.*` | 動画サムネイル | Hero | ✅ 準備済 |
| `textbook.*` | テキストブック学習のイメージ | Service - Textbook Learning | ✅ 準備済 |
| `video.*` | ビデオ学習のイメージ | Service - Video Learning | ✅ 準備済 |
| `live-lesson.*` | ライブレッスンのイメージ | Service - Live Lesson | ✅ 準備済 |
| `support.*` | サポートのイメージ | Service - Support | ✅ 準備済 |
| `logo.*` | Socratiaロゴ | Nav | ✅ 準備済 |
| `og-image.png` | OGP画像（SNSシェア用） | meta | ⬜ 未準備（後からでOK） |

※ 拡張子（`.*`）は実際のファイルに合わせること。`C:\Socratia\images\` の中身を確認。

## ルール
- プロジェクト作成後、`C:\Socratia\images\` の中身を `public/images/` にコピーする
- 画像コンポーネントは `next/image` を使用（最適化のため）
- 推奨サイズ: サービス画像 800x600px、OGP 1200x630px

## デザイン参照用スクリーンショット

配置先: `C:\Socratia\images\screenshots\`

元サイト（LearnWorlds）のCSSはweb fetchで正確に取れないため、以下のスクショをデザインの参考にすること。レイアウト・配置・雰囲気の参考用であり、完全再現ではなくリッチに作り替える。

| ファイル名 | 内容 |
|-----------|------|
| `screenshot-hero.png` | Heroセクション全体（動画の配置含む） |
| `screenshot-features.png` | Featuresセクション（3カラムカード） |
| `screenshot-service.png` | Serviceセクション（画像+テキスト交互レイアウト） |
| `screenshot-cta.png` | Free Trial CTAセクション |
| `screenshot-faq.png` | FAQセクション |
| `screenshot-footer.png` | Footer |
| `screenshot-mobile.png` | モバイル表示（あれば） |

※ 全部撮れなくても、迷いそうな部分だけでOK

## 現在の元サイトの画像URL（参考）
以下はLearnWorlds上のURLなので直接使用しない。構図の参考のみ：
- テキストブック: `lwfiles.mycourse.app/.../1bc46dca...jpg`
- ビデオ: `lwfiles.mycourse.app/.../6b557694...jpg`
- ライブレッスン: `lwfiles.mycourse.app/.../2e9ed87b...jpg`
- サポート: `lwfiles.mycourse.app/.../27dd504d...jpg`
