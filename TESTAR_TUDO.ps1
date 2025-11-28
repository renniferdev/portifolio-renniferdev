# Script para testar Backend e Frontend
# Executar como: powershell -ExecutionPolicy Bypass -File TESTAR_TUDO.ps1

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║          🧪 TESTANDO BACKEND E FRONTEND 🧪                ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

$successColor = "Green"
$errorColor = "Red"
$infoColor = "Cyan"
$warningColor = "Yellow"

# Teste 1: Verificar se o backend está rodando
Write-Host "📋 Teste 1: Verificando se o backend está rodando..." -ForegroundColor $infoColor
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5000/api/health" -Method GET -TimeoutSec 5 -ErrorAction Stop
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Backend está respondendo!" -ForegroundColor $successColor
        Write-Host "   Resposta: $($response.Content)" -ForegroundColor $successColor
    }
} catch {
    Write-Host "❌ Backend não está respondendo!" -ForegroundColor $errorColor
    Write-Host "   Erro: $($_.Exception.Message)" -ForegroundColor $errorColor
    Write-Host "   💡 Certifique-se de que o backend está rodando na porta 5000" -ForegroundColor $warningColor
}
Write-Host ""

# Teste 2: Verificar se o frontend está rodando
Write-Host "📋 Teste 2: Verificando se o frontend está rodando..." -ForegroundColor $infoColor
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -Method GET -TimeoutSec 5 -ErrorAction Stop
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Frontend está respondendo!" -ForegroundColor $successColor
        Write-Host "   URL: http://localhost:3000" -ForegroundColor $successColor
    }
} catch {
    Write-Host "❌ Frontend não está respondendo!" -ForegroundColor $errorColor
    Write-Host "   Erro: $($_.Exception.Message)" -ForegroundColor $errorColor
    Write-Host "   💡 Certifique-se de que o frontend está rodando na porta 3000" -ForegroundColor $warningColor
}
Write-Host ""

# Teste 3: Enviar email de teste
Write-Host "📋 Teste 3: Enviando email de teste..." -ForegroundColor $infoColor
$emailData = @{
    name = "Teste Automático"
    email = "teste@example.com"
    projeto = "Teste de Conexão"
    message = "Este é um teste automático de conexão entre frontend e backend"
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri "http://localhost:5000/api/send-email" `
        -Method POST `
        -Headers @{"Content-Type" = "application/json"} `
        -Body $emailData `
        -TimeoutSec 10 `
        -ErrorAction Stop
    
    if ($response.StatusCode -eq 200) {
        $data = $response.Content | ConvertFrom-Json
        Write-Host "✅ Email enviado com sucesso!" -ForegroundColor $successColor
        Write-Host "   Mensagem: $($data.message)" -ForegroundColor $successColor
        Write-Host "   ID: $($data.messageId)" -ForegroundColor $successColor
        Write-Host "   Enviado para: $($data.sentTo)" -ForegroundColor $successColor
    }
} catch {
    Write-Host "❌ Erro ao enviar email!" -ForegroundColor $errorColor
    Write-Host "   Erro: $($_.Exception.Message)" -ForegroundColor $errorColor
    Write-Host "   💡 Verifique as credenciais do Gmail em backend/.env" -ForegroundColor $warningColor
}
Write-Host ""

# Resumo final
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                    🧪 TESTES CONCLUÍDOS 🧪                ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""
Write-Host "📍 Próximos passos:" -ForegroundColor $infoColor
Write-Host "   1. Abra http://localhost:3000 no navegador" -ForegroundColor $warningColor
Write-Host "   2. Vá até a seção 'Entre em Contato'" -ForegroundColor $warningColor
Write-Host "   3. Preencha o formulário com seus dados" -ForegroundColor $warningColor
Write-Host "   4. Clique em 'Enviar Mensagem'" -ForegroundColor $warningColor
Write-Host "   5. Verifique o email em rennifer10@gmail.com" -ForegroundColor $warningColor
Write-Host ""
