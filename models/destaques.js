const Destaques = {
  items: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    titulo: `Destaque ${i + 1}`,
  })),

  getAll() { return this.items; },
};
