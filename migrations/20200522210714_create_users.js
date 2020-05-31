
exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id').primary();
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('avatar_path');
    })
};

exports.down = function (knex) {
  return knex.schema
  .dropTable("users");
};
