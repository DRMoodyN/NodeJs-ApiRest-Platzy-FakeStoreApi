const express = require("express")
const category = require("../controllers/categoryController")
const validateHandler = require("../middleware/validateHandler")
const { Id, Create } = require('../schemas/categorySchema')

function routeCategoryApiV1(app) {
    const routes = express.Router()

    app.use("/api/v1", routes)

    routes.post("/categories/", validateHandler(Create, 'body'), category.create)
    routes.get("/categories/:id", validateHandler(Id, 'params'), category.getId)

    routes.put("/categories/:id"
        , validateHandler(Id, 'params')
        , validateHandler(Create, 'body')
        , category.update)

    routes.get("/categories", category.getAll);
    routes.get("/categories/:id/products", validateHandler(Id, 'params'), category.getIdCategoryProduct);
}

module.exports = routeCategoryApiV1