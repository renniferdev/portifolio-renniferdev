# Script para iniciar Backend e Frontend automaticamente
# Executar como: powershell -ExecutionPolicy Bypass -File INICIAR_TUDO_AGORA.ps1

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║     🚀 INICIANDO PROJETO - BACKEND + FRONTEND 🚀          ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Cores para output
$successColor = "Green"
$errorColor = "Red"
$infoColor = "Cyan"
$warningColor = "Yellow"

# Função para verificar se a porta está em uso
function Test-Port {
    param([int]$Port)
    $connection = Test-NetConnection -ComputerName localhost -Port $Port -WarningAction SilentlyContinue
    return $connection.TcpTestSucceeded
}

# Função para liberar porta
function Kill-Port {
    param([int]$Port)
    $process = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess
    if ($process) {
        Write-Host "⚠️  Liberando porta $Port..." -ForegroundColor $warningColor
        Stop-Process -Id $process -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2
    }
}

# Verificar portas
Write-Host "🔍 Verificando portas..." -ForegroundColor $infoColor
$port5000InUse = Test-Port -Port 5000
$port3000InUse = Test-Port -Port 3000

if ($port5000InUse) {
    Write-Host "⚠️  Porta 5000 já está em uso!" -ForegroundColor $warningColor
    Kill-Port -Port 5000
}

if ($port3000InUse) {
    Write-Host "⚠️  Porta 3000 já está em uso!" -ForegroundColor $warningColor
    Kill-Port -Port 3000
}

Write-Host "✅ Portas verificadas!" -ForegroundColor $successColor
Write-Host ""

# Iniciar Backend
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║              🔧 INICIANDO BACKEND (Porta 5000)             ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

$backendPath = Join-Path $PSScriptRoot "backend"

if (-not (Test-Path $backendPath)) {
    Write-Host "❌ Pasta backend não encontrada!" -ForegroundColor $errorColor
    exit 1
}

# Verificar se node_modules existe no backend
if (-not (Test-Path "$backendPath\node_modules")) {
    Write-Host "📦 Instalando dependências do backend..." -ForegroundColor $infoColor
    Push-Location $backendPath
    npm install
    Pop-Location
}

# Iniciar backend em nova janela
Write-Host "🚀 Abrindo terminal do backend..." -ForegroundColor $infoColor
$backendCommand = "cd `"$backendPath`" && npm start"
Start-Process powershell -ArgumentList "-NoExit", "-Command", $backendCommand

Write-Host "✅ Backend iniciado!" -ForegroundColor $successColor
Write-Host ""

# Aguardar um pouco para o backend iniciar
Write-Host "⏳ Aguardando backend iniciar (5 segundos)..." -ForegroundColor $infoColor
Start-Sleep -Seconds 5

# Iniciar Frontend
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║              🎨 INICIANDO FRONTEND (Porta 3000)            ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

$frontendPath = Join-Path $PSScriptRoot "frontend"

if (-not (Test-Path $frontendPath)) {
    Write-Host "❌ Pasta frontend não encontrada!" -ForegroundColor $errorColor
    exit 1
}

# Verificar se node_modules existe no frontend
if (-not (Test-Path "$frontendPath\node_modules")) {
    Write-Host "📦 Instalando dependências do frontend..." -ForegroundColor $infoColor
    Push-Location $frontendPath
    npm install
    Pop-Location
}

# Iniciar frontend em nova janela
Write-Host "🚀 Abrindo terminal do frontend..." -ForegroundColor $infoColor
$frontendCommand = "cd `"$frontendPath`" && npm start"
Start-Process powershell -ArgumentList "-NoExit", "-Command", $frontendCommand

Write-Host "✅ Frontend iniciado!" -ForegroundColor $successColor
Write-Host ""

# Resumo final
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                    ✅ TUDO INICIADO! ✅                    ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "📍 URLs de acesso:" -ForegroundColor $infoColor
Write-Host "   🌐 Frontend:  http://localhost:3000" -ForegroundColor $successColor
Write-Host "   🔧 Backend:   http://localhost:5000" -ForegroundColor $successColor
Write-Host ""
Write-Host "📧 Teste o formulário de contato:" -ForegroundColor $infoColor
Write-Host "   1. Abra http://localhost:3000" -ForegroundColor $warningColor
Write-Host "   2. Vá até 'Entre em Contato'" -ForegroundColor $warningColor
Write-Host "   3. Preencha o formulário" -ForegroundColor $warningColor
Write-Host "   4. Clique em 'Enviar Mensagem'" -ForegroundColor $warningColor
Write-Host "   5. Verifique o email em rennifer10@gmail.com" -ForegroundColor $warningColor
Write-Host ""
Write-Host "💡 Dicas:" -ForegroundColor $infoColor
Write-Host "   - Verifique os logs em ambos os terminais" -ForegroundColor $warningColor
Write-Host "   - Se houver erro, verifique as variáveis de ambiente" -ForegroundColor $warningColor
Write-Host "   - Certifique-se de que as portas 5000 e 3000 estão livres" -ForegroundColor $warningColor
Write-Host ""
