const { request, response } = require("express");
const { Error } = require("mongoose");
const Person = require("../models/person.model");

const index = (request, response) => {
  response.json({
    message: "Hello world",
  });
};

const createPerson = (request, response) => {
  const { body } = request;
  Person.create(body)
    .then((createdPerson) => response.json({ person: createdPerson }))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const getAllPerson = (_request, response) => {
  Person.find()
    .then((allPerson) => response.json({ Persons: allPerson }))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const getOnePerson = (request, response) => {
  const { params } = request;
  Person.findOne({ _id: params._id })
    .then((onePerson) => response.json({ person: onePerson }))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const updateExistingPerson = (request, response) => {
  const { params } = request;
  Person.findOneAndUpdate({ _id: params._id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPerson) => response.json({ person: updatedPerson }))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const deleteAnExistingPerson = (request, response) => {
  const { params } = request;
  Person.deleteOne({ _id: params._id })
    .then((deletedPerson) => response.json({ personDeleted: deletedPerson }))
    .catch((error) => {
      response.status(400).json(error);
    });
};

module.exports = {
  index,
  createPerson,
  getAllPerson,
  getOnePerson,
  updateExistingPerson,
  deleteAnExistingPerson,
};
