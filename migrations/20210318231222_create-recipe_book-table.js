
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 128)
      tbl.timestamps('created_at', 128)
      tbl.integer('steps_id')
      .unsigned()
      
      .references('steps_id')
      .inTable('steps')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
  .createTable('steps', tbl => {
      tbl.increments('steps_id')
      tbl.integer('step_number')
      tbl.string('step_text', 128)
      tbl.integer('step_ingredients_id')
        .unsigned()
        
        .references('step_ingredients_id')
        .inTable('step_ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        
  })
  .createTable('ingredients', tbl => {
      tbl.increments('ingredients_id')
      tbl.string('ingredient_name', 128)
      tbl.integer('step_ingredients_id')
      .unsigned()
    
      .references('step_ingredients_id')
      .inTable('step_ingredients')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
  .createTable('step_ingredients', tbl => {
      tbl.increments('steps_ingredients_id')
      tbl.integer('steps_id')
        .unsigned()
       
        .references('steps_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
     tbl.integer('ingredients_id')
        .unsigned()
       
        .references('ingredients_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
     tbl.integer('quantity')   
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
  
};
