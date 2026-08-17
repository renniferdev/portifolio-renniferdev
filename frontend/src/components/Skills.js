import React, { useState } from 'react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const groupedCategories = [
    {
      name: 'Linguagens',
      icon: 'uil uil-brackets-curly',
      technologies: [
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      ],
    },
    {
      name: 'Front-end',
      icon: 'uil uil-monitor',
      technologies: [
        { name: 'React.js', icon: 'devicon-react-original colored' },
        { name: 'Next.js', icon: 'devicon-nextjs-original-wordmark colored' },
        { name: 'React Native', icon: 'devicon-react-original colored' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
        { name: 'SASS', icon: 'devicon-sass-plain colored' },
      ],
    },
    {
      name: 'Back-end',
      icon: 'uil uil-server',
      technologies: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express', icon: 'devicon-express-original colored' },
        { name: 'REST APIs', icon: 'uil uil-server-network' },
      ],
    },
    {
      name: 'Banco de Dados',
      icon: 'uil uil-database',
      technologies: [
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'DynamoDB', icon: 'devicon-dynamodb-plain colored' },
        { name: 'Prisma ORM', icon: 'devicon-prisma-original colored' },
      ],
    },
    {
      name: 'DevOps & Cloud',
      icon: 'uil uil-cloud',
      technologies: [
        { name: 'AWS', image: '/img/aws.png' },
        { name: 'Docker', icon: 'devicon-docker-plain colored' },
        { name: 'Vercel', icon: 'devicon-vercel-original colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original colored' },
      ],
    },
    {
      name: 'Ferramentas & Integrações',
      icon: 'uil uil-wrench',
      technologies: [
        { name: 'Bling', icon: 'uil uil-invoice' },
        { name: 'Bitrix24', icon: 'uil uil-puzzle-piece' },
      ],
    },
  ];

  return (
    <div className="technologies" id="softskills">
      <span className="section__eyebrow" style={{ textAlign: 'center' }}>
        minhas_tecnologias
      </span>
      <h2 className="technologies__title">Stack técnica</h2>
      <span className="technologies__subtitle">Tudo em um só lugar — sem esperar carrossel</span>

      <div className="skills__tabs" role="tablist">
        {groupedCategories.map((category, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeCategory === index}
            className={`skills__tab ${activeCategory === index ? 'active' : ''}`}
            onClick={() => setActiveCategory(index)}
          >
            <i className={category.icon}></i>
            {category.name}
          </button>
        ))}
      </div>

      <div className="skills__grid" role="tabpanel">
        {groupedCategories[activeCategory].technologies.map((tech, index) => (
          <div key={index} className="skills__item" style={{ animationDelay: `${index * 0.04}s` }}>
            <div className="skills__item-icon">
              {tech.image ? (
                <img src={tech.image} alt={tech.name} />
              ) : (
                <i className={tech.icon}></i>
              )}
            </div>
            <span className="skills__item-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
