# Jefferson Personal Online

Site profissional para Personal Trainer Jefferson, desenvolvido com React e otimizado para deploy no EasyPanel.

## 🚀 Deploy no EasyPanel

### Passo 1: Criar Repositório no GitHub

1. Crie um novo repositório no GitHub
2. Clone este repositório
3. Faça push dos arquivos

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/SEU_USUARIO/jefferson-personal.git
git push -u origin main
```

### Passo 2: Configurar no EasyPanel

1. Acesse seu painel EasyPanel
2. Clique em **"New Service"** ou **"Create"**
3. Selecione **"Deploy from Git"**
4. Conecte seu repositório GitHub
5. Configure:
   - **Build Method**: Nixpacks (automático)
   - **Port**: 3000
   - **Start Command**: `npm start` (já configurado no package.json)

### Passo 3: Configurar Domínio

1. Vá em **"Domains"**
2. Adicione seu domínio personalizado
3. Configure o DNS no seu provedor de domínio

## 📦 Estrutura do Projeto

```
jefferson-personal/
├── public/              # Arquivos estáticos buildados (HTML, CSS, JS, imagens)
├── index.js             # Servidor Express
├── package.json         # Dependências e scripts
├── .gitignore          # Arquivos ignorados pelo Git
└── README.md           # Este arquivo
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar o servidor
npm start
```

O site estará disponível em `http://localhost:3000`

## 📝 Características

- ✅ Design moderno e responsivo
- ✅ Tema escuro com gradientes laranja/amarelo
- ✅ Seções: Hero, Programas, Depoimentos, Contato
- ✅ Integração com WhatsApp
- ✅ Imagens otimizadas em WebP
- ✅ Performance otimizada

## 📞 Contato

WhatsApp: (11) 91171-3717

---

Desenvolvido com ❤️ para Jefferson Personal

