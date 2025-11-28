const nodemailer = require('nodemailer');

// Configurar transporter do Nodemailer com Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Debug: Verificar se as variáveis estão carregadas
console.log('🔍 Verificando variáveis de ambiente:');
console.log('  - GMAIL_USER:', process.env.GMAIL_USER ? '✅ Configurado' : '❌ Não configurado');
console.log('  - GMAIL_PASSWORD:', process.env.GMAIL_PASSWORD ? '✅ Configurado' : '❌ Não configurado');
console.log('  - GMAIL_FROM_NAME:', process.env.GMAIL_FROM_NAME ? '✅ Configurado' : '❌ Não configurado');
console.log('  - GMAIL_RECIPIENT_EMAIL:', process.env.GMAIL_RECIPIENT_EMAIL ? '✅ Configurado' : '❌ Não configurado');

module.exports = async (req, res) => {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('\n📧 ========== REQUISIÇÃO RECEBIDA ==========');
  console.log('🔗 Endpoint: POST /api/send-email');
  console.log('📝 Dados recebidos:', req.body);

  try {
    // Verificar variáveis de ambiente ANTES de tudo
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
      console.error('❌ ERRO CRÍTICO: Variáveis de ambiente não configuradas!');
      console.error('   GMAIL_USER:', process.env.GMAIL_USER ? 'OK' : 'FALTANDO');
      console.error('   GMAIL_PASSWORD:', process.env.GMAIL_PASSWORD ? 'OK' : 'FALTANDO');
      return res.status(500).json({
        success: false,
        message: 'Erro ao enviar email. Tente novamente mais tarde.',
        error: 'Variáveis de ambiente não configuradas no servidor',
      });
    }

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
    console.log('  - Nome do remetente:', name);
    console.log('  - Email do remetente:', email);

    console.log('📤 Enviando email via Gmail...');
    console.log('🎯 DESTINATÁRIO FINAL:', recipientEmail);

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
    console.log('📋 Resultado completo:', JSON.stringify(info, null, 2));
    console.log('📧 Email ID:', info.messageId);
    console.log('🎯 Enviado para:', recipientEmail);

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
};
