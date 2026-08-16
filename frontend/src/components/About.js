import React from 'react';

function About() {
  const education = [
    {
      status: 'Concluído',
      statusModifier: 'done',
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Prática em metodologias ágeis (Scrum/Kanban)',
      period: null,
    },
    {
      status: 'Em andamento',
      statusModifier: 'progress',
      degree: 'Pós-Graduação em Engenharia de Software',
      institution: 'Instituto Estácio de Sá — Campus Alterosas, Betim',
      period: 'Jan/2026 – Dez/2026 (previsão de conclusão)',
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

        <div className="about__education">
          <h3 className="about__education-heading">Formação</h3>

          <div className="about__education-list">
            {education.map((item, index) => (
              <div key={index} className="about__education-card">
                <div className="about__education-top">
                  <span
                    className={`about__education-status about__education-status--${item.statusModifier}`}
                  >
                    <i
                      className={
                        item.statusModifier === 'done'
                          ? 'uil uil-check-circle'
                          : 'uil uil-clock-nine'
                      }
                    ></i>
                    {item.status}
                  </span>
                </div>
                <h4 className="about__education-degree">{item.degree}</h4>
                <p className="about__education-institution">{item.institution}</p>
                {item.period && (
                  <p className="about__education-period">{item.period}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
