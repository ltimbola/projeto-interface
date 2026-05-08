# HABIT – Exercício HTML e CSS

Reconstrução fiel das telas do blog **HABIT** a partir dos mockups fornecidos no PDF, seguindo requisitos de semântica, responsividade, acessibilidade e estrutura MVC.

## Telas Implementadas

| Arquivo | Tela |
|---|---|
| `views/index.html` | Home – hero, categorias populares, todas as categorias, postagens em destaque |
| `views/listagem.html` | Listagem – Categoria: Techno, filtros, grade 3×3 de posts |
| `views/destaques.html` | Destaques – grade 3×3 de cards |
| `views/assinar.html` | Newsletter – formulário de assinatura com validação |
| `views/admin-categorias.html` | Admin – listagem e gerenciamento de categorias |
| `views/admin-criar-post.html` | Admin – formulário de criação de post com editor simulado |
| `views/admin-editor.html` | Admin – escolhas do editor (agendar/remover posts) |
| `views/admin-usuarios.html` | Admin – listagem de usuários com bloquear/desbloquear |
| `views/admin-revisao.html` | Admin – fila de revisão de posts (aprovar/reprovar) |
| `views/admin-comentarios.html` | Admin – fila de comentários (aprovar/reprovar) |
| `views/busca.html` | Resultados de busca com cards de resultado |
| `views/entrar.html` | Login com e-mail, senha e Google |
| `views/criar-conta.html` | Cadastro com validação de campos e termos |
| `views/perfil.html` | Perfil do usuário com suas postagens e comentários |

## Estrutura do Projeto

```
projeto-interface/
├── models/
│   ├── categorias.js   # categorias populares e todas as categorias
│   ├── posts.js        # posts em destaque e escolhas do editor
│   ├── destaques.js    # destaques (grade 3×3)
│   ├── admin.js        # stats, categorias admin e escolhas do editor admin
│   └── usuarios.js     # lista de usuários com bloquear/desbloquear
├── views/
│   ├── index.html
│   ├── listagem.html
│   ├── destaques.html
│   ├── assinar.html
│   ├── admin-categorias.html
│   ├── admin-criar-post.html
│   ├── admin-editor.html
│   ├── admin-usuarios.html
│   └── css/
│       ├── variables.css        # tokens de cor, tipografia e espaçamento
│       ├── base.css             # reset, estilos base, .visually-hidden
│       ├── components.css       # header, footer, botões (compartilhados)
│       ├── home.css             # hero, categorias, postagens em destaque
│       ├── listagem.css         # grade de posts + filtros
│       ├── destaques.css        # grade de highlights
│       ├── assinar.css          # formulário de newsletter
│       ├── admin.css            # layout sidebar + stats + tabela admin
│       └── admin-criar-post.css # formulário de criação de post
├── controllers/
│   ├── homeController.js
│   ├── listagemController.js
│   ├── destaqueController.js
│   ├── assinarController.js
│   ├── adminCategoriasController.js
│   ├── adminCriarPostController.js
│   ├── adminEditorController.js
│   └── adminUsuariosController.js
├── assets/             # imagens e recursos estáticos
└── README.md
```

## Decisões de Layout

- **Mobile-first**: CSS base escrito para ≤ 420 px; layout expande via `min-width`.
- **CSS Grid** na grade de posts/destaques (1 → 2 → 3 colunas conforme o breakpoint).
- **Flexbox** no header, nos filtros e no layout hero/editor.
- `max-width: 860px` centrado com `margin-inline: auto` para o container principal.
- Nenhum framework CSS externo utilizado (sem Bootstrap, Tailwind etc.).

## Breakpoints

| Breakpoint | Largura | Ajuste |
|---|---|---|
| Mobile pequeno | base ≤ 420 px | 1 coluna, nav oculta |
| Mobile grande | `min-width: 481px` | 2 colunas na grade |
| Tablet | `min-width: 768px` | 3 colunas, hero em 2 colunas |
| Desktop | `min-width: 1024px` | padding maior nas seções |

## Observações de Acessibilidade

- Tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Hierarquia de títulos respeitada (`h1` único por página, `h2` para seções, `h3` para sub-seções).
- `<label for>` vinculado a todos os `<input>`.
- `aria-label` em imagens sem `<img>` real (divs placeholder) e em formulários de busca.
- `aria-current="page"` no link ativo da navegação.
- `aria-pressed` nos botões de filtro de listagem.
- Estados de interação visíveis: `:hover`, `:focus-visible`, `:active` e `:disabled`.
- Contraste de cores ≥ 4,5:1 para texto normal (WCAG 2.1 AA): texto `#1e2d2b` sobre `#ffffff` → ~18:1.
- Layout funcional de 320 px a 1440 px.
