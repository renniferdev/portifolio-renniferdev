# 🚀 Guia Completo - Backend Conectado ao Frontend

## 📌 Resumo da Configuração

Seu backend está **100% configurado** e pronto para enviar emails. Aqui está o que foi feito:

### ✅ O que está configurado:

1. **Frontend** (`Contact.js`)
   - Formulário com campos: Nome, Email, Projeto, Mensagem
   - Envia dados para: `https://backend-rho-weld-58.vercel.app/api/send-email`
   - Exibe mensagens de sucesso/erro

2. **Backend** (Vercel)
   - URL: `https://backend-rho-weld-58.vercel.app`
   - Endpoint: `/api/send-email` (POST)
   - Variáveis de ambiente configuradas:
     - `gmail_user`: rennifer10@gmail.com
     - `gmail_password`: klxnadylcdejsgyv
     - `gmail_from_name`: Portfolio Rennifer
     - `gmail_recipient_email`: rennifer10@gmail.com

3. **Frontend .env.local**
   ```
   REACT_APP_API_URL=https://backend-rho-weld-58.vercel.app
   ```

---

## 🧪 Como Testar

### Teste 1: Verificar se o Backend está Online

**Via Browser:**
```
https://backend-rho-weld-58.vercel.app/
```

Resposta esperada:
```json
{
  "message": "Backend do Portfólio Rennifer",
  "status": "online",
  "version": "1.0.0"
}
```

**Via Terminal (PowerShell):**
```powershell
Invoke-WebRequest -Uri "https://backend-rho-weld-58.vercel.app/" -Method GET
```

---

### Teste 2: Testar Health Check

**Via Browser:**
```
https://backend-rho-weld-58.vercel.app/api/health
```

Resposta esperada:
```json
{
  "status": "OK",
  "timestamp": "2024-01-XX..."
}
```

---

### Teste 3: Enviar Email de Teste (PowerShell)

```powershell
$body = @{
    name = "Seu Nome"
    email = "seu_email@gmail.com"
    projeto = "Projeto Teste"
    message = "Esta é uma mensagem de teste"
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri "https://backend-rho-weld-58.vercel.app/api/send-email" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body

$response.Content | ConvertFrom-Json | ConvertTo-Json
```

Resposta esperada:
```json
{
  "success": true,
  "message": "Email enviado com sucesso!",
  "messageId": "...",
  "sentTo": "rennifer10@gmail.com"
}
```

---

### Teste 4: Testar via Formulário (Recomendado)

1. Abra seu portfólio no navegador
2. Vá até a seção "Entre em Contato"
3. Preencha o formulário:
   - **Nome**: Seu Nome
   - **Email**: seu_email@gmail.com
   - **Projeto**: Nome do Projeto
   - **Mensagem**: Sua mensagem
4. Clique em "Enviar Mensagem"
5. Você deve ver: "Email enviado com sucesso!"
6. Verifique seu email em **rennifer10@gmail.com**

---

## 📧 Estrutura do Email Recebido

Quando alguém preenche o formulário, você recebe um email assim:

```
De: Portfolio Rennifer <rennifer10@gmail.com>
Para: rennifer10@gmail.com
Assunto: Novo contato: [Nome do Projeto]
Reply-To: [Email da pessoa]

---

Novo Contato do Portfólio

Nome: [Nome da pessoa]
Email: [Email da pessoa]
Projeto: [Nome do projeto]
Mensagem:
[Mensagem completa]
```

---

## 🔧 Troubleshooting

### Problema: "Erro ao enviar email"

**Solução 1:** Verifique se o backend está online
```powershell
Invoke-WebRequest -Uri "https://backend-rho-weld-58.vercel.app/" -Method GET
```

**Solução 2:** Verifique as variáveis de ambiente na Vercel
- Acesse: https://vercel.com/dashboard
- Projeto: backend-portfolio
- Settings → Environment Variables
- Confirme que todas as variáveis estão preenchidas

**Solução 3:** Verifique o console do navegador (F12)
- Abra DevTools (F12)
- Vá para a aba "Console"
- Procure por mensagens de erro
- Copie e compartilhe os erros

---

### Problema: Email não chega

**Solução 1:** Verifique a pasta de SPAM
- O email pode estar marcado como spam

**Solução 2:** Verifique a senha de app do Gmail
- A senha deve ser uma "Senha de App" (16 caracteres)
- Não use a senha normal do Gmail

**Solução 3:** Habilite "Acesso de apps menos seguros"
- Acesse: https://myaccount.google.com/security
- Procure por "Acesso de apps menos seguros"
- Ative a opção

---

### Problema: CORS Error

**Solução:** O backend já tem CORS configurado para aceitar requisições de qualquer origem. Se ainda assim receber erro:

1. Verifique se a URL do backend está correta em `.env.local`
2. Reinicie o servidor frontend
3. Limpe o cache do navegador (Ctrl+Shift+Delete)

---

### Problema: Timeout na Requisição

**Solução:** O servidor Vercel pode estar iniciando. Aguarde alguns segundos e tente novamente.

---

## 📊 Fluxo Completo

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Usuário preenche o formulário no portfólio              │
│    (Nome, Email, Projeto, Mensagem)                        │
└─────��──────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Frontend envia POST para:                               │
│    https://backend-rho-weld-58.vercel.app/api/send-email   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Backend recebe a requisição                             │
│    - Valida os dados                                        │
│    - Verifica variáveis de ambiente                         │
└────────────────────┬────────────────────────���───────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Backend envia email via Gmail SMTP                      │
│    - De: Portfolio Rennifer <rennifer10@gmail.com>         │
│    - Para: rennifer10@gmail.com                            │
│    - Reply-To: [Email do usuário]                          │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. Email chega em rennifer10@gmail.com                     │
│    com todos os dados do formulário                        │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 6. Frontend exibe mensagem de sucesso                      │
│    "Email enviado com sucesso!"                            │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Próximos Passos

1. ✅ **Teste o formulário** no seu portfólio
2. ✅ **Verifique se os emails chegam** em rennifer10@gmail.com
3. ✅ **Confirme os dados** estão corretos no email
4. ✅ **Teste com diferentes navegadores** se necessário
5. ✅ **Compartilhe seu portfólio** com confiança!

---

## 📞 Informações Importantes

| Item | Valor |
|------|-------|
| **Backend URL** | https://backend-rho-weld-58.vercel.app |
| **Endpoint** | /api/send-email |
| **Método** | POST |
| **Email de Recebimento** | rennifer10@gmail.com |
| **Health Check** | /api/health |
| **Raiz** | / |

---

## 📝 Campos do Formulário

| Campo | Tipo | Obrigatório | Exemplo |
|-------|------|-------------|---------|
| name | string | ✅ Sim | "João Silva" |
| email | string | ✅ Sim | "joao@example.com" |
| projeto | string | ✅ Sim | "Meu Projeto" |
| message | string | ✅ Sim | "Olá, gostaria de..." |

---

## 🎯 Validações

O backend valida:
- ✅ Todos os campos são obrigatórios
- ✅ Email deve ser válido (validação no frontend)
- ✅ Variáveis de ambiente devem estar configuradas
- ✅ Conexão com Gmail deve estar ativa

---

## 📚 Referências

- [Documentação Nodemailer](https://nodemailer.com/)
- [Documentação Vercel](https://vercel.com/docs)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)

---

**Status**: ✅ Pronto para Produção
**Última Atualização**: 2024
**Versão**: 1.0.0
