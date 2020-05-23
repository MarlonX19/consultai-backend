exports.up = function (knex) {
  return knex.schema
    .createTable('doctor_specialization', function (table) {
      table.increments('id').primary();

      table.string('doctor_id').notNullable();
      table.foreign('doctor_id').references('doctor').inTable('id');

      table.string('specialization_id').notNullable();
      table.foreign('specialization_id').references('specialization').inTable('id');
    })
};

exports.down = function (knex) {
  return knex.schema
  .dropTable('doctor_specialization');
};
