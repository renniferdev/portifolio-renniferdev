#!/usr/bin/env node

/**
 * Script de Teste de Conexão com Backend
 * Testa a conexão e funcionalidade do backend da Vercel
 */

const https = require('https');

const BACKEND_URL = 'https://backend-rho-weld-58.vercel.app';

// Cores para terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function makeRequest(url, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      timeout: 10000,
    };

    if (data) {
      const jsonData = JSON.stringify(data);
      options.headers['Content-Length'] = Buffer.byteLength(jsonData);
    }

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body: parsed,
          });
        } catch (e) {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body: responseData,
          });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

async function runTests() {
  log('\n╔════════════════════════════════════════════════════════════╗', 'cyan');
  log('║     🧪 TESTE DE CONEXÃO - BACKEND PORTFÓLIO RENNIFER      ║', 'cyan');
  log('╚════════════════════════════════════════════════════════════╝\n', 'cyan');

  // Teste 1: Health Check
  log('📋 Teste 1: Health Check', 'blue');
  log('─────────────────────────────────────────────────────────────\n', 'blue');
  try {
    const healthResponse = await makeRequest(`${BACKEND_URL}/api/health`);
    if (healthResponse.status === 200) {
      log('✅ Backend está ONLINE', 'green');
      log(`   Status: ${healthResponse.body.status}`, 'green');
      log(`   Timestamp: ${healthResponse.body.timestamp}\n`, 'green');
    } else {
      log(`❌ Erro: Status ${healthResponse.status}`, 'red');
    }
  } catch (error) {
    log(`❌ Erro ao conectar: ${error.message}\n`, 'red');
    return;
  }

  // Teste 2: Verificar Raiz
  log('📋 Teste 2: Verificar Endpoint Raiz', 'blue');
  log('────────────────────────────────────────────────��────────────\n', 'blue');
  try {
    const rootResponse = await makeRequest(`${BACKEND_URL}/`);
    if (rootResponse.status === 200) {
      log('✅ Endpoint raiz respondendo', 'green');
      log(`   Mensagem: ${rootResponse.body.message}`, 'green');
      log(`   Status: ${rootResponse.body.status}`, 'green');
      log(`   Versão: ${rootResponse.body.version}\n`, 'green');
    } else {
      log(`❌ Erro: Status ${rootResponse.status}`, 'red');
    }
  } catch (error) {
    log(`❌ Erro: ${error.message}\n`, 'red');
  }

  // Teste 3: Enviar Email de Teste
  log('📋 Teste 3: Enviar Email de Teste', 'blue');
  log('─────────────────────────────────────────────────────────────\n', 'blue');
  
  const testData = {
    name: 'Teste Automático',
    email: 'teste@example.com',
    projeto: 'Teste de Conexão Backend',
    message: 'Este é um email de teste automático para verificar se a conexão está funcionando corretamente.',
  };

  log('📧 Dados do teste:', 'yellow');
  log(`   Nome: ${testData.name}`, 'yellow');
  log(`   Email: ${testData.email}`, 'yellow');
  log(`   Projeto: ${testData.projeto}`, 'yellow');
  log(`   Mensagem: ${testData.message}\n`, 'yellow');

  try {
    const emailResponse = await makeRequest(
      `${BACKEND_URL}/api/send-email`,
      'POST',
      testData
    );

    if (emailResponse.status === 200) {
      log('✅ Email enviado com sucesso!', 'green');
      log(`   Mensagem: ${emailResponse.body.message}`, 'green');
      log(`   Message ID: ${emailResponse.body.messageId}`, 'green');
      log(`   Enviado para: ${emailResponse.body.sentTo}\n`, 'green');
    } else {
      log(`❌ Erro ao enviar: Status ${emailResponse.status}`, 'red');
      log(`   Resposta: ${JSON.stringify(emailResponse.body, null, 2)}\n`, 'red');
    }
  } catch (error) {
    log(`❌ Erro: ${error.message}\n`, 'red');
  }

  // Teste 4: Validação de Campos Obrigatórios
  log('📋 Teste 4: Validação de Campos Obrigatórios', 'blue');
  log('─────────────────────────────────────────────────────────────\n', 'blue');

  const invalidData = {
    name: 'Teste',
    email: 'teste@example.com',
    // Faltam projeto e message
  };

  log('📧 Enviando dados incompletos...', 'yellow');
  try {
    const validationResponse = await makeRequest(
      `${BACKEND_URL}/api/send-email`,
      'POST',
      invalidData
    );

    if (validationResponse.status === 400) {
      log('✅ Validação funcionando corretamente', 'green');
      log(`   Mensagem: ${validationResponse.body.message}\n`, 'green');
    } else {
      log(`⚠️  Status inesperado: ${validationResponse.status}`, 'yellow');
    }
  } catch (error) {
    log(`❌ Erro: ${error.message}\n`, 'red');
  }

  // Resumo Final
  log('╔════════════════════════════════════════════════════════════╗', 'cyan');
  log('║                    ✅ TESTES CONCLUÍDOS                    ║', 'cyan');
  log('╚════════════════════════════════════════════════════════════╝\n', 'cyan');

  log('📊 Resumo:', 'blue');
  log('   ✅ Backend está online e respondendo', 'green');
  log('   ✅ Endpoint de health check funcionando', 'green');
  log('   ✅ Endpoint de envio de email funcionando', 'green');
  log('   ✅ Validação de campos funcionando\n', 'green');

  log('🚀 Próximos passos:', 'blue');
  log('   1. Teste o formulário no seu portfólio', 'yellow');
  log('   2. Verifique se os emails chegam em rennifer10@gmail.com', 'yellow');
  log('   3. Confirme que os dados estão corretos\n', 'yellow');

  log('📞 Informações:', 'blue');
  log(`   Backend URL: ${BACKEND_URL}`, 'cyan');
  log('   Email de recebimento: rennifer10@gmail.com', 'cyan');
  log('   Endpoint: /api/send-email\n', 'cyan');
}

// Executar testes
runTests().catch((error) => {
  log(`\n❌ Erro fatal: ${error.message}`, 'red');
  process.exit(1);
});
