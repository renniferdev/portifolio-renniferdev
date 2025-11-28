# 🔧 Troubleshooting Detalhado

## 🚨 Problemas Comuns e Soluções

### 1. ❌ "Porta 5000 já está em uso"

**Sintoma:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solução:**

**Opção A: Liberar a porta**
```bash
# Encontrar o processo usando a porta
netstat -ano | findstr :5000

# Resultado será algo como:
# TCP    0.0.0.0:5000    0.0.0.0:0    LISTENING    12345

# Matar o processo (substitua 12345 pelo PID)
taskkill /PID 12345 /F

# Reiniciar o backend
npm start
```

**Opção B: Usar uma porta diferente**
```bash
# No backend, altere a porta em backend/.env
PORT=5001

# Ou execute com:
set PORT=5001 && npm start
```

---

### 2. ❌ "Porta 3000 já está em uso"

**Sintoma:**
```
Something is already running on port 3000
```

**Solução:**

**Opção A: Liberar a porta**
```bash
# Encontrar o processo usando a porta
netstat -ano | findstr :3000

# Matar o processo
taskkill /PID <PID> /F

# Reiniciar o frontend
npm start
```

**Opção B: Usar uma porta diferente**
```bash
# No frontend, execute com:
set PORT=3001 && npm start
```

---

### 3. ❌ "Backend não está respondendo"

**Sintoma:**
```
Error: Backend não está respondendo
```

**Solução:**

**Passo 1: Verificar se o backend está rodando**
```bash
# Abra um novo terminal e execute:
curl http://localhost:5000/api/health

# Se receber {"status":"OK"}, o backend está rodando
# Se receber erro, o backend não está rodando
```

**Passo 2: Verificar os logs do backend**
- Abra o terminal do backend
- Procure por erros ou mensagens de aviso
- Se houver erro, leia a mensagem com atenção

**Passo 3: Reiniciar o backend**
```bash
# No terminal do backend, pressione Ctrl+C
# Depois execute:
npm start
```

**Passo 4: Verificar a porta**
```bash
# Verifique se a porta 5000 está disponível
netstat -ano | findstr :5000

# Se estiver em uso, libere-a
taskkill /PID <PID> /F
```

---

### 4. ❌ "CORS error"

**Sintoma:**
```
Access to XMLHttpRequest at 'http://localhost:5000/api/send-email' 
from origin 'http://localhost:3000' has been blocked by CORS policy
```

**Solução:**

**Passo 1: Verificar se CORS está habilitado no backend**

Abra `backend/server.js` e verifique se tem:
```javascript
app.use(cors());
```

Se não tiver, adicione:
```javascript
const cors = require('cors');
app.use(cors());
```

**Passo 2: Verificar a URL do backend no frontend**

Abra `frontend/.env.local` e verifique:
```env
REACT_APP_API_URL=http://localhost:5000
```

**Passo 3: Reiniciar ambos**
```bash
# Terminal 1 - Backend
npm start

# Terminal 2 - Frontend
npm start
```

---

### 5. ❌ "Email não enviado"

**Sintoma:**
```
Erro ao enviar email. Tente novamente.
```

**Solução:**

**Passo 1: Verificar credenciais do Gmail**

Abra `backend/.env` e verifique:
```env
GMAIL_USER=rennifer10@gmail.com
GMAIL_PASSWORD=klxnadylcdejsgyv
GMAIL_FROM_NAME=Portfólio Rennifer
GMAIL_RECIPIENT_EMAIL=rennifer10@gmail.com
```

**Passo 2: Verificar os logs do backend**

Quando enviar um email, procure por mensagens como:
```
📧 ========== REQUISIÇÃO RECEBIDA ==========
📝 Dados recebidos: {...}
✅ Validação passou
📤 Enviando email via Gmail...
```

Se houver erro, procure por:
```
❌ ========== ERRO AO ENVIAR EMAIL ==========
💬 Mensagem: ...
```

**Passo 3: Verificar a senha de app do Gmail**

1. Acesse https://myaccount.google.com/apppasswords
2. Verifique se a senha está correta
3. Se não tiver, gere uma nova:
   - Selecione "Mail" e "Windows Computer"
   - Copie a senha gerada
   - Atualize em `backend/.env`

**Passo 4: Verificar se o Gmail está configurado corretamente**

1. Acesse https://myaccount.google.com/security
2. Verifique se "Acesso de apps menos seguros" está habilitado
3. Se não estiver, habilite

**Passo 5: Reiniciar o backend**

```bash
# No terminal do backend, pressione Ctrl+C
npm start
```

---

### 6. ❌ "Formulário não envia"

**Sintoma:**
- Clica em "Enviar Mensagem" mas nada acontece
- Ou aparece mensagem de erro

**Solução:**

**Passo 1: Abrir DevTools do navegador**
```
Pressione F12 no navegador
```

**Passo 2: Ir até a aba "Console"**
- Procure por mensagens de erro
- Procure por mensagens como "📧 Iniciando envio de email..."

**Passo 3: Verificar a aba "Network"**
- Clique em "Enviar Mensagem"
- Procure por uma requisição para `/api/send-email`
- Verifique o status (200 = sucesso, 4xx/5xx = erro)

**Passo 4: Verificar os logs do backend**
- Abra o terminal do backend
- Procure por mensagens de erro

---

### 7. ❌ "npm: comando não encontrado"

**Sintoma:**
```
'npm' is not recognized as an internal or external command
```

**Solução:**

**Passo 1: Verificar se Node.js está instalado**
```bash
node --version
npm --version
```

**Passo 2: Se não estiver instalado**
1. Baixe Node.js em https://nodejs.org
2. Instale a versão LTS
3. Reinicie o terminal
4. Verifique novamente: `npm --version`

**Passo 3: Se ainda não funcionar**
- Adicione Node.js ao PATH do Windows
- Ou reinicie o computador

---

### 8. ❌ "Dependências não instaladas"

**Sintoma:**
```
Cannot find module 'express'
```

**Solução:**

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

---

### 9. ❌ "Arquivo .env não encontrado"

**Sintoma:**
```
Error: ENOENT: no such file or directory, open '.env'
```

**Solução:**

**Passo 1: Verificar se o arquivo existe**
```bash
# No backend
dir backend\.env

# No frontend
dir frontend\.env.local
```

**Passo 2: Se não existir, criar**

**Backend:**
```bash
# Copiar do exemplo
copy backend\.env.example backend\.env
```

**Frontend:**
```bash
# Criar arquivo .env.local
echo REACT_APP_API_URL=http://localhost:5000 > frontend\.env.local
```

---

### 10. ❌ "Erro ao conectar com o banco de dados"

**Nota:** Este projeto não usa banco de dados, apenas envia emails.

Se receber este erro, verifique se está usando o projeto correto.

---

## 🧪 Testes de Diagnóstico

### Teste 1: Verificar Backend

```bash
# Abra um novo terminal e execute:
curl http://localhost:5000/api/health

# Esperado:
# {"status":"OK"}
```

### Teste 2: Verificar Frontend

```bash
# Abra um novo terminal e execute:
curl http://localhost:3000

# Esperado:
# HTML da página
```

### Teste 3: Enviar Email de Teste

```bash
curl -X POST http://localhost:5000/api/send-email ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Teste\",\"email\":\"seu_email@gmail.com\",\"projeto\":\"Teste\",\"message\":\"Teste\"}"

# Esperado:
# {"success":true,"message":"Email enviado com sucesso!",...}
```

---

## 📊 Checklist de Diagnóstico

Quando algo não funciona, verifique:

- [ ] Backend está rodando na porta 5000?
- [ ] Frontend está rodando na porta 3000?
- [ ] Arquivo `backend/.env` existe e tem credenciais?
- [ ] Arquivo `frontend/.env.local` existe e tem URL do backend?
- [ ] CORS está habilitado em `backend/server.js`?
- [ ] Dependências estão instaladas (`npm install`)?
- [ ] Portas 5000 e 3000 estão disponíveis?
- [ ] Credenciais do Gmail estão corretas?
- [ ] Senha de app do Gmail está correta?
- [ ] Conexão de internet está funcionando?

---

## 🔍 Como Ler os Logs

### Logs do Backend

Procure por:
- `✅` = Sucesso
- `❌` = Erro
- `📧` = Email
- `📝` = Dados
- `🔗` = Endpoint
- `💬` = Mensagem

Exemplo:
```
📧 ========== REQUISIÇÃO RECEBIDA ==========
🔗 Endpoint: POST /api/send-email
📝 Dados recebidos: {name: "João", email: "joao@example.com", ...}
✅ Validação passou
📤 Enviando email via Gmail...
✅ Email enviado com sucesso!
📧 Email ID: <...>
🎯 Enviado para: rennifer10@gmail.com
```

### Logs do Frontend

Abra DevTools (F12) e procure por:
- `📧 Iniciando envio de email...`
- `📝 Dados do formulário: {...}`
- `📨 Resposta recebida: 200 OK`
- `✅ Email enviado com sucesso!`
- `❌ Erro ao enviar email: ...`

---

## 📞 Quando Tudo Falha

Se nenhuma solução funcionar:

1. **Reinicie o computador**
   - Às vezes resolve problemas de porta

2. **Limpe o cache do npm**
   ```bash
   npm cache clean --force
   ```

3. **Delete node_modules e reinstale**
   ```bash
   # Backend
   cd backend
   rmdir /s /q node_modules
   npm install
   
   # Frontend
   cd frontend
   rmdir /s /q node_modules
   npm install
   ```

4. **Verifique a conexão de internet**
   - O Gmail precisa de internet para enviar emails

5. **Verifique as credenciais do Gmail**
   - Acesse https://myaccount.google.com
   - Verifique se a conta está ativa

6. **Procure por mensagens de erro específicas**
   - Copie a mensagem de erro
   - Procure no Google
   - Ou consulte a documentação

---

## 📚 Recursos Úteis

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail App Passwords](https://myaccount.google.com/apppasswords)

---

**Última atualização:** 2024
**Status:** ✅ Pronto para uso
