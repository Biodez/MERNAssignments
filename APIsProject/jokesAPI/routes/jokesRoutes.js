const jokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/healthcare", jokeController.healthCheck);
  app.get("/api/jokes", jokeController.getAllJokes);
  app.get("/api/jokes/:_id", jokeController.findOneJoke);
  app.post("/api/jokes", jokeController.addNewJoke);
  app.put("/api/jokes/:_id", jokeController.updateExistingJoke);
  app.delete("/api/jokes/:_id", jokeController.deleteAnExistingJoke);
};
