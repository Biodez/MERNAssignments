const { request, response } = require("express");
const Author = require("../models/authors.model");

const healthCheck = (request, response) => {
  response.json({ msg: "everything works" });
};

const createAuthor = (request, response) => {
  const { body } = request;
  Author.create(body)
    .then((createdAuthor) => response.json(createdAuthor))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const getAllAuthor = (_request, response) => {
  Author.find()
    .then((allAuthor) => response.json(allAuthor))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const getOneAuthor = (request, response) => {
  const { params } = request;
  Author.findOne({ _id: params._id })
    .then((oneAuthor) => response.json(oneAuthor))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const updateExistingAuthor = (request, response) => {
  const { params } = request;
  Author.findOneAndUpdate({ _id: params._id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updateAuthor) => response.json(updateAuthor))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const deleteAnExistingAuthor = (request, response) => {
  const { params } = request;
  Author.deleteOne({ _id: params._id })
    .then((deleteAuthor) => response.json(deleteAuthor))
    .catch((error) => {
      response.status(400).json(error);
    });
};

module.exports = {
  healthCheck,
  createAuthor,
  getAllAuthor,
  getOneAuthor,
  updateExistingAuthor,
  deleteAnExistingAuthor,
};
