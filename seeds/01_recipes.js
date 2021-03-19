
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Spaghetti Bologneseue', created_at:"2021-01-01 08:23:19.120" },
        { recipe_name: 'Taco', created_at:"2021-15-01 08:23:19.120" },
        { recipe_name: 'Hamburger', created_at:"2021-02-01 08:23:19.120" },
      ]);
    });
};
