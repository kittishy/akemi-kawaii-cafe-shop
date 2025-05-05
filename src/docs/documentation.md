
# Documentação: Lisa's Cafe E-Commerce

## Visão Geral do Projeto

Este projeto é um e-commerce de café temático inspirado em gatos anime, tendo como mascote principal a personagem Lisa, uma gatinha kawaii. A interface do site foi projetada utilizando a estética "fofo e pastel" com uma paleta de cores predominantemente em tons de azul bebê, cinza suave, branco e lavanda.

### Tema e Identidade Visual

- **Mascote**: Lisa, uma personagem gatinha anime que serve como identidade visual do site
- **Paleta de Cores**: 
  - Azul bebê (#BAD7F2)
  - Lavanda (#E2D1F9)
  - Cinza suave (#F0F0F0)
  - Branco (#FFFFFF)
  - Pêssego (#FFE5D9)
  - Versão escura com variantes mais profundas dos mesmos tons

### Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router DOM
- TanStack Query
- Supabase

## Estrutura do Projeto

### Principais Componentes

1. **Layout**
   - Header (Navegação, alternador de tema, troca de idioma, carrinho)
   - Footer (Links, redes sociais, informações de contato)

2. **Páginas**
   - Home (Página inicial com apresentação da marca)
   - Shop (Loja com filtros e produtos)
   - Outras páginas (About, Blog, Contact, etc.)

3. **Componentes de Interatividade**
   - Carrinho de compras
   - Sistema de filtros para produtos
   - Sistema de gamificação (conquistas, ranking)
   - Newsletter

### Contextos

1. **ThemeContext**
   - Gerencia tema claro/escuro
   - Gerencia idioma (pt-BR/en-US)
   - Fornece traduções para componentes

2. **CartContext**
   - Gerencia o estado do carrinho de compras
   - Adiciona, remove e atualiza itens
   - Calcula totais

### Dados

1. **Produtos**
   - Armazenados de forma centralizada em `src/data/products.ts`
   - Exporta arrays específicos para diferentes seções (featured, milkshakes, etc.)
   - Cada produto inclui imagens, descrições, preços e metadados

## Funcionalidades Principais

### 1. Layout Responsivo

O design foi implementado para funcionar perfeitamente em dispositivos desktop, tablet e mobile, com componentes específicos que se adaptam a cada formato.

### 2. Sistema de Tema Claro/Escuro

- Permite alternar entre temas claro e escuro
- Detecta e usa a preferência do sistema como padrão inicial
- Salva a preferência no localStorage

### 3. Internacionalização (i18n)

- Suporte a múltiplos idiomas (Português Brasil e Inglês)
- Hook `useTheme` fornece função `t()` para tradução
- Detecção automática de idioma do navegador

### 4. Carrinho de Compras

- Adição/remoção de produtos
- Atualização de quantidades
- Persistência no localStorage
- Exibição de notificações ao alterar o carrinho

### 5. Filtros e Busca

- Filtros por categoria
- Filtros por faixa de preço
- Busca por texto

### 6. Sistema de Gamificação

- Conquistas visuais
- Sistema de pontos de fidelidade
- Níveis de usuário

## Estilização e Design

### Componentes personalizados

- Cards com estilo kawaii
- Botões arredondados
- Efeitos de hover sutis
- Animações suaves (flutuação, fade-in/out)

### Otimização de Imagens

- Esqueleto de carregamento (loading skeletons)
- Transições suaves ao carregar imagens
- Efeitos de hover em imagens (scale)

### Classes Tailwind customizadas

```css
.cat-card {
  @apply rounded-3xl bg-white p-5 shadow-md dark:bg-gray-800 transition-all hover:shadow-lg border border-akemi-baby-blue/30 dark:border-akemi-dark-blue/30;
}

.cat-button {
  @apply px-5 py-2 rounded-full bg-akemi-baby-blue text-white font-medium shadow-md hover:bg-akemi-dark-blue transition-all dark:bg-akemi-dark-blue dark:hover:bg-akemi-baby-blue;
}
```

## Estratégias de Design Emocional

### Microinterações

- Animações sutis nos elementos de UI
- Feedback visual ao interagir com produtos
- Ícones de pata de gato em elementos decorativos

### Elementos de Marketing

- Prova social (avaliações e likes)
- Gatilhos de escassez (indicadores de estoque)
- CTA's proeminentes e amigáveis

## Estrutura de Arquivos

```
├── public/
│   └── lovable-uploads/
│       └── 7eda1067-8586-41ec-8b78-50ec5763e70a.png (mascote Lisa)
│       └── coffee-mocha-lisa.jpg (imagens de produtos)
│       └── ...
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── BlogSection.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── GamificationSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── MilkshakeSection.tsx
│   │   │   └── NewsletterSection.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   └── ui/
│   │       ├── theme-toggle.tsx
│   │       └── switch-locale.tsx
│   ├── context/
│   │   ├── CartContext.tsx
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── products.ts
│   ├── docs/
│   │   └── documentation.md
│   ├── hooks/
│   │   └── use-toast.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   └── Shop.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.ts
└── vite.config.ts
```

## Práticas de Acessibilidade

- Labels apropriados para ícones (screen readers)
- Contraste adequado entre texto e fundos
- Estrutura semântica HTML
- Feedback visual claro para interações

## Desempenho e Otimizações

- Lazy loading para imagens
- Estados de carregamento (skeletons)
- Componentes interativos carregados sob demanda
- Estado local para operações frequentes
- Persistência em localStorage para dados do usuário
- Centralização de dados para evitar duplicação

## Integração de Redes Sociais

O site inclui links para todas as redes sociais solicitadas:
- Pinterest
- Instagram
- Spotify
- Discord
- Twitter
- GitHub

## Extensibilidade

Este projeto foi estruturado para ser facilmente extensível:

1. **Novos Componentes**: A estrutura modular facilita adicionar novos componentes
2. **Novos Idiomas**: Basta adicionar traduções ao objeto de idiomas
3. **Novos Temas**: A configuração do Tailwind permite adicionar novos temas
4. **Novas Páginas**: O sistema de rotas pode ser estendido facilmente
5. **Novos Produtos**: Basta adicioná-los ao arquivo centralizado de produtos

## Como usar esta documentação

Esta documentação pode ser utilizada como:

1. Guia para o desenvolvimento continuado do projeto
2. Referência para implementação de recursos similares em outros projetos
3. Material para avaliação de qualidade e estrutura do código
4. Base para treinamento de IA sobre desenvolvimento de e-commerce temático

---

© 2025 Lisa's Cafe - Todos os direitos reservados
