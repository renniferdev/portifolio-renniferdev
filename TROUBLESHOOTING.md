# 🔧 Troubleshooting - Resolvendo Problemas

## ❌ Erro: "Cannot POST /send-email"

### Causa
O frontend está enviando para `/send-email` em vez de `http://localhost:5000/api/send-email`

### Solução
1. Feche o frontend (Ctrl+C no terminal)
2. Aguarde 5 segundos
3. Execute novamente:
   ```bash
   cd frontend
   npm start
   ```

---

## ❌ Erro: "Backend não está respondendo"

### Causa
O backend não está rodando ou não está acessível

### Solução
1. Verifique se o backend está rodando:
   ```bash
   curl http://localhost:5000/api/health
   ```

2. Se não funcionar, inicie o backend:
   ```bash
   cd backend
   npm start
   ```

3. Se der erro de porta em uso:
   ```bash
   LIMPAR_PORTA_5000.bat
   ```

---

## ❌ Erro: "Porta 5000 já está em uso"

### Causa
Outro processo está usando a porta 5000

### Solução
Execute:
```bash
LIMPAR_PORTA_5000.bat
```

Ou manualmente:
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

---

## ❌ Erro: "Porta 3000 já está em uso"

### Causa
Outro processo está usando a porta 3000

### Solução
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

## ❌ Email não chega

### Causa 1: Email foi para Spam
**Solução:**
1. Acesse `rennifer10@gmail.com`
2. Vá para a pasta "Spam"
3. Procure pelo email
4. Marque como "Não é spam"

### Causa 2: Senha de app incorreta
**Solução:**
1. Verifique o arquivo `backend/.env`
2. A senha deve ser: `klxnadylcdejsgyv`
3. Se estiver diferente, atualize
4. Reinicie o backend

### Causa 3: Backend não está enviando
**Solução:**
1. Verifique o console do backend
2. Procure por mensagens de erro
3. Se houver erro de autenticação, regenere a senha de app

---

## ❌ Erro: "EADDRINUSE: address already in use"

### Causa
A porta já está em uso

### Solução
Execute:
```bash
REINICIAR_TUDO.bat
```

---

## ❌ Erro: "Cannot find module 'nodemailer'"

### Causa
As dependências não foram instaladas

### Solução
```bash
cd backend
npm install
npm start
```

---

## ❌ Erro: "Cannot find module 'react'"

### Causa
As dependências do frontend não foram instaladas

### Solução
```bash
cd frontend
npm install
npm start
```

---

## ❌ Erro: "ENOENT: no such file or directory, open '.env'"

### Causa
O arquivo `.env` não existe no backend

### Solução
Crie o arquivo `backend/.env` com:
```
PORT=5000
GMAIL_USER=rennifer10@gmail.com
GMAIL_PASSWORD=klxnadylcdejsgyv
GMAIL_FROM_NAME=Portfólio Rennifer
GMAIL_RECIPIENT_EMAIL=rennifer10@gmail.com
```

---

## ❌ Erro: "Invalid login credentials"

### Causa
A senha de app está incorreta

### Solução
1. Acesse: https://myaccount.google.com/apppasswords
2. Selecione "Mail" e "Windows Computer"
3. Gere uma nova senha
4. Copie a senha (16 caracteres)
5. Atualize `backend/.env`
6. Reinicie o backend

---

## ✅ Verificações Rápidas

### Backend está rodando?
```bash
curl http://localhost:5000/api/health
```

Deve retornar:
```json
{"status":"OK"}
```

### Frontend está rodando?
Acesse `http://localhost:3000` no navegador

### Portas estão livres?
```bash
netstat -ano | findstr :5000
netstat -ano | findstr :3000
```

---

## 🆘 Se Nada Funcionar

1. Execute `REINICIAR_TUDO.bat`
2. Aguarde 10 segundos
3. Acesse `http://localhost:3000`
4. Teste o formulário
5. Verifique o console do navegador (F12)
6. Verifique o console do backend

Se ainda não funcionar, verifique:
- Se o `.env` está correto
- Se a senha de app está correta
- Se o Gmail tem autenticação de 2 fatores ativada
- Se o email está verificado no Gmail

---

## 📞 Resumo de Comandos Úteis

```bash
# Limpar porta 5000
LIMPAR_PORTA_5000.bat

# Reiniciar tudo
REINICIAR_TUDO.bat

# Iniciar backend
cd backend && npm start

# Iniciar frontend
cd frontend && npm start

# Verificar porta 5000
netstat -ano | findstr :5000

# Verificar porta 3000
netstat -ano | findstr :3000

# Testar backend
curl http://localhost:5000/api/health
```

---

## ✨ Próximos Passos

1. Execute `REINICIAR_TUDO.bat`
2. Aguarde os servidores iniciarem
3. Teste o formulário
4. Se funcionar, você está pronto! 🎉

Boa sorte! 🚀
