/* Depende de: models/categorias.js, models/posts.js */

const HomeController = {
  init() {
    this.renderPopulares();
    this.renderTodasCategorias();
    this.renderDestaque();
    this.renderEscolhasEditor();
    this.bindSearch();
  },

  renderPopulares() {
    const grid = document.getElementById('popular-grid');
    if (!grid) return;
    grid.innerHTML = Categorias.getPopulares()
      .map(c => `
        <article class="popular-card">
          <div class="popular-card__img" role="img" aria-label="Imagem categoria ${c.nome}"></div>
          <p class="popular-card__label">${c.nome}</p>
        </article>`)
      .join('');
  },

  renderTodasCategorias() {
    const grid = document.getElementById('all-categories-grid');
    if (!grid) return;
    grid.innerHTML = Categorias.getTodas()
      .map(c => `
        <a href="listagem.html?cat=${c.slug}" class="category-tag" aria-label="Categoria ${c.nome}">
          ${c.nome}
        </a>`)
      .join('');
  },

  renderDestaque() {
    const list = document.getElementById('featured-posts');
    if (!list) return;
    list.innerHTML = Posts.getDestaque()
      .map(p => `
        <article class="featured-post-card">
          <div class="img-placeholder img-placeholder--sm" role="img" aria-label="Imagem: ${p.titulo}"></div>
          <div>
            <p class="featured-post-card__meta">${p.data} • ${p.categoria}</p>
            <h3 class="featured-post-card__title">${p.titulo}</h3>
            ${p.leitura ? `<p class="featured-post-card__read">${p.leitura}</p>` : ''}
          </div>
        </article>`)
      .join('');
  },

  renderEscolhasEditor() {
    const ul = document.getElementById('editor-picks-list');
    if (!ul) return;
    ul.innerHTML = Posts.getEscolhasEditor()
      .map(item => `<li>${item}</li>`)
      .join('');
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

document.addEventListener('DOMContentLoaded', () => HomeController.init());
