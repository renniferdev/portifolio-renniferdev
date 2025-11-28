# Script para testar o backend na Vercel
# Uso: .\TESTAR_BACKEND_VERCEL.ps1

$BACKEND_URL = "https://backend-rho-weld-58.vercel.app"

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║         🧪 TESTANDO BACKEND NA VERCEL 🧪                  ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Teste 1: Rota Raiz
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━��━━" -ForegroundColor Yellow
Write-Host "📍 Teste 1: GET / (Rota Raiz)" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
Write-Host ""

try {
    $response = Invoke-WebRequest -Uri "$BACKEND_URL/" -Method GET -ErrorAction Stop
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "📋 Resposta:" -ForegroundColor Green
    Write-Host ($response.Content | ConvertFrom-Json | ConvertTo-Json -Depth 10) -ForegroundColor Green
} catch {
    Write-Host "❌ Erro: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Teste 2: Health Check
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
Write-Host "📍 Teste 2: GET /api/health (Health Check)" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
Write-Host ""

try {
    $response = Invoke-WebRequest -Uri "$BACKEND_URL/api/health" -Method GET -ErrorAction Stop
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "📋 Resposta:" -ForegroundColor Green
    Write-Host ($response.Content | ConvertFrom-Json | ConvertTo-Json -Depth 10) -ForegroundColor Green
} catch {
    Write-Host "❌ Erro: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Teste 3: Debug
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
Write-Host "📍 Teste 3: GET /api/debug (Informações de Debug)" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
Write-Host ""

try {
    $response = Invoke-WebRequest -Uri "$BACKEND_URL/api/debug" -Method GET -ErrorAction Stop
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "📋 Resposta:" -ForegroundColor Green
    Write-Host ($response.Content | ConvertFrom-Json | ConvertTo-Json -Depth 10) -ForegroundColor Green
} catch {
    Write-Host "❌ Erro: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Teste 4: Enviar Email (Teste)
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
Write-Host "📍 Teste 4: POST /api/send-email (Enviar Email de Teste)" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
Write-Host ""

$emailData = @{
    name = "Teste Automático"
    email = "teste@example.com"
    projeto = "Teste Backend Vercel"
    message = "Este é um email de teste automático para verificar se o backend está funcionando corretamente na Vercel."
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri "$BACKEND_URL/api/send-email" `
        -Method POST `
        -ContentType "application/json" `
        -Body $emailData `
        -ErrorAction Stop
    
    Write-Host "✅ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "📋 Resposta:" -ForegroundColor Green
    Write-Host ($response.Content | ConvertFrom-Json | ConvertTo-Json -Depth 10) -ForegroundColor Green
} catch {
    Write-Host "❌ Erro: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "💡 Dica: Verifique se as variáveis de ambiente estão configuradas na Vercel" -ForegroundColor Yellow
}

Write-Host ""

# Resumo
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                    ✅ TESTES CONCLUÍDOS ✅                 ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Write-Host "📊 Resumo:" -ForegroundColor Cyan
Write-Host "  ✅ Rota raiz (/) - Deve retornar 200" -ForegroundColor Green
Write-Host "  ✅ Health check (/api/health) - Deve retornar 200" -ForegroundColor Green
Write-Host "  ✅ Debug (/api/debug) - Deve retornar 200" -ForegroundColor Green
Write-Host "  ✅ Send email (/api/send-email) - Deve retornar 200 ou erro de validação" -ForegroundColor Green
Write-Host ""

Write-Host "🔗 URL do Backend:" -ForegroundColor Cyan
Write-Host "   $BACKEND_URL" -ForegroundColor White
Write-Host ""

Write-Host "📝 Próximos Passos:" -ForegroundColor Cyan
Write-Host "  1. Se todos os testes passaram ✅ - Backend está funcionando!" -ForegroundColor Green
Write-Host "  2. Se algum teste falhou ❌ - Verifique os logs na Vercel" -ForegroundColor Yellow
Write-Host "  3. Teste o formulário no frontend em http://localhost:3000" -ForegroundColor Green
Write-Host ""

Write-Host "💡 Dicas:" -ForegroundColor Cyan
Write-Host "  - Verifique o dashboard da Vercel: https://vercel.com/dashboard" -ForegroundColor White
Write-Host "  - Veja os logs: https://vercel.com/dashboard/renniferdev/backend-rho-weld-58" -ForegroundColor White
Write-Host "  - Leia: CORRECAO_ROTA_BACKEND.md" -ForegroundColor White
Write-Host ""

pause
