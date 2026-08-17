import React, { useState, useEffect, useCallback, useRef } from 'react';

function GalleryModal({ isOpen, onClose, title, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);
  const touchStartX = useRef(null);

  const items = (images || []).map((item) =>
    typeof item === 'string' ? { src: item } : item
  );

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsMaximized(false);
    }
  }, [isOpen]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, goToPrev, goToNext]);

  if (!isOpen || items.length === 0) return null;

  const current = items[currentIndex];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 50;

    if (deltaX > SWIPE_THRESHOLD) {
      goToPrev();
    } else if (deltaX < -SWIPE_THRESHOLD) {
      goToNext();
    }

    touchStartX.current = null;
  };

  return (
    <div className="gallery-modal__overlay" onClick={handleBackdropClick}>
      <div className={`gallery-modal__content ${isMaximized ? 'gallery-modal__content--maximized' : ''}`}>
        {!isMaximized && (
          <div className="gallery-modal__header">
            <h3 className="gallery-modal__title">{title}</h3>
            <button
              className="gallery-modal__close"
              onClick={onClose}
              aria-label="Fechar galeria"
            >
              <i className="uil uil-times"></i>
            </button>
          </div>
        )}

        <div
          className="gallery-modal__body"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="gallery-modal__media">
            {isMaximized && (
              <button
                className="gallery-modal__close gallery-modal__close--floating"
                onClick={onClose}
                aria-label="Fechar galeria"
              >
                <i className="uil uil-times"></i>
              </button>
            )}

            <button
              className="gallery-modal__maximize"
              onClick={() => setIsMaximized((prev) => !prev)}
              aria-label={isMaximized ? 'Restaurar tamanho da imagem' : 'Maximizar imagem'}
              aria-pressed={isMaximized}
            >
              <i className={`uil ${isMaximized ? 'uil-compress-alt' : 'uil-expand-alt'}`}></i>
            </button>

            {items.length > 1 && (
              <button
                className="gallery-modal__nav gallery-modal__nav--prev"
                onClick={goToPrev}
                aria-label="Imagem anterior"
              >
                <i className="uil uil-angle-left-b"></i>
              </button>
            )}

            <img
              src={current.src}
              alt={current.caption?.title ? `${title} - ${current.caption.title}` : `${title} - imagem ${currentIndex + 1}`}
              className="gallery-modal__img"
            />

            {items.length > 1 && (
              <button
                className="gallery-modal__nav gallery-modal__nav--next"
                onClick={goToNext}
                aria-label="Próxima imagem"
              >
                <i className="uil uil-angle-right-b"></i>
              </button>
            )}
          </div>

          {items.length > 1 && !isMaximized && (
            <div className="gallery-modal__indicator">
              {currentIndex + 1} de {items.length}
            </div>
          )}

          {current.caption && !isMaximized && (
            <div className="gallery-modal__caption">
              {current.caption.title && (
                <h4 className="gallery-modal__caption-title">{current.caption.title}</h4>
              )}
              {current.caption.paragraphs?.map((paragraph, i) => {
                const match = paragraph.match(/^(Valor gerado:)\s*(.*)$/);
                return (
                  <p key={i} className="gallery-modal__caption-text">
                    {match ? (
                      <>
                        <strong>{match[1]}</strong> {match[2]}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;
