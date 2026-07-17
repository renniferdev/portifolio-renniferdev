import React from 'react';

function About() {
  const highlights = [
    {
      icon: 'uil uil-graduation-cap',
      title: 'Formação',
      text: 'Análise e Desenvolvimento de Sistemas, com prática em metodologias ágeis (Scrum/Kanban).',
    },
    {
      icon: 'uil uil-mobile-android',
      title: 'Allcanci — app publicado',
      text: 'Criador do app de gestão escolar Allcanci, disponível na Google Play Store, feito com React Native, TypeScript e AWS.',
    },
    {
      icon: 'uil uil-server-network',
      title: 'Projeto atual',
      text: 'Desenvolvendo um sistema completo de gestão escolar com APIs, autenticação e monitoramento de equipamentos em tempo real.',
    },
    {
      icon: 'uil uil-git',
      title: 'Práticas de engenharia',
      text: 'APIs RESTful, versionamento com Git, código limpo e testável — do front-end ao banco de dados relacional.',
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="section__header">
        <span className="section__eyebrow">sobre_mim</span>
        <h2 className="section__title">Quem constrói o produto</h2>
      </div>

      <div className="about__container container">
        <div className="about__data">
          <p className="about__description">
            Desenvolvedor Full Stack com experiência na criação de soluções completas e escaláveis, do front-end ao back-end. Apaixonado por tecnologia, busco constantemente aprimorar minhas habilidades em JavaScript, Node.js, React, Next.js e bancos de dados relacionais, entregando produtos seguros, performáticos e alinhados às necessidades do usuário final.
          </p>
          <p className="about__description">
            Meu objetivo é me tornar um Desenvolvedor Full Stack de destaque, contribuindo positivamente para os projetos e objetivos da empresa.
          </p>
        </div>

        <div className="about__highlights">
          {highlights.map((item, index) => (
            <div key={index} className="about__highlight">
              <div className="about__highlight-icon">
                <i className={item.icon}></i>
              </div>
              <div>
                <h3 className="about__highlight-title">{item.title}</h3>
                <p className="about__highlight-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
