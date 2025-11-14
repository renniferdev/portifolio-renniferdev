import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          &lt;/Rennifer&gt;
        </a>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link" onClick={() => setIsMenuOpen(false)}>
                <i className="uil uil-estate nav__icon"></i> Página inicial
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={() => setIsMenuOpen(false)}>
                <i className="uil nav__icon uil-user"></i> Sobre
              </a>
            </li>

            <li className="nav__item">
              <a href="#softskills" className="nav__link" onClick={() => setIsMenuOpen(false)}>
                <i className="uil nav__icon uil-user"></i> Soft skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link" onClick={() => setIsMenuOpen(false)}>
                <i className="uil nav__icon uil-scenery"></i> Meus Projetos
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={() => setIsMenuOpen(false)}>
                <i className="uil nav__icon uil-message"></i> Fale comigo
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" id="nav-close" onClick={toggleMenu}></i>
        </div>

        <div className="nav__btns">
          <i className="uil uil-moon change-theme" id="theme-button" onClick={toggleTheme}></i>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
