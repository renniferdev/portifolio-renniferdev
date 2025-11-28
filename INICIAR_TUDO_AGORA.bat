@echo off
REM Script para iniciar Backend e Frontend automaticamente
REM Executar como: INICIAR_TUDO_AGORA.bat

setlocal enabledelayedexpansion

cls
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║     🚀 INICIANDO PROJETO - BACKEND + FRONTEND 🚀          ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Verificar se as portas estão em uso
echo 🔍 Verificando portas...

netstat -ano | findstr :5000 >nul
if !errorlevel! equ 0 (
    echo ⚠️  Porta 5000 já está em uso! Liberando...
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do taskkill /PID %%a /F >nul 2>&1
    timeout /t 2 /nobreak >nul
)

netstat -ano | findstr :3000 >nul
if !errorlevel! equ 0 (
    echo ⚠️  Porta 3000 já está em uso! Liberando...
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do taskkill /PID %%a /F >nul 2>&1
    timeout /t 2 /nobreak >nul
)

echo ✅ Portas verificadas!
echo.

REM Iniciar Backend
echo ╔════════════════════════════════════════════════════════════╗
echo ║              🔧 INICIANDO BACKEND (Porta 5000)             ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

cd /d "%~dp0backend"

if not exist "node_modules" (
    echo 📦 Instalando dependências do backend...
    call npm install
)

echo 🚀 Abrindo terminal do backend...
start cmd /k "npm start"

echo ✅ Backend iniciado!
echo.

REM Aguardar um pouco para o backend iniciar
echo ⏳ Aguardando backend iniciar (5 segundos)...
timeout /t 5 /nobreak >nul

REM Iniciar Frontend
echo ╔═══════════════════════════════════════���════════════════════╗
echo ║              🎨 INICIANDO FRONTEND (Porta 3000)            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

cd /d "%~dp0frontend"

if not exist "node_modules" (
    echo 📦 Instalando dependências do frontend...
    call npm install
)

echo 🚀 Abrindo terminal do frontend...
start cmd /k "npm start"

echo ✅ Frontend iniciado!
echo.

REM Resumo final
echo ╔════════════════════════════════════════════════════════════╗
echo ║                    ✅ TUDO INICIADO! ✅                    ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo 📍 URLs de acesso:
echo    🌐 Frontend:  http://localhost:3000
echo    🔧 Backend:   http://localhost:5000
echo.
echo 📧 Teste o formulário de contato:
echo    1. Abra http://localhost:3000
echo    2. Vá até 'Entre em Contato'
echo    3. Preencha o formulário
echo    4. Clique em 'Enviar Mensagem'
echo    5. Verifique o email em rennifer10@gmail.com
echo.
echo 💡 Dicas:
echo    - Verifique os logs em ambos os terminais
echo    - Se houver erro, verifique as variáveis de ambiente
echo    - Certifique-se de que as portas 5000 e 3000 estão livres
echo.

pause
