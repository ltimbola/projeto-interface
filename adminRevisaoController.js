/* Depende de: models/admin.js */

const AdminRevisaoController = {
  init() {
    this.renderStats();
    this.renderFila(AdminRevisao.getAll());
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
    const tbody = document.getElementById('revisao-tbody');
    if (!tbody) return;
    tbody.innerHTML = lista.map(p => `
      <tr data-id="${p.id}">
        <td>${p.titulo}</td>
        <td>${p.autor}</td>
        <td>${p.status}</td>
        <td class="cell-actions">
          <button class="btn btn-outline" onclick="AdminRevisaoController.aprovar(${p.id})" aria-label="Aprovar ${p.titulo}">Aprovar</button>
          <button class="btn btn-outline" onclick="AdminRevisaoController.reprovar(${p.id})" aria-label="Reprovar ${p.titulo}">Reprovar</button>
        </td>
      </tr>`).join('');
  },

  aprovar(id) {
    AdminRevisao.aprovar(id);
    this.renderFila(AdminRevisao.getAll());
  },

  reprovar(id) {
    AdminRevisao.reprovar(id);
    this.renderFila(AdminRevisao.getAll());
  },

  bindBusca() {
    const input = document.getElementById('busca-revisao');
    if (!input) return;
    input.addEventListener('input', () => {
      this.renderFila(AdminRevisao.buscar(input.value));
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

document.addEventListener('DOMContentLoaded', () => AdminRevisaoController.init());
