# 🔧 Solução Completa: Email não funciona na Vercel

## 🎯 Problema Identificado

O erro **"Failed to fetch"** ocorre porque:

1. **Frontend está tentando conectar ao backend local** (`http://localhost:5000`)
2. **Backend não está rodando localmente** (porta 5000 vazia)
3. **Variável de ambiente não está configurada** no frontend

## ✅ Solução em 3 Passos

### PASSO 1: Iniciar o Backend Localmente

Abra um terminal **NOVO** e execute:

```bash
cd backend
npm install
npm start
```

Você deve ver:
```
✅ Servidor rodando na porta 5000
🌐 http://localhost:5000
📧 Pronto para receber emails via Gmail!
```

**Deixe este terminal aberto!**

### PASSO 2: Verificar o Frontend

Abra outro terminal e execute:

```bash
cd frontend
npm install
npm start
```

O frontend abrirá em `http://localhost:3000`

### PASSO 3: Testar o Envio de Email

1. Acesse `http://localhost:3000`
2. Vá para a seção "Entre em Contato"
3. Preencha o formulário com dados de teste
4. Clique em "Enviar Mensagem"

Você deve receber o email em `rennifer10@gmail.com`

---

## 🚀 Para Produção (Vercel)

Quando quiser usar o backend na Vercel, siga estes passos:

### 1. Obtenha a URL do seu Backend na Vercel

Acesse o dashboard da Vercel e copie a URL do seu backend. Exemplo:
```
https://backend-txswa305w-rennifer-teixeiras-projects.vercel.app
```

### 2. Configure a Variável de Ambiente no Frontend

Crie um arquivo `.env.production.local` na pasta `frontend`:

```bash
REACT_APP_API_URL=https://seu-backend-vercel.vercel.app
```

**Substitua** `seu-backend-vercel.vercel.app` pela URL real do seu backend.

### 3. Deploy do Frontend

```bash
cd frontend
git add .
git commit -m "Configure backend URL for production"
git push
```

---

## 📋 Checklist de Verificação

### Para Desenvolvimento Local:

- [ ] Backend rodando em `http://localhost:5000`
- [ ] Frontend rodando em `http://localhost:3000`
- [ ] Arquivo `.env` no backend com credenciais Gmail
- [ ] Arquivo `.env.local` no frontend com `REACT_APP_API_URL=http://localhost:5000`
- [ ] Formulário enviando emails com sucesso

### Para Produção (Vercel):

- [ ] Backend deployado na Vercel
- [ ] Variáveis de ambiente configuradas na Vercel (GMAIL_USER, GMAIL_PASSWORD, etc)
- [ ] Frontend deployado na Vercel
- [ ] Variável `REACT_APP_API_URL` apontando para o backend da Vercel
- [ ] Teste o formulário no site em produção

---

## 🐛 Troubleshooting

### Erro: "Failed to fetch"

**Causa:** Backend não está rodando ou URL está incorreta

**Solução:**
1. Verifique se o backend está rodando: `netstat -ano | findstr :5000`
2. Se não estiver, execute `npm start` na pasta backend
3. Verifique a URL em `Contact.js` ou `.env.local`

### Erro: "net::ERR_CONNECT..."

**Causa:** Conexão recusada (backend offline)

**Solução:**
1. Inicie o backend: `cd backend && npm start`
2. Aguarde a mensagem "Servidor rodando na porta 5000"
3. Recarregue o frontend

### Email não chega

**Causa:** Credenciais Gmail incorretas ou não configuradas

**Solução:**
1. Verifique o arquivo `.env` no backend
2. Certifique-se de usar **Senha de App do Gmail** (não a senha normal)
3. Gere uma nova em: https://myaccount.google.com/apppasswords
4. Reinicie o backend após alterar as credenciais

### Erro na Vercel: "Cannot POST /api/send-email"

**Causa:** Variáveis de ambiente não configuradas na Vercel

**Solução:**
1. Acesse o dashboard da Vercel
2. Vá para **Settings > Environment Variables**
3. Adicione todas as variáveis do `.env`:
   - `GMAIL_USER`
   - `GMAIL_PASSWORD`
   - `GMAIL_FROM_NAME`
   - `GMAIL_RECIPIENT_EMAIL`
   - `PORT`
4. Redeploy o backend

---

## 📁 Estrutura de Arquivos Necessários

```
backend/
├── .env                    ✅ Credenciais (NÃO commitar!)
├── .env.example            ✅ Exemplo (commitar)
├── server.js               ✅ Servidor Express
├── package.json            ✅ Dependências
└── vercel.json             ✅ Configuração Vercel

frontend/
├── .env.local              ✅ URL do backend local (NÃO commitar!)
├── .env.local.example      ✅ Exemplo (commitar)
├── .env.production.local   ✅ URL do backend produção (NÃO commitar!)
├── src/
│   ├── components/
│   │   └── Contact.js      ✅ Formulário de contato
│   └── setupProxy.js       ✅ Proxy para desenvolvimento
└── package.json            ✅ Dependências
```

---

## 🔐 Segurança

**IMPORTANTE:** Nunca commite arquivos `.env` com credenciais reais!

Adicione ao `.gitignore`:
```
.env
.env.local
.env.production.local
```

---

## 📞 Resumo Rápido

| Ambiente | Backend URL | Frontend URL | Como Iniciar |
|----------|-------------|--------------|--------------|
| **Local** | `http://localhost:5000` | `http://localhost:3000` | `npm start` em ambas pastas |
| **Produção** | `https://seu-backend.vercel.app` | `https://seu-frontend.vercel.app` | Deploy automático via git push |

Pronto! Seu sistema de email deve estar funcionando agora! 🎉
