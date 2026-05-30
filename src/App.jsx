import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Institution from './components/Institution';
import BusinessModels from './components/BusinessModels';
import HallOfFame from './components/HallOfFame';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  
  useEffect(() => {
    // Efeito suave de Scroll (Fade In) das seções utilizando IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Para de observar uma vez que já está visível
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Adiciona a classe e observa todas as seções principais
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* Navbar flutuante */}
      <Navbar />

      {/* Conteúdo principal */}
      <main>
        {/* Seção 1: Hero Cover */}
        <Hero />

        {/* Seção 2: Lançamentos & Manifesto */}
        <Institution />

        {/* Seção 3 & 5: Modelos de Negócios (Frente e Verso dos Cards) */}
        <BusinessModels />

        {/* Seção 4: Hall da Fama (Arco 3D & Slider Player) */}
        <HallOfFame />

        {/* Seção 6: CTA Final */}
        <FooterCTA />
      </main>

      {/* Rodapé do site */}
      <Footer />
    </div>
  );
}
