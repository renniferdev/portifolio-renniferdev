import React, { useState } from 'react';
import Modal from './Modal';
import GalleryModal from './GalleryModal';

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedProjects, setExpandedProjects] = useState({});
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryProject, setGalleryProject] = useState(null);

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
      title: 'Mapa Comercial e Inteligência Geográfica',
      description:
        'Desenvolvimento de mapa web e mobile integrado ao Bitrix24. Visualização de clientes, escolas, prefeituras, empresas e oportunidades comerciais. Filtros por responsável, etapa do funil e localização. Criação e organização de rotas comerciais. Otimização do carregamento de pins por área visível, paginação, cache e carregamento sob demanda. Integração de diferentes bases de dados com geolocalização.',
      image: '/img/mapa/1.png',
      tags: ['React', 'React Native', 'Node.js', 'Bitrix24', 'Mapas'],
      images: ['/img/mapa/1.png', '/img/mapa/2.png', '/img/mapa/3.png', '/img/mapa/4.png'],
    },
    {
      id: 3,
      title: 'Simulador de Orçamentos e Automação de Documentos',
      description:
        'Desenvolvimento de sistema de PDV e simulação de propostas. Uso em feiras, eventos e operações comerciais. Formulários inteligentes com cálculos automáticos e regras de negócio. Automação da geração e do preenchimento de contratos, propostas e documentos corporativos em Python. Redução de erros manuais e tarefas repetitivas no fluxo comercial.',
      image: '/img/simulador/1.png',
      tags: ['React', 'Python', 'Automação', 'PDV'],
      images: ['/img/simulador/1.png', '/img/simulador/2.png', '/img/simulador/3.png', '/img/simulador/4.png'],
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

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__link"
                  >
                    Ver demonstração
                    <i className="uil uil-arrow-right"></i>
                  </a>
                )}

                {project.images && project.images.length > 0 && (
                  <button
                    onClick={() => {
                      setGalleryProject(project);
                      setIsGalleryOpen(true);
                    }}
                    className="portfolio__gallery-btn"
                  >
                    Ver imagens
                    <i className="uil uil-arrow-right"></i>
                  </button>
                )}
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

      {galleryProject && (
        <GalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          title={galleryProject.title}
          images={galleryProject.images}
        />
      )}
    </section>
  );
}

export default Portfolio;
