import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">&lt;/Rennifer&gt;</h1>
            <span className="footer__subtitle">Desenvolvedor Full Stack</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#portfolio" className="footer__link">
                Portfólio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Fale comigo
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://github.com/renniferdev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
            >
              <i className="uil uil-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rennifer-amilton-teixeira-08983219a/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
            >
              <i className="uil uil-linkedin"></i>
            </a>
          </div>

          <p className="footer__copy">
            &#169; Rennifer Teixeira. Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
