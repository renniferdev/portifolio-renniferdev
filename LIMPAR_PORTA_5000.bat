@echo off
REM Script para limpar a porta 5000 e iniciar o backend

echo.
echo ========================================
echo   LIMPANDO PORTA 5000
echo ========================================
echo.

REM Verificar se há processo usando a porta 5000
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do (
    echo 🔍 Encontrado processo usando porta 5000: PID %%a
    echo 🛑 Encerrando processo...
    taskkill /PID %%a /F
    if errorlevel 1 (
        echo ❌ Erro ao encerrar processo
    ) else (
        echo ✅ Processo encerrado com sucesso
    )
)

echo.
echo ✅ Porta 5000 está livre!
echo.
echo 🚀 Iniciando backend...
echo.

REM Iniciar o backend
cd backend
npm start

pause
