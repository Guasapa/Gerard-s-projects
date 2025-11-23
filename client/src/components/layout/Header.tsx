import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Full-Stack Starter</h1>
        <nav className="header-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#docs" className="nav-link">Docs</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
