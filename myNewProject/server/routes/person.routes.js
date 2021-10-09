const personRoutes = require("../controllers/person.controller")

module.exports = (app) => {
    app.get("/api", personRoutes.index);
    app.post("/api/people", personRoutes.createPerson);
}