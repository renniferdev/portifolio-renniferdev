# Deploy Backend na Vercel

## Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

## Passo 2: Fazer Login na Vercel

```bash
vercel login
```

## Passo 3: Deploy do Backend

```bash
cd backend
vercel --prod
```

## Passo 4: Configurar Variáveis de Ambiente

Na dashboard do Vercel:

1. Vá para o projeto do backend
2. Settings → Environment Variables
3. Adicione:
   - `GMAIL_USER` = `rennifer10@gmail.com`
   - `GMAIL_PASSWORD` = `klxnadylcdejsgyv`
   - `GMAIL_FROM_NAME` = `Portfólio Rennifer`
   - `GMAIL_RECIPIENT_EMAIL` = `rennifer10@gmail.com`

## Passo 5: Redeploy

```bash
vercel --prod
```

## Passo 6: Testar

```bash
node test-vercel.js
```

## Passo 7: Atualizar Frontend

Atualize `frontend/.env.local` com a URL do backend:

```env
REACT_APP_API_URL=https://seu-backend-vercel.vercel.app
```

## Passo 8: Deploy do Frontend

```bash
cd frontend
vercel --prod
```

Pronto! Backend rodando 24/7 na Vercel.
