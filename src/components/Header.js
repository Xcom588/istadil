import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Logo />
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#stories" className="nav-link">Stories</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <button className="cta-button">Subscribe</button>
      </div>
    </header>
  );
};

export default Header;
