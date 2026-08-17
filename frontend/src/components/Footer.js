import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">&lt;/Rennifer&gt;</h1>
            <span className="footer__subtitle">Desenvolvedor Full Stack</span>
            <span className="footer__stack">React.js • React Native • Node.js • TypeScript</span>
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
              aria-label="GitHub"
            >
              <i className="uil uil-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rennifer-amilton-teixeira-08983219a/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="LinkedIn"
            >
              <i className="uil uil-linkedin"></i>
            </a>
            <a
              href="https://wa.me/5531984163357"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="WhatsApp"
            >
              <i className="uil uil-whatsapp"></i>
            </a>
            <a
              href="mailto:rennifer10@gmail.com"
              className="footer__social"
              aria-label="Email"
            >
              <i className="uil uil-envelope"></i>
            </a>
          </div>

          <p className="footer__copy">
            &#169; {year} Rennifer Teixeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
