import React, { useEffect } from 'react';
import Typed from 'typed.js';

function Home() {
  useEffect(() => {
    const typed = new Typed('.text', {
      strings: ['Desenvolvedor Full Stack'],
      typeSpeed: 50,
      backSpeed: 100,
      typeDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/rennifer-amilton-teixeira-08983219a/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://www.tiktok.com/@futurodevrennifer?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://github.com/renniferdev"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>

          <div className="home__img-container">
            <div className="home__img-wrapper">
              <div className="home__img-glow"></div>
              <img src="/img/rennifer.jpg" alt="Rennifer" className="home__img-profile" />
            </div>
          </div>

          <div className="home__data">
            <h1 className="home__title">Olá, meu nome é Rennifer!</h1>
            <h3 className="home__subtitle">
              Eu sou <span className="text"></span>
            </h3>
            <p className="home__description">
              Desenvolvedor Full Stack | React.js | Node.js | JavaScript | Em Transição de Carreira para TI
            </p>
            <a href="#contact" className="button button--flex">
              Entre em Contato <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
