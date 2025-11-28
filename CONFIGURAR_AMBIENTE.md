# 🔧 Configurar Ambiente - Desenvolvimento vs Produção

## 🎯 Escolha seu Ambiente

### 1️⃣ DESENVOLVIMENTO LOCAL

Para testar localmente com backend rodando na porta 5000:

**Arquivo: `frontend/.env.local`**
```env
REACT_APP_API_URL=http://localhost:5000
```

**Ou use o arquivo automático:**
```env
# frontend/.env.development
REACT_APP_API_URL=http://localhost:5000
```

**Como usar:**
1. Abra `frontend/.env.local`
2. Altere para:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```
3. Salve o arquivo
4. Reinicie o frontend: `npm start`

---

### 2️⃣ PRODUÇÃO (Vercel)

Para usar o backend em produção no Vercel:

**Arquivo: `frontend/.env.local`**
```env
REACT_APP_API_URL=https://backend-rho-weld-58.vercel.app
```

**Como usar:**
1. Abra `frontend/.env.local`
2. Altere para:
   ```env
   REACT_APP_API_URL=https://backend-rho-weld-58.vercel.app
   ```
3. Salve o arquivo
4. Reinicie o frontend: `npm start`

---

## 📋 Checklist de Configuração

### Para Desenvolvimento Local

- [ ] Backend rodando na porta 5000
- [ ] Frontend configurado com `REACT_APP_API_URL=http://localhost:5000`
- [ ] Arquivo `frontend/.env.local` atualizado
- [ ] Reiniciar frontend após alterar `.env.local`
- [ ] Testar formulário de contato

### Para Produção

- [ ] Backend deployado no Vercel
- [ ] Frontend configurado com URL do backend em produção
- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] Testar formulário de contato em produção

---

## 🔄 Como Trocar de Ambiente

### De Desenvolvimento para Produção

1. Abra `frontend/.env.local`
2. Altere:
   ```env
   # De:
   REACT_APP_API_URL=http://localhost:5000
   
   # Para:
   REACT_APP_API_URL=https://backend-rho-weld-58.vercel.app
   ```
3. Salve o arquivo
4. Reinicie o frontend: `npm start`

### De Produção para Desenvolvimento

1. Abra `frontend/.env.local`
2. Altere:
   ```env
   # De:
   REACT_APP_API_URL=https://backend-rho-weld-58.vercel.app
   
   # Para:
   REACT_APP_API_URL=http://localhost:5000
   ```
3. Salve o arquivo
4. Reinicie o frontend: `npm start`

---

## 🧪 Verificar Qual Ambiente Está Ativo

### No Console do Navegador (DevTools)

1. Abra o navegador em http://localhost:3000
2. Pressione `F12` para abrir DevTools
3. Vá até a aba "Console"
4. Procure por mensagens como:
   - `📧 Iniciando envio de email...`
   - `📍 URL da resposta: http://localhost:5000/api/send-email` (desenvolvimento)
   - `📍 URL da resposta: https://backend-rho-weld-58.vercel.app/api/send-email` (produção)

### No Console do Backend

1. Verifique os logs do terminal do backend
2. Procure por mensagens como:
   - `📧 ========== REQUISIÇÃO RECEBIDA ==========`
   - `📝 Dados recebidos: {...}`

---

## 📝 Variáveis de Ambiente

### Backend (`backend/.env`)
```env
PORT=5000
GMAIL_USER=rennifer10@gmail.com
GMAIL_PASSWORD=klxnadylcdejsgyv
GMAIL_FROM_NAME=Portfólio Rennifer
GMAIL_RECIPIENT_EMAIL=rennifer10@gmail.com
```

### Frontend - Desenvolvimento (`frontend/.env.development`)
```env
REACT_APP_API_URL=http://localhost:5000
```

### Frontend - Produção (`frontend/.env.local`)
```env
REACT_APP_API_URL=https://backend-rho-weld-58.vercel.app
```

---

## ⚠️ Importante

- **Não commite** arquivos `.env` no Git
- **Sempre** configure as variáveis de ambiente no Vercel
- **Teste** em ambos os ambientes antes de fazer deploy
- **Verifique** os logs para diagnosticar problemas

---

## 🚀 Próximos Passos

1. ✅ Escolha seu ambiente
2. ✅ Configure o arquivo `.env.local`
3. ✅ Reinicie o frontend
4. ✅ Teste o formulário de contato
5. ✅ Verifique os logs

---

**Última atualização:** 2024
**Status:** ✅ Pronto para uso
