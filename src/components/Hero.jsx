import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-image-container">
        {/* Renderiza unicamente a fatia 1 original responsiva */}
        <img 
          src="/assets/jetmusic_home/jetmusic_home_1x.webp" 
          srcSet="/assets/jetmusic_home/jetmusic_home_1x.webp 1x, 
                  /assets/jetmusic_home/jetmusic_home_2x.webp 2x, 
                  /assets/jetmusic_home/jetmusic_home_3x.webp 3x, 
                  /assets/jetmusic_home/jetmusic_home_4x.webp 4x"
          alt="JetMusic Home" 
          className="hero-main-img" 
        />
        
        {/* Botão de interatividade invisível sobreposto exatamente sobre o botão verde limão original */}
        <button 
          className="hero-interactive-btn" 
          onClick={scrollToContact}
          title="Envie sua música agora!"
        />
      </div>
    </section>
  );
}
