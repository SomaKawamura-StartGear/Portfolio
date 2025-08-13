# Cloudflare Pages デプロイ手順

## 前提条件

- Cloudflare アカウント
- GitHub リポジトリ

## 手動デプロイ手順

### 1. プロジェクトをビルド

```bash
npm run build
```

### 2. Cloudflare Dashboard にアクセス

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) にログイン
2. 左サイドバーから「Pages」を選択
3. 「Create a project」をクリック

### 3. GitHub リポジトリを接続

1. 「Connect to Git」を選択
2. GitHub アカウントを認証
3. `Portfolio`リポジトリを選択

### 4. ビルド設定

- **Project name**: `portfolio` (または希望の名前)
- **Production branch**: `main`
- **Framework preset**: `None`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (空のまま)

### 5. 環境変数設定

必要に応じて環境変数を追加：

- `NODE_VERSION`: `20`

### 6. デプロイ実行

「Save and Deploy」をクリックしてデプロイを開始

## 自動デプロイ

GitHub リポジトリにプッシュすると、自動的にデプロイが実行されます。

## カスタムドメイン設定

1. Pages プロジェクトの「Custom domains」タブで設定
2. ドメインを追加して DNS レコードを設定

## トラブルシューティング

### ビルドエラー

- Node.js のバージョンを確認（v20 以上推奨）
- 依存関係が正しくインストールされているか確認
- `wrangler.toml`の設定が正しいか確認

### 表示エラー

- ビルド出力ディレクトリが`dist`になっているか確認
- 静的ファイルが正しく生成されているか確認
- SPAルーティングの設定が正しいか確認

### よくあるエラーと解決方法

#### "Missing entry-point to Worker script or to assets directory"
- `wrangler.toml`で`[assets]`セクションを正しく設定
- `directory = "./dist"`を指定

#### "Unexpected fields found in build field"
- `[build]`セクションを削除し、`[assets]`セクションを使用
- Cloudflare Pages用の設定に変更

## 参考リンク

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Build Configuration](https://vitejs.dev/guide/build.html)
