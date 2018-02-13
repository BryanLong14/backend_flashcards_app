exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", table => {
    table.increments("id").primary();
    table.text("username");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};
