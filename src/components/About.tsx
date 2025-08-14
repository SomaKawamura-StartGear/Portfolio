import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2023/12 ~</div>
            <div className="timeline-content">
              <h3>スタートプログラミング株式会社</h3>
              <p className="timeline-role">メンター アルバイト</p>
              <p className="timeline-description">
                主に小中高生にスクラッチ、html、css、jsを指導
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2024/06 ~ 12</div>
            <div className="timeline-content">
              <h3>Crosshare</h3>
              <p className="timeline-role">業務委託</p>
              <p className="timeline-description">フロントエンド業務を担当</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2025/07 ~</div>
            <div className="timeline-content">
              <h3>Pactom</h3>
              <p className="timeline-role">長期インターン</p>
              <p className="timeline-description">
                実践的な開発経験を積みながら、プロダクト開発に携わる
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
