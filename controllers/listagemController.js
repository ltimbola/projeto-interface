/* Depende de: models/posts.js */

const ListagemController = {
  paginaAtual: 1,
  itensPorPagina: 9,
  filtroAtivo: 'popular',

  init() {
    this.renderTitulo();
    this.bindFiltros();
    this.renderPosts();
    this.bindCarregarMais();
    this.bindSearch();
  },

  renderTitulo() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat') || 'Techno';
    const titulo = document.getElementById('listing-title');
    if (titulo) titulo.textContent = `Categoria: ${cat.charAt(0).toUpperCase() + cat.slice(1)}`;
  },

  bindFiltros() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.filtroAtivo = tab.dataset.filter;
        this.paginaAtual = 1;
        this.renderPosts();
      });
    });
  },

  renderPosts() {
    const grid = document.getElementById('posts-grid');
    if (!grid) return;
    const posts = Posts.getListagem();
    grid.innerHTML = posts
      .slice(0, this.paginaAtual * this.itensPorPagina)
      .map(p => `
        <article class="post-card">
          <div class="post-card__img" role="img" aria-label="Imagem: ${p.titulo}"></div>
          <div class="post-card__body">
            <h2 class="post-card__title">${p.titulo}</h2>
            <time class="post-card__date" datetime="2025-07-31">${p.data}</time>
          </div>
        </article>`)
      .join('');
  },

  bindCarregarMais() {
    const btn = document.getElementById('btn-carregar-mais');
    if (!btn) return;
    btn.addEventListener('click', () => {
      this.paginaAtual += 1;
      this.renderPosts();
    });
  },

  bindSearch() {
    const form = document.getElementById('search-form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const q = form.querySelector('input[name="q"]').value.trim();
      if (q) window.location.href = `busca.html?q=${encodeURIComponent(q)}`;
    });
  },
};

document.addEventListener('DOMContentLoaded', () => ListagemController.init());
