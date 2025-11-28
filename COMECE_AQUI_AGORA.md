# 🎯 COMECE AQUI - Guia Rápido

## ⚡ Iniciar em 3 Passos

### Passo 1: Abra o Prompt de Comando

Pressione `Win + R` e digite:
```
cmd
```

### Passo 2: Navegue até a pasta do projeto

```bash
cd C:\Users\Rennifer\Desktop\RENNIFER\PROJETOS\portifolio-renniferdev
```

### Passo 3: Execute o script de inicialização

```bash
INICIAR_TUDO_AGORA.bat
```

---

## ✅ O que vai acontecer

1. ✅ Duas janelas de terminal vão abrir
2. ✅ Backend vai iniciar na porta 5000
3. ✅ Frontend vai iniciar na porta 3000
4. ✅ Navegador abre automaticamente em http://localhost:3000

---

## 🧪 Testar o Formulário

1. **Abra** http://localhost:3000 no navegador
2. **Vá até** a seção "Entre em Contato"
3. **Preencha** o formulário:
   - Nome: Seu Nome
   - Email: seu_email@gmail.com
   - Projeto: Teste
   - Mensagem: Mensagem de teste
4. **Clique** em "Enviar Mensagem"
5. **Verifique** o email em rennifer10@gmail.com

---

## 📍 URLs de Acesso

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000
- **Health Check:** http://localhost:5000/api/health

---

## 🐛 Se algo der errado

### Erro: "Porta já está em uso"

```bash
# Libere a porta 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Libere a porta 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Erro: "Backend não está respondendo"

1. Verifique se o terminal do backend está aberto
2. Verifique se há erros no console do backend
3. Verifique se a porta 5000 está disponível

### Erro: "Email não enviado"

1. Verifique as credenciais em `backend/.env`
2. Verifique se a senha de app do Gmail está correta
3. Verifique os logs do backend para mais detalhes

---

## 📚 Documentação Completa

Para mais detalhes, consulte:
- `INICIAR_PROJETO_COMPLETO.md` - Guia completo
- `VERIFICAR_CONFIGURACAO_COMPLETA.md` - Verificação de configuração
- `GUIA_CONEXAO_BACKEND.md` - Guia de conexão backend

---

## 🚀 Próximos Passos

1. ✅ Teste localmente
2. ✅ Verifique os logs
3. ✅ Envie um email de teste
4. ✅ Deploy no Vercel (quando pronto)

---

**Pronto para começar? Execute:** `INICIAR_TUDO_AGORA.bat`
