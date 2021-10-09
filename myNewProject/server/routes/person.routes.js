const personRoutes = require("../controllers/person.controller")

module.exports = (app) => {
    app.get("/api", personRoutes.index);
    app.get("/api/people", personRoutes.getAllPerson);
    app.get("/api/people/:_id", personRoutes.getOnePerson);
    app.post("/api/people", personRoutes.createPerson);
    app.put("/api/people/:_id", personRoutes.updateExistingPerson);
    app.delete("/api/people/:_id", personRoutes.deleteAnExistingPerson)
}