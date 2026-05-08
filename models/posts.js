const Posts = {
  destaque: [
    {
      id: 1,
      titulo: 'Erros de Design que Todos Devem Evitar',
      data: '31 Jul 2025',
      categoria: 'Destaque',
      leitura: '3 min de leitura',
    },
    {
      id: 2,
      titulo: 'As Maiores Empresas por Receita',
      data: '31 Jul 2025',
      categoria: 'Destaque',
      leitura: null,
    },
  ],

  escolhasEditor: [
    'O uso negativo da internet',
    'O segredo do brainstorm',
    'Escalar para pequenos negócios',
    'O futuro do trabalho remoto',
  ],

  listagem: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    titulo: `Título da Postagem ${i + 1}`,
    data: '31 Jul 2025',
    categoria: 'techno',
  })),

  getDestaque()       { return this.destaque; },
  getEscolhasEditor() { return this.escolhasEditor; },
  getListagem()       { return this.listagem; },
};
