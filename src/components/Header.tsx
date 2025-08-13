import "./Header.css";

export const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1 onClick={scrollToTop} style={{ cursor: "pointer" }}>
            Portfolio
          </h1>
        </div>
        <nav className="navigation">
          <ul className="nav-list">
            <li>
              <a href="#about" className="nav-link">
                about
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
