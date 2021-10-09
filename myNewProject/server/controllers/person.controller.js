const { response } = require("express");
const Person = require("../models/person.model")

const index = (request, response) => {
    response.json({
        message: "Hello world"
    })
}

const createPerson = (request, response) => {
    Person.create(request.body)
        .then((createdPerson) => response.json({person: createdPerson}))
        .catch((error) => {
            response.status(400).json({message: `something went wrong ${error}`})
        })
}


module.exports = {
    index,
    createPerson
}