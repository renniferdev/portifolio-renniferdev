import React from 'react';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre Mim</h2>
      <span className="section__subtitle">Minha introdução</span>

      <div className="about__container container">
        <div className="about__data">
          <p className="about__description">
            Desenvolvedor Full Stack com experiência na criação de soluções completas e escaláveis, do front-end ao back-end. Sou criador do aplicativo Allcanci, disponível na Google Play Store, desenvolvido com React Native, Tailwind CSS, TypeScript e AWS, focado em melhor experiência para o cliente e responsividade. Atualmente, desenvolvo um sistema completo de gestão escolar que integra APIs, autenticação de usuários e monitoramento em tempo real de equipamentos, permitindo que escolas, equipes técnicas e empresas acompanhem informações de forma prática e segura.
          </p>
          <p className="about__description">
            Apaixonado por tecnologia, busco constantemente aprimorar minhas habilidades em JavaScript, Node.js, React, Next.js e banco de dados relacionais, entregando produtos de alta qualidade, seguros e alinhados às necessidades do usuário final. Com formação em Análise e Desenvolvimento de Sistemas e experiência em metodologias ágeis (Scrum/Kanban), trabalho com boas práticas de código, versionamento com Git e desenvolvimento de APIs RESTful. Meu objetivo é me tornar um Desenvolvedor Full Stack de destaque, contribuindo positivamente para os projetos e objetivos da empresa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
