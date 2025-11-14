# 🚀 Portfólio Rennifer - React.js

Versão React.js do portfólio pessoal de Rennifer, um desenvolvedor Full Stack. Este projeto foi convertido do HTML/CSS/JavaScript original para React, mantendo toda a funcionalidade e lógica.

## 📋 Funcionalidades

✅ **Menu Responsivo** - Navegação mobile com toggle  
✅ **Tema Claro/Escuro** - Dark mode com persistência em localStorage  
✅ **Animação de Texto** - Typed.js para efeito de digitação  
✅ **Scroll Ativo** - Links de navegação destacam a seção visível  
✅ **Scroll Up** - Botão flutuante para voltar ao topo  
✅ **Portfólio Dinâmico** - 5 projetos com links funcionais  
✅ **Formulário de Contato** - Integrado com StaticForms  
✅ **Redes Sociais** - LinkedIn, GitHub, TikTok, WhatsApp  
✅ **Design Responsivo** - Funciona em desktop, tablet e mobile  

## 🛠️ Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para UI
- **Typed.js** - Animação de digitação de texto
- **Swiper** - Carrossel de projetos
- **CSS3** - Estilização com variáveis CSS
- **Unicons** - Ícones SVG
- **DevIcons** - Ícones de tecnologias

## 📦 Instalação

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

### Passos

1. **Clone ou navegue até o diretório do projeto**
```bash
cd portfolio-react
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 🚀 Build para Produção

```bash
npm run build
```

Isso criará uma pasta `build` otimizada para produção.

## 📁 Estrutura do Projeto

```
portfolio-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js          # Navegação e tema
│   │   ├── Home.js            # Seção inicial com animação
│   │   ├── About.js           # Sobre mim
│   │   ├── Skills.js          # Tecnologias
│   │   ├── Portfolio.js       # Projetos
│   │   ├── Contact.js         # Formulário de contato
│   │   ├── Footer.js          # Rodapé
│   │   └── ScrollUp.js        # Botão scroll up
│   ├── App.js                 # Componente principal
│   ├── index.js               # Entrada da aplicação
│   └── index.css              # Estilos globais
├── package.json
└── README.md
```

## 🎨 Componentes

### Header
- Menu responsivo com toggle
- Tema claro/escuro com persistência
- Links ativos baseados na seção visível

### Home
- Animação de texto com Typed.js
- Links para redes sociais
- Imagem com SVG blob

### About
- Descrição pessoal
- Download de CV

### Skills
- Grid de tecnologias com ícones
- Suporte a dark mode

### Portfolio
- 5 projetos com descrições
- Links para demonstrações
- Efeito hover

### Contact
- Formulário funcional
- Integração com StaticForms
- Informações de contato

### Footer
- Links úteis
- Redes sociais
- Copyright

### ScrollUp
- Botão flutuante
- Aparece após scroll de 560px
- Scroll suave para o topo

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### GitHub Pages
1. Adicione ao `package.json`:
```json
"homepage": "https://seu-usuario.github.io/portfolio-react"
```

2. Instale gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Adicione scripts ao `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

## 🔧 Customização

### Alterar Informações Pessoais
Edite os componentes em `src/components/` com suas informações.

### Alterar Cores
Modifique as variáveis CSS em `src/index.css`:
```css
:root {
  --first-color: rgb(67, 211, 221);
  --hue-color: 250;
  /* ... outras cores */
}
```

### Adicionar Projetos
Edite o array `projects` em `src/components/Portfolio.js`.

### Adicionar Tecnologias
Edite o array `technologies` em `src/components/Skills.js`.

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints em:
- **350px** - Dispositivos muito pequenos
- **568px** - Tablets pequenos
- **768px** - Tablets
- **1024px** - Desktops

## 🎯 Funcionalidades Implementadas

- ✅ Menu mobile com toggle
- ✅ Tema claro/escuro com localStorage
- ✅ Animação de texto (Typed.js)
- ✅ Scroll ativo na navegação
- ✅ Scroll header com sombra
- ✅ Botão scroll up flutuante
- ✅ Formulário de contato
- ✅ Links para redes sociais
- ✅ Design responsivo
- ✅ Animações suaves

## 📝 Licença

Este projeto está licenciado sob a Licen��a MIT.

## 👤 Autor

**Rennifer Teixeira**
- 📧 Email: rennider10@gmail.com
- 🔗 LinkedIn: [Rennifer Amilton Teixeira](https://www.linkedin.com/in/rennifer-amilton-teixeira-08983219a/)
- 🐙 GitHub: [@renniferdev](https://github.com/renniferdev)
- 🎵 TikTok: [@futurodevrennifer](https://www.tiktok.com/@futurodevrennifer)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests.

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do WhatsApp: **(31) 98416-3357**

---

**Desenvolvido com ❤️ por Rennifer Teixeira**
