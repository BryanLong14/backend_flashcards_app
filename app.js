const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  queries
    .list("highschool_flashcards")
    .then(highschool_flashcards =>
      queries.list("teachers_flashcards").then(teachers_flashcards =>
        response.json({
          highschool_flashcards: highschool_flashcards,
          teachers_flashcards: teachers_flashcards
        })
      )
    )
    .catch(console.error);
});

app.get("/highschool_flashcards", (request, response) => {
  queries
    .list("highschool_flashcards")
    .then(highschool_flashcards => {
      response.json({ highschool_flashcards });
    })
    .catch(console.error);
});

app.get("/teachers_flashcards", (request, response) => {
  queries
    .list("teachers_flashcards")
    .then(teachers_flashcards => {
      response.json({ teachers_flashcards });
    })
    .catch(console.error);
});

app.get("/highschool_flashcards/:id", (request, response) => {
  queries
    .read("highschool_flashcards", request.params.id)
    .then(highschool_flashcard => {
      highschool_flashcard ? response.json({ highschool_flashcard }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/teachers_flashcards/:id", (request, response) => {
  queries
    .read("teachers_flashcards", request.params.id)
    .then(teachers_flashcard => {
      teachers_flashcard ? response.json({ teachers_flashcard }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/highschool_flashcards", (request, response) => {
  queries
    .create("highschool_flashcards", request.body)
    .then(highschool_flashcard => {
      response.status(201).json({ data: highschool_flashcard });
    })
    .catch(console.error);
});

app.post("/teachers_flashcards", (request, response) => {
  queries
    .create("teachers_flashcards", request.body)
    .then(teachers_flashcard => {
      response.status(201).json({ data: teachers_flashcard });
    })
    .catch(console.error);
});

app.delete("/highschool_flashcards/:id", (request, response) => {
  queries
    .delete("highschool_flashcards", request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.delete("/teachers_flashcards/:id", (request, response) => {
  queries
    .delete("teachers_flashcards", request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/highschool_flashcards/:id", (request, response) => {
  queries
    .update("highschool_flashcards", request.params.id, request.body)
    .then(highschool_flashcard => {
      response.json({ data: highschool_flashcard[0] });
    })
    .catch(console.error);
});

app.put("/teachers_flashcards/:id", (request, response) => {
  queries
    .update("teachers_flashcards", request.params.id, request.body)
    .then(teachers_flashcard => {
      response.json({ data: teachers_flashcard[0] });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
