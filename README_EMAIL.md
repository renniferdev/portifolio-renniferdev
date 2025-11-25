# 📧 Sistema de Email - Guia Rápido

## 🎯 O Que Fazer Agora

### Passo 1: Limpar a Porta 5000
Se você recebeu o erro `EADDRINUSE: address already in use :::5000`, execute:

```bash
LIMPAR_PORTA_5000.bat
```

Isso vai:
1. ✅ Encontrar o processo usando a porta 5000
2. ✅ Encerrar o processo
3. ✅ Iniciar o backend automaticamente

### Passo 2: Iniciar o Backend
Duplo clique em:
```
INICIAR_BACKEND.bat
```

Você deve ver:
```
✅ Servidor rodando na porta 5000
📧 Email configurado: rennifer10@gmail.com
```

### Passo 3: Iniciar o Frontend
Em outro terminal:
```bash
cd frontend
npm start
```

### Passo 4: Testar
1. Acesse `http://localhost:3000`
2. Vá para "Entre em Contato"
3. Preencha e envie o formulário
4. Verifique o email em `rennifer10@gmail.com`

---

## 🚨 Erros Comuns

### ❌ "A porta 5000 já está em uso"
**Solução:**
```bash
LIMPAR_PORTA_5000.bat
```

### ❌ "Backend não está respondendo"
**Solução:**
1. Verifique se `INICIAR_BACKEND.bat` está rodando
2. Verifique se mostra `✅ Servidor rodando na porta 5000`
3. Se não, execute novamente

### ❌ "Email não chega"
**Solução:**
1. Verifique a pasta de Spam do Gmail
2. Verifique o console do backend para erros
3. Verifique se a senha de app está correta em `backend/.env`

---

## 📋 Checklist

- [ ] Executei `LIMPAR_PORTA_5000.bat` (se necessário)
- [ ] Executei `INICIAR_BACKEND.bat` e vejo "Servidor rodando na porta 5000"
- [ ] Executei `npm start` no terminal do frontend
- [ ] Acessei `http://localhost:3000`
- [ ] Testei o formulário de contato
- [ ] Recebi o email em `rennifer10@gmail.com`

---

## 📞 Suporte

Se algo não funcionar:

1. **Verifique o console do backend** - procure por mensagens de erro
2. **Verifique o console do navegador** - pressione F12
3. **Verifique a pasta de Spam** do Gmail
4. **Reinicie tudo** - feche os terminais e comece novamente

---

## ✅ Configuração Atual

```
Email: rennifer10@gmail.com
Senha de App: kixnadylcdejsgyv
Porta Backend: 5000
Porta Frontend: 3000
```

Tudo está pronto! 🎉
