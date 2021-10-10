const productRoutes = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/healthcheck", productRoutes.healthCheck);
    app.get("/api/product", productRoutes.getAllProduct);
    app.get("/api/product/:_id", productRoutes.getOneProduct);
    app.post("/api/product", productRoutes.createProduct);
}