exports.up = function(knex, Promise) {
  return knex.schema.createTable("teachers_flashcards", table => {
    table.increments("id").primary();
    table.text("word");
    table.text("partOfSpeech");
    table.text("definition");
    table.text("level");
    table.text("synonyms");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("teachers_flashcards");
};
