@echo off
REM Script para testar a conexão com o backend

echo.
echo ========================================
echo   TESTE DE CONEXAO - BACKEND
echo ========================================
echo.

REM Teste 1: Health Check
echo [1/3] Testando Health Check...
echo.
curl -s http://localhost:5000/api/health
echo.
echo.

REM Teste 2: Enviar Email de Teste
echo [2/3] Enviando email de teste...
echo.
curl -X POST http://localhost:5000/api/send-email ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Teste\",\"email\":\"teste@gmail.com\",\"projeto\":\"Teste de Conexao\",\"message\":\"Este eh um teste de conexao\"}"
echo.
echo.

REM Teste 3: Verificar porta
echo [3/3] Verificando porta 5000...
echo.
netstat -ano | findstr :5000
echo.

echo ========================================
echo   TESTES CONCLUIDOS
echo ========================================
echo.
pause
