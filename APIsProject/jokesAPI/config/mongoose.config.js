const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/jokes_assignment', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("mangoose is connected to local db"))
.catch(err => console.log("error connecting to local db", err));