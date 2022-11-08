const express = require("express")
const product = require('../controllers/productController')
const validateHandler = require("../middleware/validateHandler")
const { Id, Create } = require('../schemas/productSchema')

function routeProductApiV1(app) {
    const routes = express.Router()

    app.use("/api/v1", routes)

    routes.get("/products", product.getAll)
    routes.get("/products/:id", validateHandler(Id, 'params'), product.getId)
    routes.post("/products/", validateHandler(Create, 'body'), product.create)
    routes.put("/products/:id", validateHandler(Id, 'params'), validateHandler(Create, 'body')
        , product.update)
    routes.delete("/products/:id", validateHandler(Id, 'params'), product.deleteId)
}

module.exports = routeProductApiV1

