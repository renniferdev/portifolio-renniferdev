import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projeto: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'https://backend-portfolio-tau-puce.vercel.app';

      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        throw new Error('Servidor retornou resposta inválida');
      }

      if (response.ok) {
        setMessage('Email enviado com sucesso! Obrigado pelo contato.');
        setMessageType('success');
        setFormData({
          name: '',
          email: '',
          projeto: '',
          message: '',
        });
      } else {
        setMessage(data.message || 'Erro ao enviar email. Tente novamente.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Erro ao enviar email. Tente novamente mais tarde.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="section__header">
        <span className="section__eyebrow">fale_comigo</span>
        <h2 className="section__title">Entre em contato</h2>
        <span className="section__subtitle">Tem um projeto em mente? Vamos conversar.</span>
      </div>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <a
              href="https://wa.me/5531984163357"
              className="whatsapp-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Entre em contato pelo WhatsApp"
              aria-label="Entre em contato pelo WhatsApp"
            >
              <i className="uil uil-whatsapp contact__icon"></i>
            </a>
            <div>
              <h3 className="contact__title">WhatsApp</h3>
              <span className="contact__subtitle">(31) 98416-3357</span>
            </div>
          </div>
          <div className="contact__information">
            <a
              href="mailto:rennifer10@gmail.com"
              className="email-icon"
              title="Enviar email"
              aria-label="Enviar email para rennifer10@gmail.com"
            >
              <i className="uil uil-envelope contact__icon"></i>
            </a>

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">rennifer10@gmail.com</span>
            </div>
          </div>
          <div className="contact__information">
            <a
              href="https://www.google.com/maps/search/Betim+-+MG"
              className="location-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver localização no Google Maps"
              aria-label="Ver localização no Google Maps"
            >
              <i className="uil uil-map-marker contact__icon"></i>
            </a>

            <div>
              <h3 className="contact__title">Localização</h3>
              <span className="contact__subtitle">Betim - MG</span>
            </div>
          </div>
          <div className="contact__information">
            <a
              href="https://www.linkedin.com/in/rennifer-amilton-teixeira-08983219a/"
              className="linkedin-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Meu perfil no LinkedIn"
              aria-label="Meu perfil no LinkedIn"
            >
              <i className="uil uil-linkedin-alt contact__icon"></i>
            </a>

            <div>
              <h3 className="contact__title">LinkedIn</h3>
              <span className="contact__subtitle">rennifer-amilton-teixeira</span>
            </div>
          </div>
          <div className="contact__information">
            <a
              href="https://github.com/renniferdev"
              className="github-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Meu perfil no GitHub"
              aria-label="Meu perfil no GitHub"
            >
              <i className="uil uil-github-alt contact__icon"></i>
            </a>

            <div>
              <h3 className="contact__title">GitHub</h3>
              <span className="contact__subtitle">github.com/renniferdev</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="contact-name" className="contact__label">
                Nome <span className="contact__required" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                autoComplete="off"
                required
                aria-required="true"
                className="contact__input"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div className="contact__content">
              <label htmlFor="contact-email" className="contact__label">
                Email <span className="contact__required" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Digite seu email"
                autoComplete="off"
                required
                aria-required="true"
                className="contact__input"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="contact-subject" className="contact__label">
              Assunto <span className="contact__required" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              name="projeto"
              placeholder="Como posso ajudar?"
              autoComplete="off"
              required
              aria-required="true"
              className="contact__input"
              value={formData.projeto}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div className="contact__content">
            <label htmlFor="contact-message" className="contact__label">
              Mensagem <span className="contact__required" aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              cols="30"
              rows="10"
              placeholder="Digite sua mensagem"
              required
              aria-required="true"
              className="contact__input"
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
            ></textarea>
          </div>

          {message && (
            <div
              className={`contact__status ${
                messageType === 'success' ? 'contact__status--success' : 'contact__status--error'
              }`}
            >
              {message}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="button button--flex"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
