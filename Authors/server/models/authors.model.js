const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required"],
      minlength: [3, "first name must have at least 3 characters long"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
      minlength: [3, "last name must have at least 3 characters long"],
    },
  },

  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
