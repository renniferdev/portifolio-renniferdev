import React from 'react';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre Mim</h2>
      <span className="section__subtitle">Minha introdução</span>

      <div className="about__container container grid">
        <img src="/img/rennifer.jpg" alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Sou apaixonado por tecnologia e estou empolgado para aplicar meu
            entusiasmo e habilidades na sua empresa. Tenho sólida experiência
            em desenvolvimento web Full Stack, trabalho em equipe e
            habilidades interpessoais que me destacam como profissional. Com
            mais de 1,6 anos de experiência em programação, estou
            constantemente em busca de formas de aprimorar minhas habilidades
            e conhecimentos. Meu objetivo é me tornar um Desenvolvedor Full
            Stack de destaque, contribuindo positivamente para os projetos e
            objetivos da empresa. Desde os meus 15 anos, sou fascinado por
            tecnologia. Quando descobri a programação, essa paixão cresceu
            exponencialmente. Hoje, mantenho-me atualizado com as tendências e
            avanços do setor para oferecer soluções modernas e eficientes.
          </p>
          <div className="about__buttons">
            <a
              download=""
              href="/pdf/Rennifer-Teixeira-Desenvolvedor-Full-Stack-Junior.pdf"
              className="button button--flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV<i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
