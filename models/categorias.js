const Categorias = {
  populares: [
    { id: 1, nome: 'Work',   slug: 'work' },
    { id: 2, nome: 'Books',  slug: 'books' },
    { id: 3, nome: 'Techno', slug: 'techno' },
  ],

  todas: [
    { id: 1,  nome: 'Negócios',     slug: 'negocios' },
    { id: 2,  nome: 'Techno',       slug: 'techno' },
    { id: 3,  nome: 'Produtividade',slug: 'produtividade' },
    { id: 4,  nome: 'Filmes',       slug: 'filmes' },
    { id: 5,  nome: 'Lifestyle',    slug: 'lifestyle' },
    { id: 6,  nome: 'Educação',     slug: 'educacao' },
    { id: 7,  nome: 'Mailing',      slug: 'mailing' },
    { id: 8,  nome: 'eCommerce',    slug: 'ecommerce' },
    { id: 9,  nome: 'Alimentação',  slug: 'alimentacao' },
    { id: 10, nome: 'Social',       slug: 'social' },
  ],

  getPopulares() { return this.populares; },
  getTodas()     { return this.todas; },
};
