@echo off
REM Script para iniciar o backend do portfólio
REM Este arquivo deve ser executado em um terminal separado

echo.
echo ========================================
echo   INICIANDO BACKEND DO PORTFÓLIO
echo ========================================
echo.

REM Verificar se está na pasta correta
if not exist "backend\server.js" (
    echo ❌ ERRO: Arquivo server.js não encontrado!
    echo Certifique-se de executar este arquivo na pasta raiz do projeto.
    pause
    exit /b 1
)

REM Ir para a pasta backend
cd backend

REM Verificar se node_modules existe
if not exist "node_modules" (
    echo 📦 Instalando dependências...
    call npm install
    if errorlevel 1 (
        echo ❌ Erro ao instalar dependências!
        pause
        exit /b 1
    )
)

REM Iniciar o servidor
echo.
echo 🚀 Iniciando servidor...
echo.
call npm start

REM Se chegou aqui, o servidor parou
echo.
echo ⚠️  Servidor parou de rodar
echo Verifique se há erros acima
pause
