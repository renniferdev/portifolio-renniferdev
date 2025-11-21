import React, { useState } from 'react';
import Modal from './Modal';

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedProjects, setExpandedProjects] = useState({});

  const MAX_DESCRIPTION_LENGTH = 250;

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

  const projects = [
    {
      id: 1,
      title: 'Allcanci - Gestão Escolar',
      description:
        'Primeiro lançamento oficial do aplicativo Fill! Agora você pode acompanhar suas máquinas, visualizar recargas e consultar relatórios de forma rápida e simples. Allcanci é um aplicativo desenvolvido para facilitar a gestão escolar, oferecendo acesso rápido e seguro a informações essenciais para escolas e usuários autorizados. Principais funcionalidades: Monitoramento em tempo real das máquinas Fill • Relatórios de consumo e desempenho',
      image: '/img/allcanci.PNG',
      link: '#',
      modalImages: ['/img/MODAL1allcanci.PNG', '/img/MODALallcanci2.PNG'],
    },
    {
      id: 2,
      title: 'Fabric & Tales - E-commerce',
      description:
        'Fabric & Tales é um e-commerce moderno desenvolvido com React.js, oferecendo uma experiência de compra fluida e intuitiva. O site apresenta categorias para homens, mulheres e crianças, além de coleções exclusivas e ofertas especiais.',
      image: '/img/fabric-e-tales.png',
      link: 'https://e-commerce-fabric-e-tales.vercel.app/',
    },
    {
      id: 3,
      title: 'Desafio de Programação: Teste seus conhecimentos!',
      description:
        'Participe deste quiz interativo desenvolvido em JavaScript, onde você pode testar e aprimorar seu conhecimento em HTML, CSS e JavaScript. Desafie-se com perguntas divertidas e aprenda mais sobre essas tecnologias essenciais para o desenvolvimento web.',
      image: '/img/quiz-img.png',
      link: 'https://quiz-react-kohl-one.vercel.app/',
    },
    {
      id: 4,
      title: 'Barbearia Campelo - Website',
      description:
        'Este é o site da Barbearia Campelo, desenvolvido para promover os serviços de cortes de cabelo, barba e cuidados masculinos. O site combina um design moderno com funcionalidade de agendamento online.',
      image: '/img/barbearia.png',
      link: 'https://barbearia-campelo.vercel.app/',
    },
    {
      id: 5,
      title: 'Buscador de Cep',
      description:
        'O BuscaCEP é uma ferramenta simples e rápida para localizar o endereço completo ao inserir um CEP.',
      image: '/img/Cep.png',
      link: 'https://buscador-njns8a1hx-rennifer-teixeiras-projects.vercel.app/',
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfólio</h2>
      <span className="section__subtitle">Trabalhos mais recentes</span>

      <div className="portfolio__container container">
        <div className="test">
          {projects.map((project) => (
            <div key={project.id} className="portfolio__content grid">
              {project.modalImages ? (
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                  className="button button--flex button--small portfolio__button"
                >
                  Demonstração
                  <i className="uil uil-arrow-right button__icon"></i>
                </button>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  Demonstração
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              )}
              <img src={project.image} alt={project.title} className="portfolio__img" />

              <div className="portfolio__data">
                <h3 className="portfolio__title">{project.title}</h3>
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
              </div>
            </div>
          ))}
        </div>

        <div className="swiper-pagination"></div>
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
