const AssinarController = {
  init() {
    this.bindForm();
    this.bindSearch();
  },

  bindForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const email   = form.querySelector('#email').value.trim();
      const aceite  = form.querySelector('#aceite').checked;
      const feedback = document.getElementById('form-feedback');

      if (!email || !aceite) {
        feedback.textContent = 'Preencha o e-mail e aceite os termos.';
        feedback.className = 'form-feedback error';
        return;
      }

      /* Simulação de envio */
      feedback.textContent = 'Inscrição realizada com sucesso!';
      feedback.className = 'form-feedback success';
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

document.addEventListener('DOMContentLoaded', () => AssinarController.init());
