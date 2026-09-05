import React, { useState } from 'react';
import GalleryModal from './GalleryModal';
import CaseStudyModal from './CaseStudyModal';

function Portfolio() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryProject, setGalleryProject] = useState(null);
  const [isCaseOpen, setIsCaseOpen] = useState(false);
  const [caseProject, setCaseProject] = useState(null);

  const openCaseStudy = (project) => {
    setCaseProject(project);
    setIsCaseOpen(true);
  };

  const projects = [
    {
      id: 2,
      title: 'Mapa Comercial e Inteligência Geográfica',
      description:
        'Desenvolvimento de mapa web e mobile integrado ao Bitrix24. Visualização de clientes, escolas, prefeituras, empresas e oportunidades comerciais. Filtros por responsável, etapa do funil e localização. Criação e organização de rotas comerciais. Otimização do carregamento de pins por área visível, paginação, cache e carregamento sob demanda. Integração de diferentes bases de dados com geolocalização.',
      image: '/img/mapa/1.jpeg',
      tags: ['React', 'React Native', 'Node.js', 'Bitrix24', 'Mapas'],
      images: [
        {
          src: '/img/mapa/1.jpeg',
          caption: {
            title: 'Mapa Comercial com Inteligência Geográfica',
            paragraphs: [
              'Centraliza escolas, clientes, oportunidades e negócios do funil comercial em uma única visualização geográfica, transformando os dados do CRM em uma ferramenta prática para a equipe comercial.',
              'Valor gerado: mais clareza territorial, redução do tempo gasto procurando clientes e melhor direcionamento das ações comerciais.',
            ],
          },
        },
        {
          src: '/img/mapa/2.jpeg',
          caption: {
            title: 'Navegação Comercial Orientada por Localização',
            paragraphs: [
              'O vendedor consegue visualizar os negócios próximos, consultar informações da escola e acessar ações comerciais diretamente pelo mapa, identificando quais clientes estão perto da sua posição.',
              'Valor gerado: menos deslocamentos desnecessários, melhor planejamento das visitas e maior produtividade do vendedor em campo.',
            ],
          },
        },
        {
          src: '/img/mapa/3.jpeg',
          caption: {
            title: 'Criação e Compartilhamento de Rotas Comerciais',
            paragraphs: [
              'O vendedor pode selecionar escolas e clientes, montar uma rota personalizada, reorganizar os pontos e compartilhar o planejamento antes de iniciar as visitas.',
              'Valor gerado: planejamento antecipado, redução de tempo operacional e melhor aproveitamento da agenda comercial.',
            ],
          },
        },
        {
          src: '/img/mapa/4.jpeg',
          caption: {
            title: 'Backend Otimizado com Carregamento Geográfico Sob Demanda',
            paragraphs: [
              'O mapa consulta apenas os registros dentro da área visível (Bounding Box), buscando novos dados sob demanda conforme o usuário navega ou altera o zoom — sem carregar toda a base nacional de uma vez. As atualizações do backend chegam ao frontend via Server-Sent Events (SSE), sem consultas repetitivas.',
              'Bounding Box (BBOX): consulta geográfica limitada aos limites visíveis do mapa. Carregamento sob demanda: apenas os dados necessários para a região visualizada são buscados. SSE (Server-Sent Events): canal pelo qual o servidor envia atualizações ao frontend em tempo real.',
              'Valor gerado: carregamento mais rápido, menor transferência de dados, menor consumo de recursos e capacidade de trabalhar com uma base geográfica muito maior sem deixar o mapa pesado.',
            ],
          },
        },
        {
          src: '/img/mapa/5.jpeg',
          caption: {
            title: 'Painel de Diagnóstico e Qualidade dos Dados do Mapa',
            paragraphs: [
              'Ferramentas de manutenção que permitem identificar quais negócios aparecem no mapa, quais ficaram fora e quais foram ignorados pelas regras comerciais. É possível investigar registros individualmente e identificar problemas como endereço ausente ou incompleto, falta de latitude/longitude, categoria ignorada e inconsistências cadastrais.',
              'Valor gerado: manutenção mais rápida da base, redução de erros geográficos, aumento da qualidade dos dados e maior confiabilidade do mapa utilizado pela equipe comercial.',
            ],
          },
        },
      ],
      badge: { icon: 'uil uil-share-alt', text: 'Integração com Bitrix24' },
      problem:
        'A equipe comercial lidava com clientes, escolas, prefeituras e empresas dispersos geograficamente, com dificuldade de visualizar e priorizar oportunidades por região e responsável.',
      solution:
        'Aplicação web e mobile integrada ao Bitrix24, com visualização geográfica de clientes e oportunidades, filtros por responsável e etapa do funil, e otimização do carregamento de dados por área visível.',
      features: [
        'Integração com Bitrix24',
        'Visualização geográfica de clientes e oportunidades',
        'Filtros por responsável e por etapa do funil',
        'Criação e organização de rotas comerciais',
        'Carregamento otimizado por área visível, paginação e cache',
        'Aplicação Web e Mobile',
      ],
      result:
        'Ferramenta comercial em uso para visualização geográfica e priorização de clientes e oportunidades, com carregamento de dados otimizado por área visível.',
    },
    {
      id: 3,
      title: 'Simulador de Orçamentos e Automação de Documentos',
      description:
        'Desenvolvimento de sistema de PDV e simulação de propostas. Uso em feiras, eventos e operações comerciais. Formulários inteligentes com cálculos automáticos e regras de negócio. Automação da geração e do preenchimento de contratos, propostas e documentos corporativos em Python. Redução de erros manuais e tarefas repetitivas no fluxo comercial.',
      image: '/img/simulador/1.png',
      tags: ['React', 'Python', 'Automação', 'PDV'],
      images: [
        {
          src: '/img/simulador/1.png',
          caption: {
            title: 'Simulador de Orçamentos e Dimensionamento Comercial',
            paragraphs: [
              'Ferramenta desenvolvida para transformar as principais informações do cliente em uma simulação comercial padronizada. O vendedor informa dados como quantidade de professores, máquinas, consumo estimado, tabela de créditos, forma de pagamento e demais parâmetros utilizados no cálculo.',
              'Valor gerado: redução de cálculos manuais, maior padronização das propostas e mais velocidade para elaborar uma simulação durante o atendimento comercial.',
            ],
          },
        },
        {
          src: '/img/simulador/2.png',
          caption: {
            title: 'Pesquisa e Integração com a Base de Clientes',
            paragraphs: [
              'O simulador permite pesquisar o cliente diretamente na base integrada ao sistema. À medida que o vendedor digita o nome, são apresentados os cadastros correspondentes para seleção. Caso o cliente ainda não esteja cadastrado, o sistema também disponibiliza uma ação para iniciar seu cadastro.',
              'Valor gerado: evita digitação duplicada, reduz erros cadastrais e agiliza o início da simulação utilizando informações já existentes no sistema.',
            ],
          },
        },
        {
          src: '/img/simulador/3.png',
          caption: {
            title: 'Preenchimento Automático e Cálculos Inteligentes',
            paragraphs: [
              'Após selecionar o cliente, o simulador preenche automaticamente as informações disponíveis, como município, estado, quantidade de professores e dados comerciais. A ferramenta utiliza essas informações junto às regras de negócio para calcular automaticamente a quantidade de máquinas e demais itens necessários para a implantação. Campos preenchidos automaticamente continuam visíveis para conferência do vendedor.',
              'Valor gerado: menos trabalho operacional, menor risco de erro humano e geração de propostas mais consistentes com as regras comerciais da empresa.',
            ],
          },
        },
        {
          src: '/img/simulador/4.png',
          caption: {
            title: 'Geração Automática do Orçamento Comercial',
            paragraphs: [
              'Após a simulação, o sistema gera uma apresentação estruturada do orçamento com os dados do cliente, dimensionamento da solução e os itens necessários para implantação — máquinas, pincéis, ponteiras, tintas, acesso ao aplicativo, dados comerciais do cliente e informações do representante. A mesma tela concentra ações para compartilhar, gerar documento ou continuar o processo comercial.',
              'Valor gerado: transforma uma simulação em uma apresentação comercial pronta em poucos segundos, reduzindo o tempo entre o levantamento das informações e o envio da proposta ao cliente.',
            ],
          },
        },
      ],
      problem:
        'Propostas comerciais eram montadas manualmente em feiras, eventos e operações comerciais, com risco de erro e retrabalho na geração de contratos e documentos.',
      solution:
        'Sistema de PDV com formulários inteligentes, cálculos automáticos e regras de negócio, além de automação em Python para geração e preenchimento de contratos, propostas e documentos corporativos.',
      features: [
        'Formulários inteligentes com cálculos automáticos',
        'Aplicação de regras de negócio',
        'Automação da geração de documentos em Python',
        'Uso em feiras, eventos e operações comerciais',
      ],
      result: 'Redução de erros manuais e tarefas repetitivas no fluxo comercial.',
    },
    {
      id: 1,
      title: 'Allcanci — Gestão Escolar',
      description:
        'Aplicativo desenvolvido para facilitar a gestão escolar, com monitoramento em tempo real de equipamentos, relatórios de consumo e desempenho, e acesso rápido e seguro a informações essenciais para escolas e usuários autorizados. Publicado oficialmente na Google Play Store.',
      image: '/img/allcanci.PNG',
      tags: ['React Native', 'TypeScript', 'Tailwind CSS', 'AWS'],
      badge: { icon: 'uil uil-android', text: 'Publicado na Google Play' },
      problem:
        'Escolas precisavam de mais visibilidade sobre o estado dos equipamentos e do consumo, com informações dispersas e acesso pouco seguro aos dados de gestão.',
      solution:
        'Aplicativo mobile com monitoramento em tempo real de equipamentos, geração de relatórios de consumo e desempenho, e acesso seguro e autenticado para usuários autorizados.',
      features: [
        'Monitoramento em tempo real de equipamentos',
        'Relatórios de consumo e desempenho',
        'Acesso seguro e autenticado',
        'Publicado oficialmente na Google Play',
      ],
      result:
        'Publicado oficialmente na Google Play Store, com acesso disponível para escolas e gestores autorizados.',
    },
  ];

  const [featuredProject, ...gridProjects] = projects;

  return (
    <section className="portfolio section" id="portfolio">
      <div className="section__header">
        <span className="section__eyebrow">meus_projetos</span>
        <h2 className="section__title">Projetos</h2>
        <span className="section__subtitle">Produtos e soluções desenvolvidos</span>
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
            {featuredProject.badge && (
              <span className="portfolio__featured-tag">
                <i className={featuredProject.badge.icon}></i> {featuredProject.badge.text}
              </span>
            )}
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
            <div className="portfolio__featured-actions">
              <button
                onClick={() => openCaseStudy(featuredProject)}
                className="button button--link button--flex"
              >
                Ver mais
                <i className="uil uil-arrow-right button__icon"></i>
              </button>

              {featuredProject.images && featuredProject.images.length > 0 && (
                <button
                  onClick={() => {
                    setGalleryProject(featuredProject);
                    setIsGalleryOpen(true);
                  }}
                  className="button button--link button--flex"
                >
                  Ver imagens
                  <i className="uil uil-arrow-right button__icon"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Demais projetos */}
        <div className="portfolio__grid">
          {gridProjects.map((project) => (
            <div key={project.id} className="portfolio__content">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio__img"
                loading="lazy"
              />

              <div className="portfolio__data">
                {project.badge && (
                  <span className="portfolio__card-badge">
                    <i className={project.badge.icon}></i> {project.badge.text}
                  </span>
                )}

                <h3 className="portfolio__title">{project.title}</h3>

                <div className="portfolio__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="portfolio__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="portfolio__description">{project.description}</p>

                <div className="portfolio__actions">
                  <button
                    onClick={() => openCaseStudy(project)}
                    className="portfolio__gallery-btn"
                  >
                    Ver mais
                    <i className="uil uil-arrow-right"></i>
                  </button>

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
            </div>
          ))}
        </div>
      </div>

      {galleryProject && (
        <GalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          title={galleryProject.title}
          images={galleryProject.images}
        />
      )}

      {caseProject && (
        <CaseStudyModal
          isOpen={isCaseOpen}
          onClose={() => setIsCaseOpen(false)}
          project={caseProject}
        />
      )}
    </section>
  );
}

export default Portfolio;
