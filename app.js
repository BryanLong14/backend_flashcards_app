const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");
const devMode = process.env.NODE_ENV !== "production";
const user = require("./users");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response, next) => {
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
    .catch(next);
});

app.get("/highschool_flashcards", (request, response, next) => {
  queries
    .list("highschool_flashcards")
    .then(highschool_flashcards => {
      response.json({ highschool_flashcards });
    })
    .catch(next);
});

app.get("/teachers_flashcards", (request, response, next) => {
  queries
    .list("teachers_flashcards")
    .then(teachers_flashcards => {
      response.json({ teachers_flashcards });
    })
    .catch(next);
});

app.get("/highschool_flashcards/:id", (request, response, next) => {
  queries
    .read("highschool_flashcards", request.params.id)
    .then(highschool_flashcard => {
      highschool_flashcard ? response.json({ highschool_flashcard }) : response.sendStatus(404);
    })
    .catch(next);
});

app.get("/teachers_flashcards/:id", (request, response, next) => {
  queries
    .read("teachers_flashcards", request.params.id)
    .then(teachers_flashcard => {
      teachers_flashcard ? response.json({ teachers_flashcard }) : response.sendStatus(404);
    })
    .catch(next);
});

app.post("/teachers_flashcards/", (request, response, next) => {
  queries
    .create("teachers_flashcards", request.body)
    .then(teachers_flashcard => {
      response.status(201).json({ data: teachers_flashcard });
    })
    .catch(next);
});

app.delete("/teachers_flashcards/:id", (request, response, next) => {
  queries
    .delete("teachers_flashcards", request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(next);
});

app.put("/teachers_flashcards/:id", (request, response, next) => {
  queries
    .update("teachers_flashcards", request.params.id, request.body)
    .then(teachers_flashcard => {
      response.json({ data: teachers_flashcard[0] });
    })
    .catch(next);
});

app.post("/user", (request, response, next) => {
  user
    .create(request.body.username)
    .then(data => {
      response.json({ data: data });
    })
    .catch(next);
});

app.get("/user", (request, response, next) => {
  user
    .list()
    .then(data => {
      response.json({ data: data });
    })
    .catch(next);
});

app.use(notFound);
app.use(errorHandler);

function notFound(req, res, next) {
  const url = req.originalUrl;
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    console.error("[404: Requested file not found] ", url);
    return res.status(200).send({ message: "url path not found" });
  }
  res.status(404).send({ error: "Url not found", status: 404, url });
}

function errorHandler(err, req, res, next) {
  console.error("ERROR", err);
  const stack = devMode ? err.stack : undefined;
  res.status(500).send({
    error: err.message,
    url: req.originalUrl,
    stack
  });
}

module.exports = app;
