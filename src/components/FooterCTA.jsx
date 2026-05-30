import React from 'react';
import { motion } from 'framer-motion';
import './FooterCTA.css';

export default function FooterCTA() {
  return (
    <section id="contact" className="footer-cta-section">
      <div className="footer-cta-container">
        
        {/* Logotipo Circular Secundário da JetMusic */}
        <motion.div 
          className="footer-logo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo Circular do Jato */}
          <div className="circular-jet-logo">
            <span className="jet-icon">✈</span>
            <svg viewBox="0 0 100 100" className="circular-logo-text">
              <path id="textPath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text>
                <textPath href="#textPath" startOffset="0%" fill="#ffffff" className="logo-svg-text">
                  JET MUSIC GROUP • JET MUSIC GROUP •
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>

        {/* Título Principal */}
        <motion.h2 
          className="footer-cta-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Sua Jornada <span className="title-outlined-box">Começa Aqui</span>
        </motion.h2>

        {/* Subtexto */}
        <motion.p 
          className="footer-cta-subtext"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Pronto para levar sua música para o próximo nível? A Jet Music Group está sempre em busca de novos talentos e batidas inovadoras. Envie sua demo, conte-nos sobre seu projeto e deixe nossa equipe especializada analisar seu potencial.
        </motion.p>

        {/* Botão Neon Verde */}
        <motion.div
          className="footer-cta-action"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="btn-neon" onClick={() => alert('Formulário de envio de demo em breve!')}>
            Envie sua música agora!
          </button>
        </motion.div>

      </div>
    </section>
  );
}
