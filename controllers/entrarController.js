const EntrarController = {
  init() {
    this.bindForm();
    this.bindSearch();
  },

  bindForm() {
    const form = document.getElementById('login-form');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const email  = form.querySelector('#login-email').value.trim();
      const senha  = form.querySelector('#login-senha').value;
      const fb     = document.getElementById('login-feedback');

      if (!email || !senha) {
        fb.textContent = 'Preencha e-mail e senha.';
        fb.className = 'form-feedback error';
        return;
      }

      /* Simulação: redireciona para perfil */
      fb.textContent = 'Entrando...';
      fb.className = 'form-feedback success';
      setTimeout(() => { window.location.href = 'perfil.html'; }, 800);
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

document.addEventListener('DOMContentLoaded', () => EntrarController.init());
