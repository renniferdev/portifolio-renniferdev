# 🚀 COMECE AQUI - Portfólio Rennifer

## ⚡ Quick Start (Rápido)

### Opção 1: Iniciar Tudo Automaticamente (Recomendado)

```powershell
# Execute este comando no PowerShell
.\INICIAR_TUDO.ps1
```

Isso vai:
- ✅ Liberar as portas se necessário
- ✅ Iniciar o Backend (porta 5000)
- ✅ Iniciar o Frontend (porta 3000)
- ✅ Abrir automaticamente no navegador

### Opção 2: Iniciar Manualmente

**Terminal 1 - Backend:**
```bash
cd backend
npm install  # Apenas na primeira vez
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install  # Apenas na primeira vez
npm start
```

## 📋 Verificação Pré-requisitos

Antes de começar, execute:

```powershell
.\VERIFICAR_CONFIGURACAO.ps1
```

Isso vai verificar:
- ✅ Node.js instalado
- ✅ npm instalado
- ✅ Arquivos .env configurados
- ✅ Dependências instaladas
- ✅ Portas disponíveis

## 🧪 Testando a Conexão

### Teste 1: Verificar se o Backend está rodando

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
    "projeto": "Teste",
    "message": "Teste de conexao"
  }'
```

### Teste 3: Usar o Formulário

1. Abra http://localhost:3000
2. Vá até "Entre em Contato"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique o email em **rennifer10@gmail.com**

## 📁 Estrutura do Projeto

```
portifolio-renniferdev/
├── backend/                    # API Express + Nodemailer
│   ├── server.js              # Servidor principal
│   ├── .env                   # Variáveis de ambiente (Gmail)
│   ├── package.json           # Dependências
│   └── node_modules/          # Pacotes instalados
│
├── frontend/                   # React App
│   ├── src/
│   │   ├── components/
│   │   │   ├── Contact.js     # Formulário de contato
│   │   │   └── ...
│   │   ├── App.js
│   │   └── index.js
│   ├── .env.local             # Variáveis de ambiente (API URL)
│   ├── package.json           # Dependências
│   └── node_modules/          # Pacotes instalados
│
└── COMECE_AQUI.md            # Este arquivo
```

## 🔧 Configuração de Variáveis de Ambiente

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
# Desenvolvimento local
REACT_APP_API_URL=http://localhost:5000

# Produção (Vercel)
REACT_APP_API_URL=https://seu-backend-vercel.vercel.app
```

## 🌐 URLs Importantes

| Serviço | URL | Status |
|---------|-----|--------|
| Frontend | http://localhost:3000 | 🟢 Local |
| Backend | http://localhost:5000 | 🟢 Local |
| Backend (Produção) | https://backend-rho-weld-58.vercel.app | 🟢 Vercel |
| Email Destino | rennifer10@gmail.com | 📧 Gmail |

## 🐛 Troubleshooting

### ❌ "Porta 5000 já está em uso"

```powershell
# Libere a porta
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### ❌ "Backend não está respondendo"

1. Verifique se o backend está rodando
2. Verifique os logs do backend
3. Verifique se a porta 5000 está disponível
4. Verifique as variáveis de ambiente

### ❌ "Email não foi enviado"

1. Verifique as credenciais do Gmail em `backend/.env`
2. Verifique se a senha de app está correta
3. Verifique os logs do backend para erros
4. Verifique se o Gmail tem "Acesso de apps menos seguros" habilitado

### ❌ "CORS error"

1. Verifique se o backend tem CORS habilitado (já está)
2. Verifique se a URL do backend está correta em `frontend/.env.local`
3. Verifique se o backend está rodando

### ❌ "Dependências não instaladas"

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

## 📊 Fluxo de Funcionamento

```
Usuário preenche formulário
        ↓
Frontend envia POST para /api/send-email
        ↓
Backend recebe e valida dados
        ↓
Backend envia email via Gmail
        ↓
Gmail envia para rennifer10@gmail.com
        ↓
Frontend mostra mensagem de sucesso
```

## 🚀 Deploy em Produção

### Backend no Vercel

1. Faça push para GitHub
2. Conecte no Vercel
3. Configure variáveis de ambiente
4. Deploy automático

### Frontend no Vercel

1. Configure `REACT_APP_API_URL` com URL do backend
2. Deploy automático

## 📝 Logs Importantes

### Backend
- Verifique o console do terminal onde o backend está rodando
- Procure por mensagens de erro ou sucesso

### Frontend
- Abra DevTools (F12)
- Vá até Console
- Procure por mensagens de erro ou sucesso

## ✨ Próximos Passos

1. ✅ Execute `.\VERIFICAR_CONFIGURACAO.ps1`
2. ✅ Execute `.\INICIAR_TUDO.ps1`
3. ✅ Abra http://localhost:3000
4. ✅ Teste o formulário de contato
5. ✅ Verifique o email recebido
6. ✅ Deploy em produção

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs do backend
2. Verifique o console do navegador (F12)
3. Verifique as variáveis de ambiente
4. Verifique a conexão de internet
5. Verifique as credenciais do Gmail

## 📚 Documentação Adicional

- `GUIA_CONEXAO_BACKEND.md` - Guia detalhado de conexão
- `README_EMAIL.md` - Configuração de email
- `TROUBLESHOOTING.md` - Solução de problemas

---

**Última atualização:** 2024
**Status:** ✅ Pronto para uso
**Versão:** 1.0.0
