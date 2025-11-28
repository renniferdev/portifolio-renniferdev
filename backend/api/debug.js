module.exports = (req, res) => {
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

  console.log('🔍 Debug endpoint acessado');

  const debug = {
    timestamp: new Date().toISOString(),
    environment: {
      GMAIL_USER: process.env.GMAIL_USER ? '✅ Configurado' : '❌ Não configurado',
      GMAIL_PASSWORD: process.env.GMAIL_PASSWORD ? '✅ Configurado' : '❌ Não configurado',
      GMAIL_FROM_NAME: process.env.GMAIL_FROM_NAME ? '✅ Configurado' : '❌ Não configurado',
      GMAIL_RECIPIENT_EMAIL: process.env.GMAIL_RECIPIENT_EMAIL ? '✅ Configurado' : '❌ Não configurado',
      NODE_ENV: process.env.NODE_ENV || 'production',
    },
    values: {
      GMAIL_USER: process.env.GMAIL_USER || 'undefined',
      GMAIL_FROM_NAME: process.env.GMAIL_FROM_NAME || 'undefined',
      GMAIL_RECIPIENT_EMAIL: process.env.GMAIL_RECIPIENT_EMAIL || 'undefined',
      // Não mostrar a senha por segurança
    },
  };

  console.log('📋 Debug Info:', JSON.stringify(debug, null, 2));

  res.status(200).json(debug);
};
