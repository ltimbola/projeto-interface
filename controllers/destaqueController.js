/* Depende de: models/destaques.js */

const DestaqueController = {
  init() {
    this.renderDestaques();
    this.bindSearch();
  },

  renderDestaques() {
    const grid = document.getElementById('highlights-grid');
    if (!grid) return;
    grid.innerHTML = Destaques.getAll()
      .map(d => `
        <article class="highlight-card">
          <div class="highlight-card__img" role="img" aria-label="Imagem: ${d.titulo}"></div>
          <div class="highlight-card__body">
            <h2 class="highlight-card__title">${d.titulo}</h2>
          </div>
        </article>`)
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

document.addEventListener('DOMContentLoaded', () => DestaqueController.init());
