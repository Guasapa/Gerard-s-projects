import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Full-Stack Starter. Built with React + Node.js + TypeScript
        </p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="#docs" className="footer-link">
            Documentation
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
