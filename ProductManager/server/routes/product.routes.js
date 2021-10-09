const productRoutes = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/healthcheck", productRoutes.healthCheck);
    app.post("/api/product", productRoutes.createProduct);
}