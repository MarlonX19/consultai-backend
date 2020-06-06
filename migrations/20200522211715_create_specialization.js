
exports.up = function (knex) {
  return knex.schema
    .createTable('specialization', function (table) {
      table.increments('id').primary();
      table.string('title', 255).notNullable();
    })
};

exports.down = function (knex) {
  return knex.schema
  .dropTable('specialization');
};
