# Script para iniciar Backend e Frontend simultaneamente

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  INICIANDO BACKEND E FRONTEND" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Cores para output
$success = "Green"
$info = "Cyan"
$warning = "Yellow"
$error = "Red"

# Função para verificar se a porta está em uso
function Test-Port {
    param([int]$Port)
    $connection = Test-NetConnection -ComputerName localhost -Port $Port -WarningAction SilentlyContinue
    return $connection.TcpTestSucceeded
}

# Verificar se as portas estão disponíveis
Write-Host "[1/4] Verificando portas..." -ForegroundColor $info
Write-Host ""

if (Test-Port -Port 5000) {
    Write-Host "⚠️  Porta 5000 já está em uso!" -ForegroundColor $warning
    Write-Host "Liberando porta 5000..." -ForegroundColor $warning
    $process = Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess
    if ($process) {
        Stop-Process -Id $process -Force -ErrorAction SilentlyContinue
        Write-Host "✅ Porta 5000 liberada" -ForegroundColor $success
    }
}

if (Test-Port -Port 3000) {
    Write-Host "⚠️  Porta 3000 já está em uso!" -ForegroundColor $warning
    Write-Host "Liberando porta 3000..." -ForegroundColor $warning
    $process = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess
    if ($process) {
        Stop-Process -Id $process -Force -ErrorAction SilentlyContinue
        Write-Host "✅ Porta 3000 liberada" -ForegroundColor $success
    }
}

Write-Host ""

# Iniciar Backend
Write-Host "[2/4] Iniciando Backend..." -ForegroundColor $info
Write-Host ""

$backendPath = Join-Path $PSScriptRoot "backend"
$backendProcess = Start-Process -FilePath "cmd.exe" -ArgumentList "/k cd $backendPath && npm start" -PassThru -WindowStyle Normal

Write-Host "✅ Backend iniciado (PID: $($backendProcess.Id))" -ForegroundColor $success
Write-Host ""

# Aguardar um pouco para o backend iniciar
Write-Host "Aguardando backend iniciar..." -ForegroundColor $info
Start-Sleep -Seconds 3

# Verificar se o backend está respondendo
Write-Host "Verificando conexão com backend..." -ForegroundColor $info
$maxAttempts = 10
$attempt = 0
$backendReady = $false

while ($attempt -lt $maxAttempts -and -not $backendReady) {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:5000/api/health" -TimeoutSec 2 -ErrorAction SilentlyContinue
        if ($response.StatusCode -eq 200) {
            $backendReady = $true
            Write-Host "✅ Backend respondendo corretamente" -ForegroundColor $success
        }
    } catch {
        $attempt++
        if ($attempt -lt $maxAttempts) {
            Write-Host "Tentativa $attempt/$maxAttempts..." -ForegroundColor $warning
            Start-Sleep -Seconds 1
        }
    }
}

if (-not $backendReady) {
    Write-Host "⚠️  Backend pode não estar respondendo. Verifique os logs." -ForegroundColor $warning
}

Write-Host ""

# Iniciar Frontend
Write-Host "[3/4] Iniciando Frontend..." -ForegroundColor $info
Write-Host ""

$frontendPath = Join-Path $PSScriptRoot "frontend"
$frontendProcess = Start-Process -FilePath "cmd.exe" -ArgumentList "/k cd $frontendPath && npm start" -PassThru -WindowStyle Normal

Write-Host "✅ Frontend iniciado (PID: $($frontendProcess.Id))" -ForegroundColor $success
Write-Host ""

# Aguardar um pouco para o frontend iniciar
Write-Host "Aguardando frontend iniciar..." -ForegroundColor $info
Start-Sleep -Seconds 5

Write-Host ""
Write-Host "[4/4] Verificação final..." -ForegroundColor $info
Write-Host ""

Write-Host "========================================" -ForegroundColor $success
Write-Host "  ✅ TUDO INICIADO COM SUCESSO!" -ForegroundColor $success
Write-Host "========================================" -ForegroundColor $success
Write-Host ""

Write-Host "📊 Status:" -ForegroundColor $info
Write-Host "  Backend:  http://localhost:5000" -ForegroundColor $success
Write-Host "  Frontend: http://localhost:3000" -ForegroundColor $success
Write-Host ""

Write-Host "📝 Próximos passos:" -ForegroundColor $info
Write-Host "  1. Abra http://localhost:3000 no navegador" -ForegroundColor $info
Write-Host "  2. Vá até 'Entre em Contato'" -ForegroundColor $info
Write-Host "  3. Preencha o formulário e envie" -ForegroundColor $info
Write-Host "  4. Verifique o email em rennifer10@gmail.com" -ForegroundColor $info
Write-Host ""

Write-Host "💡 Dicas:" -ForegroundColor $info
Write-Host "  - Verifique os logs do backend para erros" -ForegroundColor $info
Write-Host "  - Verifique o console do navegador (F12)" -ForegroundColor $info
Write-Host "  - Certifique-se de que as variáveis de ambiente estão corretas" -ForegroundColor $info
Write-Host ""

Write-Host "Pressione qualquer tecla para continuar..." -ForegroundColor $warning
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
