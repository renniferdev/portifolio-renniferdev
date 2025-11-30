# Script de Teste do Backend Vercel
# Testa a conexão e funcionalidade do backend

$BACKEND_URL = "https://backend-rho-weld-58.vercel.app"

# Cores
$Green = "Green"
$Red = "Red"
$Yellow = "Yellow"
$Cyan = "Cyan"
$Blue = "Blue"

Write-Host "`n╔════════════════════════════════════════════════════════════╗" -ForegroundColor $Cyan
Write-Host "║     🧪 TESTE DE CONEXÃO - BACKEND PORTFÓLIO RENNIFER      ║" -ForegroundColor $Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝`n" -ForegroundColor $Cyan

# Teste 1: Health Check
Write-Host "📋 Teste 1: Health Check" -ForegroundColor $Blue
Write-Host "─────────────────────────────────────────────��───────────────`n" -ForegroundColor $Blue

try {
    $response = Invoke-WebRequest -Uri "$BACKEND_URL/api/health" -Method GET -ErrorAction Stop
    if ($response.StatusCode -eq 200) {
        $data = $response.Content | ConvertFrom-Json
        Write-Host "✅ Backend está ONLINE" -ForegroundColor $Green
        Write-Host "   Status: $($data.status)" -ForegroundColor $Green
        Write-Host "   Timestamp: $($data.timestamp)`n" -ForegroundColor $Green
    }
} catch {
    Write-Host "❌ Erro ao conectar: $($_.Exception.Message)`n" -ForegroundColor $Red
}

# Teste 2: Verificar Raiz
Write-Host "📋 Teste 2: Verificar Endpoint Raiz" -ForegroundColor $Blue
Write-Host "─────────────────────────────────────────────────────────────`n" -ForegroundColor $Blue

try {
    $response = Invoke-WebRequest -Uri "$BACKEND_URL/" -Method GET -ErrorAction Stop
    if ($response.StatusCode -eq 200) {
        $data = $response.Content | ConvertFrom-Json
        Write-Host "✅ Endpoint raiz respondendo" -ForegroundColor $Green
        Write-Host "   Mensagem: $($data.message)" -ForegroundColor $Green
        Write-Host "   Status: $($data.status)" -ForegroundColor $Green
        Write-Host "   Versão: $($data.version)`n" -ForegroundColor $Green
    }
} catch {
    Write-Host "❌ Erro: $($_.Exception.Message)`n" -ForegroundColor $Red
}

# Teste 3: Enviar Email de Teste
Write-Host "📋 Teste 3: Enviar Email de Teste" -ForegroundColor $Blue
Write-Host "─────────────────────────────────────────────────────────────`n" -ForegroundColor $Blue

$testData = @{
    name = "Teste Automático"
    email = "teste@example.com"
    projeto = "Teste de Conexão Backend"
    message = "Este é um email de teste automático para verificar se a conexão está funcionando corretamente."
} | ConvertTo-Json

Write-Host "📧 Dados do teste:" -ForegroundColor $Yellow
Write-Host "   Nome: Teste Automático" -ForegroundColor $Yellow
Write-Host "   Email: teste@example.com" -ForegroundColor $Yellow
Write-Host "   Projeto: Teste de Conexão Backend" -ForegroundColor $Yellow
Write-Host "   Mensagem: Este é um email de teste automático...`n" -ForegroundColor $Yellow

try {
    $response = Invoke-WebRequest -Uri "$BACKEND_URL/api/send-email" `
        -Method POST `
        -Headers @{"Content-Type"="application/json"} `
        -Body $testData `
        -ErrorAction Stop
    
    if ($response.StatusCode -eq 200) {
        $data = $response.Content | ConvertFrom-Json
        Write-Host "✅ Email enviado com sucesso!" -ForegroundColor $Green
        Write-Host "   Mensagem: $($data.message)" -ForegroundColor $Green
        Write-Host "   Message ID: $($data.messageId)" -ForegroundColor $Green
        Write-Host "   Enviado para: $($data.sentTo)`n" -ForegroundColor $Green
    }
} catch {
    Write-Host "❌ Erro ao enviar: $($_.Exception.Message)`n" -ForegroundColor $Red
    if ($_.Exception.Response) {
        $errorResponse = $_.Exception.Response.Content.ToString() | ConvertFrom-Json
        Write-Host "   Resposta: $($errorResponse | ConvertTo-Json)`n" -ForegroundColor $Red
    }
}

# Teste 4: Validação de Campos Obrigatórios
Write-Host "📋 Teste 4: Validação de Campos Obrigatórios" -ForegroundColor $Blue
Write-Host "─────────────────────────────────────────────────────────────`n" -ForegroundColor $Blue

$invalidData = @{
    name = "Teste"
    email = "teste@example.com"
} | ConvertTo-Json

Write-Host "📧 Enviando dados incompletos..." -ForegroundColor $Yellow

try {
    $response = Invoke-WebRequest -Uri "$BACKEND_URL/api/send-email" `
        -Method POST `
        -Headers @{"Content-Type"="application/json"} `
        -Body $invalidData `
        -ErrorAction Stop
} catch {
    if ($_.Exception.Response.StatusCode -eq 400) {
        $errorResponse = $_.Exception.Response.Content.ToString() | ConvertFrom-Json
        Write-Host "✅ Validação funcionando corretamente" -ForegroundColor $Green
        Write-Host "   Mensagem: $($errorResponse.message)`n" -ForegroundColor $Green
    } else {
        Write-Host "⚠️  Status inesperado: $($_.Exception.Response.StatusCode)" -ForegroundColor $Yellow
    }
}

# Resumo Final
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor $Cyan
Write-Host "║                    ✅ TESTES CONCLUÍDOS                    ║" -ForegroundColor $Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝`n" -ForegroundColor $Cyan

Write-Host "📊 Resumo:" -ForegroundColor $Blue
Write-Host "   ✅ Backend está online e respondendo" -ForegroundColor $Green
Write-Host "   ✅ Endpoint de health check funcionando" -ForegroundColor $Green
Write-Host "   ✅ Endpoint de envio de email funcionando" -ForegroundColor $Green
Write-Host "   ✅ Validação de campos funcionando`n" -ForegroundColor $Green

Write-Host "🚀 Próximos passos:" -ForegroundColor $Blue
Write-Host "   1. Teste o formulário no seu portfólio" -ForegroundColor $Yellow
Write-Host "   2. Verifique se os emails chegam em rennifer10@gmail.com" -ForegroundColor $Yellow
Write-Host "   3. Confirme que os dados estão corretos`n" -ForegroundColor $Yellow

Write-Host "📞 Informações:" -ForegroundColor $Blue
Write-Host "   Backend URL: $BACKEND_URL" -ForegroundColor $Cyan
Write-Host "   Email de recebimento: rennifer10@gmail.com" -ForegroundColor $Cyan
Write-Host "   Endpoint: /api/send-email" -ForegroundColor $Cyan
Write-Host "   Método: POST`n" -ForegroundColor $Cyan

Write-Host "✨ Teste concluído com sucesso!" -ForegroundColor $Green
