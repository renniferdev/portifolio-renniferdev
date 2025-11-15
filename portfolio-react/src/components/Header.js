import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    setIsMenuOpen(false);
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
              <a 
                href="#home" 
                className={`nav__link ${activeLink === 'home' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('home')}
              >
                <i className="uil uil-home nav__icon"></i> Página inicial
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#about" 
                className={`nav__link ${activeLink === 'about' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('about')}
              >
                <i className="uil uil-user nav__icon"></i> Sobre
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#softskills" 
                className={`nav__link ${activeLink === 'softskills' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('softskills')}
              >
                <i className="uil uil-briefcase nav__icon"></i> Soft skills
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#portfolio" 
                className={`nav__link ${activeLink === 'portfolio' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('portfolio')}
              >
                <i className="uil uil-image nav__icon"></i> Meus Projetos
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#contact" 
                className={`nav__link ${activeLink === 'contact' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('contact')}
              >
                <i className="uil uil-envelope nav__icon"></i> Fale comigo
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
