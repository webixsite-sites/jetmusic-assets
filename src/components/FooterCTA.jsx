import React from 'react';
import './FooterCTA.css';

export default function FooterCTA() {
  const handleCtaClick = () => {
    alert('Formulário de envio de demo em breve! Entre em contato conosco pelo e-mail: contato@jetmusicgroup.com.br');
  };

  return (
    <section id="contact" className="footer-cta-section">
      <div className="footer-cta-image-container">
        <img 
          src="/assets/jetmusic_home_6/jetmusic_home_6_1x.webp" 
          srcSet="/assets/jetmusic_home_6/jetmusic_home_6_1x.webp 1x, 
                  /assets/jetmusic_home_6/jetmusic_home_6_2x.webp 2x, 
                  /assets/jetmusic_home_6/jetmusic_home_6_3x.webp 3x, 
                  /assets/jetmusic_home_6/jetmusic_home_6_4x.webp 4x"
          alt="Contato JetMusic" 
          className="footer-cta-main-img" 
        />
        
        {/* Botão interativo sobreposto ao botão "Envie sua música agora!" desenhado na fatia 6 */}
        <button 
          className="footer-interactive-btn" 
          onClick={handleCtaClick}
          title="Envie sua música agora!"
        />
      </div>
    </section>
  );
}
