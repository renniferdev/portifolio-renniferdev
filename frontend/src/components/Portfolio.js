import React, { useState } from 'react';
import Modal from './Modal';

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedProjects, setExpandedProjects] = useState({});

  const MAX_DESCRIPTION_LENGTH = 200;

  const toggleDescription = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const truncateDescription = (description, projectId) => {
    if (description.length <= MAX_DESCRIPTION_LENGTH) {
      return description;
    }

    if (expandedProjects[projectId]) {
      return description;
    }

    return description.substring(0, MAX_DESCRIPTION_LENGTH);
  };

  const featuredProject = {
    id: 1,
    title: 'Allcanci — Gestão Escolar',
    description:
      'Aplicativo desenvolvido para facilitar a gestão escolar, com monitoramento em tempo real de equipamentos, relatórios de consumo e desempenho, e acesso rápido e seguro a informações essenciais para escolas e usuários autorizados. Publicado oficialmente na Google Play Store.',
    image: '/img/allcanci.PNG',
    tags: ['React Native', 'TypeScript', 'Tailwind CSS', 'AWS'],
    modalImages: ['/img/MODAL1allcanci.PNG', '/img/MODALallcanci2.PNG'],
  };

  const projects = [
    {
      id: 2,
      title: 'Fabric & Tales - E-commerce',
      description:
        'Fabric & Tales é um e-commerce moderno desenvolvido com React.js, oferecendo uma experiência de compra fluida e intuitiva. O site apresenta categorias para homens, mulheres e crianças, além de coleções exclusivas e ofertas especiais.',
      image: '/img/fabric-e-tales.png',
      link: 'https://e-commerce-fabric-e-tales.vercel.app/',
      tags: ['React.js', 'E-commerce'],
    },
    {
      id: 3,
      title: 'Desafio de Programação: Teste seus conhecimentos!',
      description:
        'Participe deste quiz interativo desenvolvido em JavaScript, onde você pode testar e aprimorar seu conhecimento em HTML, CSS e JavaScript. Desafie-se com perguntas divertidas e aprenda mais sobre essas tecnologias essenciais para o desenvolvimento web.',
      image: '/img/quiz-img.png',
      link: 'https://quiz-react-kohl-one.vercel.app/',
      tags: ['JavaScript', 'React'],
    },
    {
      id: 4,
      title: 'Barbearia Campelo - Website',
      description:
        'Este é o site da Barbearia Campelo, desenvolvido para promover os serviços de cortes de cabelo, barba e cuidados masculinos. O site combina um design moderno com funcionalidade de agendamento online.',
      image: '/img/barbearia.png',
      link: 'https://barbearia-campelo.vercel.app/',
      tags: ['React.js', 'Landing Page'],
    },
    {
      id: 5,
      title: 'Buscador de Cep',
      description:
        'O BuscaCEP é uma ferramenta simples e rápida para localizar o endereço completo ao inserir um CEP.',
      image: '/img/Cep.png',
      link: 'https://buscador-njns8a1hx-rennifer-teixeiras-projects.vercel.app/',
      tags: ['JavaScript', 'API REST'],
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <div className="section__header">
        <span className="section__eyebrow">meus_projetos</span>
        <h2 className="section__title">Portfólio</h2>
        <span className="section__subtitle">Trabalhos mais recentes</span>
      </div>

      <div className="portfolio__container container">
        {/* Projeto em destaque */}
        <div className="portfolio__featured">
          <img
            src={featuredProject.image}
            alt={featuredProject.title}
            className="portfolio__featured-img"
            loading="lazy"
          />
          <div className="portfolio__featured-data">
            <span className="portfolio__featured-tag">
              <i className="uil uil-android"></i> publicado na play store
            </span>
            <h3 className="portfolio__featured-title">{featuredProject.title}</h3>
            <p className="portfolio__featured-description">
              {featuredProject.description}
            </p>
            <div className="portfolio__tags">
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="portfolio__tag">
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => {
                setSelectedProject(featuredProject);
                setIsModalOpen(true);
              }}
              className="button button--flex"
              style={{ width: 'fit-content' }}
            >
              Ver demonstração
              <i className="uil uil-arrow-right button__icon"></i>
            </button>
          </div>
        </div>

        {/* Demais projetos */}
        <div className="portfolio__grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio__content">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio__img"
                loading="lazy"
              />

              <div className="portfolio__data">
                <h3 className="portfolio__title">{project.title}</h3>

                <div className="portfolio__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="portfolio__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="portfolio__description-wrapper">
                  <p className="portfolio__description">
                    {truncateDescription(project.description, project.id)}
                  </p>
                  {project.description.length > MAX_DESCRIPTION_LENGTH && !expandedProjects[project.id] && (
                    <button
                      onClick={() => toggleDescription(project.id)}
                      className="portfolio__toggle-btn"
                    >
                      Ver mais
                    </button>
                  )}
                </div>
                {project.description.length > MAX_DESCRIPTION_LENGTH && expandedProjects[project.id] && (
                  <button
                    onClick={() => toggleDescription(project.id)}
                    className="portfolio__toggle-btn portfolio__toggle-btn--less"
                  >
                    Ver menos
                  </button>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio__link"
                >
                  Ver demonstração
                  <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedProject.title}
          images={selectedProject.modalImages}
        />
      )}
    </section>
  );
}

export default Portfolio;
