import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="contact" className="footer-content">
        <section className="contact-section">
          <h2>Contact Me</h2>
          <p>Email: kapildev5262@gmail.com</p>
          <p>Phone: 9509504256</p>
          <p>Location: Noida</p>
        </section>
        <div>
          <ul>
            <li>
              <a href="https://github.com/kapildev5262">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kapil-dev-b90629290/">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-right">&copy; 2025 Kapil Dev. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
