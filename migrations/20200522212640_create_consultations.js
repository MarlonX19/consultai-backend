exports.up = function (knex) {
  return knex.schema
    .createTable('consultations', function (table) {
      table.increments('id').primary();
      table.string('date');
      table.string('time');
      table.string('symptons');

      table.integer('doctor_id').notNullable();
      table.foreign('doctor_id').references('id').inTable('doctors');

      table.integer('user_id').notNullable();
      table.foreign('user_id').references('id').inTable('users');
    })
};

exports.down = function (knex) {
  return knex.schema
  .dropTable('consultations');
};
