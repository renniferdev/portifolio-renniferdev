# Script PowerShell para iniciar o backend do portfólio
# Executar com: powershell -ExecutionPolicy Bypass -File INICIAR_BACKEND.ps1

Write-Host ""
Write-Host "========================================"
Write-Host "  INICIANDO BACKEND DO PORTFÓLIO"
Write-Host "========================================"
Write-Host ""

# Verificar se está na pasta correta
if (-not (Test-Path "backend\server.js")) {
    Write-Host "❌ ERRO: Arquivo server.js não encontrado!" -ForegroundColor Red
    Write-Host "Certifique-se de executar este arquivo na pasta raiz do projeto."
    Read-Host "Pressione Enter para sair"
    exit 1
}

# Ir para a pasta backend
Set-Location backend

# Verificar se node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Erro ao instalar dependências!" -ForegroundColor Red
        Read-Host "Pressione Enter para sair"
        exit 1
    }
}

# Iniciar o servidor
Write-Host ""
Write-Host "🚀 Iniciando servidor..." -ForegroundColor Green
Write-Host ""
npm start

# Se chegou aqui, o servidor parou
Write-Host ""
Write-Host "⚠️  Servidor parou de rodar" -ForegroundColor Yellow
Write-Host "Verifique se há erros acima"
Read-Host "Pressione Enter para sair"
