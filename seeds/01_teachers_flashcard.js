exports.seed = function(knex, Promise) {
  return knex('teachers_flashcards').del()
    .then(function () {
      return knex('teachers_flashcards').insert([
        {
          "id": 1,
          "word": "Example",
          "partOfSpeech": "Noun",
          "definition": "A thing characteristic of its kind; a pattern or model",
          "level": "Teacher\'s Vobulary",
          "synonyms": "Case, Instance, Exemplar."
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE teachers_flashcards_id_seq RESTART WITH 2;");
    });
};
