// Script para testar o backend na Vercel
const https = require('https');

const backendUrl = 'https://backend-rho-weld-58.vercel.app';

console.log('🧪 Testando Backend na Vercel...\n');

// Teste 1: Health Check
console.log('📋 Teste 1: Health Check');
https.get(`${backendUrl}/api/health`, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('✅ Backend está respondendo!');
      console.log(`   Status: ${data}\n`);
    } else {
      console.log(`❌ Erro: Status ${res.statusCode}\n`);
    }
  });
}).on('error', (err) => {
  console.log(`❌ Erro: ${err.message}\n`);
});

// Teste 2: Enviar Email
setTimeout(() => {
  console.log('📋 Teste 2: Enviar Email de Teste');
  
  const emailData = JSON.stringify({
    name: 'Teste Vercel',
    email: 'teste@example.com',
    projeto: 'Teste de Conexão Vercel',
    message: 'Este é um teste de conexão com o backend na Vercel'
  });

  const options = {
    hostname: 'backend-rho-weld-58.vercel.app',
    path: '/api/send-email',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': emailData.length
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      if (res.statusCode === 200) {
        const response = JSON.parse(data);
        console.log('✅ Email enviado com sucesso!');
        console.log(`   Mensagem: ${response.message}`);
        console.log(`   Enviado para: ${response.sentTo}\n`);
      } else {
        console.log(`❌ Erro: Status ${res.statusCode}`);
        console.log(`   Resposta: ${data}\n`);
      }
    });
  }).on('error', (err) => {
    console.log(`❌ Erro: ${err.message}\n`);
  });

  req.write(emailData);
  req.end();
}, 1000);
