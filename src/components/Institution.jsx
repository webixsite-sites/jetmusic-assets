import React from 'react';
import { motion } from 'framer-motion';
import './Institution.css';

export default function Institution() {
  const releases = [
    {
      id: 1,
      title: "INTERCELESTIAL",
      artist: "DJ TWOZ",
      cover: "/assets/jetmusic_home_3/jetmusic_home_3_1x.webp", // Capa representativa
      customStyle: { background: 'linear-gradient(135deg, #0e1e38 0%, #173d6b 100%)' }
    },
    {
      id: 2,
      title: "BOTA NA PIPOKINHA",
      artist: "DJ PABLO RB",
      cover: "/assets/jetmusic_home_3/jetmusic_home_3_1x.webp", // Capa representativa
      customStyle: { background: 'linear-gradient(135deg, #200424 0%, #4a0d54 100%)' }
    },
    {
      id: 3,
      title: "O MAESTRO DOS FLUXOS",
      artist: "DJ ERY",
      cover: "/assets/jetmusic_home_3/jetmusic_home_3_1x.webp", // Capa representativa
      customStyle: { background: 'linear-gradient(135deg, #1c1503 0%, #423207 100%)' }
    }
  ];

  return (
    <section id="launches" className="institution-section">
      <div className="launches-container">
        <div className="launches-grid">
          {releases.map((release) => (
            <motion.div 
              key={release.id} 
              className="release-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: release.id * 0.15 }}
            >
              <div className="release-cover-wrapper">
                {/* Criamos um card estilizado e texturizado de música */}
                <div className="release-cover" style={release.customStyle}>
                  <div className="cover-vinyl-effect" />
                  <div className="cover-glow" />
                  <div className="cover-content">
                    <span className="cover-disc-icon">💿</span>
                    <h4>{release.title}</h4>
                    <p>{release.artist}</p>
                  </div>
                </div>
              </div>
              <h3 className="release-title">{release.title}</h3>
              <p className="release-artist">{release.artist}</p>
            </motion.div>
          ))}
        </div>

        {/* Bloco de Texto Institucional */}
        <div className="manifesto-container">
          <motion.p 
            className="manifesto-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Com <span className="text-highlight">bilhões de streams</span> administrados e parcerias 
            estratégicas com os maiores players da indústria, somos a ponte entre seu talento e o sucesso viral. 
            Entendemos o jogo: TikTok, games, edits. Se você tem a batida,{' '}
            <span className="text-bold-white">nós temos o plano para</span> <span className="text-highlight font-extra">fazê-la explodir</span>.
          </motion.p>
          
          <motion.div 
            className="scroll-line-container"
            initial={{ height: 0 }}
            whileInView={{ height: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="scroll-line" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
