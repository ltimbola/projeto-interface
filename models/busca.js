const BuscaModel = {
  resultados: Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    titulo: `Resultado ${i + 1}: título de exemplo`,
    categoria: 'Categoria',
    data: '31 Jul 2025',
  })),

  getAll()      { return this.resultados; },
  filtrar(termo) {
    if (!termo) return this.resultados;
    return this.resultados.filter(r =>
      r.titulo.toLowerCase().includes(termo.toLowerCase())
    );
  },
};
