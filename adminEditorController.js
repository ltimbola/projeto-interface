/* Depende de: models/admin.js */

const AdminEditorController = {
  init() {
    this.renderStats();
    this.renderPosts(AdminEditor.getAll());
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

  renderPosts(lista) {
    const tbody = document.getElementById('editor-tbody');
    if (!tbody) return;
    tbody.innerHTML = lista.map(p => {
      const btnLabel = p.agendado ? 'Remover' : 'Agendar';
      const handler  = p.agendado
        ? `AdminEditorController.remover(${p.id})`
        : `AdminEditorController.agendar(${p.id})`;
      return `
        <tr data-id="${p.id}">
          <td>${p.titulo}</td>
          <td class="cell-actions">
            <button class="btn btn-outline" onclick="${handler}" aria-label="${btnLabel} ${p.titulo}">
              ${btnLabel}
            </button>
          </td>
        </tr>`;
    }).join('');
  },

  remover(id) {
    AdminEditor.remover(id);
    this.renderPosts(AdminEditor.getAll());
  },

  agendar(id) {
    AdminEditor.agendar(id);
    this.renderPosts(AdminEditor.getAll());
  },

  bindBusca() {
    const input = document.getElementById('busca-posts');
    if (!input) return;
    input.addEventListener('input', () => {
      const termo = input.value.toLowerCase();
      const filtrado = AdminEditor.getAll().filter(p => p.titulo.toLowerCase().includes(termo));
      this.renderPosts(filtrado);
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

document.addEventListener('DOMContentLoaded', () => AdminEditorController.init());
