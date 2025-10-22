# Jefferson Personal Online

Site profissional para personal trainer com programas de treino personalizados, planos de assinatura e acompanhamento online.

## 🎯 Sobre o Projeto

Este é um site moderno e responsivo desenvolvido para o personal trainer Jefferson Nascimento, oferecendo uma plataforma completa para divulgação de seus serviços e captação de alunos online.

## ✨ Características

- **Design Moderno**: Interface escura com gradientes vibrantes (laranja e amarelo)
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais profissionais
- **SEO Otimizado**: Estrutura preparada para mecanismos de busca
- **Performance**: Build otimizado com Vite e lazy loading de imagens
- **Acessibilidade**: Seguindo boas práticas de WCAG 2.1

## 🚀 Tecnologias

- **React 19**: Framework JavaScript moderno
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS 4**: Framework CSS utilitário
- **Vite**: Build tool rápido e moderno
- **shadcn/ui**: Componentes UI de alta qualidade
- **Lucide Icons**: Ícones modernos e consistentes
- **Wouter**: Roteamento leve para React
- **Docker**: Containerização para deploy

## 📁 Estrutura do Projeto

```
jefferson-personal/
├── client/
│   ├── public/           # Imagens e assets estáticos
│   │   ├── jefferson_post_*.webp
│   │   └── jefferson_profile.webp
│   ├── src/
│   │   ├── components/   # Componentes React
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Programs.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/        # Páginas
│   │   │   └── Home.tsx
│   │   ├── App.tsx       # Componente principal
│   │   └── index.css     # Estilos globais
├── Dockerfile            # Configuração Docker
├── nginx.conf            # Configuração Nginx
└── DEPLOY.md            # Guia de deploy
```

## 🎨 Paleta de Cores

- **Primária**: `#FF6B35` (Laranja vibrante)
- **Secundária**: `#1A2332` (Azul escuro)
- **Accent**: `#FFD23F` (Amarelo)
- **Background**: `#0F1419` (Preto azulado)
- **Cards**: `#1E2936` (Cinza escuro)

## 📦 Seções do Site

1. **Hero**: Banner principal com CTA e benefícios
2. **Programas**: 4 programas de treino detalhados
3. **Planos**: Pricing com 2 opções (Mensal e Trimestral)
4. **Depoimentos**: 6 depoimentos reais de alunos
5. **Contato**: Formulário e links diretos (WhatsApp, Email, Instagram)
6. **Footer**: Links rápidos e informações de contato

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 18+
- pnpm (ou npm/yarn)

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Acessar em http://localhost:3000
```

### Build para Produção

```bash
# Criar build otimizado
pnpm build

# Preview do build
pnpm preview
```

## 🚢 Deploy

### EasyPanel (Recomendado)

Siga o guia completo em [DEPLOY.md](./DEPLOY.md)

**Resumo:**
1. Faça push do código para um repositório Git
2. Conecte o repositório no EasyPanel
3. Configure o build com Docker
4. Deploy automático

### Docker Local

```bash
# Build da imagem
docker build -t jefferson-personal .

# Executar container
docker run -p 8080:80 jefferson-personal

# Acessar em http://localhost:8080
```

## 📱 Contato

- **Email**: jefersonascimento.edfisica@gmail.com
- **Instagram**: [@jefferson_personal](https://www.instagram.com/jefferson_personal/)
- **Site**: [jeffersonpersonal.online](https://jeffersonpersonal.online)

## 📄 Licença

Este projeto é propriedade de Jefferson Nascimento. Todos os direitos reservados.

## 🙏 Agradecimentos

- Imagens coletadas do Instagram oficial
- Design inspirado nas melhores práticas de UX/UI
- Comunidade React e Tailwind CSS
 

