const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('🚀 Iniciando API...');
console.log('📧 Email configurado:', process.env.GMAIL_USER);

// Configurar transporter do Nodemailer com Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Rota raiz
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Backend do Portfólio Rennifer',
    status: 'online',
    version: '1.0.0'
  });
});

// Rota de health check
app.get('/api/health', (req, res) => {
  console.log('🏥 Health check recebido');
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Rota para enviar email
app.post('/api/send-email', async (req, res) => {
  console.log('\n📧 ========== REQUISIÇÃO RECEBIDA ==========');
  console.log('🔗 Endpoint: POST /api/send-email');
  console.log('📝 Dados recebidos:', req.body);

  try {
    const { name, email, projeto, message } = req.body;

    // Validar dados
    if (!name || !email || !projeto || !message) {
      console.error('❌ Validação falhou - campos obrigatórios faltando');
      return res.status(400).json({
        success: false,
        message: 'Todos os campos são obrigatórios',
      });
    }

    console.log('✅ Validação passou');

    const fromName = process.env.GMAIL_FROM_NAME || 'Portfólio Rennifer';
    const recipientEmail = process.env.GMAIL_RECIPIENT_EMAIL || 'rennifer10@gmail.com';
    const gmailUser = process.env.GMAIL_USER;

    console.log('📧 Configurando email:');
    console.log('  - De:', `${fromName} <${gmailUser}>`);
    console.log('  - Para:', recipientEmail);
    console.log('  - Reply-To:', email);
    console.log('  - Assunto:', `Novo contato: ${projeto}`);

    // Enviar email
    const info = await transporter.sendMail({
      from: `${fromName} <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Novo contato: ${projeto}`,
      html: `
        <h2>Novo Contato do Portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Projeto:</strong> ${projeto}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Este email foi enviado através do formulário de contato do portfólio.
        </p>
      `,
    });

    console.log('✅ Email enviado com sucesso!');
    console.log('📧 Email ID:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Email enviado com sucesso!',
      messageId: info.messageId,
      sentTo: recipientEmail,
    });
  } catch (error) {
    console.error('\n❌ ========== ERRO AO ENVIAR EMAIL ==========');
    console.error('💬 Mensagem:', error.message);
    console.error('🔍 Stack:', error.stack);

    res.status(500).json({
      success: false,
      message: 'Erro ao enviar email. Tente novamente mais tarde.',
      error: error.message,
    });
  }
});

// Exportar para Vercel
module.exports = app;
