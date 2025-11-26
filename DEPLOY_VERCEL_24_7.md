# 🚀 DEPLOY VERCEL 24/7 - GUIA COMPLETO

## ✅ STATUS ATUAL

Você já tem:
- ✅ Backend rodando localmente (localhost:5000)
- ✅ Emails sendo enviados com sucesso
- ✅ Variáveis de ambiente configuradas na Vercel
- ✅ Projeto no GitHub

Agora vamos fazer o backend rodar 24/7 na Vercel!

---

## 🎯 OBJETIVO

Fazer com que:
1. ✅ Backend rode localmente (npm start)
2. ✅ Backend rode 24/7 na Vercel
3. ✅ Frontend se conecte ao backend na Vercel
4. ✅ Emails sejam enviados em produção

---

## 📋 PASSO 1: VERIFICAR CONFIGURAÇÃO LOCAL

### 1.1 Verifique o arquivo backend/.env

```bash
cat backend/.env
```

Deve conter:
```
PORT=5000
GMAIL_USER=rennifer10@gmail.com
GMAIL_PASSWORD=klxmadylcdesjgyv
GMAIL_FROM_NAME=Portfolio Rennifer
GMAIL_RECIPIENT_EMAIL=rennifer10@gmail.com
```

### 1.2 Verifique o arquivo backend/vercel.json

```bash
cat backend/vercel.json
```

Deve conter:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "/server.js"
    }
  ],
  "env": {
    "GMAIL_USER": "@GMAIL_USER",
    "GMAIL_PASSWORD": "@GMAIL_PASSWORD",
    "GMAIL_FROM_NAME": "@GMAIL_FROM_NAME",
    "GMAIL_RECIPIENT_EMAIL": "@GMAIL_RECIPIENT_EMAIL"
  }
}
```

### 1.3 Teste localmente

```bash
cd backend
npm start
```

Você deve ver:
```
✅ Servidor rodando na porta 5000
🌐 http://localhost:5000
📧 Pronto para receber emails via Gmail!
```

---

## 📋 PASSO 2: VERIFICAR VARIÁVEIS NA VERCEL

### 2.1 Acesse o Dashboard da Vercel

1. Vá para https://vercel.com/dashboard
2. Selecione seu projeto backend

### 2.2 Verifique as variáveis de ambiente

1. Clique em **Settings** → **Environment Variables**
2. Verifique se existem:
   - ✅ `GMAIL_USER` = `rennifer10@gmail.com`
   - ✅ `GMAIL_PASSWORD` = `klxmadylcdesjgyv`
   - ✅ `GMAIL_FROM_NAME` = `Portfolio Rennifer`
   - ✅ `GMAIL_RECIPIENT_EMAIL` = `rennifer10@gmail.com`

Se não existirem, adicione-as agora.

---

## 📋 PASSO 3: FAZER DEPLOY DO BACKEND

### 3.1 Opção A: Deploy via GitHub (Recomendado)

1. Certifique-se de que o código está no GitHub
2. Vá para https://vercel.com/dashboard
3. Clique em **Add New** → **Project**
4. Selecione seu repositório
5. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** backend
   - **Build Command:** (deixe em branco)
   - **Output Directory:** (deixe em branco)
6. Clique em **Deploy**

### 3.2 Opção B: Deploy via Vercel CLI

```bash
# Instale a CLI
npm install -g vercel

# Faça login
vercel login

# Deploy do backend
cd backend
vercel --prod
```

### 3.3 Opção C: Redeploy de um deployment existente

1. Vá para https://vercel.com/dashboard
2. Selecione seu projeto backend
3. Vá para **Deployments**
4. Clique em **Redeploy** no deployment mais recente
5. Aguarde o deploy terminar

---

## 📋 PASSO 4: OBTER URL DO BACKEND

### 4.1 Encontre a URL

1. Vá para https://vercel.com/dashboard
2. Selecione seu projeto backend
3. A URL estará no topo da página
4. Exemplo: `https://seu-backend-vercel.vercel.app`

### 4.2 Teste a URL

```bash
curl https://seu-backend-vercel.vercel.app/api/health
```

Deve retornar:
```json
{"status":"OK"}
```

---

## 📋 PASSO 5: CONFIGURAR FRONTEND

### 5.1 Adicione a URL do backend no frontend

1. Vá para https://vercel.com/dashboard
2. Selecione seu projeto frontend
3. Clique em **Settings** → **Environment Variables**
4. Clique em **Add New**
5. Preencha:
   - **Name:** `REACT_APP_API_URL`
   - **Value:** `https://seu-backend-vercel.vercel.app`
   - **Environments:** Production, Preview, Development
6. Clique em **Save**

### 5.2 Faça deploy do frontend

1. Vá para **Deployments**
2. Clique em **Redeploy** no deployment mais recente
3. Aguarde o deploy terminar

---

## 📋 PASSO 6: TESTAR EM PRODUÇÃO

### 6.1 Teste o backend

```bash
curl https://seu-backend-vercel.vercel.app/api/health
```

Deve retornar:
```json
{"status":"OK"}
```

### 6.2 Teste o frontend

1. Acesse seu frontend na Vercel
2. Vá para "Entre em Contato"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique se mostra mensagem de sucesso
6. Verifique o email em rennifer10@gmail.com

### 6.3 Verifique os logs

1. Vá para seu projeto backend na Vercel
2. Clique em **Deployments**
3. Clique no deployment mais recente
4. Clique em **Logs**
5. Procure por:
   ```
   📧 ========== REQUISIÇÃO RECEBIDA ==========
   ✅ Email enviado com sucesso!
   ```

---

## 🔄 FLUXO COMPLETO

```
┌─────────────────────────────────────────────────────────────┐
│                    DESENVOLVIMENTO LOCAL                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Seu Computador                                             │
│  ├── Backend (localhost:5000)                               │
│  ├── Frontend (localhost:3000)                              │
│  └── Gmail (envia emails)                                   │
│                                                             │
│  Comando: npm start (em cada pasta)                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

                            ↓ Deploy

┌─────────────────────────────────────────────────────────────┐
│                    PRODUÇÃO NA VERCEL                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Vercel (Nuvem - 24/7)                                      │
│  ├── Backend (seu-backend.vercel.app)                       │
│  ├── Frontend (seu-frontend.vercel.app)                     │
│  └── Gmail (envia emails)                                   │
│                                                             │
│  Comando: Automático (GitHub push)                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧪 TESTE RÁPIDO

### Local
```bash
# Terminal 1
cd backend && npm start

# Terminal 2
cd frontend && npm start

# Navegador
http://localhost:3000
```

### Vercel
```bash
# Navegador
https://seu-frontend-vercel.vercel.app
```

---

## 📊 CHECKLIST FINAL

### Local
- [ ] Backend rodando em localhost:5000
- [ ] Frontend rodando em localhost:3000
- [ ] Formulário envia email com sucesso
- [ ] Email recebido em rennifer10@gmail.com

### Vercel
- [ ] Variáveis de ambiente configuradas no backend
- [ ] Backend fez deploy com sucesso
- [ ] URL do backend obtida
- [ ] Variável `REACT_APP_API_URL` configurada no frontend
- [ ] Frontend fez deploy com sucesso
- [ ] Formulário envia email com sucesso em produção
- [ ] Email recebido em rennifer10@gmail.com
- [ ] Logs mostram "Email enviado com sucesso!"

---

## 🆘 PROBLEMAS?

### Backend não está respondendo na Vercel

1. Verifique os logs:
   - Vercel Dashboard → Deployments → Logs

2. Verifique as variáveis de ambiente:
   - Vercel Dashboard → Settings → Environment Variables

3. Teste a URL:
   ```bash
   curl https://seu-backend-vercel.vercel.app/api/health
   ```

### Frontend não consegue se conectar ao backend

1. Verifique a variável `REACT_APP_API_URL`:
   - Vercel Dashboard → Settings → Environment Variables

2. Verifique o DevTools do navegador (F12):
   - Console → Procure por "🔗 API URL configurada:"

3. Teste a URL diretamente:
   ```bash
   curl https://seu-backend-vercel.vercel.app/api/health
   ```

### Email não é enviado em produção

1. Verifique os logs do backend:
   - Vercel Dashboard → Deployments → Logs

2. Verifique as credenciais do Gmail:
   - Certifique-se de usar Senha de App
   - Ative 2FA em https://myaccount.google.com

3. Verifique as variáveis de ambiente:
   - Vercel Dashboard → Settings → Environment Variables

---

## 📞 RESUMO RÁPIDO

| Ação | Comando/Link |
|------|-------------|
| Rodar backend local | `cd backend && npm start` |
| Rodar frontend local | `cd frontend && npm start` |
| Testar backend local | `curl http://localhost:5000/api/health` |
| Testar backend Vercel | `curl https://seu-backend-vercel.vercel.app/api/health` |
| Dashboard Vercel | https://vercel.com/dashboard |
| Logs Vercel | Vercel Dashboard → Deployments → Logs |

---

## 🎉 PRONTO!

Seu backend agora:
- ✅ Roda localmente (npm start)
- ✅ Roda 24/7 na Vercel
- ✅ Envia emails em ambos os ambientes
- ✅ Está pronto para produção

**Bom desenvolvimento! 🚀**
