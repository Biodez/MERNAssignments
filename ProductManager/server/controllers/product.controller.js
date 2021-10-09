const { request, response } = require("express");
const productManager = require("../models/product.models");

const healthCheck = (request, response) => {
  response.send("Backend is healthy");
};

const createProduct = (request, response) => {
  const { body } = request;
  productManager
    .create(body)
    .then((createdProduct) => response.json({ product: createdProduct }))
    .catch((error) => {
      response.status(400).json({ message: `something went wrong ${error}` });
    });
};

module.exports = {
  healthCheck,
  createProduct,
};
