const express = require('express')
const routeCategoryApiV1 = require("./src/routes/categoryRoute")
const { env } = require("./src/configurations/env")
const { handlerErrorGlobal } = require('./src/middleware/errorHandler')

// Setting
const app = express()

// Middleware
// Parseamos de forma global a json
app.use(express.json())

routeCategoryApiV1(app)

app.use(handlerErrorGlobal)

app.listen(env.PORT, () => {
    console.log(`Servidor http://localhost:${env.PORT}/api/v1`)
})
