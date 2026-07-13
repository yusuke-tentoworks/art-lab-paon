# ART LAB PAON（art-lab-paon）

## プロジェクト概要
- **顧客名 / 目的**: ART LAB PAON（中川一也 様）／担当: 井上裕介
- **本番URL**: https://art-lab-paon.netlify.app/
- **ステージング**: GitHub Pages（https://yusuke-tentoworks.github.io/art-lab-paon/）
- **技術スタック**: 静的HTML + Vanilla CSS/JS / Netlify

## 起動・ビルドコマンド
- 開発サーバー: `npx serve .`（ローカル確認用）
- ビルド: なし（静的サイト）
- デプロイ: **mainブランチへのpushでNetlifyが自動ビルド・公開**

## 運用ルール
- コーディング規約は `tentoworks-dev-rules/ai-coding-guidelines/03_coding_management_guidelines.md`、セキュリティは `01_security_guidelines.md`、SEOは `02_seo_performance_guidelines.md` に従う。
- 公開前・大きな修正後は `/legal-check` `/qa-check` を実施する。
- セッション開始時に `進捗ログ.md` を読み、終了時に追記する。詳細は `PROJECT_MEMO.md` を参照。

## 注意事項・制約
- **mainへのpushは即Netlify本番反映**。ローカルで表示確認してからpushすること。
- Instagram連携リンクあり。画像はWebP変換済み・ライセンス確認済み。
- リポジトリに `.DS_Store` がコミットされている（気づいたタイミングで `git rm --cached` で追跡解除してよい）。
