# 🔄 GITHUB E VERCEL - DEPLOY AUTOMÁTICO

## 🎯 OBJETIVO

Fazer com que:
1. Você faça push no GitHub
2. Vercel faz deploy automaticamente
3. Backend roda 24/7 na Vercel

---

## 📋 PASSO 1: PREPARAR GITHUB

### 1.1 Verifique se o repositório existe

```bash
cd c:\Users\Rennifer\Desktop\RENNIFER\PROJETOS\portifolio-renniferdev
git status
```

Se retornar um erro, o repositório não existe. Crie um:

```bash
git init
git add .
git commit -m "Initial commit"
```

### 1.2 Adicione o repositório remoto

Se ainda não tiver:

```bash
git remote add origin https://github.com/seu-usuario/portifolio-renniferdev.git
git branch -M main
git push -u origin main
```

### 1.3 Verifique o repositório

```bash
git remote -v
```

Deve mostrar:
```
origin  https://github.com/seu-usuario/portifolio-renniferdev.git (fetch)
origin  https://github.com/seu-usuario/portifolio-renniferdev.git (push)
```

---

## 📋 PASSO 2: CONECTAR VERCEL AO GITHUB

### 2.1 Acesse a Vercel

1. Vá para https://vercel.com/dashboard
2. Clique em **Add New** → **Project**

### 2.2 Selecione o repositório

1. Clique em **Import Git Repository**
2. Selecione seu repositório `portifolio-renniferdev`
3. Clique em **Import**

### 2.3 Configure o projeto

1. **Project Name:** `portifolio-renniferdev-backend`
2. **Framework Preset:** Other
3. **Root Directory:** `backend`
4. **Build Command:** (deixe em branco)
5. **Output Directory:** (deixe em branco)
6. **Environment Variables:** Adicione:
   - `GMAIL_USER` = `rennifer10@gmail.com`
   - `GMAIL_PASSWORD` = `klxmadylcdesjgyv`
   - `GMAIL_FROM_NAME` = `Portfolio Rennifer`
   - `GMAIL_RECIPIENT_EMAIL` = `rennifer10@gmail.com`

### 2.4 Clique em Deploy

Aguarde o deploy terminar. Você verá:
```
✅ Deployment successful
```

---

## 📋 PASSO 3: CONFIGURAR FRONTEND

### 3.1 Crie um novo projeto para o frontend

1. Vá para https://vercel.com/dashboard
2. Clique em **Add New** → **Project**
3. Selecione seu repositório `portifolio-renniferdev`
4. Clique em **Import**

### 3.2 Configure o projeto

1. **Project Name:** `portifolio-renniferdev-frontend`
2. **Framework Preset:** Create React App
3. **Root Directory:** `frontend`
4. **Build Command:** `npm run build`
5. **Output Directory:** `build`
6. **Environment Variables:** Adicione:
   - `REACT_APP_API_URL` = `https://seu-backend-vercel.vercel.app`

### 3.3 Clique em Deploy

Aguarde o deploy terminar.

---

## 📋 PASSO 4: FAZER PUSH NO GITHUB

### 4.1 Faça alterações no código

```bash
# Exemplo: altere algo no backend
echo "# Alteração de teste" >> backend/README.md
```

### 4.2 Faça commit

```bash
git add .
git commit -m "Alteração de teste"
```

### 4.3 Faça push

```bash
git push origin main
```

### 4.4 Verifique o deploy automático

1. Vá para https://vercel.com/dashboard
2. Selecione seu projeto backend
3. Vá para **Deployments**
4. Você deve ver um novo deployment em progresso
5. Aguarde terminar

---

## 🔄 FLUXO AUTOMÁTICO

```
┌─────────────────────────────────────────────────────────────┐
│                    VOCÊ FAZ PUSH                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  git push origin main                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

                            ↓

┌─────────────────────────────────────────────────────────────┐
│                    GITHUB RECEBE                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Código atualizado no GitHub                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

                            ↓

┌────────────���────────────────────────────────────────────────┐
│                    VERCEL DETECTA                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Webhook do GitHub notifica Vercel                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘

                            ↓

┌─────────────────────────────────────────────────────────────┐
│                    VERCEL FAZ DEPLOY                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Clona o repositório                                     │
│  2. Instala dependências                                    │
│  3. Faz build (se necessário)                               │
│  4. Deploy na nuvem                                         │
│  5. Seu backend está rodando 24/7                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

                            ↓

┌─────────────────────────────────────────────────────────────┐
│                    PRONTO!                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Backend rodando em: https://seu-backend-vercel.vercel.app  │
│  Frontend rodando em: https://seu-frontend-vercel.vercel.app│
│  Emails sendo enviados com sucesso                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧪 TESTE O FLUXO

### 1. Faça uma alteração local

```bash
# Exemplo: altere o arquivo backend/server.js
# Adicione um console.log ou algo similar
```

### 2. Faça commit e push

```bash
git add .
git commit -m "Teste de deploy automático"
git push origin main
```

### 3. Verifique o deploy

1. Vá para https://vercel.com/dashboard
2. Selecione seu projeto backend
3. Vá para **Deployments**
4. Você deve ver um novo deployment
5. Aguarde terminar (deve ficar verde)

### 4. Teste o backend

```bash
curl https://seu-backend-vercel.vercel.app/api/health
```

Deve retornar:
```json
{"status":"OK"}
```

---

## 📊 CHECKLIST

- [ ] Repositório GitHub criado
- [ ] Código fez push para GitHub
- [ ] Vercel conectado ao GitHub
- [ ] Backend fez deploy na Vercel
- [ ] Frontend fez deploy na Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Backend respondendo em produção
- [ ] Frontend consegue se conectar ao backend
- [ ] Emails sendo enviados em produção

---

## 🆘 PROBLEMAS?

### Deploy não está acontecendo

1. Verifique se o push foi bem-sucedido:
   ```bash
   git log --oneline -5
   ```

2. Verifique se o repositório está conectado à Vercel:
   - Vercel Dashboard → Project Settings → Git

3. Verifique os logs do deploy:
   - Vercel Dashboard → Deployments → Clique no deployment

### Backend não está respondendo

1. Verifique os logs:
   - Vercel Dashboard → Deployments → Logs

2. Verifique as variáveis de ambiente:
   - Vercel Dashboard → Settings → Environment Variables

3. Teste a URL:
   ```bash
   curl https://seu-backend-vercel.vercel.app/api/health
   ```

### Frontend não consegue se conectar

1. Verifique a variável `REACT_APP_API_URL`:
   - Vercel Dashboard → Settings → Environment Variables

2. Verifique o DevTools (F12):
   - Console → Procure por "🔗 API URL configurada:"

---

## 📞 RESUMO RÁPIDO

| Ação | Comando |
|------|---------|
| Fazer push | `git push origin main` |
| Ver status | `git status` |
| Ver commits | `git log --oneline -5` |
| Dashboard Vercel | https://vercel.com/dashboard |
| Logs Vercel | Vercel Dashboard → Deployments → Logs |

---

## 🎉 PRONTO!

Agora você tem:
- ✅ Deploy automático via GitHub
- ✅ Backend rodando 24/7 na Vercel
- ✅ Frontend rodando 24/7 na Vercel
- ✅ Emails sendo enviados em produção

**Bom desenvolvimento! 🚀**
