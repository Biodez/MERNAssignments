const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title of the product is required"]
    },

    price: {
        type: Number,
        required: [true, "the price of the product is required"]
    },

    description: {
        type: String,
        required: [true, "description of the product is required"]
    }
})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;