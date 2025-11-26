# 📸 PASSO A PASSO VISUAL - DEPLOY VERCEL

## 🎯 OBJETIVO

Backend rodando 24/7 na Vercel com imagens de cada passo!

---

## ✅ PASSO 1: VERIFICAR LOCALMENTE

### 1.1 Abra o terminal

```
Windows: Pressione Win + R, digite "cmd" e pressione Enter
```

### 1.2 Vá para a pasta do backend

```bash
cd c:\Users\Rennifer\Desktop\RENNIFER\PROJETOS\portifolio-renniferdev\backend
```

### 1.3 Inicie o backend

```bash
npm start
```

### 1.4 Você deve ver:

```
✅ Servidor rodando na porta 5000
🌐 http://localhost:5000
📧 Pronto para receber emails via Gmail!
```

**Se vir isso, o backend está funcionando! ✅**

---

## ✅ PASSO 2: FAZER PUSH NO GITHUB

### 2.1 Abra outro terminal

```
Windows: Pressione Win + R, digite "cmd" e pressione Enter
```

### 2.2 Vá para a pasta do projeto

```bash
cd c:\Users\Rennifer\Desktop\RENNIFER\PROJETOS\portifolio-renniferdev
```

### 2.3 Verifique o status

```bash
git status
```

### 2.4 Faça commit (se houver mudanças)

```bash
git add .
git commit -m "Configuração final para Vercel"
```

### 2.5 Faça push

```bash
git push origin main
```

**Se não houver erros, o push foi bem-sucedido! ✅**

---

## ✅ PASSO 3: DEPLOY BACKEND NA VERCEL

### 3.1 Acesse a Vercel

1. Abra o navegador
2. Vá para: https://vercel.com/dashboard
3. Faça login com sua conta

### 3.2 Clique em "Add New"

```
Você verá um botão "Add New" no canto superior direito
Clique nele
```

### 3.3 Selecione "Project"

```
Você verá opções:
- Project
- Environment
- Team

Clique em "Project"
```

### 3.4 Selecione seu repositório

```
Você verá uma lista de repositórios
Procure por "portifolio-renniferdev"
Clique nele
```

### 3.5 Configure o projeto

```
Project Name: portifolio-renniferdev-backend
Framework Preset: Other
Root Directory: backend
Build Command: (deixe em branco)
Output Directory: (deixe em branco)
```

### 3.6 Adicione variáveis de ambiente

```
Clique em "Environment Variables"
Adicione:
  GMAIL_USER = rennifer10@gmail.com
  GMAIL_PASSWORD = klxmadylcdesjgyv
  GMAIL_FROM_NAME = Portfolio Rennifer
  GMAIL_RECIPIENT_EMAIL = rennifer10@gmail.com
```

### 3.7 Clique em "Deploy"

```
Você verá uma tela de progresso
Aguarde até ficar verde (✅ Deployment successful)
```

**Seu backend está sendo deployado! 🚀**

---

## ✅ PASSO 4: OBTER URL DO BACKEND

### 4.1 Copie a URL

```
Após o deploy terminar, você verá a URL no topo
Exemplo: https://seu-backend-vercel.vercel.app
Copie essa URL
```

### 4.2 Teste a URL

```
Abra no navegador:
https://seu-backend-vercel.vercel.app/api/health

Você deve ver:
{"status":"OK"}
```

**Se vir isso, o backend está rodando na Vercel! ✅**

---

## ✅ PASSO 5: DEPLOY FRONTEND NA VERCEL

### 5.1 Clique em "Add New" novamente

```
Você está no dashboard da Vercel
Clique em "Add New" → "Project"
```

### 5.2 Selecione seu repositório

```
Procure por "portifolio-renniferdev"
Clique nele
```

### 5.3 Configure o projeto

```
Project Name: portifolio-renniferdev-frontend
Framework Preset: Create React App
Root Directory: frontend
Build Command: npm run build
Output Directory: build
```

### 5.4 Adicione variáveis de ambiente

```
Clique em "Environment Variables"
Adicione:
  REACT_APP_API_URL = https://seu-backend-vercel.vercel.app
  
(Substitua pela URL real do seu backend)
```

### 5.5 Clique em "Deploy"

```
Aguarde até ficar verde (✅ Deployment successful)
```

**Seu frontend está sendo deployado! 🚀**

---

## ✅ PASSO 6: TESTAR EM PRODUÇÃO

### 6.1 Acesse seu frontend

```
Após o deploy terminar, você verá a URL
Clique nela ou abra no navegador
Exemplo: https://seu-frontend-vercel.vercel.app
```

### 6.2 Vá para "Entre em Contato"

```
Procure pela seção "Entre em Contato"
Clique nela
```

### 6.3 Preencha o formulário

```
Nome: Seu Nome
Email: seu@email.com
Projeto: Teste
Mensagem: Teste de produção
```

### 6.4 Clique em "Enviar Mensagem"

```
Você deve ver uma mensagem de sucesso
```

### 6.5 Verifique o email

```
Abra sua caixa de entrada em rennifer10@gmail.com
Procure por um email com o assunto "Novo contato: Teste"
```

**Se recebeu o email, tudo está funcionando! ✅**

---

## 🎉 PRONTO!

Seu backend agora:
- ✅ Roda localmente (npm start)
- ✅ Roda 24/7 na Vercel
- ✅ Envia emails em produção

---

## 📊 RESUMO VISUAL

```
┌─────────────────────────────────────────────────────────────┐
│                    DESENVOLVIMENTO LOCAL                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Seu Computador                                             │
│  ├── Backend (localhost:5000) ✅                            │
│  ├── Frontend (localhost:3000) ✅                           │
│  └── Gmail (envia emails) ✅                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

                            ↓ Deploy

┌─────────────────────────────────────────────────────────────┐
│                    PRODUÇÃO NA VERCEL                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Vercel (Nuvem - 24/7)                                      │
│  ├── Backend (seu-backend.vercel.app) ✅                    │
│  ├── Frontend (seu-frontend.vercel.app) ✅                  │
│  └── Gmail (envia emails) ✅                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🆘 PROBLEMAS?

### Backend não está respondendo

```
1. Verifique a URL:
   https://seu-backend-vercel.vercel.app/api/health

2. Verifique os logs:
   Vercel Dashboard → Seu projeto → Deployments → Logs

3. Verifique as variáveis:
   Vercel Dashboard → Seu projeto → Settings → Environment Variables
```

### Email não é enviado

```
1. Verifique os logs do backend:
   Vercel Dashboard → Seu projeto → Deployments → Logs

2. Procure por:
   ❌ ERRO AO ENVIAR EMAIL

3. Verifique as credenciais do Gmail:
   https://myaccount.google.com/apppasswords
```

### Frontend não consegue se conectar

```
1. Abra DevTools (F12)
2. Vá para Console
3. Procure por: 🔗 API URL configurada:
4. Verifique se a URL está correta
```

---

## 📞 RESUMO RÁPIDO

| Etapa | O que fazer |
|-------|-----------|
| 1 | Verificar local (npm start) |
| 2 | Fazer push (git push origin main) |
| 3 | Deploy backend (Vercel Dashboard) |
| 4 | Obter URL (copiar da Vercel) |
| 5 | Deploy frontend (Vercel Dashboard) |
| 6 | Testar (abrir no navegador) |

---

**Bom desenvolvimento! 🚀**
