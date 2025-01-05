import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="home">
      <h1 className="hero-heading">Building Decentralized Solutions for a Connected World</h1>
      <section id="hero" className="hero-section">
        <div className="hero-container">
          {/* Professional photo or avatar (optional) */}
          <img src="/assets/profile.jpg" alt="Kapil Dev" className="hero-image" />
        </div>
        <div className="about-container">
          <h2 className="about-heading">Kapil Dev</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I have 2 years of experience building decentralized applications (dApps) using Ethereum and Solana
                blockchain. I specialize in Solidity, Rust and the MERN stack.
              </p>
            </div>
          </div>
          {/* Call-to-action buttons */}
          <div className="hero-buttons">
            <a
              href="/assets/Kapil_Dev_Blockchain_Developer_Resume.pdf" // Replace with your actual resume file path
              className="link-buttons"
              download
            >
              View Resume
            </a>
            <a href="https://github.com/kapildev5262" className="link-buttons">
              <img src="/github.svg" alt="github" className="logo-link" /> Github
            </a>
            <a href="https://www.linkedin.com/in/kapil-dev-b90629290/" className="link-buttons">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
