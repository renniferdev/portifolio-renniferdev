# Script para iniciar Backend + Frontend localmente
# Execute como: .\INICIAR_TUDO_VERCEL.ps1

Write-Host "🚀 Iniciando Backend + Frontend..." -ForegroundColor Green
Write-Host ""

# Obter o diretório do script
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path

# Iniciar Backend em uma nova janela
Write-Host "📦 Iniciando Backend na porta 5000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$scriptPath\backend'; npm install; npm start"

# Aguardar um pouco para o backend iniciar
Start-Sleep -Seconds 3

# Iniciar Frontend em uma nova janela
Write-Host "🎨 Iniciando Frontend na porta 3000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$scriptPath\frontend'; npm install; REACT_APP_API_URL=http://localhost:5000 npm start"

Write-Host ""
Write-Host "✅ Backend e Frontend iniciados!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 Acesse:" -ForegroundColor Yellow
Write-Host "   Frontend: http://localhost:3000" -ForegroundColor White
Write-Host "   Backend:  http://localhost:5000" -ForegroundColor White
Write-Host "   Health:   http://localhost:5000/api/health" -ForegroundColor White
Write-Host ""
Write-Host "💡 Dica: Feche as janelas do PowerShell para parar os servidores" -ForegroundColor Yellow
