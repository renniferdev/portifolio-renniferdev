import React from 'react';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Fabric & Tales - E-commerce',
      description:
        'Fabric & Tales é um e-commerce moderno desenvolvido com React.js, oferecendo uma experiência de compra fluida e intuitiva. O site apresenta categorias para homens, mulheres e crianças, além de coleções exclusivas e ofertas especiais.',
      image: '/img/fabric-e-tales.png',
      link: 'https://e-commerce-fabric-e-tales.vercel.app/',
    },
    {
      id: 2,
      title: 'Desafio de Programação: Teste seus conhecimentos!',
      description:
        'Participe deste quiz interativo desenvolvido em JavaScript, onde você pode testar e aprimorar seu conhecimento em HTML, CSS e JavaScript. Desafie-se com perguntas divertidas e aprenda mais sobre essas tecnologias essenciais para o desenvolvimento web.',
      image: '/img/quiz-img.png',
      link: 'https://quiz-react-kohl-one.vercel.app/',
    },
    {
      id: 3,
      title: 'Barbearia Campelo - Website',
      description:
        'Este é o site da Barbearia Campelo, desenvolvido para promover os serviços de cortes de cabelo, barba e cuidados masculinos. O site combina um design moderno com funcionalidade de agendamento online.',
      image: '/img/barbearia.png',
      link: 'https://barbearia-campelo.vercel.app/',
    },
    {
      id: 4,
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
              <img src={project.image} alt={project.title} className="portfolio__img" />

              <div className="portfolio__data">
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  Demonstração
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Portfolio;
