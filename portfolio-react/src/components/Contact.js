import React from 'react';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section__title">Entre em Contato</div>
      <span className="section__subtitle">Fale Conosco</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <a
              href="https://wa.me/5531984163357"
              className="whatsapp-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Entre em contato pelo WhatsApp"
            >
              <i className="uil uil-whatsapp contact__icon"></i>
            </a>
            <div>
              <h3 className="contact__title">WhatsApp</h3>
              <span className="contact__subtitle">(31) 98416-3357</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">rennider10@gmail.com</span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>

            <div>
              <h3 className="contact__title">Localização</h3>
              <span className="contact__subtitle">Betim - MG</span>
            </div>
          </div>
        </div>

        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          className="contact__form grid"
        >
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label">Nome</label>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                autoComplete="off"
                required
                className="contact__input"
              />
            </div>
            <div className="contact__content">
              <label className="contact__label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                autoComplete="off"
                required
                className="contact__input"
              />
            </div>
          </div>
          <div className="contact__content">
            <label className="contact__label">Projeto</label>
            <input
              type="text"
              name="projeto"
              placeholder="Digite seu Projeto"
              autoComplete="off"
              required
              className="contact__input"
            />
          </div>
          <div className="contact__content">
            <label className="contact__label">Mensagem</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Digite sua mensagem"
              required
              className="contact__input"
            ></textarea>
            <input type="text" name="message" className="contact__input" />
          </div>

          <div>
            <button type="submit" className="button button--flex">
              Enviar Mensagem
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
          <input
            type="hidden"
            name="accessKey"
            value="f869f78d-1f23-459f-9aa7-051cc77efcad"
          />
          <input
            type="hidden"
            name="redirectTo"
            value="https://portifolio-renniferdev.vercel.app/obrigado.html#contact"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
