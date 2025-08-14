import "./Header.css";

export const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link"
              >
                about
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="nav-link"
              >
                projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link"
              >
                contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
