import React, { useState, useEffect } from 'react';

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <a href="#" className="scrollup" id="scroll-up" onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}>
          <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
      )}
    </>
  );
}

export default ScrollUp;
