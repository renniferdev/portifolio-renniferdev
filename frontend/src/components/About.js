import React from 'react';

function About() {
  const education = [
    {
      status: 'Concluído',
      statusModifier: 'done',
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Instituto Estácio de Sá',
      period: 'Jan/2023 – Jul/2025',
    },
    {
      status: 'Em andamento',
      statusModifier: 'progress',
      degree: 'Pós-Graduação em Engenharia de Software',
      institution: 'Instituto Estácio de Sá',
      period: 'Jan/2026 – Dez/2026',
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="section__header">
        <span className="section__eyebrow">sobre_mim</span>
        <h2 className="section__title">Sobre mim</h2>
      </div>

      <div className="about__container container">
        <div className="about__data">
          <p className="about__description">
            Desenvolvedor Full Stack com experiência na criação de soluções completas, atuando desde a construção de interfaces até APIs, bancos de dados, integrações e publicação de aplicações.
          </p>
          <p className="about__description">
            Trabalho com JavaScript, TypeScript, React, React Native, Next.js e Node.js no dia a dia, integrando bancos de dados relacionais e não relacionais, APIs REST e serviços em nuvem (AWS) para entregar produtos completos, do back-end à interface.
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
