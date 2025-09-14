import "./Contact.css";

export const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:kawamurasoma@gmail.com";
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="email-section">
            <div className="email-card" onClick={handleEmailClick}>
              <div className="email-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="email-info">
                <span className="email-label">Email</span>
                <span className="email-address">kawamurasoma@gmail.com</span>
              </div>
              <div className="email-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="contact-note">クリックするとメールアプリが起動します</p>
        </div>
      </div>
    </section>
  );
};
