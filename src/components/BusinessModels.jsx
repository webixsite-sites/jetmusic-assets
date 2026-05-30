import React from 'react';
import { motion } from 'framer-motion';
import './BusinessModels.css';

export default function BusinessModels() {
  const models = [
    {
      id: 1,
      title: "Viral Starter",
      tagline: "Start",
      desc: "Artistas independentes e produtores com faixas inéditas e um potencial viral que ainda não foi explorado.",
      coverStyle: { background: 'linear-gradient(135deg, #0e1e38 0%, #173d6b 100%)' },
      benefits: [
        "Distribuição Digital Completa: Sua música nas maiores plataformas (Spotify, TikTok, YouTube, etc.).",
        "Estratégias de Viralização: Nosso time especialista em TikTok e tendências da internet vai criar o buzz que sua música precisa.",
        "Marketing de Performance Inicial: Campanhas focadas em alcançar o público certo e gerar os primeiros streams.",
        "Desenvolvimento Artístico: Orientação para lapidar seu som e sua imagem."
      ]
    },
    {
      id: 2,
      title: "Bota na Pipokinha",
      tagline: "Growth",
      desc: "Artistas que já têm uma base de fãs, alguns lançamentos e talvez até um hit local, mas querem escalar para o próximo nível.",
      coverStyle: { background: 'linear-gradient(135deg, #200424 0%, #4a0d54 100%)' },
      benefits: [
        "Estratégia de Marketing Acelerada: Campanhas digitais robustas, com foco em audiência, retenção e posicionamento cultural.",
        "Otimização de Conteúdo: Produção e curadoria de material para TikTok, YouTube Shorts e Reels que engaja e viraliza.",
        "Parcerias Estratégicas: Conexão com influenciadores, marcas e outros artistas para ampliar seu alcance.",
        "Análise de Dados Avançada: Insights para entender seu público e otimizar cada lançamento."
      ]
    },
    {
      id: 3,
      title: "Bota na Pipokinha", // Mantendo idêntico ao Figma do usuário
      tagline: "Global Elite",
      desc: "Artistas estabelecidos ou com um projeto de alto potencial que buscam transcender fronteiras e levar a música brasileira para o cenário global.",
      coverStyle: { background: 'linear-gradient(135deg, #1c1503 0%, #423207 100%)' },
      benefits: [
        "Internacionalização da Carreira: Estratégias de marketing e distribuição focadas em mercados globais.",
        "Licenciamento e Sincronização (Sync): Oportunidades para sua música em filmes, séries, games e publicidade.",
        "Administração de Direitos Autorais e Fonográficos Global: Proteção e monetização em escala mundial.",
        "Networking Global: Acesso à nossa rede de contatos na indústria musical internacional."
      ]
    }
  ];

  return (
    <section id="models" className="models-section">
      <div className="models-container">
        {/* Grid de Cards 3D Flip */}
        <div className="cards-grid">
          {models.map((model) => (
            <motion.div 
              key={model.id}
              className="card-flip-container"
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: model.id * 0.15 }}
            >
              <div className="card-flip-inner">
                {/* Frente do Card */}
                <div className="card-front">
                  <div className="card-front-cover" style={model.coverStyle}>
                    <span className="cover-icon-overlay">🔥</span>
                    <div className="cover-vinyl-stripes" />
                    <div className="cover-glow-radial" />
                    <div className="cover-info">
                      <span className="cover-tag">{model.tagline}</span>
                      <h4>{model.title}</h4>
                    </div>
                  </div>
                  <div className="card-front-body">
                    <h3>{model.title}</h3>
                    <p className="card-front-desc">{model.desc}</p>
                    <div className="card-action-hint">
                      Passe o mouse para ver detalhes ➔
                    </div>
                  </div>
                </div>

                {/* Verso do Card */}
                <div className="card-back">
                  <span className="card-back-title">{model.title}</span>
                  <div className="card-back-btn">O que oferecemos:</div>
                  <div className="benefits-glass-box">
                    <ul className="benefits-list">
                      {model.benefits.map((benefit, i) => (
                        <li key={i}>
                          <span className="check-bullet">✦</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Headline de Modelos de Negócio */}
        <div className="models-header">
          <h2 className="models-title">
            Modelos de <span className="text-highlight">negócios</span>
          </h2>
          <p className="models-subtext">
            Nosso modelo é simples e transparente: investimos em você, cuidamos da distribuição digital, marketing de performance, viralização e administração de direitos. Quando sua música decola, dividimos os resultados. É um alinhamento total: só ganhamos se você ganhar.
          </p>
        </div>
      </div>
    </section>
  );
}
