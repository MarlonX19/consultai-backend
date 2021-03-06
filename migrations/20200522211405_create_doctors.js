
exports.up = function (knex) {
  return knex.schema
    .createTable('doctors', function (table) {
      table.increments('id').primary();
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
      table.string('phone');
      table.string('email');
      table.string('password');
      table.string('avatar_path');
    })
};

exports.down = function (knex) {
  return knex.schema
  .dropTable('doctors');
};
