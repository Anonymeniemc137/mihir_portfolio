import React, { useState } from 'react';
import './headerstyle.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  const handleResumeClick = () => {
    window.open('src/assets/Resume/Mihir-Dave-6y-fullstack-dev-resume-php-wp-fin.pdf', '_blank');
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <img
            src="src/assets/images/logo.png"
            className="portfolio-logo"
            alt="Site Logo"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
          ☰
        </button>

        {/* Navigation */}
        <nav className={`navigation-container ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section, index) => (
              <li key={section}>
                <button onClick={() => scrollToSection(section)}>
                  <span>0{index + 1}.</span> {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <button onClick={handleResumeClick}>
                <span>07.</span> Resume
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
