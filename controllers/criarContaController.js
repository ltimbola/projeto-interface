const CriarContaController = {
  init() {
    this.bindForm();
    this.bindSearch();
  },

  bindForm() {
    const form = document.getElementById('cadastro-form');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const nome    = form.querySelector('#cadastro-nome').value.trim();
      const email   = form.querySelector('#cadastro-email').value.trim();
      const senha   = form.querySelector('#cadastro-senha').value;
      const confirm = form.querySelector('#cadastro-confirm').value;
      const aceite  = form.querySelector('#cadastro-aceite').checked;
      const fb      = document.getElementById('cadastro-feedback');

      if (!nome || !email || !senha || !confirm) {
        fb.textContent = 'Preencha todos os campos.';
        fb.className = 'form-feedback error';
        return;
      }
      if (senha !== confirm) {
        fb.textContent = 'As senhas não coincidem.';
        fb.className = 'form-feedback error';
        return;
      }
      if (!aceite) {
        fb.textContent = 'Aceite os termos para continuar.';
        fb.className = 'form-feedback error';
        return;
      }

      fb.textContent = 'Conta criada com sucesso!';
      fb.className = 'form-feedback success';
      form.reset();
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

document.addEventListener('DOMContentLoaded', () => CriarContaController.init());
