# 🚀 Como Usar o Portfólio com Sistema de Email

## ⚠️ IMPORTANTE: O Backend Precisa Estar Rodando!

Para que o formulário de contato funcione, você **DEVE** manter o backend rodando em uma janela de terminal separada.

---

## 📋 Passo a Passo

### ⚡ FORMA RÁPIDA (Recomendado)

**Opção 1: Duplo clique no arquivo**
1. Abra a pasta do projeto: `c:\Users\Rennifer\Desktop\RENNIFER\PROJETOS\portifolio-renniferdev`
2. Duplo clique em `INICIAR_BACKEND.bat`
3. Uma janela de terminal abrirá automaticamente com o backend rodando
4. Você verá: `✅ Servidor rodando na porta 5000`

**Opção 2: Terminal Manual**
```bash
cd c:\Users\Rennifer\Desktop\RENNIFER\PROJETOS\portifolio-renniferdev
INICIAR_BACKEND.bat
```

### 🔧 FORMA MANUAL

**Terminal 1 - Backend (DEVE estar sempre rodando)**
```bash
cd c:\Users\Rennifer\Desktop\RENNIFER\PROJETOS\portifolio-renniferdev\backend
npm start
```

Você deve ver:
```
✅ Servidor rodando na porta 5000
📧 Email configurado: rennifer10@gmail.com
```

**Terminal 2 - Frontend**
```bash
cd c:\Users\Rennifer\Desktop\RENNIFER\PROJETOS\portifolio-renniferdev\frontend
npm start
```

Você deve ver:
```
Compiled successfully!
On Your Network: http://192.168.x.x:3000
```

---

## 🧪 Testando o Formulário

1. Acesse `http://localhost:3000` no navegador
2. Vá para a seção "Entre em Contato"
3. Preencha o formulário:
   - **Nome**: Seu nome
   - **Email**: Seu email
   - **Projeto**: Nome do projeto
   - **Mensagem**: Sua mensagem
4. Clique em "Enviar Mensagem"
5. Verifique se recebeu o email em `rennifer10@gmail.com`

---

## 🔍 Verificando se Está Funcionando

### ✅ Tudo OK
- Terminal do backend mostra: `✅ Servidor rodando na porta 5000`
- Ao enviar o formulário, aparece: "Email enviado com sucesso!"
- Email chega em `rennifer10@gmail.com`

### ❌ Algo Errado

#### Erro: "Backend não está respondendo"
- Verifique se o terminal do backend está rodando
- Verifique se mostra "Servidor rodando na porta 5000"
- Se não, execute `npm start` no terminal do backend

#### Erro: "A porta 5000 já está em uso"
Execute o script de limpeza:
```bash
LIMPAR_PORTA_5000.bat
```

Ou manualmente:
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

#### Email não chega
- Verifique a pasta de Spam do Gmail
- Verifique se a senha de app está correta no `backend/.env`
- Verifique o console do backend para mensagens de erro

---

## 📧 Configuração do Email

### Arquivo: `backend/.env`
```
PORT=5000
GMAIL_USER=rennifer10@gmail.com
GMAIL_PASSWORD=kixnadylcdejsgyv
GMAIL_FROM_NAME=Portfólio Rennifer
GMAIL_RECIPIENT_EMAIL=rennifer10@gmail.com
```

### Como Funciona
1. Visitante preenche o formulário no site
2. Frontend envia dados para `http://localhost:5000/api/send-email`
3. Backend recebe e valida os dados
4. Nodemailer envia email via Gmail
5. Email chega em `rennifer10@gmail.com` ✅

---

## 🛠️ Troubleshooting

### Porta 5000 já está em uso?
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Dependências não instaladas?
```bash
cd backend
npm install

cd ../frontend
npm install
```

### Senha de app expirou?
1. Acesse: https://myaccount.google.com/apppasswords
2. Selecione "Mail" e "Windows Computer"
3. Gere uma nova senha
4. Atualize o arquivo `backend/.env`

---

## 📁 Arquivos Úteis

| Arquivo | Descrição |
|---------|-----------|
| `INICIAR_BACKEND.bat` | Inicia o backend automaticamente |
| `LIMPAR_PORTA_5000.bat` | Limpa a porta 5000 e inicia o backend |
| `backend/.env` | Configurações de email (não commitar!) |
| `backend/server.js` | Servidor Node.js com API de email |
| `frontend/src/components/Contact.js` | Componente do formulário |

---

## 📝 Resumo

| Componente | Porta | Status |
|-----------|-------|--------|
| Frontend (React) | 3000 | Automático |
| Backend (Node.js) | 5000 | **MANUAL - USE INICIAR_BACKEND.bat** |
| Gmail | - | Configurado ✅ |

**Lembre-se: Sempre mantenha o backend rodando em um terminal separado!**

---

## ✨ Próximos Passos

1. Execute `INICIAR_BACKEND.bat`
2. Abra outro terminal e execute `npm start` na pasta `frontend`
3. Acesse `http://localhost:3000`
4. Teste o formulário de contato
5. Verifique se o email chegou em `rennifer10@gmail.com`

Pronto! 🎉
