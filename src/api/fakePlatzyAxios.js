const axios = require('axios');
require("dotenv").config({ path: './.env' });

const intance = axios.create({
    baseURL: process.env.API_FAKE_PLATZY,
    timeout: 3000,
    Headers: {
        'Content-Type': 'application/json'
    }
});

const Get = async (path) => {
    return await intance.get(path);
}

module.exports = {
    Get
}

