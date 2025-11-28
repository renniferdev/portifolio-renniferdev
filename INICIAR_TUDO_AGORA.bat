@echo off
echo.
echo ========================================
echo   INICIANDO BACKEND E FRONTEND
echo ========================================
echo.

REM Iniciar Backend em uma nova janela
echo Abrindo Backend na porta 5000...
start cmd /k "cd backend && npm install && npm start"

REM Aguardar um pouco para o backend iniciar
timeout /t 3 /nobreak

REM Iniciar Frontend em outra janela
echo Abrindo Frontend na porta 3000...
start cmd /k "cd frontend && npm install && npm start"

echo.
echo ✅ Backend e Frontend iniciados!
echo.
echo 🌐 Frontend: http://localhost:3000
echo 🔌 Backend: http://localhost:5000
echo.
echo Aguarde alguns segundos para os servidores iniciarem completamente...
echo.

pause
