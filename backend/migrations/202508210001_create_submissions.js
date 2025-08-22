exports.up = function(knex) {
  return knex.schema.createTable('submissions', function (t) {
    t.increments('id').primary();
    t.string('name', 100).notNullable();
    t.string('email', 255).notNullable();
    t.text('message').notNullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('submissions');
};

