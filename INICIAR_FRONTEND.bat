@echo off
REM Script para iniciar o frontend do portfólio

echo.
echo ========================================
echo   INICIANDO FRONTEND DO PORTFÓLIO
echo ========================================
echo.

REM Verificar se está na pasta correta
if not exist "frontend\package.json" (
    echo ❌ ERRO: Arquivo package.json não encontrado!
    echo Certifique-se de executar este arquivo na pasta raiz do projeto.
    pause
    exit /b 1
)

REM Ir para a pasta frontend
cd frontend

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
echo 🚀 Iniciando servidor React...
echo.
echo ⚠️  IMPORTANTE: O setupProxy.js será carregado automaticamente
echo 📍 Acesse: http://localhost:3000
echo.
call npm start

REM Se chegou aqui, o servidor parou
echo.
echo ⚠️  Servidor parou de rodar
echo Verifique se há erros acima
pause
