import React, { useEffect } from 'react';
import Typed from 'typed.js';

function Home() {
  useEffect(() => {
    const typed = new Typed('.home__typed-text', {
      strings: ['Desenvolvedor Full Stack'],
      typeSpeed: 50,
      backSpeed: 100,
      typeDelay: 1000,
      backDelay: 5000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const handleDownloadCV = () => {
    const cvPath = '/img/Rennifer-Teixeira-Curriculo-Desenvolvedor-Full Stack.pdf';
    
    // Abre em uma nova página
    window.open(cvPath, '_blank');
    
    // Faz o download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Rennifer-Teixeira-Curriculo-Desenvolvedor-Full Stack.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const technologies = [
    'React.js',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'AWS',
  ];

  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content">
          {/* Foto de Perfil com Efeito Moderno */}
          <div className="home__profile-wrapper">
            <div className="home__profile-glow"></div>
            <div className="home__profile-border"></div>
            <img 
              src="/img/rennifer.jpg" 
              alt="Rennifer - Desenvolvedor Full Stack" 
              className="home__profile-img" 
            />
          </div>

          {/* Conteúdo Principal */}
          <div className="home__data">
            <h1 className="home__title">
              Olá, meu nome é <span className="home__title-highlight">Rennifer</span>!
            </h1>
            <h2 className="home__subtitle">
              Eu sou <span className="home__typed-text"></span>
            </h2>
            
            {/* Tecnologias em Chips */}
            <div className="home__technologies">
              {technologies.map((tech, index) => (
                <span key={index} className="home__tech-chip">
                  {tech}
                </span>
              ))}
            </div>

            {/* Botão CTA */}
            <button onClick={handleDownloadCV} className="home__cta-button">
              <span>Baixar CV</span>
              <i className="uil uil-download-alt home__cta-icon"></i>
            </button>
          </div>

          {/* Ícones Sociais - Horizontalmente Alinhados */}
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/rennifer-amilton-teixeira-08983219a/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link home__social-link--linkedin"
              aria-label="LinkedIn"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://wa.me/5531984163357"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link home__social-link--whatsapp"
              aria-label="WhatsApp"
            >
              <i className="uil uil-whatsapp"></i>
            </a>
            <a
              href="https://github.com/renniferdev"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link home__social-link--github"
              aria-label="GitHub"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
