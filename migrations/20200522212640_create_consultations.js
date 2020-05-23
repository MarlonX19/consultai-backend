exports.up = function (knex) {
  return knex.schema
    .createTable('consultations', function (table) {
      table.increments('id').primary();
      table.string('date');
      table.string('time');
      table.string('symptons');

      table.string('doctor_id').notNullable();
      table.foreign('doctor_id').references('doctor').inTable('id');

      table.string('user_id').notNullable();
      table.foreign('user_id').references('users').inTable('id');
    })
};

exports.down = function (knex) {
  return knex.schema
  .dropTable('consultations');
};
