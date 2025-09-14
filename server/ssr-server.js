const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// 静的ファイルの配信
app.use(express.static(path.join(__dirname, '../dist'), {
  maxAge: '1d',
  etag: true,
  lastModified: true
}));

// React コンポーネントを動的に読み込む関数
function loadReactComponent() {
  try {
    // ビルドされたReactコンポーネントを読み込み
    const componentPath = path.join(__dirname, '../dist/client/src/pages/index.page.js');
    if (fs.existsSync(componentPath)) {
      return require(componentPath);
    }
    
    // フォールバック: 基本的なコンポーネント
    return {
      Page: () => React.createElement('div', { 
        style: { textAlign: 'center', padding: '2rem' } 
      }, [
        React.createElement('h1', { key: 'title' }, 'Portfolio'),
        React.createElement('p', { key: 'desc' }, 'React SSR が動作しています！'),
        React.createElement('div', { key: 'info', style: { marginTop: '1rem' } }, [
          React.createElement('p', { key: 'ssr' }, '✅ Server-Side Rendering'),
          React.createElement('p', { key: 'css' }, '✅ CSS Styles Included'),
          React.createElement('p', { key: 'hydration' }, '❌ No Hydration (Static SSR)')
        ])
      ])
    };
  } catch (error) {
    console.error('Error loading React component:', error);
    return {
      Page: () => React.createElement('div', { 
        style: { textAlign: 'center', padding: '2rem', color: 'red' } 
      }, 'Error loading React component')
    };
  }
}

// CSSファイルの内容を読み込む関数
function loadCSS() {
  try {
    const cssPath = path.join(__dirname, '../dist/assets');
    if (fs.existsSync(cssPath)) {
      const files = fs.readdirSync(cssPath);
      const cssFile = files.find(file => file.endsWith('.css'));
      if (cssFile) {
        return fs.readFileSync(path.join(cssPath, cssFile), 'utf8');
      }
    }
    
    // フォールバック: インラインCSS
    return `
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        color: white;
      }
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }
      p {
        font-size: 1.2rem;
        margin: 0.5rem 0;
        opacity: 0.9;
      }
      .feature {
        background: rgba(255,255,255,0.1);
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 10px;
        backdrop-filter: blur(10px);
      }
    `;
  } catch (error) {
    console.error('Error loading CSS:', error);
    return '';
  }
}

// SSR用のHTMLテンプレート
function generateHTML(reactHTML, css) {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio - SSR</title>
  <meta name="description" content="Server-Side Rendered Portfolio">
  <style>${css}</style>
</head>
<body>
  <div id="root">${reactHTML}</div>
  <script>
    // SSR検証用のスクリプト
    console.log('SSR HTML loaded successfully');
    console.log('React content:', document.getElementById('root').innerHTML);
  </script>
</body>
</html>`;
}

// SSRルート
app.get('/', (req, res) => {
  try {
    console.log('SSR request received for:', req.url);
    
    // Reactコンポーネントを読み込み
    const { Page } = loadReactComponent();
    
    // ReactをHTMLにレンダリング
    const reactHTML = ReactDOMServer.renderToString(React.createElement(Page));
    
    // CSSを読み込み
    const css = loadCSS();
    
    // 完全なHTMLを生成
    const fullHTML = generateHTML(reactHTML, css);
    
    console.log('SSR completed successfully');
    res.send(fullHTML);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send(`
      <!DOCTYPE html>
      <html>
        <head><title>SSR Error</title></head>
        <body>
          <h1>Server-Side Rendering Error</h1>
          <p>Error: ${error.message}</p>
        </body>
      </html>
    `);
  }
});

// その他のルートもSSRで処理
app.get('*', (req, res) => {
  res.redirect('/');
});

// エラーハンドリング
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`🚀 SSR Server running on http://localhost:${PORT}`);
  console.log(`📁 Serving static files from: ${path.join(__dirname, '../dist')}`);
  console.log(`🎯 SSR enabled for all routes`);
});

module.exports = app;
