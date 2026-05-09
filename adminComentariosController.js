/* Depende de: models/admin.js */

const AdminComentariosController = {
  init() {
    this.renderStats();
    this.renderFila(AdminComentarios.getAll());
    this.bindBusca();
    this.bindSearch();
  },

  renderStats() {
    const s = AdminStats.get();
    document.getElementById('stat-posts').textContent         = s.posts;
    document.getElementById('stat-visualizacoes').textContent = s.visualizacoes;
    document.getElementById('stat-inscritos').textContent     = s.inscritos;
    document.getElementById('stat-pendencias').textContent    = s.pendencias;
  },

  renderFila(lista) {
    const tbody = document.getElementById('comentarios-tbody');
    if (!tbody) return;
    tbody.innerHTML = lista.map(c => `
      <tr data-id="${c.id}">
        <td>${c.titulo}</td>
        <td>${c.autor}</td>
        <td>${c.status}</td>
        <td class="cell-actions">
          <button class="btn btn-outline" onclick="AdminComentariosController.aprovar(${c.id})" aria-label="Aprovar ${c.titulo}">Aprovar</button>
          <button class="btn btn-outline" onclick="AdminComentariosController.reprovar(${c.id})" aria-label="Reprovar ${c.titulo}">Reprovar</button>
        </td>
      </tr>`).join('');
  },

  aprovar(id) {
    AdminComentarios.aprovar(id);
    this.renderFila(AdminComentarios.getAll());
  },

  reprovar(id) {
    AdminComentarios.reprovar(id);
    this.renderFila(AdminComentarios.getAll());
  },

  bindBusca() {
    const input = document.getElementById('busca-comentarios');
    if (!input) return;
    input.addEventListener('input', () => {
      this.renderFila(AdminComentarios.buscar(input.value));
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

document.addEventListener('DOMContentLoaded', () => AdminComentariosController.init());
