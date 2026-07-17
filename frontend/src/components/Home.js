import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import CVModal from './CVModal';

function Home() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed('.home__typed-text', {
      strings: ['Desenvolvedor Full Stack'],
      typeSpeed: 50,
      backSpeed: 30,
      typeDelay: 1000,
      backDelay: 5000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const handleViewCV = () => {
    setIsCVModalOpen(true);
  };

  const technologies = [
    'React.js',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'AWS',
  ];

  const stats = [
    { value: '1 app', label: 'publicado na Play Store' },
    { value: '5+', label: 'projetos entregues' },
    { value: 'Full Stack', label: 'do banco à interface' },
  ];

  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content">
          <div className="home__data">
            <span className="home__eyebrow">desenvolvedor_full_stack</span>

            <h1 className="home__title">
              Rennifer Teixeira constrói produtos <span className="home__title-highlight">completos</span>, do banco de dados à interface.
            </h1>

            <h2 className="home__subtitle">
              Sou <span className="home__typed-text"></span>. Crio aplicações web e mobile escaláveis com React, Node.js e AWS — do primeiro commit à publicação nas lojas.
            </h2>

            <div className="home__stats">
              {stats.map((stat, index) => (
                <div key={index} className="home__stat">
                  <span className="home__stat-value">{stat.value}</span>
                  <span className="home__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="home__technologies">
              {technologies.map((tech, index) => (
                <span key={index} className="home__tech-chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="home__actions">
              <a href="#portfolio" className="home__cta-button">
                <span>Ver Projetos</span>
                <i className="uil uil-arrow-right home__cta-icon"></i>
              </a>
              <a
                href="https://wa.me/5531984163357"
                target="_blank"
                rel="noopener noreferrer"
                className="home__cta-button home__cta-button--secondary"
              >
                <span>Falar comigo</span>
                <i className="uil uil-whatsapp home__cta-icon"></i>
              </a>
            </div>

            <button onClick={handleViewCV} className="home__cv-link">
              <i className="uil uil-file-pdf"></i>
              Baixar currículo em PDF
            </button>

            <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />

            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/rennifer-amilton-teixeira-08983219a/"
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-link"
                aria-label="LinkedIn"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://github.com/renniferdev"
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-link"
                aria-label="GitHub"
              >
                <i className="uil uil-github-alt"></i>
              </a>
            </div>
          </div>

          <div className="home__profile-wrapper">
            <div className="home__profile-frame"></div>
            <img
              src="/img/rennifer.jpg"
              alt="Rennifer - Desenvolvedor Full Stack"
              className="home__profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
