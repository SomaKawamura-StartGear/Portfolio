const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ミドルウェアの設定
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静的ファイルの配信（複数のビルド出力をサポート）
const staticPaths = [
  path.join(__dirname, '../dist/client'),
  path.join(__dirname, '../dist'),
  path.join(__dirname, '../dist/client/assets')
];

staticPaths.forEach(staticPath => {
  app.use(express.static(staticPath, {
    maxAge: '1d',
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      // HTMLファイルはキャッシュしない
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
      }
    }
  }));
});

// SPAのルーティング対応（複数のビルド出力をサポート）
app.get('*', (req, res) => {
  const possiblePaths = [
    path.join(__dirname, '../dist/client/index.html'),
    path.join(__dirname, '../dist/index.html'),
    path.join(__dirname, '../dist/client/index.html')
  ];
  
  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath);
    }
  }
  
  // フォールバック: 基本的なHTMLを返す
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio - Loading...</title>
      </head>
      <body>
        <div style="text-align: center; padding: 2rem;">
          <h1>Portfolio</h1>
          <p>アプリケーションを読み込み中...</p>
          <p>ビルドが完了していない可能性があります。</p>
        </div>
      </body>
    </html>
  `);
});

// エラーハンドリング
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Serving static files from: ${path.join(__dirname, '../dist/client')}`);
});

module.exports = app;
