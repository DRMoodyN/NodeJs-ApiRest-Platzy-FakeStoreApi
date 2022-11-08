const express = require('express')
const routeCategoryApiV1 = require("./src/routes/categoryRoute")
const routeProductApiV1 = require('./src/routes/productRoute')
const { env } = require("./src/configurations/env")
const { handlerErrorGlobal } = require('./src/middleware/errorHandler')


// Setting
const app = express()

// Middleware
// Parseamos de forma global a json
app.use(express.json())

routeCategoryApiV1(app)
routeProductApiV1(app)

app.use(handlerErrorGlobal)

app.listen(env.PORT, () => {
    console.log(`Servidor http://localhost:${env.PORT}/api/v1`)
})
