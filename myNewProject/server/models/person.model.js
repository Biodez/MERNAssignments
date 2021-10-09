const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first name is required"],
        minlength: [3, "first name must have at least 3 characters long"]
    }, 
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        maxlength: [20, "Last name must be at least 6 characters long"]
      },
      age: {
        type: Number,
        min: [1, "You must be at least 1 or older to register"],
        max: [150, "You must be at most 149 years old to register"]
      },
      
      email: { type: String, required: [true, "Email is required"] }
    },
    
    { timestamps: true }
  );

const Person = mongoose.model("Person", PersonSchema);
module.exports = Person;