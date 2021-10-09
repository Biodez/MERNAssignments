const moongoose = require("mongoose");

moongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log(`something went wrong while connecting to the database ${err}`))