@echo off
chcp 65001 >nul
color 0A
cls

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║   🚀 INICIANDO FRONTEND LOCALMENTE                        ║
echo ║                                                            ║
echo ║   Backend: https://backend-portfolio-tau-puce.vercel.app  ║
echo ║   Frontend: http://localhost:3000                         ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

cd frontend

echo 📦 Instalando dependências (se necessário)...
call npm install

echo.
echo 🎯 Iniciando servidor de desenvolvimento...
echo.
echo ✅ Frontend rodando em: http://localhost:3000
echo ✅ Backend conectado em: https://backend-portfolio-tau-puce.vercel.app
echo.
echo 📝 Para testar:
echo    1. Abra http://localhost:3000 no navegador
echo    2. Vá até a seção "Entre em Contato"
echo    3. Preencha o formulário
echo    4. Clique em "Enviar Mensagem"
echo    5. Verifique o console (F12) para logs
echo.

call npm start
