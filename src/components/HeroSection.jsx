import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-info">
            <div className="hero-intro">
              <h1 className="hero-title">
                <span className="greeting">Hi, I'm</span>
                <span className="name">Kapil Dev</span>
              </h1>
              <h2 className="hero-subtitle">Blockchain Developer</h2>
              <p className="hero-description">
                Building decentralized solutions for a connected world. 
                With 2 years of experience in developing dApps using Ethereum 
                and Solana blockchain. Specializing in Solidity, Rust and the MERN stack.
              </p>
              
              <div className="hero-actions">
                <a
                  href="/assets/Kapil_Dev_Blockchain_Developer_Resume.pdf"
                  className="btn-primary"
                  download
                >
                  <i className="icon-download"></i>Download Resume
                </a>
                
                <div className="social-links">
                  <a href="https://github.com/kapildev5262" className="social-link github">
                    <i className="icon-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/kapil-dev-b90629290/" className="social-link linkedin">
                    <i className="icon-linkedin"></i>
                  </a>
                  <a href="mailto:kapildev5262@gmail.com" className="social-link email">
                    <i className="icon-email"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src="/assets/profile.jpg" alt="Kapil Dev" className="hero-image" />
            </div>
            <div className="hero-tech-badges">
              <div className="tech-badge ethereum">Ethereum</div>
              <div className="tech-badge solana">Stellar</div>
              <div className="tech-badge solidity">Solidity</div>
              <div className="tech-badge react">React</div>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <a href="#skills" className="scroll-down">
            <span className="scroll-text">Scroll Down</span>
            <i className="icon-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;