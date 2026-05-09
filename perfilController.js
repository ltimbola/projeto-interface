/* Depende de: models/perfil.js */

const PerfilController = {
  init() {
    this.renderPostagens();
    this.bindForm();
    this.bindSearch();
  },

  renderPostagens() {
    const lista = document.getElementById('postagens-lista');
    if (!lista) return;

    const statusClasses = {
      'Rascunho':   'status--rascunho',
      'Publicado':  'status--publicado',
      'Em análise': 'status--analise',
    };

    lista.innerHTML = PerfilModel.getPostagens().map(p => {
      const cls = statusClasses[p.status] || '';
      return `
        <article class="post-item">
          <div class="post-item__img" role="img" aria-label="Imagem: ${p.titulo}"></div>
          <div class="post-item__body">
            <p class="post-item__status ${cls}">${p.status}</p>
            <h3 class="post-item__title">${p.titulo}</h3>
          </div>
        </article>`;
    }).join('');
  },

  bindForm() {
    const form = document.getElementById('perfil-form');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const nome = form.querySelector('#perfil-nome').value.trim();
      const bio  = form.querySelector('#perfil-bio').value.trim();
      const fb   = document.getElementById('perfil-feedback');

      PerfilModel.salvar(nome, bio);
      fb.textContent = 'Perfil salvo com sucesso!';
      fb.className = 'form-feedback success';
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

document.addEventListener('DOMContentLoaded', () => PerfilController.init());
