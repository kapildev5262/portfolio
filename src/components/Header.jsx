import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <h1 className="logo">
          <span className="logo-text">Kapil</span>
          <span className="logo-highlight">Dev</span>
        </h1>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`menu-icon ${menuOpen ? "open" : ""}`}></span>
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="#hero" className="nav-link" onClick={closeMenu}>
                <i className="icon-about"></i>About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" onClick={closeMenu}>
                <i className="icon-skills"></i>Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-link" onClick={closeMenu}>
                <i className="icon-experience"></i>Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={closeMenu}>
                <i className="icon-projects"></i>Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="contact-btn" onClick={closeMenu}>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
