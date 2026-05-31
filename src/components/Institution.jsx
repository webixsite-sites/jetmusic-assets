import React from 'react';
import './Institution.css';

export default function Institution() {
  return (
    <section id="launches" className="institution-section">
      {/* Bloco de Lançamentos - Fatia 2 */}
      <div className="institution-block">
        <img 
          src="/assets/jetmusic_home_2/jetmusic_home_2_1x.webp" 
          srcSet="/assets/jetmusic_home_2/jetmusic_home_2_1x.webp 1x, 
                  /assets/jetmusic_home_2/jetmusic_home_2_2x.webp 2x, 
                  /assets/jetmusic_home_2/jetmusic_home_2_3x.webp 3x, 
                  /assets/jetmusic_home_2/jetmusic_home_2_4x.webp 4x"
          alt="Lançamentos JetMusic" 
          className="institution-img" 
        />
      </div>

      {/* Bloco de Manifesto - Fatia 3 */}
      <div className="institution-block">
        <img 
          src="/assets/jetmusic_home_3/jetmusic_home_3_1x.webp" 
          srcSet="/assets/jetmusic_home_3/jetmusic_home_3_1x.webp 1x, 
                  /assets/jetmusic_home_3/jetmusic_home_3_2x.webp 2x, 
                  /assets/jetmusic_home_3/jetmusic_home_3_3x.webp 3x, 
                  /assets/jetmusic_home_3/jetmusic_home_3_4x.webp 4x"
          alt="Manifesto JetMusic" 
          className="institution-img" 
        />
      </div>
    </section>
  );
}
