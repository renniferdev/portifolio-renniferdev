# Script para testar a conexão com o backend na Vercel

Write-Host "🧪 Testando Backend na Vercel..." -ForegroundColor Cyan
Write-Host ""

# Teste 1: Health Check
Write-Host "1️⃣  Testando Health Check..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://backend-rho-weld-58.vercel.app/api/health" -Method GET -ErrorAction Stop
    Write-Host "✅ Health Check OK" -ForegroundColor Green
    Write-Host "   Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "   Resposta: $($response.Content)" -ForegroundColor Green
} catch {
    Write-Host "❌ Health Check FALHOU" -ForegroundColor Red
    Write-Host "   Erro: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Teste 2: Verificar se backend está online
Write-Host "2️⃣  Verificando se Backend está Online..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://backend-rho-weld-58.vercel.app/" -Method GET -ErrorAction Stop
    Write-Host "✅ Backend Online" -ForegroundColor Green
    Write-Host "   Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "   Resposta: $($response.Content)" -ForegroundColor Green
} catch {
    Write-Host "❌ Backend Offline" -ForegroundColor Red
    Write-Host "   Erro: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Teste 3: Testar envio de email
Write-Host "3️⃣  Testando Envio de Email..." -ForegroundColor Yellow
try {
    $body = @{
        name = "Teste Automático"
        email = "teste@example.com"
        projeto = "Teste de Conexão"
        message = "Esta é uma mensagem de teste automático"
    } | ConvertTo-Json

    $response = Invoke-WebRequest -Uri "https://backend-rho-weld-58.vercel.app/api/send-email" `
        -Method POST `
        -Headers @{"Content-Type"="application/json"} `
        -Body $body `
        -ErrorAction Stop

    Write-Host "✅ Email Enviado com Sucesso!" -ForegroundColor Green
    Write-Host "   Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "   Resposta: $($response.Content)" -ForegroundColor Green
} catch {
    Write-Host "❌ Erro ao Enviar Email" -ForegroundColor Red
    Write-Host "   Status: $($_.Exception.Response.StatusCode)" -ForegroundColor Red
    Write-Host "   Erro: $($_.Exception.Message)" -ForegroundColor Red
    
    # Tentar ler a resposta de erro
    try {
        $errorResponse = $_.Exception.Response.GetResponseStream()
        $reader = New-Object System.IO.StreamReader($errorResponse)
        $errorBody = $reader.ReadToEnd()
        Write-Host "   Detalhes: $errorBody" -ForegroundColor Red
    } catch {}
}

Write-Host ""
Write-Host "🏁 Testes Concluídos!" -ForegroundColor Cyan
