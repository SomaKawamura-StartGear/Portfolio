# Portfolio

Kawamura Soma のポートフォリオサイトです。

## 技術スタック

- React
- TypeScript
- CSS
- Vite
- SWC (ビルドツール)
- Express.js (サーバー)
- Node.js

## セクション構成

- **Header** - ナビゲーション
- **Profile** - 自己紹介
- **About** - 経歴・タイムライン
- **Projects** - 制作実績
- **Contact** - お問い合わせ

## 著作権・クレジット

### アニメーション背景

このポートフォリオで使用しているアニメーション背景は、[Mohaiman](https://codepen.io/mohaiman)氏の作品を参考にしています。

**参考作品**: [Animated Background](https://codepen.io/mohaiman/pen/MQqMyo)

**著作権**: © Mohaiman - すべての権利は原作者に帰属します。

このアニメーション背景は、Mohaiman 氏の許可を得て使用・改変しています。

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発環境での実行

#### フロントエンドのみ（Vite 開発サーバー）

```bash
npm run dev
```

#### SSR 開発サーバー

```bash
npm run start:ssr
```

#### フルスタック開発（フロントエンド + Node.js サーバー）

```bash
npm run dev:full
```

### 本番用ビルド

#### SSR ビルド

```bash
npm run build:ssr
```

#### SWC ビルド（クライアントサイド）

```bash
npm run build:client
```

#### SWC ビルド（サーバーサイド）

```bash
npm run build:server
```

#### 全体のビルド（SWC）

```bash
npm run build:all
```

#### 本番用統合ビルド（SSR + SWC）

```bash
npm run build:production
```

#### サーバー起動

```bash
npm run server
```

#### 本番環境での起動（ビルド + サーバー起動）

```bash
npm run start:production
```

## ビルドシステム

このプロジェクトでは、SSR と SWC の両方を使用して高速なビルドを実現しています：

### SSR（Server-Side Rendering）

- **vite-plugin-ssr**: React アプリケーションのサーバーサイドレンダリング
- **SEO 最適化**: 検索エンジンでのインデックス改善
- **初期表示速度**: サーバーサイドでの HTML 生成

### SWC（Speedy Web Compiler）

- **クライアントサイド**: React アプリケーションを SWC でビルド
- **サーバーサイド**: Node.js/Express サーバーを SWC でビルド
- **高速ビルド**: TypeScript/JavaScript の高速コンパイル

### 開発・本番環境

- **自動再起動**: nodemon によるファイル監視と自動再起動
- **静的ファイル配信**: Express サーバーによる静的ファイル配信
- **複数ビルド対応**: SSR と SWC ビルドの両方をサポート

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

---

**Copyright © 2024 - 2025 Kawamura Soma. All Rights Reserved.**

このポートフォリオサイトの内容・デザイン・コードの著作権は、Kawamura Soma に帰属します。
