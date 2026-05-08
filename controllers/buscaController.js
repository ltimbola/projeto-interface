/* Depende de: models/busca.js */

const BuscaController = {
  init() {
    this.renderTitulo();
    this.renderResultados();
    this.bindSearch();
  },

  renderTitulo() {
    const params = new URLSearchParams(window.location.search);
    const q      = params.get('q') || 'trabalho remoto';
    const titulo = document.getElementById('busca-titulo');
    if (titulo) titulo.textContent = `Resultados para: "${q}"`;

    const input = document.querySelector('#search-form input[name="q"]');
    if (input) input.value = q;
  },

  renderResultados() {
    const params  = new URLSearchParams(window.location.search);
    const q       = params.get('q') || '';
    const lista   = BuscaModel.filtrar(q);
    const section = document.getElementById('resultados-lista');
    if (!section) return;

    if (lista.length === 0) {
      section.innerHTML = `<p class="busca-vazia">Nenhum resultado encontrado para "<strong>${q}</strong>".</p>`;
      return;
    }

    section.innerHTML = lista.map(r => `
      <article class="result-card">
        <div class="result-card__img" role="img" aria-label="Imagem: ${r.titulo}"></div>
        <div class="result-card__body">
          <h2 class="result-card__title">${r.titulo}</h2>
          <p class="result-card__meta">${r.categoria} • ${r.data}</p>
        </div>
      </article>`).join('');
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

document.addEventListener('DOMContentLoaded', () => BuscaController.init());
