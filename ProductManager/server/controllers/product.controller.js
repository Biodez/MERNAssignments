const { request, response } = require("express");
const productManager = require("../models/product.models");

const healthCheck = (request, response) => {
  response.send("Backend is healthy");
};

const createProduct = (request, response) => {
  const { body } = request;
  productManager
    .create(body)
    .then((createdProduct) => response.json(createdProduct))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const getAllProduct = (_request, response) => {
  productManager
    .find()
    .then((products) => response.json(products))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const getOneProduct = (request, response) => {
  const { params } = request;
  productManager
    .findOne({ _id: params._id })
    .then((products) => response.json(products))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const updateExistingProduct = (request, response) => {
  const { params } = request;
  productManager
    .findOneAndUpdate({ _id: params._id }, request.body, {
      new: true,
      runValidators: true,
    })
    .then((updatedProduct) => response.json(updatedProduct))
    .catch((error) => {
      response.status(400).json(error);
    });
};

const deleteAnExistingProduct = (request, response) => {
  const { params } = request;
  productManager
    .deleteOne({ _id: params._id })
    .then((deletedProduct) => response.json(deletedProduct))
    .catch((error) => {
      response.status(400).json(error);
    });
};

module.exports = {
  healthCheck,
  createProduct,
  getAllProduct,
  getOneProduct,
  updateExistingProduct,
  deleteAnExistingProduct,
};
