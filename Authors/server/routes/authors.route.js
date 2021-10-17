const { response, request } = require("express")
const authRoutes = require("../controllers/authors.controller")

module.exports = (app) => {
    app.get("/", authRoutes.healthCheck)
    app.get("/api/author", authRoutes.getAllAuthor);
    app.get("/api/author/:_id", authRoutes.getOneAuthor);
    app.post("/api/author", authRoutes.createAuthor);
    app.put("/api/author/:_id", authRoutes.updateExistingAuthor);
    app.delete("/api/author/:_id", authRoutes.deleteAnExistingAuthor)
}