# 🌐 Configurar Vercel para Produção

## 📋 Pré-requisitos

- ✅ Backend funcionando localmente
- ✅ Frontend funcionando localmente
- ✅ Ambos deployados na Vercel
- ✅ Credenciais Gmail configuradas

---

## 🔧 PASSO 1: Configurar Backend na Vercel

### 1.1 Adicionar Variáveis de Ambiente

1. Acesse: https://vercel.com/dashboard
2. Clique no seu projeto **backend**
3. Vá para **Settings > Environment Variables**
4. Adicione estas variáveis:

```
GMAIL_USER = rennifer10@gmail.com
GMAIL_PASSWORD = klxnadylcdejsgyv
GMAIL_FROM_NAME = Portfólio Rennifer
GMAIL_RECIPIENT_EMAIL = rennifer10@gmail.com
PORT = 5000
```

### 1.2 Redeploy do Backend

Após adicionar as variáveis:

```bash
cd backend
git add .
git commit -m "Add environment variables"
git push
```

Aguarde o deploy terminar. Você verá "Ready" no dashboard.

### 1.3 Obter URL do Backend

Copie a URL do seu backend. Exemplo:
```
https://backend-txswa305w-rennifer-teixeiras-projects.vercel.app
```

---

## 🔧 PASSO 2: Configurar Frontend na Vercel

### 2.1 Criar Arquivo de Configuração

Na pasta `frontend`, crie um arquivo `.env.production.local`:

```bash
REACT_APP_API_URL=https://seu-backend-vercel.vercel.app
```

**Substitua** `seu-backend-vercel.vercel.app` pela URL real do seu backend.

### 2.2 Adicionar ao Git

```bash
cd frontend
git add .env.production.local
git commit -m "Configure production backend URL"
git push
```

### 2.3 Configurar na Vercel (Opcional)

Se preferir configurar via dashboard:

1. Acesse o projeto **frontend** na Vercel
2. Vá para **Settings > Environment Variables**
3. Adicione:
```
REACT_APP_API_URL = https://seu-backend-vercel.vercel.app
```

---

## ✅ PASSO 3: Testar em Produção

### 3.1 Aguardar Deploy

Verifique se ambos os projetos estão com status "Ready" no dashboard.

### 3.2 Testar o Formulário

1. Acesse seu frontend em produção
2. Vá para "Entre em Contato"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique seu email

### 3.3 Verificar Logs

Se houver erro:

1. Acesse o projeto **backend** na Vercel
2. Vá para **Deployments > Logs**
3. Procure por mensagens de erro

---

## 🐛 Troubleshooting

### Erro: "Failed to fetch"

**Causa:** URL do backend incorreta ou não configurada

**Solução:**
1. Verifique a URL do backend na Vercel
2. Atualize `.env.production.local` com a URL correta
3. Redeploy o frontend

### Erro: "Cannot POST /api/send-email"

**Causa:** Variáveis de ambiente não configuradas no backend

**Solução:**
1. Verifique se todas as variáveis estão em **Settings > Environment Variables**
2. Redeploy o backend
3. Aguarde o deploy terminar

### Email não chega

**Causa:** Credenciais Gmail incorretas

**Solução:**
1. Verifique as credenciais em **Settings > Environment Variables**
2. Gere uma nova Senha de App em: https://myaccount.google.com/apppasswords
3. Atualize `GMAIL_PASSWORD`
4. Redeploy

### Erro: "net::ERR_CONNECT..."

**Causa:** Backend offline ou URL incorreta

**Solução:**
1. Verifique se o backend está "Ready" no dashboard
2. Teste a URL do backend diretamente no navegador
3. Verifique os logs do backend

---

## 📊 Checklist Final

- [ ] Backend deployado na Vercel
- [ ] Variáveis de ambiente configuradas no backend
- [ ] Frontend deployado na Vercel
- [ ] `.env.production.local` criado com URL correta
- [ ] Frontend redeploy realizado
- [ ] Teste do formulário bem-sucedido
- [ ] Email recebido em `rennifer10@gmail.com`

---

## 🔗 URLs Importantes

| Serviço | URL |
|---------|-----|
| Dashboard Vercel | https://vercel.com/dashboard |
| Seu Backend | https://seu-backend-vercel.vercel.app |
| Seu Frontend | https://seu-frontend-vercel.vercel.app |
| Gmail App Passwords | https://myaccount.google.com/apppasswords |

---

## 💡 Dicas

1. **Sempre teste localmente primeiro** antes de fazer deploy
2. **Guarde a URL do backend** para configurar o frontend
3. **Use Senhas de App do Gmail**, não a senha normal
4. **Redeploy após alterar variáveis** de ambiente
5. **Verifique os logs** se algo não funcionar

---

**Pronto! Seu sistema está em produção! 🚀**
