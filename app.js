const express = require('express')
require("dotenv").config({ path: './.env' });

const routeCategoryApiV1 = require("./src/routes/categoryRoute");
const routeProductApiV1 = require('./src/routes/productRoute');
const { handlerErrorGlobal } = require('./src/middleware/errorHandler');

// Setting
const app = express();

// Middleware
// Parseamos de forma global a json
app.use(express.json());

routeCategoryApiV1(app);
routeProductApiV1(app);

app.use(handlerErrorGlobal);

const PORT = process.env.PORT_SERVER || 5020;

app.listen(PORT, () => {
    console.log(`Servidor http://localhost:${PORT}/api/v1`);
});
