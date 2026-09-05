import React, { useState, useEffect, useRef } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const isScrollingRef = useRef(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
  };

  useEffect(() => {
    const handleScroll = () => {
      // Ignora a detecção se estiver fazendo scroll programático
      if (isScrollingRef.current) {
        return;
      }

      const sections = document.querySelectorAll('section[id], div[id]');
      const scrollY = window.pageYOffset;
      const headerHeight = 72; // Altura do header em pixels
      const offset = headerHeight + 50;

      let currentSection = '';
      let maxTop = -Infinity;

      sections.forEach((current) => {
        const sectionTop = current.offsetTop;
        const sectionHeight = current.offsetHeight;
        const sectionId = current.getAttribute('id');

        // Verifica se a seção está visível na viewport
        if (scrollY + offset >= sectionTop && scrollY < sectionTop + sectionHeight) {
          // Se múltiplas seções estão visíveis, escolhe a que está mais próxima do topo
          if (sectionTop > maxTop) {
            maxTop = sectionTop;
            currentSection = sectionId;
          }
        }
      });

      // Se não encontrou nenhuma seção visível, procura a mais próxima
      if (!currentSection) {
        let closestSection = '';
        let minDistance = Infinity;

        sections.forEach((current) => {
          const sectionTop = current.offsetTop;
          const distance = Math.abs(scrollY + offset - sectionTop);

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = current.getAttribute('id');
          }
        });

        if (closestSection) {
          currentSection = closestSection;
        }
      }

      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    // Chama uma vez ao montar para definir o estado inicial
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica se o clique foi fora do menu e do botão de toggle
      if (
        menuRef.current &&
        toggleButtonRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // Adiciona o listener apenas quando o menu está aberto
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLinkClick = (sectionId, e) => {
    e.preventDefault();
    setActiveLink(sectionId);
    setIsMenuOpen(false);
    
    // Marca que está fazendo scroll programático
    isScrollingRef.current = true;
    
    // Scroll suave para a seção
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Permite detecção de scroll novamente após o scroll terminar
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    } else {
      isScrollingRef.current = false;
    }
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={(e) => handleLinkClick('home', e)}>
          &lt;/Rennifer&gt;
        </a>

        <div 
          ref={menuRef}
          className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} 
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${activeLink === 'home' ? 'active-link' : ''}`}
                onClick={(e) => handleLinkClick('home', e)}
              >
                <i className="uil uil-estate nav__icon"></i> Início
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${activeLink === 'about' ? 'active-link' : ''}`}
                onClick={(e) => handleLinkClick('about', e)}
              >
                <i className="uil uil-user nav__icon"></i> Sobre
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#softskills"
                className={`nav__link ${activeLink === 'softskills' ? 'active-link' : ''}`}
                onClick={(e) => handleLinkClick('softskills', e)}
              >
                <i className="uil uil-swatchbook nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                className={`nav__link ${activeLink === 'portfolio' ? 'active-link' : ''}`}
                onClick={(e) => handleLinkClick('portfolio', e)}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Projetos
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${activeLink === 'contact' ? 'active-link' : ''}`}
                onClick={(e) => handleLinkClick('contact', e)}
              >
                <i className="uil uil-envelope-alt nav__icon"></i> Contato
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            aria-label="Fechar menu"
            onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
          ></i>
        </div>

        <div className="nav__btns">
          <i
            className="uil uil-moon change-theme"
            id="theme-button"
            onClick={toggleTheme}
            role="button"
            tabIndex={0}
            aria-label="Alternar tema claro/escuro"
            onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
          ></i>

          <div
            ref={toggleButtonRef}
            className="nav__toggle"
            id="nav-toggle"
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
          >
            <i className="uil uil-bars"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
