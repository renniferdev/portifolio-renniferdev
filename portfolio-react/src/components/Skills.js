import React, { useState, useEffect, useRef } from 'react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Agrupar categorias em Front-end, Back-end e Outros
  const groupedCategories = [
    {
      name: 'Front-end',
      icon: 'uil uil-brackets-curly',
      color: '#7c3aed',
      technologies: [
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'React.js', icon: 'devicon-react-original colored' },
        { name: 'Next.js', icon: 'devicon-nextjs-original-wordmark colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
        { name: 'SASS', icon: 'devicon-sass-plain colored' },
      ]
    },
    {
      name: 'Back-end',
      icon: 'uil uil-server',
      color: '#059669',
      technologies: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express', icon: 'devicon-express-original colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      ]
    },
    {
      name: 'DevOps & Tools',
      icon: 'uil uil-cloud',
      color: '#dc2626',
      technologies: [
        { name: 'AWS', image: '/img/aws.png' },
        { name: 'Docker', icon: 'devicon-docker-plain colored' },
        { name: 'Vercel', icon: 'devicon-vercel-original colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original colored' },
        { name: 'React Native', icon: 'devicon-react-original colored' },
        { name: 'Webpack', icon: 'devicon-webpack-plain colored' },
        { name: 'Babel', icon: 'devicon-babel-plain colored' },
        { name: 'Figma', icon: 'devicon-figma-plain colored' },
      ]
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveCategory((prev) => (prev + 1) % groupedCategories.length);
      }, 4000); // Muda a cada 4 segundos
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, groupedCategories.length]);

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Retoma auto-play após 10s
  };

  const handlePrev = () => {
    setActiveCategory((prev) => (prev - 1 + groupedCategories.length) % groupedCategories.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setActiveCategory((prev) => (prev + 1) % groupedCategories.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="technologies" id="softskills">
      <h2 className="technologies__title">Minhas Tecnologias</h2>
      
      {/* Carousel Container */}
      <div 
        className="tech-carousel-wrapper"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="tech-carousel-container">
          {groupedCategories.map((category, index) => {
            const position = index - activeCategory;
            const isActive = position === 0;
            const isPrev = position === -1 || position === groupedCategories.length - 1;
            const isNext = position === 1 || position === -(groupedCategories.length - 1);

            return (
              <div
                key={index}
                className={`tech-carousel-slide ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
                style={{ '--category-color': category.color }}
              >
                <div className="tech-carousel-slide__content">
                  <div className="tech-carousel-slide__header">
                    <div className="tech-carousel-slide__icon-wrapper">
                      <i className={category.icon}></i>
                    </div>
                    <h3 className="tech-carousel-slide__title">{category.name}</h3>
                  </div>
                  
                  <div className="tech-carousel-slide__grid">
                    {category.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex} 
                        className={`tech-carousel-item ${isActive ? 'active' : ''}`}
                        style={{ 
                          animationDelay: `${techIndex * 0.05}s`
                        }}
                      >
                        <div className="tech-carousel-item__icon">
                          {tech.image ? (
                            <img src={tech.image} alt={tech.name} className="tech-carousel-item__img" />
                          ) : (
                            <i className={tech.icon}></i>
                          )}
                        </div>
                        <span className="tech-carousel-item__name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="tech-carousel-nav tech-carousel-nav--prev"
          onClick={handlePrev}
          aria-label="Categoria anterior"
        >
          <i className="uil uil-angle-left-b"></i>
        </button>
        <button 
          className="tech-carousel-nav tech-carousel-nav--next"
          onClick={handleNext}
          aria-label="Próxima categoria"
        >
          <i className="uil uil-angle-right-b"></i>
        </button>

        {/* Dots Navigation */}
        <div className="tech-carousel-dots">
          {groupedCategories.map((_, index) => (
            <button
              key={index}
              className={`tech-carousel-dot ${activeCategory === index ? 'active' : ''}`}
              onClick={() => handleCategoryClick(index)}
              aria-label={`Ir para ${groupedCategories[index].name}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="tech-carousel-progress">
            <div 
              key={activeCategory}
              className="tech-carousel-progress__bar"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
