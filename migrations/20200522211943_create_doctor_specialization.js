exports.up = function (knex) {
  return knex.schema
    .createTable('doctor_specialization', function (table) {
      table.increments('id').primary();

      table.integer('doctor_id').notNullable();
      table.foreign('doctor_id').references('id').inTable('doctors');

      table.integer('specialization_id').notNullable();
      table.foreign('specialization_id').references('id').inTable('specialization');
    })
};

exports.down = function (knex) {
  return knex.schema
  .dropTable('doctor_specialization');
};
