@echo off
echo.
echo ========================================
echo   INICIANDO BACKEND
echo ========================================
echo.

cd backend

echo Verificando dependências...
if not exist node_modules (
    echo Instalando dependências...
    call npm install
)

echo.
echo ✅ Iniciando servidor na porta 5000...
echo.

npm start

pause
