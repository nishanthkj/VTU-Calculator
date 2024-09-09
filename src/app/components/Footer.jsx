import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Built By</h2>
            <p>Nishanth K J</p>
          </div>

          <div className="footer-section social-media">
            <h2>Follow Me</h2>
            <div className="social-icons">
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/nishanthkj" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://youtube.com/@nishanthkj" aria-label="GitHub">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
