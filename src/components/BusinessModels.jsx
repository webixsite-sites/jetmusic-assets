import React from 'react';
import './BusinessModels.css';

export default function BusinessModels() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="models" className="models-section">
      <div className="models-image-container">
        {/* Renderiza unicamente a fatia 4 original responsiva */}
        <img 
          src="/assets/jetmusic_home_4/jetmusic_home_4_1x.webp" 
          srcSet="/assets/jetmusic_home_4/jetmusic_home_4_1x.webp 1x, 
                  /assets/jetmusic_home_4/jetmusic_home_4_2x.webp 2x, 
                  /assets/jetmusic_home_4/jetmusic_home_4_3x.webp 3x, 
                  /assets/jetmusic_home_4/jetmusic_home_4_4x.webp 4x"
          alt="Modelos de Negócios JetMusic" 
          className="models-main-img" 
        />
        
        {/* Áreas clicáveis e interativas sobrepostas aos botões de planos originais do Figma */}
        <button className="models-interactive-btn btn-plan-1" onClick={scrollToContact} title="Escolher Plano 1" />
        <button className="models-interactive-btn btn-plan-2" onClick={scrollToContact} title="Escolher Plano 2" />
        <button className="models-interactive-btn btn-plan-3" onClick={scrollToContact} title="Escolher Plano 3" />
      </div>
    </section>
  );
}
