import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, Settings, Share2, Disc } from 'lucide-react';
import './HallOfFame.css';

export default function HallOfFame() {
  const songs = [
    {
      id: 1,
      title: "BOTA NA PIPOKINHA",
      artist: "DJ PABLO RB",
      cover: "/assets/jetmusic_home_3/jetmusic_home_3_1x.webp",
      color: "rgba(227, 26, 34, 0.4)",
      customStyle: { background: 'linear-gradient(135deg, #200424 0%, #4a0d54 100%)' }
    },
    {
      id: 2,
      title: "INTERCELESTIAL",
      artist: "DJ TWOZ",
      cover: "/assets/jetmusic_home_3/jetmusic_home_3_1x.webp",
      color: "rgba(23, 61, 107, 0.4)",
      customStyle: { background: 'linear-gradient(135deg, #0e1e38 0%, #173d6b 100%)' }
    },
    {
      id: 3,
      title: "FAMOSINHA",
      artist: "DJ CAIO VIEIRA",
      cover: "/assets/jetmusic_home_3/jetmusic_home_3_1x.webp",
      color: "rgba(219, 137, 13, 0.4)",
      customStyle: { background: 'linear-gradient(135deg, #422904 0%, #b87508 100%)' }
    },
    {
      id: 4,
      title: "PISEIRO HAWAIANO",
      artist: "DJ PABLO RB",
      cover: "/assets/jetmusic_home_3/jetmusic_home_3_1x.webp",
      color: "rgba(13, 166, 171, 0.4)",
      customStyle: { background: 'linear-gradient(135deg, #022b2d 0%, #067275 100%)' }
    },
    {
      id: 5,
      title: "NEW FUNK",
      artist: "DJ PABLO RB",
      cover: "/assets/jetmusic_home_3/jetmusic_home_3_1x.webp",
      color: "rgba(184, 13, 219, 0.4)",
      customStyle: { background: 'linear-gradient(135deg, #2e0238 0%, #6d0782 100%)' }
    }
  ];

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35); // porcentagem de reprodução inicial simulada
  
  const sliderRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    setIsPlaying(true);
    setProgress(0);
  };

  const handlePrev = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
    setIsPlaying(true);
    setProgress(0);
  };

  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hall-fame" className="hall-fame-section">
      <div className="hall-fame-container">
        
        {/* Arco Flutuante de Capas (Hall da Fama) */}
        <div className="floating-arc-container">
          <div className="arc-background-glow" />
          <div className="capas-arc">
            {songs.concat(songs.slice(0, 2)).map((song, index) => {
              // Posiciona as 7 capas em uma curva côncava estilizada
              const angle = -120 + index * 40; // distribuição de ângulos
              const radians = (angle * Math.PI) / 180;
              const radiusX = 350; // raio horizontal
              const radiusY = 80;  // raio vertical para fazer a curva
              
              const x = Math.sin(radians) * radiusX;
              const y = -Math.cos(radians) * radiusY + 30; // desloca para formar a curva
              
              return (
                <motion.div
                  key={`arc-${index}`}
                  className="floating-capa-card"
                  style={{
                    left: `calc(50% + ${x}px - 60px)`,
                    top: `calc(50% + ${y}px - 80px)`,
                    boxShadow: `0 8px 30px ${song.color}`
                  }}
                  animate={{
                    y: [0, -12, 0]
                  }}
                  transition={{
                    duration: 4 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                >
                  <div className="capa-inner" style={song.customStyle}>
                    <Disc className="disc-spinning" style={{ animationPlayState: 'running' }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Título do Hall da Fama */}
        <div className="hall-header">
          <h2 className="hall-title">
            <span className="text-highlight">Hall</span> da Fama
          </h2>
          <p className="hall-subtext">
            Conheça os fenômenos que a Jet Music Group ajudou a criar. De batidas que dominaram o TikTok a faixas que explodiram no Spotify e YouTube, nossos artistas estão redefinindo o cenário da música urbana.
          </p>
        </div>

        {/* Músicas que participou - Catálogo Slider */}
        <div className="catalog-container">
          <div className="catalog-header">
            <h3>Músicas que a <span className="text-highlight">JetMusic</span> participou:</h3>
            <div className="slider-controls">
              <button className="slider-btn" onClick={() => slide('left')}>◀</button>
              <button className="slider-btn" onClick={() => slide('right')}>▶</button>
            </div>
          </div>

          <div className="catalog-slider" ref={sliderRef}>
            {songs.map((song) => (
              <motion.div 
                key={song.id}
                className={`catalog-item ${currentSong.id === song.id ? 'active-item' : ''}`}
                onClick={() => {
                  setCurrentSong(song);
                  setIsPlaying(true);
                  setProgress(0);
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="catalog-cover" style={song.customStyle}>
                  <div className="catalog-cover-vinyl" />
                  <div className="catalog-play-overlay">
                    <Play className="play-icon" />
                  </div>
                </div>
                <h4>{song.title}</h4>
                <p>{song.artist}</p>
              </motion.div>
            ))}
          </div>

          {/* Indicador de navegação - Bolinha vermelha centralizada */}
          <div className="slider-indicator-container">
            <div className="slider-indicator-track">
              {songs.map((song) => (
                <div 
                  key={`ind-${song.id}`}
                  className={`slider-indicator-dot ${currentSong.id === song.id ? 'active-dot' : ''}`}
                  onClick={() => setCurrentSong(song)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Player de Áudio Flutuante - IDÊNTICO AO MOCKUP DO FIGMA */}
        <AnimatePresence>
          <motion.div 
            className="media-player-wrapper glass-panel"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="player-inner">
              <div className="player-left-controls">
                <button className="player-control-btn" onClick={handlePrev}><SkipBack /></button>
                <button className="player-control-btn play-pause-main" onClick={handlePlayPause}>
                  {isPlaying ? <Pause /> : <Play />}
                </button>
                <button className="player-control-btn" onClick={handleNext}><SkipForward /></button>
              </div>

              <div className="player-now-playing glass-panel">
                <div className="now-playing-cover" style={currentSong.customStyle}>
                  <Disc className={`disc-mini-spin ${isPlaying ? 'spinning' : ''}`} />
                </div>
                <div className="now-playing-info">
                  <span className="song-title-mini">{currentSong.title}</span>
                  <span className="song-artist-mini">{currentSong.artist}</span>
                </div>
                
                {/* Barra de Progresso do Player */}
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: `${progress}%` }} />
                </div>

                <div className="player-sub-controls">
                  <button className="player-sub-btn"><Share2 size={16} /></button>
                  <span className="options-dots">•••</span>
                </div>
              </div>

              <div className="player-right-controls">
                <button className="player-control-btn"><Share2 /></button>
                <button className="player-control-btn"><Settings /></button>
                <button className="player-control-btn"><Volume2 /></button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
