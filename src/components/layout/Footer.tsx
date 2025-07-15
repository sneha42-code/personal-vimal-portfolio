import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Vimal Singh</h4>
            <p>AI-HR Expert & Trainer</p>
            <p>Transforming organizations through AI-powered human resources</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/vimalsingh" target="_blank" rel="noopener noreferrer">
                in
              </a>
              <a href="https://twitter.com/vimalsingh" target="_blank" rel="noopener noreferrer">
                𝕏
              </a>
              <a href="https://youtube.com/@vimalsingh" target="_blank" rel="noopener noreferrer">
                ▶
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/training">Training Programs</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#training">AI-HR Training</a></li>
              <li><a href="#consulting">Consulting</a></li>
              <li><a href="#workshops">Workshops</a></li>
              <li><a href="#speaking">Speaking</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: vimal@aihrexpert.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Location: Global (Remote)</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Vimal Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;