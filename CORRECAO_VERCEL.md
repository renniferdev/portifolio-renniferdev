# ✅ Correção do Backend na Vercel

## Problema Identificado
O erro **"Cannot GET /"** ocorria porque:
1. Faltava uma rota raiz (`/`) no servidor
2. A configuração do `vercel.json` estava muito complexa e causava conflitos de rotas

## Soluções Aplicadas

### 1. ✅ Adicionada Rota Raiz no `server.js`
```javascript
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Backend do Portfólio Rennifer',
    status: 'online',
    version: '1.0.0'
  });
});
```

### 2. ✅ Simplificado o `vercel.json`
Removidas as configurações complexas e mantidas apenas as essenciais:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

## Próximos Passos

### 1. Configurar Variáveis de Ambiente na Vercel
Acesse o dashboard da Vercel e vá para **Settings > Environment Variables** do seu projeto e adicione:

```
GMAIL_USER=seu_email@gmail.com
GMAIL_PASSWORD=sua_senha_de_app_gmail
GMAIL_FROM_NAME=Portfólio Rennifer
GMAIL_RECIPIENT_EMAIL=rennifer10@gmail.com
PORT=5000
```

**⚠️ IMPORTANTE:** Use uma **Senha de App do Gmail**, não sua senha normal!
- Acesse: https://myaccount.google.com/apppasswords
- Gere uma senha de 16 caracteres
- Use essa senha no `GMAIL_PASSWORD`

### 2. Fazer Deploy
```bash
git add .
git commit -m "Fix: Corrigir rotas e configuração Vercel"
git push
```

A Vercel fará o deploy automaticamente.

### 3. Testar o Backend
Após o deploy, teste acessando:
- **Raiz:** `https://seu-backend.vercel.app/`
- **Health Check:** `https://seu-backend.vercel.app/api/health`

Você deve receber respostas JSON confirmando que o servidor está online.

## Checklist de Verificação

- [ ] Variáveis de ambiente configuradas na Vercel
- [ ] Senha de App do Gmail gerada e configurada
- [ ] Deploy realizado com sucesso
- [ ] Rota raiz (`/`) respondendo com JSON
- [ ] Rota `/api/health` respondendo com `{ status: 'OK' }`
- [ ] Rota `/api/send-email` pronta para receber POST

## Troubleshooting

Se ainda tiver problemas:

1. **Verifique os Logs da Vercel:**
   - Vá para **Deployments > Logs** no dashboard

2. **Teste Localmente:**
   ```bash
   cd backend
   npm install
   npm start
   ```
   Acesse `http://localhost:5000/`

3. **Verifique as Variáveis de Ambiente:**
   - Certifique-se de que todas estão configuradas na Vercel
   - Redeploy após adicionar/alterar variáveis

## Resumo das Mudanças

| Arquivo | Mudança |
|---------|---------|
| `server.js` | Adicionada rota raiz `GET /` |
| `vercel.json` | Simplificada configuração de rotas |

Pronto! Seu backend deve estar funcionando agora! 🚀
