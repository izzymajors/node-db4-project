
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: '1', step_text:'put a large saucepan on a medium heat'},
        {step_number: '2', step_text:'put steak in medium pan on medium heat'},
        {step_number: '3', step_text:'put groundbeef in pan'},
      ]);
    });
};
