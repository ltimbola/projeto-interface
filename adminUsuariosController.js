/* Depende de: models/usuarios.js, models/admin.js */

const AdminUsuariosController = {
  init() {
    this.renderStats();
    this.renderUsuarios(Usuarios.getAll());
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

  renderUsuarios(lista) {
    const tbody = document.getElementById('usuarios-tbody');
    if (!tbody) return;
    tbody.innerHTML = lista.map(u => {
      const isBloqueado = u.status === 'bloqueado';
      const btnLabel    = isBloqueado ? 'Desbloquear' : 'Bloquear';
      const handler     = isBloqueado
        ? `AdminUsuariosController.desbloquear(${u.id})`
        : `AdminUsuariosController.bloquear(${u.id})`;
      const statusClass = isBloqueado ? 'status-badge--bloqueado' : 'status-badge--ativo';
      const statusText  = isBloqueado ? 'Bloqueado' : 'Ativo';
      return `
        <tr data-id="${u.id}">
          <td>${u.nome}</td>
          <td>${u.email}</td>
          <td><span class="status-badge ${statusClass}">${statusText}</span></td>
          <td class="cell-actions">
            <button class="btn btn-outline" onclick="${handler}" aria-label="${btnLabel} ${u.nome}">
              ${btnLabel}
            </button>
          </td>
        </tr>`;
    }).join('');
  },

  bloquear(id) {
    Usuarios.bloquear(id);
    this.renderUsuarios(Usuarios.getAll());
  },

  desbloquear(id) {
    Usuarios.desbloquear(id);
    this.renderUsuarios(Usuarios.getAll());
  },

  bindBusca() {
    const input = document.getElementById('busca-usuarios');
    if (!input) return;
    input.addEventListener('input', () => {
      this.renderUsuarios(Usuarios.buscar(input.value));
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

document.addEventListener('DOMContentLoaded', () => AdminUsuariosController.init());
