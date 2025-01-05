import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1 className="logo">Kapil Dev</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#hero" className="reffer">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="reffer">
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" className="reffer">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="reffer">
            Projects
          </a>
        </li>        
        <li>
          <a href="#contact" className="btn-primary">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
