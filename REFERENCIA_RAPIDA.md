# 📋 Referência Rápida

## ⚡ Comandos Essenciais

### Iniciar

```bash
# Automático
INICIAR_TUDO_AGORA.bat

# Manual - Backend
cd backend && npm start

# Manual - Frontend
cd frontend && npm start
```

### Testar

```bash
# Health Check
curl http://localhost:5000/api/health

# Enviar Email
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"seu_email@gmail.com","projeto":"Teste","message":"Teste"}'

# Testar Tudo
powershell -ExecutionPolicy Bypass -File TESTAR_TUDO.ps1
```

### Liberar Portas

```bash
# Porta 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Porta 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Instalar Dependências

```bash
# Backend
cd backend && npm install

# Frontend
cd frontend && npm install
```

---

## 📍 URLs

| URL | Descrição |
|-----|-----------|
| http://localhost:3000 | Frontend |
| http://localhost:5000 | Backend |
| http://localhost:5000/api/health | Health Check |
| http://localhost:5000/api/send-email | Enviar Email (POST) |

---

## 📁 Arquivos Importantes

| Arquivo | Descrição |
|---------|-----------|
| `backend/server.js` | Servidor Express |
| `backend/.env` | Variáveis de ambiente |
| `frontend/src/components/Contact.js` | Formulário |
| `frontend/.env.local` | Variáveis de ambiente |
| `frontend/src/setupProxy.js` | Proxy |

---

## 🔧 Variáveis de Ambiente

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
REACT_APP_API_URL=https://backend-rho-weld-58.vercel.app
```

---

## 🐛 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Porta em uso | `taskkill /PID <PID> /F` |
| Backend não responde | `curl http://localhost:5000/api/health` |
| Email não envia | Verifique `backend/.env` |
| CORS error | Verifique URL em `frontend/.env.local` |
| npm não encontrado | Instale Node.js |
| Dependências faltando | `npm install` |

---

## 📚 Documentação

| Documento | Tempo | Descrição |
|-----------|-------|-----------|
| LEIA_PRIMEIRO.md | 5 min | Guia rápido |
| COMECE_AQUI_AGORA.md | 5 min | Iniciar em 3 passos |
| RESUMO_FINAL_CONEXAO.md | 10 min | Resumo completo |
| TROUBLESHOOTING_DETALHADO.md | 20 min | Resolver problemas |
| INICIAR_PROJETO_COMPLETO.md | 15 min | Guia completo |
| CONFIGURAR_AMBIENTE.md | 10 min | Dev vs Produção |

---

## 🎯 Fluxo Rápido

```
1. Execute: INICIAR_TUDO_AGORA.bat
2. Abra: http://localhost:3000
3. Teste: Formulário de contato
4. Verifique: Email em rennifer10@gmail.com
```

---

## 📊 Status

- ✅ Backend: Pronto
- ✅ Frontend: Pronto
- ✅ Formulário: Pronto
- ✅ Email: Pronto
- ✅ Documentação: Completa

---

## 🚀 Próximos Passos

1. Iniciar projeto
2. Testar formulário
3. Customizar conforme necessário
4. Deploy em produção

---

**Última atualização:** 2024
**Status:** ✅ Pronto
