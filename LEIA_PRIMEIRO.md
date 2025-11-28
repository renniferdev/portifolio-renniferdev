# 🚀 LEIA PRIMEIRO - Guia Rápido

## ⚡ Iniciar Tudo em 1 Clique

Clique duas vezes em um destes arquivos:

### Opção 1: Iniciar Backend + Frontend Juntos
```
INICIAR_TUDO_AGORA.bat
```
Isso abrirá 2 janelas de terminal automaticamente.

### Opção 2: Iniciar Apenas o Backend
```
INICIAR_BACKEND_AGORA.bat
```

---

## 🎯 O que Fazer Agora

### 1️⃣ Iniciar os Servidores

Execute `INICIAR_TUDO_AGORA.bat` e aguarde:
- Backend: `http://localhost:5000` ✅
- Frontend: `http://localhost:3000` ✅

### 2️⃣ Testar o Formulário

1. Abra `http://localhost:3000` no navegador
2. Vá para "Entre em Contato"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique seu email `rennifer10@gmail.com`

### 3️⃣ Deploy na Vercel

Quando tudo estiver funcionando localmente:

```bash
git add .
git commit -m "Fix: Email funcionando"
git push
```

---

## 📋 Arquivos Importantes

| Arquivo | Descrição |
|---------|-----------|
| `INICIAR_TUDO_AGORA.bat` | ⭐ Inicia backend + frontend |
| `INICIAR_BACKEND_AGORA.bat` | Inicia apenas backend |
| `SOLUCAO_EMAIL_VERCEL.md` | Guia completo de troubleshooting |
| `backend/.env` | Credenciais Gmail (não commitar!) |
| `frontend/.env.local` | URL do backend local |

---

## 🔧 Configuração Rápida

### Backend (.env)
```
PORT=5000
GMAIL_USER=rennifer10@gmail.com
GMAIL_PASSWORD=klxnadylcdejsgyv
GMAIL_FROM_NAME=Portfólio Rennifer
GMAIL_RECIPIENT_EMAIL=rennifer10@gmail.com
```

### Frontend (.env.local)
```
REACT_APP_API_URL=http://localhost:5000
```

---

## ❌ Se Não Funcionar

1. **Erro "Failed to fetch"?**
   - Verifique se o backend está rodando
   - Abra `http://localhost:5000` no navegador

2. **Email não chega?**
   - Verifique a pasta de SPAM
   - Confirme as credenciais Gmail

3. **Porta 5000 já em uso?**
   ```bash
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   ```

---

## 📞 Próximos Passos

✅ Tudo funcionando localmente?
→ Leia `SOLUCAO_EMAIL_VERCEL.md` para configurar produção

❌ Ainda com problemas?
→ Verifique os logs no terminal

---

**Boa sorte! 🎉**
