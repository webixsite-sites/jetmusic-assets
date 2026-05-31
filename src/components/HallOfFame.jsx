import React from 'react';
import './HallOfFame.css';

export default function HallOfFame() {
  return (
    <section id="hall-fame" className="hall-fame-section">
      <div className="hall-fame-image-container">
        {/* Renderiza unicamente a fatia 5 original responsiva */}
        <img 
          src="/assets/jetmusic_home_5/jetmusic_home_5_1x.webp" 
          srcSet="/assets/jetmusic_home_5/jetmusic_home_5_1x.webp 1x, 
                  /assets/jetmusic_home_5/jetmusic_home_5_2x.webp 2x, 
                  /assets/jetmusic_home_5/jetmusic_home_5_3x.webp 3x, 
                  /assets/jetmusic_home_5/jetmusic_home_5_4x.webp 4x"
          alt="Hall da Fama JetMusic" 
          className="hall-fame-main-img" 
        />
      </div>
    </section>
  );
}
