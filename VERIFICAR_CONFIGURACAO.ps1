# Script para verificar se tudo está configurado corretamente

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  VERIFICACAO DE CONFIGURACAO" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$success = "Green"
$error = "Red"
$warning = "Yellow"
$info = "Cyan"

# Contador de erros
$errorCount = 0

# 1. Verificar Node.js
Write-Host "[1/8] Verificando Node.js..." -ForegroundColor $info
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js instalado: $nodeVersion" -ForegroundColor $success
} catch {
    Write-Host "❌ Node.js não encontrado!" -ForegroundColor $error
    $errorCount++
}

# 2. Verificar npm
Write-Host "[2/8] Verificando npm..." -ForegroundColor $info
try {
    $npmVersion = npm --version
    Write-Host "✅ npm instalado: $npmVersion" -ForegroundColor $success
} catch {
    Write-Host "❌ npm não encontrado!" -ForegroundColor $error
    $errorCount++
}

# 3. Verificar backend/.env
Write-Host "[3/8] Verificando backend/.env..." -ForegroundColor $info
$backendEnvPath = Join-Path $PSScriptRoot "backend\.env"
if (Test-Path $backendEnvPath) {
    Write-Host "✅ Arquivo backend/.env encontrado" -ForegroundColor $success
    
    # Verificar variáveis
    $envContent = Get-Content $backendEnvPath
    $hasGmailUser = $envContent | Select-String "GMAIL_USER"
    $hasGmailPassword = $envContent | Select-String "GMAIL_PASSWORD"
    $hasPort = $envContent | Select-String "PORT"
    
    if ($hasGmailUser -and $hasGmailPassword -and $hasPort) {
        Write-Host "  ✅ Variáveis de ambiente configuradas" -ForegroundColor $success
    } else {
        Write-Host "  ⚠️  Algumas variáveis podem estar faltando" -ForegroundColor $warning
    }
} else {
    Write-Host "❌ Arquivo backend/.env não encontrado!" -ForegroundColor $error
    Write-Host "  Copie backend/.env.example para backend/.env" -ForegroundColor $warning
    $errorCount++
}

# 4. Verificar frontend/.env.local
Write-Host "[4/8] Verificando frontend/.env.local..." -ForegroundColor $info
$frontendEnvPath = Join-Path $PSScriptRoot "frontend\.env.local"
if (Test-Path $frontendEnvPath) {
    Write-Host "✅ Arquivo frontend/.env.local encontrado" -ForegroundColor $success
    
    # Verificar variáveis
    $envContent = Get-Content $frontendEnvPath
    $hasApiUrl = $envContent | Select-String "REACT_APP_API_URL"
    
    if ($hasApiUrl) {
        Write-Host "  ✅ REACT_APP_API_URL configurada" -ForegroundColor $success
    } else {
        Write-Host "  ⚠️  REACT_APP_API_URL não encontrada" -ForegroundColor $warning
    }
} else {
    Write-Host "❌ Arquivo frontend/.env.local não encontrado!" -ForegroundColor $error
    Write-Host "  Copie frontend/.env.local.example para frontend/.env.local" -ForegroundColor $warning
    $errorCount++
}

# 5. Verificar backend/node_modules
Write-Host "[5/8] Verificando backend/node_modules..." -ForegroundColor $info
$backendNodeModules = Join-Path $PSScriptRoot "backend\node_modules"
if (Test-Path $backendNodeModules) {
    Write-Host "✅ Dependências do backend instaladas" -ForegroundColor $success
} else {
    Write-Host "⚠️  Dependências do backend não instaladas" -ForegroundColor $warning
    Write-Host "  Execute: cd backend && npm install" -ForegroundColor $warning
}

# 6. Verificar frontend/node_modules
Write-Host "[6/8] Verificando frontend/node_modules..." -ForegroundColor $info
$frontendNodeModules = Join-Path $PSScriptRoot "frontend\node_modules"
if (Test-Path $frontendNodeModules) {
    Write-Host "✅ Depend��ncias do frontend instaladas" -ForegroundColor $success
} else {
    Write-Host "⚠️  Dependências do frontend não instaladas" -ForegroundColor $warning
    Write-Host "  Execute: cd frontend && npm install" -ForegroundColor $warning
}

# 7. Verificar arquivos principais
Write-Host "[7/8] Verificando arquivos principais..." -ForegroundColor $info
$backendServer = Join-Path $PSScriptRoot "backend\server.js"
$frontendApp = Join-Path $PSScriptRoot "frontend\src\App.js"
$contactComponent = Join-Path $PSScriptRoot "frontend\src\components\Contact.js"

$filesOk = $true
if (-not (Test-Path $backendServer)) {
    Write-Host "❌ backend/server.js não encontrado!" -ForegroundColor $error
    $filesOk = $false
    $errorCount++
}
if (-not (Test-Path $frontendApp)) {
    Write-Host "❌ frontend/src/App.js não encontrado!" -ForegroundColor $error
    $filesOk = $false
    $errorCount++
}
if (-not (Test-Path $contactComponent)) {
    Write-Host "❌ frontend/src/components/Contact.js não encontrado!" -ForegroundColor $error
    $filesOk = $false
    $errorCount++
}

if ($filesOk) {
    Write-Host "✅ Todos os arquivos principais encontrados" -ForegroundColor $success
}

# 8. Verificar portas
Write-Host "[8/8] Verificando portas..." -ForegroundColor $info
$port5000 = Test-NetConnection -ComputerName localhost -Port 5000 -WarningAction SilentlyContinue
$port3000 = Test-NetConnection -ComputerName localhost -Port 3000 -WarningAction SilentlyContinue

if ($port5000.TcpTestSucceeded) {
    Write-Host "⚠️  Porta 5000 já está em uso" -ForegroundColor $warning
} else {
    Write-Host "✅ Porta 5000 disponível" -ForegroundColor $success
}

if ($port3000.TcpTestSucceeded) {
    Write-Host "⚠️  Porta 3000 já está em uso" -ForegroundColor $warning
} else {
    Write-Host "✅ Porta 3000 disponível" -ForegroundColor $success
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  RESULTADO DA VERIFICACAO" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($errorCount -eq 0) {
    Write-Host "✅ TUDO CONFIGURADO CORRETAMENTE!" -ForegroundColor $success
    Write-Host ""
    Write-Host "Próximos passos:" -ForegroundColor $info
    Write-Host "  1. Execute: .\INICIAR_TUDO.ps1" -ForegroundColor $info
    Write-Host "  2. Abra http://localhost:3000 no navegador" -ForegroundColor $info
    Write-Host "  3. Teste o formulário de contato" -ForegroundColor $info
} else {
    Write-Host "❌ ENCONTRADOS $errorCount ERRO(S)" -ForegroundColor $error
    Write-Host ""
    Write-Host "Corrija os erros acima e execute novamente." -ForegroundColor $warning
}

Write-Host ""
Write-Host "Pressione qualquer tecla para sair..." -ForegroundColor $warning
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
