import React, { useEffect } from 'react';

function CaseStudyModal({ isOpen, onClose, project }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="case-modal__overlay" onClick={handleBackdropClick}>
      <div className="case-modal__content">
        <div className="case-modal__header">
          <h3 className="case-modal__title">{project.title}</h3>
          <button
            className="case-modal__close"
            onClick={onClose}
            aria-label="Fechar detalhes do projeto"
          >
            <i className="uil uil-times"></i>
          </button>
        </div>

        <div className="case-modal__body">
          {project.image && (
            <img src={project.image} alt={project.title} className="case-modal__img" loading="lazy" />
          )}

          <div className="case-modal__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="portfolio__tag">
                {tag}
              </span>
            ))}
          </div>

          <section className="case-modal__section">
            <h4 className="case-modal__section-title">Sobre o projeto</h4>
            <p className="case-modal__section-text">{project.description}</p>
          </section>

          {project.problem && (
            <section className="case-modal__section">
              <h4 className="case-modal__section-title">Problema</h4>
              <p className="case-modal__section-text">{project.problem}</p>
            </section>
          )}

          {project.solution && (
            <section className="case-modal__section">
              <h4 className="case-modal__section-title">Solução</h4>
              <p className="case-modal__section-text">{project.solution}</p>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section className="case-modal__section">
              <h4 className="case-modal__section-title">Funcionalidades</h4>
              <ul className="case-modal__features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {project.result && (
            <section className="case-modal__section">
              <h4 className="case-modal__section-title">Resultado</h4>
              <p className="case-modal__section-text">{project.result}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyModal;
