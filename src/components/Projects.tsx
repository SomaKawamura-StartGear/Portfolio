import "./Projects.css";

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">レシピ生成アプリ</h3>
              <span className="project-role">フロントエンドエンジニア</span>
            </div>
            <p className="project-description">
              ハッカソンで開発したレシピ生成アプリ。フロントエンド開発を担当。
            </p>
            <div className="project-links">
              <a
                href="https://github.com/misonikomipan/recipe-to-music"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">焼肉屋Webページ</h3>
              <span className="project-role">全般</span>
            </div>
            <p className="project-description">
              焼肉店のWebサイト制作。デザインからのコーディングを担当。
            </p>
            <div className="project-links">
              <span className="project-link disabled">公開不可</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">ランニングルート生成アプリ</h3>
              <span className="project-role">バックエンドエンジニア</span>
            </div>
            <p className="project-description">
              ランニングルートを自動生成するアプリ。バックエンド開発を担当。
            </p>
            <div className="project-links">
              <a
                href="https://github.com/KEIDOROa/RouteRun"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">SES自社開発サービス</h3>
              <span className="project-role">全般</span>
            </div>
            <p className="project-description">
              企業向けの自社開発サービス。設計後から実装までを担当。
            </p>
            <div className="project-links">
              <span className="project-link disabled">公開不可</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
