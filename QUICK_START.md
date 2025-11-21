# ⚡ Quick Start - Formulário de Contato

## 3 Passos Rápidos

### 1. Crie um Formulário no Formspree
```
1. Acesse: https://formspree.io/
2. Clique em "Sign Up"
3. Use seu email: rennider10@gmail.com
4. Crie um novo formulário
5. Copie o Form ID (ex: xyzabc123)
```

### 2. Configure no Código
Abra: `src/components/Contact.js`

Procure por:
```javascript
const response = await fetch('https://formspree.io/f/xyzabc123', {
```

Substitua `xyzabc123` pelo seu Form ID

### 3. Teste!
```bash
npm start
```

Preencha o formulário e clique em "Enviar Mensagem"

---

## ✅ Pronto!

Você receberá os emails em: **rennider10@gmail.com**

---

## 📝 Campos do Formulário

O usuário pode preencher:
- **Nome** - Nome completo
- **Email** - Email para resposta
- **Projeto** - Assunto/Projeto
- **Mensagem** - Mensagem completa

Tudo chega no seu email! 📧

---

## 🆘 Precisa de Ajuda?

Veja o arquivo `FORMSPREE_SETUP.md` para instruções detalhadas.
