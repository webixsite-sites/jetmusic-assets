import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-info">
          <p>© {currentYear} JetMusic Group. Todos os direitos reservados.</p>
        </div>
        <div className="footer-meta-links">
          <a href="#privacy">Privacidade</a>
          <a href="#terms">Termos de Uso</a>
          <a href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
