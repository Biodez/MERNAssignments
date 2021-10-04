const mongoose = require("mongoose");

const jokesSchema = new mongoose.Schema({
  setup: String,
  punchline: String,
  createdAt: String,
  updatedAt: String,
  __v: Number,
});

const Jokes = mongoose.model("Jokes", jokesSchema);
module.exports = Jokes;
