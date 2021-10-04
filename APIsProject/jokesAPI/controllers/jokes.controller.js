const { request, response } = require("express");
const jokeModel = require("../models/jokes.model");

const healthCheck = (request, response) => {
  response.send("this is setup correctly");
};

const getAllJokes = (request, response) => {
  jokeModel
    .find()
    .then((allJokes) => response.json({ jokes: allJokes }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};

const findOneJoke = (request, response) => {
  jokeModel
    .findOne({ _id: request.params.id })
    .then((oneSingleJoke) => response.json({ joke: oneSingleJoke }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};

const addNewJoke = (request, response) => {
  jokeModel
    .create(request.body)
    .then((newlyCreatedJoke) => response.json({ joke: newlyCreatedJoke }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};

const updateExistingJoke = (request, response) => {
  jokeModel
    .findOneAndUpdate({ _id: request.params.id }, request.body, {
      new: true,
      runValidators: true,
    })
    .then((updatedJoke) => response.json({ user: updatedJoke }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};

const deleteAnExistingJoke = (request, response) => {
  jokeModel
    .deleteOne({ _id: request.params.id })
    .then((result) => response.json({ result: result }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};

module.exports = {
  healthCheck,
  getAllJokes,
  addNewJoke,
  findOneJoke,
  updateExistingJoke,
  deleteAnExistingJoke,
};
