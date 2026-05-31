import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          {/* Nova logo oficial transparente importada do Figma */}
          <img 
            src="/assets/logo_nova/Logo Jet_1x.webp" 
            srcSet="/assets/logo_nova/Logo Jet_1x.webp 1x, 
                    /assets/logo_nova/Logo Jet_2x.webp 2x, 
                    /assets/logo_nova/Logo Jet_3x.webp 3x, 
                    /assets/logo_nova/Logo Jet_4x.webp 4x"
            alt="JetMusic Logo" 
            className="logo-img-nova" 
          />
          <span className="logo-text">JET<span>MUSIC</span></span>
        </div>

        <ul className="navbar-links">
          <li onClick={() => scrollToSection('hero')}>Início</li>
          <li onClick={() => scrollToSection('launches')}>Lançamentos</li>
          <li onClick={() => scrollToSection('models')}>Planos</li>
          <li onClick={() => scrollToSection('hall-fame')}>Hall da Fama</li>
        </ul>

        <div className="navbar-cta">
          <button className="btn-contact" onClick={() => scrollToSection('contact')}>
            Fazer Parte
          </button>
        </div>
      </div>
    </nav>
  );
}
