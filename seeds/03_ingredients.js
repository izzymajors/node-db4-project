
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name:"[]"},
        {ingredient_name:"add 1 tbsp olive oil"},
        {ingredient_name:"add tea spoon of seasoning"},
      ]);
    });
};
