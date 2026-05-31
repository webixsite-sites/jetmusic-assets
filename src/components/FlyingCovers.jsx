import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './FlyingCovers.css';

// Lista das 7 capas oficiais de alta resolução integradas no repositório GitHub
const covers = [
  {
    id: 1,
    name: 'Bota na Pipokinha',
    src: '/assets/cover_nova/cover_1_2_1x.webp',
    color: '#e31a22',
  },
  {
    id: 2,
    name: 'Intercelestial',
    src: '/assets/cover_nova_2/cover_2_2_1x.webp',
    color: '#00d2ff',
  },
  {
    id: 3,
    name: 'Ery - Maestro dos Fluxos',
    src: '/assets/cover_nova_3/cover_3_1_1x.webp',
    color: '#ffc837',
  },
  {
    id: 4,
    name: 'Arara',
    src: '/assets/cover_arara/cover arara_1x.webp',
    color: '#2aff80',
  },
  {
    id: 5,
    name: 'Piseiro Hawaiano',
    src: '/assets/cover_piseiro/cover piseiro hawaiano_1x.webp',
    color: '#ff007f',
  },
  {
    id: 6,
    name: 'Famosinha',
    src: '/assets/cover_filippo/cover_filippo_1x.webp',
    color: '#e31a22',
  },
  {
    id: 7,
    name: 'Mega Funk',
    src: '/assets/cover_mega_funk/cover_mega funk_1x.webp',
    color: '#8b2aff',
  }
];

export default function FlyingCovers() {
  const containerRef = useRef(null);
  
  // Captura o scroll global
  const { scrollYProgress } = useScroll();

  // Aplica mola (spring) para suavizar a interpolação do scroll e remover trepidação do mouse
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  // Mapeamento dos valores de animação para cada uma das 7 capas ao longo do scroll do site:
  // Scroll Ranges:
  // - 0.00 -> 0.18: Hero (flutuação tridimensional dispersa)
  // - 0.18 -> 0.40: Sobre Nós (alinhamento em linha horizontal de hits deslizando para a esquerda)
  // - 0.40 -> 0.68: Modelos de Negócio (morphing para vinil redondo, espiral/círculo giratório central)
  // - 0.68 -> 0.88: Hall da Fama (arco 3D côncavo curvado flutuante com brilho neon individual)
  // - 0.88 -> 1.00: Rodapé / CTA Final (fade-out e recolhimento)

  // Capa 1: Bota na Pipokinha
  const x1 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['-26vw', '-36vw', '-66vw', '0vw', '-33vw', '-45vw']);
  const y1 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['-6vh', '40vh', '40vh', '15vh', '5vh', '-30vh']);
  const r1 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [-15, 0, 0, 0, 8, 0]);
  const ry1 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0, 0, 0, 0, 35, 0]);
  const s1 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0.8, 1.0, 1.0, 0.6, 0.9, 0.4]);
  const z1 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [5, 10, 10, 5, -100, -50]);

  // Capa 2: Intercelestial
  const x2 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['-16vw', '-24vw', '-54vw', '13.5vw', '-22vw', '-30vw']);
  const y2 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['14vh', '40vh', '40vh', '6.5vh', '1vh', '-30vh']);
  const r2 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [12, 0, 0, 51.4, 5, 0]);
  const ry2 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0, 0, 0, 0, 22, 0]);
  const s2 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0.9, 1.0, 1.0, 0.6, 0.95, 0.4]);
  const z2 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [6, 10, 10, 5, -50, -50]);

  // Capa 3: Ery - Maestro dos Fluxos
  const x3 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['0vw', '-12vw', '-42vw', '14.6vw', '-11vw', '-15vw']);
  const y3 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['-2vh', '40vh', '40vh', '-5vh', '-2vh', '-30vh']);
  const r3 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [-5, 0, 0, 102.8, 2, 0]);
  const ry3 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0, 0, 0, 0, 11, 0]);
  const s3 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [1.1, 1.0, 1.0, 0.6, 1.0, 0.4]);
  const z3 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [10, 10, 10, 5, -10, -50]);

  // Capa 4: Arara
  const x4 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['16vw', '0vw', '-30vw', '3.3vw', '0vw', '0vw']);
  const y4 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['12vh', '40vh', '40vh', '-14.6vh', '-3vh', '-30vh']);
  const r4 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [10, 0, 0, 154.2, 0, 0]);
  const ry4 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0, 0, 0, 0, 0, 0]);
  const s4 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0.9, 1.0, 1.0, 0.6, 1.05, 0.4]);
  const z4 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [6, 10, 10, 5, 0, -50]);

  // Capa 5: Piseiro Hawaiano
  const x5 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['26vw', '12vw', '-18vw', '-9.4vw', '11vw', '15vw']);
  const y5 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['-12vh', '40vh', '40vh', '-11.6vh', '-2vh', '-30vh']);
  const r5 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [-8, 0, 0, 205.6, -2, 0]);
  const ry5 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0, 0, 0, 0, -11, 0]);
  const s5 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0.85, 1.0, 1.0, 0.6, 1.0, 0.4]);
  const z5 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [5, 10, 10, 5, -10, -50]);

  // Capa 6: Famosinha
  const x6 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['-35vw', '24vw', '-6vw', '-14.6vw', '22vw', '30vw']);
  const y6 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['-22vh', '40vh', '40vh', '3.3vh', '1vh', '-30vh']);
  const r6 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [20, 0, 0, 257.0, -5, 0]);
  const ry6 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0, 0, 0, 0, -22, 0]);
  const s6 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0.7, 1.0, 1.0, 0.6, 0.95, 0.4]);
  const z6 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [4, 10, 10, 5, -50, -50]);

  // Capa 7: Mega Funk
  const x7 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['35vw', '36vw', '6vw', '-6.5vw', '33vw', '45vw']);
  const y7 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], ['20vh', '40vh', '40vh', '13.5vh', '5vh', '-30vh']);
  const r7 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [-18, 0, 0, 308.4, -8, 0]);
  const ry7 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0, 0, 0, 0, -35, 0]);
  const s7 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [0.75, 1.0, 1.0, 0.6, 0.9, 0.4]);
  const z7 = useTransform(smoothProgress, [0, 0.18, 0.40, 0.68, 0.88, 1.0], [4, 10, 10, 5, -100, -50]);

  // Morphing de Formato: Quadrado (12px) -> Círculo Vinil (50%) -> Quadrado (12px)
  const borderRadius = useTransform(smoothProgress, [0, 0.38, 0.48, 0.62, 0.72, 1.0], ['12px', '12px', '50%', '50%', '12px', '12px']);

  // Opacidade global das capas: desaparece no final da página (CTA)
  const opacity = useTransform(smoothProgress, [0, 0.88, 0.96, 1.0], [1.0, 1.0, 0.0, 0.0]);

  // Rotação contínua (spin) automática dos vinis durante a fase de círculo (de 0.40 a 0.68)
  const extraSpin = useTransform(smoothProgress, [0.40, 0.68], [0, 720]);

  // Glow colorido individual combinando com a arte das capas (neon backlight glow)
  // Ativado fortemente na Seção 3 (Modelos) e Seção 4 (Hall da Fama)
  const shadowGlow1 = useTransform(smoothProgress, [0.38, 0.48, 0.85, 0.95], ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 30px rgba(227, 26, 34, 0.6)', '0px 0px 30px rgba(227, 26, 34, 0.6)', '0px 0px 0px rgba(0,0,0,0)']);
  const shadowGlow2 = useTransform(smoothProgress, [0.38, 0.48, 0.85, 0.95], ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 30px rgba(0, 210, 255, 0.6)', '0px 0px 30px rgba(0, 210, 255, 0.6)', '0px 0px 0px rgba(0,0,0,0)']);
  const shadowGlow3 = useTransform(smoothProgress, [0.38, 0.48, 0.85, 0.95], ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 30px rgba(255, 200, 55, 0.6)', '0px 0px 30px rgba(255, 200, 55, 0.6)', '0px 0px 0px rgba(0,0,0,0)']);
  const shadowGlow4 = useTransform(smoothProgress, [0.38, 0.48, 0.85, 0.95], ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 30px rgba(42, 255, 128, 0.6)', '0px 0px 30px rgba(42, 255, 128, 0.6)', '0px 0px 0px rgba(0,0,0,0)']);
  const shadowGlow5 = useTransform(smoothProgress, [0.38, 0.48, 0.85, 0.95], ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 30px rgba(255, 0, 127, 0.6)', '0px 0px 30px rgba(255, 0, 127, 0.6)', '0px 0px 0px rgba(0,0,0,0)']);
  const shadowGlow6 = useTransform(smoothProgress, [0.38, 0.48, 0.85, 0.95], ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 30px rgba(227, 26, 34, 0.6)', '0px 0px 30px rgba(227, 26, 34, 0.6)', '0px 0px 0px rgba(0,0,0,0)']);
  const shadowGlow7 = useTransform(smoothProgress, [0.38, 0.48, 0.85, 0.95], ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 30px rgba(139, 42, 255, 0.6)', '0px 0px 30px rgba(139, 42, 255, 0.6)', '0px 0px 0px rgba(0,0,0,0)']);

  const listData = [
    { x: x1, y: y1, r: r1, ry: ry1, s: s1, z: z1, glow: shadowGlow1, ...covers[0] },
    { x: x2, y: y2, r: r2, ry: ry2, s: s2, z: z2, glow: shadowGlow2, ...covers[1] },
    { x: x3, y: y3, r: r3, ry: ry3, s: s3, z: z3, glow: shadowGlow3, ...covers[2] },
    { x: x4, y: y4, r: r4, ry: ry4, s: s4, z: z4, glow: shadowGlow4, ...covers[3] },
    { x: x5, y: y5, r: r5, ry: ry5, s: s5, z: z5, glow: shadowGlow5, ...covers[4] },
    { x: x6, y: y6, r: r6, ry: ry6, s: s6, z: z6, glow: shadowGlow6, ...covers[5] },
    { x: x7, y: y7, r: r7, ry: ry7, s: s7, z: z7, glow: shadowGlow7, ...covers[6] }
  ];

  return (
    <div ref={containerRef} className="flying-covers-viewport">
      <div className="flying-covers-perspective-box">
        {listData.map((item, idx) => {
          // Combina o rotate do scroll com o spin do vinil na fase de círculo
          const combinedRotate = useTransform(smoothProgress, (p) => {
            const baseRot = item.r.get();
            if (p >= 0.40 && p <= 0.68) {
              return baseRot + extraSpin.get();
            }
            return baseRot;
          });

          return (
            <motion.div
              key={item.id}
              className="flying-cover-card"
              style={{
                x: item.x,
                y: item.y,
                rotate: combinedRotate,
                rotateY: item.ry,
                scale: item.s,
                zIndex: item.z,
                opacity: opacity,
                borderRadius: borderRadius,
                boxShadow: item.glow,
              }}
            >
              <div className="cover-inner-3d">
                <img 
                  src={item.src} 
                  alt={item.name} 
                  className="cover-img-real" 
                  style={{ borderRadius: 'inherit' }}
                />
                
                {/* O vinil central aparece como morphing (furo central de vinil) na Seção 3 */}
                <motion.div 
                  className="vinyl-center-hole"
                  style={{
                    opacity: useTransform(smoothProgress, [0.38, 0.48, 0.62, 0.72], [0, 1, 1, 0])
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
