/* Depende de: models/admin.js */

const AdminCriarPostController = {
  init() {
    this.renderStats();
    this.bindForm();
    this.bindSearch();
  },

  renderStats() {
    const s = AdminStats.get();
    document.getElementById('stat-posts').textContent         = s.posts;
    document.getElementById('stat-visualizacoes').textContent = s.visualizacoes;
    document.getElementById('stat-inscritos').textContent     = s.inscritos;
    document.getElementById('stat-pendencias').textContent    = s.pendencias;
  },

  bindForm() {
    const form = document.getElementById('criar-post-form');
    if (!form) return;

    form.querySelector('#btn-rascunho').addEventListener('click', () => {
      this.submitPost('rascunho');
    });

    form.querySelector('#btn-revisao').addEventListener('click', () => {
      this.submitPost('revisao');
    });

    form.querySelector('#btn-publicar').addEventListener('click', () => {
      this.submitPost('publicado');
    });
  },

  submitPost(acao) {
    const titulo    = document.getElementById('post-titulo').value.trim();
    const conteudo  = document.getElementById('post-conteudo').value.trim();
    const feedback  = document.getElementById('post-feedback');

    if (!titulo || !conteudo) {
      feedback.textContent = 'Preencha o título e o conteúdo.';
      feedback.className = 'form-feedback error';
      return;
    }

    const msgs = {
      rascunho:  'Rascunho salvo com sucesso!',
      revisao:   'Post enviado para revisão!',
      publicado: 'Post publicado com sucesso!',
    };

    feedback.textContent = msgs[acao];
    feedback.className = 'form-feedback success';
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

document.addEventListener('DOMContentLoaded', () => AdminCriarPostController.init());
