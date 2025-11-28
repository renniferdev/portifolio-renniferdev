# 🚀 Guia de Conexão Backend - Portfólio Rennifer

## ✅ Status Atual

- ✅ Backend configurado com Express + Nodemailer
- ✅ Frontend configurado com React
- ✅ Variáveis de ambiente configuradas
- ✅ Rota de envio de email implementada
- ✅ CORS habilitado

## 📋 Pré-requisitos

1. **Node.js** instalado (v14+)
2. **npm** ou **yarn** instalado
3. **Gmail configurado** com senha de app (já está em `.env`)
4. **Portas disponíveis**: 5000 (backend) e 3000 (frontend)

## 🔧 Configuração Local

### 1️⃣ Backend - Iniciar Servidor

```bash
# Navegue até a pasta backend
cd backend

# Instale as dependências (se não estiver instalado)
npm install

# Inicie o servidor
npm start
```

**Esperado:**
```
✅ Servidor rodando na porta 5000
🌐 http://localhost:5000
📧 Pronto para receber emails via Gmail!
```

### 2️⃣ Frontend - Configurar Variáveis

Crie/edite o arquivo `frontend/.env.local`:

```env
# Para desenvolvimento local
REACT_APP_API_URL=http://localhost:5000
```

### 3️⃣ Frontend - Iniciar Aplicação

```bash
# Navegue até a pasta frontend
cd frontend

# Instale as dependências (se não estiver instalado)
npm install

# Inicie a aplicação
npm start
```

**Esperado:**
- Aplicação abre em `http://localhost:3000`
- Console mostra conexão com backend

## 🧪 Testando a Conexão

### Teste 1: Health Check do Backend

```bash
curl http://localhost:5000/api/health
```

**Resposta esperada:**
```json
{"status":"OK"}
```

### Teste 2: Enviar Email de Teste

```bash
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "seu_email@gmail.com",
    "projeto": "Teste de Conexão",
    "message": "Este é um teste de conexão"
  }'
```

**Resposta esperada:**
```json
{
  "success": true,
  "message": "Email enviado com sucesso!",
  "messageId": "...",
  "sentTo": "rennifer10@gmail.com"
}
```

### Teste 3: Usar o Formulário no Frontend

1. Abra `http://localhost:3000`
2. Vá até a seção "Entre em Contato"
3. Preencha o formulário:
   - Nome: Seu Nome
   - Email: seu_email@gmail.com
   - Projeto: Teste
   - Mensagem: Mensagem de teste
4. Clique em "Enviar Mensagem"
5. Verifique se recebeu o email em `rennifer10@gmail.com`

## 🌐 Configuração para Produção (Vercel)

### Backend no Vercel

1. Faça push do código para GitHub
2. Conecte o repositório no Vercel
3. Configure as variáveis de ambiente no Vercel:
   - `PORT=5000`
   - `GMAIL_USER=rennifer10@gmail.com`
   - `GMAIL_PASSWORD=klxnadylcdejsgyv`
   - `GMAIL_FROM_NAME=Portfólio Rennifer`
   - `GMAIL_RECIPIENT_EMAIL=rennifer10@gmail.com`

4. Deploy automático

### Frontend no Vercel

1. Configure a variável de ambiente:
   ```env
   REACT_APP_API_URL=https://seu-backend-vercel.vercel.app
   ```

2. Deploy automático

## 🐛 Troubleshooting

### ❌ Erro: "Backend não está respondendo"

**Solução:**
```bash
# Verifique se o backend está rodando
netstat -ano | findstr :5000

# Se a porta estiver em uso, libere-a
taskkill /PID <PID> /F

# Reinicie o backend
npm start
```

### ❌ Erro: "CORS error"

**Solução:**
- Verifique se o backend tem CORS habilitado (já está em `server.js`)
- Verifique se a URL do backend está correta em `.env.local`

### ❌ Erro: "Email não enviado"

**Solução:**
1. Verifique as credenciais do Gmail em `backend/.env`
2. Verifique se a senha de app está correta
3. Verifique se o Gmail tem "Acesso de apps menos seguros" habilitado
4. Verifique os logs do backend para mais detalhes

### ❌ Erro: "Porta 5000 já está em uso"

**Solução:**
```bash
# Libere a porta
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Ou use uma porta diferente
PORT=5001 npm start
```

## 📊 Fluxo de Funcionamento

```
Frontend (React)
    ↓
    ├─ Usuário preenche formulário
    ├─ Clica em "Enviar Mensagem"
    ↓
Backend (Express)
    ├─ Recebe POST /api/send-email
    ├─ Valida dados
    ├─ Configura Nodemailer
    ├─ Envia email via Gmail
    ↓
Gmail
    ├─ Recebe email
    ├─ Envia para rennifer10@gmail.com
    ↓
Frontend (React)
    ├─ Recebe resposta de sucesso
    ├─ Mostra mensagem de sucesso
    ├─ Limpa formulário
```

## 📝 Variáveis de Ambiente

### Backend (`backend/.env`)
```env
PORT=5000
GMAIL_USER=rennifer10@gmail.com
GMAIL_PASSWORD=klxnadylcdejsgyv
GMAIL_FROM_NAME=Portfólio Rennifer
GMAIL_RECIPIENT_EMAIL=rennifer10@gmail.com
```

### Frontend (`frontend/.env.local`)
```env
# Desenvolvimento
REACT_APP_API_URL=http://localhost:5000

# Produção
REACT_APP_API_URL=https://seu-backend-vercel.vercel.app
```

## ✨ Próximos Passos

1. ✅ Teste localmente
2. ✅ Verifique os logs do backend
3. ✅ Envie um email de teste
4. ✅ Deploy no Vercel
5. ✅ Teste em produção

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do backend (console)
2. Verifique os logs do frontend (DevTools)
3. Verifique as variáveis de ambiente
4. Verifique a conexão de internet
5. Verifique as credenciais do Gmail

---

**Última atualização:** 2024
**Status:** ✅ Pronto para uso
