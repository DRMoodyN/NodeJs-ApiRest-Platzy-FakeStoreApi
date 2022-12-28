
const axios = require('axios');
require("dotenv").config({ path: './.env' });

const intance = axios.create({
    baseURL: process.env.API_FAKE_PLATZY,
    timeout: 3000,
    Headers: {
        'Content-Type': 'application/json'
    }
});

const getAll = async (path) => await intance.get(path);

const post = async (path, create) => await intance.post(path, create);

const put = async (path, modific) => await intance.put(path, modific);

const deleteFisico = async (path) => await intance.delete(path);

module.exports = {
    getAll,
    post,
    put,
    deleteFisico
};

