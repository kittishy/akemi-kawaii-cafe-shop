# Documentation: Lisa's Cafe E-Commerce.

## Project Overview

Lisa's Cafe is a specialty coffee-themed e-commerce platform inspired by the anime-style cat universe. The project's mascot is Lisa, a kawaii cat representing the brand's visual identity. The site's interface uses a "cute and pastel" aesthetic, highlighting soft shades of baby blue, lavender, white, peach, and gray.

## Visual Identity

*   **Mascot**: Lisa, an anime-style cat that appears in the site's illustrations and icons.
*   **Color Palette**:

    *   Baby Blue (#BAD7F2).
    *   Lavender (#E2D1F9)
    *   Soft Gray (#F0F0F0)
    *   White (#FFFFFF)
    *   Peach (#FFE5D9)
    *   Dark version with deeper variations of these colors.

## Technologies Used

*   React
*   TypeScript
*   Tailwind CSS
*   shadcn/ui
*   React Router DOM
*   TanStack Query
*   Supabase

## Project Structure

### Main Components

1.  **Layout**

    *   **Header**: Main navigation, theme toggle, languages, and cart.
    *   **Footer**: Institutional information, social media links, and contacts.

2.  **Pages**

    *   **Home**: Brand presentation.
    *   **Shop**: Product catalog with filters.
    *   **Others**: About, Blog, Contact, among others.

3.  **Interactive Components**

    *   Shopping cart
    *   Search filters
    *   Loyalty and achievement system
    *   Newsletter

### Contexts

*   **ThemeContext**:

    *   Toggle between light and dark themes
    *   Language and translations management

*   **CartContext**:

    *   Shopping cart management
    *   Addition, removal, and updating of items
    *   Total calculation

### Data

*   **Products**:

    *   Stored in `src/data/products.ts`
    *   Organized by categories (e.g., featured, milkshakes, etc.)
    *   Contain images, descriptions, prices, and metadata.

## Features

### Responsive Layout

Compatible with desktops, tablets, and smartphones. Adaptive components ensure good usability on all devices.

### Light/Dark Theme

*   Manual or automatic toggle based on system preference.
*   User's choice persistence via `localStorage`.

### Internationalization

*   Support for Portuguese (Brazil) and English (US)
*   Centralized translations accessed via `t()`
*   Automatic browser language detection

### Shopping Cart

*   Addition and removal of items
*   Quantity updates
*   Persistence in `localStorage`
*   Visual and auditory feedback for interactions

### Filters and Search

*   Filter by category and price range
*   Keyword search

### Gamification

*   Visual achievement system
*   Scoring for interactions and purchases
*   User levels with rewards

## Style and Animations

### Custom Components

*   Cards with rounded borders and kawaii aesthetic
*   Buttons with hover effect and smooth animations

### Image Optimization

*   Skeleton loaders during loading
*   Smooth transitions and scaling effects

### Example of Custom Classes with Tailwind

```css
.cat-card {
  @apply rounded-3xl bg-white p-5 shadow-md dark:bg-gray-800 transition-all hover:shadow-lg border border-akemi-baby-blue/30 dark:border-akemi-dark-blue/30;
}

.cat-button {
  @apply px-5 py-2 rounded-full bg-akemi-baby-blue text-white font-medium shadow-md hover:bg-akemi-dark-blue transition-all dark:bg-akemi-dark-blue dark:hover:bg-akemi-baby-blue;
}
```

## Design Emocional

### Microinterações

* Animações discretas e feedback visual nos elementos interativos
* Ícones temáticos com pegadas de gato e elementos animados

### Estratégias de Conversão

* Avaliações e depoimentos
* Indicadores de estoque baixo
* Chamadas para ação claras e visíveis

## Estrutura de Arquivos

```
├── public/
│   └── uploads/
│       └── lisa.png
│       └── coffee-mocha-lisa.jpg
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

## Acessibilidade

* Uso de `aria-label` e atributos semânticos
* Contraste adequado entre texto e plano de fundo
* Indicadores visuais para ações de foco e clique

## Otimizações

* Lazy loading de imagens
* Skeletons para carregamento
* Código dividido por rotas e componentes
* Uso de estados locais para performance
* Dados persistidos no `localStorage` quando necessário

## Redes Sociais

O site contém links para os seguintes perfis oficiais:

* Instagram
* Pinterest
* Spotify
* Discord
* Twitter
* GitHub

## Extensibilidade

Projetado para facilitar a evolução do sistema:

* **Novos Componentes**: Estrutura modular
* **Novos Idiomas**: Sistema de traduções escalável
* **Novos Temas**: Configuração de design flexível via Tailwind
* **Novas Páginas**: Sistema de rotas dinâmico
* **Novos Produtos**: Adição fácil via arquivo centralizado

---

© 2025 Lisa's Cafe – Todos os direitos reservados.