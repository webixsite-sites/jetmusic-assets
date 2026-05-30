import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-glow" />
      
      <div className="hero-container">
        <motion.div 
          className="hero-header-tags"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>SUA MÚSICA</span>
          <span className="separator">•</span>
          <span>NOSSO PALCO.</span>
          <span className="separator">•</span>
          <span>O MUNDO.</span>
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transformamos seu som em um <span className="text-highlight">fenômeno viral</span>.
          <br />
          Pronto para <span className="text-highlight">dominar</span> o TikTok, Spotify e YouTube?
        </motion.h1>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="btn-neon" onClick={() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            Envie sua música agora!
          </button>
        </motion.div>

        {/* Galeria de lançamentos em carrossel 3D */}
        <motion.div 
          className="hero-carousel-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="hero-carousel">
            <div className="carousel-track">
              <div className="carousel-card side left-2">
                <img src="/assets/logo/logo_1x.webp" className="card-placeholder-logo" alt="JetMusic" />
                <div className="card-glow" />
              </div>
              <div className="carousel-card side left-1">
                <img src="/assets/public/assets/tipografia/tipografia_1x.webp" className="card-placeholder-img" alt="Colors" style={{ display: 'none' }} />
                <div className="card-inner-design red-bg">
                  <h3>VIRAL</h3>
                  <p>STARTER</p>
                </div>
                <div className="card-glow" />
              </div>
              <div className="carousel-card active">
                <div className="card-inner-design center-bg">
                  <img src="/assets/logo/logo_1x.webp" className="active-logo" alt="JetMusic Logo" />
                  <h3>JETMUSIC</h3>
                  <p>PRESENTS</p>
                </div>
                <div className="card-glow active-glow" />
              </div>
              <div className="carousel-card side right-1">
                <div className="card-inner-design black-bg">
                  <h3>MAESTRO</h3>
                  <p>FLUXOS</p>
                </div>
                <div className="card-glow" />
              </div>
              <div className="carousel-card side right-2">
                <div className="card-inner-design dark-bg">
                  <h3>BOTA</h3>
                  <p>PIPOKA</p>
                </div>
                <div className="card-glow" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
