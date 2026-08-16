import React, { useState, useEffect, useCallback, useRef } from 'react';

function GalleryModal({ isOpen, onClose, title, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images]);

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

  if (!isOpen || !images || images.length === 0) return null;

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
      <div className="gallery-modal__content">
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

        <div
          className="gallery-modal__body"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.length > 1 && (
            <button
              className="gallery-modal__nav gallery-modal__nav--prev"
              onClick={goToPrev}
              aria-label="Imagem anterior"
            >
              <i className="uil uil-angle-left-b"></i>
            </button>
          )}

          <img
            src={images[currentIndex]}
            alt={`${title} - imagem ${currentIndex + 1}`}
            className="gallery-modal__img"
          />

          {images.length > 1 && (
            <button
              className="gallery-modal__nav gallery-modal__nav--next"
              onClick={goToNext}
              aria-label="Próxima imagem"
            >
              <i className="uil uil-angle-right-b"></i>
            </button>
          )}
        </div>

        {images.length > 1 && (
          <div className="gallery-modal__indicator">
            {currentIndex + 1} de {images.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryModal;
