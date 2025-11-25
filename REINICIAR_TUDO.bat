@echo off
REM Script para reiniciar tudo do zero

echo.
echo ========================================
echo   REINICIANDO SISTEMA COMPLETO
echo ========================================
echo.

REM Limpar porta 5000
echo 🔍 Verificando porta 5000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do (
    echo 🛑 Encerrando processo na porta 5000 (PID: %%a)
    taskkill /PID %%a /F >nul 2>&1
)

REM Limpar porta 3000
echo 🔍 Verificando porta 3000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
    echo 🛑 Encerrando processo na porta 3000 (PID: %%a)
    taskkill /PID %%a /F >nul 2>&1
)

echo.
echo ✅ Portas limpas!
echo.
echo 🚀 Iniciando Backend...
echo.

REM Iniciar backend em uma nova janela
start cmd /k "cd backend && npm start"

echo.
echo ⏳ Aguardando 3 segundos para o backend iniciar...
timeout /t 3 /nobreak

echo.
echo 🚀 Iniciando Frontend...
echo.

REM Iniciar frontend em uma nova janela
start cmd /k "cd frontend && npm start"

echo.
echo ✅ Tudo iniciado!
echo.
echo 📍 Frontend: http://localhost:3000
echo 📍 Backend: http://localhost:5000
echo.
echo Aguarde alguns segundos para os servidores iniciarem completamente...
echo.
pause
