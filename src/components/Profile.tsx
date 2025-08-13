import "./Profile.css";

export const Profile = () => {
  return (
    <section id="profile" className="profile">
      <div className="profile-container">
        <div className="profile-image text-center justify-center flex">
          <img src="\assets\images\profile.png" alt="Kawamura Soma" />
        </div>
        <div className="profile-info">
          <h2 className="name">Kawamura Soma</h2>
          <p className="title">フロントエンジニア & バックエンジニア</p>
          <div className="social-links">
            <a
              href="https://github.com/KEIDOROa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
            >
              <img src="/assets/images/github.svg" alt="GitHub" />
            </a>
            <a
              href="https://qiita.com/KEIDORO"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link qiita"
            >
              <img src="/assets/images/qiita.svg" alt="Qiita" />
            </a>
            <a
              href="https://x.com/777so_jp"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link x"
            >
              <img src="/assets/images/x.svg" alt="X (Twitter)" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
