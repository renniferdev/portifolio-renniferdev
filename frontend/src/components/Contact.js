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

    console.log('📧 Iniciando envio de email...');
    console.log('📝 Dados do formulário:', formData);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'https://backend-portfolio-tau-puce.vercel.app';
      console.log('🔗 URL do backend:', apiUrl);

      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📨 Resposta recebida:', response.status, response.statusText);
      console.log('📍 URL da resposta:', response.url);

      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error('❌ Resposta não é JSON:', text);
        throw new Error('Servidor retornou resposta inválida');
      }

      console.log('📋 Dados da resposta:', data);

      if (response.ok) {
        console.log('✅ Email enviado com sucesso!');
        setMessage('Email enviado com sucesso! Obrigado pelo contato.');
        setMessageType('success');
        setFormData({
          name: '',
          email: '',
          projeto: '',
          message: '',
        });
      } else {
        console.error('❌ Erro na resposta:', data);
        setMessage(data.message || 'Erro ao enviar email. Tente novamente.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('❌ Erro ao enviar email:', error);
      console.error('📍 Tipo de erro:', error.name);
      console.error('💬 Mensagem:', error.message);
      
      setMessage('Erro ao enviar email. Tente novamente mais tarde.');
      setMessageType('error');
    } finally {
      setLoading(false);
      console.log('✨ Envio finalizado');
    }
  };

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
            <a
              href="mailto:rennider10@gmail.com"
              className="email-icon"
              title="Enviar email"
            >
              <i className="uil uil-envelope contact__icon"></i>
            </a>

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">rennider10@gmail.com</span>
            </div>
          </div>
          <div className="contact__information">
            <a
              href="https://www.google.com/maps/search/Betim+-+MG"
              className="location-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver localização no Google Maps"
            >
              <i className="uil uil-map-marker contact__icon"></i>
            </a>

            <div>
              <h3 className="contact__title">Localização</h3>
              <span className="contact__subtitle">Betim - MG</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact__form grid">
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
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
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
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
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
              value={formData.projeto}
              onChange={handleChange}
              disabled={loading}
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
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
            ></textarea>
          </div>

          {message && (
            <div
              style={{
                padding: '12px',
                borderRadius: '4px',
                marginBottom: '16px',
                backgroundColor:
                  messageType === 'success' ? '#d4edda' : '#f8d7da',
                color: messageType === 'success' ? '#155724' : '#721c24',
                border:
                  messageType === 'success'
                    ? '1px solid #c3e6cb'
                    : '1px solid #f5c6cb',
              }}
            >
              {message}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="button button--flex"
              disabled={loading}
              style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
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
