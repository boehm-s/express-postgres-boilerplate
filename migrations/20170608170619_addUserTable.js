exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments().primary();
      table.string('email').unique();
      table.string('firstname');
      table.string('lastname');
      table.string('password');
    }),
  ]);
};
exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};
